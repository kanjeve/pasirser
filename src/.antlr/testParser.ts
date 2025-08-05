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
    public static readonly RULE_ternaryExpr = 14;
    public static readonly RULE_qeOrExpr = 15;
    public static readonly RULE_qeAndExpr = 16;
    public static readonly RULE_qeCompareExpr = 17;
    public static readonly RULE_orExpr = 18;
    public static readonly RULE_andExpr = 19;
    public static readonly RULE_compareExpr = 20;
    public static readonly RULE_addSubExpr = 21;
    public static readonly RULE_mulDivSurExpr = 22;
    public static readonly RULE_unaryExpr = 23;
    public static readonly RULE_powerExpr = 24;
    public static readonly RULE_indexAccessExpr = 25;
    public static readonly RULE_primaryExpr = 26;
    public static readonly RULE_dpoly = 27;
    public static readonly RULE_rational = 28;
    public static readonly RULE_decimal = 29;
    public static readonly RULE_num = 30;
    public static readonly RULE_id = 31;
    public static readonly RULE_specialnum = 32;
    public static readonly RULE_list = 33;
    public static readonly RULE_block = 34;
    public static readonly RULE_assignment = 35;

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
        "expr", "ternaryExpr", "qeOrExpr", "qeAndExpr", "qeCompareExpr", 
        "orExpr", "andExpr", "compareExpr", "addSubExpr", "mulDivSurExpr", 
        "unaryExpr", "powerExpr", "indexAccessExpr", "primaryExpr", "dpoly", 
        "rational", "decimal", "num", "id", "specialnum", "list", "block", 
        "assignment",
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
            this.state = 75;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4018207409) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 51199) !== 0)) {
                {
                {
                this.state = 72;
                this.statement();
                }
                }
                this.state = 77;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 78;
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
            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                localContext = new ExprStatementContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 80;
                this.expr();
                this.state = 81;
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
            case 2:
                localContext = new EmptyLineStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
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
            case 3:
                localContext = new AssignStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 84;
                this.assignment();
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
            case 4:
                localContext = new DefinitionStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 87;
                this.functionDefinition();
                }
                break;
            case 5:
                localContext = new IfStatementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 88;
                this.functionIf();
                }
                break;
            case 6:
                localContext = new ForStatementContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 89;
                this.functionFor();
                }
                break;
            case 7:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 90;
                this.functionWhile();
                }
                break;
            case 8:
                localContext = new DoStatementContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 91;
                this.functionDo();
                }
                break;
            case 9:
                localContext = new ReturnStatementContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 92;
                this.functionReturn();
                }
                break;
            case 10:
                localContext = new BreakStatementContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 93;
                this.functionBreak();
                }
                break;
            case 11:
                localContext = new ContinueStatementContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 94;
                this.functionContinue();
                }
                break;
            case 12:
                localContext = new StructStatementContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 95;
                this.functionStruct();
                }
                break;
            case 13:
                localContext = new ModuleStatementContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 96;
                this.functionModule();
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
    public functionDefinition(): FunctionDefinitionContext {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 4, testParser.RULE_functionDefinition);
        let _la: number;
        try {
            localContext = new DefContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 99;
            this.match(testParser.DEF);
            this.state = 100;
            this.match(testParser.FUNC_ID);
            this.state = 101;
            this.match(testParser.LPAREN);
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 75) {
                {
                this.state = 102;
                this.match(testParser.VAR_ID);
                this.state = 107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 103;
                    this.match(testParser.COMMA);
                    this.state = 104;
                    this.match(testParser.VAR_ID);
                    }
                    }
                    this.state = 109;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 112;
            this.match(testParser.RPAREN);
            this.state = 113;
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
            this.state = 115;
            this.match(testParser.IF);
            this.state = 116;
            this.match(testParser.LPAREN);
            this.state = 117;
            this.expr();
            this.state = 118;
            this.match(testParser.RPAREN);
            this.state = 119;
            this.block();
            this.state = 125;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                {
                this.state = 120;
                this.match(testParser.ELSE);
                this.state = 123;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                case 1:
                    {
                    this.state = 121;
                    this.block();
                    }
                    break;
                case 2:
                    {
                    this.state = 122;
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
            this.state = 127;
            this.match(testParser.FOR);
            this.state = 128;
            this.match(testParser.LPAREN);
            this.state = 137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33 || _la === 75) {
                {
                this.state = 129;
                this.assignment();
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 130;
                    this.match(testParser.COMMA);
                    this.state = 131;
                    this.assignment();
                    }
                    }
                    this.state = 136;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 139;
            this.match(testParser.SEMI);
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 140;
                this.expr();
                this.state = 145;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 141;
                    this.match(testParser.COMMA);
                    this.state = 142;
                    this.expr();
                    }
                    }
                    this.state = 147;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 150;
            this.match(testParser.SEMI);
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 151;
                this.expr();
                this.state = 156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 152;
                    this.match(testParser.COMMA);
                    this.state = 153;
                    this.expr();
                    }
                    }
                    this.state = 158;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 161;
            this.match(testParser.RPAREN);
            this.state = 162;
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
            this.state = 164;
            this.match(testParser.WHILE);
            this.state = 165;
            this.match(testParser.LPAREN);
            this.state = 174;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 166;
                this.expr();
                this.state = 171;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 167;
                    this.match(testParser.COMMA);
                    this.state = 168;
                    this.expr();
                    }
                    }
                    this.state = 173;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 176;
            this.match(testParser.RPAREN);
            this.state = 177;
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
            this.state = 179;
            this.match(testParser.DO);
            this.state = 180;
            this.block();
            this.state = 181;
            this.match(testParser.WHILE);
            this.state = 182;
            this.match(testParser.LPAREN);
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 183;
                this.expr();
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 184;
                    this.match(testParser.COMMA);
                    this.state = 185;
                    this.expr();
                    }
                    }
                    this.state = 190;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 193;
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
            this.state = 195;
            this.match(testParser.RETURN);
            this.state = 197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 196;
                this.expr();
                }
            }

            this.state = 199;
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
            this.state = 201;
            this.match(testParser.CONTINUE);
            this.state = 202;
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
            this.state = 204;
            this.match(testParser.BREAK);
            this.state = 205;
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
            this.state = 207;
            this.match(testParser.STRUCT);
            this.state = 208;
            _la = this.tokenStream.LA(1);
            if(!(_la === 74 || _la === 75)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 209;
            this.match(testParser.LBRANCE);
            this.state = 210;
            _la = this.tokenStream.LA(1);
            if(!(_la === 74 || _la === 75)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 39) {
                {
                {
                this.state = 211;
                this.match(testParser.COMMA);
                this.state = 212;
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
                this.state = 217;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 218;
            this.match(testParser.RBRANCE);
            this.state = 219;
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
            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 221;
                this.match(testParser.COLON2);
                }
            }

            this.state = 224;
            this.match(testParser.FUNC_ID);
            this.state = 227;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 43) {
                {
                this.state = 225;
                this.match(testParser.POINT);
                this.state = 226;
                this.match(testParser.FUNC_ID);
                }
            }

            this.state = 229;
            this.match(testParser.LPAREN);
            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 230;
                this.expr();
                this.state = 235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 231;
                    this.match(testParser.COMMA);
                    this.state = 232;
                    this.expr();
                    }
                    }
                    this.state = 237;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 240;
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
            this.state = 267;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.EXTERN:
            case testParser.STATIC:
            case testParser.GLOBAL:
            case testParser.LOCAL:
                localContext = new ModuleAssignContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 242;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 15) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 243;
                this.match(testParser.VAR_ID);
                this.state = 248;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 244;
                    this.match(testParser.COMMA);
                    this.state = 245;
                    this.match(testParser.VAR_ID);
                    }
                    }
                    this.state = 250;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 251;
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
                this.state = 252;
                this.match(testParser.LOCALF);
                this.state = 253;
                this.match(testParser.FUNC_ID);
                this.state = 258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 254;
                    this.match(testParser.COMMA);
                    this.state = 255;
                    this.match(testParser.FUNC_ID);
                    }
                    }
                    this.state = 260;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 261;
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
                this.state = 262;
                this.match(testParser.MODULE);
                this.state = 263;
                this.match(testParser.FUNC_ID);
                this.state = 264;
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
                this.state = 265;
                this.match(testParser.ENDMODULE);
                this.state = 266;
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
            this.state = 269;
            this.ternaryExpr();
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
        this.enterRule(localContext, 28, testParser.RULE_ternaryExpr);
        let _la: number;
        try {
            localContext = new TernaryContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.qeOrExpr();
            this.state = 277;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 272;
                this.match(testParser.QUESTION);
                this.state = 273;
                this.expr();
                this.state = 274;
                this.match(testParser.COLON);
                this.state = 275;
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
        this.enterRule(localContext, 30, testParser.RULE_qeOrExpr);
        let _la: number;
        try {
            localContext = new QEorContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            this.qeAndExpr();
            this.state = 284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 55) {
                {
                {
                this.state = 280;
                this.match(testParser.QE_7);
                this.state = 281;
                this.qeAndExpr();
                }
                }
                this.state = 286;
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
        this.enterRule(localContext, 32, testParser.RULE_qeAndExpr);
        let _la: number;
        try {
            localContext = new QEandContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 287;
            this.qeCompareExpr();
            this.state = 292;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 54) {
                {
                {
                this.state = 288;
                this.match(testParser.QE_6);
                this.state = 289;
                this.qeCompareExpr();
                }
                }
                this.state = 294;
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
        this.enterRule(localContext, 34, testParser.RULE_qeCompareExpr);
        let _la: number;
        try {
            localContext = new QECompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 295;
            this.orExpr();
            this.state = 300;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 31) !== 0)) {
                {
                {
                this.state = 296;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 31) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 297;
                this.orExpr();
                }
                }
                this.state = 302;
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
        this.enterRule(localContext, 36, testParser.RULE_orExpr);
        let _la: number;
        try {
            localContext = new OrContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.andExpr();
            this.state = 308;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 304;
                this.match(testParser.OR);
                this.state = 305;
                this.andExpr();
                }
                }
                this.state = 310;
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
        this.enterRule(localContext, 38, testParser.RULE_andExpr);
        let _la: number;
        try {
            localContext = new AndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.compareExpr();
            this.state = 316;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19) {
                {
                {
                this.state = 312;
                this.match(testParser.AND);
                this.state = 313;
                this.compareExpr();
                }
                }
                this.state = 318;
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
        this.enterRule(localContext, 40, testParser.RULE_compareExpr);
        let _la: number;
        try {
            localContext = new CompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 319;
            this.addSubExpr();
            this.state = 324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                {
                {
                this.state = 320;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 321;
                this.addSubExpr();
                }
                }
                this.state = 326;
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
        this.enterRule(localContext, 42, testParser.RULE_addSubExpr);
        let _la: number;
        try {
            localContext = new AddSubContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 327;
            this.mulDivSurExpr();
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 22 || _la === 23) {
                {
                {
                this.state = 328;
                _la = this.tokenStream.LA(1);
                if(!(_la === 22 || _la === 23)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 329;
                this.mulDivSurExpr();
                }
                }
                this.state = 334;
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
        this.enterRule(localContext, 44, testParser.RULE_mulDivSurExpr);
        let _la: number;
        try {
            localContext = new MulDivSurContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 335;
            this.unaryExpr();
            this.state = 340;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                {
                {
                this.state = 336;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 337;
                this.unaryExpr();
                }
                }
                this.state = 342;
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
        this.enterRule(localContext, 46, testParser.RULE_unaryExpr);
        try {
            this.state = 348;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                localContext = new UnaryMinusContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 343;
                this.match(testParser.MINUS);
                this.state = 344;
                this.unaryExpr();
                }
                break;
            case 2:
                localContext = new NotExprContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 345;
                this.match(testParser.NOT);
                this.state = 346;
                this.unaryExpr();
                }
                break;
            case 3:
                localContext = new PowerExprRuleContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 347;
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
    public powerExpr(): PowerExprContext {
        let localContext = new PowerExprContext(this.context, this.state);
        this.enterRule(localContext, 48, testParser.RULE_powerExpr);
        let _la: number;
        try {
            localContext = new PowerContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            this.indexAccessExpr();
            this.state = 353;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 351;
                this.match(testParser.POWER);
                this.state = 352;
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
        this.enterRule(localContext, 50, testParser.RULE_indexAccessExpr);
        let _la: number;
        try {
            localContext = new IndexAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 355;
            this.primaryExpr();
            this.state = 362;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 33) {
                {
                {
                this.state = 356;
                this.match(testParser.LBRACKET);
                this.state = 357;
                this.expr();
                this.state = 358;
                this.match(testParser.RBRACKET);
                }
                }
                this.state = 364;
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
        this.enterRule(localContext, 52, testParser.RULE_primaryExpr);
        try {
            this.state = 377;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                localContext = new RealContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 365;
                this.num();
                }
                break;
            case 2:
                localContext = new IdExprContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 366;
                this.id();
                }
                break;
            case 3:
                localContext = new FCallExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 367;
                this.functionCall();
                }
                break;
            case 4:
                localContext = new ParenContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 368;
                this.match(testParser.LPAREN);
                this.state = 369;
                this.expr();
                this.state = 370;
                this.match(testParser.RPAREN);
                }
                break;
            case 5:
                localContext = new SpecNumContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 372;
                this.specialnum();
                }
                break;
            case 6:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 373;
                this.match(testParser.STRING2);
                }
                break;
            case 7:
                localContext = new CharLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 374;
                this.match(testParser.STRING1);
                }
                break;
            case 8:
                localContext = new ListLiteralContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 375;
                this.list();
                }
                break;
            case 9:
                localContext = new DpLiteralContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 376;
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
        this.enterRule(localContext, 54, testParser.RULE_dpoly);
        let _la: number;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.match(testParser.LTLT);
            this.state = 380;
            this.match(testParser.INT);
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 39) {
                {
                {
                this.state = 381;
                this.match(testParser.COMMA);
                this.state = 382;
                this.match(testParser.INT);
                }
                }
                this.state = 387;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 388;
                this.match(testParser.COLON);
                this.state = 389;
                this.match(testParser.INT);
                }
            }

            this.state = 392;
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
        this.enterRule(localContext, 56, testParser.RULE_rational);
        let _la: number;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 395;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 394;
                this.match(testParser.MINUS);
                }
            }

            this.state = 397;
            this.match(testParser.INT);
            this.state = 398;
            this.match(testParser.DIV);
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 399;
                this.match(testParser.MINUS);
                }
            }

            this.state = 402;
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
        this.enterRule(localContext, 58, testParser.RULE_decimal);
        let _la: number;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 405;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 404;
                this.match(testParser.MINUS);
                }
            }

            this.state = 407;
            _la = this.tokenStream.LA(1);
            if(!(_la === 40 || _la === 42)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 409;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 408;
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
        this.enterRule(localContext, 60, testParser.RULE_num);
        try {
            this.state = 413;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                localContext = new RatNumContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 411;
                this.rational();
                }
                break;
            case 2:
                localContext = new DecNumContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 412;
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
        this.enterRule(localContext, 62, testParser.RULE_id);
        let _la: number;
        try {
            this.state = 422;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.VAR_ID:
                localContext = new VIdContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 415;
                this.match(testParser.VAR_ID);
                }
                break;
            case testParser.FUNC_ID:
                localContext = new FIdContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 416;
                this.match(testParser.FUNC_ID);
                this.state = 419;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 43) {
                    {
                    this.state = 417;
                    this.match(testParser.POINT);
                    this.state = 418;
                    this.match(testParser.FUNC_ID);
                    }
                }

                }
                break;
            case testParser.VAR_2:
                localContext = new V2IdContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 421;
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
        this.enterRule(localContext, 64, testParser.RULE_specialnum);
        try {
            this.state = 429;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.IMAGINARY:
                localContext = new ImaContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 424;
                this.match(testParser.IMAGINARY);
                }
                break;
            case testParser.PI:
                localContext = new PiContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 425;
                this.match(testParser.PI);
                }
                break;
            case testParser.NAPIER:
                localContext = new NapContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 426;
                this.match(testParser.NAPIER);
                }
                break;
            case testParser.BEFORE:
                localContext = new BefContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 427;
                this.match(testParser.BEFORE);
                }
                break;
            case testParser.BEFORE_N:
                localContext = new BefNContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 428;
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
        this.enterRule(localContext, 66, testParser.RULE_list);
        let _la: number;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.match(testParser.LBRACKET);
            this.state = 440;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 64129) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 199) !== 0)) {
                {
                this.state = 432;
                this.expr();
                this.state = 437;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 433;
                    this.match(testParser.COMMA);
                    this.state = 434;
                    this.expr();
                    }
                    }
                    this.state = 439;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 442;
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
        this.enterRule(localContext, 68, testParser.RULE_block);
        let _la: number;
        try {
            this.state = 453;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.LBRANCE:
                localContext = new SentenceContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 444;
                this.match(testParser.LBRANCE);
                this.state = 448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 547356682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4018207409) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 51199) !== 0)) {
                    {
                    {
                    this.state = 445;
                    this.statement();
                    }
                    }
                    this.state = 450;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 451;
                this.match(testParser.RBRANCE);
                }
                break;
            case testParser.LTLT:
            case testParser.COLON2:
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
                this.state = 452;
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
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 70, testParser.RULE_assignment);
        let _la: number;
        try {
            this.state = 488;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                localContext = new AssignContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 455;
                this.match(testParser.VAR_ID);
                this.state = 462;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 33) {
                    {
                    {
                    this.state = 456;
                    this.match(testParser.LBRACKET);
                    this.state = 457;
                    this.expr();
                    this.state = 458;
                    this.match(testParser.RBRACKET);
                    }
                    }
                    this.state = 464;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 465;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 466;
                this.expr();
                }
                break;
            case 2:
                localContext = new StructAssignContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 467;
                this.match(testParser.VAR_ID);
                this.state = 470;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 468;
                    this.match(testParser.ARROW);
                    this.state = 469;
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
                    this.state = 472;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 12);
                this.state = 474;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 475;
                this.expr();
                }
                break;
            case 3:
                localContext = new ListAssignContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 476;
                this.match(testParser.LBRACKET);
                this.state = 477;
                this.match(testParser.VAR_ID);
                this.state = 482;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 39) {
                    {
                    {
                    this.state = 478;
                    this.match(testParser.COMMA);
                    this.state = 479;
                    this.match(testParser.VAR_ID);
                    }
                    }
                    this.state = 484;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 485;
                this.match(testParser.RBRACKET);
                this.state = 486;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 487;
                this.expr();
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

    public static readonly _serializedATN: number[] = [
        4,1,80,491,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,1,0,5,0,74,8,0,10,0,12,0,77,9,0,1,0,1,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,3,1,98,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,106,8,2,10,2,12,2,109,
        9,2,3,2,111,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
        124,8,3,3,3,126,8,3,1,4,1,4,1,4,1,4,1,4,5,4,133,8,4,10,4,12,4,136,
        9,4,3,4,138,8,4,1,4,1,4,1,4,1,4,5,4,144,8,4,10,4,12,4,147,9,4,3,
        4,149,8,4,1,4,1,4,1,4,1,4,5,4,155,8,4,10,4,12,4,158,9,4,3,4,160,
        8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,170,8,5,10,5,12,5,173,9,
        5,3,5,175,8,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,187,8,
        6,10,6,12,6,190,9,6,3,6,192,8,6,1,6,1,6,1,7,1,7,3,7,198,8,7,1,7,
        1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,214,
        8,10,10,10,12,10,217,9,10,1,10,1,10,1,10,1,11,3,11,223,8,11,1,11,
        1,11,1,11,3,11,228,8,11,1,11,1,11,1,11,1,11,5,11,234,8,11,10,11,
        12,11,237,9,11,3,11,239,8,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,
        247,8,12,10,12,12,12,250,9,12,1,12,1,12,1,12,1,12,1,12,5,12,257,
        8,12,10,12,12,12,260,9,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,268,
        8,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,278,8,14,1,15,
        1,15,1,15,5,15,283,8,15,10,15,12,15,286,9,15,1,16,1,16,1,16,5,16,
        291,8,16,10,16,12,16,294,9,16,1,17,1,17,1,17,5,17,299,8,17,10,17,
        12,17,302,9,17,1,18,1,18,1,18,5,18,307,8,18,10,18,12,18,310,9,18,
        1,19,1,19,1,19,5,19,315,8,19,10,19,12,19,318,9,19,1,20,1,20,1,20,
        5,20,323,8,20,10,20,12,20,326,9,20,1,21,1,21,1,21,5,21,331,8,21,
        10,21,12,21,334,9,21,1,22,1,22,1,22,5,22,339,8,22,10,22,12,22,342,
        9,22,1,23,1,23,1,23,1,23,1,23,3,23,349,8,23,1,24,1,24,1,24,3,24,
        354,8,24,1,25,1,25,1,25,1,25,1,25,5,25,361,8,25,10,25,12,25,364,
        9,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
        3,26,378,8,26,1,27,1,27,1,27,1,27,5,27,384,8,27,10,27,12,27,387,
        9,27,1,27,1,27,3,27,391,8,27,1,27,1,27,1,28,3,28,396,8,28,1,28,1,
        28,1,28,3,28,401,8,28,1,28,1,28,1,29,3,29,406,8,29,1,29,1,29,3,29,
        410,8,29,1,30,1,30,3,30,414,8,30,1,31,1,31,1,31,1,31,3,31,420,8,
        31,1,31,3,31,423,8,31,1,32,1,32,1,32,1,32,1,32,3,32,430,8,32,1,33,
        1,33,1,33,1,33,5,33,436,8,33,10,33,12,33,439,9,33,3,33,441,8,33,
        1,33,1,33,1,34,1,34,5,34,447,8,34,10,34,12,34,450,9,34,1,34,1,34,
        3,34,454,8,34,1,35,1,35,1,35,1,35,1,35,5,35,461,8,35,10,35,12,35,
        464,9,35,1,35,1,35,1,35,1,35,1,35,4,35,471,8,35,11,35,12,35,472,
        1,35,1,35,1,35,1,35,1,35,1,35,5,35,481,8,35,10,35,12,35,484,9,35,
        1,35,1,35,1,35,3,35,489,8,35,1,35,0,0,36,0,2,4,6,8,10,12,14,16,18,
        20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
        64,66,68,70,0,9,1,0,37,38,1,0,74,75,1,0,68,71,1,0,49,53,1,0,13,18,
        1,0,22,23,1,0,24,26,2,0,40,40,42,42,2,0,6,11,28,28,536,0,75,1,0,
        0,0,2,97,1,0,0,0,4,99,1,0,0,0,6,115,1,0,0,0,8,127,1,0,0,0,10,164,
        1,0,0,0,12,179,1,0,0,0,14,195,1,0,0,0,16,201,1,0,0,0,18,204,1,0,
        0,0,20,207,1,0,0,0,22,222,1,0,0,0,24,267,1,0,0,0,26,269,1,0,0,0,
        28,271,1,0,0,0,30,279,1,0,0,0,32,287,1,0,0,0,34,295,1,0,0,0,36,303,
        1,0,0,0,38,311,1,0,0,0,40,319,1,0,0,0,42,327,1,0,0,0,44,335,1,0,
        0,0,46,348,1,0,0,0,48,350,1,0,0,0,50,355,1,0,0,0,52,377,1,0,0,0,
        54,379,1,0,0,0,56,395,1,0,0,0,58,405,1,0,0,0,60,413,1,0,0,0,62,422,
        1,0,0,0,64,429,1,0,0,0,66,431,1,0,0,0,68,453,1,0,0,0,70,488,1,0,
        0,0,72,74,3,2,1,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,
        1,0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,78,79,5,0,0,1,79,1,1,0,0,0,80,
        81,3,26,13,0,81,82,7,0,0,0,82,98,1,0,0,0,83,98,7,0,0,0,84,85,3,70,
        35,0,85,86,7,0,0,0,86,98,1,0,0,0,87,98,3,4,2,0,88,98,3,6,3,0,89,
        98,3,8,4,0,90,98,3,10,5,0,91,98,3,12,6,0,92,98,3,14,7,0,93,98,3,
        18,9,0,94,98,3,16,8,0,95,98,3,20,10,0,96,98,3,24,12,0,97,80,1,0,
        0,0,97,83,1,0,0,0,97,84,1,0,0,0,97,87,1,0,0,0,97,88,1,0,0,0,97,89,
        1,0,0,0,97,90,1,0,0,0,97,91,1,0,0,0,97,92,1,0,0,0,97,93,1,0,0,0,
        97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,0,0,98,3,1,0,0,0,99,100,5,
        56,0,0,100,101,5,74,0,0,101,110,5,29,0,0,102,107,5,75,0,0,103,104,
        5,39,0,0,104,106,5,75,0,0,105,103,1,0,0,0,106,109,1,0,0,0,107,105,
        1,0,0,0,107,108,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,110,102,
        1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,113,5,30,0,0,113,114,
        3,68,34,0,114,5,1,0,0,0,115,116,5,57,0,0,116,117,5,29,0,0,117,118,
        3,26,13,0,118,119,5,30,0,0,119,125,3,68,34,0,120,123,5,61,0,0,121,
        124,3,68,34,0,122,124,3,6,3,0,123,121,1,0,0,0,123,122,1,0,0,0,124,
        126,1,0,0,0,125,120,1,0,0,0,125,126,1,0,0,0,126,7,1,0,0,0,127,128,
        5,58,0,0,128,137,5,29,0,0,129,134,3,70,35,0,130,131,5,39,0,0,131,
        133,3,70,35,0,132,130,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,
        135,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,137,129,1,0,0,0,137,
        138,1,0,0,0,138,139,1,0,0,0,139,148,5,37,0,0,140,145,3,26,13,0,141,
        142,5,39,0,0,142,144,3,26,13,0,143,141,1,0,0,0,144,147,1,0,0,0,145,
        143,1,0,0,0,145,146,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,148,
        140,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,159,5,37,0,0,151,
        156,3,26,13,0,152,153,5,39,0,0,153,155,3,26,13,0,154,152,1,0,0,0,
        155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,160,1,0,0,0,
        158,156,1,0,0,0,159,151,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,
        161,162,5,30,0,0,162,163,3,68,34,0,163,9,1,0,0,0,164,165,5,59,0,
        0,165,174,5,29,0,0,166,171,3,26,13,0,167,168,5,39,0,0,168,170,3,
        26,13,0,169,167,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,
        1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,174,166,1,0,0,0,174,175,
        1,0,0,0,175,176,1,0,0,0,176,177,5,30,0,0,177,178,3,68,34,0,178,11,
        1,0,0,0,179,180,5,60,0,0,180,181,3,68,34,0,181,182,5,59,0,0,182,
        191,5,29,0,0,183,188,3,26,13,0,184,185,5,39,0,0,185,187,3,26,13,
        0,186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,
        0,189,192,1,0,0,0,190,188,1,0,0,0,191,183,1,0,0,0,191,192,1,0,0,
        0,192,193,1,0,0,0,193,194,5,30,0,0,194,13,1,0,0,0,195,197,5,62,0,
        0,196,198,3,26,13,0,197,196,1,0,0,0,197,198,1,0,0,0,198,199,1,0,
        0,0,199,200,7,0,0,0,200,15,1,0,0,0,201,202,5,63,0,0,202,203,7,0,
        0,0,203,17,1,0,0,0,204,205,5,64,0,0,205,206,7,0,0,0,206,19,1,0,0,
        0,207,208,5,65,0,0,208,209,7,1,0,0,209,210,5,31,0,0,210,215,7,1,
        0,0,211,212,5,39,0,0,212,214,7,1,0,0,213,211,1,0,0,0,214,217,1,0,
        0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,215,1,0,
        0,0,218,219,5,32,0,0,219,220,7,0,0,0,220,21,1,0,0,0,221,223,5,3,
        0,0,222,221,1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,227,5,74,
        0,0,225,226,5,43,0,0,226,228,5,74,0,0,227,225,1,0,0,0,227,228,1,
        0,0,0,228,229,1,0,0,0,229,238,5,29,0,0,230,235,3,26,13,0,231,232,
        5,39,0,0,232,234,3,26,13,0,233,231,1,0,0,0,234,237,1,0,0,0,235,233,
        1,0,0,0,235,236,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,238,230,
        1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,5,30,0,0,241,23,
        1,0,0,0,242,243,7,2,0,0,243,248,5,75,0,0,244,245,5,39,0,0,245,247,
        5,75,0,0,246,244,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,
        1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,268,7,0,0,0,252,253,
        5,72,0,0,253,258,5,74,0,0,254,255,5,39,0,0,255,257,5,74,0,0,256,
        254,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,
        261,1,0,0,0,260,258,1,0,0,0,261,268,7,0,0,0,262,263,5,66,0,0,263,
        264,5,74,0,0,264,268,7,0,0,0,265,266,5,67,0,0,266,268,7,0,0,0,267,
        242,1,0,0,0,267,252,1,0,0,0,267,262,1,0,0,0,267,265,1,0,0,0,268,
        25,1,0,0,0,269,270,3,28,14,0,270,27,1,0,0,0,271,277,3,30,15,0,272,
        273,5,35,0,0,273,274,3,26,13,0,274,275,5,36,0,0,275,276,3,26,13,
        0,276,278,1,0,0,0,277,272,1,0,0,0,277,278,1,0,0,0,278,29,1,0,0,0,
        279,284,3,32,16,0,280,281,5,55,0,0,281,283,3,32,16,0,282,280,1,0,
        0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,31,1,0,0,
        0,286,284,1,0,0,0,287,292,3,34,17,0,288,289,5,54,0,0,289,291,3,34,
        17,0,290,288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,0,
        0,0,293,33,1,0,0,0,294,292,1,0,0,0,295,300,3,36,18,0,296,297,7,3,
        0,0,297,299,3,36,18,0,298,296,1,0,0,0,299,302,1,0,0,0,300,298,1,
        0,0,0,300,301,1,0,0,0,301,35,1,0,0,0,302,300,1,0,0,0,303,308,3,38,
        19,0,304,305,5,20,0,0,305,307,3,38,19,0,306,304,1,0,0,0,307,310,
        1,0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,37,1,0,0,0,310,308,1,
        0,0,0,311,316,3,40,20,0,312,313,5,19,0,0,313,315,3,40,20,0,314,312,
        1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,39,1,
        0,0,0,318,316,1,0,0,0,319,324,3,42,21,0,320,321,7,4,0,0,321,323,
        3,42,21,0,322,320,1,0,0,0,323,326,1,0,0,0,324,322,1,0,0,0,324,325,
        1,0,0,0,325,41,1,0,0,0,326,324,1,0,0,0,327,332,3,44,22,0,328,329,
        7,5,0,0,329,331,3,44,22,0,330,328,1,0,0,0,331,334,1,0,0,0,332,330,
        1,0,0,0,332,333,1,0,0,0,333,43,1,0,0,0,334,332,1,0,0,0,335,340,3,
        46,23,0,336,337,7,6,0,0,337,339,3,46,23,0,338,336,1,0,0,0,339,342,
        1,0,0,0,340,338,1,0,0,0,340,341,1,0,0,0,341,45,1,0,0,0,342,340,1,
        0,0,0,343,344,5,23,0,0,344,349,3,46,23,0,345,346,5,21,0,0,346,349,
        3,46,23,0,347,349,3,48,24,0,348,343,1,0,0,0,348,345,1,0,0,0,348,
        347,1,0,0,0,349,47,1,0,0,0,350,353,3,50,25,0,351,352,5,27,0,0,352,
        354,3,48,24,0,353,351,1,0,0,0,353,354,1,0,0,0,354,49,1,0,0,0,355,
        362,3,52,26,0,356,357,5,33,0,0,357,358,3,26,13,0,358,359,5,34,0,
        0,359,361,1,0,0,0,360,356,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,
        0,362,363,1,0,0,0,363,51,1,0,0,0,364,362,1,0,0,0,365,378,3,60,30,
        0,366,378,3,62,31,0,367,378,3,22,11,0,368,369,5,29,0,0,369,370,3,
        26,13,0,370,371,5,30,0,0,371,378,1,0,0,0,372,378,3,64,32,0,373,378,
        5,79,0,0,374,378,5,80,0,0,375,378,3,66,33,0,376,378,3,54,27,0,377,
        365,1,0,0,0,377,366,1,0,0,0,377,367,1,0,0,0,377,368,1,0,0,0,377,
        372,1,0,0,0,377,373,1,0,0,0,377,374,1,0,0,0,377,375,1,0,0,0,377,
        376,1,0,0,0,378,53,1,0,0,0,379,380,5,1,0,0,380,385,5,42,0,0,381,
        382,5,39,0,0,382,384,5,42,0,0,383,381,1,0,0,0,384,387,1,0,0,0,385,
        383,1,0,0,0,385,386,1,0,0,0,386,390,1,0,0,0,387,385,1,0,0,0,388,
        389,5,36,0,0,389,391,5,42,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,
        392,1,0,0,0,392,393,5,2,0,0,393,55,1,0,0,0,394,396,5,23,0,0,395,
        394,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,398,5,42,0,0,398,
        400,5,25,0,0,399,401,5,23,0,0,400,399,1,0,0,0,400,401,1,0,0,0,401,
        402,1,0,0,0,402,403,5,42,0,0,403,57,1,0,0,0,404,406,5,23,0,0,405,
        404,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,409,7,7,0,0,408,
        410,5,41,0,0,409,408,1,0,0,0,409,410,1,0,0,0,410,59,1,0,0,0,411,
        414,3,56,28,0,412,414,3,58,29,0,413,411,1,0,0,0,413,412,1,0,0,0,
        414,61,1,0,0,0,415,423,5,75,0,0,416,419,5,74,0,0,417,418,5,43,0,
        0,418,420,5,74,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,423,1,0,0,
        0,421,423,5,73,0,0,422,415,1,0,0,0,422,416,1,0,0,0,422,421,1,0,0,
        0,423,63,1,0,0,0,424,430,5,44,0,0,425,430,5,45,0,0,426,430,5,46,
        0,0,427,430,5,47,0,0,428,430,5,48,0,0,429,424,1,0,0,0,429,425,1,
        0,0,0,429,426,1,0,0,0,429,427,1,0,0,0,429,428,1,0,0,0,430,65,1,0,
        0,0,431,440,5,33,0,0,432,437,3,26,13,0,433,434,5,39,0,0,434,436,
        3,26,13,0,435,433,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,437,438,
        1,0,0,0,438,441,1,0,0,0,439,437,1,0,0,0,440,432,1,0,0,0,440,441,
        1,0,0,0,441,442,1,0,0,0,442,443,5,34,0,0,443,67,1,0,0,0,444,448,
        5,31,0,0,445,447,3,2,1,0,446,445,1,0,0,0,447,450,1,0,0,0,448,446,
        1,0,0,0,448,449,1,0,0,0,449,451,1,0,0,0,450,448,1,0,0,0,451,454,
        5,32,0,0,452,454,3,2,1,0,453,444,1,0,0,0,453,452,1,0,0,0,454,69,
        1,0,0,0,455,462,5,75,0,0,456,457,5,33,0,0,457,458,3,26,13,0,458,
        459,5,34,0,0,459,461,1,0,0,0,460,456,1,0,0,0,461,464,1,0,0,0,462,
        460,1,0,0,0,462,463,1,0,0,0,463,465,1,0,0,0,464,462,1,0,0,0,465,
        466,7,8,0,0,466,489,3,26,13,0,467,470,5,75,0,0,468,469,5,12,0,0,
        469,471,7,1,0,0,470,468,1,0,0,0,471,472,1,0,0,0,472,470,1,0,0,0,
        472,473,1,0,0,0,473,474,1,0,0,0,474,475,7,8,0,0,475,489,3,26,13,
        0,476,477,5,33,0,0,477,482,5,75,0,0,478,479,5,39,0,0,479,481,5,75,
        0,0,480,478,1,0,0,0,481,484,1,0,0,0,482,480,1,0,0,0,482,483,1,0,
        0,0,483,485,1,0,0,0,484,482,1,0,0,0,485,486,5,34,0,0,486,487,7,8,
        0,0,487,489,3,26,13,0,488,455,1,0,0,0,488,467,1,0,0,0,488,476,1,
        0,0,0,489,71,1,0,0,0,56,75,97,107,110,123,125,134,137,145,148,156,
        159,171,174,188,191,197,215,222,227,235,238,248,258,267,277,284,
        292,300,308,316,324,332,340,348,353,362,377,385,390,395,400,405,
        409,413,419,422,429,437,440,448,453,462,472,482,488
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
export class AssignStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public assignment(): AssignmentContext {
        return this.getRuleContext(0, AssignmentContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterAssignStatement) {
             listener.enterAssignStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitAssignStatement) {
             listener.exitAssignStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitAssignStatement) {
            return visitor.visitAssignStatement(this);
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
    public assignment(): AssignmentContext[];
    public assignment(i: number): AssignmentContext | null;
    public assignment(i?: number): AssignmentContext[] | AssignmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentContext);
        }

        return this.getRuleContext(i, AssignmentContext);
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
    public ternaryExpr(): TernaryExprContext {
        return this.getRuleContext(0, TernaryExprContext)!;
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
export class PowerExprRuleContext extends UnaryExprContext {
    public constructor(ctx: UnaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public powerExpr(): PowerExprContext {
        return this.getRuleContext(0, PowerExprContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPowerExprRule) {
             listener.enterPowerExprRule(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPowerExprRule) {
             listener.exitPowerExprRule(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPowerExprRule) {
            return visitor.visitPowerExprRule(this);
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


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_assignment;
    }
    public override copyFrom(ctx: AssignmentContext): void {
        super.copyFrom(ctx);
    }
}
export class ListAssignContext extends AssignmentContext {
    public constructor(ctx: AssignmentContext) {
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
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class StructAssignContext extends AssignmentContext {
    public constructor(ctx: AssignmentContext) {
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
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
export class AssignContext extends AssignmentContext {
    public constructor(ctx: AssignmentContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VAR_ID(): antlr.TerminalNode {
        return this.getToken(testParser.VAR_ID, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
