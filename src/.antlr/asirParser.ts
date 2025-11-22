// Generated from /home/kanji/risaproject/pasirser/asir.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { asirListener } from "./asirListener.js";
import { asirVisitor } from "./asirVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class asirParser extends antlr.Parser {
    public static readonly DEF = 1;
    public static readonly IF = 2;
    public static readonly FOR = 3;
    public static readonly WHILE = 4;
    public static readonly DO = 5;
    public static readonly ELSE = 6;
    public static readonly RETURN = 7;
    public static readonly CONTINUE = 8;
    public static readonly BREAK = 9;
    public static readonly STRUCT = 10;
    public static readonly MODULE = 11;
    public static readonly ENDMODULE = 12;
    public static readonly EXTERN = 13;
    public static readonly STATIC = 14;
    public static readonly GLOBAL = 15;
    public static readonly LOCAL = 16;
    public static readonly LOCALF = 17;
    public static readonly FUNCTION = 18;
    public static readonly END = 19;
    public static readonly QUIT = 20;
    public static readonly DEBUG = 21;
    public static readonly LTLT = 22;
    public static readonly GTGT = 23;
    public static readonly COLON2 = 24;
    public static readonly INC = 25;
    public static readonly DEC = 26;
    public static readonly PLUSEQ = 27;
    public static readonly MINUSEQ = 28;
    public static readonly MULTEQ = 29;
    public static readonly DIVEQ = 30;
    public static readonly SUREQ = 31;
    public static readonly POWEREQ = 32;
    public static readonly ARROW = 33;
    public static readonly EQ = 34;
    public static readonly NEQ = 35;
    public static readonly LE = 36;
    public static readonly GE = 37;
    public static readonly LT = 38;
    public static readonly GT = 39;
    public static readonly AND = 40;
    public static readonly OR = 41;
    public static readonly NOT = 42;
    public static readonly PLUS = 43;
    public static readonly MINUS = 44;
    public static readonly MULT = 45;
    public static readonly DIV = 46;
    public static readonly SUR = 47;
    public static readonly POWER = 48;
    public static readonly ASSIGN = 49;
    public static readonly BACK = 50;
    public static readonly MID = 51;
    public static readonly LPAREN = 52;
    public static readonly RPAREN = 53;
    public static readonly LBRANCE = 54;
    public static readonly RBRANCE = 55;
    public static readonly LBRACKET = 56;
    public static readonly RBRACKET = 57;
    public static readonly QUESTION = 58;
    public static readonly COLON = 59;
    public static readonly SEMI = 60;
    public static readonly DOLLAR = 61;
    public static readonly COMMA = 62;
    public static readonly HEX = 63;
    public static readonly BIT = 64;
    public static readonly IMAGINARY = 65;
    public static readonly ASGEN = 66;
    public static readonly APGEN = 67;
    public static readonly BEFORE = 68;
    public static readonly BEFORE_N = 69;
    public static readonly QE_1 = 70;
    public static readonly QE_2 = 71;
    public static readonly QE_3 = 72;
    public static readonly QE_4 = 73;
    public static readonly QE_5 = 74;
    public static readonly QE_6 = 75;
    public static readonly QE_7 = 76;
    public static readonly QE_8 = 77;
    public static readonly QE_9 = 78;
    public static readonly QE_10 = 79;
    public static readonly QE_11 = 80;
    public static readonly QE_12 = 81;
    public static readonly QE_IMPL = 82;
    public static readonly QE_REPL = 83;
    public static readonly QE_EQUIV = 84;
    public static readonly ATFUNC = 85;
    public static readonly VAR_2 = 86;
    public static readonly ID = 87;
    public static readonly FLOAT = 88;
    public static readonly INT = 89;
    public static readonly DOT = 90;
    public static readonly PCOMMENT = 91;
    public static readonly PIFDEF = 92;
    public static readonly PIFNDEF = 93;
    public static readonly PIF = 94;
    public static readonly PELSE = 95;
    public static readonly PELIF = 96;
    public static readonly PENDIF = 97;
    public static readonly PINCLUDE = 98;
    public static readonly PDEFINE = 99;
    public static readonly CHARPLUS = 100;
    public static readonly CHAR = 101;
    public static readonly STRING = 102;
    public static readonly NOSTRING = 103;
    public static readonly SYSTEM_PATH_LITERAL = 104;
    public static readonly NEWLINE = 105;
    public static readonly WS = 106;
    public static readonly COMMENT = 107;
    public static readonly LCOMMENT = 108;
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
    public static readonly RULE_qualifiedName = 19;
    public static readonly RULE_dottedIdentifier = 20;
    public static readonly RULE_exprlist = 21;
    public static readonly RULE_terminator = 22;
    public static readonly RULE_systemPath = 23;
    public static readonly RULE_elifClause = 24;
    public static readonly RULE_elseClause = 25;
    public static readonly RULE_optionPair = 26;
    public static readonly RULE_dpoly = 27;
    public static readonly RULE_rational = 28;
    public static readonly RULE_decimal = 29;
    public static readonly RULE_num = 30;
    public static readonly RULE_id = 31;
    public static readonly RULE_indeterminate = 32;
    public static readonly RULE_list = 33;
    public static readonly RULE_block = 34;

    public static readonly literalNames = [
        null, "'def'", "'if'", "'for'", "'while'", "'do'", "'else'", "'return'", 
        "'continue'", "'break'", "'struct'", "'module'", "'endmodule'", 
        "'extern'", "'static'", "'global'", "'local'", "'localf'", "'function'", 
        "'end'", "'quit'", "'debug'", "'<<'", "'>>'", "'::'", "'++'", "'--'", 
        "'+='", "'-='", "'*='", "'/='", "'%='", "'^='", "'->'", "'=='", 
        "'!='", "'<='", "'>='", "'<'", "'>'", "'&&'", "'||'", "'!'", "'+'", 
        "'-'", "'*'", "'/'", "'%'", "'^'", "'='", "'`'", "'|'", "'('", "')'", 
        "'{'", "'}'", "'['", "']'", "'?'", "':'", "';'", "'$'", "','", null, 
        null, "'@i'", "'@s'", "'@p'", "'@@'", null, "'@>='", "'@<='", "'@>'", 
        "'@<'", "'@=='", "'@='", "'@!='", "'@!'", "'@&&'", "'@&'", "'@||'", 
        "'@|'", "'@impl'", "'@repl'", "'@equiv'", null, "'@'", null, null, 
        null, "'.'", null, "'#ifdef'", "'#ifndef'", "'#if'", "'#else'", 
        "'#elif'", "'#endif'", "'#include'", "'#define'", "'##'", "'#'"
    ];

    public static readonly symbolicNames = [
        null, "DEF", "IF", "FOR", "WHILE", "DO", "ELSE", "RETURN", "CONTINUE", 
        "BREAK", "STRUCT", "MODULE", "ENDMODULE", "EXTERN", "STATIC", "GLOBAL", 
        "LOCAL", "LOCALF", "FUNCTION", "END", "QUIT", "DEBUG", "LTLT", "GTGT", 
        "COLON2", "INC", "DEC", "PLUSEQ", "MINUSEQ", "MULTEQ", "DIVEQ", 
        "SUREQ", "POWEREQ", "ARROW", "EQ", "NEQ", "LE", "GE", "LT", "GT", 
        "AND", "OR", "NOT", "PLUS", "MINUS", "MULT", "DIV", "SUR", "POWER", 
        "ASSIGN", "BACK", "MID", "LPAREN", "RPAREN", "LBRANCE", "RBRANCE", 
        "LBRACKET", "RBRACKET", "QUESTION", "COLON", "SEMI", "DOLLAR", "COMMA", 
        "HEX", "BIT", "IMAGINARY", "ASGEN", "APGEN", "BEFORE", "BEFORE_N", 
        "QE_1", "QE_2", "QE_3", "QE_4", "QE_5", "QE_6", "QE_7", "QE_8", 
        "QE_9", "QE_10", "QE_11", "QE_12", "QE_IMPL", "QE_REPL", "QE_EQUIV", 
        "ATFUNC", "VAR_2", "ID", "FLOAT", "INT", "DOT", "PCOMMENT", "PIFDEF", 
        "PIFNDEF", "PIF", "PELSE", "PELIF", "PENDIF", "PINCLUDE", "PDEFINE", 
        "CHARPLUS", "CHAR", "STRING", "NOSTRING", "SYSTEM_PATH_LITERAL", 
        "NEWLINE", "WS", "COMMENT", "LCOMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "prechar", "preprocessor", "functionDefinition", 
        "formDeclaration", "functionIf", "functionFor", "functionWhile", 
        "functionDo", "functionReturn", "functionContinue", "functionBreak", 
        "functionStruct", "functionEnd", "functionQuit", "functionDebug", 
        "functionModule", "expr", "qualifiedName", "dottedIdentifier", "exprlist", 
        "terminator", "systemPath", "elifClause", "elseClause", "optionPair", 
        "dpoly", "rational", "decimal", "num", "id", "indeterminate", "list", 
        "block",
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
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                {
                {
                this.state = 70;
                this.statement();
                }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 76;
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
            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.LTLT:
            case asirParser.COLON2:
            case asirParser.INC:
            case asirParser.DEC:
            case asirParser.NOT:
            case asirParser.PLUS:
            case asirParser.MINUS:
            case asirParser.BACK:
            case asirParser.LPAREN:
            case asirParser.LBRACKET:
            case asirParser.HEX:
            case asirParser.BIT:
            case asirParser.IMAGINARY:
            case asirParser.ASGEN:
            case asirParser.APGEN:
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
                this.state = 78;
                this.expr(0);
                this.state = 79;
                this.terminator();
                }
                break;
            case asirParser.SEMI:
            case asirParser.DOLLAR:
                localContext = new EmptyLineStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 81;
                this.terminator();
                }
                break;
            case asirParser.DEF:
                localContext = new DefinitionStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 82;
                this.functionDefinition();
                }
                break;
            case asirParser.FUNCTION:
                localContext = new ForwardDeclStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 83;
                this.formDeclaration();
                }
                break;
            case asirParser.IF:
                localContext = new IfStatementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 84;
                this.functionIf();
                }
                break;
            case asirParser.FOR:
                localContext = new ForStatementContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 85;
                this.functionFor();
                }
                break;
            case asirParser.WHILE:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 86;
                this.functionWhile();
                }
                break;
            case asirParser.DO:
                localContext = new DoStatementContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 87;
                this.functionDo();
                }
                break;
            case asirParser.RETURN:
                localContext = new ReturnStatementContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 88;
                this.functionReturn();
                }
                break;
            case asirParser.BREAK:
                localContext = new BreakStatementContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 89;
                this.functionBreak();
                }
                break;
            case asirParser.CONTINUE:
                localContext = new ContinueStatementContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 90;
                this.functionContinue();
                }
                break;
            case asirParser.STRUCT:
                localContext = new StructStatementContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 91;
                this.functionStruct();
                }
                break;
            case asirParser.END:
                localContext = new EndStatementContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 92;
                this.functionEnd();
                }
                break;
            case asirParser.QUIT:
                localContext = new QuitStatementContext(localContext);
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 93;
                this.functionQuit();
                }
                break;
            case asirParser.DEBUG:
                localContext = new DebugStatementContext(localContext);
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 94;
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
                this.state = 95;
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
                this.state = 96;
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
            this.state = 104;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.CHAR:
                localContext = new PreChrContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 99;
                this.match(asirParser.CHAR);
                this.state = 100;
                this.match(asirParser.ID);
                }
                break;
            case asirParser.ID:
                localContext = new PreChrPlusContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 101;
                this.match(asirParser.ID);
                this.state = 102;
                this.match(asirParser.CHARPLUS);
                this.state = 103;
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
            this.state = 147;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.PDEFINE:
                localContext = new PDefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 106;
                this.match(asirParser.PDEFINE);
                this.state = 107;
                (localContext as PDefContext)._name = this.match(asirParser.ID);
                this.state = 120;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 108;
                    this.match(asirParser.LPAREN);
                    this.state = 117;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 87) {
                        {
                        this.state = 109;
                        (localContext as PDefContext)._ID = this.match(asirParser.ID);
                        (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                        this.state = 114;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 62) {
                            {
                            {
                            this.state = 110;
                            this.match(asirParser.COMMA);
                            this.state = 111;
                            (localContext as PDefContext)._ID = this.match(asirParser.ID);
                            (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                            }
                            }
                            this.state = 116;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 119;
                    this.match(asirParser.RPAREN);
                    }
                    break;
                }
                this.state = 122;
                (localContext as PDefContext)._body = this.expr(0);
                }
                break;
            case asirParser.PIFDEF:
            case asirParser.PIFNDEF:
            case asirParser.PIF:
                localContext = new PIfContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 123;
                (localContext as PIfContext)._directive = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 7) !== 0))) {
                    (localContext as PIfContext)._directive = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 124;
                (localContext as PIfContext)._condition = this.expr(0);
                this.state = 128;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                    {
                    {
                    this.state = 125;
                    (localContext as PIfContext)._statement = this.statement();
                    (localContext as PIfContext)._thenSymts.push((localContext as PIfContext)._statement!);
                    }
                    }
                    this.state = 130;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 96) {
                    {
                    {
                    this.state = 131;
                    (localContext as PIfContext)._elifClause = this.elifClause();
                    (localContext as PIfContext)._elifs.push((localContext as PIfContext)._elifClause!);
                    }
                    }
                    this.state = 136;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 95) {
                    {
                    this.state = 137;
                    (localContext as PIfContext)._elseBlk = this.elseClause();
                    }
                }

                this.state = 140;
                this.match(asirParser.PENDIF);
                }
                break;
            case asirParser.PINCLUDE:
                localContext = new PIncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 142;
                this.match(asirParser.PINCLUDE);
                this.state = 145;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case asirParser.SYSTEM_PATH_LITERAL:
                    {
                    this.state = 143;
                    (localContext as PIncContext)._path_sys = this.systemPath();
                    }
                    break;
                case asirParser.STRING:
                    {
                    this.state = 144;
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
            this.state = 149;
            this.match(asirParser.DEF);
            this.state = 150;
            (localContext as DefContext)._name = this.indeterminate();
            this.state = 151;
            this.match(asirParser.LPAREN);
            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 87) {
                {
                this.state = 152;
                (localContext as DefContext)._ID = this.match(asirParser.ID);
                (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                this.state = 157;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 62) {
                    {
                    {
                    this.state = 153;
                    this.match(asirParser.COMMA);
                    this.state = 154;
                    (localContext as DefContext)._ID = this.match(asirParser.ID);
                    (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                    }
                    }
                    this.state = 159;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 162;
            this.match(asirParser.RPAREN);
            this.state = 163;
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
            this.state = 165;
            this.match(asirParser.FUNCTION);
            this.state = 166;
            (localContext as FormDeclContext)._name = this.indeterminate();
            this.state = 167;
            this.match(asirParser.LPAREN);
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 262149) !== 0)) {
                {
                this.state = 168;
                (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                this.state = 173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 62) {
                    {
                    {
                    this.state = 169;
                    this.match(asirParser.COMMA);
                    this.state = 170;
                    (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                    (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                    }
                    }
                    this.state = 175;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 178;
            this.match(asirParser.RPAREN);
            this.state = 179;
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
            this.state = 181;
            this.match(asirParser.IF);
            this.state = 182;
            this.match(asirParser.LPAREN);
            this.state = 183;
            (localContext as IfContext)._condition = this.expr(0);
            this.state = 184;
            this.match(asirParser.RPAREN);
            this.state = 185;
            (localContext as IfContext)._thenBlock = this.block();
            this.state = 188;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 186;
                this.match(asirParser.ELSE);
                this.state = 187;
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
            this.state = 190;
            this.match(asirParser.FOR);
            this.state = 191;
            this.match(asirParser.LPAREN);
            this.state = 193;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 192;
                (localContext as ForContext)._init = this.exprlist();
                }
            }

            this.state = 195;
            this.match(asirParser.SEMI);
            this.state = 197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 196;
                (localContext as ForContext)._cond = this.exprlist();
                }
            }

            this.state = 199;
            this.match(asirParser.SEMI);
            this.state = 201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 200;
                (localContext as ForContext)._update = this.exprlist();
                }
            }

            this.state = 203;
            this.match(asirParser.RPAREN);
            this.state = 204;
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
            this.state = 206;
            this.match(asirParser.WHILE);
            this.state = 207;
            this.match(asirParser.LPAREN);
            this.state = 209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 208;
                this.exprlist();
                }
            }

            this.state = 211;
            this.match(asirParser.RPAREN);
            this.state = 212;
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
            this.state = 214;
            this.match(asirParser.DO);
            this.state = 215;
            this.block();
            this.state = 216;
            this.match(asirParser.WHILE);
            this.state = 217;
            this.match(asirParser.LPAREN);
            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 218;
                this.exprlist();
                }
            }

            this.state = 221;
            this.match(asirParser.RPAREN);
            this.state = 222;
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
            this.state = 224;
            this.match(asirParser.RETURN);
            this.state = 226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 225;
                this.expr(0);
                }
            }

            this.state = 228;
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
            this.state = 230;
            this.match(asirParser.CONTINUE);
            this.state = 231;
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
            this.state = 233;
            this.match(asirParser.BREAK);
            this.state = 234;
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
            this.state = 236;
            this.match(asirParser.STRUCT);
            this.state = 237;
            (localContext as StructContext)._name = this.indeterminate();
            this.state = 238;
            this.match(asirParser.LBRANCE);
            this.state = 239;
            (localContext as StructContext)._indeterminate = this.indeterminate();
            (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
            this.state = 244;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62) {
                {
                {
                this.state = 240;
                this.match(asirParser.COMMA);
                this.state = 241;
                (localContext as StructContext)._indeterminate = this.indeterminate();
                (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
                }
                }
                this.state = 246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 247;
            this.match(asirParser.RBRANCE);
            this.state = 248;
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
            this.state = 250;
            this.match(asirParser.END);
            this.state = 251;
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
            this.state = 253;
            this.match(asirParser.QUIT);
            this.state = 254;
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
            this.state = 256;
            this.match(asirParser.DEBUG);
            this.state = 257;
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
            this.state = 276;
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
                this.state = 259;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 253952) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 260;
                this.indeterminate();
                this.state = 265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 62) {
                    {
                    {
                    this.state = 261;
                    this.match(asirParser.COMMA);
                    this.state = 262;
                    this.indeterminate();
                    }
                    }
                    this.state = 267;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 268;
                this.terminator();
                }
                break;
            case asirParser.MODULE:
                localContext = new ModuleStartContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 270;
                this.match(asirParser.MODULE);
                this.state = 271;
                this.indeterminate();
                this.state = 272;
                this.terminator();
                }
                break;
            case asirParser.ENDMODULE:
                localContext = new ModuleEndContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 274;
                this.match(asirParser.ENDMODULE);
                this.state = 275;
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
        let _startState = 36;
        this.enterRecursionRule(localContext, 36, asirParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 279;
                this.match(asirParser.LPAREN);
                this.state = 280;
                this.expr(0);
                this.state = 281;
                this.match(asirParser.RPAREN);
                }
                break;
            case 2:
                {
                localContext = new NumberLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 283;
                this.num();
                }
                break;
            case 3:
                {
                localContext = new IdLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 284;
                this.id();
                }
                break;
            case 4:
                {
                localContext = new StringLiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 285;
                this.match(asirParser.STRING);
                }
                break;
            case 5:
                {
                localContext = new ListLiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 286;
                this.list();
                }
                break;
            case 6:
                {
                localContext = new DpolyLiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 287;
                this.dpoly();
                }
                break;
            case 7:
                {
                localContext = new PrecharExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 288;
                this.prechar();
                }
                break;
            case 8:
                {
                localContext = new DottedIdExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 289;
                this.dottedIdentifier();
                }
                break;
            case 9:
                {
                localContext = new VarExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 290;
                this.indeterminate();
                }
                break;
            case 10:
                {
                localContext = new FCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 292;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 291;
                    (localContext as FCallExprContext)._is_global = this.match(asirParser.COLON2);
                    }
                }

                this.state = 294;
                (localContext as FCallExprContext)._path = this.qualifiedName();
                this.state = 305;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 54) {
                    {
                    this.state = 295;
                    this.match(asirParser.LBRANCE);
                    this.state = 296;
                    (localContext as FCallExprContext)._INT = this.match(asirParser.INT);
                    (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                    this.state = 301;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 62) {
                        {
                        {
                        this.state = 297;
                        this.match(asirParser.COMMA);
                        this.state = 298;
                        (localContext as FCallExprContext)._INT = this.match(asirParser.INT);
                        (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                        }
                        }
                        this.state = 303;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 304;
                    this.match(asirParser.RBRANCE);
                    }
                }

                this.state = 307;
                this.match(asirParser.LPAREN);
                this.state = 309;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                    {
                    this.state = 308;
                    (localContext as FCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 311;
                    this.match(asirParser.MID);
                    this.state = 312;
                    (localContext as FCallExprContext)._optionPair = this.optionPair();
                    (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                    this.state = 317;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 62) {
                        {
                        {
                        this.state = 313;
                        this.match(asirParser.COMMA);
                        this.state = 314;
                        (localContext as FCallExprContext)._optionPair = this.optionPair();
                        (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 319;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 322;
                this.match(asirParser.RPAREN);
                }
                break;
            case 11:
                {
                localContext = new FunctorCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 324;
                this.match(asirParser.LPAREN);
                this.state = 325;
                this.match(asirParser.MULT);
                this.state = 326;
                (localContext as FunctorCallExprContext)._callee = this.expr(0);
                this.state = 327;
                this.match(asirParser.RPAREN);
                this.state = 328;
                this.match(asirParser.LPAREN);
                this.state = 330;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                    {
                    this.state = 329;
                    (localContext as FunctorCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 341;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 332;
                    this.match(asirParser.MID);
                    this.state = 333;
                    (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                    (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                    this.state = 338;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 62) {
                        {
                        {
                        this.state = 334;
                        this.match(asirParser.COMMA);
                        this.state = 335;
                        (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                        (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 340;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 343;
                this.match(asirParser.RPAREN);
                }
                break;
            case 12:
                {
                localContext = new PreFixExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 345;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 26)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 346;
                this.expr(17);
                }
                break;
            case 13:
                {
                localContext = new UnarySignExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 347;
                _la = this.tokenStream.LA(1);
                if(!(_la === 43 || _la === 44)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 348;
                this.expr(16);
                }
                break;
            case 14:
                {
                localContext = new UnaryNotExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 349;
                this.match(asirParser.NOT);
                this.state = 350;
                this.expr(15);
                }
                break;
            case 15:
                {
                localContext = new QuoteExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 351;
                this.match(asirParser.BACK);
                this.state = 352;
                this.expr(3);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 419;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 417;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
                    case 1:
                        {
                        localContext = new PowerExprContext(new ExprContext(parentContext, parentState));
                        (localContext as PowerExprContext)._base = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 355;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 356;
                        this.match(asirParser.POWER);
                        this.state = 357;
                        (localContext as PowerExprContext)._exponent = this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MulDivSurExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 358;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 359;
                        (localContext as MulDivSurExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0))) {
                            (localContext as MulDivSurExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 360;
                        this.expr(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddSubExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 361;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 362;
                        (localContext as AddSubExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 43 || _la === 44)) {
                            (localContext as AddSubExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 363;
                        this.expr(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new RelationalExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 364;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 365;
                        (localContext as RelationalExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 63) !== 0))) {
                            (localContext as RelationalExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 366;
                        this.expr(12);
                        }
                        break;
                    case 5:
                        {
                        localContext = new AndExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 367;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 368;
                        this.match(asirParser.AND);
                        this.state = 369;
                        this.expr(11);
                        }
                        break;
                    case 6:
                        {
                        localContext = new OrExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 370;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 371;
                        this.match(asirParser.OR);
                        this.state = 372;
                        this.expr(10);
                        }
                        break;
                    case 7:
                        {
                        localContext = new QECompareExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 373;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 374;
                        (localContext as QECompareExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 127) !== 0))) {
                            (localContext as QECompareExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 375;
                        this.expr(9);
                        }
                        break;
                    case 8:
                        {
                        localContext = new QEAndExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 376;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 377;
                        (localContext as QEAndExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 78 || _la === 79)) {
                            (localContext as QEAndExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 378;
                        this.expr(8);
                        }
                        break;
                    case 9:
                        {
                        localContext = new QEOrExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 379;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 380;
                        (localContext as QEOrExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 80 || _la === 81)) {
                            (localContext as QEOrExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 381;
                        this.expr(7);
                        }
                        break;
                    case 10:
                        {
                        localContext = new QENotExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 382;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 383;
                        this.match(asirParser.QE_8);
                        this.state = 384;
                        this.expr(6);
                        }
                        break;
                    case 11:
                        {
                        localContext = new QEImplExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 385;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 386;
                        (localContext as QEImplExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 7) !== 0))) {
                            (localContext as QEImplExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 387;
                        this.expr(5);
                        }
                        break;
                    case 12:
                        {
                        localContext = new AssignExprContext(new ExprContext(parentContext, parentState));
                        (localContext as AssignExprContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 388;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 389;
                        (localContext as AssignExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4194367) !== 0))) {
                            (localContext as AssignExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 390;
                        (localContext as AssignExprContext)._right = this.expr(1);
                        }
                        break;
                    case 13:
                        {
                        localContext = new MemberAccessExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 391;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 394;
                        this.errorHandler.sync(this);
                        alternative = 1;
                        do {
                            switch (alternative) {
                            case 1:
                                {
                                {
                                this.state = 392;
                                this.match(asirParser.ARROW);
                                this.state = 393;
                                this.indeterminate();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 396;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    case 14:
                        {
                        localContext = new IndexAccessExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 398;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 403;
                        this.errorHandler.sync(this);
                        alternative = 1;
                        do {
                            switch (alternative) {
                            case 1:
                                {
                                {
                                this.state = 399;
                                this.match(asirParser.LBRACKET);
                                this.state = 400;
                                (localContext as IndexAccessExprContext)._expr = this.expr(0);
                                (localContext as IndexAccessExprContext)._indices.push((localContext as IndexAccessExprContext)._expr!);
                                this.state = 401;
                                this.match(asirParser.RBRACKET);
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 405;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    case 15:
                        {
                        localContext = new PostFixExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 407;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 408;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 25 || _la === 26)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case 16:
                        {
                        localContext = new FactorialExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 409;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 410;
                        this.match(asirParser.NOT);
                        }
                        break;
                    case 17:
                        {
                        localContext = new TernaryExprContext(new ExprContext(parentContext, parentState));
                        (localContext as TernaryExprContext)._condition = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 411;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        {
                        this.state = 412;
                        this.match(asirParser.QUESTION);
                        this.state = 413;
                        (localContext as TernaryExprContext)._consequence = this.expr(0);
                        this.state = 414;
                        this.match(asirParser.COLON);
                        this.state = 415;
                        (localContext as TernaryExprContext)._alternative = this.expr(0);
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 421;
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 38, asirParser.RULE_qualifiedName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 424;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                {
                this.state = 422;
                localContext._moduleName = this.match(asirParser.ID);
                this.state = 423;
                this.match(asirParser.DOT);
                }
                break;
            }
            this.state = 426;
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
        this.enterRule(localContext, 40, asirParser.RULE_dottedIdentifier);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.indeterminate();
            this.state = 431;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 429;
                    this.match(asirParser.DOT);
                    this.state = 430;
                    this.indeterminate();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 433;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
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
        this.enterRule(localContext, 42, asirParser.RULE_exprlist);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 435;
            this.expr(0);
            this.state = 440;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62) {
                {
                {
                this.state = 436;
                this.match(asirParser.COMMA);
                this.state = 437;
                this.expr(0);
                }
                }
                this.state = 442;
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
        this.enterRule(localContext, 44, asirParser.RULE_terminator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 443;
            _la = this.tokenStream.LA(1);
            if(!(_la === 60 || _la === 61)) {
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
        this.enterRule(localContext, 46, asirParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 445;
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
        this.enterRule(localContext, 48, asirParser.RULE_elifClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 447;
            this.match(asirParser.PELIF);
            this.state = 448;
            localContext._condition = this.expr(0);
            this.state = 452;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                {
                {
                this.state = 449;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 454;
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
        this.enterRule(localContext, 50, asirParser.RULE_elseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 455;
            this.match(asirParser.PELSE);
            this.state = 459;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                {
                {
                this.state = 456;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 461;
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
        this.enterRule(localContext, 52, asirParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 462;
            localContext._key = this.indeterminate();
            this.state = 463;
            this.match(asirParser.ASSIGN);
            this.state = 464;
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
    public dpoly(): DpolyContext {
        let localContext = new DpolyContext(this.context, this.state);
        this.enterRule(localContext, 54, asirParser.RULE_dpoly);
        let _la: number;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 466;
            this.match(asirParser.LTLT);
            this.state = 467;
            this.match(asirParser.INT);
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62) {
                {
                {
                this.state = 468;
                this.match(asirParser.COMMA);
                this.state = 469;
                this.match(asirParser.INT);
                }
                }
                this.state = 474;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 477;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 475;
                this.match(asirParser.COLON);
                this.state = 476;
                this.match(asirParser.INT);
                }
            }

            this.state = 479;
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
        this.enterRule(localContext, 56, asirParser.RULE_rational);
        let _la: number;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 482;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 481;
                this.match(asirParser.MINUS);
                }
            }

            this.state = 484;
            this.match(asirParser.INT);
            this.state = 485;
            this.match(asirParser.DIV);
            this.state = 487;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 486;
                this.match(asirParser.MINUS);
                }
            }

            this.state = 489;
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
        this.enterRule(localContext, 58, asirParser.RULE_decimal);
        let _la: number;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 491;
            _la = this.tokenStream.LA(1);
            if(!(_la === 88 || _la === 89)) {
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
        this.enterRule(localContext, 60, asirParser.RULE_num);
        try {
            this.state = 500;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                localContext = new HexNumContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 493;
                this.match(asirParser.HEX);
                }
                break;
            case 2:
                localContext = new BitNumContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 494;
                this.match(asirParser.BIT);
                }
                break;
            case 3:
                localContext = new RatNumContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 495;
                this.rational();
                }
                break;
            case 4:
                localContext = new DecNumContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 496;
                this.decimal();
                }
                break;
            case 5:
                localContext = new ImaNumContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 497;
                this.match(asirParser.IMAGINARY);
                }
                break;
            case 6:
                localContext = new AsGenNumContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 498;
                this.match(asirParser.ASGEN);
                }
                break;
            case 7:
                localContext = new ApGenNumContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 499;
                this.match(asirParser.APGEN);
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
        this.enterRule(localContext, 62, asirParser.RULE_id);
        try {
            this.state = 505;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.BEFORE:
                localContext = new BefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 502;
                this.match(asirParser.BEFORE);
                }
                break;
            case asirParser.BEFORE_N:
                localContext = new BefNContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 503;
                this.match(asirParser.BEFORE_N);
                }
                break;
            case asirParser.VAR_2:
                localContext = new V2IdContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 504;
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
        this.enterRule(localContext, 64, asirParser.RULE_indeterminate);
        try {
            this.state = 510;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.ID:
                localContext = new FuncContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 507;
                this.match(asirParser.ID);
                }
                break;
            case asirParser.ATFUNC:
                localContext = new AtFuncContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 508;
                this.match(asirParser.ATFUNC);
                }
                break;
            case asirParser.NOSTRING:
                localContext = new ChFuncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 509;
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
        this.enterRule(localContext, 66, asirParser.RULE_list);
        let _la: number;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 512;
            this.match(asirParser.LBRACKET);
            this.state = 514;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 513;
                this.exprlist();
                }
            }

            this.state = 516;
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
        this.enterRule(localContext, 68, asirParser.RULE_block);
        let _la: number;
        try {
            this.state = 527;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.LBRANCE:
                localContext = new SentenceContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 518;
                this.match(asirParser.LBRANCE);
                this.state = 522;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                    {
                    {
                    this.state = 519;
                    this.statement();
                    }
                    }
                    this.state = 524;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 525;
                this.match(asirParser.RBRANCE);
                }
                break;
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
            case asirParser.LTLT:
            case asirParser.COLON2:
            case asirParser.INC:
            case asirParser.DEC:
            case asirParser.NOT:
            case asirParser.PLUS:
            case asirParser.MINUS:
            case asirParser.BACK:
            case asirParser.LPAREN:
            case asirParser.LBRACKET:
            case asirParser.SEMI:
            case asirParser.DOLLAR:
            case asirParser.HEX:
            case asirParser.BIT:
            case asirParser.IMAGINARY:
            case asirParser.ASGEN:
            case asirParser.APGEN:
            case asirParser.BEFORE:
            case asirParser.BEFORE_N:
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
                this.state = 526;
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 18:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 14);
        case 1:
            return this.precpred(this.context, 13);
        case 2:
            return this.precpred(this.context, 12);
        case 3:
            return this.precpred(this.context, 11);
        case 4:
            return this.precpred(this.context, 10);
        case 5:
            return this.precpred(this.context, 9);
        case 6:
            return this.precpred(this.context, 8);
        case 7:
            return this.precpred(this.context, 7);
        case 8:
            return this.precpred(this.context, 6);
        case 9:
            return this.precpred(this.context, 5);
        case 10:
            return this.precpred(this.context, 4);
        case 11:
            return this.precpred(this.context, 1);
        case 12:
            return this.precpred(this.context, 21);
        case 13:
            return this.precpred(this.context, 20);
        case 14:
            return this.precpred(this.context, 19);
        case 15:
            return this.precpred(this.context, 18);
        case 16:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,108,530,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,1,0,5,0,72,8,0,10,0,12,0,75,9,0,1,0,1,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,3,1,98,8,1,1,2,1,2,1,2,1,2,1,2,3,2,105,8,2,1,3,1,3,1,3,1,3,
        1,3,1,3,5,3,113,8,3,10,3,12,3,116,9,3,3,3,118,8,3,1,3,3,3,121,8,
        3,1,3,1,3,1,3,1,3,5,3,127,8,3,10,3,12,3,130,9,3,1,3,5,3,133,8,3,
        10,3,12,3,136,9,3,1,3,3,3,139,8,3,1,3,1,3,1,3,1,3,1,3,3,3,146,8,
        3,3,3,148,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,156,8,4,10,4,12,4,159,
        9,4,3,4,161,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,172,8,5,
        10,5,12,5,175,9,5,3,5,177,8,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,
        6,1,6,3,6,189,8,6,1,7,1,7,1,7,3,7,194,8,7,1,7,1,7,3,7,198,8,7,1,
        7,1,7,3,7,202,8,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,210,8,8,1,8,1,8,1,
        8,1,9,1,9,1,9,1,9,1,9,3,9,220,8,9,1,9,1,9,1,9,1,10,1,10,3,10,227,
        8,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,
        1,13,1,13,5,13,243,8,13,10,13,12,13,246,9,13,1,13,1,13,1,13,1,14,
        1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,5,17,
        264,8,17,10,17,12,17,267,9,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,17,3,17,277,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,3,18,293,8,18,1,18,1,18,1,18,1,18,1,18,
        5,18,300,8,18,10,18,12,18,303,9,18,1,18,3,18,306,8,18,1,18,1,18,
        3,18,310,8,18,1,18,1,18,1,18,1,18,5,18,316,8,18,10,18,12,18,319,
        9,18,3,18,321,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
        331,8,18,1,18,1,18,1,18,1,18,5,18,337,8,18,10,18,12,18,340,9,18,
        3,18,342,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        3,18,354,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,4,18,395,8,18,11,18,12,18,396,1,18,1,18,1,18,1,18,
        1,18,4,18,404,8,18,11,18,12,18,405,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,5,18,418,8,18,10,18,12,18,421,9,18,1,19,1,19,
        3,19,425,8,19,1,19,1,19,1,20,1,20,1,20,4,20,432,8,20,11,20,12,20,
        433,1,21,1,21,1,21,5,21,439,8,21,10,21,12,21,442,9,21,1,22,1,22,
        1,23,1,23,1,24,1,24,1,24,5,24,451,8,24,10,24,12,24,454,9,24,1,25,
        1,25,5,25,458,8,25,10,25,12,25,461,9,25,1,26,1,26,1,26,1,26,1,27,
        1,27,1,27,1,27,5,27,471,8,27,10,27,12,27,474,9,27,1,27,1,27,3,27,
        478,8,27,1,27,1,27,1,28,3,28,483,8,28,1,28,1,28,1,28,3,28,488,8,
        28,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,501,
        8,30,1,31,1,31,1,31,3,31,506,8,31,1,32,1,32,1,32,3,32,511,8,32,1,
        33,1,33,3,33,515,8,33,1,33,1,33,1,34,1,34,5,34,521,8,34,10,34,12,
        34,524,9,34,1,34,1,34,3,34,528,8,34,1,34,0,1,36,35,0,2,4,6,8,10,
        12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
        56,58,60,62,64,66,68,0,13,1,0,92,94,1,0,13,17,1,0,25,26,1,0,43,44,
        1,0,45,47,1,0,34,39,1,0,70,76,1,0,78,79,1,0,80,81,1,0,82,84,2,0,
        27,32,49,49,1,0,60,61,1,0,88,89,600,0,73,1,0,0,0,2,97,1,0,0,0,4,
        104,1,0,0,0,6,147,1,0,0,0,8,149,1,0,0,0,10,165,1,0,0,0,12,181,1,
        0,0,0,14,190,1,0,0,0,16,206,1,0,0,0,18,214,1,0,0,0,20,224,1,0,0,
        0,22,230,1,0,0,0,24,233,1,0,0,0,26,236,1,0,0,0,28,250,1,0,0,0,30,
        253,1,0,0,0,32,256,1,0,0,0,34,276,1,0,0,0,36,353,1,0,0,0,38,424,
        1,0,0,0,40,428,1,0,0,0,42,435,1,0,0,0,44,443,1,0,0,0,46,445,1,0,
        0,0,48,447,1,0,0,0,50,455,1,0,0,0,52,462,1,0,0,0,54,466,1,0,0,0,
        56,482,1,0,0,0,58,491,1,0,0,0,60,500,1,0,0,0,62,505,1,0,0,0,64,510,
        1,0,0,0,66,512,1,0,0,0,68,527,1,0,0,0,70,72,3,2,1,0,71,70,1,0,0,
        0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,73,
        1,0,0,0,76,77,5,0,0,1,77,1,1,0,0,0,78,79,3,36,18,0,79,80,3,44,22,
        0,80,98,1,0,0,0,81,98,3,44,22,0,82,98,3,8,4,0,83,98,3,10,5,0,84,
        98,3,12,6,0,85,98,3,14,7,0,86,98,3,16,8,0,87,98,3,18,9,0,88,98,3,
        20,10,0,89,98,3,24,12,0,90,98,3,22,11,0,91,98,3,26,13,0,92,98,3,
        28,14,0,93,98,3,30,15,0,94,98,3,32,16,0,95,98,3,34,17,0,96,98,3,
        6,3,0,97,78,1,0,0,0,97,81,1,0,0,0,97,82,1,0,0,0,97,83,1,0,0,0,97,
        84,1,0,0,0,97,85,1,0,0,0,97,86,1,0,0,0,97,87,1,0,0,0,97,88,1,0,0,
        0,97,89,1,0,0,0,97,90,1,0,0,0,97,91,1,0,0,0,97,92,1,0,0,0,97,93,
        1,0,0,0,97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,0,0,98,3,1,0,0,0,99,
        100,5,101,0,0,100,105,5,87,0,0,101,102,5,87,0,0,102,103,5,100,0,
        0,103,105,5,87,0,0,104,99,1,0,0,0,104,101,1,0,0,0,105,5,1,0,0,0,
        106,107,5,99,0,0,107,120,5,87,0,0,108,117,5,52,0,0,109,114,5,87,
        0,0,110,111,5,62,0,0,111,113,5,87,0,0,112,110,1,0,0,0,113,116,1,
        0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,118,1,0,0,0,116,114,1,
        0,0,0,117,109,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,121,5,
        53,0,0,120,108,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,148,3,
        36,18,0,123,124,7,0,0,0,124,128,3,36,18,0,125,127,3,2,1,0,126,125,
        1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,134,
        1,0,0,0,130,128,1,0,0,0,131,133,3,48,24,0,132,131,1,0,0,0,133,136,
        1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,138,1,0,0,0,136,134,
        1,0,0,0,137,139,3,50,25,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,
        1,0,0,0,140,141,5,97,0,0,141,148,1,0,0,0,142,145,5,98,0,0,143,146,
        3,46,23,0,144,146,5,102,0,0,145,143,1,0,0,0,145,144,1,0,0,0,146,
        148,1,0,0,0,147,106,1,0,0,0,147,123,1,0,0,0,147,142,1,0,0,0,148,
        7,1,0,0,0,149,150,5,1,0,0,150,151,3,64,32,0,151,160,5,52,0,0,152,
        157,5,87,0,0,153,154,5,62,0,0,154,156,5,87,0,0,155,153,1,0,0,0,156,
        159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,161,1,0,0,0,159,
        157,1,0,0,0,160,152,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,
        163,5,53,0,0,163,164,3,68,34,0,164,9,1,0,0,0,165,166,5,18,0,0,166,
        167,3,64,32,0,167,176,5,52,0,0,168,173,3,64,32,0,169,170,5,62,0,
        0,170,172,3,64,32,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,
        0,0,173,174,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,176,168,1,0,
        0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,5,53,0,0,179,180,3,44,
        22,0,180,11,1,0,0,0,181,182,5,2,0,0,182,183,5,52,0,0,183,184,3,36,
        18,0,184,185,5,53,0,0,185,188,3,68,34,0,186,187,5,6,0,0,187,189,
        3,68,34,0,188,186,1,0,0,0,188,189,1,0,0,0,189,13,1,0,0,0,190,191,
        5,3,0,0,191,193,5,52,0,0,192,194,3,42,21,0,193,192,1,0,0,0,193,194,
        1,0,0,0,194,195,1,0,0,0,195,197,5,60,0,0,196,198,3,42,21,0,197,196,
        1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,201,5,60,0,0,200,202,
        3,42,21,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,204,
        5,53,0,0,204,205,3,68,34,0,205,15,1,0,0,0,206,207,5,4,0,0,207,209,
        5,52,0,0,208,210,3,42,21,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,
        1,0,0,0,211,212,5,53,0,0,212,213,3,68,34,0,213,17,1,0,0,0,214,215,
        5,5,0,0,215,216,3,68,34,0,216,217,5,4,0,0,217,219,5,52,0,0,218,220,
        3,42,21,0,219,218,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,222,
        5,53,0,0,222,223,5,60,0,0,223,19,1,0,0,0,224,226,5,7,0,0,225,227,
        3,36,18,0,226,225,1,0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,229,
        3,44,22,0,229,21,1,0,0,0,230,231,5,8,0,0,231,232,3,44,22,0,232,23,
        1,0,0,0,233,234,5,9,0,0,234,235,3,44,22,0,235,25,1,0,0,0,236,237,
        5,10,0,0,237,238,3,64,32,0,238,239,5,54,0,0,239,244,3,64,32,0,240,
        241,5,62,0,0,241,243,3,64,32,0,242,240,1,0,0,0,243,246,1,0,0,0,244,
        242,1,0,0,0,244,245,1,0,0,0,245,247,1,0,0,0,246,244,1,0,0,0,247,
        248,5,55,0,0,248,249,3,44,22,0,249,27,1,0,0,0,250,251,5,19,0,0,251,
        252,3,44,22,0,252,29,1,0,0,0,253,254,5,20,0,0,254,255,3,44,22,0,
        255,31,1,0,0,0,256,257,5,21,0,0,257,258,3,44,22,0,258,33,1,0,0,0,
        259,260,7,1,0,0,260,265,3,64,32,0,261,262,5,62,0,0,262,264,3,64,
        32,0,263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,
        0,0,266,268,1,0,0,0,267,265,1,0,0,0,268,269,3,44,22,0,269,277,1,
        0,0,0,270,271,5,11,0,0,271,272,3,64,32,0,272,273,3,44,22,0,273,277,
        1,0,0,0,274,275,5,12,0,0,275,277,3,44,22,0,276,259,1,0,0,0,276,270,
        1,0,0,0,276,274,1,0,0,0,277,35,1,0,0,0,278,279,6,18,-1,0,279,280,
        5,52,0,0,280,281,3,36,18,0,281,282,5,53,0,0,282,354,1,0,0,0,283,
        354,3,60,30,0,284,354,3,62,31,0,285,354,5,102,0,0,286,354,3,66,33,
        0,287,354,3,54,27,0,288,354,3,4,2,0,289,354,3,40,20,0,290,354,3,
        64,32,0,291,293,5,24,0,0,292,291,1,0,0,0,292,293,1,0,0,0,293,294,
        1,0,0,0,294,305,3,38,19,0,295,296,5,54,0,0,296,301,5,89,0,0,297,
        298,5,62,0,0,298,300,5,89,0,0,299,297,1,0,0,0,300,303,1,0,0,0,301,
        299,1,0,0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,301,1,0,0,0,304,
        306,5,55,0,0,305,295,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,307,
        309,5,52,0,0,308,310,3,42,21,0,309,308,1,0,0,0,309,310,1,0,0,0,310,
        320,1,0,0,0,311,312,5,51,0,0,312,317,3,52,26,0,313,314,5,62,0,0,
        314,316,3,52,26,0,315,313,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,
        0,317,318,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,320,311,1,0,0,
        0,320,321,1,0,0,0,321,322,1,0,0,0,322,323,5,53,0,0,323,354,1,0,0,
        0,324,325,5,52,0,0,325,326,5,45,0,0,326,327,3,36,18,0,327,328,5,
        53,0,0,328,330,5,52,0,0,329,331,3,42,21,0,330,329,1,0,0,0,330,331,
        1,0,0,0,331,341,1,0,0,0,332,333,5,51,0,0,333,338,3,52,26,0,334,335,
        5,62,0,0,335,337,3,52,26,0,336,334,1,0,0,0,337,340,1,0,0,0,338,336,
        1,0,0,0,338,339,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,341,332,
        1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,344,5,53,0,0,344,354,
        1,0,0,0,345,346,7,2,0,0,346,354,3,36,18,17,347,348,7,3,0,0,348,354,
        3,36,18,16,349,350,5,42,0,0,350,354,3,36,18,15,351,352,5,50,0,0,
        352,354,3,36,18,3,353,278,1,0,0,0,353,283,1,0,0,0,353,284,1,0,0,
        0,353,285,1,0,0,0,353,286,1,0,0,0,353,287,1,0,0,0,353,288,1,0,0,
        0,353,289,1,0,0,0,353,290,1,0,0,0,353,292,1,0,0,0,353,324,1,0,0,
        0,353,345,1,0,0,0,353,347,1,0,0,0,353,349,1,0,0,0,353,351,1,0,0,
        0,354,419,1,0,0,0,355,356,10,14,0,0,356,357,5,48,0,0,357,418,3,36,
        18,14,358,359,10,13,0,0,359,360,7,4,0,0,360,418,3,36,18,14,361,362,
        10,12,0,0,362,363,7,3,0,0,363,418,3,36,18,13,364,365,10,11,0,0,365,
        366,7,5,0,0,366,418,3,36,18,12,367,368,10,10,0,0,368,369,5,40,0,
        0,369,418,3,36,18,11,370,371,10,9,0,0,371,372,5,41,0,0,372,418,3,
        36,18,10,373,374,10,8,0,0,374,375,7,6,0,0,375,418,3,36,18,9,376,
        377,10,7,0,0,377,378,7,7,0,0,378,418,3,36,18,8,379,380,10,6,0,0,
        380,381,7,8,0,0,381,418,3,36,18,7,382,383,10,5,0,0,383,384,5,77,
        0,0,384,418,3,36,18,6,385,386,10,4,0,0,386,387,7,9,0,0,387,418,3,
        36,18,5,388,389,10,1,0,0,389,390,7,10,0,0,390,418,3,36,18,1,391,
        394,10,21,0,0,392,393,5,33,0,0,393,395,3,64,32,0,394,392,1,0,0,0,
        395,396,1,0,0,0,396,394,1,0,0,0,396,397,1,0,0,0,397,418,1,0,0,0,
        398,403,10,20,0,0,399,400,5,56,0,0,400,401,3,36,18,0,401,402,5,57,
        0,0,402,404,1,0,0,0,403,399,1,0,0,0,404,405,1,0,0,0,405,403,1,0,
        0,0,405,406,1,0,0,0,406,418,1,0,0,0,407,408,10,19,0,0,408,418,7,
        2,0,0,409,410,10,18,0,0,410,418,5,42,0,0,411,412,10,2,0,0,412,413,
        5,58,0,0,413,414,3,36,18,0,414,415,5,59,0,0,415,416,3,36,18,0,416,
        418,1,0,0,0,417,355,1,0,0,0,417,358,1,0,0,0,417,361,1,0,0,0,417,
        364,1,0,0,0,417,367,1,0,0,0,417,370,1,0,0,0,417,373,1,0,0,0,417,
        376,1,0,0,0,417,379,1,0,0,0,417,382,1,0,0,0,417,385,1,0,0,0,417,
        388,1,0,0,0,417,391,1,0,0,0,417,398,1,0,0,0,417,407,1,0,0,0,417,
        409,1,0,0,0,417,411,1,0,0,0,418,421,1,0,0,0,419,417,1,0,0,0,419,
        420,1,0,0,0,420,37,1,0,0,0,421,419,1,0,0,0,422,423,5,87,0,0,423,
        425,5,90,0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,426,1,0,0,0,426,
        427,3,64,32,0,427,39,1,0,0,0,428,431,3,64,32,0,429,430,5,90,0,0,
        430,432,3,64,32,0,431,429,1,0,0,0,432,433,1,0,0,0,433,431,1,0,0,
        0,433,434,1,0,0,0,434,41,1,0,0,0,435,440,3,36,18,0,436,437,5,62,
        0,0,437,439,3,36,18,0,438,436,1,0,0,0,439,442,1,0,0,0,440,438,1,
        0,0,0,440,441,1,0,0,0,441,43,1,0,0,0,442,440,1,0,0,0,443,444,7,11,
        0,0,444,45,1,0,0,0,445,446,5,104,0,0,446,47,1,0,0,0,447,448,5,96,
        0,0,448,452,3,36,18,0,449,451,3,2,1,0,450,449,1,0,0,0,451,454,1,
        0,0,0,452,450,1,0,0,0,452,453,1,0,0,0,453,49,1,0,0,0,454,452,1,0,
        0,0,455,459,5,95,0,0,456,458,3,2,1,0,457,456,1,0,0,0,458,461,1,0,
        0,0,459,457,1,0,0,0,459,460,1,0,0,0,460,51,1,0,0,0,461,459,1,0,0,
        0,462,463,3,64,32,0,463,464,5,49,0,0,464,465,3,36,18,0,465,53,1,
        0,0,0,466,467,5,22,0,0,467,472,5,89,0,0,468,469,5,62,0,0,469,471,
        5,89,0,0,470,468,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,472,473,
        1,0,0,0,473,477,1,0,0,0,474,472,1,0,0,0,475,476,5,59,0,0,476,478,
        5,89,0,0,477,475,1,0,0,0,477,478,1,0,0,0,478,479,1,0,0,0,479,480,
        5,23,0,0,480,55,1,0,0,0,481,483,5,44,0,0,482,481,1,0,0,0,482,483,
        1,0,0,0,483,484,1,0,0,0,484,485,5,89,0,0,485,487,5,46,0,0,486,488,
        5,44,0,0,487,486,1,0,0,0,487,488,1,0,0,0,488,489,1,0,0,0,489,490,
        5,89,0,0,490,57,1,0,0,0,491,492,7,12,0,0,492,59,1,0,0,0,493,501,
        5,63,0,0,494,501,5,64,0,0,495,501,3,56,28,0,496,501,3,58,29,0,497,
        501,5,65,0,0,498,501,5,66,0,0,499,501,5,67,0,0,500,493,1,0,0,0,500,
        494,1,0,0,0,500,495,1,0,0,0,500,496,1,0,0,0,500,497,1,0,0,0,500,
        498,1,0,0,0,500,499,1,0,0,0,501,61,1,0,0,0,502,506,5,68,0,0,503,
        506,5,69,0,0,504,506,5,86,0,0,505,502,1,0,0,0,505,503,1,0,0,0,505,
        504,1,0,0,0,506,63,1,0,0,0,507,511,5,87,0,0,508,511,5,85,0,0,509,
        511,5,103,0,0,510,507,1,0,0,0,510,508,1,0,0,0,510,509,1,0,0,0,511,
        65,1,0,0,0,512,514,5,56,0,0,513,515,3,42,21,0,514,513,1,0,0,0,514,
        515,1,0,0,0,515,516,1,0,0,0,516,517,5,57,0,0,517,67,1,0,0,0,518,
        522,5,54,0,0,519,521,3,2,1,0,520,519,1,0,0,0,521,524,1,0,0,0,522,
        520,1,0,0,0,522,523,1,0,0,0,523,525,1,0,0,0,524,522,1,0,0,0,525,
        528,5,55,0,0,526,528,3,2,1,0,527,518,1,0,0,0,527,526,1,0,0,0,528,
        69,1,0,0,0,54,73,97,104,114,117,120,128,134,138,145,147,157,160,
        173,176,188,193,197,201,209,219,226,244,265,276,292,301,305,309,
        317,320,330,338,341,353,396,405,417,419,424,433,440,452,459,472,
        477,482,487,500,505,510,514,522,527
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
export class AndExprContext extends ExprContext {
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
    public AND(): antlr.TerminalNode {
        return this.getToken(asirParser.AND, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterAndExpr) {
             listener.enterAndExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAndExpr) {
             listener.exitAndExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexAccessExprContext extends ExprContext {
    public _expr?: ExprContext;
    public _indices: ExprContext[] = [];
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterIndexAccessExpr) {
             listener.enterIndexAccessExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIndexAccessExpr) {
             listener.exitIndexAccessExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitIndexAccessExpr) {
            return visitor.visitIndexAccessExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DottedIdExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dottedIdentifier(): DottedIdentifierContext {
        return this.getRuleContext(0, DottedIdentifierContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDottedIdExpr) {
             listener.enterDottedIdExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDottedIdExpr) {
             listener.exitDottedIdExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitDottedIdExpr) {
            return visitor.visitDottedIdExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreFixExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public INC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DEC, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPreFixExpr) {
             listener.enterPreFixExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPreFixExpr) {
             listener.exitPreFixExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitPreFixExpr) {
            return visitor.visitPreFixExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(asirParser.STRING, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterStringLiteralExpr) {
             listener.enterStringLiteralExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitStringLiteralExpr) {
             listener.exitStringLiteralExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitStringLiteralExpr) {
            return visitor.visitStringLiteralExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryNotExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(asirParser.NOT, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterUnaryNotExpr) {
             listener.enterUnaryNotExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitUnaryNotExpr) {
             listener.exitUnaryNotExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitUnaryNotExpr) {
            return visitor.visitUnaryNotExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationalExprContext extends ExprContext {
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
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.EQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(asirParser.NEQ, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(asirParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(asirParser.GT, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(asirParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(asirParser.GE, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterRelationalExpr) {
             listener.enterRelationalExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitRelationalExpr) {
             listener.exitRelationalExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitRelationalExpr) {
            return visitor.visitRelationalExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignExprContext extends ExprContext {
    public _left?: ExprContext;
    public _op?: Token | null;
    public _right?: ExprContext;
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
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(asirParser.ASSIGN, 0);
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
    public override enterRule(listener: asirListener): void {
        if(listener.enterAssignExpr) {
             listener.enterAssignExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAssignExpr) {
             listener.exitAssignExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitAssignExpr) {
            return visitor.visitAssignExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FactorialExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(asirParser.NOT, 0)!;
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
export class ListLiteralExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public list(): ListContext {
        return this.getRuleContext(0, ListContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterListLiteralExpr) {
             listener.enterListLiteralExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitListLiteralExpr) {
             listener.exitListLiteralExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitListLiteralExpr) {
            return visitor.visitListLiteralExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrecharExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public prechar(): PrecharContext {
        return this.getRuleContext(0, PrecharContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPrecharExpr) {
             listener.enterPrecharExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPrecharExpr) {
             listener.exitPrecharExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitPrecharExpr) {
            return visitor.visitPrecharExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QENotExprContext extends ExprContext {
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
    public QE_8(): antlr.TerminalNode {
        return this.getToken(asirParser.QE_8, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQENotExpr) {
             listener.enterQENotExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQENotExpr) {
             listener.exitQENotExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQENotExpr) {
            return visitor.visitQENotExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VarExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterVarExpr) {
             listener.enterVarExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitVarExpr) {
             listener.exitVarExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitVarExpr) {
            return visitor.visitVarExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FCallExprContext extends ExprContext {
    public _is_global?: Token | null;
    public _path?: QualifiedNameContext;
    public _INT?: Token | null;
    public _diffOrders: antlr.Token[] = [];
    public _args?: ExprlistContext;
    public _optionPair?: OptionPairContext;
    public _options: OptionPairContext[] = [];
    public constructor(ctx: ExprContext) {
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
export class QEAndExprContext extends ExprContext {
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
    public QE_9(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_9, 0);
    }
    public QE_10(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_10, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEAndExpr) {
             listener.enterQEAndExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEAndExpr) {
             listener.exitQEAndExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQEAndExpr) {
            return visitor.visitQEAndExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctorCallExprContext extends ExprContext {
    public _callee?: ExprContext;
    public _args?: ExprlistContext;
    public _optionPair?: OptionPairContext;
    public _options: OptionPairContext[] = [];
    public constructor(ctx: ExprContext) {
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
export class TernaryExprContext extends ExprContext {
    public _condition?: ExprContext;
    public _consequence?: ExprContext;
    public _alternative?: ExprContext;
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
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QUESTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(asirParser.COLON, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterTernaryExpr) {
             listener.enterTernaryExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitTernaryExpr) {
             listener.exitTernaryExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitTernaryExpr) {
            return visitor.visitTernaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QECompareExprContext extends ExprContext {
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
    public QE_1(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_1, 0);
    }
    public QE_2(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_2, 0);
    }
    public QE_3(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_3, 0);
    }
    public QE_4(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_4, 0);
    }
    public QE_5(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_5, 0);
    }
    public QE_6(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_6, 0);
    }
    public QE_7(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_7, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQECompareExpr) {
             listener.enterQECompareExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQECompareExpr) {
             listener.exitQECompareExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQECompareExpr) {
            return visitor.visitQECompareExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public id(): IdContext {
        return this.getRuleContext(0, IdContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterIdLiteral) {
             listener.enterIdLiteral(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitIdLiteral) {
             listener.exitIdLiteral(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitIdLiteral) {
            return visitor.visitIdLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnarySignExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(asirParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MINUS, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterUnarySignExpr) {
             listener.enterUnarySignExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitUnarySignExpr) {
             listener.exitUnarySignExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitUnarySignExpr) {
            return visitor.visitUnarySignExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrExprContext extends ExprContext {
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
    public OR(): antlr.TerminalNode {
        return this.getToken(asirParser.OR, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterOrExpr) {
             listener.enterOrExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitOrExpr) {
             listener.exitOrExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QEOrExprContext extends ExprContext {
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
    public QE_11(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_11, 0);
    }
    public QE_12(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_12, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEOrExpr) {
             listener.enterQEOrExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEOrExpr) {
             listener.exitQEOrExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQEOrExpr) {
            return visitor.visitQEOrExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PowerExprContext extends ExprContext {
    public _base?: ExprContext;
    public _exponent?: ExprContext;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public POWER(): antlr.TerminalNode {
        return this.getToken(asirParser.POWER, 0)!;
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
        if(listener.enterPowerExpr) {
             listener.enterPowerExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPowerExpr) {
             listener.exitPowerExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitPowerExpr) {
            return visitor.visitPowerExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QEImplExprContext extends ExprContext {
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
    public QE_IMPL(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_IMPL, 0);
    }
    public QE_REPL(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_REPL, 0);
    }
    public QE_EQUIV(): antlr.TerminalNode | null {
        return this.getToken(asirParser.QE_EQUIV, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQEImplExpr) {
             listener.enterQEImplExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQEImplExpr) {
             listener.exitQEImplExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQEImplExpr) {
            return visitor.visitQEImplExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DpolyLiteralExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dpoly(): DpolyContext {
        return this.getRuleContext(0, DpolyContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDpolyLiteralExpr) {
             listener.enterDpolyLiteralExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDpolyLiteralExpr) {
             listener.exitDpolyLiteralExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitDpolyLiteralExpr) {
            return visitor.visitDpolyLiteralExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuoteExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BACK(): antlr.TerminalNode {
        return this.getToken(asirParser.BACK, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterQuoteExpr) {
             listener.enterQuoteExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitQuoteExpr) {
             listener.exitQuoteExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitQuoteExpr) {
            return visitor.visitQuoteExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostFixExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public INC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DEC, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterPostFixExpr) {
             listener.enterPostFixExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitPostFixExpr) {
             listener.exitPostFixExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitPostFixExpr) {
            return visitor.visitPostFixExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
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
        if(listener.enterParenExpr) {
             listener.enterParenExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitParenExpr) {
             listener.exitParenExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitParenExpr) {
            return visitor.visitParenExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MemberAccessExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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
        if(listener.enterMemberAccessExpr) {
             listener.enterMemberAccessExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitMemberAccessExpr) {
             listener.exitMemberAccessExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitMemberAccessExpr) {
            return visitor.visitMemberAccessExpr(this);
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
        return this.getToken(asirParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MINUS, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterAddSubExpr) {
             listener.enterAddSubExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAddSubExpr) {
             listener.exitAddSubExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitAddSubExpr) {
            return visitor.visitAddSubExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public num(): NumContext {
        return this.getRuleContext(0, NumContext)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterNumberLiteral) {
             listener.enterNumberLiteral(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitNumberLiteral) {
             listener.exitNumberLiteral(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulDivSurExprContext extends ExprContext {
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
    public MULT(): antlr.TerminalNode | null {
        return this.getToken(asirParser.MULT, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(asirParser.DIV, 0);
    }
    public SUR(): antlr.TerminalNode | null {
        return this.getToken(asirParser.SUR, 0);
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterMulDivSurExpr) {
             listener.enterMulDivSurExpr(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitMulDivSurExpr) {
             listener.exitMulDivSurExpr(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitMulDivSurExpr) {
            return visitor.visitMulDivSurExpr(this);
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
export class ApGenNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public APGEN(): antlr.TerminalNode {
        return this.getToken(asirParser.APGEN, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterApGenNum) {
             listener.enterApGenNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitApGenNum) {
             listener.exitApGenNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitApGenNum) {
            return visitor.visitApGenNum(this);
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
export class AsGenNumContext extends NumContext {
    public constructor(ctx: NumContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASGEN(): antlr.TerminalNode {
        return this.getToken(asirParser.ASGEN, 0)!;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterAsGenNum) {
             listener.enterAsGenNum(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitAsGenNum) {
             listener.exitAsGenNum(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitAsGenNum) {
            return visitor.visitAsGenNum(this);
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
