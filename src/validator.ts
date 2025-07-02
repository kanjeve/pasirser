import { CharStream, CommonTokenStream } from 'antlr4ng';
// ↓これらはantlr4ngが生成したファイル。パスは適宜修正してください。
import { testLexer } from './.antlr/testLexer';
import { testParser } from './.antlr/testParser';
import { CustomErrorListener } from './customErrorListener'; // 先ほど作ったリスナー

export function validateSyntax(code: string) {
  // 1. 入力コードから文字ストリームを作成
  const inputStream = CharStream.fromString(code);

  // 2. Lexer（字句解析器）を作成
  const lexer = new testLexer(inputStream);

  // 3. Lexerからトークンストリームを作成
  const tokenStream = new CommonTokenStream(lexer);

  // 4. Parser（構文解析器）を作成
  const parser = new testParser(tokenStream);

  // 5. デフォルトのエラーリスナーを削除（※重要：これがないとコンソールにもエラーが出る）
  parser.removeErrorListeners();

  // 6. 自作のエラーリスナーを追加
  const errorListener = new CustomErrorListener();
  parser.addErrorListener(errorListener);

  // 7. 解析を開始！
  parser.prog(); 

  // 8. 収集したエラーを返す
  return errorListener.getErrors();
}