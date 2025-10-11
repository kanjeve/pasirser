import * as vscode from 'vscode';
import { getSymbolTableForDocument } from './diagnostics';
import { AsirType } from './astSemanticAnalyzer';

function typeToString(type: AsirType): string {
    switch (type.kind) {
        case 'primitive':
            return type.name;
        case 'list':
            return `list<${typeToString(type.elementType)}>`;
        case 'function':
            const params = type.parameters.map(p => `${p.name}: ${typeToString(p.type)}`).join(', ');
            return `function(${params}) -> ${typeToString(type.returnType)}`;
        case 'struct':
            return `struct ${type.name}`;
        default:
            return 'unknown';
    }
}

export function registerHoverProvider(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider('rr', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            if (!range) {
                return undefined;
            }

            const word = document.getText(range);
            const symbolTable = getSymbolTableForDocument(document.uri);

            if (symbolTable) {
                const scope = symbolTable.findScopeAt(position);
                const symbol = scope.lookup(word);
                if (symbol) {
                    const contents = new vscode.MarkdownString(`**Type:** ${typeToString(symbol.type)}`);
                    return new vscode.Hover(contents, range);
                }
            }

            return undefined;
        }
    }));
}