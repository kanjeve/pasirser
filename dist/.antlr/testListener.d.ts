import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";
import { ProgContext } from "./testParser.js";
import { ExprStatementContext } from "./testParser.js";
import { EmptyLineStatementContext } from "./testParser.js";
import { DefinitionStatementContext } from "./testParser.js";
import { IfStatementContext } from "./testParser.js";
import { ForStatementContext } from "./testParser.js";
import { WhileStatementContext } from "./testParser.js";
import { DoStatementContext } from "./testParser.js";
import { ReturnStatementContext } from "./testParser.js";
import { BreakStatementContext } from "./testParser.js";
import { ContinueStatementContext } from "./testParser.js";
import { StructStatementContext } from "./testParser.js";
import { ModuleStatementContext } from "./testParser.js";
import { PreproStatementContext } from "./testParser.js";
import { PreChrContext } from "./testParser.js";
import { PreChrPlusContext } from "./testParser.js";
import { PDefContext } from "./testParser.js";
import { PIfContext } from "./testParser.js";
import { PIncContext } from "./testParser.js";
import { DefContext } from "./testParser.js";
import { IfContext } from "./testParser.js";
import { ForContext } from "./testParser.js";
import { WhileContext } from "./testParser.js";
import { DoContext } from "./testParser.js";
import { ReturnContext } from "./testParser.js";
import { ContinueContext } from "./testParser.js";
import { BreakContext } from "./testParser.js";
import { StructContext } from "./testParser.js";
import { FcallContext } from "./testParser.js";
import { ModuleAssignContext } from "./testParser.js";
import { ModuleFunctionContext } from "./testParser.js";
import { ModuleStartContext } from "./testParser.js";
import { ModuleEndContext } from "./testParser.js";
import { MainContext } from "./testParser.js";
import { NoAssignmentContext } from "./testParser.js";
import { AssignContext } from "./testParser.js";
import { StructAssignContext } from "./testParser.js";
import { ListAssignContext } from "./testParser.js";
import { TernaryContext } from "./testParser.js";
import { QuoteContext } from "./testParser.js";
import { QEnotContext } from "./testParser.js";
import { QEorContext } from "./testParser.js";
import { QEandContext } from "./testParser.js";
import { QECompareContext } from "./testParser.js";
import { OrContext } from "./testParser.js";
import { AndContext } from "./testParser.js";
import { CompareContext } from "./testParser.js";
import { AddSubContext } from "./testParser.js";
import { MulDivSurContext } from "./testParser.js";
import { UnaryMinusContext } from "./testParser.js";
import { NotExprContext } from "./testParser.js";
import { PowExprContext } from "./testParser.js";
import { PowExContext } from "./testParser.js";
import { FactrialExprContext } from "./testParser.js";
import { PreFixContext } from "./testParser.js";
import { PostFixContext } from "./testParser.js";
import { IndexAccessContext } from "./testParser.js";
import { IndExprContext } from "./testParser.js";
import { RealContext } from "./testParser.js";
import { IdExprContext } from "./testParser.js";
import { FCallExprContext } from "./testParser.js";
import { ParenContext } from "./testParser.js";
import { StringLiteralContext } from "./testParser.js";
import { ListLiteralContext } from "./testParser.js";
import { DpLiteralContext } from "./testParser.js";
import { PreChrExprContext } from "./testParser.js";
import { DpContext } from "./testParser.js";
import { RatContext } from "./testParser.js";
import { FloatContext } from "./testParser.js";
import { HexNumContext } from "./testParser.js";
import { BitNumContext } from "./testParser.js";
import { RatNumContext } from "./testParser.js";
import { DecNumContext } from "./testParser.js";
import { ImaNumContext } from "./testParser.js";
import { VIdContext } from "./testParser.js";
import { BefContext } from "./testParser.js";
import { BefNContext } from "./testParser.js";
import { V2IdContext } from "./testParser.js";
import { FuncContext } from "./testParser.js";
import { AtFuncContext } from "./testParser.js";
import { ChFuncContext } from "./testParser.js";
import { ListExprContext } from "./testParser.js";
import { SentenceContext } from "./testParser.js";
import { Sentence1Context } from "./testParser.js";
import { ExprlistContext } from "./testParser.js";
import { TerminatorContext } from "./testParser.js";
import { MemberNameContext } from "./testParser.js";
import { SystemPathContext } from "./testParser.js";
import { OptionPairContext } from "./testParser.js";
import { QualifiedIdentifierContext } from "./testParser.js";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `testParser`.
 */
export declare class testListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `testParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `testParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by the `ExprStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterExprStatement?: (ctx: ExprStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ExprStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitExprStatement?: (ctx: ExprStatementContext) => void;
    /**
     * Enter a parse tree produced by the `EmptyLineStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterEmptyLineStatement?: (ctx: EmptyLineStatementContext) => void;
    /**
     * Exit a parse tree produced by the `EmptyLineStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitEmptyLineStatement?: (ctx: EmptyLineStatementContext) => void;
    /**
     * Enter a parse tree produced by the `DefinitionStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterDefinitionStatement?: (ctx: DefinitionStatementContext) => void;
    /**
     * Exit a parse tree produced by the `DefinitionStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitDefinitionStatement?: (ctx: DefinitionStatementContext) => void;
    /**
     * Enter a parse tree produced by the `IfStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by the `IfStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ForStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ForStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Enter a parse tree produced by the `WhileStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by the `WhileStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by the `DoStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Exit a parse tree produced by the `DoStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ReturnStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ReturnStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by the `BreakStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Exit a parse tree produced by the `BreakStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ContinueStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ContinueStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Enter a parse tree produced by the `StructStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterStructStatement?: (ctx: StructStatementContext) => void;
    /**
     * Exit a parse tree produced by the `StructStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitStructStatement?: (ctx: StructStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterModuleStatement?: (ctx: ModuleStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitModuleStatement?: (ctx: ModuleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `PreproStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterPreproStatement?: (ctx: PreproStatementContext) => void;
    /**
     * Exit a parse tree produced by the `PreproStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitPreproStatement?: (ctx: PreproStatementContext) => void;
    /**
     * Enter a parse tree produced by the `PreChr`
     * labeled alternative in `testParser.prechar`.
     * @param ctx the parse tree
     */
    enterPreChr?: (ctx: PreChrContext) => void;
    /**
     * Exit a parse tree produced by the `PreChr`
     * labeled alternative in `testParser.prechar`.
     * @param ctx the parse tree
     */
    exitPreChr?: (ctx: PreChrContext) => void;
    /**
     * Enter a parse tree produced by the `PreChrPlus`
     * labeled alternative in `testParser.prechar`.
     * @param ctx the parse tree
     */
    enterPreChrPlus?: (ctx: PreChrPlusContext) => void;
    /**
     * Exit a parse tree produced by the `PreChrPlus`
     * labeled alternative in `testParser.prechar`.
     * @param ctx the parse tree
     */
    exitPreChrPlus?: (ctx: PreChrPlusContext) => void;
    /**
     * Enter a parse tree produced by the `PDef`
     * labeled alternative in `testParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPDef?: (ctx: PDefContext) => void;
    /**
     * Exit a parse tree produced by the `PDef`
     * labeled alternative in `testParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPDef?: (ctx: PDefContext) => void;
    /**
     * Enter a parse tree produced by the `PIf`
     * labeled alternative in `testParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPIf?: (ctx: PIfContext) => void;
    /**
     * Exit a parse tree produced by the `PIf`
     * labeled alternative in `testParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPIf?: (ctx: PIfContext) => void;
    /**
     * Enter a parse tree produced by the `PInc`
     * labeled alternative in `testParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPInc?: (ctx: PIncContext) => void;
    /**
     * Exit a parse tree produced by the `PInc`
     * labeled alternative in `testParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPInc?: (ctx: PIncContext) => void;
    /**
     * Enter a parse tree produced by the `Def`
     * labeled alternative in `testParser.functionDefinition`.
     * @param ctx the parse tree
     */
    enterDef?: (ctx: DefContext) => void;
    /**
     * Exit a parse tree produced by the `Def`
     * labeled alternative in `testParser.functionDefinition`.
     * @param ctx the parse tree
     */
    exitDef?: (ctx: DefContext) => void;
    /**
     * Enter a parse tree produced by the `If`
     * labeled alternative in `testParser.functionIf`.
     * @param ctx the parse tree
     */
    enterIf?: (ctx: IfContext) => void;
    /**
     * Exit a parse tree produced by the `If`
     * labeled alternative in `testParser.functionIf`.
     * @param ctx the parse tree
     */
    exitIf?: (ctx: IfContext) => void;
    /**
     * Enter a parse tree produced by the `For`
     * labeled alternative in `testParser.functionFor`.
     * @param ctx the parse tree
     */
    enterFor?: (ctx: ForContext) => void;
    /**
     * Exit a parse tree produced by the `For`
     * labeled alternative in `testParser.functionFor`.
     * @param ctx the parse tree
     */
    exitFor?: (ctx: ForContext) => void;
    /**
     * Enter a parse tree produced by the `While`
     * labeled alternative in `testParser.functionWhile`.
     * @param ctx the parse tree
     */
    enterWhile?: (ctx: WhileContext) => void;
    /**
     * Exit a parse tree produced by the `While`
     * labeled alternative in `testParser.functionWhile`.
     * @param ctx the parse tree
     */
    exitWhile?: (ctx: WhileContext) => void;
    /**
     * Enter a parse tree produced by the `Do`
     * labeled alternative in `testParser.functionDo`.
     * @param ctx the parse tree
     */
    enterDo?: (ctx: DoContext) => void;
    /**
     * Exit a parse tree produced by the `Do`
     * labeled alternative in `testParser.functionDo`.
     * @param ctx the parse tree
     */
    exitDo?: (ctx: DoContext) => void;
    /**
     * Enter a parse tree produced by the `Return`
     * labeled alternative in `testParser.functionReturn`.
     * @param ctx the parse tree
     */
    enterReturn?: (ctx: ReturnContext) => void;
    /**
     * Exit a parse tree produced by the `Return`
     * labeled alternative in `testParser.functionReturn`.
     * @param ctx the parse tree
     */
    exitReturn?: (ctx: ReturnContext) => void;
    /**
     * Enter a parse tree produced by the `Continue`
     * labeled alternative in `testParser.functionContinue`.
     * @param ctx the parse tree
     */
    enterContinue?: (ctx: ContinueContext) => void;
    /**
     * Exit a parse tree produced by the `Continue`
     * labeled alternative in `testParser.functionContinue`.
     * @param ctx the parse tree
     */
    exitContinue?: (ctx: ContinueContext) => void;
    /**
     * Enter a parse tree produced by the `Break`
     * labeled alternative in `testParser.functionBreak`.
     * @param ctx the parse tree
     */
    enterBreak?: (ctx: BreakContext) => void;
    /**
     * Exit a parse tree produced by the `Break`
     * labeled alternative in `testParser.functionBreak`.
     * @param ctx the parse tree
     */
    exitBreak?: (ctx: BreakContext) => void;
    /**
     * Enter a parse tree produced by the `Struct`
     * labeled alternative in `testParser.functionStruct`.
     * @param ctx the parse tree
     */
    enterStruct?: (ctx: StructContext) => void;
    /**
     * Exit a parse tree produced by the `Struct`
     * labeled alternative in `testParser.functionStruct`.
     * @param ctx the parse tree
     */
    exitStruct?: (ctx: StructContext) => void;
    /**
     * Enter a parse tree produced by the `Fcall`
     * labeled alternative in `testParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFcall?: (ctx: FcallContext) => void;
    /**
     * Exit a parse tree produced by the `Fcall`
     * labeled alternative in `testParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFcall?: (ctx: FcallContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleAssign`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleAssign?: (ctx: ModuleAssignContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleAssign`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleAssign?: (ctx: ModuleAssignContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleFunction`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleFunction?: (ctx: ModuleFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleFunction`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleFunction?: (ctx: ModuleFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleStart`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleStart?: (ctx: ModuleStartContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleStart`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleStart?: (ctx: ModuleStartContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleEnd`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleEnd?: (ctx: ModuleEndContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleEnd`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleEnd?: (ctx: ModuleEndContext) => void;
    /**
     * Enter a parse tree produced by the `Main`
     * labeled alternative in `testParser.expr`.
     * @param ctx the parse tree
     */
    enterMain?: (ctx: MainContext) => void;
    /**
     * Exit a parse tree produced by the `Main`
     * labeled alternative in `testParser.expr`.
     * @param ctx the parse tree
     */
    exitMain?: (ctx: MainContext) => void;
    /**
     * Enter a parse tree produced by the `NoAssignment`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterNoAssignment?: (ctx: NoAssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `NoAssignment`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitNoAssignment?: (ctx: NoAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `Assign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterAssign?: (ctx: AssignContext) => void;
    /**
     * Exit a parse tree produced by the `Assign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitAssign?: (ctx: AssignContext) => void;
    /**
     * Enter a parse tree produced by the `StructAssign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterStructAssign?: (ctx: StructAssignContext) => void;
    /**
     * Exit a parse tree produced by the `StructAssign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitStructAssign?: (ctx: StructAssignContext) => void;
    /**
     * Enter a parse tree produced by the `ListAssign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterListAssign?: (ctx: ListAssignContext) => void;
    /**
     * Exit a parse tree produced by the `ListAssign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitListAssign?: (ctx: ListAssignContext) => void;
    /**
     * Enter a parse tree produced by the `Ternary`
     * labeled alternative in `testParser.ternaryExpr`.
     * @param ctx the parse tree
     */
    enterTernary?: (ctx: TernaryContext) => void;
    /**
     * Exit a parse tree produced by the `Ternary`
     * labeled alternative in `testParser.ternaryExpr`.
     * @param ctx the parse tree
     */
    exitTernary?: (ctx: TernaryContext) => void;
    /**
     * Enter a parse tree produced by the `Quote`
     * labeled alternative in `testParser.quoteExpr`.
     * @param ctx the parse tree
     */
    enterQuote?: (ctx: QuoteContext) => void;
    /**
     * Exit a parse tree produced by the `Quote`
     * labeled alternative in `testParser.quoteExpr`.
     * @param ctx the parse tree
     */
    exitQuote?: (ctx: QuoteContext) => void;
    /**
     * Enter a parse tree produced by the `QEnot`
     * labeled alternative in `testParser.qeNotExpr`.
     * @param ctx the parse tree
     */
    enterQEnot?: (ctx: QEnotContext) => void;
    /**
     * Exit a parse tree produced by the `QEnot`
     * labeled alternative in `testParser.qeNotExpr`.
     * @param ctx the parse tree
     */
    exitQEnot?: (ctx: QEnotContext) => void;
    /**
     * Enter a parse tree produced by the `QEor`
     * labeled alternative in `testParser.qeOrExpr`.
     * @param ctx the parse tree
     */
    enterQEor?: (ctx: QEorContext) => void;
    /**
     * Exit a parse tree produced by the `QEor`
     * labeled alternative in `testParser.qeOrExpr`.
     * @param ctx the parse tree
     */
    exitQEor?: (ctx: QEorContext) => void;
    /**
     * Enter a parse tree produced by the `QEand`
     * labeled alternative in `testParser.qeAndExpr`.
     * @param ctx the parse tree
     */
    enterQEand?: (ctx: QEandContext) => void;
    /**
     * Exit a parse tree produced by the `QEand`
     * labeled alternative in `testParser.qeAndExpr`.
     * @param ctx the parse tree
     */
    exitQEand?: (ctx: QEandContext) => void;
    /**
     * Enter a parse tree produced by the `QECompare`
     * labeled alternative in `testParser.qeCompareExpr`.
     * @param ctx the parse tree
     */
    enterQECompare?: (ctx: QECompareContext) => void;
    /**
     * Exit a parse tree produced by the `QECompare`
     * labeled alternative in `testParser.qeCompareExpr`.
     * @param ctx the parse tree
     */
    exitQECompare?: (ctx: QECompareContext) => void;
    /**
     * Enter a parse tree produced by the `Or`
     * labeled alternative in `testParser.orExpr`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by the `Or`
     * labeled alternative in `testParser.orExpr`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by the `And`
     * labeled alternative in `testParser.andExpr`.
     * @param ctx the parse tree
     */
    enterAnd?: (ctx: AndContext) => void;
    /**
     * Exit a parse tree produced by the `And`
     * labeled alternative in `testParser.andExpr`.
     * @param ctx the parse tree
     */
    exitAnd?: (ctx: AndContext) => void;
    /**
     * Enter a parse tree produced by the `Compare`
     * labeled alternative in `testParser.compareExpr`.
     * @param ctx the parse tree
     */
    enterCompare?: (ctx: CompareContext) => void;
    /**
     * Exit a parse tree produced by the `Compare`
     * labeled alternative in `testParser.compareExpr`.
     * @param ctx the parse tree
     */
    exitCompare?: (ctx: CompareContext) => void;
    /**
     * Enter a parse tree produced by the `AddSub`
     * labeled alternative in `testParser.addSubExpr`.
     * @param ctx the parse tree
     */
    enterAddSub?: (ctx: AddSubContext) => void;
    /**
     * Exit a parse tree produced by the `AddSub`
     * labeled alternative in `testParser.addSubExpr`.
     * @param ctx the parse tree
     */
    exitAddSub?: (ctx: AddSubContext) => void;
    /**
     * Enter a parse tree produced by the `MulDivSur`
     * labeled alternative in `testParser.mulDivSurExpr`.
     * @param ctx the parse tree
     */
    enterMulDivSur?: (ctx: MulDivSurContext) => void;
    /**
     * Exit a parse tree produced by the `MulDivSur`
     * labeled alternative in `testParser.mulDivSurExpr`.
     * @param ctx the parse tree
     */
    exitMulDivSur?: (ctx: MulDivSurContext) => void;
    /**
     * Enter a parse tree produced by the `UnaryMinus`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterUnaryMinus?: (ctx: UnaryMinusContext) => void;
    /**
     * Exit a parse tree produced by the `UnaryMinus`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitUnaryMinus?: (ctx: UnaryMinusContext) => void;
    /**
     * Enter a parse tree produced by the `NotExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterNotExpr?: (ctx: NotExprContext) => void;
    /**
     * Exit a parse tree produced by the `NotExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitNotExpr?: (ctx: NotExprContext) => void;
    /**
     * Enter a parse tree produced by the `PowExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterPowExpr?: (ctx: PowExprContext) => void;
    /**
     * Exit a parse tree produced by the `PowExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitPowExpr?: (ctx: PowExprContext) => void;
    /**
     * Enter a parse tree produced by the `PowEx`
     * labeled alternative in `testParser.powerExpr`.
     * @param ctx the parse tree
     */
    enterPowEx?: (ctx: PowExContext) => void;
    /**
     * Exit a parse tree produced by the `PowEx`
     * labeled alternative in `testParser.powerExpr`.
     * @param ctx the parse tree
     */
    exitPowEx?: (ctx: PowExContext) => void;
    /**
     * Enter a parse tree produced by the `FactrialExpr`
     * labeled alternative in `testParser.factExpr`.
     * @param ctx the parse tree
     */
    enterFactrialExpr?: (ctx: FactrialExprContext) => void;
    /**
     * Exit a parse tree produced by the `FactrialExpr`
     * labeled alternative in `testParser.factExpr`.
     * @param ctx the parse tree
     */
    exitFactrialExpr?: (ctx: FactrialExprContext) => void;
    /**
     * Enter a parse tree produced by the `PreFix`
     * labeled alternative in `testParser.prefixExpr`.
     * @param ctx the parse tree
     */
    enterPreFix?: (ctx: PreFixContext) => void;
    /**
     * Exit a parse tree produced by the `PreFix`
     * labeled alternative in `testParser.prefixExpr`.
     * @param ctx the parse tree
     */
    exitPreFix?: (ctx: PreFixContext) => void;
    /**
     * Enter a parse tree produced by the `PostFix`
     * labeled alternative in `testParser.postfixExpr`.
     * @param ctx the parse tree
     */
    enterPostFix?: (ctx: PostFixContext) => void;
    /**
     * Exit a parse tree produced by the `PostFix`
     * labeled alternative in `testParser.postfixExpr`.
     * @param ctx the parse tree
     */
    exitPostFix?: (ctx: PostFixContext) => void;
    /**
     * Enter a parse tree produced by the `IndexAccess`
     * labeled alternative in `testParser.indexAccessExpr`.
     * @param ctx the parse tree
     */
    enterIndexAccess?: (ctx: IndexAccessContext) => void;
    /**
     * Exit a parse tree produced by the `IndexAccess`
     * labeled alternative in `testParser.indexAccessExpr`.
     * @param ctx the parse tree
     */
    exitIndexAccess?: (ctx: IndexAccessContext) => void;
    /**
     * Enter a parse tree produced by the `IndExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterIndExpr?: (ctx: IndExprContext) => void;
    /**
     * Exit a parse tree produced by the `IndExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitIndExpr?: (ctx: IndExprContext) => void;
    /**
     * Enter a parse tree produced by the `Real`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterReal?: (ctx: RealContext) => void;
    /**
     * Exit a parse tree produced by the `Real`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitReal?: (ctx: RealContext) => void;
    /**
     * Enter a parse tree produced by the `IdExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterIdExpr?: (ctx: IdExprContext) => void;
    /**
     * Exit a parse tree produced by the `IdExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitIdExpr?: (ctx: IdExprContext) => void;
    /**
     * Enter a parse tree produced by the `FCallExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterFCallExpr?: (ctx: FCallExprContext) => void;
    /**
     * Exit a parse tree produced by the `FCallExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitFCallExpr?: (ctx: FCallExprContext) => void;
    /**
     * Enter a parse tree produced by the `Paren`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterParen?: (ctx: ParenContext) => void;
    /**
     * Exit a parse tree produced by the `Paren`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitParen?: (ctx: ParenContext) => void;
    /**
     * Enter a parse tree produced by the `StringLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `StringLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `ListLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterListLiteral?: (ctx: ListLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `ListLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitListLiteral?: (ctx: ListLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `DpLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterDpLiteral?: (ctx: DpLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `DpLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitDpLiteral?: (ctx: DpLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `PreChrExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterPreChrExpr?: (ctx: PreChrExprContext) => void;
    /**
     * Exit a parse tree produced by the `PreChrExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitPreChrExpr?: (ctx: PreChrExprContext) => void;
    /**
     * Enter a parse tree produced by the `Dp`
     * labeled alternative in `testParser.dpoly`.
     * @param ctx the parse tree
     */
    enterDp?: (ctx: DpContext) => void;
    /**
     * Exit a parse tree produced by the `Dp`
     * labeled alternative in `testParser.dpoly`.
     * @param ctx the parse tree
     */
    exitDp?: (ctx: DpContext) => void;
    /**
     * Enter a parse tree produced by the `Rat`
     * labeled alternative in `testParser.rational`.
     * @param ctx the parse tree
     */
    enterRat?: (ctx: RatContext) => void;
    /**
     * Exit a parse tree produced by the `Rat`
     * labeled alternative in `testParser.rational`.
     * @param ctx the parse tree
     */
    exitRat?: (ctx: RatContext) => void;
    /**
     * Enter a parse tree produced by the `Float`
     * labeled alternative in `testParser.decimal`.
     * @param ctx the parse tree
     */
    enterFloat?: (ctx: FloatContext) => void;
    /**
     * Exit a parse tree produced by the `Float`
     * labeled alternative in `testParser.decimal`.
     * @param ctx the parse tree
     */
    exitFloat?: (ctx: FloatContext) => void;
    /**
     * Enter a parse tree produced by the `HexNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    enterHexNum?: (ctx: HexNumContext) => void;
    /**
     * Exit a parse tree produced by the `HexNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    exitHexNum?: (ctx: HexNumContext) => void;
    /**
     * Enter a parse tree produced by the `BitNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    enterBitNum?: (ctx: BitNumContext) => void;
    /**
     * Exit a parse tree produced by the `BitNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    exitBitNum?: (ctx: BitNumContext) => void;
    /**
     * Enter a parse tree produced by the `RatNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    enterRatNum?: (ctx: RatNumContext) => void;
    /**
     * Exit a parse tree produced by the `RatNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    exitRatNum?: (ctx: RatNumContext) => void;
    /**
     * Enter a parse tree produced by the `DecNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    enterDecNum?: (ctx: DecNumContext) => void;
    /**
     * Exit a parse tree produced by the `DecNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    exitDecNum?: (ctx: DecNumContext) => void;
    /**
     * Enter a parse tree produced by the `ImaNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    enterImaNum?: (ctx: ImaNumContext) => void;
    /**
     * Exit a parse tree produced by the `ImaNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     */
    exitImaNum?: (ctx: ImaNumContext) => void;
    /**
     * Enter a parse tree produced by the `VId`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    enterVId?: (ctx: VIdContext) => void;
    /**
     * Exit a parse tree produced by the `VId`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    exitVId?: (ctx: VIdContext) => void;
    /**
     * Enter a parse tree produced by the `Bef`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    enterBef?: (ctx: BefContext) => void;
    /**
     * Exit a parse tree produced by the `Bef`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    exitBef?: (ctx: BefContext) => void;
    /**
     * Enter a parse tree produced by the `BefN`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    enterBefN?: (ctx: BefNContext) => void;
    /**
     * Exit a parse tree produced by the `BefN`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    exitBefN?: (ctx: BefNContext) => void;
    /**
     * Enter a parse tree produced by the `V2Id`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    enterV2Id?: (ctx: V2IdContext) => void;
    /**
     * Exit a parse tree produced by the `V2Id`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    exitV2Id?: (ctx: V2IdContext) => void;
    /**
     * Enter a parse tree produced by the `Func`
     * labeled alternative in `testParser.indeterminate`.
     * @param ctx the parse tree
     */
    enterFunc?: (ctx: FuncContext) => void;
    /**
     * Exit a parse tree produced by the `Func`
     * labeled alternative in `testParser.indeterminate`.
     * @param ctx the parse tree
     */
    exitFunc?: (ctx: FuncContext) => void;
    /**
     * Enter a parse tree produced by the `AtFunc`
     * labeled alternative in `testParser.indeterminate`.
     * @param ctx the parse tree
     */
    enterAtFunc?: (ctx: AtFuncContext) => void;
    /**
     * Exit a parse tree produced by the `AtFunc`
     * labeled alternative in `testParser.indeterminate`.
     * @param ctx the parse tree
     */
    exitAtFunc?: (ctx: AtFuncContext) => void;
    /**
     * Enter a parse tree produced by the `ChFunc`
     * labeled alternative in `testParser.indeterminate`.
     * @param ctx the parse tree
     */
    enterChFunc?: (ctx: ChFuncContext) => void;
    /**
     * Exit a parse tree produced by the `ChFunc`
     * labeled alternative in `testParser.indeterminate`.
     * @param ctx the parse tree
     */
    exitChFunc?: (ctx: ChFuncContext) => void;
    /**
     * Enter a parse tree produced by the `ListExpr`
     * labeled alternative in `testParser.list`.
     * @param ctx the parse tree
     */
    enterListExpr?: (ctx: ListExprContext) => void;
    /**
     * Exit a parse tree produced by the `ListExpr`
     * labeled alternative in `testParser.list`.
     * @param ctx the parse tree
     */
    exitListExpr?: (ctx: ListExprContext) => void;
    /**
     * Enter a parse tree produced by the `Sentence`
     * labeled alternative in `testParser.block`.
     * @param ctx the parse tree
     */
    enterSentence?: (ctx: SentenceContext) => void;
    /**
     * Exit a parse tree produced by the `Sentence`
     * labeled alternative in `testParser.block`.
     * @param ctx the parse tree
     */
    exitSentence?: (ctx: SentenceContext) => void;
    /**
     * Enter a parse tree produced by the `Sentence1`
     * labeled alternative in `testParser.block`.
     * @param ctx the parse tree
     */
    enterSentence1?: (ctx: Sentence1Context) => void;
    /**
     * Exit a parse tree produced by the `Sentence1`
     * labeled alternative in `testParser.block`.
     * @param ctx the parse tree
     */
    exitSentence1?: (ctx: Sentence1Context) => void;
    /**
     * Enter a parse tree produced by `testParser.exprlist`.
     * @param ctx the parse tree
     */
    enterExprlist?: (ctx: ExprlistContext) => void;
    /**
     * Exit a parse tree produced by `testParser.exprlist`.
     * @param ctx the parse tree
     */
    exitExprlist?: (ctx: ExprlistContext) => void;
    /**
     * Enter a parse tree produced by `testParser.terminator`.
     * @param ctx the parse tree
     */
    enterTerminator?: (ctx: TerminatorContext) => void;
    /**
     * Exit a parse tree produced by `testParser.terminator`.
     * @param ctx the parse tree
     */
    exitTerminator?: (ctx: TerminatorContext) => void;
    /**
     * Enter a parse tree produced by `testParser.memberName`.
     * @param ctx the parse tree
     */
    enterMemberName?: (ctx: MemberNameContext) => void;
    /**
     * Exit a parse tree produced by `testParser.memberName`.
     * @param ctx the parse tree
     */
    exitMemberName?: (ctx: MemberNameContext) => void;
    /**
     * Enter a parse tree produced by `testParser.systemPath`.
     * @param ctx the parse tree
     */
    enterSystemPath?: (ctx: SystemPathContext) => void;
    /**
     * Exit a parse tree produced by `testParser.systemPath`.
     * @param ctx the parse tree
     */
    exitSystemPath?: (ctx: SystemPathContext) => void;
    /**
     * Enter a parse tree produced by `testParser.optionPair`.
     * @param ctx the parse tree
     */
    enterOptionPair?: (ctx: OptionPairContext) => void;
    /**
     * Exit a parse tree produced by `testParser.optionPair`.
     * @param ctx the parse tree
     */
    exitOptionPair?: (ctx: OptionPairContext) => void;
    /**
     * Enter a parse tree produced by `testParser.qualifiedIdentifier`.
     * @param ctx the parse tree
     */
    enterQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `testParser.qualifiedIdentifier`.
     * @param ctx the parse tree
     */
    exitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
    visitTerminal(node: TerminalNode): void;
    visitErrorNode(node: ErrorNode): void;
    enterEveryRule(node: ParserRuleContext): void;
    exitEveryRule(node: ParserRuleContext): void;
}
