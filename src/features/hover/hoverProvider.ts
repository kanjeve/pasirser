import * as ast from '../../core/ast/asirAst';
import { SymbolTable } from '../../semantics/symbolTable';
import { Position } from '../../utils/diagnostics';
import { Scope, Symbol } from '../../semantics/types';
import { Validator } from '../../semantics/validator'; // typeToStringのためにインポート

export interface HoverInfo {
    contents: string; // 表示する情報（Markdown形式など）
    range?: { start: Position; end: Position }; // ホバーの対象範囲
}

/**
 * 指定された位置のシンボルに関するホバー情報を取得します。
 * @param code コード文字列
 * @param position カーソル位置
 * @param ast プログラムのAST
 * @param symbolTable 構築済みのシンボルテーブル
 * @returns ホバー情報、または見つからない場合は undefined
 */
export function getHoverInfo(
    code: string,
    position: Position,
    astNode: ast.ProgramNode,
    symbolTable: SymbolTable
): HoverInfo | undefined {
    // カーソル位置のASTノードを見つけるヘルパー関数が必要になる
    // 現状は簡易的に、カーソル位置のスコープ内のシンボルを検索する

    const scope = symbolTable.findScopeAt(position);
    if (!scope) {
        return undefined;
    }

    // カーソル位置の単語を特定する（簡易的な実装）
    const lineContent = code.split('\n')[position.line];
    if (!lineContent) { return undefined; }

    const wordMatch = lineContent.substring(0, position.character).match(/([a-zA-Z_][a-zA-Z0-9_]*)$/);
    if (!wordMatch) { return undefined; }

    const word = wordMatch[1];
    const wordStartChar = position.character - word.length;

    const symbol = scope.lookup(word);

    if (symbol) {
        // ValidatorのtypeToStringメソッドを利用するために、Validatorのインスタンスを一時的に作成
        // 本来はtypeToStringをユーティリティ関数として切り出すべき
        const validator = new Validator(astNode); // AST全体を渡す必要がある
        const typeString = validator.typeToString(symbol.type);

        let contents = `**${symbol.name}**
`;
        contents += `*Kind*: ${symbol.type.kind}
`;
        contents += `*Type*: ${typeString}
`;
        if (symbol.definedAt) {
            contents += `*Defined at*: L${symbol.definedAt.startLine}:C${symbol.definedAt.startColumn}
`;
        }

        return {
            contents: contents,
            range: {
                start: { line: position.line, character: wordStartChar },
                end: { line: position.line, character: position.character }
            }
        };
    }

    // 組み込み関数、定数、キーワードのホバー情報も提供可能
    // BUILTIN_SIGNATURES, BUILTIN_CONSTANTS, ASIR_KEYWORDS を参照

    return undefined;
}
