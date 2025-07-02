import {
    CharStream, CommonTokenStream, // <- testParser.ts が使用
    Token, // <- testParser.ts が使用
    BaseErrorListener, // <- testListener.ts が使用
    ParseTreeListener, // <- testListener.ts が使用
    ParserRuleContext, // <- ここで使う
    TerminalNode, // <- ここで使う
    ErrorNode, // <- testListener.ts が使用
    ParseTreeWalker, 
    AbstractParseTreeVisitor // <- ここで使う
} from 'antlr4ng';

// .ts ファイルをインポート 
import { testVisitor } from './.antlr/testVisitor.js';
import * as ast from './testAst.js'

// コンテキストクラスの型をインポート
import { ProgContext } from "./.antlr/testParser.js";
import { ExprStatementContext } from "./.antlr/testParser.js";
import { EmptyLineStatementContext } from "./.antlr/testParser.js";
import { AssignStatementContext } from "./.antlr/testParser.js";
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
import { DefContext } from "./.antlr/testParser.js";
import { IfContext } from "./.antlr/testParser.js";
import { ForiniContext } from "./.antlr/testParser.js";
import { ForconContext } from "./.antlr/testParser.js";
import { Forup1Context } from "./.antlr/testParser.js";
import { Forup2Context } from "./.antlr/testParser.js";
import { Forup3Context } from "./.antlr/testParser.js";
import { Forup4Context } from "./.antlr/testParser.js";
import { Forup5Context } from "./.antlr/testParser.js";
import { ForContext } from "./.antlr/testParser.js";
import { WhileContext } from "./.antlr/testParser.js";
import { DoContext } from "./.antlr/testParser.js";
import { ReturnContext } from "./.antlr/testParser.js";
import { ContinueContext } from "./.antlr/testParser.js";
import { BreakContext } from "./.antlr/testParser.js";
import { StrctContext } from "./.antlr/testParser.js";
import { FcallContext } from "./.antlr/testParser.js";
import { ModuleAssignContext } from "./.antlr/testParser.js";
import { ModuleFunctionContext } from "./.antlr/testParser.js";
import { ModuleStartContext } from "./.antlr/testParser.js";
import { ModuleEndContext } from "./.antlr/testParser.js";
import { MainContext } from "./.antlr/testParser.js";
import { TernaryContext } from "./.antlr/testParser.js";
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
import { PowerExprRuleContext } from "./.antlr/testParser.js";
import { PowerContext } from "./.antlr/testParser.js";
import { IndexAccessContext } from "./.antlr/testParser.js";
import { RealContext } from "./.antlr/testParser.js";
import { IdExprContext } from "./.antlr/testParser.js";
import { FCallExprContext } from "./.antlr/testParser.js";
import { ParenContext } from "./.antlr/testParser.js";
import { SpecNumContext } from "./.antlr/testParser.js";
import { StringLiteralContext } from "./.antlr/testParser.js";
import { CharLiteralContext } from "./.antlr/testParser.js";
import { ListLiteralContext } from "./.antlr/testParser.js";
import { RatContext } from "./.antlr/testParser.js";
import { PeriodContext } from "./.antlr/testParser.js";
import { FloatContext } from "./.antlr/testParser.js";
import { RatNumContext } from "./.antlr/testParser.js";
import { DecNumContext } from "./.antlr/testParser.js";
import { ZeroNumContext } from "./.antlr/testParser.js";
import { NatNumContext } from "./.antlr/testParser.js";
import { VIdContext } from "./.antlr/testParser.js";
import { FIdContext } from "./.antlr/testParser.js";
import { V2IdContext } from "./.antlr/testParser.js";
import { ImaContext } from "./.antlr/testParser.js";
import { PiContext } from "./.antlr/testParser.js";
import { NapContext } from "./.antlr/testParser.js";
import { BefContext } from "./.antlr/testParser.js";
import { BefNContext } from "./.antlr/testParser.js";
import { ListExprContext } from "./.antlr/testParser.js";
import { SentenceContext } from "./.antlr/testParser.js";
import { Sentence1Context } from "./.antlr/testParser.js";
import { AssignContext } from "./.antlr/testParser.js";
import { StructAssignContext } from "./.antlr/testParser.js";
import { ListAssignContext } from "./.antlr/testParser.js";


// ヘルパー関数: ParserRuleContext から loc 情報を取得

function getLoc(ctx: ParserRuleContext): ast.ASTNode['loc'];

function getLoc(node: TerminalNode): ast.ASTNode['loc'];

function getLoc(arg: ParserRuleContext | TerminalNode): ast.ASTNode['loc'] {
    if (arg instanceof ParserRuleContext) {
        const ctx = arg as ParserRuleContext;
        const startToken: Token = ctx.start!;
        const stopToken: Token | undefined = ctx.stop ?? undefined; 

        return {
            startLine: startToken.line,
            startColumn: startToken.column,
            endLine: stopToken?.line,
            endColumn: stopToken?.column,
        };
    } else {
        const terminalNode = arg as TerminalNode;
        const token: Token = terminalNode.symbol!; 

        return {
            startLine: token.line,
            startColumn: token.column,
            endLine: token.line,
            endColumn: token.column + (token.text?.length ?? 0) - 1,
        };
    }
}

// カスタム Visitor クラス
export class AsirASTBuilder extends AbstractParseTreeVisitor<ast.ASTNode | undefined> implements testVisitor<ast.ASTNode | undefined> {

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
        const expression = this.visit(ctx.expr()) as ast.ExpressionNode;
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

    // assignment (SEMI | DOLLAR) #AssignStatement
    visitAssignStatement(ctx: AssignStatementContext): ast.AssignmentStatementNode | ast.StructMemberAssignmentNode | ast.ListDestructuringAssignmentNode {
        const assignmentNode = this.visit(ctx.assignment());
        if (!assignmentNode) throw new Error('Assignment node not found');
        return assignmentNode as any; 
    }

    // assignmentの #Assign (VAR_ID ... ASSIGN expr)
    visitAssign(ctx: AssignContext): ast.AssignmentStatementNode {
        const varIdNode = this.visit(ctx.VAR_ID()) as ast.IdentifierNode;
        let left: ast.ExpressionNode = varIdNode;

        // 添字アクセスがある場合
        if (ctx.LBRACKET().length > 0) {
            const indices: ast.ExpressionNode[] = [];
            for (const exprCtx of ctx.expr().slice(0, ctx.LBRACKET().length)) { 
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
            ctx.PLUSEQ()?.symbol.text || 
            ctx.MINUSEQ()?.symbol.text || 
            ctx.MULTEQ()?.symbol.text || 
            ctx.DIVEQ()?.symbol.text || 
            ctx.SUREQ()?.symbol.text || 
            ctx.POWEREQ()?.symbol.text || 
            ctx.ASSIGN()?.symbol.text;

        if (operatorText === undefined) {
            throw new Error("Assignment operator text not found. This should not happen with a valid parse tree.");
        }
        const right = this.visit(ctx.expr()[ctx.expr().length - 1]) as ast.ExpressionNode;

        return {
            kind: 'AssignmentStatement',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }

    // assignmentの #StructAssign (VAR_ID -> ... ASSIGN expr)
    visitStructAssign(ctx: StructAssignContext): ast.StructMemberAssignmentNode {
        const base = this.visit(ctx.VAR_ID(0)!) as ast.IdentifierNode;
        const members: ast.IdentifierNode[] = [];
        for (let i=0; i< ctx.ARROW().length; i++) { 
            const nextMemberCtx = ctx.VAR_ID(i) || ctx.FUNC_ID(i);
            if (nextMemberCtx) {
                members.push(this.visit(nextMemberCtx) as ast.IdentifierNode);
            } else {
                throw new Error(`Member identifier not found after ARROW at index ${i}`);
            }
        }
        const operatorToken = ctx.ASSIGN(); // StructAssign は ASSIGN のみ？
        if (!operatorToken) throw new Error("Assignment operator not found for struct");
        const right = this.visit(ctx.expr()) as ast.ExpressionNode;
        const operatorText: string | undefined = operatorToken.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Operator text is undefined for struct assignment.");
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

    // assignmentの #ListAssign ({VAR_ID, ...} = expr)
    visitListAssign(ctx: ListAssignContext): ast.ListDestructuringAssignmentNode {
        const targets: ast.IdentifierNode[] = [];
        for (const varIdCtx of ctx.VAR_ID()) {
            targets.push(this.visit(varIdCtx) as ast.IdentifierNode);
        }
        const operatorToken = ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN();
        if (!operatorToken) throw new Error("Assignment operator not found for list assign");
        const right = this.visit(ctx.expr()) as ast.ExpressionNode;
        const operatorText: string | undefined = operatorToken.symbol?.text; // symbol?.text を使用
        if (operatorText === undefined) {
            throw new Error("Operator text is undefined for struct assignment.");
        }

        return {
            kind: 'ListDestructuringAssignment',
            targets: targets,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }

    // forstatement
    visitIfStatement(ctx: IfStatementContext): ast.IfStatementNode {
        return this.visitIf(ctx as IfContext);
    }
    // functionIf #If
    visitIf(ctx: IfContext): ast.IfStatementNode {
        const condition = this.visit(ctx.expr()) as ast.ExpressionNode;
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
        return this.visitFor(ctx as unknown as ForContext);
    }
    // functionFor #For
    visitFor(ctx: ForContext): ast.ForStatementNode {
        const initializers: ast.AssignmentStatementNode[] = [];
        for (const initCtx of ctx.forInitializer()) {
            const initNode = this.visit(initCtx);
            if(initNode) {
                initializers.push(initNode as ast.AssignmentStatementNode);
            }
        }

        const conditions: ast.ExpressionNode[] = [];
        for (const condCtx of ctx.forCondition()) {
            const condNode = this.visit(condCtx);
            if(condNode) {
                conditions.push(condNode as ast.ExpressionNode);
            }
        }

        const updaters: ast.ExpressionNode[] = [];
        for (const updateCtx of ctx.forUpdate()) {
            const updateNode = this.visit(updateCtx);
            if(updateNode) {
                updaters.push(updateNode as ast.ExpressionNode); 
            }
        }

        const body = this.visit(ctx.block()) as ast.StatementNode;
        if (!body) {
            throw new Error("For loop body cannot be empty");
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
    // forInitializer 
    visitForini(ctx: ForiniContext): ast.AssignmentStatementNode {
        const left = this.visit(ctx.VAR_ID()) as ast.IdentifierNode;
        const operatorText: string | undefined = ctx.ASSIGN()!.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        const right = this.visit(ctx.expr()) as ast.ExpressionNode;
        return {
            kind: 'AssignmentStatement',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }
    // forCondition 
    visitForcon(ctx: ForconContext): ast.ExpressionNode {
        return this.visit(ctx.expr()) as ast.ExpressionNode;
    }
    // forUpdate の各代替規則 
    // Forup1 は AssignmentStatementNode
    visitForup1(ctx: Forup1Context): ast.AssignmentStatementNode {
        const left = this.visit(ctx.VAR_ID()!) as ast.IdentifierNode;
        const operatorText: string | undefined = ctx.ASSIGN()!.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        const right = this.visit(ctx.expr()) as ast.ExpressionNode;
        return {
            kind: 'AssignmentStatement',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }
    // Forup2, Forup3 は UnaryOperationNode (後置インクリメント/デクリメント)
    visitForup2(ctx: Forup2Context): ast.UnaryOperationNode {
        const operand = this.visit(ctx.VAR_ID()!) as ast.IdentifierNode; 
        const operatorText: string | undefined = ctx.INC()!.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        return {
            kind: 'UnaryOperation',
            operator: operatorText,
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    visitForup3(ctx: Forup3Context): ast.UnaryOperationNode {
        const operand = this.visit(ctx.VAR_ID()!) as ast.IdentifierNode;
        const operatorText: string | undefined = ctx.DEC()!.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        return {
            kind: 'UnaryOperation',
            operator: operatorText,
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    // Forup4, Forup5 は UnaryOperationNode (前置インクリメント/デクリメント)
    visitForup4(ctx: Forup4Context): ast.UnaryOperationNode {
        const operand = this.visit(ctx.VAR_ID()!) as ast.IdentifierNode;
        const operatorText: string | undefined = ctx.INC()!.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        return {
            kind: 'UnaryOperation',
            operator: operatorText,
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    visitForup5(ctx: Forup5Context): ast.UnaryOperationNode {
        const operand = this.visit(ctx.VAR_ID()) as ast.IdentifierNode;
        const operatorText: string | undefined = ctx.DEC()!.symbol?.text;
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        return {
            kind: 'UnaryOperation',
            operator: operatorText,
            operand: operand,
            loc: getLoc(ctx)
        };
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
        const stmtNode = this.visit(ctx.statement());
        if (stmtNode) {
            return { kind: 'Block', statements: [stmtNode as ast.StatementNode], loc: getLoc(ctx) };
        }
        return { kind: 'Block', statements: [], loc: getLoc(ctx) };
    }


    // --- 式 (Expression) の訪問 ---

    // Ternary #Ternary
    visitTernary(ctx: TernaryContext): ast.TernaryOperationNode | ast.ExpressionNode {
        const condition = this.visit(ctx.qeOrExpr()) as ast.ExpressionNode;
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
    visitAddSub(ctx: AddSubContext): ast.BinaryOperationNode {
        let leftExpr = this.visit(ctx.mulDivSurExpr(0)!) as ast.ExpressionNode;
        let operatorToken : TerminalNode | null = null;
        let plusIndex = 0; 
        let minusIndex = 0; 

        for (let i = 1; i < ctx.mulDivSurExpr().length; i++) {
            const rightExpr = this.visit(ctx.mulDivSurExpr(i)!) as ast.ExpressionNode; 
            const nextPlusToken = ctx.PLUS(plusIndex);
            const nextMinusToken = ctx.MINUS(minusIndex);
            if (nextPlusToken !== null) {
                operatorToken = ctx.PLUS(plusIndex);
                plusIndex++;
            } else if (nextMinusToken !== null) {
                operatorToken = ctx.MINUS(minusIndex);
                minusIndex++;
            } else {
                throw new Error(`Logical error: Operator not found for mulDivSurExpr at index ${i}`);
            }
            
            if (operatorToken === null) { 
                throw new Error(`Operator token is undefined at index ${i}`);
            }

            const opText = operatorToken.symbol?.text; // string | undefined

            if (opText === undefined) {
                throw new Error(`Operator symbol text is undefined for mulDivSurExpr at index ${i}.`);
            }

            leftExpr = {
                kind: 'BinaryOperation',
                operator: opText, 
                left: leftExpr,
                right: rightExpr,
                loc: getLoc(operatorToken) 
            };
        }
        return leftExpr as ast.BinaryOperationNode;
    }
    // MulDivSur も同様に
    visitMulDivSur(ctx: MulDivSurContext): ast.BinaryOperationNode {
        let leftExpr = this.visit(ctx.unaryExpr(0)!) as ast.ExpressionNode;
        let operatorToken : TerminalNode | null = null;
        let mulIndex = 0;
        let divIndex = 0;
        let surIndex = 0;
        for (let i = 1; i < ctx.unaryExpr().length; i++) {
            const rightExpr = this.visit(ctx.unaryExpr(i)!) as ast.ExpressionNode;
            const nextMulToken = ctx.MULT(mulIndex);
            const nextDivToken = ctx.DIV(divIndex);
            const nextSurToken = ctx.SUR(surIndex);
            if (nextMulToken !== null) {
                operatorToken = ctx.MULT(mulIndex);
                mulIndex++;
            } else if (nextDivToken !== null) {
                operatorToken = ctx.DIV(divIndex);
                divIndex++;
            } else if (nextSurToken !== null) {
                operatorToken = ctx.SUR(surIndex);
                surIndex++;
            } else {
                throw new Error(`Logical error: Operator not found for unaryExpr at index ${i}`);
            }
            if (operatorToken === null) {
                throw new Error(`Operator token is undefined at index ${i}`);
            }
            const opText = operatorToken.symbol?.text; 
            if (opText === undefined) {
                throw new Error(`Operator symbol text is undefined for mulDivSurExpr at index ${i}.`);
            }
            leftExpr = {
                kind: 'BinaryOperation',
                operator: opText, 
                left: leftExpr,
                right: rightExpr,
                loc: getLoc(operatorToken) 
            };
        }
        return leftExpr as ast.BinaryOperationNode;
    }

    // Unary Operations (Minus, Not)
    visitUnaryMinus(ctx: UnaryMinusContext): ast.UnaryOperationNode {
        const operand = this.visit(ctx.unaryExpr()) as ast.ExpressionNode;
        return {
            kind: 'UnaryOperation',
            operator: '-',
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    visitNotExpr(ctx: NotExprContext): ast.UnaryOperationNode {
        const operand = this.visit(ctx.unaryExpr()) as ast.ExpressionNode;
        return {
            kind: 'UnaryOperation',
            operator: '!',
            operand: operand,
            loc: getLoc(ctx)
        };
    }

    // Power 
    visitPower(ctx: PowerContext): ast.PowerOperationNode | ast.ExpressionNode {
        const base = this.visit(ctx.indexAccessExpr()) as ast.ExpressionNode;
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
    // #PowerExprRule は powerExpr を呼び出すだけのパススルーなので、ASTノードは生成せず、visit()の結果をそのまま返す
    visitPowerExprRule(ctx: PowerExprRuleContext): ast.ExpressionNode {
        return this.visit(ctx.powerExpr()) as ast.ExpressionNode;
    }


    // IndexAccess (添字アクセス)
    visitIndexAccess(ctx: IndexAccessContext): ast.IndexAccessNode {
        const base = this.visit(ctx.primaryExpr()) as ast.ExpressionNode;
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

    // Number Literals (ZeroNum, RatNum, DecNum, NatNum, Real)
    // #Real は num をラップしているので、num の子ノードを訪問
    visitReal(ctx: RealContext): ast.NumberLiteralNode {
        const numNode = this.visit(ctx.num());
        if (numNode && numNode.kind === 'NumberLiteral') {
            return numNode as ast.NumberLiteralNode;
        }
        throw new Error('Expected NumberLiteralNode from num');
    }
    visitZeroNum(ctx: ZeroNumContext): ast.NumberLiteralNode {
        return { kind: 'NumberLiteral', value: 0, rawText: ctx.ZERO()?.symbol.text, loc: getLoc(ctx) };
    }
    visitNatNum(ctx: NatNumContext): ast.NumberLiteralNode {
        const sign = ctx.MINUS() ? -1 : 1;
        const value = parseInt(ctx.NATURAL.text, 10);
        return { kind: 'NumberLiteral', value: sign * value, rawText: ctx.text, loc: getLoc(ctx) };
    }
    // visitRatNum (Rational number)
    visitRatNum(ctx: RatNumContext): ast.NumberLiteralNode {
        const sign = ctx.MINUS() ? -1 : 1; // 最初のMINUSが全体の符号
        const rationalNode = this.visit(ctx.rational()!) as ast.NumberLiteralNode;
        // rationalNode.value は既に数値形式になっていると仮定
        return {
            kind: 'NumberLiteral',
            value: (rationalNode.value as number) * sign,
            rawText: ctx.text, // 元のテキスト
            loc: getLoc(ctx)
        };
    }
    visitRat(ctx: RatNumContext): ast.NumberLiteralNode {
        const num1 = parseInt(ctx.INT(0)!.text, 10);
        const num2 = parseInt(ctx.NATURAL()!.text, 10); // 分母はNATURAL
        const sign1 = ctx.MINUS() ? -1 : 1; // 分子側の符号
        const sign2 = ctx.MINUS() ? -1 : 1; // 分母側の符号
        // 有理数の処理ロジック (例: new Fraction(num1*sign1, num2*sign2))
        // ここでは簡単に浮動小数点数に変換
        return {
            kind: 'NumberLiteral',
            value: (num1 * sign1) / (num2 * sign2),
            rawText: ctx.text,
            loc: getLoc(ctx)
        };
    }
    // visitDecNum (Decimal number)
    visitDecNum(ctx: DecNumContext): ast.NumberLiteralNode {
        const sign = ctx.MINUS() ? -1 : 1;
        const decimalNode = this.visit(ctx.decimal()!) as ast.NumberLiteralNode;
        return {
            kind: 'NumberLiteral',
            value: (decimalNode.value as number) * sign,
            rawText: ctx.text,
            loc: getLoc(ctx)
        };
    }
    // visitPeriod (decimal with POINT)
    visitPeriod(ctx: PeriodContext): ast.NumberLiteralNode {
        const text = ctx.text; // "0.001" or "123.456"
        return {
            kind: 'NumberLiteral',
            value: parseFloat(text),
            rawText: text,
            loc: getLoc(ctx)
        };
    }
    // visitFloat (decimal with EXP)
    visitFloat(ctx: FloatContext): ast.NumberLiteralNode {
        const text = ctx.text; // "1e-5" or "2E"
        return {
            kind: 'NumberLiteral',
            value: parseFloat(text),
            rawText: text,
            loc: getLoc(ctx)
        };
    }


    // Identifier (VId, FId, V2Id)
    visitIdExpr(ctx: IdExprContext): ast.IdentifierNode {
        const idNode = this.visit(ctx.id());
        if (idNode && idNode.kind === 'Identifier') {
            return idNode as ast.IdentifierNode;
        }
        throw new Error('Expected IdentifierNode from idExpr');
    }
    visitVId(ctx: VIdContext): ast.IdentifierNode {
        return { kind: 'Identifier', name: ctx.VAR_ID().text, isVar: true, isSpecialVar: false, loc: getLoc(ctx) };
    }
    visitFId(ctx: FIdContext): ast.IdentifierNode {
        const nameNode = { kind: 'Identifier', name: ctx.FUNC_ID().text, isVar: false, isSpecialVar: false, loc: getLoc(ctx) } as ast.IdentifierNode;
        if (ctx.POINT()) { // `module.func` の形式
            const qualifierNode = this.visit(ctx.FUNC_ID(0)!) as ast.IdentifierNode; // 最初のFUNC_IDがモジュール名
            nameNode.qualifier = qualifierNode;
        }
        return nameNode;
    }
    visitV2Id(ctx: V2IdContext): ast.IdentifierNode {
        return { kind: 'Identifier', name: ctx.VAR_2().text, isVar: false, isSpecialVar: true, loc: getLoc(ctx) };
    }

    // FunctionCall #Fcall
    visitFcall(ctx: FcallContext): ast.FunctionCallNode { // functionCall のコンテキストは FcallContext
        const calleeNameCtx = ctx.FUNC_ID();
        const callee: ast.IdentifierNode = {
            kind: 'Identifier',
            name: calleeNameCtx.text,
            isVar: false, // 関数名はFUNC_IDなのでisVarはfalse
            isSpecialVar: false,
            loc: getLoc(calleeNameCtx)
        };

        if (ctx.COLON2()) { // '::' プレフィックスがある場合
            // callee.qualifier = { kind: 'Identifier', name: ctx.COLON2().text, isVar: false, isSpecialVar: false, loc: getLoc(ctx.COLON2()) };
            // A::B() のような形式をどう解釈するか
            // 例えば、callee.name が 'B' で callee.qualifier.name が 'A'
            // または、callee.name が 'A::B' と結合されるか
            // ここでは簡易的に、callee.name に直接結合する
            callee.name = ctx.COLON2()!.text + callee.name;
        }
        if (ctx.POINT()) { // '.' アクセスがある場合
            // Module.func() の Module は FUNC_ID(0)
            const moduleNameNode = this.visit(ctx.FUNC_ID(0)!) as ast.IdentifierNode; // 最初のFUNC_IDがモジュール名
            callee.qualifier = moduleNameNode;
            callee.name = ctx.FUNC_ID(1)!.text; // 2番目のFUNC_IDが関数名
        }

        const args: ast.ExpressionNode[] = [];
        if (ctx.expr()) { // 引数がある場合
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
        const expression = this.visit(ctx.expr()) as ast.ExpressionNode;
        return {
            kind: 'ParenExpression',
            expression: expression,
            loc: getLoc(ctx)
        };
    }

    // Special Numbers #SpecNum
    visitIma(ctx: ImaContext): ast.SpecialNumberNode {
        const nameText: string | undefined = ctx.IMAGINARY()!.symbol?.text; 
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText, 
            loc: getLoc(ctx.IMAGINARY()!)
        };
    }

    visitPi(ctx: PiContext): ast.SpecialNumberNode {
        const nameText: string | undefined = ctx.PI()!.symbol?.text; 
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.PI()!)
        };
    }

    visitNap(ctx: NapContext): ast.SpecialNumberNode {
        const nameText: string | undefined = ctx.NAPIER()!.symbol?.text; 
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.NAPIER()!)
        };
    }

    visitBef(ctx: BefContext): ast.SpecialNumberNode {
        const nameText: string | undefined = ctx.BEFORE()!.symbol?.text; 
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.BEFORE()!)
        };
    }

    visitBefN(ctx: BefNContext): ast.SpecialNumberNode {
        const nameText: string | undefined = ctx.BEFORE_N()!.symbol?.text; 
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.BEFORE_N()!)
        };
    }

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
        throw new Error(`Unknown SpecialnumContext type: ${ctx.getText()}`);
    }

    // String Literals #StringLiteral, #CharLiteral
    visitStringLiteral(ctx: StringLiteralContext): ast.StringLiteralNode {
        const rawText = ctx.STRING2().text;
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'StringLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }
    visitCharLiteral(ctx: CharLiteralContext): ast.CharLiteralNode {
        const rawText = ctx.STRING1().text;
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'CharLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }

    // List Literals #List (ListContext)
    visitList(ctx: ListExprContext): ast.ListLiteralNode {
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

    // --- 他の visit メソッドも同様に実装 ---
    // functionDefinition #Def
    // functionWhile #While
    // functionDo #Do
    // functionReturn #Return
    // functionBreak #Break
    // functionContinue #Continue
    // functionStruct #Strct
    // ModuleStatement 関連
    // 二項演算子 (Compare, And, Or, QECompare, QEand, QEor) の残りの実装
}