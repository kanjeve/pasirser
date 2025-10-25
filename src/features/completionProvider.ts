import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from '../data/builtins';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol } from '../semantics/types'; // ScopeとSymbolをインポート
import * as fs from 'fs';
import * as path from 'path';

// LSPのCompletionItemKindを模倣
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
    insertText?: string; // スニペット挿入用
    insertTextFormat?: InsertTextFormat; // スニペット挿入用
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

    const snippetFilePath = path.join(__dirname, '../../temp_for_review/rr.json');
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
    ast: ast.ProgramNode,
    symbolTable: SymbolTable
): CompletionItem[] {
    const completions: CompletionItem[] = [];

    // Determine the word being typed by the user
    const lineContent = code.split('\n')[position.line - 1];
    let typedPrefix = '';
    if (lineContent) {
        const match = lineContent.substring(0, position.character).match(/([a-zA-Z_][a-zA-Z0-9_]*)$/);
        if (match) {
            typedPrefix = match[1];
        }
    }

    // 1. 現在のスコープ内のシンボルを収集
    const scope = symbolTable.findScopeAt(position);
    let currentScope: Scope | null = scope;
    while (currentScope) {
        currentScope.symbols.forEach(symbol => {
            if (symbol.name.startsWith(typedPrefix)) { // Filter by typed prefix
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

    // 2. 組み込み関数を収集
    BUILTIN_SIGNATURES.forEach((type, name) => {
        if (name.startsWith(typedPrefix)) { // Filter by typed prefix
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
        if (name.startsWith(typedPrefix)) { // Filter by typed prefix
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
        if (keyword.startsWith(typedPrefix)) { // Filter by typed prefix
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
        if (snippet.prefix.startsWith(typedPrefix)) { // Filter by typed prefix
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
