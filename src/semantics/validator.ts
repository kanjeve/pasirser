import * as ast from '../testAst.js';
import { SymbolTable } from './symbolTable.js';
import { AsirType, FunctionAsirType, PrimitiveAsirType, PrimitiveAsirTypeName, Symbol, TYPE_METADATA, StructAsirType, ModuleAsirType, ListAsirType, PolynomialAsirType } from './types.js';
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
            case 'FormDeclaration': return this.visitFormDeclaration(node as ast.FormDeclarationNode);
            case 'StructStatement': return this.visitStructStatement(node as ast.StructStatementNode);
            case 'ModuleDeclaration':
            case 'ModuleVariableDeclaration':
            case 'LocalFunctionDeclaration':
            case 'EndModule':
                return this.visitModuleStatement(node as ast.ModuleStatementNode);
            case 'AssignmentExpression': return this.visitAssignmentExpression(node as ast.AssignmentExpressionNode);
            case 'ListDestructuringAssignment': return this.visitListDestructuringAssignment(node as ast.ListDestructuringAssignmentNode);
            case 'IfStatement': return this.visitIfStatement(node as ast.IfStatementNode);
            case 'ForStatement': return this.visitForStatement(node as ast.ForStatementNode);
            case 'WhileStatement': return this.visitWhileStatement(node as ast.WhileStatementNode);
            case 'DoWhileStatement': return this.visitDoWhileStatement(node as ast.DoWhileStatementNode);
            case 'ReturnStatement': return this.visitReturnStatement(node as ast.ReturnStatementNode);
            case 'BreakStatement': return this.visitBreakStatement(node as ast.BreakStatementNode);
            case 'ContinueStatement': return this.visitContinueStatement(node as ast.ContinueStatementNode);
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
    visitFormDeclaration(node: ast.FormDeclarationNode): T | undefined { return this.visitChildren(node); }
    visitStructStatement(node: ast.StructStatementNode): T | undefined { return this.visitChildren(node); }
    visitModuleStatement(node: ast.ModuleStatementNode): T | undefined { return this.visitChildren(node); }
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
    visitPDef(node: ast.PreprocessorDefineNode): T | undefined { return this.visitChildren(node); }
    visitPIf(node: ast.PreprocessorIfNode): T | undefined { return this.visitChildren(node); }
    visitPInc(node: ast.PreprocessorIncludeNode): T | undefined { return this.visitChildren(node); }
}

export class Validator extends AsirASTVisitor<AsirType> {
    private diagnostics: Diagnostic[] = [];
    public symbolTable: SymbolTable;
    private currentFunction: ast.DefinitionStatementNode | null = null;
    private isInLoop: boolean = false;
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
        if (sourceType.kind === 'function' && targetType.kind === 'primitive' && targetType.name === 'functor') {
            return true;
        }
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
        if (types.length === 0) { return this.createPrimitiveType('any'); }
        const uniqueTypes = Array.from(new Map(types.map(t => [JSON.stringify(t), t])).values());
        if (uniqueTypes.length === 1) { return uniqueTypes[0]; }
        if (uniqueTypes.some(t => t.kind === 'primitive' && t.name === 'any')) { return this.createPrimitiveType('any'); }

        const allNumeric = uniqueTypes.every(t => t.kind === 'primitive' && this.isSubtypeOf(t.name, 'number'));
        if (allNumeric) {
            let widerTypeName = (uniqueTypes[0] as PrimitiveAsirType).name ;
            for (let i=1; i < uniqueTypes.length; i++) {
                widerTypeName = this.getWiderNumericType(widerTypeName, (uniqueTypes[i] as PrimitiveAsirType).name);
            }
            return this.createPrimitiveType(widerTypeName);
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
        const rightType = this.visit(node.right) || this.createPrimitiveType('any');
        this.checkUsageAsValue(node.right, rightType);

        if (this.assignmentsInBranch !== null && node.left.kind === 'Indeterminate') {
            this.assignmentsInBranch.set(node.left.name, rightType);
        } else {
            if (node.left.kind === 'Indeterminate') {
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
        return exprType || this.createPrimitiveType('undefined');
    }

    visitFunctionDefinition(node: ast.DefinitionStatementNode): AsirType {
        const funcName = node.name.name;
        // --- 意味解析部 ---
        // 関数が定義済みかをチェックする。
        const existingSymbol = this.symbolTable.currentScope.lookupCurrentScope(funcName);
        if (existingSymbol) {
            if (existingSymbol.type.kind === 'function' && existingSymbol.type.returnType.kind === 'primitive' && existingSymbol.type.returnType.name === 'form') {
                this.addDiagnostic(
                    node.name,
                    `関数 '${funcName}' は前方宣言されているため、この 'def' による定義は無視されます。この関数への呼び出しは常に「関数形式」を返します。`,
                    DiagnosticSeverity.Warning
                );
                return this.createPrimitiveType('undefined');
            } else {
                this.addDiagnostic(node.name, `関数 '${funcName}' はこのスコープで既に定義されています。`, DiagnosticSeverity.Error);
            }
        }

        this.checkFunctionNameConvention(node.name);
        // 関数の型情報を作成する。
        const parameterTypes = node.parameters.map(p => ({
            name: p.name,
            type: this.createPrimitiveType('parameter') as AsirType
        }));
        const functionType: FunctionAsirType = {
            kind: 'function',
            parameters: parameterTypes,
            returnType: this.createPrimitiveType('any'), // 戻り値は後で解析する
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

        return this.createPrimitiveType('undefined');
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
            parameters: node.parameters.map(p => ({ name: p.name, type: this.createPrimitiveType('any') })),
            returnType: this.createPrimitiveType('form'),
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
        return this.createPrimitiveType('undefined');
    }

/*
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
*/
    visitIndeterminate(node: ast.IndeterminateNode): AsirType {
        const name = node.name;
        // キーワードをチェック
        if (ASIR_KEYWORDS.includes(name)) {
            this.addDiagnostic(
                node,
                `'${name}' はキーワードであり、式の中では使用できません。`,
                DiagnosticSeverity.Error
            );
            return this.createPrimitiveType('any');
        }
        // 変数・関数としてシンボルテーブルに登録されていないか探す
        const symbol = this.symbolTable.currentScope.lookup(name);
        if (symbol) {
            node.resolvedSymbol = symbol;
            return symbol.type;
        }
        //組み込み関数をチェック
        if (BUILTIN_SIGNATURES.has(name)) {
            return this.createPrimitiveType('functor');
        }
        // シンボルテーブルにない場合
        if (name.match(/^(?:[A-Z]|_[A-Z])/)) {
            this.addDiagnostic(
                node,
                `未定義の変数です： '${name}'`,
                DiagnosticSeverity.Error
            );
            return this.createPrimitiveType('any');
        } else {
            return this.createPrimitiveType('indeterminate')
        }
    }

    visitFunctionCall(node: ast.FunctionCallNode): AsirType {
        if (node.callee.kind !== 'Indeterminate') { return this.createPrimitiveType('any'); }
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
        if (funcName === 'newstruct') {
            console.log(`[Debug] visitFunctionCall: Processing 'newstruct'.`);
            if (actualArgs.length !== 1) {
                this.addDiagnostic(node, `'newstruct' は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
            }
            const argNode = actualArgs[0];
            console.log(`[Debug] argNode.kind is: '${argNode.kind}'`);
            // 引数をチェック
            if (argNode.kind === 'Indeterminate') {
                const structName = (argNode as ast.IndeterminateNode).name;
                console.log(`[Debug] visitFunctionCall: Looking up '${structName}' from scope '${this.symbolTable.currentScope.node.kind}'.`); 
                const typeSymbol = this.symbolTable.currentScope.lookup(structName);
                console.log(`[Debug] visitFunctionCall: Lookup result is '${typeSymbol ? typeSymbol.type.kind : 'NotFound'}'.`);
                if (typeSymbol && typeSymbol.type.kind === 'struct') { return typeSymbol.type; }
            }
            this.addDiagnostic(argNode, `'newstruct'の引数は定義済みの構造体名である必要があります。`, DiagnosticSeverity.Error);
            return this.createPrimitiveType('any');
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
        let leftType = this.visit(node.left) || this.createPrimitiveType('any');
        let rightType = this.visit(node.right) || this.createPrimitiveType('any');
        const operator = node.operator;

        this.checkUsageAsValue(node.left, leftType);
        this.checkUsageAsValue(node.right, rightType);

        if (leftType.kind === 'primitive' && this.isSubtypeOf(leftType.name, 'pp')) {
            leftType = { kind: 'standard_polynomial', coefficientType: this.createPrimitiveType('integer') };
        }
        if (rightType.kind === 'primitive' && this.isSubtypeOf(rightType.name, 'pp')) {
            rightType = { kind: 'standard_polynomial', coefficientType: this.createPrimitiveType('integer') };
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
                    return this.createPrimitiveType('any');
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
                        return this.createPrimitiveType('any');
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
                            return this.createPrimitiveType('any');
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
                        return this.createPrimitiveType('any');
                    }
                    return { kind: polyType.kind, coefficientType: resultCoeffType } as PolynomialAsirType;
                }
                // --- プリミティブ ---
                if (leftType.kind === 'primitive' && rightType.kind === 'primitive') {
                    const leftMeta = TYPE_METADATA.get(leftType.name);
                    const rightMeta = TYPE_METADATA.get(rightType.name);

                    if (!leftMeta || !rightMeta) {
                        this.addDiagnostic(node, `型 '${leftType.name}' または '${rightType.name}' の演算ルールが定義されていません。`, DiagnosticSeverity.Error);
                        return this.createPrimitiveType('any');
                    }

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
                }
            
            case '%':
                const isRightInt = rightType.kind === 'primitive' && rightType.name === 'integer';
                if (!isRightInt) {
                    this.addDiagnostic(
                        node.right,
                        `演算子 '%' の右辺は整数である必要がありますが、型 '${this.typeToString(rightType)}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                    return this.createPrimitiveType('any');
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
                    return this.createPrimitiveType('any');
                }

            case '==':
            case '!=':
                return this.createPrimitiveType('integer');  // とりあえず、なんに対しても0か1を返すので、許可

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
                        return this.createPrimitiveType('integer');
                    }
                }
                this.addDiagnostic(
                    node,
                    `この演算は意図しない値を返す可能性があります。型 '${this.typeToString(leftType)}' と型 '${this.typeToString(rightType)}' の間での '${operator}' 演算は意図しない結果になる可能性があります。`,
                    DiagnosticSeverity.Warning
                );
                return this.createPrimitiveType('integer');
        }
        this.addDiagnostic(
            node,
            `演算子 '${operator}' は、型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' には適用できません。`,
            DiagnosticSeverity.Error
        );
        return this.createPrimitiveType('any');
    }

    visitUnaryOperation(node: ast.UnaryOperationNode): AsirType {
        const operandType = this.visit(node.operand);
        if (!operandType) {
            return this.createPrimitiveType('any');
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
                            return this.createPrimitiveType('integer');
                        }
                        if (this.isSubtypeOf(operandType.name, 'pp')) {
                            return this.createPrimitiveType('form');
                        }
                    }
                    return this.createPrimitiveType('form');
                } else {
                    return this.createPrimitiveType('integer');
                }
            case '`':
                return this.createPrimitiveType('quote');
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
        return this.getCommonSupertype([consequenceType || this.createPrimitiveType('any'), alternativeType || this.createPrimitiveType('any')]);
    }

    visitPowerOperation(node: ast.PowerOperationNode): AsirType {
        const baseType = this.visit(node.base);
        if (baseType) {
            this.checkUsageAsValue(node.base, baseType);
        }
        this.visit(node.exponent);
        return this.createPrimitiveType('any'); // Or calculate a more specific type
    }

    visitIndexAccess(node: ast.IndexAccessNode): AsirType {
        let currentType = this.visit(node.base) || this.createPrimitiveType('any');

        node.indices.forEach(indexExpr => {
            const indexType = this.visit(indexExpr) || this.createPrimitiveType('any');
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
                            return this.createPrimitiveType('any');
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
                    return this.createPrimitiveType('any');
            }
        }
        return currentType;
    }

    visitMemberAccess(node: ast.MemberAccessNode): AsirType {
        let currentType = this.visit(node.base);
        for (const memberIndeterminate of node.members) {
            if (!currentType) { return this.createPrimitiveType('any') }
            const memberName = memberIndeterminate.name;
            if (currentType.kind !== 'struct') {
                this.addDiagnostic(memberIndeterminate, `'${this.typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
            }
            const memberType = currentType.members.get(memberName);
            if (!memberType) {
                this.addDiagnostic(memberIndeterminate, `構造体 '${currentType.name}' にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
                return this.createPrimitiveType('any');
            }
            currentType = memberType;
        }
        return currentType || this.createPrimitiveType('any');
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
        return this.createPrimitiveType('undefined');
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

        return this.createPrimitiveType('undefined');
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
        return this.createPrimitiveType('undefined');
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
        return this.createPrimitiveType('undefined');
    }

    visitBreakStatement(node: ast.BreakStatementNode): AsirType {
        if (!this.isInLoop) {
            this.addDiagnostic(
                node,
                `'break' 文はループの外では使えません。`,
                DiagnosticSeverity.Error
            );
        }
        return this.createPrimitiveType('undefined');
    }

    visitContinueStatement(node: ast.ContinueStatementNode): AsirType {
        if (!this.isInLoop) {
            this.addDiagnostic(
                node,
                `'continue' 文はループの外では使えません。`,
                DiagnosticSeverity.Error
            );
        }
        return this.createPrimitiveType('undefined');
    }

    visitReturnStatement(node: ast.ReturnStatementNode): AsirType {
        const returnType = node.value ? this.visit(node.value) : this.createPrimitiveType('undefined');
        if (node.value && returnType) {
            this.checkUsageAsValue(node.value, returnType);
        }

        if (!returnType) {
            const safeReturnType = this.createPrimitiveType('any');
            this.handleReturn(node, safeReturnType);
            return safeReturnType;
        }
        this.handleReturn(node, returnType);
        return returnType;
    }

    visitStructStatement(node: ast.StructStatementNode): AsirType {
        console.log(`[Debug] visitStructStatement: Processing definition for '${node.name.name}'.`);
        const structName = node.name.name;
        // メンバーの情報収集
        const memberMap = new Map<string, AsirType>();
        for (const memberID of node.members) {
            memberMap.set(memberID.name, this.createPrimitiveType('any'));
        }
        const structType: StructAsirType = {
            kind: 'struct',
            name: structName,
            members: memberMap
        };
        // 構造体の型をシンボルテーブルに登録
        if (node.loc) {
            console.log(`[Debug] visitStructStatement: Defining symbol '${structName}' in scope '${this.symbolTable.currentScope.node.kind}'.`);
            this.symbolTable.currentScope.define({
                name: structName,
                type: structType,
                definedAt: node.loc,
                node: node
            });
        }
        return this.createPrimitiveType('undefined');
    }

    // --- リテラル ---
    visitStringLiteral(node: ast.StringLiteralNode): AsirType { return this.createPrimitiveType('string'); }
    visitNumberLiteral(node: ast.NumberLiteralNode): AsirType {
        const text = node.rawText ?? String(node.value);
        if (text.includes('/')) { return this.createPrimitiveType('rational'); }
        if (text.includes('.') || text.toLowerCase().includes('e') || text.toLowerCase().includes('E')) { return this.createPrimitiveType('float'); }

        return this.createPrimitiveType('integer');
    }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): AsirType {
        return this.createPrimitiveType('dpoly');
        // 多分dpとdpmを分けるロジックが必要
    }
    visitListLiteral(node: ast.ListLiteralNode): AsirType {
       const elementTypes = node.elements.map(el => {
            const elType = this.visit(el) || this.createPrimitiveType('any');
            this.checkUsageAsValue(el, elType);
            return elType;
       });
       return { kind: 'tuple', elements: elementTypes.map(t => ({ type: t })) };
    }
}
