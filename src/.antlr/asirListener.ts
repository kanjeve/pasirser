// Generated from /home/kanji/risaproject/pasirser/asir.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./asirParser.js";
import { ExprStatementContext } from "./asirParser.js";
import { EmptyLineStatementContext } from "./asirParser.js";
import { DefinitionStatementContext } from "./asirParser.js";
import { ForwardDeclStatementContext } from "./asirParser.js";
import { IfStatementContext } from "./asirParser.js";
import { ForStatementContext } from "./asirParser.js";
import { WhileStatementContext } from "./asirParser.js";
import { DoStatementContext } from "./asirParser.js";
import { ReturnStatementContext } from "./asirParser.js";
import { BreakStatementContext } from "./asirParser.js";
import { ContinueStatementContext } from "./asirParser.js";
import { StructStatementContext } from "./asirParser.js";
import { ModuleStatementContext } from "./asirParser.js";
import { PreproStatementContext } from "./asirParser.js";
import { PreChrContext } from "./asirParser.js";
import { PreChrPlusContext } from "./asirParser.js";
import { PDefContext } from "./asirParser.js";
import { PIfContext } from "./asirParser.js";
import { PIncContext } from "./asirParser.js";
import { DefContext } from "./asirParser.js";
import { FormDeclContext } from "./asirParser.js";
import { IfContext } from "./asirParser.js";
import { ForContext } from "./asirParser.js";
import { WhileContext } from "./asirParser.js";
import { DoContext } from "./asirParser.js";
import { ReturnContext } from "./asirParser.js";
import { ContinueContext } from "./asirParser.js";
import { BreakContext } from "./asirParser.js";
import { StructContext } from "./asirParser.js";
import { ModuleAssignContext } from "./asirParser.js";
import { ModuleStartContext } from "./asirParser.js";
import { ModuleEndContext } from "./asirParser.js";
import { MainContext } from "./asirParser.js";
import { NoAssignmentContext } from "./asirParser.js";
import { AssignContext } from "./asirParser.js";
import { StructAssignContext } from "./asirParser.js";
import { ListAssignContext } from "./asirParser.js";
import { TernaryContext } from "./asirParser.js";
import { QuoteContext } from "./asirParser.js";
import { QEImplContext } from "./asirParser.js";
import { QEnotContext } from "./asirParser.js";
import { QEorContext } from "./asirParser.js";
import { QEandContext } from "./asirParser.js";
import { QECompareContext } from "./asirParser.js";
import { OrContext } from "./asirParser.js";
import { AndContext } from "./asirParser.js";
import { CompareContext } from "./asirParser.js";
import { AddSubContext } from "./asirParser.js";
import { MulDivSurContext } from "./asirParser.js";
import { UnaryMinusContext } from "./asirParser.js";
import { NotExprContext } from "./asirParser.js";
import { PowExprContext } from "./asirParser.js";
import { PowExContext } from "./asirParser.js";
import { FactorialExprContext } from "./asirParser.js";
import { PreFixContext } from "./asirParser.js";
import { PostFixContext } from "./asirParser.js";
import { IndexAccessContext } from "./asirParser.js";
import { MemberAccessContext } from "./asirParser.js";
import { IndExprContext } from "./asirParser.js";
import { RealContext } from "./asirParser.js";
import { IdExprContext } from "./asirParser.js";
import { FCallExprContext } from "./asirParser.js";
import { FunctorCallExprContext } from "./asirParser.js";
import { ParenContext } from "./asirParser.js";
import { StringLiteralContext } from "./asirParser.js";
import { ListLiteralContext } from "./asirParser.js";
import { DpLiteralContext } from "./asirParser.js";
import { PreChrExprContext } from "./asirParser.js";
import { DpContext } from "./asirParser.js";
import { RatContext } from "./asirParser.js";
import { FloatContext } from "./asirParser.js";
import { HexNumContext } from "./asirParser.js";
import { BitNumContext } from "./asirParser.js";
import { RatNumContext } from "./asirParser.js";
import { DecNumContext } from "./asirParser.js";
import { ImaNumContext } from "./asirParser.js";
import { GenNumContext } from "./asirParser.js";
import { BefContext } from "./asirParser.js";
import { BefNContext } from "./asirParser.js";
import { V2IdContext } from "./asirParser.js";
import { FuncContext } from "./asirParser.js";
import { AtFuncContext } from "./asirParser.js";
import { ChFuncContext } from "./asirParser.js";
import { ListExprContext } from "./asirParser.js";
import { SentenceContext } from "./asirParser.js";
import { Sentence1Context } from "./asirParser.js";
import { QualifiedNameContext } from "./asirParser.js";
import { DottedIdentifierContext } from "./asirParser.js";
import { ExprlistContext } from "./asirParser.js";
import { TerminatorContext } from "./asirParser.js";
import { SystemPathContext } from "./asirParser.js";
import { ElifClauseContext } from "./asirParser.js";
import { ElseClauseContext } from "./asirParser.js";
import { OptionPairContext } from "./asirParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `asirParser`.
 */
export class asirListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `asirParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by the `ExprStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterExprStatement?: (ctx: ExprStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ExprStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitExprStatement?: (ctx: ExprStatementContext) => void;
    /**
     * Enter a parse tree produced by the `EmptyLineStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterEmptyLineStatement?: (ctx: EmptyLineStatementContext) => void;
    /**
     * Exit a parse tree produced by the `EmptyLineStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitEmptyLineStatement?: (ctx: EmptyLineStatementContext) => void;
    /**
     * Enter a parse tree produced by the `DefinitionStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterDefinitionStatement?: (ctx: DefinitionStatementContext) => void;
    /**
     * Exit a parse tree produced by the `DefinitionStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitDefinitionStatement?: (ctx: DefinitionStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ForwardDeclStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterForwardDeclStatement?: (ctx: ForwardDeclStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ForwardDeclStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitForwardDeclStatement?: (ctx: ForwardDeclStatementContext) => void;
    /**
     * Enter a parse tree produced by the `IfStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by the `IfStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ForStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ForStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Enter a parse tree produced by the `WhileStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by the `WhileStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by the `DoStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Exit a parse tree produced by the `DoStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ReturnStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ReturnStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by the `BreakStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Exit a parse tree produced by the `BreakStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ContinueStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ContinueStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Enter a parse tree produced by the `StructStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterStructStatement?: (ctx: StructStatementContext) => void;
    /**
     * Exit a parse tree produced by the `StructStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitStructStatement?: (ctx: StructStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterModuleStatement?: (ctx: ModuleStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitModuleStatement?: (ctx: ModuleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `PreproStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterPreproStatement?: (ctx: PreproStatementContext) => void;
    /**
     * Exit a parse tree produced by the `PreproStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitPreproStatement?: (ctx: PreproStatementContext) => void;
    /**
     * Enter a parse tree produced by the `PreChr`
     * labeled alternative in `asirParser.prechar`.
     * @param ctx the parse tree
     */
    enterPreChr?: (ctx: PreChrContext) => void;
    /**
     * Exit a parse tree produced by the `PreChr`
     * labeled alternative in `asirParser.prechar`.
     * @param ctx the parse tree
     */
    exitPreChr?: (ctx: PreChrContext) => void;
    /**
     * Enter a parse tree produced by the `PreChrPlus`
     * labeled alternative in `asirParser.prechar`.
     * @param ctx the parse tree
     */
    enterPreChrPlus?: (ctx: PreChrPlusContext) => void;
    /**
     * Exit a parse tree produced by the `PreChrPlus`
     * labeled alternative in `asirParser.prechar`.
     * @param ctx the parse tree
     */
    exitPreChrPlus?: (ctx: PreChrPlusContext) => void;
    /**
     * Enter a parse tree produced by the `PDef`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPDef?: (ctx: PDefContext) => void;
    /**
     * Exit a parse tree produced by the `PDef`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPDef?: (ctx: PDefContext) => void;
    /**
     * Enter a parse tree produced by the `PIf`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPIf?: (ctx: PIfContext) => void;
    /**
     * Exit a parse tree produced by the `PIf`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPIf?: (ctx: PIfContext) => void;
    /**
     * Enter a parse tree produced by the `PInc`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPInc?: (ctx: PIncContext) => void;
    /**
     * Exit a parse tree produced by the `PInc`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPInc?: (ctx: PIncContext) => void;
    /**
     * Enter a parse tree produced by the `Def`
     * labeled alternative in `asirParser.functionDefinition`.
     * @param ctx the parse tree
     */
    enterDef?: (ctx: DefContext) => void;
    /**
     * Exit a parse tree produced by the `Def`
     * labeled alternative in `asirParser.functionDefinition`.
     * @param ctx the parse tree
     */
    exitDef?: (ctx: DefContext) => void;
    /**
     * Enter a parse tree produced by the `FormDecl`
     * labeled alternative in `asirParser.formDeclaration`.
     * @param ctx the parse tree
     */
    enterFormDecl?: (ctx: FormDeclContext) => void;
    /**
     * Exit a parse tree produced by the `FormDecl`
     * labeled alternative in `asirParser.formDeclaration`.
     * @param ctx the parse tree
     */
    exitFormDecl?: (ctx: FormDeclContext) => void;
    /**
     * Enter a parse tree produced by the `If`
     * labeled alternative in `asirParser.functionIf`.
     * @param ctx the parse tree
     */
    enterIf?: (ctx: IfContext) => void;
    /**
     * Exit a parse tree produced by the `If`
     * labeled alternative in `asirParser.functionIf`.
     * @param ctx the parse tree
     */
    exitIf?: (ctx: IfContext) => void;
    /**
     * Enter a parse tree produced by the `For`
     * labeled alternative in `asirParser.functionFor`.
     * @param ctx the parse tree
     */
    enterFor?: (ctx: ForContext) => void;
    /**
     * Exit a parse tree produced by the `For`
     * labeled alternative in `asirParser.functionFor`.
     * @param ctx the parse tree
     */
    exitFor?: (ctx: ForContext) => void;
    /**
     * Enter a parse tree produced by the `While`
     * labeled alternative in `asirParser.functionWhile`.
     * @param ctx the parse tree
     */
    enterWhile?: (ctx: WhileContext) => void;
    /**
     * Exit a parse tree produced by the `While`
     * labeled alternative in `asirParser.functionWhile`.
     * @param ctx the parse tree
     */
    exitWhile?: (ctx: WhileContext) => void;
    /**
     * Enter a parse tree produced by the `Do`
     * labeled alternative in `asirParser.functionDo`.
     * @param ctx the parse tree
     */
    enterDo?: (ctx: DoContext) => void;
    /**
     * Exit a parse tree produced by the `Do`
     * labeled alternative in `asirParser.functionDo`.
     * @param ctx the parse tree
     */
    exitDo?: (ctx: DoContext) => void;
    /**
     * Enter a parse tree produced by the `Return`
     * labeled alternative in `asirParser.functionReturn`.
     * @param ctx the parse tree
     */
    enterReturn?: (ctx: ReturnContext) => void;
    /**
     * Exit a parse tree produced by the `Return`
     * labeled alternative in `asirParser.functionReturn`.
     * @param ctx the parse tree
     */
    exitReturn?: (ctx: ReturnContext) => void;
    /**
     * Enter a parse tree produced by the `Continue`
     * labeled alternative in `asirParser.functionContinue`.
     * @param ctx the parse tree
     */
    enterContinue?: (ctx: ContinueContext) => void;
    /**
     * Exit a parse tree produced by the `Continue`
     * labeled alternative in `asirParser.functionContinue`.
     * @param ctx the parse tree
     */
    exitContinue?: (ctx: ContinueContext) => void;
    /**
     * Enter a parse tree produced by the `Break`
     * labeled alternative in `asirParser.functionBreak`.
     * @param ctx the parse tree
     */
    enterBreak?: (ctx: BreakContext) => void;
    /**
     * Exit a parse tree produced by the `Break`
     * labeled alternative in `asirParser.functionBreak`.
     * @param ctx the parse tree
     */
    exitBreak?: (ctx: BreakContext) => void;
    /**
     * Enter a parse tree produced by the `Struct`
     * labeled alternative in `asirParser.functionStruct`.
     * @param ctx the parse tree
     */
    enterStruct?: (ctx: StructContext) => void;
    /**
     * Exit a parse tree produced by the `Struct`
     * labeled alternative in `asirParser.functionStruct`.
     * @param ctx the parse tree
     */
    exitStruct?: (ctx: StructContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleAssign`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleAssign?: (ctx: ModuleAssignContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleAssign`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleAssign?: (ctx: ModuleAssignContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleStart`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleStart?: (ctx: ModuleStartContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleStart`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleStart?: (ctx: ModuleStartContext) => void;
    /**
     * Enter a parse tree produced by the `ModuleEnd`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     */
    enterModuleEnd?: (ctx: ModuleEndContext) => void;
    /**
     * Exit a parse tree produced by the `ModuleEnd`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     */
    exitModuleEnd?: (ctx: ModuleEndContext) => void;
    /**
     * Enter a parse tree produced by the `Main`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterMain?: (ctx: MainContext) => void;
    /**
     * Exit a parse tree produced by the `Main`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitMain?: (ctx: MainContext) => void;
    /**
     * Enter a parse tree produced by the `NoAssignment`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterNoAssignment?: (ctx: NoAssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `NoAssignment`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitNoAssignment?: (ctx: NoAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `Assign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterAssign?: (ctx: AssignContext) => void;
    /**
     * Exit a parse tree produced by the `Assign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitAssign?: (ctx: AssignContext) => void;
    /**
     * Enter a parse tree produced by the `StructAssign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterStructAssign?: (ctx: StructAssignContext) => void;
    /**
     * Exit a parse tree produced by the `StructAssign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitStructAssign?: (ctx: StructAssignContext) => void;
    /**
     * Enter a parse tree produced by the `ListAssign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    enterListAssign?: (ctx: ListAssignContext) => void;
    /**
     * Exit a parse tree produced by the `ListAssign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     */
    exitListAssign?: (ctx: ListAssignContext) => void;
    /**
     * Enter a parse tree produced by the `Ternary`
     * labeled alternative in `asirParser.ternaryExpr`.
     * @param ctx the parse tree
     */
    enterTernary?: (ctx: TernaryContext) => void;
    /**
     * Exit a parse tree produced by the `Ternary`
     * labeled alternative in `asirParser.ternaryExpr`.
     * @param ctx the parse tree
     */
    exitTernary?: (ctx: TernaryContext) => void;
    /**
     * Enter a parse tree produced by the `Quote`
     * labeled alternative in `asirParser.quoteExpr`.
     * @param ctx the parse tree
     */
    enterQuote?: (ctx: QuoteContext) => void;
    /**
     * Exit a parse tree produced by the `Quote`
     * labeled alternative in `asirParser.quoteExpr`.
     * @param ctx the parse tree
     */
    exitQuote?: (ctx: QuoteContext) => void;
    /**
     * Enter a parse tree produced by the `QEImpl`
     * labeled alternative in `asirParser.qeImplExpr`.
     * @param ctx the parse tree
     */
    enterQEImpl?: (ctx: QEImplContext) => void;
    /**
     * Exit a parse tree produced by the `QEImpl`
     * labeled alternative in `asirParser.qeImplExpr`.
     * @param ctx the parse tree
     */
    exitQEImpl?: (ctx: QEImplContext) => void;
    /**
     * Enter a parse tree produced by the `QEnot`
     * labeled alternative in `asirParser.qeNotExpr`.
     * @param ctx the parse tree
     */
    enterQEnot?: (ctx: QEnotContext) => void;
    /**
     * Exit a parse tree produced by the `QEnot`
     * labeled alternative in `asirParser.qeNotExpr`.
     * @param ctx the parse tree
     */
    exitQEnot?: (ctx: QEnotContext) => void;
    /**
     * Enter a parse tree produced by the `QEor`
     * labeled alternative in `asirParser.qeOrExpr`.
     * @param ctx the parse tree
     */
    enterQEor?: (ctx: QEorContext) => void;
    /**
     * Exit a parse tree produced by the `QEor`
     * labeled alternative in `asirParser.qeOrExpr`.
     * @param ctx the parse tree
     */
    exitQEor?: (ctx: QEorContext) => void;
    /**
     * Enter a parse tree produced by the `QEand`
     * labeled alternative in `asirParser.qeAndExpr`.
     * @param ctx the parse tree
     */
    enterQEand?: (ctx: QEandContext) => void;
    /**
     * Exit a parse tree produced by the `QEand`
     * labeled alternative in `asirParser.qeAndExpr`.
     * @param ctx the parse tree
     */
    exitQEand?: (ctx: QEandContext) => void;
    /**
     * Enter a parse tree produced by the `QECompare`
     * labeled alternative in `asirParser.qeCompareExpr`.
     * @param ctx the parse tree
     */
    enterQECompare?: (ctx: QECompareContext) => void;
    /**
     * Exit a parse tree produced by the `QECompare`
     * labeled alternative in `asirParser.qeCompareExpr`.
     * @param ctx the parse tree
     */
    exitQECompare?: (ctx: QECompareContext) => void;
    /**
     * Enter a parse tree produced by the `Or`
     * labeled alternative in `asirParser.orExpr`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by the `Or`
     * labeled alternative in `asirParser.orExpr`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by the `And`
     * labeled alternative in `asirParser.andExpr`.
     * @param ctx the parse tree
     */
    enterAnd?: (ctx: AndContext) => void;
    /**
     * Exit a parse tree produced by the `And`
     * labeled alternative in `asirParser.andExpr`.
     * @param ctx the parse tree
     */
    exitAnd?: (ctx: AndContext) => void;
    /**
     * Enter a parse tree produced by the `Compare`
     * labeled alternative in `asirParser.compareExpr`.
     * @param ctx the parse tree
     */
    enterCompare?: (ctx: CompareContext) => void;
    /**
     * Exit a parse tree produced by the `Compare`
     * labeled alternative in `asirParser.compareExpr`.
     * @param ctx the parse tree
     */
    exitCompare?: (ctx: CompareContext) => void;
    /**
     * Enter a parse tree produced by the `AddSub`
     * labeled alternative in `asirParser.addSubExpr`.
     * @param ctx the parse tree
     */
    enterAddSub?: (ctx: AddSubContext) => void;
    /**
     * Exit a parse tree produced by the `AddSub`
     * labeled alternative in `asirParser.addSubExpr`.
     * @param ctx the parse tree
     */
    exitAddSub?: (ctx: AddSubContext) => void;
    /**
     * Enter a parse tree produced by the `MulDivSur`
     * labeled alternative in `asirParser.mulDivSurExpr`.
     * @param ctx the parse tree
     */
    enterMulDivSur?: (ctx: MulDivSurContext) => void;
    /**
     * Exit a parse tree produced by the `MulDivSur`
     * labeled alternative in `asirParser.mulDivSurExpr`.
     * @param ctx the parse tree
     */
    exitMulDivSur?: (ctx: MulDivSurContext) => void;
    /**
     * Enter a parse tree produced by the `UnaryMinus`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterUnaryMinus?: (ctx: UnaryMinusContext) => void;
    /**
     * Exit a parse tree produced by the `UnaryMinus`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitUnaryMinus?: (ctx: UnaryMinusContext) => void;
    /**
     * Enter a parse tree produced by the `NotExpr`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterNotExpr?: (ctx: NotExprContext) => void;
    /**
     * Exit a parse tree produced by the `NotExpr`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitNotExpr?: (ctx: NotExprContext) => void;
    /**
     * Enter a parse tree produced by the `PowExpr`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterPowExpr?: (ctx: PowExprContext) => void;
    /**
     * Exit a parse tree produced by the `PowExpr`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitPowExpr?: (ctx: PowExprContext) => void;
    /**
     * Enter a parse tree produced by the `PowEx`
     * labeled alternative in `asirParser.powerExpr`.
     * @param ctx the parse tree
     */
    enterPowEx?: (ctx: PowExContext) => void;
    /**
     * Exit a parse tree produced by the `PowEx`
     * labeled alternative in `asirParser.powerExpr`.
     * @param ctx the parse tree
     */
    exitPowEx?: (ctx: PowExContext) => void;
    /**
     * Enter a parse tree produced by the `FactorialExpr`
     * labeled alternative in `asirParser.factExpr`.
     * @param ctx the parse tree
     */
    enterFactorialExpr?: (ctx: FactorialExprContext) => void;
    /**
     * Exit a parse tree produced by the `FactorialExpr`
     * labeled alternative in `asirParser.factExpr`.
     * @param ctx the parse tree
     */
    exitFactorialExpr?: (ctx: FactorialExprContext) => void;
    /**
     * Enter a parse tree produced by the `PreFix`
     * labeled alternative in `asirParser.prefixExpr`.
     * @param ctx the parse tree
     */
    enterPreFix?: (ctx: PreFixContext) => void;
    /**
     * Exit a parse tree produced by the `PreFix`
     * labeled alternative in `asirParser.prefixExpr`.
     * @param ctx the parse tree
     */
    exitPreFix?: (ctx: PreFixContext) => void;
    /**
     * Enter a parse tree produced by the `PostFix`
     * labeled alternative in `asirParser.postfixExpr`.
     * @param ctx the parse tree
     */
    enterPostFix?: (ctx: PostFixContext) => void;
    /**
     * Exit a parse tree produced by the `PostFix`
     * labeled alternative in `asirParser.postfixExpr`.
     * @param ctx the parse tree
     */
    exitPostFix?: (ctx: PostFixContext) => void;
    /**
     * Enter a parse tree produced by the `IndexAccess`
     * labeled alternative in `asirParser.indexAccessExpr`.
     * @param ctx the parse tree
     */
    enterIndexAccess?: (ctx: IndexAccessContext) => void;
    /**
     * Exit a parse tree produced by the `IndexAccess`
     * labeled alternative in `asirParser.indexAccessExpr`.
     * @param ctx the parse tree
     */
    exitIndexAccess?: (ctx: IndexAccessContext) => void;
    /**
     * Enter a parse tree produced by the `MemberAccess`
     * labeled alternative in `asirParser.memberAccessExpr`.
     * @param ctx the parse tree
     */
    enterMemberAccess?: (ctx: MemberAccessContext) => void;
    /**
     * Exit a parse tree produced by the `MemberAccess`
     * labeled alternative in `asirParser.memberAccessExpr`.
     * @param ctx the parse tree
     */
    exitMemberAccess?: (ctx: MemberAccessContext) => void;
    /**
     * Enter a parse tree produced by the `IndExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterIndExpr?: (ctx: IndExprContext) => void;
    /**
     * Exit a parse tree produced by the `IndExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitIndExpr?: (ctx: IndExprContext) => void;
    /**
     * Enter a parse tree produced by the `Real`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterReal?: (ctx: RealContext) => void;
    /**
     * Exit a parse tree produced by the `Real`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitReal?: (ctx: RealContext) => void;
    /**
     * Enter a parse tree produced by the `IdExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterIdExpr?: (ctx: IdExprContext) => void;
    /**
     * Exit a parse tree produced by the `IdExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitIdExpr?: (ctx: IdExprContext) => void;
    /**
     * Enter a parse tree produced by the `FCallExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterFCallExpr?: (ctx: FCallExprContext) => void;
    /**
     * Exit a parse tree produced by the `FCallExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitFCallExpr?: (ctx: FCallExprContext) => void;
    /**
     * Enter a parse tree produced by the `FunctorCallExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterFunctorCallExpr?: (ctx: FunctorCallExprContext) => void;
    /**
     * Exit a parse tree produced by the `FunctorCallExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitFunctorCallExpr?: (ctx: FunctorCallExprContext) => void;
    /**
     * Enter a parse tree produced by the `Paren`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterParen?: (ctx: ParenContext) => void;
    /**
     * Exit a parse tree produced by the `Paren`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitParen?: (ctx: ParenContext) => void;
    /**
     * Enter a parse tree produced by the `StringLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `StringLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `ListLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterListLiteral?: (ctx: ListLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `ListLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitListLiteral?: (ctx: ListLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `DpLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterDpLiteral?: (ctx: DpLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `DpLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitDpLiteral?: (ctx: DpLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `PreChrExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterPreChrExpr?: (ctx: PreChrExprContext) => void;
    /**
     * Exit a parse tree produced by the `PreChrExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitPreChrExpr?: (ctx: PreChrExprContext) => void;
    /**
     * Enter a parse tree produced by the `Dp`
     * labeled alternative in `asirParser.dpoly`.
     * @param ctx the parse tree
     */
    enterDp?: (ctx: DpContext) => void;
    /**
     * Exit a parse tree produced by the `Dp`
     * labeled alternative in `asirParser.dpoly`.
     * @param ctx the parse tree
     */
    exitDp?: (ctx: DpContext) => void;
    /**
     * Enter a parse tree produced by the `Rat`
     * labeled alternative in `asirParser.rational`.
     * @param ctx the parse tree
     */
    enterRat?: (ctx: RatContext) => void;
    /**
     * Exit a parse tree produced by the `Rat`
     * labeled alternative in `asirParser.rational`.
     * @param ctx the parse tree
     */
    exitRat?: (ctx: RatContext) => void;
    /**
     * Enter a parse tree produced by the `Float`
     * labeled alternative in `asirParser.decimal`.
     * @param ctx the parse tree
     */
    enterFloat?: (ctx: FloatContext) => void;
    /**
     * Exit a parse tree produced by the `Float`
     * labeled alternative in `asirParser.decimal`.
     * @param ctx the parse tree
     */
    exitFloat?: (ctx: FloatContext) => void;
    /**
     * Enter a parse tree produced by the `HexNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterHexNum?: (ctx: HexNumContext) => void;
    /**
     * Exit a parse tree produced by the `HexNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitHexNum?: (ctx: HexNumContext) => void;
    /**
     * Enter a parse tree produced by the `BitNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterBitNum?: (ctx: BitNumContext) => void;
    /**
     * Exit a parse tree produced by the `BitNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitBitNum?: (ctx: BitNumContext) => void;
    /**
     * Enter a parse tree produced by the `RatNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterRatNum?: (ctx: RatNumContext) => void;
    /**
     * Exit a parse tree produced by the `RatNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitRatNum?: (ctx: RatNumContext) => void;
    /**
     * Enter a parse tree produced by the `DecNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterDecNum?: (ctx: DecNumContext) => void;
    /**
     * Exit a parse tree produced by the `DecNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitDecNum?: (ctx: DecNumContext) => void;
    /**
     * Enter a parse tree produced by the `ImaNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterImaNum?: (ctx: ImaNumContext) => void;
    /**
     * Exit a parse tree produced by the `ImaNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitImaNum?: (ctx: ImaNumContext) => void;
    /**
     * Enter a parse tree produced by the `GenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterGenNum?: (ctx: GenNumContext) => void;
    /**
     * Exit a parse tree produced by the `GenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitGenNum?: (ctx: GenNumContext) => void;
    /**
     * Enter a parse tree produced by the `Bef`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     */
    enterBef?: (ctx: BefContext) => void;
    /**
     * Exit a parse tree produced by the `Bef`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     */
    exitBef?: (ctx: BefContext) => void;
    /**
     * Enter a parse tree produced by the `BefN`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     */
    enterBefN?: (ctx: BefNContext) => void;
    /**
     * Exit a parse tree produced by the `BefN`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     */
    exitBefN?: (ctx: BefNContext) => void;
    /**
     * Enter a parse tree produced by the `V2Id`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     */
    enterV2Id?: (ctx: V2IdContext) => void;
    /**
     * Exit a parse tree produced by the `V2Id`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     */
    exitV2Id?: (ctx: V2IdContext) => void;
    /**
     * Enter a parse tree produced by the `Func`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     */
    enterFunc?: (ctx: FuncContext) => void;
    /**
     * Exit a parse tree produced by the `Func`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     */
    exitFunc?: (ctx: FuncContext) => void;
    /**
     * Enter a parse tree produced by the `AtFunc`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     */
    enterAtFunc?: (ctx: AtFuncContext) => void;
    /**
     * Exit a parse tree produced by the `AtFunc`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     */
    exitAtFunc?: (ctx: AtFuncContext) => void;
    /**
     * Enter a parse tree produced by the `ChFunc`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     */
    enterChFunc?: (ctx: ChFuncContext) => void;
    /**
     * Exit a parse tree produced by the `ChFunc`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     */
    exitChFunc?: (ctx: ChFuncContext) => void;
    /**
     * Enter a parse tree produced by the `ListExpr`
     * labeled alternative in `asirParser.list`.
     * @param ctx the parse tree
     */
    enterListExpr?: (ctx: ListExprContext) => void;
    /**
     * Exit a parse tree produced by the `ListExpr`
     * labeled alternative in `asirParser.list`.
     * @param ctx the parse tree
     */
    exitListExpr?: (ctx: ListExprContext) => void;
    /**
     * Enter a parse tree produced by the `Sentence`
     * labeled alternative in `asirParser.block`.
     * @param ctx the parse tree
     */
    enterSentence?: (ctx: SentenceContext) => void;
    /**
     * Exit a parse tree produced by the `Sentence`
     * labeled alternative in `asirParser.block`.
     * @param ctx the parse tree
     */
    exitSentence?: (ctx: SentenceContext) => void;
    /**
     * Enter a parse tree produced by the `Sentence1`
     * labeled alternative in `asirParser.block`.
     * @param ctx the parse tree
     */
    enterSentence1?: (ctx: Sentence1Context) => void;
    /**
     * Exit a parse tree produced by the `Sentence1`
     * labeled alternative in `asirParser.block`.
     * @param ctx the parse tree
     */
    exitSentence1?: (ctx: Sentence1Context) => void;
    /**
     * Enter a parse tree produced by `asirParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.dottedIdentifier`.
     * @param ctx the parse tree
     */
    enterDottedIdentifier?: (ctx: DottedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.dottedIdentifier`.
     * @param ctx the parse tree
     */
    exitDottedIdentifier?: (ctx: DottedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.exprlist`.
     * @param ctx the parse tree
     */
    enterExprlist?: (ctx: ExprlistContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.exprlist`.
     * @param ctx the parse tree
     */
    exitExprlist?: (ctx: ExprlistContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.terminator`.
     * @param ctx the parse tree
     */
    enterTerminator?: (ctx: TerminatorContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.terminator`.
     * @param ctx the parse tree
     */
    exitTerminator?: (ctx: TerminatorContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.systemPath`.
     * @param ctx the parse tree
     */
    enterSystemPath?: (ctx: SystemPathContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.systemPath`.
     * @param ctx the parse tree
     */
    exitSystemPath?: (ctx: SystemPathContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.elifClause`.
     * @param ctx the parse tree
     */
    enterElifClause?: (ctx: ElifClauseContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.elifClause`.
     * @param ctx the parse tree
     */
    exitElifClause?: (ctx: ElifClauseContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.elseClause`.
     * @param ctx the parse tree
     */
    enterElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.elseClause`.
     * @param ctx the parse tree
     */
    exitElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Enter a parse tree produced by `asirParser.optionPair`.
     * @param ctx the parse tree
     */
    enterOptionPair?: (ctx: OptionPairContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.optionPair`.
     * @param ctx the parse tree
     */
    exitOptionPair?: (ctx: OptionPairContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

