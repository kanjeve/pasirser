import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { Range } from '../utils/diagnostics';
import { Symbol } from '../semantics/types';
import { AsirASTVisitor } from '../semantics/validator';

export enum SemanticTokenTypes {
    Namespace = 'namespace',
    Type = 'type',
    Class = 'class',
    Enum = 'enum',
    Interface = 'interface',
    Struct = 'struct',
    TypeParameter = 'typeParameter',
    Module = 'module', // Add Module
    Parameter = 'parameter',
    Variable = 'variable',
    Property = 'property',
    EnumMember = 'enumMember',
    Event = 'event',
    Function = 'function',
    Method = 'method',
    Macro = 'macro',
    Keyword = 'keyword',
    Modifier = 'modifier',
    Comment = 'comment',
    String = 'string',
    Number = 'number',
    Regexp = 'regexp',
    Operator = 'operator',
    Decorator = 'decorator'
}

export enum SemanticTokenModifiers {
    Declaration = 'declaration',
    Definition = 'definition',
    Readonly = 'readonly',
    Static = 'static',
    Deprecated = 'deprecated',
    Abstract = 'abstract',
    Async = 'async',
    Modification = 'modification',
    Documentation = 'documentation',
    DefaultLibrary = 'defaultLibrary'
}

export interface SemanticToken {
    range: Range;
    type: SemanticTokenTypes;
    modifiers?: SemanticTokenModifiers[];
}

/**
 * ファイル内のセマンティックトークンを生成します。
 * @param astNode プログラムのAST
 * @param symbolTable 構築済みのシンボルテーブル
 * @returns セマンティックトークンの配列
 */
export function getSemanticTokens(
    astNode: ast.ProgramNode,
    symbolTable: SymbolTable
): SemanticToken[] {
    const semanticTokens: SemanticToken[] = [];

    class SemanticTokenCollector extends AsirASTVisitor<void> {
        private createRange(loc: ast.ASTNode['loc']): Range | undefined {
            if (!loc) return undefined;
            return {
                start: { line: loc.startLine, character: loc.startColumn },
                end: { line: (loc.endLine ?? loc.startLine), character: loc.endColumn ?? loc.startColumn + 1 }
            };
        }

        private addToken(range: Range, type: SemanticTokenTypes, modifiers?: SemanticTokenModifiers[]): void {
            semanticTokens.push({ range, type, modifiers });
        }

        visitIndeterminate(node: ast.IndeterminateNode): void {
            console.log(`[SemanticTokenCollector] Visiting IndeterminateNode: ${node.name} at L${node.loc?.startLine}:C${node.loc?.startColumn}`);
            if (node.resolvedSymbol && node.loc) {
                const range = this.createRange(node.loc);
                if (range) {
                    // --- TEMPORARY SIMPLIFICATION ---
                    this.addToken(range, SemanticTokenTypes.Variable, [SemanticTokenModifiers.Definition]); // Always add as variable, with definition modifier
                    // --- END TEMPORARY SIMPLIFICATION ---
                }
            }
            super.visitIndeterminate(node);
        }

        // Override visitFunctionDefinition to explicitly visit the function name
        visitFunctionDefinition(node: ast.DefinitionStatementNode): void {
            if (node.name) {
                this.visit(node.name); // Visit the IndeterminateNode for the function name
            }
            super.visitFunctionDefinition(node); // Continue visiting children (parameters, body)
        }

        // Override visitAssignmentExpression to explicitly visit the left-hand side
        visitAssignmentExpression(node: ast.AssignmentExpressionNode): void {
            if (node.left.kind === 'Indeterminate') {
                this.visit(node.left); // Visit the IndeterminateNode for the variable name
            }
            super.visitAssignmentExpression(node); // Continue visiting children (right-hand side)
        }
    }
    const collector = new SemanticTokenCollector();
    collector.visit(astNode);

    return semanticTokens;
}
