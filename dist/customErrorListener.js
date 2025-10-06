"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorListener = void 0;
const antlr4ng_1 = require("antlr4ng");
// ANTLRErrorListenerを実装したカスタムクラス
class CustomErrorListener {
    constructor() {
        this._errors = [];
        this._ambiguities = [];
        this._diagnostics = [];
    }
    // このメソッドが構文エラー発生時にパーサーから呼び出される
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        let ruleStack = [];
        if (recognizer instanceof antlr4ng_1.Parser) {
            ruleStack = recognizer.getRuleInvocationStack();
        }
        // エラー情報を配列に保存
        this._errors.push({
            line: line,
            column: charPositionInLine,
            message: msg,
            offendingSymbol: offendingSymbol?.text ?? null,
            ruleStack: ruleStack.reverse(), // スタックを分かりやすい順序に
        });
    }
    /**
     * 文法が曖昧な箇所を報告するために呼び出される
     */
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        const token = recognizer.tokenStream.get(startIndex);
        this._ambiguities.push({
            line: token.line,
            column: token.column,
            message: `Ambiguity detected at: '${token.text}'`
        });
    }
    /**
     * より強力だが低速な解析モードに切り替わろうとしていることを報告する
     */
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        const token = recognizer.tokenStream.get(startIndex);
        this._diagnostics.push({
            type: 'FullContext',
            line: token.line,
            column: token.column,
            message: `Attempting full context parsing at: '${token.text}'`
        });
    }
    /**
     * コンテキストに依存する構文を検出したことを報告する
     */
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        const token = recognizer.tokenStream.get(startIndex);
        this._diagnostics.push({
            type: 'ContextSensitivity',
            line: token.line,
            column: token.column,
            message: `Context sensitivity issue at: '${token.text}'`
        });
    }
    /**
     * 典型的なエラーメッセージを日本語で表示
     */
    formatErrorMessage(recognizer, msg) {
        let match = msg.match(/mismatched input '(.*)' expecting (.*)/);
        if (match) {
            const actual = match[1];
            const expected = this.formatExpectedTokens(recognizer, match[2]);
            return `予期しないトークン '${actual}' が見つかりました。 ${expected} が必要です。`;
        }
        match = msg.match(/extraneous input '(.*)' expecting (.*)/);
        if (match) {
            const extra = match[1];
            return `余分なトークン '${extra}' があります。`;
        }
        if (msg.startsWith('no viable alternative')) {
            return "構文が正しくありません。記述を確認してください。";
        }
        return msg;
    }
    formatExpectedTokens(recognizer, expected) {
        if (expected.startsWith('{')) {
            const tokens = expected.replace(/\{|\}/g, '').split(', ').map(t => { return t.replace(/'/g, ''); });
            return tokens.join('、 ');
        }
        return expected;
    }
    // --- ヘルパーメソッド ---
    getErrors() {
        return this._errors;
    }
    getAmbiguities() {
        return this._ambiguities;
    }
    getDiagnostics() {
        return this._diagnostics;
    }
    hasErrors() {
        return this._errors.length > 0;
    }
    clear() {
        this._errors = [];
        this._ambiguities = [];
        this._diagnostics = [];
    }
}
exports.CustomErrorListener = CustomErrorListener;
//# sourceMappingURL=customErrorListener.js.map