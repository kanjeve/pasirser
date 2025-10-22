// 公開する主要な関数
export { analyze } from './cli/cli.js';

// ASTの型定義
export * from './core/ast/asirAst.js';

// ASTビルダーのクラス（高度な利用向け）
export { AsirASTBuilder } from './core/ast/asirASTBuilder.js'

// エラーリスナーとエラー情報の型（デバッグや詳細なエラーハンドリング向け）
export { CustomErrorListener } from './core/parser/customErrorListener.js';
export type { SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from './core/parser/customErrorListener.js';
export { ASTBuilderError } from './utils/errors.js';

// importしたやつ
export { Diagnostic, DiagnosticSeverity } from './utils/diagnostics.js';
export { SymbolTable } from './semantics/symbolTable.js';
export { Symbol, AsirType, Scope } from './semantics/types.js'