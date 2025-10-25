import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Range } from '../utils/diagnostics';
import { Symbol } from '../semantics/types';
import { AsirASTVisitor } from '../semantics/validator';

export enum SymbolKind {
    File = 1,
    Module = 2,
    Namespace = 3,
    Package = 4,
    Class = 5,
    Method = 6,
    Property = 7,
    Field = 8,
    Constructor = 9,
    Enum = 10,
    Interface = 11,
    Function = 12,
    Variable = 13,
    Constant = 14,
    String = 15,
    Number = 16,
    Boolean = 17,
    Array = 18,
    Object = 19,
    Key = 20,
    Null = 21,
    EnumMember = 22,
    Struct = 23,
    Event = 24,
    Operator = 25,
    TypeParameter = 26
}

export interface DocumentSymbol {
    name: string;
    detail?: string;
    kind: SymbolKind;
    range: Range;
    selectionRange: Range;
    children?: DocumentSymbol[];
}

/**
 * ファイル内のドキュメントシンボル（アウトライン）を生成します。
 * @param astNode プログラムのAST
 * @param symbolTable 構築済みのシンボルテーブル
 * @returns ドキュメントシンボルの配列
 */
export function getDocumentSymbols(
    astNode: ast.ProgramNode,
    symbolTable: SymbolTable
): DocumentSymbol[] {
    const documentSymbols: DocumentSymbol[] = [];

    class DocumentSymbolCollector extends AsirASTVisitor<void> {
        private currentSymbols: DocumentSymbol[] = documentSymbols;
        private symbolStack: DocumentSymbol[] = [];
        private symbolTable: SymbolTable; // Add this

        constructor(symbolTable: SymbolTable) { // Add constructor argument
            super();
            this.symbolTable = symbolTable; // Store it
        }

        // ヘルパー関数：ASTNodeのlocからRangeを作成
        private createRange(loc: ast.ASTNode['loc']): Range | undefined {
            if (!loc) return undefined;
            return {
                start: { line: loc.startLine, character: loc.startColumn },
                end: { line: (loc.endLine ?? loc.startLine), character: loc.endColumn ?? loc.startColumn + 1 }
            };
        }

        // シンボルを現在のスコープに追加
        private addSymbol(symbol: DocumentSymbol): void {
            if (this.symbolStack.length > 0) {
                const parent = this.symbolStack[this.symbolStack.length - 1];
                if (!parent.children) {
                    parent.children = [];
                }
                parent.children.push(symbol);
            } else {
                this.currentSymbols.push(symbol);
            }
        }

        // --- 各ASTノードの訪問メソッド --- 

        visitFunctionDefinition(node: ast.DefinitionStatementNode): void {
            if (node.name.loc) {
                const range = this.createRange(node.loc);
                const selectionRange = this.createRange(node.name.loc);
                if (range && selectionRange) {
                    const funcSymbol: DocumentSymbol = {
                        name: node.name.name,
                        kind: SymbolKind.Function,
                        range: range,
                        selectionRange: selectionRange,
                        children: [] // パラメータなどを子として追加する可能性
                    };
                    this.addSymbol(funcSymbol);
                    this.symbolStack.push(funcSymbol);
                    super.visitFunctionDefinition(node);
                    this.symbolStack.pop();
                }
            } else {
                super.visitFunctionDefinition(node);
            }
        }

        visitAssignmentExpression(node: ast.AssignmentExpressionNode): void {
            if (node.left.kind === 'Indeterminate' && node.left.loc) {
                const symbol = this.symbolTable.currentScope.lookup(node.left.name); // Use this.symbolTable
                if (symbol && symbol.definedAt) {
                    const range = this.createRange(node.loc);
                    const selectionRange = this.createRange(symbol.definedAt);
                    if (range && selectionRange) {
                        this.addSymbol({
                            name: node.left.name,
                            kind: SymbolKind.Variable,
                            range: range,
                            selectionRange: selectionRange,
                        });
                    }
                }
            }
            super.visitAssignmentExpression(node);
        }

        visitStructStatement(node: ast.StructStatementNode): void {
            if (node.name.loc) {
                const range = this.createRange(node.loc);
                const selectionRange = this.createRange(node.name.loc);
                if (range && selectionRange) {
                    const structSymbol: DocumentSymbol = {
                        name: node.name.name,
                        kind: SymbolKind.Struct,
                        range: range,
                        selectionRange: selectionRange,
                        children: []
                    };
                    this.addSymbol(structSymbol);
                    this.symbolStack.push(structSymbol);
                    super.visitStructStatement(node);
                    this.symbolStack.pop();
                }
            } else {
                super.visitStructStatement(node);
            }
        }

        visitModuleDeclaration(node: ast.ModuleDeclarationNode): void {
            if (node.name.loc) {
                const range = this.createRange(node.loc);
                const selectionRange = this.createRange(node.name.loc);
                if (range && selectionRange) {
                    const moduleSymbol: DocumentSymbol = {
                        name: node.name.name,
                        kind: SymbolKind.Module,
                        range: range,
                        selectionRange: selectionRange,
                        children: []
                    };
                    this.addSymbol(moduleSymbol);
                    this.symbolStack.push(moduleSymbol);
                    super.visitModuleDeclaration(node);
                    this.symbolStack.pop();
                }
            } else {
                super.visitModuleDeclaration(node);
            }
        }

        // TODO: 他の定義ノード（例: FormDeclaration, ModuleVariableDeclaration）も追加

        // デフォルトの訪問メソッドは子ノードを走査する
        visitProgram(node: ast.ProgramNode): void { super.visitProgram(node); }
        visitBlock(node: ast.BlockNode): void { super.visitBlock(node); }
        // ... 必要に応じて他のノードタイプを追加 ...
    }

    const collector = new DocumentSymbolCollector(symbolTable);
    collector.visit(astNode);

    return documentSymbols;
}
