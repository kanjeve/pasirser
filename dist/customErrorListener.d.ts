import { ANTLRErrorListener, Recognizer, RecognitionException, Token, ATNSimulator, Parser, DFA, BitSet } from 'antlr4ng';
export interface SyntaxErrorInfo {
    line: number;
    column: number;
    message: string;
}
export declare class CustomErrorListener implements ANTLRErrorListener {
    private errors;
    syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, charPositionInLine: number, msg: string, e: RecognitionException | null): void;
    getErrors(): SyntaxErrorInfo[];
    /**
     * 文法が曖昧な箇所を報告するために呼び出される
     */
    reportAmbiguity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet, configs: any): void;
    /**
     * より強力だが低速な解析モードに切り替わろうとしていることを報告する
     */
    reportAttemptingFullContext(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet, configs: any): void;
    /**
     * コンテキストに依存する構文を検出したことを報告する
     */
    reportContextSensitivity(recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: any): void;
}
