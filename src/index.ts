// ライブラリの主要なエントリーポイント
export { LanguageService } from './services/languageService.js';
export type { AnalysisResult } from './services/languageService.js';

// クライアント側で必要となる共通の型定義
export * from './core/ast/asirAst.js';
export { Diagnostic, DiagnosticSeverity, Position } from './utils/diagnostics.js';
export { SymbolTable } from './semantics/symbolTable.js';
export { Symbol, AsirType, Scope } from './semantics/types.js';

// 各言語機能に関連する型定義（実装関数自体はエクスポートしない）
export type { CompletionItem } from './features/completionProvider.js';
export { CompletionItemKind, InsertTextFormat } from './features/completionProvider.js';
export type { DefinitionLocation } from './features/definitionProvider.js';
export type { DocumentSymbol } from './features/documentSymbolProvider.js';
export { SymbolKind } from './features/documentSymbolProvider.js';
export type { HoverInfo } from './features/hoverProvider.js';
export type { TextEdit } from './features/renameProvider.js';
export type { SemanticToken } from './features/semanticTokensProvider.js';
export { SemanticTokenTypes, SemanticTokenModifiers } from './features/semanticTokensProvider.js';

// 高度な利用やデバッグ向けの型定義
export { AsirASTBuilder } from './core/ast/asirASTBuilder.js';
export { CustomErrorListener } from './core/parser/customErrorListener.js';
export type { SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from './core/parser/customErrorListener.js';
export { ASTBuilderError } from './utils/errors.js';

export { parseAndBuildAST } from './core/parser/parserUtils.js';

export { asirLexer } from './.antlr/asirLexer.js';

export { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from './data/builtins.js';