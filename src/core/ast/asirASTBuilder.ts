import { Token, ParserRuleContext, TerminalNode, AbstractParseTreeVisitor, Interval } from 'antlr4ng';

import { asirVisitor } from '../../.antlr/asirVisitor.js';
import * as ast from './asirAst.js'
import * as parser from '../../.antlr/asirParser.js';

// --- loc用のヘルパー関数 ---
function getLoc(ctx: ParserRuleContext | TerminalNode | Token | undefined): ast.SourceLocation | undefined {
    if (!ctx) return undefined;

    let startToken: Token;
    let stopToken: Token;

    if (ctx instanceof ParserRuleContext) {
        if (!ctx.start || !ctx.stop) return undefined;
        startToken = ctx.start;
        stopToken = ctx.stop;
    } else if (ctx instanceof TerminalNode) {
        startToken = ctx.symbol;
        stopToken = ctx.symbol;
    } else {
        startToken = ctx;
        stopToken = ctx;
    }

    return {
        start: {
            line: startToken.line,
            column: startToken.column,
            offset: startToken.start,
        },
        end: {
            line: stopToken.line,
            column: stopToken.column + (stopToken.text?.length || 0),
            offset: stopToken.start + 1,
        }
    };
}

// --- Visitor Class ---
export class AsirASTBuilder extends AbstractParseTreeVisitor<ast.ASTNode> implements asirVisitor<ast.ASTNode> {

    // デフォルト
    protected defaultResult(): ast.ASTNode {
        return { kind: 'Error', message: 'Not implemented or unknown node' } as ast.ErrorNode;
    }

    // --- ヘルパーメソッド ---

    // 構文エラーなどによってctxが存在しない場合にクラッシュを防ぐ
    private visitMandatory<T extends ast.ASTNode>(ctx: ParserRuleContext | undefined, expectedName: string): T {
        if (!ctx) {
            return {
                kind: 'Error',
                message: `Missing expected node: ${expectedName}`
            } as unknown as T;
        }
        const result = this.visit(ctx);
        if (!result) {
            return {
                kind: 'Error',
                message: `Visiting ${expectedName} returned nothing`,
                loc: getLoc(ctx)
            } as unknown as T;
        }
        return result as T;
    }

    // ノードをvisitする
    private visitOptional<T extends ast.ASTNode>(ctx: ParserRuleContext | undefined): T | undefined {
        if (!ctx) return undefined;
        return this.visit(ctx) as T | undefined;
    }

    // 識別子生成
    private createIndeterminateNode(tokenOrNode: TerminalNode | Token): ast.IndeterminateNode {
        const token = (tokenOrNode instanceof TerminalNode) ? tokenOrNode.symbol : tokenOrNode;
        return {
            kind: 'Indeterminate',
            name: token.text || '',
            loc: getLoc(tokenOrNode)
        };
    }

    // --- Program Entry --- 
    visitProg(ctx: parser.ProgContext): ast.ProgramNode {
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

    visitExprStatement(ctx: parser.ExprStatementContext): ast.ExpressionStatementNode {
        return {
            kind: 'ExpressionStatement',
            expression: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'expression'),
            loc: getLoc(ctx)
        };
    }

    visitEmptyStatement(ctx: parser.EmptyLineStatementContext): ast.EmptyStatementNode {
        return { kind: 'EmptyStatement', loc: getLoc(ctx) };
    }

    visitDefinitionStatement(ctx: parser.DefinitionStatementContext): ast.DefinitionStatementNode {
        return this.visitMandatory<ast.DefinitionStatementNode>(ctx.functionDefinition(), 'function definition');
    }

    // ... 他のstatementへの委譲メソッド ...
    visitForwardDeclStatement(ctx: parser.ForwardDeclStatementContext): ast.FormDeclarationNode {
        return this.visitMandatory(ctx.formDeclaration(), 'form declaration');
    }

    visitIfStatement(ctx: parser.IfStatementContext): ast.IfStatementNode {
        return this.visitMandatory(ctx.functionIf(), 'if statement');
    }

    visitForStatement(ctx: parser.ForStatementContext): ast.ForStatementNode {
        return this.visitMandatory(ctx.functionFor(), 'for statement');
    }

    visitWhileStatement(ctx: parser.WhileStatementContext): ast.WhileStatementNode {
        return this.visitMandatory(ctx.functionWhile(), 'while statement');
    }

    visitDoStatement(ctx: parser.DoStatementContext): ast.DoWhileStatementNode {
        return this.visitMandatory(ctx.functionDo(), 'do statement');
    }

    visitReturnStatement(ctx: parser.ReturnStatementContext): ast.ReturnStatementNode {
        return this.visitMandatory(ctx.functionReturn(), 'return statement');
    }

    visitBreakStatement(ctx: parser.BreakStatementContext): ast.BreakStatementNode {
        return this.visitMandatory(ctx.functionBreak(), 'break statement');
    }

    visitContinueStatement(ctx: parser.ContinueStatementContext): ast.ContinueStatementNode {
        return this.visitMandatory(ctx.functionContinue(), 'continue statement');
    }

    visitQuitStatement(ctx: parser.QuitStatementContext): ast.QuitStatementNode {
        return this.visitMandatory(ctx.functionQuit(), 'quit statement');
    }

    visitDebugStatement(ctx: parser.DebugStatementContext): ast.DebugStatementNode {
        return this.visitMandatory(ctx.functionDebug(), 'debug statement');
    }

    visitEndStatement(ctx: parser.EndStatementContext): ast.EndStatementNode {
        return this.visitMandatory(ctx.functionEnd(), 'end statement');
    }

    visitStructStatement(ctx: parser.StructStatementContext): ast.StructStatementNode {
        return this.visitMandatory(ctx.functionStruct(), 'struct statement');
    }

    visitModuleStatement(ctx: parser.ModuleStatementContext): ast.ModuleStatementNode {
        return this.visitMandatory(ctx.functionModule(), 'module statement');
    }

    visitPreproStatement(ctx: parser.PreproStatementContext): ast.PreprocessorNode {
        return this.visitMandatory(ctx.preprocessor(), 'preprocessor');
    }

    // --- expressions ---

    // 二項演算用のヘルパー関数
    private createBinaryOp(
        leftCtx: parser.ExprContext,
        rightCtx: parser.ExprContext,
        operator: string,
        ctx: ParserRuleContext
    ): ast.BinaryOperationNode {
        return {
            kind: 'BinaryOperation',
            operator: operator,
            left: this.visitMandatory<ast.ExpressionNode>(leftCtx, 'left operand'),
            right: this.visitMandatory<ast.ExpressionNode>(rightCtx, 'right operand'),
            loc: getLoc(ctx)
        };
    }

    // --- 1. Atoms & Primary

    visitParenExpr(ctx: parser.ParenExprContext): ast.ParenExpressionNode {
        return { kind: 'ParenExpression', expression: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'expression'), loc: getLoc(ctx) };
    }

    visitNumberLiteral(ctx: parser.NumberLiteralContext): ast.NumberLiteralNode {
        return this.visitMandatory<ast.NumberLiteralNode>(ctx.num(), 'number');
    }

    visitIdLiteral(ctx: parser.IdLiteralContext): ast.IdLiteralNode {
        return this.visitMandatory<ast.IdLiteralNode>(ctx.id(), 'id');
    }

    visitStringLiteralExpr(ctx: parser.StringLiteralExprContext): ast.StringLiteralNode {
        const text = ctx.STRING().getText();
        const value = text.substring(1, text.length -1);
        return { kind: 'StringLiteral', value: value, rawText: text, loc: getLoc(ctx) };
    }

    visitListLiteralExpr(ctx: parser.ListLiteralExprContext): ast.ListLiteralNode { 
        return this.visitMandatory(ctx.list(), 'list literal');
    }

    
    visitDpolyLiteralExpr(ctx: parser.DpolyLiteralExprContext): ast.DistributedPolynomialLiteralNode {
        return this.visitMandatory(ctx.dpoly(), 'distributed polynomial literal'); 
    }

    visitPreChrExpr(ctx: parser.PrecharExprContext): ast.ExpressionNode {
        return this.visitMandatory(ctx.prechar(), 'prechar');
    }

    visitVarExpr(ctx: parser.VarExprContext): ast.IndeterminateNode {
        return this.visitMandatory(ctx.indeterminate(), 'variable');
    }

    visitDottedIdExpr(ctx: parser.DottedIdExprContext): ast.DottedIdentifierNode {
        return this.visitMandatory(ctx.dottedIdentifier(), 'dotted identifier');
    }

    // ---Function calls ---

    visitFCallExpr(ctx: parser.FCallExprContext): ast.FunctionCallNode {
        const callee = this.visitMandatory<ast.QualifiedNameNode>(ctx._path, 'function name');
        const isGlobal = !!ctx._is_global;

        let diffOrders: number[] | undefined = undefined;
        if (ctx._diffOrders && ctx._diffOrders.length > 0) {
            diffOrders = ctx._diffOrders.map(t => parseInt(t.text || '0', 10));
        }
        let args: ast.ExpressionNode[] = [];
        if (ctx._args) {
            args= this.visitMandatory<ast.ExpressionListNode>(ctx._args, 'arguments').expressions;
        }
        let options: ast.OptionPairNode[] = [];
        if(ctx._options && ctx._options.length > 0) {
            options = ctx._options.map(o => this.visitMandatory<ast.OptionPairNode>(o, 'option'));
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

    visitFunctorCallExpr(ctx: parser.FunctorCallExprContext): ast.FunctorCallNode {
        const callee = this.visitMandatory<ast.ExpressionNode>(ctx._callee, 'callee expression');
        let args: ast.ExpressionNode[] = [];
        if (ctx._args) {
            args = this.visitMandatory<ast.ExpressionListNode>(ctx._args, 'arguments').expressions;
        }
        let options: ast.OptionPairNode[] = [];
        if (ctx._options && ctx._options.length > 0) {
            options = ctx._options.map(o => this.visitMandatory<ast.OptionPairNode>(o, 'option'));
        }
        return {
            kind: 'FunctorCall',
            callee: callee,
            args: args,
            options: options,
            loc: getLoc(ctx)
        };
    }

    // --- 2. Suffix Operations ---

    visitMemberAccessExpr(ctx: parser.MemberAccessExprContext): ast.MemberAccessNode {
        const base = this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'base expression');
        const members = ctx.indeterminate().map(id => this.visitMandatory<ast.IndeterminateNode>(id, 'member'));
        return {
            kind: 'MemberAccess',
            base: base,
            members: members,
            loc: getLoc(ctx)
        };
    }

    visitIndexAccessExpr(ctx: parser.IndexAccessExprContext): ast.IndexAccessNode {
        if (!ctx.expr() || ctx.expr().length === 0) { return this.defaultResult() as ast.IndexAccessNode; }

        const baseCtx =ctx.expr(0) ?? undefined;
        const base = this.visitMandatory<ast.ExpressionNode>(baseCtx, 'base expression');

        const indices: ast.ExpressionNode[] = [];
        if (ctx._indices) {
            for (const idxCtx of ctx._indices) {
                indices.push(this.visitMandatory<ast.ExpressionNode>(idxCtx, 'index expression'));
            }
        }
        return {
            kind: 'IndexAccess',
            base: base,
            indices: indices,
            loc: getLoc(ctx)
        };
    }

    visitPostFixExpr(ctx: parser.PostFixExprContext): ast.UnaryOperationNode {
        const op = (ctx.INC() || ctx.DEC())!.getText();
        return {
            kind: 'UnaryOperation',
            operator: op,
            operand: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'operand'),
            isPostfix: true,
            loc: getLoc(ctx)
        };
    }

    
    visitFactorialExpr(ctx: parser.FactorialExprContext): ast.UnaryOperationNode {
        return {
            kind: 'UnaryOperation',
            operator: '!',
            operand: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'operand'),
            isPostfix: true,
            loc: getLoc(ctx)
        };
    }

    // --- 3. Prefix Operations ---

    visitPreFixExpr(ctx: parser.PreFixExprContext): ast.UnaryOperationNode {
        const op = (ctx.INC() || ctx.DEC())!.getText();
        return {
            kind: 'UnaryOperation',
            operator: op,
            operand: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'operand'),
            isPostfix: false,
            loc: getLoc(ctx)
        };
    }

    visitUnarySignExpr(ctx: parser.UnarySignExprContext): ast.UnaryOperationNode {
        const op = (ctx.PLUS() || ctx.MINUS())!.getText();
        return {
            kind: 'UnaryOperation',
            operator: op,
            operand: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'operand'),
            loc: getLoc(ctx)
        };
    }

    visitUnaryNotExpr(ctx: parser.UnaryNotExprContext): ast.UnaryOperationNode {
        return {
            kind: 'UnaryOperation',
            operator: '!',
            operand: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'operand'),
            loc: getLoc(ctx)
        };
    }

    // --- 4. Power ---
    visitPowerExpr(ctx: parser.PowerExprContext): ast.PowerOperationNode {
        return {
            kind: 'PowerOperation',
            base: this.visitMandatory<ast.ExpressionNode>(ctx._base, 'base'),
            exponent: this.visitMandatory<ast.ExpressionNode>(ctx._exponent, 'exponent'),
            loc: getLoc(ctx)
        };
    }

    // -- 5. Binary Operations ---

    
    visitMulDivSurExpr(ctx: parser.MulDivSurExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '*', ctx);
    }

    
    visitAddSubExpr(ctx: parser.AddSubExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '+', ctx);
    }

    visitRelationalExpr(ctx: parser.RelationalExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '==', ctx);
    }

    visitAndExpr(ctx: parser.AndExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, '&&', ctx);
    }

    // QE系
    visitQECompareExpr(ctx: parser.QECompareExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '@==', ctx);
    }

    visitQEAndExpr(ctx: parser.QEAndExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '@&&', ctx);
    }

    visitQEOrExpr(ctx: parser.QEOrExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '@||', ctx);
    }

    visitQENotExpr(ctx: parser.QENotExprContext): ast.BinaryOperationNode {
        // よく考えたらbinaryじゃなくね？（そこまで使わないものなので保留）
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, '@!', ctx);
    }

    visitQEImplExpr(ctx: parser.QEImplExprContext): ast.BinaryOperationNode {
        return this.createBinaryOp(ctx.expr(0)!, ctx.expr(1)!, ctx._op?.text || '@impl', ctx);
    }

    // --- 15. Quote ---
    visitQuoteExpr(ctx: parser.QuoteExprContext): ast.UnaryOperationNode {
        return {
            kind: 'UnaryOperation',
            operator: '`',
            operand: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'quoted expression'),
            loc: getLoc(ctx)
        };
    }

    // --- 16. Ternary ---
    visitTernaryExpr(ctx: parser.TernaryExprContext): ast.ExpressionNode {
        return {
            kind: 'TernaryOperation',
            condition: this.visitMandatory<ast.ExpressionNode>(ctx._condition, 'condition'),
            consequence: this.visitMandatory<ast.ExpressionNode>(ctx._consequence, 'consequence'),
            alternative: this.visitMandatory<ast.ExpressionNode>(ctx._alternative, 'alternative'),
            loc: getLoc(ctx)
        };
    }

    // --- 17. Assignment ---

    visitAssignExpr(ctx: parser.AssignExprContext): ast.AssignmentExpressionNode {
        let leftNode = this.visitMandatory<ast.ExpressionNode>(ctx._left, 'left hand side');
        const lValue = leftNode as ast.LValueNode;

        return {
            kind: 'AssignmentExpression',
            left: lValue,
            operator: ctx._op?.text || '=',
            right: this.visitMandatory<ast.ExpressionNode>(ctx._right, 'right hand side'),
            loc: getLoc(ctx)
        };
    }

    // --- 18. Control Flow ---

    // ヘルパー関数
    private getExpressionList(ctx: parser.ExprlistContext): ast.ExpressionNode[] {
        if (!ctx.expr()) return [];
        return ctx.expr().map(e => 
            this.visitMandatory<ast.ExpressionNode>(e, 'expression in list')
        );
    }

    visitIf(ctx: parser.IfContext): ast.IfStatementNode {
        const condition = this.visitMandatory<ast.ExpressionNode>(ctx._condition, 'if condition');
        const consequent = this.visitMandatory<ast.StatementNode>(ctx._thenBlock, 'then block');
        let alternate: ast.StatementNode | undefined;
        if (ctx._elseBlock) {
            alternate = this.visitMandatory<ast.StatementNode>(ctx._elseBlock, 'else block');
        }
        return {
            kind: 'IfStatement',
            condition: condition,
            thenStatement: consequent,
            elseStatement: alternate,
            loc: getLoc(ctx)
        };
    }

    visitFor(ctx: parser.ForContext): ast.ForStatementNode {
        const initializers = ctx._init ? (this.visit(ctx._init) as ast.ExpressionListNode).expressions : [];
        const conditions = ctx._cond? (this.visit(ctx._cond) as ast.ExpressionListNode).expressions : [];
        const updaters = ctx._update ? (this.visit(ctx._update) as ast.ExpressionListNode).expressions : [];
        const body = this.visitMandatory<ast.StatementNode>(ctx.block(), 'for loop body');

        return {
            kind: 'ForStatement',
            initializers: initializers,
            conditions: conditions,
            updaters: updaters,
            body: body,
            loc: getLoc(ctx)
        };
    }

    visitWhile(ctx: parser.WhileContext): ast.WhileStatementNode {
        const conditions = ctx.exprlist() ? (this.visit(ctx.exprlist()!) as ast.ExpressionListNode).expressions: [];
        const body = this.visitMandatory<ast.StatementNode>(ctx.block(), 'while loop body');

        return {
            kind: 'WhileStatement',
            conditions: conditions,
            body: body,
            loc: getLoc(ctx)
        };
    }

    visitDo(ctx: parser.DoContext): ast.DoWhileStatementNode {
        const conditions = ctx.exprlist() ? (this.visit(ctx.exprlist()!) as ast.ExpressionListNode).expressions : [];
        const body = this.visitMandatory<ast.StatementNode>(ctx.block(), 'do loop body');

        return {
            kind: 'DoWhileStatement',
            body: body,
            conditions: conditions,
            loc: getLoc(ctx)
        };
    }

    visitReturn(ctx: parser.ReturnContext): ast.ReturnStatementNode {
        const value = ctx.expr() ? this.visitMandatory<ast.ExpressionNode>(ctx.expr()!, 'return value') : undefined;
        return {
            kind: 'ReturnStatement',
            value: value,
            loc: getLoc(ctx)
        };
    }

    visitBreak(ctx: parser.BreakContext): ast.BreakStatementNode {
        return { kind: 'BreakStatement', loc: getLoc(ctx) };
    }

    visitContinue(ctx: parser.ContinueContext): ast.ContinueStatementNode {
        return { kind: 'ContinueStatement', loc: getLoc(ctx) };
    }

    visitEnd(ctx: parser.EndContext): ast.EndStatementNode {
        return { kind: 'EndStatement', loc: getLoc(ctx) };
    }

    visitQuit(ctx: parser.QuitContext): ast.QuitStatementNode {
        return { kind: 'QuitStatement', loc: getLoc(ctx) };
    }

    visitDebug(ctx: parser.DebugContext): ast.DebugStatementNode {
        return { kind: 'DebugStatement', loc: getLoc(ctx) };
    }

    // --- 19. Block and Definitions ---

    visitSentence(ctx: parser.SentenceContext): ast.BlockNode {
        const statements: ast.StatementNode[] = [];
        for (const s of ctx.statement()) {
            const res = this.visit(s);
            if (res) statements.push(res as ast.StatementNode);
        }
        return { kind: 'Block', statements: statements, loc: getLoc(ctx) };
    }

    visitSentence1(ctx: parser.Sentence1Context): ast.StatementNode {
        return this.visitMandatory<ast.StatementNode>(ctx.statement(), 'statement');
    }

    visitDef(ctx: parser.DefContext): ast.DefinitionStatementNode {
        const nameNode = this.visitMandatory<ast.IndeterminateNode>(ctx._name, 'function name');

        const parameters: ast.IndeterminateNode[] = [];
        if (ctx.ID && ctx.ID().length > 0) {
            for (const token of ctx.ID()) {
                parameters.push({
                    kind: 'Indeterminate',
                    name: token.getText(),
                    loc: getLoc(token.symbol)
                });
            }
        }

        const body = this.visitMandatory<ast.StatementNode>(ctx._body, 'function body');

        return {
            kind: 'FunctionDefinition',
            name: nameNode,
            parameters: parameters,
            body: body,
            loc: getLoc(ctx)
        };
    }

    visitFormDecl(ctx: parser.FormDeclContext): ast.FormDeclarationNode {
        const nameNode =this.visitMandatory<ast.IndeterminateNode>(ctx._name, 'function name');
        const parameters: ast.IndeterminateNode[] = [];
        if (ctx._params) {
            for (const p of ctx._params) {
                parameters.push(this.visitMandatory<ast.IndeterminateNode>(p, 'parameter'));
            }
        }

        return {
            kind: 'FormDeclaration',
            name: nameNode,
            parameters: parameters,
            loc: getLoc(ctx)
        };
    }

    // --- 20. Module Statements ---

    visitModuleAssign(ctx: parser.ModuleAssignContext): ast.ModuleVariableDeclarationNode {
        const scopeText = (ctx.EXTERN() || ctx.STATIC() || ctx.GLOBAL() || ctx.LOCAL() || ctx.LOCALF())!.getText().toLowerCase();
        const scope = scopeText as 'extern' | 'static' | 'global' | 'local' | 'localf';

        const variables = ctx.indeterminate().map(i =>
            this.visitMandatory<ast.IndeterminateNode>(i, 'variable')
        );

        return {
            kind: 'ModuleVariableDeclaration',
            scope: scope,
            variables: variables,
            loc: getLoc(ctx)
        };
    }

    visitModuleStart(ctx: parser.ModuleStartContext): ast.ModuleDeclarationNode {
        const name = this.visitMandatory<ast.IndeterminateNode>(ctx.indeterminate(), 'module name');
        return { kind: 'ModuleDeclaration', name: name, loc: getLoc(ctx) };
    }

    visitModuleEnd(ctx: parser.ModuleEndContext): ast.EndModuleNode {
        return { kind: 'EndModule', loc: getLoc(ctx) };
    }

    // --- 21. Struct Statements ---
    
    visitStruct(ctx: parser.StructContext): ast.StructStatementNode {
        const name = this.visitMandatory<ast.IndeterminateNode>(ctx._name, 'struct name');
        const members = ctx._members.map(m =>
            this.visitMandatory<ast.IndeterminateNode>(m, 'struct member')
        );
        return {
            kind: 'StructStatement',
            name: name,
            members: members,
            loc: getLoc(ctx) 
        };
    }

    // --- 22. Numerics ---

    visitHexNum(ctx: parser.HexNumContext): ast.NumberLiteralNode {
        return { kind: 'NumberLiteral', value: parseInt(ctx.getText(), 16), rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    visitBitNum(ctx: parser.BitNumContext): ast.NumberLiteralNode {
        const text = ctx.getText();
        return { kind: 'NumberLiteral', value: parseInt(text.replace(/^0[bB]/, ''), 2), rawText: text, loc: getLoc(ctx) };
    }

    
    visitDecNum(ctx: parser.DecNumContext): ast.NumberLiteralNode {
        // decimalルールへ委譲
        return this.visitMandatory<ast.NumberLiteralNode>(ctx.decimal(), 'decimal');
    }

    visitFloat(ctx: parser.FloatContext): ast.NumberLiteralNode {
        const text = ctx.getText();
        const val = ctx.FLOAT() ? parseFloat(text) : parseInt(text, 10);
        return { kind: 'NumberLiteral', value: val, rawText: text, loc: getLoc(ctx) };
    }

    visitRatNum(ctx: parser.RatNumContext): ast.NumberLiteralNode {
        return this.visitMandatory<ast.NumberLiteralNode>(ctx.rational(), 'rational');
    }

    
    visitRat(ctx: parser.RatContext): ast.NumberLiteralNode {
        // RationalLiteralNode を検討するのもあり
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    visitImaNum(ctx: parser.ImaNumContext): ast.NumberLiteralNode {
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    visitApGenNum(ctx: parser.ApGenNumContext): ast.NumberLiteralNode {
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    visitAsGenNum(ctx: parser.AsGenNumContext): ast.NumberLiteralNode {
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    // --- 23. Indeterminate and Primitives ---

    visitFunc(ctx: parser.FuncContext): ast.IndeterminateNode {
        return {
            kind: 'Indeterminate',
            name: ctx.getText(),
            loc: getLoc(ctx)
        };
    }

    visitAtFunc(ctx: parser.AtFuncContext): ast.IndeterminateNode {
        return {
            kind: 'Indeterminate',
            name: ctx.getText(),
            loc: getLoc(ctx)
        };
    }

    visitChFunc(ctx: parser.ChFuncContext): ast.IndeterminateNode {
        return {
            kind: 'Indeterminate',
            name: ctx.getText(),
            loc: getLoc(ctx)
        };
    }

    visitBef(ctx: parser.BefContext): ast.IdLiteralNode {
        return {kind: 'IdLiteral', rawText: ctx.getText(), loc: getLoc(ctx) };
    }
    visitBefN(ctx: parser.BefNContext): ast.IdLiteralNode {
        return {kind: 'IdLiteral', rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    visitV2Id(ctx: parser.V2IdContext): ast.IdLiteralNode {
        return {kind: 'IdLiteral', rawText: ctx.getText(), loc: getLoc(ctx) };
    }

    // --- 24. Preprocessor ---

    visitPDef(ctx: parser.PDefContext): ast.PreprocessorDefineNode {
        const nameToken = ctx._name;
        const nameNode: ast.IndeterminateNode = {
            kind: 'Indeterminate',
            name: nameToken?.text || '',
            loc: getLoc(nameToken!)
        };

        const parameters: ast.IndeterminateNode[] = [];
        if (ctx._params && ctx._params.length > 0) {
            for (const token of ctx._params) {
                parameters.push({
                    kind: 'Indeterminate',
                    name: token.text || '',
                    loc: getLoc(token)
                });
            }
        }

        return {
            kind: 'PreprocessorDefine',
            name: nameNode,
            parameters: parameters,
            body: this.visitMandatory<ast.ExpressionNode>(ctx.expr(), 'define body'),
            loc: getLoc(ctx)
        };
    }

    visitPInc(ctx: parser.PIncContext): ast.PreprocessorIncludeNode {
        let pathType: 'system' | 'local' = 'local';
        let path = '';
        if (ctx._path_sys) {
            pathType = 'system';
            const rawPath = ctx._path_sys.getText();
            path = rawPath.substring(1, rawPath.length - 1);
        } else if (ctx._path_loc) {
            pathType = 'local';
            const rawPath = ctx._path_loc.text || '';
            if (rawPath.length >= 2 && rawPath.startsWith('"') && rawPath.endsWith('"')) {
                path = rawPath.substring(1, rawPath.length - 1);
            } else {
                path = rawPath;
            }
        }

        return {
            kind: 'PreprocessorInclude',
            pathtype: pathType,
            path: path,
            loc: getLoc(ctx)
        };
    }

    visitPIf(ctx: parser.PIfContext): ast.PreprocessorIfNode {
        const directiveText = ctx._directive!.text  || '#if';
        const directive = directiveText.substring(1) as 'if' | 'ifdef' | 'ifndef';
        const condition = this.visitMandatory<ast.ExpressionNode>(ctx._condition, 'preprocessor condition');
        const thenStatements: ast.StatementNode[] = [];
        if (ctx._thenSymts) {
            for (const s of ctx._thenSymts) {
                const res = this.visit(s);
                if (res) thenStatements.push(res as ast.StatementNode);
            }
        }

        const elifClauses: ast.PreprocessorElifNode[] = [];
        if (ctx._elifs) {
            for (const e of ctx._elifs) {
                const res = this.visit(e);
                if (res) elifClauses.push(res as ast.PreprocessorElifNode);
            }
        }

        let elseStatements: ast.PreprocessorElseNode | undefined;
        if (ctx._elseBlk) {
            elseStatements = this.visit(ctx._elseBlk) as ast.PreprocessorElseNode;
        }

        return {
            kind: 'PreprocessorIf',
            directive: directive,
            condition: condition,
            thenStatements: thenStatements,
            elifClauses: elifClauses,
            elseStatements: elseStatements,
            loc: getLoc(ctx)
        };
    }

    visitElifClause(ctx: parser.ElifClauseContext): ast.PreprocessorElifNode {
        const condition = this.visitMandatory<ast.ExpressionNode>(ctx._condition, 'elif condition');

        const statements: ast.StatementNode[] = [];
        if (ctx._statements) {
            for (const e of ctx._statements) {
                const res = this.visit(e);
                if (res) statements.push(res as ast.StatementNode);
            }
        }

        return {
            kind: 'PreprocessorElif',
            condition: condition,
            statements: statements,
            loc: getLoc(ctx)
        };
    }

    visitElseClause(ctx: parser.ElseClauseContext): ast.PreprocessorElseNode {
        const statements: ast.StatementNode[] = [];
        if (ctx._statements) {
            for (const e of ctx._statements) {
                const res = this.visit(e);
                if (res) statements.push(res as ast.StatementNode);
            }
        }

        return {
            kind: 'PreprocessorElse',
            statements: statements,
            loc: getLoc(ctx)
        };
    }


    visitPreChr(ctx: parser.PreChrContext): ast.StringLiteralNode {
        return {
            kind: 'StringLiteral',
            value: ctx.getText(),
            rawText: ctx.getText(),
            loc: getLoc(ctx)
        };
    }

    visitPreChrPlus(ctx: parser.PreChrPlusContext):  ast.StringLiteralNode {
        return {
            kind: 'StringLiteral',
            value: ctx.getText(),
            rawText: ctx.getText(),
            loc: getLoc(ctx)
        };
    }

    // --- 25. other Literals ---
    
    visitListExpr(ctx: parser.ListExprContext): ast.ListLiteralNode {
        const elements = ctx.exprlist() ? (this.visit(ctx.exprlist()!) as ast.ExpressionListNode).expressions : [];
        return { kind: 'ListLiteral', elements: elements, loc: getLoc(ctx) };
    }

    visitDp(ctx: parser.DpContext): ast.DistributedPolynomialLiteralNode {
        const terms: number[] = [];
        if (ctx.INT()) {
            for (const t of ctx.INT()) {
                terms.push(parseInt(t.getText(), 10));
            }
        }

        let modulus: number | undefined;
        if (ctx.COLON()) { modulus = terms.pop(); }

        return { kind: 'DistributedPolynomialLiteral', terms, modulus, loc: getLoc(ctx) };
    }

    visitQualifiedName(ctx: parser.QualifiedNameContext): ast.QualifiedNameNode {
        let moduleNameNode: ast.IndeterminateNode | undefined = undefined;

        if (ctx._moduleName) {
            moduleNameNode = {
                kind: 'Indeterminate',
                name: ctx._moduleName.text || '',
                loc: getLoc(ctx._moduleName)
            };
        }

        const functionName = this.visitMandatory<ast.IndeterminateNode>(ctx._funcName, 'function name');

        return {
            kind: 'QualifiedName',
            moduleName: moduleNameNode,
            functionName: functionName,
            loc: getLoc(ctx)
        };
    }

    // --- 26. others ---
    visitExprlist(ctx: parser.ExprlistContext): ast.ExpressionListNode {
        const expressions: ast.ExpressionNode[] = [];
        if (ctx.expr()) {
            for (const e of ctx.expr()) {
                expressions.push(this.visitMandatory<ast.ExpressionNode>(e, 'expression in list'));
            }
        }
        return {
            kind: 'ExpressionList',
            expressions: expressions,
            loc: getLoc(ctx)
        };
    }

    visitOptionPair(ctx: parser.OptionPairContext): ast.OptionPairNode {
        const key = this.visitMandatory<ast.IndeterminateNode>(ctx._key, 'option key');
        const value = this.visitMandatory<ast.ExpressionNode>(ctx._value, 'option value');

        return {
            kind: 'OptionPair',
            key: key,
            value: value,
            loc: getLoc(ctx)
        };
    }


    // // --- Assignment Expressions ---
    // visitStructAssign(ctx: StructAssignContext): ast.AssignmentExpressionNode {
    //     const leftNode: ast.MemberAccessNode ={
    //         kind: 'MemberAccess',
    //         base: this.createIndeterminateNode(ctx.ID()!),
    //         members: ctx.indeterminate().map(m => this.visitMandatory<ast.IndeterminateNode>(m)),
    //         loc: getLoc(ctx.ID()!)
    //     };
    //     const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN())!.getText();
    //     const rightNode = this.visitMandatory<ast.ExpressionNode>(ctx.assignmentExpr()!);

    //     return {
    //         kind: 'AssignmentExpression',
    //         left: leftNode,
    //         operator: operatorText,
    //         right: rightNode,
    //         loc: getLoc(ctx)
    //     };
    // }

    // visitListAssign(ctx: ListAssignContext): ast.ListDestructuringAssignmentNode {
    //     const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN())!.getText();

    //     return {
    //         kind: 'ListDestructuringAssignment',
    //         targets: ctx.ID().map(v => this.createIndeterminateNode(v)),
    //         operator: operatorText,
    //         right: this.visitMandatory<ast.ExpressionNode>(ctx.assignmentExpr()!),
    //         loc: getLoc(ctx)
    //     };
    // }
}
