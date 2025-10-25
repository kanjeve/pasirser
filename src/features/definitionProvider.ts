import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Position } from '../utils/diagnostics';
import { Symbol } from '../semantics/types';

// DefinitionLocationはASTNodeのloc情報にファイルパスを追加したもの
export interface DefinitionLocation {
    filePath: string;
    startLine: number;
    startColumn: number;
    endLine?: number;
    endColumn?: number;
}

/**
 * 指定された位置のシンボルの定義場所を取得します。
 * @param code コード文字列 (シンボル特定のために使用)
 * @param position カーソル位置
 * @param astNode プログラムのAST
 * @param symbolTable 構築済みのシンボルテーブル
 * @param currentFilePath 現在のファイルのパス (定義場所のfilePathとして使用)
 * @returns 定義場所、または見つからない場合は undefined
 */
export function getDefinitionLocation(
    code: string,
    position: Position,
    astNode: ast.ProgramNode,
    symbolTable: SymbolTable,
    currentFilePath: string // 定義場所のファイルパスとして必要
): DefinitionLocation | undefined {
    // hoverProvider.ts と同様に、カーソル位置の単語を特定する
    const lineContent = code.split('\n')[position.line - 1];
    if (!lineContent) { return undefined; }

    // Find the word that contains the character at position.character
    const wordsInLine = lineContent.matchAll(/[a-zA-Z_][a-zA-Z0-9_]*/g);
    let targetWord: string | undefined;

    for (const match of wordsInLine) {
        if (match.index !== undefined) {
            const startChar1Based = match.index + 1; // 1-based start character of the word
            const endChar1Based = match.index + match[0].length; // 1-based end character of the word (inclusive)

            // Check if the 1-based cursor position is within the 1-based word range
            if (position.character >= startChar1Based && position.character <= endChar1Based) {
                targetWord = match[0];
                break;
            }
        }
    }

    if (!targetWord) { return undefined; }
    const word = targetWord;
    // const wordStartChar = position.character - word.length; // 現在は未使用だが、範囲特定に使える

    // カーソル位置のスコープを見つけ、シンボルをルックアップする
    const scope = symbolTable.findScopeAt(position);
    if (!scope) {
        return undefined;
    }

    const symbol = scope.lookup(word);

    if (symbol && symbol.definedAt) {
        // symbol.definedAt は ASTNode['loc'] の型を持つ
        // これに現在のファイルパスを追加して DefinitionLocation を構築する
        return {
            filePath: currentFilePath, // 現時点では同じファイル内での定義を想定
            startLine: symbol.definedAt.startLine,
            startColumn: symbol.definedAt.startColumn,
            endLine: symbol.definedAt.endLine,
            endColumn: symbol.definedAt.endColumn,
        };
    }

    return undefined;
}
