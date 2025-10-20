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
    public static readonly IMAGINARY = 44;
    public static readonly AEGEN = 45;
    public static readonly BEFORE = 46;
    public static readonly BEFORE_N = 47;
    public static readonly QE_1 = 48;
    public static readonly QE_2 = 49;
    public static readonly QE_3 = 50;
    public static readonly QE_4 = 51;
    public static readonly QE_5 = 52;
    public static readonly QE_6 = 53;
    public static readonly QE_7 = 54;
    public static readonly QE_8 = 55;
    public static readonly QE_9 = 56;
    public static readonly QE_10 = 57;
    public static readonly QE_11 = 58;
    public static readonly QE_12 = 59;
    public static readonly DEF = 60;
    public static readonly IF = 61;
    public static readonly FOR = 62;
    public static readonly WHILE = 63;
    public static readonly DO = 64;
    public static readonly ELSE = 65;
    public static readonly RETURN = 66;
    public static readonly CONTINUE = 67;
    public static readonly BREAK = 68;
    public static readonly STRUCT = 69;
    public static readonly MODULE = 70;
    public static readonly ENDMODULE = 71;
    public static readonly EXTERN = 72;
    public static readonly STATIC = 73;
    public static readonly GLOBAL = 74;
    public static readonly LOCAL = 75;
    public static readonly LOCALF = 76;
    public static readonly FUNCTION = 77;
    public static readonly ATFUNC = 78;
    public static readonly VAR_2 = 79;
    public static readonly ID = 80;
    public static readonly FLOAT = 81;
    public static readonly INT = 82;
    public static readonly POINT = 83;
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
    public static readonly RULE_formDeclaration = 5;
    public static readonly RULE_functionIf = 6;
    public static readonly RULE_functionFor = 7;
    public static readonly RULE_functionWhile = 8;
    public static readonly RULE_functionDo = 9;
    public static readonly RULE_functionReturn = 10;
    public static readonly RULE_functionContinue = 11;
    public static readonly RULE_functionBreak = 12;
    public static readonly RULE_functionStruct = 13;
    public static readonly RULE_functionModule = 14;
    public static readonly RULE_expr = 15;
    public static readonly RULE_assignmentExpr = 16;
    public static readonly RULE_ternaryExpr = 17;
    public static readonly RULE_quoteExpr = 18;
    public static readonly RULE_qeNotExpr = 19;
    public static readonly RULE_qeOrExpr = 20;
    public static readonly RULE_qeAndExpr = 21;
    public static readonly RULE_qeCompareExpr = 22;
    public static readonly RULE_orExpr = 23;
    public static readonly RULE_andExpr = 24;
    public static readonly RULE_compareExpr = 25;
    public static readonly RULE_addSubExpr = 26;
    public static readonly RULE_mulDivSurExpr = 27;
    public static readonly RULE_unaryExpr = 28;
    public static readonly RULE_powerExpr = 29;
    public static readonly RULE_factExpr = 30;
    public static readonly RULE_prefixExpr = 31;
    public static readonly RULE_postfixExpr = 32;
    public static readonly RULE_indexAccessExpr = 33;
    public static readonly RULE_memberAccessExpr = 34;
    public static readonly RULE_primaryExpr = 35;
    public static readonly RULE_dpoly = 36;
    public static readonly RULE_rational = 37;
    public static readonly RULE_decimal = 38;
    public static readonly RULE_num = 39;
    public static readonly RULE_id = 40;
    public static readonly RULE_indeterminate = 41;
    public static readonly RULE_list = 42;
    public static readonly RULE_block = 43;
    public static readonly RULE_exprlist = 44;
    public static readonly RULE_terminator = 45;
    public static readonly RULE_systemPath = 46;
    public static readonly RULE_elifClause = 47;
    public static readonly RULE_elseClause = 48;
    public static readonly RULE_optionPair = 49;

    public static readonly literalNames = [
        null, "'<<'", "'>>'", "'::'", "'++'", "'--'", "'+='", "'-='", "'*='", 
        "'/='", "'%='", "'^='", "'->'", "'=='", "'!='", "'<='", "'>='", 
        "'<'", "'>'", "'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'", 
        "'%'", "'^'", "'='", "'`'", "'|'", "'('", "')'", "'{'", "'}'", "'['", 
        "']'", "'?'", "':'", "';'", "'$'", "','", null, null, "'@i'", "'@s'", 
        "'@@'", null, "'@>='", "'@<='", "'@>'", "'@<'", "'@=='", "'@='", 
        "'@!='", "'@!'", "'@&&'", "'@&'", "'@||'", "'@|'", "'def'", "'if'", 
        "'for'", "'while'", "'do'", "'else'", "'return'", "'continue'", 
        "'break'", "'struct'", "'module'", "'endmodule'", "'extern'", "'static'", 
        "'global'", "'local'", "'localf'", "'function'", null, "'@'", null, 
        null, null, "'.'", "'\\n'", null, null, null, null, "'#ifdef'", 
        "'#ifndef'", "'#if'", "'#else'", "'#elif'", "'#endif'", "'#include'", 
        "'#define'", "'##'", "'#'"
    ];

    public static readonly symbolicNames = [
        null, "LTLT", "GTGT", "COLON2", "INC", "DEC", "PLUSEQ", "MINUSEQ", 
        "MULTEQ", "DIVEQ", "SUREQ", "POWEREQ", "ARROW", "EQ", "NEQ", "LE", 
        "GE", "LT", "GT", "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", "DIV", 
        "SUR", "POWER", "ASSIGN", "BACK", "MID", "LPAREN", "RPAREN", "LBRANCE", 
        "RBRANCE", "LBRACKET", "RBRACKET", "QUESTION", "COLON", "SEMI", 
        "DOLLAR", "COMMA", "HEX", "BIT", "IMAGINARY", "AEGEN", "BEFORE", 
        "BEFORE_N", "QE_1", "QE_2", "QE_3", "QE_4", "QE_5", "QE_6", "QE_7", 
        "QE_8", "QE_9", "QE_10", "QE_11", "QE_12", "DEF", "IF", "FOR", "WHILE", 
        "DO", "ELSE", "RETURN", "CONTINUE", "BREAK", "STRUCT", "MODULE", 
        "ENDMODULE", "EXTERN", "STATIC", "GLOBAL", "LOCAL", "LOCALF", "FUNCTION", 
        "ATFUNC", "VAR_2", "ID", "FLOAT", "INT", "POINT", "NEWLINE", "WS", 
        "COMMENT", "LCOMMENT", "PCOMMENT", "PIFDEF", "PIFNDEF", "PIF", "PELSE", 
        "PELIF", "PENDIF", "PINCLUDE", "PDEFINE", "CHARPLUS", "CHAR", "STRING", 
        "NOSTRING"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "prechar", "preprocessor", "functionDefinition", 
        "formDeclaration", "functionIf", "functionFor", "functionWhile", 
        "functionDo", "functionReturn", "functionContinue", "functionBreak", 
        "functionStruct", "functionModule", "expr", "assignmentExpr", "ternaryExpr", 
        "quoteExpr", "qeNotExpr", "qeOrExpr", "qeAndExpr", "qeCompareExpr", 
        "orExpr", "andExpr", "compareExpr", "addSubExpr", "mulDivSurExpr", 
        "unaryExpr", "powerExpr", "factExpr", "prefixExpr", "postfixExpr", 
        "indexAccessExpr", "memberAccessExpr", "primaryExpr", "dpoly", "rational", 
        "decimal", "num", "id", "indeterminate", "list", "block", "exprlist", 
        "terminator", "systemPath", "elifClause", "elseClause", "optionPair",
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
            this.state = 103;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3187679153) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982215679) !== 0) || _la === 99 || _la === 100) {
                {
                {
                this.state = 100;
                this.statement();
                }
                }
                this.state = 105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 106;
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
            this.state = 124;
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
            case testParser.IMAGINARY:
            case testParser.AEGEN:
            case testParser.BEFORE:
            case testParser.BEFORE_N:
            case testParser.ATFUNC:
            case testParser.VAR_2:
            case testParser.ID:
            case testParser.FLOAT:
            case testParser.INT:
            case testParser.CHAR:
            case testParser.STRING:
            case testParser.NOSTRING:
                localContext = new ExprStatementContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 108;
                this.expr();
                this.state = 109;
                this.terminator();
                }
                break;
            case testParser.SEMI:
            case testParser.DOLLAR:
                localContext = new EmptyLineStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 111;
                this.terminator();
                }
                break;
            case testParser.DEF:
                localContext = new DefinitionStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 112;
                this.functionDefinition();
                }
                break;
            case testParser.FUNCTION:
                localContext = new ForwardDeclStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 113;
                this.formDeclaration();
                }
                break;
            case testParser.IF:
                localContext = new IfStatementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 114;
                this.functionIf();
                }
                break;
            case testParser.FOR:
                localContext = new ForStatementContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 115;
                this.functionFor();
                }
                break;
            case testParser.WHILE:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 116;
                this.functionWhile();
                }
                break;
            case testParser.DO:
                localContext = new DoStatementContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 117;
                this.functionDo();
                }
                break;
            case testParser.RETURN:
                localContext = new ReturnStatementContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 118;
                this.functionReturn();
                }
                break;
            case testParser.BREAK:
                localContext = new BreakStatementContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 119;
                this.functionBreak();
                }
                break;
            case testParser.CONTINUE:
                localContext = new ContinueStatementContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 120;
                this.functionContinue();
                }
                break;
            case testParser.STRUCT:
                localContext = new StructStatementContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 121;
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
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 122;
                this.functionModule();
                }
                break;
            case testParser.PIFDEF:
            case testParser.PIFNDEF:
            case testParser.PIF:
            case testParser.PINCLUDE:
            case testParser.PDEFINE:
                localContext = new PreproStatementContext(localContext);
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 123;
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
            this.state = 131;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.CHAR:
                localContext = new PreChrContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 126;
                this.match(testParser.CHAR);
                this.state = 127;
                this.match(testParser.ID);
                }
                break;
            case testParser.ID:
                localContext = new PreChrPlusContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 128;
                this.match(testParser.ID);
                this.state = 129;
                this.match(testParser.CHARPLUS);
                this.state = 130;
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
            this.state = 174;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.PDEFINE:
                localContext = new PDefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 133;
                this.match(testParser.PDEFINE);
                this.state = 134;
                (localContext as PDefContext)._name = this.match(testParser.ID);
                this.state = 147;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 135;
                    this.match(testParser.LPAREN);
                    this.state = 144;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 80) {
                        {
                        this.state = 136;
                        (localContext as PDefContext)._ID = this.match(testParser.ID);
                        (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                        this.state = 141;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                            {
                            this.state = 137;
                            this.match(testParser.COMMA);
                            this.state = 138;
                            (localContext as PDefContext)._ID = this.match(testParser.ID);
                            (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                            }
                            }
                            this.state = 143;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 146;
                    this.match(testParser.RPAREN);
                    }
                    break;
                }
                this.state = 149;
                (localContext as PDefContext)._body = this.expr();
                }
                break;
            case testParser.PIFDEF:
            case testParser.PIFNDEF:
            case testParser.PIF:
                localContext = new PIfContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 150;
                (localContext as PIfContext)._directive = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                    (localContext as PIfContext)._directive = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 151;
                (localContext as PIfContext)._condition = this.expr();
                this.state = 155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3187679153) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982215679) !== 0) || _la === 99 || _la === 100) {
                    {
                    {
                    this.state = 152;
                    (localContext as PIfContext)._statement = this.statement();
                    (localContext as PIfContext)._thenSymts.push((localContext as PIfContext)._statement!);
                    }
                    }
                    this.state = 157;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 93) {
                    {
                    {
                    this.state = 158;
                    (localContext as PIfContext)._elifClause = this.elifClause();
                    (localContext as PIfContext)._elifs.push((localContext as PIfContext)._elifClause!);
                    }
                    }
                    this.state = 163;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 165;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 92) {
                    {
                    this.state = 164;
                    (localContext as PIfContext)._elseBlk = this.elseClause();
                    }
                }

                this.state = 167;
                this.match(testParser.PENDIF);
                }
                break;
            case testParser.PINCLUDE:
                localContext = new PIncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 169;
                this.match(testParser.PINCLUDE);
                this.state = 172;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case testParser.LT:
                    {
                    this.state = 170;
                    (localContext as PIncContext)._path_sys = this.systemPath();
                    }
                    break;
                case testParser.STRING:
                    {
                    this.state = 171;
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
            this.state = 176;
            this.match(testParser.DEF);
            this.state = 177;
            (localContext as DefContext)._name = this.indeterminate();
            this.state = 178;
            this.match(testParser.LPAREN);
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 80) {
                {
                this.state = 179;
                (localContext as DefContext)._ID = this.match(testParser.ID);
                (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                this.state = 184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 180;
                    this.match(testParser.COMMA);
                    this.state = 181;
                    (localContext as DefContext)._ID = this.match(testParser.ID);
                    (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                    }
                    }
                    this.state = 186;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 189;
            this.match(testParser.RPAREN);
            this.state = 190;
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
    public formDeclaration(): FormDeclarationContext {
        let localContext = new FormDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 10, testParser.RULE_formDeclaration);
        let _la: number;
        try {
            localContext = new FormDeclContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 192;
            this.match(testParser.FUNCTION);
            this.state = 193;
            (localContext as FormDeclContext)._name = this.indeterminate();
            this.state = 194;
            this.match(testParser.LPAREN);
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4194309) !== 0)) {
                {
                this.state = 195;
                (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                this.state = 200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 196;
                    this.match(testParser.COMMA);
                    this.state = 197;
                    (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                    (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                    }
                    }
                    this.state = 202;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 205;
            this.match(testParser.RPAREN);
            this.state = 206;
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
    public functionIf(): FunctionIfContext {
        let localContext = new FunctionIfContext(this.context, this.state);
        this.enterRule(localContext, 12, testParser.RULE_functionIf);
        try {
            localContext = new IfContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(testParser.IF);
            this.state = 209;
            this.match(testParser.LPAREN);
            this.state = 210;
            (localContext as IfContext)._condition = this.expr();
            this.state = 211;
            this.match(testParser.RPAREN);
            this.state = 212;
            (localContext as IfContext)._thenBlock = this.block();
            this.state = 215;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 213;
                this.match(testParser.ELSE);
                this.state = 214;
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
        this.enterRule(localContext, 14, testParser.RULE_functionFor);
        let _la: number;
        try {
            localContext = new ForContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 217;
            this.match(testParser.FOR);
            this.state = 218;
            this.match(testParser.LPAREN);
            this.state = 220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 219;
                (localContext as ForContext)._init = this.exprlist();
                }
            }

            this.state = 222;
            this.match(testParser.SEMI);
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 223;
                (localContext as ForContext)._cond = this.exprlist();
                }
            }

            this.state = 226;
            this.match(testParser.SEMI);
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 227;
                (localContext as ForContext)._update = this.exprlist();
                }
            }

            this.state = 230;
            this.match(testParser.RPAREN);
            this.state = 231;
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
        this.enterRule(localContext, 16, testParser.RULE_functionWhile);
        let _la: number;
        try {
            localContext = new WhileContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 233;
            this.match(testParser.WHILE);
            this.state = 234;
            this.match(testParser.LPAREN);
            this.state = 236;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 235;
                this.exprlist();
                }
            }

            this.state = 238;
            this.match(testParser.RPAREN);
            this.state = 239;
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
        this.enterRule(localContext, 18, testParser.RULE_functionDo);
        let _la: number;
        try {
            localContext = new DoContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 241;
            this.match(testParser.DO);
            this.state = 242;
            this.block();
            this.state = 243;
            this.match(testParser.WHILE);
            this.state = 244;
            this.match(testParser.LPAREN);
            this.state = 246;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 245;
                this.exprlist();
                }
            }

            this.state = 248;
            this.match(testParser.RPAREN);
            this.state = 249;
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
        this.enterRule(localContext, 20, testParser.RULE_functionReturn);
        let _la: number;
        try {
            localContext = new ReturnContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 251;
            this.match(testParser.RETURN);
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 252;
                this.expr();
                }
            }

            this.state = 255;
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
        this.enterRule(localContext, 22, testParser.RULE_functionContinue);
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 257;
            this.match(testParser.CONTINUE);
            this.state = 258;
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
        this.enterRule(localContext, 24, testParser.RULE_functionBreak);
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 260;
            this.match(testParser.BREAK);
            this.state = 261;
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
        this.enterRule(localContext, 26, testParser.RULE_functionStruct);
        let _la: number;
        try {
            localContext = new StructContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.match(testParser.STRUCT);
            this.state = 264;
            (localContext as StructContext)._name = this.indeterminate();
            this.state = 265;
            this.match(testParser.LBRANCE);
            this.state = 266;
            (localContext as StructContext)._indeterminate = this.indeterminate();
            (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
            this.state = 271;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 267;
                this.match(testParser.COMMA);
                this.state = 268;
                (localContext as StructContext)._indeterminate = this.indeterminate();
                (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
                }
                }
                this.state = 273;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 274;
            this.match(testParser.RBRANCE);
            this.state = 275;
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
        this.enterRule(localContext, 28, testParser.RULE_functionModule);
        let _la: number;
        try {
            this.state = 294;
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
                this.state = 277;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 31) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 278;
                this.indeterminate();
                this.state = 283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 279;
                    this.match(testParser.COMMA);
                    this.state = 280;
                    this.indeterminate();
                    }
                    }
                    this.state = 285;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 286;
                this.terminator();
                }
                break;
            case testParser.MODULE:
                localContext = new ModuleStartContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 288;
                this.match(testParser.MODULE);
                this.state = 289;
                this.indeterminate();
                this.state = 290;
                this.terminator();
                }
                break;
            case testParser.ENDMODULE:
                localContext = new ModuleEndContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 292;
                this.match(testParser.ENDMODULE);
                this.state = 293;
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
        this.enterRule(localContext, 30, testParser.RULE_expr);
        try {
            localContext = new MainContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
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
        this.enterRule(localContext, 32, testParser.RULE_assignmentExpr);
        let _la: number;
        try {
            this.state = 333;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                localContext = new NoAssignmentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 298;
                this.ternaryExpr();
                }
                break;
            case 2:
                localContext = new AssignContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 299;
                (localContext as AssignContext)._left = this.match(testParser.ID);
                this.state = 306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 35) {
                    {
                    {
                    this.state = 300;
                    this.match(testParser.LBRACKET);
                    this.state = 301;
                    (localContext as AssignContext)._expr = this.expr();
                    (localContext as AssignContext)._indices.push((localContext as AssignContext)._expr!);
                    this.state = 302;
                    this.match(testParser.RBRACKET);
                    }
                    }
                    this.state = 308;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 309;
                (localContext as AssignContext)._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                    (localContext as AssignContext)._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 310;
                (localContext as AssignContext)._right = this.assignmentExpr();
                }
                break;
            case 3:
                localContext = new StructAssignContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 311;
                this.match(testParser.ID);
                this.state = 314;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 312;
                    this.match(testParser.ARROW);
                    this.state = 313;
                    this.indeterminate();
                    }
                    }
                    this.state = 316;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 12);
                this.state = 318;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 319;
                this.assignmentExpr();
                }
                break;
            case 4:
                localContext = new ListAssignContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 321;
                this.match(testParser.LBRACKET);
                this.state = 322;
                this.match(testParser.ID);
                this.state = 327;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 323;
                    this.match(testParser.COMMA);
                    this.state = 324;
                    this.match(testParser.ID);
                    }
                    }
                    this.state = 329;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 330;
                this.match(testParser.RBRACKET);
                this.state = 331;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 332;
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
        this.enterRule(localContext, 34, testParser.RULE_ternaryExpr);
        let _la: number;
        try {
            localContext = new TernaryContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 335;
            (localContext as TernaryContext)._condition = this.quoteExpr();
            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 336;
                this.match(testParser.QUESTION);
                this.state = 337;
                (localContext as TernaryContext)._consequence = this.expr();
                this.state = 338;
                this.match(testParser.COLON);
                this.state = 339;
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
        this.enterRule(localContext, 36, testParser.RULE_quoteExpr);
        let _la: number;
        try {
            localContext = new QuoteContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 343;
                this.match(testParser.BACK);
                }
            }

            this.state = 346;
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
        this.enterRule(localContext, 38, testParser.RULE_qeNotExpr);
        let _la: number;
        try {
            localContext = new QEnotContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 348;
            this.qeOrExpr();
            this.state = 353;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 55) {
                {
                {
                this.state = 349;
                this.match(testParser.QE_8);
                this.state = 350;
                this.qeOrExpr();
                }
                }
                this.state = 355;
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
        this.enterRule(localContext, 40, testParser.RULE_qeOrExpr);
        let _la: number;
        try {
            localContext = new QEorContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 356;
            this.qeAndExpr();
            this.state = 361;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58 || _la === 59) {
                {
                {
                this.state = 357;
                _la = this.tokenStream.LA(1);
                if(!(_la === 58 || _la === 59)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 358;
                this.qeAndExpr();
                }
                }
                this.state = 363;
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
        this.enterRule(localContext, 42, testParser.RULE_qeAndExpr);
        let _la: number;
        try {
            localContext = new QEandContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            this.qeCompareExpr();
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 56 || _la === 57) {
                {
                {
                this.state = 365;
                _la = this.tokenStream.LA(1);
                if(!(_la === 56 || _la === 57)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 366;
                this.qeCompareExpr();
                }
                }
                this.state = 371;
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
        this.enterRule(localContext, 44, testParser.RULE_qeCompareExpr);
        let _la: number;
        try {
            localContext = new QECompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 372;
            this.orExpr();
            this.state = 377;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 127) !== 0)) {
                {
                {
                this.state = 373;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 127) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 374;
                this.orExpr();
                }
                }
                this.state = 379;
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
        this.enterRule(localContext, 46, testParser.RULE_orExpr);
        let _la: number;
        try {
            localContext = new OrContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.andExpr();
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 381;
                this.match(testParser.OR);
                this.state = 382;
                this.andExpr();
                }
                }
                this.state = 387;
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
        this.enterRule(localContext, 48, testParser.RULE_andExpr);
        let _la: number;
        try {
            localContext = new AndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 388;
            this.compareExpr();
            this.state = 393;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19) {
                {
                {
                this.state = 389;
                this.match(testParser.AND);
                this.state = 390;
                this.compareExpr();
                }
                }
                this.state = 395;
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
        this.enterRule(localContext, 50, testParser.RULE_compareExpr);
        let _la: number;
        try {
            localContext = new CompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            this.addSubExpr();
            this.state = 401;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                {
                {
                this.state = 397;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 398;
                this.addSubExpr();
                }
                }
                this.state = 403;
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
        this.enterRule(localContext, 52, testParser.RULE_addSubExpr);
        let _la: number;
        try {
            let alternative: number;
            localContext = new AddSubContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.mulDivSurExpr();
            this.state = 409;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 405;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 22 || _la === 23)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 406;
                    this.mulDivSurExpr();
                    }
                    }
                }
                this.state = 411;
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
        this.enterRule(localContext, 54, testParser.RULE_mulDivSurExpr);
        let _la: number;
        try {
            localContext = new MulDivSurContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 412;
            this.unaryExpr();
            this.state = 417;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                {
                {
                this.state = 413;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 414;
                this.unaryExpr();
                }
                }
                this.state = 419;
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
        this.enterRule(localContext, 56, testParser.RULE_unaryExpr);
        try {
            this.state = 425;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                localContext = new UnaryMinusContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 420;
                this.match(testParser.MINUS);
                this.state = 421;
                this.unaryExpr();
                }
                break;
            case 2:
                localContext = new NotExprContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 422;
                this.match(testParser.NOT);
                this.state = 423;
                this.unaryExpr();
                }
                break;
            case 3:
                localContext = new PowExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 424;
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
        this.enterRule(localContext, 58, testParser.RULE_powerExpr);
        let _la: number;
        try {
            localContext = new PowExContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 427;
            (localContext as PowExContext)._base = this.factExpr();
            this.state = 430;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 428;
                this.match(testParser.POWER);
                this.state = 429;
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
        this.enterRule(localContext, 60, testParser.RULE_factExpr);
        try {
            localContext = new FactorialExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 435;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                {
                this.state = 432;
                this.postfixExpr();
                }
                break;
            case 2:
                {
                this.state = 433;
                this.prefixExpr();
                }
                break;
            case 3:
                {
                this.state = 434;
                this.indexAccessExpr();
                }
                break;
            }
            this.state = 438;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                {
                this.state = 437;
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
        this.enterRule(localContext, 62, testParser.RULE_prefixExpr);
        let _la: number;
        try {
            localContext = new PreFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 440;
            _la = this.tokenStream.LA(1);
            if(!(_la === 4 || _la === 5)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 441;
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
        this.enterRule(localContext, 64, testParser.RULE_postfixExpr);
        let _la: number;
        try {
            localContext = new PostFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 443;
            this.indexAccessExpr();
            this.state = 444;
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
        this.enterRule(localContext, 66, testParser.RULE_indexAccessExpr);
        try {
            let alternative: number;
            localContext = new IndexAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 446;
            this.memberAccessExpr();
            this.state = 453;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 447;
                    this.match(testParser.LBRACKET);
                    this.state = 448;
                    this.expr();
                    this.state = 449;
                    this.match(testParser.RBRACKET);
                    }
                    }
                }
                this.state = 455;
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
    public memberAccessExpr(): MemberAccessExprContext {
        let localContext = new MemberAccessExprContext(this.context, this.state);
        this.enterRule(localContext, 68, testParser.RULE_memberAccessExpr);
        let _la: number;
        try {
            localContext = new MemberAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 456;
            this.primaryExpr();
            this.state = 461;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12) {
                {
                {
                this.state = 457;
                this.match(testParser.ARROW);
                this.state = 458;
                this.indeterminate();
                }
                }
                this.state = 463;
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
        this.enterRule(localContext, 70, testParser.RULE_primaryExpr);
        let _la: number;
        try {
            this.state = 529;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                localContext = new IndExprContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 464;
                this.indeterminate();
                }
                break;
            case 2:
                localContext = new RealContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 465;
                this.num();
                }
                break;
            case 3:
                localContext = new IdExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 466;
                this.id();
                }
                break;
            case 4:
                localContext = new FCallExprContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 468;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                    this.state = 467;
                    (localContext as FCallExprContext)._is_global = this.match(testParser.COLON2);
                    }
                }

                this.state = 470;
                (localContext as FCallExprContext)._name = this.indeterminate();
                this.state = 481;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                    this.state = 471;
                    this.match(testParser.LBRANCE);
                    this.state = 472;
                    (localContext as FCallExprContext)._INT = this.match(testParser.INT);
                    (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                    this.state = 477;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 473;
                        this.match(testParser.COMMA);
                        this.state = 474;
                        (localContext as FCallExprContext)._INT = this.match(testParser.INT);
                        (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                        }
                        }
                        this.state = 479;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 480;
                    this.match(testParser.RBRANCE);
                    }
                }

                this.state = 483;
                this.match(testParser.LPAREN);
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                    {
                    this.state = 484;
                    (localContext as FCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 496;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 487;
                    this.match(testParser.MID);
                    this.state = 488;
                    (localContext as FCallExprContext)._optionPair = this.optionPair();
                    (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                    this.state = 493;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 489;
                        this.match(testParser.COMMA);
                        this.state = 490;
                        (localContext as FCallExprContext)._optionPair = this.optionPair();
                        (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 495;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 498;
                this.match(testParser.RPAREN);
                }
                break;
            case 5:
                localContext = new FunctorCallExprContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 500;
                this.match(testParser.LPAREN);
                this.state = 501;
                this.match(testParser.MULT);
                this.state = 502;
                (localContext as FunctorCallExprContext)._callee = this.expr();
                this.state = 503;
                this.match(testParser.RPAREN);
                this.state = 504;
                this.match(testParser.LPAREN);
                this.state = 506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                    {
                    this.state = 505;
                    (localContext as FunctorCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 517;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 508;
                    this.match(testParser.MID);
                    this.state = 509;
                    (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                    (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                    this.state = 514;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 510;
                        this.match(testParser.COMMA);
                        this.state = 511;
                        (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                        (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 516;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 519;
                this.match(testParser.RPAREN);
                }
                break;
            case 6:
                localContext = new ParenContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 521;
                this.match(testParser.LPAREN);
                this.state = 522;
                this.expr();
                this.state = 523;
                this.match(testParser.RPAREN);
                }
                break;
            case 7:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 525;
                this.match(testParser.STRING);
                }
                break;
            case 8:
                localContext = new ListLiteralContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 526;
                this.list();
                }
                break;
            case 9:
                localContext = new DpLiteralContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 527;
                this.dpoly();
                }
                break;
            case 10:
                localContext = new PreChrExprContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 528;
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
        this.enterRule(localContext, 72, testParser.RULE_dpoly);
        let _la: number;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 531;
            this.match(testParser.LTLT);
            this.state = 532;
            this.match(testParser.INT);
            this.state = 537;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 533;
                this.match(testParser.COMMA);
                this.state = 534;
                this.match(testParser.INT);
                }
                }
                this.state = 539;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 542;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 540;
                this.match(testParser.COLON);
                this.state = 541;
                this.match(testParser.INT);
                }
            }

            this.state = 544;
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
        this.enterRule(localContext, 74, testParser.RULE_rational);
        let _la: number;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 547;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 546;
                this.match(testParser.MINUS);
                }
            }

            this.state = 549;
            this.match(testParser.INT);
            this.state = 550;
            this.match(testParser.DIV);
            this.state = 552;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 551;
                this.match(testParser.MINUS);
                }
            }

            this.state = 554;
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
        this.enterRule(localContext, 76, testParser.RULE_decimal);
        let _la: number;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 556;
            _la = this.tokenStream.LA(1);
            if(!(_la === 81 || _la === 82)) {
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
    public num(): NumContext {
        let localContext = new NumContext(this.context, this.state);
        this.enterRule(localContext, 78, testParser.RULE_num);
        try {
            this.state = 564;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                localContext = new HexNumContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 558;
                this.match(testParser.HEX);
                }
                break;
            case 2:
                localContext = new BitNumContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 559;
                this.match(testParser.BIT);
                }
                break;
            case 3:
                localContext = new RatNumContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 560;
                this.rational();
                }
                break;
            case 4:
                localContext = new DecNumContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 561;
                this.decimal();
                }
                break;
            case 5:
                localContext = new ImaNumContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 562;
                this.match(testParser.IMAGINARY);
                }
                break;
            case 6:
                localContext = new GenNumContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 563;
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
        this.enterRule(localContext, 80, testParser.RULE_id);
        try {
            this.state = 569;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.BEFORE:
                localContext = new BefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 566;
                this.match(testParser.BEFORE);
                }
                break;
            case testParser.BEFORE_N:
                localContext = new BefNContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 567;
                this.match(testParser.BEFORE_N);
                }
                break;
            case testParser.VAR_2:
                localContext = new V2IdContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 568;
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
        this.enterRule(localContext, 82, testParser.RULE_indeterminate);
        try {
            this.state = 574;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.ID:
                localContext = new FuncContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 571;
                this.match(testParser.ID);
                }
                break;
            case testParser.ATFUNC:
                localContext = new AtFuncContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 572;
                this.match(testParser.ATFUNC);
                }
                break;
            case testParser.NOSTRING:
                localContext = new ChFuncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 573;
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
        this.enterRule(localContext, 84, testParser.RULE_list);
        let _la: number;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 576;
            this.match(testParser.LBRACKET);
            this.state = 578;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 7340063) !== 0)) {
                {
                this.state = 577;
                this.exprlist();
                }
            }

            this.state = 580;
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
        this.enterRule(localContext, 86, testParser.RULE_block);
        let _la: number;
        try {
            this.state = 591;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case testParser.LBRANCE:
                localContext = new SentenceContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 582;
                this.match(testParser.LBRANCE);
                this.state = 586;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3187679153) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982215679) !== 0) || _la === 99 || _la === 100) {
                    {
                    {
                    this.state = 583;
                    this.statement();
                    }
                    }
                    this.state = 588;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 589;
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
            case testParser.FUNCTION:
            case testParser.ATFUNC:
            case testParser.VAR_2:
            case testParser.ID:
            case testParser.FLOAT:
            case testParser.INT:
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
                this.state = 590;
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
        this.enterRule(localContext, 88, testParser.RULE_exprlist);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 593;
            this.expr();
            this.state = 598;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 594;
                this.match(testParser.COMMA);
                this.state = 595;
                this.expr();
                }
                }
                this.state = 600;
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
        this.enterRule(localContext, 90, testParser.RULE_terminator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 601;
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
        this.enterRule(localContext, 92, testParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 603;
            this.match(testParser.LT);
            this.state = 604;
            this.match(testParser.ID);
            this.state = 605;
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
    public elifClause(): ElifClauseContext {
        let localContext = new ElifClauseContext(this.context, this.state);
        this.enterRule(localContext, 94, testParser.RULE_elifClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 607;
            this.match(testParser.PELIF);
            this.state = 608;
            localContext._condition = this.expr();
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3187679153) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982215679) !== 0) || _la === 99 || _la === 100) {
                {
                {
                this.state = 609;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 614;
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
    public elseClause(): ElseClauseContext {
        let localContext = new ElseClauseContext(this.context, this.state);
        this.enterRule(localContext, 96, testParser.RULE_elseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 615;
            this.match(testParser.PELSE);
            this.state = 619;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3187679153) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 2982215679) !== 0) || _la === 99 || _la === 100) {
                {
                {
                this.state = 616;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 621;
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
    public optionPair(): OptionPairContext {
        let localContext = new OptionPairContext(this.context, this.state);
        this.enterRule(localContext, 98, testParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 622;
            localContext._key = this.indeterminate();
            this.state = 623;
            this.match(testParser.ASSIGN);
            this.state = 624;
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
        4,1,100,627,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,1,0,5,0,102,8,0,10,0,12,0,
        105,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,3,1,125,8,1,1,2,1,2,1,2,1,2,1,2,3,2,132,8,2,1,3,
        1,3,1,3,1,3,1,3,1,3,5,3,140,8,3,10,3,12,3,143,9,3,3,3,145,8,3,1,
        3,3,3,148,8,3,1,3,1,3,1,3,1,3,5,3,154,8,3,10,3,12,3,157,9,3,1,3,
        5,3,160,8,3,10,3,12,3,163,9,3,1,3,3,3,166,8,3,1,3,1,3,1,3,1,3,1,
        3,3,3,173,8,3,3,3,175,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,183,8,4,10,
        4,12,4,186,9,4,3,4,188,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,5,
        5,199,8,5,10,5,12,5,202,9,5,3,5,204,8,5,1,5,1,5,1,5,1,6,1,6,1,6,
        1,6,1,6,1,6,1,6,3,6,216,8,6,1,7,1,7,1,7,3,7,221,8,7,1,7,1,7,3,7,
        225,8,7,1,7,1,7,3,7,229,8,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,237,8,8,
        1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,247,8,9,1,9,1,9,1,9,1,10,1,10,
        3,10,254,8,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
        1,13,1,13,1,13,1,13,5,13,270,8,13,10,13,12,13,273,9,13,1,13,1,13,
        1,13,1,14,1,14,1,14,1,14,5,14,282,8,14,10,14,12,14,285,9,14,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,295,8,14,1,15,1,15,1,16,
        1,16,1,16,1,16,1,16,1,16,5,16,305,8,16,10,16,12,16,308,9,16,1,16,
        1,16,1,16,1,16,1,16,4,16,315,8,16,11,16,12,16,316,1,16,1,16,1,16,
        1,16,1,16,1,16,1,16,5,16,326,8,16,10,16,12,16,329,9,16,1,16,1,16,
        1,16,3,16,334,8,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,342,8,17,1,
        18,3,18,345,8,18,1,18,1,18,1,19,1,19,1,19,5,19,352,8,19,10,19,12,
        19,355,9,19,1,20,1,20,1,20,5,20,360,8,20,10,20,12,20,363,9,20,1,
        21,1,21,1,21,5,21,368,8,21,10,21,12,21,371,9,21,1,22,1,22,1,22,5,
        22,376,8,22,10,22,12,22,379,9,22,1,23,1,23,1,23,5,23,384,8,23,10,
        23,12,23,387,9,23,1,24,1,24,1,24,5,24,392,8,24,10,24,12,24,395,9,
        24,1,25,1,25,1,25,5,25,400,8,25,10,25,12,25,403,9,25,1,26,1,26,1,
        26,5,26,408,8,26,10,26,12,26,411,9,26,1,27,1,27,1,27,5,27,416,8,
        27,10,27,12,27,419,9,27,1,28,1,28,1,28,1,28,1,28,3,28,426,8,28,1,
        29,1,29,1,29,3,29,431,8,29,1,30,1,30,1,30,3,30,436,8,30,1,30,3,30,
        439,8,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,
        5,33,452,8,33,10,33,12,33,455,9,33,1,34,1,34,1,34,5,34,460,8,34,
        10,34,12,34,463,9,34,1,35,1,35,1,35,1,35,3,35,469,8,35,1,35,1,35,
        1,35,1,35,1,35,5,35,476,8,35,10,35,12,35,479,9,35,1,35,3,35,482,
        8,35,1,35,1,35,3,35,486,8,35,1,35,1,35,1,35,1,35,5,35,492,8,35,10,
        35,12,35,495,9,35,3,35,497,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,3,35,507,8,35,1,35,1,35,1,35,1,35,5,35,513,8,35,10,35,12,
        35,516,9,35,3,35,518,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,3,35,530,8,35,1,36,1,36,1,36,1,36,5,36,536,8,36,10,36,
        12,36,539,9,36,1,36,1,36,3,36,543,8,36,1,36,1,36,1,37,3,37,548,8,
        37,1,37,1,37,1,37,3,37,553,8,37,1,37,1,37,1,38,1,38,1,39,1,39,1,
        39,1,39,1,39,1,39,3,39,565,8,39,1,40,1,40,1,40,3,40,570,8,40,1,41,
        1,41,1,41,3,41,575,8,41,1,42,1,42,3,42,579,8,42,1,42,1,42,1,43,1,
        43,5,43,585,8,43,10,43,12,43,588,9,43,1,43,1,43,3,43,592,8,43,1,
        44,1,44,1,44,5,44,597,8,44,10,44,12,44,600,9,44,1,45,1,45,1,46,1,
        46,1,46,1,46,1,47,1,47,1,47,5,47,611,8,47,10,47,12,47,614,9,47,1,
        48,1,48,5,48,618,8,48,10,48,12,48,621,9,48,1,49,1,49,1,49,1,49,1,
        49,0,0,50,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
        40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
        84,86,88,90,92,94,96,98,0,12,1,0,89,91,1,0,72,76,2,0,6,11,28,28,
        1,0,58,59,1,0,56,57,1,0,48,54,1,0,13,18,1,0,22,23,1,0,24,26,1,0,
        4,5,1,0,81,82,1,0,39,40,677,0,103,1,0,0,0,2,124,1,0,0,0,4,131,1,
        0,0,0,6,174,1,0,0,0,8,176,1,0,0,0,10,192,1,0,0,0,12,208,1,0,0,0,
        14,217,1,0,0,0,16,233,1,0,0,0,18,241,1,0,0,0,20,251,1,0,0,0,22,257,
        1,0,0,0,24,260,1,0,0,0,26,263,1,0,0,0,28,294,1,0,0,0,30,296,1,0,
        0,0,32,333,1,0,0,0,34,335,1,0,0,0,36,344,1,0,0,0,38,348,1,0,0,0,
        40,356,1,0,0,0,42,364,1,0,0,0,44,372,1,0,0,0,46,380,1,0,0,0,48,388,
        1,0,0,0,50,396,1,0,0,0,52,404,1,0,0,0,54,412,1,0,0,0,56,425,1,0,
        0,0,58,427,1,0,0,0,60,435,1,0,0,0,62,440,1,0,0,0,64,443,1,0,0,0,
        66,446,1,0,0,0,68,456,1,0,0,0,70,529,1,0,0,0,72,531,1,0,0,0,74,547,
        1,0,0,0,76,556,1,0,0,0,78,564,1,0,0,0,80,569,1,0,0,0,82,574,1,0,
        0,0,84,576,1,0,0,0,86,591,1,0,0,0,88,593,1,0,0,0,90,601,1,0,0,0,
        92,603,1,0,0,0,94,607,1,0,0,0,96,615,1,0,0,0,98,622,1,0,0,0,100,
        102,3,2,1,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,
        104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,106,107,5,0,0,1,107,
        1,1,0,0,0,108,109,3,30,15,0,109,110,3,90,45,0,110,125,1,0,0,0,111,
        125,3,90,45,0,112,125,3,8,4,0,113,125,3,10,5,0,114,125,3,12,6,0,
        115,125,3,14,7,0,116,125,3,16,8,0,117,125,3,18,9,0,118,125,3,20,
        10,0,119,125,3,24,12,0,120,125,3,22,11,0,121,125,3,26,13,0,122,125,
        3,28,14,0,123,125,3,6,3,0,124,108,1,0,0,0,124,111,1,0,0,0,124,112,
        1,0,0,0,124,113,1,0,0,0,124,114,1,0,0,0,124,115,1,0,0,0,124,116,
        1,0,0,0,124,117,1,0,0,0,124,118,1,0,0,0,124,119,1,0,0,0,124,120,
        1,0,0,0,124,121,1,0,0,0,124,122,1,0,0,0,124,123,1,0,0,0,125,3,1,
        0,0,0,126,127,5,98,0,0,127,132,5,80,0,0,128,129,5,80,0,0,129,130,
        5,97,0,0,130,132,5,80,0,0,131,126,1,0,0,0,131,128,1,0,0,0,132,5,
        1,0,0,0,133,134,5,96,0,0,134,147,5,80,0,0,135,144,5,31,0,0,136,141,
        5,80,0,0,137,138,5,41,0,0,138,140,5,80,0,0,139,137,1,0,0,0,140,143,
        1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,145,1,0,0,0,143,141,
        1,0,0,0,144,136,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,148,
        5,32,0,0,147,135,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,175,
        3,30,15,0,150,151,7,0,0,0,151,155,3,30,15,0,152,154,3,2,1,0,153,
        152,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,
        161,1,0,0,0,157,155,1,0,0,0,158,160,3,94,47,0,159,158,1,0,0,0,160,
        163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,165,1,0,0,0,163,
        161,1,0,0,0,164,166,3,96,48,0,165,164,1,0,0,0,165,166,1,0,0,0,166,
        167,1,0,0,0,167,168,5,94,0,0,168,175,1,0,0,0,169,172,5,95,0,0,170,
        173,3,92,46,0,171,173,5,99,0,0,172,170,1,0,0,0,172,171,1,0,0,0,173,
        175,1,0,0,0,174,133,1,0,0,0,174,150,1,0,0,0,174,169,1,0,0,0,175,
        7,1,0,0,0,176,177,5,60,0,0,177,178,3,82,41,0,178,187,5,31,0,0,179,
        184,5,80,0,0,180,181,5,41,0,0,181,183,5,80,0,0,182,180,1,0,0,0,183,
        186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,188,1,0,0,0,186,
        184,1,0,0,0,187,179,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,
        190,5,32,0,0,190,191,3,86,43,0,191,9,1,0,0,0,192,193,5,77,0,0,193,
        194,3,82,41,0,194,203,5,31,0,0,195,200,3,82,41,0,196,197,5,41,0,
        0,197,199,3,82,41,0,198,196,1,0,0,0,199,202,1,0,0,0,200,198,1,0,
        0,0,200,201,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,203,195,1,0,
        0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,5,32,0,0,206,207,3,90,
        45,0,207,11,1,0,0,0,208,209,5,61,0,0,209,210,5,31,0,0,210,211,3,
        30,15,0,211,212,5,32,0,0,212,215,3,86,43,0,213,214,5,65,0,0,214,
        216,3,86,43,0,215,213,1,0,0,0,215,216,1,0,0,0,216,13,1,0,0,0,217,
        218,5,62,0,0,218,220,5,31,0,0,219,221,3,88,44,0,220,219,1,0,0,0,
        220,221,1,0,0,0,221,222,1,0,0,0,222,224,5,39,0,0,223,225,3,88,44,
        0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,228,5,39,0,
        0,227,229,3,88,44,0,228,227,1,0,0,0,228,229,1,0,0,0,229,230,1,0,
        0,0,230,231,5,32,0,0,231,232,3,86,43,0,232,15,1,0,0,0,233,234,5,
        63,0,0,234,236,5,31,0,0,235,237,3,88,44,0,236,235,1,0,0,0,236,237,
        1,0,0,0,237,238,1,0,0,0,238,239,5,32,0,0,239,240,3,86,43,0,240,17,
        1,0,0,0,241,242,5,64,0,0,242,243,3,86,43,0,243,244,5,63,0,0,244,
        246,5,31,0,0,245,247,3,88,44,0,246,245,1,0,0,0,246,247,1,0,0,0,247,
        248,1,0,0,0,248,249,5,32,0,0,249,250,5,39,0,0,250,19,1,0,0,0,251,
        253,5,66,0,0,252,254,3,30,15,0,253,252,1,0,0,0,253,254,1,0,0,0,254,
        255,1,0,0,0,255,256,3,90,45,0,256,21,1,0,0,0,257,258,5,67,0,0,258,
        259,3,90,45,0,259,23,1,0,0,0,260,261,5,68,0,0,261,262,3,90,45,0,
        262,25,1,0,0,0,263,264,5,69,0,0,264,265,3,82,41,0,265,266,5,33,0,
        0,266,271,3,82,41,0,267,268,5,41,0,0,268,270,3,82,41,0,269,267,1,
        0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,
        0,0,0,273,271,1,0,0,0,274,275,5,34,0,0,275,276,3,90,45,0,276,27,
        1,0,0,0,277,278,7,1,0,0,278,283,3,82,41,0,279,280,5,41,0,0,280,282,
        3,82,41,0,281,279,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,
        1,0,0,0,284,286,1,0,0,0,285,283,1,0,0,0,286,287,3,90,45,0,287,295,
        1,0,0,0,288,289,5,70,0,0,289,290,3,82,41,0,290,291,3,90,45,0,291,
        295,1,0,0,0,292,293,5,71,0,0,293,295,3,90,45,0,294,277,1,0,0,0,294,
        288,1,0,0,0,294,292,1,0,0,0,295,29,1,0,0,0,296,297,3,32,16,0,297,
        31,1,0,0,0,298,334,3,34,17,0,299,306,5,80,0,0,300,301,5,35,0,0,301,
        302,3,30,15,0,302,303,5,36,0,0,303,305,1,0,0,0,304,300,1,0,0,0,305,
        308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,
        306,1,0,0,0,309,310,7,2,0,0,310,334,3,32,16,0,311,314,5,80,0,0,312,
        313,5,12,0,0,313,315,3,82,41,0,314,312,1,0,0,0,315,316,1,0,0,0,316,
        314,1,0,0,0,316,317,1,0,0,0,317,318,1,0,0,0,318,319,7,2,0,0,319,
        320,3,32,16,0,320,334,1,0,0,0,321,322,5,35,0,0,322,327,5,80,0,0,
        323,324,5,41,0,0,324,326,5,80,0,0,325,323,1,0,0,0,326,329,1,0,0,
        0,327,325,1,0,0,0,327,328,1,0,0,0,328,330,1,0,0,0,329,327,1,0,0,
        0,330,331,5,36,0,0,331,332,7,2,0,0,332,334,3,32,16,0,333,298,1,0,
        0,0,333,299,1,0,0,0,333,311,1,0,0,0,333,321,1,0,0,0,334,33,1,0,0,
        0,335,341,3,36,18,0,336,337,5,37,0,0,337,338,3,30,15,0,338,339,5,
        38,0,0,339,340,3,30,15,0,340,342,1,0,0,0,341,336,1,0,0,0,341,342,
        1,0,0,0,342,35,1,0,0,0,343,345,5,29,0,0,344,343,1,0,0,0,344,345,
        1,0,0,0,345,346,1,0,0,0,346,347,3,38,19,0,347,37,1,0,0,0,348,353,
        3,40,20,0,349,350,5,55,0,0,350,352,3,40,20,0,351,349,1,0,0,0,352,
        355,1,0,0,0,353,351,1,0,0,0,353,354,1,0,0,0,354,39,1,0,0,0,355,353,
        1,0,0,0,356,361,3,42,21,0,357,358,7,3,0,0,358,360,3,42,21,0,359,
        357,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,
        41,1,0,0,0,363,361,1,0,0,0,364,369,3,44,22,0,365,366,7,4,0,0,366,
        368,3,44,22,0,367,365,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,
        370,1,0,0,0,370,43,1,0,0,0,371,369,1,0,0,0,372,377,3,46,23,0,373,
        374,7,5,0,0,374,376,3,46,23,0,375,373,1,0,0,0,376,379,1,0,0,0,377,
        375,1,0,0,0,377,378,1,0,0,0,378,45,1,0,0,0,379,377,1,0,0,0,380,385,
        3,48,24,0,381,382,5,20,0,0,382,384,3,48,24,0,383,381,1,0,0,0,384,
        387,1,0,0,0,385,383,1,0,0,0,385,386,1,0,0,0,386,47,1,0,0,0,387,385,
        1,0,0,0,388,393,3,50,25,0,389,390,5,19,0,0,390,392,3,50,25,0,391,
        389,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,394,1,0,0,0,394,
        49,1,0,0,0,395,393,1,0,0,0,396,401,3,52,26,0,397,398,7,6,0,0,398,
        400,3,52,26,0,399,397,1,0,0,0,400,403,1,0,0,0,401,399,1,0,0,0,401,
        402,1,0,0,0,402,51,1,0,0,0,403,401,1,0,0,0,404,409,3,54,27,0,405,
        406,7,7,0,0,406,408,3,54,27,0,407,405,1,0,0,0,408,411,1,0,0,0,409,
        407,1,0,0,0,409,410,1,0,0,0,410,53,1,0,0,0,411,409,1,0,0,0,412,417,
        3,56,28,0,413,414,7,8,0,0,414,416,3,56,28,0,415,413,1,0,0,0,416,
        419,1,0,0,0,417,415,1,0,0,0,417,418,1,0,0,0,418,55,1,0,0,0,419,417,
        1,0,0,0,420,421,5,23,0,0,421,426,3,56,28,0,422,423,5,21,0,0,423,
        426,3,56,28,0,424,426,3,58,29,0,425,420,1,0,0,0,425,422,1,0,0,0,
        425,424,1,0,0,0,426,57,1,0,0,0,427,430,3,60,30,0,428,429,5,27,0,
        0,429,431,3,56,28,0,430,428,1,0,0,0,430,431,1,0,0,0,431,59,1,0,0,
        0,432,436,3,64,32,0,433,436,3,62,31,0,434,436,3,66,33,0,435,432,
        1,0,0,0,435,433,1,0,0,0,435,434,1,0,0,0,436,438,1,0,0,0,437,439,
        5,21,0,0,438,437,1,0,0,0,438,439,1,0,0,0,439,61,1,0,0,0,440,441,
        7,9,0,0,441,442,3,66,33,0,442,63,1,0,0,0,443,444,3,66,33,0,444,445,
        7,9,0,0,445,65,1,0,0,0,446,453,3,68,34,0,447,448,5,35,0,0,448,449,
        3,30,15,0,449,450,5,36,0,0,450,452,1,0,0,0,451,447,1,0,0,0,452,455,
        1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,67,1,0,0,0,455,453,1,
        0,0,0,456,461,3,70,35,0,457,458,5,12,0,0,458,460,3,82,41,0,459,457,
        1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,69,1,
        0,0,0,463,461,1,0,0,0,464,530,3,82,41,0,465,530,3,78,39,0,466,530,
        3,80,40,0,467,469,5,3,0,0,468,467,1,0,0,0,468,469,1,0,0,0,469,470,
        1,0,0,0,470,481,3,82,41,0,471,472,5,33,0,0,472,477,5,82,0,0,473,
        474,5,41,0,0,474,476,5,82,0,0,475,473,1,0,0,0,476,479,1,0,0,0,477,
        475,1,0,0,0,477,478,1,0,0,0,478,480,1,0,0,0,479,477,1,0,0,0,480,
        482,5,34,0,0,481,471,1,0,0,0,481,482,1,0,0,0,482,483,1,0,0,0,483,
        485,5,31,0,0,484,486,3,88,44,0,485,484,1,0,0,0,485,486,1,0,0,0,486,
        496,1,0,0,0,487,488,5,30,0,0,488,493,3,98,49,0,489,490,5,41,0,0,
        490,492,3,98,49,0,491,489,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,
        0,493,494,1,0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,496,487,1,0,0,
        0,496,497,1,0,0,0,497,498,1,0,0,0,498,499,5,32,0,0,499,530,1,0,0,
        0,500,501,5,31,0,0,501,502,5,24,0,0,502,503,3,30,15,0,503,504,5,
        32,0,0,504,506,5,31,0,0,505,507,3,88,44,0,506,505,1,0,0,0,506,507,
        1,0,0,0,507,517,1,0,0,0,508,509,5,30,0,0,509,514,3,98,49,0,510,511,
        5,41,0,0,511,513,3,98,49,0,512,510,1,0,0,0,513,516,1,0,0,0,514,512,
        1,0,0,0,514,515,1,0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,517,508,
        1,0,0,0,517,518,1,0,0,0,518,519,1,0,0,0,519,520,5,32,0,0,520,530,
        1,0,0,0,521,522,5,31,0,0,522,523,3,30,15,0,523,524,5,32,0,0,524,
        530,1,0,0,0,525,530,5,99,0,0,526,530,3,84,42,0,527,530,3,72,36,0,
        528,530,3,4,2,0,529,464,1,0,0,0,529,465,1,0,0,0,529,466,1,0,0,0,
        529,468,1,0,0,0,529,500,1,0,0,0,529,521,1,0,0,0,529,525,1,0,0,0,
        529,526,1,0,0,0,529,527,1,0,0,0,529,528,1,0,0,0,530,71,1,0,0,0,531,
        532,5,1,0,0,532,537,5,82,0,0,533,534,5,41,0,0,534,536,5,82,0,0,535,
        533,1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,537,538,1,0,0,0,538,
        542,1,0,0,0,539,537,1,0,0,0,540,541,5,38,0,0,541,543,5,82,0,0,542,
        540,1,0,0,0,542,543,1,0,0,0,543,544,1,0,0,0,544,545,5,2,0,0,545,
        73,1,0,0,0,546,548,5,23,0,0,547,546,1,0,0,0,547,548,1,0,0,0,548,
        549,1,0,0,0,549,550,5,82,0,0,550,552,5,25,0,0,551,553,5,23,0,0,552,
        551,1,0,0,0,552,553,1,0,0,0,553,554,1,0,0,0,554,555,5,82,0,0,555,
        75,1,0,0,0,556,557,7,10,0,0,557,77,1,0,0,0,558,565,5,42,0,0,559,
        565,5,43,0,0,560,565,3,74,37,0,561,565,3,76,38,0,562,565,5,44,0,
        0,563,565,5,45,0,0,564,558,1,0,0,0,564,559,1,0,0,0,564,560,1,0,0,
        0,564,561,1,0,0,0,564,562,1,0,0,0,564,563,1,0,0,0,565,79,1,0,0,0,
        566,570,5,46,0,0,567,570,5,47,0,0,568,570,5,79,0,0,569,566,1,0,0,
        0,569,567,1,0,0,0,569,568,1,0,0,0,570,81,1,0,0,0,571,575,5,80,0,
        0,572,575,5,78,0,0,573,575,5,100,0,0,574,571,1,0,0,0,574,572,1,0,
        0,0,574,573,1,0,0,0,575,83,1,0,0,0,576,578,5,35,0,0,577,579,3,88,
        44,0,578,577,1,0,0,0,578,579,1,0,0,0,579,580,1,0,0,0,580,581,5,36,
        0,0,581,85,1,0,0,0,582,586,5,33,0,0,583,585,3,2,1,0,584,583,1,0,
        0,0,585,588,1,0,0,0,586,584,1,0,0,0,586,587,1,0,0,0,587,589,1,0,
        0,0,588,586,1,0,0,0,589,592,5,34,0,0,590,592,3,2,1,0,591,582,1,0,
        0,0,591,590,1,0,0,0,592,87,1,0,0,0,593,598,3,30,15,0,594,595,5,41,
        0,0,595,597,3,30,15,0,596,594,1,0,0,0,597,600,1,0,0,0,598,596,1,
        0,0,0,598,599,1,0,0,0,599,89,1,0,0,0,600,598,1,0,0,0,601,602,7,11,
        0,0,602,91,1,0,0,0,603,604,5,17,0,0,604,605,5,80,0,0,605,606,5,18,
        0,0,606,93,1,0,0,0,607,608,5,93,0,0,608,612,3,30,15,0,609,611,3,
        2,1,0,610,609,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,1,
        0,0,0,613,95,1,0,0,0,614,612,1,0,0,0,615,619,5,92,0,0,616,618,3,
        2,1,0,617,616,1,0,0,0,618,621,1,0,0,0,619,617,1,0,0,0,619,620,1,
        0,0,0,620,97,1,0,0,0,621,619,1,0,0,0,622,623,3,82,41,0,623,624,5,
        28,0,0,624,625,3,30,15,0,625,99,1,0,0,0,69,103,124,131,141,144,147,
        155,161,165,172,174,184,187,200,203,215,220,224,228,236,246,253,
        271,283,294,306,316,327,333,341,344,353,361,369,377,385,393,401,
        409,417,425,430,435,438,453,461,468,477,481,485,493,496,506,514,
        517,529,537,542,547,552,564,569,574,578,586,591,598,612,619
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
export class ForwardDeclStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public formDeclaration(): FormDeclarationContext {
        return this.getRuleContext(0, FormDeclarationContext)!;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterForwardDeclStatement) {
             listener.enterForwardDeclStatement(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitForwardDeclStatement) {
             listener.exitForwardDeclStatement(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitForwardDeclStatement) {
            return visitor.visitForwardDeclStatement(this);
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
    public _directive?: Token | null;
    public _condition?: ExprContext;
    public _statement?: StatementContext;
    public _thenSymts: StatementContext[] = [];
    public _elifClause?: ElifClauseContext;
    public _elifs: ElifClauseContext[] = [];
    public _elseBlk?: ElseClauseContext;
    public constructor(ctx: PreprocessorContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PENDIF(): antlr.TerminalNode {
        return this.getToken(testParser.PENDIF, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
    public elifClause(): ElifClauseContext[];
    public elifClause(i: number): ElifClauseContext | null;
    public elifClause(i?: number): ElifClauseContext[] | ElifClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElifClauseContext);
        }

        return this.getRuleContext(i, ElifClauseContext);
    }
    public elseClause(): ElseClauseContext | null {
        return this.getRuleContext(0, ElseClauseContext);
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


export class FormDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_formDeclaration;
    }
    public override copyFrom(ctx: FormDeclarationContext): void {
        super.copyFrom(ctx);
    }
}
export class FormDeclContext extends FormDeclarationContext {
    public _name?: IndeterminateContext;
    public _indeterminate?: IndeterminateContext;
    public _params: IndeterminateContext[] = [];
    public constructor(ctx: FormDeclarationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FUNCTION(): antlr.TerminalNode {
        return this.getToken(testParser.FUNCTION, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(testParser.RPAREN, 0)!;
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
        if(listener.enterFormDecl) {
             listener.enterFormDecl(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFormDecl) {
             listener.exitFormDecl(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFormDecl) {
            return visitor.visitFormDecl(this);
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
export class FactorialExprContext extends FactExprContext {
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
        if(listener.enterFactorialExpr) {
             listener.enterFactorialExpr(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitFactorialExpr) {
             listener.exitFactorialExpr(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitFactorialExpr) {
            return visitor.visitFactorialExpr(this);
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
    public memberAccessExpr(): MemberAccessExprContext {
        return this.getRuleContext(0, MemberAccessExprContext)!;
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


export class MemberAccessExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return testParser.RULE_memberAccessExpr;
    }
    public override copyFrom(ctx: MemberAccessExprContext): void {
        super.copyFrom(ctx);
    }
}
export class MemberAccessContext extends MemberAccessExprContext {
    public constructor(ctx: MemberAccessExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpr(): PrimaryExprContext {
        return this.getRuleContext(0, PrimaryExprContext)!;
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
        if(listener.enterMemberAccess) {
             listener.enterMemberAccess(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitMemberAccess) {
             listener.exitMemberAccess(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitMemberAccess) {
            return visitor.visitMemberAccess(this);
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
    public _INT?: Token | null;
    public _diffOrders: antlr.Token[] = [];
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
    public LBRANCE(): antlr.TerminalNode | null {
        return this.getToken(testParser.LBRANCE, 0);
    }
    public RBRANCE(): antlr.TerminalNode | null {
        return this.getToken(testParser.RBRANCE, 0);
    }
    public MID(): antlr.TerminalNode | null {
        return this.getToken(testParser.MID, 0);
    }
    public COLON2(): antlr.TerminalNode | null {
        return this.getToken(testParser.COLON2, 0);
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


export class ElifClauseContext extends antlr.ParserRuleContext {
    public _condition?: ExprContext;
    public _statement?: StatementContext;
    public _statements: StatementContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PELIF(): antlr.TerminalNode {
        return this.getToken(testParser.PELIF, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
        return testParser.RULE_elifClause;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterElifClause) {
             listener.enterElifClause(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitElifClause) {
             listener.exitElifClause(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitElifClause) {
            return visitor.visitElifClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElseClauseContext extends antlr.ParserRuleContext {
    public _statement?: StatementContext;
    public _statements: StatementContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PELSE(): antlr.TerminalNode {
        return this.getToken(testParser.PELSE, 0)!;
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
        return testParser.RULE_elseClause;
    }
    public override enterRule(listener: testListener): void {
        if(listener.enterElseClause) {
             listener.enterElseClause(this);
        }
    }
    public override exitRule(listener: testListener): void {
        if(listener.exitElseClause) {
             listener.exitElseClause(this);
        }
    }
    public override accept<Result>(visitor: testVisitor<Result>): Result | null {
        if (visitor.visitElseClause) {
            return visitor.visitElseClause(this);
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
