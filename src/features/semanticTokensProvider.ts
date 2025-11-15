import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { AsirASTVisitor } from '../semantics/validator';
import { ALL_ASIR_BUILTIN } from '../data/builtins';
import { BUILTIN_CATEGORIES, BuiltinFunctionCategory } from '../data/builtinCategories';

export enum SemanticTokenTypes {
    struct,
    module,
    parameter,
    variable,
    property,
    function, // 5 (original)
    macro,
    keyword,
    comment,
    string,
    number,
    operator,
    builtinFunction_keyword,
    formFunction,
    builtinFunction_default, // 14 (original)
}

export enum SemanticTokenModifiers {
    declaration,
    definition,
    readonly,
    static,
    documentation,
}

export interface SemanticToken {
    line: number;
    character: number;
    length: number;
    tokenType: number;
    tokenModifiers: number;
}

export function getSemanticTokens(
    astNode: ast.ProgramNode,
    symbolTable: SymbolTable
): SemanticToken[] {
    const tokens: SemanticToken[] = [];
    const visitor = new class extends AsirASTVisitor<void> {
        addToken(node: ast.ASTNode, type: SemanticTokenTypes, modifiers: SemanticTokenModifiers[] = []) {
            if (!node.loc) return;

            const line = node.loc.startLine;
            const character = node.loc.startColumn;
            const length = (node.loc.endColumn ?? character) - character;

            if (length <= 0) return;

            let modifierMask = 0;
            for (const modifier of modifiers) {
                modifierMask |= (1 << modifier);
            }

            tokens.push({
                line,
                character,
                length,
                tokenType: type,
                tokenModifiers: modifierMask,
            });
        }

        visitIndeterminate(node: ast.IndeterminateNode): void {
            console.log(`Visiting Indeterminate: ${node.name}, resolvedSymbol: ${node.resolvedSymbol ? 'present' : 'absent'}`);
            if (node.resolvedSymbol && node.loc) {
                const symbol = node.resolvedSymbol;
                let type: SemanticTokenTypes;

                switch (symbol.type.kind) {
                    case 'function':
                    case 'overloaded_function':
                        if (ALL_ASIR_BUILTIN.includes(symbol.name)) {
                            const category = BUILTIN_CATEGORIES.get(symbol.name);
                            switch (category) {
                                case BuiltinFunctionCategory.Keyword:
                                    type = SemanticTokenTypes.builtinFunction_keyword;
                                    break;
                                case BuiltinFunctionCategory.Form:
                                    type = SemanticTokenTypes.formFunction;
                                    break;
                                default:
                                    type = SemanticTokenTypes.builtinFunction_default;
                                    break;
                            }
                        } else {
                            type = SemanticTokenTypes.function;
                        }
                        break;
                    case 'struct':
                        type = SemanticTokenTypes.struct;
                        break;
                    case 'module':
                        type = SemanticTokenTypes.module;
                        break;
                    case 'primitive':
                        if (symbol.type.name === 'parameter') {
                            if (symbol.isFunctionArgument) {
                                type = SemanticTokenTypes.parameter;
                            } else {
                                type = SemanticTokenTypes.variable;
                            }
                        } else {
                            type = SemanticTokenTypes.variable;
                        }
                        break;
                    default:
                        type = SemanticTokenTypes.variable;
                        break;
                }
                this.addToken(node, type);
            }
        }

        visitFunctionDefinition(node: ast.DefinitionStatementNode): void {
            this.addToken(node.name, SemanticTokenTypes.function, [SemanticTokenModifiers.definition]);
            // Explicitly add tokens for parameters in the definition
            node.parameters.forEach(param => {
                this.addToken(param, SemanticTokenTypes.parameter, [SemanticTokenModifiers.declaration]);
            });
            this.visitChildren(node);
        }

        visitStructStatement(node: ast.StructStatementNode): void {
            this.addToken(node.name, SemanticTokenTypes.struct, [SemanticTokenModifiers.definition]);
            node.members.forEach(member => {
                this.addToken(member, SemanticTokenTypes.property);
            });
            this.visitChildren(node);
        }

        visitModuleDeclaration(node: ast.ModuleDeclarationNode): void {
            this.addToken(node.name, SemanticTokenTypes.module);
            this.visitChildren(node);
        }

        visitPreprocessorDefine(node: ast.PreprocessorDefineNode): void {
            this.addToken(node.name, SemanticTokenTypes.macro);
            this.visitChildren(node);
        }

        visitFormDeclaration(node: ast.FormDeclarationNode): void {
            this.addToken(node.name, SemanticTokenTypes.formFunction, [SemanticTokenModifiers.declaration]); // Use new name
            this.visitChildren(node);
        }

        visitNumberLiteral(node: ast.NumberLiteralNode): void {
            this.addToken(node, SemanticTokenTypes.number);
        }

        visitStringLiteral(node: ast.StringLiteralNode): void {
            this.addToken(node, SemanticTokenTypes.string);
        }

        visitMemberAccess(node: ast.MemberAccessNode): void {
            this.visit(node.base);
            node.members.forEach(member => {
                this.addToken(member, SemanticTokenTypes.property);
            });
        }
    };
    visitor.visit(astNode);
    return tokens;
}
