"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSyntax = validateSyntax;
const antlr4ng_1 = require("antlr4ng");
// ↓これらはantlr4ngが生成したファイル。パスは適宜修正してください。
const testLexer_1 = require("./.antlr/testLexer");
const testParser_1 = require("./.antlr/testParser");
const customErrorListener_1 = require("./customErrorListener"); // 先ほど作ったリスナー
function validateSyntax(code) {
    // 1. 入力コードから文字ストリームを作成
    const inputStream = antlr4ng_1.CharStream.fromString(code);
    // 2. Lexer（字句解析器）を作成
    const lexer = new testLexer_1.testLexer(inputStream);
    // 3. Lexerからトークンストリームを作成
    const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
    // 4. Parser（構文解析器）を作成
    const parser = new testParser_1.testParser(tokenStream);
    // 5. デフォルトのエラーリスナーを削除（※重要：これがないとコンソールにもエラーが出る）
    parser.removeErrorListeners();
    // 6. 自作のエラーリスナーを追加
    const errorListener = new customErrorListener_1.CustomErrorListener();
    parser.addErrorListener(errorListener);
    // 7. 解析を開始！
    parser.prog();
    // 8. 収集したエラーを返す
    return errorListener.getErrors();
}
//# sourceMappingURL=validator.js.map