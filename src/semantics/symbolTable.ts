import { ASTNode } from '../asirAst.js';
import { Scope } from './types.js';
import { Position } from '../diagnostics.js';

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
            const startLine = scope.node.loc.startLine - 1;
            const startChar = scope.node.loc.startColumn;
            const endLine = (scope.node.loc.endLine ?? scope.node.loc.startLine) - 1;
            const endChar = scope.node.loc.endColumn ?? 0;

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
}
