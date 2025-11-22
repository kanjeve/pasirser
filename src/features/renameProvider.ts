import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Position, Range } from '../utils/diagnostics';
import { Symbol } from '../semantics/types';
import { AsirASTVisitor } from '../semantics/validator';
import { getDefinitionLocation } from './definitionProvider'; // Reusing word identification logic

export interface TextEdit {
    range: Range;
    newText: string;
}

/**
 * 指定された位置のシンボルを新しい名前にリファクタリングするための編集を生成します。
 * 現在は単一ファイル内での名前変更のみをサポートします。
 * @param code コード文字列
 * @param position カーソル位置
 * @param newName 新しいシンボル名
 * @param astNode プログラムのAST
 * @param symbolTable 構築済みのシンボルテーブル
 * @param currentFilePath 現在のファイルのパス
 * @returns 適用すべきTextEditの配列、またはリファクタリングできない場合は undefined
 */
export function getRenameEdits(
    code: string,
    position: Position,
    newName: string,
    astNode: ast.ProgramNode,
    symbolTable: SymbolTable,
    currentFilePath: string
): TextEdit[] | undefined {
    // 1. カーソル位置のシンボルの定義を特定する
    // getDefinitionLocationのロジックを再利用して、シンボルと定義位置を取得
    const lineContent = code.split('\n')[position.line];
    if (!lineContent) { return undefined; }

    const wordsInLine = lineContent.matchAll(/[a-zA-Z_][a-zA-Z0-9_]*/g);
    let targetWord: string | undefined;
    let targetWordStartChar: number | undefined;
    let targetWordEndChar: number | undefined;

    for (const match of wordsInLine) {
        if (match.index !== undefined) {
            const startChar1Based = match.index + 1; // 1-based start character of the word
            const endChar1Based = match.index + match[0].length; // 1-based end character of the word (inclusive)

            // Check if the 1-based cursor position is within the 1-based word range
            if (position.character >= startChar1Based && position.character <= endChar1Based) {
                targetWord = match[0];
                targetWordStartChar = startChar1Based;
                targetWordEndChar = endChar1Based; // Store 1-based end char
                break;
            }
        }
    }

    if (!targetWord) { return undefined; }

    const astPosition = { line: position.line + 1, character: position.character };
    const scope = symbolTable.findScopeAt(astPosition);
    if (!scope) { return undefined; }

    const targetSymbol = scope.lookup(targetWord);

    if (!targetSymbol || !targetSymbol.definedAt) {
        return undefined; // シンボルが見つからないか、定義場所が不明
    }

    const edits: TextEdit[] = [];

    // 2. 定義場所の編集を追加
    // definedAtはASTNode['loc']なので、Rangeに変換
    const definitionRange: Range = {
        start: { line: targetSymbol.definedAt.start.line, character: targetSymbol.definedAt.start.column },
        end: { line: targetSymbol.definedAt.end.line, character: targetSymbol.definedAt.end.column }
    };
    edits.push({ range: definitionRange, newText: newName });

    // 3. ASTを走査して、現在のファイル内のすべての参照を見つける
    // ValidatorのASTVisitorを参考に、参照を収集するVisitorを作成
    class ReferenceCollector extends AsirASTVisitor<void> {
        private references: Range[] = [];
        private targetSymbol: Symbol;

        constructor(targetSymbol: Symbol) {
            super();
            this.targetSymbol = targetSymbol;
        }

        getReferences(): Range[] {
            const uniqueReferences: Range[] = [];
            const seen = new Set<string>();

            for (const ref of this.references) {
                const key = `${ref.start.line}:${ref.start.character}-${ref.end.line}:${ref.end.character}`;
                if (!seen.has(key)) {
                    uniqueReferences.push(ref);
                    seen.add(key);
                }
            }
            return uniqueReferences;
        }

        // IndeterminateNodeがシンボルを参照する主要な場所
        visitIndeterminate(node: ast.IndeterminateNode): void {
            if (node.resolvedSymbol && node.loc && this.targetSymbol.node) {
                // resolvedSymbolがターゲットシンボルと一致し、loc情報がある場合
                // オブジェクト同一性ではなく、名前と定義ASTノードで比較する
                if (node.resolvedSymbol.name === this.targetSymbol.name &&
                    node.resolvedSymbol.node === this.targetSymbol.node) {
                    this.references.push({
                        start: { line: node.loc.start.line, character: node.loc.start.column },
                        end: { line: node.loc.end.line, character: node.loc.end.column }
                    });
                }
            }
            super.visitIndeterminate(node);
        }

        // QualifiedNameNode (例: module.func) の関数名部分も参照になりうる
        visitQualifiedName(node: ast.QualifiedNameNode): void {
            if (node.functionName.resolvedSymbol && node.functionName.loc && this.targetSymbol.node) { // Ensure targetSymbol.node exists
                // オブジェクト同一性ではなく、名前と定義ASTノードで比較する
                if (node.functionName.resolvedSymbol.name === this.targetSymbol.name &&
                    node.functionName.resolvedSymbol.node === this.targetSymbol.node) { // ASTNodeオブジェクトを比較
                    this.references.push({
                        start: { line: node.functionName.loc.start.line, character: node.functionName.loc.start.column },
                        end: { line: node.functionName.loc.end.line, character: node.functionName.loc.end.column }
                    });
                }
            }
            super.visitQualifiedName(node);
        }

        // 他にもシンボルを参照する可能性のあるノードがあればここに追加
        // 例: MemberAccessNodeのメンバー部分など
    }

    const collector = new ReferenceCollector(targetSymbol);
    collector.visit(astNode);

    // 収集した参照の編集を追加
    for (const refRange of collector.getReferences()) {
        // 定義場所と参照場所が重複しないように注意が必要だが、
        // ここでは単純にすべて追加し、後で重複排除やマージを検討する
        // ただし、定義場所は既にeditsに追加されているため、ここでは参照のみを追加する
        // 定義場所と参照場所が同じRangeを持つ場合があるため、重複を避けるためにフィルタリングが必要
        const isDefinitionLocation = refRange.start.line === definitionRange.start.line &&
                                     refRange.start.character === definitionRange.start.character;
        if (!isDefinitionLocation) {
            edits.push({ range: refRange, newText: newName });
        }
    }

    return edits;
}
