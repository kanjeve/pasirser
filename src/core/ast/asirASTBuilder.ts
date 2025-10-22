import { Token, ParserRuleContext, TerminalNode, AbstractParseTreeVisitor } from 'antlr4ng';

import { asirVisitor } from '../../.antlr/asirVisitor.js';
import * as ast from './asirAst.js'
import { ASTBuilderError, getLoc } from '../../utils/errors.js';
import { FactExprContext, ForwardDeclStatementContext, asirParser } from '../../.antlr/asirParser.js';

// Import all context types
import { ProgContext } from "../../.antlr/asirParser.js";
import { ExprStatementContext } from "../../.antlr/asirParser.js";
import { EmptyLineStatementContext } from "../../.antlr/asirParser.js";
import { DefinitionStatementContext } from "../../.antlr/asirParser.js";
import { FormDeclarationContext } from "../../.antlr/asirParser.js";
import { IfStatementContext } from "../../.antlr/asirParser.js";
import { ForStatementContext } from "../../.antlr/asirParser.js";
import { WhileStatementContext } from "../../.antlr/asirParser.js";
import { DoStatementContext } from "../../.antlr/asirParser.js";
import { ReturnStatementContext } from "../../.antlr/asirParser.js";
import { BreakStatementContext } from "../../.antlr/asirParser.js";
import { ContinueStatementContext } from "../../.antlr/asirParser.js";
import { StructStatementContext } from "../../.antlr/asirParser.js";
import { ModuleStatementContext } from "../../.antlr/asirParser.js";
import { PreproStatementContext } from "../../.antlr/asirParser.js";
import { PreChrContext } from "../../.antlr/asirParser.js";
import { PreChrPlusContext } from "../../.antlr/asirParser.js";
import { PDefContext } from "../../.antlr/asirParser.js";
import { PIfContext } from "../../.antlr/asirParser.js";
import { PIncContext } from "../../.antlr/asirParser.js";
import { DefContext } from "../../.antlr/asirParser.js";
import { FormDeclContext } from "../../.antlr/asirParser.js";
import { IfContext } from "../../.antlr/asirParser.js";
import { ForContext } from "../../.antlr/asirParser.js";
import { WhileContext } from "../../.antlr/asirParser.js";
import { DoContext } from "../../.antlr/asirParser.js";
import { ReturnContext } from "../../.antlr/asirParser.js";
import { ContinueContext } from "../../.antlr/asirParser.js";
import { BreakContext } from "../../.antlr/asirParser.js";
import { StructContext } from "../../.antlr/asirParser.js";
import { FCallExprContext } from "../../.antlr/asirParser.js";
import { FunctorCallExprContext } from "../../.antlr/asirParser.js";
import { ModuleAssignContext } from "../../.antlr/asirParser.js";
import { ModuleStartContext } from "../../.antlr/asirParser.js";
import { ModuleEndContext } from "../../.antlr/asirParser.js";
import { MainContext } from "../../.antlr/asirParser.js";
import { NoAssignmentContext } from "../../.antlr/asirParser.js";
import { AssignContext } from "../../.antlr/asirParser.js";
import { StructAssignContext } from "../../.antlr/asirParser.js";
import { ListAssignContext } from "../../.antlr/asirParser.js";
import { TernaryContext } from "../../.antlr/asirParser.js";
import { QuoteContext } from "../../.antlr/asirParser.js";
import { QEImplContext } from "../../.antlr/asirParser.js";
import { QEnotContext } from "../../.antlr/asirParser.js";
import { QEorContext } from "../../.antlr/asirParser.js";
import { QEandContext } from "../../.antlr/asirParser.js";
import { QECompareContext } from "../../.antlr/asirParser.js";
import { OrContext } from "../../.antlr/asirParser.js";
import { AndContext } from "../../.antlr/asirParser.js";
import { CompareContext } from "../../.antlr/asirParser.js";
import { AddSubContext } from "../../.antlr/asirParser.js";
import { MulDivSurContext } from "../../.antlr/asirParser.js";
import { UnaryMinusContext } from "../../.antlr/asirParser.js";
import { NotExprContext } from "../../.antlr/asirParser.js";
import { PowExprContext } from "../../.antlr/asirParser.js";
import { PowExContext } from "../../.antlr/asirParser.js";
import { FactorialExprContext } from "../../.antlr/asirParser.js";
import { PreFixContext } from "../../.antlr/asirParser.js";
import { PostFixContext } from "../../.antlr/asirParser.js";
import { IndexAccessContext } from "../../.antlr/asirParser.js";
import { MemberAccessContext } from "../../.antlr/asirParser.js";
import { IndExprContext } from "../../.antlr/asirParser.js";
import { RealContext } from "../../.antlr/asirParser.js";
import { IdExprContext } from "../../.antlr/asirParser.js";
import { ParenContext } from "../../.antlr/asirParser.js";
import { StringLiteralContext } from "../../.antlr/asirParser.js";
import { ListLiteralContext } from "../../.antlr/asirParser.js";
import { DpLiteralContext } from "../../.antlr/asirParser.js";
import { PreChrExprContext } from "../../.antlr/asirParser.js";
import { DpContext } from "../../.antlr/asirParser.js";
import { RatContext } from "../../.antlr/asirParser.js";
import { FloatContext } from "../../.antlr/asirParser.js";
import { HexNumContext } from "../../.antlr/asirParser.js";
import { BitNumContext } from "../../.antlr/asirParser.js";
import { RatNumContext } from "../../.antlr/asirParser.js";
import { DecNumContext } from "../../.antlr/asirParser.js";
import { ImaNumContext } from "../../.antlr/asirParser.js";
import { GenNumContext } from "../../.antlr/asirParser.js";
import { IdContext } from "../../.antlr/asirParser.js";
import { BefContext } from "../../.antlr/asirParser.js";
import { BefNContext } from "../../.antlr/asirParser.js";
import { V2IdContext } from "../../.antlr/asirParser.js";
import { FuncContext } from "../../.antlr/asirParser.js";
import { AtFuncContext } from "../../.antlr/asirParser.js";
import { ChFuncContext } from "../../.antlr/asirParser.js";
import { ListExprContext } from "../../.antlr/asirParser.js";
import { SentenceContext } from "../../.antlr/asirParser.js";
import { Sentence1Context } from "../../.antlr/asirParser.js";
import { ExprlistContext } from "../../.antlr/asirParser.js";
import { TerminatorContext } from "../../.antlr/asirParser.js";
import { SystemPathContext } from "../../.antlr/asirParser.js";
import { ElifClauseContext } from "../../.antlr/asirParser.js";
import { ElseClauseContext } from "../../.antlr/asirParser.js";
import { OptionPairContext } from "../../.antlr/asirParser.js";
import { QualifiedNameContext } from "../../.antlr/asirParser.js";
import { DottedIdentifierContext } from "../../.antlr/asirParser.js";


// Custom Visitor Class
export class AsirASTBuilder extends AbstractParseTreeVisitor<ast.ASTNode | undefined> implements asirVisitor<ast.ASTNode | undefined> {

    // --- Helper Methods ---

    private createIndeterminateNode(tokenOrNode: TerminalNode | Token): ast.IndeterminateNode {
        const token = (tokenOrNode instanceof TerminalNode) ? tokenOrNode.symbol : tokenOrNode;
        return {
            kind: 'Indeterminate',
            name: token.text!,
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

    visitForwardDeclStatement(ctx: ForwardDeclStatementContext): ast.FormDeclarationNode {
        return this.visitAndCheck<ast.FormDeclarationNode>(ctx.formDeclaration()!);
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
            operand: this.createIndeterminateNode(ctx.ID()),
            loc: getLoc(ctx)
        };
    }

    visitPreChrPlus(ctx: PreChrPlusContext): ast.BinaryOperationNode {
        const leftNode = this.createIndeterminateNode(ctx.ID(0)!);
        const rightNode = this.createIndeterminateNode(ctx.ID(1)!);
        return {
            kind: 'BinaryOperation',
            operator: '##',
            left: leftNode,
            right: rightNode,
            loc: getLoc(ctx)
        };
    }

    visitPDef(ctx: PDefContext): ast.PreprocessorDefineNode {
        const nameNode = this.createIndeterminateNode(ctx._name!);
        const parmNodes = (ctx._params || []).map(p => this.createIndeterminateNode(p) );
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
        const directive = ctx._directive!.text as ast.PreprocessorIfNode['directive'];
        const mainCondition = this.visitAndCheck<ast.ExpressionNode>(ctx._condition);
        const thenStatements = ctx._thenSymts.map(s => this.visitAndCheck<ast.StatementNode>(s));
        const elifClauses = ctx._elifs.map(c => this.visitElifClause(c));

        let elseClause: ast.PreprocessorElseNode | undefined = undefined;
        if (ctx._elseBlk) {
            elseClause = this.visitElseClause(ctx._elseBlk);
        }

        return {
            kind: 'PreprocessorIf',
            directive: directive,
            condition: mainCondition,
            thenStatements: thenStatements,
            elifClauses: elifClauses,
            elseStatements: elseClause,
            loc: getLoc(ctx)
        };
    }

    visitElifClause(ctx: ElifClauseContext): ast.PreprocessorElifNode {
        return {
            kind: 'PreprocessorElif',
            condition: this.visitAndCheck<ast.ExpressionNode>(ctx._condition),
            statements: ctx._statements.map(s => this.visitAndCheck<ast.StatementNode>(s)),
            loc: getLoc(ctx)
        };
    }

    visitElseClause(ctx: ElseClauseContext): ast.PreprocessorElseNode {
        return {
            kind: 'PreprocessorElse',
            statements: ctx._statements.map(s => this.visitAndCheck<ast.StatementNode>(s)),
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
        const targetNode = this.createIndeterminateNode(ctx._left!);
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

    visitStructAssign(ctx: StructAssignContext): ast.AssignmentExpressionNode {
        const leftNode: ast.MemberAccessNode ={
            kind: 'MemberAccess',
            base: this.createIndeterminateNode(ctx.ID()!),
            members: ctx.indeterminate().map(m => this.visitAndCheck<ast.IndeterminateNode>(m)),
            loc: getLoc(ctx.ID()!)
        };
        const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN())!.getText();
        const rightNode = this.visitAndCheck<ast.ExpressionNode>(ctx.assignmentExpr()!);

        return {
            kind: 'AssignmentExpression',
            left: leftNode,
            operator: operatorText,
            right: rightNode,
            loc: getLoc(ctx)
        };
    }

    visitListAssign(ctx: ListAssignContext): ast.ListDestructuringAssignmentNode {
        const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN())!.getText();

        return {
            kind: 'ListDestructuringAssignment',
            targets: ctx.ID().map(v => this.createIndeterminateNode(v)),
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

    visitQuote(ctx: QuoteContext): ast.ExpressionNode {
        const operand = this.visitAndCheck<ast.ExpressionNode>(ctx.qeImplExpr()!);
        if (ctx.BACK()) {
            return {
                kind: 'UnaryOperation',
                operator: '`',
                operand: operand,
                loc: getLoc(ctx)
            };
        }
        return operand;
    }

    visitQEImpl(ctx: QEImplContext): ast.ExpressionNode { return this.visitBinaryOp(ctx, (i) => ctx.qeNotExpr(i)); }
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

    visitFactorialExpr(ctx: FactorialExprContext): ast.ExpressionNode {
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
        const base = this.visitAndCheck<ast.ExpressionNode>(ctx.memberAccessExpr()!);
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

    visitMemberAccess(ctx: MemberAccessContext): ast.ExpressionNode {
        const base = this.visitAndCheck<ast.ExpressionNode>(ctx.primaryExpr());
        if (!ctx.ARROW() || ctx.ARROW().length === 0) { return base; }
        const members = ctx.indeterminate().map(id => this.visitAndCheck<ast.IndeterminateNode>(id));
        return {
            kind: 'MemberAccess',
            base: base,
            members: members,
            loc: getLoc(ctx)
        };
    }

    // --- Primary Expressions ---

    visitIndExpr(ctx: IndExprContext): ast.ExpressionNode{ return this.visitAndCheck<ast.IndeterminateNode>(ctx.indeterminate()); }
    visitReal(ctx: RealContext): ast.NumberLiteralNode { return this.visitAndCheck<ast.NumberLiteralNode>(ctx.num()!); }
    visitIdExpr(ctx: IdExprContext): ast.ExpressionNode{ return this.visitAndCheck<ast.IndeterminateNode>(ctx.id()); }
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
    visitGenNum(ctx: GenNumContext): ast.NumberLiteralNode {
        const rawText = ctx.AEGEN()!.getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: getLoc(ctx) };
    }
    visitRat(ctx: RatContext): ast.NumberLiteralNode { return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: getLoc(ctx) }; }
    visitFloat(ctx: FloatContext): ast.NumberLiteralNode { return { kind: 'NumberLiteral', value: parseFloat(ctx.getText()), rawText: ctx.getText(), loc: getLoc(ctx) }; }
    visitV2Id(ctx: V2IdContext): ast.IndeterminateNode { return this.createIndeterminateNode(ctx.VAR_2()!); }
    visitBef(ctx: BefContext): ast.IndeterminateNode { return this.createIndeterminateNode(ctx.BEFORE()!); }
    visitBefN(ctx: BefNContext): ast.IndeterminateNode { return this.createIndeterminateNode(ctx.BEFORE_N()!); }
    visitFunc(ctx: FuncContext): ast.IndeterminateNode {
        return {
            kind: 'Indeterminate',
            name: ctx.ID().getText(),
            loc: getLoc(ctx)
        };
    }
    visitAtFunc(ctx: AtFuncContext): ast.IndeterminateNode {
        return {
            kind: 'Indeterminate',
            name: ctx.ATFUNC().getText(),
            loc: getLoc(ctx)
        };
    }
    visitChFunc(ctx: ChFuncContext): ast.IndeterminateNode {
        const rawText = ctx.NOSTRING().getText();
        const name = rawText.substring(1, rawText.length - 1);
        return {
            kind: 'Indeterminate',
            name: name,
            loc: getLoc(ctx)
        };
    }
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
        const nameNode = this.visitAndCheck<ast.IndeterminateNode>(ctx._name);
        const paramNodes = (ctx._params || []).map(v => this.createIndeterminateNode(v));
        const bodyNode = this.visitAndCheck<ast.StatementNode>(ctx._body);
        return {
            kind: 'FunctionDefinition',
            name: nameNode,
            parameters: paramNodes,
            body: bodyNode,
            loc: getLoc(ctx)
        };
    }

    visitFormDecl(ctx: FormDeclContext): ast.FormDeclarationNode {
        const nameNode =this.visitAndCheck<ast.IndeterminateNode>(ctx._name);
        const paramNodes = (ctx._params || []).map(p => this.visitAndCheck<ast.IndeterminateNode>(p));
        return {
            kind: 'FormDeclaration',
            name: nameNode,
            parameters: paramNodes,
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

    visitStruct(ctx: StructContext): ast.StructStatementNode {
        const nameNode = this.visitAndCheck<ast.IndeterminateNode>(ctx._name);
        const memberNodes = ctx._members.map(memberCtx =>
            this.visitAndCheck<ast.IndeterminateNode>(memberCtx)
        );
        return {
            kind: 'StructStatement',
            name: nameNode,
            members: memberNodes,
            loc: getLoc(ctx) 
        };
    }

    visitQualifiedName(ctx: QualifiedNameContext): ast.QualifiedNameNode {
        const funcName = this.visitAndCheck<ast.IndeterminateNode>(ctx._funcName);
        let moduleNameNode: ast.IndeterminateNode | undefined = undefined;
        if (ctx._moduleName) { moduleNameNode = this.createIndeterminateNode(ctx._moduleName); }
        return {
            kind: 'QualifiedName',
            moduleName: moduleNameNode,
            functionName: funcName,
            loc: getLoc(ctx)
        };
    }

    visitFCallExpr(ctx: FCallExprContext): ast.FunctionCallNode {
        const callee = this.visitAndCheck<ast.QualifiedNameNode>(ctx._path);
        const isGlobal = !!ctx._is_global;

        let diffOrders: number[] | undefined = undefined;
        if (ctx._diffOrders && ctx._diffOrders.length > 0) {
            diffOrders = ctx._diffOrders.map(token => parseInt(token.text!, 10));
        }
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
            diffOrders: diffOrders,
            args: args,
            options: options,
            loc: getLoc(ctx)
        };
    }

    visitFunctorCallExpr(ctx: FunctorCallExprContext): ast.FunctorCallNode {
        const callee = this.visitAndCheck<ast.ExpressionNode>(ctx._callee);
        let args: ast.ExpressionNode[] = [];
        if (ctx._args) {
            const argsNode = this.visitAndCheck<ast.ExpressionListNode>(ctx._args);
            args = argsNode.expressions;
        }
        let options: ast.OptionPairNode[] = [];
        if (ctx._options && ctx._options.length > 0) {
            options = ctx._options.map(o => this.visitAndCheck<ast.OptionPairNode>(o));
        }
        return {
            kind: 'FunctorCall',
            callee: callee,
            args: args,
            options: options,
            loc: getLoc(ctx)
        };
    }

    // --- Module-related ---

    visitModuleAssign(ctx: ModuleAssignContext): ast.ModuleVariableDeclarationNode {
        const scope = (ctx.EXTERN() || ctx.STATIC() || ctx.GLOBAL() || ctx.LOCAL() || ctx.LOCALF())!.getText() as ast.ModuleVariableDeclarationNode['scope'];
        return {
            kind: 'ModuleVariableDeclaration',
            scope: scope,
            variables: ctx.indeterminate().map(v => this.visitAndCheck<ast.IndeterminateNode>(v)),
            loc: getLoc(ctx)
        };
    }

    visitModuleStart(ctx: ModuleStartContext): ast.ModuleDeclarationNode {
        return { kind: 'ModuleDeclaration', name: this.visitAndCheck<ast.IndeterminateNode>(ctx.indeterminate()!), loc: getLoc(ctx) };
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
        const keyNode = this.visitAndCheck<ast.IndeterminateNode>(ctx._key);
        const valueNode = this.visitAndCheck<ast.ExpressionNode>(ctx._value);

        return {
            kind: 'OptionPair',
            key: keyNode,
            value: valueNode,
            loc: getLoc(ctx)
        };
    }

    visitDottedIdentifier(ctx: DottedIdentifierContext): ast.DottedIdentifierNode {
        return {
            kind: 'DottedIdentifier',
            identifiers: ctx.indeterminate().map(idToken => this.visitAndCheck<ast.IndeterminateNode>(idToken)),
            loc: getLoc(ctx)
        };
    }
}
