import { Token, ParserRuleContext, TerminalNode, AbstractParseTreeVisitor } from 'antlr4ng';

import { testVisitor } from './.antlr/testVisitor.js';
import * as ast from './testAst.js'
import { ASTBuilderError, getLoc } from './errors.js';
import { FactExprContext, testParser } from './.antlr/testParser.js';

// Import all context types
import { ProgContext } from "./.antlr/testParser.js";
import { ExprStatementContext } from "./.antlr/testParser.js";
import { EmptyLineStatementContext } from "./.antlr/testParser.js";
import { DefinitionStatementContext } from "./.antlr/testParser.js";
import { IfStatementContext } from "./.antlr/testParser.js";
import { ForStatementContext } from "./.antlr/testParser.js";
import { WhileStatementContext } from "./.antlr/testParser.js";
import { DoStatementContext } from "./.antlr/testParser.js";
import { ReturnStatementContext } from "./.antlr/testParser.js";
import { BreakStatementContext } from "./.antlr/testParser.js";
import { ContinueStatementContext } from "./.antlr/testParser.js";
import { StructStatementContext } from "./.antlr/testParser.js";
import { ModuleStatementContext } from "./.antlr/testParser.js";
import { PreproStatementContext } from "./.antlr/testParser.js";
import { PreChrContext } from "./.antlr/testParser.js";
import { PreChrPlusContext } from "./.antlr/testParser.js";
import { PDefContext } from "./.antlr/testParser.js";
import { PIfContext } from "./.antlr/testParser.js";
import { PIncContext } from "./.antlr/testParser.js";
import { DefContext } from "./.antlr/testParser.js";
import { IfContext } from "./.antlr/testParser.js";
import { ForContext } from "./.antlr/testParser.js";
import { WhileContext } from "./.antlr/testParser.js";
import { DoContext } from "./.antlr/testParser.js";
import { ReturnContext } from "./.antlr/testParser.js";
import { ContinueContext } from "./.antlr/testParser.js";
import { BreakContext } from "./.antlr/testParser.js";
import { StructContext } from "./.antlr/testParser.js";
import { FcallContext } from "./.antlr/testParser.js";
import { ModuleAssignContext } from "./.antlr/testParser.js";
import { ModuleFunctionContext } from "./.antlr/testParser.js";
import { ModuleStartContext } from "./.antlr/testParser.js";
import { ModuleEndContext } from "./.antlr/testParser.js";
import { MainContext } from "./.antlr/testParser.js";
import { NoAssignmentContext } from "./.antlr/testParser.js";
import { AssignContext } from "./.antlr/testParser.js";
import { StructAssignContext } from "./.antlr/testParser.js";
import { ListAssignContext } from "./.antlr/testParser.js";
import { TernaryContext } from "./.antlr/testParser.js";
import { QuoteContext } from "./.antlr/testParser.js";
import { QEnotContext } from "./.antlr/testParser.js";
import { QEorContext } from "./.antlr/testParser.js";
import { QEandContext } from "./.antlr/testParser.js";
import { QECompareContext } from "./.antlr/testParser.js";
import { OrContext } from "./.antlr/testParser.js";
import { AndContext } from "./.antlr/testParser.js";
import { CompareContext } from "./.antlr/testParser.js";
import { AddSubContext } from "./.antlr/testParser.js";
import { MulDivSurContext } from "./.antlr/testParser.js";
import { UnaryMinusContext } from "./.antlr/testParser.js";
import { NotExprContext } from "./.antlr/testParser.js";
import { PowExprContext } from "./.antlr/testParser.js";
import { PowExContext } from "./.antlr/testParser.js";
import { FactrialExprContext } from "./.antlr/testParser.js";
import { PreFixContext } from "./.antlr/testParser.js";
import { PostFixContext } from "./.antlr/testParser.js";
import { IndexAccessContext } from "./.antlr/testParser.js";
import { IndExprContext } from "./.antlr/testParser.js";
import { RealContext } from "./.antlr/testParser.js";
import { IdExprContext } from "./.antlr/testParser.js";
import { FCallExprContext } from "./.antlr/testParser.js";
import { ParenContext } from "./.antlr/testParser.js";
import { StringLiteralContext } from "./.antlr/testParser.js";
import { ListLiteralContext } from "./.antlr/testParser.js";
import { DpLiteralContext } from "./.antlr/testParser.js";
import { PreChrExprContext } from "./.antlr/testParser.js";
import { DpContext } from "./.antlr/testParser.js";
import { RatContext } from "./.antlr/testParser.js";
import { FloatContext } from "./.antlr/testParser.js";
import { HexNumContext } from "./.antlr/testParser.js";
import { BitNumContext } from "./.antlr/testParser.js";
import { RatNumContext } from "./.antlr/testParser.js";
import { DecNumContext } from "./.antlr/testParser.js";
import { ImaNumContext } from "./.antlr/testParser.js";
import { VIdContext } from "./.antlr/testParser.js";
import { BefContext } from "./.antlr/testParser.js";
import { BefNContext } from "./.antlr/testParser.js";
import { V2IdContext } from "./.antlr/testParser.js";
import { FuncContext } from "./.antlr/testParser.js";
import { AtFuncContext } from "./.antlr/testParser.js";
import { ChFuncContext } from "./.antlr/testParser.js";
import { ListExprContext } from "./.antlr/testParser.js";
import { SentenceContext } from "./.antlr/testParser.js";
import { Sentence1Context } from "./.antlr/testParser.js";
import { ExprlistContext } from "./.antlr/testParser.js";
import { TerminatorContext } from "./.antlr/testParser.js";
import { MemberNameContext } from "./.antlr/testParser.js";
import { SystemPathContext } from "./.antlr/testParser.js";
import { OptionPairContext } from "./.antlr/testParser.js";
import { QualifiedIdentifierContext } from "./.antlr/testParser.js";
import { createContext } from 'vm';
import { Identifier } from 'acorn';
import { ChildProcess } from 'child_process';


// Custom Visitor Class
export class AsirASTBuilder extends AbstractParseTreeVisitor<ast.ASTNode | undefined> implements testVisitor<ast.ASTNode | undefined> {

    // --- Helper Methods ---

    private createIdentifierNode(tokenOrNode: TerminalNode | Token): ast.IdentifierNode {
        const token = (tokenOrNode instanceof TerminalNode) ? tokenOrNode.symbol : tokenOrNode;
        return {
            kind: 'Identifier',
            name: token.text!,
            isVar: token.type === testParser.VAR_ID,
            isSpecialVar: token.type === testParser.VAR_2,
            loc: getLoc(tokenOrNode)
        };
    }

    private visitAndCheck<T extends ast.ASTNode>(ctx: ParserRuleContext | undefined, expectedKind?: T['kind']): T {
        if (!ctx) {
            throw new Error("Internal Error: Attempted to visit an undefined context.");
        }
        const node = this.visit(ctx);
        if (!node) {
            throw new ASTBuilderError(`Visiting context '${ctx.getText()}' returned undefined.`, ctx);
        }
        if (expectedKind && node.kind !== expectedKind) {
            throw new ASTBuilderError(`Expected node of kind '${expectedKind}' but got '${node.kind}'.`, ctx);
        }
        return node as T;
    }

    private visitBinaryOp(ctx: ParserRuleContext, operandGetter: (i: number) => ParserRuleContext | null): ast.ExpressionNode {
        let left = this.visitAndCheck<ast.ExpressionNode>(operandGetter(0)!);
        for (let i = 1; ; i++) {
            const operandCtx = operandGetter(i);
            if (!operandCtx) break;

            const operator = ctx.getChild(i * 2 - 1) as TerminalNode;
            const right = this.visitAndCheck<ast.ExpressionNode>(operandCtx);

            left = {
                kind: 'BinaryOperation',
                operator: operator.getText(),
                left: left,
                right: right,
                loc: getLoc(ctx)
            };
        }
        return left;
    }

    protected defaultResult(): ast.ASTNode | undefined {
        return undefined;
    }

    protected aggregateResult(aggregate: ast.ASTNode | undefined, nextResult: ast.ASTNode | undefined): ast.ASTNode | undefined {
        return nextResult !== undefined ? nextResult : aggregate;
    }

    // --- Program Entry --- 
    visitProg(ctx: ProgContext): ast.ProgramNode {
        const statements: ast.StatementNode[] = [];
        for (const stmtCtx of ctx.statement()) {
            const stmtNode = this.visit(stmtCtx);
            if (stmtNode) {
                statements.push(stmtNode as ast.StatementNode);
            }
        }
        return {
            kind: 'Program',
            statements: statements,
            loc: getLoc(ctx)
        };
    }

    // --- Statements ---

    visitExprStatement(ctx: ExprStatementContext): ast.ExpressionStatementNode {
        return {
            kind: 'ExpressionStatement',
            expression: this.visitAndCheck<ast.ExpressionNode>(ctx.expr()!),
            loc: getLoc(ctx)
        };
    }

    visitEmptyStatement(ctx: EmptyLineStatementContext): ast.EmptyStatementNode {
        return {
            kind: 'EmptyStatement',
            loc: getLoc(ctx)
        };
    }

    visitDefinitionStatement(ctx: DefinitionStatementContext): ast.DefinitionStatementNode {
        return this.visitAndCheck<ast.DefinitionStatementNode>(ctx.functionDefinition()!);
    }

    visitIfStatement(ctx: IfStatementContext): ast.IfStatementNode {
        return this.visitAndCheck<ast.IfStatementNode>(ctx.functionIf()!);
    }

    visitForStatement(ctx: ForStatementContext): ast.ForStatementNode {
        return this.visitAndCheck<ast.ForStatementNode>(ctx.functionFor()!);
    }

    visitWhileStatement(ctx: WhileStatementContext): ast.WhileStatementNode {
        return this.visitAndCheck<ast.WhileStatementNode>(ctx.functionWhile()!);
    }

    visitDoStatement(ctx: DoStatementContext): ast.DoWhileStatementNode {
        const doNode = this.visitAndCheck<ast.DoWhileStatementNode>(ctx.functionDo()!);
        // The semicolon is consumed as a separate statement, so we need to handle it here.
        // This is a workaround for the grammar ambiguity.
        return doNode;
    }

    visitReturnStatement(ctx: ReturnStatementContext): ast.ReturnStatementNode {
        return this.visitAndCheck<ast.ReturnStatementNode>(ctx.functionReturn()!);
    }

    visitBreakStatement(ctx: BreakStatementContext): ast.BreakStatementNode {
        return this.visitAndCheck<ast.BreakStatementNode>(ctx.functionBreak()!);
    }

    visitContinueStatement(ctx: ContinueStatementContext): ast.ContinueStatementNode {
        return this.visitAndCheck<ast.ContinueStatementNode>(ctx.functionContinue()!);
    }

    visitStructStatement(ctx: StructStatementContext): ast.StructStatementNode {
        return this.visitAndCheck<ast.StructStatementNode>(ctx.functionStruct()!);
    }

    visitModuleStatement(ctx: ModuleStatementContext): ast.ModuleStatementNode {
        return this.visitAndCheck<ast.ModuleStatementNode>(ctx.functionModule()!);
    }

    visitPreproStatement(ctx: PreproStatementContext): ast.PreprocessorNode {
        return this.visitAndCheck<ast.PreprocessorNode>(ctx.preprocessor());
    }

    // --- Preprocessor ---

    visitPreChr(ctx: PreChrContext): ast.UnaryOperationNode {
        return {
            kind: 'UnaryOperation',
            operator: '#',
            operand: this.visitAndCheck<ast.IdentifierNode>(ctx.memberName()),
            loc: getLoc(ctx)
        };
    }

    visitPreChrPlus(ctx: PreChrPlusContext): ast.BinaryOperationNode {
        const leftNode = this.visitAndCheck<ast.IdentifierNode>(ctx.memberName(0)!);
        const rightNode = this.visitAndCheck<ast.IdentifierNode>(ctx.memberName(1)!);
        return {
            kind: 'BinaryOperation',
            operator: '##',
            left: leftNode,
            right: rightNode,
            loc: getLoc(ctx)
        };
    }

    visitPDef(ctx: PDefContext): ast.PreprocessorDefineNode {
        const nameNode = this.visitAndCheck<ast.QualifiedIdentifierNode>(ctx._name);
        const parmNodes = (ctx._params || []).map(p => this.visitAndCheck<ast.IdentifierNode>(p) );
        const bodyNode = this.visitAndCheck<ast.ExpressionNode>(ctx._body);

        return {
            kind: 'PreprocessorDefine',
            name: nameNode,
            parameters: parmNodes,
            body: bodyNode,
            loc: getLoc(ctx)
        };
    }

    visitPInc(ctx: PIncContext): ast.PreprocessorIncludeNode {
        let pathType: 'system' | 'local';
        let path: string;
        if (ctx._path_sys) {
            pathType = 'system';
            const rawPath = ctx._path_sys.getText();
            path = rawPath.substring(1, rawPath.length - 1);
        } else {
            pathType = 'local';
            const rawPath = ctx._path_loc!.text!;
            path = rawPath.substring(1, rawPath.length - 1);
        }

        return {
            kind: 'PreprocessorIncludeNode',
            pathtype: pathType,
            path: path,
            loc: getLoc(ctx)
        };
    }

    visitPIf(ctx: PIfContext): ast.PreprocessorIfNode {
        const directive = (ctx.PIF() || ctx.PIFDEF() || ctx.PIFNDEF())!.getText() as ast.PreprocessorIfNode['directive'];
        const mainCondition = this.visitAndCheck<ast.ExpressionNode>(ctx.expr(0)!);
        const thenStatements: ast.StatementNode[] = [];
        const elifClauses: ast.PreprocessorElifNode[] = [];
        let elseStatements: ast.StatementNode[] | undefined = undefined;
        let currentStatements: ast.StatementNode[] = thenStatements;
        let currentElif: ast.PreprocessorElifNode | null = null;

        if (ctx.children) {
            for (const child of ctx.children) {
                if (child instanceof TerminalNode) {
                    if (child.symbol.type === testParser.PELIF) {
                        if (currentElif) { elifClauses.push(currentElif); }
                        currentElif = {
                            kind: 'PreprocessorElif',
                            condition: null as any,
                            statements: [],
                            loc: getLoc(child)
                        };
                    } else if (child.symbol.type === testParser.PELSE) {
                        if (currentElif) {
                            elifClauses.push(currentElif);
                            currentElif = null;
                        }
                        elseStatements = [];
                        currentStatements = elseStatements;
                    }
                } else if (child instanceof ParserRuleContext) {
                    if (child.ruleIndex=== testParser.RULE_expr) {
                        if (currentElif && !currentElif.condition) {
                            currentElif.condition = this.visitAndCheck<ast.ExpressionNode>(child);
                        }
                    } else if (child.ruleIndex === testParser.RULE_statement) {
                        currentStatements.push(this.visitAndCheck<ast.StatementNode>(child));
                    }
                }
            }
        }
        if (currentElif) { elifClauses.push(currentElif); }

        return {
            kind: 'PreprocessorIf',
            directive: directive,
            condition: mainCondition,
            thenStatements: thenStatements,
            elifClauses: elifClauses,
            elseStatements: elseStatements,
            loc: getLoc(ctx)
        };
    }

    // --- Expressions (Entry) ---

    visitMain(ctx: MainContext): ast.ExpressionNode {
        return this.visitAndCheck<ast.ExpressionNode>(ctx.assignmentExpr()!);
    }

    // --- Assignment Expressions ---

    visitNoAssignment(ctx: NoAssignmentContext): ast.ExpressionNode {
        return this.visitAndCheck<ast.ExpressionNode>(ctx.ternaryExpr()!);
    }

    visitAssign(ctx: AssignContext): ast.AssignmentExpressionNode {
        const targetNode = this.createIdentifierNode(ctx._left!);
        let leftNode: ast.LValueNode = targetNode;

        if (ctx._indices && ctx._indices.length > 0) {
            const indices = ctx._indices.map(e => this.visitAndCheck<ast.ExpressionNode>(e));
            leftNode = {
                kind: 'IndexAccess',
                base: targetNode,
                indices: indices,
                loc: getLoc(ctx) 
            };
        } else { leftNode = targetNode; }

        const operatorText = ctx._op!.text!;
        const rightNode = this.visitAndCheck<ast.ExpressionNode>(ctx._right);

        return {
            kind: 'AssignmentExpression',
            left: leftNode,
            operator: operatorText,
            right: rightNode,
            loc: getLoc(ctx)
        };
    }

    visitStructAssign(ctx: StructAssignContext): ast.StructMemberAssignmentNode {
        const base = this.createIdentifierNode(ctx.VAR_ID()!);
        const members = ctx.memberName().map(m => this.visitAndCheck<ast.IdentifierNode>(m));
        const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN())!.getText();
        const right = this.visitAndCheck<ast.ExpressionNode>(ctx.assignmentExpr()!)

        return {
            kind: 'StructMemberAssignment',
            base: base,
            members: members,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }

    visitListAssign(ctx: ListAssignContext): ast.ListDestructuringAssignmentNode {
        const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN())!.getText();

        return {
            kind: 'ListDestructuringAssignment',
            targets: ctx.VAR_ID().map(v => this.createIdentifierNode(v)),
            operator: operatorText,
            right: this.visitAndCheck<ast.ExpressionNode>(ctx.assignmentExpr()!),
            loc: getLoc(ctx)
        };
    }

    // --- Conditional and Binary Operations ---

    visitTernary(ctx: TernaryContext): ast.ExpressionNode {
        const condition = this.visitAndCheck<ast.ExpressionNode>(ctx._condition);

        if (ctx._consequence) {
            const consequence = this.visitAndCheck<ast.ExpressionNode>(ctx._consequence);
            const alternative =this.visitAndCheck<ast.ExpressionNode>(ctx._alternative);

            return {
                kind: 'TernaryOperation',
                condition: condition,
                consequence: consequence,
                alternative: alternative,
                loc: getLoc(ctx)
            };
        }
        return condition;
    }

    visitQuote(ctx: QuoteContext): ast.UnaryOperationNode {
        return { kind: 'UnaryOperation', operator: '`', operand: this.visitAndCheck<ast.ExpressionNode>(ctx.qeNotExpr()!), loc: getLoc(ctx) };
    }

    visitQEnot(ctx: QEnotContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.qeOrExpr(i)); }
    visitQEor(ctx: QEorContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.qeAndExpr(i)); }
    visitQEand(ctx: QEandContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.qeCompareExpr(i)); }
    visitQECompare(ctx: QECompareContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.orExpr(i)); }
    visitOr(ctx: OrContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.andExpr(i)); }
    visitAnd(ctx: AndContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.compareExpr(i)); }
    visitCompare(ctx: CompareContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.addSubExpr(i)); }
    visitAddSub(ctx: AddSubContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.mulDivSurExpr(i)); }
    visitMulDivSur(ctx: MulDivSurContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.unaryExpr(i)); }

    // --- Unary Operations ---

    visitUnaryMinus(ctx: UnaryMinusContext): ast.UnaryOperationNode {
        return { kind: 'UnaryOperation', operator: '-', operand: this.visitAndCheck<ast.ExpressionNode>(ctx.unaryExpr()!), loc: getLoc(ctx) };
    }

    visitNotExpr(ctx: NotExprContext): ast.UnaryOperationNode {
        return { kind: 'UnaryOperation', operator: '!', operand: this.visitAndCheck<ast.ExpressionNode>(ctx.unaryExpr()!), loc: getLoc(ctx) };
    }

    visitPowExpr(ctx: PowExprContext): ast.ExpressionNode { return this.visitAndCheck<ast.ExpressionNode>(ctx.powerExpr()!); }

    // --- Power, Pre/PostFix, and Access Expressions ---

    visitPower(ctx: PowExContext): ast.ExpressionNode {
        const base = this.visitAndCheck<ast.ExpressionNode>(ctx._base);
        if (ctx.POWER()) {
            return {
                kind: 'PowerOperation',
                base: base,
                exponent: this.visitAndCheck<ast.ExpressionNode>(ctx._exponent),
                loc: getLoc(ctx)
            };
        }
        return base;
    }

    visitFactrialExpr(ctx: FactrialExprContext): ast.ExpressionNode {
        const baseExpr = this.visit(ctx.postfixExpr()! || ctx.prefixExpr()! || ctx.indexAccessExpr()!);

        if (ctx.NOT()) {
            return {
                kind: 'UnaryOperation',
                operator: '!',
                operand: baseExpr as ast.ExpressionNode,
                isPostfix: true,
                loc: getLoc(ctx)
            };
        }

        return baseExpr as ast.ExpressionNode;
    }

    visitPreFix(ctx: PreFixContext): ast.UnaryOperationNode {
        return {
            kind: 'UnaryOperation',
            operator: ctx.INC() ? '++' : '--',
            operand: this.visitAndCheck<ast.ExpressionNode>(ctx.indexAccessExpr()!),
            loc: getLoc(ctx),
            isPostfix: false
        };
    }

    visitPostFix(ctx: PostFixContext): ast.UnaryOperationNode {
        return {
            kind: 'UnaryOperation',
            operator: ctx.INC() ? '++' : '--',
            operand: this.visitAndCheck<ast.ExpressionNode>(ctx.indexAccessExpr()!),
            loc: getLoc(ctx),
            isPostfix: true
        };
    }


    visitIndexAccess(ctx: IndexAccessContext): ast.ExpressionNode {
        const base = this.visitAndCheck<ast.ExpressionNode>(ctx.primaryExpr()!);
        if (ctx.LBRACKET().length > 0) {
            return {
                kind: 'IndexAccess',
                base: base,
                indices: ctx.expr().map(e => this.visitAndCheck<ast.ExpressionNode>(e)),
                loc: getLoc(ctx)
            };
        }
        return base;
    }

    // --- Primary Expressions ---

    visitIndExpr(ctx: IndExprContext): ast.IdentifierNode{ return this.visitAndCheck<ast.IdentifierNode>(ctx.indeterminate()!); }
    visitReal(ctx: RealContext): ast.NumberLiteralNode { return this.visitAndCheck<ast.NumberLiteralNode>(ctx.num()!); }
    visitIdExpr(ctx: IdExprContext): ast.IdentifierNode { return this.visitAndCheck<ast.IdentifierNode>(ctx.id()!); }
    visitFCallExpr(ctx: FCallExprContext): ast.FunctionCallNode { return this.visitAndCheck<ast.FunctionCallNode>(ctx.functionCall()!); }
    visitParen(ctx: ParenContext): ast.ParenExpressionNode {
        return { kind: 'ParenExpression', expression: this.visitAndCheck<ast.ExpressionNode>(ctx.expr()!), loc: getLoc(ctx) };
    }
    visitStringLiteral(ctx: StringLiteralContext): ast.StringLiteralNode {
        const rawText = ctx.STRING()!.getText();
        return { kind: 'StringLiteral', value: rawText.substring(1, rawText.length - 1), rawText: rawText, loc: getLoc(ctx) };
    }
    visitListLiteral(ctx: ListLiteralContext): ast.ListLiteralNode { return this.visitAndCheck<ast.ListLiteralNode>(ctx.list()!); }
    visitDpLiteral(ctx: DpLiteralContext): ast.DistributedPolynomialLiteralNode { return this.visitAndCheck<ast.DistributedPolynomialLiteralNode>(ctx.dpoly()!); }
    visitPreChrExpr(ctx: PreChrExprContext): ast.ExpressionNode { return this.visitAndCheck<ast.ExpressionNode>(ctx.prechar()); }

    // --- Literals and Identifiers ---

    visitHexNum(ctx: HexNumContext): ast.NumberLiteralNode {
        const rawText = ctx.HEX()!.getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: getLoc(ctx) };
    }
    visitBitNum(ctx: BitNumContext): ast.NumberLiteralNode {
        const rawText = ctx.BIT()!.getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: getLoc(ctx) };
    }
    visitRatNum(ctx: RatNumContext): ast.NumberLiteralNode { return this.visitAndCheck<ast.NumberLiteralNode>(ctx.rational()!); }
    visitDecNum(ctx: DecNumContext): ast.NumberLiteralNode { return this.visitAndCheck<ast.NumberLiteralNode>(ctx.decimal()!); }
    visitImaNum(ctx: ImaNumContext): ast.NumberLiteralNode {
        const rawText = ctx.IMAGINARY()!.getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: getLoc(ctx) };
    }
    visitRat(ctx: RatContext): ast.NumberLiteralNode { return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: getLoc(ctx) }; }
    visitFloat(ctx: FloatContext): ast.NumberLiteralNode { return { kind: 'NumberLiteral', value: parseFloat(ctx.getText()), rawText: ctx.getText(), loc: getLoc(ctx) }; }
    visitVId(ctx: VIdContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.VAR_ID()!); }
    visitV2Id(ctx: V2IdContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.VAR_2()!); }
    visitBef(ctx: BefContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.BEFORE()!); }
    visitBefN(ctx: BefNContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.BEFORE_N()!); }
    // visitFunc(ctx: FuncContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.qualifiedIdentifier()!); }
    visitAtFunc(ctx: AtFuncContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.ATFUNC()!); }
    visitChFunc(ctx: ChFuncContext): ast.IdentifierNode { return this.createIdentifierNode(ctx.NOSTRING()!); }
    visitListExpr(ctx: ListExprContext): ast.ListLiteralNode {
        let elements: ast.ExpressionNode[] = [];
        if (ctx.exprlist()) {
            const elemNode = this.visitAndCheck<ast.ExpressionListNode>(ctx.exprlist()!);
            elements = elemNode.expressions;
        }

        return { kind: 'ListLiteral', elements: elements, loc: getLoc(ctx) };
    }
    visitDp(ctx: DpContext): ast.DistributedPolynomialLiteralNode {
        const allInts = ctx.INT();
        const terms = allInts.slice(0, ctx.COLON() ? -1 : undefined).map(t => parseInt(t.getText(), 10));
        const modulus = ctx.COLON() ? parseInt(allInts[allInts.length - 1].getText(), 10) : undefined;
        return { kind: 'DistributedPolynomialLiteral', terms, modulus, loc: getLoc(ctx) };
    }

    // --- Control Flow and Definitions ---

    visitDef(ctx: DefContext): ast.DefinitionStatementNode {
        const nameNode = this.visitAndCheck<ast.IdentifierNode>(ctx.indeterminate());
        const paramNodes = (ctx.VAR_ID() || []).map(v => this.createIdentifierNode(v));
        const bodyNode = this.visitAndCheck<ast.StatementNode>(ctx.block());
        return {
            kind: 'FunctionDefinition',
            name: nameNode,
            parameters: paramNodes,
            body: bodyNode,
            loc: getLoc(ctx)
        };
    }

    visitIf(ctx: IfContext): ast.IfStatementNode {
        const conditionNode = this.visitAndCheck<ast.ExpressionNode>(ctx._condition);
        const thenNode = this.visitAndCheck<ast.StatementNode>(ctx._thenBlock);
        let elseNode: ast.StatementNode | undefined = undefined;
        if (ctx._elseBlock) {
            elseNode = this.visitAndCheck<ast.StatementNode>(ctx._elseBlock);
        }
        return {
            kind: 'IfStatement',
            condition: conditionNode,
            thenStatement: thenNode,
            elseStatement: elseNode,
            loc: getLoc(ctx)
        };
    }

    visitFor(ctx: ForContext): ast.ForStatementNode {
        let initializers: ast.ExpressionNode[] = [];
        let conditions: ast.ExpressionNode[] = [];
        let updaters: ast.ExpressionNode[] = [];

        if (ctx._init) {
            const initNode = this.visitAndCheck<ast.ExpressionListNode>(ctx._init);
            initializers = initNode.expressions;
        }
        if (ctx._cond) {
            const condNode = this.visitAndCheck<ast.ExpressionListNode>(ctx._cond);
            conditions = condNode.expressions;
        }
        if (ctx._update) {
            const updateNode = this.visitAndCheck<ast.ExpressionListNode>(ctx._update);
            updaters = updateNode.expressions;
        }
        const bodyNode = this.visitAndCheck<ast.StatementNode>(ctx.block()!);

        return {
            kind: 'ForStatement',
            initializers: initializers,
            conditions: conditions,
            updaters: updaters,
            body: bodyNode,
            loc: getLoc(ctx)
        };
    }

    visitWhile(ctx: WhileContext): ast.WhileStatementNode {
        let conditions: ast.ExpressionNode[] = [];
        if (ctx.exprlist()) {
            const condNode = this.visitAndCheck<ast.ExpressionListNode>(ctx.exprlist()!);
            conditions = condNode.expressions;
        }

        return {
            kind: 'WhileStatement',
            conditions: conditions,
            body: this.visitAndCheck<ast.StatementNode>(ctx.block()!),
            loc: getLoc(ctx)
        };
    }

    visitDo(ctx: DoContext): ast.DoWhileStatementNode {
        let conditions: ast.ExpressionNode[] = [];
        if (ctx.exprlist()) {
            const condNode = this.visitAndCheck<ast.ExpressionListNode>(ctx.exprlist()!);
            conditions = condNode.expressions;
        }

        return {
            kind: 'DoWhileStatement',
            body: this.visitAndCheck<ast.StatementNode>(ctx.block()!),
            conditions: conditions,
            loc: getLoc(ctx)
        };
    }

    visitReturn(ctx: ReturnContext): ast.ReturnStatementNode {
        const exprCtx = ctx.expr();
        return { kind: 'ReturnStatement', value: exprCtx ? this.visitAndCheck<ast.ExpressionNode>(exprCtx) : undefined, loc: getLoc(ctx) };
    }

    visitBreak(ctx: BreakContext): ast.BreakStatementNode { return { kind: 'BreakStatement', loc: getLoc(ctx) }; }
    visitContinue(ctx: ContinueContext): ast.ContinueStatementNode { return { kind: 'ContinueStatement', loc: getLoc(ctx) }; }

    visitStrct(ctx: StructContext): ast.StructStatementNode {
        const nameNode = this.visitAndCheck<ast.IdentifierNode>(ctx._name);
        const memberNodes = ctx._members.map(memberCtx =>
            this.visitAndCheck<ast.IdentifierNode>(memberCtx)
        );
        return {
            kind: 'StructStatement',
            name: nameNode,
            members: memberNodes,
            loc: getLoc(ctx) 
        };
    }

    visitFcall(ctx: FcallContext): ast.FunctionCallNode {
        const callee = this.visitAndCheck<ast.QualifiedIdentifierNode>(ctx._name);
        const isGlobal = !!ctx._is_global;

        let args: ast.ExpressionNode[] = [];
        if (ctx._args) {
            const argsNode = this.visitAndCheck<ast.ExpressionListNode>(ctx._args);
            args = argsNode.expressions;
        }
        let options: ast.OptionPairNode[] = [];
        if(ctx._options && ctx._options.length > 0) {
            options = ctx._options.map(o => this.visitAndCheck<ast.OptionPairNode>(o));
        }

        return {
            kind: 'FunctionCall',
            callee: callee,
            isGlobal: isGlobal,
            args: args,
            options: options,
            loc: getLoc(ctx)
        };
    }

    // --- Module-related ---

    visitModuleAssign(ctx: ModuleAssignContext): ast.ModuleVariableDeclarationNode {
        const scope = (ctx.EXTERN() || ctx.STATIC() || ctx.GLOBAL() || ctx.LOCAL())!.getText() as ast.ModuleVariableDeclarationNode['scope'];
        return {
            kind: 'ModuleVariableDeclaration',
            scope: scope,
            variables: ctx.VAR_ID().map(v => this.createIdentifierNode(v)),
            loc: getLoc(ctx)
        };
    }

    visitModuleFunction(ctx: ModuleFunctionContext): ast.LocalFunctionDeclarationNode {
        return {
            kind: 'LocalFunctionDeclaration',
            functions: ctx.FUNC_ID().map(f => this.createIdentifierNode(f)),
            loc: getLoc(ctx)
        };
    }

    visitModuleStart(ctx: ModuleStartContext): ast.ModuleDeclarationNode {
        return { kind: 'ModuleDeclaration', name: this.createIdentifierNode(ctx.FUNC_ID()!), loc: getLoc(ctx) };
    }

    visitModuleEnd(ctx: ModuleEndContext): ast.EndModuleNode {
        return { kind: 'EndModule', loc: getLoc(ctx) };
    }

    // --- Blocks ---

    visitSentence(ctx: SentenceContext): ast.BlockNode {
        return { kind: 'Block', statements: ctx.statement().map(s => this.visitAndCheck<ast.StatementNode>(s)), loc: getLoc(ctx) };
    }

    visitSentence1(ctx: Sentence1Context): ast.BlockNode {
        return { kind: 'Block', statements: [this.visitAndCheck<ast.StatementNode>(ctx.statement()!)], loc: getLoc(ctx) };
    }

    // --- others ---
    visitExprlist(ctx: ExprlistContext): ast.ExpressionListNode {
        const expressions = ctx.expr().map(e => this.visitAndCheck<ast.ExpressionNode>(e));
        return {
            kind: 'ExpressionList',
            expressions: expressions,
            loc: getLoc(ctx)
        };
    }

    visitOptionPair(ctx: OptionPairContext): ast.OptionPairNode {
        const keyNode = this.visitAndCheck<ast.QualifiedIdentifierNode>(ctx._key);
        const valueNode = this.visitAndCheck<ast.ExpressionNode>(ctx._value);

        return {
            kind: 'OptionPair',
            key: keyNode,
            value: valueNode,
            loc: getLoc(ctx)
        };
    }

    visitQualifiedIdentifier(ctx: QualifiedIdentifierContext): ast.QualifiedIdentifierNode {
        const pathNode = ctx.FUNC_ID().map(i => this.createIdentifierNode(i));
        return {
            kind: 'QualifiedIdentifier',
            path: pathNode,
            loc: getLoc(ctx)
        };
    }
}
