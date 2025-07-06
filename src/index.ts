
// 公開する主要な関数
export { parseAsirCodeAndBuildAST } from './run.js';

// ASTの型定義
export * from './testAst.js';

// ASTビルダーのクラス（高度な利用向け）
export { AsirASTBuilder } from './testAsirASTBuilder.js';

// エラーリスナーとエラー情報の型（デバッグや詳細なエラーハンドリング向け）
export { CustomErrorListener } from './customErrorListener.js';
export type { SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from './customErrorListener.js';
