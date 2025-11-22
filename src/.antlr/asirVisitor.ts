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
import { EndStatementContext } from "./asirParser.js";
import { QuitStatementContext } from "./asirParser.js";
import { DebugStatementContext } from "./asirParser.js";
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
import { EndContext } from "./asirParser.js";
import { QuitContext } from "./asirParser.js";
import { DebugContext } from "./asirParser.js";
import { ModuleAssignContext } from "./asirParser.js";
import { ModuleStartContext } from "./asirParser.js";
import { ModuleEndContext } from "./asirParser.js";
import { AndExprContext } from "./asirParser.js";
import { IndexAccessExprContext } from "./asirParser.js";
import { DottedIdExprContext } from "./asirParser.js";
import { PreFixExprContext } from "./asirParser.js";
import { StringLiteralExprContext } from "./asirParser.js";
import { UnaryNotExprContext } from "./asirParser.js";
import { RelationalExprContext } from "./asirParser.js";
import { AssignExprContext } from "./asirParser.js";
import { FactorialExprContext } from "./asirParser.js";
import { ListLiteralExprContext } from "./asirParser.js";
import { PrecharExprContext } from "./asirParser.js";
import { QENotExprContext } from "./asirParser.js";
import { VarExprContext } from "./asirParser.js";
import { FCallExprContext } from "./asirParser.js";
import { QEAndExprContext } from "./asirParser.js";
import { FunctorCallExprContext } from "./asirParser.js";
import { TernaryExprContext } from "./asirParser.js";
import { QECompareExprContext } from "./asirParser.js";
import { IdLiteralContext } from "./asirParser.js";
import { UnarySignExprContext } from "./asirParser.js";
import { OrExprContext } from "./asirParser.js";
import { QEOrExprContext } from "./asirParser.js";
import { PowerExprContext } from "./asirParser.js";
import { QEImplExprContext } from "./asirParser.js";
import { DpolyLiteralExprContext } from "./asirParser.js";
import { QuoteExprContext } from "./asirParser.js";
import { PostFixExprContext } from "./asirParser.js";
import { ParenExprContext } from "./asirParser.js";
import { MemberAccessExprContext } from "./asirParser.js";
import { AddSubExprContext } from "./asirParser.js";
import { NumberLiteralContext } from "./asirParser.js";
import { MulDivSurExprContext } from "./asirParser.js";
import { QualifiedNameContext } from "./asirParser.js";
import { DottedIdentifierContext } from "./asirParser.js";
import { ExprlistContext } from "./asirParser.js";
import { TerminatorContext } from "./asirParser.js";
import { SystemPathContext } from "./asirParser.js";
import { ElifClauseContext } from "./asirParser.js";
import { ElseClauseContext } from "./asirParser.js";
import { OptionPairContext } from "./asirParser.js";
import { DpContext } from "./asirParser.js";
import { RatContext } from "./asirParser.js";
import { FloatContext } from "./asirParser.js";
import { HexNumContext } from "./asirParser.js";
import { BitNumContext } from "./asirParser.js";
import { RatNumContext } from "./asirParser.js";
import { DecNumContext } from "./asirParser.js";
import { ImaNumContext } from "./asirParser.js";
import { AsGenNumContext } from "./asirParser.js";
import { ApGenNumContext } from "./asirParser.js";
import { BefContext } from "./asirParser.js";
import { BefNContext } from "./asirParser.js";
import { V2IdContext } from "./asirParser.js";
import { FuncContext } from "./asirParser.js";
import { AtFuncContext } from "./asirParser.js";
import { ChFuncContext } from "./asirParser.js";
import { ListExprContext } from "./asirParser.js";
import { SentenceContext } from "./asirParser.js";
import { Sentence1Context } from "./asirParser.js";


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
     * Visit a parse tree produced by the `EndStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndStatement?: (ctx: EndStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `QuitStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuitStatement?: (ctx: QuitStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `DebugStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDebugStatement?: (ctx: DebugStatementContext) => Result;
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
     * Visit a parse tree produced by the `End`
     * labeled alternative in `asirParser.functionEnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnd?: (ctx: EndContext) => Result;
    /**
     * Visit a parse tree produced by the `Quit`
     * labeled alternative in `asirParser.functionQuit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuit?: (ctx: QuitContext) => Result;
    /**
     * Visit a parse tree produced by the `Debug`
     * labeled alternative in `asirParser.functionDebug`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDebug?: (ctx: DebugContext) => Result;
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
     * Visit a parse tree produced by the `AndExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndExpr?: (ctx: AndExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexAccessExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexAccessExpr?: (ctx: IndexAccessExprContext) => Result;
    /**
     * Visit a parse tree produced by the `DottedIdExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDottedIdExpr?: (ctx: DottedIdExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PreFixExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreFixExpr?: (ctx: PreFixExprContext) => Result;
    /**
     * Visit a parse tree produced by the `StringLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteralExpr?: (ctx: StringLiteralExprContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryNotExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryNotExpr?: (ctx: UnaryNotExprContext) => Result;
    /**
     * Visit a parse tree produced by the `RelationalExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationalExpr?: (ctx: RelationalExprContext) => Result;
    /**
     * Visit a parse tree produced by the `AssignExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignExpr?: (ctx: AssignExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FactorialExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactorialExpr?: (ctx: FactorialExprContext) => Result;
    /**
     * Visit a parse tree produced by the `ListLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListLiteralExpr?: (ctx: ListLiteralExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PrecharExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrecharExpr?: (ctx: PrecharExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QENotExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQENotExpr?: (ctx: QENotExprContext) => Result;
    /**
     * Visit a parse tree produced by the `VarExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarExpr?: (ctx: VarExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FCallExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFCallExpr?: (ctx: FCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QEAndExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEAndExpr?: (ctx: QEAndExprContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctorCallExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctorCallExpr?: (ctx: FunctorCallExprContext) => Result;
    /**
     * Visit a parse tree produced by the `TernaryExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTernaryExpr?: (ctx: TernaryExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QECompareExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQECompareExpr?: (ctx: QECompareExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IdLiteral`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdLiteral?: (ctx: IdLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `UnarySignExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnarySignExpr?: (ctx: UnarySignExprContext) => Result;
    /**
     * Visit a parse tree produced by the `OrExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrExpr?: (ctx: OrExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QEOrExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEOrExpr?: (ctx: QEOrExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PowerExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowerExpr?: (ctx: PowerExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QEImplExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQEImplExpr?: (ctx: QEImplExprContext) => Result;
    /**
     * Visit a parse tree produced by the `DpolyLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDpolyLiteralExpr?: (ctx: DpolyLiteralExprContext) => Result;
    /**
     * Visit a parse tree produced by the `QuoteExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuoteExpr?: (ctx: QuoteExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PostFixExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostFixExpr?: (ctx: PostFixExprContext) => Result;
    /**
     * Visit a parse tree produced by the `ParenExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenExpr?: (ctx: ParenExprContext) => Result;
    /**
     * Visit a parse tree produced by the `MemberAccessExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberAccessExpr?: (ctx: MemberAccessExprContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSubExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSubExpr?: (ctx: AddSubExprContext) => Result;
    /**
     * Visit a parse tree produced by the `NumberLiteral`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDivSurExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDivSurExpr?: (ctx: MulDivSurExprContext) => Result;
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
     * Visit a parse tree produced by the `AsGenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsGenNum?: (ctx: AsGenNumContext) => Result;
    /**
     * Visit a parse tree produced by the `ApGenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApGenNum?: (ctx: ApGenNumContext) => Result;
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
}

