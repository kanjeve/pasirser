import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from '../data/builtins';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol } from '../semantics/types'; // ScopeとSymbolをインポート

export interface CompletionItem {
    label: string;
    kind: 'function' | 'variable' | 'keyword' | 'constant' | 'module' | 'struct' | 'type';
    detail?: string;
    documentation?: string;
}

export function getCompletions(
    code: string,
    position: Position,
    ast: ast.ProgramNode,
    symbolTable: SymbolTable
): CompletionItem[] {
    const completions: CompletionItem[] = [];

    // 1. 現在のスコープ内のシンボルを収集
    const scope = symbolTable.findScopeAt(position);
    let currentScope: Scope | null = scope;
    while (currentScope) {
        currentScope.symbols.forEach(symbol => {
            completions.push({
                label: symbol.name,
                kind: symbol.type.kind === 'function' || symbol.type.kind === 'overloaded_function' ? 'function' : 'variable',
                detail: `(${symbol.type.kind}) ${symbol.name}`,
                documentation: symbol.definedAt ? `Defined at L${symbol.definedAt.startLine}:C${symbol.definedAt.startColumn}` : undefined,
            });
        });
        currentScope = currentScope.parent;
    }

    // 2. 組み込み関数を収集
    BUILTIN_SIGNATURES.forEach((type, name) => {
        completions.push({
            label: name,
            kind: 'function',
            detail: `(builtin function) ${name}`,
            documentation: `Type: ${type.kind}`,
        });
    });

    // 3. 組み込み定数を収集
    BUILTIN_CONSTANTS.forEach((type, name) => {
        completions.push({
            label: name,
            kind: 'constant',
            detail: `(builtin constant) ${name}`,
            documentation: `Type: ${type.kind}`,
        });
    });

    // 4. キーワードを収集
    ASIR_KEYWORDS.forEach(keyword => {
        completions.push({
            label: keyword,
            kind: 'keyword',
            detail: '(keyword)',
        });
    });

    // TODO: モジュール名、構造体名、型名なども収集する

    return completions;
}
