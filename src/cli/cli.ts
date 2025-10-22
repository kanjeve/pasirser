import { CharStream, CommonTokenStream } from 'antlr4ng';
import { asirLexer } from '../.antlr/asirLexer.js';
import { asirParser } from '../.antlr/asirParser.js';
import { AsirASTBuilder } from '../core/ast/asirASTBuilder.js';
import { CustomErrorListener, SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from '../core/parser/customErrorListener.js';
import * as fs from 'fs';
import { ASTBuilderError } from '../utils/errors.js';
import * as ast from '../core/ast/asirAst.js';
import { Validator } from '../semantics/validator.js';
import { Diagnostic, DiagnosticSeverity } from '../utils/diagnostics.js';
import { SymbolTable } from '../semantics/symbolTable.js';
import { Command } from 'commander'; // commanderをインポート
import { AsirFormatter } from '../features/formatter.js'; // AsirFormatterをインポート
import { getCompletions } from '../features/completionProvider.js'; // getCompletionsをインポート
import { getHoverInfo } from '../features/hover/hoverProvider.js'; 

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

    program.command('analyze <file>')
        .description('Analyze an Asir file for diagnostics.')
        .option('-f, --format <type>', 'Output format (text or json)', 'text')
        .option('--min-severity <level>', '表示する診断の最小重要度 (error, warning, info, hint)', 'hint')
        .action((filePath, options) => {
            console.log(`Analyzing: ${filePath}`);
            try {
                const code = fs.readFileSync(filePath, 'utf-8');
                const { diagnostics } = analyze(code);

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

    program.command('format <file>')
        .description('Format an Asir file.')
        .action((filePath) => {
            console.log(`Formatting: ${filePath}`);
            try {
                const code = fs.readFileSync(filePath, 'utf-8');
                const { ast, syntaxErrors } = parseAndBuildAST(code);

                if (syntaxErrors.length > 0 || !ast) {
                    console.error('Formatting failed due to syntax errors:');
                    syntaxErrors.forEach(e => {
                        console.error(`L${e.line}:C${e.column} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const formatter = new AsirFormatter();
                const formattedCode = formatter.format(ast);
                console.log(formattedCode);

            } catch (e) {
                console.error(`Error formatting file: ${e}`);
                process.exit(1);
            }
        });

    program.command('complete <file> <line> <character>')
        .description('Provide code completion suggestions for an Asir file.')
        .action((filePath, lineStr, charStr) => {
            console.log(`Getting completions for: ${filePath} at L${lineStr}:C${charStr}`);
            try {
                const code = fs.readFileSync(filePath, 'utf-8');
                const line = parseInt(lineStr, 10);
                const character = parseInt(charStr, 10);

                const { ast, syntaxErrors } = parseAndBuildAST(code);

                if (syntaxErrors.length > 0 || !ast) {
                    console.error('Completion failed due to syntax errors:');
                    syntaxErrors.forEach(e => {
                        console.error(`L${e.line}:C${e.column} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const symbolTable = new SymbolTable(ast);
                const completions = getCompletions(code, { line, character }, ast, symbolTable);
                console.log(JSON.stringify(completions, null, 2));

            } catch (e) {
                console.error(`Error getting completions: ${e}`);
                process.exit(1);
            }
        });

    program.command('hover <file> <line> <character>')
        .description('Provide hover information for a symbol in an Asir file.')
        .action((filePath, lineStr, charStr) => {
            console.log(`Getting hover info for: ${filePath} at L${lineStr}:C${charStr}`);
            try {
                const code = fs.readFileSync(filePath, 'utf-8');
                const line = parseInt(lineStr, 10);
                const character = parseInt(charStr, 10);

                const { ast, syntaxErrors } = parseAndBuildAST(code);

                if (syntaxErrors.length > 0 || !ast) {
                    console.error('Hover failed due to syntax errors:');
                    syntaxErrors.forEach(e => {
                        console.error(`L${e.line}:C${e.column} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const symbolTable = new SymbolTable(ast);
                const hoverInfo = getHoverInfo(code, { line, character }, ast, symbolTable);
                console.log(JSON.stringify(hoverInfo, null, 2));

            } catch (e) {
                console.error(`Error getting hover info: ${e}`);
                process.exit(1);
            }
        });

    program.parse(process.argv);
}
