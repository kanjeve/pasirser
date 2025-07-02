import * as antlr from "antlr4ng";
import { testListener } from "./testListener.js";
import { testVisitor } from "./testVisitor.js";
export declare class testParser extends antlr.Parser {
    static readonly COLON2 = 1;
    static readonly INC = 2;
    static readonly DEC = 3;
    static readonly PLUSEQ = 4;
    static readonly MINUSEQ = 5;
    static readonly MULTEQ = 6;
    static readonly DIVEQ = 7;
    static readonly SUREQ = 8;
    static readonly POWEREQ = 9;
    static readonly ARROW = 10;
    static readonly EQ = 11;
    static readonly NEQ = 12;
    static readonly LE = 13;
    static readonly GE = 14;
    static readonly LT = 15;
    static readonly GT = 16;
    static readonly AND = 17;
    static readonly OR = 18;
    static readonly NOT = 19;
    static readonly PLUS = 20;
    static readonly MINUS = 21;
    static readonly MULT = 22;
    static readonly DIV = 23;
    static readonly SUR = 24;
    static readonly POWER = 25;
    static readonly ASSIGN = 26;
    static readonly LPAREN = 27;
    static readonly RPAREN = 28;
    static readonly LBRANCE = 29;
    static readonly RBRANCE = 30;
    static readonly LBRACKET = 31;
    static readonly RBRACKET = 32;
    static readonly QUESTION = 33;
    static readonly COLON = 34;
    static readonly SEMI = 35;
    static readonly DOLLAR = 36;
    static readonly COMMA = 37;
    static readonly FLOAT = 38;
    static readonly INT = 39;
    static readonly EXP = 40;
    static readonly POINT = 41;
    static readonly IMAGINARY = 42;
    static readonly PI = 43;
    static readonly NAPIER = 44;
    static readonly BEFORE = 45;
    static readonly BEFORE_N = 46;
    static readonly QE_1 = 47;
    static readonly QE_2 = 48;
    static readonly QE_3 = 49;
    static readonly QE_4 = 50;
    static readonly QE_5 = 51;
    static readonly QE_6 = 52;
    static readonly QE_7 = 53;
    static readonly DEF = 54;
    static readonly IF = 55;
    static readonly FOR = 56;
    static readonly WHILE = 57;
    static readonly DO = 58;
    static readonly ELSE = 59;
    static readonly RETURN = 60;
    static readonly CONTINUE = 61;
    static readonly BREAK = 62;
    static readonly STRUCT = 63;
    static readonly MODULE = 64;
    static readonly ENDMODULE = 65;
    static readonly EXTERN = 66;
    static readonly STATIC = 67;
    static readonly GLOBAL = 68;
    static readonly LOCAL = 69;
    static readonly LOCALF = 70;
    static readonly VAR_2 = 71;
    static readonly FUNC_ID = 72;
    static readonly VAR_ID = 73;
    static readonly NEWLINE = 74;
    static readonly WS = 75;
    static readonly COMMENT = 76;
    static readonly STRING2 = 77;
    static readonly STRING1 = 78;
    static readonly RULE_prog = 0;
    static readonly RULE_statement = 1;
    static readonly RULE_functionDefinition = 2;
    static readonly RULE_functionIf = 3;
    static readonly RULE_forInitializer = 4;
    static readonly RULE_forCondition = 5;
    static readonly RULE_forUpdate = 6;
    static readonly RULE_functionFor = 7;
    static readonly RULE_functionWhile = 8;
    static readonly RULE_functionDo = 9;
    static readonly RULE_functionReturn = 10;
    static readonly RULE_functionContinue = 11;
    static readonly RULE_functionBreak = 12;
    static readonly RULE_functionStruct = 13;
    static readonly RULE_functionCall = 14;
    static readonly RULE_functionModule = 15;
    static readonly RULE_expr = 16;
    static readonly RULE_ternaryExpr = 17;
    static readonly RULE_qeOrExpr = 18;
    static readonly RULE_qeAndExpr = 19;
    static readonly RULE_qeCompareExpr = 20;
    static readonly RULE_orExpr = 21;
    static readonly RULE_andExpr = 22;
    static readonly RULE_compareExpr = 23;
    static readonly RULE_addSubExpr = 24;
    static readonly RULE_mulDivSurExpr = 25;
    static readonly RULE_unaryExpr = 26;
    static readonly RULE_powerExpr = 27;
    static readonly RULE_indexAccessExpr = 28;
    static readonly RULE_primaryExpr = 29;
    static readonly RULE_rational = 30;
    static readonly RULE_decimal = 31;
    static readonly RULE_num = 32;
    static readonly RULE_id = 33;
    static readonly RULE_specialnum = 34;
    static readonly RULE_list = 35;
    static readonly RULE_block = 36;
    static readonly RULE_assignment = 37;
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
    functionDefinition(): FunctionDefinitionContext;
    functionIf(): FunctionIfContext;
    forInitializer(): ForInitializerContext;
    forCondition(): ForConditionContext;
    forUpdate(): ForUpdateContext;
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
    ternaryExpr(): TernaryExprContext;
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
    indexAccessExpr(): IndexAccessExprContext;
    primaryExpr(): PrimaryExprContext;
    rational(): RationalContext;
    decimal(): DecimalContext;
    num(): NumContext;
    id(): IdContext;
    specialnum(): SpecialnumContext;
    list(): ListContext;
    block(): BlockContext;
    assignment(): AssignmentContext;
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
export declare class AssignStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    assignment(): AssignmentContext;
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class EmptyLineStatementContext extends StatementContext {
    constructor(ctx: StatementContext);
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
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
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
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
export declare class FunctionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionDefinitionContext): void;
}
export declare class DefContext extends FunctionDefinitionContext {
    constructor(ctx: FunctionDefinitionContext);
    DEF(): antlr.TerminalNode;
    FUNC_ID(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    block(): BlockContext;
    VAR_ID(): antlr.TerminalNode[];
    VAR_ID(i: number): antlr.TerminalNode | null;
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
    constructor(ctx: FunctionIfContext);
    IF(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    expr(): ExprContext;
    RPAREN(): antlr.TerminalNode;
    block(): BlockContext[];
    block(i: number): BlockContext | null;
    ELSE(): antlr.TerminalNode | null;
    functionIf(): FunctionIfContext | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ForInitializerContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ForInitializerContext): void;
}
export declare class ForiniContext extends ForInitializerContext {
    constructor(ctx: ForInitializerContext);
    VAR_ID(): antlr.TerminalNode;
    ASSIGN(): antlr.TerminalNode;
    expr(): ExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ForConditionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ForConditionContext): void;
}
export declare class ForconContext extends ForConditionContext {
    constructor(ctx: ForConditionContext);
    expr(): ExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ForUpdateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ForUpdateContext): void;
}
export declare class Forup5Context extends ForUpdateContext {
    constructor(ctx: ForUpdateContext);
    DEC(): antlr.TerminalNode;
    VAR_ID(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class Forup4Context extends ForUpdateContext {
    constructor(ctx: ForUpdateContext);
    INC(): antlr.TerminalNode;
    VAR_ID(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class Forup1Context extends ForUpdateContext {
    constructor(ctx: ForUpdateContext);
    VAR_ID(): antlr.TerminalNode;
    ASSIGN(): antlr.TerminalNode;
    expr(): ExprContext;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class Forup3Context extends ForUpdateContext {
    constructor(ctx: ForUpdateContext);
    VAR_ID(): antlr.TerminalNode;
    DEC(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class Forup2Context extends ForUpdateContext {
    constructor(ctx: ForUpdateContext);
    VAR_ID(): antlr.TerminalNode;
    INC(): antlr.TerminalNode;
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
    constructor(ctx: FunctionForContext);
    FOR(): antlr.TerminalNode;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    block(): BlockContext;
    SEMI(): antlr.TerminalNode[];
    SEMI(i: number): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode[];
    DOLLAR(i: number): antlr.TerminalNode | null;
    forInitializer(): ForInitializerContext[];
    forInitializer(i: number): ForInitializerContext | null;
    forCondition(): ForConditionContext[];
    forCondition(i: number): ForConditionContext | null;
    forUpdate(): ForUpdateContext[];
    forUpdate(i: number): ForUpdateContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
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
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
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
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
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
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
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
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
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
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FunctionStructContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionStructContext): void;
}
export declare class StrctContext extends FunctionStructContext {
    constructor(ctx: FunctionStructContext);
    STRUCT(): antlr.TerminalNode;
    LBRANCE(): antlr.TerminalNode;
    RBRANCE(): antlr.TerminalNode;
    FUNC_ID(): antlr.TerminalNode[];
    FUNC_ID(i: number): antlr.TerminalNode | null;
    VAR_ID(): antlr.TerminalNode[];
    VAR_ID(i: number): antlr.TerminalNode | null;
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
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
    constructor(ctx: FunctionCallContext);
    FUNC_ID(): antlr.TerminalNode[];
    FUNC_ID(i: number): antlr.TerminalNode | null;
    LPAREN(): antlr.TerminalNode;
    RPAREN(): antlr.TerminalNode;
    COLON2(): antlr.TerminalNode | null;
    POINT(): antlr.TerminalNode | null;
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
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
export declare class ModuleFunctionContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    LOCALF(): antlr.TerminalNode;
    FUNC_ID(): antlr.TerminalNode[];
    FUNC_ID(i: number): antlr.TerminalNode | null;
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ModuleEndContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    ENDMODULE(): antlr.TerminalNode;
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ModuleAssignContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    VAR_ID(): antlr.TerminalNode[];
    VAR_ID(i: number): antlr.TerminalNode | null;
    EXTERN(): antlr.TerminalNode | null;
    STATIC(): antlr.TerminalNode | null;
    GLOBAL(): antlr.TerminalNode | null;
    LOCAL(): antlr.TerminalNode | null;
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ModuleStartContext extends FunctionModuleContext {
    constructor(ctx: FunctionModuleContext);
    MODULE(): antlr.TerminalNode;
    FUNC_ID(): antlr.TerminalNode;
    SEMI(): antlr.TerminalNode | null;
    DOLLAR(): antlr.TerminalNode | null;
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
    ternaryExpr(): TernaryExprContext;
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
    constructor(ctx: TernaryExprContext);
    qeOrExpr(): QeOrExprContext;
    QUESTION(): antlr.TerminalNode | null;
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    COLON(): antlr.TerminalNode | null;
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
    QE_7(): antlr.TerminalNode[];
    QE_7(i: number): antlr.TerminalNode | null;
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
    QE_6(): antlr.TerminalNode[];
    QE_6(i: number): antlr.TerminalNode | null;
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
export declare class PowerExprRuleContext extends UnaryExprContext {
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
export declare class PowerContext extends PowerExprContext {
    constructor(ctx: PowerExprContext);
    indexAccessExpr(): IndexAccessExprContext;
    POWER(): antlr.TerminalNode | null;
    powerExpr(): PowerExprContext | null;
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
    STRING2(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class CharLiteralContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    STRING1(): antlr.TerminalNode;
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
export declare class SpecNumContext extends PrimaryExprContext {
    constructor(ctx: PrimaryExprContext);
    specialnum(): SpecialnumContext;
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
export declare class VIdContext extends IdContext {
    constructor(ctx: IdContext);
    VAR_ID(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class FIdContext extends IdContext {
    constructor(ctx: IdContext);
    FUNC_ID(): antlr.TerminalNode[];
    FUNC_ID(i: number): antlr.TerminalNode | null;
    POINT(): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class V2IdContext extends IdContext {
    constructor(ctx: IdContext);
    VAR_2(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class SpecialnumContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SpecialnumContext): void;
}
export declare class BefContext extends SpecialnumContext {
    constructor(ctx: SpecialnumContext);
    BEFORE(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class BefNContext extends SpecialnumContext {
    constructor(ctx: SpecialnumContext);
    BEFORE_N(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class PiContext extends SpecialnumContext {
    constructor(ctx: SpecialnumContext);
    PI(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class ImaContext extends SpecialnumContext {
    constructor(ctx: SpecialnumContext);
    IMAGINARY(): antlr.TerminalNode;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class NapContext extends SpecialnumContext {
    constructor(ctx: SpecialnumContext);
    NAPIER(): antlr.TerminalNode;
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
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
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
export declare class AssignmentContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AssignmentContext): void;
}
export declare class ListAssignContext extends AssignmentContext {
    constructor(ctx: AssignmentContext);
    LBRACKET(): antlr.TerminalNode;
    VAR_ID(): antlr.TerminalNode[];
    VAR_ID(i: number): antlr.TerminalNode | null;
    RBRACKET(): antlr.TerminalNode;
    expr(): ExprContext;
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
export declare class StructAssignContext extends AssignmentContext {
    constructor(ctx: AssignmentContext);
    VAR_ID(): antlr.TerminalNode[];
    VAR_ID(i: number): antlr.TerminalNode | null;
    ASSIGN(): antlr.TerminalNode;
    expr(): ExprContext;
    ARROW(): antlr.TerminalNode[];
    ARROW(i: number): antlr.TerminalNode | null;
    FUNC_ID(): antlr.TerminalNode[];
    FUNC_ID(i: number): antlr.TerminalNode | null;
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
export declare class AssignContext extends AssignmentContext {
    constructor(ctx: AssignmentContext);
    VAR_ID(): antlr.TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext | null;
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
    enterRule(listener: testListener): void;
    exitRule(listener: testListener): void;
    accept<Result>(visitor: testVisitor<Result>): Result | null;
}
