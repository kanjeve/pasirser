import { ASTNode } from '../core/ast/asirAst.js';
import { Scope, Symbol } from './types.js';
import { Position } from '../utils/diagnostics.js';

export class SymbolTable {
    public currentScope: Scope;

    constructor(programNode: ASTNode) {
        this.currentScope = new Scope(programNode);
    }

    public enterScope(node: ASTNode): void {
        const newScope = new Scope(node, this.currentScope);
        this.currentScope.children.push(newScope);
        this.currentScope = newScope;
    }

    public exitScope(): void {
        if (this.currentScope.parent) {
            this.currentScope = this.currentScope.parent;
        }
    }

    public findScopeAt(position: Position): Scope {
        const rootScope = this.getRootScope();
        return this.findScopeRecursive(rootScope, position) || rootScope;
    }

    public getRootScope(): Scope {
        let scope = this.currentScope;
        while (scope.parent) {
            scope = scope.parent;
        }
        return scope;
    }

    private findScopeRecursive(scope: Scope, position: Position): Scope | null {
        for (const child of scope.children) {
            const found = this.findScopeRecursive(child, position);
            if (found) {
                return found;
            }
        }

        if (scope.node.loc) {
            const startLine = scope.node.loc.start.line;
            const startChar = scope.node.loc.start.column;
            const endLine = scope.node.loc.end.line;
            const endChar = scope.node.loc.end.column;

            if (position.line >= startLine && position.line <= endLine) {
                if (position.line === startLine && position.character < startChar) {
                    return null;
                }
                if (position.line === endLine && position.character > endChar) {
                    return null;
                }
                return scope;
            }
        }

        return null;
    }
    
    public getAllSymbols(): Symbol[] {
        const allSymbols: Map<string, Symbol> = new Map(); // Use Map to ensure uniqueness by name
        const visitedScopes: Set<Scope> = new Set();

        const collectSymbolsRecursive = (scope: Scope) => {
            if (visitedScopes.has(scope)) {
                return;
            }
            visitedScopes.add(scope);

            scope.symbols.forEach(symbol => {
                // Only add if not already present (e.g., from a parent scope)
                if (!allSymbols.has(symbol.name)) {
                    allSymbols.set(symbol.name, symbol);
                }
            });

            scope.children.forEach(childScope => {
                collectSymbolsRecursive(childScope);
            });
        };

        collectSymbolsRecursive(this.getRootScope());
        return Array.from(allSymbols.values());
    }
}
