"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsirASTBuilder = void 0;
const antlr4ng_1 = require("antlr4ng");
const errors_js_1 = require("./errors.js");
const testParser_js_1 = require("./.antlr/testParser.js");
// Custom Visitor Class
class AsirASTBuilder extends antlr4ng_1.AbstractParseTreeVisitor {
    // --- Helper Methods ---
    createIndeterminateNode(tokenOrNode) {
        const token = (tokenOrNode instanceof antlr4ng_1.TerminalNode) ? tokenOrNode.symbol : tokenOrNode;
        return {
            kind: 'Indeterminate',
            name: token.text,
            loc: (0, errors_js_1.getLoc)(tokenOrNode)
        };
    }
    visitAndCheck(ctx, expectedKind) {
        if (!ctx) {
            throw new Error("Internal Error: Attempted to visit an undefined context.");
        }
        const node = this.visit(ctx);
        if (!node) {
            throw new errors_js_1.ASTBuilderError(`Visiting context '${ctx.getText()}' returned undefined.`, ctx);
        }
        if (expectedKind && node.kind !== expectedKind) {
            throw new errors_js_1.ASTBuilderError(`Expected node of kind '${expectedKind}' but got '${node.kind}'.`, ctx);
        }
        return node;
    }
    visitBinaryOp(ctx, operandGetter) {
        let left = this.visitAndCheck(operandGetter(0));
        for (let i = 1;; i++) {
            const operandCtx = operandGetter(i);
            if (!operandCtx)
                break;
            const operator = ctx.getChild(i * 2 - 1);
            const right = this.visitAndCheck(operandCtx);
            left = {
                kind: 'BinaryOperation',
                operator: operator.getText(),
                left: left,
                right: right,
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        return left;
    }
    defaultResult() {
        return undefined;
    }
    aggregateResult(aggregate, nextResult) {
        return nextResult !== undefined ? nextResult : aggregate;
    }
    // --- Program Entry --- 
    visitProg(ctx) {
        const statements = [];
        for (const stmtCtx of ctx.statement()) {
            const stmtNode = this.visit(stmtCtx);
            if (stmtNode) {
                statements.push(stmtNode);
            }
        }
        return {
            kind: 'Program',
            statements: statements,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    // --- Statements ---
    visitExprStatement(ctx) {
        return {
            kind: 'ExpressionStatement',
            expression: this.visitAndCheck(ctx.expr()),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitEmptyStatement(ctx) {
        return {
            kind: 'EmptyStatement',
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitDefinitionStatement(ctx) {
        return this.visitAndCheck(ctx.functionDefinition());
    }
    visitIfStatement(ctx) {
        return this.visitAndCheck(ctx.functionIf());
    }
    visitForStatement(ctx) {
        return this.visitAndCheck(ctx.functionFor());
    }
    visitWhileStatement(ctx) {
        return this.visitAndCheck(ctx.functionWhile());
    }
    visitDoStatement(ctx) {
        const doNode = this.visitAndCheck(ctx.functionDo());
        // The semicolon is consumed as a separate statement, so we need to handle it here.
        // This is a workaround for the grammar ambiguity.
        return doNode;
    }
    visitReturnStatement(ctx) {
        return this.visitAndCheck(ctx.functionReturn());
    }
    visitBreakStatement(ctx) {
        return this.visitAndCheck(ctx.functionBreak());
    }
    visitContinueStatement(ctx) {
        return this.visitAndCheck(ctx.functionContinue());
    }
    visitStructStatement(ctx) {
        return this.visitAndCheck(ctx.functionStruct());
    }
    visitModuleStatement(ctx) {
        return this.visitAndCheck(ctx.functionModule());
    }
    visitPreproStatement(ctx) {
        return this.visitAndCheck(ctx.preprocessor());
    }
    // --- Preprocessor ---
    visitPreChr(ctx) {
        return {
            kind: 'UnaryOperation',
            operator: '#',
            operand: this.createIndeterminateNode(ctx.ID()),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitPreChrPlus(ctx) {
        const leftNode = this.createIndeterminateNode(ctx.ID(0));
        const rightNode = this.createIndeterminateNode(ctx.ID(1));
        return {
            kind: 'BinaryOperation',
            operator: '##',
            left: leftNode,
            right: rightNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitPDef(ctx) {
        const nameNode = this.createIndeterminateNode(ctx._name);
        const parmNodes = (ctx._params || []).map(p => this.createIndeterminateNode(p));
        const bodyNode = this.visitAndCheck(ctx._body);
        return {
            kind: 'PreprocessorDefine',
            name: nameNode,
            parameters: parmNodes,
            body: bodyNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitPInc(ctx) {
        let pathType;
        let path;
        if (ctx._path_sys) {
            pathType = 'system';
            const rawPath = ctx._path_sys.getText();
            path = rawPath.substring(1, rawPath.length - 1);
        }
        else {
            pathType = 'local';
            const rawPath = ctx._path_loc.text;
            path = rawPath.substring(1, rawPath.length - 1);
        }
        return {
            kind: 'PreprocessorIncludeNode',
            pathtype: pathType,
            path: path,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitPIf(ctx) {
        const directive = (ctx.PIF() || ctx.PIFDEF() || ctx.PIFNDEF()).getText();
        const mainCondition = this.visitAndCheck(ctx.expr(0));
        const thenStatements = [];
        const elifClauses = [];
        let elseStatements = undefined;
        let currentStatements = thenStatements;
        let currentElif = null;
        if (ctx.children) {
            for (const child of ctx.children) {
                if (child instanceof antlr4ng_1.TerminalNode) {
                    if (child.symbol.type === testParser_js_1.testParser.PELIF) {
                        if (currentElif) {
                            elifClauses.push(currentElif);
                        }
                        currentElif = {
                            kind: 'PreprocessorElif',
                            condition: null,
                            statements: [],
                            loc: (0, errors_js_1.getLoc)(child)
                        };
                    }
                    else if (child.symbol.type === testParser_js_1.testParser.PELSE) {
                        if (currentElif) {
                            elifClauses.push(currentElif);
                            currentElif = null;
                        }
                        elseStatements = [];
                        currentStatements = elseStatements;
                    }
                }
                else if (child instanceof antlr4ng_1.ParserRuleContext) {
                    if (child.ruleIndex === testParser_js_1.testParser.RULE_expr) {
                        if (currentElif && !currentElif.condition) {
                            currentElif.condition = this.visitAndCheck(child);
                        }
                    }
                    else if (child.ruleIndex === testParser_js_1.testParser.RULE_statement) {
                        currentStatements.push(this.visitAndCheck(child));
                    }
                }
            }
        }
        if (currentElif) {
            elifClauses.push(currentElif);
        }
        return {
            kind: 'PreprocessorIf',
            directive: directive,
            condition: mainCondition,
            thenStatements: thenStatements,
            elifClauses: elifClauses,
            elseStatements: elseStatements,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    // --- Expressions (Entry) ---
    visitMain(ctx) {
        return this.visitAndCheck(ctx.assignmentExpr());
    }
    // --- Assignment Expressions ---
    visitNoAssignment(ctx) {
        return this.visitAndCheck(ctx.ternaryExpr());
    }
    visitAssign(ctx) {
        const targetNode = this.createIndeterminateNode(ctx._left);
        let leftNode = targetNode;
        if (ctx._indices && ctx._indices.length > 0) {
            const indices = ctx._indices.map(e => this.visitAndCheck(e));
            leftNode = {
                kind: 'IndexAccess',
                base: targetNode,
                indices: indices,
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        else {
            leftNode = targetNode;
        }
        const operatorText = ctx._op.text;
        const rightNode = this.visitAndCheck(ctx._right);
        return {
            kind: 'AssignmentExpression',
            left: leftNode,
            operator: operatorText,
            right: rightNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitStructAssign(ctx) {
        const base = this.createIndeterminateNode(ctx.ID());
        const members = ctx.indeterminate().map(m => this.visitAndCheck(m));
        const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN()).getText();
        const right = this.visitAndCheck(ctx.assignmentExpr());
        return {
            kind: 'StructMemberAssignment',
            base: base,
            members: members,
            operator: operatorText,
            right: right,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitListAssign(ctx) {
        const operatorText = (ctx.PLUSEQ() || ctx.MINUSEQ() || ctx.MULTEQ() || ctx.DIVEQ() || ctx.SUREQ() || ctx.POWEREQ() || ctx.ASSIGN()).getText();
        return {
            kind: 'ListDestructuringAssignment',
            targets: ctx.ID().map(v => this.createIndeterminateNode(v)),
            operator: operatorText,
            right: this.visitAndCheck(ctx.assignmentExpr()),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    // --- Conditional and Binary Operations ---
    visitTernary(ctx) {
        const condition = this.visitAndCheck(ctx._condition);
        if (ctx._consequence) {
            const consequence = this.visitAndCheck(ctx._consequence);
            const alternative = this.visitAndCheck(ctx._alternative);
            return {
                kind: 'TernaryOperation',
                condition: condition,
                consequence: consequence,
                alternative: alternative,
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        return condition;
    }
    visitQuote(ctx) {
        const operand = this.visitAndCheck(ctx.qeNotExpr());
        if (ctx.BACK()) {
            return {
                kind: 'UnaryOperation',
                operator: '`',
                operand: operand,
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        return operand;
    }
    visitQEnot(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.qeOrExpr(i)); }
    visitQEor(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.qeAndExpr(i)); }
    visitQEand(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.qeCompareExpr(i)); }
    visitQECompare(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.orExpr(i)); }
    visitOr(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.andExpr(i)); }
    visitAnd(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.compareExpr(i)); }
    visitCompare(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.addSubExpr(i)); }
    visitAddSub(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.mulDivSurExpr(i)); }
    visitMulDivSur(ctx) { return this.visitBinaryOp(ctx, (i) => ctx.unaryExpr(i)); }
    // --- Unary Operations ---
    visitUnaryMinus(ctx) {
        return { kind: 'UnaryOperation', operator: '-', operand: this.visitAndCheck(ctx.unaryExpr()), loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitNotExpr(ctx) {
        return { kind: 'UnaryOperation', operator: '!', operand: this.visitAndCheck(ctx.unaryExpr()), loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitPowExpr(ctx) { return this.visitAndCheck(ctx.powerExpr()); }
    // --- Power, Pre/PostFix, and Access Expressions ---
    visitPower(ctx) {
        const base = this.visitAndCheck(ctx._base);
        if (ctx.POWER()) {
            return {
                kind: 'PowerOperation',
                base: base,
                exponent: this.visitAndCheck(ctx._exponent),
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        return base;
    }
    visitFactrialExpr(ctx) {
        const baseExpr = this.visit(ctx.postfixExpr() || ctx.prefixExpr() || ctx.indexAccessExpr());
        if (ctx.NOT()) {
            return {
                kind: 'UnaryOperation',
                operator: '!',
                operand: baseExpr,
                isPostfix: true,
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        return baseExpr;
    }
    visitPreFix(ctx) {
        return {
            kind: 'UnaryOperation',
            operator: ctx.INC() ? '++' : '--',
            operand: this.visitAndCheck(ctx.indexAccessExpr()),
            loc: (0, errors_js_1.getLoc)(ctx),
            isPostfix: false
        };
    }
    visitPostFix(ctx) {
        return {
            kind: 'UnaryOperation',
            operator: ctx.INC() ? '++' : '--',
            operand: this.visitAndCheck(ctx.indexAccessExpr()),
            loc: (0, errors_js_1.getLoc)(ctx),
            isPostfix: true
        };
    }
    visitIndexAccess(ctx) {
        const base = this.visitAndCheck(ctx.memberAccessExpr());
        if (ctx.LBRACKET().length > 0) {
            return {
                kind: 'IndexAccess',
                base: base,
                indices: ctx.expr().map(e => this.visitAndCheck(e)),
                loc: (0, errors_js_1.getLoc)(ctx)
            };
        }
        return base;
    }
    visitMemberAccess(ctx) {
        const base = this.visitAndCheck(ctx.primaryExpr());
        if (!ctx.ARROW() || ctx.ARROW().length === 0) {
            return base;
        }
        const members = ctx.indeterminate().map(id => this.visitAndCheck(id));
        return {
            kind: 'MemberAccess',
            base: base,
            members: members,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    // --- Primary Expressions ---
    visitIndExpr(ctx) { return this.visitAndCheck(ctx.indeterminate()); }
    visitReal(ctx) { return this.visitAndCheck(ctx.num()); }
    visitIdExpr(ctx) { return this.visitAndCheck(ctx.id()); }
    visitParen(ctx) {
        return { kind: 'ParenExpression', expression: this.visitAndCheck(ctx.expr()), loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitStringLiteral(ctx) {
        const rawText = ctx.STRING().getText();
        return { kind: 'StringLiteral', value: rawText.substring(1, rawText.length - 1), rawText: rawText, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitListLiteral(ctx) { return this.visitAndCheck(ctx.list()); }
    visitDpLiteral(ctx) { return this.visitAndCheck(ctx.dpoly()); }
    visitPreChrExpr(ctx) { return this.visitAndCheck(ctx.prechar()); }
    // --- Literals and Identifiers ---
    visitHexNum(ctx) {
        const rawText = ctx.HEX().getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitBitNum(ctx) {
        const rawText = ctx.BIT().getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitRatNum(ctx) { return this.visitAndCheck(ctx.rational()); }
    visitDecNum(ctx) { return this.visitAndCheck(ctx.decimal()); }
    visitImaNum(ctx) {
        const rawText = ctx.IMAGINARY().getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitGenNum(ctx) {
        const rawText = ctx.AEGEN().getText();
        return { kind: 'NumberLiteral', value: ctx.getText(), rawText: rawText, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitRat(ctx) { return { kind: 'NumberLiteral', value: ctx.getText(), rawText: ctx.getText(), loc: (0, errors_js_1.getLoc)(ctx) }; }
    visitFloat(ctx) { return { kind: 'NumberLiteral', value: parseFloat(ctx.getText()), rawText: ctx.getText(), loc: (0, errors_js_1.getLoc)(ctx) }; }
    visitV2Id(ctx) { return this.createIndeterminateNode(ctx.VAR_2()); }
    visitBef(ctx) { return this.createIndeterminateNode(ctx.BEFORE()); }
    visitBefN(ctx) { return this.createIndeterminateNode(ctx.BEFORE_N()); }
    visitFunc(ctx) {
        return {
            kind: 'Indeterminate',
            name: ctx.ID().getText(),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitAtFunc(ctx) {
        return {
            kind: 'Indeterminate',
            name: ctx.ATFUNC().getText(),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitChFunc(ctx) {
        const rawText = ctx.NOSTRING().getText();
        const name = rawText.substring(1, rawText.length - 1);
        return {
            kind: 'Indeterminate',
            name: name,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitListExpr(ctx) {
        let elements = [];
        if (ctx.exprlist()) {
            const elemNode = this.visitAndCheck(ctx.exprlist());
            elements = elemNode.expressions;
        }
        return { kind: 'ListLiteral', elements: elements, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitDp(ctx) {
        const allInts = ctx.INT();
        const terms = allInts.slice(0, ctx.COLON() ? -1 : undefined).map(t => parseInt(t.getText(), 10));
        const modulus = ctx.COLON() ? parseInt(allInts[allInts.length - 1].getText(), 10) : undefined;
        return { kind: 'DistributedPolynomialLiteral', terms, modulus, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    // --- Control Flow and Definitions ---
    visitDef(ctx) {
        const nameNode = this.visitAndCheck(ctx._name);
        const paramNodes = (ctx._params || []).map(v => this.createIndeterminateNode(v));
        const bodyNode = this.visitAndCheck(ctx._body);
        return {
            kind: 'FunctionDefinition',
            name: nameNode,
            parameters: paramNodes,
            body: bodyNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitIf(ctx) {
        const conditionNode = this.visitAndCheck(ctx._condition);
        const thenNode = this.visitAndCheck(ctx._thenBlock);
        let elseNode = undefined;
        if (ctx._elseBlock) {
            elseNode = this.visitAndCheck(ctx._elseBlock);
        }
        return {
            kind: 'IfStatement',
            condition: conditionNode,
            thenStatement: thenNode,
            elseStatement: elseNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitFor(ctx) {
        let initializers = [];
        let conditions = [];
        let updaters = [];
        if (ctx._init) {
            const initNode = this.visitAndCheck(ctx._init);
            initializers = initNode.expressions;
        }
        if (ctx._cond) {
            const condNode = this.visitAndCheck(ctx._cond);
            conditions = condNode.expressions;
        }
        if (ctx._update) {
            const updateNode = this.visitAndCheck(ctx._update);
            updaters = updateNode.expressions;
        }
        const bodyNode = this.visitAndCheck(ctx.block());
        return {
            kind: 'ForStatement',
            initializers: initializers,
            conditions: conditions,
            updaters: updaters,
            body: bodyNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitWhile(ctx) {
        let conditions = [];
        if (ctx.exprlist()) {
            const condNode = this.visitAndCheck(ctx.exprlist());
            conditions = condNode.expressions;
        }
        return {
            kind: 'WhileStatement',
            conditions: conditions,
            body: this.visitAndCheck(ctx.block()),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitDo(ctx) {
        let conditions = [];
        if (ctx.exprlist()) {
            const condNode = this.visitAndCheck(ctx.exprlist());
            conditions = condNode.expressions;
        }
        return {
            kind: 'DoWhileStatement',
            body: this.visitAndCheck(ctx.block()),
            conditions: conditions,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitReturn(ctx) {
        const exprCtx = ctx.expr();
        return { kind: 'ReturnStatement', value: exprCtx ? this.visitAndCheck(exprCtx) : undefined, loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitBreak(ctx) { return { kind: 'BreakStatement', loc: (0, errors_js_1.getLoc)(ctx) }; }
    visitContinue(ctx) { return { kind: 'ContinueStatement', loc: (0, errors_js_1.getLoc)(ctx) }; }
    visitStruct(ctx) {
        const nameNode = this.visitAndCheck(ctx._name);
        const memberNodes = ctx._members.map(memberCtx => this.visitAndCheck(memberCtx));
        return {
            kind: 'StructStatement',
            name: nameNode,
            members: memberNodes,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitFCallExpr(ctx) {
        const callee = this.visitAndCheck(ctx._name);
        const isGlobal = !!ctx._is_global;
        let args = [];
        if (ctx._args) {
            const argsNode = this.visitAndCheck(ctx._args);
            args = argsNode.expressions;
        }
        let options = [];
        if (ctx._options && ctx._options.length > 0) {
            options = ctx._options.map(o => this.visitAndCheck(o));
        }
        return {
            kind: 'FunctionCall',
            callee: callee,
            isGlobal: isGlobal,
            args: args,
            options: options,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitFunctorCallExpr(ctx) {
        const callee = this.visitAndCheck(ctx._callee);
        let args = [];
        if (ctx._args) {
            const argsNode = this.visitAndCheck(ctx._args);
            args = argsNode.expressions;
        }
        let options = [];
        if (ctx._options && ctx._options.length > 0) {
            options = ctx._options.map(o => this.visitAndCheck(o));
        }
        return {
            kind: 'FunctorCall',
            callee: callee,
            args: args,
            options: options,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    // --- Module-related ---
    visitModuleAssign(ctx) {
        const scope = (ctx.EXTERN() || ctx.STATIC() || ctx.GLOBAL() || ctx.LOCAL() || ctx.LOCALF()).getText();
        return {
            kind: 'ModuleVariableDeclaration',
            scope: scope,
            variables: ctx.indeterminate().map(v => this.visitAndCheck(v)),
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitModuleStart(ctx) {
        return { kind: 'ModuleDeclaration', name: this.visitAndCheck(ctx.indeterminate()), loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitModuleEnd(ctx) {
        return { kind: 'EndModule', loc: (0, errors_js_1.getLoc)(ctx) };
    }
    // --- Blocks ---
    visitSentence(ctx) {
        return { kind: 'Block', statements: ctx.statement().map(s => this.visitAndCheck(s)), loc: (0, errors_js_1.getLoc)(ctx) };
    }
    visitSentence1(ctx) {
        return { kind: 'Block', statements: [this.visitAndCheck(ctx.statement())], loc: (0, errors_js_1.getLoc)(ctx) };
    }
    // --- others ---
    visitExprlist(ctx) {
        const expressions = ctx.expr().map(e => this.visitAndCheck(e));
        return {
            kind: 'ExpressionList',
            expressions: expressions,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
    visitOptionPair(ctx) {
        const keyNode = this.visitAndCheck(ctx._key);
        const valueNode = this.visitAndCheck(ctx._value);
        return {
            kind: 'OptionPair',
            key: keyNode,
            value: valueNode,
            loc: (0, errors_js_1.getLoc)(ctx)
        };
    }
}
exports.AsirASTBuilder = AsirASTBuilder;
//# sourceMappingURL=testAsirASTBuilder.js.map