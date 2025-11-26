import * as fs from 'fs';
import * as path from 'path';
import * as ast from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from '../data/builtins';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures';
import { Position } from '../utils/diagnostics';
import { Scope, Symbol, AsirType, ModuleAsirType, StructAsirType, FunctionAsirType, LiteralUnionType } from '../semantics/types';
import { ctrlCommandNames } from '../semantics/builtins/ctrl_handlers';
import { PARI_SIGNATURES } from '../data/pariSignatures';
import { findNodeStackAtPosition } from './utils/astUtils';



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
    sortText?: string;
}

interface AsirSnippet {
    prefix: string;
    body: string[];
    description: string[];
}

let cachedSnippets: { [key: string]: AsirSnippet } | null = null;

// function loadSnippets(): { [key: string]: AsirSnippet } {
//     if (cachedSnippets) {
//         return cachedSnippets;
//     }

//     const snippetFilePath = path.join(__dirname, '../snippets/rr.json');
//     try {
//         const snippetContent = fs.readFileSync(snippetFilePath, 'utf-8');
//         cachedSnippets = JSON.parse(snippetContent);
//         return cachedSnippets!;
//     } catch (error) {
//         console.error(`Failed to load snippets from ${snippetFilePath}:`, error);
//         return {};
//     }
// }

function getCompletionKindFromType(type: AsirType): CompletionItemKind {
    switch(type.kind) {
        case 'function':
        case 'overloaded_function': return CompletionItemKind.Function;
        case 'struct': return CompletionItemKind.Struct;
        case 'module': return CompletionItemKind.Module;
        case 'structure_definition': return CompletionItemKind.Struct
        default: return CompletionItemKind.Variable;
    }
}

const PREPROCESSOR_KEYWORDS = [
    '#define', '#include', '#if', '#ifdef', '#ifndef', '#else', '#elif', '#endif',
];

export function getCompletions(
    code: string,
    position: Position,
    ast: ast.ProgramNode | null,
    symbolTable: SymbolTable | null
): CompletionItem[] {
    const itemsMap = new Map<string, CompletionItem>();
    const addItem = (item: CompletionItem) => {
        // とりあえず関数>変数にしてみる
        if (itemsMap.has(item.label)) {
            const existing = itemsMap.get(item.label)!;
            if (existing.kind === CompletionItemKind.Variable && item.kind === CompletionItemKind.Function) {
                itemsMap.set(item.label, item);
            }
        } else {
            itemsMap.set(item.label, item);
        }
    };

    const lineContent = code.split('\n')[position.line] || '';
    const lineUnitilCursor = lineContent.substring(0, position.character);


    // --- 0. #補完 ---
    if (lineUnitilCursor.trim() === '#' || lineUnitilCursor.endsWith('#')) {
        PREPROCESSOR_KEYWORDS.forEach(keyword => {
            addItem({
                label: keyword,
                kind: CompletionItemKind.Keyword,
                detail: '(preprocessor)',
                insertText: keyword.startsWith('#') && lineUnitilCursor.endsWith('#') ? keyword.substring(1) : keyword
            });
        });
        return Array.from(itemsMap.values());
    }
    // --- 1. ::補完 ---
    const globalMatch = lineUnitilCursor.match(/::([a-zA-Z0-9_]*)$/);
    if (globalMatch) {
        if (symbolTable) {
            const rootScope = symbolTable.getRootScope();
            rootScope.symbols.forEach(symbol => {
                addItem({
                    label: symbol.name,
                    kind: getCompletionKindFromType(symbol.type),
                    detail: `(grobal) ${symbol.name}`,
                    documentation: symbol.definedAt ? `Defined as L${symbol.definedAt.start.line}` : undefined
                });
            });
        }
        return Array.from(itemsMap.values());
    }

    // --- 2. ->補完 ---
    const structMatch = lineUnitilCursor.match(/([a-zA-Z_][a-zA-Z0-9_]*)\s*->\s*([a-zA-Z0-9_]*)$/);
    if (structMatch && symbolTable) {
        const varName = structMatch[1];
        const scope = symbolTable.findScopeAt({ line: position.line + 1, character: position.character });
        let symbol = scope ? scope.lookup(varName) : undefined;
        if (!symbol) { symbol = symbolTable.getRootScope().lookup(varName); }

        if (symbol && symbol.type.kind === 'struct') {
            const structType = symbol.type as StructAsirType;
            structType.members.forEach((memberType, memberName) => {
                addItem({
                    label: memberName,
                    kind: CompletionItemKind.Field,
                    detail: `(member) ${memberName}`,
                    // documentation: typeToString(memberType)
                });
            });
            return Array.from(itemsMap.values());
        }
    }

    // --- 3. module関数補完 ---
    const moduleMatch = lineUnitilCursor.match(/([a-zA-Z_][a-zA-Z0-9_]*)\.([a-zA-Z0-9_]*)$/);
    if (moduleMatch && symbolTable) {
        const moduleName = moduleMatch[1];
        let symbol: Symbol | undefined;
        const scope = symbolTable.findScopeAt({ line: position.line + 1, character: position.character });

        if (scope) {
            symbol = scope.lookup(moduleName);
        }
        if (!symbol) {
            symbol = symbolTable.getRootScope().lookup(moduleName);
        }

        if (symbol && symbol.type.kind === 'module') {
            const moduleType = symbol.type as ModuleAsirType;
            moduleType.members.forEach((memberSymbol, memberName) => {
                if (memberSymbol.type.kind === 'function' || memberSymbol.type.kind === 'overloaded_function') {
                    addItem({
                        label: memberName,
                        kind: CompletionItemKind.Function,
                        detail: `(module function) ${moduleName}.${memberName}`,
                    });
                }
            });
            return Array.from(itemsMap.values());
        }
    }

    // --- 4. 特殊補完 ---
    // pari補完
    const pariMatch = lineUnitilCursor.match(/\bpari\s*\(\s*([a-zA-Z_][a-zA-Z0-9_]*)$/);
    if (pariMatch) {
        const typedPrefix = pariMatch[1];
        PARI_SIGNATURES.forEach((_signature, funcName) => {
            if (funcName.startsWith(typedPrefix)) {
                addItem({
                    label: funcName,
                    kind: CompletionItemKind.Function,
                    detail: `pari function: ${funcName}`
                });
            }
        });
        return Array.from(itemsMap.values());
    }

    // ctrl補完
    const ctrlMatch = lineUnitilCursor.match(/\bctrl\s*\(\s*"([a-zA-Z0-9_]*)$/);
    if (ctrlMatch) {
        const typedPrefix = ctrlMatch[1];
        ctrlCommandNames.forEach(CommandName => {
            if (CommandName.startsWith(typedPrefix)) {
                addItem({
                    label: CommandName,
                    kind: CompletionItemKind.EnumMember,
                    detail: 'ctrl command'
                });
            }
        });
        return Array.from(itemsMap.values());
    }

    // --- 5. 標準補完 ---
    const identifierMatch =lineUnitilCursor.match(/([a-zA-Z_][a-zA-Z0-9_]*)$/);
    const typedPrefix = identifierMatch ? identifierMatch[1] : '';
    if (symbolTable) {
        // 1. 現在のスコープ内のシンボルを収集
        const astPosition = { line: position.line + 1, character: position.character };
        const scope = symbolTable.findScopeAt(astPosition);
        let currentScope: Scope | null = scope;
        while (currentScope) {
            currentScope.symbols.forEach(symbol => {
                if (symbol.name.startsWith(typedPrefix)) {
                    addItem({
                        label: symbol.name,
                        kind: symbol.type.kind === 'function' || symbol.type.kind === 'overloaded_function' ? CompletionItemKind.Function : CompletionItemKind.Variable,
                        detail: `(${symbol.type.kind}) ${symbol.name}`,
                        documentation: symbol.definedAt ? `Defined at L${symbol.definedAt.start.line}:C${symbol.definedAt.start.column}` : undefined,
                    });
                }
            });
            currentScope = currentScope.parent;
        }
    }

    

    // 2. 組み込み関数を収集
    BUILTIN_SIGNATURES.forEach((type, name) => {
        if (name.startsWith(typedPrefix)) { 
            addItem({
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
            addItem({
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
            addItem({
                label: keyword,
                kind: CompletionItemKind.Keyword,
                detail: '(keyword)',
            });
        }
    });

    // スニペットは拡張機能側で行う
    // // 5. スニペットを収集
    // const snippets = loadSnippets();
    // for (const key in snippets) {
    //     const snippet = snippets[key];
    //     if (snippet.prefix.startsWith(typedPrefix)) {
    //         completions.push({
    //             label: snippet.prefix,
    //             kind: CompletionItemKind.Snippet,
    //             detail: `(snippet) ${snippet.prefix}`,
    //             documentation: snippet.description.join('\n'),
    //             insertText: snippet.body.join('\n'),
    //             insertTextFormat: InsertTextFormat.Snippet,
    //         });
    //     }
    // }

    if (ast) {
        const nodeStack = findNodeStackAtPosition(ast, position);
        if (nodeStack.length > 0) {
            const currentNode = nodeStack[nodeStack.length - 1];
            const parentNode = nodeStack.length > 1 ? nodeStack[nodeStack.length - 2] : undefined;

            if (currentNode.kind === 'OptionPair') {
                const optPair = currentNode as ast.OptionPairNode;
                const funcCallNode = nodeStack.find(n => n.kind === 'FunctionCall') as ast.FunctionCallNode | undefined;

                if (funcCallNode) {
                    const funcName = funcCallNode.callee.functionName.name;
                    const sig = BUILTIN_SIGNATURES.get(funcName);

                    if (sig && (sig.kind === 'function' || sig.kind === 'overloaded_function')) {
                        const funcType = (sig.kind === 'function' ? sig : sig.signatures[0]) as FunctionAsirType;
                        const optName = optPair.key.name;

                        if (funcType.allowesOptions && funcType.allowesOptions.has(optName)) {
                            const optType = funcType.allowesOptions.get(optName)!;

                            if (optType.kind === 'literal_union') {
                                (optType as LiteralUnionType).values.forEach(val => {
                                    addItem({
                                        label: String(val),
                                        kind: CompletionItemKind.EnumMember,
                                        detail: `Value for ${optName}`,
                                        insertText: typeof val === 'string' ? `"${val}"` : String(val)
                                    });
                                });
                                return Array.from(itemsMap.values());
                            }
                            if (optType.kind === 'primitive' && optType.name === 'integer') {
                                addItem({ label: '1', kind: CompletionItemKind.Value, detail:'True (Enable)' });
                                addItem({ label: '2', kind: CompletionItemKind.Value, detail:'False (Enable)' });
                            }
                        }
                    }
                }
            }
            const funcCallNode = nodeStack.find(n => n.kind === 'FunctionCall') as ast.FunctionCallNode | undefined;

            if (funcCallNode) {
                const lineText = code.split('\n')[position.line];
                const hasMid = lineText.lastIndexOf('|');

                if (hasMid !== -1 && position.character > hasMid) {
                    const funcName = funcCallNode.callee.functionName.name;
                    const sig = BUILTIN_SIGNATURES.get(funcName);

                    if (sig) {
                        const signatures = sig.kind === 'overloaded_function' ? sig.signatures : [sig as FunctionAsirType];
                        signatures.forEach(s => {
                            if (s.allowesOptions) {
                                s.allowesOptions.forEach((type, key) => {
                                    addItem({
                                        label: key,
                                        kind: CompletionItemKind.Property,
                                        detail: `Option (${type.kind})`,
                                        insertText: `${key} = `
                                    });
                                });
                            }
                        });
                        if (Array.from(itemsMap.values()).length > 0) return Array.from(itemsMap.values());
                    }
                }
            }
        }
    }

    // TODO: モジュール名、構造体名なども収集する

    return Array.from(itemsMap.values());
}
