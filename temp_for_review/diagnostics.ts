import * as vscode from 'vscode';
import { parseAsirCodeAndBuildAST } from '@kanji/pasirser';
import { analyzeDocumentWithAST, Symbol, SymbolTable } from './astSemanticAnalyzer';

// 診断コレクション
let diagnosticCollection: vscode.DiagnosticCollection;

// 定義済みシンボルを保持する Map (wordCompletionProvider用)
export let currentDefinedSymbols: Map<string, Symbol> = new Map();

// 現在アクティブなドキュメントのシンボルテーブルを保持するマップ
// キーはドキュメントのURI文字列
const documentSymbolTables = new Map<string, SymbolTable>();

/**
 * Risa/Asir 言語のコード診断機能の初期化。
 *
 * @param context 拡張機能のコンテキスト。
 * @param sharedDefinedSymbols 他の機能と共有する定義済みシンボル Map。
 * @param outputChannel デバッグメッセージなどを出力するための OutputChannel。
 */
export function registerDiagnostics(context: vscode.ExtensionContext, sharedDefinedSymbols: Map<string, Symbol>, outputChannel: vscode.OutputChannel) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection('risa-enhancers');
    context.subscriptions.push(diagnosticCollection);

    // sharedDefinedSymbols は wordCompletionProvider で利用されるため、
    // diagnostics.ts が SymbolTable から Symbol を抽出し、sharedDefinedSymbols を更新する責任を持つ。
    // currentDefinedSymbols = sharedDefinedSymbols; // 直接代入はしない

    const triggerDiagnostics = (document: vscode.TextDocument) => {
        if (document.languageId === 'rr') {
            updateDiagnosticsWithAST(document, diagnosticCollection);
        }
    };

    vscode.workspace.onDidOpenTextDocument(document => {
        triggerDiagnostics(document);
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(event => {
        triggerDiagnostics(event.document);
    }, null, context.subscriptions);

    vscode.workspace.onDidCloseTextDocument(document => {
        documentSymbolTables.delete(document.uri.toString());
    }, null, context.subscriptions);

    if (vscode.window.activeTextEditor) {
        triggerDiagnostics(vscode.window.activeTextEditor.document);
    }
}


/**
 * ASTとセマンティック解析を用いてコードの診断を行います。
 * @param document 現在のテキストドキュメント。
 * @param diagnosticCollection 診断メッセージを追加するコレクション。
 */
export function updateDiagnosticsWithAST(document: vscode.TextDocument, diagnosticCollection: vscode.DiagnosticCollection) {
    const text = document.getText();
    let diagnostics: vscode.Diagnostic[] = [];

    // 1. `pasirser`でASTを構築。構文エラー情報も取得する。
    const { ast, errors } = parseAsirCodeAndBuildAST(text);

    // 構文エラーがある場合、それを診断情報として追加
    if (errors.length > 0) {
        for (const error of errors) {
            const range = new vscode.Range(
                error.line - 1, // ANTLR4の行は1ベース、VS Codeの行は0ベース
                error.column,   // ANTLR4の列は0ベース、VS Codeの列も0ベース
                error.line - 1,
                error.column + (error.offendingSymbol ? error.offendingSymbol.length : 1)
            );
            diagnostics.push(new vscode.Diagnostic(
                range,
                `Syntax Error: ${error.message}`,
                vscode.DiagnosticSeverity.Error
            ));
        }
    }

    let currentDocumentSymbolTable: SymbolTable | undefined;

    // ASTが正常に構築された場合のみ、セマンティック解析を実行
    if (ast) {
        const { diagnostics: semanticDiagnostics, symbolTable } = analyzeDocumentWithAST(document);
        diagnostics.push(...semanticDiagnostics);
        currentDocumentSymbolTable = symbolTable;

        // wordCompletionProviderのためにcurrentDefinedSymbolsを更新
        currentDefinedSymbols.clear();
        symbolTable.currentScope.symbols.forEach((symbol, name) => {
            currentDefinedSymbols.set(name, symbol);
        });

    }
    
    diagnosticCollection.set(document.uri, diagnostics);

    // ドキュメントのURIをキーとしてシンボルテーブルを保存
    if (currentDocumentSymbolTable) {
        documentSymbolTables.set(document.uri.toString(), currentDocumentSymbolTable);
    } else {
        documentSymbolTables.delete(document.uri.toString());
    }
}

/**
 * 指定されたURIのドキュメントのシンボルテーブルを取得します。
 * ホバープロバイダーなどで利用されます。
 * @param uri ドキュメントのURI
 * @returns SymbolTable または undefined
 */
export function getSymbolTableForDocument(uri: vscode.Uri): SymbolTable | undefined {
    const symbolTable = documentSymbolTables.get(uri.toString());
    if (!symbolTable) {
        return undefined;
    }

    // Return the root scope
    let rootScope = symbolTable.currentScope;
    while (rootScope.parent) {
        rootScope = rootScope.parent;
    }

    return new Proxy(symbolTable, {
        get: (target, prop, receiver) => {
            if (prop === 'currentScope') {
                return rootScope;
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
