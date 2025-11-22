import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol } from '../semantics/types';
import { typeToString } from '../semantics/utils/typeFormatter'

export interface HoverInfo {
    contents: string;
    range?: { start: Position; end: Position };
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
            const startChar = match.index;
            const endChar = match.index + match[0].length;

            if (position.character >= startChar && position.character <= endChar) {
                targetWord = match[0];
                wordStartChar = startChar;
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
            const typeString = typeToString(foundSymbol.type);

            let contents = `**${foundSymbol.name}**\n`;
            contents += `*Kind*: ${foundSymbol.type.kind}\n`;
            contents += `*Type*: ${typeString}\n`;
            if (foundSymbol.definedAt) {
                contents += `*Defined at*: L${foundSymbol.definedAt.start.line}:C${foundSymbol.definedAt.start.column}\n`;
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
    return undefined;
}
