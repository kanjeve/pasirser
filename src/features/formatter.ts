import * as ast from '../core/ast/asirAst';

export class AsirFormatter {
    private indentLevel: number = 0;
    private indentString: string = '  '; // 2スペースインデント

    public format(node: ast.ASTNode): string {
        return this.visit(node);
    }

    private indent(): void {
        this.indentLevel++;
    }

    private dedent(): void {
        this.indentLevel--;
    }

    private getCurrentIndent(): string {
        return this.indentString.repeat(this.indentLevel);
    }

    private visit(node: ast.ASTNode): string {
        if (!node) { return ''; }

        switch (node.kind) {
            case 'Program': return this.visitProgram(node as ast.ProgramNode);
            case 'FunctionDefinition': return this.visitFunctionDefinition(node as ast.DefinitionStatementNode);
            case 'Block': return this.visitBlock(node as ast.BlockNode);
            case 'ExpressionStatement': return this.visitExpressionStatement(node as ast.ExpressionStatementNode);
            case 'ReturnStatement': return this.visitReturnStatement(node as ast.ReturnStatementNode);
            case 'Indeterminate': return this.visitIndeterminate(node as ast.IndeterminateNode);
            case 'NumberLiteral': return this.visitNumberLiteral(node as ast.NumberLiteralNode);
            case 'StringLiteral': return this.visitStringLiteral(node as ast.StringLiteralNode);
            case 'BinaryOperation': return this.visitBinaryOperation(node as ast.BinaryOperationNode);
            case 'AssignmentExpression': return this.visitAssignmentExpression(node as ast.AssignmentExpressionNode);
            case 'FunctionCall': return this.visitFunctionCall(node as ast.FunctionCallNode);
            case 'QualifiedName': return this.visitQualifiedName(node as ast.QualifiedNameNode);
            case 'ListLiteral': return this.visitListLiteral(node as ast.ListLiteralNode);
            case 'IfStatement': return this.visitIfStatement(node as ast.IfStatementNode);
            case 'ForStatement': return this.visitForStatement(node as ast.ForStatementNode);
            case 'WhileStatement': return this.visitWhileStatement(node as ast.WhileStatementNode);
            case 'DoWhileStatement': return this.visitDoWhileStatement(node as ast.DoWhileStatementNode);
            case 'BreakStatement': return this.visitBreakStatement(node as ast.BreakStatementNode);
            case 'ContinueStatement': return this.visitContinueStatement(node as ast.ContinueStatementNode);
            case 'StructStatement': return this.visitStructStatement(node as ast.StructStatementNode);
            case 'ModuleDeclaration': return this.visitModuleDeclaration(node as ast.ModuleDeclarationNode);
            case 'ModuleVariableDeclaration': return this.visitModuleVariableDeclaration(node as ast.ModuleVariableDeclarationNode);
            case 'EndModule': return this.visitEndModule(node as ast.EndModuleNode);
            case 'PreprocessorDefine': return this.visitPreprocessorDefine(node as ast.PreprocessorDefineNode);
            case 'PreprocessorIf': return this.visitPreprocessorIf(node as ast.PreprocessorIfNode);
            case 'PreprocessorIncludeNode': return this.visitPreprocessorInclude(node as ast.PreprocessorIncludeNode);
            case 'UnaryOperation': return this.visitUnaryOperation(node as ast.UnaryOperationNode);
            case 'TernaryOperation': return this.visitTernaryOperation(node as ast.TernaryOperationNode);
            case 'PowerOperation': return this.visitPowerOperation(node as ast.PowerOperationNode);
            case 'IndexAccess': return this.visitIndexAccess(node as ast.IndexAccessNode);
            case 'MemberAccess': return this.visitMemberAccess(node as ast.MemberAccessNode);
            case 'ParenExpression': return this.visitParenExpression(node as ast.ParenExpressionNode);
            case 'DistributedPolynomialLiteral': return this.visitDistributedPolynomialLiteral(node as ast.DistributedPolynomialLiteralNode);
            case 'ListDestructuringAssignment': return this.visitListDestructuringAssignment(node as ast.ListDestructuringAssignmentNode);
            case 'DottedIdentifier': return this.visitDottedIdentifier(node as ast.DottedIdentifierNode);
            case 'EmptyStatement': return this.visitEmptyStatement(node as ast.EmptyStatementNode);
            case 'FormDeclaration': return this.visitFormDeclaration(node as ast.FormDeclarationNode);
            case 'FunctorCall': return this.visitFunctorCall(node as ast.FunctorCallNode);
            case 'PreprocessorElif': return this.visitPreprocessorElif(node as ast.PreprocessorElifNode);
            case 'PreprocessorElse': return this.visitPreprocessorElse(node as ast.PreprocessorElseNode);
            case 'ExpressionList': return this.visitExpressionList(node as ast.ExpressionListNode);

            default:
                // 未実装のノードタイプはそのまま出力するか、エラーを出す
                console.warn(`[Formatter] Unhandled AST node kind: ${node.kind}`);
                return `/* Unhandled Node: ${node.kind} */`;
        }
    }

    private visitProgram(node: ast.ProgramNode): string {
        return node.statements.map(stmt => this.getCurrentIndent() + this.visit(stmt)).join('\n');
    }

    private visitFunctionDefinition(node: ast.DefinitionStatementNode): string {
        const params = node.parameters.map(p => this.visit(p)).join(', ');
        const body = this.visit(node.body);
        return `def ${this.visit(node.name)}(${params}) ${body}`; 
    }

    private visitBlock(node: ast.BlockNode): string {
        this.indent();
        const statements = node.statements.map(stmt => this.getCurrentIndent() + this.visit(stmt)).join('\n');
        this.dedent();
        return `{\n${statements}\n${this.getCurrentIndent()}}`;
    }

    private visitExpressionStatement(node: ast.ExpressionStatementNode): string {
        return `${this.visit(node.expression)};`;
    }

    private visitReturnStatement(node: ast.ReturnStatementNode): string {
        const value = node.value ? ` ${this.visit(node.value)}` : '';
        return `return${value};`;
    }

    private visitIndeterminate(node: ast.IndeterminateNode): string {
        return node.name;
    }

    private visitNumberLiteral(node: ast.NumberLiteralNode): string {
        return node.rawText ?? String(node.value);
    }

    private visitStringLiteral(node: ast.StringLiteralNode): string {
        return `"${node.value}"`;
    }

    private visitBinaryOperation(node: ast.BinaryOperationNode): string {
        return `${this.visit(node.left)} ${node.operator} ${this.visit(node.right)}`;
    }

    private visitAssignmentExpression(node: ast.AssignmentExpressionNode): string {
        return `${this.visit(node.left)} ${node.operator} ${this.visit(node.right)}`;
    }

    private visitFunctionCall(node: ast.FunctionCallNode): string {
        const callee = this.visit(node.callee);
        const args = node.args.map(arg => this.visit(arg)).join(', ');
        const options = node.options.map(opt => this.visit(opt)).join(', ');
        const parts = [args];
        if (options) parts.push(options);
        return `${callee}(${parts.join(', ')})`;
    }

    private visitQualifiedName(node: ast.QualifiedNameNode): string {
        if (node.moduleName) {
            return `${this.visit(node.moduleName)}.${this.visit(node.functionName)}`;
        }
        return this.visit(node.functionName);
    }

    private visitListLiteral(node: ast.ListLiteralNode): string {
        const elements = node.elements.map(el => this.visit(el)).join(', ');
        return `[${elements}]`;
    }

    private visitIfStatement(node: ast.IfStatementNode): string {
        let result = `if (${this.visit(node.condition)}) ${this.visit(node.thenStatement)}`;
        if (node.elseStatement) {
            result += ` else ${this.visit(node.elseStatement)}`;
        }
        return result;
    }

    private visitForStatement(node: ast.ForStatementNode): string {
        const initializers = node.initializers.map(i => this.visit(i)).join(', ');
        const conditions = node.conditions.map(c => this.visit(c)).join(', ');
        const updaters = node.updaters.map(u => this.visit(u)).join(', ');
        const body = this.visit(node.body);
        return `for (${initializers}; ${conditions}; ${updaters}) ${body}`;
    }

    private visitWhileStatement(node: ast.WhileStatementNode): string {
        const conditions = node.conditions.map(c => this.visit(c)).join(', ');
        const body = this.visit(node.body);
        return `while (${conditions}) ${body}`;
    }

    private visitDoWhileStatement(node: ast.DoWhileStatementNode): string {
        const conditions = node.conditions.map(c => this.visit(c)).join(', ');
        const body = this.visit(node.body);
        return `do ${body} while (${conditions});`;
    }

    private visitBreakStatement(node: ast.BreakStatementNode): string {
        return `break;`;
    }

    private visitContinueStatement(node: ast.ContinueStatementNode): string {
        return `continue;`;
    }

    private visitStructStatement(node: ast.StructStatementNode): string {
        const members = node.members.map(m => this.visit(m)).join(', ');
        return `struct ${this.visit(node.name)} { ${members} };`;
    }

    private visitModuleDeclaration(node: ast.ModuleDeclarationNode): string {
        return `module ${this.visit(node.name)}`;
    }

    private visitModuleVariableDeclaration(node: ast.ModuleVariableDeclarationNode): string {
        const vars = node.variables.map(v => this.visit(v)).join(', ');
        return `${node.scope} ${vars};`;
    }

    private visitEndModule(node: ast.EndModuleNode): string {
        return `endmodule;`;
    }

    private visitPreprocessorDefine(node: ast.PreprocessorDefineNode): string {
        const params = node.parameters.map(p => this.visit(p)).join(', ');
        const body = this.visit(node.body);
        return `#define ${this.visit(node.name)}(${params}) ${body}`; 
    }

    private visitPreprocessorIf(node: ast.PreprocessorIfNode): string {
        let result = `#${node.directive} (${this.visit(node.condition)})\n`;
        this.indent();
        result += node.thenStatements.map(s => this.getCurrentIndent() + this.visit(s)).join('\n');
        this.dedent();

        for (const elif of node.elifClauses) {
            result += `\n${this.getCurrentIndent()}#elif (${this.visit(elif.condition)})\n`;
            this.indent();
            result += elif.statements.map(s => this.getCurrentIndent() + this.visit(s)).join('\n');
            this.dedent();
        }

        if (node.elseStatements) {
            result += `\n${this.getCurrentIndent()}#else\n`;
            this.indent();
            result += node.elseStatements.statements.map(s => this.getCurrentIndent() + this.visit(s)).join('\n');
            this.dedent();
        }
        result += `\n${this.getCurrentIndent()}#endif`;
        return result;
    }

    private visitPreprocessorElif(node: ast.PreprocessorElifNode): string {
        // Handled within visitPreprocessorIf
        return '';
    }

    private visitPreprocessorElse(node: ast.PreprocessorElseNode): string {
        // Handled within visitPreprocessorIf
        return '';
    }

    private visitPreprocessorInclude(node: ast.PreprocessorIncludeNode): string {
        const path = node.pathtype === 'system' ? `<${node.path}>` : `"${node.path}"`;
        return `#include ${path}`; 
    }

    private visitUnaryOperation(node: ast.UnaryOperationNode): string {
        const operand = this.visit(node.operand);
        if (node.isPostfix) {
            return `${operand}${node.operator}`;
        } else {
            return `${node.operator}${operand}`;
        }
    }

    private visitTernaryOperation(node: ast.TernaryOperationNode): string {
        const condition = this.visit(node.condition);
        const consequence = this.visit(node.consequence);
        const alternative = this.visit(node.alternative);
        return `${condition} ? ${consequence} : ${alternative}`;
    }

    private visitPowerOperation(node: ast.PowerOperationNode): string {
        return `${this.visit(node.base)}^${this.visit(node.exponent)}`;
    }

    private visitIndexAccess(node: ast.IndexAccessNode): string {
        const base = this.visit(node.base);
        const indices = node.indices.map(i => this.visit(i)).join(', ');
        return `${base}[${indices}]`;
    }

    private visitMemberAccess(node: ast.MemberAccessNode): string {
        const base = this.visit(node.base);
        const members = node.members.map(m => this.visit(m)).join('.');
        return `${base}.${members}`;
    }

    private visitParenExpression(node: ast.ParenExpressionNode): string {
        return `(${this.visit(node.expression)})`;
    }

    private visitDistributedPolynomialLiteral(node: ast.DistributedPolynomialLiteralNode): string {
        const terms = node.terms.join(', ');
        const modulus = node.modulus !== undefined ? `:${node.modulus}` : '';
        return `<<${terms}${modulus}>>`;
    }

    private visitListDestructuringAssignment(node: ast.ListDestructuringAssignmentNode): string {
        const targets = node.targets.map(t => this.visit(t)).join(', ');
        return `[${targets}] ${node.operator} ${this.visit(node.right)}`;
    }

    private visitDottedIdentifier(node: ast.DottedIdentifierNode): string {
        return node.identifiers.map(id => this.visit(id)).join('.');
    }

    private visitEmptyStatement(node: ast.EmptyStatementNode): string {
        return ''; // 空の文は何も出力しない
    }

    private visitFormDeclaration(node: ast.FormDeclarationNode): string {
        const params = node.parameters.map(p => this.visit(p)).join(', ');
        return `form ${this.visit(node.name)}(${params});`;
    }

    private visitFunctorCall(node: ast.FunctorCallNode): string {
        const callee = this.visit(node.callee);
        const args = node.args.map(arg => this.visit(arg)).join(', ');
        const options = node.options.map(opt => this.visit(opt)).join(', ');
        const parts = [args];
        if (options) parts.push(options);
        return `${callee}(${parts.join(', ')})`;
    }
    
    private visitExpressionList(node: ast.ExpressionListNode): string {
        return node.expressions.map(e => this.visit(e)).join(', ');
    }
}
