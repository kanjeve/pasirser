import { CharStream, CommonTokenStream } from 'antlr4ng';
import { testLexer } from './.antlr/testLexer.js';
import { testParser } from './.antlr/testParser.js';
import { AsirASTBuilder } from './testAsirASTBuilder.js';
import { CustomErrorListener, SyntaxErrorInfo } from './customErrorListener.js';
import * as fs from 'fs';
import { ASTBuilderError } from './errors.js';
import * as ast from './testAst.js';
import { Validator } from './semantics/validator.js';
import { Diagnostic, DiagnosticSeverity } from './diagnostics.js';
import { SymbolTable } from './semantics/symbolTable.js';

function parseAndBuildAST(code: string): { ast: ast.ProgramNode | null; syntaxErrors: SyntaxErrorInfo[] } {
    const chars = CharStream.fromString(code);
    const lexer = new testLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new testParser(tokens);

    parser.removeErrorListeners();
    const errorListener = new CustomErrorListener();
    parser.addErrorListener(errorListener);

    const tree = parser.prog();

    const syntaxErrors = errorListener.getErrors();
    if (syntaxErrors.length > 0) {
        return { ast: null, syntaxErrors };
    }

    const astBuilder = new AsirASTBuilder();
    try {
        const programNode = astBuilder.visit(tree) as ast.ProgramNode;
        return { ast: programNode, syntaxErrors: [] };
    } catch (e) {
        if (e instanceof ASTBuilderError) {
            // Convert ASTBuilderError to a SyntaxErrorInfo so it can be handled uniformly
            const errorInfo: SyntaxErrorInfo = {
                line: e.loc?.startLine ?? 0,
                column: e.loc?.startColumn ?? 0,
                endLine: e.loc?.endLine ?? e.loc?.startLine ?? 0,
                message: e.message,
                offendingSymbol: null,
                ruleStack: [],
            };
            return { ast: null, syntaxErrors: [errorInfo] };
        } else {
            console.error(`[FATAL] AST構築中に予期せぬエラーが発生しました: ${e}`);
            const errorInfo: SyntaxErrorInfo = { line: 1, column: 0, endLine: 1, message: `致命的なエラー: ${e}`, offendingSymbol: null, ruleStack: [] };
            return { ast: null, syntaxErrors: [errorInfo] };
        }
    }
}

export function analyze(code: string): { ast: ast.ProgramNode | null, diagnostics: Diagnostic[], symbolTable: SymbolTable | null } {
    const { ast, syntaxErrors: SyntaxErrorInfos} = parseAndBuildAST(code);

    const diagnostics: Diagnostic[] = SyntaxErrorInfos.map(e => ({
        severity: DiagnosticSeverity.Error,
        range: {
            start: { line: e.line - 1, character: e.column },
            end: { line: e.line - 1, character: e.column + (e.offendingSymbol?.length ?? 1) },
        },
        message: e.message,
        source: 'Syntax',
    }));

    if (SyntaxErrorInfos.length > 0 || !ast) {
        return { ast: null, diagnostics, symbolTable: null };
    }

    const validator = new Validator(ast);
    const semanticErrors = validator.analyze(ast);

    diagnostics.push(...semanticErrors);

    return { ast, diagnostics, symbolTable: validator.symbolTable };
}

// --- Main execution for command-line testing ---
if (require.main === module) {
    const inputFile = process.argv[2] || 'input.txt';
    console.log(`Reading from: ${inputFile}`);

    try {
        const code = fs.readFileSync(inputFile, 'utf-8');
        const { ast, diagnostics } = analyze(code);

        if (diagnostics.length > 0) {
            console.log('\n--- Diagnostics ---');
            for (const d of diagnostics) {
                console.log(`[${d.source}] L${d.range.start.line + 1}:C${d.range.start.character} - ${d.message} (Severity: ${d.severity})`);
            }
        }

        if (ast) {
            // console.log('\n--- Constructed AST ---');
            // console.log(JSON.stringify(ast, null, 2));
        }

    } catch (e) {
        console.error(`Error reading file: ${e}`);
    }
}
