import * as ast from '../asirAst.js';
import { SymbolTable } from './symbolTable.js';
import { AsirType, FunctionAsirType, PrimitiveAsirType, PrimitiveAsirTypeName, Symbol, Scope, TYPE_METADATA, StructAsirType, ModuleAsirType, ListAsirType, PolynomialAsirType, TupleElement, p_type } from './types.js';
import { Diagnostic, DiagnosticSeverity } from '../diagnostics.js';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from '../data/builtins.js';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures.js';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants.js'

// TODO: データフロー解析

// A simple base class for visiting our custom AST
abstract class AsirASTVisitor<T> {
    visit(node: ast.ASTNode): T | undefined {
        switch (node.kind) {
            case 'Program': return this.visitProgram(node as ast.ProgramNode);
            case 'Block': return this.visitBlock(node as ast.BlockNode);
            case 'ExpressionStatement': return this.visitExpressionStatement(node as ast.ExpressionStatementNode);
            case 'EmptyStatement': return this.createDefaultResult();
            case 'FunctionDefinition': return this.visitFunctionDefinition(node as ast.DefinitionStatementNode);
            case 'FormDeclaration': return this.visitFormDeclaration(node as ast.FormDeclarationNode);
            case 'StructStatement': return this.visitStructStatement(node as ast.StructStatementNode);
            case 'ModuleDeclaration': return this.visitModuleDeclaration(node as ast.ModuleDeclarationNode);
            case 'ModuleVariableDeclaration': return this.visitModuleVariableDeclaration(node as ast.ModuleVariableDeclarationNode);
            case 'LocalFunctionDeclaration': return this.visitLocalFunctionDeclaration(node as ast.LocalFunctionDeclarationNode);
            case 'EndModule': return this.visitEndModule(node as ast.EndModuleNode);
            case 'AssignmentExpression': return this.visitAssignmentExpression(node as ast.AssignmentExpressionNode);
            case 'ListDestructuringAssignment': return this.visitListDestructuringAssignment(node as ast.ListDestructuringAssignmentNode);
            case 'IfStatement': return this.visitIfStatement(node as ast.IfStatementNode);
            case 'ForStatement': return this.visitForStatement(node as ast.ForStatementNode);
            case 'WhileStatement': return this.visitWhileStatement(node as ast.WhileStatementNode);
            case 'DoWhileStatement': return this.visitDoWhileStatement(node as ast.DoWhileStatementNode);
            case 'ReturnStatement': return this.visitReturnStatement(node as ast.ReturnStatementNode);
            case 'BreakStatement': return this.visitBreakStatement(node as ast.BreakStatementNode);
            case 'ContinueStatement': return this.visitContinueStatement(node as ast.ContinueStatementNode);
            case 'QualifiedName': return this.visitQualifiedName(node as ast.QualifiedNameNode); 
            case 'FunctionCall': return this.visitFunctionCall(node as ast.FunctionCallNode);
            case 'Indeterminate': return this.visitIndeterminate(node as ast.IndeterminateNode);
            case 'BinaryOperation': return this.visitBinaryOperation(node as ast.BinaryOperationNode);
            case 'UnaryOperation': return this.visitUnaryOperation(node as ast.UnaryOperationNode);
            case 'TernaryOperation': return this.visitTernaryOperation(node as ast.TernaryOperationNode);
            case 'PowerOperation': return this.visitPowerOperation(node as ast.PowerOperationNode);
            case 'IndexAccess': return this.visitIndexAccess(node as ast.IndexAccessNode);
            case 'ParenExpression': return this.visitParenExpression(node as ast.ParenExpressionNode);
            case 'NumberLiteral': return this.visitNumberLiteral(node as ast.NumberLiteralNode);
            case 'StringLiteral': return this.visitStringLiteral(node as ast.StringLiteralNode);
            case 'DistributedPolynomialLiteral': return this.visitDPolyLiteral(node as ast.DistributedPolynomialLiteralNode); 
            case 'ListLiteral': return this.visitListLiteral(node as ast.ListLiteralNode);
            case 'DottedIdentifier': return this.visitDottedIdentifier(node as ast.DottedIdentifierNode);
            case 'PreprocessorDefine': return this.visitPDef(node as ast.PreprocessorDefineNode);
            case 'PreprocessorIf': return this.visitPIf(node as ast.PreprocessorIfNode);
            case 'PreprocessorInclude': return this.visitPInc(node as ast.PreprocessorIncludeNode);
            default: 
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
    visitFormDeclaration(node: ast.FormDeclarationNode): T | undefined { return this.visitChildren(node); }
    visitStructStatement(node: ast.StructStatementNode): T | undefined { return this.visitChildren(node); }
    visitModuleDeclaration(node: ast.ModuleDeclarationNode): T | undefined { return this.visitChildren(node); }
    visitModuleVariableDeclaration(node: ast.ModuleVariableDeclarationNode): T | undefined { return this.visitChildren(node); }
    visitLocalFunctionDeclaration(node: ast.LocalFunctionDeclarationNode): T | undefined { return this.visitChildren(node); }
    visitEndModule(node: ast.EndModuleNode): T | undefined { return this.visitChildren(node); }
    visitAssignmentExpression(node: ast.AssignmentExpressionNode): T | undefined { return this.visitChildren(node); }
    visitListDestructuringAssignment(node: ast.ListDestructuringAssignmentNode): T | undefined { return this.visitChildren(node); }
    visitIfStatement(node: ast.IfStatementNode): T | undefined { return this.visitChildren(node); }
    visitForStatement(node: ast.ForStatementNode): T | undefined { return this.visitChildren(node); }
    visitWhileStatement(node: ast.WhileStatementNode): T | undefined { return this.visitChildren(node); }
    visitDoWhileStatement(node: ast.DoWhileStatementNode): T | undefined { return this.visitChildren(node); }
    visitReturnStatement(node: ast.ReturnStatementNode): T | undefined { return this.visitChildren(node); }
    visitBreakStatement(node: ast.BreakStatementNode): T | undefined { return this.visitChildren(node); }
    visitContinueStatement(node: ast.ContinueStatementNode): T | undefined { return this.visitChildren(node); }
    visitFunctionCall(node: ast.FunctionCallNode): T | undefined { return this.visitChildren(node); }
    visitQualifiedName(node: ast.QualifiedNameNode): T | undefined { return this.visitChildren(node); }
    visitIndeterminate(node: ast.IndeterminateNode): T | undefined { return this.visitChildren(node); }
    visitBinaryOperation(node: ast.BinaryOperationNode): T | undefined { return this.visitChildren(node); }
    visitUnaryOperation(node: ast.UnaryOperationNode): T | undefined { return this.visitChildren(node); }
    visitTernaryOperation(node: ast.TernaryOperationNode): T | undefined { return this.visitChildren(node); }
    visitPowerOperation(node: ast.PowerOperationNode): T | undefined { return this.visitChildren(node); }
    visitIndexAccess(node: ast.IndexAccessNode): T | undefined { return this.visitChildren(node); }
    visitMemberAccess(node: ast.MemberAccessNode): T | undefined { return this.visitChildren(node); }
    visitParenExpression(node: ast.ParenExpressionNode): T | undefined { return this.visitChildren(node); }
    visitListLiteral(node: ast.ListLiteralNode): T | undefined { return this.visitChildren(node); }
    visitStringLiteral(node: ast.StringLiteralNode): T | undefined { return this.visitChildren(node); }
    visitNumberLiteral(node: ast.NumberLiteralNode): T | undefined { return this.visitChildren(node); }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): T | undefined { return this.visitChildren(node); }
    visitDottedIdentifier(node: ast.DottedIdentifierNode): T | undefined { return this.visitChildren(node); }
    visitPDef(node: ast.PreprocessorDefineNode): T | undefined { return this.visitChildren(node); }
    visitPIf(node: ast.PreprocessorIfNode): T | undefined { return this.visitChildren(node); }
    visitPInc(node: ast.PreprocessorIncludeNode): T | undefined { return this.visitChildren(node); }
}

export class Validator extends AsirASTVisitor<AsirType> {
    private diagnostics: Diagnostic[] = [];
    public symbolTable: SymbolTable;
    private currentFunction: ast.DefinitionStatementNode | null = null;
    private isInLoop: boolean = false;
    private currentModuleScope: Scope | null = null;
    private currentModule: ModuleAsirType | null = null;
    private assignmentsInBranch: Map<string, AsirType> | null = null;

    constructor(programNode: ast.ProgramNode) {
        super();
        this.symbolTable = new SymbolTable(programNode);
        this.registerBuiltinFunctions();
    }

    private checkVariableNameConvention(IdentifierNode: ast.IndeterminateNode): void {
        if (!IdentifierNode.name.match(/^(?:[A-Z]|_[A-Z])/)) {
            this.addDiagnostic(
                IdentifierNode,
                `変数名 '${IdentifierNode.name}' は大文字で始まる必要があります。`,
                DiagnosticSeverity.Error
            );
        }
    }

    private checkFunctionNameConvention(node: ast.IndeterminateNode): void {
        const name = node.name;
        if (name.match(/^(?:[A-Z]|_[A-Z])/)) {
                if (!this.symbolTable.currentScope.lookup(name)){
                    this.addDiagnostic(
                    node,
                    `関数名または不定元 '${node.name}' は小文字で始まる必要があります。`,
                    DiagnosticSeverity.Error
                );
            }
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
        if (sourceType.kind === 'primitive' && this.isSubtypeOf(sourceType.name, 'pp') && this.isPolynomialType(targetType)) {
            return true;
        }
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
            case 'dmod_polynomial':
                return `dmpoly<${this.typeToString(type.coefficientType)}>`;
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
            const existingReturnType = funcSymbol.type.returnType;
            funcSymbol.type.returnType = this.getCommonSupertype([existingReturnType, returnType]);
        }
    }

    private getCommonSupertype(types: AsirType[]): AsirType {
        if (types.length === 0) { return p_type('any'); }
        const uniqueTypes = Array.from(new Map(types.map(t => [JSON.stringify(t), t])).values());
        if (uniqueTypes.length === 1) { return uniqueTypes[0]; }
        if (uniqueTypes.some(t => t.kind === 'primitive' && t.name === 'any')) { return p_type('any'); }

        const allNumeric = uniqueTypes.every(t => t.kind === 'primitive' && this.isSubtypeOf(t.name, 'number'));
        if (allNumeric) {
            let widerTypeName = (uniqueTypes[0] as PrimitiveAsirType).name ;
            for (let i=1; i < uniqueTypes.length; i++) {
                widerTypeName = this.getWiderNumericType(widerTypeName, (uniqueTypes[i] as PrimitiveAsirType).name);
            }
            return p_type(widerTypeName);
        }
        // 現状はunion型とする
        return { kind: 'union', types: uniqueTypes };
    }

    private validateOptions(
        funcName: string,
        allowesOptions: Map<string, AsirType> | undefined,
        providedOptions: ast.OptionPairNode[]
    ): void {
        // --- オプションを正規化 ---
        const normalizedOptions: ast.OptionPairNode[] = [];
        for (const optionNode of providedOptions) {
            if (optionNode.key.name === 'option_list') {
                if (optionNode.value.kind === 'ListLiteral') {
                    for (const pairNode of (optionNode.value as ast.ListLiteralNode).elements) {
                        if (pairNode.kind === 'ListLiteral' && pairNode.elements.length === 2) {
                            const keyAstNode = pairNode.elements[0];
                            const valueAstNode = pairNode.elements[1];
                            if (keyAstNode.kind === 'StringLiteral') {
                                const keyName = (keyAstNode as ast.StringLiteralNode).value
                                normalizedOptions.push({
                                    kind: 'OptionPair',
                                    key: { kind: 'Indeterminate', name: keyName, loc: keyAstNode.loc },
                                    value: valueAstNode,
                                    loc: pairNode.loc
                                });
                            } else { this.addDiagnostic(keyAstNode, `option_list内のキーは文字列である必要があります。キーをダブルクォート（"）で囲んでください。`, DiagnosticSeverity.Error); }
                        } else { this.addDiagnostic(pairNode, `option_listの中身は、[key, value]という形式の2つの要素からなるリストである必要があります。`, DiagnosticSeverity.Error); }
                    } 
                } else { this.addDiagnostic(optionNode.value, `option_listは、 [[key1, value1], [key2, value2], ...] という形式のリストである必要があります。`, DiagnosticSeverity.Error); }
            } else { normalizedOptions.push(optionNode); } // option_listを使ってない奴はそのまま
        }

        // --- 正規化されたオプションを検証 ---
        if (!allowesOptions) {
            if (normalizedOptions.length > 0) {
                this.addDiagnostic(normalizedOptions[0], `関数 '${funcName}' はオプション引数を取りません。`, DiagnosticSeverity.Error);
            }
            return;
        }
        for (const optionNode of normalizedOptions) {
            const keyName = optionNode.key.name;
            // オプションが有効かどうか
            if (!allowesOptions.has(keyName)) {
                this.addDiagnostic(optionNode.key, `'${keyName}' は関数 '${funcName}' の有効なオプションではありません。`, DiagnosticSeverity.Error);
                continue;
            }
            // オプションの型のチェック
            const expecedType = allowesOptions.get(keyName)!;
            const actualType = this.visit(optionNode.value) || p_type('any');
            if (!this.isTypeCompatible(actualType, expecedType)) {
                this.addDiagnostic(
                    optionNode.value,
                    `オプション '${keyName}' の型が一致しません。型 '${this.typeToString(expecedType)}' が必要ですが、型 '${this.typeToString(actualType)}' が指定されました。`,
                    DiagnosticSeverity.Error
                );
            }
        }
    }

    private checkUsageAsValue(node: ast.ASTNode, type: AsirType): boolean {
        // 1. 型が純粋な関数またはオーバーロードされた関数の場合
        if (type.kind === 'function' || type.kind === 'overloaded_function') {
            // behaviorが'callable_only'なら、値としての使用はエラー
            if (type.behavior === 'callable_only') {
                const funcName = (node.kind === 'Indeterminate') ? (node as ast.IndeterminateNode).name : '関数';
                this.addDiagnostic(
                    node,
                    `呼び出し専用の関数 '${funcName}' を値として使用することはできません。`,
                    DiagnosticSeverity.Error
                );
                return false;
            }
        } 
        // 2. 型がUnion型の場合
        else if (type.kind === 'union') {
            // Unionの構成要素の中に、一つでも「値として使える型」があるかどうかを調べる
            const canBeValue = type.types.some(t => {
                if (t.kind === 'function' || t.kind === 'overloaded_function') {
                    // 関数型なら、'callable_and_symbol'であるか
                    return t.behavior === 'callable_and_symbol';
                }
                // そもそも関数でなければ、それは値として使える
                return true;
            });

            // もし値として使える要素が一つもなければ（＝構成要素が全て'callable_only'の関数）、エラー
            if (!canBeValue) {
                const funcName = (node.kind === 'Indeterminate') ? (node as ast.IndeterminateNode).name : '関数';
                this.addDiagnostic(
                    node,
                    `呼び出し専用の関数 '${funcName}' を値として使用することはできません。`,
                    DiagnosticSeverity.Error
                );
                return false;
            }
        }
        // 上記のいずれにも当てはまらない場合は、値として使用可能
        return true;
    }

    private isPolynomialType(type: AsirType): type is PolynomialAsirType {
        return [
            'standard_polynomial',
            'distributed_polynomial',
            'dmod_polynomial',
            'non_commutative_polynomial',
            'rational_function'
        ].includes(type.kind);
    }

    // --- 具体的な意味解析 ---

    visitAssignmentExpression(node: ast.AssignmentExpressionNode): AsirType {
        const rightType = this.visit(node.right) || p_type('any');
        this.checkUsageAsValue(node.right, rightType);

        if (this.assignmentsInBranch !== null && node.left.kind === 'Indeterminate') {
            this.assignmentsInBranch.set(node.left.name, rightType);
        } else {
            if (node.left.kind === 'Indeterminate') {
                const varName = node.left.name;
                const symbol = this.symbolTable.currentScope.lookup(varName);
                if (!symbol) {
                    this.checkVariableNameConvention(node.left);
                    if (this.currentModuleScope && !this.currentFunction) {
                        this.addDiagnostic(
                            node.left,
                            `モジュールのトップレベルの変数 '${varName}' は、staticまたはexternで事前に宣言する必要があります。`,
                            DiagnosticSeverity.Error
                        );
                    } else if (this.currentFunction && this.symbolTable.currentScope.hasLocalDeclaration) {
                        this.addDiagnostic(
                            node.left,
                            `未宣言のローカル変数 '${varName}' に代入されました。`,
                            DiagnosticSeverity.Warning
                        );
                    }
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
            } else if (node.left.kind === 'IndexAccess' || node.left.kind === 'MemberAccess') {
                const leftType = this.visit(node.left);
                if (node.left.kind === 'MemberAccess') {
                    const memberAccessNode = node.left;
                    let currentType = this.visit(memberAccessNode.base);
                    if (!currentType) { return rightType; }

                    const membersToTrace = memberAccessNode.members.slice(0,-1);
                    const finalMember = memberAccessNode.members[memberAccessNode.members.length -1];
                    for (const memberIndeterminate of membersToTrace) {
                        if (!currentType) { return rightType; }
                        const memberName = memberIndeterminate.name;

                        if (currentType.kind !== 'struct') {
                            this.addDiagnostic(
                                memberIndeterminate,
                                `'${this.typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`,
                                DiagnosticSeverity.Error
                            );
                            return rightType;
                        }

                        const memberType = currentType.members.get(memberName);
                        if (!memberType) {
                            this.addDiagnostic(
                                memberIndeterminate,
                                `構造体 '${currentType.name}' にメンバー '${memberName}' はありません。`,
                                DiagnosticSeverity.Error
                            );
                            return rightType;
                        }
                        currentType = memberType;
                    }
                    if (!currentType ||  currentType.kind !== 'struct') {
                        this.addDiagnostic(
                            finalMember,
                            `'${this.typeToString(currentType)}' 型は構造体ではないため、メンバーにアクセスできません。`,
                            DiagnosticSeverity.Error
                        );
                        return rightType;
                    }

                    const finalMemberName = finalMember.name;
                    const expecedType = currentType.members.get(finalMemberName);
                    if (!expecedType) {
                        this.addDiagnostic(
                            finalMember,
                            `構造体 '${(currentType as StructAsirType).name}' にメンバー '${finalMemberName}' はありません。`,
                            DiagnosticSeverity.Error
                        );
                    } else {
                        if (!this.isTypeCompatible(rightType, expecedType)) {
                            this.addDiagnostic(
                                node.right,
                                `メンバー '${finalMemberName}' の型が一致しません。型 '${this.typeToString(expecedType)}' から型 '${this.typeToString(rightType)}' へ変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                                DiagnosticSeverity.Warning
                            );
                        }
                        (currentType as StructAsirType).members.set(finalMemberName, rightType);
                    }
                }

                if (leftType && !this.isTypeCompatible(rightType, leftType)) {
                    this.addDiagnostic(
                        node.right,
                        `代入の型が一致しません。型 '${this.typeToString(leftType)}' から型 '${this.typeToString(rightType)}' へと変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                        DiagnosticSeverity.Error
                    );
                }
            }
        }
        return rightType;
    }

    visitExpressionStatement(node: ast.ExpressionStatementNode): AsirType {
        const exprType = this.visit(node.expression);
        if (exprType) {
            this.checkUsageAsValue(node.expression, exprType);
        }
        return exprType || p_type('undefined');
    }

    visitFunctionDefinition(node: ast.DefinitionStatementNode): AsirType {
        const funcName = node.name.name;

        // モジュール内の宣言チェック
        if (this.currentModuleScope) {
            const symbol = this.symbolTable.currentScope.lookup(funcName);
            if (!symbol || (symbol.type.kind !== 'function' && symbol.type.kind !== 'overloaded_function')) {
                this.addDiagnostic(node.name, `モジュール内の関数 '${funcName}' は、localfで事前に宣言する必要があります。`, DiagnosticSeverity.Error);
            }
        }
        // 関数が定義済みかをチェックする。
        const existingSymbol = this.symbolTable.currentScope.lookupCurrentScope(funcName);
        if (existingSymbol) {
            if (existingSymbol.type.kind === 'function' && existingSymbol.type.returnType.kind === 'primitive' && existingSymbol.type.returnType.name === 'form') {
                this.addDiagnostic(
                    node.name,
                    `関数 '${funcName}' は前方宣言されているため、この 'def' による定義は無視されます。この関数への呼び出しは常に「関数形式」を返します。`,
                    DiagnosticSeverity.Warning
                );
                return p_type('undefined');
            } else {
                this.addDiagnostic(node.name, `関数 '${funcName}' はこのスコープで既に定義されています。`, DiagnosticSeverity.Error);
            }
        }

        this.checkFunctionNameConvention(node.name);
        // 関数の型情報を作成する。
        const parameterTypes = node.parameters.map(p => ({
            name: p.name,
            type: p_type('parameter') as AsirType
        }));
        const functionType: FunctionAsirType = {
            kind: 'function',
            parameters: parameterTypes,
            returnType: p_type('any'), // 戻り値は後で解析する
            behavior: 'callable_and_symbol'
        };
        // シンボルテーブルに関数を登録する
        if (node.loc && !existingSymbol) {
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

        return p_type('undefined');
    }

    visitFormDeclaration(node: ast.FormDeclarationNode): AsirType {
        const funcName = node.name.name;
        // 関数名チェック
        this.checkFunctionNameConvention(node.name);
        if (this.symbolTable.currentScope.lookupCurrentScope(funcName)) {
            this.addDiagnostic(
                node.name,
                `シンボル '${funcName}' はこのスコープで既に定義されています。`,
                DiagnosticSeverity.Error
            );
        }
        // 引数名チェック
        for (const param of node.parameters) {
            if (param.name.match(/^(?:[A-Z]|_[A-Z])/)) {
                this.addDiagnostic(
                    param,
                    `前方宣言の引数名 '${param.name}' に大文字で始まる変数は使用できません。`,
                    DiagnosticSeverity.Error
                );
            }
        }
        // シンボルテーブルに登録
        const functionType: FunctionAsirType = {
            kind: 'function',
            parameters: node.parameters.map(p => ({ name: p.name, type: p_type('any') })),
            returnType: p_type('form'),
            behavior: 'callable_and_symbol'
        };
        if (node.loc) {
            this.symbolTable.currentScope.define({
                name: funcName,
                type: functionType,
                definedAt: node.loc,
                node
            });
        }
        return p_type('undefined');
    }

    visitIndeterminate(node: ast.IndeterminateNode): AsirType {
        const name = node.name;
        // キーワードをチェック
        if (ASIR_KEYWORDS.includes(name)) {
            this.addDiagnostic(
                node,
                `'${name}' はキーワードであり、式の中では使用できません。`,
                DiagnosticSeverity.Error
            );
            return p_type('any');
        }
        // 変数・関数としてシンボルテーブルに登録されていないか探す
        const symbol = this.symbolTable.currentScope.lookup(name);
        if (symbol) {
            node.resolvedSymbol = symbol;
            return symbol.type;
        }
        // 組み込み関数をチェック
        if (BUILTIN_SIGNATURES.has(name)) {
            return BUILTIN_SIGNATURES.get(name)!;
        }
        // 組み込み定数をチェック
        if (BUILTIN_CONSTANTS.has(name)) {
            return BUILTIN_CONSTANTS.get(name)!;
        }
        // 詳細不明な組み込み関数
        if (ALL_ASIR_BUILTIN.includes(name)) {
            this.addDiagnostic(
                node,
                `組み込み関数 '${name}' の型シグネチャは未定義です。型チェックは行われません。`,
                DiagnosticSeverity.Information
            );
            const genericFunctionType: FunctionAsirType = {
                kind: 'function',
                parameters: [],
                restParameter: { name: 'args', type: p_type('any') },
                returnType: p_type('any'),
                behavior: 'callable_and_symbol'
            }
            return genericFunctionType;
        }
        // シンボルテーブルにない場合
        if (name.match(/^(?:[A-Z]|_[A-Z])/)) {
            this.addDiagnostic(
                node,
                `未定義の変数 '${name}' が参照されました。暗黙的に 0 として扱われます。`,
                DiagnosticSeverity.Warning
            );
            return p_type('integer');
        } else {
            return p_type('indeterminate')
        }
    }

    visitFunctionCall(node: ast.FunctionCallNode): AsirType {
        //if (node.callee.kind !== 'Indeterminate') { return p_type('any'); }
        const calleeNode = node.callee;
        const funcName = calleeNode.functionName.name;
        const actualArgs = node.args;
        const actualArgTypes = actualArgs.map(arg => this.visit(arg) || p_type('any'));
        let calleeType: AsirType | undefined;

        // --- 呼び出し方に応じたロジック ---
        if (node.isGlobal) {
            if (calleeNode.moduleName) {
                this.addDiagnostic(node, `'::' と '.'を同時に使用することはできません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const globalScope = this.symbolTable.getRootScope();
            calleeType = globalScope.lookup(funcName)?.type;
            if (!calleeType && BUILTIN_SIGNATURES.has(funcName)) {
                calleeType = BUILTIN_SIGNATURES.get(funcName);
            }
        } else if (calleeNode.moduleName) {
            const moduleName = calleeNode.moduleName.name;
            const moduleSymbol = this.symbolTable.currentScope.lookup(moduleName);

            if (!moduleSymbol) {
                this.addDiagnostic(calleeNode.moduleName, `モジュール '${moduleName}' は定義されていません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            if (moduleSymbol.type.kind !== 'module') {
                this.addDiagnostic(calleeNode.moduleName, `'${moduleName}' はモジュールではありません。`, DiagnosticSeverity.Error);
                return p_type('any');
            } 
            calleeType = moduleSymbol.type.members.get(funcName)?.type;
        } else {
            const symbol = this.symbolTable.currentScope.lookup(funcName);
            if (symbol) {
                calleeType = symbol.type;
            } else if (BUILTIN_SIGNATURES.has(funcName)) {
                calleeType = BUILTIN_SIGNATURES.get(funcName);
            }
        }

        // --- 型チェック ---
        if (!calleeType) {
            this.addDiagnostic(calleeNode.functionName, `関数 '${funcName}' は定義されていません。`, DiagnosticSeverity.Error);
            return p_type('any');
        }

        if (calleeType.kind === 'union') {
            const funcPart = calleeType.types.find(t => t.kind === 'function' || t.kind === 'overloaded_function');
            if (funcPart) { calleeType = funcPart; }
        }

        // --- 特定の組み込み関数を特別扱いする ---
        // リスト系
        if (funcName === 'car') {
            if (actualArgs.length !== 1) {
                this.addDiagnostic(node, `'${funcName}' は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const argType = actualArgTypes[0];
            if (argType.kind === 'tuple') {
                if (argType.elements.length > 0) {
                    return argType.elements[0].type;
                } else {
                    return { kind: 'tuple', elements: [] };
                }
            } else if (argType.kind === 'list') {
                return argType.elementType;
            } else {
                this.addDiagnostic(actualArgs[0], `'${funcName}' の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        }
        if (funcName === 'cdr') {
            if (actualArgs.length !== 1) {
                this.addDiagnostic(node, `'${funcName}' は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const argType = actualArgTypes[0];
            if (argType.kind === 'tuple') {
                if (argType.elements.length > 1) {
                    return { kind: 'tuple', elements: argType.elements.slice(1) };
                } else {
                    return { kind: 'tuple', elements: [] };
                }
            } else if (argType.kind === 'list') {
                return argType;
            } else {
                if (argType.kind === 'primitive' && argType.name === 'any') {
                    return p_type('any');
                }
                this.addDiagnostic(actualArgs[0], `'${funcName}' の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        }
        if (funcName === 'cons') {
            if (actualArgs.length !== 2) {
                this.addDiagnostic(node, `'${funcName}' は引数を2つ取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const itemType = actualArgTypes[0];
            const listType = actualArgTypes[1];

            if (listType.kind === 'tuple') {
                const newElements = [{type: itemType}, ...listType.elements];
                return { kind: 'tuple', elements: newElements };
            } else if (listType.kind === 'list') {
                const commonElementType = this.getCommonSupertype([itemType, listType.elementType]);
                return { kind: 'list', elementType: commonElementType };
            } else {
                if (listType.kind === 'primitive' && listType.name === 'any') {
                    return { kind: 'list', elementType: p_type('any') };
                }
                this.addDiagnostic(actualArgs[0], `'${funcName}' の第二引数はリストでなければなりません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        }
        if (funcName === 'append') {
            if (actualArgs.length !== 2) {
                this.addDiagnostic(node, `'${funcName}' は引数を2つ取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const list1Type = actualArgTypes[0];
            const list2Type = actualArgTypes[1];
            if (list1Type.kind === 'tuple' && list2Type.kind === 'tuple') {
                const newElements = list1Type.elements.concat(list2Type.elements);
                return { kind: 'tuple', elements: newElements };
            } else if ((list1Type.kind === 'tuple' || list1Type.kind === 'list') && (list2Type.kind === 'tuple' || list2Type.kind === 'list')) {
                return { kind: 'list', elementType: p_type('any') };
            } else {
                this.addDiagnostic(actualArgs[0], `'${funcName}' の引数は両方ともリストでなければなりません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        }
        if (funcName === 'reverse') {
            if (actualArgs.length !== 1) {
                this.addDiagnostic(node, `'${funcName}' は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const argType = actualArgTypes[0];
            if (argType.kind === 'tuple') {
                const reverseedElements = [...argType.elements].reverse();
                return { kind: 'tuple', elements: reverseedElements };
            } else if (argType.kind === 'list') {
                return argType;
            } else {
                if (argType.kind === 'primitive' && argType.name === 'any') {
                    return p_type('any');
                }
                this.addDiagnostic(actualArgs[0], `'${funcName}' の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        }
        // 関数を引数に取る関数
        if (funcName === 'map') {
            if (actualArgs.length < 2) {
                this.addDiagnostic(node, `'${funcName}' は少なくとも2つの引数を取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const funcArgNode = node.args[0];
            let resolvedFuncType: AsirType | undefined;

            if (funcArgNode.kind === 'Indeterminate') {
                const funcNameToFind = (funcArgNode as ast.IndeterminateNode).name;
                const symbol = this.symbolTable.currentScope.lookup(funcNameToFind);
                if (symbol) {
                    resolvedFuncType = symbol.type;
                } else if (BUILTIN_SIGNATURES.has(funcNameToFind)) {
                    resolvedFuncType = BUILTIN_SIGNATURES.get(funcNameToFind);
                }
            }
            if (resolvedFuncType && resolvedFuncType.kind === 'union') {
                const funcPart = resolvedFuncType.types.find(t => t.kind === 'function' || t.kind === 'overloaded_function');
                if (funcPart) { resolvedFuncType = funcPart; }
            }
            
            if (!resolvedFuncType || (resolvedFuncType.kind !== 'function' && resolvedFuncType.kind !== 'overloaded_function')) {
                this.addDiagnostic(funcArgNode, `'${funcName}' の第一引数は関数である必要があります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            if (resolvedFuncType.kind === 'overloaded_function') {
                this.addDiagnostic(funcArgNode, `'${funcName}' にこの関数を渡した場合の型推論は、まだサポートされていません。`, DiagnosticSeverity.Hint);
                return { kind: 'list', elementType: p_type('any') };
            }
            
            const containerType = actualArgTypes[1];
            const fixedArgTypes = actualArgTypes.slice(2);
            switch (containerType.kind) {
                case 'tuple': {
                    const fixedArgNodes = node.args.slice(2);
                    const resultElements: TupleElement[] = containerType.elements.map((element, i) => {
                        const callArgTypes = [element.type, ...fixedArgTypes];

                        if (resolvedFuncType.parameters.length !== callArgTypes.length) {
                            this.addDiagnostic(
                                node,
                                `'${funcName}' に渡された関数は ${resolvedFuncType.parameters.length} 個の引数を期待しますが、 ${callArgTypes.length} 個が渡されました。`,
                                DiagnosticSeverity.Error
                            );
                            return { type: p_type('any') };
                        }

                        const expectedElementType = resolvedFuncType.parameters[0].type;
                        if (!this.isTypeCompatible(element.type, expectedElementType)) {
                            this.addDiagnostic(
                                actualArgs[1],
                                `'${funcName}' のリストの ${i+1} 番目の要素の型 '${this.typeToString(element.type)}' は、関数が期待する第一引数の型 '${this.typeToString(expectedElementType)}' と互換性がありません。`,
                                DiagnosticSeverity.Error
                            );
                        }
                        fixedArgTypes.forEach((fixedArgTypes, j) => {
                            const expectedFixedArgType = resolvedFuncType.parameters[j+1].type;
                            if (!this.isTypeCompatible(fixedArgTypes, expectedElementType)) {
                                this.addDiagnostic(
                                    fixedArgNodes[j],
                                    `'${funcName}' の ${j+1} 番目の型 '${this.typeToString(fixedArgTypes)}' は、関数が期待する型 '${this.typeToString(expectedFixedArgType)}' と互換性がありません。`,
                                    DiagnosticSeverity.Error
                                );
                            }
                        });
                        return { type: resolvedFuncType.returnType };
                    });
                    return { kind: 'tuple', elements: resultElements };
                }
            }
        }
        // その他
        if (funcName === 'newstruct') {
            if (actualArgs.length !== 1) {
                this.addDiagnostic(node, `'${funcName}' は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const argNode = actualArgs[0];
            // 引数をチェック
            if (argNode.kind === 'Indeterminate') {
                const structName = (argNode as ast.IndeterminateNode).name;
                const typeSymbol = this.symbolTable.currentScope.lookup(structName);
                if (typeSymbol && typeSymbol.type.kind === 'struct') { return typeSymbol.type; }
            }
            this.addDiagnostic(argNode, `'${funcName}'の引数は定義済みの構造体名である必要があります。`, DiagnosticSeverity.Error);
            return p_type('any');
        }

        // シンボルがなければvisitIdentifierがエラーを返すので、ここではエラーを返さない。
        if (!calleeType) { return p_type('any'); }

        // 引数が一定の関数のチェック
        if (calleeType.kind === 'function') {
            // 引数の数チェック
            const expectedParams = calleeType.parameters;
            const restParam = calleeType.restParameter;
            if (restParam) {
                if (actualArgs.length < expectedParams.length) {
                    this.addDiagnostic(node, `引数の数が足りません。少なくとも ${expectedParams.length} 個の引数が必要ですが、${actualArgs.length}個が指定されました。`, DiagnosticSeverity.Error);
                }
            } else {
                if (actualArgs.length !== expectedParams.length) {
                    this.addDiagnostic(node,`引数の数が一致しません。 ${expectedParams.length} 個の引数が必要ですが、 ${actualArgs.length} 個が指定されました。`,DiagnosticSeverity.Error)
                }
            }

            // 各固定引数の型をチェック
            const fixedArgCount = Math.min(actualArgs.length, expectedParams.length);
            for (let i = 0; i < fixedArgCount; i++) {
                this.checkUsageAsValue(actualArgs[i], actualArgTypes[i]);
                if (!this.isTypeCompatible(actualArgTypes[i], expectedParams[i].type)) {
                    this.addDiagnostic(
                        actualArgs[i],
                        `引数${i + 1}の型が一致しません。型 '${this.typeToString(expectedParams[i].type)}' が必要ですが、型 '${this.typeToString(actualArgTypes[i])}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                }
            }
            // 可変長引数の型チェック
            if (restParam) {
                for (let i = fixedArgCount; i < actualArgs.length; i++) {
                    if (!this.isTypeCompatible(actualArgTypes[i], restParam.type)) {
                        this.addDiagnostic(
                            actualArgs[i],
                            `引数${i+1}の型が一致しません。型 '${this.typeToString(restParam.type)}' が必要ですが、型 '${this.typeToString(actualArgTypes[i])}' が指定されました。`,
                            DiagnosticSeverity.Error
                        );
                    }
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
                    `${funcName} に引数 ${argTypesString} にマッチする定義が見つかりません。`,
                    DiagnosticSeverity.Error
                );
                return p_type('any');
            }
        }

        // 関数でないものを呼び出す場合はエラーを返す
        this.addDiagnostic(
            calleeNode.functionName,
            `'${funcName}' は関数として呼び出せません。`,
            DiagnosticSeverity.Error
        );
        return p_type('any');
    }

    visitBinaryOperation(node: ast.BinaryOperationNode): AsirType {
        let leftType = this.visit(node.left) || p_type('any');
        let rightType = this.visit(node.right) || p_type('any');
        const operator = node.operator;

        this.checkUsageAsValue(node.left, leftType);
        this.checkUsageAsValue(node.right, rightType);

        // QE系のロジック
        if (operator.startsWith('@')) {
            this.visit(node.left);
            this.visit(node.right);
            return p_type('qeformula');
        }

        if (leftType.kind === 'primitive' && this.isSubtypeOf(leftType.name, 'pp')) {
            leftType = { kind: 'standard_polynomial', coefficientType: p_type('integer') };
        }
        if (rightType.kind === 'primitive' && this.isSubtypeOf(rightType.name, 'pp')) {
            rightType = { kind: 'standard_polynomial', coefficientType: p_type('integer') };
        }

        switch (operator) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
                // --- 多項式 ---
                const isLeftPoly = this.isPolynomialType(leftType);
                const isRightPoly = this.isPolynomialType(rightType);
                const isLeftNumeric = leftType.kind === 'primitive' && this.isSubtypeOf(leftType.name, 'number');
                const isRightNumeric = rightType.kind === 'primitive' && this.isSubtypeOf(rightType.name, 'number');

                if ((leftType.kind === 'dmod_polynomial' && rightType.kind !== 'dmod_polynomial') ||
                    (leftType.kind !== 'dmod_polynomial' && rightType.kind === 'dmod_polynomial') ||
                    (leftType.kind === 'non_commutative_polynomial' && rightType.kind !== 'non_commutative_polynomial') ||
                    (leftType.kind !== 'non_commutative_polynomial' && rightType.kind === 'non_commutative_polynomial')) {
                    this.addDiagnostic(
                        node,
                        `型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' の間での '${operator}' 演算はサポートされていません。`,
                        DiagnosticSeverity.Error
                    );
                    return p_type('any');
                }

                if (isLeftPoly && isRightPoly) {
                    const poly1 = leftType as PolynomialAsirType;
                    const poly2 = rightType as PolynomialAsirType;
                    const resultCoeffType = this.getCommonSupertype([poly1.coefficientType, poly2.coefficientType]);
                    if (resultCoeffType.kind === 'union') {
                        this.addDiagnostic(
                            node,
                            `互換性のない係数型 (${this.typeToString(resultCoeffType)}) を持つ多項式同士の演算はできません。`,
                            DiagnosticSeverity.Error
                        );
                        return p_type('any');
                    }
                    const polyPrecedence = ['standard_polynomial', 'rational_function', 'distributed_polynomial'];
                    const kind1_idx = polyPrecedence.indexOf(poly1.kind);
                    const kind2_idx = polyPrecedence.indexOf(poly2.kind);
                    const resultKind = kind1_idx > kind2_idx ? poly1.kind : poly2.kind;
                    if (operator === '/' || operator === '^') {
                        const allowedKinds = ['standard_polynomial', 'rational_function'];
                        if (allowedKinds.includes(poly1.kind) && allowedKinds.includes(poly2.kind)) {
                            return { kind: 'rational_function', coefficientType: resultCoeffType };
                        } else {
                            this.addDiagnostic(
                                node,
                                `演算子 '${operator}' は、型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' の組み合わせには適用できません。`,
                                DiagnosticSeverity.Error
                            );
                            return p_type('any');
                        }
                    }
                    if (['+', '-', '*'].includes(operator)) { return { kind: resultKind, coefficientType: resultCoeffType } as PolynomialAsirType; }
                }

                if ((isLeftPoly && isRightNumeric) || (isLeftNumeric && isRightPoly)) {
                    const polyType = (isLeftPoly ? leftType : rightType) as PolynomialAsirType;
                    const numericType = isLeftNumeric ? leftType : rightType;
                    const resultCoeffType = this.getCommonSupertype([polyType.coefficientType, numericType]);
                    if (resultCoeffType.kind === 'union') {
                        this.addDiagnostic(
                            node,
                            `互換性のない係数型 (${this.typeToString(resultCoeffType)}) を持つ多項式同士の演算はできません。`,
                            DiagnosticSeverity.Error
                        );
                        return p_type('any');
                    }
                    return { kind: polyType.kind, coefficientType: resultCoeffType } as PolynomialAsirType;
                }
                // --- プリミティブ ---
                if (leftType.kind === 'primitive' && rightType.kind === 'primitive') {
                    const leftMeta = TYPE_METADATA.get(leftType.name);
                    const rightMeta = TYPE_METADATA.get(rightType.name);

                    if (!leftMeta || !rightMeta) {
                        this.addDiagnostic(node, `型 '${leftType.name}' または '${rightType.name}' の演算ルールが定義されていません。`, DiagnosticSeverity.Error);
                        return p_type('any');
                    }

                     if (leftMeta.category === 'general_numeric' && rightMeta.category === 'general_numeric') {
                        const resultType = this.getWiderNumericType(leftType.name, rightType.name);
                        return p_type(resultType);
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
                        return p_type('string');
                    }
                }
            
            case '%':
                const isRightInt = rightType.kind === 'primitive' && rightType.name === 'integer';
                if (!isRightInt) {
                    this.addDiagnostic(
                        node.right,
                        `演算子 '%' の右辺は整数である必要がありますが、型 '${this.typeToString(rightType)}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                    return p_type('any');
                }

                const isLeftInt = leftType.kind === 'primitive' && leftType.name === 'integer';
                const isLeftPolyOfInt = 
                    leftType.kind === 'standard_polynomial' &&
                    leftType.coefficientType.kind === 'primitive' &&
                    leftType.coefficientType.name === 'integer';
                if (isLeftInt || isLeftPolyOfInt) {
                    return leftType;
                } else {
                    this.addDiagnostic(
                        node.left,
                        `演算子 '%' の左辺は、整数または整数係数多項式である必要がありますが、型 '${this.typeToString(leftType)}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                    return p_type('any');
                }

            case '==':
            case '!=':
                return p_type('integer');  // とりあえず、なんに対しても0か1を返すので、許可

            case '<':
            case '>':
            case '<=':
            case '>=':
            case '&&':
            case '||':
                if (leftType.kind === 'primitive' && rightType.kind === 'primitive') {
                    const isNumeric = this.isSubtypeOf(leftType.name, 'number') && this.isSubtypeOf(rightType.name, 'number');
                    const isString = leftType.name === 'string' && rightType.name === 'string';
                    if (isNumeric || isString) {
                        return p_type('integer');
                    }
                }
                this.addDiagnostic(
                    node,
                    `この演算は意図しない値を返す可能性があります。型 '${this.typeToString(leftType)}' と型 '${this.typeToString(rightType)}' の間での '${operator}' 演算は意図しない結果になる可能性があります。`,
                    DiagnosticSeverity.Warning
                );
                return p_type('integer');
        }
        this.addDiagnostic(
            node,
            `演算子 '${operator}' は、型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' には適用できません。`,
            DiagnosticSeverity.Error
        );
        return p_type('any');
    }

    visitUnaryOperation(node: ast.UnaryOperationNode): AsirType {
        const operandType = this.visit(node.operand);
        if (!operandType) {
            return p_type('any');
        }
        
        this.checkUsageAsValue(node.operand, operandType);

        switch (node.operator) {
            case '++':
            case '--':
            case '-':
                const isNumeric = operandType.kind === 'primitive' && this.isSubtypeOf(operandType.name, 'number');
                const isPolyVar = operandType.kind === 'primitive' && this.isSubtypeOf(operandType.name, 'pp');
                const isPolynomial = this.isPolynomialType(operandType);
                if (!(isNumeric || isPolyVar || isPolynomial)) {
                    this.addDiagnostic(
                        node.operand,
                        `演算子 '${node.operator}' は数値または多項式にのみ適用できます。`,
                        DiagnosticSeverity.Error
                    );
                    return operandType;
                }
            case '!':
                if (node.isPostfix) {
                    if (operandType.kind === 'primitive') {
                        if (operandType.name === 'integer') {
                            return p_type('integer');
                        }
                        if (this.isSubtypeOf(operandType.name, 'pp')) {
                            return p_type('form');
                        }
                    }
                    return p_type('form');
                } else {
                    return p_type('integer');
                }
            case '`':
                return p_type('quote');
            default:
                return operandType;
        }
    }

    visitTernaryOperation(node: ast.TernaryOperationNode): AsirType {
        this.visit(node.condition);
        const consequenceType = this.visit(node.consequence);
        if (consequenceType) {
            this.checkUsageAsValue(node.consequence, consequenceType);
        }
        const alternativeType = this.visit(node.alternative);
        if (alternativeType) {
            this.checkUsageAsValue(node.alternative, alternativeType);
        }
        return this.getCommonSupertype([consequenceType || p_type('any'), alternativeType || p_type('any')]);
    }

    visitPowerOperation(node: ast.PowerOperationNode): AsirType {
        const baseType = this.visit(node.base);
        if (baseType) {
            this.checkUsageAsValue(node.base, baseType);
        }
        this.visit(node.exponent);
        return p_type('any'); // Or calculate a more specific type
    }

    visitIndexAccess(node: ast.IndexAccessNode): AsirType {
        let currentType = this.visit(node.base) || p_type('any');

        node.indices.forEach(indexExpr => {
            const indexType = this.visit(indexExpr) || p_type('any');
            if (indexType.kind !== 'primitive' || !this.isSubtypeOf(indexType.name, 'integer')) {
                this.addDiagnostic(indexExpr, `インデックスは整数でなければなりません。`, DiagnosticSeverity.Error);
            }
        });

        for (const indexNode of node.indices) {
            switch (currentType.kind) {
                case 'matrix':
                    currentType = { kind: 'vector', elementType: currentType.elementType };
                    break;
                case 'vector':
                case 'list':
                    currentType = currentType.elementType;
                    break;
                case 'tuple':
                    if (indexNode.kind === 'NumberLiteral') {
                        const indexValue = parseInt((indexNode as ast.NumberLiteralNode).value as string);
                        if (indexValue >= 0 && indexValue < currentType.elements.length) {
                            currentType = currentType.elements[indexValue].type;
                        } else {
                            this.addDiagnostic(indexNode, `リストのインデックス '${indexValue}' が範囲外です。`, DiagnosticSeverity.Error);
                            return p_type('any');
                        }
                    } else {
                        const elementTypes = currentType.elements.map(e => e.type);
                        currentType = this.getCommonSupertype(elementTypes);
                    }
                    break;
                default:
                    this.addDiagnostic(
                        node.base,
                        `型 '${this.typeToString(currentType)}' に対してインデックスアクセスはできません。`,
                        DiagnosticSeverity.Error
                    );
                    return p_type('any');
            }
        }
        return currentType;
    }

    visitMemberAccess(node: ast.MemberAccessNode): AsirType {
        let currentType = this.visit(node.base);
        for (const memberIndeterminate of node.members) {
            if (!currentType) { return p_type('any') }
            const memberName = memberIndeterminate.name;
            if (currentType.kind !== 'struct') {
                this.addDiagnostic(memberIndeterminate, `'${this.typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            const memberType = currentType.members.get(memberName);
            if (!memberType) {
                this.addDiagnostic(memberIndeterminate, `構造体 '${currentType.name}' にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
            currentType = memberType;
        }
        return currentType || p_type('any');
    }

    

    // --- 文 ---
    visitForStatement(node: ast.ForStatementNode): AsirType {
        // for 文の初期化式、条件式、更新式を先に解析
        node.initializers.forEach(init => this.visit(init));
        node.conditions.forEach(cond => this.visit(cond));
        node.updaters.forEach(update => this.visit(update));
        
        const previousInLoop = this.isInLoop;
        this.isInLoop = true;
        try {
            this.visit(node.body);
        } finally {
            this.isInLoop = previousInLoop;
        }
        return p_type('undefined');
    }

    visitIfStatement(node: ast.IfStatementNode): AsirType {
        this.visit(node.condition);

        const thenAssignments = new Map<string, AsirType>();
        this.assignmentsInBranch = thenAssignments;
        this.visit(node.thenStatement);
        this.assignmentsInBranch = null;

        if (node.elseStatement) {
            const elseAssignments = new Map<string, AsirType>();
            this.assignmentsInBranch = elseAssignments;
            this.visit(node.elseStatement);
            this.assignmentsInBranch = null;

            const AllAssignedVars = new Set([...thenAssignments.keys(), ...elseAssignments.keys()]);

            for (const name of AllAssignedVars) {
                const symbol = this.symbolTable.currentScope.lookup(name);
                if (!symbol) continue;

                const thenType = thenAssignments.get(name);
                const elseType = elseAssignments.get(name);

                if (thenType && elseType) {
                    const margedType = this.getCommonSupertype([thenType, elseType]);
                    symbol.type = margedType;
                } else if (thenType) {
                    const margedType = this.getCommonSupertype([symbol.type, thenType]);
                    symbol.type = margedType;
                } else if (elseType) {
                    const margedType = this.getCommonSupertype([symbol.type, elseType]);
                    symbol.type = margedType;
                }
            }
        } else {
            for (const [name, thenType] of thenAssignments.entries()) {
                const symbol = this.symbolTable.currentScope.lookup(name);
                if (!symbol) continue;
                const margedType = this.getCommonSupertype([symbol.type, thenType]);
                symbol.type = margedType;
            }
        }

        return p_type('undefined');
    }

    visitWhileStatement(node: ast.WhileStatementNode): AsirType {
        node.conditions.forEach(cond => this.visit(cond));

        const previousInLoop = this.isInLoop;
        this.isInLoop =true;
        try {
            this.visit(node.body);
        } finally {
            this.isInLoop = previousInLoop;
        }
        return p_type('undefined');
    }

    visitDoWhileStatement(node: ast.DoWhileStatementNode): AsirType {
        const previousInLoop = this.isInLoop;
        this.isInLoop =true;
        try {
            this.visit(node.body);
        } finally {
            this.isInLoop = previousInLoop;
        }

        node.conditions.forEach(cond => this.visit(cond));
        return p_type('undefined');
    }

    visitBreakStatement(node: ast.BreakStatementNode): AsirType {
        if (!this.isInLoop) {
            this.addDiagnostic(
                node,
                `'break' 文はループの外では使えません。`,
                DiagnosticSeverity.Error
            );
        }
        return p_type('undefined');
    }

    visitContinueStatement(node: ast.ContinueStatementNode): AsirType {
        if (!this.isInLoop) {
            this.addDiagnostic(
                node,
                `'continue' 文はループの外では使えません。`,
                DiagnosticSeverity.Error
            );
        }
        return p_type('undefined');
    }

    visitReturnStatement(node: ast.ReturnStatementNode): AsirType {
        const returnType = node.value ? this.visit(node.value) : p_type('undefined');
        if (node.value && returnType) {
            this.checkUsageAsValue(node.value, returnType);
        }

        if (!returnType) {
            const safeReturnType = p_type('any');
            this.handleReturn(node, safeReturnType);
            return safeReturnType;
        }
        this.handleReturn(node, returnType);
        return returnType;
    }

    visitStructStatement(node: ast.StructStatementNode): AsirType {
        const structName = node.name.name;
        // メンバーの情報収集
        const memberMap = new Map<string, AsirType>();
        for (const memberID of node.members) {
            memberMap.set(memberID.name, p_type('any'));
        }
        const structType: StructAsirType = {
            kind: 'struct',
            name: structName,
            members: memberMap
        };
        // 構造体の型をシンボルテーブルに登録
        if (node.loc) {
            this.symbolTable.currentScope.define({
                name: structName,
                type: structType,
                definedAt: node.loc,
                node: node
            });
        }
        return p_type('undefined');
    }
    // モジュール関係
    visitModuleDeclaration(node: ast.ModuleDeclarationNode): AsirType {
        const moduleName =node.name.name;
        if (this.symbolTable.currentScope.lookupCurrentScope(moduleName)) {
            this.addDiagnostic(node.name, `シンボル '${moduleName}' はこのスコープで既に定義されています。`, DiagnosticSeverity.Error);
        }

        const moduleType: ModuleAsirType = {
            kind: 'module',
            name: moduleName,
            members: new Map() // 将来的に拡張するらしい
        };
        if (node.loc) {
            this.symbolTable.currentScope.define({
                name: moduleName,
                type: moduleType,
                definedAt: node.loc,
                node: node
            });
        }

        this.symbolTable.enterScope(node); // スコープ開始
        this.currentModuleScope = this.symbolTable.currentScope;
        this.currentModule = moduleType;
        return p_type('undefined');
    }

    visitModuleVariableDeclaration(node: ast.ModuleVariableDeclarationNode): AsirType {
        const scopeType = node.scope;

        for (const variableNode of node.variables) {
            const varName = variableNode.name;
            const newSymbol: Symbol = {
                name: varName,
                type: p_type('any'),
                definedAt: variableNode.loc,
                node: variableNode
            };

            switch (scopeType) {
                case 'global': {
                    const globalScope = this.symbolTable.getRootScope();
                    if (globalScope.lookupCurrentScope(varName)) {
                        this.addDiagnostic(variableNode, `大域変数 '${varName}' は既に定義されています。`, DiagnosticSeverity.Warning);
                    } else { globalScope.define(newSymbol); }
                    break;
                }
                case'local': {
                    this.symbolTable.currentScope.hasLocalDeclaration = true;
                    if (this.symbolTable.currentScope.lookupCurrentScope(varName)) {
                        this.addDiagnostic(variableNode, `局所変数 '${varName}' はこのスコープで定義されています。`, DiagnosticSeverity.Warning);
                    } else { this.symbolTable.currentScope.define(newSymbol); }
                    break;
                }
                case 'static': {
                    if (!this.currentModuleScope) {
                        this.addDiagnostic(variableNode, `'static' はモジュール内でのみ宣言できます。`, DiagnosticSeverity.Error);
                        break;
                    }
                    if (this.currentModuleScope.lookupCurrentScope(varName)) {
                        this.addDiagnostic(variableNode, `変数 '${varName}' はこのモジュールで既に定義されています。`, DiagnosticSeverity.Warning);
                    } else {
                        this.currentModuleScope.define(newSymbol);
                    }
                    break;
                }
                case 'extern': {
                    if (!this.currentModuleScope || !this.currentModule) {
                        this.addDiagnostic(variableNode, `'extern' はモジュール内でのみ宣言できます。`, DiagnosticSeverity.Error);
                        break;
                    }
                    if (this.currentModuleScope.lookupCurrentScope(varName)) {
                        this.addDiagnostic(variableNode, `変数 '${varName}' はこのモジュールで既に定義されています。`, DiagnosticSeverity.Warning);
                    } else {
                        this.currentModuleScope.define(newSymbol);
                        this.symbolTable.getRootScope().define(newSymbol);
                        this.currentModule.members.set(varName, newSymbol);
                    }
                    break;
                }
                case 'localf': {
                    if (this.symbolTable.currentScope.lookupCurrentScope(varName)) {
                        this.addDiagnostic(variableNode, `関数 '${varName}' はこのスコープで既に定義されています。`, DiagnosticSeverity.Warning);
                    } else {
                        const funcType: FunctionAsirType = {
                            kind: 'function',
                            parameters: [],
                            returnType: p_type('any'),
                            behavior: 'callable_and_symbol'
                        };
                        this.symbolTable.currentScope.define({ name: varName, type: funcType, definedAt: variableNode.loc, node: variableNode });
                    }
                    break;
                }
            }
        }
        return p_type('undefined');
    }

    visitEndModule(node: ast.EndModuleNode): AsirType {
        this.currentModuleScope = null;
        this.currentModule = null;
        this.symbolTable.exitScope(); // スコープ終了
        return p_type('undefined');
    }

    // --- リテラル ---
    visitStringLiteral(node: ast.StringLiteralNode): AsirType { return p_type('string'); }
    visitNumberLiteral(node: ast.NumberLiteralNode): AsirType {
        const text = node.rawText ?? String(node.value);
        if (text.includes('/')) { return p_type('rational'); }
        if (text.includes('.') || text.toLowerCase().includes('e') || text.toLowerCase().includes('E')) { return p_type('float'); }

        return p_type('integer');
    }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): AsirType {
        return p_type('dpoly');
        // 多分dpとdpmを分けるロジックが必要
    }
    visitListLiteral(node: ast.ListLiteralNode): AsirType {
       const elementTypes = node.elements.map(el => {
            const elType = this.visit(el) || p_type('any');
            this.checkUsageAsValue(el, elType);
            return elType;
       });
       return { kind: 'tuple', elements: elementTypes.map(t => ({ type: t })) };
    }

    // エラー検知用
    visitDottedIdentifier(node: ast.DottedIdentifierNode): AsirType {
        const fullName = node.identifiers.map(id => id.name).join('.');
        this.addDiagnostic(
            node,
            `識別子 '${fullName}' に '.' を含めることは推奨されません。 'module.func()' でモジュール内の関数を呼びだす時に使用してください。`,
            DiagnosticSeverity.Error
        );
        return p_type('any');
    }
}
