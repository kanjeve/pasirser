// Generated from /home/kanji/risaproject/pasirser/asir.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `asirParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class asirVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `asirParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by the `ExprStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStatement?: (ctx: ExprStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `EmptyLineStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyLineStatement?: (ctx: EmptyLineStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `DefinitionStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinitionStatement?: (ctx: DefinitionStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ForwardDeclStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForwardDeclStatement?: (ctx: ForwardDeclStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `IfStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ForStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `WhileStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `DoStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoStatement?: (ctx: DoStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ReturnStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `BreakStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ContinueStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `StructStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructStatement?: (ctx: StructStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleStatement?: (ctx: ModuleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `PreproStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproStatement?: (ctx: PreproStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `PreChr`
     * labeled alternative in `asirParser.prechar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreChr?: (ctx: PreChrContext) => Result;
    /**
     * Visit a parse tree produced by the `PreChrPlus`
     * labeled alternative in `asirParser.prechar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreChrPlus?: (ctx: PreChrPlusContext) => Result;
    /**
     * Visit a parse tree produced by the `PDef`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPDef?: (ctx: PDefContext) => Result;
    /**
     * Visit a parse tree produced by the `PIf`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPIf?: (ctx: PIfContext) => Result;
    /**
     * Visit a parse tree produced by the `PInc`
     * labeled alternative in `asirParser.preprocessor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPInc?: (ctx: PIncContext) => Result;
    /**
     * Visit a parse tree produced by the `Def`
     * labeled alternative in `asirParser.functionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef?: (ctx: DefContext) => Result;
    /**
     * Visit a parse tree produced by the `FormDecl`
     * labeled alternative in `asirParser.formDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormDecl?: (ctx: FormDeclContext) => Result;
    /**
     * Visit a parse tree produced by the `If`
     * labeled alternative in `asirParser.functionIf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf?: (ctx: IfContext) => Result;
    /**
     * Visit a parse tree produced by the `For`
     * labeled alternative in `asirParser.functionFor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor?: (ctx: ForContext) => Result;
    /**
     * Visit a parse tree produced by the `While`
     * labeled alternative in `asirParser.functionWhile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhile?: (ctx: WhileContext) => Result;
    /**
     * Visit a parse tree produced by the `Do`
     * labeled alternative in `asirParser.functionDo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDo?: (ctx: DoContext) => Result;
    /**
     * Visit a parse tree produced by the `Return`
     * labeled alternative in `asirParser.functionReturn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn?: (ctx: ReturnContext) => Result;
    /**
     * Visit a parse tree produced by the `Continue`
     * labeled alternative in `asirParser.functionContinue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinue?: (ctx: ContinueContext) => Result;
    /**
     * Visit a parse tree produced by the `Break`
     * labeled alternative in `asirParser.functionBreak`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreak?: (ctx: BreakContext) => Result;
    /**
     * Visit a parse tree produced by the `Struct`
     * labeled alternative in `asirParser.functionStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStruct?: (ctx: StructContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleAssign`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleAssign?: (ctx: ModuleAssignContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleStart`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleStart?: (ctx: ModuleStartContext) => Result;
    /**
     * Visit a parse tree produced by the `ModuleEnd`
     * labeled alternative in `asirParser.functionModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleEnd?: (ctx: ModuleEndContext) => Result;
    /**
     * Visit a parse tree produced by the `Main`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMain?: (ctx: MainContext) => Result;
    /**
     * Visit a parse tree produced by the `NoAssignment`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNoAssignment?: (ctx: NoAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `Assign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign?: (ctx: AssignContext) => Result;
    /**
     * Visit a parse tree produced by the `StructAssign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructAssign?: (ctx: StructAssignContext) => Result;
    /**
     * Visit a parse tree produced by the `ListAssign`
     * labeled alternative in `asirParser.assignmentExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListAssign?: (ctx: ListAssignContext) => Result;
    /**
     * Visit a parse tree produced by the `Ternary`
     * labeled alternative in `asirParser.ternaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTernary?: (ctx: TernaryContext) => Result;
    /**
     * Visit a parse tree produced by the `Quote`
     * labeled alternative in `asirParser.quoteExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuote?: (ctx: QuoteContext) => Result;
    /**
     * Visit a parse tree produced by the `QEImpl`
     * labeled alternative in `asirParser.qeImplExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEImpl?: (ctx: QEImplContext) => Result;
    /**
     * Visit a parse tree produced by the `QEnot`
     * labeled alternative in `asirParser.qeNotExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEnot?: (ctx: QEnotContext) => Result;
    /**
     * Visit a parse tree produced by the `QEor`
     * labeled alternative in `asirParser.qeOrExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEor?: (ctx: QEorContext) => Result;
    /**
     * Visit a parse tree produced by the `QEand`
     * labeled alternative in `asirParser.qeAndExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEand?: (ctx: QEandContext) => Result;
    /**
     * Visit a parse tree produced by the `QECompare`
     * labeled alternative in `asirParser.qeCompareExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQECompare?: (ctx: QECompareContext) => Result;
    /**
     * Visit a parse tree produced by the `Or`
     * labeled alternative in `asirParser.orExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by the `And`
     * labeled alternative in `asirParser.andExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnd?: (ctx: AndContext) => Result;
    /**
     * Visit a parse tree produced by the `Compare`
     * labeled alternative in `asirParser.compareExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompare?: (ctx: CompareContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSub`
     * labeled alternative in `asirParser.addSubExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSub?: (ctx: AddSubContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDivSur`
     * labeled alternative in `asirParser.mulDivSurExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDivSur?: (ctx: MulDivSurContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryMinus`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryMinus?: (ctx: UnaryMinusContext) => Result;
    /**
     * Visit a parse tree produced by the `NotExpr`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotExpr?: (ctx: NotExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PowExpr`
     * labeled alternative in `asirParser.unaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowExpr?: (ctx: PowExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PowEx`
     * labeled alternative in `asirParser.powerExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowEx?: (ctx: PowExContext) => Result;
    /**
     * Visit a parse tree produced by the `FactorialExpr`
     * labeled alternative in `asirParser.factExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactorialExpr?: (ctx: FactorialExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PreFix`
     * labeled alternative in `asirParser.prefixExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreFix?: (ctx: PreFixContext) => Result;
    /**
     * Visit a parse tree produced by the `PostFix`
     * labeled alternative in `asirParser.postfixExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostFix?: (ctx: PostFixContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexAccess`
     * labeled alternative in `asirParser.indexAccessExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexAccess?: (ctx: IndexAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `MemberAccess`
     * labeled alternative in `asirParser.memberAccessExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberAccess?: (ctx: MemberAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `IndExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndExpr?: (ctx: IndExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Real`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReal?: (ctx: RealContext) => Result;
    /**
     * Visit a parse tree produced by the `IdExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdExpr?: (ctx: IdExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FCallExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFCallExpr?: (ctx: FCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctorCallExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctorCallExpr?: (ctx: FunctorCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Paren`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParen?: (ctx: ParenContext) => Result;
    /**
     * Visit a parse tree produced by the `StringLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `ListLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListLiteral?: (ctx: ListLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `DpLiteral`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDpLiteral?: (ctx: DpLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `PreChrExpr`
     * labeled alternative in `asirParser.primaryExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreChrExpr?: (ctx: PreChrExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Dp`
     * labeled alternative in `asirParser.dpoly`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDp?: (ctx: DpContext) => Result;
    /**
     * Visit a parse tree produced by the `Rat`
     * labeled alternative in `asirParser.rational`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRat?: (ctx: RatContext) => Result;
    /**
     * Visit a parse tree produced by the `Float`
     * labeled alternative in `asirParser.decimal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloat?: (ctx: FloatContext) => Result;
    /**
     * Visit a parse tree produced by the `HexNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHexNum?: (ctx: HexNumContext) => Result;
    /**
     * Visit a parse tree produced by the `BitNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitNum?: (ctx: BitNumContext) => Result;
    /**
     * Visit a parse tree produced by the `RatNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRatNum?: (ctx: RatNumContext) => Result;
    /**
     * Visit a parse tree produced by the `DecNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecNum?: (ctx: DecNumContext) => Result;
    /**
     * Visit a parse tree produced by the `ImaNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImaNum?: (ctx: ImaNumContext) => Result;
    /**
     * Visit a parse tree produced by the `GenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenNum?: (ctx: GenNumContext) => Result;
    /**
     * Visit a parse tree produced by the `Bef`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBef?: (ctx: BefContext) => Result;
    /**
     * Visit a parse tree produced by the `BefN`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBefN?: (ctx: BefNContext) => Result;
    /**
     * Visit a parse tree produced by the `V2Id`
     * labeled alternative in `asirParser.id`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitV2Id?: (ctx: V2IdContext) => Result;
    /**
     * Visit a parse tree produced by the `Func`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc?: (ctx: FuncContext) => Result;
    /**
     * Visit a parse tree produced by the `AtFunc`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtFunc?: (ctx: AtFuncContext) => Result;
    /**
     * Visit a parse tree produced by the `ChFunc`
     * labeled alternative in `asirParser.indeterminate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChFunc?: (ctx: ChFuncContext) => Result;
    /**
     * Visit a parse tree produced by the `ListExpr`
     * labeled alternative in `asirParser.list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListExpr?: (ctx: ListExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Sentence`
     * labeled alternative in `asirParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSentence?: (ctx: SentenceContext) => Result;
    /**
     * Visit a parse tree produced by the `Sentence1`
     * labeled alternative in `asirParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSentence1?: (ctx: Sentence1Context) => Result;
    /**
     * Visit a parse tree produced by `asirParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.dottedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDottedIdentifier?: (ctx: DottedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.exprlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprlist?: (ctx: ExprlistContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.terminator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTerminator?: (ctx: TerminatorContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.systemPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystemPath?: (ctx: SystemPathContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.elifClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElifClause?: (ctx: ElifClauseContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.elseClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseClause?: (ctx: ElseClauseContext) => Result;
    /**
     * Visit a parse tree produced by `asirParser.optionPair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionPair?: (ctx: OptionPairContext) => Result;
}

