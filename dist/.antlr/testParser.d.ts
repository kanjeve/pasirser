import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";
import { testListener } from "./testListener.js";
import { testVisitor } from "./testVisitor.js";
export declare class testParser extends antlr.Parser {
    static readonly LTLT = 1;
    static readonly GTGT = 2;
    static readonly COLON2 = 3;
    static readonly INC = 4;
    static readonly DEC = 5;
    static readonly PLUSEQ = 6;
    static readonly MINUSEQ = 7;
    static readonly MULTEQ = 8;
    static readonly DIVEQ = 9;
    static readonly SUREQ = 10;
    static readonly POWEREQ = 11;
    static readonly ARROW = 12;
    static readonly EQ = 13;
    static readonly NEQ = 14;
    static readonly LE = 15;
    static readonly GE = 16;
    static readonly LT = 17;
    static readonly GT = 18;
    static readonly AND = 19;
    static readonly OR = 20;
    static readonly NOT = 21;
    static readonly PLUS = 22;
    static readonly MINUS = 23;
    static readonly MULT = 24;
    static readonly DIV = 25;
    static readonly SUR = 26;
    static readonly POWER = 27;
    static readonly ASSIGN = 28;
    static readonly BACK = 29;
    static readonly MID = 30;
    static readonly LPAREN = 31;
    static readonly RPAREN = 32;
    static readonly LBRANCE = 33;
    static readonly RBRANCE = 34;
    static readonly LBRACKET = 35;
    static readonly RBRACKET = 36;
    static readonly QUESTION = 37;
    static readonly COLON = 38;
    static readonly SEMI = 39;
    static readonly DOLLAR = 40;
    static readonly COMMA = 41;
    static readonly HEX = 42;
    static readonly BIT = 43;
    static readonly FLOAT = 44;
    static readonly EXP = 45;
    static readonly INT = 46;
    static readonly POINT = 47;
    static readonly IMAGINARY = 48;
    static readonly BEFORE = 49;
    static readonly BEFORE_N = 50;
    static readonly QE_1 = 51;
    static readonly QE_2 = 52;
    static readonly QE_3 = 53;
    static readonly QE_4 = 54;
    static readonly QE_5 = 55;
    static readonly QE_6 = 56;
    static readonly QE_7 = 57;
    static readonly QE_8 = 58;
    static readonly QE_9 = 59;
    static readonly QE_10 = 60;
    static readonly QE_11 = 61;
    static readonly QE_12 = 62;
    static readonly DEF = 63;
    static readonly IF = 64;
    static readonly FOR = 65;
    static readonly WHILE = 66;
    static readonly DO = 67;
    static readonly ELSE = 68;
    static readonly RETURN = 69;
    static readonly CONTINUE = 70;
    static readonly BREAK = 71;
    static readonly STRUCT = 72;
    static readonly MODULE = 73;
    static readonly ENDMODULE = 74;
    static readonly EXTERN = 75;
    static readonly STATIC = 76;
    static readonly GLOBAL = 77;
    static readonly LOCAL = 78;
    static readonly LOCALF = 79;
    static readonly ATFUNC = 80;
    static readonly VAR_2 = 81;
    static readonly ID = 82;
    static readonly NEWLINE = 83;
    static readonly WS = 84;
    static readonly COMMENT = 85;
    static readonly LCOMMENT = 86;
    static readonly PCOMMENT = 87;
    static readonly PIFDEF = 88;
    static readonly PIFNDEF = 89;
    static readonly PIF = 90;
    static readonly PELSE = 91;
    static readonly PELIF = 92;
    static readonly PENDIF = 93;
    static readonly PINCLUDE = 94;
    static readonly PDEFINE = 95;
    static readonly CHARPLUS = 96;
    static readonly CHAR = 97;
    static readonly STRING = 98;
    static readonly NOSTRING = 99;
    static readonly RULE_prog = 0;
    static readonly RULE_statement = 1;
    static readonly RULE_prechar = 2;
    static readonly RULE_preprocessor = 3;
    static readonly RULE_functionDefinition = 4;
    static readonly RULE_functionIf = 5;
    static readonly RULE_functionFor = 6;
    static readonly RULE_functionWhile = 7;
    static readonly RULE_functionDo = 8;
    static readonly RULE_functionReturn = 9;
    static readonly RULE_functionContinue = 10;
    static readonly RULE_functionBreak = 11;
    static readonly RULE_functionStruct = 12;
    static readonly RULE_functionCall = 13;
    static readonly RULE_functionModule = 14;
    static readonly RULE_expr = 15;
    static readonly RULE_assignmentExpr = 16;
    static readonly RULE_ternaryExpr = 17;
    static readonly RULE_quoteExpr = 18;
    static readonly RULE_qeNotExpr = 19;
    static readonly RULE_qeOrExpr = 20;
    static readonly RULE_qeAndExpr = 21;
    static readonly RULE_qeCompareExpr = 22;
    static readonly RULE_orExpr = 23;
    static readonly RULE_andExpr = 24;
    static readonly RULE_compareExpr = 25;
    static readonly RULE_addSubExpr = 26;
    static readonly RULE_mulDivSurExpr = 27;
    static readonly RULE_unaryExpr = 28;
    static readonly RULE_powerExpr = 29;
    static readonly RULE_factExpr = 30;
    static readonly RULE_prefixExpr = 31;
    static readonly RULE_postfixExpr = 32;
    static readonly RULE_indexAccessExpr = 33;
    static readonly RULE_primaryExpr = 34;
    static readonly RULE_dpoly = 35;
    static readonly RULE_rational = 36;
    static readonly RULE_decimal = 37;
    static readonly RULE_num = 38;
    static readonly RULE_id = 39;
    static readonly RULE_indeterminate = 40;
    static readonly RULE_list = 41;
    static readonly RULE_block = 42;
    static readonly RULE_exprlist = 43;
    static readonly RULE_terminator = 44;
    static readonly RULE_systemPath = 45;
    static readonly RULE_optionPair = 46;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException;
    constructor(input: antlr.TokenStream);
    prog(): ProgContext;
    statement(): StatementContext;
    prechar(): PrecharContext;
    preprocessor(): PreprocessorContext;
    functionDefinition(): FunctionDefinitionContext;
    functionIf(): FunctionIfContext;
    functionFor(): FunctionForContext;
    functionWhile(): FunctionWhileContext;
    functionDo(): FunctionDoContext;
    functionReturn(): FunctionReturnContext;
    functionContinue(): FunctionContinueContext;
    functionBreak(): FunctionBreakContext;
    functionStruct(): FunctionStructContext;
    functionCall(): FunctionCallContext;
    functionModule(): FunctionModuleContext;
    expr(): ExprContext;
    assignmentExpr(): AssignmentExprContext;
    ternaryExpr(): TernaryExprContext;
    quoteExpr(): QuoteExprContext;
    qeNotExpr(): QeNotExprContext;
    qeOrExpr(): QeOrExprContext;
    qeAndExpr(): QeAndExprContext;
    qeCompareExpr(): QeCompareExprContext;
    orExpr(): OrExprContext;
    andExpr(): AndExprContext;
    compareExpr(): CompareExprContext;
    addSubExpr(): AddSubExprContext;
    mulDivSurExpr(): MulDivSurExprContext;
    unaryExpr(): UnaryExprContext;
    powerExpr(): PowerExprContext;
    factExpr(): FactExprContext;
    prefixExpr(): PrefixExprContext;
    postfixExpr(): PostfixExprContext;
    indexAccessExpr(): IndexAccessExprContext;
    primaryExpr(): PrimaryExprContext;
    dpoly(): DpolyContext;
    rational(): RationalContext;
    decimal(): DecimalContext;
    num(): NumContext;
    id(): IdContext;
    indeterminate(): IndeterminateContext;
    list(): ListContext;
    block(): BlockContext;
    exprlist(): ExprlistContext;
    terminator(): TerminatorContext;
    systemPath(): SystemPathContext;
    optionPair(): OptionPairContext;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): antlr.ATN;
    private static readonly vocabulary;
    get vocabulary(): antlr.Vocabulary;
    private static readonly decisionsToDFA;
}
export declare class ProgContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EOF(): antlr.TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class StatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StatementContext): void;
}
export declare class DoStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionDo(): FunctionDoContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ModuleStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionModule(): FunctionModuleContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class WhileStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionWhile(): FunctionWhileContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class EmptyLineStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    terminator(): TerminatorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class BreakStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionBreak(): FunctionBreakContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class IfStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionIf(): FunctionIfContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PreproStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    preprocessor(): PreprocessorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class DefinitionStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionDefinition(): FunctionDefinitionContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class StructStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionStruct(): FunctionStructContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ExprStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    expr(): ExprContext;
    terminator(): TerminatorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ReturnStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionReturn(): FunctionReturnContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ForStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionFor(): FunctionForContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ContinueStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    functionContinue(): FunctionContinueContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PrecharContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrecharContext): void;
}
export declare class PreChrContext extends PrecharContext {
    constructor(ctx: PrecharContext);
    CHAR(): antlr.TerminalNode;
    ID(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PreChrPlusContext extends PrecharContext {
    constructor(ctx: PrecharContext);
    ID(): antlr.TerminalNode[];
    ID(i: number): antlr.TerminalNode | null;
    CHARPLUS(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PreprocessorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PreprocessorContext): void;
}
export declare class PDefContext extends PreprocessorContext {
    _name?: Token | null;
    _ID?: Token | null;
    _params: antlr.Token[];
    _body?: ExprContext;
    constructor(ctx: PreprocessorContext);
    PDEFINE(): antlr.TerminalNode;
    ID(): antlr.TerminalNode[];
    ID(i: number): antlr.TerminalNode | null;
    expr(): ExprContext;
    LPAREN(): antlr.TerminalNode | null;
    RPAREN(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PIncContext extends PreprocessorContext {
    _path_sys?: SystemPathContext;
    _path_loc?: Token | null;
    constructor(ctx: PreprocessorContext);
    PINCLUDE(): antlr.TerminalNode;
    systemPath(): SystemPathContext | null;
    STRING(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PIfContext extends PreprocessorContext {
    constructor(ctx: PreprocessorContext);
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    PENDIF(): antlr.TerminalNode;
    PIF(): antlr.TerminalNode | null;
    PIFDEF(): antlr.TerminalNode | null;
    PIFNDEF(): antlr.TerminalNode | null;
    statement(): StatementContext[];
    statement(i: number): StatementContext | null;
    PELIF(): antlr.TerminalNode[];
    PELIF(i: number): antlr.TerminalNode | null;
    PELSE(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionDefinitionContext): void;
}
export declare class DefContext extends FunctionDefinitionContext {
    _name?: IndeterminateContext;
    _ID?: Token | null;
    _params: antlr.Token[];
    _body?: BlockContext;
    constructor(ctx: FunctionDefinitionContext);
    DEF(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    indeterminate(): IndeterminateContext;
    block(): BlockContext;
    ID(): antlr.TerminalNode[];
    ID(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionIfContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionIfContext): void;
}
export declare class IfContext extends FunctionIfContext {
    _condition?: ExprContext;
    _thenBlock?: BlockContext;
    _elseBlock?: BlockContext;
    constructor(ctx: FunctionIfContext);
    IF(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    expr(): ExprContext;
    block(): BlockContext[];
    block(i: number): BlockContext | null;
    ELSE(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionForContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionForContext): void;
}
export declare class ForContext extends FunctionForContext {
    _init?: ExprlistContext;
    _cond?: ExprlistContext;
    _update?: ExprlistContext;
    constructor(ctx: FunctionForContext);
    FOR(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    SEMI(): antlr.TerminalNode[];
    SEMI(i: number): antlr.TerminalNode | null;
    RPAREN(): antlr.TerminalNode;
    block(): BlockContext;
    exprlist(): ExprlistContext[];
    exprlist(i: number): ExprlistContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionWhileContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionWhileContext): void;
}
export declare class WhileContext extends FunctionWhileContext {
    constructor(ctx: FunctionWhileContext);
    WHILE(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    block(): BlockContext;
    exprlist(): ExprlistContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionDoContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionDoContext): void;
}
export declare class DoContext extends FunctionDoContext {
    constructor(ctx: FunctionDoContext);
    DO(): antlr.TerminalNode;
    block(): BlockContext;
    WHILE(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    SEMI(): antlr.TerminalNode;
    exprlist(): ExprlistContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionReturnContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionReturnContext): void;
}
export declare class ReturnContext extends FunctionReturnContext {
    constructor(ctx: FunctionReturnContext);
    RETURN(): antlr.TerminalNode;
    terminator(): TerminatorContext;
    expr(): ExprContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionContinueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionContinueContext): void;
}
export declare class ContinueContext extends FunctionContinueContext {
    constructor(ctx: FunctionContinueContext);
    CONTINUE(): antlr.TerminalNode;
    terminator(): TerminatorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionBreakContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionBreakContext): void;
}
export declare class BreakContext extends FunctionBreakContext {
    constructor(ctx: FunctionBreakContext);
    BREAK(): antlr.TerminalNode;
    terminator(): TerminatorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionStructContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionStructContext): void;
}
export declare class StructContext extends FunctionStructContext {
    _name?: IndeterminateContext;
    _indeterminate?: IndeterminateContext;
    _members: IndeterminateContext[];
    constructor(ctx: FunctionStructContext);
    STRUCT(): antlr.TerminalNode;
    LBRANCE(): antlr.TerminalNode;
    RBRANCE(): antlr.TerminalNode;
    terminator(): TerminatorContext;
    indeterminate(): IndeterminateContext[];
    indeterminate(i: number): IndeterminateContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionCallContext): void;
}
export declare class FcallContext extends FunctionCallContext {
    _is_global?: Token | null;
    _name?: IndeterminateContext;
    _args?: ExprlistContext;
    _optionPair?: OptionPairContext;
    _options: OptionPairContext[];
    constructor(ctx: FunctionCallContext);
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    indeterminate(): IndeterminateContext;
    MID(): antlr.TerminalNode | null;
    COLON2(): antlr.TerminalNode | null;
    exprlist(): ExprlistContext | null;
    optionPair(): OptionPairContext[];
    optionPair(i: number): OptionPairContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionModuleContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionModuleContext): void;
}
export declare class ModuleEndContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    ENDMODULE(): antlr.TerminalNode;
    terminator(): TerminatorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ModuleAssignContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    indeterminate(): IndeterminateContext[];
    indeterminate(i: number): IndeterminateContext | null;
    terminator(): TerminatorContext;
    EXTERN(): antlr.TerminalNode | null;
    STATIC(): antlr.TerminalNode | null;
    GLOBAL(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    LOCALF(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ModuleStartContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    MODULE(): antlr.TerminalNode;
    indeterminate(): IndeterminateContext;
    terminator(): TerminatorContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExprContext): void;
}
export declare class MainContext extends ExprContext {
    constructor(ctx: ExprContext);
    assignmentExpr(): AssignmentExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class AssignmentExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AssignmentExprContext): void;
}
export declare class ListAssignContext extends AssignmentExprContext {
    constructor(ctx: AssignmentExprContext);
    LBRACKET(): antlr.TerminalNode;
    ID(): antlr.TerminalNode[];
    ID(i: number): antlr.TerminalNode | null;
    RBRACKET(): antlr.TerminalNode;
    assignmentExpr(): AssignmentExprContext;
    PLUSEQ(): antlr.TerminalNode | null;
    MINUSEQ(): antlr.TerminalNode | null;
    MULTEQ(): antlr.TerminalNode | null;
    DIVEQ(): antlr.TerminalNode | null;
    SUREQ(): antlr.TerminalNode | null;
    POWEREQ(): antlr.TerminalNode | null;
    ASSIGN(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class StructAssignContext extends AssignmentExprContext {
    constructor(ctx: AssignmentExprContext);
    ID(): antlr.TerminalNode;
    assignmentExpr(): AssignmentExprContext;
    PLUSEQ(): antlr.TerminalNode | null;
    MINUSEQ(): antlr.TerminalNode | null;
    MULTEQ(): antlr.TerminalNode | null;
    DIVEQ(): antlr.TerminalNode | null;
    SUREQ(): antlr.TerminalNode | null;
    POWEREQ(): antlr.TerminalNode | null;
    ASSIGN(): antlr.TerminalNode | null;
    ARROW(): antlr.TerminalNode[];
    ARROW(i: number): antlr.TerminalNode | null;
    indeterminate(): IndeterminateContext[];
    indeterminate(i: number): IndeterminateContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class NoAssignmentContext extends AssignmentExprContext {
    constructor(ctx: AssignmentExprContext);
    ternaryExpr(): TernaryExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class AssignContext extends AssignmentExprContext {
    _left?: Token | null;
    _expr?: ExprContext;
    _indices: ExprContext[];
    _op?: Token | null;
    _right?: AssignmentExprContext;
    constructor(ctx: AssignmentExprContext);
    ID(): antlr.TerminalNode;
    assignmentExpr(): AssignmentExprContext;
    PLUSEQ(): antlr.TerminalNode | null;
    MINUSEQ(): antlr.TerminalNode | null;
    MULTEQ(): antlr.TerminalNode | null;
    DIVEQ(): antlr.TerminalNode | null;
    SUREQ(): antlr.TerminalNode | null;
    POWEREQ(): antlr.TerminalNode | null;
    ASSIGN(): antlr.TerminalNode | null;
    LBRACKET(): antlr.TerminalNode[];
    LBRACKET(i: number): antlr.TerminalNode | null;
    RBRACKET(): antlr.TerminalNode[];
    RBRACKET(i: number): antlr.TerminalNode | null;
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class TernaryExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TernaryExprContext): void;
}
export declare class TernaryContext extends TernaryExprContext {
    _condition?: QuoteExprContext;
    _consequence?: ExprContext;
    _alternative?: ExprContext;
    constructor(ctx: TernaryExprContext);
    quoteExpr(): QuoteExprContext;
    QUESTION(): antlr.TerminalNode | null;
    COLON(): antlr.TerminalNode | null;
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class QuoteExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: QuoteExprContext): void;
}
export declare class QuoteContext extends QuoteExprContext {
    constructor(ctx: QuoteExprContext);
    qeNotExpr(): QeNotExprContext;
    BACK(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class QeNotExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: QeNotExprContext): void;
}
export declare class QEnotContext extends QeNotExprContext {
    constructor(ctx: QeNotExprContext);
    qeOrExpr(): QeOrExprContext[];
    qeOrExpr(i: number): QeOrExprContext | null;
    QE_8(): antlr.TerminalNode[];
    QE_8(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class QeOrExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: QeOrExprContext): void;
}
export declare class QEorContext extends QeOrExprContext {
    constructor(ctx: QeOrExprContext);
    qeAndExpr(): QeAndExprContext[];
    qeAndExpr(i: number): QeAndExprContext | null;
    QE_11(): antlr.TerminalNode[];
    QE_11(i: number): antlr.TerminalNode | null;
    QE_12(): antlr.TerminalNode[];
    QE_12(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class QeAndExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: QeAndExprContext): void;
}
export declare class QEandContext extends QeAndExprContext {
    constructor(ctx: QeAndExprContext);
    qeCompareExpr(): QeCompareExprContext[];
    qeCompareExpr(i: number): QeCompareExprContext | null;
    QE_9(): antlr.TerminalNode[];
    QE_9(i: number): antlr.TerminalNode | null;
    QE_10(): antlr.TerminalNode[];
    QE_10(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class QeCompareExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: QeCompareExprContext): void;
}
export declare class QECompareContext extends QeCompareExprContext {
    constructor(ctx: QeCompareExprContext);
    orExpr(): OrExprContext[];
    orExpr(i: number): OrExprContext | null;
    QE_1(): antlr.TerminalNode[];
    QE_1(i: number): antlr.TerminalNode | null;
    QE_2(): antlr.TerminalNode[];
    QE_2(i: number): antlr.TerminalNode | null;
    QE_3(): antlr.TerminalNode[];
    QE_3(i: number): antlr.TerminalNode | null;
    QE_4(): antlr.TerminalNode[];
    QE_4(i: number): antlr.TerminalNode | null;
    QE_5(): antlr.TerminalNode[];
    QE_5(i: number): antlr.TerminalNode | null;
    QE_6(): antlr.TerminalNode[];
    QE_6(i: number): antlr.TerminalNode | null;
    QE_7(): antlr.TerminalNode[];
    QE_7(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class OrExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: OrExprContext): void;
}
export declare class OrContext extends OrExprContext {
    constructor(ctx: OrExprContext);
    andExpr(): AndExprContext[];
    andExpr(i: number): AndExprContext | null;
    OR(): antlr.TerminalNode[];
    OR(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class AndExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AndExprContext): void;
}
export declare class AndContext extends AndExprContext {
    constructor(ctx: AndExprContext);
    compareExpr(): CompareExprContext[];
    compareExpr(i: number): CompareExprContext | null;
    AND(): antlr.TerminalNode[];
    AND(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class CompareExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CompareExprContext): void;
}
export declare class CompareContext extends CompareExprContext {
    constructor(ctx: CompareExprContext);
    addSubExpr(): AddSubExprContext[];
    addSubExpr(i: number): AddSubExprContext | null;
    EQ(): antlr.TerminalNode[];
    EQ(i: number): antlr.TerminalNode | null;
    NEQ(): antlr.TerminalNode[];
    NEQ(i: number): antlr.TerminalNode | null;
    LT(): antlr.TerminalNode[];
    LT(i: number): antlr.TerminalNode | null;
    GT(): antlr.TerminalNode[];
    GT(i: number): antlr.TerminalNode | null;
    LE(): antlr.TerminalNode[];
    LE(i: number): antlr.TerminalNode | null;
    GE(): antlr.TerminalNode[];
    GE(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class AddSubExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AddSubExprContext): void;
}
export declare class AddSubContext extends AddSubExprContext {
    constructor(ctx: AddSubExprContext);
    mulDivSurExpr(): MulDivSurExprContext[];
    mulDivSurExpr(i: number): MulDivSurExprContext | null;
    PLUS(): antlr.TerminalNode[];
    PLUS(i: number): antlr.TerminalNode | null;
    MINUS(): antlr.TerminalNode[];
    MINUS(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class MulDivSurExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: MulDivSurExprContext): void;
}
export declare class MulDivSurContext extends MulDivSurExprContext {
    constructor(ctx: MulDivSurExprContext);
    unaryExpr(): UnaryExprContext[];
    unaryExpr(i: number): UnaryExprContext | null;
    MULT(): antlr.TerminalNode[];
    MULT(i: number): antlr.TerminalNode | null;
    DIV(): antlr.TerminalNode[];
    DIV(i: number): antlr.TerminalNode | null;
    SUR(): antlr.TerminalNode[];
    SUR(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class UnaryExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: UnaryExprContext): void;
}
export declare class PowExprContext extends UnaryExprContext {
    constructor(ctx: UnaryExprContext);
    powerExpr(): PowerExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class UnaryMinusContext extends UnaryExprContext {
    constructor(ctx: UnaryExprContext);
    MINUS(): antlr.TerminalNode;
    unaryExpr(): UnaryExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class NotExprContext extends UnaryExprContext {
    constructor(ctx: UnaryExprContext);
    NOT(): antlr.TerminalNode;
    unaryExpr(): UnaryExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PowerExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PowerExprContext): void;
}
export declare class PowExContext extends PowerExprContext {
    _base?: FactExprContext;
    _exponent?: UnaryExprContext;
    constructor(ctx: PowerExprContext);
    factExpr(): FactExprContext;
    POWER(): antlr.TerminalNode | null;
    unaryExpr(): UnaryExprContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FactExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FactExprContext): void;
}
export declare class FactrialExprContext extends FactExprContext {
    constructor(ctx: FactExprContext);
    postfixExpr(): PostfixExprContext | null;
    prefixExpr(): PrefixExprContext | null;
    indexAccessExpr(): IndexAccessExprContext | null;
    NOT(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PrefixExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrefixExprContext): void;
}
export declare class PreFixContext extends PrefixExprContext {
    constructor(ctx: PrefixExprContext);
    indexAccessExpr(): IndexAccessExprContext;
    INC(): antlr.TerminalNode | null;
    DEC(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PostfixExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PostfixExprContext): void;
}
export declare class PostFixContext extends PostfixExprContext {
    constructor(ctx: PostfixExprContext);
    indexAccessExpr(): IndexAccessExprContext;
    INC(): antlr.TerminalNode | null;
    DEC(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class IndexAccessExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IndexAccessExprContext): void;
}
export declare class IndexAccessContext extends IndexAccessExprContext {
    constructor(ctx: IndexAccessExprContext);
    primaryExpr(): PrimaryExprContext;
    LBRACKET(): antlr.TerminalNode[];
    LBRACKET(i: number): antlr.TerminalNode | null;
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    RBRACKET(): antlr.TerminalNode[];
    RBRACKET(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PrimaryExprContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrimaryExprContext): void;
}
export declare class ListLiteralContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    list(): ListContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class IdExprContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    id(): IdContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    STRING(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class RealContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    num(): NumContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FCallExprContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    functionCall(): FunctionCallContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class IndExprContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    indeterminate(): IndeterminateContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class DpLiteralContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    dpoly(): DpolyContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PreChrExprContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    prechar(): PrecharContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ParenContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    LPAREN(): antlr.TerminalNode;
    expr(): ExprContext;
    RPAREN(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class DpolyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DpolyContext): void;
}
export declare class DpContext extends DpolyContext {
    constructor(ctx: DpolyContext);
    LTLT(): antlr.TerminalNode;
    INT(): antlr.TerminalNode[];
    INT(i: number): antlr.TerminalNode | null;
    GTGT(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    COLON(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class RationalContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RationalContext): void;
}
export declare class RatContext extends RationalContext {
    constructor(ctx: RationalContext);
    INT(): antlr.TerminalNode[];
    INT(i: number): antlr.TerminalNode | null;
    DIV(): antlr.TerminalNode;
    MINUS(): antlr.TerminalNode[];
    MINUS(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class DecimalContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DecimalContext): void;
}
export declare class FloatContext extends DecimalContext {
    constructor(ctx: DecimalContext);
    FLOAT(): antlr.TerminalNode | null;
    INT(): antlr.TerminalNode | null;
    MINUS(): antlr.TerminalNode | null;
    EXP(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class NumContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: NumContext): void;
}
export declare class DecNumContext extends NumContext {
    constructor(ctx: NumContext);
    decimal(): DecimalContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class BitNumContext extends NumContext {
    constructor(ctx: NumContext);
    BIT(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ImaNumContext extends NumContext {
    constructor(ctx: NumContext);
    IMAGINARY(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class HexNumContext extends NumContext {
    constructor(ctx: NumContext);
    HEX(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class RatNumContext extends NumContext {
    constructor(ctx: NumContext);
    rational(): RationalContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class IdContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IdContext): void;
}
export declare class V2IdContext extends IdContext {
    constructor(ctx: IdContext);
    VAR_2(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class BefContext extends IdContext {
    constructor(ctx: IdContext);
    BEFORE(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class BefNContext extends IdContext {
    constructor(ctx: IdContext);
    BEFORE_N(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class IndeterminateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IndeterminateContext): void;
}
export declare class FuncContext extends IndeterminateContext {
    constructor(ctx: IndeterminateContext);
    ID(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ChFuncContext extends IndeterminateContext {
    constructor(ctx: IndeterminateContext);
    NOSTRING(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class AtFuncContext extends IndeterminateContext {
    constructor(ctx: IndeterminateContext);
    ATFUNC(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ListContext): void;
}
export declare class ListExprContext extends ListContext {
    constructor(ctx: ListContext);
    LBRACKET(): antlr.TerminalNode;
    RBRACKET(): antlr.TerminalNode;
    exprlist(): ExprlistContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class BlockContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: BlockContext): void;
}
export declare class Sentence1Context extends BlockContext {
    constructor(ctx: BlockContext);
    statement(): StatementContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class SentenceContext extends BlockContext {
    constructor(ctx: BlockContext);
    LBRANCE(): antlr.TerminalNode;
    RBRANCE(): antlr.TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ExprlistContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class TerminatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class SystemPathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LT(): antlr.TerminalNode;
    ID(): antlr.TerminalNode;
    GT(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class OptionPairContext extends antlr.ParserRuleContext {
    _key?: IndeterminateContext;
    _value?: ExprContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ASSIGN(): antlr.TerminalNode;
    indeterminate(): IndeterminateContext;
    expr(): ExprContext;
    get ruleIndex(): number;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
