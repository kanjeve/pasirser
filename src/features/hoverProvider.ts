import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol } from '../semantics/types';
import { typeToString } from '../semantics/utils/typeFormatter'

export interface HoverInfo {
    contents: string[];
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
    // 単語の特定
    const lineContent = code.split('\n')[position.line];
    if (!lineContent) { return undefined; }

    const wordRegex = /[a-zA-Z_@][a-zA-Z0-9_@]*/g;
    const wordsInLine = lineContent.matchAll(wordRegex);
    let targetWord: string | undefined;
    let wordStartChar: number | undefined;

    for (const match of wordsInLine) {
        if (match.index !== undefined) {
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
    
    // シンボルの検索
    const astPosition = { line: position.line + 1, character: position.character };
    let scope = symbolTable.findScopeAt(astPosition);
    let foundSymbol = scope ? scope.lookup(word) : undefined;

    if (!foundSymbol) {
        const rootScope = symbolTable.getRootScope();
        foundSymbol = rootScope.lookup(word);
    }

    // ホバー情報の構築
    if (foundSymbol) {
        try {
            const contents: string[] = [];
            const typeString = typeToString(foundSymbol.type);

            let codeBlock = '```asir\n';
            if (foundSymbol.type.kind === 'function' || foundSymbol.type.kind === 'overloaded_function') {
                let signature = typeString;
                if (typeString.startsWith('def ')) {
                    signature = `def ${foundSymbol.name}${typeString.substring(3)}`;
                }
                codeBlock += signature;
            } else {
                codeBlock += `${foundSymbol.name}: ${typeString}`;
            }
            codeBlock += '\n```';
            contents.push(codeBlock);

            let metaInfo = '';
            if (foundSymbol.definedAt) {
                metaInfo += `*Defined at line ${foundSymbol.definedAt.start.line}*`;
            } else {
                metaInfo += `*(Built-in or Predefined)*`;
            }
            contents.push(metaInfo);

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
