// Generated from /home/kanji/risaproject/pasirser/test.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { testListener } from "./testListener.js";
import { testVisitor } from "./testVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class testParser extends antlr.Parser {
    public static readonly LTLT = 1;
    public static readonly GTGT = 2;
    public static readonly COLON2 = 3;
    public static readonly INC = 4;
    public static readonly DEC = 5;
    public static readonly PLUSEQ = 6;
    public static readonly MINUSEQ = 7;
    public static readonly MULTEQ = 8;
    public static readonly DIVEQ = 9;
    public static readonly SUREQ = 10;
    public static readonly POWEREQ = 11;
    public static readonly ARROW = 12;
    public static readonly EQ = 13;
    public static readonly NEQ = 14;
    public static readonly LE = 15;
    public static readonly GE = 16;
    public static readonly LT = 17;
    public static readonly GT = 18;
    public static readonly AND = 19;
    public static readonly OR = 20;
    public static readonly NOT = 21;
    public static readonly PLUS = 22;
    public static readonly MINUS = 23;
    public static readonly MULT = 24;
    public static readonly DIV = 25;
    public static readonly SUR = 26;
    public static readonly POWER = 27;
    public static readonly ASSIGN = 28;
    public static readonly LPAREN = 29;
    public static readonly RPAREN = 30;
    public static readonly LBRANCE = 31;
    public static readonly RBRANCE = 32;
    public static readonly LBRACKET = 33;
    public static readonly RBRACKET = 34;
    public static readonly QUESTION = 35;
    public static readonly COLON = 36;
    public static readonly SEMI = 37;
    public static readonly DOLLAR = 38;
    public static readonly COMMA = 39;
    public static readonly FLOAT = 40;
    public static readonly EXP = 41;
    public static readonly INT = 42;
    public static readonly POINT = 43;
    public static readonly IMAGINARY = 44;
    public static readonly PI = 45;
    public static readonly NAPIER = 46;
    public static readonly BEFORE = 47;
    public static readonly BEFORE_N = 48;
    public static readonly QE_1 = 49;
    public static readonly QE_2 = 50;
    public static readonly QE_3 = 51;
    public static readonly QE_4 = 52;
    public static readonly QE_5 = 53;
    public static readonly QE_6 = 54;
    public static readonly QE_7 = 55;
    public static readonly DEF = 56;
    public static readonly IF = 57;
    public static readonly FOR = 58;
    public static readonly WHILE = 59;
    public static readonly DO = 60;
    public static readonly ELSE = 61;
    public static readonly RETURN = 62;
    public static readonly CONTINUE = 63;
    public static readonly BREAK = 64;
    public static readonly STRUCT = 65;
    public static readonly MODULE = 66;
    public static readonly ENDMODULE = 67;
    public static readonly EXTERN = 68;
    public static readonly STATIC = 69;
    public static readonly GLOBAL = 70;
    public static readonly LOCAL = 71;
    public static readonly LOCALF = 72;
    public static readonly VAR_2 = 73;
    public static readonly FUNC_ID = 74;
    public static readonly VAR_ID = 75;
    public static readonly NEWLINE = 76;
    public static readonly WS = 77;
    public static readonly COMMENT = 78;
    public static readonly STRING2 = 79;
    public static readonly STRING1 = 80;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_functionDefinition = 2;
    public static readonly RULE_functionIf = 3;
    public static readonly RULE_functionFor = 4;
    public static readonly RULE_functionWhile = 5;
    public static readonly RULE_functionDo = 6;
    public static readonly RULE_functionReturn = 7;
    public static readonly RULE_functionContinue = 8;
    public static readonly RULE_functionBreak = 9;
    public static readonly RULE_functionStruct = 10;
    public static readonly RULE_functionCall = 11;
    public static readonly RULE_functionModule = 12;
    public static readonly RULE_expr = 13;
    public static readonly RULE_assignmentExpr = 14;
    public static readonly RULE_ternaryExpr = 15;
    public static readonly RULE_qeOrExpr = 16;
    public static readonly RULE_qeAndExpr = 17;
    public static readonly RULE_qeCompareExpr = 18;
    public static readonly RULE_orExpr = 19;
    public static readonly RULE_andExpr = 20;
    public static readonly RULE_compareExpr = 21;
    public static readonly RULE_addSubExpr = 22;
    public static readonly RULE_mulDivSurExpr = 23;
    public static readonly RULE_unaryExpr = 24;
    public static readonly RULE_postfixExpr = 25;
    public static readonly RULE_powerExpr = 26;
    public static readonly RULE_indexAccessExpr = 27;
    public static readonly RULE_primaryExpr = 28;
    public static readonly RULE_dpoly = 29;
    public static readonly RULE_rational = 30;
    public static readonly RULE_decimal = 31;
    public static readonly RULE_num = 32;
    public static readonly RULE_id = 33;
    public static readonly RULE_specialnum = 34;
    public static readonly RULE_list = 35;
    public static readonly RULE_block = 36;

    public static readonly literalNames = [
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

    public static readonly symbolicNames = [
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
    public static readonly ruleNames = [
        "prog", "statement", "functionDefinition", "functionIf", "functionFor", 
        "functionWhile", "functionDo", "functionReturn", "functionContinue", 
        "functionBreak", "functionStruct", "functionCall", "functionModule", 
        "expr", "assignmentExpr", "ternaryExpr", "qeOrExpr", "qeAndExpr", 
        "qeCompareExpr", "orExpr", "andExpr", "compareExpr", "addSubExpr", 
        "mulDivSurExpr", "unaryExpr", "postfixExpr", "powerExpr", "indexAccessExpr", 
        "primaryExpr", "dpoly", "rational", "decimal", "num", "id", "specialnum", 
        "list", "block",
    ];

    public get grammarFileName(): string { return "test.g4"; }
    public get literalNames(): (string | null)[] { return testParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return testParser.symbolicNames; }
    public get ruleNames(): string[] { return testParser.ruleNames; }
    public get serializedATN(): number[] { return testParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, testParser._ATN, testParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, testParser.RULE_prog);
        let _la: number;
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
        this.enterRule(localContext, 2, testParser.RULE_statement);
        let _la: number;
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
                if(!(_la === 37 || _la === 38)) {
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
                if(!(_la === 37 || _la === 38)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDefinition(): FunctionDefinitionContext {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 4, testParser.RULE_functionDefinition);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionIf(): FunctionIfContext {
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
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 119;
                this.match(testParser.ELSE);
                this.state = 122;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionFor(): FunctionForContext {
        let localContext = new FunctionForContext(this.context, this.state);
        this.enterRule(localContext, 8, testParser.RULE_functionFor);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionWhile(): FunctionWhileContext {
        let localContext = new FunctionWhileContext(this.context, this.state);
        this.enterRule(localContext, 10, testParser.RULE_functionWhile);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDo(): FunctionDoContext {
        let localContext = new FunctionDoContext(this.context, this.state);
        this.enterRule(localContext, 12, testParser.RULE_functionDo);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionReturn(): FunctionReturnContext {
        let localContext = new FunctionReturnContext(this.context, this.state);
        this.enterRule(localContext, 14, testParser.RULE_functionReturn);
        let _la: number;
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
            if(!(_la === 37 || _la === 38)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionContinue(): FunctionContinueContext {
        let localContext = new FunctionContinueContext(this.context, this.state);
        this.enterRule(localContext, 16, testParser.RULE_functionContinue);
        let _la: number;
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 200;
            this.match(testParser.CONTINUE);
            this.state = 201;
            _la = this.tokenStream.LA(1);
            if(!(_la === 37 || _la === 38)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionBreak(): FunctionBreakContext {
        let localContext = new FunctionBreakContext(this.context, this.state);
        this.enterRule(localContext, 18, testParser.RULE_functionBreak);
        let _la: number;
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.match(testParser.BREAK);
            this.state = 204;
            _la = this.tokenStream.LA(1);
            if(!(_la === 37 || _la === 38)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionStruct(): FunctionStructContext {
        let localContext = new FunctionStructContext(this.context, this.state);
        this.enterRule(localContext, 20, testParser.RULE_functionStruct);
        let _la: number;
        try {
            localContext = new StrctContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.match(testParser.STRUCT);
            this.state = 207;
            _la = this.tokenStream.LA(1);
            if(!(_la === 74 || _la === 75)) {
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
            if(!(_la === 74 || _la === 75)) {
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
                if(!(_la === 74 || _la === 75)) {
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
            if(!(_la === 37 || _la === 38)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 22, testParser.RULE_functionCall);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionModule(): FunctionModuleContext {
        let localContext = new FunctionModuleContext(this.context, this.state);
        this.enterRule(localContext, 24, testParser.RULE_functionModule);
        let _la: number;
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
                if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 15) !== 0))) {
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
                if(!(_la === 37 || _la === 38)) {
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
                if(!(_la === 37 || _la === 38)) {
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
                if(!(_la === 37 || _la === 38)) {
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
                if(!(_la === 37 || _la === 38)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr(): ExprContext {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentExpr(): AssignmentExprContext {
        let localContext = new AssignmentExprContext(this.context, this.state);
        this.enterRule(localContext, 28, testParser.RULE_assignmentExpr);
        let _la: number;
        try {
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
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
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
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
                    if(!(_la === 74 || _la === 75)) {
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
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
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
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ternaryExpr(): TernaryExprContext {
        let localContext = new TernaryExprContext(this.context, this.state);
        this.enterRule(localContext, 30, testParser.RULE_ternaryExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qeOrExpr(): QeOrExprContext {
        let localContext = new QeOrExprContext(this.context, this.state);
        this.enterRule(localContext, 32, testParser.RULE_qeOrExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qeAndExpr(): QeAndExprContext {
        let localContext = new QeAndExprContext(this.context, this.state);
        this.enterRule(localContext, 34, testParser.RULE_qeAndExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qeCompareExpr(): QeCompareExprContext {
        let localContext = new QeCompareExprContext(this.context, this.state);
        this.enterRule(localContext, 36, testParser.RULE_qeCompareExpr);
        let _la: number;
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
                if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 31) !== 0))) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orExpr(): OrExprContext {
        let localContext = new OrExprContext(this.context, this.state);
        this.enterRule(localContext, 38, testParser.RULE_orExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public andExpr(): AndExprContext {
        let localContext = new AndExprContext(this.context, this.state);
        this.enterRule(localContext, 40, testParser.RULE_andExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compareExpr(): CompareExprContext {
        let localContext = new CompareExprContext(this.context, this.state);
        this.enterRule(localContext, 42, testParser.RULE_compareExpr);
        let _la: number;
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
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addSubExpr(): AddSubExprContext {
        let localContext = new AddSubExprContext(this.context, this.state);
        this.enterRule(localContext, 44, testParser.RULE_addSubExpr);
        let _la: number;
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
                if(!(_la === 22 || _la === 23)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mulDivSurExpr(): MulDivSurExprContext {
        let localContext = new MulDivSurExprContext(this.context, this.state);
        this.enterRule(localContext, 46, testParser.RULE_mulDivSurExpr);
        let _la: number;
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
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unaryExpr(): UnaryExprContext {
        let localContext = new UnaryExprContext(this.context, this.state);
        this.enterRule(localContext, 48, testParser.RULE_unaryExpr);
        try {
            this.state = 388;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public postfixExpr(): PostfixExprContext {
        let localContext = new PostfixExprContext(this.context, this.state);
        this.enterRule(localContext, 50, testParser.RULE_postfixExpr);
        let _la: number;
        try {
            localContext = new PostFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 390;
            this.powerExpr();
            this.state = 391;
            _la = this.tokenStream.LA(1);
            if(!(_la === 4 || _la === 5)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public powerExpr(): PowerExprContext {
        let localContext = new PowerExprContext(this.context, this.state);
        this.enterRule(localContext, 52, testParser.RULE_powerExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public indexAccessExpr(): IndexAccessExprContext {
        let localContext = new IndexAccessExprContext(this.context, this.state);
        this.enterRule(localContext, 54, testParser.RULE_indexAccessExpr);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryExpr(): PrimaryExprContext {
        let localContext = new PrimaryExprContext(this.context, this.state);
        this.enterRule(localContext, 56, testParser.RULE_primaryExpr);
        try {
            this.state = 420;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dpoly(): DpolyContext {
        let localContext = new DpolyContext(this.context, this.state);
        this.enterRule(localContext, 58, testParser.RULE_dpoly);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rational(): RationalContext {
        let localContext = new RationalContext(this.context, this.state);
        this.enterRule(localContext, 60, testParser.RULE_rational);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimal(): DecimalContext {
        let localContext = new DecimalContext(this.context, this.state);
        this.enterRule(localContext, 62, testParser.RULE_decimal);
        let _la: number;
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
            if(!(_la === 40 || _la === 42)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public num(): NumContext {
        let localContext = new NumContext(this.context, this.state);
        this.enterRule(localContext, 64, testParser.RULE_num);
        try {
            this.state = 456;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public id(): IdContext {
        let localContext = new IdContext(this.context, this.state);
        this.enterRule(localContext, 66, testParser.RULE_id);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public specialnum(): SpecialnumContext {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public list(): ListContext {
        let localContext = new ListContext(this.context, this.state);
        this.enterRule(localContext, 70, testParser.RULE_list);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 72, testParser.RULE_block);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,80,499,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,1,0,5,0,76,8,0,10,0,12,0,79,9,
        0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,3,1,97,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,105,8,2,10,2,12,2,108,9,
        2,3,2,110,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,123,
        8,3,3,3,125,8,3,1,4,1,4,1,4,1,4,1,4,5,4,132,8,4,10,4,12,4,135,9,
        4,3,4,137,8,4,1,4,1,4,1,4,1,4,5,4,143,8,4,10,4,12,4,146,9,4,3,4,
        148,8,4,1,4,1,4,1,4,1,4,5,4,154,8,4,10,4,12,4,157,9,4,3,4,159,8,
        4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,169,8,5,10,5,12,5,172,9,5,
        3,5,174,8,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,186,8,6,
        10,6,12,6,189,9,6,3,6,191,8,6,1,6,1,6,1,7,1,7,3,7,197,8,7,1,7,1,
        7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,213,
        8,10,10,10,12,10,216,9,10,1,10,1,10,1,10,1,11,3,11,222,8,11,1,11,
        1,11,1,11,3,11,227,8,11,1,11,1,11,1,11,1,11,5,11,233,8,11,10,11,
        12,11,236,9,11,3,11,238,8,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,
        246,8,12,10,12,12,12,249,9,12,1,12,1,12,1,12,1,12,1,12,5,12,256,
        8,12,10,12,12,12,259,9,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,267,
        8,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,277,8,14,10,14,
        12,14,280,9,14,1,14,1,14,1,14,1,14,1,14,4,14,287,8,14,11,14,12,14,
        288,1,14,1,14,1,14,1,14,1,14,1,14,5,14,297,8,14,10,14,12,14,300,
        9,14,1,14,1,14,1,14,3,14,305,8,14,1,15,1,15,1,15,1,15,1,15,1,15,
        3,15,313,8,15,1,16,1,16,1,16,5,16,318,8,16,10,16,12,16,321,9,16,
        1,17,1,17,1,17,5,17,326,8,17,10,17,12,17,329,9,17,1,18,1,18,1,18,
        5,18,334,8,18,10,18,12,18,337,9,18,1,19,1,19,1,19,5,19,342,8,19,
        10,19,12,19,345,9,19,1,20,1,20,1,20,5,20,350,8,20,10,20,12,20,353,
        9,20,1,21,1,21,1,21,5,21,358,8,21,10,21,12,21,361,9,21,1,22,1,22,
        1,22,5,22,366,8,22,10,22,12,22,369,9,22,1,23,1,23,1,23,5,23,374,
        8,23,10,23,12,23,377,9,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,3,24,389,8,24,1,25,1,25,1,25,1,26,1,26,1,26,3,26,397,8,
        26,1,27,1,27,1,27,1,27,1,27,5,27,404,8,27,10,27,12,27,407,9,27,1,
        28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,421,
        8,28,1,29,1,29,1,29,1,29,5,29,427,8,29,10,29,12,29,430,9,29,1,29,
        1,29,3,29,434,8,29,1,29,1,29,1,30,3,30,439,8,30,1,30,1,30,1,30,3,
        30,444,8,30,1,30,1,30,1,31,3,31,449,8,31,1,31,1,31,3,31,453,8,31,
        1,32,1,32,3,32,457,8,32,1,33,1,33,1,33,1,33,3,33,463,8,33,1,33,3,
        33,466,8,33,1,34,1,34,1,34,1,34,1,34,3,34,473,8,34,1,35,1,35,1,35,
        1,35,5,35,479,8,35,10,35,12,35,482,9,35,3,35,484,8,35,1,35,1,35,
        1,36,1,36,5,36,490,8,36,10,36,12,36,493,9,36,1,36,1,36,3,36,497,
        8,36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,10,1,
        0,37,38,1,0,74,75,1,0,68,71,2,0,6,11,28,28,1,0,49,53,1,0,13,18,1,
        0,22,23,1,0,24,26,1,0,4,5,2,0,40,40,42,42,546,0,77,1,0,0,0,2,96,
        1,0,0,0,4,98,1,0,0,0,6,114,1,0,0,0,8,126,1,0,0,0,10,163,1,0,0,0,
        12,178,1,0,0,0,14,194,1,0,0,0,16,200,1,0,0,0,18,203,1,0,0,0,20,206,
        1,0,0,0,22,221,1,0,0,0,24,266,1,0,0,0,26,268,1,0,0,0,28,304,1,0,
        0,0,30,306,1,0,0,0,32,314,1,0,0,0,34,322,1,0,0,0,36,330,1,0,0,0,
        38,338,1,0,0,0,40,346,1,0,0,0,42,354,1,0,0,0,44,362,1,0,0,0,46,370,
        1,0,0,0,48,388,1,0,0,0,50,390,1,0,0,0,52,393,1,0,0,0,54,398,1,0,
        0,0,56,420,1,0,0,0,58,422,1,0,0,0,60,438,1,0,0,0,62,448,1,0,0,0,
        64,456,1,0,0,0,66,465,1,0,0,0,68,472,1,0,0,0,70,474,1,0,0,0,72,496,
        1,0,0,0,74,76,3,2,1,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,
        77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,0,0,1,81,1,1,0,
        0,0,82,83,3,26,13,0,83,84,7,0,0,0,84,97,1,0,0,0,85,97,7,0,0,0,86,
        97,3,4,2,0,87,97,3,6,3,0,88,97,3,8,4,0,89,97,3,10,5,0,90,97,3,12,
        6,0,91,97,3,14,7,0,92,97,3,18,9,0,93,97,3,16,8,0,94,97,3,20,10,0,
        95,97,3,24,12,0,96,82,1,0,0,0,96,85,1,0,0,0,96,86,1,0,0,0,96,87,
        1,0,0,0,96,88,1,0,0,0,96,89,1,0,0,0,96,90,1,0,0,0,96,91,1,0,0,0,
        96,92,1,0,0,0,96,93,1,0,0,0,96,94,1,0,0,0,96,95,1,0,0,0,97,3,1,0,
        0,0,98,99,5,56,0,0,99,100,5,74,0,0,100,109,5,29,0,0,101,106,5,75,
        0,0,102,103,5,39,0,0,103,105,5,75,0,0,104,102,1,0,0,0,105,108,1,
        0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,106,1,
        0,0,0,109,101,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,5,
        30,0,0,112,113,3,72,36,0,113,5,1,0,0,0,114,115,5,57,0,0,115,116,
        5,29,0,0,116,117,3,26,13,0,117,118,5,30,0,0,118,124,3,72,36,0,119,
        122,5,61,0,0,120,123,3,72,36,0,121,123,3,6,3,0,122,120,1,0,0,0,122,
        121,1,0,0,0,123,125,1,0,0,0,124,119,1,0,0,0,124,125,1,0,0,0,125,
        7,1,0,0,0,126,127,5,58,0,0,127,136,5,29,0,0,128,133,3,26,13,0,129,
        130,5,39,0,0,130,132,3,26,13,0,131,129,1,0,0,0,132,135,1,0,0,0,133,
        131,1,0,0,0,133,134,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,136,
        128,1,0,0,0,136,137,1,0,0,0,137,138,1,0,0,0,138,147,5,37,0,0,139,
        144,3,26,13,0,140,141,5,39,0,0,141,143,3,26,13,0,142,140,1,0,0,0,
        143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,148,1,0,0,0,
        146,144,1,0,0,0,147,139,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,
        149,158,5,37,0,0,150,155,3,26,13,0,151,152,5,39,0,0,152,154,3,26,
        13,0,153,151,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,
        0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,150,1,0,0,0,158,159,1,0,
        0,0,159,160,1,0,0,0,160,161,5,30,0,0,161,162,3,72,36,0,162,9,1,0,
        0,0,163,164,5,59,0,0,164,173,5,29,0,0,165,170,3,26,13,0,166,167,
        5,39,0,0,167,169,3,26,13,0,168,166,1,0,0,0,169,172,1,0,0,0,170,168,
        1,0,0,0,170,171,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,173,165,
        1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,5,30,0,0,176,177,
        3,72,36,0,177,11,1,0,0,0,178,179,5,60,0,0,179,180,3,72,36,0,180,
        181,5,59,0,0,181,190,5,29,0,0,182,187,3,26,13,0,183,184,5,39,0,0,
        184,186,3,26,13,0,185,183,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,
        0,187,188,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,190,182,1,0,0,
        0,190,191,1,0,0,0,191,192,1,0,0,0,192,193,5,30,0,0,193,13,1,0,0,
        0,194,196,5,62,0,0,195,197,3,26,13,0,196,195,1,0,0,0,196,197,1,0,
        0,0,197,198,1,0,0,0,198,199,7,0,0,0,199,15,1,0,0,0,200,201,5,63,
        0,0,201,202,7,0,0,0,202,17,1,0,0,0,203,204,5,64,0,0,204,205,7,0,
        0,0,205,19,1,0,0,0,206,207,5,65,0,0,207,208,7,1,0,0,208,209,5,31,
        0,0,209,214,7,1,0,0,210,211,5,39,0,0,211,213,7,1,0,0,212,210,1,0,
        0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,217,1,0,
        0,0,216,214,1,0,0,0,217,218,5,32,0,0,218,219,7,0,0,0,219,21,1,0,
        0,0,220,222,5,3,0,0,221,220,1,0,0,0,221,222,1,0,0,0,222,223,1,0,
        0,0,223,226,5,74,0,0,224,225,5,43,0,0,225,227,5,74,0,0,226,224,1,
        0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,237,5,29,0,0,229,234,3,
        26,13,0,230,231,5,39,0,0,231,233,3,26,13,0,232,230,1,0,0,0,233,236,
        1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,238,1,0,0,0,236,234,
        1,0,0,0,237,229,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,240,
        5,30,0,0,240,23,1,0,0,0,241,242,7,2,0,0,242,247,5,75,0,0,243,244,
        5,39,0,0,244,246,5,75,0,0,245,243,1,0,0,0,246,249,1,0,0,0,247,245,
        1,0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,247,1,0,0,0,250,267,
        7,0,0,0,251,252,5,72,0,0,252,257,5,74,0,0,253,254,5,39,0,0,254,256,
        5,74,0,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,
        1,0,0,0,258,260,1,0,0,0,259,257,1,0,0,0,260,267,7,0,0,0,261,262,
        5,66,0,0,262,263,5,74,0,0,263,267,7,0,0,0,264,265,5,67,0,0,265,267,
        7,0,0,0,266,241,1,0,0,0,266,251,1,0,0,0,266,261,1,0,0,0,266,264,
        1,0,0,0,267,25,1,0,0,0,268,269,3,28,14,0,269,27,1,0,0,0,270,305,
        3,30,15,0,271,278,5,75,0,0,272,273,5,33,0,0,273,274,3,26,13,0,274,
        275,5,34,0,0,275,277,1,0,0,0,276,272,1,0,0,0,277,280,1,0,0,0,278,
        276,1,0,0,0,278,279,1,0,0,0,279,281,1,0,0,0,280,278,1,0,0,0,281,
        282,7,3,0,0,282,305,3,28,14,0,283,286,5,75,0,0,284,285,5,12,0,0,
        285,287,7,1,0,0,286,284,1,0,0,0,287,288,1,0,0,0,288,286,1,0,0,0,
        288,289,1,0,0,0,289,290,1,0,0,0,290,291,7,3,0,0,291,305,3,28,14,
        0,292,293,5,33,0,0,293,298,5,75,0,0,294,295,5,39,0,0,295,297,5,75,
        0,0,296,294,1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,298,299,1,0,
        0,0,299,301,1,0,0,0,300,298,1,0,0,0,301,302,5,34,0,0,302,303,7,3,
        0,0,303,305,3,28,14,0,304,270,1,0,0,0,304,271,1,0,0,0,304,283,1,
        0,0,0,304,292,1,0,0,0,305,29,1,0,0,0,306,312,3,32,16,0,307,308,5,
        35,0,0,308,309,3,26,13,0,309,310,5,36,0,0,310,311,3,26,13,0,311,
        313,1,0,0,0,312,307,1,0,0,0,312,313,1,0,0,0,313,31,1,0,0,0,314,319,
        3,34,17,0,315,316,5,55,0,0,316,318,3,34,17,0,317,315,1,0,0,0,318,
        321,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,33,1,0,0,0,321,319,
        1,0,0,0,322,327,3,36,18,0,323,324,5,54,0,0,324,326,3,36,18,0,325,
        323,1,0,0,0,326,329,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,
        35,1,0,0,0,329,327,1,0,0,0,330,335,3,38,19,0,331,332,7,4,0,0,332,
        334,3,38,19,0,333,331,1,0,0,0,334,337,1,0,0,0,335,333,1,0,0,0,335,
        336,1,0,0,0,336,37,1,0,0,0,337,335,1,0,0,0,338,343,3,40,20,0,339,
        340,5,20,0,0,340,342,3,40,20,0,341,339,1,0,0,0,342,345,1,0,0,0,343,
        341,1,0,0,0,343,344,1,0,0,0,344,39,1,0,0,0,345,343,1,0,0,0,346,351,
        3,42,21,0,347,348,5,19,0,0,348,350,3,42,21,0,349,347,1,0,0,0,350,
        353,1,0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,41,1,0,0,0,353,351,
        1,0,0,0,354,359,3,44,22,0,355,356,7,5,0,0,356,358,3,44,22,0,357,
        355,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,
        43,1,0,0,0,361,359,1,0,0,0,362,367,3,46,23,0,363,364,7,6,0,0,364,
        366,3,46,23,0,365,363,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,
        368,1,0,0,0,368,45,1,0,0,0,369,367,1,0,0,0,370,375,3,48,24,0,371,
        372,7,7,0,0,372,374,3,48,24,0,373,371,1,0,0,0,374,377,1,0,0,0,375,
        373,1,0,0,0,375,376,1,0,0,0,376,47,1,0,0,0,377,375,1,0,0,0,378,379,
        5,23,0,0,379,389,3,48,24,0,380,381,5,21,0,0,381,389,3,48,24,0,382,
        383,5,4,0,0,383,389,5,75,0,0,384,385,5,5,0,0,385,389,5,75,0,0,386,
        389,3,50,25,0,387,389,3,52,26,0,388,378,1,0,0,0,388,380,1,0,0,0,
        388,382,1,0,0,0,388,384,1,0,0,0,388,386,1,0,0,0,388,387,1,0,0,0,
        389,49,1,0,0,0,390,391,3,52,26,0,391,392,7,8,0,0,392,51,1,0,0,0,
        393,396,3,54,27,0,394,395,5,27,0,0,395,397,3,52,26,0,396,394,1,0,
        0,0,396,397,1,0,0,0,397,53,1,0,0,0,398,405,3,56,28,0,399,400,5,33,
        0,0,400,401,3,26,13,0,401,402,5,34,0,0,402,404,1,0,0,0,403,399,1,
        0,0,0,404,407,1,0,0,0,405,403,1,0,0,0,405,406,1,0,0,0,406,55,1,0,
        0,0,407,405,1,0,0,0,408,421,3,64,32,0,409,421,3,66,33,0,410,421,
        3,22,11,0,411,412,5,29,0,0,412,413,3,26,13,0,413,414,5,30,0,0,414,
        421,1,0,0,0,415,421,3,68,34,0,416,421,5,79,0,0,417,421,5,80,0,0,
        418,421,3,70,35,0,419,421,3,58,29,0,420,408,1,0,0,0,420,409,1,0,
        0,0,420,410,1,0,0,0,420,411,1,0,0,0,420,415,1,0,0,0,420,416,1,0,
        0,0,420,417,1,0,0,0,420,418,1,0,0,0,420,419,1,0,0,0,421,57,1,0,0,
        0,422,423,5,1,0,0,423,428,5,42,0,0,424,425,5,39,0,0,425,427,5,42,
        0,0,426,424,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,
        0,0,429,433,1,0,0,0,430,428,1,0,0,0,431,432,5,36,0,0,432,434,5,42,
        0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,435,1,0,0,0,435,436,5,2,
        0,0,436,59,1,0,0,0,437,439,5,23,0,0,438,437,1,0,0,0,438,439,1,0,
        0,0,439,440,1,0,0,0,440,441,5,42,0,0,441,443,5,25,0,0,442,444,5,
        23,0,0,443,442,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,446,5,
        42,0,0,446,61,1,0,0,0,447,449,5,23,0,0,448,447,1,0,0,0,448,449,1,
        0,0,0,449,450,1,0,0,0,450,452,7,9,0,0,451,453,5,41,0,0,452,451,1,
        0,0,0,452,453,1,0,0,0,453,63,1,0,0,0,454,457,3,60,30,0,455,457,3,
        62,31,0,456,454,1,0,0,0,456,455,1,0,0,0,457,65,1,0,0,0,458,466,5,
        75,0,0,459,462,5,74,0,0,460,461,5,43,0,0,461,463,5,74,0,0,462,460,
        1,0,0,0,462,463,1,0,0,0,463,466,1,0,0,0,464,466,5,73,0,0,465,458,
        1,0,0,0,465,459,1,0,0,0,465,464,1,0,0,0,466,67,1,0,0,0,467,473,5,
        44,0,0,468,473,5,45,0,0,469,473,5,46,0,0,470,473,5,47,0,0,471,473,
        5,48,0,0,472,467,1,0,0,0,472,468,1,0,0,0,472,469,1,0,0,0,472,470,
        1,0,0,0,472,471,1,0,0,0,473,69,1,0,0,0,474,483,5,33,0,0,475,480,
        3,26,13,0,476,477,5,39,0,0,477,479,3,26,13,0,478,476,1,0,0,0,479,
        482,1,0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,484,1,0,0,0,482,
        480,1,0,0,0,483,475,1,0,0,0,483,484,1,0,0,0,484,485,1,0,0,0,485,
        486,5,34,0,0,486,71,1,0,0,0,487,491,5,31,0,0,488,490,3,2,1,0,489,
        488,1,0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,491,492,1,0,0,0,492,
        494,1,0,0,0,493,491,1,0,0,0,494,497,5,32,0,0,495,497,3,2,1,0,496,
        487,1,0,0,0,496,495,1,0,0,0,497,73,1,0,0,0,56,77,96,106,109,122,
        124,133,136,144,147,155,158,170,173,187,190,196,214,221,226,234,
        237,247,257,266,278,288,298,304,312,319,327,335,343,351,359,367,
        375,388,396,405,420,428,433,438,443,448,452,456,462,465,472,480,
        483,491,496
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!testParser.__ATN) {
            testParser.__ATN = new antlr.ATNDeserializer().deserialize(testParser._serializedATN);
        }

        return testParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(testParser.literalNames, testParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return testParser.vocabulary;
    }

    private static readonly decisionsToDFA = testParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(testParser.EOF, 0)!;
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
        return testParser.RULE_prog;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
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
        return testParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class BreakStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionBreak(): FunctionBreakContext {
        return this.getRuleContext(0, FunctionBreakContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionIf(): FunctionIfContext {
        return this.getRuleContext(0, FunctionIfContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DefinitionStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionDefinition(): FunctionDefinitionContext {
        return this.getRuleContext(0, FunctionDefinitionContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDefinitionStatement) {
             listener.enterDefinitionStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDefinitionStatement) {
             listener.exitDefinitionStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDefinitionStatement) {
            return visitor.visitDefinitionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DoStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionDo(): FunctionDoContext {
        return this.getRuleContext(0, FunctionDoContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDoStatement) {
             listener.enterDoStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDoStatement) {
             listener.exitDoStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionModule(): FunctionModuleContext {
        return this.getRuleContext(0, FunctionModuleContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterModuleStatement) {
             listener.enterModuleStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitModuleStatement) {
             listener.exitModuleStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitModuleStatement) {
            return visitor.visitModuleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StructStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionStruct(): FunctionStructContext {
        return this.getRuleContext(0, FunctionStructContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterStructStatement) {
             listener.enterStructStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitStructStatement) {
             listener.exitStructStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitStructStatement) {
            return visitor.visitStructStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterExprStatement) {
             listener.enterExprStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitExprStatement) {
             listener.exitExprStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitExprStatement) {
            return visitor.visitExprStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReturnStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionReturn(): FunctionReturnContext {
        return this.getRuleContext(0, FunctionReturnContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhileStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionWhile(): FunctionWhileContext {
        return this.getRuleContext(0, FunctionWhileContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterWhileStatement) {
             listener.enterWhileStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitWhileStatement) {
             listener.exitWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionFor(): FunctionForContext {
        return this.getRuleContext(0, FunctionForContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterForStatement) {
             listener.enterForStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitForStatement) {
             listener.exitForStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContinueStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionContinue(): FunctionContinueContext {
        return this.getRuleContext(0, FunctionContinueContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterContinueStatement) {
             listener.enterContinueStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitContinueStatement) {
             listener.exitContinueStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyLineStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterEmptyLineStatement) {
             listener.enterEmptyLineStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitEmptyLineStatement) {
             listener.exitEmptyLineStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitEmptyLineStatement) {
            return visitor.visitEmptyLineStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionDefinition;
    }
    public override copyFrom(ctx: FunctionDefinitionContext): void {
        super.copyFrom(ctx);
    }
}
export class DefContext extends FunctionDefinitionContext {
    public constructor(ctx: FunctionDefinitionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DEF(): antlr.TerminalNode {
        return this.getToken(testParser.DEF, 0)!;
    }
    public FUNC_ID(): antlr.TerminalNode {
        return this.getToken(testParser.FUNC_ID, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public VAR_ID(): antlr.TerminalNode[];
    public VAR_ID(i: number): antlr.TerminalNode | null;
    public VAR_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.VAR_ID);
    	} else {
    		return this.getToken(testParser.VAR_ID, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDef) {
             listener.enterDef(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDef) {
             listener.exitDef(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDef) {
            return visitor.visitDef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionIfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionIf;
    }
    public override copyFrom(ctx: FunctionIfContext): void {
        super.copyFrom(ctx);
    }
}
export class IfContext extends FunctionIfContext {
    public constructor(ctx: FunctionIfContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(testParser.IF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(testParser.ELSE, 0);
    }
    public functionIf(): FunctionIfContext | null {
        return this.getRuleContext(0, FunctionIfContext);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterIf) {
             listener.enterIf(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitIf) {
             listener.exitIf(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionForContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionFor;
    }
    public override copyFrom(ctx: FunctionForContext): void {
        super.copyFrom(ctx);
    }
}
export class ForContext extends FunctionForContext {
    public constructor(ctx: FunctionForContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(testParser.FOR, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.SEMI);
    	} else {
    		return this.getToken(testParser.SEMI, i);
    	}
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFor) {
             listener.enterFor(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFor) {
             listener.exitFor(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFor) {
            return visitor.visitFor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionWhileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionWhile;
    }
    public override copyFrom(ctx: FunctionWhileContext): void {
        super.copyFrom(ctx);
    }
}
export class WhileContext extends FunctionWhileContext {
    public constructor(ctx: FunctionWhileContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(testParser.WHILE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterWhile) {
             listener.enterWhile(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitWhile) {
             listener.exitWhile(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitWhile) {
            return visitor.visitWhile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionDo;
    }
    public override copyFrom(ctx: FunctionDoContext): void {
        super.copyFrom(ctx);
    }
}
export class DoContext extends FunctionDoContext {
    public constructor(ctx: FunctionDoContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(testParser.DO, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(testParser.WHILE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDo) {
             listener.enterDo(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDo) {
             listener.exitDo(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDo) {
            return visitor.visitDo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionReturnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionReturn;
    }
    public override copyFrom(ctx: FunctionReturnContext): void {
        super.copyFrom(ctx);
    }
}
export class ReturnContext extends FunctionReturnContext {
    public constructor(ctx: FunctionReturnContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(testParser.RETURN, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterReturn) {
             listener.enterReturn(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitReturn) {
             listener.exitReturn(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitReturn) {
            return visitor.visitReturn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionContinueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionContinue;
    }
    public override copyFrom(ctx: FunctionContinueContext): void {
        super.copyFrom(ctx);
    }
}
export class ContinueContext extends FunctionContinueContext {
    public constructor(ctx: FunctionContinueContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CONTINUE(): antlr.TerminalNode {
        return this.getToken(testParser.CONTINUE, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterContinue) {
             listener.enterContinue(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitContinue) {
             listener.exitContinue(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitContinue) {
            return visitor.visitContinue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionBreakContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionBreak;
    }
    public override copyFrom(ctx: FunctionBreakContext): void {
        super.copyFrom(ctx);
    }
}
export class BreakContext extends FunctionBreakContext {
    public constructor(ctx: FunctionBreakContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BREAK(): antlr.TerminalNode {
        return this.getToken(testParser.BREAK, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterBreak) {
             listener.enterBreak(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitBreak) {
             listener.exitBreak(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitBreak) {
            return visitor.visitBreak(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionStruct;
    }
    public override copyFrom(ctx: FunctionStructContext): void {
        super.copyFrom(ctx);
    }
}
export class StrctContext extends FunctionStructContext {
    public constructor(ctx: FunctionStructContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(testParser.STRUCT, 0)!;
    }
    public LBRANCE(): antlr.TerminalNode {
        return this.getToken(testParser.LBRANCE, 0)!;
    }
    public RBRANCE(): antlr.TerminalNode {
        return this.getToken(testParser.RBRANCE, 0)!;
    }
    public FUNC_ID(): antlr.TerminalNode[];
    public FUNC_ID(i: number): antlr.TerminalNode | null;
    public FUNC_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.FUNC_ID);
    	} else {
    		return this.getToken(testParser.FUNC_ID, i);
    	}
    }
    public VAR_ID(): antlr.TerminalNode[];
    public VAR_ID(i: number): antlr.TerminalNode | null;
    public VAR_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.VAR_ID);
    	} else {
    		return this.getToken(testParser.VAR_ID, i);
    	}
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterStrct) {
             listener.enterStrct(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitStrct) {
             listener.exitStrct(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitStrct) {
            return visitor.visitStrct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionCall;
    }
    public override copyFrom(ctx: FunctionCallContext): void {
        super.copyFrom(ctx);
    }
}
export class FcallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FUNC_ID(): antlr.TerminalNode[];
    public FUNC_ID(i: number): antlr.TerminalNode | null;
    public FUNC_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.FUNC_ID);
    	} else {
    		return this.getToken(testParser.FUNC_ID, i);
    	}
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public COLON2(): antlr.TerminalNode | null {
        return this.getToken(testParser.COLON2, 0);
    }
    public POINT(): antlr.TerminalNode | null {
        return this.getToken(testParser.POINT, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFcall) {
             listener.enterFcall(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFcall) {
             listener.exitFcall(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFcall) {
            return visitor.visitFcall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_functionModule;
    }
    public override copyFrom(ctx: FunctionModuleContext): void {
        super.copyFrom(ctx);
    }
}
export class ModuleFunctionContext extends FunctionModuleContext {
    public constructor(ctx: FunctionModuleContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LOCALF(): antlr.TerminalNode {
        return this.getToken(testParser.LOCALF, 0)!;
    }
    public FUNC_ID(): antlr.TerminalNode[];
    public FUNC_ID(i: number): antlr.TerminalNode | null;
    public FUNC_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.FUNC_ID);
    	} else {
    		return this.getToken(testParser.FUNC_ID, i);
    	}
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterModuleFunction) {
             listener.enterModuleFunction(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitModuleFunction) {
             listener.exitModuleFunction(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitModuleFunction) {
            return visitor.visitModuleFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleEndContext extends FunctionModuleContext {
    public constructor(ctx: FunctionModuleContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ENDMODULE(): antlr.TerminalNode {
        return this.getToken(testParser.ENDMODULE, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterModuleEnd) {
             listener.enterModuleEnd(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitModuleEnd) {
             listener.exitModuleEnd(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitModuleEnd) {
            return visitor.visitModuleEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleAssignContext extends FunctionModuleContext {
    public constructor(ctx: FunctionModuleContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VAR_ID(): antlr.TerminalNode[];
    public VAR_ID(i: number): antlr.TerminalNode | null;
    public VAR_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.VAR_ID);
    	} else {
    		return this.getToken(testParser.VAR_ID, i);
    	}
    }
    public EXTERN(): antlr.TerminalNode | null {
        return this.getToken(testParser.EXTERN, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(testParser.STATIC, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(testParser.GLOBAL, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(testParser.LOCAL, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterModuleAssign) {
             listener.enterModuleAssign(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitModuleAssign) {
             listener.exitModuleAssign(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitModuleAssign) {
            return visitor.visitModuleAssign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModuleStartContext extends FunctionModuleContext {
    public constructor(ctx: FunctionModuleContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODULE(): antlr.TerminalNode {
        return this.getToken(testParser.MODULE, 0)!;
    }
    public FUNC_ID(): antlr.TerminalNode {
        return this.getToken(testParser.FUNC_ID, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterModuleStart) {
             listener.enterModuleStart(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitModuleStart) {
             listener.exitModuleStart(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitModuleStart) {
            return visitor.visitModuleStart(this);
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
        return testParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class MainContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterMain) {
             listener.enterMain(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitMain) {
             listener.exitMain(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitMain) {
            return visitor.visitMain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_assignmentExpr;
    }
    public override copyFrom(ctx: AssignmentExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ListAssignContext extends AssignmentExprContext {
    public constructor(ctx: AssignmentExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(testParser.LBRACKET, 0)!;
    }
    public VAR_ID(): antlr.TerminalNode[];
    public VAR_ID(i: number): antlr.TerminalNode | null;
    public VAR_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.VAR_ID);
    	} else {
    		return this.getToken(testParser.VAR_ID, i);
    	}
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(testParser.RBRACKET, 0)!;
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.MINUSEQ, 0);
    }
    public MULTEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.MULTEQ, 0);
    }
    public DIVEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.DIVEQ, 0);
    }
    public SUREQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.SUREQ, 0);
    }
    public POWEREQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.POWEREQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(testParser.ASSIGN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterListAssign) {
             listener.enterListAssign(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitListAssign) {
             listener.exitListAssign(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitListAssign) {
            return visitor.visitListAssign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StructAssignContext extends AssignmentExprContext {
    public constructor(ctx: AssignmentExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VAR_ID(): antlr.TerminalNode[];
    public VAR_ID(i: number): antlr.TerminalNode | null;
    public VAR_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.VAR_ID);
    	} else {
    		return this.getToken(testParser.VAR_ID, i);
    	}
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.MINUSEQ, 0);
    }
    public MULTEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.MULTEQ, 0);
    }
    public DIVEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.DIVEQ, 0);
    }
    public SUREQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.SUREQ, 0);
    }
    public POWEREQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.POWEREQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(testParser.ASSIGN, 0);
    }
    public ARROW(): antlr.TerminalNode[];
    public ARROW(i: number): antlr.TerminalNode | null;
    public ARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.ARROW);
    	} else {
    		return this.getToken(testParser.ARROW, i);
    	}
    }
    public FUNC_ID(): antlr.TerminalNode[];
    public FUNC_ID(i: number): antlr.TerminalNode | null;
    public FUNC_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.FUNC_ID);
    	} else {
    		return this.getToken(testParser.FUNC_ID, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterStructAssign) {
             listener.enterStructAssign(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitStructAssign) {
             listener.exitStructAssign(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitStructAssign) {
            return visitor.visitStructAssign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NoAssignmentContext extends AssignmentExprContext {
    public constructor(ctx: AssignmentExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ternaryExpr(): TernaryExprContext {
        return this.getRuleContext(0, TernaryExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterNoAssignment) {
             listener.enterNoAssignment(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitNoAssignment) {
             listener.exitNoAssignment(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitNoAssignment) {
            return visitor.visitNoAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignContext extends AssignmentExprContext {
    public constructor(ctx: AssignmentExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VAR_ID(): antlr.TerminalNode {
        return this.getToken(testParser.VAR_ID, 0)!;
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.MINUSEQ, 0);
    }
    public MULTEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.MULTEQ, 0);
    }
    public DIVEQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.DIVEQ, 0);
    }
    public SUREQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.SUREQ, 0);
    }
    public POWEREQ(): antlr.TerminalNode | null {
        return this.getToken(testParser.POWEREQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(testParser.ASSIGN, 0);
    }
    public LBRACKET(): antlr.TerminalNode[];
    public LBRACKET(i: number): antlr.TerminalNode | null;
    public LBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.LBRACKET);
    	} else {
    		return this.getToken(testParser.LBRACKET, i);
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
    public RBRACKET(): antlr.TerminalNode[];
    public RBRACKET(i: number): antlr.TerminalNode | null;
    public RBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.RBRACKET);
    	} else {
    		return this.getToken(testParser.RBRACKET, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterAssign) {
             listener.enterAssign(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitAssign) {
             listener.exitAssign(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitAssign) {
            return visitor.visitAssign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TernaryExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_ternaryExpr;
    }
    public override copyFrom(ctx: TernaryExprContext): void {
        super.copyFrom(ctx);
    }
}
export class TernaryContext extends TernaryExprContext {
    public constructor(ctx: TernaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qeOrExpr(): QeOrExprContext {
        return this.getRuleContext(0, QeOrExprContext)!;
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(testParser.QUESTION, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(testParser.COLON, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterTernary) {
             listener.enterTernary(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitTernary) {
             listener.exitTernary(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitTernary) {
            return visitor.visitTernary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QeOrExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_qeOrExpr;
    }
    public override copyFrom(ctx: QeOrExprContext): void {
        super.copyFrom(ctx);
    }
}
export class QEorContext extends QeOrExprContext {
    public constructor(ctx: QeOrExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qeAndExpr(): QeAndExprContext[];
    public qeAndExpr(i: number): QeAndExprContext | null;
    public qeAndExpr(i?: number): QeAndExprContext[] | QeAndExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QeAndExprContext);
        }

        return this.getRuleContext(i, QeAndExprContext);
    }
    public QE_7(): antlr.TerminalNode[];
    public QE_7(i: number): antlr.TerminalNode | null;
    public QE_7(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_7);
    	} else {
    		return this.getToken(testParser.QE_7, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterQEor) {
             listener.enterQEor(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitQEor) {
             listener.exitQEor(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitQEor) {
            return visitor.visitQEor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QeAndExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_qeAndExpr;
    }
    public override copyFrom(ctx: QeAndExprContext): void {
        super.copyFrom(ctx);
    }
}
export class QEandContext extends QeAndExprContext {
    public constructor(ctx: QeAndExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qeCompareExpr(): QeCompareExprContext[];
    public qeCompareExpr(i: number): QeCompareExprContext | null;
    public qeCompareExpr(i?: number): QeCompareExprContext[] | QeCompareExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QeCompareExprContext);
        }

        return this.getRuleContext(i, QeCompareExprContext);
    }
    public QE_6(): antlr.TerminalNode[];
    public QE_6(i: number): antlr.TerminalNode | null;
    public QE_6(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_6);
    	} else {
    		return this.getToken(testParser.QE_6, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterQEand) {
             listener.enterQEand(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitQEand) {
             listener.exitQEand(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitQEand) {
            return visitor.visitQEand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QeCompareExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_qeCompareExpr;
    }
    public override copyFrom(ctx: QeCompareExprContext): void {
        super.copyFrom(ctx);
    }
}
export class QECompareContext extends QeCompareExprContext {
    public constructor(ctx: QeCompareExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public orExpr(): OrExprContext[];
    public orExpr(i: number): OrExprContext | null;
    public orExpr(i?: number): OrExprContext[] | OrExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrExprContext);
        }

        return this.getRuleContext(i, OrExprContext);
    }
    public QE_1(): antlr.TerminalNode[];
    public QE_1(i: number): antlr.TerminalNode | null;
    public QE_1(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_1);
    	} else {
    		return this.getToken(testParser.QE_1, i);
    	}
    }
    public QE_2(): antlr.TerminalNode[];
    public QE_2(i: number): antlr.TerminalNode | null;
    public QE_2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_2);
    	} else {
    		return this.getToken(testParser.QE_2, i);
    	}
    }
    public QE_3(): antlr.TerminalNode[];
    public QE_3(i: number): antlr.TerminalNode | null;
    public QE_3(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_3);
    	} else {
    		return this.getToken(testParser.QE_3, i);
    	}
    }
    public QE_4(): antlr.TerminalNode[];
    public QE_4(i: number): antlr.TerminalNode | null;
    public QE_4(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_4);
    	} else {
    		return this.getToken(testParser.QE_4, i);
    	}
    }
    public QE_5(): antlr.TerminalNode[];
    public QE_5(i: number): antlr.TerminalNode | null;
    public QE_5(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_5);
    	} else {
    		return this.getToken(testParser.QE_5, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterQECompare) {
             listener.enterQECompare(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitQECompare) {
             listener.exitQECompare(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitQECompare) {
            return visitor.visitQECompare(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_orExpr;
    }
    public override copyFrom(ctx: OrExprContext): void {
        super.copyFrom(ctx);
    }
}
export class OrContext extends OrExprContext {
    public constructor(ctx: OrExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public andExpr(): AndExprContext[];
    public andExpr(i: number): AndExprContext | null;
    public andExpr(i?: number): AndExprContext[] | AndExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AndExprContext);
        }

        return this.getRuleContext(i, AndExprContext);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.OR);
    	} else {
    		return this.getToken(testParser.OR, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterOr) {
             listener.enterOr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitOr) {
             listener.exitOr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitOr) {
            return visitor.visitOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AndExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_andExpr;
    }
    public override copyFrom(ctx: AndExprContext): void {
        super.copyFrom(ctx);
    }
}
export class AndContext extends AndExprContext {
    public constructor(ctx: AndExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public compareExpr(): CompareExprContext[];
    public compareExpr(i: number): CompareExprContext | null;
    public compareExpr(i?: number): CompareExprContext[] | CompareExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CompareExprContext);
        }

        return this.getRuleContext(i, CompareExprContext);
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.AND);
    	} else {
    		return this.getToken(testParser.AND, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterAnd) {
             listener.enterAnd(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitAnd) {
             listener.exitAnd(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitAnd) {
            return visitor.visitAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompareExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_compareExpr;
    }
    public override copyFrom(ctx: CompareExprContext): void {
        super.copyFrom(ctx);
    }
}
export class CompareContext extends CompareExprContext {
    public constructor(ctx: CompareExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public addSubExpr(): AddSubExprContext[];
    public addSubExpr(i: number): AddSubExprContext | null;
    public addSubExpr(i?: number): AddSubExprContext[] | AddSubExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AddSubExprContext);
        }

        return this.getRuleContext(i, AddSubExprContext);
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.EQ);
    	} else {
    		return this.getToken(testParser.EQ, i);
    	}
    }
    public NEQ(): antlr.TerminalNode[];
    public NEQ(i: number): antlr.TerminalNode | null;
    public NEQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.NEQ);
    	} else {
    		return this.getToken(testParser.NEQ, i);
    	}
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.LT);
    	} else {
    		return this.getToken(testParser.LT, i);
    	}
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.GT);
    	} else {
    		return this.getToken(testParser.GT, i);
    	}
    }
    public LE(): antlr.TerminalNode[];
    public LE(i: number): antlr.TerminalNode | null;
    public LE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.LE);
    	} else {
    		return this.getToken(testParser.LE, i);
    	}
    }
    public GE(): antlr.TerminalNode[];
    public GE(i: number): antlr.TerminalNode | null;
    public GE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.GE);
    	} else {
    		return this.getToken(testParser.GE, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterCompare) {
             listener.enterCompare(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitCompare) {
             listener.exitCompare(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitCompare) {
            return visitor.visitCompare(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddSubExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_addSubExpr;
    }
    public override copyFrom(ctx: AddSubExprContext): void {
        super.copyFrom(ctx);
    }
}
export class AddSubContext extends AddSubExprContext {
    public constructor(ctx: AddSubExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public mulDivSurExpr(): MulDivSurExprContext[];
    public mulDivSurExpr(i: number): MulDivSurExprContext | null;
    public mulDivSurExpr(i?: number): MulDivSurExprContext[] | MulDivSurExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MulDivSurExprContext);
        }

        return this.getRuleContext(i, MulDivSurExprContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.PLUS);
    	} else {
    		return this.getToken(testParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.MINUS);
    	} else {
    		return this.getToken(testParser.MINUS, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterAddSub) {
             listener.enterAddSub(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitAddSub) {
             listener.exitAddSub(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitAddSub) {
            return visitor.visitAddSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MulDivSurExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_mulDivSurExpr;
    }
    public override copyFrom(ctx: MulDivSurExprContext): void {
        super.copyFrom(ctx);
    }
}
export class MulDivSurContext extends MulDivSurExprContext {
    public constructor(ctx: MulDivSurExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public unaryExpr(): UnaryExprContext[];
    public unaryExpr(i: number): UnaryExprContext | null;
    public unaryExpr(i?: number): UnaryExprContext[] | UnaryExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnaryExprContext);
        }

        return this.getRuleContext(i, UnaryExprContext);
    }
    public MULT(): antlr.TerminalNode[];
    public MULT(i: number): antlr.TerminalNode | null;
    public MULT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.MULT);
    	} else {
    		return this.getToken(testParser.MULT, i);
    	}
    }
    public DIV(): antlr.TerminalNode[];
    public DIV(i: number): antlr.TerminalNode | null;
    public DIV(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.DIV);
    	} else {
    		return this.getToken(testParser.DIV, i);
    	}
    }
    public SUR(): antlr.TerminalNode[];
    public SUR(i: number): antlr.TerminalNode | null;
    public SUR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.SUR);
    	} else {
    		return this.getToken(testParser.SUR, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterMulDivSur) {
             listener.enterMulDivSur(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitMulDivSur) {
             listener.exitMulDivSur(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitMulDivSur) {
            return visitor.visitMulDivSur(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_unaryExpr;
    }
    public override copyFrom(ctx: UnaryExprContext): void {
        super.copyFrom(ctx);
    }
}
export class PreIncrementContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INC(): antlr.TerminalNode {
        return this.getToken(testParser.INC, 0)!;
    }
    public VAR_ID(): antlr.TerminalNode {
        return this.getToken(testParser.VAR_ID, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreIncrement) {
             listener.enterPreIncrement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreIncrement) {
             listener.exitPreIncrement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreIncrement) {
            return visitor.visitPreIncrement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PowExprContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public powerExpr(): PowerExprContext {
        return this.getRuleContext(0, PowerExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPowExpr) {
             listener.enterPowExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPowExpr) {
             listener.exitPowExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPowExpr) {
            return visitor.visitPowExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostFixExprContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public postfixExpr(): PostfixExprContext {
        return this.getRuleContext(0, PostfixExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPostFixExpr) {
             listener.enterPostFixExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPostFixExpr) {
             listener.exitPostFixExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPostFixExpr) {
            return visitor.visitPostFixExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryMinusContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(testParser.MINUS, 0)!;
    }
    public unaryExpr(): UnaryExprContext {
        return this.getRuleContext(0, UnaryExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterUnaryMinus) {
             listener.enterUnaryMinus(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitUnaryMinus) {
             listener.exitUnaryMinus(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitUnaryMinus) {
            return visitor.visitUnaryMinus(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExprContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(testParser.NOT, 0)!;
    }
    public unaryExpr(): UnaryExprContext {
        return this.getRuleContext(0, UnaryExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterNotExpr) {
             listener.enterNotExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitNotExpr) {
             listener.exitNotExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitNotExpr) {
            return visitor.visitNotExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreDecrementContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DEC(): antlr.TerminalNode {
        return this.getToken(testParser.DEC, 0)!;
    }
    public VAR_ID(): antlr.TerminalNode {
        return this.getToken(testParser.VAR_ID, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreDecrement) {
             listener.enterPreDecrement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreDecrement) {
             listener.exitPreDecrement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreDecrement) {
            return visitor.visitPreDecrement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PostfixExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_postfixExpr;
    }
    public override copyFrom(ctx: PostfixExprContext): void {
        super.copyFrom(ctx);
    }
}
export class PostFixContext extends PostfixExprContext {
    public constructor(ctx: PostfixExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public powerExpr(): PowerExprContext {
        return this.getRuleContext(0, PowerExprContext)!;
    }
    public INC(): antlr.TerminalNode | null {
        return this.getToken(testParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(testParser.DEC, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPostFix) {
             listener.enterPostFix(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPostFix) {
             listener.exitPostFix(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPostFix) {
            return visitor.visitPostFix(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PowerExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_powerExpr;
    }
    public override copyFrom(ctx: PowerExprContext): void {
        super.copyFrom(ctx);
    }
}
export class PowerContext extends PowerExprContext {
    public constructor(ctx: PowerExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public indexAccessExpr(): IndexAccessExprContext {
        return this.getRuleContext(0, IndexAccessExprContext)!;
    }
    public POWER(): antlr.TerminalNode | null {
        return this.getToken(testParser.POWER, 0);
    }
    public powerExpr(): PowerExprContext | null {
        return this.getRuleContext(0, PowerExprContext);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPower) {
             listener.enterPower(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPower) {
             listener.exitPower(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPower) {
            return visitor.visitPower(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IndexAccessExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_indexAccessExpr;
    }
    public override copyFrom(ctx: IndexAccessExprContext): void {
        super.copyFrom(ctx);
    }
}
export class IndexAccessContext extends IndexAccessExprContext {
    public constructor(ctx: IndexAccessExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpr(): PrimaryExprContext {
        return this.getRuleContext(0, PrimaryExprContext)!;
    }
    public LBRACKET(): antlr.TerminalNode[];
    public LBRACKET(i: number): antlr.TerminalNode | null;
    public LBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.LBRACKET);
    	} else {
    		return this.getToken(testParser.LBRACKET, i);
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
    public RBRACKET(): antlr.TerminalNode[];
    public RBRACKET(i: number): antlr.TerminalNode | null;
    public RBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.RBRACKET);
    	} else {
    		return this.getToken(testParser.RBRACKET, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterIndexAccess) {
             listener.enterIndexAccess(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitIndexAccess) {
             listener.exitIndexAccess(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitIndexAccess) {
            return visitor.visitIndexAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_primaryExpr;
    }
    public override copyFrom(ctx: PrimaryExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ListLiteralContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public list(): ListContext {
        return this.getRuleContext(0, ListContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterListLiteral) {
             listener.enterListLiteral(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitListLiteral) {
             listener.exitListLiteral(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitListLiteral) {
            return visitor.visitListLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdExprContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterIdExpr) {
             listener.enterIdExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitIdExpr) {
             listener.exitIdExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitIdExpr) {
            return visitor.visitIdExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING2(): antlr.TerminalNode {
        return this.getToken(testParser.STRING2, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CharLiteralContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING1(): antlr.TerminalNode {
        return this.getToken(testParser.STRING1, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterCharLiteral) {
             listener.enterCharLiteral(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitCharLiteral) {
             listener.exitCharLiteral(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitCharLiteral) {
            return visitor.visitCharLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RealContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public num(): NumContext {
        return this.getRuleContext(0, NumContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterReal) {
             listener.enterReal(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitReal) {
             listener.exitReal(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FCallExprContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionCall(): FunctionCallContext {
        return this.getRuleContext(0, FunctionCallContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFCallExpr) {
             listener.enterFCallExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFCallExpr) {
             listener.exitFCallExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFCallExpr) {
            return visitor.visitFCallExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecNumContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public specialnum(): SpecialnumContext {
        return this.getRuleContext(0, SpecialnumContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterSpecNum) {
             listener.enterSpecNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitSpecNum) {
             listener.exitSpecNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitSpecNum) {
            return visitor.visitSpecNum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DpLiteralContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dpoly(): DpolyContext {
        return this.getRuleContext(0, DpolyContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDpLiteral) {
             listener.enterDpLiteral(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDpLiteral) {
             listener.exitDpLiteral(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDpLiteral) {
            return visitor.visitDpLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterParen) {
             listener.enterParen(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitParen) {
             listener.exitParen(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitParen) {
            return visitor.visitParen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DpolyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_dpoly;
    }
    public override copyFrom(ctx: DpolyContext): void {
        super.copyFrom(ctx);
    }
}
export class DpContext extends DpolyContext {
    public constructor(ctx: DpolyContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LTLT(): antlr.TerminalNode {
        return this.getToken(testParser.LTLT, 0)!;
    }
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.INT);
    	} else {
    		return this.getToken(testParser.INT, i);
    	}
    }
    public GTGT(): antlr.TerminalNode {
        return this.getToken(testParser.GTGT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(testParser.COLON, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDp) {
             listener.enterDp(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDp) {
             listener.exitDp(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDp) {
            return visitor.visitDp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RationalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_rational;
    }
    public override copyFrom(ctx: RationalContext): void {
        super.copyFrom(ctx);
    }
}
export class RatContext extends RationalContext {
    public constructor(ctx: RationalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.INT);
    	} else {
    		return this.getToken(testParser.INT, i);
    	}
    }
    public DIV(): antlr.TerminalNode {
        return this.getToken(testParser.DIV, 0)!;
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.MINUS);
    	} else {
    		return this.getToken(testParser.MINUS, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterRat) {
             listener.enterRat(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitRat) {
             listener.exitRat(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitRat) {
            return visitor.visitRat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_decimal;
    }
    public override copyFrom(ctx: DecimalContext): void {
        super.copyFrom(ctx);
    }
}
export class FloatContext extends DecimalContext {
    public constructor(ctx: DecimalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(testParser.FLOAT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(testParser.INT, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(testParser.MINUS, 0);
    }
    public EXP(): antlr.TerminalNode | null {
        return this.getToken(testParser.EXP, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFloat) {
             listener.enterFloat(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFloat) {
             listener.exitFloat(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFloat) {
            return visitor.visitFloat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_num;
    }
    public override copyFrom(ctx: NumContext): void {
        super.copyFrom(ctx);
    }
}
export class DecNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public decimal(): DecimalContext {
        return this.getRuleContext(0, DecimalContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterDecNum) {
             listener.enterDecNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitDecNum) {
             listener.exitDecNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitDecNum) {
            return visitor.visitDecNum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RatNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rational(): RationalContext {
        return this.getRuleContext(0, RationalContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterRatNum) {
             listener.enterRatNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitRatNum) {
             listener.exitRatNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitRatNum) {
            return visitor.visitRatNum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_id;
    }
    public override copyFrom(ctx: IdContext): void {
        super.copyFrom(ctx);
    }
}
export class VIdContext extends IdContext {
    public constructor(ctx: IdContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VAR_ID(): antlr.TerminalNode {
        return this.getToken(testParser.VAR_ID, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterVId) {
             listener.enterVId(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitVId) {
             listener.exitVId(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitVId) {
            return visitor.visitVId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FIdContext extends IdContext {
    public constructor(ctx: IdContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FUNC_ID(): antlr.TerminalNode[];
    public FUNC_ID(i: number): antlr.TerminalNode | null;
    public FUNC_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.FUNC_ID);
    	} else {
    		return this.getToken(testParser.FUNC_ID, i);
    	}
    }
    public POINT(): antlr.TerminalNode | null {
        return this.getToken(testParser.POINT, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFId) {
             listener.enterFId(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFId) {
             listener.exitFId(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFId) {
            return visitor.visitFId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class V2IdContext extends IdContext {
    public constructor(ctx: IdContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VAR_2(): antlr.TerminalNode {
        return this.getToken(testParser.VAR_2, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterV2Id) {
             listener.enterV2Id(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitV2Id) {
             listener.exitV2Id(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitV2Id) {
            return visitor.visitV2Id(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpecialnumContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_specialnum;
    }
    public override copyFrom(ctx: SpecialnumContext): void {
        super.copyFrom(ctx);
    }
}
export class BefContext extends SpecialnumContext {
    public constructor(ctx: SpecialnumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BEFORE(): antlr.TerminalNode {
        return this.getToken(testParser.BEFORE, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterBef) {
             listener.enterBef(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitBef) {
             listener.exitBef(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitBef) {
            return visitor.visitBef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BefNContext extends SpecialnumContext {
    public constructor(ctx: SpecialnumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BEFORE_N(): antlr.TerminalNode {
        return this.getToken(testParser.BEFORE_N, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterBefN) {
             listener.enterBefN(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitBefN) {
             listener.exitBefN(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitBefN) {
            return visitor.visitBefN(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PiContext extends SpecialnumContext {
    public constructor(ctx: SpecialnumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PI(): antlr.TerminalNode {
        return this.getToken(testParser.PI, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPi) {
             listener.enterPi(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPi) {
             listener.exitPi(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPi) {
            return visitor.visitPi(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ImaContext extends SpecialnumContext {
    public constructor(ctx: SpecialnumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IMAGINARY(): antlr.TerminalNode {
        return this.getToken(testParser.IMAGINARY, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterIma) {
             listener.enterIma(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitIma) {
             listener.exitIma(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitIma) {
            return visitor.visitIma(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NapContext extends SpecialnumContext {
    public constructor(ctx: SpecialnumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NAPIER(): antlr.TerminalNode {
        return this.getToken(testParser.NAPIER, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterNap) {
             listener.enterNap(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitNap) {
             listener.exitNap(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitNap) {
            return visitor.visitNap(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_list;
    }
    public override copyFrom(ctx: ListContext): void {
        super.copyFrom(ctx);
    }
}
export class ListExprContext extends ListContext {
    public constructor(ctx: ListContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(testParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(testParser.RBRACKET, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.COMMA);
    	} else {
    		return this.getToken(testParser.COMMA, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterListExpr) {
             listener.enterListExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitListExpr) {
             listener.exitListExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitListExpr) {
            return visitor.visitListExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_block;
    }
    public override copyFrom(ctx: BlockContext): void {
        super.copyFrom(ctx);
    }
}
export class Sentence1Context extends BlockContext {
    public constructor(ctx: BlockContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterSentence1) {
             listener.enterSentence1(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitSentence1) {
             listener.exitSentence1(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitSentence1) {
            return visitor.visitSentence1(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SentenceContext extends BlockContext {
    public constructor(ctx: BlockContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LBRANCE(): antlr.TerminalNode {
        return this.getToken(testParser.LBRANCE, 0)!;
    }
    public RBRANCE(): antlr.TerminalNode {
        return this.getToken(testParser.RBRANCE, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterSentence) {
             listener.enterSentence(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitSentence) {
             listener.exitSentence(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitSentence) {
            return visitor.visitSentence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
