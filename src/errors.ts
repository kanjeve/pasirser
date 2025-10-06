import { ParserRuleContext, TerminalNode, Token } from 'antlr4ng';
import * as ast from './testAst.js';

/**
 * ParserRuleContext または TerminalNode から ASTNode の位置情報を取得します。
 * @param arg 位置情報を取得する対象のコンテキストまたはノード
 * @returns ASTNode['loc'] 形式の位置情報オブジェクト
 */
export function getLoc(arg: ParserRuleContext | TerminalNode | Token): ast.ASTNode['loc'] {
    if (arg instanceof ParserRuleContext) {
        const ctx = arg as ParserRuleContext;
        const startToken: Token | null = ctx.start;
        const stopToken: Token | null = ctx.stop ?? null;

        if (!startToken) {
            // 開始トークンがない場合、有効な位置情報は取得できない
            return { startLine: 0, startColumn: 0, endLine: 0, endColumn: 0 };
        }

        return {
            startLine: startToken.line,
            startColumn: startToken.column,
            endLine: stopToken?.line ?? startToken.line,
            endColumn: stopToken ? stopToken.column + (stopToken.text?.length ?? 0) : startToken.column + (startToken.text?.length ?? 0),
        };
    } else if (arg instanceof TerminalNode) {
        const terminalNode = arg as TerminalNode;
        const token: Token | null = terminalNode.symbol;

        if (!token) {
            return { startLine: 0, startColumn: 0, endLine: 0, endColumn: 0 };
        }

        return {
            startLine: token.line,
            startColumn: token.column,
            endLine: token.line,
            endColumn: token.column + (token.text?.length ?? 0),
        };
    } else {
        const token = arg as Token;
        return {
            startLine: token.line,
            startColumn: token.column,
            endLine: token.line,
            endColumn: token.column + (token.text?.length ?? 0),
        };
    }
}


/**
 * AST構築プロセス中に発生したエラーを表すカスタムクラス。
 * エラーメッセージに加えて、コード上の位置情報を保持します。
 */
export class ASTBuilderError extends Error {
    /**
     * エラーが発生したコード上の位置情報。
     * getLocがundefinedを返す可能性があるため、このプロパティもundefinedになりうる
     */
    public readonly loc: ast.ASTNode['loc'] | undefined;

    /**
     * @param message エラーの主旨を説明するメッセージ。
     * @param ctx エラーが発生した箇所の ParserRuleContext または TerminalNode。
     */
    constructor(message: string, ctx: ParserRuleContext | TerminalNode) {
        const loc = getLoc(ctx);

        // locが取得できた場合のみ、メッセージに位置情報を追加する
        const locationString = loc
            ? ` (at line ${loc.startLine}, column ${loc.startColumn})`
            : ' (at an unknown location)';

        // 親クラス(Error)のコンストラクタを呼び出す
        super(message + locationString);

        // エラー名を設定する。
        this.name = 'ASTBuilderError';

        // JavaScriptの組み込みクラスを拡張するためのおまじない。
        Object.setPrototypeOf(this, ASTBuilderError.prototype);

        // 位置情報をインスタンスプロパティとして保持する。
        this.loc = loc;
    }
}
