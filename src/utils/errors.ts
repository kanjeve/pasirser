import { ParserRuleContext, TerminalNode, Token } from 'antlr4ng';
import * as ast from '../core/ast/asirAst.js';

/**
 * ParserRuleContext または TerminalNode から ASTNode の位置情報を取得します。
 * @param arg 位置情報を取得する対象のコンテキストまたはノード
 * @returns ASTNode['loc'] 形式の位置情報オブジェクト
 */
export function getLoc(arg: ParserRuleContext | TerminalNode | Token | undefined): ast.SourceLocation | undefined{
    if (!arg) return undefined;

    let startToken: Token | null;
    let stopToken: Token | null;

    if (arg instanceof ParserRuleContext) {
        startToken = arg.start;
        stopToken = arg.stop;
    } else if (arg instanceof TerminalNode) {
        startToken = arg.symbol;
        stopToken = arg.symbol;
    } else {
        startToken = arg;
        stopToken = arg;
    }

    if (!startToken || !stopToken) { return undefined; }

    const stopLine = stopToken.line;
    const stopCol = stopToken.column + (stopToken.text?.length || 0);
    const stopOffset = stopToken.stop + 1;

    return {
        start: {
            line: startToken.line,
            column: startToken.column,
            offset: startToken.start
        },
        end: {
            line: stopLine,
            column: stopCol,
            offset: stopOffset
        }
    };
}


/**
 * AST構築プロセス中に発生したエラーを表すカスタムクラス。
 * エラーメッセージに加えて、コード上の位置情報を保持します。
 */
export class ASTBuilderError extends Error {
    /**
     * エラーが発生したコード上の位置情報。
     */
    public readonly loc: ast.SourceLocation | undefined;

    /**
     * @param message エラーの主旨を説明するメッセージ。
     * @param ctx エラーが発生した箇所の ParserRuleContext または TerminalNode。
     */
    constructor(message: string, ctx: ParserRuleContext | TerminalNode | Token) {
        const loc = ctx ? getLoc(ctx) : undefined;

        // locが取得できた場合のみ、メッセージに位置情報を追加する
        const locationString = loc
            ? ` (at line ${loc.start.line}, column ${loc.start.column})`
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
