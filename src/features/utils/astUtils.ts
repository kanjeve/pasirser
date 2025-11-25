import * as ast from '../../core/ast/asirAst';
import { Position } from '../../utils/diagnostics';

/**
 * カーソル位置にある最深のノードを探す
 */
export function findNodeAtPosition(node: ast.ASTNode, position: Position): ast.ASTNode | undefined {
    if (!node.loc) return undefined;

    const startLine = node.loc.start.line - 1; // AST is 1-based
    const endLine = node.loc.end.line - 1;

    if (position.line < startLine || position.line > endLine) return undefined;

    if (position.line === startLine && position.character < node.loc.start.column) return undefined;
    if (position.line === endLine && position.character > node.loc.end.column) return undefined;

    for (const key in node) {
        if (key === 'loc' || key === 'kind') continue;
        const child = (node as any)[key];

        if (Array.isArray(child)) {
            for (const c of child) {
                if (c && typeof c.kind === 'string') {
                    const found = findNodeAtPosition(c, position);
                    if (found) return found;
                }
            }
        } else if (child && typeof child.kind === 'string') {
            const found = findNodeAtPosition(child, position);
            if (found) return found;
        }
    }
    return node;
}

/**
 * ノードの親をたどって特定の型を探す (FunctionCallを探すため)
 * ※ 現在のASTは親ポインタを持っていないため、Visitorで親スタックを管理するか、
 * findNodeAtPosition でスタックを返すように修正する必要がある。
 * 今は簡易的に「findNodeWithStack」で。
 */
export function findNodeStackAtPosition(node: ast.ASTNode, position: Position, stack: ast.ASTNode[] = []): ast.ASTNode[] {
    if (!node.loc) return [];

    const startLine = node.loc.start.line - 1;
    const endLine = node.loc.end.line - 1;
    
    if (position.line < startLine || position.line > endLine) return [];
    if (position.line === startLine && position.character < node.loc.start.column) return [];
    if (position.line === endLine && position.character > node.loc.end.column) return [];

    stack.push(node);

    for (const key in node) {
        if (key === 'loc' || key === 'kind') continue;
        const child = (node as any)[key];

        if (Array.isArray(child)) {
            for (const c of child) {
                if (c && typeof c.kind === 'string') {
                    const res = findNodeStackAtPosition(c, position, [...stack]);
                    if (res.length > 0) return res;
                }
            }
        } else if (child && typeof child.kind === 'string') {
            const res = findNodeStackAtPosition(child, position, [...stack]);
            if (res.length > 0) return res;
        }
    }

    return stack;
}