
import { ANTLRErrorListener, Recognizer, RecognitionException, Token, ATNSimulator, Parser, DFA, BitSet, ParserRuleContext, Vocabulary } from 'antlr4ng';

// 収集するエラー情報の型を拡張
export interface SyntaxErrorInfo {
  line: number;
  column: number;
  endLine: number;
  message: string;
  offendingSymbol: string | null; 
  ruleStack: string[]; 
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

  // public API
  public getErrors(): SyntaxErrorInfo[] { return this._errors; }
  public hasErrors(): boolean { return this._errors.length > 0; }
  public clear(): void {
    this._errors = [];
    this._ambiguities = [];
    this._diagnostics = [];
  }

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
        ruleStack = (recognizer as Parser).getRuleInvocationStack().reverse();
    }

    const ecdColumn = charPositionInLine + (offendingSymbol?.text?.length ?? 1);

    // エラー情報を配列に保存
    this._errors.push({
      line: line,
      column: charPositionInLine,
      endLine: line,
      message: this.translateErrorMessage(msg, recognizer.vocabulary),
      offendingSymbol: offendingSymbol?.text ?? null,
      ruleStack: ruleStack,
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

  /**
   * 典型的なエラーメッセージを日本語で表示
   */
  private translateErrorMessage(msg: string, vocabulary: Vocabulary): string {
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
    if (match) { return `'${match[1]}' から始まる有効な構文が見つかりません。`; }
    
    return msg;
  }

  private formatExpectedTokens(expectedStr: string, vocabulary: Vocabulary): string {
    const tokenDisplayNameMap = new Map<string, string>([
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
      const translatedNames = tokenNames.map(name =>
        tokenDisplayNameMap.get(name) ?? name.replace(/'/g, '')
      );
      return `次のいずれか： ${translatedNames.join(', ')}`;
    }
    return tokenDisplayNameMap.get(expectedStr) ?? expectedStr.replace(/'/g, '');
  }

  // --- ヘルパーメソッド ---

  public getAmbiguities(): AmbiguityInfo[] {
    return this._ambiguities;
  }

  public getDiagnostics(): DiagnosticInfo[] {
    return this._diagnostics;
  }
}
