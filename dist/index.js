"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = exports.SymbolTable = exports.DiagnosticSeverity = exports.ASTBuilderError = exports.CustomErrorListener = exports.AsirASTBuilder = exports.analyze = void 0;
// 公開する主要な関数
var cli_js_1 = require("./cli/cli.js");
Object.defineProperty(exports, "analyze", { enumerable: true, get: function () { return cli_js_1.analyze; } });
// ASTの型定義
__exportStar(require("./core/ast/asirAst.js"), exports);
// ASTビルダーのクラス（高度な利用向け）
var asirASTBuilder_js_1 = require("./core/ast/asirASTBuilder.js");
Object.defineProperty(exports, "AsirASTBuilder", { enumerable: true, get: function () { return asirASTBuilder_js_1.AsirASTBuilder; } });
// エラーリスナーとエラー情報の型（デバッグや詳細なエラーハンドリング向け）
var customErrorListener_js_1 = require("./core/parser/customErrorListener.js");
Object.defineProperty(exports, "CustomErrorListener", { enumerable: true, get: function () { return customErrorListener_js_1.CustomErrorListener; } });
var errors_js_1 = require("./utils/errors.js");
Object.defineProperty(exports, "ASTBuilderError", { enumerable: true, get: function () { return errors_js_1.ASTBuilderError; } });
// importしたやつ
var diagnostics_js_1 = require("./utils/diagnostics.js");
Object.defineProperty(exports, "DiagnosticSeverity", { enumerable: true, get: function () { return diagnostics_js_1.DiagnosticSeverity; } });
var symbolTable_js_1 = require("./semantics/symbolTable.js");
Object.defineProperty(exports, "SymbolTable", { enumerable: true, get: function () { return symbolTable_js_1.SymbolTable; } });
var types_js_1 = require("./semantics/types.js");
Object.defineProperty(exports, "Scope", { enumerable: true, get: function () { return types_js_1.Scope; } });
//# sourceMappingURL=index.js.map