import * as ast from '../testAst.js';
import { SymbolTable } from './symbolTable.js';
import { AsirType, FunctionAsirType, PrimitiveAsirType, PrimitiveAsirTypeName, Symbol, TYPE_METADATA, StructAsirType, ModuleAsirType, ListAsirType } from './types.js';
import { Diagnostic, DiagnosticSeverity } from '../diagnostics.js';
import { ASIR_BUILTIN_FUNCTIONS, ASIR_KEYWORDS } from '../data/builtins.js';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures.js';
import { escapeWhitespace } from 'antlr4ng';

// A simple base class for visiting our custom AST
abstract class AsirASTVisitor<T> {
    visit(node: ast.ASTNode): T | undefined {
        switch (node.kind) {
            case 'Program': return this.visitProgram(node as ast.ProgramNode);
            case 'Block': return this.visitBlock(node as ast.BlockNode);
            case 'ExpressionStatement': return this.visitExpressionStatement(node as ast.ExpressionStatementNode);
            case 'EmptyStatement': return this.createDefaultResult();
            case 'FunctionDefinition': return this.visitFunctionDefinition(node as ast.DefinitionStatementNode);
            case 'StructStatement': return this.visitStructStatement(node as ast.StructStatementNode);
            case 'ModuleDeclaration':
            case 'ModuleVariableDeclaration':
            case 'LocalFunctionDeclaration':
            case 'EndModule':
                return this.visitModuleStatement(node as ast.ModuleStatementNode);
            case 'AssignmentExpression': return this.visitAssignmentExpression(node as ast.AssignmentExpressionNode);
            case 'StructMemberAssignment': return this.visitStructMemberAssignment(node as ast.StructMemberAssignmentNode);
            case 'ListDestructuringAssignment': return this.visitListDestructuringAssignment(node as ast.ListDestructuringAssignmentNode);
            case 'IfStatement': return this.visitIfStatement(node as ast.IfStatementNode);
            case 'ForStatement': return this.visitForStatement(node as ast.ForStatementNode);
            case 'WhileStatement': return this.visitWhileStatement(node as ast.WhileStatementNode);
            case 'DoWhileStatement': return this.visitDoWhileStatement(node as ast.DoWhileStatementNode);
            case 'ReturnStatement': return this.visitReturnStatement(node as ast.ReturnStatementNode);
            case 'BreakStatement': return this.visitBreakStatement(node as ast.BreakStatementNode);
            case 'ContinueStatement': return this.visitContinueStatement(node as ast.ContinueStatementNode);
            case 'FunctionCall': return this.visitFunctionCall(node as ast.FunctionCallNode);
            case 'Identifier': return this.visitIdentifier(node as ast.IdentifierNode);
            case 'Indeterminate': return this.visitIndeterminate(node as ast.IndeterminateNode);
            case 'BinaryOperation': return this.visitBinaryOperation(node as ast.BinaryOperationNode);
            case 'UnaryOperation': return this.visitUnaryOperation(node as ast.UnaryOperationNode);
            case 'TernaryOperation': return this.visitTernaryOperation(node as ast.TernaryOperationNode);
            case 'PowerOperation': return this.visitPowerOperation(node as ast.PowerOperationNode);
            case 'IndexAccess': return this.visitIndexAccess(node as ast.IndexAccessNode);
            case 'ParenExpression': return this.visitParenExpression(node as ast.ParenExpressionNode);
            case 'NumberLiteral': return this.visitNumberLiteral(node as ast.NumberLiteralNode);
            case 'StringLiteral': return this.visitStringLiteral(node as ast.StringLiteralNode);
            case 'CharLiteral': return this.visitChariteral(node as ast.CharLiteralNode);
            case 'DistributedPolynomialLiteral': return this.visitDPolyLiteral(node as ast.DistributedPolynomialLiteralNode); 
            case 'ListLiteral': return this.visitListLiteral(node as ast.ListLiteralNode);
            case 'QualifiedfiedIdentifier': return this.visitIdentifier(node as ast.IdentifierNode);
            case 'PreprocessorDefine': return this.visitPDef(node as ast.PreprocessorDefineNode);
            case 'PreprocessorIf': return this.visitPIf(node as ast.PreprocessorIfNode);
            case 'PreprocessorInclude': return this.visitPInc(node as ast.PreprocessorIncludeNode);
            default: 
                console.warn(`[AsirASTVisitor] Unhandled AST node kind: ${node.kind}`);
                return this.visitChildren(node);
        }
    }

    protected createDefaultResult(): T | undefined {
        return undefined;
    }

    protected aggregateResult(aggregate: T | undefined, nextResult: T | undefined): T | undefined {
        return nextResult !== undefined ? nextResult : aggregate;
    }

    protected visitChildren(node: ast.ASTNode): T | undefined {
        let result = this.createDefaultResult();
        for (const key in node) {
            if (key === 'loc' || key === 'kind') continue;

            const child = (node as any)[key];
            if (Array.isArray(child)) {
                for (const item of child) {
                    if (item && typeof item.kind === 'string') {
                        const childResult = this.visit(item);
                        result = this.aggregateResult(result, childResult);
                    }
                }
            } else if (child && typeof child.kind === 'string') {
                const childResult = this.visit(child);
                result = this.aggregateResult(result, childResult);
            }
        }
        return result;
    }

    // Define abstract visit methods or provide default implementations
    visitProgram(node: ast.ProgramNode): T | undefined { return this.visitChildren(node); }
    visitBlock(node: ast.BlockNode): T | undefined { return this.visitChildren(node); }
    visitExpressionStatement(node: ast.ExpressionStatementNode): T | undefined { return this.visitChildren(node); }
    visitFunctionDefinition(node: ast.DefinitionStatementNode): T | undefined { return this.visitChildren(node); }
    visitStructStatement(node: ast.StructStatementNode): T | undefined { return this.visitChildren(node); }
    visitModuleStatement(node: ast.ModuleStatementNode): T | undefined { return this.visitChildren(node); }
    visitAssignmentExpression(node: ast.AssignmentExpressionNode): T | undefined { return this.visitChildren(node); }
    visitStructMemberAssignment(node: ast.StructMemberAssignmentNode): T | undefined { return this.visitChildren(node); }
    visitListDestructuringAssignment(node: ast.ListDestructuringAssignmentNode): T | undefined { return this.visitChildren(node); }
    visitIfStatement(node: ast.IfStatementNode): T | undefined { return this.visitChildren(node); }
    visitForStatement(node: ast.ForStatementNode): T | undefined { return this.visitChildren(node); }
    visitWhileStatement(node: ast.WhileStatementNode): T | undefined { return this.visitChildren(node); }
    visitDoWhileStatement(node: ast.DoWhileStatementNode): T | undefined { return this.visitChildren(node); }
    visitReturnStatement(node: ast.ReturnStatementNode): T | undefined { return this.visitChildren(node); }
    visitBreakStatement(node: ast.BreakStatementNode): T | undefined { return this.visitChildren(node); }
    visitContinueStatement(node: ast.ContinueStatementNode): T | undefined { return this.visitChildren(node); }
    visitFunctionCall(node: ast.FunctionCallNode): T | undefined { return this.visitChildren(node); }
    visitIdentifier(node: ast.IdentifierNode): T | undefined { return this.visitChildren(node); }
    visitIndeterminate(node: ast.IndeterminateNode): T | undefined { return this.visitChildren(node); }
    visitBinaryOperation(node: ast.BinaryOperationNode): T | undefined { return this.visitChildren(node); }
    visitUnaryOperation(node: ast.UnaryOperationNode): T | undefined { return this.visitChildren(node); }
    visitTernaryOperation(node: ast.TernaryOperationNode): T | undefined { return this.visitChildren(node); }
    visitPowerOperation(node: ast.PowerOperationNode): T | undefined { return this.visitChildren(node); }
    visitIndexAccess(node: ast.IndexAccessNode): T | undefined { return this.visitChildren(node); }
    visitParenExpression(node: ast.ParenExpressionNode): T | undefined { return this.visitChildren(node); }
    visitListLiteral(node: ast.ListLiteralNode): T | undefined { return this.visitChildren(node); }
    visitStringLiteral(node: ast.StringLiteralNode): T | undefined { return this.visitChildren(node); }
    visitNumberLiteral(node: ast.NumberLiteralNode): T | undefined { return this.visitChildren(node); }
    visitChariteral(node: ast.CharLiteralNode): T | undefined { return this.visitChildren(node); }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): T | undefined { return this.visitChildren(node); }
    visitPDef(node: ast.PreprocessorDefineNode): T | undefined { return this.visitChildren(node); }
    visitPIf(node: ast.PreprocessorIfNode): T | undefined { return this.visitChildren(node); }
    visitPInc(node: ast.PreprocessorIncludeNode): T | undefined { return this.visitChildren(node); }
}

export class Validator extends AsirASTVisitor<AsirType> {
    private diagnostics: Diagnostic[] = [];
    public symbolTable: SymbolTable;
    private currentFunction: ast.DefinitionStatementNode | null = null;
    private isInLoop: boolean = false;

    constructor(programNode: ast.ProgramNode) {
        super();
        this.symbolTable = new SymbolTable(programNode);
    }

    private checkVariableNameConvention(IdentifierNode: ast.IdentifierNode): void {
        if (!IdentifierNode.name.match(/^(?:[A-Z]|_[A-Z])/)) {
            this.addDiagnostic(
                IdentifierNode,
                `変数名 '${IdentifierNode.name}' は大文字で始まる必要があります。`,
                DiagnosticSeverity.Error
            );
        }
    }

    private registerBuiltinFunctions(): void {
        const globalScope = this.symbolTable.getRootScope();
        
        BUILTIN_SIGNATURES.forEach((funcType, name) => {
            const symbol: Symbol = {
                name: name,
                type: funcType,
                definedAt: undefined,
                node: {} as ast.ASTNode
            };
            globalScope.define(symbol);
        });
    }

    private isSubtypeOf(subtypeName: PrimitiveAsirTypeName, supertypeName: PrimitiveAsirTypeName): boolean {
        if (subtypeName === supertypeName) { return true; }
        if (supertypeName === 'any') { return true; }
        let currentType: PrimitiveAsirTypeName | undefined = subtypeName;
        while (currentType) {
            currentType = TYPE_METADATA.get(currentType)?.parent;
            if (currentType === supertypeName) {
                return true;
            }
        }
        return false;
    }

    private createPrimitiveType(name: PrimitiveAsirTypeName): PrimitiveAsirType {
        return { kind: 'primitive', name };
    }

    public analyze(node: ast.ProgramNode): Diagnostic[] {
        this.visit(node);
        return this.diagnostics;
    }

    private addDiagnostic(node: ast.ASTNode, message: string, severity: DiagnosticSeverity) {
        if (node.loc) {
            const range = {
                start: { line: node.loc.startLine - 1, character: node.loc.startColumn },
                end: { line: (node.loc.endLine ?? node.loc.startLine) - 1, character: (node.loc.endColumn ?? node.loc.startColumn + 1) }
            };
            this.diagnostics.push({ range, message, severity, source: 'AsirValidator' });
        }
    }

    private isTypeCompatible(sourceType: AsirType, targetType: AsirType): boolean {
        if (targetType.kind === 'primitive' && (targetType.name === 'any' || targetType.name === 'parameter')) {
            return true;
        }
        if (sourceType.kind === 'primitive' && (sourceType.name === 'any' || sourceType.name === 'parameter')) {
            return true;
        }
        if (sourceType.kind === 'tuple' && targetType.kind === 'list') { // tupleをリストだと思える
            return sourceType.elements.every(sourceElm =>
                this.isTypeCompatible(sourceElm.type, targetType.elementType)
            );
        }
        // 型の種類ごとの互換性チェック
        if (targetType.kind === 'union') {
            return targetType.types.some(one => this.isTypeCompatible(sourceType, one));
        }
        if (sourceType.kind === 'primitive' && targetType.kind === 'primitive') {
            return this.isSubtypeOf(sourceType.name, targetType.name);
        }
        if (sourceType.kind === 'list' && targetType.kind === 'list') {
            return this.isTypeCompatible(sourceType.elementType, targetType.elementType);
        }
        if (sourceType.kind === 'struct' && targetType.kind === 'struct') {
            return sourceType.name === targetType.name;
        }
        if (sourceType.kind === 'function' && targetType.kind === 'function') {
            return JSON.stringify(sourceType) === JSON.stringify(targetType);
        }
        // タプル
        if (targetType.kind === 'tuple') {
            if (sourceType.kind !== 'tuple') { return false; }
            if (sourceType.elements.length !== targetType.elements.length) { return false; }
            return sourceType.elements.every((sourceElm, i) => {
                const targetElm = targetType.elements[i];
                return this.isTypeCompatible(sourceElm.type, targetElm.type);
            });
        }
        return false;
    }

    public typeToString(type: AsirType): string {
        switch (type.kind) {
            case 'primitive':
                return type.name;
            case 'list':
                return `list[${this.typeToString(type.elementType)}]`;
            case 'tuple':
                const types = type.elements.map(elm => {
                    if (elm.name) { return `${elm.name}: ${this.typeToString(elm.type)}`; }
                    return this.typeToString(elm.type);
                }).join(', ');
                return `[${types}]`;
            case 'vector':
                return `vector[${this.typeToString(type.elementType)}]`;
            case 'matrix':
                return `matrix[${this.typeToString(type.elementType)}]`;
            case 'function':
                const params = type.parameters.map(p => this.typeToString(p.type)).join(', ');
                return `function(${params}) -> ${this.typeToString(type.returnType)}`;
            case 'overloaded_function':
                return type.signatures
                    .map(sig => this.typeToString(sig))
                    .join('\n');
            case 'standard_polynomial':
                return `polynomial<${this.typeToString(type.coefficientType)}>`;
            case 'distributed_polynomial':
                return `dpoly<${this.typeToString(type.coefficientType)}>`;
            case 'non_commutative_polynomial':
                return `NBP<${this.typeToString(type.coefficientType)}>`;
            case 'rational_function':
                return `rational_function<${this.typeToString(type.coefficientType)}>`;
            case 'struct':
                return `struct ${type.name}`;
            case 'module':
                return `module ${type.name}`;
            case 'union':
                return type.types.map(t => this.typeToString(t)).join(' | ');
            case 'literal_union':
                return type.values.map(v => typeof v === 'string' ? `'${v}'` : v).join(' | ');
            default:
                const exhaustiveCheck: never = type;
                return 'unknown';
        }
    }

    // ヘルパー
    private getWiderNumericType(type1: PrimitiveAsirTypeName, type2: PrimitiveAsirTypeName): PrimitiveAsirTypeName {
        const precedence: PrimitiveAsirTypeName[] = ['integer', 'rational', 'float', 'alg', 'bigfloat', 'complex', 'fsmall', 'flarge', 'fchar2', 'fcharp', 'fcharpsmall',  'fchardefp',  'dalg', 'number'];
        const index1 = precedence.indexOf(type1);
        const index2 = precedence.indexOf(type2);
        return precedence[Math.max(index1, index2)];
    }

    private handleReturn(node: ast.ReturnStatementNode, returnType: AsirType): void {
        if (!this.currentFunction) {
            this.addDiagnostic(node, `return文は関数定義の外では使えません。`, DiagnosticSeverity.Error);
            return;
        }
        const funcSymbol = this.symbolTable.currentScope.lookup(this.currentFunction.name.name);
        if (funcSymbol && funcSymbol.type.kind === 'function') {
            funcSymbol.type.returnType = returnType; // 返り値が複数あり、型が違う場合はどうする？
        }
    }

    private getCommonSupertype(types: AsirType[]): AsirType {
        if (types.length === 0) {
            return this.createPrimitiveType('any');
        }
        return types[0];
        // TODO: 現在は最初の要素をそのリストの型としているので、より良い拡張へ
    }

    private validateOptions(
        funcName: string,
        allowesOptions: Map<string, AsirType> | undefined,
        providedOptions: ast.OptionPairNode[]
    ): void {
        if (!allowesOptions) {
            if (providedOptions.length > 0) {
                this.addDiagnostic(providedOptions[0], `関数 '${funcName}' はオプション引数を取りません。`, DiagnosticSeverity.Error);
            }
            return;
        }
        for (const optionNode of providedOptions) {
            const keyName = optionNode.key.name;
            // オプションが有効かどうか
            if (!allowesOptions.has(keyName)) {
                this.addDiagnostic(optionNode.key, `'${keyName}' は関数 '${funcName}' の有効なオプションではありません。`, DiagnosticSeverity.Error);
                continue;
            }
            // オプションの型のチェック
            const expecedType = allowesOptions.get(keyName)!;
            const actualType = this.visit(optionNode.value) || this.createPrimitiveType('any');
            if (!this.isTypeCompatible(actualType, expecedType)) {
                this.addDiagnostic(
                    optionNode.value,
                    `オプション '${keyName}' の型が一致しません。型 '${this.typeToString(expecedType)}' が必要ですが、型 '${this.typeToString(actualType)}' が指定されました。`,
                    DiagnosticSeverity.Error
                );
            }
        }
    }

    // --- 具体的な意味解析 ---

    visitAssignmentExpression(node: ast.AssignmentExpressionNode): AsirType {
        let rightType = this.visit(node.right);
        if (!rightType) { rightType = this.createPrimitiveType('any') }
        if (node.left.kind === 'Identifier') {
            const varName = node.left.name;
            const symbol = this.symbolTable.currentScope.lookup(varName);
            if (!symbol) {
                this.checkVariableNameConvention(node.left);
                if (node.left.loc) {
                    this.symbolTable.currentScope.define({
                        name: varName,
                        type: rightType,
                        definedAt: node.left.loc,
                        node: node.left
                    });
                }
            } else {
                const existingType = symbol.type;
                if (existingType.kind !== 'primitive' || (existingType.name !== 'any' && existingType.name !== 'parameter')) {
                    if (!this.isSubtypeOf(rightType.kind === 'primitive' ? rightType.name : 'any', existingType.kind === 'primitive' ? existingType.name: 'any')) {
                        this.addDiagnostic(
                            node,
                            `変数の型が変更されました。 '${this.typeToString(existingType)}' から ${this.typeToString(rightType)} に変わっています。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                            DiagnosticSeverity.Warning
                        );
                    }
                }
                symbol.type = rightType;
            }
        } else if (node.left.kind === 'IndexAccess') {
            this.visit(node.left);
        }
        return rightType;
    }

    visitFunctionDefinition(node: ast.DefinitionStatementNode): AsirType {
        const funcName = node.name.name;
        // --- 意味解析部 ---
        // 関数が定義済みかをチェックする。
        if (this.symbolTable.currentScope.lookupCurrentScope(funcName)) {
            this.addDiagnostic(node.name, `関数 '${funcName}' はこのスコープで既に定義されています。`, DiagnosticSeverity.Error);
        }
        // 関数の型情報を作成する。
        const parameterTypes = node.parameters.map(p => ({
            name: p.name,
            type: this.createPrimitiveType('parameter') as AsirType
        }));
        const functionType: FunctionAsirType = {
            kind: 'function',
            parameters: parameterTypes,
            returnType: this.createPrimitiveType('any') // 戻り値は後で解析する
        };
        // シンボルテーブルに関数を登録する
        if (node.loc) {
            this.symbolTable.currentScope.define({
                name: funcName,
                type: functionType,
                definedAt: node.loc,
                node
            });
        }

        // --- 関数ボディの解析 ---
        const oldFunction = this.currentFunction;
        this.currentFunction = node;
        this.symbolTable.enterScope(node);

        node.parameters.forEach((param, i) => {
            if (param.loc) {
                this.checkVariableNameConvention(param);
                const paramSymbol: Symbol = { name: param.name, type: functionType.parameters[i].type, definedAt: param.loc, node: param };
                this.symbolTable.currentScope.define(paramSymbol);
            }
        });

        this.visit(node.body);
        this.symbolTable.exitScope();
        this.currentFunction = null;

        return this.createPrimitiveType('undefined');
    }

    visitReturnStatement(node: ast.ReturnStatementNode): AsirType {
        const returnType = node.value ? this.visit(node.value) : this.createPrimitiveType('undefined');
        if (!returnType) {
            const safeReturnType = this.createPrimitiveType('any');
            this.handleReturn(node, safeReturnType);
            return safeReturnType;
        }
        this.handleReturn(node, returnType);
        return returnType;
    }

    visitIdentifier(node: ast.IdentifierNode): AsirType {
        const name = node.name;
        if (ASIR_KEYWORDS.includes(name)) {
            return this.createPrimitiveType('any');
        }
        const symbol = this.symbolTable.currentScope.lookup(node.name);
        if (symbol) {
            return symbol.type;
        }
        this.addDiagnostic(
            node, 
            `未定義のシンボルです: '${name}'`,
            DiagnosticSeverity.Error
        );
        return this.createPrimitiveType('any');
    }

    visitIndeterminate(node: ast.IndeterminateNode): AsirType {
        return { kind: 'standard_polynomial', coefficientType: this.createPrimitiveType('integer') };
    }

    visitFunctionCall(node: ast.FunctionCallNode): AsirType {
        // calleeが単純なIdentifierでない場合はスルーする。
        if (node.callee.kind !== 'Identifier') { return this.createPrimitiveType('any'); }
        const funcName = node.callee.name;
        const actualArgs = node.args;
        const actualArgTypes = actualArgs.map(arg => this.visit(arg) || this.createPrimitiveType('any'));

        // 特定の組み込み関数を特別扱いする
        if (funcName === 'car') {
            if (actualArgs.length !== 1) {
                this.addDiagnostic(node, `'${funcName}' は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
            }
            const argType = actualArgTypes[0];
            if (argType.kind === 'list') {
                return argType.elementType;
            } else {
                this.addDiagnostic(actualArgs[0], `'${funcName}' の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
            }
        }
        // TODO: 引数によって返り値が左右：call, map, 
        // TODO: 返り値のリストの型が変わる：append, cdr

        const calleeType = this.visit(node.callee);
        // シンボルがなければvisitIdentifierがエラーを返すので、ここではエラーを返さない。
        if (!calleeType) { return this.createPrimitiveType('any'); }

        // 引数が一定の関数のチェック
        if (calleeType.kind === 'function') {
            // 引数の数チェック
            const expectedParams = calleeType.parameters;
            if (actualArgs.length !== expectedParams.length) {
                this.addDiagnostic(
                    node,
                    `引数の数が一致しません。 ${expectedParams.length} 個の引数が必要ですが、 ${actualArgs.length} 個が指定されました。`,
                    DiagnosticSeverity.Error
                )
            }

            // 各引数の型をチェック
            const limit = Math.min(actualArgs.length, expectedParams.length);
            for (let i = 0; i < limit; i++) {
                if (!this.isTypeCompatible(actualArgTypes[i], expectedParams[i].type)) {
                    this.addDiagnostic(
                        actualArgs[i],
                        `引数${i + 1}の型が一致しません。型 '${this.typeToString(expectedParams[i].type)}' が必要ですが、型 '${this.typeToString(actualArgTypes[i])}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                }
            }

            this.validateOptions(funcName, calleeType.allowesOptions, node.options);
            return calleeType.returnType;
        }
        
        // 引数の数が可変の関数のチェック（Overloaded Function）
        if (calleeType.kind === 'overloaded_function') {
            const matchingSignature = calleeType.signatures.find(sig => {
                if (sig.parameters.length !== actualArgs.length) { return false; }// 引数の数のチェック
                return sig.parameters.every((expecedParams, i) => {
                    return this.isTypeCompatible(actualArgTypes[i], expecedParams.type); // 引数の型のチェック
                });
            });
            if (matchingSignature) {
                this.validateOptions(funcName, matchingSignature.allowesOptions, node.options);
                return matchingSignature.returnType;
            } else {
                const argTypesString = actualArgTypes.map(t => this.typeToString(t)).join(', ');
                this.addDiagnostic(
                    node,
                    `${node.callee.name} に引数 ${argTypesString} にマッチする定義が見つかりません。`,
                    DiagnosticSeverity.Error
                );
                return this.createPrimitiveType('any');
            }
        }

        // 関数でないものを呼び出す場合はエラーを返す
        this.addDiagnostic(
            node.callee,
            `'${this.typeToString(calleeType)}' 型の式は関数として呼び出せません。`,
            DiagnosticSeverity.Error
        );
        return this.createPrimitiveType('any');
    }

    visitBinaryOperation(node: ast.BinaryOperationNode): AsirType {
        const leftType = this.visit(node.left) || this.createPrimitiveType('any');
        const rightType = this.visit(node.right) || this.createPrimitiveType('any');
        const operator = node.operator;

        if (leftType.kind !== 'primitive' || rightType.kind !== 'primitive') {
            this.addDiagnostic(node, `演算子 '${operator}' は、これらの型に適用できません。`, DiagnosticSeverity.Error);
            return this.createPrimitiveType('any');
        } // 現状はエラーを返す。

        const leftMeta = TYPE_METADATA.get(leftType.name);
        const rightMeta = TYPE_METADATA.get(rightType.name);

        if (!leftMeta || !rightMeta) {
            this.addDiagnostic(node, `型 '${leftType.name}' または '${rightType.name}' の演算ルールが定義されていません。`, DiagnosticSeverity.Error);
            return this.createPrimitiveType('any');
        }

        switch (operator) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (leftMeta.category === 'general_numeric' && rightMeta.category === 'general_numeric') {
                    const resultType = this.getWiderNumericType(leftType.name, rightType.name);
                    return this.createPrimitiveType(resultType);
                }
                if (leftType.name === 'rational' && rightMeta.category === 'finite_field') {
                    return rightType;
                }
                if (leftMeta.category === 'finite_field' && rightType.name === 'rational') {
                    return leftType;
                }
                if (leftMeta.category === 'finite_field' && rightMeta.category === 'finite_field') {
                    if (leftType.name === rightType.name) { return leftType; }
                }
                if (leftMeta.category === 'algebric_numeric' && rightMeta.category === 'general_numeric') {
                    if (rightType.name === 'complex') { return rightType; } else if (rightType.name === 'rational') { return leftType; }
                }
                if (leftMeta.category === 'general_numeric' && rightMeta.category === 'algebric_numeric') {
                    if (leftType.name === 'complex') { return leftType; } else if (leftType.name === 'rational') { return rightType; }
                }
                if (leftMeta.category === 'algebric_numeric' && rightMeta.category === 'algebric_numeric') {
                    if (leftType.name === rightType.name) { return leftType; }
                }
                if (operator === '+' && leftMeta.category === 'string' && rightMeta.category === 'string') {
                    return this.createPrimitiveType('string');
                }
            
            case '==':
            case '!=':
            case '<':
            case '>':
            case '<=':
            case '>=':
            case '&&':
            case '||':
                const isNumeric = this.isSubtypeOf(leftType.name, 'number') && this.isSubtypeOf(rightType.name, 'number');
                const isString = leftType.name === 'string' && rightType.name === 'string';
                if (isNumeric || isString) {
                    return this.createPrimitiveType('number');
                }
                this.addDiagnostic(
                    node,
                    `この演算は意図しない値を返す可能性があります。型 '${this.typeToString(leftType)}' と型 '${this.typeToString(rightType)}' の間での '${operator}' 演算は意図しない結果になる可能性があります。`,
                    DiagnosticSeverity.Warning
                );
                return this.createPrimitiveType('number');
        }
        this.addDiagnostic(
            node,
            `演算子 '${operator}' は、型 '${this.typeToString(leftType)}' と '${this.typeToString}' には適用できません。`,
            DiagnosticSeverity.Error
        );
        return this.createPrimitiveType('any');
    }

    visitIndexAccess(node: ast.IndexAccessNode): AsirType {
        const baseType = this.visit(node.base) || this.createPrimitiveType('any');
        node.indices.forEach(indexExpr => {
            const indexType = this.visit(indexExpr) || this.createPrimitiveType('any');
            if (indexType.kind !== 'primitive' || !this.isSubtypeOf(indexType.name, 'integer')) {
                this.addDiagnostic(indexExpr, `インデックスは整数でなければなりません。`, DiagnosticSeverity.Error);
            }
        });
        switch (baseType.kind) {
            case 'list':
            case 'vector':
            case 'matrix':
                return baseType.elementType; // TODO: matrix[i]をvectorとする
            case 'tuple':
                if (node.indices.length === 1 && node.indices[0].kind === 'NumberLiteral') {
                    const indexValue = parseInt((node.indices[0] as ast.NumberLiteralNode).value as string);
                    if (indexValue >= 0 && indexValue < baseType.elements.length) {
                        return baseType.elements[indexValue].type;
                    }
                }
                this.addDiagnostic(node, `リストのインデックスが範囲外か、特定できません。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
            default:
                this.addDiagnostic(node.base, `型 '${this.typeToString(baseType)}' に対してインデックスアクセスはできません。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
        }
    }

    // --- リテラル ---
    visitStringLiteral(node: ast.StringLiteralNode): AsirType { return this.createPrimitiveType('string'); }
    visitNumberLiteral(node: ast.NumberLiteralNode): AsirType {
        return this.createPrimitiveType('number');
        // 具体的なsubtypeを返すのもやる
    }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): AsirType {
        return this.createPrimitiveType('dpoly');
        // 多分dpとdpmを分けるロジックが必要
    }
    visitListLiteral(node: ast.ListLiteralNode): AsirType {
        /* --- リストリテラルをリストだと思う（あまり好んではいない） ---
         if (node.elements.length === 0) {
            return { kind: 'list', elementType: this.createPrimitiveType('any') };
        }
        const elementTypes = node.elements.map(el => this.visit(el) || this.createPrimitiveType('any'));
        const commonType = this.getCommonSupertype(elementTypes);
        return { kind: 'list', elementType: commonType };
        */
       const elementTypes = node.elements.map(el => this.visit(el) || this.createPrimitiveType('any'));
       return { kind: 'tuple', elements: elementTypes.map(t => ({ type: t })) };
    }
}
