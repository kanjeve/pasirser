// src/test.ts
import { CharStream, CommonTokenStream, // <- testParser.ts が使用
BaseErrorListener, // <- testListener.ts が使用
ParseTreeWalker } from 'antlr4ng';
// import { ParseTreeWalker } from '../node_modules/antlr4ng/dist/tree/ParseTreeWalker.js';
// ★ antlr4ng が生成した .ts ファイルを直接インポートします ★
// outtest/testLexer.ts, outtest/testParser.ts, outtest/testListener.ts からインポート
import { testLexer } from './.antlr/testLexer.js';
import { testParser } from './.antlr/testParser.js';
import { testListener } from './.antlr/testListener.js'; // 生成された Listener クラス名に合わせる
// AST（抽象構文木）を構築するためのカスタムリスナー
class ASTBuilderListener extends testListener {
    // 必要に応じて他の exitXXX メソッドも追加
    constructor() {
        super();
        this.ast = null; // 構築されたASTのルートノード
        this.currentAstNode = []; // ASTノードを一時的に保持するスタック
        this.enterEveryRule = (ctx) => {
        };
        this.exitEveryRule = (ctx) => {
        };
        // prog ルールの exit
        this.exitProg = (ctx) => {
            this.ast = { type: 'program', statements: [...this.currentAstNode].reverse() };
            this.currentAstNode = [];
        };
        // statement ルールに対応する exit メソッド
        this.exitExprStatement = (ctx) => {
            const exprAst = this.currentAstNode.pop();
            this.currentAstNode.push({ type: 'statement', value: exprAst });
        };
        this.exitEmptyLineStatement = (ctx) => {
            this.currentAstNode.push({ type: 'empty_line_statement' });
        };
        // expr ルールに対応する exit メソッド
        this.exitMul = (ctx) => {
            const right = this.currentAstNode.pop();
            const left = this.currentAstNode.pop();
            this.currentAstNode.push({ type: 'binary_op', operator: ctx.MULT().getText(), left: left, right: right });
        };
        this.exitDiv = (ctx) => {
            const right = this.currentAstNode.pop();
            const left = this.currentAstNode.pop();
            this.currentAstNode.push({ type: 'binary_op', operator: ctx.DIV().getText(), left: left, right: right });
        };
        this.exitAdd = (ctx) => {
            const right = this.currentAstNode.pop();
            const left = this.currentAstNode.pop();
            this.currentAstNode.push({ type: 'binary_op', operator: ctx.PLUS().getText(), left: left, right: right });
        };
        this.exitSub = (ctx) => {
            const right = this.currentAstNode.pop();
            const left = this.currentAstNode.pop();
            this.currentAstNode.push({ type: 'binary_op', operator: ctx.MINUS().getText(), left: left, right: right });
        };
        this.exitInt = (ctx) => {
            this.currentAstNode.push({ type: 'number', value: parseInt(ctx.INT().getText()) });
        };
        this.exitParen = (ctx) => {
            const innerExpr = this.currentAstNode.pop();
            this.currentAstNode.push({ type: 'paren_expr', value: innerExpr });
        };
    }
}
// エラーリスナー
class CustomErrorListener extends BaseErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`[Parsing Error] line ${line}, col ${column}: ${msg}`);
    }
}
// パーサーとAST構築のメイン関数
export function parseAsirCodeAndBuildAST(code) {
    console.log("Parser function started for code:", code);
    const chars = CharStream.fromString(code);
    const lexer = new testLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new testParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());
    const tree = parser.prog(); // 'prog' はあなたの開始ルール
    console.log("Parse tree created:", tree);
    console.log("--- Raw Parse Tree ---");
    // ruleNames はパーサークラスの静的プロパティとしてアクセス
    console.log(tree.toStringTree(parser.ruleNames, parser));
    console.log("----------------------");
    console.log("--- AST Building ---");
    const listener = new ASTBuilderListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree); // ★ ParseTreeWalker.DEFAULT.walk を使う
    console.log("--- Constructed AST ---");
    console.log(JSON.stringify(listener.ast, null, 2));
    return listener.ast;
}
// -------------------------------------------------------------
// テストコードの例
// -------------------------------------------------------------
const currentFileUrl = import.meta.url;
const executedFileUrl = process.argv[1] && `file:///${process.argv[1].replace(/\\/g, '/')}`;
// console.log("import.meta.url:", currentFileUrl);
// console.log("process.argv[1]:", process.argv[1]);
// console.log("Expected URL:", executedFileUrl);
// console.log("Condition result:", import.meta.url === (process.argv[1] && `file://${process.argv[1]}`));
if (currentFileUrl === executedFileUrl) {
    console.log("Running parser test directly...");
    let testCode1 = "1 + 2 * 3;";
    console.log(`\n--- Testing Code 1: "${testCode1.trim()}" ---`);
    parseAsirCodeAndBuildAST(testCode1);
    let testCode2 = "(10 + 5) / 2;";
    console.log(`\n--- Testing Code 2: "${testCode2.trim()}" ---`);
    parseAsirCodeAndBuildAST(testCode2);
    let testCode3 = "1 + 2\n3 - 4;";
    console.log(`\n--- Testing Code 3: "${testCode3.trim()}" ---`);
    parseAsirCodeAndBuildAST(testCode3);
    let testCode4 = "42;"; // 単一の数値テスト
    console.log(`\n--- Testing Code 4: "${testCode4.trim()}" ---`);
    parseAsirCodeAndBuildAST(testCode4);
    let testCode5 = ";"; // 空行テスト (progEmpty ルール用)
    console.log(`\n--- Testing Code 5: "${testCode5.trim()}" ---`);
    parseAsirCodeAndBuildAST(testCode5);
}
//# sourceMappingURL=test.js.map