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
exports.AssignmentExprContext = exports.MainContext = exports.ExprContext = exports.ModuleStartContext = exports.ModuleAssignContext = exports.ModuleEndContext = exports.FunctionModuleContext = exports.FcallContext = exports.FunctionCallContext = exports.StructContext = exports.FunctionStructContext = exports.BreakContext = exports.FunctionBreakContext = exports.ContinueContext = exports.FunctionContinueContext = exports.ReturnContext = exports.FunctionReturnContext = exports.DoContext = exports.FunctionDoContext = exports.WhileContext = exports.FunctionWhileContext = exports.ForContext = exports.FunctionForContext = exports.IfContext = exports.FunctionIfContext = exports.DefContext = exports.FunctionDefinitionContext = exports.PIfContext = exports.PIncContext = exports.PDefContext = exports.PreprocessorContext = exports.PreChrPlusContext = exports.PreChrContext = exports.PrecharContext = exports.ContinueStatementContext = exports.ForStatementContext = exports.ReturnStatementContext = exports.ExprStatementContext = exports.StructStatementContext = exports.DefinitionStatementContext = exports.PreproStatementContext = exports.IfStatementContext = exports.BreakStatementContext = exports.EmptyLineStatementContext = exports.WhileStatementContext = exports.ModuleStatementContext = exports.DoStatementContext = exports.StatementContext = exports.ProgContext = exports.testParser = void 0;
exports.ParenContext = exports.PreChrExprContext = exports.DpLiteralContext = exports.IndExprContext = exports.FCallExprContext = exports.RealContext = exports.StringLiteralContext = exports.IdExprContext = exports.ListLiteralContext = exports.PrimaryExprContext = exports.IndexAccessContext = exports.IndexAccessExprContext = exports.PostFixContext = exports.PostfixExprContext = exports.PreFixContext = exports.PrefixExprContext = exports.FactrialExprContext = exports.FactExprContext = exports.PowExContext = exports.PowerExprContext = exports.NotExprContext = exports.UnaryMinusContext = exports.PowExprContext = exports.UnaryExprContext = exports.MulDivSurContext = exports.MulDivSurExprContext = exports.AddSubContext = exports.AddSubExprContext = exports.CompareContext = exports.CompareExprContext = exports.AndContext = exports.AndExprContext = exports.OrContext = exports.OrExprContext = exports.QECompareContext = exports.QeCompareExprContext = exports.QEandContext = exports.QeAndExprContext = exports.QEorContext = exports.QeOrExprContext = exports.QEnotContext = exports.QeNotExprContext = exports.QuoteContext = exports.QuoteExprContext = exports.TernaryContext = exports.TernaryExprContext = exports.AssignContext = exports.NoAssignmentContext = exports.StructAssignContext = exports.ListAssignContext = void 0;
exports.OptionPairContext = exports.SystemPathContext = exports.TerminatorContext = exports.ExprlistContext = exports.SentenceContext = exports.Sentence1Context = exports.BlockContext = exports.ListExprContext = exports.ListContext = exports.AtFuncContext = exports.ChFuncContext = exports.FuncContext = exports.IndeterminateContext = exports.BefNContext = exports.BefContext = exports.V2IdContext = exports.IdContext = exports.RatNumContext = exports.HexNumContext = exports.ImaNumContext = exports.BitNumContext = exports.DecNumContext = exports.NumContext = exports.FloatContext = exports.DecimalContext = exports.RatContext = exports.RationalContext = exports.DpContext = exports.DpolyContext = void 0;
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
                this.state = 97;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638624253) !== 0) || _la === 99) {
                    {
                        {
                            this.state = 94;
                            this.statement();
                        }
                    }
                    this.state = 99;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 100;
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
            this.state = 117;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.LTLT:
                case testParser.COLON2:
                case testParser.INC:
                case testParser.DEC:
                case testParser.NOT:
                case testParser.MINUS:
                case testParser.BACK:
                case testParser.LPAREN:
                case testParser.LBRACKET:
                case testParser.HEX:
                case testParser.BIT:
                case testParser.FLOAT:
                case testParser.INT:
                case testParser.IMAGINARY:
                case testParser.BEFORE:
                case testParser.BEFORE_N:
                case testParser.ATFUNC:
                case testParser.VAR_2:
                case testParser.ID:
                case testParser.CHAR:
                case testParser.STRING:
                case testParser.NOSTRING:
                    localContext = new ExprStatementContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 102;
                        this.expr();
                        this.state = 103;
                        this.terminator();
                    }
                    break;
                case testParser.SEMI:
                case testParser.DOLLAR:
                    localContext = new EmptyLineStatementContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 105;
                        this.terminator();
                    }
                    break;
                case testParser.DEF:
                    localContext = new DefinitionStatementContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 106;
                        this.functionDefinition();
                    }
                    break;
                case testParser.IF:
                    localContext = new IfStatementContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 107;
                        this.functionIf();
                    }
                    break;
                case testParser.FOR:
                    localContext = new ForStatementContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 108;
                        this.functionFor();
                    }
                    break;
                case testParser.WHILE:
                    localContext = new WhileStatementContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 109;
                        this.functionWhile();
                    }
                    break;
                case testParser.DO:
                    localContext = new DoStatementContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 110;
                        this.functionDo();
                    }
                    break;
                case testParser.RETURN:
                    localContext = new ReturnStatementContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 111;
                        this.functionReturn();
                    }
                    break;
                case testParser.BREAK:
                    localContext = new BreakStatementContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 112;
                        this.functionBreak();
                    }
                    break;
                case testParser.CONTINUE:
                    localContext = new ContinueStatementContext(localContext);
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 113;
                        this.functionContinue();
                    }
                    break;
                case testParser.STRUCT:
                    localContext = new StructStatementContext(localContext);
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 114;
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
                        this.state = 115;
                        this.functionModule();
                    }
                    break;
                case testParser.PIFDEF:
                case testParser.PIFNDEF:
                case testParser.PIF:
                case testParser.PINCLUDE:
                case testParser.PDEFINE:
                    localContext = new PreproStatementContext(localContext);
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 116;
                        this.preprocessor();
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
    prechar() {
        let localContext = new PrecharContext(this.context, this.state);
        this.enterRule(localContext, 4, testParser.RULE_prechar);
        try {
            this.state = 124;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.CHAR:
                    localContext = new PreChrContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 119;
                        this.match(testParser.CHAR);
                        this.state = 120;
                        this.match(testParser.ID);
                    }
                    break;
                case testParser.ID:
                    localContext = new PreChrPlusContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 121;
                        this.match(testParser.ID);
                        this.state = 122;
                        this.match(testParser.CHARPLUS);
                        this.state = 123;
                        this.match(testParser.ID);
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
    preprocessor() {
        let localContext = new PreprocessorContext(this.context, this.state);
        this.enterRule(localContext, 6, testParser.RULE_preprocessor);
        let _la;
        try {
            this.state = 180;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.PDEFINE:
                    localContext = new PDefContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 126;
                        this.match(testParser.PDEFINE);
                        this.state = 127;
                        localContext._name = this.match(testParser.ID);
                        this.state = 140;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                            case 1:
                                {
                                    this.state = 128;
                                    this.match(testParser.LPAREN);
                                    this.state = 137;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 82) {
                                        {
                                            this.state = 129;
                                            localContext._ID = this.match(testParser.ID);
                                            localContext._params.push(localContext._ID);
                                            this.state = 134;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            while (_la === 41) {
                                                {
                                                    {
                                                        this.state = 130;
                                                        this.match(testParser.COMMA);
                                                        this.state = 131;
                                                        localContext._ID = this.match(testParser.ID);
                                                        localContext._params.push(localContext._ID);
                                                    }
                                                }
                                                this.state = 136;
                                                this.errorHandler.sync(this);
                                                _la = this.tokenStream.LA(1);
                                            }
                                        }
                                    }
                                    this.state = 139;
                                    this.match(testParser.RPAREN);
                                }
                                break;
                        }
                        this.state = 142;
                        localContext._body = this.expr();
                    }
                    break;
                case testParser.PIFDEF:
                case testParser.PIFNDEF:
                case testParser.PIF:
                    localContext = new PIfContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 143;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 7) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 144;
                        this.expr();
                        this.state = 148;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638624253) !== 0) || _la === 99) {
                            {
                                {
                                    this.state = 145;
                                    this.statement();
                                }
                            }
                            this.state = 150;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 161;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 92) {
                            {
                                {
                                    this.state = 151;
                                    this.match(testParser.PELIF);
                                    this.state = 152;
                                    this.expr();
                                    this.state = 156;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638624253) !== 0) || _la === 99) {
                                        {
                                            {
                                                this.state = 153;
                                                this.statement();
                                            }
                                        }
                                        this.state = 158;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 163;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 171;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 91) {
                            {
                                this.state = 164;
                                this.match(testParser.PELSE);
                                this.state = 168;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638624253) !== 0) || _la === 99) {
                                    {
                                        {
                                            this.state = 165;
                                            this.statement();
                                        }
                                    }
                                    this.state = 170;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                            }
                        }
                        this.state = 173;
                        this.match(testParser.PENDIF);
                    }
                    break;
                case testParser.PINCLUDE:
                    localContext = new PIncContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 175;
                        this.match(testParser.PINCLUDE);
                        this.state = 178;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case testParser.LT:
                                {
                                    this.state = 176;
                                    localContext._path_sys = this.systemPath();
                                }
                                break;
                            case testParser.STRING:
                                {
                                    this.state = 177;
                                    localContext._path_loc = this.match(testParser.STRING);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
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
    functionDefinition() {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 8, testParser.RULE_functionDefinition);
        let _la;
        try {
            localContext = new DefContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 182;
                this.match(testParser.DEF);
                this.state = 183;
                localContext._name = this.indeterminate();
                this.state = 184;
                this.match(testParser.LPAREN);
                this.state = 193;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 82) {
                    {
                        this.state = 185;
                        localContext._ID = this.match(testParser.ID);
                        localContext._params.push(localContext._ID);
                        this.state = 190;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 186;
                                    this.match(testParser.COMMA);
                                    this.state = 187;
                                    localContext._ID = this.match(testParser.ID);
                                    localContext._params.push(localContext._ID);
                                }
                            }
                            this.state = 192;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 195;
                this.match(testParser.RPAREN);
                this.state = 196;
                localContext._body = this.block();
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
        this.enterRule(localContext, 10, testParser.RULE_functionIf);
        try {
            localContext = new IfContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 198;
                this.match(testParser.IF);
                this.state = 199;
                this.match(testParser.LPAREN);
                this.state = 200;
                localContext._condition = this.expr();
                this.state = 201;
                this.match(testParser.RPAREN);
                this.state = 202;
                localContext._thenBlock = this.block();
                this.state = 205;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context)) {
                    case 1:
                        {
                            this.state = 203;
                            this.match(testParser.ELSE);
                            this.state = 204;
                            localContext._elseBlock = this.block();
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
        this.enterRule(localContext, 12, testParser.RULE_functionFor);
        let _la;
        try {
            localContext = new ForContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 207;
                this.match(testParser.FOR);
                this.state = 208;
                this.match(testParser.LPAREN);
                this.state = 210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 209;
                        localContext._init = this.exprlist();
                    }
                }
                this.state = 212;
                this.match(testParser.SEMI);
                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 213;
                        localContext._cond = this.exprlist();
                    }
                }
                this.state = 216;
                this.match(testParser.SEMI);
                this.state = 218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 217;
                        localContext._update = this.exprlist();
                    }
                }
                this.state = 220;
                this.match(testParser.RPAREN);
                this.state = 221;
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
        this.enterRule(localContext, 14, testParser.RULE_functionWhile);
        let _la;
        try {
            localContext = new WhileContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 223;
                this.match(testParser.WHILE);
                this.state = 224;
                this.match(testParser.LPAREN);
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 225;
                        this.exprlist();
                    }
                }
                this.state = 228;
                this.match(testParser.RPAREN);
                this.state = 229;
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
        this.enterRule(localContext, 16, testParser.RULE_functionDo);
        let _la;
        try {
            localContext = new DoContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 231;
                this.match(testParser.DO);
                this.state = 232;
                this.block();
                this.state = 233;
                this.match(testParser.WHILE);
                this.state = 234;
                this.match(testParser.LPAREN);
                this.state = 236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 235;
                        this.exprlist();
                    }
                }
                this.state = 238;
                this.match(testParser.RPAREN);
                this.state = 239;
                this.match(testParser.SEMI);
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
        this.enterRule(localContext, 18, testParser.RULE_functionReturn);
        let _la;
        try {
            localContext = new ReturnContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 241;
                this.match(testParser.RETURN);
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 242;
                        this.expr();
                    }
                }
                this.state = 245;
                this.terminator();
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
        this.enterRule(localContext, 20, testParser.RULE_functionContinue);
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 247;
                this.match(testParser.CONTINUE);
                this.state = 248;
                this.terminator();
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
        this.enterRule(localContext, 22, testParser.RULE_functionBreak);
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 250;
                this.match(testParser.BREAK);
                this.state = 251;
                this.terminator();
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
        this.enterRule(localContext, 24, testParser.RULE_functionStruct);
        let _la;
        try {
            localContext = new StructContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 253;
                this.match(testParser.STRUCT);
                this.state = 254;
                localContext._name = this.indeterminate();
                this.state = 255;
                this.match(testParser.LBRANCE);
                this.state = 256;
                localContext._indeterminate = this.indeterminate();
                localContext._members.push(localContext._indeterminate);
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 257;
                            this.match(testParser.COMMA);
                            this.state = 258;
                            localContext._indeterminate = this.indeterminate();
                            localContext._members.push(localContext._indeterminate);
                        }
                    }
                    this.state = 263;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 264;
                this.match(testParser.RBRANCE);
                this.state = 265;
                this.terminator();
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
        this.enterRule(localContext, 26, testParser.RULE_functionCall);
        let _la;
        try {
            localContext = new FcallContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 267;
                        localContext._is_global = this.match(testParser.COLON2);
                    }
                }
                this.state = 270;
                localContext._name = this.indeterminate();
                this.state = 271;
                this.match(testParser.LPAREN);
                this.state = 273;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 272;
                        localContext._args = this.exprlist();
                    }
                }
                this.state = 284;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                        this.state = 275;
                        this.match(testParser.MID);
                        this.state = 276;
                        localContext._optionPair = this.optionPair();
                        localContext._options.push(localContext._optionPair);
                        this.state = 281;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 277;
                                    this.match(testParser.COMMA);
                                    this.state = 278;
                                    localContext._optionPair = this.optionPair();
                                    localContext._options.push(localContext._optionPair);
                                }
                            }
                            this.state = 283;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 286;
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
        this.enterRule(localContext, 28, testParser.RULE_functionModule);
        let _la;
        try {
            this.state = 305;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.EXTERN:
                case testParser.STATIC:
                case testParser.GLOBAL:
                case testParser.LOCAL:
                case testParser.LOCALF:
                    localContext = new ModuleAssignContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 288;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 31) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 289;
                        this.indeterminate();
                        this.state = 294;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 290;
                                    this.match(testParser.COMMA);
                                    this.state = 291;
                                    this.indeterminate();
                                }
                            }
                            this.state = 296;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 297;
                        this.terminator();
                    }
                    break;
                case testParser.MODULE:
                    localContext = new ModuleStartContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 299;
                        this.match(testParser.MODULE);
                        this.state = 300;
                        this.indeterminate();
                        this.state = 301;
                        this.terminator();
                    }
                    break;
                case testParser.ENDMODULE:
                    localContext = new ModuleEndContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 303;
                        this.match(testParser.ENDMODULE);
                        this.state = 304;
                        this.terminator();
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
        this.enterRule(localContext, 30, testParser.RULE_expr);
        try {
            localContext = new MainContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 307;
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
        this.enterRule(localContext, 32, testParser.RULE_assignmentExpr);
        let _la;
        try {
            this.state = 344;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                case 1:
                    localContext = new NoAssignmentContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 309;
                        this.ternaryExpr();
                    }
                    break;
                case 2:
                    localContext = new AssignContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 310;
                        localContext._left = this.match(testParser.ID);
                        this.state = 317;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 35) {
                            {
                                {
                                    this.state = 311;
                                    this.match(testParser.LBRACKET);
                                    this.state = 312;
                                    localContext._expr = this.expr();
                                    localContext._indices.push(localContext._expr);
                                    this.state = 313;
                                    this.match(testParser.RBRACKET);
                                }
                            }
                            this.state = 319;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 320;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 321;
                        localContext._right = this.assignmentExpr();
                    }
                    break;
                case 3:
                    localContext = new StructAssignContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 322;
                        this.match(testParser.ID);
                        this.state = 325;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 323;
                                    this.match(testParser.ARROW);
                                    this.state = 324;
                                    this.indeterminate();
                                }
                            }
                            this.state = 327;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 12);
                        this.state = 329;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 330;
                        this.assignmentExpr();
                    }
                    break;
                case 4:
                    localContext = new ListAssignContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 332;
                        this.match(testParser.LBRACKET);
                        this.state = 333;
                        this.match(testParser.ID);
                        this.state = 338;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 334;
                                    this.match(testParser.COMMA);
                                    this.state = 335;
                                    this.match(testParser.ID);
                                }
                            }
                            this.state = 340;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 341;
                        this.match(testParser.RBRACKET);
                        this.state = 342;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 343;
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
        this.enterRule(localContext, 34, testParser.RULE_ternaryExpr);
        let _la;
        try {
            localContext = new TernaryContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 346;
                localContext._condition = this.quoteExpr();
                this.state = 352;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 37) {
                    {
                        this.state = 347;
                        this.match(testParser.QUESTION);
                        this.state = 348;
                        localContext._consequence = this.expr();
                        this.state = 349;
                        this.match(testParser.COLON);
                        this.state = 350;
                        localContext._alternative = this.expr();
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
    quoteExpr() {
        let localContext = new QuoteExprContext(this.context, this.state);
        this.enterRule(localContext, 36, testParser.RULE_quoteExpr);
        let _la;
        try {
            localContext = new QuoteContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 355;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29) {
                    {
                        this.state = 354;
                        this.match(testParser.BACK);
                    }
                }
                this.state = 357;
                this.qeNotExpr();
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
    qeNotExpr() {
        let localContext = new QeNotExprContext(this.context, this.state);
        this.enterRule(localContext, 38, testParser.RULE_qeNotExpr);
        let _la;
        try {
            localContext = new QEnotContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 359;
                this.qeOrExpr();
                this.state = 364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 58) {
                    {
                        {
                            this.state = 360;
                            this.match(testParser.QE_8);
                            this.state = 361;
                            this.qeOrExpr();
                        }
                    }
                    this.state = 366;
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
    qeOrExpr() {
        let localContext = new QeOrExprContext(this.context, this.state);
        this.enterRule(localContext, 40, testParser.RULE_qeOrExpr);
        let _la;
        try {
            localContext = new QEorContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 367;
                this.qeAndExpr();
                this.state = 372;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 61 || _la === 62) {
                    {
                        {
                            this.state = 368;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 61 || _la === 62)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 369;
                            this.qeAndExpr();
                        }
                    }
                    this.state = 374;
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
        this.enterRule(localContext, 42, testParser.RULE_qeAndExpr);
        let _la;
        try {
            localContext = new QEandContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 375;
                this.qeCompareExpr();
                this.state = 380;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 59 || _la === 60) {
                    {
                        {
                            this.state = 376;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 59 || _la === 60)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 377;
                            this.qeCompareExpr();
                        }
                    }
                    this.state = 382;
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
        this.enterRule(localContext, 44, testParser.RULE_qeCompareExpr);
        let _la;
        try {
            localContext = new QECompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 383;
                this.orExpr();
                this.state = 388;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 127) !== 0)) {
                    {
                        {
                            this.state = 384;
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 127) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 385;
                            this.orExpr();
                        }
                    }
                    this.state = 390;
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
        this.enterRule(localContext, 46, testParser.RULE_orExpr);
        let _la;
        try {
            localContext = new OrContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 391;
                this.andExpr();
                this.state = 396;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 20) {
                    {
                        {
                            this.state = 392;
                            this.match(testParser.OR);
                            this.state = 393;
                            this.andExpr();
                        }
                    }
                    this.state = 398;
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
        this.enterRule(localContext, 48, testParser.RULE_andExpr);
        let _la;
        try {
            localContext = new AndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 399;
                this.compareExpr();
                this.state = 404;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 19) {
                    {
                        {
                            this.state = 400;
                            this.match(testParser.AND);
                            this.state = 401;
                            this.compareExpr();
                        }
                    }
                    this.state = 406;
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
        this.enterRule(localContext, 50, testParser.RULE_compareExpr);
        let _la;
        try {
            localContext = new CompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 407;
                this.addSubExpr();
                this.state = 412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                    {
                        {
                            this.state = 408;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 409;
                            this.addSubExpr();
                        }
                    }
                    this.state = 414;
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
        this.enterRule(localContext, 52, testParser.RULE_addSubExpr);
        let _la;
        try {
            let alternative;
            localContext = new AddSubContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 415;
                this.mulDivSurExpr();
                this.state = 420;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 416;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 22 || _la === 23)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 417;
                                this.mulDivSurExpr();
                            }
                        }
                    }
                    this.state = 422;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
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
        this.enterRule(localContext, 54, testParser.RULE_mulDivSurExpr);
        let _la;
        try {
            localContext = new MulDivSurContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 423;
                this.unaryExpr();
                this.state = 428;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                    {
                        {
                            this.state = 424;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 425;
                            this.unaryExpr();
                        }
                    }
                    this.state = 430;
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
        this.enterRule(localContext, 56, testParser.RULE_unaryExpr);
        try {
            this.state = 436;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context)) {
                case 1:
                    localContext = new UnaryMinusContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 431;
                        this.match(testParser.MINUS);
                        this.state = 432;
                        this.unaryExpr();
                    }
                    break;
                case 2:
                    localContext = new NotExprContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 433;
                        this.match(testParser.NOT);
                        this.state = 434;
                        this.unaryExpr();
                    }
                    break;
                case 3:
                    localContext = new PowExprContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 435;
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
    powerExpr() {
        let localContext = new PowerExprContext(this.context, this.state);
        this.enterRule(localContext, 58, testParser.RULE_powerExpr);
        let _la;
        try {
            localContext = new PowExContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 438;
                localContext._base = this.factExpr();
                this.state = 441;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                        this.state = 439;
                        this.match(testParser.POWER);
                        this.state = 440;
                        localContext._exponent = this.unaryExpr();
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
    factExpr() {
        let localContext = new FactExprContext(this.context, this.state);
        this.enterRule(localContext, 60, testParser.RULE_factExpr);
        try {
            localContext = new FactrialExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 446;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context)) {
                    case 1:
                        {
                            this.state = 443;
                            this.postfixExpr();
                        }
                        break;
                    case 2:
                        {
                            this.state = 444;
                            this.prefixExpr();
                        }
                        break;
                    case 3:
                        {
                            this.state = 445;
                            this.indexAccessExpr();
                        }
                        break;
                }
                this.state = 449;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context)) {
                    case 1:
                        {
                            this.state = 448;
                            this.match(testParser.NOT);
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
    prefixExpr() {
        let localContext = new PrefixExprContext(this.context, this.state);
        this.enterRule(localContext, 62, testParser.RULE_prefixExpr);
        let _la;
        try {
            localContext = new PreFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 451;
                _la = this.tokenStream.LA(1);
                if (!(_la === 4 || _la === 5)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 452;
                this.indexAccessExpr();
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
        this.enterRule(localContext, 64, testParser.RULE_postfixExpr);
        let _la;
        try {
            localContext = new PostFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 454;
                this.indexAccessExpr();
                this.state = 455;
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
    indexAccessExpr() {
        let localContext = new IndexAccessExprContext(this.context, this.state);
        this.enterRule(localContext, 66, testParser.RULE_indexAccessExpr);
        try {
            let alternative;
            localContext = new IndexAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 457;
                this.primaryExpr();
                this.state = 464;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 458;
                                this.match(testParser.LBRACKET);
                                this.state = 459;
                                this.expr();
                                this.state = 460;
                                this.match(testParser.RBRACKET);
                            }
                        }
                    }
                    this.state = 466;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
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
        this.enterRule(localContext, 68, testParser.RULE_primaryExpr);
        try {
            this.state = 479;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context)) {
                case 1:
                    localContext = new IndExprContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 467;
                        this.indeterminate();
                    }
                    break;
                case 2:
                    localContext = new RealContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 468;
                        this.num();
                    }
                    break;
                case 3:
                    localContext = new IdExprContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 469;
                        this.id();
                    }
                    break;
                case 4:
                    localContext = new FCallExprContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 470;
                        this.functionCall();
                    }
                    break;
                case 5:
                    localContext = new ParenContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 471;
                        this.match(testParser.LPAREN);
                        this.state = 472;
                        this.expr();
                        this.state = 473;
                        this.match(testParser.RPAREN);
                    }
                    break;
                case 6:
                    localContext = new StringLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 475;
                        this.match(testParser.STRING);
                    }
                    break;
                case 7:
                    localContext = new ListLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 476;
                        this.list();
                    }
                    break;
                case 8:
                    localContext = new DpLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 477;
                        this.dpoly();
                    }
                    break;
                case 9:
                    localContext = new PreChrExprContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 478;
                        this.prechar();
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
        this.enterRule(localContext, 70, testParser.RULE_dpoly);
        let _la;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 481;
                this.match(testParser.LTLT);
                this.state = 482;
                this.match(testParser.INT);
                this.state = 487;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 483;
                            this.match(testParser.COMMA);
                            this.state = 484;
                            this.match(testParser.INT);
                        }
                    }
                    this.state = 489;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 492;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                        this.state = 490;
                        this.match(testParser.COLON);
                        this.state = 491;
                        this.match(testParser.INT);
                    }
                }
                this.state = 494;
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
        this.enterRule(localContext, 72, testParser.RULE_rational);
        let _la;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 496;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 499;
                this.match(testParser.INT);
                this.state = 500;
                this.match(testParser.DIV);
                this.state = 502;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 501;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 504;
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
        this.enterRule(localContext, 74, testParser.RULE_decimal);
        let _la;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 507;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 506;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 509;
                _la = this.tokenStream.LA(1);
                if (!(_la === 44 || _la === 46)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 511;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                        this.state = 510;
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
        this.enterRule(localContext, 76, testParser.RULE_num);
        try {
            this.state = 518;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context)) {
                case 1:
                    localContext = new HexNumContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 513;
                        this.match(testParser.HEX);
                    }
                    break;
                case 2:
                    localContext = new BitNumContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 514;
                        this.match(testParser.BIT);
                    }
                    break;
                case 3:
                    localContext = new RatNumContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 515;
                        this.rational();
                    }
                    break;
                case 4:
                    localContext = new DecNumContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 516;
                        this.decimal();
                    }
                    break;
                case 5:
                    localContext = new ImaNumContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 517;
                        this.match(testParser.IMAGINARY);
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
        this.enterRule(localContext, 78, testParser.RULE_id);
        try {
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.BEFORE:
                    localContext = new BefContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 520;
                        this.match(testParser.BEFORE);
                    }
                    break;
                case testParser.BEFORE_N:
                    localContext = new BefNContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 521;
                        this.match(testParser.BEFORE_N);
                    }
                    break;
                case testParser.VAR_2:
                    localContext = new V2IdContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 522;
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
    indeterminate() {
        let localContext = new IndeterminateContext(this.context, this.state);
        this.enterRule(localContext, 80, testParser.RULE_indeterminate);
        try {
            this.state = 528;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.ID:
                    localContext = new FuncContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 525;
                        this.match(testParser.ID);
                    }
                    break;
                case testParser.ATFUNC:
                    localContext = new AtFuncContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 526;
                        this.match(testParser.ATFUNC);
                    }
                    break;
                case testParser.NOSTRING:
                    localContext = new ChFuncContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 527;
                        this.match(testParser.NOSTRING);
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
        this.enterRule(localContext, 82, testParser.RULE_list);
        let _la;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 530;
                this.match(testParser.LBRACKET);
                this.state = 532;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917511) !== 0)) {
                    {
                        this.state = 531;
                        this.exprlist();
                    }
                }
                this.state = 534;
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
        this.enterRule(localContext, 84, testParser.RULE_block);
        let _la;
        try {
            this.state = 545;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.LBRANCE:
                    localContext = new SentenceContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 536;
                        this.match(testParser.LBRANCE);
                        this.state = 540;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638624253) !== 0) || _la === 99) {
                            {
                                {
                                    this.state = 537;
                                    this.statement();
                                }
                            }
                            this.state = 542;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 543;
                        this.match(testParser.RBRANCE);
                    }
                    break;
                case testParser.LTLT:
                case testParser.COLON2:
                case testParser.INC:
                case testParser.DEC:
                case testParser.NOT:
                case testParser.MINUS:
                case testParser.BACK:
                case testParser.LPAREN:
                case testParser.LBRACKET:
                case testParser.SEMI:
                case testParser.DOLLAR:
                case testParser.HEX:
                case testParser.BIT:
                case testParser.FLOAT:
                case testParser.INT:
                case testParser.IMAGINARY:
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
                case testParser.ATFUNC:
                case testParser.VAR_2:
                case testParser.ID:
                case testParser.PIFDEF:
                case testParser.PIFNDEF:
                case testParser.PIF:
                case testParser.PINCLUDE:
                case testParser.PDEFINE:
                case testParser.CHAR:
                case testParser.STRING:
                case testParser.NOSTRING:
                    localContext = new Sentence1Context(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 544;
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
    exprlist() {
        let localContext = new ExprlistContext(this.context, this.state);
        this.enterRule(localContext, 86, testParser.RULE_exprlist);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 547;
                this.expr();
                this.state = 552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 548;
                            this.match(testParser.COMMA);
                            this.state = 549;
                            this.expr();
                        }
                    }
                    this.state = 554;
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
    terminator() {
        let localContext = new TerminatorContext(this.context, this.state);
        this.enterRule(localContext, 88, testParser.RULE_terminator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 555;
                _la = this.tokenStream.LA(1);
                if (!(_la === 39 || _la === 40)) {
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
    systemPath() {
        let localContext = new SystemPathContext(this.context, this.state);
        this.enterRule(localContext, 90, testParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 557;
                this.match(testParser.LT);
                this.state = 558;
                this.match(testParser.ID);
                this.state = 559;
                this.match(testParser.GT);
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
    optionPair() {
        let localContext = new OptionPairContext(this.context, this.state);
        this.enterRule(localContext, 92, testParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 561;
                localContext._key = this.indeterminate();
                this.state = 562;
                this.match(testParser.ASSIGN);
                this.state = 563;
                localContext._value = this.expr();
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
testParser.BACK = 29;
testParser.MID = 30;
testParser.LPAREN = 31;
testParser.RPAREN = 32;
testParser.LBRANCE = 33;
testParser.RBRANCE = 34;
testParser.LBRACKET = 35;
testParser.RBRACKET = 36;
testParser.QUESTION = 37;
testParser.COLON = 38;
testParser.SEMI = 39;
testParser.DOLLAR = 40;
testParser.COMMA = 41;
testParser.HEX = 42;
testParser.BIT = 43;
testParser.FLOAT = 44;
testParser.EXP = 45;
testParser.INT = 46;
testParser.POINT = 47;
testParser.IMAGINARY = 48;
testParser.BEFORE = 49;
testParser.BEFORE_N = 50;
testParser.QE_1 = 51;
testParser.QE_2 = 52;
testParser.QE_3 = 53;
testParser.QE_4 = 54;
testParser.QE_5 = 55;
testParser.QE_6 = 56;
testParser.QE_7 = 57;
testParser.QE_8 = 58;
testParser.QE_9 = 59;
testParser.QE_10 = 60;
testParser.QE_11 = 61;
testParser.QE_12 = 62;
testParser.DEF = 63;
testParser.IF = 64;
testParser.FOR = 65;
testParser.WHILE = 66;
testParser.DO = 67;
testParser.ELSE = 68;
testParser.RETURN = 69;
testParser.CONTINUE = 70;
testParser.BREAK = 71;
testParser.STRUCT = 72;
testParser.MODULE = 73;
testParser.ENDMODULE = 74;
testParser.EXTERN = 75;
testParser.STATIC = 76;
testParser.GLOBAL = 77;
testParser.LOCAL = 78;
testParser.LOCALF = 79;
testParser.ATFUNC = 80;
testParser.VAR_2 = 81;
testParser.ID = 82;
testParser.NEWLINE = 83;
testParser.WS = 84;
testParser.COMMENT = 85;
testParser.LCOMMENT = 86;
testParser.PCOMMENT = 87;
testParser.PIFDEF = 88;
testParser.PIFNDEF = 89;
testParser.PIF = 90;
testParser.PELSE = 91;
testParser.PELIF = 92;
testParser.PENDIF = 93;
testParser.PINCLUDE = 94;
testParser.PDEFINE = 95;
testParser.CHARPLUS = 96;
testParser.CHAR = 97;
testParser.STRING = 98;
testParser.NOSTRING = 99;
testParser.RULE_prog = 0;
testParser.RULE_statement = 1;
testParser.RULE_prechar = 2;
testParser.RULE_preprocessor = 3;
testParser.RULE_functionDefinition = 4;
testParser.RULE_functionIf = 5;
testParser.RULE_functionFor = 6;
testParser.RULE_functionWhile = 7;
testParser.RULE_functionDo = 8;
testParser.RULE_functionReturn = 9;
testParser.RULE_functionContinue = 10;
testParser.RULE_functionBreak = 11;
testParser.RULE_functionStruct = 12;
testParser.RULE_functionCall = 13;
testParser.RULE_functionModule = 14;
testParser.RULE_expr = 15;
testParser.RULE_assignmentExpr = 16;
testParser.RULE_ternaryExpr = 17;
testParser.RULE_quoteExpr = 18;
testParser.RULE_qeNotExpr = 19;
testParser.RULE_qeOrExpr = 20;
testParser.RULE_qeAndExpr = 21;
testParser.RULE_qeCompareExpr = 22;
testParser.RULE_orExpr = 23;
testParser.RULE_andExpr = 24;
testParser.RULE_compareExpr = 25;
testParser.RULE_addSubExpr = 26;
testParser.RULE_mulDivSurExpr = 27;
testParser.RULE_unaryExpr = 28;
testParser.RULE_powerExpr = 29;
testParser.RULE_factExpr = 30;
testParser.RULE_prefixExpr = 31;
testParser.RULE_postfixExpr = 32;
testParser.RULE_indexAccessExpr = 33;
testParser.RULE_primaryExpr = 34;
testParser.RULE_dpoly = 35;
testParser.RULE_rational = 36;
testParser.RULE_decimal = 37;
testParser.RULE_num = 38;
testParser.RULE_id = 39;
testParser.RULE_indeterminate = 40;
testParser.RULE_list = 41;
testParser.RULE_block = 42;
testParser.RULE_exprlist = 43;
testParser.RULE_terminator = 44;
testParser.RULE_systemPath = 45;
testParser.RULE_optionPair = 46;
testParser.literalNames = [
    null, "'<<'", "'>>'", "'::'", "'++'", "'--'", "'+='", "'-='", "'*='",
    "'/='", "'%='", "'^='", "'->'", "'=='", "'!='", "'<='", "'>='",
    "'<'", "'>'", "'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'",
    "'%'", "'^'", "'='", "'`'", "'|'", "'('", "')'", "'{'", "'}'", "'['",
    "']'", "'?'", "':'", "';'", "'$'", "','", null, null, null, null,
    null, "'.'", "'@i'", "'@@'", null, "'@>='", "'@<='", "'@>'", "'@<'",
    "'@=='", "'@='", "'@!='", "'@!'", "'@&&'", "'@&'", "'@||'", "'@|'",
    "'def'", "'if'", "'for'", "'while'", "'do'", "'else'", "'return'",
    "'continue'", "'break'", "'struct'", "'module'", "'endmodule'",
    "'extern'", "'static'", "'global'", "'local'", "'localf'", null,
    "'@'", null, "'\\n'", null, null, null, null, "'#ifdef'", "'#ifndef'",
    "'#if'", "'#else'", "'#elif'", "'#endif'", "'#include'", "'#define'",
    "'##'", "'#'"
];
testParser.symbolicNames = [
    null, "LTLT", "GTGT", "COLON2", "INC", "DEC", "PLUSEQ", "MINUSEQ",
    "MULTEQ", "DIVEQ", "SUREQ", "POWEREQ", "ARROW", "EQ", "NEQ", "LE",
    "GE", "LT", "GT", "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", "DIV",
    "SUR", "POWER", "ASSIGN", "BACK", "MID", "LPAREN", "RPAREN", "LBRANCE",
    "RBRANCE", "LBRACKET", "RBRACKET", "QUESTION", "COLON", "SEMI",
    "DOLLAR", "COMMA", "HEX", "BIT", "FLOAT", "EXP", "INT", "POINT",
    "IMAGINARY", "BEFORE", "BEFORE_N", "QE_1", "QE_2", "QE_3", "QE_4",
    "QE_5", "QE_6", "QE_7", "QE_8", "QE_9", "QE_10", "QE_11", "QE_12",
    "DEF", "IF", "FOR", "WHILE", "DO", "ELSE", "RETURN", "CONTINUE",
    "BREAK", "STRUCT", "MODULE", "ENDMODULE", "EXTERN", "STATIC", "GLOBAL",
    "LOCAL", "LOCALF", "ATFUNC", "VAR_2", "ID", "NEWLINE", "WS", "COMMENT",
    "LCOMMENT", "PCOMMENT", "PIFDEF", "PIFNDEF", "PIF", "PELSE", "PELIF",
    "PENDIF", "PINCLUDE", "PDEFINE", "CHARPLUS", "CHAR", "STRING", "NOSTRING"
];
testParser.ruleNames = [
    "prog", "statement", "prechar", "preprocessor", "functionDefinition",
    "functionIf", "functionFor", "functionWhile", "functionDo", "functionReturn",
    "functionContinue", "functionBreak", "functionStruct", "functionCall",
    "functionModule", "expr", "assignmentExpr", "ternaryExpr", "quoteExpr",
    "qeNotExpr", "qeOrExpr", "qeAndExpr", "qeCompareExpr", "orExpr",
    "andExpr", "compareExpr", "addSubExpr", "mulDivSurExpr", "unaryExpr",
    "powerExpr", "factExpr", "prefixExpr", "postfixExpr", "indexAccessExpr",
    "primaryExpr", "dpoly", "rational", "decimal", "num", "id", "indeterminate",
    "list", "block", "exprlist", "terminator", "systemPath", "optionPair",
];
testParser._serializedATN = [
    4, 1, 99, 566, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33,
    7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39,
    2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46,
    7, 46, 1, 0, 5, 0, 96, 8, 0, 10, 0, 12, 0, 99, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 118, 8, 1, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 3, 2, 125, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 133, 8, 3, 10, 3, 12,
    3, 136, 9, 3, 3, 3, 138, 8, 3, 1, 3, 3, 3, 141, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 147, 8,
    3, 10, 3, 12, 3, 150, 9, 3, 1, 3, 1, 3, 1, 3, 5, 3, 155, 8, 3, 10, 3, 12, 3, 158, 9, 3, 5,
    3, 160, 8, 3, 10, 3, 12, 3, 163, 9, 3, 1, 3, 1, 3, 5, 3, 167, 8, 3, 10, 3, 12, 3, 170, 9,
    3, 3, 3, 172, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 179, 8, 3, 3, 3, 181, 8, 3, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 189, 8, 4, 10, 4, 12, 4, 192, 9, 4, 3, 4, 194, 8, 4, 1, 4,
    1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 206, 8, 5, 1, 6, 1, 6, 1, 6, 3, 6,
    211, 8, 6, 1, 6, 1, 6, 3, 6, 215, 8, 6, 1, 6, 1, 6, 3, 6, 219, 8, 6, 1, 6, 1, 6, 1, 6, 1, 7,
    1, 7, 1, 7, 3, 7, 227, 8, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 237, 8, 8,
    1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 3, 9, 244, 8, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11,
    1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 260, 8, 12, 10, 12, 12, 12, 263,
    9, 12, 1, 12, 1, 12, 1, 12, 1, 13, 3, 13, 269, 8, 13, 1, 13, 1, 13, 1, 13, 3, 13, 274, 8,
    13, 1, 13, 1, 13, 1, 13, 1, 13, 5, 13, 280, 8, 13, 10, 13, 12, 13, 283, 9, 13, 3, 13, 285,
    8, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 293, 8, 14, 10, 14, 12, 14, 296,
    9, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 306, 8, 14, 1, 15,
    1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 316, 8, 16, 10, 16, 12, 16, 319,
    9, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 4, 16, 326, 8, 16, 11, 16, 12, 16, 327, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 337, 8, 16, 10, 16, 12, 16, 340, 9, 16,
    1, 16, 1, 16, 1, 16, 3, 16, 345, 8, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17,
    353, 8, 17, 1, 18, 3, 18, 356, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 5, 19, 363, 8,
    19, 10, 19, 12, 19, 366, 9, 19, 1, 20, 1, 20, 1, 20, 5, 20, 371, 8, 20, 10, 20, 12, 20,
    374, 9, 20, 1, 21, 1, 21, 1, 21, 5, 21, 379, 8, 21, 10, 21, 12, 21, 382, 9, 21, 1, 22,
    1, 22, 1, 22, 5, 22, 387, 8, 22, 10, 22, 12, 22, 390, 9, 22, 1, 23, 1, 23, 1, 23, 5, 23,
    395, 8, 23, 10, 23, 12, 23, 398, 9, 23, 1, 24, 1, 24, 1, 24, 5, 24, 403, 8, 24, 10, 24,
    12, 24, 406, 9, 24, 1, 25, 1, 25, 1, 25, 5, 25, 411, 8, 25, 10, 25, 12, 25, 414, 9, 25,
    1, 26, 1, 26, 1, 26, 5, 26, 419, 8, 26, 10, 26, 12, 26, 422, 9, 26, 1, 27, 1, 27, 1, 27,
    5, 27, 427, 8, 27, 10, 27, 12, 27, 430, 9, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28,
    437, 8, 28, 1, 29, 1, 29, 1, 29, 3, 29, 442, 8, 29, 1, 30, 1, 30, 1, 30, 3, 30, 447, 8,
    30, 1, 30, 3, 30, 450, 8, 30, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1,
    33, 1, 33, 1, 33, 5, 33, 463, 8, 33, 10, 33, 12, 33, 466, 9, 33, 1, 34, 1, 34, 1, 34, 1,
    34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 480, 8, 34, 1, 35, 1,
    35, 1, 35, 1, 35, 5, 35, 486, 8, 35, 10, 35, 12, 35, 489, 9, 35, 1, 35, 1, 35, 3, 35, 493,
    8, 35, 1, 35, 1, 35, 1, 36, 3, 36, 498, 8, 36, 1, 36, 1, 36, 1, 36, 3, 36, 503, 8, 36, 1,
    36, 1, 36, 1, 37, 3, 37, 508, 8, 37, 1, 37, 1, 37, 3, 37, 512, 8, 37, 1, 38, 1, 38, 1, 38,
    1, 38, 1, 38, 3, 38, 519, 8, 38, 1, 39, 1, 39, 1, 39, 3, 39, 524, 8, 39, 1, 40, 1, 40, 1,
    40, 3, 40, 529, 8, 40, 1, 41, 1, 41, 3, 41, 533, 8, 41, 1, 41, 1, 41, 1, 42, 1, 42, 5, 42,
    539, 8, 42, 10, 42, 12, 42, 542, 9, 42, 1, 42, 1, 42, 3, 42, 546, 8, 42, 1, 43, 1, 43,
    1, 43, 5, 43, 551, 8, 43, 10, 43, 12, 43, 554, 9, 43, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45,
    1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 0, 0, 47, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
    22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,
    66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 0, 12, 1, 0, 88, 90, 1, 0, 75,
    79, 2, 0, 6, 11, 28, 28, 1, 0, 61, 62, 1, 0, 59, 60, 1, 0, 51, 57, 1, 0, 13, 18, 1, 0, 22,
    23, 1, 0, 24, 26, 1, 0, 4, 5, 2, 0, 44, 44, 46, 46, 1, 0, 39, 40, 610, 0, 97, 1, 0, 0, 0,
    2, 117, 1, 0, 0, 0, 4, 124, 1, 0, 0, 0, 6, 180, 1, 0, 0, 0, 8, 182, 1, 0, 0, 0, 10, 198, 1,
    0, 0, 0, 12, 207, 1, 0, 0, 0, 14, 223, 1, 0, 0, 0, 16, 231, 1, 0, 0, 0, 18, 241, 1, 0, 0,
    0, 20, 247, 1, 0, 0, 0, 22, 250, 1, 0, 0, 0, 24, 253, 1, 0, 0, 0, 26, 268, 1, 0, 0, 0, 28,
    305, 1, 0, 0, 0, 30, 307, 1, 0, 0, 0, 32, 344, 1, 0, 0, 0, 34, 346, 1, 0, 0, 0, 36, 355,
    1, 0, 0, 0, 38, 359, 1, 0, 0, 0, 40, 367, 1, 0, 0, 0, 42, 375, 1, 0, 0, 0, 44, 383, 1, 0,
    0, 0, 46, 391, 1, 0, 0, 0, 48, 399, 1, 0, 0, 0, 50, 407, 1, 0, 0, 0, 52, 415, 1, 0, 0, 0,
    54, 423, 1, 0, 0, 0, 56, 436, 1, 0, 0, 0, 58, 438, 1, 0, 0, 0, 60, 446, 1, 0, 0, 0, 62, 451,
    1, 0, 0, 0, 64, 454, 1, 0, 0, 0, 66, 457, 1, 0, 0, 0, 68, 479, 1, 0, 0, 0, 70, 481, 1, 0,
    0, 0, 72, 497, 1, 0, 0, 0, 74, 507, 1, 0, 0, 0, 76, 518, 1, 0, 0, 0, 78, 523, 1, 0, 0, 0,
    80, 528, 1, 0, 0, 0, 82, 530, 1, 0, 0, 0, 84, 545, 1, 0, 0, 0, 86, 547, 1, 0, 0, 0, 88, 555,
    1, 0, 0, 0, 90, 557, 1, 0, 0, 0, 92, 561, 1, 0, 0, 0, 94, 96, 3, 2, 1, 0, 95, 94, 1, 0, 0,
    0, 96, 99, 1, 0, 0, 0, 97, 95, 1, 0, 0, 0, 97, 98, 1, 0, 0, 0, 98, 100, 1, 0, 0, 0, 99, 97,
    1, 0, 0, 0, 100, 101, 5, 0, 0, 1, 101, 1, 1, 0, 0, 0, 102, 103, 3, 30, 15, 0, 103, 104,
    3, 88, 44, 0, 104, 118, 1, 0, 0, 0, 105, 118, 3, 88, 44, 0, 106, 118, 3, 8, 4, 0, 107,
    118, 3, 10, 5, 0, 108, 118, 3, 12, 6, 0, 109, 118, 3, 14, 7, 0, 110, 118, 3, 16, 8, 0,
    111, 118, 3, 18, 9, 0, 112, 118, 3, 22, 11, 0, 113, 118, 3, 20, 10, 0, 114, 118, 3, 24,
    12, 0, 115, 118, 3, 28, 14, 0, 116, 118, 3, 6, 3, 0, 117, 102, 1, 0, 0, 0, 117, 105, 1,
    0, 0, 0, 117, 106, 1, 0, 0, 0, 117, 107, 1, 0, 0, 0, 117, 108, 1, 0, 0, 0, 117, 109, 1,
    0, 0, 0, 117, 110, 1, 0, 0, 0, 117, 111, 1, 0, 0, 0, 117, 112, 1, 0, 0, 0, 117, 113, 1,
    0, 0, 0, 117, 114, 1, 0, 0, 0, 117, 115, 1, 0, 0, 0, 117, 116, 1, 0, 0, 0, 118, 3, 1, 0,
    0, 0, 119, 120, 5, 97, 0, 0, 120, 125, 5, 82, 0, 0, 121, 122, 5, 82, 0, 0, 122, 123, 5,
    96, 0, 0, 123, 125, 5, 82, 0, 0, 124, 119, 1, 0, 0, 0, 124, 121, 1, 0, 0, 0, 125, 5, 1,
    0, 0, 0, 126, 127, 5, 95, 0, 0, 127, 140, 5, 82, 0, 0, 128, 137, 5, 31, 0, 0, 129, 134,
    5, 82, 0, 0, 130, 131, 5, 41, 0, 0, 131, 133, 5, 82, 0, 0, 132, 130, 1, 0, 0, 0, 133, 136,
    1, 0, 0, 0, 134, 132, 1, 0, 0, 0, 134, 135, 1, 0, 0, 0, 135, 138, 1, 0, 0, 0, 136, 134,
    1, 0, 0, 0, 137, 129, 1, 0, 0, 0, 137, 138, 1, 0, 0, 0, 138, 139, 1, 0, 0, 0, 139, 141,
    5, 32, 0, 0, 140, 128, 1, 0, 0, 0, 140, 141, 1, 0, 0, 0, 141, 142, 1, 0, 0, 0, 142, 181,
    3, 30, 15, 0, 143, 144, 7, 0, 0, 0, 144, 148, 3, 30, 15, 0, 145, 147, 3, 2, 1, 0, 146,
    145, 1, 0, 0, 0, 147, 150, 1, 0, 0, 0, 148, 146, 1, 0, 0, 0, 148, 149, 1, 0, 0, 0, 149,
    161, 1, 0, 0, 0, 150, 148, 1, 0, 0, 0, 151, 152, 5, 92, 0, 0, 152, 156, 3, 30, 15, 0, 153,
    155, 3, 2, 1, 0, 154, 153, 1, 0, 0, 0, 155, 158, 1, 0, 0, 0, 156, 154, 1, 0, 0, 0, 156,
    157, 1, 0, 0, 0, 157, 160, 1, 0, 0, 0, 158, 156, 1, 0, 0, 0, 159, 151, 1, 0, 0, 0, 160,
    163, 1, 0, 0, 0, 161, 159, 1, 0, 0, 0, 161, 162, 1, 0, 0, 0, 162, 171, 1, 0, 0, 0, 163,
    161, 1, 0, 0, 0, 164, 168, 5, 91, 0, 0, 165, 167, 3, 2, 1, 0, 166, 165, 1, 0, 0, 0, 167,
    170, 1, 0, 0, 0, 168, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 172, 1, 0, 0, 0, 170,
    168, 1, 0, 0, 0, 171, 164, 1, 0, 0, 0, 171, 172, 1, 0, 0, 0, 172, 173, 1, 0, 0, 0, 173,
    174, 5, 93, 0, 0, 174, 181, 1, 0, 0, 0, 175, 178, 5, 94, 0, 0, 176, 179, 3, 90, 45, 0,
    177, 179, 5, 98, 0, 0, 178, 176, 1, 0, 0, 0, 178, 177, 1, 0, 0, 0, 179, 181, 1, 0, 0, 0,
    180, 126, 1, 0, 0, 0, 180, 143, 1, 0, 0, 0, 180, 175, 1, 0, 0, 0, 181, 7, 1, 0, 0, 0, 182,
    183, 5, 63, 0, 0, 183, 184, 3, 80, 40, 0, 184, 193, 5, 31, 0, 0, 185, 190, 5, 82, 0, 0,
    186, 187, 5, 41, 0, 0, 187, 189, 5, 82, 0, 0, 188, 186, 1, 0, 0, 0, 189, 192, 1, 0, 0,
    0, 190, 188, 1, 0, 0, 0, 190, 191, 1, 0, 0, 0, 191, 194, 1, 0, 0, 0, 192, 190, 1, 0, 0,
    0, 193, 185, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 195, 1, 0, 0, 0, 195, 196, 5, 32, 0,
    0, 196, 197, 3, 84, 42, 0, 197, 9, 1, 0, 0, 0, 198, 199, 5, 64, 0, 0, 199, 200, 5, 31,
    0, 0, 200, 201, 3, 30, 15, 0, 201, 202, 5, 32, 0, 0, 202, 205, 3, 84, 42, 0, 203, 204,
    5, 68, 0, 0, 204, 206, 3, 84, 42, 0, 205, 203, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 11,
    1, 0, 0, 0, 207, 208, 5, 65, 0, 0, 208, 210, 5, 31, 0, 0, 209, 211, 3, 86, 43, 0, 210,
    209, 1, 0, 0, 0, 210, 211, 1, 0, 0, 0, 211, 212, 1, 0, 0, 0, 212, 214, 5, 39, 0, 0, 213,
    215, 3, 86, 43, 0, 214, 213, 1, 0, 0, 0, 214, 215, 1, 0, 0, 0, 215, 216, 1, 0, 0, 0, 216,
    218, 5, 39, 0, 0, 217, 219, 3, 86, 43, 0, 218, 217, 1, 0, 0, 0, 218, 219, 1, 0, 0, 0, 219,
    220, 1, 0, 0, 0, 220, 221, 5, 32, 0, 0, 221, 222, 3, 84, 42, 0, 222, 13, 1, 0, 0, 0, 223,
    224, 5, 66, 0, 0, 224, 226, 5, 31, 0, 0, 225, 227, 3, 86, 43, 0, 226, 225, 1, 0, 0, 0,
    226, 227, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 229, 5, 32, 0, 0, 229, 230, 3, 84, 42,
    0, 230, 15, 1, 0, 0, 0, 231, 232, 5, 67, 0, 0, 232, 233, 3, 84, 42, 0, 233, 234, 5, 66,
    0, 0, 234, 236, 5, 31, 0, 0, 235, 237, 3, 86, 43, 0, 236, 235, 1, 0, 0, 0, 236, 237, 1,
    0, 0, 0, 237, 238, 1, 0, 0, 0, 238, 239, 5, 32, 0, 0, 239, 240, 5, 39, 0, 0, 240, 17, 1,
    0, 0, 0, 241, 243, 5, 69, 0, 0, 242, 244, 3, 30, 15, 0, 243, 242, 1, 0, 0, 0, 243, 244,
    1, 0, 0, 0, 244, 245, 1, 0, 0, 0, 245, 246, 3, 88, 44, 0, 246, 19, 1, 0, 0, 0, 247, 248,
    5, 70, 0, 0, 248, 249, 3, 88, 44, 0, 249, 21, 1, 0, 0, 0, 250, 251, 5, 71, 0, 0, 251, 252,
    3, 88, 44, 0, 252, 23, 1, 0, 0, 0, 253, 254, 5, 72, 0, 0, 254, 255, 3, 80, 40, 0, 255,
    256, 5, 33, 0, 0, 256, 261, 3, 80, 40, 0, 257, 258, 5, 41, 0, 0, 258, 260, 3, 80, 40,
    0, 259, 257, 1, 0, 0, 0, 260, 263, 1, 0, 0, 0, 261, 259, 1, 0, 0, 0, 261, 262, 1, 0, 0,
    0, 262, 264, 1, 0, 0, 0, 263, 261, 1, 0, 0, 0, 264, 265, 5, 34, 0, 0, 265, 266, 3, 88,
    44, 0, 266, 25, 1, 0, 0, 0, 267, 269, 5, 3, 0, 0, 268, 267, 1, 0, 0, 0, 268, 269, 1, 0,
    0, 0, 269, 270, 1, 0, 0, 0, 270, 271, 3, 80, 40, 0, 271, 273, 5, 31, 0, 0, 272, 274, 3,
    86, 43, 0, 273, 272, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274, 284, 1, 0, 0, 0, 275, 276,
    5, 30, 0, 0, 276, 281, 3, 92, 46, 0, 277, 278, 5, 41, 0, 0, 278, 280, 3, 92, 46, 0, 279,
    277, 1, 0, 0, 0, 280, 283, 1, 0, 0, 0, 281, 279, 1, 0, 0, 0, 281, 282, 1, 0, 0, 0, 282,
    285, 1, 0, 0, 0, 283, 281, 1, 0, 0, 0, 284, 275, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285,
    286, 1, 0, 0, 0, 286, 287, 5, 32, 0, 0, 287, 27, 1, 0, 0, 0, 288, 289, 7, 1, 0, 0, 289,
    294, 3, 80, 40, 0, 290, 291, 5, 41, 0, 0, 291, 293, 3, 80, 40, 0, 292, 290, 1, 0, 0, 0,
    293, 296, 1, 0, 0, 0, 294, 292, 1, 0, 0, 0, 294, 295, 1, 0, 0, 0, 295, 297, 1, 0, 0, 0,
    296, 294, 1, 0, 0, 0, 297, 298, 3, 88, 44, 0, 298, 306, 1, 0, 0, 0, 299, 300, 5, 73, 0,
    0, 300, 301, 3, 80, 40, 0, 301, 302, 3, 88, 44, 0, 302, 306, 1, 0, 0, 0, 303, 304, 5,
    74, 0, 0, 304, 306, 3, 88, 44, 0, 305, 288, 1, 0, 0, 0, 305, 299, 1, 0, 0, 0, 305, 303,
    1, 0, 0, 0, 306, 29, 1, 0, 0, 0, 307, 308, 3, 32, 16, 0, 308, 31, 1, 0, 0, 0, 309, 345,
    3, 34, 17, 0, 310, 317, 5, 82, 0, 0, 311, 312, 5, 35, 0, 0, 312, 313, 3, 30, 15, 0, 313,
    314, 5, 36, 0, 0, 314, 316, 1, 0, 0, 0, 315, 311, 1, 0, 0, 0, 316, 319, 1, 0, 0, 0, 317,
    315, 1, 0, 0, 0, 317, 318, 1, 0, 0, 0, 318, 320, 1, 0, 0, 0, 319, 317, 1, 0, 0, 0, 320,
    321, 7, 2, 0, 0, 321, 345, 3, 32, 16, 0, 322, 325, 5, 82, 0, 0, 323, 324, 5, 12, 0, 0,
    324, 326, 3, 80, 40, 0, 325, 323, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 325, 1, 0, 0,
    0, 327, 328, 1, 0, 0, 0, 328, 329, 1, 0, 0, 0, 329, 330, 7, 2, 0, 0, 330, 331, 3, 32, 16,
    0, 331, 345, 1, 0, 0, 0, 332, 333, 5, 35, 0, 0, 333, 338, 5, 82, 0, 0, 334, 335, 5, 41,
    0, 0, 335, 337, 5, 82, 0, 0, 336, 334, 1, 0, 0, 0, 337, 340, 1, 0, 0, 0, 338, 336, 1, 0,
    0, 0, 338, 339, 1, 0, 0, 0, 339, 341, 1, 0, 0, 0, 340, 338, 1, 0, 0, 0, 341, 342, 5, 36,
    0, 0, 342, 343, 7, 2, 0, 0, 343, 345, 3, 32, 16, 0, 344, 309, 1, 0, 0, 0, 344, 310, 1,
    0, 0, 0, 344, 322, 1, 0, 0, 0, 344, 332, 1, 0, 0, 0, 345, 33, 1, 0, 0, 0, 346, 352, 3, 36,
    18, 0, 347, 348, 5, 37, 0, 0, 348, 349, 3, 30, 15, 0, 349, 350, 5, 38, 0, 0, 350, 351,
    3, 30, 15, 0, 351, 353, 1, 0, 0, 0, 352, 347, 1, 0, 0, 0, 352, 353, 1, 0, 0, 0, 353, 35,
    1, 0, 0, 0, 354, 356, 5, 29, 0, 0, 355, 354, 1, 0, 0, 0, 355, 356, 1, 0, 0, 0, 356, 357,
    1, 0, 0, 0, 357, 358, 3, 38, 19, 0, 358, 37, 1, 0, 0, 0, 359, 364, 3, 40, 20, 0, 360, 361,
    5, 58, 0, 0, 361, 363, 3, 40, 20, 0, 362, 360, 1, 0, 0, 0, 363, 366, 1, 0, 0, 0, 364, 362,
    1, 0, 0, 0, 364, 365, 1, 0, 0, 0, 365, 39, 1, 0, 0, 0, 366, 364, 1, 0, 0, 0, 367, 372, 3,
    42, 21, 0, 368, 369, 7, 3, 0, 0, 369, 371, 3, 42, 21, 0, 370, 368, 1, 0, 0, 0, 371, 374,
    1, 0, 0, 0, 372, 370, 1, 0, 0, 0, 372, 373, 1, 0, 0, 0, 373, 41, 1, 0, 0, 0, 374, 372, 1,
    0, 0, 0, 375, 380, 3, 44, 22, 0, 376, 377, 7, 4, 0, 0, 377, 379, 3, 44, 22, 0, 378, 376,
    1, 0, 0, 0, 379, 382, 1, 0, 0, 0, 380, 378, 1, 0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 43, 1,
    0, 0, 0, 382, 380, 1, 0, 0, 0, 383, 388, 3, 46, 23, 0, 384, 385, 7, 5, 0, 0, 385, 387,
    3, 46, 23, 0, 386, 384, 1, 0, 0, 0, 387, 390, 1, 0, 0, 0, 388, 386, 1, 0, 0, 0, 388, 389,
    1, 0, 0, 0, 389, 45, 1, 0, 0, 0, 390, 388, 1, 0, 0, 0, 391, 396, 3, 48, 24, 0, 392, 393,
    5, 20, 0, 0, 393, 395, 3, 48, 24, 0, 394, 392, 1, 0, 0, 0, 395, 398, 1, 0, 0, 0, 396, 394,
    1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 47, 1, 0, 0, 0, 398, 396, 1, 0, 0, 0, 399, 404, 3,
    50, 25, 0, 400, 401, 5, 19, 0, 0, 401, 403, 3, 50, 25, 0, 402, 400, 1, 0, 0, 0, 403, 406,
    1, 0, 0, 0, 404, 402, 1, 0, 0, 0, 404, 405, 1, 0, 0, 0, 405, 49, 1, 0, 0, 0, 406, 404, 1,
    0, 0, 0, 407, 412, 3, 52, 26, 0, 408, 409, 7, 6, 0, 0, 409, 411, 3, 52, 26, 0, 410, 408,
    1, 0, 0, 0, 411, 414, 1, 0, 0, 0, 412, 410, 1, 0, 0, 0, 412, 413, 1, 0, 0, 0, 413, 51, 1,
    0, 0, 0, 414, 412, 1, 0, 0, 0, 415, 420, 3, 54, 27, 0, 416, 417, 7, 7, 0, 0, 417, 419,
    3, 54, 27, 0, 418, 416, 1, 0, 0, 0, 419, 422, 1, 0, 0, 0, 420, 418, 1, 0, 0, 0, 420, 421,
    1, 0, 0, 0, 421, 53, 1, 0, 0, 0, 422, 420, 1, 0, 0, 0, 423, 428, 3, 56, 28, 0, 424, 425,
    7, 8, 0, 0, 425, 427, 3, 56, 28, 0, 426, 424, 1, 0, 0, 0, 427, 430, 1, 0, 0, 0, 428, 426,
    1, 0, 0, 0, 428, 429, 1, 0, 0, 0, 429, 55, 1, 0, 0, 0, 430, 428, 1, 0, 0, 0, 431, 432, 5,
    23, 0, 0, 432, 437, 3, 56, 28, 0, 433, 434, 5, 21, 0, 0, 434, 437, 3, 56, 28, 0, 435,
    437, 3, 58, 29, 0, 436, 431, 1, 0, 0, 0, 436, 433, 1, 0, 0, 0, 436, 435, 1, 0, 0, 0, 437,
    57, 1, 0, 0, 0, 438, 441, 3, 60, 30, 0, 439, 440, 5, 27, 0, 0, 440, 442, 3, 56, 28, 0,
    441, 439, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 59, 1, 0, 0, 0, 443, 447, 3, 64, 32, 0,
    444, 447, 3, 62, 31, 0, 445, 447, 3, 66, 33, 0, 446, 443, 1, 0, 0, 0, 446, 444, 1, 0,
    0, 0, 446, 445, 1, 0, 0, 0, 447, 449, 1, 0, 0, 0, 448, 450, 5, 21, 0, 0, 449, 448, 1, 0,
    0, 0, 449, 450, 1, 0, 0, 0, 450, 61, 1, 0, 0, 0, 451, 452, 7, 9, 0, 0, 452, 453, 3, 66,
    33, 0, 453, 63, 1, 0, 0, 0, 454, 455, 3, 66, 33, 0, 455, 456, 7, 9, 0, 0, 456, 65, 1, 0,
    0, 0, 457, 464, 3, 68, 34, 0, 458, 459, 5, 35, 0, 0, 459, 460, 3, 30, 15, 0, 460, 461,
    5, 36, 0, 0, 461, 463, 1, 0, 0, 0, 462, 458, 1, 0, 0, 0, 463, 466, 1, 0, 0, 0, 464, 462,
    1, 0, 0, 0, 464, 465, 1, 0, 0, 0, 465, 67, 1, 0, 0, 0, 466, 464, 1, 0, 0, 0, 467, 480, 3,
    80, 40, 0, 468, 480, 3, 76, 38, 0, 469, 480, 3, 78, 39, 0, 470, 480, 3, 26, 13, 0, 471,
    472, 5, 31, 0, 0, 472, 473, 3, 30, 15, 0, 473, 474, 5, 32, 0, 0, 474, 480, 1, 0, 0, 0,
    475, 480, 5, 98, 0, 0, 476, 480, 3, 82, 41, 0, 477, 480, 3, 70, 35, 0, 478, 480, 3, 4,
    2, 0, 479, 467, 1, 0, 0, 0, 479, 468, 1, 0, 0, 0, 479, 469, 1, 0, 0, 0, 479, 470, 1, 0,
    0, 0, 479, 471, 1, 0, 0, 0, 479, 475, 1, 0, 0, 0, 479, 476, 1, 0, 0, 0, 479, 477, 1, 0,
    0, 0, 479, 478, 1, 0, 0, 0, 480, 69, 1, 0, 0, 0, 481, 482, 5, 1, 0, 0, 482, 487, 5, 46,
    0, 0, 483, 484, 5, 41, 0, 0, 484, 486, 5, 46, 0, 0, 485, 483, 1, 0, 0, 0, 486, 489, 1,
    0, 0, 0, 487, 485, 1, 0, 0, 0, 487, 488, 1, 0, 0, 0, 488, 492, 1, 0, 0, 0, 489, 487, 1,
    0, 0, 0, 490, 491, 5, 38, 0, 0, 491, 493, 5, 46, 0, 0, 492, 490, 1, 0, 0, 0, 492, 493,
    1, 0, 0, 0, 493, 494, 1, 0, 0, 0, 494, 495, 5, 2, 0, 0, 495, 71, 1, 0, 0, 0, 496, 498, 5,
    23, 0, 0, 497, 496, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498, 499, 1, 0, 0, 0, 499, 500, 5,
    46, 0, 0, 500, 502, 5, 25, 0, 0, 501, 503, 5, 23, 0, 0, 502, 501, 1, 0, 0, 0, 502, 503,
    1, 0, 0, 0, 503, 504, 1, 0, 0, 0, 504, 505, 5, 46, 0, 0, 505, 73, 1, 0, 0, 0, 506, 508,
    5, 23, 0, 0, 507, 506, 1, 0, 0, 0, 507, 508, 1, 0, 0, 0, 508, 509, 1, 0, 0, 0, 509, 511,
    7, 10, 0, 0, 510, 512, 5, 45, 0, 0, 511, 510, 1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 75,
    1, 0, 0, 0, 513, 519, 5, 42, 0, 0, 514, 519, 5, 43, 0, 0, 515, 519, 3, 72, 36, 0, 516,
    519, 3, 74, 37, 0, 517, 519, 5, 48, 0, 0, 518, 513, 1, 0, 0, 0, 518, 514, 1, 0, 0, 0, 518,
    515, 1, 0, 0, 0, 518, 516, 1, 0, 0, 0, 518, 517, 1, 0, 0, 0, 519, 77, 1, 0, 0, 0, 520, 524,
    5, 49, 0, 0, 521, 524, 5, 50, 0, 0, 522, 524, 5, 81, 0, 0, 523, 520, 1, 0, 0, 0, 523, 521,
    1, 0, 0, 0, 523, 522, 1, 0, 0, 0, 524, 79, 1, 0, 0, 0, 525, 529, 5, 82, 0, 0, 526, 529,
    5, 80, 0, 0, 527, 529, 5, 99, 0, 0, 528, 525, 1, 0, 0, 0, 528, 526, 1, 0, 0, 0, 528, 527,
    1, 0, 0, 0, 529, 81, 1, 0, 0, 0, 530, 532, 5, 35, 0, 0, 531, 533, 3, 86, 43, 0, 532, 531,
    1, 0, 0, 0, 532, 533, 1, 0, 0, 0, 533, 534, 1, 0, 0, 0, 534, 535, 5, 36, 0, 0, 535, 83,
    1, 0, 0, 0, 536, 540, 5, 33, 0, 0, 537, 539, 3, 2, 1, 0, 538, 537, 1, 0, 0, 0, 539, 542,
    1, 0, 0, 0, 540, 538, 1, 0, 0, 0, 540, 541, 1, 0, 0, 0, 541, 543, 1, 0, 0, 0, 542, 540,
    1, 0, 0, 0, 543, 546, 5, 34, 0, 0, 544, 546, 3, 2, 1, 0, 545, 536, 1, 0, 0, 0, 545, 544,
    1, 0, 0, 0, 546, 85, 1, 0, 0, 0, 547, 552, 3, 30, 15, 0, 548, 549, 5, 41, 0, 0, 549, 551,
    3, 30, 15, 0, 550, 548, 1, 0, 0, 0, 551, 554, 1, 0, 0, 0, 552, 550, 1, 0, 0, 0, 552, 553,
    1, 0, 0, 0, 553, 87, 1, 0, 0, 0, 554, 552, 1, 0, 0, 0, 555, 556, 7, 11, 0, 0, 556, 89, 1,
    0, 0, 0, 557, 558, 5, 17, 0, 0, 558, 559, 5, 82, 0, 0, 559, 560, 5, 18, 0, 0, 560, 91,
    1, 0, 0, 0, 561, 562, 3, 80, 40, 0, 562, 563, 5, 28, 0, 0, 563, 564, 3, 30, 15, 0, 564,
    93, 1, 0, 0, 0, 63, 97, 117, 124, 134, 137, 140, 148, 156, 161, 168, 171, 178, 180,
    190, 193, 205, 210, 214, 218, 226, 236, 243, 261, 268, 273, 281, 284, 294, 305,
    317, 327, 338, 344, 352, 355, 364, 372, 380, 388, 396, 404, 412, 420, 428, 436,
    441, 446, 449, 464, 479, 487, 492, 497, 502, 507, 511, 518, 523, 528, 532, 540,
    545, 552
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
class EmptyLineStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
class PreproStatementContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    preprocessor() {
        return this.getRuleContext(0, PreprocessorContext);
    }
    enterRule(listener) {
        if (listener.enterPreproStatement) {
            listener.enterPreproStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreproStatement) {
            listener.exitPreproStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreproStatement) {
            return visitor.visitPreproStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreproStatementContext = PreproStatementContext;
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
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
class PrecharContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_prechar;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PrecharContext = PrecharContext;
class PreChrContext extends PrecharContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    CHAR() {
        return this.getToken(testParser.CHAR, 0);
    }
    ID() {
        return this.getToken(testParser.ID, 0);
    }
    enterRule(listener) {
        if (listener.enterPreChr) {
            listener.enterPreChr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreChr) {
            listener.exitPreChr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreChr) {
            return visitor.visitPreChr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreChrContext = PreChrContext;
class PreChrPlusContext extends PrecharContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.ID);
        }
        else {
            return this.getToken(testParser.ID, i);
        }
    }
    CHARPLUS() {
        return this.getToken(testParser.CHARPLUS, 0);
    }
    enterRule(listener) {
        if (listener.enterPreChrPlus) {
            listener.enterPreChrPlus(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreChrPlus) {
            listener.exitPreChrPlus(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreChrPlus) {
            return visitor.visitPreChrPlus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreChrPlusContext = PreChrPlusContext;
class PreprocessorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_preprocessor;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PreprocessorContext = PreprocessorContext;
class PDefContext extends PreprocessorContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._params = [];
        super.copyFrom(ctx);
    }
    PDEFINE() {
        return this.getToken(testParser.PDEFINE, 0);
    }
    ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.ID);
        }
        else {
            return this.getToken(testParser.ID, i);
        }
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
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
        if (listener.enterPDef) {
            listener.enterPDef(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPDef) {
            listener.exitPDef(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPDef) {
            return visitor.visitPDef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PDefContext = PDefContext;
class PIncContext extends PreprocessorContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    PINCLUDE() {
        return this.getToken(testParser.PINCLUDE, 0);
    }
    systemPath() {
        return this.getRuleContext(0, SystemPathContext);
    }
    STRING() {
        return this.getToken(testParser.STRING, 0);
    }
    enterRule(listener) {
        if (listener.enterPInc) {
            listener.enterPInc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPInc) {
            listener.exitPInc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPInc) {
            return visitor.visitPInc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PIncContext = PIncContext;
class PIfContext extends PreprocessorContext {
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
    PENDIF() {
        return this.getToken(testParser.PENDIF, 0);
    }
    PIF() {
        return this.getToken(testParser.PIF, 0);
    }
    PIFDEF() {
        return this.getToken(testParser.PIFDEF, 0);
    }
    PIFNDEF() {
        return this.getToken(testParser.PIFNDEF, 0);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        return this.getRuleContext(i, StatementContext);
    }
    PELIF(i) {
        if (i === undefined) {
            return this.getTokens(testParser.PELIF);
        }
        else {
            return this.getToken(testParser.PELIF, i);
        }
    }
    PELSE() {
        return this.getToken(testParser.PELSE, 0);
    }
    enterRule(listener) {
        if (listener.enterPIf) {
            listener.enterPIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPIf) {
            listener.exitPIf(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPIf) {
            return visitor.visitPIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PIfContext = PIfContext;
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
        this._params = [];
        super.copyFrom(ctx);
    }
    DEF() {
        return this.getToken(testParser.DEF, 0);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.ID);
        }
        else {
            return this.getToken(testParser.ID, i);
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
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
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
    exprlist(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprlistContext);
        }
        return this.getRuleContext(i, ExprlistContext);
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
    exprlist() {
        return this.getRuleContext(0, ExprlistContext);
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
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    exprlist() {
        return this.getRuleContext(0, ExprlistContext);
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
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
class StructContext extends FunctionStructContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._members = [];
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
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
    }
    indeterminate(i) {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }
        return this.getRuleContext(i, IndeterminateContext);
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
        if (listener.enterStruct) {
            listener.enterStruct(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStruct) {
            listener.exitStruct(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStruct) {
            return visitor.visitStruct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructContext = StructContext;
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
        this._options = [];
        super.copyFrom(ctx);
    }
    LPAREN() {
        return this.getToken(testParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(testParser.RPAREN, 0);
    }
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
    }
    MID() {
        return this.getToken(testParser.MID, 0);
    }
    COLON2() {
        return this.getToken(testParser.COLON2, 0);
    }
    exprlist() {
        return this.getRuleContext(0, ExprlistContext);
    }
    optionPair(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionPairContext);
        }
        return this.getRuleContext(i, OptionPairContext);
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
class ModuleEndContext extends FunctionModuleContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ENDMODULE() {
        return this.getToken(testParser.ENDMODULE, 0);
    }
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
    indeterminate(i) {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }
        return this.getRuleContext(i, IndeterminateContext);
    }
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
    LOCALF() {
        return this.getToken(testParser.LOCALF, 0);
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
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
    }
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
    ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.ID);
        }
        else {
            return this.getToken(testParser.ID, i);
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
    ID() {
        return this.getToken(testParser.ID, 0);
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
    indeterminate(i) {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }
        return this.getRuleContext(i, IndeterminateContext);
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
        this._indices = [];
        super.copyFrom(ctx);
    }
    ID() {
        return this.getToken(testParser.ID, 0);
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
    RBRACKET(i) {
        if (i === undefined) {
            return this.getTokens(testParser.RBRACKET);
        }
        else {
            return this.getToken(testParser.RBRACKET, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
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
    quoteExpr() {
        return this.getRuleContext(0, QuoteExprContext);
    }
    QUESTION() {
        return this.getToken(testParser.QUESTION, 0);
    }
    COLON() {
        return this.getToken(testParser.COLON, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
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
class QuoteExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_quoteExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.QuoteExprContext = QuoteExprContext;
class QuoteContext extends QuoteExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    qeNotExpr() {
        return this.getRuleContext(0, QeNotExprContext);
    }
    BACK() {
        return this.getToken(testParser.BACK, 0);
    }
    enterRule(listener) {
        if (listener.enterQuote) {
            listener.enterQuote(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuote) {
            listener.exitQuote(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuote) {
            return visitor.visitQuote(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuoteContext = QuoteContext;
class QeNotExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_qeNotExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.QeNotExprContext = QeNotExprContext;
class QEnotContext extends QeNotExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    qeOrExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(QeOrExprContext);
        }
        return this.getRuleContext(i, QeOrExprContext);
    }
    QE_8(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_8);
        }
        else {
            return this.getToken(testParser.QE_8, i);
        }
    }
    enterRule(listener) {
        if (listener.enterQEnot) {
            listener.enterQEnot(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQEnot) {
            listener.exitQEnot(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQEnot) {
            return visitor.visitQEnot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QEnotContext = QEnotContext;
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
    QE_11(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_11);
        }
        else {
            return this.getToken(testParser.QE_11, i);
        }
    }
    QE_12(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_12);
        }
        else {
            return this.getToken(testParser.QE_12, i);
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
    QE_9(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_9);
        }
        else {
            return this.getToken(testParser.QE_9, i);
        }
    }
    QE_10(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_10);
        }
        else {
            return this.getToken(testParser.QE_10, i);
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
    QE_6(i) {
        if (i === undefined) {
            return this.getTokens(testParser.QE_6);
        }
        else {
            return this.getToken(testParser.QE_6, i);
        }
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
class PowExContext extends PowerExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    factExpr() {
        return this.getRuleContext(0, FactExprContext);
    }
    POWER() {
        return this.getToken(testParser.POWER, 0);
    }
    unaryExpr() {
        return this.getRuleContext(0, UnaryExprContext);
    }
    enterRule(listener) {
        if (listener.enterPowEx) {
            listener.enterPowEx(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPowEx) {
            listener.exitPowEx(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPowEx) {
            return visitor.visitPowEx(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowExContext = PowExContext;
class FactExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_factExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FactExprContext = FactExprContext;
class FactrialExprContext extends FactExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    postfixExpr() {
        return this.getRuleContext(0, PostfixExprContext);
    }
    prefixExpr() {
        return this.getRuleContext(0, PrefixExprContext);
    }
    indexAccessExpr() {
        return this.getRuleContext(0, IndexAccessExprContext);
    }
    NOT() {
        return this.getToken(testParser.NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterFactrialExpr) {
            listener.enterFactrialExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFactrialExpr) {
            listener.exitFactrialExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFactrialExpr) {
            return visitor.visitFactrialExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FactrialExprContext = FactrialExprContext;
class PrefixExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_prefixExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PrefixExprContext = PrefixExprContext;
class PreFixContext extends PrefixExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    indexAccessExpr() {
        return this.getRuleContext(0, IndexAccessExprContext);
    }
    INC() {
        return this.getToken(testParser.INC, 0);
    }
    DEC() {
        return this.getToken(testParser.DEC, 0);
    }
    enterRule(listener) {
        if (listener.enterPreFix) {
            listener.enterPreFix(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreFix) {
            listener.exitPreFix(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreFix) {
            return visitor.visitPreFix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreFixContext = PreFixContext;
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
    indexAccessExpr() {
        return this.getRuleContext(0, IndexAccessExprContext);
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
    STRING() {
        return this.getToken(testParser.STRING, 0);
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
class IndExprContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
    }
    enterRule(listener) {
        if (listener.enterIndExpr) {
            listener.enterIndExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIndExpr) {
            listener.exitIndExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIndExpr) {
            return visitor.visitIndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndExprContext = IndExprContext;
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
class PreChrExprContext extends PrimaryExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    prechar() {
        return this.getRuleContext(0, PrecharContext);
    }
    enterRule(listener) {
        if (listener.enterPreChrExpr) {
            listener.enterPreChrExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreChrExpr) {
            listener.exitPreChrExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPreChrExpr) {
            return visitor.visitPreChrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreChrExprContext = PreChrExprContext;
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
class BitNumContext extends NumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BIT() {
        return this.getToken(testParser.BIT, 0);
    }
    enterRule(listener) {
        if (listener.enterBitNum) {
            listener.enterBitNum(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitNum) {
            listener.exitBitNum(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBitNum) {
            return visitor.visitBitNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BitNumContext = BitNumContext;
class ImaNumContext extends NumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IMAGINARY() {
        return this.getToken(testParser.IMAGINARY, 0);
    }
    enterRule(listener) {
        if (listener.enterImaNum) {
            listener.enterImaNum(this);
        }
    }
    exitRule(listener) {
        if (listener.exitImaNum) {
            listener.exitImaNum(this);
        }
    }
    accept(visitor) {
        if (visitor.visitImaNum) {
            return visitor.visitImaNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImaNumContext = ImaNumContext;
class HexNumContext extends NumContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HEX() {
        return this.getToken(testParser.HEX, 0);
    }
    enterRule(listener) {
        if (listener.enterHexNum) {
            listener.enterHexNum(this);
        }
    }
    exitRule(listener) {
        if (listener.exitHexNum) {
            listener.exitHexNum(this);
        }
    }
    accept(visitor) {
        if (visitor.visitHexNum) {
            return visitor.visitHexNum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.HexNumContext = HexNumContext;
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
class BefContext extends IdContext {
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
class BefNContext extends IdContext {
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
class IndeterminateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return testParser.RULE_indeterminate;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.IndeterminateContext = IndeterminateContext;
class FuncContext extends IndeterminateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ID() {
        return this.getToken(testParser.ID, 0);
    }
    enterRule(listener) {
        if (listener.enterFunc) {
            listener.enterFunc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunc) {
            listener.exitFunc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FuncContext = FuncContext;
class ChFuncContext extends IndeterminateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NOSTRING() {
        return this.getToken(testParser.NOSTRING, 0);
    }
    enterRule(listener) {
        if (listener.enterChFunc) {
            listener.enterChFunc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitChFunc) {
            listener.exitChFunc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitChFunc) {
            return visitor.visitChFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ChFuncContext = ChFuncContext;
class AtFuncContext extends IndeterminateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ATFUNC() {
        return this.getToken(testParser.ATFUNC, 0);
    }
    enterRule(listener) {
        if (listener.enterAtFunc) {
            listener.enterAtFunc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAtFunc) {
            listener.exitAtFunc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAtFunc) {
            return visitor.visitAtFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AtFuncContext = AtFuncContext;
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
    exprlist() {
        return this.getRuleContext(0, ExprlistContext);
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
class ExprlistContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
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
    get ruleIndex() {
        return testParser.RULE_exprlist;
    }
    enterRule(listener) {
        if (listener.enterExprlist) {
            listener.enterExprlist(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExprlist) {
            listener.exitExprlist(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExprlist) {
            return visitor.visitExprlist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprlistContext = ExprlistContext;
class TerminatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMI() {
        return this.getToken(testParser.SEMI, 0);
    }
    DOLLAR() {
        return this.getToken(testParser.DOLLAR, 0);
    }
    get ruleIndex() {
        return testParser.RULE_terminator;
    }
    enterRule(listener) {
        if (listener.enterTerminator) {
            listener.enterTerminator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTerminator) {
            listener.exitTerminator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTerminator) {
            return visitor.visitTerminator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TerminatorContext = TerminatorContext;
class SystemPathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LT() {
        return this.getToken(testParser.LT, 0);
    }
    ID() {
        return this.getToken(testParser.ID, 0);
    }
    GT() {
        return this.getToken(testParser.GT, 0);
    }
    get ruleIndex() {
        return testParser.RULE_systemPath;
    }
    enterRule(listener) {
        if (listener.enterSystemPath) {
            listener.enterSystemPath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSystemPath) {
            listener.exitSystemPath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSystemPath) {
            return visitor.visitSystemPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SystemPathContext = SystemPathContext;
class OptionPairContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASSIGN() {
        return this.getToken(testParser.ASSIGN, 0);
    }
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return testParser.RULE_optionPair;
    }
    enterRule(listener) {
        if (listener.enterOptionPair) {
            listener.enterOptionPair(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOptionPair) {
            listener.exitOptionPair(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOptionPair) {
            return visitor.visitOptionPair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionPairContext = OptionPairContext;
//# sourceMappingURL=testParser.js.map