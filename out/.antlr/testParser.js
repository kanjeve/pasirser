// Generated from c:/Users/kaAAA/pasirser/test.g4 by ANTLR 4.13.1
import * as antlr from "antlr4ng";
export class testParser extends antlr.Parser {
    get grammarFileName() { return "test.g4"; }
    get literalNames() { return testParser.literalNames; }
    get symbolicNames() { return testParser.symbolicNames; }
    get ruleNames() { return testParser.ruleNames; }
    get serializedATN() { return testParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, testParser._ATN, testParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    prog() {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, testParser.RULE_prog);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 9;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1184) !== 0)) {
                    {
                        {
                            this.state = 6;
                            this.statement();
                        }
                    }
                    this.state = 11;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 12;
                this.match(testParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statement() {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, testParser.RULE_statement);
        try {
            this.state = 18;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.LPAREN:
                case testParser.INT:
                    localContext = new ExprStatementContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 14;
                        this.expr(0);
                        this.state = 15;
                        this.match(testParser.SEMI);
                    }
                    break;
                case testParser.SEMI:
                    localContext = new EmptyLineStatementContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 17;
                        this.match(testParser.SEMI);
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 4;
        this.enterRecursionRule(localContext, 4, testParser.RULE_expr, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 26;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case testParser.INT:
                        {
                            localContext = new IntContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 21;
                            this.match(testParser.INT);
                        }
                        break;
                    case testParser.LPAREN:
                        {
                            localContext = new ParenContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 22;
                            this.match(testParser.LPAREN);
                            this.state = 23;
                            this.expr(0);
                            this.state = 24;
                            this.match(testParser.RPAREN);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 42;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 40;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                                case 1:
                                    {
                                        localContext = new MulContext(new ExprContext(parentContext, parentState));
                                        this.pushNewRecursionContext(localContext, _startState, testParser.RULE_expr);
                                        this.state = 28;
                                        if (!(this.precpred(this.context, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                                        }
                                        this.state = 29;
                                        this.match(testParser.MULT);
                                        this.state = 30;
                                        this.expr(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new DivContext(new ExprContext(parentContext, parentState));
                                        this.pushNewRecursionContext(localContext, _startState, testParser.RULE_expr);
                                        this.state = 31;
                                        if (!(this.precpred(this.context, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                                        }
                                        this.state = 32;
                                        this.match(testParser.DIV);
                                        this.state = 33;
                                        this.expr(6);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new AddContext(new ExprContext(parentContext, parentState));
                                        this.pushNewRecursionContext(localContext, _startState, testParser.RULE_expr);
                                        this.state = 34;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 35;
                                        this.match(testParser.PLUS);
                                        this.state = 36;
                                        this.expr(5);
                                    }
                                    break;
                                case 4:
                                    {
                                        localContext = new SubContext(new ExprContext(parentContext, parentState));
                                        this.pushNewRecursionContext(localContext, _startState, testParser.RULE_expr);
                                        this.state = 37;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 38;
                                        this.match(testParser.MINUS);
                                        this.state = 39;
                                        this.expr(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 44;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.expr_sempred(localContext, predIndex);
        }
        return true;
    }
    expr_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this.context, 6);
            case 1:
                return this.precpred(this.context, 5);
            case 2:
                return this.precpred(this.context, 4);
            case 3:
                return this.precpred(this.context, 3);
        }
        return true;
    }
    static get _ATN() {
        if (!testParser.__ATN) {
            testParser.__ATN = new antlr.ATNDeserializer().deserialize(testParser._serializedATN);
        }
        return testParser.__ATN;
    }
    get vocabulary() {
        return testParser.vocabulary;
    }
}
testParser.PLUS = 1;
testParser.MINUS = 2;
testParser.MULT = 3;
testParser.DIV = 4;
testParser.LPAREN = 5;
testParser.RPAREN = 6;
testParser.INT = 7;
testParser.NEWLINE = 8;
testParser.WS = 9;
testParser.SEMI = 10;
testParser.VARIABLE = 11;
testParser.RULE_prog = 0;
testParser.RULE_statement = 1;
testParser.RULE_expr = 2;
testParser.literalNames = [
    null, "'+'", "'-'", "'*'", "'/'", "'('", "')'", null, "'\\n'", null,
    "';'"
];
testParser.symbolicNames = [
    null, "PLUS", "MINUS", "MULT", "DIV", "LPAREN", "RPAREN", "INT",
    "NEWLINE", "WS", "SEMI", "VARIABLE"
];
testParser.ruleNames = [
    "prog", "statement", "expr",
];
testParser._serializedATN = [
    4, 1, 11, 46, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 1, 0, 5, 0, 8, 8, 0, 10, 0, 12, 0, 11, 9, 0,
    1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 19, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 27,
    8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 41, 8, 2, 10,
    2, 12, 2, 44, 9, 2, 1, 2, 0, 1, 4, 3, 0, 2, 4, 0, 0, 49, 0, 9, 1, 0, 0, 0, 2, 18, 1, 0, 0, 0,
    4, 26, 1, 0, 0, 0, 6, 8, 3, 2, 1, 0, 7, 6, 1, 0, 0, 0, 8, 11, 1, 0, 0, 0, 9, 7, 1, 0, 0, 0, 9,
    10, 1, 0, 0, 0, 10, 12, 1, 0, 0, 0, 11, 9, 1, 0, 0, 0, 12, 13, 5, 0, 0, 1, 13, 1, 1, 0, 0, 0,
    14, 15, 3, 4, 2, 0, 15, 16, 5, 10, 0, 0, 16, 19, 1, 0, 0, 0, 17, 19, 5, 10, 0, 0, 18, 14,
    1, 0, 0, 0, 18, 17, 1, 0, 0, 0, 19, 3, 1, 0, 0, 0, 20, 21, 6, 2, -1, 0, 21, 27, 5, 7, 0, 0,
    22, 23, 5, 5, 0, 0, 23, 24, 3, 4, 2, 0, 24, 25, 5, 6, 0, 0, 25, 27, 1, 0, 0, 0, 26, 20, 1,
    0, 0, 0, 26, 22, 1, 0, 0, 0, 27, 42, 1, 0, 0, 0, 28, 29, 10, 6, 0, 0, 29, 30, 5, 3, 0, 0, 30,
    41, 3, 4, 2, 7, 31, 32, 10, 5, 0, 0, 32, 33, 5, 4, 0, 0, 33, 41, 3, 4, 2, 6, 34, 35, 10, 4,
    0, 0, 35, 36, 5, 1, 0, 0, 36, 41, 3, 4, 2, 5, 37, 38, 10, 3, 0, 0, 38, 39, 5, 2, 0, 0, 39,
    41, 3, 4, 2, 4, 40, 28, 1, 0, 0, 0, 40, 31, 1, 0, 0, 0, 40, 34, 1, 0, 0, 0, 40, 37, 1, 0, 0,
    0, 41, 44, 1, 0, 0, 0, 42, 40, 1, 0, 0, 0, 42, 43, 1, 0, 0, 0, 43, 5, 1, 0, 0, 0, 44, 42, 1,
    0, 0, 0, 5, 9, 18, 26, 40, 42
];
testParser.vocabulary = new antlr.Vocabulary(testParser.literalNames, testParser.symbolicNames, []);
testParser.decisionsToDFA = testParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
export class ProgContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(testParser.EOF, 0);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        return this.getRuleContext(i, StatementContext);
    }
    get ruleIndex() {
        return testParser.RULE_prog;
    }
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
}
export class StatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_statement;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class ExprStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    enterRule(listener) {
        if (listener.enterExprStatement) {
            listener.enterExprStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExprStatement) {
            listener.exitExprStatement(this);
        }
    }
}
export class EmptyLineStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    enterRule(listener) {
        if (listener.enterEmptyLineStatement) {
            listener.enterEmptyLineStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEmptyLineStatement) {
            listener.exitEmptyLineStatement(this);
        }
    }
}
export class ExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_expr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class DivContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    DIV() {
        return this.getToken(testParser.DIV, 0);
    }
    enterRule(listener) {
        if (listener.enterDiv) {
            listener.enterDiv(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDiv) {
            listener.exitDiv(this);
        }
    }
}
export class AddContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    PLUS() {
        return this.getToken(testParser.PLUS, 0);
    }
    enterRule(listener) {
        if (listener.enterAdd) {
            listener.enterAdd(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAdd) {
            listener.exitAdd(this);
        }
    }
}
export class SubContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    MINUS() {
        return this.getToken(testParser.MINUS, 0);
    }
    enterRule(listener) {
        if (listener.enterSub) {
            listener.enterSub(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSub) {
            listener.exitSub(this);
        }
    }
}
export class MulContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    MULT() {
        return this.getToken(testParser.MULT, 0);
    }
    enterRule(listener) {
        if (listener.enterMul) {
            listener.enterMul(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMul) {
            listener.exitMul(this);
        }
    }
}
export class IntContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    INT() {
        return this.getToken(testParser.INT, 0);
    }
    enterRule(listener) {
        if (listener.enterInt) {
            listener.enterInt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInt) {
            listener.exitInt(this);
        }
    }
}
export class ParenContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    enterRule(listener) {
        if (listener.enterParen) {
            listener.enterParen(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParen) {
            listener.exitParen(this);
        }
    }
}
//# sourceMappingURL=testParser.js.map