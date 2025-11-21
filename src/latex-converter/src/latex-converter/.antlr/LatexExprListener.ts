// Generated from /home/kanji/risaproject/pasirser/src/latex-converter/LatexExpr.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `LatexExprParser`.
 */
export class LatexExprListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `LatexExprParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `LatexExprParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by the `AssignStmt`
     * labeled alternative in `LatexExprParser.statement`.
     * @param ctx the parse tree
     */
    enterAssignStmt?: (ctx: AssignStmtContext) => void;
    /**
     * Exit a parse tree produced by the `AssignStmt`
     * labeled alternative in `LatexExprParser.statement`.
     * @param ctx the parse tree
     */
    exitAssignStmt?: (ctx: AssignStmtContext) => void;
    /**
     * Enter a parse tree produced by the `ExprStmt`
     * labeled alternative in `LatexExprParser.statement`.
     * @param ctx the parse tree
     */
    enterExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Exit a parse tree produced by the `ExprStmt`
     * labeled alternative in `LatexExprParser.statement`.
     * @param ctx the parse tree
     */
    exitExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Enter a parse tree produced by `LatexExprParser.assignStatement`.
     * @param ctx the parse tree
     */
    enterAssignStatement?: (ctx: AssignStatementContext) => void;
    /**
     * Exit a parse tree produced by `LatexExprParser.assignStatement`.
     * @param ctx the parse tree
     */
    exitAssignStatement?: (ctx: AssignStatementContext) => void;
    /**
     * Enter a parse tree produced by the `PowerExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    enterPowerExpr?: (ctx: PowerExprContext) => void;
    /**
     * Exit a parse tree produced by the `PowerExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    exitPowerExpr?: (ctx: PowerExprContext) => void;
    /**
     * Enter a parse tree produced by the `MulDivExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    enterMulDivExpr?: (ctx: MulDivExprContext) => void;
    /**
     * Exit a parse tree produced by the `MulDivExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    exitMulDivExpr?: (ctx: MulDivExprContext) => void;
    /**
     * Enter a parse tree produced by the `PrimaryExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
    /**
     * Exit a parse tree produced by the `PrimaryExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;
    /**
     * Enter a parse tree produced by the `UnaryExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    enterUnaryExpr?: (ctx: UnaryExprContext) => void;
    /**
     * Exit a parse tree produced by the `UnaryExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    exitUnaryExpr?: (ctx: UnaryExprContext) => void;
    /**
     * Enter a parse tree produced by the `AddSubExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    enterAddSubExpr?: (ctx: AddSubExprContext) => void;
    /**
     * Exit a parse tree produced by the `AddSubExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    exitAddSubExpr?: (ctx: AddSubExprContext) => void;
    /**
     * Enter a parse tree produced by the `ImplicitMultExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    enterImplicitMultExpr?: (ctx: ImplicitMultExprContext) => void;
    /**
     * Exit a parse tree produced by the `ImplicitMultExpr`
     * labeled alternative in `LatexExprParser.expr`.
     * @param ctx the parse tree
     */
    exitImplicitMultExpr?: (ctx: ImplicitMultExprContext) => void;
    /**
     * Enter a parse tree produced by `LatexExprParser.primary`.
     * @param ctx the parse tree
     */
    enterPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Exit a parse tree produced by `LatexExprParser.primary`.
     * @param ctx the parse tree
     */
    exitPrimary?: (ctx: PrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `FracCommand`
     * labeled alternative in `LatexExprParser.command`.
     * @param ctx the parse tree
     */
    enterFracCommand?: (ctx: FracCommandContext) => void;
    /**
     * Exit a parse tree produced by the `FracCommand`
     * labeled alternative in `LatexExprParser.command`.
     * @param ctx the parse tree
     */
    exitFracCommand?: (ctx: FracCommandContext) => void;
    /**
     * Enter a parse tree produced by the `GreekCommand`
     * labeled alternative in `LatexExprParser.command`.
     * @param ctx the parse tree
     */
    enterGreekCommand?: (ctx: GreekCommandContext) => void;
    /**
     * Exit a parse tree produced by the `GreekCommand`
     * labeled alternative in `LatexExprParser.command`.
     * @param ctx the parse tree
     */
    exitGreekCommand?: (ctx: GreekCommandContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

