import { Token, ParserRuleContext, TerminalNode, AbstractParseTreeVisitor } from 'antlr4ng';

import { testVisitor } from './.antlr/testVisitor.js';
import * as ast from './testAst.js'
import { ASTBuilderError, getLoc } from './errors.js';
import { testParser } from './.antlr/testParser.js'; // Add this line

// コンテキストクラスの型をインポート
import { ProgContext, ExprStatementContext, EmptyLineStatementContext, DefinitionStatementContext, IfStatementContext, ForStatementContext, WhileStatementContext, DoStatementContext, ReturnStatementContext, BreakStatementContext, ContinueStatementContext, StructStatementContext, ModuleStatementContext, DefContext, IfContext, ForContext, WhileContext, DoContext, ReturnContext, ContinueContext, BreakContext, StrctContext, FcallContext, ModuleAssignContext, ModuleFunctionContext, ModuleStartContext, ModuleEndContext, MainContext, TernaryContext, QEorContext, QEandContext, QECompareContext, OrContext, AndContext, CompareContext, AddSubContext, MulDivSurContext, UnaryMinusContext, NotExprContext, PowerContext, IndexAccessContext, RealContext, IdExprContext, FCallExprContext, ParenContext, SpecNumContext, StringLiteralContext, CharLiteralContext, ListLiteralContext, RatContext, FloatContext, RatNumContext, DecNumContext, VIdContext, FIdContext, V2IdContext, ImaContext, PiContext, NapContext, BefContext, BefNContext, ListExprContext, SentenceContext, Sentence1Context, AssignContext, StructAssignContext, ListAssignContext, DpLiteralContext, DpContext, PreIncrementContext, PreDecrementContext, PostFixContext, PostFixExprContext, PowExprContext, NoAssignmentContext } from "./.antlr/testParser.js";

// カスタム Visitor クラス
export class AsirASTBuilder extends AbstractParseTreeVisitor<ast.ASTNode | undefined> implements testVisitor<ast.ASTNode | undefined> {

    private createIdentifierNode(token: TerminalNode): ast.IdentifierNode {
        return {
            kind: 'Identifier',
            name: token.getText(),
            isVar: token.symbol.type === testParser.VAR_ID,
            isSpecialVar: token.symbol.type === testParser.VAR_2,
            loc: getLoc(token)
        };
    }

    // visit メソッドが何も返さなかった場合のデフォルト値
    protected defaultResult(): ast.ASTNode | undefined {
        return undefined;
    }

    // 子ノードの訪問結果を結合する方法
    protected aggregateResult(aggregate: ast.ASTNode | undefined, nextResult: ast.ASTNode | undefined): ast.ASTNode | undefined {
        return nextResult !== undefined ? nextResult : aggregate;
    }

    // --- プログラムのルートノード ---
    visitProg(ctx: ProgContext): ast.ProgramNode {
        const statements: ast.StatementNode[] = [];
        for (const stmtCtx of ctx.statement()) {
            const stmtNode = this.visit(stmtCtx); // statementルールを訪問
            if (stmtNode && (stmtNode as ast.StatementNode).kind) { // kindプロパティでStatementNodeか確認
                statements.push(stmtNode as ast.StatementNode);
            }
        }
        return {
            kind: 'Program',
            statements: statements,
            loc: getLoc(ctx)
        };
    }

    // --- 文 (Statement) の訪問 ---

    // expr (SEMI | DOLLAR) #ExprStatement
    visitExprStatement(ctx: ExprStatementContext): ast.ExpressionStatementNode {
        const expression = this.visit(ctx.expr()!) as ast.ExpressionNode;
        return {
            kind: 'ExpressionStatement',
            expression: expression,
            loc: getLoc(ctx)
        };
    }

    // (SEMI | DOLLAR) #EmptyLineStatement
    visitEmptyStatement(ctx: EmptyLineStatementContext): ast.EmptyStatementNode {
        return {
            kind: 'EmptyStatement',
            loc: getLoc(ctx)
        };
    }

    // assignmentExprの #Assign (VAR_ID ... ASSIGN assignmentExpr)
    visitAssign(ctx: AssignContext): ast.AssignmentExpressionNode {
        const varIdNode = this.createIdentifierNode(ctx.VAR_ID()!);
        let left: ast.ExpressionNode = varIdNode;

        // 添字アクセスがある場合
        if (ctx.LBRACKET().length > 0) {
            const indices: ast.ExpressionNode[] = [];
            // The right-most expression is the assignment's RHS, so we exclude it.
            for (const exprCtx of ctx.expr()) {
                indices.push(this.visit(exprCtx) as ast.ExpressionNode);
            }
            left = {
                kind: 'IndexAccess',
                base: varIdNode,
                indices: indices,
                loc: getLoc(ctx)
            };
        }

        const operatorText: string | undefined =
            ctx.PLUSEQ()?.getText() ||
            ctx.MINUSEQ()?.getText() ||
            ctx.MULTEQ()?.getText() ||
            ctx.DIVEQ()?.getText() ||
            ctx.SUREQ()?.getText() ||
            ctx.POWEREQ()?.getText() ||
            ctx.ASSIGN()?.getText();

        if (operatorText === undefined) {
            throw new ASTBuilderError("Assignment operator text not found.", ctx);
        }
        // The right-hand side is now an assignmentExpr
        const right = this.visit(ctx.assignmentExpr()!) as ast.ExpressionNode;

        return {
            kind: 'AssignmentExpression',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }

    // assignmentExprの #StructAssign (VAR_ID -> ... ASSIGN assignmentExpr)
    visitStructAssign(ctx: StructAssignContext): ast.StructMemberAssignmentNode {
        const base = this.createIdentifierNode(ctx.VAR_ID(0)!);
        const members: ast.IdentifierNode[] = [];
        for (let i=0; i< ctx.ARROW().length; i++) {
            const nextMemberCtx = ctx.VAR_ID(i+1) || ctx.FUNC_ID(i);
            if (nextMemberCtx) {
                members.push(this.createIdentifierNode(nextMemberCtx as TerminalNode));
            } else {
                throw new ASTBuilderError(`Member identifier not found after ARROW at index ${i}`, ctx);
            }
        }
        const operatorToken = ctx.ASSIGN();
        if (!operatorToken) throw new ASTBuilderError("Assignment operator not found for struct", ctx);
        // The right-hand side is now an assignmentExpr
        const right = this.visit(ctx.assignmentExpr()!) as ast.ExpressionNode;
        const operatorText: string | undefined = operatorToken.getText();
        if (operatorText === undefined) {
            throw new ASTBuilderError("Operator text is undefined for struct assignment.", ctx);
        }

        return {
            kind: 'StructMemberAssignment',
            base: base,
            members: members,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }

    // assignmentExprの #ListAssign ([VAR_ID, ...] = assignmentExpr)
    visitListAssign(ctx: ListAssignContext): ast.ListDestructuringAssignmentNode {
        const targets: ast.IdentifierNode[] = [];
        for (const varIdCtx of ctx.VAR_ID()) {
            targets.push(this.createIdentifierNode(varIdCtx));
        }
        const operatorToken = ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN();
        if (!operatorToken) throw new ASTBuilderError("Assignment operator not found for list assign", ctx);
        // The right-hand side is now an assignmentExpr
        const right = this.visit(ctx.assignmentExpr()!) as ast.ExpressionNode;
        const operatorText: string | undefined = operatorToken.getText();
        if (operatorText === undefined) {
            throw new ASTBuilderError("Operator text is undefined for list assignment.", ctx);
        }

        return {
            kind: 'ListDestructuringAssignment',
            targets: targets,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }

    // New: Handles the #NoAssignment case, which is just a ternary expression
    visitNoAssignment(ctx: NoAssignmentContext): ast.ExpressionNode {
        return this.visit(ctx.ternaryExpr()!) as ast.ExpressionNode;
    }

    visitDefinitionStatement(ctx: DefinitionStatementContext): ast.DefinitionStatementNode {
        return this.visit(ctx.functionDefinition()!) as ast.DefinitionStatementNode;
    }

    // ifstatement
    visitIfStatement(ctx: IfStatementContext): ast.IfStatementNode {
        return this.visit(ctx.functionIf()!) as ast.IfStatementNode;
    }

    // functionIf #If
    visitIf(ctx: IfContext): ast.IfStatementNode {
        const condition = this.visit(ctx.expr()!) as ast.ExpressionNode;
        const consequence = this.visit(ctx.block(0)!) as ast.StatementNode; // 最初のblock

        let alternative: ast.StatementNode | undefined;
        if (ctx.ELSE()) {
            if (ctx.block(1)) { // else block
                alternative = this.visit(ctx.block(1)!) as ast.StatementNode;
            } else if (ctx.functionIf()) {
                alternative = this.visit(ctx.functionIf()!) as ast.StatementNode;
            }
        }

        return {
            kind: 'IfStatement',
            condition: condition,
            consequence: consequence,
            alternative: alternative,
            loc: getLoc(ctx)
        };
    }

    // forstatement
    visitForStatement(ctx: ForStatementContext): ast.ForStatementNode {
        return this.visit(ctx.functionFor()!) as ast.ForStatementNode;
    }

    // functionFor #For
    visitFor(ctx: ForContext): ast.ForStatementNode {
        const initializers: ast.ExpressionNode[] = [];
        const conditions: ast.ExpressionNode[] = [];
        const updaters: ast.ExpressionNode[] = [];

        let semiCount = 0;
        if (ctx.children) {
            for (const child of ctx.children) {
                if (child instanceof TerminalNode && child.symbol.type === testParser.SEMI) {
                    semiCount++;
                } else if (child instanceof MainContext || child instanceof NoAssignmentContext) {
                    const exprNode = this.visit(child) as ast.ExpressionNode;
                    if (semiCount === 0) {
                        initializers.push(exprNode);
                    } else if (semiCount === 1) {
                        conditions.push(exprNode);
                    } else if (semiCount === 2) {
                        updaters.push(exprNode);
                    }
                }
            }
        }

        const body = this.visit(ctx.block()!) as ast.StatementNode;
        if (!body) {
            throw new ASTBuilderError("For loop body cannot be empty", ctx);
        }

        return {
            kind: 'ForStatement',
            initializers: initializers,
            conditions: conditions,
            updaters: updaters,
            body: body,
            loc: getLoc(ctx)
        };
    }

    // Pre-increment (e.g., ++I)
    visitPreIncrement(ctx: PreIncrementContext): ast.UnaryOperationNode {
        const operand = this.createIdentifierNode(ctx.VAR_ID()!);
        return {
            kind: 'UnaryOperation',
            operator: '++',
            operand: operand,
            loc: getLoc(ctx),
            isPostfix: false
        };
    }

    // Pre-decrement (e.g., --I)
    visitPreDecrement(ctx: PreDecrementContext): ast.UnaryOperationNode {
        const operand = this.createIdentifierNode(ctx.VAR_ID()!);
        return {
            kind: 'UnaryOperation',
            operator: '--',
            operand: operand,
            loc: getLoc(ctx),
            isPostfix: false
        };
    }

    // Postfix Increment/Decrement (e.g., I++, J[0]--)
    visitPostFix(ctx: PostFixContext): ast.UnaryOperationNode {
        const operand = this.visit(ctx.powerExpr()!) as ast.ExpressionNode;
        if (ctx.INC()) {
            return {
                kind: 'UnaryOperation',
                operator: '++',
                operand: operand,
                loc: getLoc(ctx),
                isPostfix: true
            };
        } else if (ctx.DEC()) {
            return {
                kind: 'UnaryOperation',
                operator: '--',
                operand: operand,
                loc: getLoc(ctx),
                isPostfix: true
            };
        }
        throw new ASTBuilderError("Postfix operator not found. This should not happen with a valid parse tree.", ctx);
    }

    // New: Handles postfix expressions (#PostFixExpr)
    visitPostFixExpr(ctx: PostFixExprContext): ast.UnaryOperationNode {
        return this.visit(ctx.postfixExpr()!) as ast.UnaryOperationNode;
    }

    // New: Handles power expressions (#PowExpr)
    visitPowExpr(ctx: PowExprContext): ast.PowerOperationNode | ast.ExpressionNode {
        return this.visit(ctx.powerExpr()!) as ast.PowerOperationNode | ast.ExpressionNode;
    }

    visitWhileStatement(ctx: WhileStatementContext): ast.WhileStatementNode {
        return this.visit(ctx.functionWhile()!) as ast.WhileStatementNode;
    }

    visitDoStatement(ctx: DoStatementContext): ast.DoWhileStatementNode {
        return this.visit(ctx.functionDo()!) as ast.DoWhileStatementNode;
    }

    visitReturnStatement(ctx: ReturnStatementContext): ast.ReturnStatementNode {
        return this.visit(ctx.functionReturn()!) as ast.ReturnStatementNode;
    }

    visitBreakStatement(ctx: BreakStatementContext): ast.BreakStatementNode {
        return this.visit(ctx.functionBreak()!) as ast.BreakStatementNode;
    }

    visitContinueStatement(ctx: ContinueStatementContext): ast.ContinueStatementNode {
        return {
            kind: 'ContinueStatement',
            loc: getLoc(ctx)
        };
    }

    visitStructStatement(ctx: StructStatementContext): ast.StructStatementNode {
        return this.visit(ctx.functionStruct()!) as ast.StructStatementNode;
        }

    visitModuleStatement(ctx: ModuleStatementContext): ast.ModuleStatementNode {
        return this.visit(ctx.functionModule()!) as ast.ModuleStatementNode;
    }


    // block #Sentence と #Sentence1
    visitSentence(ctx: SentenceContext): ast.BlockNode {
        const statements: ast.StatementNode[] = [];
        for (const stmtCtx of ctx.statement()) {
            const stmtNode = this.visit(stmtCtx);
            if (stmtNode) {
                statements.push(stmtNode as ast.StatementNode);
            }
        }
        return { kind: 'Block', statements: statements, loc: getLoc(ctx) };
    }

    visitSentence1(ctx: Sentence1Context): ast.BlockNode {
        const stmtNode = this.visit(ctx.statement()!);
        if (stmtNode) {
            return { kind: 'Block', statements: [stmtNode as ast.StatementNode], loc: getLoc(ctx) };
        }
        return { kind: 'Block', statements: [], loc: getLoc(ctx) };
    }


    // --- 式 (Expression) の訪問 ---
    visitMain(ctx: MainContext): ast.ExpressionNode {
        // The entry point for an expression is now assignmentExpr
        return this.visit(ctx.assignmentExpr()!) as ast.ExpressionNode;
    }

    // Ternary #Ternary
    visitTernary(ctx: TernaryContext): ast.TernaryOperationNode | ast.ExpressionNode {
        const condition = this.visit(ctx.qeOrExpr()!) as ast.ExpressionNode;
        if (ctx.QUESTION()) { // 三項演算子の部分が存在する場合
            // expr が2つあるので、1つ目が consequence, 2つ目が alternative
            const consequence = this.visit(ctx.expr(0)!) as ast.ExpressionNode;
            const alternative = this.visit(ctx.expr(1)!) as ast.ExpressionNode;
            return {
                kind: 'TernaryOperation',
                condition: condition,
                consequence: consequence,
                alternative: alternative,
                loc: getLoc(ctx)
            };
        }
        return condition; // 三項演算子がない場合は、qeOrExprの結果をそのまま返す
    }

    // Binary Operation (AddSub, MulDivSur, Compare, And, Or, QECompare, QEand, QEor)
    visitAddSub(ctx: AddSubContext): ast.ExpressionNode {
        let left = this.visit(ctx.mulDivSurExpr(0)!) as ast.ExpressionNode;
        for (let i = 1; i < ctx.mulDivSurExpr().length; i++) {
            const right = this.visit(ctx.mulDivSurExpr(i)!) as ast.ExpressionNode;
            const operator = ctx.getChild(2 * i - 1) as TerminalNode;
            left = {
                kind: 'BinaryOperation',
                operator: operator.getText()!,
                left: left,
                right: right,
                loc: getLoc(ctx)
            };
        }
        return left;
    }

    visitMulDivSur(ctx: MulDivSurContext): ast.ExpressionNode {
        let left = this.visit(ctx.unaryExpr(0)!) as ast.ExpressionNode;
        for (let i = 1; i < ctx.unaryExpr().length; i++) {
            const right = this.visit(ctx.unaryExpr(i)!) as ast.ExpressionNode;
            const operator = ctx.getChild(2 * i - 1) as TerminalNode;
            left = {
                kind: 'BinaryOperation',
                operator: operator.getText()!,
                left: left,
                right: right,
                loc: getLoc(ctx)
            };
        }
        return left;
    }

    // Unary Operations (Minus, Not)
    visitUnaryMinus(ctx: UnaryMinusContext): ast.UnaryOperationNode {
        const operand = this.visit(ctx.unaryExpr()!) as ast.ExpressionNode;
        return {
            kind: 'UnaryOperation',
            operator: '-',
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    visitNotExpr(ctx: NotExprContext): ast.UnaryOperationNode {
        const operand = this.visit(ctx.unaryExpr()!) as ast.ExpressionNode;
        return {
            kind: 'UnaryOperation',
            operator: '!',
            operand: operand,
            loc: getLoc(ctx)
        };
    }

    // Power
    visitPower(ctx: PowerContext): ast.PowerOperationNode | ast.ExpressionNode {
        const base = this.visit(ctx.indexAccessExpr()!) as ast.ExpressionNode;
        if (ctx.POWER()) {
            const exponent = this.visit(ctx.powerExpr()!) as ast.ExpressionNode;
            return {
                kind: 'PowerOperation',
                base: base,
                exponent: exponent,
                loc: getLoc(ctx)
            };
        }
        return base;
    }

    // IndexAccess (添字アクセス)
    visitIndexAccess(ctx: IndexAccessContext): ast.ExpressionNode {
        const base = this.visit(ctx.primaryExpr()!) as ast.ExpressionNode;
        if (ctx.LBRACKET().length === 0) {
            return base;
        }
        const indices: ast.ExpressionNode[] = [];
        for (const exprCtx of ctx.expr()) {
            indices.push(this.visit(exprCtx) as ast.ExpressionNode);
        }
        return {
            kind: 'IndexAccess',
            base: base,
            indices: indices,
            loc: getLoc(ctx)
        };
    }

    // Number Literals (RatNum, DecNum, Real)
    visitReal(ctx: RealContext): ast.NumberLiteralNode {
        const numNode = this.visit(ctx.num()!);
        if (numNode && numNode.kind === 'NumberLiteral') {
            return numNode as ast.NumberLiteralNode;
        }
        throw new ASTBuilderError('Expected NumberLiteralNode from num', ctx);
    }

    visitRatNum(ctx: RatNumContext): ast.NumberLiteralNode {
        return this.visit(ctx.rational()!) as ast.NumberLiteralNode;
    }

    visitDecNum(ctx: DecNumContext): ast.NumberLiteralNode {
        return this.visit(ctx.decimal()!) as ast.NumberLiteralNode;
    }

    visitRat(ctx: RatContext): ast.NumberLiteralNode {
        const value = ctx.getText();
        return {
            kind: 'NumberLiteral',
            value: value,
            rawText: value,
            loc: getLoc(ctx)
        };
    }

    visitFloat(ctx: FloatContext): ast.NumberLiteralNode {
        const value = ctx.getText();
        return {
            kind: 'NumberLiteral',
            value: parseFloat(value),
            rawText: value,
            loc: getLoc(ctx)
        };
    }


    // Identifier (VId, FId, V2Id)
    visitIdExpr(ctx: IdExprContext): ast.IdentifierNode {
        const idNode = this.visit(ctx.id()!);
        if (idNode && idNode.kind === 'Identifier') {
            return idNode as ast.IdentifierNode;
        }
        throw new ASTBuilderError('Expected IdentifierNode from idExpr', ctx);
    }
    visitVId(ctx: VIdContext): ast.IdentifierNode {
        return this.createIdentifierNode(ctx.VAR_ID()!);
    }
    visitFId(ctx: FIdContext): ast.IdentifierNode {
        const nameNode = this.createIdentifierNode(ctx.FUNC_ID(ctx.FUNC_ID().length - 1)!);
        if (ctx.POINT()) {
            const qualifierNode = this.createIdentifierNode(ctx.FUNC_ID(0)!);
            nameNode.qualifier = qualifierNode;
        }
        return nameNode;
    }
    visitV2Id(ctx: V2IdContext): ast.IdentifierNode {
        return this.createIdentifierNode(ctx.VAR_2()!);
    }

    // FunctionCall #Fcall
    visitFcall(ctx: FcallContext): ast.FunctionCallNode {
        const calleeNameCtx = ctx.FUNC_ID(ctx.FUNC_ID().length - 1)!;
        const callee: ast.IdentifierNode = this.createIdentifierNode(calleeNameCtx);

        if (ctx.COLON2()) {
            callee.name = ctx.COLON2()!.getText() + callee.name;
        }
        if (ctx.POINT()) {
            const moduleNameNode = this.createIdentifierNode(ctx.FUNC_ID(0)!);
            callee.qualifier = moduleNameNode;
        }

        const args: ast.ExpressionNode[] = [];
        if (ctx.expr()) {
            for (const argCtx of ctx.expr()) {
                args.push(this.visit(argCtx) as ast.ExpressionNode);
            }
        }
        return {
            kind: 'FunctionCall',
            callee: callee,
            args: args,
            loc: getLoc(ctx)
        };
    }

    // Paren #Paren
    visitParen(ctx: ParenContext): ast.ParenExpressionNode {
        const expression = this.visit(ctx.expr()!) as ast.ExpressionNode;
        return {
            kind: 'ParenExpression',
            expression: expression,
            loc: getLoc(ctx)
        };
    }

    // Special Numbers
    visitSpecNum(ctx: SpecNumContext): ast.SpecialNumberNode {
        if (ctx instanceof ImaContext) {
            return this.visitIma(ctx);
        } else if (ctx instanceof PiContext) {
            return this.visitPi(ctx);
        } else if (ctx instanceof NapContext) {
            return this.visitNap(ctx);
        } else if (ctx instanceof BefContext) {
            return this.visitBef(ctx);
        } else if (ctx instanceof BefNContext) {
            return this.visitBefN(ctx);
        }
        return {
            kind: 'SpecialNumber',
            name: ctx.getText(),
            loc: getLoc(ctx)
        };
    }

    visitIma(ctx: ImaContext): ast.SpecialNumberNode {
        return { kind: 'SpecialNumber', name: ctx.IMAGINARY()!.getText(), loc: getLoc(ctx) };
    }

    visitPi(ctx: PiContext): ast.SpecialNumberNode {
        return { kind: 'SpecialNumber', name: ctx.PI()!.getText(), loc: getLoc(ctx) };
    }

    visitNap(ctx: NapContext): ast.SpecialNumberNode {
        return { kind: 'SpecialNumber', name: ctx.NAPIER()!.getText(), loc: getLoc(ctx) };
    }

    visitBef(ctx: BefContext): ast.SpecialNumberNode {
        return { kind: 'SpecialNumber', name: ctx.BEFORE()!.getText(), loc: getLoc(ctx) };
    }

    visitBefN(ctx: BefNContext): ast.SpecialNumberNode {
        return { kind: 'SpecialNumber', name: ctx.BEFORE_N()!.getText(), loc: getLoc(ctx) };
    }


    // String Literals #StringLiteral, #CharLiteral
    visitStringLiteral(ctx: StringLiteralContext): ast.StringLiteralNode {
        const rawText = ctx.STRING2()!.getText();
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'StringLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }
    visitCharLiteral(ctx: CharLiteralContext): ast.CharLiteralNode {
        const rawText = ctx.STRING1()!.getText();
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'CharLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }

    // List Literals #List (ListContext)
    visitListExpr(ctx: ListExprContext): ast.ListLiteralNode {
        const elements: ast.ExpressionNode[] = [];
        for (const exprCtx of ctx.expr()) {
            elements.push(this.visit(exprCtx) as ast.ExpressionNode);
        }
        return {
            kind: 'ListLiteral',
            elements: elements,
            loc: getLoc(ctx)
        };
    }

    // Distributed Polynomial Literals #DpLiteral
    visitDpLiteral(ctx: DpLiteralContext): ast.DistributedPolynomialLiteralNode {
        return this.visit(ctx.dpoly()!) as ast.DistributedPolynomialLiteralNode;
    }

    // dpoly #Dp
    visitDp(ctx: DpContext): ast.DistributedPolynomialLiteralNode {
        const allInts = ctx.INT();
        const terms: number[] = [];
        let modulus: number | undefined = undefined;

        if (ctx.COLON()) {
            modulus = parseInt(allInts[allInts.length - 1].getText(), 10);
            for (let i = 0; i < allInts.length - 1; i++) {
                terms.push(parseInt(allInts[i].getText(), 10));
            }
        } else {
            for (const intToken of allInts) {
                terms.push(parseInt(intToken.getText(), 10));
            }
        }

        return {
            kind: 'DistributedPolynomialLiteral',
            terms: terms,
            modulus: modulus,
            loc: getLoc(ctx)
        };
    }

    // functionDefinition #Def
    visitDef(ctx: DefContext): ast.DefinitionStatementNode {
        const name = this.createIdentifierNode(ctx.FUNC_ID()!);
        const parameters: ast.IdentifierNode[] = [];
        if (ctx.VAR_ID()) {
            for (const varIdCtx of ctx.VAR_ID()) {
                parameters.push(this.createIdentifierNode(varIdCtx));
            }
        }
        const body = this.visit(ctx.block()!) as ast.StatementNode;
        return {
            kind: 'FunctionDefinition',
            name: name,
            parameters: parameters,
            body: body,
            loc: getLoc(ctx)
        };
    }

    // functionWhile #While
    visitWhile(ctx: WhileContext): ast.WhileStatementNode {
        const conditions: ast.ExpressionNode[] = [];
        if (ctx.expr()) {
            for (const exprCtx of ctx.expr()) {
                conditions.push(this.visit(exprCtx) as ast.ExpressionNode);
            }
        }
        const body = this.visit(ctx.block()!) as ast.StatementNode;
        return {
            kind: 'WhileStatement',
            conditions: conditions,
            body: body,
            loc: getLoc(ctx)
        };
    }

    // functionDo #Do
    visitDo(ctx: DoContext): ast.DoWhileStatementNode {
        const body = this.visit(ctx.block()!) as ast.StatementNode;
        const conditions: ast.ExpressionNode[] = [];
        if (ctx.expr()) {
            for (const exprCtx of ctx.expr()) {
                conditions.push(this.visit(exprCtx) as ast.ExpressionNode);
            }
        }
        return {
            kind: 'DoWhileStatement',
            body: body,
            conditions: conditions,
            loc: getLoc(ctx)
        };
    }

    // functionReturn #Return
    visitReturn(ctx: ReturnContext): ast.ReturnStatementNode {
        const value = ctx.expr() ? this.visit(ctx.expr()!) as ast.ExpressionNode : undefined;
        return {
            kind: 'ReturnStatement',
            value: value,
            loc: getLoc(ctx)
        };
    }

    // functionBreak #Break
    visitBreak(ctx: BreakContext): ast.BreakStatementNode {
        return {
            kind: 'BreakStatement',
            loc: getLoc(ctx)
        };
    }

    // functionContinue #Continue
    visitContinue(ctx: ContinueContext): ast.ContinueStatementNode {
        return {
            kind: 'ContinueStatement',
            loc: getLoc(ctx)
        };
    }

    // functionStruct #Strct
    visitStrct(ctx: StrctContext): ast.StructStatementNode {
        const nameCtx = ctx.FUNC_ID(0) || ctx.VAR_ID(0);
        if (!nameCtx) throw new ASTBuilderError("Struct name not found", ctx);
        const name = this.createIdentifierNode(nameCtx as TerminalNode);
        const members: ast.IdentifierNode[] = [];
        const memberIdCtxs = [...(ctx.FUNC_ID() || []), ...(ctx.VAR_ID() || [])];
        for (let i = 1; i < memberIdCtxs.length; i++) {
            const memberNode = this.createIdentifierNode(memberIdCtxs[i] as TerminalNode);
            if (memberNode) {
                members.push(memberNode as ast.IdentifierNode);
            }
        }
        return {
            kind: 'StructStatement',
            name: name,
            members: members,
            loc: getLoc(ctx)
        };
    }

    // ModuleStatement 関連
    visitModuleAssign(ctx: ModuleAssignContext): ast.ModuleVariableDeclarationNode {
        const scopeToken = ctx.EXTERN() || ctx.STATIC() || ctx.GLOBAL() || ctx.LOCAL();
        const variables: ast.IdentifierNode[] = [];
        for (const varIdCtx of ctx.VAR_ID()) {
            variables.push(this.createIdentifierNode(varIdCtx));
        }
        return {
            kind: 'ModuleVariableDeclaration',
            scope: scopeToken!.getText() as any,
            variables: variables,
            loc: getLoc(ctx)
        };
    }

    visitModuleFunction(ctx: ModuleFunctionContext): ast.LocalFunctionDeclarationNode {
        const functions: ast.IdentifierNode[] = [];
        for (const funcIdCtx of ctx.FUNC_ID()) {
            functions.push(this.createIdentifierNode(funcIdCtx));
        }
        return {
            kind: 'LocalFunctionDeclaration',
            functions: functions,
            loc: getLoc(ctx)
        };
    }

    visitModuleStart(ctx: ModuleStartContext): ast.ModuleDeclarationNode {
        return {
            kind: 'ModuleDeclaration',
            name: this.createIdentifierNode(ctx.FUNC_ID()!),
            loc: getLoc(ctx)
        };
    }

    visitModuleEnd(ctx: ModuleEndContext): ast.EndModuleNode {
        return {
            kind: 'EndModule',
            loc: getLoc(ctx)
        };
    }

    // 二項演算子 (Compare, And, Or, QECompare, QEand, QEor)
    private visitBinaryOp(ctx: ParserRuleContext, operandGetter: (i: number) => ParserRuleContext | null): ast.ExpressionNode {
        let left = this.visit(operandGetter(0)!) as ast.ExpressionNode;
        for (let i = 1; ; i++) {
            const operand = operandGetter(i);
            if (!operand) break;
            const operator = ctx.getChild(2 * i - 1) as TerminalNode;
            const right = this.visit(operand)! as ast.ExpressionNode;
            left = {
                kind: 'BinaryOperation',
                operator: operator.getText()!,
                left: left,
                right: right,
                loc: getLoc(operator)
            };
        }
        return left;
    }

    visitQEor(ctx: QEorContext): ast.ExpressionNode {
        return this.visitBinaryOp(ctx, (i) => ctx.qeAndExpr(i));
    }

    visitQEand(ctx: QEandContext): ast.ExpressionNode {
        return this.visitBinaryOp(ctx, (i) => ctx.qeCompareExpr(i));
    }

    visitQECompare(ctx: QECompareContext): ast.ExpressionNode {
        return this.visitBinaryOp(ctx, (i) => ctx.orExpr(i));
    }

    visitOr(ctx: OrContext): ast.ExpressionNode {
        return this.visitBinaryOp(ctx, (i) => ctx.andExpr(i));
    }

    visitAnd(ctx: AndContext): ast.ExpressionNode {
        return this.visitBinaryOp(ctx, (i) => ctx.compareExpr(i));
    }

    visitCompare(ctx: CompareContext): ast.ExpressionNode {
        return this.visitBinaryOp(ctx, (i) => ctx.addSubExpr(i));
    }
}
