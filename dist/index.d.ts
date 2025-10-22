export { analyze } from './cli/cli.js';
export * from './core/ast/asirAst.js';
export { AsirASTBuilder } from './core/ast/asirASTBuilder.js';
export { CustomErrorListener } from './core/parser/customErrorListener.js';
export type { SyntaxErrorInfo, AmbiguityInfo, DiagnosticInfo } from './core/parser/customErrorListener.js';
export { ASTBuilderError } from './utils/errors.js';
export { Diagnostic, DiagnosticSeverity } from './utils/diagnostics.js';
export { SymbolTable } from './semantics/symbolTable.js';
export { Symbol, AsirType, Scope } from './semantics/types.js';
