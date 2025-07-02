import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";
import { ProgContext } from "./testParser.js";
import { ExprStatementContext } from "./testParser.js";
import { EmptyLineStatementContext } from "./testParser.js";
import { AssignStatementContext } from "./testParser.js";
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
import { DefContext } from "./testParser.js";
import { IfContext } from "./testParser.js";
import { ForiniContext } from "./testParser.js";
import { ForconContext } from "./testParser.js";
import { Forup1Context } from "./testParser.js";
import { Forup2Context } from "./testParser.js";
import { Forup3Context } from "./testParser.js";
import { Forup4Context } from "./testParser.js";
import { Forup5Context } from "./testParser.js";
import { ForContext } from "./testParser.js";
import { WhileContext } from "./testParser.js";
import { DoContext } from "./testParser.js";
import { ReturnContext } from "./testParser.js";
import { ContinueContext } from "./testParser.js";
import { BreakContext } from "./testParser.js";
import { StrctContext } from "./testParser.js";
import { FcallContext } from "./testParser.js";
import { ModuleAssignContext } from "./testParser.js";
import { ModuleFunctionContext } from "./testParser.js";
import { ModuleStartContext } from "./testParser.js";
import { ModuleEndContext } from "./testParser.js";
import { MainContext } from "./testParser.js";
import { TernaryContext } from "./testParser.js";
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
import { PowerExprRuleContext } from "./testParser.js";
import { PowerContext } from "./testParser.js";
import { IndexAccessContext } from "./testParser.js";
import { RealContext } from "./testParser.js";
import { IdExprContext } from "./testParser.js";
import { FCallExprContext } from "./testParser.js";
import { ParenContext } from "./testParser.js";
import { SpecNumContext } from "./testParser.js";
import { StringLiteralContext } from "./testParser.js";
import { CharLiteralContext } from "./testParser.js";
import { ListLiteralContext } from "./testParser.js";
import { RatContext } from "./testParser.js";
import { FloatContext } from "./testParser.js";
import { RatNumContext } from "./testParser.js";
import { DecNumContext } from "./testParser.js";
import { VIdContext } from "./testParser.js";
import { FIdContext } from "./testParser.js";
import { V2IdContext } from "./testParser.js";
import { ImaContext } from "./testParser.js";
import { PiContext } from "./testParser.js";
import { NapContext } from "./testParser.js";
import { BefContext } from "./testParser.js";
import { BefNContext } from "./testParser.js";
import { ListExprContext } from "./testParser.js";
import { SentenceContext } from "./testParser.js";
import { Sentence1Context } from "./testParser.js";
import { AssignContext } from "./testParser.js";
import { StructAssignContext } from "./testParser.js";
import { ListAssignContext } from "./testParser.js";
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
     * Enter a parse tree produced by the `AssignStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    enterAssignStatement?: (ctx: AssignStatementContext) => void;
    /**
     * Exit a parse tree produced by the `AssignStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     */
    exitAssignStatement?: (ctx: AssignStatementContext) => void;
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
     * Enter a parse tree produced by the `Forini`
     * labeled alternative in `testParser.forInitializer`.
     * @param ctx the parse tree
     */
    enterForini?: (ctx: ForiniContext) => void;
    /**
     * Exit a parse tree produced by the `Forini`
     * labeled alternative in `testParser.forInitializer`.
     * @param ctx the parse tree
     */
    exitForini?: (ctx: ForiniContext) => void;
    /**
     * Enter a parse tree produced by the `Forcon`
     * labeled alternative in `testParser.forCondition`.
     * @param ctx the parse tree
     */
    enterForcon?: (ctx: ForconContext) => void;
    /**
     * Exit a parse tree produced by the `Forcon`
     * labeled alternative in `testParser.forCondition`.
     * @param ctx the parse tree
     */
    exitForcon?: (ctx: ForconContext) => void;
    /**
     * Enter a parse tree produced by the `Forup1`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForup1?: (ctx: Forup1Context) => void;
    /**
     * Exit a parse tree produced by the `Forup1`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForup1?: (ctx: Forup1Context) => void;
    /**
     * Enter a parse tree produced by the `Forup2`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForup2?: (ctx: Forup2Context) => void;
    /**
     * Exit a parse tree produced by the `Forup2`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForup2?: (ctx: Forup2Context) => void;
    /**
     * Enter a parse tree produced by the `Forup3`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForup3?: (ctx: Forup3Context) => void;
    /**
     * Exit a parse tree produced by the `Forup3`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForup3?: (ctx: Forup3Context) => void;
    /**
     * Enter a parse tree produced by the `Forup4`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForup4?: (ctx: Forup4Context) => void;
    /**
     * Exit a parse tree produced by the `Forup4`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForup4?: (ctx: Forup4Context) => void;
    /**
     * Enter a parse tree produced by the `Forup5`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    enterForup5?: (ctx: Forup5Context) => void;
    /**
     * Exit a parse tree produced by the `Forup5`
     * labeled alternative in `testParser.forUpdate`.
     * @param ctx the parse tree
     */
    exitForup5?: (ctx: Forup5Context) => void;
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
     * Enter a parse tree produced by the `Strct`
     * labeled alternative in `testParser.functionStruct`.
     * @param ctx the parse tree
     */
    enterStrct?: (ctx: StrctContext) => void;
    /**
     * Exit a parse tree produced by the `Strct`
     * labeled alternative in `testParser.functionStruct`.
     * @param ctx the parse tree
     */
    exitStrct?: (ctx: StrctContext) => void;
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
     * Enter a parse tree produced by the `PowerExprRule`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    enterPowerExprRule?: (ctx: PowerExprRuleContext) => void;
    /**
     * Exit a parse tree produced by the `PowerExprRule`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     */
    exitPowerExprRule?: (ctx: PowerExprRuleContext) => void;
    /**
     * Enter a parse tree produced by the `Power`
     * labeled alternative in `testParser.powerExpr`.
     * @param ctx the parse tree
     */
    enterPower?: (ctx: PowerContext) => void;
    /**
     * Exit a parse tree produced by the `Power`
     * labeled alternative in `testParser.powerExpr`.
     * @param ctx the parse tree
     */
    exitPower?: (ctx: PowerContext) => void;
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
     * Enter a parse tree produced by the `SpecNum`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterSpecNum?: (ctx: SpecNumContext) => void;
    /**
     * Exit a parse tree produced by the `SpecNum`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitSpecNum?: (ctx: SpecNumContext) => void;
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
     * Enter a parse tree produced by the `CharLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    enterCharLiteral?: (ctx: CharLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `CharLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     */
    exitCharLiteral?: (ctx: CharLiteralContext) => void;
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
     * Enter a parse tree produced by the `FId`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    enterFId?: (ctx: FIdContext) => void;
    /**
     * Exit a parse tree produced by the `FId`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     */
    exitFId?: (ctx: FIdContext) => void;
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
     * Enter a parse tree produced by the `Ima`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    enterIma?: (ctx: ImaContext) => void;
    /**
     * Exit a parse tree produced by the `Ima`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    exitIma?: (ctx: ImaContext) => void;
    /**
     * Enter a parse tree produced by the `Pi`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    enterPi?: (ctx: PiContext) => void;
    /**
     * Exit a parse tree produced by the `Pi`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    exitPi?: (ctx: PiContext) => void;
    /**
     * Enter a parse tree produced by the `Nap`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    enterNap?: (ctx: NapContext) => void;
    /**
     * Exit a parse tree produced by the `Nap`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    exitNap?: (ctx: NapContext) => void;
    /**
     * Enter a parse tree produced by the `Bef`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    enterBef?: (ctx: BefContext) => void;
    /**
     * Exit a parse tree produced by the `Bef`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    exitBef?: (ctx: BefContext) => void;
    /**
     * Enter a parse tree produced by the `BefN`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    enterBefN?: (ctx: BefNContext) => void;
    /**
     * Exit a parse tree produced by the `BefN`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     */
    exitBefN?: (ctx: BefNContext) => void;
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
     * Enter a parse tree produced by the `Assign`
     * labeled alternative in `testParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssign?: (ctx: AssignContext) => void;
    /**
     * Exit a parse tree produced by the `Assign`
     * labeled alternative in `testParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssign?: (ctx: AssignContext) => void;
    /**
     * Enter a parse tree produced by the `StructAssign`
     * labeled alternative in `testParser.assignment`.
     * @param ctx the parse tree
     */
    enterStructAssign?: (ctx: StructAssignContext) => void;
    /**
     * Exit a parse tree produced by the `StructAssign`
     * labeled alternative in `testParser.assignment`.
     * @param ctx the parse tree
     */
    exitStructAssign?: (ctx: StructAssignContext) => void;
    /**
     * Enter a parse tree produced by the `ListAssign`
     * labeled alternative in `testParser.assignment`.
     * @param ctx the parse tree
     */
    enterListAssign?: (ctx: ListAssignContext) => void;
    /**
     * Exit a parse tree produced by the `ListAssign`
     * labeled alternative in `testParser.assignment`.
     * @param ctx the parse tree
     */
    exitListAssign?: (ctx: ListAssignContext) => void;
    visitTerminal(node: TerminalNode): void;
    visitErrorNode(node: ErrorNode): void;
    enterEveryRule(node: ParserRuleContext): void;
    exitEveryRule(node: ParserRuleContext): void;
}
