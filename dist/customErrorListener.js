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
    // public API
    getErrors() { return this._errors; }
    hasErrors() { return this._errors.length > 0; }
    clear() {
        this._errors = [];
        this._ambiguities = [];
        this._diagnostics = [];
    }
    // このメソッドが構文エラー発生時にパーサーから呼び出される
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        let ruleStack = [];
        if (recognizer instanceof antlr4ng_1.Parser) {
            ruleStack = recognizer.getRuleInvocationStack().reverse();
        }
        const ecdColumn = charPositionInLine + (offendingSymbol?.text?.length ?? 1);
        // エラー情報を配列に保存
        this._errors.push({
            line: line,
            column: charPositionInLine,
            endLine: line,
            endColumn: ecdColumn,
            message: this.translateErrorMessage(msg, recognizer.vocabulary),
            offendingSymbol: offendingSymbol?.text ?? null,
            ruleStack: ruleStack,
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
    translateErrorMessage(msg, vocabulary) {
        let match = msg.match(/mismatched input '(.+)' expecting (.+)/);
        if (match) {
            const actual = match[1];
            const expected = this.formatExpectedTokens(match[2], vocabulary);
            return `'${actual}' は不正な入力です。 ${expected} が期待されていました。`;
        }
        match = msg.match(/extraneous input '(.+)' expecting (.+)/);
        if (match) {
            const actual = match[1];
            const expected = this.formatExpectedTokens(match[2], vocabulary);
            return `余分な入力 '${actual}' があります。${expected} が期待されていました。`;
        }
        match = msg.match(/missing (.+) at '(.+)'/);
        if (match) {
            const expected = this.formatExpectedTokens(match[1], vocabulary);
            const actual = match[2];
            return `'${actual}' の前に ${expected} がありません。`;
        }
        match = msg.match(/no viable alternative at input '(.+)'/);
        if (match) {
            return `'${match[1]}' から始まる有効な構文が見つかりません。`;
        }
        return msg;
    }
    formatExpectedTokens(expectedStr, vocabulary) {
        const tokenDisplayNameMap = new Map([
            ['ID', '識別子'],
            ['STRING', '文字列'],
            ['INT', '整数'],
            ['FLOAT', '浮動小数'],
            ['SEMI', 'セミコロン(;)'],
            ['DOLLAR', 'ドル記号($)'],
            ["'<EOF>'", 'ファイルの終端'],
        ]);
        if (expectedStr.startsWith('{')) {
            const tokenNames = expectedStr.substring(1, expectedStr.length - 1).split(', ');
            const translatedNames = tokenNames.map(name => tokenDisplayNameMap.get(name) ?? name.replace(/'/g, ''));
            return `次のいずれか： ${translatedNames.join(', ')}`;
        }
        return tokenDisplayNameMap.get(expectedStr) ?? expectedStr.replace(/'/g, '');
    }
    // --- ヘルパーメソッド ---
    getAmbiguities() {
        return this._ambiguities;
    }
    getDiagnostics() {
        return this._diagnostics;
    }
}
exports.CustomErrorListener = CustomErrorListener;
//# sourceMappingURL=customErrorListener.js.map