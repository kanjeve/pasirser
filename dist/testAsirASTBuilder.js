"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsirASTBuilder = void 0;
const antlr4ng_1 = require("antlr4ng");
// コンテキストクラスの型をインポート
const testParser_js_1 = require("./.antlr/testParser.js");
function getLoc(arg) {
    if (arg instanceof antlr4ng_1.ParserRuleContext) {
        const ctx = arg;
        const startToken = ctx.start;
        const stopToken = ctx.stop ?? undefined;
        return {
            startLine: startToken.line,
            startColumn: startToken.column,
            endLine: stopToken?.line,
            endColumn: stopToken?.column,
        };
    }
    else {
        const terminalNode = arg;
        const token = terminalNode.symbol;
        return {
            startLine: token.line,
            startColumn: token.column,
            endLine: token.line,
            endColumn: token.column + (token.text?.length ?? 0) - 1,
        };
    }
}
// カスタム Visitor クラス
class AsirASTBuilder extends antlr4ng_1.AbstractParseTreeVisitor {
    // visit メソッドが何も返さなかった場合のデフォルト値
    defaultResult() {
        return undefined;
    }
    // 子ノードの訪問結果を結合する方法
    aggregateResult(aggregate, nextResult) {
        return nextResult !== undefined ? nextResult : aggregate;
    }
    // --- プログラムのルートノード ---
    visitProg(ctx) {
        const statements = [];
        for (const stmtCtx of ctx.statement()) {
            const stmtNode = this.visit(stmtCtx); // statementルールを訪問
            if (stmtNode && stmtNode.kind) { // kindプロパティでStatementNodeか確認
                statements.push(stmtNode);
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
    visitExprStatement(ctx) {
        const expression = this.visit(ctx.expr());
        return {
            kind: 'ExpressionStatement',
            expression: expression,
            loc: getLoc(ctx)
        };
    }
    // (SEMI | DOLLAR) #EmptyLineStatement
    visitEmptyStatement(ctx) {
        return {
            kind: 'EmptyStatement',
            loc: getLoc(ctx)
        };
    }
    // assignment (SEMI | DOLLAR) #AssignStatement
    visitAssignStatement(ctx) {
        const assignmentNode = this.visit(ctx.assignment());
        if (!assignmentNode)
            throw new Error('Assignment node not found');
        return assignmentNode;
    }
    // assignmentの #Assign (VAR_ID ... ASSIGN expr)
    visitAssign(ctx) {
        const varIdNode = this.visit(ctx.VAR_ID());
        let left = varIdNode;
        // 添字アクセスがある場合
        if (ctx.LBRACKET().length > 0) {
            const indices = [];
            for (const exprCtx of ctx.expr().slice(0, ctx.LBRACKET().length)) {
                indices.push(this.visit(exprCtx));
            }
            left = {
                kind: 'IndexAccess',
                base: varIdNode,
                indices: indices,
                loc: getLoc(ctx)
            };
        }
        const operatorText = ctx.PLUSEQ()?.getText() ||
            ctx.MINUSEQ()?.getText() ||
            ctx.MULTEQ()?.getText() ||
            ctx.DIVEQ()?.getText() ||
            ctx.SUREQ()?.getText() ||
            ctx.POWEREQ()?.getText() ||
            ctx.ASSIGN()?.getText();
        if (operatorText === undefined) {
            throw new Error("Assignment operator text not found. This should not happen with a valid parse tree.");
        }
        const right = this.visit(ctx.expr()[ctx.expr().length - 1]);
        return {
            kind: 'AssignmentStatement',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }
    // assignmentの #StructAssign (VAR_ID -> ... ASSIGN expr)
    visitStructAssign(ctx) {
        const base = this.visit(ctx.VAR_ID(0));
        const members = [];
        for (let i = 0; i < ctx.ARROW().length; i++) {
            const nextMemberCtx = ctx.VAR_ID(i) || ctx.FUNC_ID(i);
            if (nextMemberCtx) {
                members.push(this.visit(nextMemberCtx));
            }
            else {
                throw new Error(`Member identifier not found after ARROW at index ${i}`);
            }
        }
        const operatorToken = ctx.ASSIGN(); // StructAssign は ASSIGN のみ？
        if (!operatorToken)
            throw new Error("Assignment operator not found for struct");
        const right = this.visit(ctx.expr());
        const operatorText = operatorToken.getText();
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
    visitListAssign(ctx) {
        const targets = [];
        for (const varIdCtx of ctx.VAR_ID()) {
            targets.push(this.visit(varIdCtx));
        }
        const operatorToken = ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN();
        if (!operatorToken)
            throw new Error("Assignment operator not found for list assign");
        const right = this.visit(ctx.expr());
        const operatorText = operatorToken.getText();
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
    visitDefinitionStatement(ctx) {
        return this.visit(ctx.functionDefinition());
    }
    // ifstatement
    visitIfStatement(ctx) {
        return this.visit(ctx.functionIf());
    }
    // functionIf #If
    visitIf(ctx) {
        const condition = this.visit(ctx.expr());
        const consequence = this.visit(ctx.block(0)); // 最初のblock
        let alternative;
        if (ctx.ELSE()) {
            if (ctx.block(1)) { // else block
                alternative = this.visit(ctx.block(1));
            }
            else if (ctx.functionIf()) {
                alternative = this.visit(ctx.functionIf());
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
    visitForStatement(ctx) {
        return this.visit(ctx.functionFor());
    }
    // functionFor #For
    visitFor(ctx) {
        const initializers = [];
        for (const initCtx of ctx.forInitializer()) {
            const initNode = this.visit(initCtx);
            if (initNode) {
                initializers.push(initNode);
            }
        }
        const conditions = [];
        for (const condCtx of ctx.forCondition()) {
            const condNode = this.visit(condCtx);
            if (condNode) {
                conditions.push(condNode);
            }
        }
        const updaters = [];
        for (const updateCtx of ctx.forUpdate()) {
            const updateNode = this.visit(updateCtx);
            if (updateNode) {
                updaters.push(updateNode);
            }
        }
        const body = this.visit(ctx.block());
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
    visitForini(ctx) {
        const left = this.visit(ctx.VAR_ID());
        const operatorText = ctx.ASSIGN().getText();
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        const right = this.visit(ctx.expr());
        return {
            kind: 'AssignmentStatement',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }
    // forCondition 
    visitForcon(ctx) {
        return this.visit(ctx.expr());
    }
    // forUpdate の各代替規則 
    // Forup1 は AssignmentStatementNode
    visitForup1(ctx) {
        const left = this.visit(ctx.VAR_ID());
        const operatorText = ctx.ASSIGN().getText();
        if (operatorText === undefined) {
            throw new Error("Assignment operator text is undefined for Forup1. This indicates a parsing error.");
        }
        const right = this.visit(ctx.expr());
        return {
            kind: 'AssignmentStatement',
            left: left,
            operator: operatorText,
            right: right,
            loc: getLoc(ctx)
        };
    }
    // Forup2, Forup3 は UnaryOperationNode (後置インクリメント/デクリメント)
    visitForup2(ctx) {
        const operand = this.visit(ctx.VAR_ID());
        const operatorText = ctx.INC().getText();
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
    visitForup3(ctx) {
        const operand = this.visit(ctx.VAR_ID());
        const operatorText = ctx.DEC().getText();
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
    visitForup4(ctx) {
        const operand = this.visit(ctx.VAR_ID());
        const operatorText = ctx.INC().getText();
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
    visitForup5(ctx) {
        const operand = this.visit(ctx.VAR_ID());
        const operatorText = ctx.DEC().getText();
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
    visitWhileStatement(ctx) {
        return this.visit(ctx.functionWhile());
    }
    visitDoStatement(ctx) {
        return this.visit(ctx.functionDo());
    }
    visitReturnStatement(ctx) {
        return this.visit(ctx.functionReturn());
    }
    visitBreakStatement(ctx) {
        return this.visit(ctx.functionBreak());
    }
    visitContinueStatement(ctx) {
        return this.visit(ctx.functionContinue());
    }
    visitStructStatement(ctx) {
        return this.visit(ctx.functionStruct());
    }
    visitModuleStatement(ctx) {
        return this.visit(ctx.functionModule());
    }
    // block #Sentence と #Sentence1
    visitSentence(ctx) {
        const statements = [];
        for (const stmtCtx of ctx.statement()) {
            const stmtNode = this.visit(stmtCtx);
            if (stmtNode) {
                statements.push(stmtNode);
            }
        }
        return { kind: 'Block', statements: statements, loc: getLoc(ctx) };
    }
    visitSentence1(ctx) {
        const stmtNode = this.visit(ctx.statement());
        if (stmtNode) {
            return { kind: 'Block', statements: [stmtNode], loc: getLoc(ctx) };
        }
        return { kind: 'Block', statements: [], loc: getLoc(ctx) };
    }
    // --- 式 (Expression) の訪問 ---
    visitMain(ctx) {
        return this.visit(ctx.ternaryExpr());
    }
    // Ternary #Ternary
    visitTernary(ctx) {
        const condition = this.visit(ctx.qeOrExpr());
        if (ctx.QUESTION()) { // 三項演算子の部分が存在する場合
            // expr が2つあるので、1つ目が consequence, 2つ目が alternative
            const consequence = this.visit(ctx.expr(0));
            const alternative = this.visit(ctx.expr(1));
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
    visitAddSub(ctx) {
        let left = this.visit(ctx.mulDivSurExpr(0));
        for (let i = 1; i < ctx.mulDivSurExpr().length; i++) {
            const right = this.visit(ctx.mulDivSurExpr(i));
            const operator = ctx.getChild(2 * i - 1);
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
    visitMulDivSur(ctx) {
        let left = this.visit(ctx.unaryExpr(0));
        for (let i = 1; i < ctx.unaryExpr().length; i++) {
            const right = this.visit(ctx.unaryExpr(i));
            const operator = ctx.getChild(2 * i - 1);
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
    // Unary Operations (Minus, Not)
    visitUnaryMinus(ctx) {
        const operand = this.visit(ctx.unaryExpr());
        return {
            kind: 'UnaryOperation',
            operator: '-',
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    visitNotExpr(ctx) {
        const operand = this.visit(ctx.unaryExpr());
        return {
            kind: 'UnaryOperation',
            operator: '!',
            operand: operand,
            loc: getLoc(ctx)
        };
    }
    // Power 
    visitPower(ctx) {
        const base = this.visit(ctx.indexAccessExpr());
        if (ctx.POWER()) {
            const exponent = this.visit(ctx.powerExpr());
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
    visitPowerExprRule(ctx) {
        return this.visit(ctx.powerExpr());
    }
    // IndexAccess (添字アクセス)
    visitIndexAccess(ctx) {
        const base = this.visit(ctx.primaryExpr());
        if (ctx.LBRACKET().length === 0) {
            return base;
        }
        const indices = [];
        for (const exprCtx of ctx.expr()) {
            indices.push(this.visit(exprCtx));
        }
        return {
            kind: 'IndexAccess',
            base: base,
            indices: indices,
            loc: getLoc(ctx)
        };
    }
    // Number Literals (RatNum, DecNum, Real)
    visitReal(ctx) {
        const numNode = this.visit(ctx.num());
        if (numNode && numNode.kind === 'NumberLiteral') {
            return numNode;
        }
        throw new Error('Expected NumberLiteralNode from num');
    }
    visitRatNum(ctx) {
        return this.visit(ctx.rational());
    }
    visitDecNum(ctx) {
        return this.visit(ctx.decimal());
    }
    visitRat(ctx) {
        const value = ctx.getText();
        return {
            kind: 'NumberLiteral',
            value: value,
            rawText: value,
            loc: getLoc(ctx)
        };
    }
    visitFloat(ctx) {
        const value = ctx.getText();
        return {
            kind: 'NumberLiteral',
            value: parseFloat(value),
            rawText: value,
            loc: getLoc(ctx)
        };
    }
    // Identifier (VId, FId, V2Id)
    visitIdExpr(ctx) {
        const idNode = this.visit(ctx.id());
        if (idNode && idNode.kind === 'Identifier') {
            return idNode;
        }
        throw new Error('Expected IdentifierNode from idExpr');
    }
    visitVId(ctx) {
        return { kind: 'Identifier', name: ctx.VAR_ID().getText(), isVar: true, isSpecialVar: false, loc: getLoc(ctx) };
    }
    visitFId(ctx) {
        const name = ctx.FUNC_ID(ctx.FUNC_ID().length - 1).getText();
        const nameNode = { kind: 'Identifier', name: name, isVar: false, isSpecialVar: false, loc: getLoc(ctx) };
        if (ctx.POINT()) {
            const qualifierNode = this.visit(ctx.FUNC_ID(0));
            nameNode.qualifier = qualifierNode;
        }
        return nameNode;
    }
    visitV2Id(ctx) {
        return { kind: 'Identifier', name: ctx.VAR_2().getText(), isVar: false, isSpecialVar: true, loc: getLoc(ctx) };
    }
    // FunctionCall #Fcall
    visitFcall(ctx) {
        const calleeNameCtx = ctx.FUNC_ID(ctx.FUNC_ID().length - 1);
        const callee = {
            kind: 'Identifier',
            name: calleeNameCtx.getText(),
            isVar: false,
            isSpecialVar: false,
            loc: getLoc(calleeNameCtx)
        };
        if (ctx.COLON2()) {
            callee.name = ctx.COLON2().getText() + callee.name;
        }
        if (ctx.POINT()) {
            const moduleNameNode = this.visit(ctx.FUNC_ID(0));
            callee.qualifier = moduleNameNode;
        }
        const args = [];
        if (ctx.expr()) {
            for (const argCtx of ctx.expr()) {
                args.push(this.visit(argCtx));
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
    visitParen(ctx) {
        const expression = this.visit(ctx.expr());
        return {
            kind: 'ParenExpression',
            expression: expression,
            loc: getLoc(ctx)
        };
    }
    // Special Numbers
    visitSpecNum(ctx) {
        if (ctx instanceof testParser_js_1.ImaContext) {
            return this.visitIma(ctx);
        }
        else if (ctx instanceof testParser_js_1.PiContext) {
            return this.visitPi(ctx);
        }
        else if (ctx instanceof testParser_js_1.NapContext) {
            return this.visitNap(ctx);
        }
        else if (ctx instanceof testParser_js_1.BefContext) {
            return this.visitBef(ctx);
        }
        else if (ctx instanceof testParser_js_1.BefNContext) {
            return this.visitBefN(ctx);
        }
        throw new Error(`Unknown SpecNumContext type: ${ctx.getText()}`);
    }
    visitIma(ctx) {
        return { kind: 'SpecialNumber', name: ctx.IMAGINARY().getText(), loc: getLoc(ctx) };
    }
    visitPi(ctx) {
        return { kind: 'SpecialNumber', name: ctx.PI().getText(), loc: getLoc(ctx) };
    }
    visitNap(ctx) {
        return { kind: 'SpecialNumber', name: ctx.NAPIER().getText(), loc: getLoc(ctx) };
    }
    visitBef(ctx) {
        return { kind: 'SpecialNumber', name: ctx.BEFORE().getText(), loc: getLoc(ctx) };
    }
    visitBefN(ctx) {
        return { kind: 'SpecialNumber', name: ctx.BEFORE_N().getText(), loc: getLoc(ctx) };
    }
    // String Literals #StringLiteral, #CharLiteral
    visitStringLiteral(ctx) {
        const rawText = ctx.STRING2().getText();
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'StringLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }
    visitCharLiteral(ctx) {
        const rawText = ctx.STRING1().getText();
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'CharLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }
    // List Literals #List (ListContext)
    visitListExpr(ctx) {
        const elements = [];
        for (const exprCtx of ctx.expr()) {
            elements.push(this.visit(exprCtx));
        }
        return {
            kind: 'ListLiteral',
            elements: elements,
            loc: getLoc(ctx)
        };
    }
    // --- ここからが未実装だった部分 ---
    // functionDefinition #Def
    visitDef(ctx) {
        const name = this.visit(ctx.FUNC_ID());
        const parameters = [];
        if (ctx.VAR_ID()) {
            for (const varIdCtx of ctx.VAR_ID()) {
                parameters.push(this.visit(varIdCtx));
            }
        }
        const body = this.visit(ctx.block());
        return {
            kind: 'FunctionDefinition',
            name: name,
            parameters: parameters,
            body: body,
            loc: getLoc(ctx)
        };
    }
    // functionWhile #While
    visitWhile(ctx) {
        const condition = this.visit(ctx.expr(0));
        const body = this.visit(ctx.block());
        return {
            kind: 'WhileStatement',
            condition: condition,
            body: body,
            loc: getLoc(ctx)
        };
    }
    // functionDo #Do
    visitDo(ctx) {
        const body = this.visit(ctx.block());
        const condition = this.visit(ctx.expr(0));
        return {
            kind: 'DoWhileStatement',
            body: body,
            condition: condition,
            loc: getLoc(ctx)
        };
    }
    // functionReturn #Return
    visitReturn(ctx) {
        const value = ctx.expr() ? this.visit(ctx.expr()) : undefined;
        return {
            kind: 'ReturnStatement',
            value: value,
            loc: getLoc(ctx)
        };
    }
    // functionBreak #Break
    visitBreak(ctx) {
        return {
            kind: 'BreakStatement',
            loc: getLoc(ctx)
        };
    }
    // functionContinue #Continue
    visitContinue(ctx) {
        return {
            kind: 'ContinueStatement',
            loc: getLoc(ctx)
        };
    }
    // functionStruct #Strct
    visitStrct(ctx) {
        const name = this.visit(ctx.getChild(1));
        const members = [];
        // メンバーは3番目の子から始まる
        for (let i = 3; i < ctx.getChildCount() - 2; i += 2) {
            members.push(this.visit(ctx.getChild(i)));
        }
        return {
            kind: 'StructStatement',
            name: name,
            members: members,
            loc: getLoc(ctx)
        };
    }
    // ModuleStatement 関連
    visitModuleAssign(ctx) {
        const scopeToken = ctx.EXTERN() || ctx.STATIC() || ctx.GLOBAL() || ctx.LOCAL();
        const variables = [];
        for (const varIdCtx of ctx.VAR_ID()) {
            variables.push(this.visit(varIdCtx));
        }
        return {
            kind: 'ModuleVariableDeclaration',
            scope: scopeToken.getText(),
            variables: variables,
            loc: getLoc(ctx)
        };
    }
    visitModuleFunction(ctx) {
        const functions = [];
        for (const funcIdCtx of ctx.FUNC_ID()) {
            functions.push(this.visit(funcIdCtx));
        }
        return {
            kind: 'LocalFunctionDeclaration',
            functions: functions,
            loc: getLoc(ctx)
        };
    }
    visitModuleStart(ctx) {
        return {
            kind: 'ModuleDeclaration',
            name: this.visit(ctx.FUNC_ID()),
            loc: getLoc(ctx)
        };
    }
    visitModuleEnd(ctx) {
        return {
            kind: 'EndModule',
            loc: getLoc(ctx)
        };
    }
    // 二項演算子 (Compare, And, Or, QECompare, QEand, QEor)
    visitBinaryOp(ctx, operandGetter) {
        let left = this.visit(operandGetter(0));
        for (let i = 1;; i++) {
            const operand = operandGetter(i);
            if (!operand)
                break;
            const operator = ctx.getChild(2 * i - 1);
            const right = this.visit(operand);
            left = {
                kind: 'BinaryOperation',
                operator: operator.getText(),
                left: left,
                right: right,
                loc: getLoc(operator)
            };
        }
        return left;
    }
    visitQEor(ctx) {
        return this.visitBinaryOp(ctx, (i) => ctx.qeAndExpr(i));
    }
    visitQEand(ctx) {
        return this.visitBinaryOp(ctx, (i) => ctx.qeCompareExpr(i));
    }
    visitQECompare(ctx) {
        return this.visitBinaryOp(ctx, (i) => ctx.orExpr(i));
    }
    visitOr(ctx) {
        return this.visitBinaryOp(ctx, (i) => ctx.andExpr(i));
    }
    visitAnd(ctx) {
        return this.visitBinaryOp(ctx, (i) => ctx.compareExpr(i));
    }
    visitCompare(ctx) {
        return this.visitBinaryOp(ctx, (i) => ctx.addSubExpr(i));
    }
}
exports.AsirASTBuilder = AsirASTBuilder;
'';
//# sourceMappingURL=testAsirASTBuilder.js.map