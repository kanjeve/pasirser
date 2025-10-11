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
    public static readonly BACK = 29;
    public static readonly MID = 30;
    public static readonly LPAREN = 31;
    public static readonly RPAREN = 32;
    public static readonly LBRANCE = 33;
    public static readonly RBRANCE = 34;
    public static readonly LBRACKET = 35;
    public static readonly RBRACKET = 36;
    public static readonly QUESTION = 37;
    public static readonly COLON = 38;
    public static readonly SEMI = 39;
    public static readonly DOLLAR = 40;
    public static readonly COMMA = 41;
    public static readonly HEX = 42;
    public static readonly BIT = 43;
    public static readonly FLOAT = 44;
    public static readonly EXP = 45;
    public static readonly INT = 46;
    public static readonly POINT = 47;
    public static readonly IMAGINARY = 48;
    public static readonly AEGEN = 49;
    public static readonly BEFORE = 50;
    public static readonly BEFORE_N = 51;
    public static readonly QE_1 = 52;
    public static readonly QE_2 = 53;
    public static readonly QE_3 = 54;
    public static readonly QE_4 = 55;
    public static readonly QE_5 = 56;
    public static readonly QE_6 = 57;
    public static readonly QE_7 = 58;
    public static readonly QE_8 = 59;
    public static readonly QE_9 = 60;
    public static readonly QE_10 = 61;
    public static readonly QE_11 = 62;
    public static readonly QE_12 = 63;
    public static readonly DEF = 64;
    public static readonly IF = 65;
    public static readonly FOR = 66;
    public static readonly WHILE = 67;
    public static readonly DO = 68;
    public static readonly ELSE = 69;
    public static readonly RETURN = 70;
    public static readonly CONTINUE = 71;
    public static readonly BREAK = 72;
    public static readonly STRUCT = 73;
    public static readonly MODULE = 74;
    public static readonly ENDMODULE = 75;
    public static readonly EXTERN = 76;
    public static readonly STATIC = 77;
    public static readonly GLOBAL = 78;
    public static readonly LOCAL = 79;
    public static readonly LOCALF = 80;
    public static readonly ATFUNC = 81;
    public static readonly VAR_2 = 82;
    public static readonly ID = 83;
    public static readonly NEWLINE = 84;
    public static readonly WS = 85;
    public static readonly COMMENT = 86;
    public static readonly LCOMMENT = 87;
    public static readonly PCOMMENT = 88;
    public static readonly PIFDEF = 89;
    public static readonly PIFNDEF = 90;
    public static readonly PIF = 91;
    public static readonly PELSE = 92;
    public static readonly PELIF = 93;
    public static readonly PENDIF = 94;
    public static readonly PINCLUDE = 95;
    public static readonly PDEFINE = 96;
    public static readonly CHARPLUS = 97;
    public static readonly CHAR = 98;
    public static readonly STRING = 99;
    public static readonly NOSTRING = 100;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_prechar = 2;
    public static readonly RULE_preprocessor = 3;
    public static readonly RULE_functionDefinition = 4;
    public static readonly RULE_functionIf = 5;
    public static readonly RULE_functionFor = 6;
    public static readonly RULE_functionWhile = 7;
    public static readonly RULE_functionDo = 8;
    public static readonly RULE_functionReturn = 9;
    public static readonly RULE_functionContinue = 10;
    public static readonly RULE_functionBreak = 11;
    public static readonly RULE_functionStruct = 12;
    public static readonly RULE_functionModule = 13;
    public static readonly RULE_expr = 14;
    public static readonly RULE_assignmentExpr = 15;
    public static readonly RULE_ternaryExpr = 16;
    public static readonly RULE_quoteExpr = 17;
    public static readonly RULE_qeNotExpr = 18;
    public static readonly RULE_qeOrExpr = 19;
    public static readonly RULE_qeAndExpr = 20;
    public static readonly RULE_qeCompareExpr = 21;
    public static readonly RULE_orExpr = 22;
    public static readonly RULE_andExpr = 23;
    public static readonly RULE_compareExpr = 24;
    public static readonly RULE_addSubExpr = 25;
    public static readonly RULE_mulDivSurExpr = 26;
    public static readonly RULE_unaryExpr = 27;
    public static readonly RULE_powerExpr = 28;
    public static readonly RULE_factExpr = 29;
    public static readonly RULE_prefixExpr = 30;
    public static readonly RULE_postfixExpr = 31;
    public static readonly RULE_indexAccessExpr = 32;
    public static readonly RULE_primaryExpr = 33;
    public static readonly RULE_dpoly = 34;
    public static readonly RULE_rational = 35;
    public static readonly RULE_decimal = 36;
    public static readonly RULE_num = 37;
    public static readonly RULE_id = 38;
    public static readonly RULE_indeterminate = 39;
    public static readonly RULE_list = 40;
    public static readonly RULE_block = 41;
    public static readonly RULE_exprlist = 42;
    public static readonly RULE_terminator = 43;
    public static readonly RULE_systemPath = 44;
    public static readonly RULE_optionPair = 45;

    public static readonly literalNames = [
        null, "'<<'", "'>>'", "'::'", "'++'", "'--'", "'+='", "'-='", "'*='", 
        "'/='", "'%='", "'^='", "'->'", "'=='", "'!='", "'<='", "'>='", 
        "'<'", "'>'", "'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'", 
        "'%'", "'^'", "'='", "'`'", "'|'", "'('", "')'", "'{'", "'}'", "'['", 
        "']'", "'?'", "':'", "';'", "'$'", "','", null, null, null, null, 
        null, "'.'", "'@i'", "'@s'", "'@@'", null, "'@>='", "'@<='", "'@>'", 
        "'@<'", "'@=='", "'@='", "'@!='", "'@!'", "'@&&'", "'@&'", "'@||'", 
        "'@|'", "'def'", "'if'", "'for'", "'while'", "'do'", "'else'", "'return'", 
        "'continue'", "'break'", "'struct'", "'module'", "'endmodule'", 
        "'extern'", "'static'", "'global'", "'local'", "'localf'", null, 
        "'@'", null, "'\\n'", null, null, null, null, "'#ifdef'", "'#ifndef'", 
        "'#if'", "'#else'", "'#elif'", "'#endif'", "'#include'", "'#define'", 
        "'##'", "'#'"
    ];

    public static readonly symbolicNames = [
        null, "LTLT", "GTGT", "COLON2", "INC", "DEC", "PLUSEQ", "MINUSEQ", 
        "MULTEQ", "DIVEQ", "SUREQ", "POWEREQ", "ARROW", "EQ", "NEQ", "LE", 
        "GE", "LT", "GT", "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", "DIV", 
        "SUR", "POWER", "ASSIGN", "BACK", "MID", "LPAREN", "RPAREN", "LBRANCE", 
        "RBRANCE", "LBRACKET", "RBRACKET", "QUESTION", "COLON", "SEMI", 
        "DOLLAR", "COMMA", "HEX", "BIT", "FLOAT", "EXP", "INT", "POINT", 
        "IMAGINARY", "AEGEN", "BEFORE", "BEFORE_N", "QE_1", "QE_2", "QE_3", 
        "QE_4", "QE_5", "QE_6", "QE_7", "QE_8", "QE_9", "QE_10", "QE_11", 
        "QE_12", "DEF", "IF", "FOR", "WHILE", "DO", "ELSE", "RETURN", "CONTINUE", 
        "BREAK", "STRUCT", "MODULE", "ENDMODULE", "EXTERN", "STATIC", "GLOBAL", 
        "LOCAL", "LOCALF", "ATFUNC", "VAR_2", "ID", "NEWLINE", "WS", "COMMENT", 
        "LCOMMENT", "PCOMMENT", "PIFDEF", "PIFNDEF", "PIF", "PELSE", "PELIF", 
        "PENDIF", "PINCLUDE", "PDEFINE", "CHARPLUS", "CHAR", "STRING", "NOSTRING"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "prechar", "preprocessor", "functionDefinition", 
        "functionIf", "functionFor", "functionWhile", "functionDo", "functionReturn", 
        "functionContinue", "functionBreak", "functionStruct", "functionModule", 
        "expr", "assignmentExpr", "ternaryExpr", "quoteExpr", "qeNotExpr", 
        "qeOrExpr", "qeAndExpr", "qeCompareExpr", "orExpr", "andExpr", "compareExpr", 
        "addSubExpr", "mulDivSurExpr", "unaryExpr", "powerExpr", "factExpr", 
        "prefixExpr", "postfixExpr", "indexAccessExpr", "primaryExpr", "dpoly", 
        "rational", "decimal", "num", "id", "indeterminate", "list", "block", 
        "exprlist", "terminator", "systemPath", "optionPair",
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
            this.state = 95;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3758222257) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982281211) !== 0) || _la === 99 || _la === 100) {
                {
                {
                this.state = 92;
                this.statement();
                }
                }
                this.state = 97;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 98;
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
        try {
            this.state = 115;
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
            case testParser.AEGEN:
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
                this.state = 100;
                this.expr();
                this.state = 101;
                this.terminator();
                }
                break;
            case testParser.SEMI:
            case testParser.DOLLAR:
                localContext = new EmptyLineStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 103;
                this.terminator();
                }
                break;
            case testParser.DEF:
                localContext = new DefinitionStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 104;
                this.functionDefinition();
                }
                break;
            case testParser.IF:
                localContext = new IfStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 105;
                this.functionIf();
                }
                break;
            case testParser.FOR:
                localContext = new ForStatementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 106;
                this.functionFor();
                }
                break;
            case testParser.WHILE:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 107;
                this.functionWhile();
                }
                break;
            case testParser.DO:
                localContext = new DoStatementContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 108;
                this.functionDo();
                }
                break;
            case testParser.RETURN:
                localContext = new ReturnStatementContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 109;
                this.functionReturn();
                }
                break;
            case testParser.BREAK:
                localContext = new BreakStatementContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 110;
                this.functionBreak();
                }
                break;
            case testParser.CONTINUE:
                localContext = new ContinueStatementContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 111;
                this.functionContinue();
                }
                break;
            case testParser.STRUCT:
                localContext = new StructStatementContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 112;
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
                this.state = 113;
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
                this.state = 114;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prechar(): PrecharContext {
        let localContext = new PrecharContext(this.context, this.state);
        this.enterRule(localContext, 4, testParser.RULE_prechar);
        try {
            this.state = 122;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.CHAR:
                localContext = new PreChrContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 117;
                this.match(testParser.CHAR);
                this.state = 118;
                this.match(testParser.ID);
                }
                break;
            case testParser.ID:
                localContext = new PreChrPlusContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 119;
                this.match(testParser.ID);
                this.state = 120;
                this.match(testParser.CHARPLUS);
                this.state = 121;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public preprocessor(): PreprocessorContext {
        let localContext = new PreprocessorContext(this.context, this.state);
        this.enterRule(localContext, 6, testParser.RULE_preprocessor);
        let _la: number;
        try {
            this.state = 178;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.PDEFINE:
                localContext = new PDefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 124;
                this.match(testParser.PDEFINE);
                this.state = 125;
                (localContext as PDefContext)._name = this.match(testParser.ID);
                this.state = 138;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 126;
                    this.match(testParser.LPAREN);
                    this.state = 135;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 83) {
                        {
                        this.state = 127;
                        (localContext as PDefContext)._ID = this.match(testParser.ID);
                        (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                        this.state = 132;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                            {
                            this.state = 128;
                            this.match(testParser.COMMA);
                            this.state = 129;
                            (localContext as PDefContext)._ID = this.match(testParser.ID);
                            (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                            }
                            }
                            this.state = 134;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 137;
                    this.match(testParser.RPAREN);
                    }
                    break;
                }
                this.state = 140;
                (localContext as PDefContext)._body = this.expr();
                }
                break;
            case testParser.PIFDEF:
            case testParser.PIFNDEF:
            case testParser.PIF:
                localContext = new PIfContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 141;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 142;
                this.expr();
                this.state = 146;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3758222257) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982281211) !== 0) || _la === 99 || _la === 100) {
                    {
                    {
                    this.state = 143;
                    this.statement();
                    }
                    }
                    this.state = 148;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 93) {
                    {
                    {
                    this.state = 149;
                    this.match(testParser.PELIF);
                    this.state = 150;
                    this.expr();
                    this.state = 154;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3758222257) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982281211) !== 0) || _la === 99 || _la === 100) {
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
                    }
                    }
                    this.state = 161;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 92) {
                    {
                    this.state = 162;
                    this.match(testParser.PELSE);
                    this.state = 166;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3758222257) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982281211) !== 0) || _la === 99 || _la === 100) {
                        {
                        {
                        this.state = 163;
                        this.statement();
                        }
                        }
                        this.state = 168;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 171;
                this.match(testParser.PENDIF);
                }
                break;
            case testParser.PINCLUDE:
                localContext = new PIncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 173;
                this.match(testParser.PINCLUDE);
                this.state = 176;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case testParser.LT:
                    {
                    this.state = 174;
                    (localContext as PIncContext)._path_sys = this.systemPath();
                    }
                    break;
                case testParser.STRING:
                    {
                    this.state = 175;
                    (localContext as PIncContext)._path_loc = this.match(testParser.STRING);
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
        this.enterRule(localContext, 8, testParser.RULE_functionDefinition);
        let _la: number;
        try {
            localContext = new DefContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 180;
            this.match(testParser.DEF);
            this.state = 181;
            (localContext as DefContext)._name = this.indeterminate();
            this.state = 182;
            this.match(testParser.LPAREN);
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 183;
                (localContext as DefContext)._ID = this.match(testParser.ID);
                (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 184;
                    this.match(testParser.COMMA);
                    this.state = 185;
                    (localContext as DefContext)._ID = this.match(testParser.ID);
                    (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
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
            this.state = 194;
            (localContext as DefContext)._body = this.block();
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
        this.enterRule(localContext, 10, testParser.RULE_functionIf);
        try {
            localContext = new IfContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 196;
            this.match(testParser.IF);
            this.state = 197;
            this.match(testParser.LPAREN);
            this.state = 198;
            (localContext as IfContext)._condition = this.expr();
            this.state = 199;
            this.match(testParser.RPAREN);
            this.state = 200;
            (localContext as IfContext)._thenBlock = this.block();
            this.state = 203;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 201;
                this.match(testParser.ELSE);
                this.state = 202;
                (localContext as IfContext)._elseBlock = this.block();
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
        this.enterRule(localContext, 12, testParser.RULE_functionFor);
        let _la: number;
        try {
            localContext = new ForContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.match(testParser.FOR);
            this.state = 206;
            this.match(testParser.LPAREN);
            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 207;
                (localContext as ForContext)._init = this.exprlist();
                }
            }

            this.state = 210;
            this.match(testParser.SEMI);
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 211;
                (localContext as ForContext)._cond = this.exprlist();
                }
            }

            this.state = 214;
            this.match(testParser.SEMI);
            this.state = 216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 215;
                (localContext as ForContext)._update = this.exprlist();
                }
            }

            this.state = 218;
            this.match(testParser.RPAREN);
            this.state = 219;
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
        this.enterRule(localContext, 14, testParser.RULE_functionWhile);
        let _la: number;
        try {
            localContext = new WhileContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 221;
            this.match(testParser.WHILE);
            this.state = 222;
            this.match(testParser.LPAREN);
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 223;
                this.exprlist();
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
        this.enterRule(localContext, 16, testParser.RULE_functionDo);
        let _la: number;
        try {
            localContext = new DoContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.match(testParser.DO);
            this.state = 230;
            this.block();
            this.state = 231;
            this.match(testParser.WHILE);
            this.state = 232;
            this.match(testParser.LPAREN);
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 233;
                this.exprlist();
                }
            }

            this.state = 236;
            this.match(testParser.RPAREN);
            this.state = 237;
            this.match(testParser.SEMI);
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
        this.enterRule(localContext, 18, testParser.RULE_functionReturn);
        let _la: number;
        try {
            localContext = new ReturnContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 239;
            this.match(testParser.RETURN);
            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 240;
                this.expr();
                }
            }

            this.state = 243;
            this.terminator();
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
        this.enterRule(localContext, 20, testParser.RULE_functionContinue);
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.match(testParser.CONTINUE);
            this.state = 246;
            this.terminator();
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
        this.enterRule(localContext, 22, testParser.RULE_functionBreak);
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.match(testParser.BREAK);
            this.state = 249;
            this.terminator();
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
        this.enterRule(localContext, 24, testParser.RULE_functionStruct);
        let _la: number;
        try {
            localContext = new StructContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 251;
            this.match(testParser.STRUCT);
            this.state = 252;
            (localContext as StructContext)._name = this.indeterminate();
            this.state = 253;
            this.match(testParser.LBRANCE);
            this.state = 254;
            (localContext as StructContext)._indeterminate = this.indeterminate();
            (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 255;
                this.match(testParser.COMMA);
                this.state = 256;
                (localContext as StructContext)._indeterminate = this.indeterminate();
                (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
                }
                }
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 262;
            this.match(testParser.RBRANCE);
            this.state = 263;
            this.terminator();
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
        this.enterRule(localContext, 26, testParser.RULE_functionModule);
        let _la: number;
        try {
            this.state = 282;
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
                this.state = 265;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 31) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 266;
                this.indeterminate();
                this.state = 271;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 267;
                    this.match(testParser.COMMA);
                    this.state = 268;
                    this.indeterminate();
                    }
                    }
                    this.state = 273;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 274;
                this.terminator();
                }
                break;
            case testParser.MODULE:
                localContext = new ModuleStartContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 276;
                this.match(testParser.MODULE);
                this.state = 277;
                this.indeterminate();
                this.state = 278;
                this.terminator();
                }
                break;
            case testParser.ENDMODULE:
                localContext = new ModuleEndContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 280;
                this.match(testParser.ENDMODULE);
                this.state = 281;
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
        this.enterRule(localContext, 28, testParser.RULE_expr);
        try {
            localContext = new MainContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 284;
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
        this.enterRule(localContext, 30, testParser.RULE_assignmentExpr);
        let _la: number;
        try {
            this.state = 321;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                localContext = new NoAssignmentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 286;
                this.ternaryExpr();
                }
                break;
            case 2:
                localContext = new AssignContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 287;
                (localContext as AssignContext)._left = this.match(testParser.ID);
                this.state = 294;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 35) {
                    {
                    {
                    this.state = 288;
                    this.match(testParser.LBRACKET);
                    this.state = 289;
                    (localContext as AssignContext)._expr = this.expr();
                    (localContext as AssignContext)._indices.push((localContext as AssignContext)._expr!);
                    this.state = 290;
                    this.match(testParser.RBRACKET);
                    }
                    }
                    this.state = 296;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 297;
                (localContext as AssignContext)._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                    (localContext as AssignContext)._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 298;
                (localContext as AssignContext)._right = this.assignmentExpr();
                }
                break;
            case 3:
                localContext = new StructAssignContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 299;
                this.match(testParser.ID);
                this.state = 302;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 300;
                    this.match(testParser.ARROW);
                    this.state = 301;
                    this.indeterminate();
                    }
                    }
                    this.state = 304;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 12);
                this.state = 306;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 307;
                this.assignmentExpr();
                }
                break;
            case 4:
                localContext = new ListAssignContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 309;
                this.match(testParser.LBRACKET);
                this.state = 310;
                this.match(testParser.ID);
                this.state = 315;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 311;
                    this.match(testParser.COMMA);
                    this.state = 312;
                    this.match(testParser.ID);
                    }
                    }
                    this.state = 317;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 318;
                this.match(testParser.RBRACKET);
                this.state = 319;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 320;
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
        this.enterRule(localContext, 32, testParser.RULE_ternaryExpr);
        let _la: number;
        try {
            localContext = new TernaryContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 323;
            (localContext as TernaryContext)._condition = this.quoteExpr();
            this.state = 329;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 324;
                this.match(testParser.QUESTION);
                this.state = 325;
                (localContext as TernaryContext)._consequence = this.expr();
                this.state = 326;
                this.match(testParser.COLON);
                this.state = 327;
                (localContext as TernaryContext)._alternative = this.expr();
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
    public quoteExpr(): QuoteExprContext {
        let localContext = new QuoteExprContext(this.context, this.state);
        this.enterRule(localContext, 34, testParser.RULE_quoteExpr);
        let _la: number;
        try {
            localContext = new QuoteContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 331;
                this.match(testParser.BACK);
                }
            }

            this.state = 334;
            this.qeNotExpr();
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
    public qeNotExpr(): QeNotExprContext {
        let localContext = new QeNotExprContext(this.context, this.state);
        this.enterRule(localContext, 36, testParser.RULE_qeNotExpr);
        let _la: number;
        try {
            localContext = new QEnotContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 336;
            this.qeOrExpr();
            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 59) {
                {
                {
                this.state = 337;
                this.match(testParser.QE_8);
                this.state = 338;
                this.qeOrExpr();
                }
                }
                this.state = 343;
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
    public qeOrExpr(): QeOrExprContext {
        let localContext = new QeOrExprContext(this.context, this.state);
        this.enterRule(localContext, 38, testParser.RULE_qeOrExpr);
        let _la: number;
        try {
            localContext = new QEorContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 344;
            this.qeAndExpr();
            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62 || _la === 63) {
                {
                {
                this.state = 345;
                _la = this.tokenStream.LA(1);
                if(!(_la === 62 || _la === 63)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 346;
                this.qeAndExpr();
                }
                }
                this.state = 351;
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
        this.enterRule(localContext, 40, testParser.RULE_qeAndExpr);
        let _la: number;
        try {
            localContext = new QEandContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 352;
            this.qeCompareExpr();
            this.state = 357;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 60 || _la === 61) {
                {
                {
                this.state = 353;
                _la = this.tokenStream.LA(1);
                if(!(_la === 60 || _la === 61)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 354;
                this.qeCompareExpr();
                }
                }
                this.state = 359;
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
        this.enterRule(localContext, 42, testParser.RULE_qeCompareExpr);
        let _la: number;
        try {
            localContext = new QECompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 360;
            this.orExpr();
            this.state = 365;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 127) !== 0)) {
                {
                {
                this.state = 361;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 127) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 362;
                this.orExpr();
                }
                }
                this.state = 367;
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
        this.enterRule(localContext, 44, testParser.RULE_orExpr);
        let _la: number;
        try {
            localContext = new OrContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.andExpr();
            this.state = 373;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 369;
                this.match(testParser.OR);
                this.state = 370;
                this.andExpr();
                }
                }
                this.state = 375;
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
        this.enterRule(localContext, 46, testParser.RULE_andExpr);
        let _la: number;
        try {
            localContext = new AndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 376;
            this.compareExpr();
            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19) {
                {
                {
                this.state = 377;
                this.match(testParser.AND);
                this.state = 378;
                this.compareExpr();
                }
                }
                this.state = 383;
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
        this.enterRule(localContext, 48, testParser.RULE_compareExpr);
        let _la: number;
        try {
            localContext = new CompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 384;
            this.addSubExpr();
            this.state = 389;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                {
                {
                this.state = 385;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 386;
                this.addSubExpr();
                }
                }
                this.state = 391;
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
        this.enterRule(localContext, 50, testParser.RULE_addSubExpr);
        let _la: number;
        try {
            let alternative: number;
            localContext = new AddSubContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 392;
            this.mulDivSurExpr();
            this.state = 397;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 393;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 22 || _la === 23)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 394;
                    this.mulDivSurExpr();
                    }
                    }
                }
                this.state = 399;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
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
        this.enterRule(localContext, 52, testParser.RULE_mulDivSurExpr);
        let _la: number;
        try {
            localContext = new MulDivSurContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
            this.unaryExpr();
            this.state = 405;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                {
                {
                this.state = 401;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 402;
                this.unaryExpr();
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
    public unaryExpr(): UnaryExprContext {
        let localContext = new UnaryExprContext(this.context, this.state);
        this.enterRule(localContext, 54, testParser.RULE_unaryExpr);
        try {
            this.state = 413;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                localContext = new UnaryMinusContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 408;
                this.match(testParser.MINUS);
                this.state = 409;
                this.unaryExpr();
                }
                break;
            case 2:
                localContext = new NotExprContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 410;
                this.match(testParser.NOT);
                this.state = 411;
                this.unaryExpr();
                }
                break;
            case 3:
                localContext = new PowExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 412;
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
        this.enterRule(localContext, 56, testParser.RULE_powerExpr);
        let _la: number;
        try {
            localContext = new PowExContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 415;
            (localContext as PowExContext)._base = this.factExpr();
            this.state = 418;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 416;
                this.match(testParser.POWER);
                this.state = 417;
                (localContext as PowExContext)._exponent = this.unaryExpr();
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
    public factExpr(): FactExprContext {
        let localContext = new FactExprContext(this.context, this.state);
        this.enterRule(localContext, 58, testParser.RULE_factExpr);
        try {
            localContext = new FactrialExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 423;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 420;
                this.postfixExpr();
                }
                break;
            case 2:
                {
                this.state = 421;
                this.prefixExpr();
                }
                break;
            case 3:
                {
                this.state = 422;
                this.indexAccessExpr();
                }
                break;
            }
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                {
                this.state = 425;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prefixExpr(): PrefixExprContext {
        let localContext = new PrefixExprContext(this.context, this.state);
        this.enterRule(localContext, 60, testParser.RULE_prefixExpr);
        let _la: number;
        try {
            localContext = new PreFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            _la = this.tokenStream.LA(1);
            if(!(_la === 4 || _la === 5)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 429;
            this.indexAccessExpr();
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
        this.enterRule(localContext, 62, testParser.RULE_postfixExpr);
        let _la: number;
        try {
            localContext = new PostFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.indexAccessExpr();
            this.state = 432;
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
    public indexAccessExpr(): IndexAccessExprContext {
        let localContext = new IndexAccessExprContext(this.context, this.state);
        this.enterRule(localContext, 64, testParser.RULE_indexAccessExpr);
        try {
            let alternative: number;
            localContext = new IndexAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 434;
            this.primaryExpr();
            this.state = 441;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 435;
                    this.match(testParser.LBRACKET);
                    this.state = 436;
                    this.expr();
                    this.state = 437;
                    this.match(testParser.RBRACKET);
                    }
                    }
                }
                this.state = 443;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
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
        this.enterRule(localContext, 66, testParser.RULE_primaryExpr);
        let _la: number;
        try {
            this.state = 497;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                localContext = new IndExprContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 444;
                this.indeterminate();
                }
                break;
            case 2:
                localContext = new RealContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 445;
                this.num();
                }
                break;
            case 3:
                localContext = new IdExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 446;
                this.id();
                }
                break;
            case 4:
                localContext = new FCallExprContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                    this.state = 447;
                    (localContext as FCallExprContext)._is_global = this.match(testParser.COLON2);
                    }
                }

                this.state = 450;
                (localContext as FCallExprContext)._name = this.indeterminate();
                this.state = 451;
                this.match(testParser.LPAREN);
                this.state = 453;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                    {
                    this.state = 452;
                    (localContext as FCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 464;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 455;
                    this.match(testParser.MID);
                    this.state = 456;
                    (localContext as FCallExprContext)._optionPair = this.optionPair();
                    (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                    this.state = 461;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 457;
                        this.match(testParser.COMMA);
                        this.state = 458;
                        (localContext as FCallExprContext)._optionPair = this.optionPair();
                        (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 463;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 466;
                this.match(testParser.RPAREN);
                }
                break;
            case 5:
                localContext = new FunctorCallExprContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 468;
                this.match(testParser.LPAREN);
                this.state = 469;
                this.match(testParser.MULT);
                this.state = 470;
                (localContext as FunctorCallExprContext)._callee = this.expr();
                this.state = 471;
                this.match(testParser.RPAREN);
                this.state = 472;
                this.match(testParser.LPAREN);
                this.state = 474;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                    {
                    this.state = 473;
                    (localContext as FunctorCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 476;
                    this.match(testParser.MID);
                    this.state = 477;
                    (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                    (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                    this.state = 482;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 478;
                        this.match(testParser.COMMA);
                        this.state = 479;
                        (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                        (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 484;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 487;
                this.match(testParser.RPAREN);
                }
                break;
            case 6:
                localContext = new ParenContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 489;
                this.match(testParser.LPAREN);
                this.state = 490;
                this.expr();
                this.state = 491;
                this.match(testParser.RPAREN);
                }
                break;
            case 7:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 493;
                this.match(testParser.STRING);
                }
                break;
            case 8:
                localContext = new ListLiteralContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 494;
                this.list();
                }
                break;
            case 9:
                localContext = new DpLiteralContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 495;
                this.dpoly();
                }
                break;
            case 10:
                localContext = new PreChrExprContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 496;
                this.prechar();
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
        this.enterRule(localContext, 68, testParser.RULE_dpoly);
        let _la: number;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 499;
            this.match(testParser.LTLT);
            this.state = 500;
            this.match(testParser.INT);
            this.state = 505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 501;
                this.match(testParser.COMMA);
                this.state = 502;
                this.match(testParser.INT);
                }
                }
                this.state = 507;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 510;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 508;
                this.match(testParser.COLON);
                this.state = 509;
                this.match(testParser.INT);
                }
            }

            this.state = 512;
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
        this.enterRule(localContext, 70, testParser.RULE_rational);
        let _la: number;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 515;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 514;
                this.match(testParser.MINUS);
                }
            }

            this.state = 517;
            this.match(testParser.INT);
            this.state = 518;
            this.match(testParser.DIV);
            this.state = 520;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 519;
                this.match(testParser.MINUS);
                }
            }

            this.state = 522;
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
        this.enterRule(localContext, 72, testParser.RULE_decimal);
        let _la: number;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 525;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 524;
                this.match(testParser.MINUS);
                }
            }

            this.state = 527;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 528;
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
        this.enterRule(localContext, 74, testParser.RULE_num);
        try {
            this.state = 537;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                localContext = new HexNumContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 531;
                this.match(testParser.HEX);
                }
                break;
            case 2:
                localContext = new BitNumContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 532;
                this.match(testParser.BIT);
                }
                break;
            case 3:
                localContext = new RatNumContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 533;
                this.rational();
                }
                break;
            case 4:
                localContext = new DecNumContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 534;
                this.decimal();
                }
                break;
            case 5:
                localContext = new ImaNumContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 535;
                this.match(testParser.IMAGINARY);
                }
                break;
            case 6:
                localContext = new GenNumContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 536;
                this.match(testParser.AEGEN);
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
        this.enterRule(localContext, 76, testParser.RULE_id);
        try {
            this.state = 542;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.BEFORE:
                localContext = new BefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 539;
                this.match(testParser.BEFORE);
                }
                break;
            case testParser.BEFORE_N:
                localContext = new BefNContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 540;
                this.match(testParser.BEFORE_N);
                }
                break;
            case testParser.VAR_2:
                localContext = new V2IdContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 541;
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
    public indeterminate(): IndeterminateContext {
        let localContext = new IndeterminateContext(this.context, this.state);
        this.enterRule(localContext, 78, testParser.RULE_indeterminate);
        try {
            this.state = 547;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.ID:
                localContext = new FuncContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 544;
                this.match(testParser.ID);
                }
                break;
            case testParser.ATFUNC:
                localContext = new AtFuncContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 545;
                this.match(testParser.ATFUNC);
                }
                break;
            case testParser.NOSTRING:
                localContext = new ChFuncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 546;
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
        this.enterRule(localContext, 80, testParser.RULE_list);
        let _la: number;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.match(testParser.LBRACKET);
            this.state = 551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 125825) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 917511) !== 0)) {
                {
                this.state = 550;
                this.exprlist();
                }
            }

            this.state = 553;
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
        this.enterRule(localContext, 82, testParser.RULE_block);
        let _la: number;
        try {
            this.state = 564;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.LBRANCE:
                localContext = new SentenceContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 555;
                this.match(testParser.LBRANCE);
                this.state = 559;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3758222257) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982281211) !== 0) || _la === 99 || _la === 100) {
                    {
                    {
                    this.state = 556;
                    this.statement();
                    }
                    }
                    this.state = 561;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 562;
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
            case testParser.AEGEN:
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
                this.state = 563;
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
    public exprlist(): ExprlistContext {
        let localContext = new ExprlistContext(this.context, this.state);
        this.enterRule(localContext, 84, testParser.RULE_exprlist);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 566;
            this.expr();
            this.state = 571;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 567;
                this.match(testParser.COMMA);
                this.state = 568;
                this.expr();
                }
                }
                this.state = 573;
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
    public terminator(): TerminatorContext {
        let localContext = new TerminatorContext(this.context, this.state);
        this.enterRule(localContext, 86, testParser.RULE_terminator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 574;
            _la = this.tokenStream.LA(1);
            if(!(_la === 39 || _la === 40)) {
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
    public systemPath(): SystemPathContext {
        let localContext = new SystemPathContext(this.context, this.state);
        this.enterRule(localContext, 88, testParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 576;
            this.match(testParser.LT);
            this.state = 577;
            this.match(testParser.ID);
            this.state = 578;
            this.match(testParser.GT);
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
    public optionPair(): OptionPairContext {
        let localContext = new OptionPairContext(this.context, this.state);
        this.enterRule(localContext, 90, testParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 580;
            localContext._key = this.indeterminate();
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
        4,1,100,585,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,1,
        0,5,0,94,8,0,10,0,12,0,97,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,116,8,1,1,2,1,2,1,2,1,2,1,
        2,3,2,123,8,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,131,8,3,10,3,12,3,134,
        9,3,3,3,136,8,3,1,3,3,3,139,8,3,1,3,1,3,1,3,1,3,5,3,145,8,3,10,3,
        12,3,148,9,3,1,3,1,3,1,3,5,3,153,8,3,10,3,12,3,156,9,3,5,3,158,8,
        3,10,3,12,3,161,9,3,1,3,1,3,5,3,165,8,3,10,3,12,3,168,9,3,3,3,170,
        8,3,1,3,1,3,1,3,1,3,1,3,3,3,177,8,3,3,3,179,8,3,1,4,1,4,1,4,1,4,
        1,4,1,4,5,4,187,8,4,10,4,12,4,190,9,4,3,4,192,8,4,1,4,1,4,1,4,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,204,8,5,1,6,1,6,1,6,3,6,209,8,6,1,
        6,1,6,3,6,213,8,6,1,6,1,6,3,6,217,8,6,1,6,1,6,1,6,1,7,1,7,1,7,3,
        7,225,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,235,8,8,1,8,1,8,1,
        8,1,9,1,9,3,9,242,8,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,
        1,12,1,12,1,12,1,12,1,12,5,12,258,8,12,10,12,12,12,261,9,12,1,12,
        1,12,1,12,1,13,1,13,1,13,1,13,5,13,270,8,13,10,13,12,13,273,9,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,283,8,13,1,14,1,14,
        1,15,1,15,1,15,1,15,1,15,1,15,5,15,293,8,15,10,15,12,15,296,9,15,
        1,15,1,15,1,15,1,15,1,15,4,15,303,8,15,11,15,12,15,304,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,5,15,314,8,15,10,15,12,15,317,9,15,1,15,
        1,15,1,15,3,15,322,8,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,330,8,
        16,1,17,3,17,333,8,17,1,17,1,17,1,18,1,18,1,18,5,18,340,8,18,10,
        18,12,18,343,9,18,1,19,1,19,1,19,5,19,348,8,19,10,19,12,19,351,9,
        19,1,20,1,20,1,20,5,20,356,8,20,10,20,12,20,359,9,20,1,21,1,21,1,
        21,5,21,364,8,21,10,21,12,21,367,9,21,1,22,1,22,1,22,5,22,372,8,
        22,10,22,12,22,375,9,22,1,23,1,23,1,23,5,23,380,8,23,10,23,12,23,
        383,9,23,1,24,1,24,1,24,5,24,388,8,24,10,24,12,24,391,9,24,1,25,
        1,25,1,25,5,25,396,8,25,10,25,12,25,399,9,25,1,26,1,26,1,26,5,26,
        404,8,26,10,26,12,26,407,9,26,1,27,1,27,1,27,1,27,1,27,3,27,414,
        8,27,1,28,1,28,1,28,3,28,419,8,28,1,29,1,29,1,29,3,29,424,8,29,1,
        29,3,29,427,8,29,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,
        32,1,32,5,32,440,8,32,10,32,12,32,443,9,32,1,33,1,33,1,33,1,33,3,
        33,449,8,33,1,33,1,33,1,33,3,33,454,8,33,1,33,1,33,1,33,1,33,5,33,
        460,8,33,10,33,12,33,463,9,33,3,33,465,8,33,1,33,1,33,1,33,1,33,
        1,33,1,33,1,33,1,33,3,33,475,8,33,1,33,1,33,1,33,1,33,5,33,481,8,
        33,10,33,12,33,484,9,33,3,33,486,8,33,1,33,1,33,1,33,1,33,1,33,1,
        33,1,33,1,33,1,33,1,33,3,33,498,8,33,1,34,1,34,1,34,1,34,5,34,504,
        8,34,10,34,12,34,507,9,34,1,34,1,34,3,34,511,8,34,1,34,1,34,1,35,
        3,35,516,8,35,1,35,1,35,1,35,3,35,521,8,35,1,35,1,35,1,36,3,36,526,
        8,36,1,36,1,36,3,36,530,8,36,1,37,1,37,1,37,1,37,1,37,1,37,3,37,
        538,8,37,1,38,1,38,1,38,3,38,543,8,38,1,39,1,39,1,39,3,39,548,8,
        39,1,40,1,40,3,40,552,8,40,1,40,1,40,1,41,1,41,5,41,558,8,41,10,
        41,12,41,561,9,41,1,41,1,41,3,41,565,8,41,1,42,1,42,1,42,5,42,570,
        8,42,10,42,12,42,573,9,42,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,
        1,45,1,45,1,45,0,0,46,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
        76,78,80,82,84,86,88,90,0,12,1,0,89,91,1,0,76,80,2,0,6,11,28,28,
        1,0,62,63,1,0,60,61,1,0,52,58,1,0,13,18,1,0,22,23,1,0,24,26,1,0,
        4,5,2,0,44,44,46,46,1,0,39,40,635,0,95,1,0,0,0,2,115,1,0,0,0,4,122,
        1,0,0,0,6,178,1,0,0,0,8,180,1,0,0,0,10,196,1,0,0,0,12,205,1,0,0,
        0,14,221,1,0,0,0,16,229,1,0,0,0,18,239,1,0,0,0,20,245,1,0,0,0,22,
        248,1,0,0,0,24,251,1,0,0,0,26,282,1,0,0,0,28,284,1,0,0,0,30,321,
        1,0,0,0,32,323,1,0,0,0,34,332,1,0,0,0,36,336,1,0,0,0,38,344,1,0,
        0,0,40,352,1,0,0,0,42,360,1,0,0,0,44,368,1,0,0,0,46,376,1,0,0,0,
        48,384,1,0,0,0,50,392,1,0,0,0,52,400,1,0,0,0,54,413,1,0,0,0,56,415,
        1,0,0,0,58,423,1,0,0,0,60,428,1,0,0,0,62,431,1,0,0,0,64,434,1,0,
        0,0,66,497,1,0,0,0,68,499,1,0,0,0,70,515,1,0,0,0,72,525,1,0,0,0,
        74,537,1,0,0,0,76,542,1,0,0,0,78,547,1,0,0,0,80,549,1,0,0,0,82,564,
        1,0,0,0,84,566,1,0,0,0,86,574,1,0,0,0,88,576,1,0,0,0,90,580,1,0,
        0,0,92,94,3,2,1,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,
        1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,0,0,1,99,1,1,0,0,0,100,
        101,3,28,14,0,101,102,3,86,43,0,102,116,1,0,0,0,103,116,3,86,43,
        0,104,116,3,8,4,0,105,116,3,10,5,0,106,116,3,12,6,0,107,116,3,14,
        7,0,108,116,3,16,8,0,109,116,3,18,9,0,110,116,3,22,11,0,111,116,
        3,20,10,0,112,116,3,24,12,0,113,116,3,26,13,0,114,116,3,6,3,0,115,
        100,1,0,0,0,115,103,1,0,0,0,115,104,1,0,0,0,115,105,1,0,0,0,115,
        106,1,0,0,0,115,107,1,0,0,0,115,108,1,0,0,0,115,109,1,0,0,0,115,
        110,1,0,0,0,115,111,1,0,0,0,115,112,1,0,0,0,115,113,1,0,0,0,115,
        114,1,0,0,0,116,3,1,0,0,0,117,118,5,98,0,0,118,123,5,83,0,0,119,
        120,5,83,0,0,120,121,5,97,0,0,121,123,5,83,0,0,122,117,1,0,0,0,122,
        119,1,0,0,0,123,5,1,0,0,0,124,125,5,96,0,0,125,138,5,83,0,0,126,
        135,5,31,0,0,127,132,5,83,0,0,128,129,5,41,0,0,129,131,5,83,0,0,
        130,128,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,
        133,136,1,0,0,0,134,132,1,0,0,0,135,127,1,0,0,0,135,136,1,0,0,0,
        136,137,1,0,0,0,137,139,5,32,0,0,138,126,1,0,0,0,138,139,1,0,0,0,
        139,140,1,0,0,0,140,179,3,28,14,0,141,142,7,0,0,0,142,146,3,28,14,
        0,143,145,3,2,1,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,
        0,146,147,1,0,0,0,147,159,1,0,0,0,148,146,1,0,0,0,149,150,5,93,0,
        0,150,154,3,28,14,0,151,153,3,2,1,0,152,151,1,0,0,0,153,156,1,0,
        0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,158,1,0,0,0,156,154,1,0,
        0,0,157,149,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,
        0,0,160,169,1,0,0,0,161,159,1,0,0,0,162,166,5,92,0,0,163,165,3,2,
        1,0,164,163,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,
        0,0,167,170,1,0,0,0,168,166,1,0,0,0,169,162,1,0,0,0,169,170,1,0,
        0,0,170,171,1,0,0,0,171,172,5,94,0,0,172,179,1,0,0,0,173,176,5,95,
        0,0,174,177,3,88,44,0,175,177,5,99,0,0,176,174,1,0,0,0,176,175,1,
        0,0,0,177,179,1,0,0,0,178,124,1,0,0,0,178,141,1,0,0,0,178,173,1,
        0,0,0,179,7,1,0,0,0,180,181,5,64,0,0,181,182,3,78,39,0,182,191,5,
        31,0,0,183,188,5,83,0,0,184,185,5,41,0,0,185,187,5,83,0,0,186,184,
        1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,192,
        1,0,0,0,190,188,1,0,0,0,191,183,1,0,0,0,191,192,1,0,0,0,192,193,
        1,0,0,0,193,194,5,32,0,0,194,195,3,82,41,0,195,9,1,0,0,0,196,197,
        5,65,0,0,197,198,5,31,0,0,198,199,3,28,14,0,199,200,5,32,0,0,200,
        203,3,82,41,0,201,202,5,69,0,0,202,204,3,82,41,0,203,201,1,0,0,0,
        203,204,1,0,0,0,204,11,1,0,0,0,205,206,5,66,0,0,206,208,5,31,0,0,
        207,209,3,84,42,0,208,207,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,
        0,210,212,5,39,0,0,211,213,3,84,42,0,212,211,1,0,0,0,212,213,1,0,
        0,0,213,214,1,0,0,0,214,216,5,39,0,0,215,217,3,84,42,0,216,215,1,
        0,0,0,216,217,1,0,0,0,217,218,1,0,0,0,218,219,5,32,0,0,219,220,3,
        82,41,0,220,13,1,0,0,0,221,222,5,67,0,0,222,224,5,31,0,0,223,225,
        3,84,42,0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,
        5,32,0,0,227,228,3,82,41,0,228,15,1,0,0,0,229,230,5,68,0,0,230,231,
        3,82,41,0,231,232,5,67,0,0,232,234,5,31,0,0,233,235,3,84,42,0,234,
        233,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,5,32,0,0,237,
        238,5,39,0,0,238,17,1,0,0,0,239,241,5,70,0,0,240,242,3,28,14,0,241,
        240,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,244,3,86,43,0,244,
        19,1,0,0,0,245,246,5,71,0,0,246,247,3,86,43,0,247,21,1,0,0,0,248,
        249,5,72,0,0,249,250,3,86,43,0,250,23,1,0,0,0,251,252,5,73,0,0,252,
        253,3,78,39,0,253,254,5,33,0,0,254,259,3,78,39,0,255,256,5,41,0,
        0,256,258,3,78,39,0,257,255,1,0,0,0,258,261,1,0,0,0,259,257,1,0,
        0,0,259,260,1,0,0,0,260,262,1,0,0,0,261,259,1,0,0,0,262,263,5,34,
        0,0,263,264,3,86,43,0,264,25,1,0,0,0,265,266,7,1,0,0,266,271,3,78,
        39,0,267,268,5,41,0,0,268,270,3,78,39,0,269,267,1,0,0,0,270,273,
        1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,
        1,0,0,0,274,275,3,86,43,0,275,283,1,0,0,0,276,277,5,74,0,0,277,278,
        3,78,39,0,278,279,3,86,43,0,279,283,1,0,0,0,280,281,5,75,0,0,281,
        283,3,86,43,0,282,265,1,0,0,0,282,276,1,0,0,0,282,280,1,0,0,0,283,
        27,1,0,0,0,284,285,3,30,15,0,285,29,1,0,0,0,286,322,3,32,16,0,287,
        294,5,83,0,0,288,289,5,35,0,0,289,290,3,28,14,0,290,291,5,36,0,0,
        291,293,1,0,0,0,292,288,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,
        294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,7,2,0,0,
        298,322,3,30,15,0,299,302,5,83,0,0,300,301,5,12,0,0,301,303,3,78,
        39,0,302,300,1,0,0,0,303,304,1,0,0,0,304,302,1,0,0,0,304,305,1,0,
        0,0,305,306,1,0,0,0,306,307,7,2,0,0,307,308,3,30,15,0,308,322,1,
        0,0,0,309,310,5,35,0,0,310,315,5,83,0,0,311,312,5,41,0,0,312,314,
        5,83,0,0,313,311,1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,
        1,0,0,0,316,318,1,0,0,0,317,315,1,0,0,0,318,319,5,36,0,0,319,320,
        7,2,0,0,320,322,3,30,15,0,321,286,1,0,0,0,321,287,1,0,0,0,321,299,
        1,0,0,0,321,309,1,0,0,0,322,31,1,0,0,0,323,329,3,34,17,0,324,325,
        5,37,0,0,325,326,3,28,14,0,326,327,5,38,0,0,327,328,3,28,14,0,328,
        330,1,0,0,0,329,324,1,0,0,0,329,330,1,0,0,0,330,33,1,0,0,0,331,333,
        5,29,0,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,335,
        3,36,18,0,335,35,1,0,0,0,336,341,3,38,19,0,337,338,5,59,0,0,338,
        340,3,38,19,0,339,337,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,
        342,1,0,0,0,342,37,1,0,0,0,343,341,1,0,0,0,344,349,3,40,20,0,345,
        346,7,3,0,0,346,348,3,40,20,0,347,345,1,0,0,0,348,351,1,0,0,0,349,
        347,1,0,0,0,349,350,1,0,0,0,350,39,1,0,0,0,351,349,1,0,0,0,352,357,
        3,42,21,0,353,354,7,4,0,0,354,356,3,42,21,0,355,353,1,0,0,0,356,
        359,1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,41,1,0,0,0,359,357,
        1,0,0,0,360,365,3,44,22,0,361,362,7,5,0,0,362,364,3,44,22,0,363,
        361,1,0,0,0,364,367,1,0,0,0,365,363,1,0,0,0,365,366,1,0,0,0,366,
        43,1,0,0,0,367,365,1,0,0,0,368,373,3,46,23,0,369,370,5,20,0,0,370,
        372,3,46,23,0,371,369,1,0,0,0,372,375,1,0,0,0,373,371,1,0,0,0,373,
        374,1,0,0,0,374,45,1,0,0,0,375,373,1,0,0,0,376,381,3,48,24,0,377,
        378,5,19,0,0,378,380,3,48,24,0,379,377,1,0,0,0,380,383,1,0,0,0,381,
        379,1,0,0,0,381,382,1,0,0,0,382,47,1,0,0,0,383,381,1,0,0,0,384,389,
        3,50,25,0,385,386,7,6,0,0,386,388,3,50,25,0,387,385,1,0,0,0,388,
        391,1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,49,1,0,0,0,391,389,
        1,0,0,0,392,397,3,52,26,0,393,394,7,7,0,0,394,396,3,52,26,0,395,
        393,1,0,0,0,396,399,1,0,0,0,397,395,1,0,0,0,397,398,1,0,0,0,398,
        51,1,0,0,0,399,397,1,0,0,0,400,405,3,54,27,0,401,402,7,8,0,0,402,
        404,3,54,27,0,403,401,1,0,0,0,404,407,1,0,0,0,405,403,1,0,0,0,405,
        406,1,0,0,0,406,53,1,0,0,0,407,405,1,0,0,0,408,409,5,23,0,0,409,
        414,3,54,27,0,410,411,5,21,0,0,411,414,3,54,27,0,412,414,3,56,28,
        0,413,408,1,0,0,0,413,410,1,0,0,0,413,412,1,0,0,0,414,55,1,0,0,0,
        415,418,3,58,29,0,416,417,5,27,0,0,417,419,3,54,27,0,418,416,1,0,
        0,0,418,419,1,0,0,0,419,57,1,0,0,0,420,424,3,62,31,0,421,424,3,60,
        30,0,422,424,3,64,32,0,423,420,1,0,0,0,423,421,1,0,0,0,423,422,1,
        0,0,0,424,426,1,0,0,0,425,427,5,21,0,0,426,425,1,0,0,0,426,427,1,
        0,0,0,427,59,1,0,0,0,428,429,7,9,0,0,429,430,3,64,32,0,430,61,1,
        0,0,0,431,432,3,64,32,0,432,433,7,9,0,0,433,63,1,0,0,0,434,441,3,
        66,33,0,435,436,5,35,0,0,436,437,3,28,14,0,437,438,5,36,0,0,438,
        440,1,0,0,0,439,435,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,
        442,1,0,0,0,442,65,1,0,0,0,443,441,1,0,0,0,444,498,3,78,39,0,445,
        498,3,74,37,0,446,498,3,76,38,0,447,449,5,3,0,0,448,447,1,0,0,0,
        448,449,1,0,0,0,449,450,1,0,0,0,450,451,3,78,39,0,451,453,5,31,0,
        0,452,454,3,84,42,0,453,452,1,0,0,0,453,454,1,0,0,0,454,464,1,0,
        0,0,455,456,5,30,0,0,456,461,3,90,45,0,457,458,5,41,0,0,458,460,
        3,90,45,0,459,457,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,
        1,0,0,0,462,465,1,0,0,0,463,461,1,0,0,0,464,455,1,0,0,0,464,465,
        1,0,0,0,465,466,1,0,0,0,466,467,5,32,0,0,467,498,1,0,0,0,468,469,
        5,31,0,0,469,470,5,24,0,0,470,471,3,28,14,0,471,472,5,32,0,0,472,
        474,5,31,0,0,473,475,3,84,42,0,474,473,1,0,0,0,474,475,1,0,0,0,475,
        485,1,0,0,0,476,477,5,30,0,0,477,482,3,90,45,0,478,479,5,41,0,0,
        479,481,3,90,45,0,480,478,1,0,0,0,481,484,1,0,0,0,482,480,1,0,0,
        0,482,483,1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,0,485,476,1,0,0,
        0,485,486,1,0,0,0,486,487,1,0,0,0,487,488,5,32,0,0,488,498,1,0,0,
        0,489,490,5,31,0,0,490,491,3,28,14,0,491,492,5,32,0,0,492,498,1,
        0,0,0,493,498,5,99,0,0,494,498,3,80,40,0,495,498,3,68,34,0,496,498,
        3,4,2,0,497,444,1,0,0,0,497,445,1,0,0,0,497,446,1,0,0,0,497,448,
        1,0,0,0,497,468,1,0,0,0,497,489,1,0,0,0,497,493,1,0,0,0,497,494,
        1,0,0,0,497,495,1,0,0,0,497,496,1,0,0,0,498,67,1,0,0,0,499,500,5,
        1,0,0,500,505,5,46,0,0,501,502,5,41,0,0,502,504,5,46,0,0,503,501,
        1,0,0,0,504,507,1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,510,
        1,0,0,0,507,505,1,0,0,0,508,509,5,38,0,0,509,511,5,46,0,0,510,508,
        1,0,0,0,510,511,1,0,0,0,511,512,1,0,0,0,512,513,5,2,0,0,513,69,1,
        0,0,0,514,516,5,23,0,0,515,514,1,0,0,0,515,516,1,0,0,0,516,517,1,
        0,0,0,517,518,5,46,0,0,518,520,5,25,0,0,519,521,5,23,0,0,520,519,
        1,0,0,0,520,521,1,0,0,0,521,522,1,0,0,0,522,523,5,46,0,0,523,71,
        1,0,0,0,524,526,5,23,0,0,525,524,1,0,0,0,525,526,1,0,0,0,526,527,
        1,0,0,0,527,529,7,10,0,0,528,530,5,45,0,0,529,528,1,0,0,0,529,530,
        1,0,0,0,530,73,1,0,0,0,531,538,5,42,0,0,532,538,5,43,0,0,533,538,
        3,70,35,0,534,538,3,72,36,0,535,538,5,48,0,0,536,538,5,49,0,0,537,
        531,1,0,0,0,537,532,1,0,0,0,537,533,1,0,0,0,537,534,1,0,0,0,537,
        535,1,0,0,0,537,536,1,0,0,0,538,75,1,0,0,0,539,543,5,50,0,0,540,
        543,5,51,0,0,541,543,5,82,0,0,542,539,1,0,0,0,542,540,1,0,0,0,542,
        541,1,0,0,0,543,77,1,0,0,0,544,548,5,83,0,0,545,548,5,81,0,0,546,
        548,5,100,0,0,547,544,1,0,0,0,547,545,1,0,0,0,547,546,1,0,0,0,548,
        79,1,0,0,0,549,551,5,35,0,0,550,552,3,84,42,0,551,550,1,0,0,0,551,
        552,1,0,0,0,552,553,1,0,0,0,553,554,5,36,0,0,554,81,1,0,0,0,555,
        559,5,33,0,0,556,558,3,2,1,0,557,556,1,0,0,0,558,561,1,0,0,0,559,
        557,1,0,0,0,559,560,1,0,0,0,560,562,1,0,0,0,561,559,1,0,0,0,562,
        565,5,34,0,0,563,565,3,2,1,0,564,555,1,0,0,0,564,563,1,0,0,0,565,
        83,1,0,0,0,566,571,3,28,14,0,567,568,5,41,0,0,568,570,3,28,14,0,
        569,567,1,0,0,0,570,573,1,0,0,0,571,569,1,0,0,0,571,572,1,0,0,0,
        572,85,1,0,0,0,573,571,1,0,0,0,574,575,7,11,0,0,575,87,1,0,0,0,576,
        577,5,17,0,0,577,578,5,83,0,0,578,579,5,18,0,0,579,89,1,0,0,0,580,
        581,3,78,39,0,581,582,5,28,0,0,582,583,3,28,14,0,583,91,1,0,0,0,
        66,95,115,122,132,135,138,146,154,159,166,169,176,178,188,191,203,
        208,212,216,224,234,241,259,271,282,294,304,315,321,329,332,341,
        349,357,365,373,381,389,397,405,413,418,423,426,441,448,453,461,
        464,474,482,485,497,505,510,515,520,525,529,537,542,547,551,559,
        564,571
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
export class EmptyLineStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
export class PreproStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public preprocessor(): PreprocessorContext {
        return this.getRuleContext(0, PreprocessorContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreproStatement) {
             listener.enterPreproStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreproStatement) {
             listener.exitPreproStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreproStatement) {
            return visitor.visitPreproStatement(this);
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
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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


export class PrecharContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_prechar;
    }
    public override copyFrom(ctx: PrecharContext): void {
        super.copyFrom(ctx);
    }
}
export class PreChrContext extends PrecharContext {
    public constructor(ctx: PrecharContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CHAR(): antlr.TerminalNode {
        return this.getToken(testParser.CHAR, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(testParser.ID, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreChr) {
             listener.enterPreChr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreChr) {
             listener.exitPreChr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreChr) {
            return visitor.visitPreChr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreChrPlusContext extends PrecharContext {
    public constructor(ctx: PrecharContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.ID);
    	} else {
    		return this.getToken(testParser.ID, i);
    	}
    }
    public CHARPLUS(): antlr.TerminalNode {
        return this.getToken(testParser.CHARPLUS, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreChrPlus) {
             listener.enterPreChrPlus(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreChrPlus) {
             listener.exitPreChrPlus(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreChrPlus) {
            return visitor.visitPreChrPlus(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PreprocessorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_preprocessor;
    }
    public override copyFrom(ctx: PreprocessorContext): void {
        super.copyFrom(ctx);
    }
}
export class PDefContext extends PreprocessorContext {
    public _name?: Token | null;
    public _ID?: Token | null;
    public _params: antlr.Token[] = [];
    public _body?: ExprContext;
    public constructor(ctx: PreprocessorContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PDEFINE(): antlr.TerminalNode {
        return this.getToken(testParser.PDEFINE, 0)!;
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.ID);
    	} else {
    		return this.getToken(testParser.ID, i);
    	}
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(testParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(testParser.RPAREN, 0);
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
        if(listener.enterPDef) {
             listener.enterPDef(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPDef) {
             listener.exitPDef(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPDef) {
            return visitor.visitPDef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PIncContext extends PreprocessorContext {
    public _path_sys?: SystemPathContext;
    public _path_loc?: Token | null;
    public constructor(ctx: PreprocessorContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PINCLUDE(): antlr.TerminalNode {
        return this.getToken(testParser.PINCLUDE, 0)!;
    }
    public systemPath(): SystemPathContext | null {
        return this.getRuleContext(0, SystemPathContext);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(testParser.STRING, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPInc) {
             listener.enterPInc(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPInc) {
             listener.exitPInc(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPInc) {
            return visitor.visitPInc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PIfContext extends PreprocessorContext {
    public constructor(ctx: PreprocessorContext) {
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
    public PENDIF(): antlr.TerminalNode {
        return this.getToken(testParser.PENDIF, 0)!;
    }
    public PIF(): antlr.TerminalNode | null {
        return this.getToken(testParser.PIF, 0);
    }
    public PIFDEF(): antlr.TerminalNode | null {
        return this.getToken(testParser.PIFDEF, 0);
    }
    public PIFNDEF(): antlr.TerminalNode | null {
        return this.getToken(testParser.PIFNDEF, 0);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public PELIF(): antlr.TerminalNode[];
    public PELIF(i: number): antlr.TerminalNode | null;
    public PELIF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.PELIF);
    	} else {
    		return this.getToken(testParser.PELIF, i);
    	}
    }
    public PELSE(): antlr.TerminalNode | null {
        return this.getToken(testParser.PELSE, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPIf) {
             listener.enterPIf(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPIf) {
             listener.exitPIf(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPIf) {
            return visitor.visitPIf(this);
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
    public _name?: IndeterminateContext;
    public _ID?: Token | null;
    public _params: antlr.Token[] = [];
    public _body?: BlockContext;
    public constructor(ctx: FunctionDefinitionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DEF(): antlr.TerminalNode {
        return this.getToken(testParser.DEF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.ID);
    	} else {
    		return this.getToken(testParser.ID, i);
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
    public _condition?: ExprContext;
    public _thenBlock?: BlockContext;
    public _elseBlock?: BlockContext;
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
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
    public _init?: ExprlistContext;
    public _cond?: ExprlistContext;
    public _update?: ExprlistContext;
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
    public exprlist(): ExprlistContext[];
    public exprlist(i: number): ExprlistContext | null;
    public exprlist(i?: number): ExprlistContext[] | ExprlistContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprlistContext);
        }

        return this.getRuleContext(i, ExprlistContext);
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
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
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
    public SEMI(): antlr.TerminalNode {
        return this.getToken(testParser.SEMI, 0)!;
    }
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
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
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
export class StructContext extends FunctionStructContext {
    public _name?: IndeterminateContext;
    public _indeterminate?: IndeterminateContext;
    public _members: IndeterminateContext[] = [];
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
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public indeterminate(): IndeterminateContext[];
    public indeterminate(i: number): IndeterminateContext | null;
    public indeterminate(i?: number): IndeterminateContext[] | IndeterminateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }

        return this.getRuleContext(i, IndeterminateContext);
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
        if(listener.enterStruct) {
             listener.enterStruct(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitStruct) {
             listener.exitStruct(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitStruct) {
            return visitor.visitStruct(this);
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
export class ModuleEndContext extends FunctionModuleContext {
    public constructor(ctx: FunctionModuleContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ENDMODULE(): antlr.TerminalNode {
        return this.getToken(testParser.ENDMODULE, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
    public indeterminate(): IndeterminateContext[];
    public indeterminate(i: number): IndeterminateContext | null;
    public indeterminate(i?: number): IndeterminateContext[] | IndeterminateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }

        return this.getRuleContext(i, IndeterminateContext);
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
    public LOCALF(): antlr.TerminalNode | null {
        return this.getToken(testParser.LOCALF, 0);
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
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
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
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.ID);
    	} else {
    		return this.getToken(testParser.ID, i);
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
    public ID(): antlr.TerminalNode {
        return this.getToken(testParser.ID, 0)!;
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
    public indeterminate(): IndeterminateContext[];
    public indeterminate(i: number): IndeterminateContext | null;
    public indeterminate(i?: number): IndeterminateContext[] | IndeterminateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }

        return this.getRuleContext(i, IndeterminateContext);
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
    public _left?: Token | null;
    public _expr?: ExprContext;
    public _indices: ExprContext[] = [];
    public _op?: Token | null;
    public _right?: AssignmentExprContext;
    public constructor(ctx: AssignmentExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(testParser.ID, 0)!;
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
    public RBRACKET(): antlr.TerminalNode[];
    public RBRACKET(i: number): antlr.TerminalNode | null;
    public RBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.RBRACKET);
    	} else {
    		return this.getToken(testParser.RBRACKET, i);
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
    public _condition?: QuoteExprContext;
    public _consequence?: ExprContext;
    public _alternative?: ExprContext;
    public constructor(ctx: TernaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public quoteExpr(): QuoteExprContext {
        return this.getRuleContext(0, QuoteExprContext)!;
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(testParser.QUESTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(testParser.COLON, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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


export class QuoteExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_quoteExpr;
    }
    public override copyFrom(ctx: QuoteExprContext): void {
        super.copyFrom(ctx);
    }
}
export class QuoteContext extends QuoteExprContext {
    public constructor(ctx: QuoteExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qeNotExpr(): QeNotExprContext {
        return this.getRuleContext(0, QeNotExprContext)!;
    }
    public BACK(): antlr.TerminalNode | null {
        return this.getToken(testParser.BACK, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterQuote) {
             listener.enterQuote(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitQuote) {
             listener.exitQuote(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitQuote) {
            return visitor.visitQuote(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QeNotExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_qeNotExpr;
    }
    public override copyFrom(ctx: QeNotExprContext): void {
        super.copyFrom(ctx);
    }
}
export class QEnotContext extends QeNotExprContext {
    public constructor(ctx: QeNotExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qeOrExpr(): QeOrExprContext[];
    public qeOrExpr(i: number): QeOrExprContext | null;
    public qeOrExpr(i?: number): QeOrExprContext[] | QeOrExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QeOrExprContext);
        }

        return this.getRuleContext(i, QeOrExprContext);
    }
    public QE_8(): antlr.TerminalNode[];
    public QE_8(i: number): antlr.TerminalNode | null;
    public QE_8(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_8);
    	} else {
    		return this.getToken(testParser.QE_8, i);
    	}
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterQEnot) {
             listener.enterQEnot(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitQEnot) {
             listener.exitQEnot(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitQEnot) {
            return visitor.visitQEnot(this);
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
    public QE_11(): antlr.TerminalNode[];
    public QE_11(i: number): antlr.TerminalNode | null;
    public QE_11(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_11);
    	} else {
    		return this.getToken(testParser.QE_11, i);
    	}
    }
    public QE_12(): antlr.TerminalNode[];
    public QE_12(i: number): antlr.TerminalNode | null;
    public QE_12(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_12);
    	} else {
    		return this.getToken(testParser.QE_12, i);
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
    public QE_9(): antlr.TerminalNode[];
    public QE_9(i: number): antlr.TerminalNode | null;
    public QE_9(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_9);
    	} else {
    		return this.getToken(testParser.QE_9, i);
    	}
    }
    public QE_10(): antlr.TerminalNode[];
    public QE_10(i: number): antlr.TerminalNode | null;
    public QE_10(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_10);
    	} else {
    		return this.getToken(testParser.QE_10, i);
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
    public QE_6(): antlr.TerminalNode[];
    public QE_6(i: number): antlr.TerminalNode | null;
    public QE_6(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.QE_6);
    	} else {
    		return this.getToken(testParser.QE_6, i);
    	}
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
export class PowExContext extends PowerExprContext {
    public _base?: FactExprContext;
    public _exponent?: UnaryExprContext;
    public constructor(ctx: PowerExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public factExpr(): FactExprContext {
        return this.getRuleContext(0, FactExprContext)!;
    }
    public POWER(): antlr.TerminalNode | null {
        return this.getToken(testParser.POWER, 0);
    }
    public unaryExpr(): UnaryExprContext | null {
        return this.getRuleContext(0, UnaryExprContext);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPowEx) {
             listener.enterPowEx(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPowEx) {
             listener.exitPowEx(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPowEx) {
            return visitor.visitPowEx(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FactExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_factExpr;
    }
    public override copyFrom(ctx: FactExprContext): void {
        super.copyFrom(ctx);
    }
}
export class FactrialExprContext extends FactExprContext {
    public constructor(ctx: FactExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public postfixExpr(): PostfixExprContext | null {
        return this.getRuleContext(0, PostfixExprContext);
    }
    public prefixExpr(): PrefixExprContext | null {
        return this.getRuleContext(0, PrefixExprContext);
    }
    public indexAccessExpr(): IndexAccessExprContext | null {
        return this.getRuleContext(0, IndexAccessExprContext);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(testParser.NOT, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFactrialExpr) {
             listener.enterFactrialExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFactrialExpr) {
             listener.exitFactrialExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFactrialExpr) {
            return visitor.visitFactrialExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrefixExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_prefixExpr;
    }
    public override copyFrom(ctx: PrefixExprContext): void {
        super.copyFrom(ctx);
    }
}
export class PreFixContext extends PrefixExprContext {
    public constructor(ctx: PrefixExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public indexAccessExpr(): IndexAccessExprContext {
        return this.getRuleContext(0, IndexAccessExprContext)!;
    }
    public INC(): antlr.TerminalNode | null {
        return this.getToken(testParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(testParser.DEC, 0);
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreFix) {
             listener.enterPreFix(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreFix) {
             listener.exitPreFix(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreFix) {
            return visitor.visitPreFix(this);
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
    public indexAccessExpr(): IndexAccessExprContext {
        return this.getRuleContext(0, IndexAccessExprContext)!;
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
    public STRING(): antlr.TerminalNode {
        return this.getToken(testParser.STRING, 0)!;
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
    public _is_global?: Token | null;
    public _name?: IndeterminateContext;
    public _args?: ExprlistContext;
    public _optionPair?: OptionPairContext;
    public _options: OptionPairContext[] = [];
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public MID(): antlr.TerminalNode | null {
        return this.getToken(testParser.MID, 0);
    }
    public COLON2(): antlr.TerminalNode | null {
        return this.getToken(testParser.COLON2, 0);
    }
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
    }
    public optionPair(): OptionPairContext[];
    public optionPair(i: number): OptionPairContext | null;
    public optionPair(i?: number): OptionPairContext[] | OptionPairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OptionPairContext);
        }

        return this.getRuleContext(i, OptionPairContext);
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
export class IndExprContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterIndExpr) {
             listener.enterIndExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitIndExpr) {
             listener.exitIndExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitIndExpr) {
            return visitor.visitIndExpr(this);
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
export class PreChrExprContext extends PrimaryExprContext {
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public prechar(): PrecharContext {
        return this.getRuleContext(0, PrecharContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterPreChrExpr) {
             listener.enterPreChrExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitPreChrExpr) {
             listener.exitPreChrExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitPreChrExpr) {
            return visitor.visitPreChrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctorCallExprContext extends PrimaryExprContext {
    public _callee?: ExprContext;
    public _args?: ExprlistContext;
    public _optionPair?: OptionPairContext;
    public _options: OptionPairContext[] = [];
    public constructor(ctx: PrimaryExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.LPAREN);
    	} else {
    		return this.getToken(testParser.LPAREN, i);
    	}
    }
    public MULT(): antlr.TerminalNode {
        return this.getToken(testParser.MULT, 0)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(testParser.RPAREN);
    	} else {
    		return this.getToken(testParser.RPAREN, i);
    	}
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public MID(): antlr.TerminalNode | null {
        return this.getToken(testParser.MID, 0);
    }
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
    }
    public optionPair(): OptionPairContext[];
    public optionPair(i: number): OptionPairContext | null;
    public optionPair(i?: number): OptionPairContext[] | OptionPairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OptionPairContext);
        }

        return this.getRuleContext(i, OptionPairContext);
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
        if(listener.enterFunctorCallExpr) {
             listener.enterFunctorCallExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFunctorCallExpr) {
             listener.exitFunctorCallExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFunctorCallExpr) {
            return visitor.visitFunctorCallExpr(this);
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
export class BitNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BIT(): antlr.TerminalNode {
        return this.getToken(testParser.BIT, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterBitNum) {
             listener.enterBitNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitBitNum) {
             listener.exitBitNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitBitNum) {
            return visitor.visitBitNum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ImaNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IMAGINARY(): antlr.TerminalNode {
        return this.getToken(testParser.IMAGINARY, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterImaNum) {
             listener.enterImaNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitImaNum) {
             listener.exitImaNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitImaNum) {
            return visitor.visitImaNum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class HexNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public HEX(): antlr.TerminalNode {
        return this.getToken(testParser.HEX, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterHexNum) {
             listener.enterHexNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitHexNum) {
             listener.exitHexNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitHexNum) {
            return visitor.visitHexNum(this);
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
export class GenNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AEGEN(): antlr.TerminalNode {
        return this.getToken(testParser.AEGEN, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterGenNum) {
             listener.enterGenNum(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitGenNum) {
             listener.exitGenNum(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitGenNum) {
            return visitor.visitGenNum(this);
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
export class BefContext extends IdContext {
    public constructor(ctx: IdContext) {
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
export class BefNContext extends IdContext {
    public constructor(ctx: IdContext) {
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


export class IndeterminateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_indeterminate;
    }
    public override copyFrom(ctx: IndeterminateContext): void {
        super.copyFrom(ctx);
    }
}
export class FuncContext extends IndeterminateContext {
    public constructor(ctx: IndeterminateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(testParser.ID, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterFunc) {
             listener.enterFunc(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFunc) {
             listener.exitFunc(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ChFuncContext extends IndeterminateContext {
    public constructor(ctx: IndeterminateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOSTRING(): antlr.TerminalNode {
        return this.getToken(testParser.NOSTRING, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterChFunc) {
             listener.enterChFunc(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitChFunc) {
             listener.exitChFunc(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitChFunc) {
            return visitor.visitChFunc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtFuncContext extends IndeterminateContext {
    public constructor(ctx: IndeterminateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ATFUNC(): antlr.TerminalNode {
        return this.getToken(testParser.ATFUNC, 0)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterAtFunc) {
             listener.enterAtFunc(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitAtFunc) {
             listener.exitAtFunc(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitAtFunc) {
            return visitor.visitAtFunc(this);
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
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
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


export class ExprlistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
    public override get ruleIndex(): number {
        return testParser.RULE_exprlist;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterExprlist) {
             listener.enterExprlist(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitExprlist) {
             listener.exitExprlist(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitExprlist) {
            return visitor.visitExprlist(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TerminatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(testParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(testParser.DOLLAR, 0);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_terminator;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterTerminator) {
             listener.enterTerminator(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitTerminator) {
             listener.exitTerminator(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitTerminator) {
            return visitor.visitTerminator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SystemPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(testParser.LT, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(testParser.ID, 0)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(testParser.GT, 0)!;
    }
    public override get ruleIndex(): number {
        return testParser.RULE_systemPath;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterSystemPath) {
             listener.enterSystemPath(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitSystemPath) {
             listener.exitSystemPath(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitSystemPath) {
            return visitor.visitSystemPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OptionPairContext extends antlr.ParserRuleContext {
    public _key?: IndeterminateContext;
    public _value?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(testParser.ASSIGN, 0)!;
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return testParser.RULE_optionPair;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterOptionPair) {
             listener.enterOptionPair(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitOptionPair) {
             listener.exitOptionPair(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitOptionPair) {
            return visitor.visitOptionPair(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
