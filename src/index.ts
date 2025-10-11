// 公開する主要な関数
export { analyze } from './run.js';

// ASTの型定義
export * from './testAst.js';

// ASTビルダーのクラス（高度な利用向け）
export { AsirASTBuilder } from './testAsirASTBuilder.js';

// エラーリスナーとエラー情報の型（デバッグや詳細なエラーハンドリング向け）
export { CustomErrorListener } from './customErrorListener.js';
export type { SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from './customErrorListener.js';
export { ASTBuilderError } from './errors.js';

// importしたやつ
export { Diagnostic, DiagnosticSeverity } from './diagnostics.js';
export { SymbolTable } from './semantics/symbolTable.js';
export { Symbol, AsirType, Scope } from './semantics/types.js'