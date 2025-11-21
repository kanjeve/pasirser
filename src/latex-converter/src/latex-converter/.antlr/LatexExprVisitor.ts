// Generated from /home/kanji/risaproject/pasirser/src/latex-converter/LatexExpr.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./LatexExprParser.js";
import { AssignStmtContext } from "./LatexExprParser.js";
import { ExprStmtContext } from "./LatexExprParser.js";
import { AssignStatementContext } from "./LatexExprParser.js";
import { PowerExprContext } from "./LatexExprParser.js";
import { MulDivExprContext } from "./LatexExprParser.js";
import { PrimaryExprContext } from "./LatexExprParser.js";
import { UnaryExprContext } from "./LatexExprParser.js";
import { AddSubExprContext } from "./LatexExprParser.js";
import { ImplicitMultExprContext } from "./LatexExprParser.js";
import { PrimaryContext } from "./LatexExprParser.js";
import { FracCommandContext } from "./LatexExprParser.js";
import { GreekCommandContext } from "./LatexExprParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LatexExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class LatexExprVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `LatexExprParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by the `AssignStmt`
     * labeled alternative in `LatexExprParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignStmt?: (ctx: AssignStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `ExprStmt`
     * labeled alternative in `LatexExprParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by `LatexExprParser.assignStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignStatement?: (ctx: AssignStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `PowerExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowerExpr?: (ctx: PowerExprContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDivExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDivExpr?: (ctx: MulDivExprContext) => Result;
    /**
     * Visit a parse tree produced by the `PrimaryExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpr?: (ctx: UnaryExprContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSubExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSubExpr?: (ctx: AddSubExprContext) => Result;
    /**
     * Visit a parse tree produced by the `ImplicitMultExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplicitMultExpr?: (ctx: ImplicitMultExprContext) => Result;
    /**
     * Visit a parse tree produced by `LatexExprParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by the `FracCommand`
     * labeled alternative in `LatexExprParser.command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFracCommand?: (ctx: FracCommandContext) => Result;
    /**
     * Visit a parse tree produced by the `GreekCommand`
     * labeled alternative in `LatexExprParser.command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreekCommand?: (ctx: GreekCommandContext) => Result;
}

