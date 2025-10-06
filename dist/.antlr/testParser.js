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
exports.MainContext = exports.ExprContext = exports.ModuleStartContext = exports.ModuleAssignContext = exports.ModuleEndContext = exports.ModuleFunctionContext = exports.FunctionModuleContext = exports.FcallContext = exports.FunctionCallContext = exports.StructContext = exports.FunctionStructContext = exports.BreakContext = exports.FunctionBreakContext = exports.ContinueContext = exports.FunctionContinueContext = exports.ReturnContext = exports.FunctionReturnContext = exports.DoContext = exports.FunctionDoContext = exports.WhileContext = exports.FunctionWhileContext = exports.ForContext = exports.FunctionForContext = exports.IfContext = exports.FunctionIfContext = exports.DefContext = exports.FunctionDefinitionContext = exports.PIfContext = exports.PIncContext = exports.PDefContext = exports.PreprocessorContext = exports.PreChrPlusContext = exports.PreChrContext = exports.PrecharContext = exports.ContinueStatementContext = exports.ForStatementContext = exports.ReturnStatementContext = exports.ExprStatementContext = exports.StructStatementContext = exports.DefinitionStatementContext = exports.PreproStatementContext = exports.IfStatementContext = exports.BreakStatementContext = exports.EmptyLineStatementContext = exports.WhileStatementContext = exports.ModuleStatementContext = exports.DoStatementContext = exports.StatementContext = exports.ProgContext = exports.testParser = void 0;
exports.PreChrExprContext = exports.DpLiteralContext = exports.IndExprContext = exports.FCallExprContext = exports.RealContext = exports.StringLiteralContext = exports.IdExprContext = exports.ListLiteralContext = exports.PrimaryExprContext = exports.IndexAccessContext = exports.IndexAccessExprContext = exports.PostFixContext = exports.PostfixExprContext = exports.PreFixContext = exports.PrefixExprContext = exports.FactrialExprContext = exports.FactExprContext = exports.PowExContext = exports.PowerExprContext = exports.NotExprContext = exports.UnaryMinusContext = exports.PowExprContext = exports.UnaryExprContext = exports.MulDivSurContext = exports.MulDivSurExprContext = exports.AddSubContext = exports.AddSubExprContext = exports.CompareContext = exports.CompareExprContext = exports.AndContext = exports.AndExprContext = exports.OrContext = exports.OrExprContext = exports.QECompareContext = exports.QeCompareExprContext = exports.QEandContext = exports.QeAndExprContext = exports.QEorContext = exports.QeOrExprContext = exports.QEnotContext = exports.QeNotExprContext = exports.QuoteContext = exports.QuoteExprContext = exports.TernaryContext = exports.TernaryExprContext = exports.AssignContext = exports.NoAssignmentContext = exports.StructAssignContext = exports.ListAssignContext = exports.AssignmentExprContext = void 0;
exports.QualifiedIdentifierContext = exports.OptionPairContext = exports.SystemPathContext = exports.MemberNameContext = exports.TerminatorContext = exports.ExprlistContext = exports.SentenceContext = exports.Sentence1Context = exports.BlockContext = exports.ListExprContext = exports.ListContext = exports.AtFuncContext = exports.ChFuncContext = exports.FuncContext = exports.IndeterminateContext = exports.BefNContext = exports.BefContext = exports.V2IdContext = exports.VIdContext = exports.IdContext = exports.RatNumContext = exports.HexNumContext = exports.ImaNumContext = exports.BitNumContext = exports.DecNumContext = exports.NumContext = exports.FloatContext = exports.DecimalContext = exports.RatContext = exports.RationalContext = exports.DpContext = exports.DpolyContext = exports.ParenContext = void 0;
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
                this.state = 101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638689789) !== 0) || _la === 99) {
                    {
                        {
                            this.state = 98;
                            this.statement();
                        }
                    }
                    this.state = 103;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 104;
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
            this.state = 121;
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
                case testParser.FUNC_ID:
                case testParser.VAR_ID:
                case testParser.CHAR:
                case testParser.STRING:
                case testParser.NOSTRING:
                    localContext = new ExprStatementContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 106;
                        this.expr();
                        this.state = 107;
                        this.terminator();
                    }
                    break;
                case testParser.SEMI:
                case testParser.DOLLAR:
                    localContext = new EmptyLineStatementContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 109;
                        this.terminator();
                    }
                    break;
                case testParser.DEF:
                    localContext = new DefinitionStatementContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 110;
                        this.functionDefinition();
                    }
                    break;
                case testParser.IF:
                    localContext = new IfStatementContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 111;
                        this.functionIf();
                    }
                    break;
                case testParser.FOR:
                    localContext = new ForStatementContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 112;
                        this.functionFor();
                    }
                    break;
                case testParser.WHILE:
                    localContext = new WhileStatementContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 113;
                        this.functionWhile();
                    }
                    break;
                case testParser.DO:
                    localContext = new DoStatementContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 114;
                        this.functionDo();
                    }
                    break;
                case testParser.RETURN:
                    localContext = new ReturnStatementContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 115;
                        this.functionReturn();
                    }
                    break;
                case testParser.BREAK:
                    localContext = new BreakStatementContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 116;
                        this.functionBreak();
                    }
                    break;
                case testParser.CONTINUE:
                    localContext = new ContinueStatementContext(localContext);
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 117;
                        this.functionContinue();
                    }
                    break;
                case testParser.STRUCT:
                    localContext = new StructStatementContext(localContext);
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 118;
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
                        this.state = 119;
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
                        this.state = 120;
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
            this.state = 129;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.CHAR:
                    localContext = new PreChrContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 123;
                        this.match(testParser.CHAR);
                        this.state = 124;
                        this.memberName();
                    }
                    break;
                case testParser.ATFUNC:
                case testParser.FUNC_ID:
                case testParser.VAR_ID:
                case testParser.NOSTRING:
                    localContext = new PreChrPlusContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 125;
                        this.memberName();
                        this.state = 126;
                        this.match(testParser.CHARPLUS);
                        this.state = 127;
                        this.memberName();
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
            this.state = 186;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.PDEFINE:
                    localContext = new PDefContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 131;
                        this.match(testParser.PDEFINE);
                        this.state = 132;
                        localContext._name = this.memberName();
                        this.state = 145;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                            case 1:
                                {
                                    this.state = 133;
                                    this.match(testParser.LPAREN);
                                    this.state = 142;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 524301) !== 0)) {
                                        {
                                            this.state = 134;
                                            localContext._memberName = this.memberName();
                                            localContext._params.push(localContext._memberName);
                                            this.state = 139;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            while (_la === 41) {
                                                {
                                                    {
                                                        this.state = 135;
                                                        this.match(testParser.COMMA);
                                                        this.state = 136;
                                                        localContext._memberName = this.memberName();
                                                        localContext._params.push(localContext._memberName);
                                                    }
                                                }
                                                this.state = 141;
                                                this.errorHandler.sync(this);
                                                _la = this.tokenStream.LA(1);
                                            }
                                        }
                                    }
                                    this.state = 144;
                                    this.match(testParser.RPAREN);
                                }
                                break;
                        }
                        this.state = 147;
                        localContext._body = this.expr();
                    }
                    break;
                case testParser.PIFDEF:
                case testParser.PIFNDEF:
                case testParser.PIF:
                    localContext = new PIfContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 149;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 7) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 150;
                        this.expr();
                        this.state = 154;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638689789) !== 0) || _la === 99) {
                            {
                                {
                                    this.state = 151;
                                    this.statement();
                                }
                            }
                            this.state = 156;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 167;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 92) {
                            {
                                {
                                    this.state = 157;
                                    this.match(testParser.PELIF);
                                    this.state = 158;
                                    this.expr();
                                    this.state = 162;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638689789) !== 0) || _la === 99) {
                                        {
                                            {
                                                this.state = 159;
                                                this.statement();
                                            }
                                        }
                                        this.state = 164;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 169;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 177;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 91) {
                            {
                                this.state = 170;
                                this.match(testParser.PELSE);
                                this.state = 174;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638689789) !== 0) || _la === 99) {
                                    {
                                        {
                                            this.state = 171;
                                            this.statement();
                                        }
                                    }
                                    this.state = 176;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                            }
                        }
                        this.state = 179;
                        this.match(testParser.PENDIF);
                    }
                    break;
                case testParser.PINCLUDE:
                    localContext = new PIncContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 181;
                        this.match(testParser.PINCLUDE);
                        this.state = 184;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case testParser.LT:
                                {
                                    this.state = 182;
                                    localContext._path_sys = this.systemPath();
                                }
                                break;
                            case testParser.STRING:
                                {
                                    this.state = 183;
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
                this.state = 188;
                this.match(testParser.DEF);
                this.state = 189;
                this.indeterminate();
                this.state = 190;
                this.match(testParser.LPAREN);
                this.state = 199;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                        this.state = 191;
                        this.match(testParser.VAR_ID);
                        this.state = 196;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 192;
                                    this.match(testParser.COMMA);
                                    this.state = 193;
                                    this.match(testParser.VAR_ID);
                                }
                            }
                            this.state = 198;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 201;
                this.match(testParser.RPAREN);
                this.state = 202;
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
        this.enterRule(localContext, 10, testParser.RULE_functionIf);
        try {
            localContext = new IfContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 204;
                this.match(testParser.IF);
                this.state = 205;
                this.match(testParser.LPAREN);
                this.state = 206;
                localContext._condition = this.expr();
                this.state = 207;
                this.match(testParser.RPAREN);
                this.state = 208;
                localContext._thenBlock = this.block();
                this.state = 211;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context)) {
                    case 1:
                        {
                            this.state = 209;
                            this.match(testParser.ELSE);
                            this.state = 210;
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
                this.state = 213;
                this.match(testParser.FOR);
                this.state = 214;
                this.match(testParser.LPAREN);
                this.state = 216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 215;
                        localContext._init = this.exprlist();
                    }
                }
                this.state = 218;
                this.match(testParser.SEMI);
                this.state = 220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 219;
                        localContext._cond = this.exprlist();
                    }
                }
                this.state = 222;
                this.match(testParser.SEMI);
                this.state = 224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 223;
                        localContext._update = this.exprlist();
                    }
                }
                this.state = 226;
                this.match(testParser.RPAREN);
                this.state = 227;
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
                this.state = 229;
                this.match(testParser.WHILE);
                this.state = 230;
                this.match(testParser.LPAREN);
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 231;
                        this.exprlist();
                    }
                }
                this.state = 234;
                this.match(testParser.RPAREN);
                this.state = 235;
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
                this.state = 237;
                this.match(testParser.DO);
                this.state = 238;
                this.block();
                this.state = 239;
                this.match(testParser.WHILE);
                this.state = 240;
                this.match(testParser.LPAREN);
                this.state = 242;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 241;
                        this.exprlist();
                    }
                }
                this.state = 244;
                this.match(testParser.RPAREN);
                this.state = 245;
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
                this.state = 247;
                this.match(testParser.RETURN);
                this.state = 249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 248;
                        this.expr();
                    }
                }
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
    functionContinue() {
        let localContext = new FunctionContinueContext(this.context, this.state);
        this.enterRule(localContext, 20, testParser.RULE_functionContinue);
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 253;
                this.match(testParser.CONTINUE);
                this.state = 254;
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
                this.state = 256;
                this.match(testParser.BREAK);
                this.state = 257;
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
                this.state = 259;
                this.match(testParser.STRUCT);
                this.state = 260;
                localContext._name = this.memberName();
                this.state = 261;
                this.match(testParser.LBRANCE);
                this.state = 262;
                localContext._memberName = this.memberName();
                localContext._members.push(localContext._memberName);
                this.state = 267;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 263;
                            this.match(testParser.COMMA);
                            this.state = 264;
                            localContext._memberName = this.memberName();
                            localContext._members.push(localContext._memberName);
                        }
                    }
                    this.state = 269;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 270;
                this.match(testParser.RBRANCE);
                this.state = 271;
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
                this.state = 274;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 273;
                        localContext._is_global = this.match(testParser.COLON2);
                    }
                }
                this.state = 276;
                localContext._name = this.qualifiedIdentifier();
                this.state = 277;
                this.match(testParser.LPAREN);
                this.state = 279;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 278;
                        localContext._args = this.exprlist();
                    }
                }
                this.state = 290;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                        this.state = 281;
                        this.match(testParser.MID);
                        this.state = 282;
                        localContext._optionPair = this.optionPair();
                        localContext._options.push(localContext._optionPair);
                        this.state = 287;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 283;
                                    this.match(testParser.COMMA);
                                    this.state = 284;
                                    localContext._optionPair = this.optionPair();
                                    localContext._options.push(localContext._optionPair);
                                }
                            }
                            this.state = 289;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 292;
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
            this.state = 319;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.EXTERN:
                case testParser.STATIC:
                case testParser.GLOBAL:
                case testParser.LOCAL:
                    localContext = new ModuleAssignContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 294;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 15) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 295;
                        this.match(testParser.VAR_ID);
                        this.state = 300;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 296;
                                    this.match(testParser.COMMA);
                                    this.state = 297;
                                    this.match(testParser.VAR_ID);
                                }
                            }
                            this.state = 302;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 303;
                        this.terminator();
                    }
                    break;
                case testParser.LOCALF:
                    localContext = new ModuleFunctionContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 304;
                        this.match(testParser.LOCALF);
                        this.state = 305;
                        this.match(testParser.FUNC_ID);
                        this.state = 310;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 306;
                                    this.match(testParser.COMMA);
                                    this.state = 307;
                                    this.match(testParser.FUNC_ID);
                                }
                            }
                            this.state = 312;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 313;
                        this.terminator();
                    }
                    break;
                case testParser.MODULE:
                    localContext = new ModuleStartContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 314;
                        this.match(testParser.MODULE);
                        this.state = 315;
                        this.match(testParser.FUNC_ID);
                        this.state = 316;
                        this.terminator();
                    }
                    break;
                case testParser.ENDMODULE:
                    localContext = new ModuleEndContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 317;
                        this.match(testParser.ENDMODULE);
                        this.state = 318;
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
                this.state = 321;
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
            this.state = 358;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context)) {
                case 1:
                    localContext = new NoAssignmentContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 323;
                        this.ternaryExpr();
                    }
                    break;
                case 2:
                    localContext = new AssignContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 324;
                        localContext._left = this.match(testParser.VAR_ID);
                        this.state = 331;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 35) {
                            {
                                {
                                    this.state = 325;
                                    this.match(testParser.LBRACKET);
                                    this.state = 326;
                                    localContext._expr = this.expr();
                                    localContext._indices.push(localContext._expr);
                                    this.state = 327;
                                    this.match(testParser.RBRACKET);
                                }
                            }
                            this.state = 333;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 334;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 335;
                        localContext._right = this.assignmentExpr();
                    }
                    break;
                case 3:
                    localContext = new StructAssignContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 336;
                        this.match(testParser.VAR_ID);
                        this.state = 339;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 337;
                                    this.match(testParser.ARROW);
                                    this.state = 338;
                                    this.memberName();
                                }
                            }
                            this.state = 341;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 12);
                        this.state = 343;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 344;
                        this.assignmentExpr();
                    }
                    break;
                case 4:
                    localContext = new ListAssignContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 346;
                        this.match(testParser.LBRACKET);
                        this.state = 347;
                        this.match(testParser.VAR_ID);
                        this.state = 352;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                                {
                                    this.state = 348;
                                    this.match(testParser.COMMA);
                                    this.state = 349;
                                    this.match(testParser.VAR_ID);
                                }
                            }
                            this.state = 354;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 355;
                        this.match(testParser.RBRACKET);
                        this.state = 356;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 357;
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
                this.state = 360;
                localContext._condition = this.quoteExpr();
                this.state = 366;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 37) {
                    {
                        this.state = 361;
                        this.match(testParser.QUESTION);
                        this.state = 362;
                        localContext._consequence = this.expr();
                        this.state = 363;
                        this.match(testParser.COLON);
                        this.state = 364;
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
                this.state = 369;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29) {
                    {
                        this.state = 368;
                        this.match(testParser.BACK);
                    }
                }
                this.state = 371;
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
                this.state = 373;
                this.qeOrExpr();
                this.state = 378;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 58) {
                    {
                        {
                            this.state = 374;
                            this.match(testParser.QE_8);
                            this.state = 375;
                            this.qeOrExpr();
                        }
                    }
                    this.state = 380;
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
                this.state = 381;
                this.qeAndExpr();
                this.state = 386;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 61 || _la === 62) {
                    {
                        {
                            this.state = 382;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 61 || _la === 62)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 383;
                            this.qeAndExpr();
                        }
                    }
                    this.state = 388;
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
                this.state = 389;
                this.qeCompareExpr();
                this.state = 394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 59 || _la === 60) {
                    {
                        {
                            this.state = 390;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 59 || _la === 60)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 391;
                            this.qeCompareExpr();
                        }
                    }
                    this.state = 396;
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
                this.state = 397;
                this.orExpr();
                this.state = 402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 127) !== 0)) {
                    {
                        {
                            this.state = 398;
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 127) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 399;
                            this.orExpr();
                        }
                    }
                    this.state = 404;
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
                this.state = 405;
                this.andExpr();
                this.state = 410;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 20) {
                    {
                        {
                            this.state = 406;
                            this.match(testParser.OR);
                            this.state = 407;
                            this.andExpr();
                        }
                    }
                    this.state = 412;
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
                this.state = 413;
                this.compareExpr();
                this.state = 418;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 19) {
                    {
                        {
                            this.state = 414;
                            this.match(testParser.AND);
                            this.state = 415;
                            this.compareExpr();
                        }
                    }
                    this.state = 420;
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
                this.state = 421;
                this.addSubExpr();
                this.state = 426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                    {
                        {
                            this.state = 422;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 423;
                            this.addSubExpr();
                        }
                    }
                    this.state = 428;
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
                this.state = 429;
                this.mulDivSurExpr();
                this.state = 434;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 430;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 22 || _la === 23)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 431;
                                this.mulDivSurExpr();
                            }
                        }
                    }
                    this.state = 436;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
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
                this.state = 437;
                this.unaryExpr();
                this.state = 442;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                    {
                        {
                            this.state = 438;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 439;
                            this.unaryExpr();
                        }
                    }
                    this.state = 444;
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
            this.state = 450;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context)) {
                case 1:
                    localContext = new UnaryMinusContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 445;
                        this.match(testParser.MINUS);
                        this.state = 446;
                        this.unaryExpr();
                    }
                    break;
                case 2:
                    localContext = new NotExprContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 447;
                        this.match(testParser.NOT);
                        this.state = 448;
                        this.unaryExpr();
                    }
                    break;
                case 3:
                    localContext = new PowExprContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 449;
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
                this.state = 452;
                localContext._base = this.factExpr();
                this.state = 455;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                        this.state = 453;
                        this.match(testParser.POWER);
                        this.state = 454;
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
                this.state = 460;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context)) {
                    case 1:
                        {
                            this.state = 457;
                            this.postfixExpr();
                        }
                        break;
                    case 2:
                        {
                            this.state = 458;
                            this.prefixExpr();
                        }
                        break;
                    case 3:
                        {
                            this.state = 459;
                            this.indexAccessExpr();
                        }
                        break;
                }
                this.state = 463;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
                    case 1:
                        {
                            this.state = 462;
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
                this.state = 465;
                _la = this.tokenStream.LA(1);
                if (!(_la === 4 || _la === 5)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 466;
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
                this.state = 468;
                this.indexAccessExpr();
                this.state = 469;
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
                this.state = 471;
                this.primaryExpr();
                this.state = 478;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 472;
                                this.match(testParser.LBRACKET);
                                this.state = 473;
                                this.expr();
                                this.state = 474;
                                this.match(testParser.RBRACKET);
                            }
                        }
                    }
                    this.state = 480;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
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
            this.state = 493;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context)) {
                case 1:
                    localContext = new IndExprContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 481;
                        this.indeterminate();
                    }
                    break;
                case 2:
                    localContext = new RealContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 482;
                        this.num();
                    }
                    break;
                case 3:
                    localContext = new IdExprContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 483;
                        this.id();
                    }
                    break;
                case 4:
                    localContext = new FCallExprContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 484;
                        this.functionCall();
                    }
                    break;
                case 5:
                    localContext = new ParenContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 485;
                        this.match(testParser.LPAREN);
                        this.state = 486;
                        this.expr();
                        this.state = 487;
                        this.match(testParser.RPAREN);
                    }
                    break;
                case 6:
                    localContext = new StringLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 489;
                        this.match(testParser.STRING);
                    }
                    break;
                case 7:
                    localContext = new ListLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 490;
                        this.list();
                    }
                    break;
                case 8:
                    localContext = new DpLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 491;
                        this.dpoly();
                    }
                    break;
                case 9:
                    localContext = new PreChrExprContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 492;
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
                this.state = 495;
                this.match(testParser.LTLT);
                this.state = 496;
                this.match(testParser.INT);
                this.state = 501;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 497;
                            this.match(testParser.COMMA);
                            this.state = 498;
                            this.match(testParser.INT);
                        }
                    }
                    this.state = 503;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                        this.state = 504;
                        this.match(testParser.COLON);
                        this.state = 505;
                        this.match(testParser.INT);
                    }
                }
                this.state = 508;
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
                this.state = 511;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 510;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 513;
                this.match(testParser.INT);
                this.state = 514;
                this.match(testParser.DIV);
                this.state = 516;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 515;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 518;
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
                this.state = 521;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 520;
                        this.match(testParser.MINUS);
                    }
                }
                this.state = 523;
                _la = this.tokenStream.LA(1);
                if (!(_la === 44 || _la === 46)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 525;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                        this.state = 524;
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
            this.state = 532;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context)) {
                case 1:
                    localContext = new HexNumContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 527;
                        this.match(testParser.HEX);
                    }
                    break;
                case 2:
                    localContext = new BitNumContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 528;
                        this.match(testParser.BIT);
                    }
                    break;
                case 3:
                    localContext = new RatNumContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 529;
                        this.rational();
                    }
                    break;
                case 4:
                    localContext = new DecNumContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 530;
                        this.decimal();
                    }
                    break;
                case 5:
                    localContext = new ImaNumContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 531;
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
            this.state = 538;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.VAR_ID:
                    localContext = new VIdContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 534;
                        this.match(testParser.VAR_ID);
                    }
                    break;
                case testParser.BEFORE:
                    localContext = new BefContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 535;
                        this.match(testParser.BEFORE);
                    }
                    break;
                case testParser.BEFORE_N:
                    localContext = new BefNContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 536;
                        this.match(testParser.BEFORE_N);
                    }
                    break;
                case testParser.VAR_2:
                    localContext = new V2IdContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 537;
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
            this.state = 543;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.FUNC_ID:
                    localContext = new FuncContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 540;
                        this.qualifiedIdentifier();
                    }
                    break;
                case testParser.ATFUNC:
                    localContext = new AtFuncContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 541;
                        this.match(testParser.ATFUNC);
                    }
                    break;
                case testParser.NOSTRING:
                    localContext = new ChFuncContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 542;
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
                this.state = 545;
                this.match(testParser.LBRACKET);
                this.state = 547;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 60289) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 917519) !== 0)) {
                    {
                        this.state = 546;
                        this.exprlist();
                    }
                }
                this.state = 549;
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
            this.state = 560;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.LBRANCE:
                    localContext = new SentenceContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 551;
                        this.match(testParser.LBRANCE);
                        this.state = 555;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026592177) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 3638689789) !== 0) || _la === 99) {
                            {
                                {
                                    this.state = 552;
                                    this.statement();
                                }
                            }
                            this.state = 557;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 558;
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
                case testParser.FUNC_ID:
                case testParser.VAR_ID:
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
                        this.state = 559;
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
                this.state = 562;
                this.expr();
                this.state = 567;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                        {
                            this.state = 563;
                            this.match(testParser.COMMA);
                            this.state = 564;
                            this.expr();
                        }
                    }
                    this.state = 569;
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
                this.state = 570;
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
    memberName() {
        let localContext = new MemberNameContext(this.context, this.state);
        this.enterRule(localContext, 90, testParser.RULE_memberName);
        try {
            this.state = 574;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case testParser.ATFUNC:
                case testParser.FUNC_ID:
                case testParser.NOSTRING:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 572;
                        this.indeterminate();
                    }
                    break;
                case testParser.VAR_ID:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 573;
                        this.match(testParser.VAR_ID);
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
    systemPath() {
        let localContext = new SystemPathContext(this.context, this.state);
        this.enterRule(localContext, 92, testParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 576;
                this.match(testParser.LT);
                this.state = 577;
                this.qualifiedIdentifier();
                this.state = 578;
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
        this.enterRule(localContext, 94, testParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 580;
                localContext._key = this.qualifiedIdentifier();
                this.state = 581;
                this.match(testParser.ASSIGN);
                this.state = 582;
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
    qualifiedIdentifier() {
        let localContext = new QualifiedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 96, testParser.RULE_qualifiedIdentifier);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 584;
                this.match(testParser.FUNC_ID);
                this.state = 589;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 47) {
                    {
                        {
                            this.state = 585;
                            this.match(testParser.POINT);
                            this.state = 586;
                            this.match(testParser.FUNC_ID);
                        }
                    }
                    this.state = 591;
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
testParser.FUNC_ID = 82;
testParser.VAR_ID = 83;
testParser.NEWLINE = 84;
testParser.WS = 85;
testParser.COMMENT = 86;
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
testParser.RULE_memberName = 45;
testParser.RULE_systemPath = 46;
testParser.RULE_optionPair = 47;
testParser.RULE_qualifiedIdentifier = 48;
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
    "'@'", null, null, "'\\n'", null, null, null, "'#ifdef'", "'#ifndef'",
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
    "LOCAL", "LOCALF", "ATFUNC", "VAR_2", "FUNC_ID", "VAR_ID", "NEWLINE",
    "WS", "COMMENT", "PCOMMENT", "PIFDEF", "PIFNDEF", "PIF", "PELSE",
    "PELIF", "PENDIF", "PINCLUDE", "PDEFINE", "CHARPLUS", "CHAR", "STRING",
    "NOSTRING"
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
    "list", "block", "exprlist", "terminator", "memberName", "systemPath",
    "optionPair", "qualifiedIdentifier",
];
testParser._serializedATN = [
    4, 1, 99, 593, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33,
    7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39,
    2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46,
    7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 1, 0, 5, 0, 100, 8, 0, 10, 0, 12, 0, 103, 9, 0, 1, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    1, 122, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 130, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 5, 3, 138, 8, 3, 10, 3, 12, 3, 141, 9, 3, 3, 3, 143, 8, 3, 1, 3, 3, 3, 146, 8, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 153, 8, 3, 10, 3, 12, 3, 156, 9, 3, 1, 3, 1, 3, 1, 3, 5,
    3, 161, 8, 3, 10, 3, 12, 3, 164, 9, 3, 5, 3, 166, 8, 3, 10, 3, 12, 3, 169, 9, 3, 1, 3, 1,
    3, 5, 3, 173, 8, 3, 10, 3, 12, 3, 176, 9, 3, 3, 3, 178, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3,
    3, 3, 185, 8, 3, 3, 3, 187, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 195, 8, 4, 10, 4,
    12, 4, 198, 9, 4, 3, 4, 200, 8, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5,
    3, 5, 212, 8, 5, 1, 6, 1, 6, 1, 6, 3, 6, 217, 8, 6, 1, 6, 1, 6, 3, 6, 221, 8, 6, 1, 6, 1, 6,
    3, 6, 225, 8, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 3, 7, 233, 8, 7, 1, 7, 1, 7, 1, 7, 1, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 243, 8, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 3, 9, 250, 8, 9, 1, 9,
    1, 9, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12,
    5, 12, 266, 8, 12, 10, 12, 12, 12, 269, 9, 12, 1, 12, 1, 12, 1, 12, 1, 13, 3, 13, 275,
    8, 13, 1, 13, 1, 13, 1, 13, 3, 13, 280, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 5, 13, 286, 8,
    13, 10, 13, 12, 13, 289, 9, 13, 3, 13, 291, 8, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1,
    14, 5, 14, 299, 8, 14, 10, 14, 12, 14, 302, 9, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5,
    14, 309, 8, 14, 10, 14, 12, 14, 312, 9, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3,
    14, 320, 8, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 330, 8, 16,
    10, 16, 12, 16, 333, 9, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 4, 16, 340, 8, 16, 11, 16,
    12, 16, 341, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 351, 8, 16, 10, 16,
    12, 16, 354, 9, 16, 1, 16, 1, 16, 1, 16, 3, 16, 359, 8, 16, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 3, 17, 367, 8, 17, 1, 18, 3, 18, 370, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1,
    19, 5, 19, 377, 8, 19, 10, 19, 12, 19, 380, 9, 19, 1, 20, 1, 20, 1, 20, 5, 20, 385, 8,
    20, 10, 20, 12, 20, 388, 9, 20, 1, 21, 1, 21, 1, 21, 5, 21, 393, 8, 21, 10, 21, 12, 21,
    396, 9, 21, 1, 22, 1, 22, 1, 22, 5, 22, 401, 8, 22, 10, 22, 12, 22, 404, 9, 22, 1, 23,
    1, 23, 1, 23, 5, 23, 409, 8, 23, 10, 23, 12, 23, 412, 9, 23, 1, 24, 1, 24, 1, 24, 5, 24,
    417, 8, 24, 10, 24, 12, 24, 420, 9, 24, 1, 25, 1, 25, 1, 25, 5, 25, 425, 8, 25, 10, 25,
    12, 25, 428, 9, 25, 1, 26, 1, 26, 1, 26, 5, 26, 433, 8, 26, 10, 26, 12, 26, 436, 9, 26,
    1, 27, 1, 27, 1, 27, 5, 27, 441, 8, 27, 10, 27, 12, 27, 444, 9, 27, 1, 28, 1, 28, 1, 28,
    1, 28, 1, 28, 3, 28, 451, 8, 28, 1, 29, 1, 29, 1, 29, 3, 29, 456, 8, 29, 1, 30, 1, 30, 1,
    30, 3, 30, 461, 8, 30, 1, 30, 3, 30, 464, 8, 30, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32,
    1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 5, 33, 477, 8, 33, 10, 33, 12, 33, 480, 9, 33, 1, 34,
    1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 494,
    8, 34, 1, 35, 1, 35, 1, 35, 1, 35, 5, 35, 500, 8, 35, 10, 35, 12, 35, 503, 9, 35, 1, 35,
    1, 35, 3, 35, 507, 8, 35, 1, 35, 1, 35, 1, 36, 3, 36, 512, 8, 36, 1, 36, 1, 36, 1, 36, 3,
    36, 517, 8, 36, 1, 36, 1, 36, 1, 37, 3, 37, 522, 8, 37, 1, 37, 1, 37, 3, 37, 526, 8, 37,
    1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 533, 8, 38, 1, 39, 1, 39, 1, 39, 1, 39, 3, 39,
    539, 8, 39, 1, 40, 1, 40, 1, 40, 3, 40, 544, 8, 40, 1, 41, 1, 41, 3, 41, 548, 8, 41, 1,
    41, 1, 41, 1, 42, 1, 42, 5, 42, 554, 8, 42, 10, 42, 12, 42, 557, 9, 42, 1, 42, 1, 42, 3,
    42, 561, 8, 42, 1, 43, 1, 43, 1, 43, 5, 43, 566, 8, 43, 10, 43, 12, 43, 569, 9, 43, 1,
    44, 1, 44, 1, 45, 1, 45, 3, 45, 575, 8, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1,
    47, 1, 47, 1, 48, 1, 48, 1, 48, 5, 48, 588, 8, 48, 10, 48, 12, 48, 591, 9, 48, 1, 48, 0,
    0, 49, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
    44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86,
    88, 90, 92, 94, 96, 0, 12, 1, 0, 88, 90, 1, 0, 75, 78, 2, 0, 6, 11, 28, 28, 1, 0, 61, 62,
    1, 0, 59, 60, 1, 0, 51, 57, 1, 0, 13, 18, 1, 0, 22, 23, 1, 0, 24, 26, 1, 0, 4, 5, 2, 0, 44,
    44, 46, 46, 1, 0, 39, 40, 640, 0, 101, 1, 0, 0, 0, 2, 121, 1, 0, 0, 0, 4, 129, 1, 0, 0, 0,
    6, 186, 1, 0, 0, 0, 8, 188, 1, 0, 0, 0, 10, 204, 1, 0, 0, 0, 12, 213, 1, 0, 0, 0, 14, 229,
    1, 0, 0, 0, 16, 237, 1, 0, 0, 0, 18, 247, 1, 0, 0, 0, 20, 253, 1, 0, 0, 0, 22, 256, 1, 0,
    0, 0, 24, 259, 1, 0, 0, 0, 26, 274, 1, 0, 0, 0, 28, 319, 1, 0, 0, 0, 30, 321, 1, 0, 0, 0,
    32, 358, 1, 0, 0, 0, 34, 360, 1, 0, 0, 0, 36, 369, 1, 0, 0, 0, 38, 373, 1, 0, 0, 0, 40, 381,
    1, 0, 0, 0, 42, 389, 1, 0, 0, 0, 44, 397, 1, 0, 0, 0, 46, 405, 1, 0, 0, 0, 48, 413, 1, 0,
    0, 0, 50, 421, 1, 0, 0, 0, 52, 429, 1, 0, 0, 0, 54, 437, 1, 0, 0, 0, 56, 450, 1, 0, 0, 0,
    58, 452, 1, 0, 0, 0, 60, 460, 1, 0, 0, 0, 62, 465, 1, 0, 0, 0, 64, 468, 1, 0, 0, 0, 66, 471,
    1, 0, 0, 0, 68, 493, 1, 0, 0, 0, 70, 495, 1, 0, 0, 0, 72, 511, 1, 0, 0, 0, 74, 521, 1, 0,
    0, 0, 76, 532, 1, 0, 0, 0, 78, 538, 1, 0, 0, 0, 80, 543, 1, 0, 0, 0, 82, 545, 1, 0, 0, 0,
    84, 560, 1, 0, 0, 0, 86, 562, 1, 0, 0, 0, 88, 570, 1, 0, 0, 0, 90, 574, 1, 0, 0, 0, 92, 576,
    1, 0, 0, 0, 94, 580, 1, 0, 0, 0, 96, 584, 1, 0, 0, 0, 98, 100, 3, 2, 1, 0, 99, 98, 1, 0, 0,
    0, 100, 103, 1, 0, 0, 0, 101, 99, 1, 0, 0, 0, 101, 102, 1, 0, 0, 0, 102, 104, 1, 0, 0, 0,
    103, 101, 1, 0, 0, 0, 104, 105, 5, 0, 0, 1, 105, 1, 1, 0, 0, 0, 106, 107, 3, 30, 15, 0,
    107, 108, 3, 88, 44, 0, 108, 122, 1, 0, 0, 0, 109, 122, 3, 88, 44, 0, 110, 122, 3, 8,
    4, 0, 111, 122, 3, 10, 5, 0, 112, 122, 3, 12, 6, 0, 113, 122, 3, 14, 7, 0, 114, 122, 3,
    16, 8, 0, 115, 122, 3, 18, 9, 0, 116, 122, 3, 22, 11, 0, 117, 122, 3, 20, 10, 0, 118,
    122, 3, 24, 12, 0, 119, 122, 3, 28, 14, 0, 120, 122, 3, 6, 3, 0, 121, 106, 1, 0, 0, 0,
    121, 109, 1, 0, 0, 0, 121, 110, 1, 0, 0, 0, 121, 111, 1, 0, 0, 0, 121, 112, 1, 0, 0, 0,
    121, 113, 1, 0, 0, 0, 121, 114, 1, 0, 0, 0, 121, 115, 1, 0, 0, 0, 121, 116, 1, 0, 0, 0,
    121, 117, 1, 0, 0, 0, 121, 118, 1, 0, 0, 0, 121, 119, 1, 0, 0, 0, 121, 120, 1, 0, 0, 0,
    122, 3, 1, 0, 0, 0, 123, 124, 5, 97, 0, 0, 124, 130, 3, 90, 45, 0, 125, 126, 3, 90, 45,
    0, 126, 127, 5, 96, 0, 0, 127, 128, 3, 90, 45, 0, 128, 130, 1, 0, 0, 0, 129, 123, 1, 0,
    0, 0, 129, 125, 1, 0, 0, 0, 130, 5, 1, 0, 0, 0, 131, 132, 5, 95, 0, 0, 132, 145, 3, 90,
    45, 0, 133, 142, 5, 31, 0, 0, 134, 139, 3, 90, 45, 0, 135, 136, 5, 41, 0, 0, 136, 138,
    3, 90, 45, 0, 137, 135, 1, 0, 0, 0, 138, 141, 1, 0, 0, 0, 139, 137, 1, 0, 0, 0, 139, 140,
    1, 0, 0, 0, 140, 143, 1, 0, 0, 0, 141, 139, 1, 0, 0, 0, 142, 134, 1, 0, 0, 0, 142, 143,
    1, 0, 0, 0, 143, 144, 1, 0, 0, 0, 144, 146, 5, 32, 0, 0, 145, 133, 1, 0, 0, 0, 145, 146,
    1, 0, 0, 0, 146, 147, 1, 0, 0, 0, 147, 148, 3, 30, 15, 0, 148, 187, 1, 0, 0, 0, 149, 150,
    7, 0, 0, 0, 150, 154, 3, 30, 15, 0, 151, 153, 3, 2, 1, 0, 152, 151, 1, 0, 0, 0, 153, 156,
    1, 0, 0, 0, 154, 152, 1, 0, 0, 0, 154, 155, 1, 0, 0, 0, 155, 167, 1, 0, 0, 0, 156, 154,
    1, 0, 0, 0, 157, 158, 5, 92, 0, 0, 158, 162, 3, 30, 15, 0, 159, 161, 3, 2, 1, 0, 160, 159,
    1, 0, 0, 0, 161, 164, 1, 0, 0, 0, 162, 160, 1, 0, 0, 0, 162, 163, 1, 0, 0, 0, 163, 166,
    1, 0, 0, 0, 164, 162, 1, 0, 0, 0, 165, 157, 1, 0, 0, 0, 166, 169, 1, 0, 0, 0, 167, 165,
    1, 0, 0, 0, 167, 168, 1, 0, 0, 0, 168, 177, 1, 0, 0, 0, 169, 167, 1, 0, 0, 0, 170, 174,
    5, 91, 0, 0, 171, 173, 3, 2, 1, 0, 172, 171, 1, 0, 0, 0, 173, 176, 1, 0, 0, 0, 174, 172,
    1, 0, 0, 0, 174, 175, 1, 0, 0, 0, 175, 178, 1, 0, 0, 0, 176, 174, 1, 0, 0, 0, 177, 170,
    1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 179, 1, 0, 0, 0, 179, 180, 5, 93, 0, 0, 180, 187,
    1, 0, 0, 0, 181, 184, 5, 94, 0, 0, 182, 185, 3, 92, 46, 0, 183, 185, 5, 98, 0, 0, 184,
    182, 1, 0, 0, 0, 184, 183, 1, 0, 0, 0, 185, 187, 1, 0, 0, 0, 186, 131, 1, 0, 0, 0, 186,
    149, 1, 0, 0, 0, 186, 181, 1, 0, 0, 0, 187, 7, 1, 0, 0, 0, 188, 189, 5, 63, 0, 0, 189, 190,
    3, 80, 40, 0, 190, 199, 5, 31, 0, 0, 191, 196, 5, 83, 0, 0, 192, 193, 5, 41, 0, 0, 193,
    195, 5, 83, 0, 0, 194, 192, 1, 0, 0, 0, 195, 198, 1, 0, 0, 0, 196, 194, 1, 0, 0, 0, 196,
    197, 1, 0, 0, 0, 197, 200, 1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 199, 191, 1, 0, 0, 0, 199,
    200, 1, 0, 0, 0, 200, 201, 1, 0, 0, 0, 201, 202, 5, 32, 0, 0, 202, 203, 3, 84, 42, 0, 203,
    9, 1, 0, 0, 0, 204, 205, 5, 64, 0, 0, 205, 206, 5, 31, 0, 0, 206, 207, 3, 30, 15, 0, 207,
    208, 5, 32, 0, 0, 208, 211, 3, 84, 42, 0, 209, 210, 5, 68, 0, 0, 210, 212, 3, 84, 42,
    0, 211, 209, 1, 0, 0, 0, 211, 212, 1, 0, 0, 0, 212, 11, 1, 0, 0, 0, 213, 214, 5, 65, 0,
    0, 214, 216, 5, 31, 0, 0, 215, 217, 3, 86, 43, 0, 216, 215, 1, 0, 0, 0, 216, 217, 1, 0,
    0, 0, 217, 218, 1, 0, 0, 0, 218, 220, 5, 39, 0, 0, 219, 221, 3, 86, 43, 0, 220, 219, 1,
    0, 0, 0, 220, 221, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0, 222, 224, 5, 39, 0, 0, 223, 225, 3,
    86, 43, 0, 224, 223, 1, 0, 0, 0, 224, 225, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226, 227,
    5, 32, 0, 0, 227, 228, 3, 84, 42, 0, 228, 13, 1, 0, 0, 0, 229, 230, 5, 66, 0, 0, 230, 232,
    5, 31, 0, 0, 231, 233, 3, 86, 43, 0, 232, 231, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 234,
    1, 0, 0, 0, 234, 235, 5, 32, 0, 0, 235, 236, 3, 84, 42, 0, 236, 15, 1, 0, 0, 0, 237, 238,
    5, 67, 0, 0, 238, 239, 3, 84, 42, 0, 239, 240, 5, 66, 0, 0, 240, 242, 5, 31, 0, 0, 241,
    243, 3, 86, 43, 0, 242, 241, 1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244,
    245, 5, 32, 0, 0, 245, 246, 5, 39, 0, 0, 246, 17, 1, 0, 0, 0, 247, 249, 5, 69, 0, 0, 248,
    250, 3, 30, 15, 0, 249, 248, 1, 0, 0, 0, 249, 250, 1, 0, 0, 0, 250, 251, 1, 0, 0, 0, 251,
    252, 3, 88, 44, 0, 252, 19, 1, 0, 0, 0, 253, 254, 5, 70, 0, 0, 254, 255, 3, 88, 44, 0,
    255, 21, 1, 0, 0, 0, 256, 257, 5, 71, 0, 0, 257, 258, 3, 88, 44, 0, 258, 23, 1, 0, 0, 0,
    259, 260, 5, 72, 0, 0, 260, 261, 3, 90, 45, 0, 261, 262, 5, 33, 0, 0, 262, 267, 3, 90,
    45, 0, 263, 264, 5, 41, 0, 0, 264, 266, 3, 90, 45, 0, 265, 263, 1, 0, 0, 0, 266, 269,
    1, 0, 0, 0, 267, 265, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 270, 1, 0, 0, 0, 269, 267,
    1, 0, 0, 0, 270, 271, 5, 34, 0, 0, 271, 272, 3, 88, 44, 0, 272, 25, 1, 0, 0, 0, 273, 275,
    5, 3, 0, 0, 274, 273, 1, 0, 0, 0, 274, 275, 1, 0, 0, 0, 275, 276, 1, 0, 0, 0, 276, 277,
    3, 96, 48, 0, 277, 279, 5, 31, 0, 0, 278, 280, 3, 86, 43, 0, 279, 278, 1, 0, 0, 0, 279,
    280, 1, 0, 0, 0, 280, 290, 1, 0, 0, 0, 281, 282, 5, 30, 0, 0, 282, 287, 3, 94, 47, 0, 283,
    284, 5, 41, 0, 0, 284, 286, 3, 94, 47, 0, 285, 283, 1, 0, 0, 0, 286, 289, 1, 0, 0, 0, 287,
    285, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 291, 1, 0, 0, 0, 289, 287, 1, 0, 0, 0, 290,
    281, 1, 0, 0, 0, 290, 291, 1, 0, 0, 0, 291, 292, 1, 0, 0, 0, 292, 293, 5, 32, 0, 0, 293,
    27, 1, 0, 0, 0, 294, 295, 7, 1, 0, 0, 295, 300, 5, 83, 0, 0, 296, 297, 5, 41, 0, 0, 297,
    299, 5, 83, 0, 0, 298, 296, 1, 0, 0, 0, 299, 302, 1, 0, 0, 0, 300, 298, 1, 0, 0, 0, 300,
    301, 1, 0, 0, 0, 301, 303, 1, 0, 0, 0, 302, 300, 1, 0, 0, 0, 303, 320, 3, 88, 44, 0, 304,
    305, 5, 79, 0, 0, 305, 310, 5, 82, 0, 0, 306, 307, 5, 41, 0, 0, 307, 309, 5, 82, 0, 0,
    308, 306, 1, 0, 0, 0, 309, 312, 1, 0, 0, 0, 310, 308, 1, 0, 0, 0, 310, 311, 1, 0, 0, 0,
    311, 313, 1, 0, 0, 0, 312, 310, 1, 0, 0, 0, 313, 320, 3, 88, 44, 0, 314, 315, 5, 73, 0,
    0, 315, 316, 5, 82, 0, 0, 316, 320, 3, 88, 44, 0, 317, 318, 5, 74, 0, 0, 318, 320, 3,
    88, 44, 0, 319, 294, 1, 0, 0, 0, 319, 304, 1, 0, 0, 0, 319, 314, 1, 0, 0, 0, 319, 317,
    1, 0, 0, 0, 320, 29, 1, 0, 0, 0, 321, 322, 3, 32, 16, 0, 322, 31, 1, 0, 0, 0, 323, 359,
    3, 34, 17, 0, 324, 331, 5, 83, 0, 0, 325, 326, 5, 35, 0, 0, 326, 327, 3, 30, 15, 0, 327,
    328, 5, 36, 0, 0, 328, 330, 1, 0, 0, 0, 329, 325, 1, 0, 0, 0, 330, 333, 1, 0, 0, 0, 331,
    329, 1, 0, 0, 0, 331, 332, 1, 0, 0, 0, 332, 334, 1, 0, 0, 0, 333, 331, 1, 0, 0, 0, 334,
    335, 7, 2, 0, 0, 335, 359, 3, 32, 16, 0, 336, 339, 5, 83, 0, 0, 337, 338, 5, 12, 0, 0,
    338, 340, 3, 90, 45, 0, 339, 337, 1, 0, 0, 0, 340, 341, 1, 0, 0, 0, 341, 339, 1, 0, 0,
    0, 341, 342, 1, 0, 0, 0, 342, 343, 1, 0, 0, 0, 343, 344, 7, 2, 0, 0, 344, 345, 3, 32, 16,
    0, 345, 359, 1, 0, 0, 0, 346, 347, 5, 35, 0, 0, 347, 352, 5, 83, 0, 0, 348, 349, 5, 41,
    0, 0, 349, 351, 5, 83, 0, 0, 350, 348, 1, 0, 0, 0, 351, 354, 1, 0, 0, 0, 352, 350, 1, 0,
    0, 0, 352, 353, 1, 0, 0, 0, 353, 355, 1, 0, 0, 0, 354, 352, 1, 0, 0, 0, 355, 356, 5, 36,
    0, 0, 356, 357, 7, 2, 0, 0, 357, 359, 3, 32, 16, 0, 358, 323, 1, 0, 0, 0, 358, 324, 1,
    0, 0, 0, 358, 336, 1, 0, 0, 0, 358, 346, 1, 0, 0, 0, 359, 33, 1, 0, 0, 0, 360, 366, 3, 36,
    18, 0, 361, 362, 5, 37, 0, 0, 362, 363, 3, 30, 15, 0, 363, 364, 5, 38, 0, 0, 364, 365,
    3, 30, 15, 0, 365, 367, 1, 0, 0, 0, 366, 361, 1, 0, 0, 0, 366, 367, 1, 0, 0, 0, 367, 35,
    1, 0, 0, 0, 368, 370, 5, 29, 0, 0, 369, 368, 1, 0, 0, 0, 369, 370, 1, 0, 0, 0, 370, 371,
    1, 0, 0, 0, 371, 372, 3, 38, 19, 0, 372, 37, 1, 0, 0, 0, 373, 378, 3, 40, 20, 0, 374, 375,
    5, 58, 0, 0, 375, 377, 3, 40, 20, 0, 376, 374, 1, 0, 0, 0, 377, 380, 1, 0, 0, 0, 378, 376,
    1, 0, 0, 0, 378, 379, 1, 0, 0, 0, 379, 39, 1, 0, 0, 0, 380, 378, 1, 0, 0, 0, 381, 386, 3,
    42, 21, 0, 382, 383, 7, 3, 0, 0, 383, 385, 3, 42, 21, 0, 384, 382, 1, 0, 0, 0, 385, 388,
    1, 0, 0, 0, 386, 384, 1, 0, 0, 0, 386, 387, 1, 0, 0, 0, 387, 41, 1, 0, 0, 0, 388, 386, 1,
    0, 0, 0, 389, 394, 3, 44, 22, 0, 390, 391, 7, 4, 0, 0, 391, 393, 3, 44, 22, 0, 392, 390,
    1, 0, 0, 0, 393, 396, 1, 0, 0, 0, 394, 392, 1, 0, 0, 0, 394, 395, 1, 0, 0, 0, 395, 43, 1,
    0, 0, 0, 396, 394, 1, 0, 0, 0, 397, 402, 3, 46, 23, 0, 398, 399, 7, 5, 0, 0, 399, 401,
    3, 46, 23, 0, 400, 398, 1, 0, 0, 0, 401, 404, 1, 0, 0, 0, 402, 400, 1, 0, 0, 0, 402, 403,
    1, 0, 0, 0, 403, 45, 1, 0, 0, 0, 404, 402, 1, 0, 0, 0, 405, 410, 3, 48, 24, 0, 406, 407,
    5, 20, 0, 0, 407, 409, 3, 48, 24, 0, 408, 406, 1, 0, 0, 0, 409, 412, 1, 0, 0, 0, 410, 408,
    1, 0, 0, 0, 410, 411, 1, 0, 0, 0, 411, 47, 1, 0, 0, 0, 412, 410, 1, 0, 0, 0, 413, 418, 3,
    50, 25, 0, 414, 415, 5, 19, 0, 0, 415, 417, 3, 50, 25, 0, 416, 414, 1, 0, 0, 0, 417, 420,
    1, 0, 0, 0, 418, 416, 1, 0, 0, 0, 418, 419, 1, 0, 0, 0, 419, 49, 1, 0, 0, 0, 420, 418, 1,
    0, 0, 0, 421, 426, 3, 52, 26, 0, 422, 423, 7, 6, 0, 0, 423, 425, 3, 52, 26, 0, 424, 422,
    1, 0, 0, 0, 425, 428, 1, 0, 0, 0, 426, 424, 1, 0, 0, 0, 426, 427, 1, 0, 0, 0, 427, 51, 1,
    0, 0, 0, 428, 426, 1, 0, 0, 0, 429, 434, 3, 54, 27, 0, 430, 431, 7, 7, 0, 0, 431, 433,
    3, 54, 27, 0, 432, 430, 1, 0, 0, 0, 433, 436, 1, 0, 0, 0, 434, 432, 1, 0, 0, 0, 434, 435,
    1, 0, 0, 0, 435, 53, 1, 0, 0, 0, 436, 434, 1, 0, 0, 0, 437, 442, 3, 56, 28, 0, 438, 439,
    7, 8, 0, 0, 439, 441, 3, 56, 28, 0, 440, 438, 1, 0, 0, 0, 441, 444, 1, 0, 0, 0, 442, 440,
    1, 0, 0, 0, 442, 443, 1, 0, 0, 0, 443, 55, 1, 0, 0, 0, 444, 442, 1, 0, 0, 0, 445, 446, 5,
    23, 0, 0, 446, 451, 3, 56, 28, 0, 447, 448, 5, 21, 0, 0, 448, 451, 3, 56, 28, 0, 449,
    451, 3, 58, 29, 0, 450, 445, 1, 0, 0, 0, 450, 447, 1, 0, 0, 0, 450, 449, 1, 0, 0, 0, 451,
    57, 1, 0, 0, 0, 452, 455, 3, 60, 30, 0, 453, 454, 5, 27, 0, 0, 454, 456, 3, 56, 28, 0,
    455, 453, 1, 0, 0, 0, 455, 456, 1, 0, 0, 0, 456, 59, 1, 0, 0, 0, 457, 461, 3, 64, 32, 0,
    458, 461, 3, 62, 31, 0, 459, 461, 3, 66, 33, 0, 460, 457, 1, 0, 0, 0, 460, 458, 1, 0,
    0, 0, 460, 459, 1, 0, 0, 0, 461, 463, 1, 0, 0, 0, 462, 464, 5, 21, 0, 0, 463, 462, 1, 0,
    0, 0, 463, 464, 1, 0, 0, 0, 464, 61, 1, 0, 0, 0, 465, 466, 7, 9, 0, 0, 466, 467, 3, 66,
    33, 0, 467, 63, 1, 0, 0, 0, 468, 469, 3, 66, 33, 0, 469, 470, 7, 9, 0, 0, 470, 65, 1, 0,
    0, 0, 471, 478, 3, 68, 34, 0, 472, 473, 5, 35, 0, 0, 473, 474, 3, 30, 15, 0, 474, 475,
    5, 36, 0, 0, 475, 477, 1, 0, 0, 0, 476, 472, 1, 0, 0, 0, 477, 480, 1, 0, 0, 0, 478, 476,
    1, 0, 0, 0, 478, 479, 1, 0, 0, 0, 479, 67, 1, 0, 0, 0, 480, 478, 1, 0, 0, 0, 481, 494, 3,
    80, 40, 0, 482, 494, 3, 76, 38, 0, 483, 494, 3, 78, 39, 0, 484, 494, 3, 26, 13, 0, 485,
    486, 5, 31, 0, 0, 486, 487, 3, 30, 15, 0, 487, 488, 5, 32, 0, 0, 488, 494, 1, 0, 0, 0,
    489, 494, 5, 98, 0, 0, 490, 494, 3, 82, 41, 0, 491, 494, 3, 70, 35, 0, 492, 494, 3, 4,
    2, 0, 493, 481, 1, 0, 0, 0, 493, 482, 1, 0, 0, 0, 493, 483, 1, 0, 0, 0, 493, 484, 1, 0,
    0, 0, 493, 485, 1, 0, 0, 0, 493, 489, 1, 0, 0, 0, 493, 490, 1, 0, 0, 0, 493, 491, 1, 0,
    0, 0, 493, 492, 1, 0, 0, 0, 494, 69, 1, 0, 0, 0, 495, 496, 5, 1, 0, 0, 496, 501, 5, 46,
    0, 0, 497, 498, 5, 41, 0, 0, 498, 500, 5, 46, 0, 0, 499, 497, 1, 0, 0, 0, 500, 503, 1,
    0, 0, 0, 501, 499, 1, 0, 0, 0, 501, 502, 1, 0, 0, 0, 502, 506, 1, 0, 0, 0, 503, 501, 1,
    0, 0, 0, 504, 505, 5, 38, 0, 0, 505, 507, 5, 46, 0, 0, 506, 504, 1, 0, 0, 0, 506, 507,
    1, 0, 0, 0, 507, 508, 1, 0, 0, 0, 508, 509, 5, 2, 0, 0, 509, 71, 1, 0, 0, 0, 510, 512, 5,
    23, 0, 0, 511, 510, 1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513, 514, 5,
    46, 0, 0, 514, 516, 5, 25, 0, 0, 515, 517, 5, 23, 0, 0, 516, 515, 1, 0, 0, 0, 516, 517,
    1, 0, 0, 0, 517, 518, 1, 0, 0, 0, 518, 519, 5, 46, 0, 0, 519, 73, 1, 0, 0, 0, 520, 522,
    5, 23, 0, 0, 521, 520, 1, 0, 0, 0, 521, 522, 1, 0, 0, 0, 522, 523, 1, 0, 0, 0, 523, 525,
    7, 10, 0, 0, 524, 526, 5, 45, 0, 0, 525, 524, 1, 0, 0, 0, 525, 526, 1, 0, 0, 0, 526, 75,
    1, 0, 0, 0, 527, 533, 5, 42, 0, 0, 528, 533, 5, 43, 0, 0, 529, 533, 3, 72, 36, 0, 530,
    533, 3, 74, 37, 0, 531, 533, 5, 48, 0, 0, 532, 527, 1, 0, 0, 0, 532, 528, 1, 0, 0, 0, 532,
    529, 1, 0, 0, 0, 532, 530, 1, 0, 0, 0, 532, 531, 1, 0, 0, 0, 533, 77, 1, 0, 0, 0, 534, 539,
    5, 83, 0, 0, 535, 539, 5, 49, 0, 0, 536, 539, 5, 50, 0, 0, 537, 539, 5, 81, 0, 0, 538,
    534, 1, 0, 0, 0, 538, 535, 1, 0, 0, 0, 538, 536, 1, 0, 0, 0, 538, 537, 1, 0, 0, 0, 539,
    79, 1, 0, 0, 0, 540, 544, 3, 96, 48, 0, 541, 544, 5, 80, 0, 0, 542, 544, 5, 99, 0, 0, 543,
    540, 1, 0, 0, 0, 543, 541, 1, 0, 0, 0, 543, 542, 1, 0, 0, 0, 544, 81, 1, 0, 0, 0, 545, 547,
    5, 35, 0, 0, 546, 548, 3, 86, 43, 0, 547, 546, 1, 0, 0, 0, 547, 548, 1, 0, 0, 0, 548, 549,
    1, 0, 0, 0, 549, 550, 5, 36, 0, 0, 550, 83, 1, 0, 0, 0, 551, 555, 5, 33, 0, 0, 552, 554,
    3, 2, 1, 0, 553, 552, 1, 0, 0, 0, 554, 557, 1, 0, 0, 0, 555, 553, 1, 0, 0, 0, 555, 556,
    1, 0, 0, 0, 556, 558, 1, 0, 0, 0, 557, 555, 1, 0, 0, 0, 558, 561, 5, 34, 0, 0, 559, 561,
    3, 2, 1, 0, 560, 551, 1, 0, 0, 0, 560, 559, 1, 0, 0, 0, 561, 85, 1, 0, 0, 0, 562, 567, 3,
    30, 15, 0, 563, 564, 5, 41, 0, 0, 564, 566, 3, 30, 15, 0, 565, 563, 1, 0, 0, 0, 566, 569,
    1, 0, 0, 0, 567, 565, 1, 0, 0, 0, 567, 568, 1, 0, 0, 0, 568, 87, 1, 0, 0, 0, 569, 567, 1,
    0, 0, 0, 570, 571, 7, 11, 0, 0, 571, 89, 1, 0, 0, 0, 572, 575, 3, 80, 40, 0, 573, 575,
    5, 83, 0, 0, 574, 572, 1, 0, 0, 0, 574, 573, 1, 0, 0, 0, 575, 91, 1, 0, 0, 0, 576, 577,
    5, 17, 0, 0, 577, 578, 3, 96, 48, 0, 578, 579, 5, 18, 0, 0, 579, 93, 1, 0, 0, 0, 580, 581,
    3, 96, 48, 0, 581, 582, 5, 28, 0, 0, 582, 583, 3, 30, 15, 0, 583, 95, 1, 0, 0, 0, 584,
    589, 5, 82, 0, 0, 585, 586, 5, 47, 0, 0, 586, 588, 5, 82, 0, 0, 587, 585, 1, 0, 0, 0, 588,
    591, 1, 0, 0, 0, 589, 587, 1, 0, 0, 0, 589, 590, 1, 0, 0, 0, 590, 97, 1, 0, 0, 0, 591, 589,
    1, 0, 0, 0, 66, 101, 121, 129, 139, 142, 145, 154, 162, 167, 174, 177, 184, 186, 196,
    199, 211, 216, 220, 224, 232, 242, 249, 267, 274, 279, 287, 290, 300, 310, 319,
    331, 341, 352, 358, 366, 369, 378, 386, 394, 402, 410, 418, 426, 434, 442, 450,
    455, 460, 463, 478, 493, 501, 506, 511, 516, 521, 525, 532, 538, 543, 547, 555,
    560, 567, 574, 589
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
    memberName() {
        return this.getRuleContext(0, MemberNameContext);
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
    memberName(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberNameContext);
        }
        return this.getRuleContext(i, MemberNameContext);
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
    memberName(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberNameContext);
        }
        return this.getRuleContext(i, MemberNameContext);
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
        super.copyFrom(ctx);
    }
    DEF() {
        return this.getToken(testParser.DEF, 0);
    }
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
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
    memberName(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberNameContext);
        }
        return this.getRuleContext(i, MemberNameContext);
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
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
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
    terminator() {
        return this.getRuleContext(0, TerminatorContext);
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
    VAR_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.VAR_ID);
        }
        else {
            return this.getToken(testParser.VAR_ID, i);
        }
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
    ARROW(i) {
        if (i === undefined) {
            return this.getTokens(testParser.ARROW);
        }
        else {
            return this.getToken(testParser.ARROW, i);
        }
    }
    memberName(i) {
        if (i === undefined) {
            return this.getRuleContexts(MemberNameContext);
        }
        return this.getRuleContext(i, MemberNameContext);
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
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
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
class MemberNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    indeterminate() {
        return this.getRuleContext(0, IndeterminateContext);
    }
    VAR_ID() {
        return this.getToken(testParser.VAR_ID, 0);
    }
    get ruleIndex() {
        return testParser.RULE_memberName;
    }
    enterRule(listener) {
        if (listener.enterMemberName) {
            listener.enterMemberName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMemberName) {
            listener.exitMemberName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMemberName) {
            return visitor.visitMemberName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberNameContext = MemberNameContext;
class SystemPathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LT() {
        return this.getToken(testParser.LT, 0);
    }
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
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
    qualifiedIdentifier() {
        return this.getRuleContext(0, QualifiedIdentifierContext);
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
class QualifiedIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FUNC_ID(i) {
        if (i === undefined) {
            return this.getTokens(testParser.FUNC_ID);
        }
        else {
            return this.getToken(testParser.FUNC_ID, i);
        }
    }
    POINT(i) {
        if (i === undefined) {
            return this.getTokens(testParser.POINT);
        }
        else {
            return this.getToken(testParser.POINT, i);
        }
    }
    get ruleIndex() {
        return testParser.RULE_qualifiedIdentifier;
    }
    enterRule(listener) {
        if (listener.enterQualifiedIdentifier) {
            listener.enterQualifiedIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQualifiedIdentifier) {
            listener.exitQualifiedIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQualifiedIdentifier) {
            return visitor.visitQualifiedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedIdentifierContext = QualifiedIdentifierContext;
//# sourceMappingURL=testParser.js.map