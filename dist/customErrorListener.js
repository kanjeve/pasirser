"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorListener = void 0;
// ANTLRErrorListenerを実装したカスタムクラス
class CustomErrorListener {
    constructor() {
        this.errors = [];
    }
    // このメソッドが構文エラー発生時にパーサーから呼び出される
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        // エラー情報を配列に保存
        this.errors.push({
            line: line,
            column: charPositionInLine,
            message: msg,
        });
    }
    // 収集したエラーのリストを返すメソッド
    getErrors() {
        return this.errors;
    }
    // 以下、コンパイルエラー解消のためのもの
    /**
     * 文法が曖昧な箇所を報告するために呼び出される
     */
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        // 今回の目的では何もしなくてよいので、中身は空のままでOK
    }
    /**
     * より強力だが低速な解析モードに切り替わろうとしていることを報告する
     */
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        // この中身も空でOK
    }
    /**
     * コンテキストに依存する構文を検出したことを報告する
     */
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        // この中身も空でOK
    }
}
exports.CustomErrorListener = CustomErrorListener;
//# sourceMappingURL=customErrorListener.js.map