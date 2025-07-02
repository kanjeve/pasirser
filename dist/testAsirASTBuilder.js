"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsirASTBuilder = void 0;
const antlr4ng_1 = require("antlr4ng");
const testParser_js_1 = require("./.antlr/testParser.js");
const testParser_js_2 = require("./.antlr/testParser.js");
const testParser_js_3 = require("./.antlr/testParser.js");
const testParser_js_4 = require("./.antlr/testParser.js");
const testParser_js_5 = require("./.antlr/testParser.js");
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
        const operatorText = ctx.PLUSEQ()?.symbol.text ||
            ctx.MINUSEQ()?.symbol.text ||
            ctx.MULTEQ()?.symbol.text ||
            ctx.DIVEQ()?.symbol.text ||
            ctx.SUREQ()?.symbol.text ||
            ctx.POWEREQ()?.symbol.text ||
            ctx.ASSIGN()?.symbol.text;
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
        const operatorText = operatorToken.symbol?.text;
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
        const operatorText = operatorToken.symbol?.text; // symbol?.text を使用
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
    visitIfStatement(ctx) {
        return this.visitIf(ctx);
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
        return this.visitFor(ctx);
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
        const operatorText = ctx.ASSIGN().symbol?.text;
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
        const operatorText = ctx.ASSIGN().symbol?.text;
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
        const operatorText = ctx.INC().symbol?.text;
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
        const operatorText = ctx.DEC().symbol?.text;
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
        const operatorText = ctx.INC().symbol?.text;
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
        const operatorText = ctx.DEC().symbol?.text;
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
        let leftExpr = this.visit(ctx.mulDivSurExpr(0));
        let operatorToken = null;
        let plusIndex = 0;
        let minusIndex = 0;
        for (let i = 1; i < ctx.mulDivSurExpr().length; i++) {
            const rightExpr = this.visit(ctx.mulDivSurExpr(i));
            const nextPlusToken = ctx.PLUS(plusIndex);
            const nextMinusToken = ctx.MINUS(minusIndex);
            if (nextPlusToken !== null) {
                operatorToken = ctx.PLUS(plusIndex);
                plusIndex++;
            }
            else if (nextMinusToken !== null) {
                operatorToken = ctx.MINUS(minusIndex);
                minusIndex++;
            }
            else {
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
        return leftExpr;
    }
    // MulDivSur も同様に
    visitMulDivSur(ctx) {
        let leftExpr = this.visit(ctx.unaryExpr(0));
        let operatorToken = null;
        let mulIndex = 0;
        let divIndex = 0;
        let surIndex = 0;
        for (let i = 1; i < ctx.unaryExpr().length; i++) {
            const rightExpr = this.visit(ctx.unaryExpr(i));
            const nextMulToken = ctx.MULT(mulIndex);
            const nextDivToken = ctx.DIV(divIndex);
            const nextSurToken = ctx.SUR(surIndex);
            if (nextMulToken !== null) {
                operatorToken = ctx.MULT(mulIndex);
                mulIndex++;
            }
            else if (nextDivToken !== null) {
                operatorToken = ctx.DIV(divIndex);
                divIndex++;
            }
            else if (nextSurToken !== null) {
                operatorToken = ctx.SUR(surIndex);
                surIndex++;
            }
            else {
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
        return leftExpr;
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
    // Number Literals (ZeroNum, RatNum, DecNum, NatNum, Real)
    // #Real は num をラップしているので、num の子ノードを訪問
    visitReal(ctx) {
        const numNode = this.visit(ctx.num());
        if (numNode && numNode.kind === 'NumberLiteral') {
            return numNode;
        }
        throw new Error('Expected NumberLiteralNode from num');
    }
    visitZeroNum(ctx) {
        return { kind: 'NumberLiteral', value: 0, rawText: ctx.ZERO()?.symbol.text, loc: getLoc(ctx) };
    }
    visitNatNum(ctx) {
        const sign = ctx.MINUS() ? -1 : 1;
        const value = parseInt(ctx.NATURAL.text, 10);
        return { kind: 'NumberLiteral', value: sign * value, rawText: ctx.text, loc: getLoc(ctx) };
    }
    // visitRatNum (Rational number)
    visitRatNum(ctx) {
        const sign = ctx.MINUS() ? -1 : 1; // 最初のMINUSが全体の符号
        const rationalNode = this.visit(ctx.rational());
        // rationalNode.value は既に数値形式になっていると仮定
        return {
            kind: 'NumberLiteral',
            value: rationalNode.value * sign,
            rawText: ctx.text, // 元のテキスト
            loc: getLoc(ctx)
        };
    }
    visitRat(ctx) {
        const num1 = parseInt(ctx.INT(0).text, 10);
        const num2 = parseInt(ctx.NATURAL().text, 10); // 分母はNATURAL
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
    visitDecNum(ctx) {
        const sign = ctx.MINUS() ? -1 : 1;
        const decimalNode = this.visit(ctx.decimal());
        return {
            kind: 'NumberLiteral',
            value: decimalNode.value * sign,
            rawText: ctx.text,
            loc: getLoc(ctx)
        };
    }
    // visitPeriod (decimal with POINT)
    visitPeriod(ctx) {
        const text = ctx.text; // "0.001" or "123.456"
        return {
            kind: 'NumberLiteral',
            value: parseFloat(text),
            rawText: text,
            loc: getLoc(ctx)
        };
    }
    // visitFloat (decimal with EXP)
    visitFloat(ctx) {
        const text = ctx.text; // "1e-5" or "2E"
        return {
            kind: 'NumberLiteral',
            value: parseFloat(text),
            rawText: text,
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
        return { kind: 'Identifier', name: ctx.VAR_ID().text, isVar: true, isSpecialVar: false, loc: getLoc(ctx) };
    }
    visitFId(ctx) {
        const nameNode = { kind: 'Identifier', name: ctx.FUNC_ID().text, isVar: false, isSpecialVar: false, loc: getLoc(ctx) };
        if (ctx.POINT()) { // `module.func` の形式
            const qualifierNode = this.visit(ctx.FUNC_ID(0)); // 最初のFUNC_IDがモジュール名
            nameNode.qualifier = qualifierNode;
        }
        return nameNode;
    }
    visitV2Id(ctx) {
        return { kind: 'Identifier', name: ctx.VAR_2().text, isVar: false, isSpecialVar: true, loc: getLoc(ctx) };
    }
    // FunctionCall #Fcall
    visitFcall(ctx) {
        const calleeNameCtx = ctx.FUNC_ID();
        const callee = {
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
            callee.name = ctx.COLON2().text + callee.name;
        }
        if (ctx.POINT()) { // '.' アクセスがある場合
            // Module.func() の Module は FUNC_ID(0)
            const moduleNameNode = this.visit(ctx.FUNC_ID(0)); // 最初のFUNC_IDがモジュール名
            callee.qualifier = moduleNameNode;
            callee.name = ctx.FUNC_ID(1).text; // 2番目のFUNC_IDが関数名
        }
        const args = [];
        if (ctx.expr()) { // 引数がある場合
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
    // Special Numbers #SpecNum
    visitIma(ctx) {
        const nameText = ctx.IMAGINARY().symbol?.text;
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.IMAGINARY())
        };
    }
    visitPi(ctx) {
        const nameText = ctx.PI().symbol?.text;
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.PI())
        };
    }
    visitNap(ctx) {
        const nameText = ctx.NAPIER().symbol?.text;
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.NAPIER())
        };
    }
    visitBef(ctx) {
        const nameText = ctx.BEFORE().symbol?.text;
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.BEFORE())
        };
    }
    visitBefN(ctx) {
        const nameText = ctx.BEFORE_N().symbol?.text;
        if (nameText === undefined) {
            throw new Error("Special number name text for IMAGINARY is undefined. This indicates a parsing error.");
        }
        return {
            kind: 'SpecialNumber',
            name: nameText,
            loc: getLoc(ctx.BEFORE_N())
        };
    }
    visitSpecNum(ctx) {
        if (ctx instanceof testParser_js_1.ImaContext) {
            return this.visitIma(ctx);
        }
        else if (ctx instanceof testParser_js_2.PiContext) {
            return this.visitPi(ctx);
        }
        else if (ctx instanceof testParser_js_3.NapContext) {
            return this.visitNap(ctx);
        }
        else if (ctx instanceof testParser_js_4.BefContext) {
            return this.visitBef(ctx);
        }
        else if (ctx instanceof testParser_js_5.BefNContext) {
            return this.visitBefN(ctx);
        }
        throw new Error(`Unknown SpecialnumContext type: ${ctx.getText()}`);
    }
    // String Literals #StringLiteral, #CharLiteral
    visitStringLiteral(ctx) {
        const rawText = ctx.STRING2().text;
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'StringLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }
    visitCharLiteral(ctx) {
        const rawText = ctx.STRING1().text;
        const value = rawText.substring(1, rawText.length - 1); // クォートを除去
        return { kind: 'CharLiteral', value: value, rawText: rawText, loc: getLoc(ctx) };
    }
    // List Literals #List (ListContext)
    visitList(ctx) {
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
}
exports.AsirASTBuilder = AsirASTBuilder;
//# sourceMappingURL=testAsirASTBuilder.js.map