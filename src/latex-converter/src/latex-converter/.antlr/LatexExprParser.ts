// Generated from /home/kanji/risaproject/pasirser/src/latex-converter/LatexExpr.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { LatexExprListener } from "./LatexExprListener.js";
import { LatexExprVisitor } from "./LatexExprVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class LatexExprParser extends antlr.Parser {
    public static readonly CMD_FRAC = 1;
    public static readonly GREEK_CMD = 2;
    public static readonly PLUS = 3;
    public static readonly MINUS = 4;
    public static readonly STAR = 5;
    public static readonly SLASH = 6;
    public static readonly CARET = 7;
    public static readonly UNDERSCORE = 8;
    public static readonly ASSIGN = 9;
    public static readonly LPAREN = 10;
    public static readonly RPAREN = 11;
    public static readonly LBRACE = 12;
    public static readonly RBRACE = 13;
    public static readonly ID = 14;
    public static readonly NUMBER = 15;
    public static readonly SPACING_CMD = 16;
    public static readonly DOUBLE_BACKSLASH = 17;
    public static readonly AMP_ALIGN = 18;
    public static readonly WS = 19;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_assignStatement = 2;
    public static readonly RULE_expr = 3;
    public static readonly RULE_primary = 4;
    public static readonly RULE_command = 5;

    public static readonly literalNames = [
        null, "'\\frac'", null, "'+'", "'-'", "'*'", "'/'", "'^'", "'_'", 
        "'='", "'('", "')'", "'{'", "'}'", null, null, null, "'\\\\'", "'&'"
    ];

    public static readonly symbolicNames = [
        null, "CMD_FRAC", "GREEK_CMD", "PLUS", "MINUS", "STAR", "SLASH", 
        "CARET", "UNDERSCORE", "ASSIGN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "ID", "NUMBER", "SPACING_CMD", "DOUBLE_BACKSLASH", "AMP_ALIGN", 
        "WS"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "assignStatement", "expr", "primary", "command",
    ];

    public get grammarFileName(): string { return "LatexExpr.g4"; }
    public get literalNames(): (string | null)[] { return LatexExprParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return LatexExprParser.symbolicNames; }
    public get ruleNames(): string[] { return LatexExprParser.ruleNames; }
    public get serializedATN(): number[] { return LatexExprParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, LatexExprParser._ATN, LatexExprParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, LatexExprParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 15;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 54302) !== 0)) {
                {
                {
                this.state = 12;
                this.statement();
                }
                }
                this.state = 17;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 18;
            this.match(LatexExprParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, LatexExprParser.RULE_statement);
        try {
            this.state = 22;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                localContext = new AssignStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 20;
                this.assignStatement();
                }
                break;
            case 2:
                localContext = new ExprStmtContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 21;
                this.expr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignStatement(): AssignStatementContext {
        let localContext = new AssignStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, LatexExprParser.RULE_assignStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 24;
            localContext._variable = this.match(LatexExprParser.ID);
            this.state = 25;
            this.match(LatexExprParser.ASSIGN);
            this.state = 26;
            localContext._value = this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, LatexExprParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 32;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case LatexExprParser.PLUS:
            case LatexExprParser.MINUS:
                {
                localContext = new UnaryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 29;
                (localContext as UnaryExprContext)._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 4)) {
                    (localContext as UnaryExprContext)._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 30;
                this.expr(5);
                }
                break;
            case LatexExprParser.CMD_FRAC:
            case LatexExprParser.GREEK_CMD:
            case LatexExprParser.LPAREN:
            case LatexExprParser.LBRACE:
            case LatexExprParser.ID:
            case LatexExprParser.NUMBER:
                {
                localContext = new PrimaryExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 31;
                this.primary();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 47;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 45;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
                    case 1:
                        {
                        localContext = new PowerExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, LatexExprParser.RULE_expr);
                        this.state = 34;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 35;
                        (localContext as PowerExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 7 || _la === 8)) {
                            (localContext as PowerExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 36;
                        this.expr(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MulDivExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, LatexExprParser.RULE_expr);
                        this.state = 37;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 38;
                        (localContext as MulDivExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 5 || _la === 6)) {
                            (localContext as MulDivExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 39;
                        this.expr(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddSubExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, LatexExprParser.RULE_expr);
                        this.state = 40;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 41;
                        (localContext as AddSubExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || _la === 4)) {
                            (localContext as AddSubExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 42;
                        this.expr(3);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ImplicitMultExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, LatexExprParser.RULE_expr);
                        this.state = 43;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 44;
                        this.primary();
                        }
                        break;
                    }
                    }
                }
                this.state = 49;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 8, LatexExprParser.RULE_primary);
        try {
            this.state = 61;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case LatexExprParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 50;
                this.match(LatexExprParser.LPAREN);
                this.state = 51;
                this.expr(0);
                this.state = 52;
                this.match(LatexExprParser.RPAREN);
                }
                break;
            case LatexExprParser.LBRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 54;
                this.match(LatexExprParser.LBRACE);
                this.state = 55;
                this.expr(0);
                this.state = 56;
                this.match(LatexExprParser.RBRACE);
                }
                break;
            case LatexExprParser.CMD_FRAC:
            case LatexExprParser.GREEK_CMD:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 58;
                this.command();
                }
                break;
            case LatexExprParser.NUMBER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 59;
                this.match(LatexExprParser.NUMBER);
                }
                break;
            case LatexExprParser.ID:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 60;
                this.match(LatexExprParser.ID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public command(): CommandContext {
        let localContext = new CommandContext(this.context, this.state);
        this.enterRule(localContext, 10, LatexExprParser.RULE_command);
        try {
            this.state = 72;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case LatexExprParser.CMD_FRAC:
                localContext = new FracCommandContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 63;
                this.match(LatexExprParser.CMD_FRAC);
                this.state = 64;
                this.match(LatexExprParser.LBRACE);
                this.state = 65;
                (localContext as FracCommandContext)._numer = this.expr(0);
                this.state = 66;
                this.match(LatexExprParser.RBRACE);
                this.state = 67;
                this.match(LatexExprParser.LBRACE);
                this.state = 68;
                (localContext as FracCommandContext)._denom = this.expr(0);
                this.state = 69;
                this.match(LatexExprParser.RBRACE);
                }
                break;
            case LatexExprParser.GREEK_CMD:
                localContext = new GreekCommandContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 71;
                this.match(LatexExprParser.GREEK_CMD);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 3:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 6);
        case 1:
            return this.precpred(this.context, 3);
        case 2:
            return this.precpred(this.context, 2);
        case 3:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,19,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,5,
        0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,3,1,23,8,1,1,2,1,2,1,2,
        1,2,1,3,1,3,1,3,1,3,3,3,33,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,3,4,62,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
        3,5,73,8,5,1,5,0,1,6,6,0,2,4,6,8,10,0,3,1,0,3,4,1,0,7,8,1,0,5,6,
        80,0,15,1,0,0,0,2,22,1,0,0,0,4,24,1,0,0,0,6,32,1,0,0,0,8,61,1,0,
        0,0,10,72,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,
        1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,15,1,0,0,0,18,19,5,0,0,1,
        19,1,1,0,0,0,20,23,3,4,2,0,21,23,3,6,3,0,22,20,1,0,0,0,22,21,1,0,
        0,0,23,3,1,0,0,0,24,25,5,14,0,0,25,26,5,9,0,0,26,27,3,6,3,0,27,5,
        1,0,0,0,28,29,6,3,-1,0,29,30,7,0,0,0,30,33,3,6,3,5,31,33,3,8,4,0,
        32,28,1,0,0,0,32,31,1,0,0,0,33,47,1,0,0,0,34,35,10,6,0,0,35,36,7,
        1,0,0,36,46,3,6,3,6,37,38,10,3,0,0,38,39,7,2,0,0,39,46,3,6,3,4,40,
        41,10,2,0,0,41,42,7,0,0,0,42,46,3,6,3,3,43,44,10,4,0,0,44,46,3,8,
        4,0,45,34,1,0,0,0,45,37,1,0,0,0,45,40,1,0,0,0,45,43,1,0,0,0,46,49,
        1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,
        51,5,10,0,0,51,52,3,6,3,0,52,53,5,11,0,0,53,62,1,0,0,0,54,55,5,12,
        0,0,55,56,3,6,3,0,56,57,5,13,0,0,57,62,1,0,0,0,58,62,3,10,5,0,59,
        62,5,15,0,0,60,62,5,14,0,0,61,50,1,0,0,0,61,54,1,0,0,0,61,58,1,0,
        0,0,61,59,1,0,0,0,61,60,1,0,0,0,62,9,1,0,0,0,63,64,5,1,0,0,64,65,
        5,12,0,0,65,66,3,6,3,0,66,67,5,13,0,0,67,68,5,12,0,0,68,69,3,6,3,
        0,69,70,5,13,0,0,70,73,1,0,0,0,71,73,5,2,0,0,72,63,1,0,0,0,72,71,
        1,0,0,0,73,11,1,0,0,0,7,15,22,32,45,47,61,72
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!LatexExprParser.__ATN) {
            LatexExprParser.__ATN = new antlr.ATNDeserializer().deserialize(LatexExprParser._serializedATN);
        }

        return LatexExprParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(LatexExprParser.literalNames, LatexExprParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return LatexExprParser.vocabulary;
    }

    private static readonly decisionsToDFA = LatexExprParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(LatexExprParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return LatexExprParser.RULE_prog;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return LatexExprParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class ExprStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignStmtContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public assignStatement(): AssignStatementContext {
        return this.getRuleContext(0, AssignStatementContext)!;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterAssignStmt) {
             listener.enterAssignStmt(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitAssignStmt) {
             listener.exitAssignStmt(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitAssignStmt) {
            return visitor.visitAssignStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignStatementContext extends antlr.ParserRuleContext {
    public _variable?: Token | null;
    public _value?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(LatexExprParser.ASSIGN, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(LatexExprParser.ID, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return LatexExprParser.RULE_assignStatement;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterAssignStatement) {
             listener.enterAssignStatement(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitAssignStatement) {
             listener.exitAssignStatement(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitAssignStatement) {
            return visitor.visitAssignStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return LatexExprParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class PowerExprContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.CARET, 0);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.UNDERSCORE, 0);
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterPowerExpr) {
             listener.enterPowerExpr(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitPowerExpr) {
             listener.exitPowerExpr(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitPowerExpr) {
            return visitor.visitPowerExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivExprContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.SLASH, 0);
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterMulDivExpr) {
             listener.enterMulDivExpr(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitMulDivExpr) {
             listener.exitMulDivExpr(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitMulDivExpr) {
            return visitor.visitMulDivExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrimaryExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterPrimaryExpr) {
             listener.enterPrimaryExpr(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitPrimaryExpr) {
             listener.exitPrimaryExpr(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitPrimaryExpr) {
            return visitor.visitPrimaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryExprContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.MINUS, 0);
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterUnaryExpr) {
             listener.enterUnaryExpr(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitUnaryExpr) {
             listener.exitUnaryExpr(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddSubExprContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.MINUS, 0);
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterAddSubExpr) {
             listener.enterAddSubExpr(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitAddSubExpr) {
             listener.exitAddSubExpr(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitAddSubExpr) {
            return visitor.visitAddSubExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ImplicitMultExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterImplicitMultExpr) {
             listener.enterImplicitMultExpr(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitImplicitMultExpr) {
             listener.exitImplicitMultExpr(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitImplicitMultExpr) {
            return visitor.visitImplicitMultExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.LPAREN, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.RPAREN, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.LBRACE, 0);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.RBRACE, 0);
    }
    public command(): CommandContext | null {
        return this.getRuleContext(0, CommandContext);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.NUMBER, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(LatexExprParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return LatexExprParser.RULE_primary;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitPrimary) {
             listener.exitPrimary(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return LatexExprParser.RULE_command;
    }
    public override copyFrom(ctx: CommandContext): void {
        super.copyFrom(ctx);
    }
}
export class FracCommandContext extends CommandContext {
    public _numer?: ExprContext;
    public _denom?: ExprContext;
    public constructor(ctx: CommandContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CMD_FRAC(): antlr.TerminalNode {
        return this.getToken(LatexExprParser.CMD_FRAC, 0)!;
    }
    public LBRACE(): antlr.TerminalNode[];
    public LBRACE(i: number): antlr.TerminalNode | null;
    public LBRACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(LatexExprParser.LBRACE);
    	} else {
    		return this.getToken(LatexExprParser.LBRACE, i);
    	}
    }
    public RBRACE(): antlr.TerminalNode[];
    public RBRACE(i: number): antlr.TerminalNode | null;
    public RBRACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(LatexExprParser.RBRACE);
    	} else {
    		return this.getToken(LatexExprParser.RBRACE, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterFracCommand) {
             listener.enterFracCommand(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitFracCommand) {
             listener.exitFracCommand(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitFracCommand) {
            return visitor.visitFracCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GreekCommandContext extends CommandContext {
    public constructor(ctx: CommandContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public GREEK_CMD(): antlr.TerminalNode {
        return this.getToken(LatexExprParser.GREEK_CMD, 0)!;
    }
    public override enterRule(listener: LatexExprListener): void {
        if(listener.enterGreekCommand) {
             listener.enterGreekCommand(this);
        }
    }
    public override exitRule(listener: LatexExprListener): void {
        if(listener.exitGreekCommand) {
             listener.exitGreekCommand(this);
        }
    }
    public override accept<Result>(visitor: LatexExprVisitor<Result>): Result | null {
        if (visitor.visitGreekCommand) {
            return visitor.visitGreekCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
