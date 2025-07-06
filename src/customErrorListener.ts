
import { ANTLRErrorListener, Recognizer, RecognitionException, Token, ATNSimulator, Parser, DFA, BitSet } from 'antlr4ng';

// 収集するエラー情報の型を拡張
export interface SyntaxErrorInfo {
  line: number;
  column: number;
  message: string;
  offendingSymbol: string | null; // エラーを引き起こしたトークンのテキスト
  ruleStack: string[]; // エラー発生時のルールスタック
}

// 曖昧性に関する情報
export interface AmbiguityInfo {
    line: number;
    column: number;
    message: string;
}

// その他の診断情報
export interface DiagnosticInfo {
    type: 'FullContext' | 'ContextSensitivity';
    line: number;
    column: number;
    message: string;
}

// ANTLRErrorListenerを実装したカスタムクラス
export class CustomErrorListener implements ANTLRErrorListener {
  private _errors: SyntaxErrorInfo[] = [];
  private _ambiguities: AmbiguityInfo[] = [];
  private _diagnostics: DiagnosticInfo[] = [];

  // このメソッドが構文エラー発生時にパーサーから呼び出される
  public syntaxError<S extends Token, T extends ATNSimulator>(
    recognizer: Recognizer<T>,
    offendingSymbol: S | null,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | null
  ): void {
    let ruleStack: string[] = [];
    if (recognizer instanceof Parser) {
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
  public reportAmbiguity(
    recognizer: Parser,
    dfa: DFA,
    startIndex: number,
    stopIndex: number,
    exact: boolean,
    ambigAlts: BitSet,
    configs: any
  ): void {
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
  public reportAttemptingFullContext(
    recognizer: Parser,
    dfa: DFA,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: BitSet,
    configs: any
  ): void {
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
  public reportContextSensitivity(
    recognizer: Parser,
    dfa: DFA,
    startIndex: number,
    stopIndex: number,
    prediction: number,
    configs: any
  ): void {
    const token = recognizer.tokenStream.get(startIndex);
    this._diagnostics.push({
        type: 'ContextSensitivity',
        line: token.line,
        column: token.column,
        message: `Context sensitivity issue at: '${token.text}'`
    });
  }

  // --- ヘルパーメソッド ---

  public getErrors(): SyntaxErrorInfo[] {
    return this._errors;
  }

  public getAmbiguities(): AmbiguityInfo[] {
    return this._ambiguities;
  }

  public getDiagnostics(): DiagnosticInfo[] {
    return this._diagnostics;
  }

  public hasErrors(): boolean {
    return this._errors.length > 0;
  }

  public clear(): void {
    this._errors = [];
    this._ambiguities = [];
    this._diagnostics = [];
  }
}
