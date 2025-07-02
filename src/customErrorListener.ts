import { ANTLRErrorListener, Recognizer, RecognitionException, Token, ATNSimulator, Parser, DFA, BitSet } from 'antlr4ng';

// 収集するエラー情報の型を定義
export interface SyntaxErrorInfo {
  line: number;
  column: number;
  message: string;
}

// ANTLRErrorListenerを実装したカスタムクラス
export class CustomErrorListener implements ANTLRErrorListener {
  private errors: SyntaxErrorInfo[] = [];

  // このメソッドが構文エラー発生時にパーサーから呼び出される
  public syntaxError<S extends Token, T extends ATNSimulator>(
    recognizer: Recognizer<T>,
    offendingSymbol: S | null,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | null
  ): void {
    // エラー情報を配列に保存
    this.errors.push({
      line: line,
      column: charPositionInLine,
      message: msg,
    });
  }

  // 収集したエラーのリストを返すメソッド
  public getErrors(): SyntaxErrorInfo[] {
    return this.errors;
  }

  // 以下、コンパイルエラー解消のためのもの

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
    // 今回の目的では何もしなくてよいので、中身は空のままでOK
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
    // この中身も空でOK
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
    // この中身も空でOK
  }
}