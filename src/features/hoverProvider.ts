import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol } from '../semantics/types';
import { Validator } from '../semantics/validator'; // typeToStringのためにインポート

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
    const lineContent = code.split('\n')[position.line - 1];
    if (!lineContent) { return undefined; }

    // Find the word that contains the character at position.character
    const wordsInLine = lineContent.matchAll(/[a-zA-Z_][a-zA-Z0-9_]*/g);
    let targetWord: string | undefined;
    let wordStartChar: number | undefined;

    for (const match of wordsInLine) {
        if (match.index !== undefined) {
            const start = match.index;
            const end = match.index + match[0].length;
            const startChar1Based = match.index + 1; // 1-based start character of the word
            const endChar1Based = match.index + match[0].length; // 1-based end character of the word (inclusive)

            // Check if the 1-based cursor position is within the 1-based word range
            if (position.character >= startChar1Based && position.character <= endChar1Based) {
                targetWord = match[0];
                wordStartChar = startChar1Based;
                break;
            }
        }
    }

    if (!targetWord) { return undefined; }
    const word = targetWord;
    
    if (!scope) { return undefined; }

    const foundSymbol = scope.lookup(word);

    if (foundSymbol) {
        try {
            // ValidatorのtypeToStringメソッドを利用するために、Validatorのインスタンスを一時的に作成
            // 本来はtypeToStringをユーティリティ関数として切り出すべき
            const validator = new Validator(astNode); // AST全体を渡す必要がある
            const typeString = validator.typeToString(foundSymbol.type);

            let contents = `**${foundSymbol.name}**\n`;
            contents += `*Kind*: ${foundSymbol.type.kind}\n`;
            contents += `*Type*: ${typeString}\n`;
            if (foundSymbol.definedAt) {
                contents += `*Defined at*: L${foundSymbol.definedAt.startLine}:C${foundSymbol.definedAt.startColumn}\n`;
            }

            return {
                contents: contents,
                range: {
                    start: { line: position.line, character: wordStartChar! },
                    end: { line: position.line, character: wordStartChar! + word.length - 1 }
                }
            };
        } catch (e) {
            console.error(`[getHoverInfo] Error generating hover info for symbol '${foundSymbol.name}':`, e);
            return undefined;
        }
    }
    
    // 組み込み関数、定数、キーワードのホバー情報も提供可能
    // BUILTIN_SIGNATURES, BUILTIN_CONSTANTS, ASIR_KEYWORDS を参照

    return undefined;
}
