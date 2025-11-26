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
    public static readonly RULE_dottedAllowedId = 20;
    public static readonly RULE_dottedIdentifier = 21;
    public static readonly RULE_exprlist = 22;
    public static readonly RULE_terminator = 23;
    public static readonly RULE_systemPath = 24;
    public static readonly RULE_elifClause = 25;
    public static readonly RULE_elseClause = 26;
    public static readonly RULE_optionPair = 27;
    public static readonly RULE_dpoly = 28;
    public static readonly RULE_rational = 29;
    public static readonly RULE_decimal = 30;
    public static readonly RULE_num = 31;
    public static readonly RULE_id = 32;
    public static readonly RULE_indeterminate = 33;
    public static readonly RULE_list = 34;
    public static readonly RULE_block = 35;

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
        "functionModule", "expr", "qualifiedName", "dottedAllowedId", "dottedIdentifier", 
        "exprlist", "terminator", "systemPath", "elifClause", "elseClause", 
        "optionPair", "dpoly", "rational", "decimal", "num", "id", "indeterminate", 
        "list", "block",
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
            this.state = 75;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
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
            this.state = 99;
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
                this.state = 80;
                this.expr(0);
                this.state = 81;
                this.terminator();
                }
                break;
            case asirParser.SEMI:
            case asirParser.DOLLAR:
                localContext = new EmptyLineStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 83;
                this.terminator();
                }
                break;
            case asirParser.DEF:
                localContext = new DefinitionStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 84;
                this.functionDefinition();
                }
                break;
            case asirParser.FUNCTION:
                localContext = new ForwardDeclStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 85;
                this.formDeclaration();
                }
                break;
            case asirParser.IF:
                localContext = new IfStatementContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 86;
                this.functionIf();
                }
                break;
            case asirParser.FOR:
                localContext = new ForStatementContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 87;
                this.functionFor();
                }
                break;
            case asirParser.WHILE:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 88;
                this.functionWhile();
                }
                break;
            case asirParser.DO:
                localContext = new DoStatementContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 89;
                this.functionDo();
                }
                break;
            case asirParser.RETURN:
                localContext = new ReturnStatementContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 90;
                this.functionReturn();
                }
                break;
            case asirParser.BREAK:
                localContext = new BreakStatementContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 91;
                this.functionBreak();
                }
                break;
            case asirParser.CONTINUE:
                localContext = new ContinueStatementContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 92;
                this.functionContinue();
                }
                break;
            case asirParser.STRUCT:
                localContext = new StructStatementContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 93;
                this.functionStruct();
                }
                break;
            case asirParser.END:
                localContext = new EndStatementContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 94;
                this.functionEnd();
                }
                break;
            case asirParser.QUIT:
                localContext = new QuitStatementContext(localContext);
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 95;
                this.functionQuit();
                }
                break;
            case asirParser.DEBUG:
                localContext = new DebugStatementContext(localContext);
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 96;
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
                this.state = 97;
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
                this.state = 98;
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
            this.state = 106;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.CHAR:
                localContext = new PreChrContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 101;
                this.match(asirParser.CHAR);
                this.state = 102;
                this.match(asirParser.ID);
                }
                break;
            case asirParser.ID:
                localContext = new PreChrPlusContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 103;
                this.match(asirParser.ID);
                this.state = 104;
                this.match(asirParser.CHARPLUS);
                this.state = 105;
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
            this.state = 150;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.PDEFINE:
                localContext = new PDefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 108;
                this.match(asirParser.PDEFINE);
                this.state = 109;
                (localContext as PDefContext)._name = this.dottedAllowedId();
                this.state = 122;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 110;
                    this.match(asirParser.LPAREN);
                    this.state = 119;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 87) {
                        {
                        this.state = 111;
                        (localContext as PDefContext)._ID = this.match(asirParser.ID);
                        (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                        this.state = 116;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 62) {
                            {
                            {
                            this.state = 112;
                            this.match(asirParser.COMMA);
                            this.state = 113;
                            (localContext as PDefContext)._ID = this.match(asirParser.ID);
                            (localContext as PDefContext)._params.push((localContext as PDefContext)._ID!);
                            }
                            }
                            this.state = 118;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 121;
                    this.match(asirParser.RPAREN);
                    }
                    break;
                }
                this.state = 124;
                (localContext as PDefContext)._body = this.expr(0);
                }
                break;
            case asirParser.PIFDEF:
            case asirParser.PIFNDEF:
            case asirParser.PIF:
                localContext = new PIfContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 126;
                (localContext as PIfContext)._directive = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 7) !== 0))) {
                    (localContext as PIfContext)._directive = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 127;
                (localContext as PIfContext)._condition = this.expr(0);
                this.state = 131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                    {
                    {
                    this.state = 128;
                    (localContext as PIfContext)._statement = this.statement();
                    (localContext as PIfContext)._thenSymts.push((localContext as PIfContext)._statement!);
                    }
                    }
                    this.state = 133;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 137;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 96) {
                    {
                    {
                    this.state = 134;
                    (localContext as PIfContext)._elifClause = this.elifClause();
                    (localContext as PIfContext)._elifs.push((localContext as PIfContext)._elifClause!);
                    }
                    }
                    this.state = 139;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 95) {
                    {
                    this.state = 140;
                    (localContext as PIfContext)._elseBlk = this.elseClause();
                    }
                }

                this.state = 143;
                this.match(asirParser.PENDIF);
                }
                break;
            case asirParser.PINCLUDE:
                localContext = new PIncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 145;
                this.match(asirParser.PINCLUDE);
                this.state = 148;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case asirParser.SYSTEM_PATH_LITERAL:
                    {
                    this.state = 146;
                    (localContext as PIncContext)._path_sys = this.systemPath();
                    }
                    break;
                case asirParser.STRING:
                    {
                    this.state = 147;
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
            this.state = 152;
            this.match(asirParser.DEF);
            this.state = 153;
            (localContext as DefContext)._name = this.indeterminate();
            this.state = 154;
            this.match(asirParser.LPAREN);
            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 87) {
                {
                this.state = 155;
                (localContext as DefContext)._ID = this.match(asirParser.ID);
                (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                this.state = 160;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 62) {
                    {
                    {
                    this.state = 156;
                    this.match(asirParser.COMMA);
                    this.state = 157;
                    (localContext as DefContext)._ID = this.match(asirParser.ID);
                    (localContext as DefContext)._params.push((localContext as DefContext)._ID!);
                    }
                    }
                    this.state = 162;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 165;
            this.match(asirParser.RPAREN);
            this.state = 166;
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
            this.state = 168;
            this.match(asirParser.FUNCTION);
            this.state = 169;
            (localContext as FormDeclContext)._name = this.indeterminate();
            this.state = 170;
            this.match(asirParser.LPAREN);
            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 262149) !== 0)) {
                {
                this.state = 171;
                (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                this.state = 176;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 62) {
                    {
                    {
                    this.state = 172;
                    this.match(asirParser.COMMA);
                    this.state = 173;
                    (localContext as FormDeclContext)._indeterminate = this.indeterminate();
                    (localContext as FormDeclContext)._params.push((localContext as FormDeclContext)._indeterminate!);
                    }
                    }
                    this.state = 178;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 181;
            this.match(asirParser.RPAREN);
            this.state = 182;
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
            this.state = 184;
            this.match(asirParser.IF);
            this.state = 185;
            this.match(asirParser.LPAREN);
            this.state = 186;
            (localContext as IfContext)._condition = this.expr(0);
            this.state = 187;
            this.match(asirParser.RPAREN);
            this.state = 188;
            (localContext as IfContext)._thenBlock = this.block();
            this.state = 191;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 189;
                this.match(asirParser.ELSE);
                this.state = 190;
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
            this.state = 193;
            this.match(asirParser.FOR);
            this.state = 194;
            this.match(asirParser.LPAREN);
            this.state = 196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 195;
                (localContext as ForContext)._init = this.exprlist();
                }
            }

            this.state = 198;
            this.match(asirParser.SEMI);
            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 199;
                (localContext as ForContext)._cond = this.exprlist();
                }
            }

            this.state = 202;
            this.match(asirParser.SEMI);
            this.state = 204;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 203;
                (localContext as ForContext)._update = this.exprlist();
                }
            }

            this.state = 206;
            this.match(asirParser.RPAREN);
            this.state = 207;
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
            this.state = 209;
            this.match(asirParser.WHILE);
            this.state = 210;
            this.match(asirParser.LPAREN);
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 211;
                this.exprlist();
                }
            }

            this.state = 214;
            this.match(asirParser.RPAREN);
            this.state = 215;
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
            this.state = 217;
            this.match(asirParser.DO);
            this.state = 218;
            this.block();
            this.state = 219;
            this.match(asirParser.WHILE);
            this.state = 220;
            this.match(asirParser.LPAREN);
            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 221;
                this.exprlist();
                }
            }

            this.state = 224;
            this.match(asirParser.RPAREN);
            this.state = 225;
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
            this.state = 227;
            this.match(asirParser.RETURN);
            this.state = 229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 228;
                this.expr(0);
                }
            }

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
    public functionContinue(): FunctionContinueContext {
        let localContext = new FunctionContinueContext(this.context, this.state);
        this.enterRule(localContext, 22, asirParser.RULE_functionContinue);
        try {
            localContext = new ContinueContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 233;
            this.match(asirParser.CONTINUE);
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
    public functionBreak(): FunctionBreakContext {
        let localContext = new FunctionBreakContext(this.context, this.state);
        this.enterRule(localContext, 24, asirParser.RULE_functionBreak);
        try {
            localContext = new BreakContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            this.match(asirParser.BREAK);
            this.state = 237;
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
            this.state = 239;
            this.match(asirParser.STRUCT);
            this.state = 240;
            (localContext as StructContext)._name = this.dottedAllowedId();
            this.state = 241;
            this.match(asirParser.LBRANCE);
            this.state = 242;
            (localContext as StructContext)._indeterminate = this.indeterminate();
            (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62) {
                {
                {
                this.state = 243;
                this.match(asirParser.COMMA);
                this.state = 244;
                (localContext as StructContext)._indeterminate = this.indeterminate();
                (localContext as StructContext)._members.push((localContext as StructContext)._indeterminate!);
                }
                }
                this.state = 249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 250;
            this.match(asirParser.RBRANCE);
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
    public functionEnd(): FunctionEndContext {
        let localContext = new FunctionEndContext(this.context, this.state);
        this.enterRule(localContext, 28, asirParser.RULE_functionEnd);
        try {
            localContext = new EndContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 253;
            this.match(asirParser.END);
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
    public functionQuit(): FunctionQuitContext {
        let localContext = new FunctionQuitContext(this.context, this.state);
        this.enterRule(localContext, 30, asirParser.RULE_functionQuit);
        try {
            localContext = new QuitContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 256;
            this.match(asirParser.QUIT);
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
    public functionDebug(): FunctionDebugContext {
        let localContext = new FunctionDebugContext(this.context, this.state);
        this.enterRule(localContext, 32, asirParser.RULE_functionDebug);
        try {
            localContext = new DebugContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.match(asirParser.DEBUG);
            this.state = 260;
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
            this.state = 279;
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
                this.state = 262;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 253952) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 263;
                this.indeterminate();
                this.state = 268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 62) {
                    {
                    {
                    this.state = 264;
                    this.match(asirParser.COMMA);
                    this.state = 265;
                    this.indeterminate();
                    }
                    }
                    this.state = 270;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 271;
                this.terminator();
                }
                break;
            case asirParser.MODULE:
                localContext = new ModuleStartContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 273;
                this.match(asirParser.MODULE);
                this.state = 274;
                this.indeterminate();
                this.state = 275;
                this.terminator();
                }
                break;
            case asirParser.ENDMODULE:
                localContext = new ModuleEndContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 277;
                this.match(asirParser.ENDMODULE);
                this.state = 278;
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
            this.state = 356;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 282;
                this.match(asirParser.LPAREN);
                this.state = 283;
                this.expr(0);
                this.state = 284;
                this.match(asirParser.RPAREN);
                }
                break;
            case 2:
                {
                localContext = new NumberLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 286;
                this.num();
                }
                break;
            case 3:
                {
                localContext = new IdLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 287;
                this.id();
                }
                break;
            case 4:
                {
                localContext = new StringLiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 288;
                this.match(asirParser.STRING);
                }
                break;
            case 5:
                {
                localContext = new ListLiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 289;
                this.list();
                }
                break;
            case 6:
                {
                localContext = new DpolyLiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 290;
                this.dpoly();
                }
                break;
            case 7:
                {
                localContext = new PrecharExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 291;
                this.prechar();
                }
                break;
            case 8:
                {
                localContext = new DottedIdExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 292;
                this.dottedIdentifier();
                }
                break;
            case 9:
                {
                localContext = new VarExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 293;
                this.indeterminate();
                }
                break;
            case 10:
                {
                localContext = new FCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 295;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 294;
                    (localContext as FCallExprContext)._is_global = this.match(asirParser.COLON2);
                    }
                }

                this.state = 297;
                (localContext as FCallExprContext)._path = this.qualifiedName();
                this.state = 308;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 54) {
                    {
                    this.state = 298;
                    this.match(asirParser.LBRANCE);
                    this.state = 299;
                    (localContext as FCallExprContext)._INT = this.match(asirParser.INT);
                    (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                    this.state = 304;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 62) {
                        {
                        {
                        this.state = 300;
                        this.match(asirParser.COMMA);
                        this.state = 301;
                        (localContext as FCallExprContext)._INT = this.match(asirParser.INT);
                        (localContext as FCallExprContext)._diffOrders.push((localContext as FCallExprContext)._INT!);
                        }
                        }
                        this.state = 306;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 307;
                    this.match(asirParser.RBRANCE);
                    }
                }

                this.state = 310;
                this.match(asirParser.LPAREN);
                this.state = 312;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                    {
                    this.state = 311;
                    (localContext as FCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 323;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 314;
                    this.match(asirParser.MID);
                    this.state = 315;
                    (localContext as FCallExprContext)._optionPair = this.optionPair();
                    (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                    this.state = 320;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 62) {
                        {
                        {
                        this.state = 316;
                        this.match(asirParser.COMMA);
                        this.state = 317;
                        (localContext as FCallExprContext)._optionPair = this.optionPair();
                        (localContext as FCallExprContext)._options.push((localContext as FCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 322;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 325;
                this.match(asirParser.RPAREN);
                }
                break;
            case 11:
                {
                localContext = new FunctorCallExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 327;
                this.match(asirParser.LPAREN);
                this.state = 328;
                this.match(asirParser.MULT);
                this.state = 329;
                (localContext as FunctorCallExprContext)._callee = this.expr(0);
                this.state = 330;
                this.match(asirParser.RPAREN);
                this.state = 331;
                this.match(asirParser.LPAREN);
                this.state = 333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                    {
                    this.state = 332;
                    (localContext as FunctorCallExprContext)._args = this.exprlist();
                    }
                }

                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 335;
                    this.match(asirParser.MID);
                    this.state = 336;
                    (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                    (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                    this.state = 341;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 62) {
                        {
                        {
                        this.state = 337;
                        this.match(asirParser.COMMA);
                        this.state = 338;
                        (localContext as FunctorCallExprContext)._optionPair = this.optionPair();
                        (localContext as FunctorCallExprContext)._options.push((localContext as FunctorCallExprContext)._optionPair!);
                        }
                        }
                        this.state = 343;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 346;
                this.match(asirParser.RPAREN);
                }
                break;
            case 12:
                {
                localContext = new PreFixExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 348;
                _la = this.tokenStream.LA(1);
                if(!(_la === 25 || _la === 26)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 349;
                this.expr(17);
                }
                break;
            case 13:
                {
                localContext = new UnarySignExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 350;
                _la = this.tokenStream.LA(1);
                if(!(_la === 43 || _la === 44)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 351;
                this.expr(16);
                }
                break;
            case 14:
                {
                localContext = new UnaryNotExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 352;
                this.match(asirParser.NOT);
                this.state = 353;
                this.expr(15);
                }
                break;
            case 15:
                {
                localContext = new QuoteExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 354;
                this.match(asirParser.BACK);
                this.state = 355;
                this.expr(3);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 422;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 420;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
                    case 1:
                        {
                        localContext = new PowerExprContext(new ExprContext(parentContext, parentState));
                        (localContext as PowerExprContext)._base = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 358;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 359;
                        this.match(asirParser.POWER);
                        this.state = 360;
                        (localContext as PowerExprContext)._exponent = this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MulDivSurExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 361;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 362;
                        (localContext as MulDivSurExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7) !== 0))) {
                            (localContext as MulDivSurExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 363;
                        this.expr(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddSubExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 364;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 365;
                        (localContext as AddSubExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 43 || _la === 44)) {
                            (localContext as AddSubExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 366;
                        this.expr(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new RelationalExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 367;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 368;
                        (localContext as RelationalExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 63) !== 0))) {
                            (localContext as RelationalExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 369;
                        this.expr(12);
                        }
                        break;
                    case 5:
                        {
                        localContext = new AndExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 370;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 371;
                        this.match(asirParser.AND);
                        this.state = 372;
                        this.expr(11);
                        }
                        break;
                    case 6:
                        {
                        localContext = new OrExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 373;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 374;
                        this.match(asirParser.OR);
                        this.state = 375;
                        this.expr(10);
                        }
                        break;
                    case 7:
                        {
                        localContext = new QECompareExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 376;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 377;
                        (localContext as QECompareExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 127) !== 0))) {
                            (localContext as QECompareExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 378;
                        this.expr(9);
                        }
                        break;
                    case 8:
                        {
                        localContext = new QEAndExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 379;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 380;
                        (localContext as QEAndExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 78 || _la === 79)) {
                            (localContext as QEAndExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 381;
                        this.expr(8);
                        }
                        break;
                    case 9:
                        {
                        localContext = new QEOrExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 382;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 383;
                        (localContext as QEOrExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 80 || _la === 81)) {
                            (localContext as QEOrExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 384;
                        this.expr(7);
                        }
                        break;
                    case 10:
                        {
                        localContext = new QENotExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 385;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 386;
                        this.match(asirParser.QE_8);
                        this.state = 387;
                        this.expr(6);
                        }
                        break;
                    case 11:
                        {
                        localContext = new QEImplExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 388;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 389;
                        (localContext as QEImplExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 7) !== 0))) {
                            (localContext as QEImplExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 390;
                        this.expr(5);
                        }
                        break;
                    case 12:
                        {
                        localContext = new AssignExprContext(new ExprContext(parentContext, parentState));
                        (localContext as AssignExprContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 391;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 392;
                        (localContext as AssignExprContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4194367) !== 0))) {
                            (localContext as AssignExprContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 393;
                        (localContext as AssignExprContext)._right = this.expr(1);
                        }
                        break;
                    case 13:
                        {
                        localContext = new MemberAccessExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 394;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 397;
                        this.errorHandler.sync(this);
                        alternative = 1;
                        do {
                            switch (alternative) {
                            case 1:
                                {
                                {
                                this.state = 395;
                                this.match(asirParser.ARROW);
                                this.state = 396;
                                this.indeterminate();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 399;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    case 14:
                        {
                        localContext = new IndexAccessExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 401;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 406;
                        this.errorHandler.sync(this);
                        alternative = 1;
                        do {
                            switch (alternative) {
                            case 1:
                                {
                                {
                                this.state = 402;
                                this.match(asirParser.LBRACKET);
                                this.state = 403;
                                (localContext as IndexAccessExprContext)._expr = this.expr(0);
                                (localContext as IndexAccessExprContext)._indices.push((localContext as IndexAccessExprContext)._expr!);
                                this.state = 404;
                                this.match(asirParser.RBRACKET);
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 408;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    case 15:
                        {
                        localContext = new PostFixExprContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 410;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 411;
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
                        this.state = 412;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 413;
                        this.match(asirParser.NOT);
                        }
                        break;
                    case 17:
                        {
                        localContext = new TernaryExprContext(new ExprContext(parentContext, parentState));
                        (localContext as TernaryExprContext)._condition = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, asirParser.RULE_expr);
                        this.state = 414;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        {
                        this.state = 415;
                        this.match(asirParser.QUESTION);
                        this.state = 416;
                        (localContext as TernaryExprContext)._consequence = this.expr(0);
                        this.state = 417;
                        this.match(asirParser.COLON);
                        this.state = 418;
                        (localContext as TernaryExprContext)._alternative = this.expr(0);
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 424;
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
            this.state = 427;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                {
                this.state = 425;
                localContext._moduleName = this.match(asirParser.ID);
                this.state = 426;
                this.match(asirParser.DOT);
                }
                break;
            }
            this.state = 429;
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
    public dottedAllowedId(): DottedAllowedIdContext {
        let localContext = new DottedAllowedIdContext(this.context, this.state);
        this.enterRule(localContext, 40, asirParser.RULE_dottedAllowedId);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.indeterminate();
            this.state = 436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 90) {
                {
                {
                this.state = 432;
                this.match(asirParser.DOT);
                this.state = 433;
                this.match(asirParser.ID);
                }
                }
                this.state = 438;
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
    public dottedIdentifier(): DottedIdentifierContext {
        let localContext = new DottedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 42, asirParser.RULE_dottedIdentifier);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 439;
            this.indeterminate();
            this.state = 442;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 440;
                    this.match(asirParser.DOT);
                    this.state = 441;
                    this.indeterminate();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 444;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
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
        this.enterRule(localContext, 44, asirParser.RULE_exprlist);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 446;
            this.expr(0);
            this.state = 451;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62) {
                {
                {
                this.state = 447;
                this.match(asirParser.COMMA);
                this.state = 448;
                this.expr(0);
                }
                }
                this.state = 453;
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
        this.enterRule(localContext, 46, asirParser.RULE_terminator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 454;
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
        this.enterRule(localContext, 48, asirParser.RULE_systemPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 456;
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
        this.enterRule(localContext, 50, asirParser.RULE_elifClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 458;
            this.match(asirParser.PELIF);
            this.state = 459;
            localContext._condition = this.expr(0);
            this.state = 463;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                {
                {
                this.state = 460;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 465;
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
        this.enterRule(localContext, 52, asirParser.RULE_elseClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 466;
            this.match(asirParser.PELSE);
            this.state = 470;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                {
                {
                this.state = 467;
                localContext._statement = this.statement();
                localContext._statements.push(localContext._statement!);
                }
                }
                this.state = 472;
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
        this.enterRule(localContext, 54, asirParser.RULE_optionPair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 473;
            localContext._key = this.indeterminate();
            this.state = 474;
            this.match(asirParser.ASSIGN);
            this.state = 475;
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
        this.enterRule(localContext, 56, asirParser.RULE_dpoly);
        let _la: number;
        try {
            localContext = new DpContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 477;
            this.match(asirParser.LTLT);
            this.state = 478;
            this.match(asirParser.INT);
            this.state = 483;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 62) {
                {
                {
                this.state = 479;
                this.match(asirParser.COMMA);
                this.state = 480;
                this.match(asirParser.INT);
                }
                }
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 486;
                this.match(asirParser.COLON);
                this.state = 487;
                this.match(asirParser.INT);
                }
            }

            this.state = 490;
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
        this.enterRule(localContext, 58, asirParser.RULE_rational);
        let _la: number;
        try {
            localContext = new RatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 493;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 492;
                this.match(asirParser.MINUS);
                }
            }

            this.state = 495;
            this.match(asirParser.INT);
            this.state = 496;
            this.match(asirParser.DIV);
            this.state = 498;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 497;
                this.match(asirParser.MINUS);
                }
            }

            this.state = 500;
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
        this.enterRule(localContext, 60, asirParser.RULE_decimal);
        let _la: number;
        try {
            localContext = new FloatContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 502;
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
        this.enterRule(localContext, 62, asirParser.RULE_num);
        try {
            this.state = 511;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                localContext = new HexNumContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 504;
                this.match(asirParser.HEX);
                }
                break;
            case 2:
                localContext = new BitNumContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 505;
                this.match(asirParser.BIT);
                }
                break;
            case 3:
                localContext = new RatNumContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 506;
                this.rational();
                }
                break;
            case 4:
                localContext = new DecNumContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 507;
                this.decimal();
                }
                break;
            case 5:
                localContext = new ImaNumContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 508;
                this.match(asirParser.IMAGINARY);
                }
                break;
            case 6:
                localContext = new AsGenNumContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 509;
                this.match(asirParser.ASGEN);
                }
                break;
            case 7:
                localContext = new ApGenNumContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 510;
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
        this.enterRule(localContext, 64, asirParser.RULE_id);
        try {
            this.state = 516;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.BEFORE:
                localContext = new BefContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 513;
                this.match(asirParser.BEFORE);
                }
                break;
            case asirParser.BEFORE_N:
                localContext = new BefNContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 514;
                this.match(asirParser.BEFORE_N);
                }
                break;
            case asirParser.VAR_2:
                localContext = new V2IdContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 515;
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
        this.enterRule(localContext, 66, asirParser.RULE_indeterminate);
        try {
            this.state = 521;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.ID:
                localContext = new FuncContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 518;
                this.match(asirParser.ID);
                }
                break;
            case asirParser.ATFUNC:
                localContext = new AtFuncContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 519;
                this.match(asirParser.ATFUNC);
                }
                break;
            case asirParser.NOSTRING:
                localContext = new ChFuncContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 520;
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
        this.enterRule(localContext, 68, asirParser.RULE_list);
        let _la: number;
        try {
            localContext = new ListExprContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 523;
            this.match(asirParser.LBRACKET);
            this.state = 525;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634816) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 266355975) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 458783) !== 0)) {
                {
                this.state = 524;
                this.exprlist();
                }
            }

            this.state = 527;
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
        this.enterRule(localContext, 70, asirParser.RULE_block);
        let _la: number;
        try {
            this.state = 538;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case asirParser.LBRANCE:
                localContext = new SentenceContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 529;
                this.match(asirParser.LBRANCE);
                this.state = 533;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 125829054) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 267142407) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 484255) !== 0)) {
                    {
                    {
                    this.state = 530;
                    this.statement();
                    }
                    }
                    this.state = 535;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 536;
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
                this.state = 537;
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
        4,1,108,541,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,1,0,5,0,74,8,0,10,0,12,0,77,9,0,1,0,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,3,1,100,8,1,1,2,1,2,1,2,1,2,1,2,3,2,107,8,2,1,3,
        1,3,1,3,1,3,1,3,1,3,5,3,115,8,3,10,3,12,3,118,9,3,3,3,120,8,3,1,
        3,3,3,123,8,3,1,3,1,3,1,3,1,3,1,3,5,3,130,8,3,10,3,12,3,133,9,3,
        1,3,5,3,136,8,3,10,3,12,3,139,9,3,1,3,3,3,142,8,3,1,3,1,3,1,3,1,
        3,1,3,3,3,149,8,3,3,3,151,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,159,8,
        4,10,4,12,4,162,9,4,3,4,164,8,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
        1,5,5,5,175,8,5,10,5,12,5,178,9,5,3,5,180,8,5,1,5,1,5,1,5,1,6,1,
        6,1,6,1,6,1,6,1,6,1,6,3,6,192,8,6,1,7,1,7,1,7,3,7,197,8,7,1,7,1,
        7,3,7,201,8,7,1,7,1,7,3,7,205,8,7,1,7,1,7,1,7,1,8,1,8,1,8,3,8,213,
        8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,223,8,9,1,9,1,9,1,9,1,10,
        1,10,3,10,230,8,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,
        1,13,1,13,1,13,1,13,1,13,5,13,246,8,13,10,13,12,13,249,9,13,1,13,
        1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,
        1,17,1,17,5,17,267,8,17,10,17,12,17,270,9,17,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,3,17,280,8,17,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,296,8,18,1,18,1,18,
        1,18,1,18,1,18,5,18,303,8,18,10,18,12,18,306,9,18,1,18,3,18,309,
        8,18,1,18,1,18,3,18,313,8,18,1,18,1,18,1,18,1,18,5,18,319,8,18,10,
        18,12,18,322,9,18,3,18,324,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,1,18,3,18,334,8,18,1,18,1,18,1,18,1,18,5,18,340,8,18,10,18,12,
        18,343,9,18,3,18,345,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,3,18,357,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,4,18,398,8,18,11,18,12,18,399,1,18,1,18,
        1,18,1,18,1,18,4,18,407,8,18,11,18,12,18,408,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,5,18,421,8,18,10,18,12,18,424,9,18,
        1,19,1,19,3,19,428,8,19,1,19,1,19,1,20,1,20,1,20,5,20,435,8,20,10,
        20,12,20,438,9,20,1,21,1,21,1,21,4,21,443,8,21,11,21,12,21,444,1,
        22,1,22,1,22,5,22,450,8,22,10,22,12,22,453,9,22,1,23,1,23,1,24,1,
        24,1,25,1,25,1,25,5,25,462,8,25,10,25,12,25,465,9,25,1,26,1,26,5,
        26,469,8,26,10,26,12,26,472,9,26,1,27,1,27,1,27,1,27,1,28,1,28,1,
        28,1,28,5,28,482,8,28,10,28,12,28,485,9,28,1,28,1,28,3,28,489,8,
        28,1,28,1,28,1,29,3,29,494,8,29,1,29,1,29,1,29,3,29,499,8,29,1,29,
        1,29,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,512,8,31,
        1,32,1,32,1,32,3,32,517,8,32,1,33,1,33,1,33,3,33,522,8,33,1,34,1,
        34,3,34,526,8,34,1,34,1,34,1,35,1,35,5,35,532,8,35,10,35,12,35,535,
        9,35,1,35,1,35,3,35,539,8,35,1,35,0,1,36,36,0,2,4,6,8,10,12,14,16,
        18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
        62,64,66,68,70,0,13,1,0,92,94,1,0,13,17,1,0,25,26,1,0,43,44,1,0,
        45,47,1,0,34,39,1,0,70,76,1,0,78,79,1,0,80,81,1,0,82,84,2,0,27,32,
        49,49,1,0,60,61,1,0,88,89,611,0,75,1,0,0,0,2,99,1,0,0,0,4,106,1,
        0,0,0,6,150,1,0,0,0,8,152,1,0,0,0,10,168,1,0,0,0,12,184,1,0,0,0,
        14,193,1,0,0,0,16,209,1,0,0,0,18,217,1,0,0,0,20,227,1,0,0,0,22,233,
        1,0,0,0,24,236,1,0,0,0,26,239,1,0,0,0,28,253,1,0,0,0,30,256,1,0,
        0,0,32,259,1,0,0,0,34,279,1,0,0,0,36,356,1,0,0,0,38,427,1,0,0,0,
        40,431,1,0,0,0,42,439,1,0,0,0,44,446,1,0,0,0,46,454,1,0,0,0,48,456,
        1,0,0,0,50,458,1,0,0,0,52,466,1,0,0,0,54,473,1,0,0,0,56,477,1,0,
        0,0,58,493,1,0,0,0,60,502,1,0,0,0,62,511,1,0,0,0,64,516,1,0,0,0,
        66,521,1,0,0,0,68,523,1,0,0,0,70,538,1,0,0,0,72,74,3,2,1,0,73,72,
        1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,
        77,75,1,0,0,0,78,79,5,0,0,1,79,1,1,0,0,0,80,81,3,36,18,0,81,82,3,
        46,23,0,82,100,1,0,0,0,83,100,3,46,23,0,84,100,3,8,4,0,85,100,3,
        10,5,0,86,100,3,12,6,0,87,100,3,14,7,0,88,100,3,16,8,0,89,100,3,
        18,9,0,90,100,3,20,10,0,91,100,3,24,12,0,92,100,3,22,11,0,93,100,
        3,26,13,0,94,100,3,28,14,0,95,100,3,30,15,0,96,100,3,32,16,0,97,
        100,3,34,17,0,98,100,3,6,3,0,99,80,1,0,0,0,99,83,1,0,0,0,99,84,1,
        0,0,0,99,85,1,0,0,0,99,86,1,0,0,0,99,87,1,0,0,0,99,88,1,0,0,0,99,
        89,1,0,0,0,99,90,1,0,0,0,99,91,1,0,0,0,99,92,1,0,0,0,99,93,1,0,0,
        0,99,94,1,0,0,0,99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,
        1,0,0,0,100,3,1,0,0,0,101,102,5,101,0,0,102,107,5,87,0,0,103,104,
        5,87,0,0,104,105,5,100,0,0,105,107,5,87,0,0,106,101,1,0,0,0,106,
        103,1,0,0,0,107,5,1,0,0,0,108,109,5,99,0,0,109,122,3,40,20,0,110,
        119,5,52,0,0,111,116,5,87,0,0,112,113,5,62,0,0,113,115,5,87,0,0,
        114,112,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,
        117,120,1,0,0,0,118,116,1,0,0,0,119,111,1,0,0,0,119,120,1,0,0,0,
        120,121,1,0,0,0,121,123,5,53,0,0,122,110,1,0,0,0,122,123,1,0,0,0,
        123,124,1,0,0,0,124,125,3,36,18,0,125,151,1,0,0,0,126,127,7,0,0,
        0,127,131,3,36,18,0,128,130,3,2,1,0,129,128,1,0,0,0,130,133,1,0,
        0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,137,1,0,0,0,133,131,1,0,
        0,0,134,136,3,50,25,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,
        0,0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,140,142,3,
        52,26,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,
        5,97,0,0,144,151,1,0,0,0,145,148,5,98,0,0,146,149,3,48,24,0,147,
        149,5,102,0,0,148,146,1,0,0,0,148,147,1,0,0,0,149,151,1,0,0,0,150,
        108,1,0,0,0,150,126,1,0,0,0,150,145,1,0,0,0,151,7,1,0,0,0,152,153,
        5,1,0,0,153,154,3,66,33,0,154,163,5,52,0,0,155,160,5,87,0,0,156,
        157,5,62,0,0,157,159,5,87,0,0,158,156,1,0,0,0,159,162,1,0,0,0,160,
        158,1,0,0,0,160,161,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,163,
        155,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,5,53,0,0,166,
        167,3,70,35,0,167,9,1,0,0,0,168,169,5,18,0,0,169,170,3,66,33,0,170,
        179,5,52,0,0,171,176,3,66,33,0,172,173,5,62,0,0,173,175,3,66,33,
        0,174,172,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,
        0,177,180,1,0,0,0,178,176,1,0,0,0,179,171,1,0,0,0,179,180,1,0,0,
        0,180,181,1,0,0,0,181,182,5,53,0,0,182,183,3,46,23,0,183,11,1,0,
        0,0,184,185,5,2,0,0,185,186,5,52,0,0,186,187,3,36,18,0,187,188,5,
        53,0,0,188,191,3,70,35,0,189,190,5,6,0,0,190,192,3,70,35,0,191,189,
        1,0,0,0,191,192,1,0,0,0,192,13,1,0,0,0,193,194,5,3,0,0,194,196,5,
        52,0,0,195,197,3,44,22,0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,
        1,0,0,0,198,200,5,60,0,0,199,201,3,44,22,0,200,199,1,0,0,0,200,201,
        1,0,0,0,201,202,1,0,0,0,202,204,5,60,0,0,203,205,3,44,22,0,204,203,
        1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,207,5,53,0,0,207,208,
        3,70,35,0,208,15,1,0,0,0,209,210,5,4,0,0,210,212,5,52,0,0,211,213,
        3,44,22,0,212,211,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,215,
        5,53,0,0,215,216,3,70,35,0,216,17,1,0,0,0,217,218,5,5,0,0,218,219,
        3,70,35,0,219,220,5,4,0,0,220,222,5,52,0,0,221,223,3,44,22,0,222,
        221,1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,225,5,53,0,0,225,
        226,5,60,0,0,226,19,1,0,0,0,227,229,5,7,0,0,228,230,3,36,18,0,229,
        228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,3,46,23,0,232,
        21,1,0,0,0,233,234,5,8,0,0,234,235,3,46,23,0,235,23,1,0,0,0,236,
        237,5,9,0,0,237,238,3,46,23,0,238,25,1,0,0,0,239,240,5,10,0,0,240,
        241,3,40,20,0,241,242,5,54,0,0,242,247,3,66,33,0,243,244,5,62,0,
        0,244,246,3,66,33,0,245,243,1,0,0,0,246,249,1,0,0,0,247,245,1,0,
        0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,247,1,0,0,0,250,251,5,55,
        0,0,251,252,3,46,23,0,252,27,1,0,0,0,253,254,5,19,0,0,254,255,3,
        46,23,0,255,29,1,0,0,0,256,257,5,20,0,0,257,258,3,46,23,0,258,31,
        1,0,0,0,259,260,5,21,0,0,260,261,3,46,23,0,261,33,1,0,0,0,262,263,
        7,1,0,0,263,268,3,66,33,0,264,265,5,62,0,0,265,267,3,66,33,0,266,
        264,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,
        271,1,0,0,0,270,268,1,0,0,0,271,272,3,46,23,0,272,280,1,0,0,0,273,
        274,5,11,0,0,274,275,3,66,33,0,275,276,3,46,23,0,276,280,1,0,0,0,
        277,278,5,12,0,0,278,280,3,46,23,0,279,262,1,0,0,0,279,273,1,0,0,
        0,279,277,1,0,0,0,280,35,1,0,0,0,281,282,6,18,-1,0,282,283,5,52,
        0,0,283,284,3,36,18,0,284,285,5,53,0,0,285,357,1,0,0,0,286,357,3,
        62,31,0,287,357,3,64,32,0,288,357,5,102,0,0,289,357,3,68,34,0,290,
        357,3,56,28,0,291,357,3,4,2,0,292,357,3,42,21,0,293,357,3,66,33,
        0,294,296,5,24,0,0,295,294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,
        0,297,308,3,38,19,0,298,299,5,54,0,0,299,304,5,89,0,0,300,301,5,
        62,0,0,301,303,5,89,0,0,302,300,1,0,0,0,303,306,1,0,0,0,304,302,
        1,0,0,0,304,305,1,0,0,0,305,307,1,0,0,0,306,304,1,0,0,0,307,309,
        5,55,0,0,308,298,1,0,0,0,308,309,1,0,0,0,309,310,1,0,0,0,310,312,
        5,52,0,0,311,313,3,44,22,0,312,311,1,0,0,0,312,313,1,0,0,0,313,323,
        1,0,0,0,314,315,5,51,0,0,315,320,3,54,27,0,316,317,5,62,0,0,317,
        319,3,54,27,0,318,316,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,
        321,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,323,314,1,0,0,0,323,
        324,1,0,0,0,324,325,1,0,0,0,325,326,5,53,0,0,326,357,1,0,0,0,327,
        328,5,52,0,0,328,329,5,45,0,0,329,330,3,36,18,0,330,331,5,53,0,0,
        331,333,5,52,0,0,332,334,3,44,22,0,333,332,1,0,0,0,333,334,1,0,0,
        0,334,344,1,0,0,0,335,336,5,51,0,0,336,341,3,54,27,0,337,338,5,62,
        0,0,338,340,3,54,27,0,339,337,1,0,0,0,340,343,1,0,0,0,341,339,1,
        0,0,0,341,342,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,344,335,1,
        0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,347,5,53,0,0,347,357,1,
        0,0,0,348,349,7,2,0,0,349,357,3,36,18,17,350,351,7,3,0,0,351,357,
        3,36,18,16,352,353,5,42,0,0,353,357,3,36,18,15,354,355,5,50,0,0,
        355,357,3,36,18,3,356,281,1,0,0,0,356,286,1,0,0,0,356,287,1,0,0,
        0,356,288,1,0,0,0,356,289,1,0,0,0,356,290,1,0,0,0,356,291,1,0,0,
        0,356,292,1,0,0,0,356,293,1,0,0,0,356,295,1,0,0,0,356,327,1,0,0,
        0,356,348,1,0,0,0,356,350,1,0,0,0,356,352,1,0,0,0,356,354,1,0,0,
        0,357,422,1,0,0,0,358,359,10,14,0,0,359,360,5,48,0,0,360,421,3,36,
        18,14,361,362,10,13,0,0,362,363,7,4,0,0,363,421,3,36,18,14,364,365,
        10,12,0,0,365,366,7,3,0,0,366,421,3,36,18,13,367,368,10,11,0,0,368,
        369,7,5,0,0,369,421,3,36,18,12,370,371,10,10,0,0,371,372,5,40,0,
        0,372,421,3,36,18,11,373,374,10,9,0,0,374,375,5,41,0,0,375,421,3,
        36,18,10,376,377,10,8,0,0,377,378,7,6,0,0,378,421,3,36,18,9,379,
        380,10,7,0,0,380,381,7,7,0,0,381,421,3,36,18,8,382,383,10,6,0,0,
        383,384,7,8,0,0,384,421,3,36,18,7,385,386,10,5,0,0,386,387,5,77,
        0,0,387,421,3,36,18,6,388,389,10,4,0,0,389,390,7,9,0,0,390,421,3,
        36,18,5,391,392,10,1,0,0,392,393,7,10,0,0,393,421,3,36,18,1,394,
        397,10,21,0,0,395,396,5,33,0,0,396,398,3,66,33,0,397,395,1,0,0,0,
        398,399,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,421,1,0,0,0,
        401,406,10,20,0,0,402,403,5,56,0,0,403,404,3,36,18,0,404,405,5,57,
        0,0,405,407,1,0,0,0,406,402,1,0,0,0,407,408,1,0,0,0,408,406,1,0,
        0,0,408,409,1,0,0,0,409,421,1,0,0,0,410,411,10,19,0,0,411,421,7,
        2,0,0,412,413,10,18,0,0,413,421,5,42,0,0,414,415,10,2,0,0,415,416,
        5,58,0,0,416,417,3,36,18,0,417,418,5,59,0,0,418,419,3,36,18,0,419,
        421,1,0,0,0,420,358,1,0,0,0,420,361,1,0,0,0,420,364,1,0,0,0,420,
        367,1,0,0,0,420,370,1,0,0,0,420,373,1,0,0,0,420,376,1,0,0,0,420,
        379,1,0,0,0,420,382,1,0,0,0,420,385,1,0,0,0,420,388,1,0,0,0,420,
        391,1,0,0,0,420,394,1,0,0,0,420,401,1,0,0,0,420,410,1,0,0,0,420,
        412,1,0,0,0,420,414,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,
        423,1,0,0,0,423,37,1,0,0,0,424,422,1,0,0,0,425,426,5,87,0,0,426,
        428,5,90,0,0,427,425,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,
        430,3,66,33,0,430,39,1,0,0,0,431,436,3,66,33,0,432,433,5,90,0,0,
        433,435,5,87,0,0,434,432,1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,
        436,437,1,0,0,0,437,41,1,0,0,0,438,436,1,0,0,0,439,442,3,66,33,0,
        440,441,5,90,0,0,441,443,3,66,33,0,442,440,1,0,0,0,443,444,1,0,0,
        0,444,442,1,0,0,0,444,445,1,0,0,0,445,43,1,0,0,0,446,451,3,36,18,
        0,447,448,5,62,0,0,448,450,3,36,18,0,449,447,1,0,0,0,450,453,1,0,
        0,0,451,449,1,0,0,0,451,452,1,0,0,0,452,45,1,0,0,0,453,451,1,0,0,
        0,454,455,7,11,0,0,455,47,1,0,0,0,456,457,5,104,0,0,457,49,1,0,0,
        0,458,459,5,96,0,0,459,463,3,36,18,0,460,462,3,2,1,0,461,460,1,0,
        0,0,462,465,1,0,0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,51,1,0,0,
        0,465,463,1,0,0,0,466,470,5,95,0,0,467,469,3,2,1,0,468,467,1,0,0,
        0,469,472,1,0,0,0,470,468,1,0,0,0,470,471,1,0,0,0,471,53,1,0,0,0,
        472,470,1,0,0,0,473,474,3,66,33,0,474,475,5,49,0,0,475,476,3,36,
        18,0,476,55,1,0,0,0,477,478,5,22,0,0,478,483,5,89,0,0,479,480,5,
        62,0,0,480,482,5,89,0,0,481,479,1,0,0,0,482,485,1,0,0,0,483,481,
        1,0,0,0,483,484,1,0,0,0,484,488,1,0,0,0,485,483,1,0,0,0,486,487,
        5,59,0,0,487,489,5,89,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,490,
        1,0,0,0,490,491,5,23,0,0,491,57,1,0,0,0,492,494,5,44,0,0,493,492,
        1,0,0,0,493,494,1,0,0,0,494,495,1,0,0,0,495,496,5,89,0,0,496,498,
        5,46,0,0,497,499,5,44,0,0,498,497,1,0,0,0,498,499,1,0,0,0,499,500,
        1,0,0,0,500,501,5,89,0,0,501,59,1,0,0,0,502,503,7,12,0,0,503,61,
        1,0,0,0,504,512,5,63,0,0,505,512,5,64,0,0,506,512,3,58,29,0,507,
        512,3,60,30,0,508,512,5,65,0,0,509,512,5,66,0,0,510,512,5,67,0,0,
        511,504,1,0,0,0,511,505,1,0,0,0,511,506,1,0,0,0,511,507,1,0,0,0,
        511,508,1,0,0,0,511,509,1,0,0,0,511,510,1,0,0,0,512,63,1,0,0,0,513,
        517,5,68,0,0,514,517,5,69,0,0,515,517,5,86,0,0,516,513,1,0,0,0,516,
        514,1,0,0,0,516,515,1,0,0,0,517,65,1,0,0,0,518,522,5,87,0,0,519,
        522,5,85,0,0,520,522,5,103,0,0,521,518,1,0,0,0,521,519,1,0,0,0,521,
        520,1,0,0,0,522,67,1,0,0,0,523,525,5,56,0,0,524,526,3,44,22,0,525,
        524,1,0,0,0,525,526,1,0,0,0,526,527,1,0,0,0,527,528,5,57,0,0,528,
        69,1,0,0,0,529,533,5,54,0,0,530,532,3,2,1,0,531,530,1,0,0,0,532,
        535,1,0,0,0,533,531,1,0,0,0,533,534,1,0,0,0,534,536,1,0,0,0,535,
        533,1,0,0,0,536,539,5,55,0,0,537,539,3,2,1,0,538,529,1,0,0,0,538,
        537,1,0,0,0,539,71,1,0,0,0,55,75,99,106,116,119,122,131,137,141,
        148,150,160,163,176,179,191,196,200,204,212,222,229,247,268,279,
        295,304,308,312,320,323,333,341,344,356,399,408,420,422,427,436,
        444,451,463,470,483,488,493,498,511,516,521,525,533,538
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
    public _name?: DottedAllowedIdContext;
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
    public dottedAllowedId(): DottedAllowedIdContext {
        return this.getRuleContext(0, DottedAllowedIdContext)!;
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
    public _name?: DottedAllowedIdContext;
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
    public dottedAllowedId(): DottedAllowedIdContext {
        return this.getRuleContext(0, DottedAllowedIdContext)!;
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


export class DottedAllowedIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public indeterminate(): IndeterminateContext {
        return this.getRuleContext(0, IndeterminateContext)!;
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
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(asirParser.ID);
    	} else {
    		return this.getToken(asirParser.ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return asirParser.RULE_dottedAllowedId;
    }
    public override enterRule(listener: asirListener): void {
        if(listener.enterDottedAllowedId) {
             listener.enterDottedAllowedId(this);
        }
    }
    public override exitRule(listener: asirListener): void {
        if(listener.exitDottedAllowedId) {
             listener.exitDottedAllowedId(this);
        }
    }
    public override accept<Result>(visitor: asirVisitor<Result>): Result | null {
        if (visitor.visitDottedAllowedId) {
            return visitor.visitDottedAllowedId(this);
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
