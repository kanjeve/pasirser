"use strict";
// Generated from /home/kanji/risaproject/pasirser/test.g4 by ANTLR 4.13.1
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QeOrExprContext = exports.TernaryContext = exports.TernaryExprContext = exports.AssignContext = exports.NoAssignmentContext = exports.StructAssignContext = exports.ListAssignContext = exports.AssignmentExprContext = exports.MainContext = exports.ExprContext = exports.ModuleStartContext = exports.ModuleAssignContext = exports.ModuleEndContext = exports.ModuleFunctionContext = exports.FunctionModuleContext = exports.FcallContext = exports.FunctionCallContext = exports.StrctContext = exports.FunctionStructContext = exports.BreakContext = exports.FunctionBreakContext = exports.ContinueContext = exports.FunctionContinueContext = exports.ReturnContext = exports.FunctionReturnContext = exports.DoContext = exports.FunctionDoContext = exports.WhileContext = exports.FunctionWhileContext = exports.ForContext = exports.FunctionForContext = exports.IfContext = exports.FunctionIfContext = exports.DefContext = exports.FunctionDefinitionContext = exports.EmptyLineStatementContext = exports.ContinueStatementContext = exports.ForStatementContext = exports.WhileStatementContext = exports.ReturnStatementContext = exports.ExprStatementContext = exports.StructStatementContext = exports.ModuleStatementContext = exports.DoStatementContext = exports.DefinitionStatementContext = exports.IfStatementContext = exports.BreakStatementContext = exports.StatementContext = exports.ProgContext = exports.testParser = void 0;
exports.FIdContext = exports.VIdContext = exports.IdContext = exports.RatNumContext = exports.DecNumContext = exports.NumContext = exports.FloatContext = exports.DecimalContext = exports.RatContext = exports.RationalContext = exports.DpContext = exports.DpolyContext = exports.ParenContext = exports.DpLiteralContext = exports.SpecNumContext = exports.FCallExprContext = exports.RealContext = exports.CharLiteralContext = exports.StringLiteralContext = exports.IdExprContext = exports.ListLiteralContext = exports.PrimaryExprContext = exports.IndexAccessContext = exports.IndexAccessExprContext = exports.PowerContext = exports.PowerExprContext = exports.PostFixContext = exports.PostfixExprContext = exports.PreDecrementContext = exports.NotExprContext = exports.UnaryMinusContext = exports.PostFixExprContext = exports.PowExprContext = exports.PreIncrementContext = exports.UnaryExprContext = exports.MulDivSurContext = exports.MulDivSurExprContext = exports.AddSubContext = exports.AddSubExprContext = exports.CompareContext = exports.CompareExprContext = exports.AndContext = exports.AndExprContext = exports.OrContext = exports.OrExprContext = exports.QECompareContext = exports.QeCompareExprContext = exports.QEandContext = exports.QeAndExprContext = exports.QEorContext = void 0;
exports.SentenceContext = exports.Sentence1Context = exports.BlockContext = exports.ListExprContext = exports.ListContext = exports.NapContext = exports.ImaContext = exports.PiContext = exports.BefNContext = exports.BefContext = exports.SpecialnumContext = exports.V2IdContext = void 0;
const antlr = __importStar(require("antlr4ng"));
class testParser extends antlr.Parser {
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
                this.state = 77;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4018207409) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 51199) !== 0)) {
                    {
                        {
                            this.state = 74;
                            this.statement();
                        }
                    }
                    this.state = 79;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 80;
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
        let _la;
        try {
            this.state = 96;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.LTLT:
                case testParser.COLON2:
                case testParser.INC:
                case testParser.DEC:
                case testParser.NOT:
                case testParser.MINUS:
                case testParser.LPAREN:
                case testParser.LBRACKET:
                case testParser.FLOAT:
                case testParser.INT:
                case testParser.IMAGINARY:
                case testParser.PI:
                case testParser.NAPIER:
                case testParser.BEFORE:
                case testParser.BEFORE_N:
                case testParser.VAR_2:
                case testParser.FUNC_ID:
                case testParser.VAR_ID:
                case testParser.STRING2:
                case testParser.STRING1:
                    localContext = new ExprStatementContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 82;
                        this.expr();
                        this.state = 83;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 37 || _la === 38)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case testParser.SEMI:
                case testParser.DOLLAR:
                    localContext = new EmptyLineStatementContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 85;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 37 || _la === 38)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case testParser.DEF:
                    localContext = new DefinitionStatementContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 86;
                        this.functionDefinition();
                    }
                    break;
                case testParser.IF:
                    localContext = new IfStatementContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 87;
                        this.functionIf();
                    }
                    break;
                case testParser.FOR:
                    localContext = new ForStatementContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 88;
                        this.functionFor();
                    }
                    break;
                case testParser.WHILE:
                    localContext = new WhileStatementContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 89;
                        this.functionWhile();
                    }
                    break;
                case testParser.DO:
                    localContext = new DoStatementContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 90;
                        this.functionDo();
                    }
                    break;
                case testParser.RETURN:
                    localContext = new ReturnStatementContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 91;
                        this.functionReturn();
                    }
                    break;
                case testParser.BREAK:
                    localContext = new BreakStatementContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 92;
                        this.functionBreak();
                    }
                    break;
                case testParser.CONTINUE:
                    localContext = new ContinueStatementContext(localContext);
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 93;
                        this.functionContinue();
                    }
                    break;
                case testParser.STRUCT:
                    localContext = new StructStatementContext(localContext);
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 94;
                        this.functionStruct();
                    }
                    break;
                case testParser.MODULE:
                case testParser.ENDMODULE:
                case testParser.EXTERN:
                case testParser.STATIC:
                case testParser.GLOBAL:
                case testParser.LOCAL:
                case testParser.LOCALF:
                    localContext = new ModuleStatementContext(localContext);
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 95;
                        this.functionModule();
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
    functionDefinition() {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 4, testParser.RULE_functionDefinition);
        let _la;
        try {
            localContext = new DefContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 98;
                this.match(testParser.DEF);
                this.state = 99;
                this.match(testParser.FUNC_ID);
                this.state = 100;
                this.match(testParser.LPAREN);
                this.state = 109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 75) {
                    {
                        this.state = 101;
                        this.match(testParser.VAR_ID);
                        this.state = 106;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 102;
                                    this.match(testParser.COMMA);
                                    this.state = 103;
                                    this.match(testParser.VAR_ID);
                                }
                            }
                            this.state = 108;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 111;
                this.match(testParser.RPAREN);
                this.state = 112;
                this.block();
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
    functionIf() {
        let localContext = new FunctionIfContext(this.context, this.state);
        this.enterRule(localContext, 6, testParser.RULE_functionIf);
        try {
            localContext = new IfContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 114;
                this.match(testParser.IF);
                this.state = 115;
                this.match(testParser.LPAREN);
                this.state = 116;
                this.expr();
                this.state = 117;
                this.match(testParser.RPAREN);
                this.state = 118;
                this.block();
                this.state = 124;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                    case 1:
                        {
                            this.state = 119;
                            this.match(testParser.ELSE);
                            this.state = 122;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                                case 1:
                                    {
                                        this.state = 120;
                                        this.block();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 121;
                                        this.functionIf();
                                    }
                                    break;
                            }
                        }
                        break;
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
            this.exitRule();
        }
        return localContext;
    }
    functionFor() {
        let localContext = new FunctionForContext(this.context, this.state);
        this.enterRule(localContext, 8, testParser.RULE_functionFor);
        let _la;
        try {
            localContext = new ForContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 126;
                this.match(testParser.FOR);
                this.state = 127;
                this.match(testParser.LPAREN);
                this.state = 136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 128;
                        this.expr();
                        this.state = 133;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 129;
                                    this.match(testParser.COMMA);
                                    this.state = 130;
                                    this.expr();
                                }
                            }
                            this.state = 135;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 138;
                this.match(testParser.SEMI);
                this.state = 147;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 139;
                        this.expr();
                        this.state = 144;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 140;
                                    this.match(testParser.COMMA);
                                    this.state = 141;
                                    this.expr();
                                }
                            }
                            this.state = 146;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 149;
                this.match(testParser.SEMI);
                this.state = 158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 150;
                        this.expr();
                        this.state = 155;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 151;
                                    this.match(testParser.COMMA);
                                    this.state = 152;
                                    this.expr();
                                }
                            }
                            this.state = 157;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 160;
                this.match(testParser.RPAREN);
                this.state = 161;
                this.block();
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
    functionWhile() {
        let localContext = new FunctionWhileContext(this.context, this.state);
        this.enterRule(localContext, 10, testParser.RULE_functionWhile);
        let _la;
        try {
            localContext = new WhileContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 163;
                this.match(testParser.WHILE);
                this.state = 164;
                this.match(testParser.LPAREN);
                this.state = 173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 165;
                        this.expr();
                        this.state = 170;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 166;
                                    this.match(testParser.COMMA);
                                    this.state = 167;
                                    this.expr();
                                }
                            }
                            this.state = 172;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 175;
                this.match(testParser.RPAREN);
                this.state = 176;
                this.block();
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
    functionDo() {
        let localContext = new FunctionDoContext(this.context, this.state);
        this.enterRule(localContext, 12, testParser.RULE_functionDo);
        let _la;
        try {
            localContext = new DoContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 178;
                this.match(testParser.DO);
                this.state = 179;
                this.block();
                this.state = 180;
                this.match(testParser.WHILE);
                this.state = 181;
                this.match(testParser.LPAREN);
                this.state = 190;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 182;
                        this.expr();
                        this.state = 187;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 183;
                                    this.match(testParser.COMMA);
                                    this.state = 184;
                                    this.expr();
                                }
                            }
                            this.state = 189;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 192;
                this.match(testParser.RPAREN);
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
    functionReturn() {
        let localContext = new FunctionReturnContext(this.context, this.state);
        this.enterRule(localContext, 14, testParser.RULE_functionReturn);
        let _la;
        try {
            localContext = new ReturnContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 194;
                this.match(testParser.RETURN);
                this.state = 196;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 195;
                        this.expr();
                    }
                }
                this.state = 198;
                _la = this.tokenStream.LA(1);
                if (!(_la === 37 || _la === 38)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    functionContinue() {
        let localContext = new FunctionContinueContext(this.context, this.state);
        this.enterRule(localContext, 16, testParser.RULE_functionContinue);
        let _la;
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 200;
                this.match(testParser.CONTINUE);
                this.state = 201;
                _la = this.tokenStream.LA(1);
                if (!(_la === 37 || _la === 38)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    functionBreak() {
        let localContext = new FunctionBreakContext(this.context, this.state);
        this.enterRule(localContext, 18, testParser.RULE_functionBreak);
        let _la;
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 203;
                this.match(testParser.BREAK);
                this.state = 204;
                _la = this.tokenStream.LA(1);
                if (!(_la === 37 || _la === 38)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    functionStruct() {
        let localContext = new FunctionStructContext(this.context, this.state);
        this.enterRule(localContext, 20, testParser.RULE_functionStruct);
        let _la;
        try {
            localContext = new StrctContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 206;
                this.match(testParser.STRUCT);
                this.state = 207;
                _la = this.tokenStream.LA(1);
                if (!(_la === 74 || _la === 75)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 208;
                this.match(testParser.LBRANCE);
                this.state = 209;
                _la = this.tokenStream.LA(1);
                if (!(_la === 74 || _la === 75)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                        {
                            this.state = 210;
                            this.match(testParser.COMMA);
                            this.state = 211;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 74 || _la === 75)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 216;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 217;
                this.match(testParser.RBRANCE);
                this.state = 218;
                _la = this.tokenStream.LA(1);
                if (!(_la === 37 || _la === 38)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    functionCall() {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 22, testParser.RULE_functionCall);
        let _la;
        try {
            localContext = new FcallContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 221;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 220;
                        this.match(testParser.COLON2);
                    }
                }
                this.state = 223;
                this.match(testParser.FUNC_ID);
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 43) {
                    {
                        this.state = 224;
                        this.match(testParser.POINT);
                        this.state = 225;
                        this.match(testParser.FUNC_ID);
                    }
                }
                this.state = 228;
                this.match(testParser.LPAREN);
                this.state = 237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 229;
                        this.expr();
                        this.state = 234;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 230;
                                    this.match(testParser.COMMA);
                                    this.state = 231;
                                    this.expr();
                                }
                            }
                            this.state = 236;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 239;
                this.match(testParser.RPAREN);
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
    functionModule() {
        let localContext = new FunctionModuleContext(this.context, this.state);
        this.enterRule(localContext, 24, testParser.RULE_functionModule);
        let _la;
        try {
            this.state = 266;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.EXTERN:
                case testParser.STATIC:
                case testParser.GLOBAL:
                case testParser.LOCAL:
                    localContext = new ModuleAssignContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 241;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 15) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 242;
                        this.match(testParser.VAR_ID);
                        this.state = 247;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 243;
                                    this.match(testParser.COMMA);
                                    this.state = 244;
                                    this.match(testParser.VAR_ID);
                                }
                            }
                            this.state = 249;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 250;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 37 || _la === 38)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case testParser.LOCALF:
                    localContext = new ModuleFunctionContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 251;
                        this.match(testParser.LOCALF);
                        this.state = 252;
                        this.match(testParser.FUNC_ID);
                        this.state = 257;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 253;
                                    this.match(testParser.COMMA);
                                    this.state = 254;
                                    this.match(testParser.FUNC_ID);
                                }
                            }
                            this.state = 259;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 260;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 37 || _la === 38)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case testParser.MODULE:
                    localContext = new ModuleStartContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 261;
                        this.match(testParser.MODULE);
                        this.state = 262;
                        this.match(testParser.FUNC_ID);
                        this.state = 263;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 37 || _la === 38)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case testParser.ENDMODULE:
                    localContext = new ModuleEndContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 264;
                        this.match(testParser.ENDMODULE);
                        this.state = 265;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 37 || _la === 38)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
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
    expr() {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 26, testParser.RULE_expr);
        try {
            localContext = new MainContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 268;
                this.assignmentExpr();
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
    assignmentExpr() {
        let localContext = new AssignmentExprContext(this.context, this.state);
        this.enterRule(localContext, 28, testParser.RULE_assignmentExpr);
        let _la;
        try {
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context)) {
                case 1:
                    localContext = new NoAssignmentContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 270;
                        this.ternaryExpr();
                    }
                    break;
                case 2:
                    localContext = new AssignContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 271;
                        this.match(testParser.VAR_ID);
                        this.state = 278;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 33) {
                            {
                                {
                                    this.state = 272;
                                    this.match(testParser.LBRACKET);
                                    this.state = 273;
                                    this.expr();
                                    this.state = 274;
                                    this.match(testParser.RBRACKET);
                                }
                            }
                            this.state = 280;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 281;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 282;
                        this.assignmentExpr();
                    }
                    break;
                case 3:
                    localContext = new StructAssignContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 283;
                        this.match(testParser.VAR_ID);
                        this.state = 286;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 284;
                                    this.match(testParser.ARROW);
                                    this.state = 285;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 74 || _la === 75)) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                            this.state = 288;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 12);
                        this.state = 290;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 291;
                        this.assignmentExpr();
                    }
                    break;
                case 4:
                    localContext = new ListAssignContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 292;
                        this.match(testParser.LBRACKET);
                        this.state = 293;
                        this.match(testParser.VAR_ID);
                        this.state = 298;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 294;
                                    this.match(testParser.COMMA);
                                    this.state = 295;
                                    this.match(testParser.VAR_ID);
                                }
                            }
                            this.state = 300;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 301;
                        this.match(testParser.RBRACKET);
                        this.state = 302;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 303;
                        this.assignmentExpr();
                    }
                    break;
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
    ternaryExpr() {
        let localContext = new TernaryExprContext(this.context, this.state);
        this.enterRule(localContext, 30, testParser.RULE_ternaryExpr);
        let _la;
        try {
            localContext = new TernaryContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 306;
                this.qeOrExpr();
                this.state = 312;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 35) {
                    {
                        this.state = 307;
                        this.match(testParser.QUESTION);
                        this.state = 308;
                        this.expr();
                        this.state = 309;
                        this.match(testParser.COLON);
                        this.state = 310;
                        this.expr();
                    }
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
            this.exitRule();
        }
        return localContext;
    }
    qeOrExpr() {
        let localContext = new QeOrExprContext(this.context, this.state);
        this.enterRule(localContext, 32, testParser.RULE_qeOrExpr);
        let _la;
        try {
            localContext = new QEorContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 314;
                this.qeAndExpr();
                this.state = 319;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 55) {
                    {
                        {
                            this.state = 315;
                            this.match(testParser.QE_7);
                            this.state = 316;
                            this.qeAndExpr();
                        }
                    }
                    this.state = 321;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    qeAndExpr() {
        let localContext = new QeAndExprContext(this.context, this.state);
        this.enterRule(localContext, 34, testParser.RULE_qeAndExpr);
        let _la;
        try {
            localContext = new QEandContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 322;
                this.qeCompareExpr();
                this.state = 327;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 54) {
                    {
                        {
                            this.state = 323;
                            this.match(testParser.QE_6);
                            this.state = 324;
                            this.qeCompareExpr();
                        }
                    }
                    this.state = 329;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    qeCompareExpr() {
        let localContext = new QeCompareExprContext(this.context, this.state);
        this.enterRule(localContext, 36, testParser.RULE_qeCompareExpr);
        let _la;
        try {
            localContext = new QECompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 330;
                this.orExpr();
                this.state = 335;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 31) !== 0)) {
                    {
                        {
                            this.state = 331;
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 31) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 332;
                            this.orExpr();
                        }
                    }
                    this.state = 337;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    orExpr() {
        let localContext = new OrExprContext(this.context, this.state);
        this.enterRule(localContext, 38, testParser.RULE_orExpr);
        let _la;
        try {
            localContext = new OrContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 338;
                this.andExpr();
                this.state = 343;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 20) {
                    {
                        {
                            this.state = 339;
                            this.match(testParser.OR);
                            this.state = 340;
                            this.andExpr();
                        }
                    }
                    this.state = 345;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    andExpr() {
        let localContext = new AndExprContext(this.context, this.state);
        this.enterRule(localContext, 40, testParser.RULE_andExpr);
        let _la;
        try {
            localContext = new AndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 346;
                this.compareExpr();
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 19) {
                    {
                        {
                            this.state = 347;
                            this.match(testParser.AND);
                            this.state = 348;
                            this.compareExpr();
                        }
                    }
                    this.state = 353;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    compareExpr() {
        let localContext = new CompareExprContext(this.context, this.state);
        this.enterRule(localContext, 42, testParser.RULE_compareExpr);
        let _la;
        try {
            localContext = new CompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 354;
                this.addSubExpr();
                this.state = 359;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                    {
                        {
                            this.state = 355;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 356;
                            this.addSubExpr();
                        }
                    }
                    this.state = 361;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    addSubExpr() {
        let localContext = new AddSubExprContext(this.context, this.state);
        this.enterRule(localContext, 44, testParser.RULE_addSubExpr);
        let _la;
        try {
            localContext = new AddSubContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 362;
                this.mulDivSurExpr();
                this.state = 367;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 22 || _la === 23) {
                    {
                        {
                            this.state = 363;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 22 || _la === 23)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 364;
                            this.mulDivSurExpr();
                        }
                    }
                    this.state = 369;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    mulDivSurExpr() {
        let localContext = new MulDivSurExprContext(this.context, this.state);
        this.enterRule(localContext, 46, testParser.RULE_mulDivSurExpr);
        let _la;
        try {
            localContext = new MulDivSurContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 370;
                this.unaryExpr();
                this.state = 375;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                    {
                        {
                            this.state = 371;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 372;
                            this.unaryExpr();
                        }
                    }
                    this.state = 377;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    unaryExpr() {
        let localContext = new UnaryExprContext(this.context, this.state);
        this.enterRule(localContext, 48, testParser.RULE_unaryExpr);
        try {
            this.state = 388;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context)) {
                case 1:
                    localContext = new UnaryMinusContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 378;
                        this.match(testParser.MINUS);
                        this.state = 379;
                        this.unaryExpr();
                    }
                    break;
                case 2:
                    localContext = new NotExprContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 380;
                        this.match(testParser.NOT);
                        this.state = 381;
                        this.unaryExpr();
                    }
                    break;
                case 3:
                    localContext = new PreIncrementContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 382;
                        this.match(testParser.INC);
                        this.state = 383;
                        this.match(testParser.VAR_ID);
                    }
                    break;
                case 4:
                    localContext = new PreDecrementContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 384;
                        this.match(testParser.DEC);
                        this.state = 385;
                        this.match(testParser.VAR_ID);
                    }
                    break;
                case 5:
                    localContext = new PostFixExprContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 386;
                        this.postfixExpr();
                    }
                    break;
                case 6:
                    localContext = new PowExprContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 387;
                        this.powerExpr();
                    }
                    break;
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
    postfixExpr() {
        let localContext = new PostfixExprContext(this.context, this.state);
        this.enterRule(localContext, 50, testParser.RULE_postfixExpr);
        let _la;
        try {
            localContext = new PostFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 390;
                this.powerExpr();
                this.state = 391;
                _la = this.tokenStream.LA(1);
                if (!(_la === 4 || _la === 5)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localContext;
    }
    powerExpr() {
        let localContext = new PowerExprContext(this.context, this.state);
        this.enterRule(localContext, 52, testParser.RULE_powerExpr);
        let _la;
        try {
            localContext = new PowerContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 393;
                this.indexAccessExpr();
                this.state = 396;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                        this.state = 394;
                        this.match(testParser.POWER);
                        this.state = 395;
                        this.powerExpr();
                    }
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
            this.exitRule();
        }
        return localContext;
    }
    indexAccessExpr() {
        let localContext = new IndexAccessExprContext(this.context, this.state);
        this.enterRule(localContext, 54, testParser.RULE_indexAccessExpr);
        let _la;
        try {
            localContext = new IndexAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 398;
                this.primaryExpr();
                this.state = 405;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 33) {
                    {
                        {
                            this.state = 399;
                            this.match(testParser.LBRACKET);
                            this.state = 400;
                            this.expr();
                            this.state = 401;
                            this.match(testParser.RBRACKET);
                        }
                    }
                    this.state = 407;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
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
            this.exitRule();
        }
        return localContext;
    }
    primaryExpr() {
        let localContext = new PrimaryExprContext(this.context, this.state);
        this.enterRule(localContext, 56, testParser.RULE_primaryExpr);
        try {
            this.state = 420;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context)) {
                case 1:
                    localContext = new RealContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 408;
                        this.num();
                    }
                    break;
                case 2:
                    localContext = new IdExprContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 409;
                        this.id();
                    }
                    break;
                case 3:
                    localContext = new FCallExprContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 410;
                        this.functionCall();
                    }
                    break;
                case 4:
                    localContext = new ParenContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 411;
                        this.match(testParser.LPAREN);
                        this.state = 412;
                        this.expr();
                        this.state = 413;
                        this.match(testParser.RPAREN);
                    }
                    break;
                case 5:
                    localContext = new SpecNumContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 415;
                        this.specialnum();
                    }
                    break;
                case 6:
                    localContext = new StringLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 416;
                        this.match(testParser.STRING2);
                    }
                    break;
                case 7:
                    localContext = new CharLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 417;
                        this.match(testParser.STRING1);
                    }
                    break;
                case 8:
                    localContext = new ListLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 418;
                        this.list();
                    }
                    break;
                case 9:
                    localContext = new DpLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 419;
                        this.dpoly();
                    }
                    break;
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
    dpoly() {
        let localContext = new DpolyContext(this.context, this.state);
        this.enterRule(localContext, 58, testParser.RULE_dpoly);
        let _la;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 422;
                this.match(testParser.LTLT);
                this.state = 423;
                this.match(testParser.INT);
                this.state = 428;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                        {
                            this.state = 424;
                            this.match(testParser.COMMA);
                            this.state = 425;
                            this.match(testParser.INT);
                        }
                    }
                    this.state = 430;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 433;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 36) {
                    {
                        this.state = 431;
                        this.match(testParser.COLON);
                        this.state = 432;
                        this.match(testParser.INT);
                    }
                }
                this.state = 435;
                this.match(testParser.GTGT);
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
    rational() {
        let localContext = new RationalContext(this.context, this.state);
        this.enterRule(localContext, 60, testParser.RULE_rational);
        let _la;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 438;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 437;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 440;
                this.match(testParser.INT);
                this.state = 441;
                this.match(testParser.DIV);
                this.state = 443;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 442;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 445;
                this.match(testParser.INT);
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
    decimal() {
        let localContext = new DecimalContext(this.context, this.state);
        this.enterRule(localContext, 62, testParser.RULE_decimal);
        let _la;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 447;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 450;
                _la = this.tokenStream.LA(1);
                if (!(_la === 40 || _la === 42)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 452;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                        this.state = 451;
                        this.match(testParser.EXP);
                    }
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
            this.exitRule();
        }
        return localContext;
    }
    num() {
        let localContext = new NumContext(this.context, this.state);
        this.enterRule(localContext, 64, testParser.RULE_num);
        try {
            this.state = 456;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
                case 1:
                    localContext = new RatNumContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 454;
                        this.rational();
                    }
                    break;
                case 2:
                    localContext = new DecNumContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 455;
                        this.decimal();
                    }
                    break;
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
    id() {
        let localContext = new IdContext(this.context, this.state);
        this.enterRule(localContext, 66, testParser.RULE_id);
        let _la;
        try {
            this.state = 465;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.VAR_ID:
                    localContext = new VIdContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 458;
                        this.match(testParser.VAR_ID);
                    }
                    break;
                case testParser.FUNC_ID:
                    localContext = new FIdContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 459;
                        this.match(testParser.FUNC_ID);
                        this.state = 462;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 43) {
                            {
                                this.state = 460;
                                this.match(testParser.POINT);
                                this.state = 461;
                                this.match(testParser.FUNC_ID);
                            }
                        }
                    }
                    break;
                case testParser.VAR_2:
                    localContext = new V2IdContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 464;
                        this.match(testParser.VAR_2);
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
    specialnum() {
        let localContext = new SpecialnumContext(this.context, this.state);
        this.enterRule(localContext, 68, testParser.RULE_specialnum);
        try {
            this.state = 472;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.IMAGINARY:
                    localContext = new ImaContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 467;
                        this.match(testParser.IMAGINARY);
                    }
                    break;
                case testParser.PI:
                    localContext = new PiContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 468;
                        this.match(testParser.PI);
                    }
                    break;
                case testParser.NAPIER:
                    localContext = new NapContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 469;
                        this.match(testParser.NAPIER);
                    }
                    break;
                case testParser.BEFORE:
                    localContext = new BefContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 470;
                        this.match(testParser.BEFORE);
                    }
                    break;
                case testParser.BEFORE_N:
                    localContext = new BefNContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 471;
                        this.match(testParser.BEFORE_N);
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
    list() {
        let localContext = new ListContext(this.context, this.state);
        this.enterRule(localContext, 70, testParser.RULE_list);
        let _la;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 474;
                this.match(testParser.LBRACKET);
                this.state = 483;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                    {
                        this.state = 475;
                        this.expr();
                        this.state = 480;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 39) {
                            {
                                {
                                    this.state = 476;
                                    this.match(testParser.COMMA);
                                    this.state = 477;
                                    this.expr();
                                }
                            }
                            this.state = 482;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 485;
                this.match(testParser.RBRACKET);
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
    block() {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 72, testParser.RULE_block);
        let _la;
        try {
            this.state = 496;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.LBRANCE:
                    localContext = new SentenceContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 487;
                        this.match(testParser.LBRANCE);
                        this.state = 491;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4018207409) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 51199) !== 0)) {
                            {
                                {
                                    this.state = 488;
                                    this.statement();
                                }
                            }
                            this.state = 493;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 494;
                        this.match(testParser.RBRANCE);
                    }
                    break;
                case testParser.LTLT:
                case testParser.COLON2:
                case testParser.INC:
                case testParser.DEC:
                case testParser.NOT:
                case testParser.MINUS:
                case testParser.LPAREN:
                case testParser.LBRACKET:
                case testParser.SEMI:
                case testParser.DOLLAR:
                case testParser.FLOAT:
                case testParser.INT:
                case testParser.IMAGINARY:
                case testParser.PI:
                case testParser.NAPIER:
                case testParser.BEFORE:
                case testParser.BEFORE_N:
                case testParser.DEF:
                case testParser.IF:
                case testParser.FOR:
                case testParser.WHILE:
                case testParser.DO:
                case testParser.RETURN:
                case testParser.CONTINUE:
                case testParser.BREAK:
                case testParser.STRUCT:
                case testParser.MODULE:
                case testParser.ENDMODULE:
                case testParser.EXTERN:
                case testParser.STATIC:
                case testParser.GLOBAL:
                case testParser.LOCAL:
                case testParser.LOCALF:
                case testParser.VAR_2:
                case testParser.FUNC_ID:
                case testParser.VAR_ID:
                case testParser.STRING2:
                case testParser.STRING1:
                    localContext = new Sentence1Context(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 495;
                        this.statement();
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
exports.testParser = testParser;
testParser.LTLT = 1;
testParser.GTGT = 2;
testParser.COLON2 = 3;
testParser.INC = 4;
testParser.DEC = 5;
testParser.PLUSEQ = 6;
testParser.MINUSEQ = 7;
testParser.MULTEQ = 8;
testParser.DIVEQ = 9;
testParser.SUREQ = 10;
testParser.POWEREQ = 11;
testParser.ARROW = 12;
testParser.EQ = 13;
testParser.NEQ = 14;
testParser.LE = 15;
testParser.GE = 16;
testParser.LT = 17;
testParser.GT = 18;
testParser.AND = 19;
testParser.OR = 20;
testParser.NOT = 21;
testParser.PLUS = 22;
testParser.MINUS = 23;
testParser.MULT = 24;
testParser.DIV = 25;
testParser.SUR = 26;
testParser.POWER = 27;
testParser.ASSIGN = 28;
testParser.LPAREN = 29;
testParser.RPAREN = 30;
testParser.LBRANCE = 31;
testParser.RBRANCE = 32;
testParser.LBRACKET = 33;
testParser.RBRACKET = 34;
testParser.QUESTION = 35;
testParser.COLON = 36;
testParser.SEMI = 37;
testParser.DOLLAR = 38;
testParser.COMMA = 39;
testParser.FLOAT = 40;
testParser.EXP = 41;
testParser.INT = 42;
testParser.POINT = 43;
testParser.IMAGINARY = 44;
testParser.PI = 45;
testParser.NAPIER = 46;
testParser.BEFORE = 47;
testParser.BEFORE_N = 48;
testParser.QE_1 = 49;
testParser.QE_2 = 50;
testParser.QE_3 = 51;
testParser.QE_4 = 52;
testParser.QE_5 = 53;
testParser.QE_6 = 54;
testParser.QE_7 = 55;
testParser.DEF = 56;
testParser.IF = 57;
testParser.FOR = 58;
testParser.WHILE = 59;
testParser.DO = 60;
testParser.ELSE = 61;
testParser.RETURN = 62;
testParser.CONTINUE = 63;
testParser.BREAK = 64;
testParser.STRUCT = 65;
testParser.MODULE = 66;
testParser.ENDMODULE = 67;
testParser.EXTERN = 68;
testParser.STATIC = 69;
testParser.GLOBAL = 70;
testParser.LOCAL = 71;
testParser.LOCALF = 72;
testParser.VAR_2 = 73;
testParser.FUNC_ID = 74;
testParser.VAR_ID = 75;
testParser.NEWLINE = 76;
testParser.WS = 77;
testParser.COMMENT = 78;
testParser.STRING2 = 79;
testParser.STRING1 = 80;
testParser.RULE_prog = 0;
testParser.RULE_statement = 1;
testParser.RULE_functionDefinition = 2;
testParser.RULE_functionIf = 3;
testParser.RULE_functionFor = 4;
testParser.RULE_functionWhile = 5;
testParser.RULE_functionDo = 6;
testParser.RULE_functionReturn = 7;
testParser.RULE_functionContinue = 8;
testParser.RULE_functionBreak = 9;
testParser.RULE_functionStruct = 10;
testParser.RULE_functionCall = 11;
testParser.RULE_functionModule = 12;
testParser.RULE_expr = 13;
testParser.RULE_assignmentExpr = 14;
testParser.RULE_ternaryExpr = 15;
testParser.RULE_qeOrExpr = 16;
testParser.RULE_qeAndExpr = 17;
testParser.RULE_qeCompareExpr = 18;
testParser.RULE_orExpr = 19;
testParser.RULE_andExpr = 20;
testParser.RULE_compareExpr = 21;
testParser.RULE_addSubExpr = 22;
testParser.RULE_mulDivSurExpr = 23;
testParser.RULE_unaryExpr = 24;
testParser.RULE_postfixExpr = 25;
testParser.RULE_powerExpr = 26;
testParser.RULE_indexAccessExpr = 27;
testParser.RULE_primaryExpr = 28;
testParser.RULE_dpoly = 29;
testParser.RULE_rational = 30;
testParser.RULE_decimal = 31;
testParser.RULE_num = 32;
testParser.RULE_id = 33;
testParser.RULE_specialnum = 34;
testParser.RULE_list = 35;
testParser.RULE_block = 36;
testParser.literalNames = [
    null, "'<<'", "'>>'", "'::'", "'++'", "'--'", "'+='", "'-='", "'*='",
    "'/='", "'%='", "'^='", "'->'", "'=='", "'!='", "'<='", "'>='",
    "'<'", "'>'", "'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'",
    "'%'", "'^'", "'='", "'('", "')'", "'{'", "'}'", "'['", "']'", "'?'",
    "':'", "';'", "'$'", "','", null, null, null, "'.'", "'@i'", "'@pi'",
    "'@e'", "'@@'", "'@n'", "'@>'", "'@<'", "'@>='", "'@<='", "'@=='",
    "'@&&'", "'@||'", "'def'", "'if'", "'for'", "'while'", "'do'", "'else'",
    "'return'", "'continue'", "'break'", "'struct'", "'module'", "'endmodule'",
    "'extern'", "'static'", "'global'", "'local'", "'localf'", "'@'",
    null, null, "'\\n'"
];
testParser.symbolicNames = [
    null, "LTLT", "GTGT", "COLON2", "INC", "DEC", "PLUSEQ", "MINUSEQ",
    "MULTEQ", "DIVEQ", "SUREQ", "POWEREQ", "ARROW", "EQ", "NEQ", "LE",
    "GE", "LT", "GT", "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", "DIV",
    "SUR", "POWER", "ASSIGN", "LPAREN", "RPAREN", "LBRANCE", "RBRANCE",
    "LBRACKET", "RBRACKET", "QUESTION", "COLON", "SEMI", "DOLLAR", "COMMA",
    "FLOAT", "EXP", "INT", "POINT", "IMAGINARY", "PI", "NAPIER", "BEFORE",
    "BEFORE_N", "QE_1", "QE_2", "QE_3", "QE_4", "QE_5", "QE_6", "QE_7",
    "DEF", "IF", "FOR", "WHILE", "DO", "ELSE", "RETURN", "CONTINUE",
    "BREAK", "STRUCT", "MODULE", "ENDMODULE", "EXTERN", "STATIC", "GLOBAL",
    "LOCAL", "LOCALF", "VAR_2", "FUNC_ID", "VAR_ID", "NEWLINE", "WS",
    "COMMENT", "STRING2", "STRING1"
];
testParser.ruleNames = [
    "prog", "statement", "functionDefinition", "functionIf", "functionFor",
    "functionWhile", "functionDo", "functionReturn", "functionContinue",
    "functionBreak", "functionStruct", "functionCall", "functionModule",
    "expr", "assignmentExpr", "ternaryExpr", "qeOrExpr", "qeAndExpr",
    "qeCompareExpr", "orExpr", "andExpr", "compareExpr", "addSubExpr",
    "mulDivSurExpr", "unaryExpr", "postfixExpr", "powerExpr", "indexAccessExpr",
    "primaryExpr", "dpoly", "rational", "decimal", "num", "id", "specialnum",
    "list", "block",
];
testParser._serializedATN = [
    4, 1, 80, 499, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33,
    7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 1, 0, 5, 0, 76, 8, 0, 10, 0, 12, 0, 79, 9,
    0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 1, 97, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 105, 8, 2, 10, 2, 12, 2, 108, 9,
    2, 3, 2, 110, 8, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 123,
    8, 3, 3, 3, 125, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 132, 8, 4, 10, 4, 12, 4, 135, 9,
    4, 3, 4, 137, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 143, 8, 4, 10, 4, 12, 4, 146, 9, 4, 3, 4,
    148, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 154, 8, 4, 10, 4, 12, 4, 157, 9, 4, 3, 4, 159, 8,
    4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 169, 8, 5, 10, 5, 12, 5, 172, 9, 5,
    3, 5, 174, 8, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 186, 8, 6,
    10, 6, 12, 6, 189, 9, 6, 3, 6, 191, 8, 6, 1, 6, 1, 6, 1, 7, 1, 7, 3, 7, 197, 8, 7, 1, 7, 1,
    7, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 213,
    8, 10, 10, 10, 12, 10, 216, 9, 10, 1, 10, 1, 10, 1, 10, 1, 11, 3, 11, 222, 8, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 227, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 233, 8, 11, 10, 11,
    12, 11, 236, 9, 11, 3, 11, 238, 8, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12,
    246, 8, 12, 10, 12, 12, 12, 249, 9, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 256,
    8, 12, 10, 12, 12, 12, 259, 9, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 267,
    8, 12, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 277, 8, 14, 10, 14,
    12, 14, 280, 9, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 4, 14, 287, 8, 14, 11, 14, 12, 14,
    288, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 297, 8, 14, 10, 14, 12, 14, 300,
    9, 14, 1, 14, 1, 14, 1, 14, 3, 14, 305, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    3, 15, 313, 8, 15, 1, 16, 1, 16, 1, 16, 5, 16, 318, 8, 16, 10, 16, 12, 16, 321, 9, 16,
    1, 17, 1, 17, 1, 17, 5, 17, 326, 8, 17, 10, 17, 12, 17, 329, 9, 17, 1, 18, 1, 18, 1, 18,
    5, 18, 334, 8, 18, 10, 18, 12, 18, 337, 9, 18, 1, 19, 1, 19, 1, 19, 5, 19, 342, 8, 19,
    10, 19, 12, 19, 345, 9, 19, 1, 20, 1, 20, 1, 20, 5, 20, 350, 8, 20, 10, 20, 12, 20, 353,
    9, 20, 1, 21, 1, 21, 1, 21, 5, 21, 358, 8, 21, 10, 21, 12, 21, 361, 9, 21, 1, 22, 1, 22,
    1, 22, 5, 22, 366, 8, 22, 10, 22, 12, 22, 369, 9, 22, 1, 23, 1, 23, 1, 23, 5, 23, 374,
    8, 23, 10, 23, 12, 23, 377, 9, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24,
    1, 24, 1, 24, 3, 24, 389, 8, 24, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 3, 26, 397, 8,
    26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 404, 8, 27, 10, 27, 12, 27, 407, 9, 27, 1,
    28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 421,
    8, 28, 1, 29, 1, 29, 1, 29, 1, 29, 5, 29, 427, 8, 29, 10, 29, 12, 29, 430, 9, 29, 1, 29,
    1, 29, 3, 29, 434, 8, 29, 1, 29, 1, 29, 1, 30, 3, 30, 439, 8, 30, 1, 30, 1, 30, 1, 30, 3,
    30, 444, 8, 30, 1, 30, 1, 30, 1, 31, 3, 31, 449, 8, 31, 1, 31, 1, 31, 3, 31, 453, 8, 31,
    1, 32, 1, 32, 3, 32, 457, 8, 32, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 463, 8, 33, 1, 33, 3,
    33, 466, 8, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 473, 8, 34, 1, 35, 1, 35, 1, 35,
    1, 35, 5, 35, 479, 8, 35, 10, 35, 12, 35, 482, 9, 35, 3, 35, 484, 8, 35, 1, 35, 1, 35,
    1, 36, 1, 36, 5, 36, 490, 8, 36, 10, 36, 12, 36, 493, 9, 36, 1, 36, 1, 36, 3, 36, 497,
    8, 36, 1, 36, 0, 0, 37, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
    36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 0, 10, 1,
    0, 37, 38, 1, 0, 74, 75, 1, 0, 68, 71, 2, 0, 6, 11, 28, 28, 1, 0, 49, 53, 1, 0, 13, 18, 1,
    0, 22, 23, 1, 0, 24, 26, 1, 0, 4, 5, 2, 0, 40, 40, 42, 42, 546, 0, 77, 1, 0, 0, 0, 2, 96,
    1, 0, 0, 0, 4, 98, 1, 0, 0, 0, 6, 114, 1, 0, 0, 0, 8, 126, 1, 0, 0, 0, 10, 163, 1, 0, 0, 0,
    12, 178, 1, 0, 0, 0, 14, 194, 1, 0, 0, 0, 16, 200, 1, 0, 0, 0, 18, 203, 1, 0, 0, 0, 20, 206,
    1, 0, 0, 0, 22, 221, 1, 0, 0, 0, 24, 266, 1, 0, 0, 0, 26, 268, 1, 0, 0, 0, 28, 304, 1, 0,
    0, 0, 30, 306, 1, 0, 0, 0, 32, 314, 1, 0, 0, 0, 34, 322, 1, 0, 0, 0, 36, 330, 1, 0, 0, 0,
    38, 338, 1, 0, 0, 0, 40, 346, 1, 0, 0, 0, 42, 354, 1, 0, 0, 0, 44, 362, 1, 0, 0, 0, 46, 370,
    1, 0, 0, 0, 48, 388, 1, 0, 0, 0, 50, 390, 1, 0, 0, 0, 52, 393, 1, 0, 0, 0, 54, 398, 1, 0,
    0, 0, 56, 420, 1, 0, 0, 0, 58, 422, 1, 0, 0, 0, 60, 438, 1, 0, 0, 0, 62, 448, 1, 0, 0, 0,
    64, 456, 1, 0, 0, 0, 66, 465, 1, 0, 0, 0, 68, 472, 1, 0, 0, 0, 70, 474, 1, 0, 0, 0, 72, 496,
    1, 0, 0, 0, 74, 76, 3, 2, 1, 0, 75, 74, 1, 0, 0, 0, 76, 79, 1, 0, 0, 0, 77, 75, 1, 0, 0, 0,
    77, 78, 1, 0, 0, 0, 78, 80, 1, 0, 0, 0, 79, 77, 1, 0, 0, 0, 80, 81, 5, 0, 0, 1, 81, 1, 1, 0,
    0, 0, 82, 83, 3, 26, 13, 0, 83, 84, 7, 0, 0, 0, 84, 97, 1, 0, 0, 0, 85, 97, 7, 0, 0, 0, 86,
    97, 3, 4, 2, 0, 87, 97, 3, 6, 3, 0, 88, 97, 3, 8, 4, 0, 89, 97, 3, 10, 5, 0, 90, 97, 3, 12,
    6, 0, 91, 97, 3, 14, 7, 0, 92, 97, 3, 18, 9, 0, 93, 97, 3, 16, 8, 0, 94, 97, 3, 20, 10, 0,
    95, 97, 3, 24, 12, 0, 96, 82, 1, 0, 0, 0, 96, 85, 1, 0, 0, 0, 96, 86, 1, 0, 0, 0, 96, 87,
    1, 0, 0, 0, 96, 88, 1, 0, 0, 0, 96, 89, 1, 0, 0, 0, 96, 90, 1, 0, 0, 0, 96, 91, 1, 0, 0, 0,
    96, 92, 1, 0, 0, 0, 96, 93, 1, 0, 0, 0, 96, 94, 1, 0, 0, 0, 96, 95, 1, 0, 0, 0, 97, 3, 1, 0,
    0, 0, 98, 99, 5, 56, 0, 0, 99, 100, 5, 74, 0, 0, 100, 109, 5, 29, 0, 0, 101, 106, 5, 75,
    0, 0, 102, 103, 5, 39, 0, 0, 103, 105, 5, 75, 0, 0, 104, 102, 1, 0, 0, 0, 105, 108, 1,
    0, 0, 0, 106, 104, 1, 0, 0, 0, 106, 107, 1, 0, 0, 0, 107, 110, 1, 0, 0, 0, 108, 106, 1,
    0, 0, 0, 109, 101, 1, 0, 0, 0, 109, 110, 1, 0, 0, 0, 110, 111, 1, 0, 0, 0, 111, 112, 5,
    30, 0, 0, 112, 113, 3, 72, 36, 0, 113, 5, 1, 0, 0, 0, 114, 115, 5, 57, 0, 0, 115, 116,
    5, 29, 0, 0, 116, 117, 3, 26, 13, 0, 117, 118, 5, 30, 0, 0, 118, 124, 3, 72, 36, 0, 119,
    122, 5, 61, 0, 0, 120, 123, 3, 72, 36, 0, 121, 123, 3, 6, 3, 0, 122, 120, 1, 0, 0, 0, 122,
    121, 1, 0, 0, 0, 123, 125, 1, 0, 0, 0, 124, 119, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125,
    7, 1, 0, 0, 0, 126, 127, 5, 58, 0, 0, 127, 136, 5, 29, 0, 0, 128, 133, 3, 26, 13, 0, 129,
    130, 5, 39, 0, 0, 130, 132, 3, 26, 13, 0, 131, 129, 1, 0, 0, 0, 132, 135, 1, 0, 0, 0, 133,
    131, 1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134, 137, 1, 0, 0, 0, 135, 133, 1, 0, 0, 0, 136,
    128, 1, 0, 0, 0, 136, 137, 1, 0, 0, 0, 137, 138, 1, 0, 0, 0, 138, 147, 5, 37, 0, 0, 139,
    144, 3, 26, 13, 0, 140, 141, 5, 39, 0, 0, 141, 143, 3, 26, 13, 0, 142, 140, 1, 0, 0, 0,
    143, 146, 1, 0, 0, 0, 144, 142, 1, 0, 0, 0, 144, 145, 1, 0, 0, 0, 145, 148, 1, 0, 0, 0,
    146, 144, 1, 0, 0, 0, 147, 139, 1, 0, 0, 0, 147, 148, 1, 0, 0, 0, 148, 149, 1, 0, 0, 0,
    149, 158, 5, 37, 0, 0, 150, 155, 3, 26, 13, 0, 151, 152, 5, 39, 0, 0, 152, 154, 3, 26,
    13, 0, 153, 151, 1, 0, 0, 0, 154, 157, 1, 0, 0, 0, 155, 153, 1, 0, 0, 0, 155, 156, 1, 0,
    0, 0, 156, 159, 1, 0, 0, 0, 157, 155, 1, 0, 0, 0, 158, 150, 1, 0, 0, 0, 158, 159, 1, 0,
    0, 0, 159, 160, 1, 0, 0, 0, 160, 161, 5, 30, 0, 0, 161, 162, 3, 72, 36, 0, 162, 9, 1, 0,
    0, 0, 163, 164, 5, 59, 0, 0, 164, 173, 5, 29, 0, 0, 165, 170, 3, 26, 13, 0, 166, 167,
    5, 39, 0, 0, 167, 169, 3, 26, 13, 0, 168, 166, 1, 0, 0, 0, 169, 172, 1, 0, 0, 0, 170, 168,
    1, 0, 0, 0, 170, 171, 1, 0, 0, 0, 171, 174, 1, 0, 0, 0, 172, 170, 1, 0, 0, 0, 173, 165,
    1, 0, 0, 0, 173, 174, 1, 0, 0, 0, 174, 175, 1, 0, 0, 0, 175, 176, 5, 30, 0, 0, 176, 177,
    3, 72, 36, 0, 177, 11, 1, 0, 0, 0, 178, 179, 5, 60, 0, 0, 179, 180, 3, 72, 36, 0, 180,
    181, 5, 59, 0, 0, 181, 190, 5, 29, 0, 0, 182, 187, 3, 26, 13, 0, 183, 184, 5, 39, 0, 0,
    184, 186, 3, 26, 13, 0, 185, 183, 1, 0, 0, 0, 186, 189, 1, 0, 0, 0, 187, 185, 1, 0, 0,
    0, 187, 188, 1, 0, 0, 0, 188, 191, 1, 0, 0, 0, 189, 187, 1, 0, 0, 0, 190, 182, 1, 0, 0,
    0, 190, 191, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192, 193, 5, 30, 0, 0, 193, 13, 1, 0, 0,
    0, 194, 196, 5, 62, 0, 0, 195, 197, 3, 26, 13, 0, 196, 195, 1, 0, 0, 0, 196, 197, 1, 0,
    0, 0, 197, 198, 1, 0, 0, 0, 198, 199, 7, 0, 0, 0, 199, 15, 1, 0, 0, 0, 200, 201, 5, 63,
    0, 0, 201, 202, 7, 0, 0, 0, 202, 17, 1, 0, 0, 0, 203, 204, 5, 64, 0, 0, 204, 205, 7, 0,
    0, 0, 205, 19, 1, 0, 0, 0, 206, 207, 5, 65, 0, 0, 207, 208, 7, 1, 0, 0, 208, 209, 5, 31,
    0, 0, 209, 214, 7, 1, 0, 0, 210, 211, 5, 39, 0, 0, 211, 213, 7, 1, 0, 0, 212, 210, 1, 0,
    0, 0, 213, 216, 1, 0, 0, 0, 214, 212, 1, 0, 0, 0, 214, 215, 1, 0, 0, 0, 215, 217, 1, 0,
    0, 0, 216, 214, 1, 0, 0, 0, 217, 218, 5, 32, 0, 0, 218, 219, 7, 0, 0, 0, 219, 21, 1, 0,
    0, 0, 220, 222, 5, 3, 0, 0, 221, 220, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0, 222, 223, 1, 0,
    0, 0, 223, 226, 5, 74, 0, 0, 224, 225, 5, 43, 0, 0, 225, 227, 5, 74, 0, 0, 226, 224, 1,
    0, 0, 0, 226, 227, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 237, 5, 29, 0, 0, 229, 234, 3,
    26, 13, 0, 230, 231, 5, 39, 0, 0, 231, 233, 3, 26, 13, 0, 232, 230, 1, 0, 0, 0, 233, 236,
    1, 0, 0, 0, 234, 232, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 238, 1, 0, 0, 0, 236, 234,
    1, 0, 0, 0, 237, 229, 1, 0, 0, 0, 237, 238, 1, 0, 0, 0, 238, 239, 1, 0, 0, 0, 239, 240,
    5, 30, 0, 0, 240, 23, 1, 0, 0, 0, 241, 242, 7, 2, 0, 0, 242, 247, 5, 75, 0, 0, 243, 244,
    5, 39, 0, 0, 244, 246, 5, 75, 0, 0, 245, 243, 1, 0, 0, 0, 246, 249, 1, 0, 0, 0, 247, 245,
    1, 0, 0, 0, 247, 248, 1, 0, 0, 0, 248, 250, 1, 0, 0, 0, 249, 247, 1, 0, 0, 0, 250, 267,
    7, 0, 0, 0, 251, 252, 5, 72, 0, 0, 252, 257, 5, 74, 0, 0, 253, 254, 5, 39, 0, 0, 254, 256,
    5, 74, 0, 0, 255, 253, 1, 0, 0, 0, 256, 259, 1, 0, 0, 0, 257, 255, 1, 0, 0, 0, 257, 258,
    1, 0, 0, 0, 258, 260, 1, 0, 0, 0, 259, 257, 1, 0, 0, 0, 260, 267, 7, 0, 0, 0, 261, 262,
    5, 66, 0, 0, 262, 263, 5, 74, 0, 0, 263, 267, 7, 0, 0, 0, 264, 265, 5, 67, 0, 0, 265, 267,
    7, 0, 0, 0, 266, 241, 1, 0, 0, 0, 266, 251, 1, 0, 0, 0, 266, 261, 1, 0, 0, 0, 266, 264,
    1, 0, 0, 0, 267, 25, 1, 0, 0, 0, 268, 269, 3, 28, 14, 0, 269, 27, 1, 0, 0, 0, 270, 305,
    3, 30, 15, 0, 271, 278, 5, 75, 0, 0, 272, 273, 5, 33, 0, 0, 273, 274, 3, 26, 13, 0, 274,
    275, 5, 34, 0, 0, 275, 277, 1, 0, 0, 0, 276, 272, 1, 0, 0, 0, 277, 280, 1, 0, 0, 0, 278,
    276, 1, 0, 0, 0, 278, 279, 1, 0, 0, 0, 279, 281, 1, 0, 0, 0, 280, 278, 1, 0, 0, 0, 281,
    282, 7, 3, 0, 0, 282, 305, 3, 28, 14, 0, 283, 286, 5, 75, 0, 0, 284, 285, 5, 12, 0, 0,
    285, 287, 7, 1, 0, 0, 286, 284, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 286, 1, 0, 0, 0,
    288, 289, 1, 0, 0, 0, 289, 290, 1, 0, 0, 0, 290, 291, 7, 3, 0, 0, 291, 305, 3, 28, 14,
    0, 292, 293, 5, 33, 0, 0, 293, 298, 5, 75, 0, 0, 294, 295, 5, 39, 0, 0, 295, 297, 5, 75,
    0, 0, 296, 294, 1, 0, 0, 0, 297, 300, 1, 0, 0, 0, 298, 296, 1, 0, 0, 0, 298, 299, 1, 0,
    0, 0, 299, 301, 1, 0, 0, 0, 300, 298, 1, 0, 0, 0, 301, 302, 5, 34, 0, 0, 302, 303, 7, 3,
    0, 0, 303, 305, 3, 28, 14, 0, 304, 270, 1, 0, 0, 0, 304, 271, 1, 0, 0, 0, 304, 283, 1,
    0, 0, 0, 304, 292, 1, 0, 0, 0, 305, 29, 1, 0, 0, 0, 306, 312, 3, 32, 16, 0, 307, 308, 5,
    35, 0, 0, 308, 309, 3, 26, 13, 0, 309, 310, 5, 36, 0, 0, 310, 311, 3, 26, 13, 0, 311,
    313, 1, 0, 0, 0, 312, 307, 1, 0, 0, 0, 312, 313, 1, 0, 0, 0, 313, 31, 1, 0, 0, 0, 314, 319,
    3, 34, 17, 0, 315, 316, 5, 55, 0, 0, 316, 318, 3, 34, 17, 0, 317, 315, 1, 0, 0, 0, 318,
    321, 1, 0, 0, 0, 319, 317, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 33, 1, 0, 0, 0, 321, 319,
    1, 0, 0, 0, 322, 327, 3, 36, 18, 0, 323, 324, 5, 54, 0, 0, 324, 326, 3, 36, 18, 0, 325,
    323, 1, 0, 0, 0, 326, 329, 1, 0, 0, 0, 327, 325, 1, 0, 0, 0, 327, 328, 1, 0, 0, 0, 328,
    35, 1, 0, 0, 0, 329, 327, 1, 0, 0, 0, 330, 335, 3, 38, 19, 0, 331, 332, 7, 4, 0, 0, 332,
    334, 3, 38, 19, 0, 333, 331, 1, 0, 0, 0, 334, 337, 1, 0, 0, 0, 335, 333, 1, 0, 0, 0, 335,
    336, 1, 0, 0, 0, 336, 37, 1, 0, 0, 0, 337, 335, 1, 0, 0, 0, 338, 343, 3, 40, 20, 0, 339,
    340, 5, 20, 0, 0, 340, 342, 3, 40, 20, 0, 341, 339, 1, 0, 0, 0, 342, 345, 1, 0, 0, 0, 343,
    341, 1, 0, 0, 0, 343, 344, 1, 0, 0, 0, 344, 39, 1, 0, 0, 0, 345, 343, 1, 0, 0, 0, 346, 351,
    3, 42, 21, 0, 347, 348, 5, 19, 0, 0, 348, 350, 3, 42, 21, 0, 349, 347, 1, 0, 0, 0, 350,
    353, 1, 0, 0, 0, 351, 349, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352, 41, 1, 0, 0, 0, 353, 351,
    1, 0, 0, 0, 354, 359, 3, 44, 22, 0, 355, 356, 7, 5, 0, 0, 356, 358, 3, 44, 22, 0, 357,
    355, 1, 0, 0, 0, 358, 361, 1, 0, 0, 0, 359, 357, 1, 0, 0, 0, 359, 360, 1, 0, 0, 0, 360,
    43, 1, 0, 0, 0, 361, 359, 1, 0, 0, 0, 362, 367, 3, 46, 23, 0, 363, 364, 7, 6, 0, 0, 364,
    366, 3, 46, 23, 0, 365, 363, 1, 0, 0, 0, 366, 369, 1, 0, 0, 0, 367, 365, 1, 0, 0, 0, 367,
    368, 1, 0, 0, 0, 368, 45, 1, 0, 0, 0, 369, 367, 1, 0, 0, 0, 370, 375, 3, 48, 24, 0, 371,
    372, 7, 7, 0, 0, 372, 374, 3, 48, 24, 0, 373, 371, 1, 0, 0, 0, 374, 377, 1, 0, 0, 0, 375,
    373, 1, 0, 0, 0, 375, 376, 1, 0, 0, 0, 376, 47, 1, 0, 0, 0, 377, 375, 1, 0, 0, 0, 378, 379,
    5, 23, 0, 0, 379, 389, 3, 48, 24, 0, 380, 381, 5, 21, 0, 0, 381, 389, 3, 48, 24, 0, 382,
    383, 5, 4, 0, 0, 383, 389, 5, 75, 0, 0, 384, 385, 5, 5, 0, 0, 385, 389, 5, 75, 0, 0, 386,
    389, 3, 50, 25, 0, 387, 389, 3, 52, 26, 0, 388, 378, 1, 0, 0, 0, 388, 380, 1, 0, 0, 0,
    388, 382, 1, 0, 0, 0, 388, 384, 1, 0, 0, 0, 388, 386, 1, 0, 0, 0, 388, 387, 1, 0, 0, 0,
    389, 49, 1, 0, 0, 0, 390, 391, 3, 52, 26, 0, 391, 392, 7, 8, 0, 0, 392, 51, 1, 0, 0, 0,
    393, 396, 3, 54, 27, 0, 394, 395, 5, 27, 0, 0, 395, 397, 3, 52, 26, 0, 396, 394, 1, 0,
    0, 0, 396, 397, 1, 0, 0, 0, 397, 53, 1, 0, 0, 0, 398, 405, 3, 56, 28, 0, 399, 400, 5, 33,
    0, 0, 400, 401, 3, 26, 13, 0, 401, 402, 5, 34, 0, 0, 402, 404, 1, 0, 0, 0, 403, 399, 1,
    0, 0, 0, 404, 407, 1, 0, 0, 0, 405, 403, 1, 0, 0, 0, 405, 406, 1, 0, 0, 0, 406, 55, 1, 0,
    0, 0, 407, 405, 1, 0, 0, 0, 408, 421, 3, 64, 32, 0, 409, 421, 3, 66, 33, 0, 410, 421,
    3, 22, 11, 0, 411, 412, 5, 29, 0, 0, 412, 413, 3, 26, 13, 0, 413, 414, 5, 30, 0, 0, 414,
    421, 1, 0, 0, 0, 415, 421, 3, 68, 34, 0, 416, 421, 5, 79, 0, 0, 417, 421, 5, 80, 0, 0,
    418, 421, 3, 70, 35, 0, 419, 421, 3, 58, 29, 0, 420, 408, 1, 0, 0, 0, 420, 409, 1, 0,
    0, 0, 420, 410, 1, 0, 0, 0, 420, 411, 1, 0, 0, 0, 420, 415, 1, 0, 0, 0, 420, 416, 1, 0,
    0, 0, 420, 417, 1, 0, 0, 0, 420, 418, 1, 0, 0, 0, 420, 419, 1, 0, 0, 0, 421, 57, 1, 0, 0,
    0, 422, 423, 5, 1, 0, 0, 423, 428, 5, 42, 0, 0, 424, 425, 5, 39, 0, 0, 425, 427, 5, 42,
    0, 0, 426, 424, 1, 0, 0, 0, 427, 430, 1, 0, 0, 0, 428, 426, 1, 0, 0, 0, 428, 429, 1, 0,
    0, 0, 429, 433, 1, 0, 0, 0, 430, 428, 1, 0, 0, 0, 431, 432, 5, 36, 0, 0, 432, 434, 5, 42,
    0, 0, 433, 431, 1, 0, 0, 0, 433, 434, 1, 0, 0, 0, 434, 435, 1, 0, 0, 0, 435, 436, 5, 2,
    0, 0, 436, 59, 1, 0, 0, 0, 437, 439, 5, 23, 0, 0, 438, 437, 1, 0, 0, 0, 438, 439, 1, 0,
    0, 0, 439, 440, 1, 0, 0, 0, 440, 441, 5, 42, 0, 0, 441, 443, 5, 25, 0, 0, 442, 444, 5,
    23, 0, 0, 443, 442, 1, 0, 0, 0, 443, 444, 1, 0, 0, 0, 444, 445, 1, 0, 0, 0, 445, 446, 5,
    42, 0, 0, 446, 61, 1, 0, 0, 0, 447, 449, 5, 23, 0, 0, 448, 447, 1, 0, 0, 0, 448, 449, 1,
    0, 0, 0, 449, 450, 1, 0, 0, 0, 450, 452, 7, 9, 0, 0, 451, 453, 5, 41, 0, 0, 452, 451, 1,
    0, 0, 0, 452, 453, 1, 0, 0, 0, 453, 63, 1, 0, 0, 0, 454, 457, 3, 60, 30, 0, 455, 457, 3,
    62, 31, 0, 456, 454, 1, 0, 0, 0, 456, 455, 1, 0, 0, 0, 457, 65, 1, 0, 0, 0, 458, 466, 5,
    75, 0, 0, 459, 462, 5, 74, 0, 0, 460, 461, 5, 43, 0, 0, 461, 463, 5, 74, 0, 0, 462, 460,
    1, 0, 0, 0, 462, 463, 1, 0, 0, 0, 463, 466, 1, 0, 0, 0, 464, 466, 5, 73, 0, 0, 465, 458,
    1, 0, 0, 0, 465, 459, 1, 0, 0, 0, 465, 464, 1, 0, 0, 0, 466, 67, 1, 0, 0, 0, 467, 473, 5,
    44, 0, 0, 468, 473, 5, 45, 0, 0, 469, 473, 5, 46, 0, 0, 470, 473, 5, 47, 0, 0, 471, 473,
    5, 48, 0, 0, 472, 467, 1, 0, 0, 0, 472, 468, 1, 0, 0, 0, 472, 469, 1, 0, 0, 0, 472, 470,
    1, 0, 0, 0, 472, 471, 1, 0, 0, 0, 473, 69, 1, 0, 0, 0, 474, 483, 5, 33, 0, 0, 475, 480,
    3, 26, 13, 0, 476, 477, 5, 39, 0, 0, 477, 479, 3, 26, 13, 0, 478, 476, 1, 0, 0, 0, 479,
    482, 1, 0, 0, 0, 480, 478, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481, 484, 1, 0, 0, 0, 482,
    480, 1, 0, 0, 0, 483, 475, 1, 0, 0, 0, 483, 484, 1, 0, 0, 0, 484, 485, 1, 0, 0, 0, 485,
    486, 5, 34, 0, 0, 486, 71, 1, 0, 0, 0, 487, 491, 5, 31, 0, 0, 488, 490, 3, 2, 1, 0, 489,
    488, 1, 0, 0, 0, 490, 493, 1, 0, 0, 0, 491, 489, 1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492,
    494, 1, 0, 0, 0, 493, 491, 1, 0, 0, 0, 494, 497, 5, 32, 0, 0, 495, 497, 3, 2, 1, 0, 496,
    487, 1, 0, 0, 0, 496, 495, 1, 0, 0, 0, 497, 73, 1, 0, 0, 0, 56, 77, 96, 106, 109, 122,
    124, 133, 136, 144, 147, 155, 158, 170, 173, 187, 190, 196, 214, 221, 226, 234,
    237, 247, 257, 266, 278, 288, 298, 304, 312, 319, 327, 335, 343, 351, 359, 367,
    375, 388, 396, 405, 420, 428, 433, 438, 443, 448, 452, 456, 462, 465, 472, 480,
    483, 491, 496
];
testParser.vocabulary = new antlr.Vocabulary(testParser.literalNames, testParser.symbolicNames, []);
testParser.decisionsToDFA = testParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
class ProgContext extends antlr.ParserRuleContext {
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
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class StatementContext extends antlr.ParserRuleContext {
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
exports.StatementContext = StatementContext;
class BreakStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionBreak() {
        return this.getRuleContext(0, FunctionBreakContext);
    }
    enterRule(listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BreakStatementContext = BreakStatementContext;
class IfStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionIf() {
        return this.getRuleContext(0, FunctionIfContext);
    }
    enterRule(listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfStatementContext = IfStatementContext;
class DefinitionStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionDefinition() {
        return this.getRuleContext(0, FunctionDefinitionContext);
    }
    enterRule(listener) {
        if (listener.enterDefinitionStatement) {
            listener.enterDefinitionStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDefinitionStatement) {
            listener.exitDefinitionStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDefinitionStatement) {
            return visitor.visitDefinitionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinitionStatementContext = DefinitionStatementContext;
class DoStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionDo() {
        return this.getRuleContext(0, FunctionDoContext);
    }
    enterRule(listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DoStatementContext = DoStatementContext;
class ModuleStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionModule() {
        return this.getRuleContext(0, FunctionModuleContext);
    }
    enterRule(listener) {
        if (listener.enterModuleStatement) {
            listener.enterModuleStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModuleStatement) {
            listener.exitModuleStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModuleStatement) {
            return visitor.visitModuleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleStatementContext = ModuleStatementContext;
class StructStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionStruct() {
        return this.getRuleContext(0, FunctionStructContext);
    }
    enterRule(listener) {
        if (listener.enterStructStatement) {
            listener.enterStructStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStructStatement) {
            listener.exitStructStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStructStatement) {
            return visitor.visitStructStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructStatementContext = StructStatementContext;
class ExprStatementContext extends StatementContext {
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
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
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
    accept(visitor) {
        if (visitor.visitExprStatement) {
            return visitor.visitExprStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprStatementContext = ExprStatementContext;
class ReturnStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionReturn() {
        return this.getRuleContext(0, FunctionReturnContext);
    }
    enterRule(listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnStatementContext = ReturnStatementContext;
class WhileStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionWhile() {
        return this.getRuleContext(0, FunctionWhileContext);
    }
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileStatementContext = WhileStatementContext;
class ForStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionFor() {
        return this.getRuleContext(0, FunctionForContext);
    }
    enterRule(listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStatementContext = ForStatementContext;
class ContinueStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionContinue() {
        return this.getRuleContext(0, FunctionContinueContext);
    }
    enterRule(listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContinueStatementContext = ContinueStatementContext;
class EmptyLineStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
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
    accept(visitor) {
        if (visitor.visitEmptyLineStatement) {
            return visitor.visitEmptyLineStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EmptyLineStatementContext = EmptyLineStatementContext;
class FunctionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionDefinition;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionDefinitionContext = FunctionDefinitionContext;
class DefContext extends FunctionDefinitionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DEF() {
        return this.getToken(testParser.DEF, 0);
    }
    FUNC_ID() {
        return this.getToken(testParser.FUNC_ID, 0);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    VAR_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.VAR_ID);
        }
        else {
            return this.getToken(testParser.VAR_ID, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterDef) {
            listener.enterDef(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDef) {
            listener.exitDef(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDef) {
            return visitor.visitDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefContext = DefContext;
class FunctionIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionIf;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionIfContext = FunctionIfContext;
class IfContext extends FunctionIfContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IF() {
        return this.getToken(testParser.IF, 0);
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
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        return this.getRuleContext(i, BlockContext);
    }
    ELSE() {
        return this.getToken(testParser.ELSE, 0);
    }
    functionIf() {
        return this.getRuleContext(0, FunctionIfContext);
    }
    enterRule(listener) {
        if (listener.enterIf) {
            listener.enterIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIf) {
            listener.exitIf(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfContext = IfContext;
class FunctionForContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionFor;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionForContext = FunctionForContext;
class ForContext extends FunctionForContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    FOR() {
        return this.getToken(testParser.FOR, 0);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(testParser.SEMI);
        }
        else {
            return this.getToken(testParser.SEMI, i);
        }
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterFor) {
            listener.enterFor(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFor) {
            listener.exitFor(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFor) {
            return visitor.visitFor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForContext = ForContext;
class FunctionWhileContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionWhile;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionWhileContext = FunctionWhileContext;
class WhileContext extends FunctionWhileContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    WHILE() {
        return this.getToken(testParser.WHILE, 0);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterWhile) {
            listener.enterWhile(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhile) {
            listener.exitWhile(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhile) {
            return visitor.visitWhile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileContext = WhileContext;
class FunctionDoContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionDo;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionDoContext = FunctionDoContext;
class DoContext extends FunctionDoContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DO() {
        return this.getToken(testParser.DO, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    WHILE() {
        return this.getToken(testParser.WHILE, 0);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterDo) {
            listener.enterDo(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDo) {
            listener.exitDo(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDo) {
            return visitor.visitDo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DoContext = DoContext;
class FunctionReturnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionReturn;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionReturnContext = FunctionReturnContext;
class ReturnContext extends FunctionReturnContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    RETURN() {
        return this.getToken(testParser.RETURN, 0);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    enterRule(listener) {
        if (listener.enterReturn) {
            listener.enterReturn(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturn) {
            listener.exitReturn(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturn) {
            return visitor.visitReturn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnContext = ReturnContext;
class FunctionContinueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionContinue;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionContinueContext = FunctionContinueContext;
class ContinueContext extends FunctionContinueContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    CONTINUE() {
        return this.getToken(testParser.CONTINUE, 0);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    enterRule(listener) {
        if (listener.enterContinue) {
            listener.enterContinue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitContinue) {
            listener.exitContinue(this);
        }
    }
    accept(visitor) {
        if (visitor.visitContinue) {
            return visitor.visitContinue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContinueContext = ContinueContext;
class FunctionBreakContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionBreak;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionBreakContext = FunctionBreakContext;
class BreakContext extends FunctionBreakContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BREAK() {
        return this.getToken(testParser.BREAK, 0);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    enterRule(listener) {
        if (listener.enterBreak) {
            listener.enterBreak(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBreak) {
            listener.exitBreak(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBreak) {
            return visitor.visitBreak(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BreakContext = BreakContext;
class FunctionStructContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionStruct;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionStructContext = FunctionStructContext;
class StrctContext extends FunctionStructContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRUCT() {
        return this.getToken(testParser.STRUCT, 0);
    }
    LBRANCE() {
        return this.getToken(testParser.LBRANCE, 0);
    }
    RBRANCE() {
        return this.getToken(testParser.RBRANCE, 0);
    }
    FUNC_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.FUNC_ID);
        }
        else {
            return this.getToken(testParser.FUNC_ID, i);
        }
    }
    VAR_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.VAR_ID);
        }
        else {
            return this.getToken(testParser.VAR_ID, i);
        }
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterStrct) {
            listener.enterStrct(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStrct) {
            listener.exitStrct(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStrct) {
            return visitor.visitStrct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StrctContext = StrctContext;
class FunctionCallContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionCall;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionCallContext = FunctionCallContext;
class FcallContext extends FunctionCallContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    FUNC_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.FUNC_ID);
        }
        else {
            return this.getToken(testParser.FUNC_ID, i);
        }
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    COLON2() {
        return this.getToken(testParser.COLON2, 0);
    }
    POINT() {
        return this.getToken(testParser.POINT, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterFcall) {
            listener.enterFcall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFcall) {
            listener.exitFcall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFcall) {
            return visitor.visitFcall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FcallContext = FcallContext;
class FunctionModuleContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_functionModule;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FunctionModuleContext = FunctionModuleContext;
class ModuleFunctionContext extends FunctionModuleContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LOCALF() {
        return this.getToken(testParser.LOCALF, 0);
    }
    FUNC_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.FUNC_ID);
        }
        else {
            return this.getToken(testParser.FUNC_ID, i);
        }
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterModuleFunction) {
            listener.enterModuleFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModuleFunction) {
            listener.exitModuleFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModuleFunction) {
            return visitor.visitModuleFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleFunctionContext = ModuleFunctionContext;
class ModuleEndContext extends FunctionModuleContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ENDMODULE() {
        return this.getToken(testParser.ENDMODULE, 0);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    enterRule(listener) {
        if (listener.enterModuleEnd) {
            listener.enterModuleEnd(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModuleEnd) {
            listener.exitModuleEnd(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModuleEnd) {
            return visitor.visitModuleEnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleEndContext = ModuleEndContext;
class ModuleAssignContext extends FunctionModuleContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAR_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.VAR_ID);
        }
        else {
            return this.getToken(testParser.VAR_ID, i);
        }
    }
    EXTERN() {
        return this.getToken(testParser.EXTERN, 0);
    }
    STATIC() {
        return this.getToken(testParser.STATIC, 0);
    }
    GLOBAL() {
        return this.getToken(testParser.GLOBAL, 0);
    }
    LOCAL() {
        return this.getToken(testParser.LOCAL, 0);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterModuleAssign) {
            listener.enterModuleAssign(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModuleAssign) {
            listener.exitModuleAssign(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModuleAssign) {
            return visitor.visitModuleAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleAssignContext = ModuleAssignContext;
class ModuleStartContext extends FunctionModuleContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    MODULE() {
        return this.getToken(testParser.MODULE, 0);
    }
    FUNC_ID() {
        return this.getToken(testParser.FUNC_ID, 0);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    enterRule(listener) {
        if (listener.enterModuleStart) {
            listener.enterModuleStart(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModuleStart) {
            listener.exitModuleStart(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModuleStart) {
            return visitor.visitModuleStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleStartContext = ModuleStartContext;
class ExprContext extends antlr.ParserRuleContext {
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
exports.ExprContext = ExprContext;
class MainContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    assignmentExpr() {
        return this.getRuleContext(0, AssignmentExprContext);
    }
    enterRule(listener) {
        if (listener.enterMain) {
            listener.enterMain(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMain) {
            listener.exitMain(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMain) {
            return visitor.visitMain(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MainContext = MainContext;
class AssignmentExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_assignmentExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AssignmentExprContext = AssignmentExprContext;
class ListAssignContext extends AssignmentExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LBRACKET() {
        return this.getToken(testParser.LBRACKET, 0);
    }
    VAR_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.VAR_ID);
        }
        else {
            return this.getToken(testParser.VAR_ID, i);
        }
    }
    RBRACKET() {
        return this.getToken(testParser.RBRACKET, 0);
    }
    assignmentExpr() {
        return this.getRuleContext(0, AssignmentExprContext);
    }
    PLUSEQ() {
        return this.getToken(testParser.PLUSEQ, 0);
    }
    MINUSEQ() {
        return this.getToken(testParser.MINUSEQ, 0);
    }
    MULTEQ() {
        return this.getToken(testParser.MULTEQ, 0);
    }
    DIVEQ() {
        return this.getToken(testParser.DIVEQ, 0);
    }
    SUREQ() {
        return this.getToken(testParser.SUREQ, 0);
    }
    POWEREQ() {
        return this.getToken(testParser.POWEREQ, 0);
    }
    ASSIGN() {
        return this.getToken(testParser.ASSIGN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterListAssign) {
            listener.enterListAssign(this);
        }
    }
    exitRule(listener) {
        if (listener.exitListAssign) {
            listener.exitListAssign(this);
        }
    }
    accept(visitor) {
        if (visitor.visitListAssign) {
            return visitor.visitListAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListAssignContext = ListAssignContext;
class StructAssignContext extends AssignmentExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAR_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.VAR_ID);
        }
        else {
            return this.getToken(testParser.VAR_ID, i);
        }
    }
    assignmentExpr() {
        return this.getRuleContext(0, AssignmentExprContext);
    }
    PLUSEQ() {
        return this.getToken(testParser.PLUSEQ, 0);
    }
    MINUSEQ() {
        return this.getToken(testParser.MINUSEQ, 0);
    }
    MULTEQ() {
        return this.getToken(testParser.MULTEQ, 0);
    }
    DIVEQ() {
        return this.getToken(testParser.DIVEQ, 0);
    }
    SUREQ() {
        return this.getToken(testParser.SUREQ, 0);
    }
    POWEREQ() {
        return this.getToken(testParser.POWEREQ, 0);
    }
    ASSIGN() {
        return this.getToken(testParser.ASSIGN, 0);
    }
    ARROW(i) {
        if (i === undefined) {
            return this.getTokens(testParser.ARROW);
        }
        else {
            return this.getToken(testParser.ARROW, i);
        }
    }
    FUNC_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.FUNC_ID);
        }
        else {
            return this.getToken(testParser.FUNC_ID, i);
        }
    }
    enterRule(listener) {
        if (listener.enterStructAssign) {
            listener.enterStructAssign(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStructAssign) {
            listener.exitStructAssign(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStructAssign) {
            return visitor.visitStructAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructAssignContext = StructAssignContext;
class NoAssignmentContext extends AssignmentExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ternaryExpr() {
        return this.getRuleContext(0, TernaryExprContext);
    }
    enterRule(listener) {
        if (listener.enterNoAssignment) {
            listener.enterNoAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNoAssignment) {
            listener.exitNoAssignment(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNoAssignment) {
            return visitor.visitNoAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NoAssignmentContext = NoAssignmentContext;
class AssignContext extends AssignmentExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAR_ID() {
        return this.getToken(testParser.VAR_ID, 0);
    }
    assignmentExpr() {
        return this.getRuleContext(0, AssignmentExprContext);
    }
    PLUSEQ() {
        return this.getToken(testParser.PLUSEQ, 0);
    }
    MINUSEQ() {
        return this.getToken(testParser.MINUSEQ, 0);
    }
    MULTEQ() {
        return this.getToken(testParser.MULTEQ, 0);
    }
    DIVEQ() {
        return this.getToken(testParser.DIVEQ, 0);
    }
    SUREQ() {
        return this.getToken(testParser.SUREQ, 0);
    }
    POWEREQ() {
        return this.getToken(testParser.POWEREQ, 0);
    }
    ASSIGN() {
        return this.getToken(testParser.ASSIGN, 0);
    }
    LBRACKET(i) {
        if (i === undefined) {
            return this.getTokens(testParser.LBRACKET);
        }
        else {
            return this.getToken(testParser.LBRACKET, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    RBRACKET(i) {
        if (i === undefined) {
            return this.getTokens(testParser.RBRACKET);
        }
        else {
            return this.getToken(testParser.RBRACKET, i);
        }
    }
    enterRule(listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignContext = AssignContext;
class TernaryExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_ternaryExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TernaryExprContext = TernaryExprContext;
class TernaryContext extends TernaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    qeOrExpr() {
        return this.getRuleContext(0, QeOrExprContext);
    }
    QUESTION() {
        return this.getToken(testParser.QUESTION, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COLON() {
        return this.getToken(testParser.COLON, 0);
    }
    enterRule(listener) {
        if (listener.enterTernary) {
            listener.enterTernary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTernary) {
            listener.exitTernary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTernary) {
            return visitor.visitTernary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TernaryContext = TernaryContext;
class QeOrExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_qeOrExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.QeOrExprContext = QeOrExprContext;
class QEorContext extends QeOrExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    qeAndExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(QeAndExprContext);
        }
        return this.getRuleContext(i, QeAndExprContext);
    }
    QE_7(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_7);
        }
        else {
            return this.getToken(testParser.QE_7, i);
        }
    }
    enterRule(listener) {
        if (listener.enterQEor) {
            listener.enterQEor(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQEor) {
            listener.exitQEor(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQEor) {
            return visitor.visitQEor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QEorContext = QEorContext;
class QeAndExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_qeAndExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.QeAndExprContext = QeAndExprContext;
class QEandContext extends QeAndExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    qeCompareExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(QeCompareExprContext);
        }
        return this.getRuleContext(i, QeCompareExprContext);
    }
    QE_6(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_6);
        }
        else {
            return this.getToken(testParser.QE_6, i);
        }
    }
    enterRule(listener) {
        if (listener.enterQEand) {
            listener.enterQEand(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQEand) {
            listener.exitQEand(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQEand) {
            return visitor.visitQEand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QEandContext = QEandContext;
class QeCompareExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_qeCompareExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.QeCompareExprContext = QeCompareExprContext;
class QECompareContext extends QeCompareExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    orExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrExprContext);
        }
        return this.getRuleContext(i, OrExprContext);
    }
    QE_1(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_1);
        }
        else {
            return this.getToken(testParser.QE_1, i);
        }
    }
    QE_2(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_2);
        }
        else {
            return this.getToken(testParser.QE_2, i);
        }
    }
    QE_3(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_3);
        }
        else {
            return this.getToken(testParser.QE_3, i);
        }
    }
    QE_4(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_4);
        }
        else {
            return this.getToken(testParser.QE_4, i);
        }
    }
    QE_5(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_5);
        }
        else {
            return this.getToken(testParser.QE_5, i);
        }
    }
    enterRule(listener) {
        if (listener.enterQECompare) {
            listener.enterQECompare(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQECompare) {
            listener.exitQECompare(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQECompare) {
            return visitor.visitQECompare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QECompareContext = QECompareContext;
class OrExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_orExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.OrExprContext = OrExprContext;
class OrContext extends OrExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    andExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(AndExprContext);
        }
        return this.getRuleContext(i, AndExprContext);
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(testParser.OR);
        }
        else {
            return this.getToken(testParser.OR, i);
        }
    }
    enterRule(listener) {
        if (listener.enterOr) {
            listener.enterOr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOr) {
            listener.exitOr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOr) {
            return visitor.visitOr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrContext = OrContext;
class AndExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_andExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AndExprContext = AndExprContext;
class AndContext extends AndExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    compareExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(CompareExprContext);
        }
        return this.getRuleContext(i, CompareExprContext);
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(testParser.AND);
        }
        else {
            return this.getToken(testParser.AND, i);
        }
    }
    enterRule(listener) {
        if (listener.enterAnd) {
            listener.enterAnd(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnd) {
            listener.exitAnd(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAnd) {
            return visitor.visitAnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndContext = AndContext;
class CompareExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_compareExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.CompareExprContext = CompareExprContext;
class CompareContext extends CompareExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    addSubExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(AddSubExprContext);
        }
        return this.getRuleContext(i, AddSubExprContext);
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(testParser.EQ);
        }
        else {
            return this.getToken(testParser.EQ, i);
        }
    }
    NEQ(i) {
        if (i === undefined) {
            return this.getTokens(testParser.NEQ);
        }
        else {
            return this.getToken(testParser.NEQ, i);
        }
    }
    LT(i) {
        if (i === undefined) {
            return this.getTokens(testParser.LT);
        }
        else {
            return this.getToken(testParser.LT, i);
        }
    }
    GT(i) {
        if (i === undefined) {
            return this.getTokens(testParser.GT);
        }
        else {
            return this.getToken(testParser.GT, i);
        }
    }
    LE(i) {
        if (i === undefined) {
            return this.getTokens(testParser.LE);
        }
        else {
            return this.getToken(testParser.LE, i);
        }
    }
    GE(i) {
        if (i === undefined) {
            return this.getTokens(testParser.GE);
        }
        else {
            return this.getToken(testParser.GE, i);
        }
    }
    enterRule(listener) {
        if (listener.enterCompare) {
            listener.enterCompare(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCompare) {
            listener.exitCompare(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCompare) {
            return visitor.visitCompare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompareContext = CompareContext;
class AddSubExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_addSubExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AddSubExprContext = AddSubExprContext;
class AddSubContext extends AddSubExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    mulDivSurExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(MulDivSurExprContext);
        }
        return this.getRuleContext(i, MulDivSurExprContext);
    }
    PLUS(i) {
        if (i === undefined) {
            return this.getTokens(testParser.PLUS);
        }
        else {
            return this.getToken(testParser.PLUS, i);
        }
    }
    MINUS(i) {
        if (i === undefined) {
            return this.getTokens(testParser.MINUS);
        }
        else {
            return this.getToken(testParser.MINUS, i);
        }
    }
    enterRule(listener) {
        if (listener.enterAddSub) {
            listener.enterAddSub(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddSub) {
            listener.exitAddSub(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddSub) {
            return visitor.visitAddSub(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AddSubContext = AddSubContext;
class MulDivSurExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_mulDivSurExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.MulDivSurExprContext = MulDivSurExprContext;
class MulDivSurContext extends MulDivSurExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    unaryExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnaryExprContext);
        }
        return this.getRuleContext(i, UnaryExprContext);
    }
    MULT(i) {
        if (i === undefined) {
            return this.getTokens(testParser.MULT);
        }
        else {
            return this.getToken(testParser.MULT, i);
        }
    }
    DIV(i) {
        if (i === undefined) {
            return this.getTokens(testParser.DIV);
        }
        else {
            return this.getToken(testParser.DIV, i);
        }
    }
    SUR(i) {
        if (i === undefined) {
            return this.getTokens(testParser.SUR);
        }
        else {
            return this.getToken(testParser.SUR, i);
        }
    }
    enterRule(listener) {
        if (listener.enterMulDivSur) {
            listener.enterMulDivSur(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMulDivSur) {
            listener.exitMulDivSur(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMulDivSur) {
            return visitor.visitMulDivSur(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MulDivSurContext = MulDivSurContext;
class UnaryExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_unaryExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.UnaryExprContext = UnaryExprContext;
class PreIncrementContext extends UnaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    INC() {
        return this.getToken(testParser.INC, 0);
    }
    VAR_ID() {
        return this.getToken(testParser.VAR_ID, 0);
    }
    enterRule(listener) {
        if (listener.enterPreIncrement) {
            listener.enterPreIncrement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreIncrement) {
            listener.exitPreIncrement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreIncrement) {
            return visitor.visitPreIncrement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreIncrementContext = PreIncrementContext;
class PowExprContext extends UnaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    powerExpr() {
        return this.getRuleContext(0, PowerExprContext);
    }
    enterRule(listener) {
        if (listener.enterPowExpr) {
            listener.enterPowExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPowExpr) {
            listener.exitPowExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPowExpr) {
            return visitor.visitPowExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowExprContext = PowExprContext;
class PostFixExprContext extends UnaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    postfixExpr() {
        return this.getRuleContext(0, PostfixExprContext);
    }
    enterRule(listener) {
        if (listener.enterPostFixExpr) {
            listener.enterPostFixExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostFixExpr) {
            listener.exitPostFixExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPostFixExpr) {
            return visitor.visitPostFixExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PostFixExprContext = PostFixExprContext;
class UnaryMinusContext extends UnaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    MINUS() {
        return this.getToken(testParser.MINUS, 0);
    }
    unaryExpr() {
        return this.getRuleContext(0, UnaryExprContext);
    }
    enterRule(listener) {
        if (listener.enterUnaryMinus) {
            listener.enterUnaryMinus(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryMinus) {
            listener.exitUnaryMinus(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnaryMinus) {
            return visitor.visitUnaryMinus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryMinusContext = UnaryMinusContext;
class NotExprContext extends UnaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NOT() {
        return this.getToken(testParser.NOT, 0);
    }
    unaryExpr() {
        return this.getRuleContext(0, UnaryExprContext);
    }
    enterRule(listener) {
        if (listener.enterNotExpr) {
            listener.enterNotExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNotExpr) {
            listener.exitNotExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNotExpr) {
            return visitor.visitNotExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NotExprContext = NotExprContext;
class PreDecrementContext extends UnaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DEC() {
        return this.getToken(testParser.DEC, 0);
    }
    VAR_ID() {
        return this.getToken(testParser.VAR_ID, 0);
    }
    enterRule(listener) {
        if (listener.enterPreDecrement) {
            listener.enterPreDecrement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreDecrement) {
            listener.exitPreDecrement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreDecrement) {
            return visitor.visitPreDecrement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreDecrementContext = PreDecrementContext;
class PostfixExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_postfixExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PostfixExprContext = PostfixExprContext;
class PostFixContext extends PostfixExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    powerExpr() {
        return this.getRuleContext(0, PowerExprContext);
    }
    INC() {
        return this.getToken(testParser.INC, 0);
    }
    DEC() {
        return this.getToken(testParser.DEC, 0);
    }
    enterRule(listener) {
        if (listener.enterPostFix) {
            listener.enterPostFix(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostFix) {
            listener.exitPostFix(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPostFix) {
            return visitor.visitPostFix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PostFixContext = PostFixContext;
class PowerExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_powerExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PowerExprContext = PowerExprContext;
class PowerContext extends PowerExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    indexAccessExpr() {
        return this.getRuleContext(0, IndexAccessExprContext);
    }
    POWER() {
        return this.getToken(testParser.POWER, 0);
    }
    powerExpr() {
        return this.getRuleContext(0, PowerExprContext);
    }
    enterRule(listener) {
        if (listener.enterPower) {
            listener.enterPower(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPower) {
            listener.exitPower(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPower) {
            return visitor.visitPower(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowerContext = PowerContext;
class IndexAccessExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_indexAccessExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.IndexAccessExprContext = IndexAccessExprContext;
class IndexAccessContext extends IndexAccessExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpr() {
        return this.getRuleContext(0, PrimaryExprContext);
    }
    LBRACKET(i) {
        if (i === undefined) {
            return this.getTokens(testParser.LBRACKET);
        }
        else {
            return this.getToken(testParser.LBRACKET, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    RBRACKET(i) {
        if (i === undefined) {
            return this.getTokens(testParser.RBRACKET);
        }
        else {
            return this.getToken(testParser.RBRACKET, i);
        }
    }
    enterRule(listener) {
        if (listener.enterIndexAccess) {
            listener.enterIndexAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIndexAccess) {
            listener.exitIndexAccess(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIndexAccess) {
            return visitor.visitIndexAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexAccessContext = IndexAccessContext;
class PrimaryExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_primaryExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PrimaryExprContext = PrimaryExprContext;
class ListLiteralContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    list() {
        return this.getRuleContext(0, ListContext);
    }
    enterRule(listener) {
        if (listener.enterListLiteral) {
            listener.enterListLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitListLiteral) {
            listener.exitListLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitListLiteral) {
            return visitor.visitListLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListLiteralContext = ListLiteralContext;
class IdExprContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    id() {
        return this.getRuleContext(0, IdContext);
    }
    enterRule(listener) {
        if (listener.enterIdExpr) {
            listener.enterIdExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdExpr) {
            listener.exitIdExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIdExpr) {
            return visitor.visitIdExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdExprContext = IdExprContext;
class StringLiteralContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING2() {
        return this.getToken(testParser.STRING2, 0);
    }
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLiteralContext = StringLiteralContext;
class CharLiteralContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING1() {
        return this.getToken(testParser.STRING1, 0);
    }
    enterRule(listener) {
        if (listener.enterCharLiteral) {
            listener.enterCharLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCharLiteral) {
            listener.exitCharLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCharLiteral) {
            return visitor.visitCharLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CharLiteralContext = CharLiteralContext;
class RealContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    num() {
        return this.getRuleContext(0, NumContext);
    }
    enterRule(listener) {
        if (listener.enterReal) {
            listener.enterReal(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReal) {
            listener.exitReal(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RealContext = RealContext;
class FCallExprContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionCall() {
        return this.getRuleContext(0, FunctionCallContext);
    }
    enterRule(listener) {
        if (listener.enterFCallExpr) {
            listener.enterFCallExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFCallExpr) {
            listener.exitFCallExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFCallExpr) {
            return visitor.visitFCallExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FCallExprContext = FCallExprContext;
class SpecNumContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    specialnum() {
        return this.getRuleContext(0, SpecialnumContext);
    }
    enterRule(listener) {
        if (listener.enterSpecNum) {
            listener.enterSpecNum(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSpecNum) {
            listener.exitSpecNum(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSpecNum) {
            return visitor.visitSpecNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SpecNumContext = SpecNumContext;
class DpLiteralContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    dpoly() {
        return this.getRuleContext(0, DpolyContext);
    }
    enterRule(listener) {
        if (listener.enterDpLiteral) {
            listener.enterDpLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDpLiteral) {
            listener.exitDpLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDpLiteral) {
            return visitor.visitDpLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DpLiteralContext = DpLiteralContext;
class ParenContext extends PrimaryExprContext {
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
    accept(visitor) {
        if (visitor.visitParen) {
            return visitor.visitParen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenContext = ParenContext;
class DpolyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_dpoly;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.DpolyContext = DpolyContext;
class DpContext extends DpolyContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LTLT() {
        return this.getToken(testParser.LTLT, 0);
    }
    INT(i) {
        if (i === undefined) {
            return this.getTokens(testParser.INT);
        }
        else {
            return this.getToken(testParser.INT, i);
        }
    }
    GTGT() {
        return this.getToken(testParser.GTGT, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    COLON() {
        return this.getToken(testParser.COLON, 0);
    }
    enterRule(listener) {
        if (listener.enterDp) {
            listener.enterDp(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDp) {
            listener.exitDp(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDp) {
            return visitor.visitDp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DpContext = DpContext;
class RationalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_rational;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.RationalContext = RationalContext;
class RatContext extends RationalContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    INT(i) {
        if (i === undefined) {
            return this.getTokens(testParser.INT);
        }
        else {
            return this.getToken(testParser.INT, i);
        }
    }
    DIV() {
        return this.getToken(testParser.DIV, 0);
    }
    MINUS(i) {
        if (i === undefined) {
            return this.getTokens(testParser.MINUS);
        }
        else {
            return this.getToken(testParser.MINUS, i);
        }
    }
    enterRule(listener) {
        if (listener.enterRat) {
            listener.enterRat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRat) {
            listener.exitRat(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRat) {
            return visitor.visitRat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RatContext = RatContext;
class DecimalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_decimal;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.DecimalContext = DecimalContext;
class FloatContext extends DecimalContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    FLOAT() {
        return this.getToken(testParser.FLOAT, 0);
    }
    INT() {
        return this.getToken(testParser.INT, 0);
    }
    MINUS() {
        return this.getToken(testParser.MINUS, 0);
    }
    EXP() {
        return this.getToken(testParser.EXP, 0);
    }
    enterRule(listener) {
        if (listener.enterFloat) {
            listener.enterFloat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFloat) {
            listener.exitFloat(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFloat) {
            return visitor.visitFloat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FloatContext = FloatContext;
class NumContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_num;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.NumContext = NumContext;
class DecNumContext extends NumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    decimal() {
        return this.getRuleContext(0, DecimalContext);
    }
    enterRule(listener) {
        if (listener.enterDecNum) {
            listener.enterDecNum(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDecNum) {
            listener.exitDecNum(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDecNum) {
            return visitor.visitDecNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecNumContext = DecNumContext;
class RatNumContext extends NumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    rational() {
        return this.getRuleContext(0, RationalContext);
    }
    enterRule(listener) {
        if (listener.enterRatNum) {
            listener.enterRatNum(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRatNum) {
            listener.exitRatNum(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRatNum) {
            return visitor.visitRatNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RatNumContext = RatNumContext;
class IdContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_id;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.IdContext = IdContext;
class VIdContext extends IdContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAR_ID() {
        return this.getToken(testParser.VAR_ID, 0);
    }
    enterRule(listener) {
        if (listener.enterVId) {
            listener.enterVId(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVId) {
            listener.exitVId(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVId) {
            return visitor.visitVId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VIdContext = VIdContext;
class FIdContext extends IdContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    FUNC_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.FUNC_ID);
        }
        else {
            return this.getToken(testParser.FUNC_ID, i);
        }
    }
    POINT() {
        return this.getToken(testParser.POINT, 0);
    }
    enterRule(listener) {
        if (listener.enterFId) {
            listener.enterFId(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFId) {
            listener.exitFId(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFId) {
            return visitor.visitFId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FIdContext = FIdContext;
class V2IdContext extends IdContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAR_2() {
        return this.getToken(testParser.VAR_2, 0);
    }
    enterRule(listener) {
        if (listener.enterV2Id) {
            listener.enterV2Id(this);
        }
    }
    exitRule(listener) {
        if (listener.exitV2Id) {
            listener.exitV2Id(this);
        }
    }
    accept(visitor) {
        if (visitor.visitV2Id) {
            return visitor.visitV2Id(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.V2IdContext = V2IdContext;
class SpecialnumContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_specialnum;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.SpecialnumContext = SpecialnumContext;
class BefContext extends SpecialnumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BEFORE() {
        return this.getToken(testParser.BEFORE, 0);
    }
    enterRule(listener) {
        if (listener.enterBef) {
            listener.enterBef(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBef) {
            listener.exitBef(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBef) {
            return visitor.visitBef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BefContext = BefContext;
class BefNContext extends SpecialnumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BEFORE_N() {
        return this.getToken(testParser.BEFORE_N, 0);
    }
    enterRule(listener) {
        if (listener.enterBefN) {
            listener.enterBefN(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBefN) {
            listener.exitBefN(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBefN) {
            return visitor.visitBefN(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BefNContext = BefNContext;
class PiContext extends SpecialnumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    PI() {
        return this.getToken(testParser.PI, 0);
    }
    enterRule(listener) {
        if (listener.enterPi) {
            listener.enterPi(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPi) {
            listener.exitPi(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPi) {
            return visitor.visitPi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PiContext = PiContext;
class ImaContext extends SpecialnumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IMAGINARY() {
        return this.getToken(testParser.IMAGINARY, 0);
    }
    enterRule(listener) {
        if (listener.enterIma) {
            listener.enterIma(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIma) {
            listener.exitIma(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIma) {
            return visitor.visitIma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImaContext = ImaContext;
class NapContext extends SpecialnumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NAPIER() {
        return this.getToken(testParser.NAPIER, 0);
    }
    enterRule(listener) {
        if (listener.enterNap) {
            listener.enterNap(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNap) {
            listener.exitNap(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNap) {
            return visitor.visitNap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NapContext = NapContext;
class ListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_list;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ListContext = ListContext;
class ListExprContext extends ListContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LBRACKET() {
        return this.getToken(testParser.LBRACKET, 0);
    }
    RBRACKET() {
        return this.getToken(testParser.RBRACKET, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(testParser.COMMA);
        }
        else {
            return this.getToken(testParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterListExpr) {
            listener.enterListExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitListExpr) {
            listener.exitListExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitListExpr) {
            return visitor.visitListExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListExprContext = ListExprContext;
class BlockContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_block;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.BlockContext = BlockContext;
class Sentence1Context extends BlockContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    enterRule(listener) {
        if (listener.enterSentence1) {
            listener.enterSentence1(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSentence1) {
            listener.exitSentence1(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSentence1) {
            return visitor.visitSentence1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Sentence1Context = Sentence1Context;
class SentenceContext extends BlockContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LBRANCE() {
        return this.getToken(testParser.LBRANCE, 0);
    }
    RBRANCE() {
        return this.getToken(testParser.RBRANCE, 0);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        return this.getRuleContext(i, StatementContext);
    }
    enterRule(listener) {
        if (listener.enterSentence) {
            listener.enterSentence(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSentence) {
            listener.exitSentence(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSentence) {
            return visitor.visitSentence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SentenceContext = SentenceContext;
//# sourceMappingURL=testParser.js.map