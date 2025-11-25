import { CharStream, CommonTokenStream } from 'antlr4ng';
import { asirLexer } from '../../.antlr/asirLexer';
import { asirParser } from '../../.antlr/asirParser';
import { AsirASTBuilder } from '../ast/asirASTBuilder';
import { CustomErrorListener, SyntaxErrorInfo } from './customErrorListener';
import { ASTBuilderError } from '../../utils/errors';
import * as ast from '../ast/asirAst';
import { Diagnostic, DiagnosticSeverity } from '../../utils/diagnostics';

/**
 * Asirのソースコード文字列を解析し、AST（抽象構文木）と構文エラーを生成します。
 * @param code 解析するソースコード
 * @param filePathForErrors エラーメッセージに表示するファイルパス
 * @returns ASTと診断情報のオブジェクト
 */

export function parseAndBuildAST(code: string, filePathForErrors: string): { ast: ast.ProgramNode | null; diagnostics: Diagnostic[] } {
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

    const diagnostics: Diagnostic[] = syntaxErrors.map(e => ({
        severity: DiagnosticSeverity.Error,
        range: {
            start: { line: e.line, character: e.column },
            end: { line: e.endLine, character: e.endColumn },
        },
        message: e.message,
        source: 'Syntax',
        filePath: filePathForErrors,
    }));

    ambiguities.forEach(a => {
        diagnostics.push({
            severity: DiagnosticSeverity.Hint,
            range: { start: { line: a.line, character: a.column }, end: { line: a.line, character: a.column + 1 } },
            message: a.message,
            source: 'Ambiguity',
            filePath: filePathForErrors,
        });
    });

    otherDiagnostics.forEach(d => {
        diagnostics.push({
            severity: DiagnosticSeverity.Hint,
            range: { start: { line: d.line, character: d.column }, end: { line: d.line, character: d.column + 1 } },
            message: d.message,
            source: d.type === 'FullContext' ? 'FullContext' : 'ContextSensitivity',
            filePath: filePathForErrors,
        });
    });

    // if (syntaxErrors.length > 0) {
    //     return { ast: null, diagnostics };
    // }

    const astBuilder = new AsirASTBuilder();
    try {
        const result = astBuilder.visit(tree);
        if (result?.kind === 'Program') {
            return { ast: result as ast.ProgramNode, diagnostics };
        } else {
            diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: { start: { line: 1, character: 0 }, end: { line: 1, character: 1 } },
                message: (result as ast.ErrorNode).message || 'Failed to build AST: Unknown root node',
                source: 'AST Builder',
                filePath: filePathForErrors
            });
            return { ast: null, diagnostics };
        }
    } catch (e) {
        if (e instanceof ASTBuilderError) {
            const errorInfo: SyntaxErrorInfo = {
                line: e.loc?.start.line ?? 1,
                column: e.loc?.start.column ?? 0,
                endLine: e.loc?.end.line ?? e.loc?.start.line ?? 1,
                endColumn: e.loc?.end.column ?? e.loc?.start.column ?? 0,
                message: e.message,
                offendingSymbol: null,
                ruleStack: [],
            };
            diagnostics.push({
                severity: DiagnosticSeverity.Error,
                range: {
                    start: { line: errorInfo.line, character: errorInfo.column },
                    end: { line: errorInfo.endLine, character: errorInfo.endColumn },
                },
                message: errorInfo.message,
                source: 'AST Builder',
                filePath: filePathForErrors,
            });
            return { ast: null, diagnostics };
        } else {
            const fatalError: Diagnostic = {
                severity: DiagnosticSeverity.Error,
                range: { start: { line: 0, character: 0 }, end: { line: 0, character: 1 } },
                message: `致命的なエラー: ${e}`,
                source: 'Fatal',
                filePath: filePathForErrors,
            };
            return { ast: null, diagnostics: [fatalError] };
        }
    }
}
