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
import { DottedAllowedIdContext } from "./asirParser.js";
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
     * Enter a parse tree produced by the `EndStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterEndStatement?: (ctx: EndStatementContext) => void;
    /**
     * Exit a parse tree produced by the `EndStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitEndStatement?: (ctx: EndStatementContext) => void;
    /**
     * Enter a parse tree produced by the `QuitStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterQuitStatement?: (ctx: QuitStatementContext) => void;
    /**
     * Exit a parse tree produced by the `QuitStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitQuitStatement?: (ctx: QuitStatementContext) => void;
    /**
     * Enter a parse tree produced by the `DebugStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    enterDebugStatement?: (ctx: DebugStatementContext) => void;
    /**
     * Exit a parse tree produced by the `DebugStatement`
     * labeled alternative in `asirParser.statement`.
     * @param ctx the parse tree
     */
    exitDebugStatement?: (ctx: DebugStatementContext) => void;
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
     * Enter a parse tree produced by the `End`
     * labeled alternative in `asirParser.functionEnd`.
     * @param ctx the parse tree
     */
    enterEnd?: (ctx: EndContext) => void;
    /**
     * Exit a parse tree produced by the `End`
     * labeled alternative in `asirParser.functionEnd`.
     * @param ctx the parse tree
     */
    exitEnd?: (ctx: EndContext) => void;
    /**
     * Enter a parse tree produced by the `Quit`
     * labeled alternative in `asirParser.functionQuit`.
     * @param ctx the parse tree
     */
    enterQuit?: (ctx: QuitContext) => void;
    /**
     * Exit a parse tree produced by the `Quit`
     * labeled alternative in `asirParser.functionQuit`.
     * @param ctx the parse tree
     */
    exitQuit?: (ctx: QuitContext) => void;
    /**
     * Enter a parse tree produced by the `Debug`
     * labeled alternative in `asirParser.functionDebug`.
     * @param ctx the parse tree
     */
    enterDebug?: (ctx: DebugContext) => void;
    /**
     * Exit a parse tree produced by the `Debug`
     * labeled alternative in `asirParser.functionDebug`.
     * @param ctx the parse tree
     */
    exitDebug?: (ctx: DebugContext) => void;
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
     * Enter a parse tree produced by the `AndExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterAndExpr?: (ctx: AndExprContext) => void;
    /**
     * Exit a parse tree produced by the `AndExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitAndExpr?: (ctx: AndExprContext) => void;
    /**
     * Enter a parse tree produced by the `IndexAccessExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterIndexAccessExpr?: (ctx: IndexAccessExprContext) => void;
    /**
     * Exit a parse tree produced by the `IndexAccessExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitIndexAccessExpr?: (ctx: IndexAccessExprContext) => void;
    /**
     * Enter a parse tree produced by the `DottedIdExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterDottedIdExpr?: (ctx: DottedIdExprContext) => void;
    /**
     * Exit a parse tree produced by the `DottedIdExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitDottedIdExpr?: (ctx: DottedIdExprContext) => void;
    /**
     * Enter a parse tree produced by the `PreFixExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterPreFixExpr?: (ctx: PreFixExprContext) => void;
    /**
     * Exit a parse tree produced by the `PreFixExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitPreFixExpr?: (ctx: PreFixExprContext) => void;
    /**
     * Enter a parse tree produced by the `StringLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterStringLiteralExpr?: (ctx: StringLiteralExprContext) => void;
    /**
     * Exit a parse tree produced by the `StringLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitStringLiteralExpr?: (ctx: StringLiteralExprContext) => void;
    /**
     * Enter a parse tree produced by the `UnaryNotExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterUnaryNotExpr?: (ctx: UnaryNotExprContext) => void;
    /**
     * Exit a parse tree produced by the `UnaryNotExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitUnaryNotExpr?: (ctx: UnaryNotExprContext) => void;
    /**
     * Enter a parse tree produced by the `RelationalExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterRelationalExpr?: (ctx: RelationalExprContext) => void;
    /**
     * Exit a parse tree produced by the `RelationalExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitRelationalExpr?: (ctx: RelationalExprContext) => void;
    /**
     * Enter a parse tree produced by the `AssignExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterAssignExpr?: (ctx: AssignExprContext) => void;
    /**
     * Exit a parse tree produced by the `AssignExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitAssignExpr?: (ctx: AssignExprContext) => void;
    /**
     * Enter a parse tree produced by the `FactorialExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterFactorialExpr?: (ctx: FactorialExprContext) => void;
    /**
     * Exit a parse tree produced by the `FactorialExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitFactorialExpr?: (ctx: FactorialExprContext) => void;
    /**
     * Enter a parse tree produced by the `ListLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterListLiteralExpr?: (ctx: ListLiteralExprContext) => void;
    /**
     * Exit a parse tree produced by the `ListLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitListLiteralExpr?: (ctx: ListLiteralExprContext) => void;
    /**
     * Enter a parse tree produced by the `PrecharExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterPrecharExpr?: (ctx: PrecharExprContext) => void;
    /**
     * Exit a parse tree produced by the `PrecharExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitPrecharExpr?: (ctx: PrecharExprContext) => void;
    /**
     * Enter a parse tree produced by the `QENotExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterQENotExpr?: (ctx: QENotExprContext) => void;
    /**
     * Exit a parse tree produced by the `QENotExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitQENotExpr?: (ctx: QENotExprContext) => void;
    /**
     * Enter a parse tree produced by the `VarExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterVarExpr?: (ctx: VarExprContext) => void;
    /**
     * Exit a parse tree produced by the `VarExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitVarExpr?: (ctx: VarExprContext) => void;
    /**
     * Enter a parse tree produced by the `FCallExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterFCallExpr?: (ctx: FCallExprContext) => void;
    /**
     * Exit a parse tree produced by the `FCallExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitFCallExpr?: (ctx: FCallExprContext) => void;
    /**
     * Enter a parse tree produced by the `QEAndExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterQEAndExpr?: (ctx: QEAndExprContext) => void;
    /**
     * Exit a parse tree produced by the `QEAndExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitQEAndExpr?: (ctx: QEAndExprContext) => void;
    /**
     * Enter a parse tree produced by the `FunctorCallExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterFunctorCallExpr?: (ctx: FunctorCallExprContext) => void;
    /**
     * Exit a parse tree produced by the `FunctorCallExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitFunctorCallExpr?: (ctx: FunctorCallExprContext) => void;
    /**
     * Enter a parse tree produced by the `TernaryExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterTernaryExpr?: (ctx: TernaryExprContext) => void;
    /**
     * Exit a parse tree produced by the `TernaryExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitTernaryExpr?: (ctx: TernaryExprContext) => void;
    /**
     * Enter a parse tree produced by the `QECompareExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterQECompareExpr?: (ctx: QECompareExprContext) => void;
    /**
     * Exit a parse tree produced by the `QECompareExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitQECompareExpr?: (ctx: QECompareExprContext) => void;
    /**
     * Enter a parse tree produced by the `IdLiteral`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterIdLiteral?: (ctx: IdLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `IdLiteral`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitIdLiteral?: (ctx: IdLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `UnarySignExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterUnarySignExpr?: (ctx: UnarySignExprContext) => void;
    /**
     * Exit a parse tree produced by the `UnarySignExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitUnarySignExpr?: (ctx: UnarySignExprContext) => void;
    /**
     * Enter a parse tree produced by the `OrExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterOrExpr?: (ctx: OrExprContext) => void;
    /**
     * Exit a parse tree produced by the `OrExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitOrExpr?: (ctx: OrExprContext) => void;
    /**
     * Enter a parse tree produced by the `QEOrExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterQEOrExpr?: (ctx: QEOrExprContext) => void;
    /**
     * Exit a parse tree produced by the `QEOrExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitQEOrExpr?: (ctx: QEOrExprContext) => void;
    /**
     * Enter a parse tree produced by the `PowerExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterPowerExpr?: (ctx: PowerExprContext) => void;
    /**
     * Exit a parse tree produced by the `PowerExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitPowerExpr?: (ctx: PowerExprContext) => void;
    /**
     * Enter a parse tree produced by the `QEImplExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterQEImplExpr?: (ctx: QEImplExprContext) => void;
    /**
     * Exit a parse tree produced by the `QEImplExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitQEImplExpr?: (ctx: QEImplExprContext) => void;
    /**
     * Enter a parse tree produced by the `DpolyLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterDpolyLiteralExpr?: (ctx: DpolyLiteralExprContext) => void;
    /**
     * Exit a parse tree produced by the `DpolyLiteralExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitDpolyLiteralExpr?: (ctx: DpolyLiteralExprContext) => void;
    /**
     * Enter a parse tree produced by the `QuoteExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterQuoteExpr?: (ctx: QuoteExprContext) => void;
    /**
     * Exit a parse tree produced by the `QuoteExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitQuoteExpr?: (ctx: QuoteExprContext) => void;
    /**
     * Enter a parse tree produced by the `PostFixExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterPostFixExpr?: (ctx: PostFixExprContext) => void;
    /**
     * Exit a parse tree produced by the `PostFixExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitPostFixExpr?: (ctx: PostFixExprContext) => void;
    /**
     * Enter a parse tree produced by the `ParenExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterParenExpr?: (ctx: ParenExprContext) => void;
    /**
     * Exit a parse tree produced by the `ParenExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitParenExpr?: (ctx: ParenExprContext) => void;
    /**
     * Enter a parse tree produced by the `MemberAccessExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterMemberAccessExpr?: (ctx: MemberAccessExprContext) => void;
    /**
     * Exit a parse tree produced by the `MemberAccessExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitMemberAccessExpr?: (ctx: MemberAccessExprContext) => void;
    /**
     * Enter a parse tree produced by the `AddSubExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterAddSubExpr?: (ctx: AddSubExprContext) => void;
    /**
     * Exit a parse tree produced by the `AddSubExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitAddSubExpr?: (ctx: AddSubExprContext) => void;
    /**
     * Enter a parse tree produced by the `NumberLiteral`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `NumberLiteral`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitNumberLiteral?: (ctx: NumberLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `MulDivSurExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    enterMulDivSurExpr?: (ctx: MulDivSurExprContext) => void;
    /**
     * Exit a parse tree produced by the `MulDivSurExpr`
     * labeled alternative in `asirParser.expr`.
     * @param ctx the parse tree
     */
    exitMulDivSurExpr?: (ctx: MulDivSurExprContext) => void;
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
     * Enter a parse tree produced by `asirParser.dottedAllowedId`.
     * @param ctx the parse tree
     */
    enterDottedAllowedId?: (ctx: DottedAllowedIdContext) => void;
    /**
     * Exit a parse tree produced by `asirParser.dottedAllowedId`.
     * @param ctx the parse tree
     */
    exitDottedAllowedId?: (ctx: DottedAllowedIdContext) => void;
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
     * Enter a parse tree produced by the `AsGenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterAsGenNum?: (ctx: AsGenNumContext) => void;
    /**
     * Exit a parse tree produced by the `AsGenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitAsGenNum?: (ctx: AsGenNumContext) => void;
    /**
     * Enter a parse tree produced by the `ApGenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    enterApGenNum?: (ctx: ApGenNumContext) => void;
    /**
     * Exit a parse tree produced by the `ApGenNum`
     * labeled alternative in `asirParser.num`.
     * @param ctx the parse tree
     */
    exitApGenNum?: (ctx: ApGenNumContext) => void;
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

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

