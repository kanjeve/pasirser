// Generated from /home/kanji/risaproject/pasirser/asir.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { asirListener } from "./asirListener.js";
import { asirVisitor } from "./asirVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class asirParser extends antlr.Parser {
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
    public static readonly QE_IMPL = 60;
    public static readonly QE_REPL = 61;
    public static readonly QE_EQUIV = 62;
    public static readonly DEF = 63;
    public static readonly IF = 64;
    public static readonly FOR = 65;
    public static readonly WHILE = 66;
    public static readonly DO = 67;
    public static readonly ELSE = 68;
    public static readonly RETURN = 69;
    public static readonly CONTINUE = 70;
    public static readonly BREAK = 71;
    public static readonly STRUCT = 72;
    public static readonly MODULE = 73;
    public static readonly ENDMODULE = 74;
    public static readonly EXTERN = 75;
    public static readonly STATIC = 76;
    public static readonly GLOBAL = 77;
    public static readonly LOCAL = 78;
    public static readonly LOCALF = 79;
    public static readonly FUNCTION = 80;
    public static readonly END = 81;
    public static readonly QUIT = 82;
    public static readonly DEBUG = 83;
    public static readonly ATFUNC = 84;
    public static readonly VAR_2 = 85;
    public static readonly ID = 86;
    public static readonly FLOAT = 87;
    public static readonly INT = 88;
    public static readonly DOT = 89;
    public static readonly NEWLINE = 90;
    public static readonly WS = 91;
    public static readonly COMMENT = 92;
    public static readonly LCOMMENT = 93;
    public static readonly PCOMMENT = 94;
    public static readonly PIFDEF = 95;
    public static readonly PIFNDEF = 96;
    public static readonly PIF = 97;
    public static readonly PELSE = 98;
    public static readonly PELIF = 99;
    public static readonly PENDIF = 100;
    public static readonly PINCLUDE = 101;
    public static readonly PDEFINE = 102;
    public static readonly CHARPLUS = 103;
    public static readonly CHAR = 104;
    public static readonly STRING = 105;
    public static readonly NOSTRING = 106;
    public static readonly SYSTEM_PATH_LITERAL = 107;
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
    public static readonly RULE_functionEnd = 14;
    public static readonly RULE_functionQuit = 15;
    public static readonly RULE_functionDebug = 16;
    public static readonly RULE_functionModule = 17;
    public static readonly RULE_expr = 18;
    public static readonly RULE_assignmentExpr = 19;
    public static readonly RULE_ternaryExpr = 20;
    public static readonly RULE_quoteExpr = 21;
    public static readonly RULE_qeImplExpr = 22;
    public static readonly RULE_qeNotExpr = 23;
    public static readonly RULE_qeOrExpr = 24;
    public static readonly RULE_qeAndExpr = 25;
    public static readonly RULE_qeCompareExpr = 26;
    public static readonly RULE_orExpr = 27;
    public static readonly RULE_andExpr = 28;
    public static readonly RULE_compareExpr = 29;
    public static readonly RULE_addSubExpr = 30;
    public static readonly RULE_mulDivSurExpr = 31;
    public static readonly RULE_unaryExpr = 32;
    public static readonly RULE_powerExpr = 33;
    public static readonly RULE_factExpr = 34;
    public static readonly RULE_prefixExpr = 35;
    public static readonly RULE_postfixExpr = 36;
    public static readonly RULE_indexAccessExpr = 37;
    public static readonly RULE_memberAccessExpr = 38;
    public static readonly RULE_primaryExpr = 39;
    public static readonly RULE_dpoly = 40;
    public static readonly RULE_rational = 41;
    public static readonly RULE_decimal = 42;
    public static readonly RULE_num = 43;
    public static readonly RULE_id = 44;
    public static readonly RULE_indeterminate = 45;
    public static readonly RULE_list = 46;
    public static readonly RULE_block = 47;
    public static readonly RULE_qualifiedName = 48;
    public static readonly RULE_dottedIdentifier = 49;
    public static readonly RULE_exprlist = 50;
    public static readonly RULE_terminator = 51;
    public static readonly RULE_systemPath = 52;
    public static readonly RULE_elifClause = 53;
    public static readonly RULE_elseClause = 54;
    public static readonly RULE_optionPair = 55;

    public static readonly literalNames = [
        null, "'<<'", "'>>'", "'::'", "'++'", "'--'", "'+='", "'-='", "'*='", 
        "'/='", "'%='", "'^='", "'->'", "'=='", "'!='", "'<='", "'>='", 
        "'<'", "'>'", "'&&'", "'||'", "'!'", "'+'", "'-'", "'*'", "'/'", 
        "'%'", "'^'", "'='", "'`'", "'|'", "'('", "')'", "'{'", "'}'", "'['", 
        "']'", "'?'", "':'", "';'", "'$'", "','", null, null, "'@i'", "'@s'", 
        "'@@'", null, "'@>='", "'@<='", "'@>'", "'@<'", "'@=='", "'@='", 
        "'@!='", "'@!'", "'@&&'", "'@&'", "'@||'", "'@|'", "'@impl'", "'@repl'", 
        "'@equiv'", "'def'", "'if'", "'for'", "'while'", "'do'", "'else'", 
        "'return'", "'continue'", "'break'", "'struct'", "'module'", "'endmodule'", 
        "'extern'", "'static'", "'global'", "'local'", "'localf'", "'function'", 
        "'end'", "'quit'", "'denug'", null, "'@'", null, null, null, "'.'", 
        "'\\n'", null, null, null, null, "'#ifdef'", "'#ifndef'", "'#if'", 
        "'#else'", "'#elif'", "'#endif'", "'#include'", "'#define'", "'##'", 
        "'#'"
    ];

    public static readonly symbolicNames = [
        null, "LTLT", "GTGT", "COLON2", "INC", "DEC", "PLUSEQ", "MINUSEQ", 
        "MULTEQ", "DIVEQ", "SUREQ", "POWEREQ", "ARROW", "EQ", "NEQ", "LE", 
        "GE", "LT", "GT", "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", "DIV", 
        "SUR", "POWER", "ASSIGN", "BACK", "MID", "LPAREN", "RPAREN", "LBRANCE", 
        "RBRANCE", "LBRACKET", "RBRACKET", "QUESTION", "COLON", "SEMI", 
        "DOLLAR", "COMMA", "HEX", "BIT", "IMAGINARY", "AEGEN", "BEFORE", 
        "BEFORE_N", "QE_1", "QE_2", "QE_3", "QE_4", "QE_5", "QE_6", "QE_7", 
        "QE_8", "QE_9", "QE_10", "QE_11", "QE_12", "QE_IMPL", "QE_REPL", 
        "QE_EQUIV", "DEF", "IF", "FOR", "WHILE", "DO", "ELSE", "RETURN", 
        "CONTINUE", "BREAK", "STRUCT", "MODULE", "ENDMODULE", "EXTERN", 
        "STATIC", "GLOBAL", "LOCAL", "LOCALF", "FUNCTION", "END", "QUIT", 
        "DEBUG", "ATFUNC", "VAR_2", "ID", "FLOAT", "INT", "DOT", "NEWLINE", 
        "WS", "COMMENT", "LCOMMENT", "PCOMMENT", "PIFDEF", "PIFNDEF", "PIF", 
        "PELSE", "PELIF", "PENDIF", "PINCLUDE", "PDEFINE", "CHARPLUS", "CHAR", 
        "STRING", "NOSTRING", "SYSTEM_PATH_LITERAL"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "prechar", "preprocessor", "functionDefinition", 
        "formDeclaration", "functionIf", "functionFor", "functionWhile", 
        "functionDo", "functionReturn", "functionContinue", "functionBreak", 
        "functionStruct", "functionEnd", "functionQuit", "functionDebug", 
        "functionModule", "expr", "assignmentExpr", "ternaryExpr", "quoteExpr", 
        "qeImplExpr", "qeNotExpr", "qeOrExpr", "qeAndExpr", "qeCompareExpr", 
        "orExpr", "andExpr", "compareExpr", "addSubExpr", "mulDivSurExpr", 
        "unaryExpr", "powerExpr", "factExpr", "prefixExpr", "postfixExpr", 
        "indexAccessExpr", "memberAccessExpr", "primaryExpr", "dpoly", "rational", 
        "decimal", "num", "id", "indeterminate", "list", "block", "qualifiedName", 
        "dottedIdentifier", "exprlist", "terminator", "systemPath", "elifClause", 
        "elseClause", "optionPair",
    ];

    public get grammarFileName(): string { return "asir.g4"; }
    public get literalNames(): (string | null)[] { return asirParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return asirParser.symbolicNames; }
    public get ruleNames(): string[] { return asirParser.ruleNames; }
    public get serializedATN(): number[] { return asirParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, asirParser._ATN, asirParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, asirParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026539953) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 1883242493) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 59) !== 0)) {
                {
                {
                this.state = 112;
                this.statement();
                }
                }
                this.state = 117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 118;
            this.match(asirParser.EOF);
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
        this.enterRule(localContext, 2, asirParser.RULE_statement);
        try {
            this.state = 139;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.LTLT:
            case asirParser.COLON2:
            case asirParser.INC:
            case asirParser.DEC:
            case asirParser.NOT:
            case asirParser.MINUS:
            case asirParser.BACK:
            case asirParser.LPAREN:
            case asirParser.LBRACKET:
            case asirParser.HEX:
            case asirParser.BIT:
            case asirParser.IMAGINARY:
            case asirParser.AEGEN:
            case asirParser.BEFORE:
            case asirParser.BEFORE_N:
            case asirParser.ATFUNC:
            case asirParser.VAR_2:
            case asirParser.ID:
            case asirParser.FLOAT:
            case asirParser.INT:
            case asirParser.CHAR:
            case asirParser.STRING:
            case asirParser.NOSTRING:
                localContext = new ExprStatementContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 120;
                this.expr();
                this.state = 121;
                this.terminator();
                }
                break;
            case asirParser.SEMI:
            case asirParser.DOLLAR:
                localContext = new EmptyLineStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 123;
                this.terminator();
                }
                break;
            case asirParser.DEF:
                localContext = new DefinitionStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 124;
                this.functionDefinition();
                }
                break;
            case asirParser.FUNCTION:
                localContext = new ForwardDeclStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 125;
                this.formDeclaration();
                }
                break;
            case asirParser.IF:
                localContext = new IfStatementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 126;
                this.functionIf();
                }
                break;
            case asirParser.FOR:
                localContext = new ForStatementContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 127;
                this.functionFor();
                }
                break;
            case asirParser.WHILE:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 128;
                this.functionWhile();
                }
                break;
            case asirParser.DO:
                localContext = new DoStatementContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 129;
                this.functionDo();
                }
                break;
            case asirParser.RETURN:
                localContext = new ReturnStatementContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 130;
                this.functionReturn();
                }
                break;
            case asirParser.BREAK:
                localContext = new BreakStatementContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 131;
                this.functionBreak();
                }
                break;
            case asirParser.CONTINUE:
                localContext = new ContinueStatementContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 132;
                this.functionContinue();
                }
                break;
            case asirParser.STRUCT:
                localContext = new StructStatementContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 133;
                this.functionStruct();
                }
                break;
            case asirParser.END:
                localContext = new EndStatementContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 134;
                this.functionEnd();
                }
                break;
            case asirParser.QUIT:
                localContext = new QuitStatementContext(localContext);
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 135;
                this.functionQuit();
                }
                break;
            case asirParser.DEBUG:
                localContext = new DebugStatementContext(localContext);
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 136;
                this.functionDebug();
                }
                break;
            case asirParser.MODULE:
            case asirParser.ENDMODULE:
            case asirParser.EXTERN:
            case asirParser.STATIC:
            case asirParser.GLOBAL:
            case asirParser.LOCAL:
            case asirParser.LOCALF:
                localContext = new ModuleStatementContext(localContext);
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 137;
                this.functionModule();
                }
                break;
            case asirParser.PIFDEF:
            case asirParser.PIFNDEF:
            case asirParser.PIF:
            case asirParser.PINCLUDE:
            case asirParser.PDEFINE:
                localContext = new PreproStatementContext(localContext);
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 138;
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
        this.enterRule(localContext, 4, asirParser.RULE_prechar);
        try {
            this.state = 146;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.CHAR:
                localContext = new PreChrContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 141;
                this.match(asirParser.CHAR);
                this.state = 142;
                this.match(asirParser.ID);
                }
                break;
            case asirParser.ID:
                localContext = new PreChrPlusContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 143;
                this.match(asirParser.ID);
                this.state = 144;
                this.match(asirParser.CHARPLUS);
                this.state = 145;
                this.match(asirParser.ID);
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
        this.enterRule(localContext, 6, asirParser.RULE_preprocessor);
        let _la: number;
        try {
            this.state = 189;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.PDEFINE:
                localContext = new PDefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 148;
                this.match(asirParser.PDEFINE);
                this.state = 149;
                (localContext as PDefContext)._name = this.match(asirParser.ID);
                this.state = 162;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 150;
                    this.match(asirParser.LPAREN);
                    this.state = 159;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 86) {
                        {
                        this.state = 151;
                        (localContext as PDefContext)._ID = this.match(asirParser.ID);
                        (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                        this.state = 156;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 41) {
                            {
                            {
                            this.state = 152;
                            this.match(asirParser.COMMA);
                            this.state = 153;
                            (localContext as PDefContext)._ID = this.match(asirParser.ID);
                            (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                            }
                            }
                            this.state = 158;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 161;
                    this.match(asirParser.RPAREN);
                    }
                    break;
                }
                this.state = 164;
                (localContext as PDefContext)._body = this.expr();
                }
                break;
            case asirParser.PIFDEF:
            case asirParser.PIFNDEF:
            case asirParser.PIF:
                localContext = new PIfContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 165;
                (localContext as PIfContext)._directive = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 7) !== 0))) {
                    (localContext as PIfContext)._directive = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 166;
                (localContext as PIfContext)._condition = this.expr();
                this.state = 170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026539953) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 1883242493) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 59) !== 0)) {
                    {
                    {
                    this.state = 167;
                    (localContext as PIfContext)._statement = this.statement();
                    (localContext as PIfContext)._thenSymts.push((localContext as PIfContext)._statement!);
                    }
                    }
                    this.state = 172;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 176;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 99) {
                    {
                    {
                    this.state = 173;
                    (localContext as PIfContext)._elifClause = this.elifClause();
                    (localContext as PIfContext)._elifs.push((localContext as PIfContext)._elifClause!);
                    }
                    }
                    this.state = 178;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                    this.state = 179;
                    (localContext as PIfContext)._elseBlk = this.elseClause();
                    }
                }

                this.state = 182;
                this.match(asirParser.PENDIF);
                }
                break;
            case asirParser.PINCLUDE:
                localContext = new PIncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 184;
                this.match(asirParser.PINCLUDE);
                this.state = 187;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case asirParser.SYSTEM_PATH_LITERAL:
                    {
                    this.state = 185;
                    (localContext as PIncContext)._path_sys = this.systemPath();
                    }
                    break;
                case asirParser.STRING:
                    {
                    this.state = 186;
                    (localContext as PIncContext)._path_loc = this.match(asirParser.STRING);
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
        this.enterRule(localContext, 8, asirParser.RULE_functionDefinition);
        let _la: number;
        try {
            localContext = new DefContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.match(asirParser.DEF);
            this.state = 192;
            (localContext as DefContext)._name = this.indeterminate();
            this.state = 193;
            this.match(asirParser.LPAREN);
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 86) {
                {
                this.state = 194;
                (localContext as DefContext)._ID = this.match(asirParser.ID);
                (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                this.state = 199;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 195;
                    this.match(asirParser.COMMA);
                    this.state = 196;
                    (localContext as DefContext)._ID = this.match(asirParser.ID);
                    (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                    }
                    }
                    this.state = 201;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 204;
            this.match(asirParser.RPAREN);
            this.state = 205;
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
        this.enterRule(localContext, 10, asirParser.RULE_formDeclaration);
        let _la: number;
        try {
            localContext = new FormDeclContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.match(asirParser.FUNCTION);
            this.state = 208;
            (localContext as FormDeclContext)._name = this.indeterminate();
            this.state = 209;
            this.match(asirParser.LPAREN);
            this.state = 218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 4194309) !== 0)) {
                {
                this.state = 210;
                (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                this.state = 215;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 211;
                    this.match(asirParser.COMMA);
                    this.state = 212;
                    (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                    (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                    }
                    }
                    this.state = 217;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 220;
            this.match(asirParser.RPAREN);
            this.state = 221;
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
        this.enterRule(localContext, 12, asirParser.RULE_functionIf);
        try {
            localContext = new IfContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 223;
            this.match(asirParser.IF);
            this.state = 224;
            this.match(asirParser.LPAREN);
            this.state = 225;
            (localContext as IfContext)._condition = this.expr();
            this.state = 226;
            this.match(asirParser.RPAREN);
            this.state = 227;
            (localContext as IfContext)._thenBlock = this.block();
            this.state = 230;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 228;
                this.match(asirParser.ELSE);
                this.state = 229;
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
        this.enterRule(localContext, 14, asirParser.RULE_functionFor);
        let _la: number;
        try {
            localContext = new ForContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 232;
            this.match(asirParser.FOR);
            this.state = 233;
            this.match(asirParser.LPAREN);
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 234;
                (localContext as ForContext)._init = this.exprlist();
                }
            }

            this.state = 237;
            this.match(asirParser.SEMI);
            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 238;
                (localContext as ForContext)._cond = this.exprlist();
                }
            }

            this.state = 241;
            this.match(asirParser.SEMI);
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 242;
                (localContext as ForContext)._update = this.exprlist();
                }
            }

            this.state = 245;
            this.match(asirParser.RPAREN);
            this.state = 246;
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
        this.enterRule(localContext, 16, asirParser.RULE_functionWhile);
        let _la: number;
        try {
            localContext = new WhileContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.match(asirParser.WHILE);
            this.state = 249;
            this.match(asirParser.LPAREN);
            this.state = 251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 250;
                this.exprlist();
                }
            }

            this.state = 253;
            this.match(asirParser.RPAREN);
            this.state = 254;
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
        this.enterRule(localContext, 18, asirParser.RULE_functionDo);
        let _la: number;
        try {
            localContext = new DoContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 256;
            this.match(asirParser.DO);
            this.state = 257;
            this.block();
            this.state = 258;
            this.match(asirParser.WHILE);
            this.state = 259;
            this.match(asirParser.LPAREN);
            this.state = 261;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 260;
                this.exprlist();
                }
            }

            this.state = 263;
            this.match(asirParser.RPAREN);
            this.state = 264;
            this.match(asirParser.SEMI);
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
        this.enterRule(localContext, 20, asirParser.RULE_functionReturn);
        let _la: number;
        try {
            localContext = new ReturnContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 266;
            this.match(asirParser.RETURN);
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 267;
                this.expr();
                }
            }

            this.state = 270;
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
        this.enterRule(localContext, 22, asirParser.RULE_functionContinue);
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 272;
            this.match(asirParser.CONTINUE);
            this.state = 273;
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
        this.enterRule(localContext, 24, asirParser.RULE_functionBreak);
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 275;
            this.match(asirParser.BREAK);
            this.state = 276;
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
        this.enterRule(localContext, 26, asirParser.RULE_functionStruct);
        let _la: number;
        try {
            localContext = new StructContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.match(asirParser.STRUCT);
            this.state = 279;
            (localContext as StructContext)._name = this.indeterminate();
            this.state = 280;
            this.match(asirParser.LBRANCE);
            this.state = 281;
            (localContext as StructContext)._indeterminate = this.indeterminate();
            (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
            this.state = 286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 282;
                this.match(asirParser.COMMA);
                this.state = 283;
                (localContext as StructContext)._indeterminate = this.indeterminate();
                (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
                }
                }
                this.state = 288;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 289;
            this.match(asirParser.RBRANCE);
            this.state = 290;
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
    public functionEnd(): FunctionEndContext {
        let localContext = new FunctionEndContext(this.context, this.state);
        this.enterRule(localContext, 28, asirParser.RULE_functionEnd);
        try {
            localContext = new EndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            this.match(asirParser.END);
            this.state = 293;
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
    public functionQuit(): FunctionQuitContext {
        let localContext = new FunctionQuitContext(this.context, this.state);
        this.enterRule(localContext, 30, asirParser.RULE_functionQuit);
        try {
            localContext = new QuitContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 295;
            this.match(asirParser.QUIT);
            this.state = 296;
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
    public functionDebug(): FunctionDebugContext {
        let localContext = new FunctionDebugContext(this.context, this.state);
        this.enterRule(localContext, 32, asirParser.RULE_functionDebug);
        try {
            localContext = new DebugContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.match(asirParser.DEBUG);
            this.state = 299;
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
        this.enterRule(localContext, 34, asirParser.RULE_functionModule);
        let _la: number;
        try {
            this.state = 318;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.EXTERN:
            case asirParser.STATIC:
            case asirParser.GLOBAL:
            case asirParser.LOCAL:
            case asirParser.LOCALF:
                localContext = new ModuleAssignContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 301;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 31) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 302;
                this.indeterminate();
                this.state = 307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 303;
                    this.match(asirParser.COMMA);
                    this.state = 304;
                    this.indeterminate();
                    }
                    }
                    this.state = 309;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 310;
                this.terminator();
                }
                break;
            case asirParser.MODULE:
                localContext = new ModuleStartContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 312;
                this.match(asirParser.MODULE);
                this.state = 313;
                this.indeterminate();
                this.state = 314;
                this.terminator();
                }
                break;
            case asirParser.ENDMODULE:
                localContext = new ModuleEndContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 316;
                this.match(asirParser.ENDMODULE);
                this.state = 317;
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
        this.enterRule(localContext, 36, asirParser.RULE_expr);
        try {
            localContext = new MainContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 320;
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
        this.enterRule(localContext, 38, asirParser.RULE_assignmentExpr);
        let _la: number;
        try {
            this.state = 357;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                localContext = new NoAssignmentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 322;
                this.ternaryExpr();
                }
                break;
            case 2:
                localContext = new AssignContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 323;
                (localContext as AssignContext)._left = this.match(asirParser.ID);
                this.state = 330;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 35) {
                    {
                    {
                    this.state = 324;
                    this.match(asirParser.LBRACKET);
                    this.state = 325;
                    (localContext as AssignContext)._expr = this.expr();
                    (localContext as AssignContext)._indices.push((localContext as AssignContext)._expr!);
                    this.state = 326;
                    this.match(asirParser.RBRACKET);
                    }
                    }
                    this.state = 332;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 333;
                (localContext as AssignContext)._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                    (localContext as AssignContext)._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 334;
                (localContext as AssignContext)._right = this.assignmentExpr();
                }
                break;
            case 3:
                localContext = new StructAssignContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 335;
                this.match(asirParser.ID);
                this.state = 338;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 336;
                    this.match(asirParser.ARROW);
                    this.state = 337;
                    this.indeterminate();
                    }
                    }
                    this.state = 340;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 12);
                this.state = 342;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
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
            case 4:
                localContext = new ListAssignContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 345;
                this.match(asirParser.LBRACKET);
                this.state = 346;
                this.match(asirParser.ID);
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 347;
                    this.match(asirParser.COMMA);
                    this.state = 348;
                    this.match(asirParser.ID);
                    }
                    }
                    this.state = 353;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 354;
                this.match(asirParser.RBRACKET);
                this.state = 355;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268439488) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 356;
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
        this.enterRule(localContext, 40, asirParser.RULE_ternaryExpr);
        let _la: number;
        try {
            localContext = new TernaryContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 359;
            (localContext as TernaryContext)._condition = this.quoteExpr();
            this.state = 365;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 360;
                this.match(asirParser.QUESTION);
                this.state = 361;
                (localContext as TernaryContext)._consequence = this.expr();
                this.state = 362;
                this.match(asirParser.COLON);
                this.state = 363;
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
        this.enterRule(localContext, 42, asirParser.RULE_quoteExpr);
        let _la: number;
        try {
            localContext = new QuoteContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 367;
                this.match(asirParser.BACK);
                }
            }

            this.state = 370;
            this.qeImplExpr();
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
    public qeImplExpr(): QeImplExprContext {
        let localContext = new QeImplExprContext(this.context, this.state);
        this.enterRule(localContext, 44, asirParser.RULE_qeImplExpr);
        let _la: number;
        try {
            localContext = new QEImplContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 372;
            this.qeNotExpr();
            this.state = 377;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 7) !== 0)) {
                {
                {
                this.state = 373;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 7) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 374;
                this.qeNotExpr();
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
    public qeNotExpr(): QeNotExprContext {
        let localContext = new QeNotExprContext(this.context, this.state);
        this.enterRule(localContext, 46, asirParser.RULE_qeNotExpr);
        let _la: number;
        try {
            localContext = new QEnotContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.qeOrExpr();
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 55) {
                {
                {
                this.state = 381;
                this.match(asirParser.QE_8);
                this.state = 382;
                this.qeOrExpr();
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
    public qeOrExpr(): QeOrExprContext {
        let localContext = new QeOrExprContext(this.context, this.state);
        this.enterRule(localContext, 48, asirParser.RULE_qeOrExpr);
        let _la: number;
        try {
            localContext = new QEorContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 388;
            this.qeAndExpr();
            this.state = 393;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58 || _la === 59) {
                {
                {
                this.state = 389;
                _la = this.tokenStream.LA(1);
                if(!(_la === 58 || _la === 59)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 390;
                this.qeAndExpr();
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
    public qeAndExpr(): QeAndExprContext {
        let localContext = new QeAndExprContext(this.context, this.state);
        this.enterRule(localContext, 50, asirParser.RULE_qeAndExpr);
        let _la: number;
        try {
            localContext = new QEandContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            this.qeCompareExpr();
            this.state = 401;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 56 || _la === 57) {
                {
                {
                this.state = 397;
                _la = this.tokenStream.LA(1);
                if(!(_la === 56 || _la === 57)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 398;
                this.qeCompareExpr();
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
    public qeCompareExpr(): QeCompareExprContext {
        let localContext = new QeCompareExprContext(this.context, this.state);
        this.enterRule(localContext, 52, asirParser.RULE_qeCompareExpr);
        let _la: number;
        try {
            localContext = new QECompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.orExpr();
            this.state = 409;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 127) !== 0)) {
                {
                {
                this.state = 405;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 127) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 406;
                this.orExpr();
                }
                }
                this.state = 411;
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
        this.enterRule(localContext, 54, asirParser.RULE_orExpr);
        let _la: number;
        try {
            localContext = new OrContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 412;
            this.andExpr();
            this.state = 417;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 413;
                this.match(asirParser.OR);
                this.state = 414;
                this.andExpr();
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
    public andExpr(): AndExprContext {
        let localContext = new AndExprContext(this.context, this.state);
        this.enterRule(localContext, 56, asirParser.RULE_andExpr);
        let _la: number;
        try {
            localContext = new AndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 420;
            this.compareExpr();
            this.state = 425;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 19) {
                {
                {
                this.state = 421;
                this.match(asirParser.AND);
                this.state = 422;
                this.compareExpr();
                }
                }
                this.state = 427;
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
        this.enterRule(localContext, 58, asirParser.RULE_compareExpr);
        let _la: number;
        try {
            localContext = new CompareContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.addSubExpr();
            this.state = 433;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0)) {
                {
                {
                this.state = 429;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 516096) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 430;
                this.addSubExpr();
                }
                }
                this.state = 435;
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
        this.enterRule(localContext, 60, asirParser.RULE_addSubExpr);
        let _la: number;
        try {
            let alternative: number;
            localContext = new AddSubContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 436;
            this.mulDivSurExpr();
            this.state = 441;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 437;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 22 || _la === 23)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 438;
                    this.mulDivSurExpr();
                    }
                    }
                }
                this.state = 443;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
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
        this.enterRule(localContext, 62, asirParser.RULE_mulDivSurExpr);
        let _la: number;
        try {
            localContext = new MulDivSurContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 444;
            this.unaryExpr();
            this.state = 449;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0)) {
                {
                {
                this.state = 445;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 446;
                this.unaryExpr();
                }
                }
                this.state = 451;
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
        this.enterRule(localContext, 64, asirParser.RULE_unaryExpr);
        try {
            this.state = 457;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
            case 1:
                localContext = new UnaryMinusContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 452;
                this.match(asirParser.MINUS);
                this.state = 453;
                this.unaryExpr();
                }
                break;
            case 2:
                localContext = new NotExprContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 454;
                this.match(asirParser.NOT);
                this.state = 455;
                this.unaryExpr();
                }
                break;
            case 3:
                localContext = new PowExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 456;
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
        this.enterRule(localContext, 66, asirParser.RULE_powerExpr);
        let _la: number;
        try {
            localContext = new PowExContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 459;
            (localContext as PowExContext)._base = this.factExpr();
            this.state = 462;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 460;
                this.match(asirParser.POWER);
                this.state = 461;
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
        this.enterRule(localContext, 68, asirParser.RULE_factExpr);
        try {
            localContext = new FactorialExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 467;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                {
                this.state = 464;
                this.postfixExpr();
                }
                break;
            case 2:
                {
                this.state = 465;
                this.prefixExpr();
                }
                break;
            case 3:
                {
                this.state = 466;
                this.indexAccessExpr();
                }
                break;
            }
            this.state = 470;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                {
                this.state = 469;
                this.match(asirParser.NOT);
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
        this.enterRule(localContext, 70, asirParser.RULE_prefixExpr);
        let _la: number;
        try {
            localContext = new PreFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 472;
            _la = this.tokenStream.LA(1);
            if(!(_la === 4 || _la === 5)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 473;
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
        this.enterRule(localContext, 72, asirParser.RULE_postfixExpr);
        let _la: number;
        try {
            localContext = new PostFixContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 475;
            this.indexAccessExpr();
            this.state = 476;
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
        this.enterRule(localContext, 74, asirParser.RULE_indexAccessExpr);
        try {
            let alternative: number;
            localContext = new IndexAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 478;
            this.memberAccessExpr();
            this.state = 485;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 479;
                    this.match(asirParser.LBRACKET);
                    this.state = 480;
                    this.expr();
                    this.state = 481;
                    this.match(asirParser.RBRACKET);
                    }
                    }
                }
                this.state = 487;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
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
        this.enterRule(localContext, 76, asirParser.RULE_memberAccessExpr);
        let _la: number;
        try {
            localContext = new MemberAccessContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 488;
            this.primaryExpr();
            this.state = 493;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12) {
                {
                {
                this.state = 489;
                this.match(asirParser.ARROW);
                this.state = 490;
                this.indeterminate();
                }
                }
                this.state = 495;
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
        this.enterRule(localContext, 78, asirParser.RULE_primaryExpr);
        let _la: number;
        try {
            this.state = 561;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                localContext = new IndExprContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 496;
                this.indeterminate();
                }
                break;
            case 2:
                localContext = new RealContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 497;
                this.num();
                }
                break;
            case 3:
                localContext = new IdExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 498;
                this.id();
                }
                break;
            case 4:
                localContext = new FCallExprContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 500;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                    this.state = 499;
                    (localContext as FCallExprContext)._is_global = this.match(asirParser.COLON2);
                    }
                }

                this.state = 502;
                (localContext as FCallExprContext)._path = this.qualifiedName();
                this.state = 513;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                    this.state = 503;
                    this.match(asirParser.LBRANCE);
                    this.state = 504;
                    (localContext as FCallExprContext)._INT = this.match(asirParser.INT);
                    (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                    this.state = 509;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 505;
                        this.match(asirParser.COMMA);
                        this.state = 506;
                        (localContext as FCallExprContext)._INT = this.match(asirParser.INT);
                        (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                        }
                        }
                        this.state = 511;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 512;
                    this.match(asirParser.RBRANCE);
                    }
                }

                this.state = 515;
                this.match(asirParser.LPAREN);
                this.state = 517;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                    {
                    this.state = 516;
                    (localContext as FCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 528;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 519;
                    this.match(asirParser.MID);
                    this.state = 520;
                    (localContext as FCallExprContext)._optionPair = this.optionPair();
                    (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                    this.state = 525;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 521;
                        this.match(asirParser.COMMA);
                        this.state = 522;
                        (localContext as FCallExprContext)._optionPair = this.optionPair();
                        (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 527;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 530;
                this.match(asirParser.RPAREN);
                }
                break;
            case 5:
                localContext = new FunctorCallExprContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 532;
                this.match(asirParser.LPAREN);
                this.state = 533;
                this.match(asirParser.MULT);
                this.state = 534;
                (localContext as FunctorCallExprContext)._callee = this.expr();
                this.state = 535;
                this.match(asirParser.RPAREN);
                this.state = 536;
                this.match(asirParser.LPAREN);
                this.state = 538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                    {
                    this.state = 537;
                    (localContext as FunctorCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 549;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 540;
                    this.match(asirParser.MID);
                    this.state = 541;
                    (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                    (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                    this.state = 546;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 41) {
                        {
                        {
                        this.state = 542;
                        this.match(asirParser.COMMA);
                        this.state = 543;
                        (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                        (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 548;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 551;
                this.match(asirParser.RPAREN);
                }
                break;
            case 6:
                localContext = new ParenContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 553;
                this.match(asirParser.LPAREN);
                this.state = 554;
                this.expr();
                this.state = 555;
                this.match(asirParser.RPAREN);
                }
                break;
            case 7:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 557;
                this.match(asirParser.STRING);
                }
                break;
            case 8:
                localContext = new ListLiteralContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 558;
                this.list();
                }
                break;
            case 9:
                localContext = new DpLiteralContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 559;
                this.dpoly();
                }
                break;
            case 10:
                localContext = new PreChrExprContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 560;
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
        this.enterRule(localContext, 80, asirParser.RULE_dpoly);
        let _la: number;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 563;
            this.match(asirParser.LTLT);
            this.state = 564;
            this.match(asirParser.INT);
            this.state = 569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 565;
                this.match(asirParser.COMMA);
                this.state = 566;
                this.match(asirParser.INT);
                }
                }
                this.state = 571;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 574;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 572;
                this.match(asirParser.COLON);
                this.state = 573;
                this.match(asirParser.INT);
                }
            }

            this.state = 576;
            this.match(asirParser.GTGT);
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
        this.enterRule(localContext, 82, asirParser.RULE_rational);
        let _la: number;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 579;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 578;
                this.match(asirParser.MINUS);
                }
            }

            this.state = 581;
            this.match(asirParser.INT);
            this.state = 582;
            this.match(asirParser.DIV);
            this.state = 584;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 583;
                this.match(asirParser.MINUS);
                }
            }

            this.state = 586;
            this.match(asirParser.INT);
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
        this.enterRule(localContext, 84, asirParser.RULE_decimal);
        let _la: number;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 588;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 88)) {
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
        this.enterRule(localContext, 86, asirParser.RULE_num);
        try {
            this.state = 596;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                localContext = new HexNumContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 590;
                this.match(asirParser.HEX);
                }
                break;
            case 2:
                localContext = new BitNumContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 591;
                this.match(asirParser.BIT);
                }
                break;
            case 3:
                localContext = new RatNumContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 592;
                this.rational();
                }
                break;
            case 4:
                localContext = new DecNumContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 593;
                this.decimal();
                }
                break;
            case 5:
                localContext = new ImaNumContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 594;
                this.match(asirParser.IMAGINARY);
                }
                break;
            case 6:
                localContext = new GenNumContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 595;
                this.match(asirParser.AEGEN);
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
        this.enterRule(localContext, 88, asirParser.RULE_id);
        try {
            this.state = 601;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.BEFORE:
                localContext = new BefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 598;
                this.match(asirParser.BEFORE);
                }
                break;
            case asirParser.BEFORE_N:
                localContext = new BefNContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 599;
                this.match(asirParser.BEFORE_N);
                }
                break;
            case asirParser.VAR_2:
                localContext = new V2IdContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 600;
                this.match(asirParser.VAR_2);
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
        this.enterRule(localContext, 90, asirParser.RULE_indeterminate);
        try {
            this.state = 606;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.ID:
                localContext = new FuncContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 603;
                this.match(asirParser.ID);
                }
                break;
            case asirParser.ATFUNC:
                localContext = new AtFuncContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 604;
                this.match(asirParser.ATFUNC);
                }
                break;
            case asirParser.NOSTRING:
                localContext = new ChFuncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 605;
                this.match(asirParser.NOSTRING);
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
        this.enterRule(localContext, 92, asirParser.RULE_list);
        let _la: number;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 608;
            this.match(asirParser.LBRACKET);
            this.state = 610;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 8065) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7340063) !== 0)) {
                {
                this.state = 609;
                this.exprlist();
                }
            }

            this.state = 612;
            this.match(asirParser.RBRACKET);
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
        this.enterRule(localContext, 94, asirParser.RULE_block);
        let _la: number;
        try {
            this.state = 623;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.LBRANCE:
                localContext = new SentenceContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 614;
                this.match(asirParser.LBRANCE);
                this.state = 618;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026539953) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 1883242493) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 59) !== 0)) {
                    {
                    {
                    this.state = 615;
                    this.statement();
                    }
                    }
                    this.state = 620;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 621;
                this.match(asirParser.RBRANCE);
                }
                break;
            case asirParser.LTLT:
            case asirParser.COLON2:
            case asirParser.INC:
            case asirParser.DEC:
            case asirParser.NOT:
            case asirParser.MINUS:
            case asirParser.BACK:
            case asirParser.LPAREN:
            case asirParser.LBRACKET:
            case asirParser.SEMI:
            case asirParser.DOLLAR:
            case asirParser.HEX:
            case asirParser.BIT:
            case asirParser.IMAGINARY:
            case asirParser.AEGEN:
            case asirParser.BEFORE:
            case asirParser.BEFORE_N:
            case asirParser.DEF:
            case asirParser.IF:
            case asirParser.FOR:
            case asirParser.WHILE:
            case asirParser.DO:
            case asirParser.RETURN:
            case asirParser.CONTINUE:
            case asirParser.BREAK:
            case asirParser.STRUCT:
            case asirParser.MODULE:
            case asirParser.ENDMODULE:
            case asirParser.EXTERN:
            case asirParser.STATIC:
            case asirParser.GLOBAL:
            case asirParser.LOCAL:
            case asirParser.LOCALF:
            case asirParser.FUNCTION:
            case asirParser.END:
            case asirParser.QUIT:
            case asirParser.DEBUG:
            case asirParser.ATFUNC:
            case asirParser.VAR_2:
            case asirParser.ID:
            case asirParser.FLOAT:
            case asirParser.INT:
            case asirParser.PIFDEF:
            case asirParser.PIFNDEF:
            case asirParser.PIF:
            case asirParser.PINCLUDE:
            case asirParser.PDEFINE:
            case asirParser.CHAR:
            case asirParser.STRING:
            case asirParser.NOSTRING:
                localContext = new Sentence1Context(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 622;
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
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 96, asirParser.RULE_qualifiedName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 627;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                {
                this.state = 625;
                localContext._moduleName = this.match(asirParser.ID);
                this.state = 626;
                this.match(asirParser.DOT);
                }
                break;
            }
            this.state = 629;
            localContext._funcName = this.indeterminate();
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
    public dottedIdentifier(): DottedIdentifierContext {
        let localContext = new DottedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 98, asirParser.RULE_dottedIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 631;
            this.indeterminate();
            this.state = 634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 632;
                this.match(asirParser.DOT);
                this.state = 633;
                this.indeterminate();
                }
                }
                this.state = 636;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 89);
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
        this.enterRule(localContext, 100, asirParser.RULE_exprlist);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 638;
            this.expr();
            this.state = 643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41) {
                {
                {
                this.state = 639;
                this.match(asirParser.COMMA);
                this.state = 640;
                this.expr();
                }
                }
                this.state = 645;
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
        this.enterRule(localContext, 102, asirParser.RULE_terminator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
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
        this.enterRule(localContext, 104, asirParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 648;
            this.match(asirParser.SYSTEM_PATH_LITERAL);
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
        this.enterRule(localContext, 106, asirParser.RULE_elifClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 650;
            this.match(asirParser.PELIF);
            this.state = 651;
            localContext._condition = this.expr();
            this.state = 655;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026539953) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 1883242493) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 59) !== 0)) {
                {
                {
                this.state = 652;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 657;
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
        this.enterRule(localContext, 108, asirParser.RULE_elseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 658;
            this.match(asirParser.PELSE);
            this.state = 662;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840378) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 4026539953) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 1883242493) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 59) !== 0)) {
                {
                {
                this.state = 659;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 664;
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
        this.enterRule(localContext, 110, asirParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 665;
            localContext._key = this.indeterminate();
            this.state = 666;
            this.match(asirParser.ASSIGN);
            this.state = 667;
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
        4,1,107,670,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,1,0,5,0,114,8,0,10,0,12,0,117,9,
        0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,3,1,140,8,1,1,2,1,2,1,2,1,2,1,2,3,2,147,8,
        2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,155,8,3,10,3,12,3,158,9,3,3,3,160,
        8,3,1,3,3,3,163,8,3,1,3,1,3,1,3,1,3,5,3,169,8,3,10,3,12,3,172,9,
        3,1,3,5,3,175,8,3,10,3,12,3,178,9,3,1,3,3,3,181,8,3,1,3,1,3,1,3,
        1,3,1,3,3,3,188,8,3,3,3,190,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,198,
        8,4,10,4,12,4,201,9,4,3,4,203,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,
        5,1,5,5,5,214,8,5,10,5,12,5,217,9,5,3,5,219,8,5,1,5,1,5,1,5,1,6,
        1,6,1,6,1,6,1,6,1,6,1,6,3,6,231,8,6,1,7,1,7,1,7,3,7,236,8,7,1,7,
        1,7,3,7,240,8,7,1,7,1,7,3,7,244,8,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,
        252,8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,262,8,9,1,9,1,9,1,9,
        1,10,1,10,3,10,269,8,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,
        1,13,1,13,1,13,1,13,1,13,1,13,5,13,285,8,13,10,13,12,13,288,9,13,
        1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,
        1,17,1,17,1,17,5,17,306,8,17,10,17,12,17,309,9,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,3,17,319,8,17,1,18,1,18,1,19,1,19,1,19,
        1,19,1,19,1,19,5,19,329,8,19,10,19,12,19,332,9,19,1,19,1,19,1,19,
        1,19,1,19,4,19,339,8,19,11,19,12,19,340,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,5,19,350,8,19,10,19,12,19,353,9,19,1,19,1,19,1,19,3,19,
        358,8,19,1,20,1,20,1,20,1,20,1,20,1,20,3,20,366,8,20,1,21,3,21,369,
        8,21,1,21,1,21,1,22,1,22,1,22,5,22,376,8,22,10,22,12,22,379,9,22,
        1,23,1,23,1,23,5,23,384,8,23,10,23,12,23,387,9,23,1,24,1,24,1,24,
        5,24,392,8,24,10,24,12,24,395,9,24,1,25,1,25,1,25,5,25,400,8,25,
        10,25,12,25,403,9,25,1,26,1,26,1,26,5,26,408,8,26,10,26,12,26,411,
        9,26,1,27,1,27,1,27,5,27,416,8,27,10,27,12,27,419,9,27,1,28,1,28,
        1,28,5,28,424,8,28,10,28,12,28,427,9,28,1,29,1,29,1,29,5,29,432,
        8,29,10,29,12,29,435,9,29,1,30,1,30,1,30,5,30,440,8,30,10,30,12,
        30,443,9,30,1,31,1,31,1,31,5,31,448,8,31,10,31,12,31,451,9,31,1,
        32,1,32,1,32,1,32,1,32,3,32,458,8,32,1,33,1,33,1,33,3,33,463,8,33,
        1,34,1,34,1,34,3,34,468,8,34,1,34,3,34,471,8,34,1,35,1,35,1,35,1,
        36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,5,37,484,8,37,10,37,12,37,
        487,9,37,1,38,1,38,1,38,5,38,492,8,38,10,38,12,38,495,9,38,1,39,
        1,39,1,39,1,39,3,39,501,8,39,1,39,1,39,1,39,1,39,1,39,5,39,508,8,
        39,10,39,12,39,511,9,39,1,39,3,39,514,8,39,1,39,1,39,3,39,518,8,
        39,1,39,1,39,1,39,1,39,5,39,524,8,39,10,39,12,39,527,9,39,3,39,529,
        8,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,539,8,39,1,39,
        1,39,1,39,1,39,5,39,545,8,39,10,39,12,39,548,9,39,3,39,550,8,39,
        1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,562,8,39,
        1,40,1,40,1,40,1,40,5,40,568,8,40,10,40,12,40,571,9,40,1,40,1,40,
        3,40,575,8,40,1,40,1,40,1,41,3,41,580,8,41,1,41,1,41,1,41,3,41,585,
        8,41,1,41,1,41,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,3,43,597,
        8,43,1,44,1,44,1,44,3,44,602,8,44,1,45,1,45,1,45,3,45,607,8,45,1,
        46,1,46,3,46,611,8,46,1,46,1,46,1,47,1,47,5,47,617,8,47,10,47,12,
        47,620,9,47,1,47,1,47,3,47,624,8,47,1,48,1,48,3,48,628,8,48,1,48,
        1,48,1,49,1,49,1,49,4,49,635,8,49,11,49,12,49,636,1,50,1,50,1,50,
        5,50,642,8,50,10,50,12,50,645,9,50,1,51,1,51,1,52,1,52,1,53,1,53,
        1,53,5,53,654,8,53,10,53,12,53,657,9,53,1,54,1,54,5,54,661,8,54,
        10,54,12,54,664,9,54,1,55,1,55,1,55,1,55,1,55,0,0,56,0,2,4,6,8,10,
        12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
        56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
        100,102,104,106,108,110,0,13,1,0,95,97,1,0,75,79,2,0,6,11,28,28,
        1,0,60,62,1,0,58,59,1,0,56,57,1,0,48,54,1,0,13,18,1,0,22,23,1,0,
        24,26,1,0,4,5,1,0,87,88,1,0,39,40,720,0,115,1,0,0,0,2,139,1,0,0,
        0,4,146,1,0,0,0,6,189,1,0,0,0,8,191,1,0,0,0,10,207,1,0,0,0,12,223,
        1,0,0,0,14,232,1,0,0,0,16,248,1,0,0,0,18,256,1,0,0,0,20,266,1,0,
        0,0,22,272,1,0,0,0,24,275,1,0,0,0,26,278,1,0,0,0,28,292,1,0,0,0,
        30,295,1,0,0,0,32,298,1,0,0,0,34,318,1,0,0,0,36,320,1,0,0,0,38,357,
        1,0,0,0,40,359,1,0,0,0,42,368,1,0,0,0,44,372,1,0,0,0,46,380,1,0,
        0,0,48,388,1,0,0,0,50,396,1,0,0,0,52,404,1,0,0,0,54,412,1,0,0,0,
        56,420,1,0,0,0,58,428,1,0,0,0,60,436,1,0,0,0,62,444,1,0,0,0,64,457,
        1,0,0,0,66,459,1,0,0,0,68,467,1,0,0,0,70,472,1,0,0,0,72,475,1,0,
        0,0,74,478,1,0,0,0,76,488,1,0,0,0,78,561,1,0,0,0,80,563,1,0,0,0,
        82,579,1,0,0,0,84,588,1,0,0,0,86,596,1,0,0,0,88,601,1,0,0,0,90,606,
        1,0,0,0,92,608,1,0,0,0,94,623,1,0,0,0,96,627,1,0,0,0,98,631,1,0,
        0,0,100,638,1,0,0,0,102,646,1,0,0,0,104,648,1,0,0,0,106,650,1,0,
        0,0,108,658,1,0,0,0,110,665,1,0,0,0,112,114,3,2,1,0,113,112,1,0,
        0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,
        0,0,117,115,1,0,0,0,118,119,5,0,0,1,119,1,1,0,0,0,120,121,3,36,18,
        0,121,122,3,102,51,0,122,140,1,0,0,0,123,140,3,102,51,0,124,140,
        3,8,4,0,125,140,3,10,5,0,126,140,3,12,6,0,127,140,3,14,7,0,128,140,
        3,16,8,0,129,140,3,18,9,0,130,140,3,20,10,0,131,140,3,24,12,0,132,
        140,3,22,11,0,133,140,3,26,13,0,134,140,3,28,14,0,135,140,3,30,15,
        0,136,140,3,32,16,0,137,140,3,34,17,0,138,140,3,6,3,0,139,120,1,
        0,0,0,139,123,1,0,0,0,139,124,1,0,0,0,139,125,1,0,0,0,139,126,1,
        0,0,0,139,127,1,0,0,0,139,128,1,0,0,0,139,129,1,0,0,0,139,130,1,
        0,0,0,139,131,1,0,0,0,139,132,1,0,0,0,139,133,1,0,0,0,139,134,1,
        0,0,0,139,135,1,0,0,0,139,136,1,0,0,0,139,137,1,0,0,0,139,138,1,
        0,0,0,140,3,1,0,0,0,141,142,5,104,0,0,142,147,5,86,0,0,143,144,5,
        86,0,0,144,145,5,103,0,0,145,147,5,86,0,0,146,141,1,0,0,0,146,143,
        1,0,0,0,147,5,1,0,0,0,148,149,5,102,0,0,149,162,5,86,0,0,150,159,
        5,31,0,0,151,156,5,86,0,0,152,153,5,41,0,0,153,155,5,86,0,0,154,
        152,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,
        160,1,0,0,0,158,156,1,0,0,0,159,151,1,0,0,0,159,160,1,0,0,0,160,
        161,1,0,0,0,161,163,5,32,0,0,162,150,1,0,0,0,162,163,1,0,0,0,163,
        164,1,0,0,0,164,190,3,36,18,0,165,166,7,0,0,0,166,170,3,36,18,0,
        167,169,3,2,1,0,168,167,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,
        170,171,1,0,0,0,171,176,1,0,0,0,172,170,1,0,0,0,173,175,3,106,53,
        0,174,173,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,
        0,177,180,1,0,0,0,178,176,1,0,0,0,179,181,3,108,54,0,180,179,1,0,
        0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,5,100,0,0,183,190,1,
        0,0,0,184,187,5,101,0,0,185,188,3,104,52,0,186,188,5,105,0,0,187,
        185,1,0,0,0,187,186,1,0,0,0,188,190,1,0,0,0,189,148,1,0,0,0,189,
        165,1,0,0,0,189,184,1,0,0,0,190,7,1,0,0,0,191,192,5,63,0,0,192,193,
        3,90,45,0,193,202,5,31,0,0,194,199,5,86,0,0,195,196,5,41,0,0,196,
        198,5,86,0,0,197,195,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,
        200,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,202,194,1,0,0,0,202,
        203,1,0,0,0,203,204,1,0,0,0,204,205,5,32,0,0,205,206,3,94,47,0,206,
        9,1,0,0,0,207,208,5,80,0,0,208,209,3,90,45,0,209,218,5,31,0,0,210,
        215,3,90,45,0,211,212,5,41,0,0,212,214,3,90,45,0,213,211,1,0,0,0,
        214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,219,1,0,0,0,
        217,215,1,0,0,0,218,210,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,
        220,221,5,32,0,0,221,222,3,102,51,0,222,11,1,0,0,0,223,224,5,64,
        0,0,224,225,5,31,0,0,225,226,3,36,18,0,226,227,5,32,0,0,227,230,
        3,94,47,0,228,229,5,68,0,0,229,231,3,94,47,0,230,228,1,0,0,0,230,
        231,1,0,0,0,231,13,1,0,0,0,232,233,5,65,0,0,233,235,5,31,0,0,234,
        236,3,100,50,0,235,234,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,
        239,5,39,0,0,238,240,3,100,50,0,239,238,1,0,0,0,239,240,1,0,0,0,
        240,241,1,0,0,0,241,243,5,39,0,0,242,244,3,100,50,0,243,242,1,0,
        0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,5,32,0,0,246,247,3,94,
        47,0,247,15,1,0,0,0,248,249,5,66,0,0,249,251,5,31,0,0,250,252,3,
        100,50,0,251,250,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,0,253,254,
        5,32,0,0,254,255,3,94,47,0,255,17,1,0,0,0,256,257,5,67,0,0,257,258,
        3,94,47,0,258,259,5,66,0,0,259,261,5,31,0,0,260,262,3,100,50,0,261,
        260,1,0,0,0,261,262,1,0,0,0,262,263,1,0,0,0,263,264,5,32,0,0,264,
        265,5,39,0,0,265,19,1,0,0,0,266,268,5,69,0,0,267,269,3,36,18,0,268,
        267,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,3,102,51,0,271,
        21,1,0,0,0,272,273,5,70,0,0,273,274,3,102,51,0,274,23,1,0,0,0,275,
        276,5,71,0,0,276,277,3,102,51,0,277,25,1,0,0,0,278,279,5,72,0,0,
        279,280,3,90,45,0,280,281,5,33,0,0,281,286,3,90,45,0,282,283,5,41,
        0,0,283,285,3,90,45,0,284,282,1,0,0,0,285,288,1,0,0,0,286,284,1,
        0,0,0,286,287,1,0,0,0,287,289,1,0,0,0,288,286,1,0,0,0,289,290,5,
        34,0,0,290,291,3,102,51,0,291,27,1,0,0,0,292,293,5,81,0,0,293,294,
        3,102,51,0,294,29,1,0,0,0,295,296,5,82,0,0,296,297,3,102,51,0,297,
        31,1,0,0,0,298,299,5,83,0,0,299,300,3,102,51,0,300,33,1,0,0,0,301,
        302,7,1,0,0,302,307,3,90,45,0,303,304,5,41,0,0,304,306,3,90,45,0,
        305,303,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,
        308,310,1,0,0,0,309,307,1,0,0,0,310,311,3,102,51,0,311,319,1,0,0,
        0,312,313,5,73,0,0,313,314,3,90,45,0,314,315,3,102,51,0,315,319,
        1,0,0,0,316,317,5,74,0,0,317,319,3,102,51,0,318,301,1,0,0,0,318,
        312,1,0,0,0,318,316,1,0,0,0,319,35,1,0,0,0,320,321,3,38,19,0,321,
        37,1,0,0,0,322,358,3,40,20,0,323,330,5,86,0,0,324,325,5,35,0,0,325,
        326,3,36,18,0,326,327,5,36,0,0,327,329,1,0,0,0,328,324,1,0,0,0,329,
        332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,333,1,0,0,0,332,
        330,1,0,0,0,333,334,7,2,0,0,334,358,3,38,19,0,335,338,5,86,0,0,336,
        337,5,12,0,0,337,339,3,90,45,0,338,336,1,0,0,0,339,340,1,0,0,0,340,
        338,1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,343,7,2,0,0,343,
        344,3,38,19,0,344,358,1,0,0,0,345,346,5,35,0,0,346,351,5,86,0,0,
        347,348,5,41,0,0,348,350,5,86,0,0,349,347,1,0,0,0,350,353,1,0,0,
        0,351,349,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,0,353,351,1,0,0,
        0,354,355,5,36,0,0,355,356,7,2,0,0,356,358,3,38,19,0,357,322,1,0,
        0,0,357,323,1,0,0,0,357,335,1,0,0,0,357,345,1,0,0,0,358,39,1,0,0,
        0,359,365,3,42,21,0,360,361,5,37,0,0,361,362,3,36,18,0,362,363,5,
        38,0,0,363,364,3,36,18,0,364,366,1,0,0,0,365,360,1,0,0,0,365,366,
        1,0,0,0,366,41,1,0,0,0,367,369,5,29,0,0,368,367,1,0,0,0,368,369,
        1,0,0,0,369,370,1,0,0,0,370,371,3,44,22,0,371,43,1,0,0,0,372,377,
        3,46,23,0,373,374,7,3,0,0,374,376,3,46,23,0,375,373,1,0,0,0,376,
        379,1,0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,378,45,1,0,0,0,379,377,
        1,0,0,0,380,385,3,48,24,0,381,382,5,55,0,0,382,384,3,48,24,0,383,
        381,1,0,0,0,384,387,1,0,0,0,385,383,1,0,0,0,385,386,1,0,0,0,386,
        47,1,0,0,0,387,385,1,0,0,0,388,393,3,50,25,0,389,390,7,4,0,0,390,
        392,3,50,25,0,391,389,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,
        394,1,0,0,0,394,49,1,0,0,0,395,393,1,0,0,0,396,401,3,52,26,0,397,
        398,7,5,0,0,398,400,3,52,26,0,399,397,1,0,0,0,400,403,1,0,0,0,401,
        399,1,0,0,0,401,402,1,0,0,0,402,51,1,0,0,0,403,401,1,0,0,0,404,409,
        3,54,27,0,405,406,7,6,0,0,406,408,3,54,27,0,407,405,1,0,0,0,408,
        411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,53,1,0,0,0,411,409,
        1,0,0,0,412,417,3,56,28,0,413,414,5,20,0,0,414,416,3,56,28,0,415,
        413,1,0,0,0,416,419,1,0,0,0,417,415,1,0,0,0,417,418,1,0,0,0,418,
        55,1,0,0,0,419,417,1,0,0,0,420,425,3,58,29,0,421,422,5,19,0,0,422,
        424,3,58,29,0,423,421,1,0,0,0,424,427,1,0,0,0,425,423,1,0,0,0,425,
        426,1,0,0,0,426,57,1,0,0,0,427,425,1,0,0,0,428,433,3,60,30,0,429,
        430,7,7,0,0,430,432,3,60,30,0,431,429,1,0,0,0,432,435,1,0,0,0,433,
        431,1,0,0,0,433,434,1,0,0,0,434,59,1,0,0,0,435,433,1,0,0,0,436,441,
        3,62,31,0,437,438,7,8,0,0,438,440,3,62,31,0,439,437,1,0,0,0,440,
        443,1,0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,442,61,1,0,0,0,443,441,
        1,0,0,0,444,449,3,64,32,0,445,446,7,9,0,0,446,448,3,64,32,0,447,
        445,1,0,0,0,448,451,1,0,0,0,449,447,1,0,0,0,449,450,1,0,0,0,450,
        63,1,0,0,0,451,449,1,0,0,0,452,453,5,23,0,0,453,458,3,64,32,0,454,
        455,5,21,0,0,455,458,3,64,32,0,456,458,3,66,33,0,457,452,1,0,0,0,
        457,454,1,0,0,0,457,456,1,0,0,0,458,65,1,0,0,0,459,462,3,68,34,0,
        460,461,5,27,0,0,461,463,3,64,32,0,462,460,1,0,0,0,462,463,1,0,0,
        0,463,67,1,0,0,0,464,468,3,72,36,0,465,468,3,70,35,0,466,468,3,74,
        37,0,467,464,1,0,0,0,467,465,1,0,0,0,467,466,1,0,0,0,468,470,1,0,
        0,0,469,471,5,21,0,0,470,469,1,0,0,0,470,471,1,0,0,0,471,69,1,0,
        0,0,472,473,7,10,0,0,473,474,3,74,37,0,474,71,1,0,0,0,475,476,3,
        74,37,0,476,477,7,10,0,0,477,73,1,0,0,0,478,485,3,76,38,0,479,480,
        5,35,0,0,480,481,3,36,18,0,481,482,5,36,0,0,482,484,1,0,0,0,483,
        479,1,0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,485,486,1,0,0,0,486,
        75,1,0,0,0,487,485,1,0,0,0,488,493,3,78,39,0,489,490,5,12,0,0,490,
        492,3,90,45,0,491,489,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,0,493,
        494,1,0,0,0,494,77,1,0,0,0,495,493,1,0,0,0,496,562,3,90,45,0,497,
        562,3,86,43,0,498,562,3,88,44,0,499,501,5,3,0,0,500,499,1,0,0,0,
        500,501,1,0,0,0,501,502,1,0,0,0,502,513,3,96,48,0,503,504,5,33,0,
        0,504,509,5,88,0,0,505,506,5,41,0,0,506,508,5,88,0,0,507,505,1,0,
        0,0,508,511,1,0,0,0,509,507,1,0,0,0,509,510,1,0,0,0,510,512,1,0,
        0,0,511,509,1,0,0,0,512,514,5,34,0,0,513,503,1,0,0,0,513,514,1,0,
        0,0,514,515,1,0,0,0,515,517,5,31,0,0,516,518,3,100,50,0,517,516,
        1,0,0,0,517,518,1,0,0,0,518,528,1,0,0,0,519,520,5,30,0,0,520,525,
        3,110,55,0,521,522,5,41,0,0,522,524,3,110,55,0,523,521,1,0,0,0,524,
        527,1,0,0,0,525,523,1,0,0,0,525,526,1,0,0,0,526,529,1,0,0,0,527,
        525,1,0,0,0,528,519,1,0,0,0,528,529,1,0,0,0,529,530,1,0,0,0,530,
        531,5,32,0,0,531,562,1,0,0,0,532,533,5,31,0,0,533,534,5,24,0,0,534,
        535,3,36,18,0,535,536,5,32,0,0,536,538,5,31,0,0,537,539,3,100,50,
        0,538,537,1,0,0,0,538,539,1,0,0,0,539,549,1,0,0,0,540,541,5,30,0,
        0,541,546,3,110,55,0,542,543,5,41,0,0,543,545,3,110,55,0,544,542,
        1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,550,
        1,0,0,0,548,546,1,0,0,0,549,540,1,0,0,0,549,550,1,0,0,0,550,551,
        1,0,0,0,551,552,5,32,0,0,552,562,1,0,0,0,553,554,5,31,0,0,554,555,
        3,36,18,0,555,556,5,32,0,0,556,562,1,0,0,0,557,562,5,105,0,0,558,
        562,3,92,46,0,559,562,3,80,40,0,560,562,3,4,2,0,561,496,1,0,0,0,
        561,497,1,0,0,0,561,498,1,0,0,0,561,500,1,0,0,0,561,532,1,0,0,0,
        561,553,1,0,0,0,561,557,1,0,0,0,561,558,1,0,0,0,561,559,1,0,0,0,
        561,560,1,0,0,0,562,79,1,0,0,0,563,564,5,1,0,0,564,569,5,88,0,0,
        565,566,5,41,0,0,566,568,5,88,0,0,567,565,1,0,0,0,568,571,1,0,0,
        0,569,567,1,0,0,0,569,570,1,0,0,0,570,574,1,0,0,0,571,569,1,0,0,
        0,572,573,5,38,0,0,573,575,5,88,0,0,574,572,1,0,0,0,574,575,1,0,
        0,0,575,576,1,0,0,0,576,577,5,2,0,0,577,81,1,0,0,0,578,580,5,23,
        0,0,579,578,1,0,0,0,579,580,1,0,0,0,580,581,1,0,0,0,581,582,5,88,
        0,0,582,584,5,25,0,0,583,585,5,23,0,0,584,583,1,0,0,0,584,585,1,
        0,0,0,585,586,1,0,0,0,586,587,5,88,0,0,587,83,1,0,0,0,588,589,7,
        11,0,0,589,85,1,0,0,0,590,597,5,42,0,0,591,597,5,43,0,0,592,597,
        3,82,41,0,593,597,3,84,42,0,594,597,5,44,0,0,595,597,5,45,0,0,596,
        590,1,0,0,0,596,591,1,0,0,0,596,592,1,0,0,0,596,593,1,0,0,0,596,
        594,1,0,0,0,596,595,1,0,0,0,597,87,1,0,0,0,598,602,5,46,0,0,599,
        602,5,47,0,0,600,602,5,85,0,0,601,598,1,0,0,0,601,599,1,0,0,0,601,
        600,1,0,0,0,602,89,1,0,0,0,603,607,5,86,0,0,604,607,5,84,0,0,605,
        607,5,106,0,0,606,603,1,0,0,0,606,604,1,0,0,0,606,605,1,0,0,0,607,
        91,1,0,0,0,608,610,5,35,0,0,609,611,3,100,50,0,610,609,1,0,0,0,610,
        611,1,0,0,0,611,612,1,0,0,0,612,613,5,36,0,0,613,93,1,0,0,0,614,
        618,5,33,0,0,615,617,3,2,1,0,616,615,1,0,0,0,617,620,1,0,0,0,618,
        616,1,0,0,0,618,619,1,0,0,0,619,621,1,0,0,0,620,618,1,0,0,0,621,
        624,5,34,0,0,622,624,3,2,1,0,623,614,1,0,0,0,623,622,1,0,0,0,624,
        95,1,0,0,0,625,626,5,86,0,0,626,628,5,89,0,0,627,625,1,0,0,0,627,
        628,1,0,0,0,628,629,1,0,0,0,629,630,3,90,45,0,630,97,1,0,0,0,631,
        634,3,90,45,0,632,633,5,89,0,0,633,635,3,90,45,0,634,632,1,0,0,0,
        635,636,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,99,1,0,0,0,638,
        643,3,36,18,0,639,640,5,41,0,0,640,642,3,36,18,0,641,639,1,0,0,0,
        642,645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,101,1,0,0,0,
        645,643,1,0,0,0,646,647,7,12,0,0,647,103,1,0,0,0,648,649,5,107,0,
        0,649,105,1,0,0,0,650,651,5,99,0,0,651,655,3,36,18,0,652,654,3,2,
        1,0,653,652,1,0,0,0,654,657,1,0,0,0,655,653,1,0,0,0,655,656,1,0,
        0,0,656,107,1,0,0,0,657,655,1,0,0,0,658,662,5,98,0,0,659,661,3,2,
        1,0,660,659,1,0,0,0,661,664,1,0,0,0,662,660,1,0,0,0,662,663,1,0,
        0,0,663,109,1,0,0,0,664,662,1,0,0,0,665,666,3,90,45,0,666,667,5,
        28,0,0,667,668,3,36,18,0,668,111,1,0,0,0,72,115,139,146,156,159,
        162,170,176,180,187,189,199,202,215,218,230,235,239,243,251,261,
        268,286,307,318,330,340,351,357,365,368,377,385,393,401,409,417,
        425,433,441,449,457,462,467,470,485,493,500,509,513,517,525,528,
        538,546,549,561,569,574,579,584,596,601,606,610,618,623,627,636,
        643,655,662
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!asirParser.__ATN) {
            asirParser.__ATN = new antlr.ATNDeserializer().deserialize(asirParser._serializedATN);
        }

        return asirParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(asirParser.literalNames, asirParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return asirParser.vocabulary;
    }

    private static readonly decisionsToDFA = asirParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(asirParser.EOF, 0)!;
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
        return asirParser.RULE_prog;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_statement;
    }
    public override copyFrom(ctx: StatementContext): void {
        super.copyFrom(ctx);
    }
}
export class QuitStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionQuit(): FunctionQuitContext {
        return this.getRuleContext(0, FunctionQuitContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQuitStatement) {
             listener.enterQuitStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQuitStatement) {
             listener.exitQuitStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQuitStatement) {
            return visitor.visitQuitStatement(this);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterDoStatement) {
             listener.enterDoStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDoStatement) {
             listener.exitDoStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterForwardDeclStatement) {
             listener.enterForwardDeclStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitForwardDeclStatement) {
             listener.exitForwardDeclStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterModuleStatement) {
             listener.enterModuleStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitModuleStatement) {
             listener.exitModuleStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterWhileStatement) {
             listener.enterWhileStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitWhileStatement) {
             listener.exitWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EndStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionEnd(): FunctionEndContext {
        return this.getRuleContext(0, FunctionEndContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterEndStatement) {
             listener.enterEndStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitEndStatement) {
             listener.exitEndStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitEndStatement) {
            return visitor.visitEndStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DebugStatementContext extends StatementContext {
    public constructor(ctx: StatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionDebug(): FunctionDebugContext {
        return this.getRuleContext(0, FunctionDebugContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDebugStatement) {
             listener.enterDebugStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDebugStatement) {
             listener.exitDebugStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitDebugStatement) {
            return visitor.visitDebugStatement(this);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterEmptyLineStatement) {
             listener.enterEmptyLineStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitEmptyLineStatement) {
             listener.exitEmptyLineStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterPreproStatement) {
             listener.enterPreproStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPreproStatement) {
             listener.exitPreproStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterDefinitionStatement) {
             listener.enterDefinitionStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDefinitionStatement) {
             listener.exitDefinitionStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterStructStatement) {
             listener.enterStructStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitStructStatement) {
             listener.exitStructStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterExprStatement) {
             listener.enterExprStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitExprStatement) {
             listener.exitExprStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterForStatement) {
             listener.enterForStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitForStatement) {
             listener.exitForStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterContinueStatement) {
             listener.enterContinueStatement(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitContinueStatement) {
             listener.exitContinueStatement(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_prechar;
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
        return this.getToken(asirParser.CHAR, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(asirParser.ID, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPreChr) {
             listener.enterPreChr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPreChr) {
             listener.exitPreChr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    		return this.getTokens(asirParser.ID);
    	} else {
    		return this.getToken(asirParser.ID, i);
    	}
    }
    public CHARPLUS(): antlr.TerminalNode {
        return this.getToken(asirParser.CHARPLUS, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPreChrPlus) {
             listener.enterPreChrPlus(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPreChrPlus) {
             listener.exitPreChrPlus(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_preprocessor;
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
        return this.getToken(asirParser.PDEFINE, 0)!;
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.ID);
    	} else {
    		return this.getToken(asirParser.ID, i);
    	}
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(asirParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(asirParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPDef) {
             listener.enterPDef(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPDef) {
             listener.exitPDef(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.PINCLUDE, 0)!;
    }
    public systemPath(): SystemPathContext | null {
        return this.getRuleContext(0, SystemPathContext);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(asirParser.STRING, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPInc) {
             listener.enterPInc(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPInc) {
             listener.exitPInc(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.PENDIF, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public PIF(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PIF, 0);
    }
    public PIFDEF(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PIFDEF, 0);
    }
    public PIFNDEF(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PIFNDEF, 0);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterPIf) {
             listener.enterPIf(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPIf) {
             listener.exitPIf(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionDefinition;
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
        return this.getToken(asirParser.DEF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
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
    		return this.getTokens(asirParser.ID);
    	} else {
    		return this.getToken(asirParser.ID, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDef) {
             listener.enterDef(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDef) {
             listener.exitDef(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_formDeclaration;
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
        return this.getToken(asirParser.FUNCTION, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
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
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterFormDecl) {
             listener.enterFormDecl(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFormDecl) {
             listener.exitFormDecl(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionIf;
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
        return this.getToken(asirParser.IF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
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
        return this.getToken(asirParser.ELSE, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterIf) {
             listener.enterIf(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIf) {
             listener.exitIf(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionFor;
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
        return this.getToken(asirParser.FOR, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.SEMI);
    	} else {
    		return this.getToken(asirParser.SEMI, i);
    	}
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterFor) {
             listener.enterFor(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFor) {
             listener.exitFor(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionWhile;
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
        return this.getToken(asirParser.WHILE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterWhile) {
             listener.enterWhile(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitWhile) {
             listener.exitWhile(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionDo;
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
        return this.getToken(asirParser.DO, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(asirParser.WHILE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(asirParser.SEMI, 0)!;
    }
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDo) {
             listener.enterDo(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDo) {
             listener.exitDo(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionReturn;
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
        return this.getToken(asirParser.RETURN, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterReturn) {
             listener.enterReturn(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitReturn) {
             listener.exitReturn(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionContinue;
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
        return this.getToken(asirParser.CONTINUE, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterContinue) {
             listener.enterContinue(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitContinue) {
             listener.exitContinue(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionBreak;
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
        return this.getToken(asirParser.BREAK, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterBreak) {
             listener.enterBreak(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitBreak) {
             listener.exitBreak(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_functionStruct;
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
        return this.getToken(asirParser.STRUCT, 0)!;
    }
    public LBRANCE(): antlr.TerminalNode {
        return this.getToken(asirParser.LBRANCE, 0)!;
    }
    public RBRANCE(): antlr.TerminalNode {
        return this.getToken(asirParser.RBRANCE, 0)!;
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
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterStruct) {
             listener.enterStruct(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitStruct) {
             listener.exitStruct(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitStruct) {
            return visitor.visitStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionEndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_functionEnd;
    }
    public override copyFrom(ctx: FunctionEndContext): void {
        super.copyFrom(ctx);
    }
}
export class EndContext extends FunctionEndContext {
    public constructor(ctx: FunctionEndContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public END(): antlr.TerminalNode {
        return this.getToken(asirParser.END, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterEnd) {
             listener.enterEnd(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitEnd) {
             listener.exitEnd(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitEnd) {
            return visitor.visitEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionQuitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_functionQuit;
    }
    public override copyFrom(ctx: FunctionQuitContext): void {
        super.copyFrom(ctx);
    }
}
export class QuitContext extends FunctionQuitContext {
    public constructor(ctx: FunctionQuitContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QUIT(): antlr.TerminalNode {
        return this.getToken(asirParser.QUIT, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQuit) {
             listener.enterQuit(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQuit) {
             listener.exitQuit(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQuit) {
            return visitor.visitQuit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDebugContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_functionDebug;
    }
    public override copyFrom(ctx: FunctionDebugContext): void {
        super.copyFrom(ctx);
    }
}
export class DebugContext extends FunctionDebugContext {
    public constructor(ctx: FunctionDebugContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DEBUG(): antlr.TerminalNode {
        return this.getToken(asirParser.DEBUG, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDebug) {
             listener.enterDebug(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDebug) {
             listener.exitDebug(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitDebug) {
            return visitor.visitDebug(this);
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
        return asirParser.RULE_functionModule;
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
        return this.getToken(asirParser.ENDMODULE, 0)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterModuleEnd) {
             listener.enterModuleEnd(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitModuleEnd) {
             listener.exitModuleEnd(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.EXTERN, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.STATIC, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(asirParser.GLOBAL, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(asirParser.LOCAL, 0);
    }
    public LOCALF(): antlr.TerminalNode | null {
        return this.getToken(asirParser.LOCALF, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterModuleAssign) {
             listener.enterModuleAssign(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitModuleAssign) {
             listener.exitModuleAssign(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.MODULE, 0)!;
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public terminator(): TerminatorContext {
        return this.getRuleContext(0, TerminatorContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterModuleStart) {
             listener.enterModuleStart(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitModuleStart) {
             listener.exitModuleStart(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_expr;
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterMain) {
             listener.enterMain(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitMain) {
             listener.exitMain(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_assignmentExpr;
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
        return this.getToken(asirParser.LBRACKET, 0)!;
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.ID);
    	} else {
    		return this.getToken(asirParser.ID, i);
    	}
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(asirParser.RBRACKET, 0)!;
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MINUSEQ, 0);
    }
    public MULTEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MULTEQ, 0);
    }
    public DIVEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DIVEQ, 0);
    }
    public SUREQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.SUREQ, 0);
    }
    public POWEREQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.POWEREQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(asirParser.ASSIGN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterListAssign) {
             listener.enterListAssign(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitListAssign) {
             listener.exitListAssign(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.ID, 0)!;
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MINUSEQ, 0);
    }
    public MULTEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MULTEQ, 0);
    }
    public DIVEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DIVEQ, 0);
    }
    public SUREQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.SUREQ, 0);
    }
    public POWEREQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.POWEREQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(asirParser.ASSIGN, 0);
    }
    public ARROW(): antlr.TerminalNode[];
    public ARROW(i: number): antlr.TerminalNode | null;
    public ARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.ARROW);
    	} else {
    		return this.getToken(asirParser.ARROW, i);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterStructAssign) {
             listener.enterStructAssign(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitStructAssign) {
             listener.exitStructAssign(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterNoAssignment) {
             listener.enterNoAssignment(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitNoAssignment) {
             listener.exitNoAssignment(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.ID, 0)!;
    }
    public assignmentExpr(): AssignmentExprContext {
        return this.getRuleContext(0, AssignmentExprContext)!;
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MINUSEQ, 0);
    }
    public MULTEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MULTEQ, 0);
    }
    public DIVEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DIVEQ, 0);
    }
    public SUREQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.SUREQ, 0);
    }
    public POWEREQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.POWEREQ, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(asirParser.ASSIGN, 0);
    }
    public LBRACKET(): antlr.TerminalNode[];
    public LBRACKET(i: number): antlr.TerminalNode | null;
    public LBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.LBRACKET);
    	} else {
    		return this.getToken(asirParser.LBRACKET, i);
    	}
    }
    public RBRACKET(): antlr.TerminalNode[];
    public RBRACKET(i: number): antlr.TerminalNode | null;
    public RBRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.RBRACKET);
    	} else {
    		return this.getToken(asirParser.RBRACKET, i);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterAssign) {
             listener.enterAssign(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAssign) {
             listener.exitAssign(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_ternaryExpr;
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
        return this.getToken(asirParser.QUESTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(asirParser.COLON, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterTernary) {
             listener.enterTernary(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitTernary) {
             listener.exitTernary(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_quoteExpr;
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
    public qeImplExpr(): QeImplExprContext {
        return this.getRuleContext(0, QeImplExprContext)!;
    }
    public BACK(): antlr.TerminalNode | null {
        return this.getToken(asirParser.BACK, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQuote) {
             listener.enterQuote(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQuote) {
             listener.exitQuote(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQuote) {
            return visitor.visitQuote(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QeImplExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_qeImplExpr;
    }
    public override copyFrom(ctx: QeImplExprContext): void {
        super.copyFrom(ctx);
    }
}
export class QEImplContext extends QeImplExprContext {
    public constructor(ctx: QeImplExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qeNotExpr(): QeNotExprContext[];
    public qeNotExpr(i: number): QeNotExprContext | null;
    public qeNotExpr(i?: number): QeNotExprContext[] | QeNotExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QeNotExprContext);
        }

        return this.getRuleContext(i, QeNotExprContext);
    }
    public QE_IMPL(): antlr.TerminalNode[];
    public QE_IMPL(i: number): antlr.TerminalNode | null;
    public QE_IMPL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_IMPL);
    	} else {
    		return this.getToken(asirParser.QE_IMPL, i);
    	}
    }
    public QE_REPL(): antlr.TerminalNode[];
    public QE_REPL(i: number): antlr.TerminalNode | null;
    public QE_REPL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_REPL);
    	} else {
    		return this.getToken(asirParser.QE_REPL, i);
    	}
    }
    public QE_EQUIV(): antlr.TerminalNode[];
    public QE_EQUIV(i: number): antlr.TerminalNode | null;
    public QE_EQUIV(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_EQUIV);
    	} else {
    		return this.getToken(asirParser.QE_EQUIV, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEImpl) {
             listener.enterQEImpl(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEImpl) {
             listener.exitQEImpl(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQEImpl) {
            return visitor.visitQEImpl(this);
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
        return asirParser.RULE_qeNotExpr;
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
    		return this.getTokens(asirParser.QE_8);
    	} else {
    		return this.getToken(asirParser.QE_8, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEnot) {
             listener.enterQEnot(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEnot) {
             listener.exitQEnot(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_qeOrExpr;
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
    		return this.getTokens(asirParser.QE_11);
    	} else {
    		return this.getToken(asirParser.QE_11, i);
    	}
    }
    public QE_12(): antlr.TerminalNode[];
    public QE_12(i: number): antlr.TerminalNode | null;
    public QE_12(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_12);
    	} else {
    		return this.getToken(asirParser.QE_12, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEor) {
             listener.enterQEor(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEor) {
             listener.exitQEor(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_qeAndExpr;
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
    		return this.getTokens(asirParser.QE_9);
    	} else {
    		return this.getToken(asirParser.QE_9, i);
    	}
    }
    public QE_10(): antlr.TerminalNode[];
    public QE_10(i: number): antlr.TerminalNode | null;
    public QE_10(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_10);
    	} else {
    		return this.getToken(asirParser.QE_10, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEand) {
             listener.enterQEand(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEand) {
             listener.exitQEand(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_qeCompareExpr;
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
    		return this.getTokens(asirParser.QE_1);
    	} else {
    		return this.getToken(asirParser.QE_1, i);
    	}
    }
    public QE_2(): antlr.TerminalNode[];
    public QE_2(i: number): antlr.TerminalNode | null;
    public QE_2(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_2);
    	} else {
    		return this.getToken(asirParser.QE_2, i);
    	}
    }
    public QE_3(): antlr.TerminalNode[];
    public QE_3(i: number): antlr.TerminalNode | null;
    public QE_3(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_3);
    	} else {
    		return this.getToken(asirParser.QE_3, i);
    	}
    }
    public QE_4(): antlr.TerminalNode[];
    public QE_4(i: number): antlr.TerminalNode | null;
    public QE_4(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_4);
    	} else {
    		return this.getToken(asirParser.QE_4, i);
    	}
    }
    public QE_5(): antlr.TerminalNode[];
    public QE_5(i: number): antlr.TerminalNode | null;
    public QE_5(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_5);
    	} else {
    		return this.getToken(asirParser.QE_5, i);
    	}
    }
    public QE_6(): antlr.TerminalNode[];
    public QE_6(i: number): antlr.TerminalNode | null;
    public QE_6(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_6);
    	} else {
    		return this.getToken(asirParser.QE_6, i);
    	}
    }
    public QE_7(): antlr.TerminalNode[];
    public QE_7(i: number): antlr.TerminalNode | null;
    public QE_7(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.QE_7);
    	} else {
    		return this.getToken(asirParser.QE_7, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQECompare) {
             listener.enterQECompare(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQECompare) {
             listener.exitQECompare(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_orExpr;
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
    		return this.getTokens(asirParser.OR);
    	} else {
    		return this.getToken(asirParser.OR, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterOr) {
             listener.enterOr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitOr) {
             listener.exitOr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_andExpr;
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
    		return this.getTokens(asirParser.AND);
    	} else {
    		return this.getToken(asirParser.AND, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterAnd) {
             listener.enterAnd(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAnd) {
             listener.exitAnd(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_compareExpr;
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
    		return this.getTokens(asirParser.EQ);
    	} else {
    		return this.getToken(asirParser.EQ, i);
    	}
    }
    public NEQ(): antlr.TerminalNode[];
    public NEQ(i: number): antlr.TerminalNode | null;
    public NEQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.NEQ);
    	} else {
    		return this.getToken(asirParser.NEQ, i);
    	}
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.LT);
    	} else {
    		return this.getToken(asirParser.LT, i);
    	}
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.GT);
    	} else {
    		return this.getToken(asirParser.GT, i);
    	}
    }
    public LE(): antlr.TerminalNode[];
    public LE(i: number): antlr.TerminalNode | null;
    public LE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.LE);
    	} else {
    		return this.getToken(asirParser.LE, i);
    	}
    }
    public GE(): antlr.TerminalNode[];
    public GE(i: number): antlr.TerminalNode | null;
    public GE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.GE);
    	} else {
    		return this.getToken(asirParser.GE, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterCompare) {
             listener.enterCompare(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitCompare) {
             listener.exitCompare(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_addSubExpr;
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
    		return this.getTokens(asirParser.PLUS);
    	} else {
    		return this.getToken(asirParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.MINUS);
    	} else {
    		return this.getToken(asirParser.MINUS, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterAddSub) {
             listener.enterAddSub(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAddSub) {
             listener.exitAddSub(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_mulDivSurExpr;
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
    		return this.getTokens(asirParser.MULT);
    	} else {
    		return this.getToken(asirParser.MULT, i);
    	}
    }
    public DIV(): antlr.TerminalNode[];
    public DIV(i: number): antlr.TerminalNode | null;
    public DIV(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.DIV);
    	} else {
    		return this.getToken(asirParser.DIV, i);
    	}
    }
    public SUR(): antlr.TerminalNode[];
    public SUR(i: number): antlr.TerminalNode | null;
    public SUR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.SUR);
    	} else {
    		return this.getToken(asirParser.SUR, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterMulDivSur) {
             listener.enterMulDivSur(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitMulDivSur) {
             listener.exitMulDivSur(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_unaryExpr;
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterPowExpr) {
             listener.enterPowExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPowExpr) {
             listener.exitPowExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.MINUS, 0)!;
    }
    public unaryExpr(): UnaryExprContext {
        return this.getRuleContext(0, UnaryExprContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterUnaryMinus) {
             listener.enterUnaryMinus(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitUnaryMinus) {
             listener.exitUnaryMinus(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.NOT, 0)!;
    }
    public unaryExpr(): UnaryExprContext {
        return this.getRuleContext(0, UnaryExprContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterNotExpr) {
             listener.enterNotExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitNotExpr) {
             listener.exitNotExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_powerExpr;
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
        return this.getToken(asirParser.POWER, 0);
    }
    public unaryExpr(): UnaryExprContext | null {
        return this.getRuleContext(0, UnaryExprContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPowEx) {
             listener.enterPowEx(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPowEx) {
             listener.exitPowEx(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_factExpr;
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
        return this.getToken(asirParser.NOT, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterFactorialExpr) {
             listener.enterFactorialExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFactorialExpr) {
             listener.exitFactorialExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_prefixExpr;
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
        return this.getToken(asirParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DEC, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPreFix) {
             listener.enterPreFix(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPreFix) {
             listener.exitPreFix(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_postfixExpr;
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
        return this.getToken(asirParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DEC, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPostFix) {
             listener.enterPostFix(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPostFix) {
             listener.exitPostFix(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_indexAccessExpr;
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
    		return this.getTokens(asirParser.LBRACKET);
    	} else {
    		return this.getToken(asirParser.LBRACKET, i);
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
    		return this.getTokens(asirParser.RBRACKET);
    	} else {
    		return this.getToken(asirParser.RBRACKET, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterIndexAccess) {
             listener.enterIndexAccess(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIndexAccess) {
             listener.exitIndexAccess(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_memberAccessExpr;
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
    		return this.getTokens(asirParser.ARROW);
    	} else {
    		return this.getToken(asirParser.ARROW, i);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterMemberAccess) {
             listener.enterMemberAccess(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitMemberAccess) {
             listener.exitMemberAccess(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_primaryExpr;
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterListLiteral) {
             listener.enterListLiteral(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitListLiteral) {
             listener.exitListLiteral(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterIdExpr) {
             listener.enterIdExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIdExpr) {
             listener.exitIdExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.STRING, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterReal) {
             listener.enterReal(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitReal) {
             listener.exitReal(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FCallExprContext extends PrimaryExprContext {
    public _is_global?: Token | null;
    public _path?: QualifiedNameContext;
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
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public LBRANCE(): antlr.TerminalNode | null {
        return this.getToken(asirParser.LBRANCE, 0);
    }
    public RBRANCE(): antlr.TerminalNode | null {
        return this.getToken(asirParser.RBRANCE, 0);
    }
    public MID(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MID, 0);
    }
    public COLON2(): antlr.TerminalNode | null {
        return this.getToken(asirParser.COLON2, 0);
    }
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.INT);
    	} else {
    		return this.getToken(asirParser.INT, i);
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
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterFCallExpr) {
             listener.enterFCallExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFCallExpr) {
             listener.exitFCallExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterIndExpr) {
             listener.enterIndExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIndExpr) {
             listener.exitIndExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterDpLiteral) {
             listener.enterDpLiteral(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDpLiteral) {
             listener.exitDpLiteral(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterPreChrExpr) {
             listener.enterPreChrExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPreChrExpr) {
             listener.exitPreChrExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    		return this.getTokens(asirParser.LPAREN);
    	} else {
    		return this.getToken(asirParser.LPAREN, i);
    	}
    }
    public MULT(): antlr.TerminalNode {
        return this.getToken(asirParser.MULT, 0)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.RPAREN);
    	} else {
    		return this.getToken(asirParser.RPAREN, i);
    	}
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public MID(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MID, 0);
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
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterFunctorCallExpr) {
             listener.enterFunctorCallExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFunctorCallExpr) {
             listener.exitFunctorCallExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(asirParser.RPAREN, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterParen) {
             listener.enterParen(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitParen) {
             listener.exitParen(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_dpoly;
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
        return this.getToken(asirParser.LTLT, 0)!;
    }
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.INT);
    	} else {
    		return this.getToken(asirParser.INT, i);
    	}
    }
    public GTGT(): antlr.TerminalNode {
        return this.getToken(asirParser.GTGT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(asirParser.COLON, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDp) {
             listener.enterDp(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDp) {
             listener.exitDp(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_rational;
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
    		return this.getTokens(asirParser.INT);
    	} else {
    		return this.getToken(asirParser.INT, i);
    	}
    }
    public DIV(): antlr.TerminalNode {
        return this.getToken(asirParser.DIV, 0)!;
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.MINUS);
    	} else {
    		return this.getToken(asirParser.MINUS, i);
    	}
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterRat) {
             listener.enterRat(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitRat) {
             listener.exitRat(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_decimal;
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
        return this.getToken(asirParser.FLOAT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(asirParser.INT, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterFloat) {
             listener.enterFloat(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFloat) {
             listener.exitFloat(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_num;
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterDecNum) {
             listener.enterDecNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDecNum) {
             listener.exitDecNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.BIT, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterBitNum) {
             listener.enterBitNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitBitNum) {
             listener.exitBitNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.IMAGINARY, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterImaNum) {
             listener.enterImaNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitImaNum) {
             listener.exitImaNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.HEX, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterHexNum) {
             listener.enterHexNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitHexNum) {
             listener.exitHexNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterRatNum) {
             listener.enterRatNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitRatNum) {
             listener.exitRatNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.AEGEN, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterGenNum) {
             listener.enterGenNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitGenNum) {
             listener.exitGenNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_id;
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
        return this.getToken(asirParser.VAR_2, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterV2Id) {
             listener.enterV2Id(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitV2Id) {
             listener.exitV2Id(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.BEFORE, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterBef) {
             listener.enterBef(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitBef) {
             listener.exitBef(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.BEFORE_N, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterBefN) {
             listener.enterBefN(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitBefN) {
             listener.exitBefN(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_indeterminate;
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
        return this.getToken(asirParser.ID, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterFunc) {
             listener.enterFunc(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitFunc) {
             listener.exitFunc(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.NOSTRING, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterChFunc) {
             listener.enterChFunc(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitChFunc) {
             listener.exitChFunc(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.ATFUNC, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterAtFunc) {
             listener.enterAtFunc(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAtFunc) {
             listener.exitAtFunc(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_list;
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
        return this.getToken(asirParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(asirParser.RBRACKET, 0)!;
    }
    public exprlist(): ExprlistContext | null {
        return this.getRuleContext(0, ExprlistContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterListExpr) {
             listener.enterListExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitListExpr) {
             listener.exitListExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return asirParser.RULE_block;
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterSentence1) {
             listener.enterSentence1(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitSentence1) {
             listener.exitSentence1(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.LBRANCE, 0)!;
    }
    public RBRANCE(): antlr.TerminalNode {
        return this.getToken(asirParser.RBRANCE, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterSentence) {
             listener.enterSentence(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitSentence) {
             listener.exitSentence(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitSentence) {
            return visitor.visitSentence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public _moduleName?: Token | null;
    public _funcName?: IndeterminateContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DOT, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(asirParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_qualifiedName;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DottedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public indeterminate(): IndeterminateContext[];
    public indeterminate(i: number): IndeterminateContext | null;
    public indeterminate(i?: number): IndeterminateContext[] | IndeterminateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndeterminateContext);
        }

        return this.getRuleContext(i, IndeterminateContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.DOT);
    	} else {
    		return this.getToken(asirParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_dottedIdentifier;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDottedIdentifier) {
             listener.enterDottedIdentifier(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDottedIdentifier) {
             listener.exitDottedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitDottedIdentifier) {
            return visitor.visitDottedIdentifier(this);
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
    		return this.getTokens(asirParser.COMMA);
    	} else {
    		return this.getToken(asirParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_exprlist;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterExprlist) {
             listener.enterExprlist(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitExprlist) {
             listener.exitExprlist(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.SEMI, 0);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DOLLAR, 0);
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_terminator;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterTerminator) {
             listener.enterTerminator(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitTerminator) {
             listener.exitTerminator(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
    public SYSTEM_PATH_LITERAL(): antlr.TerminalNode {
        return this.getToken(asirParser.SYSTEM_PATH_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_systemPath;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterSystemPath) {
             listener.enterSystemPath(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitSystemPath) {
             listener.exitSystemPath(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.PELIF, 0)!;
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
        return asirParser.RULE_elifClause;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterElifClause) {
             listener.enterElifClause(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitElifClause) {
             listener.exitElifClause(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.PELSE, 0)!;
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
        return asirParser.RULE_elseClause;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterElseClause) {
             listener.enterElseClause(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitElseClause) {
             listener.exitElseClause(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
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
        return this.getToken(asirParser.ASSIGN, 0)!;
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_optionPair;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterOptionPair) {
             listener.enterOptionPair(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitOptionPair) {
             listener.exitOptionPair(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitOptionPair) {
            return visitor.visitOptionPair(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
