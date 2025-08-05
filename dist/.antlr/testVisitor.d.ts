import { AbstractParseTreeVisitor } from "antlr4ng";
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
import { DefContext } from "./testParser.js";
import { IfContext } from "./testParser.js";
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
import { NoAssignmentContext } from "./testParser.js";
import { AssignContext } from "./testParser.js";
import { StructAssignContext } from "./testParser.js";
import { ListAssignContext } from "./testParser.js";
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
import { PreIncrementContext } from "./testParser.js";
import { PreDecrementContext } from "./testParser.js";
import { PostFixExprContext } from "./testParser.js";
import { PowExprContext } from "./testParser.js";
import { PostFixContext } from "./testParser.js";
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
import { DpLiteralContext } from "./testParser.js";
import { DpContext } from "./testParser.js";
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
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `testParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export declare class testVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `testParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by the `ExprStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStatement?: (ctx: ExprStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `EmptyLineStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyLineStatement?: (ctx: EmptyLineStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `DefinitionStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinitionStatement?: (ctx: DefinitionStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `IfStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ForStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `WhileStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `DoStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoStatement?: (ctx: DoStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ReturnStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `BreakStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ContinueStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `StructStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructStatement?: (ctx: StructStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleStatement`
     * labeled alternative in `testParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleStatement?: (ctx: ModuleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `Def`
     * labeled alternative in `testParser.functionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef?: (ctx: DefContext) => Result;
    /**
     * Visit a parse tree produced by the `If`
     * labeled alternative in `testParser.functionIf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf?: (ctx: IfContext) => Result;
    /**
     * Visit a parse tree produced by the `For`
     * labeled alternative in `testParser.functionFor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor?: (ctx: ForContext) => Result;
    /**
     * Visit a parse tree produced by the `While`
     * labeled alternative in `testParser.functionWhile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhile?: (ctx: WhileContext) => Result;
    /**
     * Visit a parse tree produced by the `Do`
     * labeled alternative in `testParser.functionDo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDo?: (ctx: DoContext) => Result;
    /**
     * Visit a parse tree produced by the `Return`
     * labeled alternative in `testParser.functionReturn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn?: (ctx: ReturnContext) => Result;
    /**
     * Visit a parse tree produced by the `Continue`
     * labeled alternative in `testParser.functionContinue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinue?: (ctx: ContinueContext) => Result;
    /**
     * Visit a parse tree produced by the `Break`
     * labeled alternative in `testParser.functionBreak`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreak?: (ctx: BreakContext) => Result;
    /**
     * Visit a parse tree produced by the `Strct`
     * labeled alternative in `testParser.functionStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrct?: (ctx: StrctContext) => Result;
    /**
     * Visit a parse tree produced by the `Fcall`
     * labeled alternative in `testParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFcall?: (ctx: FcallContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleAssign`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleAssign?: (ctx: ModuleAssignContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleFunction`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleFunction?: (ctx: ModuleFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleStart`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleStart?: (ctx: ModuleStartContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleEnd`
     * labeled alternative in `testParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleEnd?: (ctx: ModuleEndContext) => Result;
    /**
     * Visit a parse tree produced by the `Main`
     * labeled alternative in `testParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain?: (ctx: MainContext) => Result;
    /**
     * Visit a parse tree produced by the `NoAssignment`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNoAssignment?: (ctx: NoAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `Assign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign?: (ctx: AssignContext) => Result;
    /**
     * Visit a parse tree produced by the `StructAssign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructAssign?: (ctx: StructAssignContext) => Result;
    /**
     * Visit a parse tree produced by the `ListAssign`
     * labeled alternative in `testParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListAssign?: (ctx: ListAssignContext) => Result;
    /**
     * Visit a parse tree produced by the `Ternary`
     * labeled alternative in `testParser.ternaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTernary?: (ctx: TernaryContext) => Result;
    /**
     * Visit a parse tree produced by the `QEor`
     * labeled alternative in `testParser.qeOrExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEor?: (ctx: QEorContext) => Result;
    /**
     * Visit a parse tree produced by the `QEand`
     * labeled alternative in `testParser.qeAndExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEand?: (ctx: QEandContext) => Result;
    /**
     * Visit a parse tree produced by the `QECompare`
     * labeled alternative in `testParser.qeCompareExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQECompare?: (ctx: QECompareContext) => Result;
    /**
     * Visit a parse tree produced by the `Or`
     * labeled alternative in `testParser.orExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by the `And`
     * labeled alternative in `testParser.andExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnd?: (ctx: AndContext) => Result;
    /**
     * Visit a parse tree produced by the `Compare`
     * labeled alternative in `testParser.compareExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompare?: (ctx: CompareContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSub`
     * labeled alternative in `testParser.addSubExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSub?: (ctx: AddSubContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDivSur`
     * labeled alternative in `testParser.mulDivSurExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDivSur?: (ctx: MulDivSurContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryMinus`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryMinus?: (ctx: UnaryMinusContext) => Result;
    /**
     * Visit a parse tree produced by the `NotExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExpr?: (ctx: NotExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PreIncrement`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreIncrement?: (ctx: PreIncrementContext) => Result;
    /**
     * Visit a parse tree produced by the `PreDecrement`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreDecrement?: (ctx: PreDecrementContext) => Result;
    /**
     * Visit a parse tree produced by the `PostFixExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostFixExpr?: (ctx: PostFixExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PowExpr`
     * labeled alternative in `testParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowExpr?: (ctx: PowExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PostFix`
     * labeled alternative in `testParser.postfixExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostFix?: (ctx: PostFixContext) => Result;
    /**
     * Visit a parse tree produced by the `Power`
     * labeled alternative in `testParser.powerExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPower?: (ctx: PowerContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexAccess`
     * labeled alternative in `testParser.indexAccessExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexAccess?: (ctx: IndexAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `Real`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReal?: (ctx: RealContext) => Result;
    /**
     * Visit a parse tree produced by the `IdExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdExpr?: (ctx: IdExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FCallExpr`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFCallExpr?: (ctx: FCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Paren`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParen?: (ctx: ParenContext) => Result;
    /**
     * Visit a parse tree produced by the `SpecNum`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecNum?: (ctx: SpecNumContext) => Result;
    /**
     * Visit a parse tree produced by the `StringLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `CharLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharLiteral?: (ctx: CharLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `ListLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListLiteral?: (ctx: ListLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `DpLiteral`
     * labeled alternative in `testParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDpLiteral?: (ctx: DpLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `Dp`
     * labeled alternative in `testParser.dpoly`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDp?: (ctx: DpContext) => Result;
    /**
     * Visit a parse tree produced by the `Rat`
     * labeled alternative in `testParser.rational`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRat?: (ctx: RatContext) => Result;
    /**
     * Visit a parse tree produced by the `Float`
     * labeled alternative in `testParser.decimal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloat?: (ctx: FloatContext) => Result;
    /**
     * Visit a parse tree produced by the `RatNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRatNum?: (ctx: RatNumContext) => Result;
    /**
     * Visit a parse tree produced by the `DecNum`
     * labeled alternative in `testParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecNum?: (ctx: DecNumContext) => Result;
    /**
     * Visit a parse tree produced by the `VId`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVId?: (ctx: VIdContext) => Result;
    /**
     * Visit a parse tree produced by the `FId`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFId?: (ctx: FIdContext) => Result;
    /**
     * Visit a parse tree produced by the `V2Id`
     * labeled alternative in `testParser.id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitV2Id?: (ctx: V2IdContext) => Result;
    /**
     * Visit a parse tree produced by the `Ima`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIma?: (ctx: ImaContext) => Result;
    /**
     * Visit a parse tree produced by the `Pi`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPi?: (ctx: PiContext) => Result;
    /**
     * Visit a parse tree produced by the `Nap`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNap?: (ctx: NapContext) => Result;
    /**
     * Visit a parse tree produced by the `Bef`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBef?: (ctx: BefContext) => Result;
    /**
     * Visit a parse tree produced by the `BefN`
     * labeled alternative in `testParser.specialnum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBefN?: (ctx: BefNContext) => Result;
    /**
     * Visit a parse tree produced by the `ListExpr`
     * labeled alternative in `testParser.list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListExpr?: (ctx: ListExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Sentence`
     * labeled alternative in `testParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSentence?: (ctx: SentenceContext) => Result;
    /**
     * Visit a parse tree produced by the `Sentence1`
     * labeled alternative in `testParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSentence1?: (ctx: Sentence1Context) => Result;
}
