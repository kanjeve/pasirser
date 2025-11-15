import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS, functionNames } from '../data/builtins';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol } from '../semantics/types';
import { ctrlCommandNames } from '../semantics/builtins/ctrl_handlers';
import { PARI_SIGNATURES } from '../data/pariSignatures';
import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';


export enum CompletionItemKind {
    Text = 1,
    Method = 2,
    Function = 3,
    Constructor = 4,
    Field = 5,
    Variable = 6,
    Class = 7,
    Interface = 8,
    Module = 9,
    Property = 10,
    Unit = 11,
    Value = 12,
    Enum = 13,
    Keyword = 14,
    Snippet = 15,
    Color = 16,
    File = 17,
    Reference = 18,
    Folder = 19,
    EnumMember = 20,
    Constant = 21,
    Struct = 22,
    Event = 23,
    Operator = 24,
    TypeParameter = 25
}

// LSPのInsertTextFormatを模倣
export enum InsertTextFormat {
    PlainText = 1,
    Snippet = 2
}

export interface CompletionItem {
    label: string;
    kind: CompletionItemKind;
    detail?: string;
    documentation?: string;
    insertText?: string; 
    insertTextFormat?: InsertTextFormat;
}

interface AsirSnippet {
    prefix: string;
    body: string[];
    description: string[];
}

let cachedSnippets: { [key: string]: AsirSnippet } | null = null;

function loadSnippets(): { [key: string]: AsirSnippet } {
    if (cachedSnippets) {
        return cachedSnippets;
    }

    const snippetFilePath = path.join(__dirname, '../snippets/rr.json');
    try {
        const snippetContent = fs.readFileSync(snippetFilePath, 'utf-8');
        cachedSnippets = JSON.parse(snippetContent);
        return cachedSnippets!;
    } catch (error) {
        console.error(`Failed to load snippets from ${snippetFilePath}:`, error);
        return {};
    }
}

export function getCompletions(
    code: string,
    position: Position,
    ast: ast.ProgramNode | null,
    symbolTable: SymbolTable | null
): CompletionItem[] {
    const completions: CompletionItem[] = [];
    const lineContent = code.split('\n')[position.line - 1] || '';
    const lineUnitilCursor = lineContent.substring(0, position.character);

    // pari補完
    const pariMatch = lineUnitilCursor.match(/\bpari\s*\(\s*([a-zA-Z_][a-zA-Z0-9_]*)$/);
    if (pariMatch) {
        const typedPrefix = pariMatch[1];
        PARI_SIGNATURES.forEach((_signature, funcName) => {
            if (funcName.startsWith(typedPrefix)) {
                completions.push({
                    label: funcName,
                    kind: CompletionItemKind.Function,
                    detail: `pari function: ${funcName}`
                });
            }
        });
        return completions;
    }

    // ctrl補完
    const ctrlMatch = lineUnitilCursor.match(/\bctrl\s*\(\s*"([a-zA-Z0-9_]*)$/);
    if (ctrlMatch) {
        const typedPrefix = ctrlMatch[1];
        ctrlCommandNames.forEach(CommandName => {
            if (CommandName.startsWith(typedPrefix)) {
                completions.push({
                    label: CommandName,
                    kind: CompletionItemKind.EnumMember,
                    detail: 'ctrl command'
                });
            }
        });
        return completions;
    }

    const identifierMatch =lineUnitilCursor.match(/([a-zA-Z_][a-zA-Z0-9_]*)$/);
    const typedPrefix = identifierMatch ? identifierMatch[1] : '';
    if (ast && symbolTable) {
        // 1. 現在のスコープ内のシンボルを収集
        const scope = symbolTable.findScopeAt(position);
        let currentScope: Scope | null = scope;
        while (currentScope) {
            currentScope.symbols.forEach(symbol => {
                if (symbol.name.startsWith(typedPrefix)) {
                    completions.push({
                        label: symbol.name,
                        kind: symbol.type.kind === 'function' || symbol.type.kind === 'overloaded_function' ? CompletionItemKind.Function : CompletionItemKind.Variable,
                        detail: `(${symbol.type.kind}) ${symbol.name}`,
                        documentation: symbol.definedAt ? `Defined at L${symbol.definedAt.startLine}:C${symbol.definedAt.startColumn}` : undefined,
                    });
                }
            });
            currentScope = currentScope.parent;
        }
    }

    

    // 2. 組み込み関数を収集
    BUILTIN_SIGNATURES.forEach((type, name) => {
        if (name.startsWith(typedPrefix)) { 
            completions.push({
                label: name,
                kind: CompletionItemKind.Function,
                detail: `(builtin function) ${name}`,
                documentation: `Type: ${type.kind}`,
            });
        }
    });

    // 3. 組み込み定数を収集
    BUILTIN_CONSTANTS.forEach((type, name) => {
        if (name.startsWith(typedPrefix)) { 
            completions.push({
                label: name,
                kind: CompletionItemKind.Constant,
                detail: `(builtin constant) ${name}`,
                documentation: `Type: ${type.kind}`,
            });
        }
    });

    // 4. キーワードを収集
    ASIR_KEYWORDS.forEach(keyword => {
        if (keyword.startsWith(typedPrefix)) {
            completions.push({
                label: keyword,
                kind: CompletionItemKind.Keyword,
                detail: '(keyword)',
            });
        }
    });

    // 5. スニペットを収集
    const snippets = loadSnippets();
    for (const key in snippets) {
        const snippet = snippets[key];
        if (snippet.prefix.startsWith(typedPrefix)) {
            completions.push({
                label: snippet.prefix,
                kind: CompletionItemKind.Snippet,
                detail: `(snippet) ${snippet.prefix}`,
                documentation: snippet.description.join('\n'),
                insertText: snippet.body.join('\n'),
                insertTextFormat: InsertTextFormat.Snippet,
            });
        }
    }

    // TODO: モジュール名、構造体名、型名なども収集する

    return completions;
}
