import { CharStream, CommonTokenStream } from 'antlr4ng';
import { asirLexer } from './.antlr/asirLexer.js';
import { asirParser } from './.antlr/asirParser.js';
import { AsirASTBuilder } from './asirASTBuilder.js';
import { CustomErrorListener, SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from './customErrorListener.js';
import * as fs from 'fs';
import { ASTBuilderError } from './errors.js';
import * as ast from './asirAst.js';
import { Validator } from './semantics/validator.js';
import { Diagnostic, DiagnosticSeverity } from './diagnostics.js';
import { SymbolTable } from './semantics/symbolTable.js';
import { Command } from 'commander';

function parseAndBuildAST(code: string): { ast: ast.ProgramNode | null; syntaxErrors: SyntaxErrorInfo[]; ambiguities: AmbiguityInfo[]; otherDiagnostics: DiagnosticInfo[]; } {
    const chars = CharStream.fromString(code);
    const lexer = new asirLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new asirParser(tokens);

    parser.removeErrorListeners();
    const errorListener = new CustomErrorListener();
    parser.addErrorListener(errorListener);

    const tree = parser.prog();

    const syntaxErrors = errorListener.getErrors();
    const ambiguities = errorListener.getAmbiguities();
    const otherDiagnostics = errorListener.getDiagnostics();

    if (syntaxErrors.length > 0) {
        return { ast: null, syntaxErrors, ambiguities, otherDiagnostics };
    }

    const astBuilder = new AsirASTBuilder();
    try {
        const programNode = astBuilder.visit(tree) as ast.ProgramNode;
        return { ast: programNode, syntaxErrors: [], ambiguities, otherDiagnostics };
    } catch (e) {
        if (e instanceof ASTBuilderError) {
            // Convert ASTBuilderError to a SyntaxErrorInfo so it can be handled uniformly
            const errorInfo: SyntaxErrorInfo = {
                line: e.loc?.startLine ?? 0,
                column: e.loc?.startColumn ?? 0,
                endLine: e.loc?.endLine ?? e.loc?.startLine ?? 0,
                endColumn: e.loc?.endColumn ?? e.loc?.startColumn ?? 0, // endColumnを追加
                message: e.message,
                offendingSymbol: null,
                ruleStack: [],
            };
            return { ast: null, syntaxErrors: [errorInfo], ambiguities, otherDiagnostics };
        } else {
            console.error(`[FATAL] AST構築中に予期せぬエラーが発生しました: ${e}`);
            const errorInfo: SyntaxErrorInfo = { line: 1, column: 0, endLine: 1, endColumn: 1, message: `致命的なエラー: ${e}`, offendingSymbol: null, ruleStack: [] }; // endColumnを追加
            return { ast: null, syntaxErrors: [errorInfo], ambiguities, otherDiagnostics };
        }
    }
}

export function analyze(code: string): { ast: ast.ProgramNode | null, diagnostics: Diagnostic[], symbolTable: SymbolTable | null } {
    const { ast, syntaxErrors: SyntaxErrorInfos, ambiguities, otherDiagnostics } = parseAndBuildAST(code);

    const diagnostics: Diagnostic[] = SyntaxErrorInfos.map(e => ({
        severity: DiagnosticSeverity.Error,
        range: {
            start: { line: e.line - 1, character: e.column },
            end: { line: e.endLine - 1, character: e.endColumn }, 
        },
        message: e.message,
        source: 'Syntax',
    }));

    // AmbiguityInfoをDiagnosticに変換して追加
    ambiguities.forEach(a => {
        diagnostics.push({
            severity: DiagnosticSeverity.Information, // 曖昧性は情報レベル
            range: {
                start: { line: a.line - 1, character: a.column },
                end: { line: a.line - 1, character: a.column + 1 }, // 曖昧なシンボルの長さが不明なため、仮に1文字
            },
            message: a.message,
            source: 'Ambiguity',
        });
    });

    // DiagnosticInfoをDiagnosticに変換して追加
    otherDiagnostics.forEach(d => {
        diagnostics.push({
            severity: DiagnosticSeverity.Hint, // その他の診断はヒントレベル
            range: {
                start: { line: d.line - 1, character: d.column },
                end: { line: d.line - 1, character: d.column + 1 }, // 長さ不明のため仮に1文字
            },
            message: d.message,
            source: d.type === 'FullContext' ? 'FullContext' : 'ContextSensitivity',
        });
    });

    if (SyntaxErrorInfos.length > 0 || !ast) {
        return { ast: null, diagnostics, symbolTable: null };
    }

    const validator = new Validator(ast);
    const semanticErrors = validator.analyze(ast);

    diagnostics.push(...semanticErrors);

    return { ast, diagnostics, symbolTable: validator.symbolTable };
}

// --- Main execution for command-line ---
if (require.main === module) {
    const program = new Command();

    program
        .name('pasirser')
        .description('A static analyzer for Asir language.')
        .version('1.0.0') // package.jsonから取得するのが望ましい
        .argument('<file>', 'File to analyze')
        .option('-f, --format <type>', 'Output format (text or json)', 'text')
        .option('--min-severity <level>', '表示する診断の最小重要度 (error, warning, info, hint)', 'hint') // ← ここを追加
        .action((filePath, options) => {
            console.log(`Analyzing: ${filePath}`);
            try {
                const code = fs.readFileSync(filePath, 'utf-8');
                const { diagnostics } = analyze(code);

                // 最小重要度に基づいて診断をフィルタリング
                const severityLevels = {
                    'error': DiagnosticSeverity.Error,
                    'warning': DiagnosticSeverity.Warning,
                    'info': DiagnosticSeverity.Information,
                    'hint': DiagnosticSeverity.Hint,
                };
                const minSeverityLevelString = options.minSeverity.toLowerCase() as 'error' | 'warning' | 'info' | 'hint';
                const minSeverity = severityLevels[minSeverityLevelString] || DiagnosticSeverity.Hint;

                const filteredDiagnostics = diagnostics.filter(d => d.severity <= minSeverity);

                if (options.format === 'json') {
                    console.log(JSON.stringify(filteredDiagnostics, null, 2));
                } else {
                    if (filteredDiagnostics.length > 0) {
                        console.log('\n--- Diagnostics ---');
                        for (const d of filteredDiagnostics) {
                            console.log(`[${d.source}] L${d.range.start.line + 1}:C${d.range.start.character} - ${d.message} (Severity: ${DiagnosticSeverity[d.severity]})`);
                        }
                    } else {
                        console.log('No issues found.');
                    }
                }
            } catch (e) {
                console.error(`Error reading file: ${e}`);
                process.exit(1);
            }
        });

    program.parse(process.argv);
}
