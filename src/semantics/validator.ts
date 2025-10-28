import * as fs from 'fs';
import * as path from 'path';
import * as ast from '../core/ast/asirAst.js';
import { parseAndBuildAST } from '../core/parser/parserUtils.js';
import { SymbolTable } from './symbolTable.js';
import { AsirType, FunctionAsirType, OverloadedFunctionType, PrimitiveAsirType, PrimitiveAsirTypeName, Symbol, Scope, TYPE_METADATA, StructAsirType, ModuleAsirType, ListAsirType, VectorAsirType, MatrixAsirType, PolynomialAsirType, TupleType, TupleElement, UnionType, LiteralUnionType, p_type, dpm_type, dpoly_type, rat_type, EvaluationResult, ConstantValue } from './types.js';
import { Diagnostic, DiagnosticSeverity } from '../utils/diagnostics.js';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from '../data/builtins.js';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures.js';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants.js';
import { builtinHandlers } from './builtins/handlers.js';
import { ecmaVersion } from 'acorn';

// TODO: データフロー解析
// TODO: load, import, include

// A simple base class for visiting our custom AST
export abstract class AsirASTVisitor<T> {
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

export class Validator extends AsirASTVisitor<EvaluationResult> {
    public diagnostics: Diagnostic[] = [];
    public symbolTable: SymbolTable;
    private currentFunction: ast.DefinitionStatementNode | null = null;
    private isInLoop: boolean = false;
    private currentModuleScope: Scope | null = null;
    private currentModule: ModuleAsirType | null = null;
    private assignmentsInBranch: Map<string, AsirType> | null = null;
    private readonly initialFilePath: string | null;
    public currentFilePath: string | null;
    public inclusionStack: string[] = [];
    private readonly systemIncludePaths: string[];
    public loadPaths: string[];
    public importedFiles: Set<string> = new Set();
    public effectiveCwd: string;

    constructor(programNode: ast.ProgramNode, filePath: string | null = null, systemIncludePaths: string[] = [], loadPaths: string[] = []) {
        super();
        this.symbolTable = new SymbolTable(programNode);
        this.initialFilePath = filePath;
        this.currentFilePath = filePath;
        this.systemIncludePaths = systemIncludePaths;
        this.loadPaths = loadPaths;
        this.effectiveCwd = process.cwd();
        if (filePath) {
            const resolvedPath = path.resolve(filePath);
            this.inclusionStack.push(resolvedPath);
            this.importedFiles.add(resolvedPath);
        }
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
                node: {} as ast.ASTNode,
                isUsed: false // Add this
            };
            globalScope.define(symbol);
        });
    }

    public isSubtypeOf(subtypeName: PrimitiveAsirTypeName, supertypeName: PrimitiveAsirTypeName): boolean {
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

        // Add post-analysis check for unused symbols
        this.symbolTable.getAllSymbols().forEach(symbol => {
            // Exclude built-in functions and parameters from unused check
            // Also exclude symbols without a definedAt location (e.g., some builtins)
            if (!symbol.isUsed && symbol.definedAt &&
                !BUILTIN_SIGNATURES.has(symbol.name) &&
                !BUILTIN_CONSTANTS.has(symbol.name) &&
                !(symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') // Exclude function parameters
            ) {
                this.addDiagnostic(
                    symbol.node,
                    `未使用のシンボル '${symbol.name}' が定義されています。`,
                    DiagnosticSeverity.Hint // Or Warning
                );
            }
        });

        return this.diagnostics;
    }

    public addDiagnostic(node: ast.ASTNode, message: string, severity: DiagnosticSeverity) {
        if (node.loc) {
            const range = {
                start: { line: node.loc.startLine, character: node.loc.startColumn },
                end: { line: (node.loc.endLine ?? node.loc.startLine), character: (node.loc.endColumn ?? node.loc.startColumn + 1) }
            };
            this.diagnostics.push({ range, message, severity, source: 'AsirValidator', filePath: this.currentFilePath ?? undefined });
        }
    }

    public isTypeCompatible(sourceType: AsirType, targetType: AsirType): boolean {
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
            return this.areTypesDeeplyEqual(sourceType, targetType);
        }
        if (sourceType.kind === 'overloaded_function' && targetType.kind === 'overloaded_function') {
            return this.areTypesDeeplyEqual(sourceType, targetType);
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

    public getCommonSupertype(types: AsirType[]): AsirType {
        if (types.length === 0) { return p_type('any'); }
        const uniqueTypes: AsirType[] = [];
        for (const type of types) {
            let found = false;
            for (const existingType of uniqueTypes) {
                if (this.areTypesDeeplyEqual(type, existingType)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                uniqueTypes.push(type);
            }
        }
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
            const actualResult = this.visit(optionNode.value) || { type: p_type('any') };
            if (!this.isTypeCompatible(actualResult.type, expecedType)) {
                this.addDiagnostic(
                    optionNode.value,
                    `オプション '${keyName}' の型が一致しません。型 '${this.typeToString(expecedType)}' が必要ですが、型 '${this.typeToString(actualResult.type)}' が指定されました。`,
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

    private areTypesDeeplyEqual(type1: AsirType, type2: AsirType): boolean {
        // 参照が同じなら等しい
        if (type1 === type2) return true;

        // どちらかがnull/undefinedなら、もう一方もそうでないと等しくない
        if (!type1 || !type2) return false;

        // kindが異なるなら等しくない
        if (type1.kind !== type2.kind) return false;

        // kindに応じて比較ロジックを分岐
        switch (type1.kind) {
            case 'primitive':
                return (type1 as PrimitiveAsirType).name === (type2 as PrimitiveAsirType).name;

            case 'list':
                return this.areTypesDeeplyEqual(
                    (type1 as ListAsirType).elementType,
                    (type2 as ListAsirType).elementType
                );

            case 'tuple':
                const tuple1 = type1 as TupleType;
                const tuple2 = type2 as TupleType;
                if (tuple1.elements.length !== tuple2.elements.length) return false;
                for (let i = 0; i < tuple1.elements.length; i++) {
                    // Compare type of each element
                    if (!this.areTypesDeeplyEqual(tuple1.elements[i].type, tuple2.elements[i].type)) return false;
                    if (tuple1.elements[i].name !== tuple2.elements[i].name) return false; // 名前付き要素も比較
                }
                return true;

            case 'vector':
            case 'matrix':
                return this.areTypesDeeplyEqual(
                    (type1 as VectorAsirType | MatrixAsirType).elementType,
                    (type2 as VectorAsirType | MatrixAsirType).elementType
                );

            case 'function':
                const func1 = type1 as FunctionAsirType;
                const func2 = type2 as FunctionAsirType;
                if (func1.behavior !== func2.behavior) return false;
                if (!this.areTypesDeeplyEqual(func1.returnType, func2.returnType)) return false;
                if (func1.parameters.length !== func2.parameters.length) return false;
                for (let i = 0; i < func1.parameters.length; i++) {
                    if (!this.areTypesDeeplyEqual(func1.parameters[i].type, func2.parameters[i].type)) return false;
                    if (func1.parameters[i].name !== func2.parameters[i].name) return false;
                }
                // restParameterの比較
                if ((func1.restParameter && !func2.restParameter) || (!func1.restParameter && func2.restParameter)) return false;
                if (func1.restParameter && func2.restParameter) {
                    if (!this.areTypesDeeplyEqual(func1.restParameter.type, func2.restParameter.type)) return false;
                    if (func1.restParameter.name !== func2.restParameter.name) return false;
                }
                return true;

            case 'overloaded_function':
                const ovl1 = type1 as OverloadedFunctionType;
                const ovl2 = type2 as OverloadedFunctionType;
                if (ovl1.behavior !== ovl2.behavior) return false;
                if (ovl1.signatures.length !== ovl2.signatures.length) return false;
                // シグネチャの順序は重要ではないため、ソートして比較するか、Setで比較する
                // ここでは、typeToStringを使って文字列化しSetで比較する。
                // typeToStringも深さ比較してるわけではないので、厳密にはtypeToStringによる文字列が一致しないと等しくないと判断される。
                // よって、この方法は暫定的。
                const sig1Strings = new Set(ovl1.signatures.map(s => this.typeToString(s)));
                const sig2Strings = new Set(ovl2.signatures.map(s => this.typeToString(s)));
                if (sig1Strings.size !== sig2Strings.size) return false;
                for (const s of sig1Strings) {
                    if (!sig2Strings.has(s)) return false;
                }
                return true;

            case 'struct':
                const struct1 = type1 as StructAsirType;
                const struct2 = type2 as StructAsirType;
                if (struct1.name !== struct2.name) return false;
                if (struct1.members.size !== struct2.members.size) return false;
                for (const [key, memberType1] of struct1.members.entries()) {
                    const memberType2 = struct2.members.get(key);
                    if (!memberType2 || !this.areTypesDeeplyEqual(memberType1, memberType2)) return false;
                }
                return true;

            case 'module':
                const module1 = type1 as ModuleAsirType;
                const module2 = type2 as ModuleAsirType;
                if (module1.name !== module2.name) return false;
                if (module1.members.size !== module2.members.size) return false;
                // モジュールのメンバーはSymbol型なので、そのtypeを比較
                for (const [key, symbol1] of module1.members.entries()) {
                    const symbol2 = module2.members.get(key);
                    if (!symbol2 || !this.areTypesDeeplyEqual(symbol1.type, symbol2.type)) return false;
                }
                return true;

            case 'union':
                const union1 = type1 as UnionType;
                const union2 = type2 as UnionType;
                if (union1.types.length !== union2.types.length) return false;
                // Union型も順序が重要ではないため、Setを使って比較する。
                // ここでは typeToString を使って文字列化する。
                // より厳密には、Set<AsirType>で管理し、各要素のequalityをareTypesDeeplyEqualで比較すべき
                const union1Strings = new Set(union1.types.map(t => this.typeToString(t)));
                const union2Strings = new Set(union2.types.map(t => this.typeToString(t)));
                if (union1Strings.size !== union2Strings.size) return false;
                for (const s of union1Strings) {
                    if (!union2Strings.has(s)) return false;
                }
                return true;


            case 'literal_union':
                const litUnion1 = type1 as LiteralUnionType;
                const litUnion2 = type2 as LiteralUnionType;
                if (litUnion1.values.length !== litUnion2.values.length) return false;
                const litUnion1Set = new Set(litUnion1.values);
                const litUnion2Set = new Set(litUnion2.values);
                if (litUnion1Set.size !== litUnion2Set.size) return false;
                for (const v of litUnion1Set) {
                    if (!litUnion2Set.has(v)) return false;
                }
                return true;

            // 多項式型は coefficientType を比較
            case 'standard_polynomial':
            case 'distributed_polynomial':
            case 'dmod_polynomial':
            case 'non_commutative_polynomial':
            case 'rational_function':
                const poly1 = type1 as PolynomialAsirType;
                const poly2 = type2 as PolynomialAsirType;
                return this.areTypesDeeplyEqual(poly1.coefficientType, poly2.coefficientType);

            default:
                // 未知の型、または比較ロジックが未実装の型
                return false;
        }
    }

    private checkNumericTypeMismatch(type1: AsirType, type2: AsirType): string | null {
        if (type1.kind === 'primitive' && this.isSubtypeOf(type1.name, 'number') && type2.kind === 'primitive' && this.isSubtypeOf(type2.name, 'number')) {
            if (type1.name !== type2.name) {
                return `異なる数値型 '${type1.name}' と '${type2.name}'`;
            }
        }
        else if (this.isPolynomialType(type1) && this.isPolynomialType(type2) && type1.kind === type2.kind) {
            const coeffWarning = this.checkNumericTypeMismatch(type1.coefficientType, type2.coefficientType);
            if (coeffWarning) { return `異なる係数型を持つ多項式 (${coeffWarning})`; }
        }
        else if ((type1.kind === 'list' && type2.kind === 'list') || (type1.kind === 'vector' && type2.kind === 'vector') || (type1.kind === 'matrix' && type2.kind === 'matrix')) {
            const elementWarning = this.checkNumericTypeMismatch(type1.elementType, type2.elementType);
            if (elementWarning) { return `異なる要素型を持つ ${type1.kind} (${elementWarning})`; }
        }
        else if (type1.kind === 'tuple' && type2.kind === 'tuple') {
            if (type1.elements.length === type2.elements.length) {
                for (let i=0; i < type1.elements.length; i++) {
                    const elementWarning = this.checkNumericTypeMismatch(type1.elements[i].type, type2.elements[i].type);
                    if (elementWarning) {
                        return `${i+1} 番目の要素で型が異なるリスト (${elementWarning})`;
                    }
                }
            }
        }
        else if (type1.kind === 'struct' && type2.kind === 'struct' && type1.name === type2.name) {
            for (const [key, type1Member] of type1.members.entries()) {
                const type2Member = type2.members.get(key);
                if (type2Member) {
                    const memberWarning = this.checkNumericTypeMismatch(type1Member, type2Member);
                    if (memberWarning) {
                        return `メンバー '${key}' の型が異なる構造体 '${type1.name}' (${memberWarning})`;
                    }
                }
            }
        }
        return null;
    }

    // --- 具体的な意味解析 ---

    visitAssignmentExpression(node: ast.AssignmentExpressionNode): EvaluationResult {
        const rightResult = this.visit(node.right) || { type: p_type('any') };
        this.checkUsageAsValue(node.right, rightResult.type);

        if (this.assignmentsInBranch !== null && node.left.kind === 'Indeterminate') {
            this.assignmentsInBranch.set(node.left.name, rightResult.type);
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
                            type: rightResult.type,
                            definedAt: node.left.loc,
                            node: node.left,
                            isUsed: false,
                            constantValue: rightResult.constantValue
                        });
                    }
                } else {
                    const existingType = symbol.type;
                    if (existingType.kind !== 'primitive' || (existingType.name !== 'any' && existingType.name !== 'parameter')) {
                        if (!this.isTypeCompatible(rightResult.type, existingType)) {
                            this.addDiagnostic(
                                node,
                                `変数の型が変更されました。 '${this.typeToString(existingType)}' から ${this.typeToString(rightResult.type)} に変わっています。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                                DiagnosticSeverity.Warning
                            );
                        }
                    }
                    symbol.type = rightResult.type;
                    symbol.constantValue = rightResult.constantValue; 
                }
            } else if (node.left.kind === 'IndexAccess' || node.left.kind === 'MemberAccess') {
                let baseNode: ast.ExpressionNode = node.left;
                while (baseNode.kind === 'IndexAccess' || baseNode.kind === 'MemberAccess') {
                    baseNode = (baseNode as ast.IndexAccessNode | ast.MemberAccessNode).base;
                }
                if (baseNode.kind === 'Indeterminate') {
                    const baseSymbol = this.symbolTable.currentScope.lookup(baseNode.name);
                    if (baseSymbol) { baseSymbol.constantValue = undefined; }
                }
                const leftResult= this.visit(node.left);
                if (leftResult && !this.isTypeCompatible(rightResult.type, leftResult.type)) {
                    this.addDiagnostic(node.right, `代入の型が一致しません。型 '${this.typeToString(leftResult.type)}' から型 '${this.typeToString(rightResult.type)}'へと変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`, DiagnosticSeverity.Error);
                }
                if (node.left.kind === 'MemberAccess') {
                    const memberAccessNode = node.left;
                    let currentResult = this.visit(memberAccessNode.base);
                    if (!currentResult) { return { type: rightResult.type }; }

                    let currentType = currentResult.type;
                    const membersToTrace = memberAccessNode.members.slice(0,-1);
                    const finalMember = memberAccessNode.members[memberAccessNode.members.length -1];
                    for (const memberIndeterminate of membersToTrace) {
                        if (!currentType) { return { type: rightResult.type}; }
                        const memberName = memberIndeterminate.name;

                        if (currentType.kind !== 'struct') {
                            this.addDiagnostic(
                                memberIndeterminate,
                                `'${this.typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`,
                                DiagnosticSeverity.Error
                            );
                            return { type: rightResult.type};
                        }

                        const memberType = currentType.members.get(memberName);
                        if (!memberType) {
                            this.addDiagnostic(
                                memberIndeterminate,
                                `構造体 '${currentType.name}' にメンバー '${memberName}' はありません。`,
                                DiagnosticSeverity.Error
                            );
                            return { type: rightResult.type };
                        }
                        currentType = memberType;
                    }
                    if (!currentType ||  currentType.kind !== 'struct') {
                        this.addDiagnostic(
                            finalMember,
                            `'${this.typeToString(currentType)}' 型は構造体ではないため、メンバーにアクセスできません。`,
                            DiagnosticSeverity.Error
                        );
                        return { type: rightResult.type};
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
                        if (!this.isTypeCompatible(rightResult.type, expecedType)) {
                            this.addDiagnostic(
                                node.right,
                                `メンバー '${finalMemberName}' の型が一致しません。型 '${this.typeToString(expecedType)}' から型 '${this.typeToString(rightResult.type)}' へ変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                                DiagnosticSeverity.Warning
                            );
                        }
                        (currentType as StructAsirType).members.set(finalMemberName, rightResult.type);
                    }
                }

                if (leftResult!.type && !this.isTypeCompatible(rightResult.type, leftResult!.type)) {
                    this.addDiagnostic(
                        node.right,
                        `代入の型が一致しません。型 '${this.typeToString(leftResult!.type)}' から型 '${this.typeToString(rightResult.type)}' へと変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                        DiagnosticSeverity.Error
                    );
                }
            }
        }
        return { type: rightResult.type };
    }

    visitExpressionStatement(node: ast.ExpressionStatementNode): EvaluationResult {
        const exprType = this.visit(node.expression);
        if (exprType) {
            this.checkUsageAsValue(node.expression, exprType.type);
        }
        return exprType || { type: p_type('undefined') };
    }

    visitFunctionDefinition(node: ast.DefinitionStatementNode): EvaluationResult {
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
                return { type: p_type('undefined') };
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
                definedAt: node.name.loc,
                node,
                isUsed: false // Add this
            });
        }

        // --- 関数ボディの解析 ---
        const oldFunction = this.currentFunction;
        this.currentFunction = node;
        this.symbolTable.enterScope(node);

        node.parameters.forEach((param, i) => {
            if (param.loc) {
                this.checkVariableNameConvention(param);
                const paramSymbol: Symbol = { name: param.name, type: functionType.parameters[i].type, definedAt: param.loc, node: param, isUsed: false };
                this.symbolTable.currentScope.define(paramSymbol);
            }
        });

        this.visit(node.body);
        this.symbolTable.exitScope();
        this.currentFunction = null;

        return { type: p_type('undefined') };
    }

    visitFormDeclaration(node: ast.FormDeclarationNode): EvaluationResult {
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
                node,
                isUsed: false // Add this
            });
        }
        return { type: p_type('undefined') };
    }

    visitIndeterminate(node: ast.IndeterminateNode): EvaluationResult {
        const name = node.name;
        const symbol = this.symbolTable.currentScope.lookup(name);
        // キーワードをチェック
        if (ASIR_KEYWORDS.includes(name)) {
            this.addDiagnostic(
                node,
                `'${name}' はキーワードであり、式の中では使用できません。`,
                DiagnosticSeverity.Error
            );
            return { type: p_type('any') };
        }
        // 変数・関数としてシンボルテーブルに登録されていないか探す
        if (symbol) {
            node.resolvedSymbol = symbol;
            symbol.isUsed = true;
            return {type: symbol.type, constantValue: symbol.constantValue };
        }
        // 組み込み関数をチェック
        if (BUILTIN_SIGNATURES.has(name)) {
            return { type: BUILTIN_SIGNATURES.get(name)! };
        }
        // 組み込み定数をチェック
        if (BUILTIN_CONSTANTS.has(name)) {
            return { type: BUILTIN_CONSTANTS.get(name)! };
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
            return { type: genericFunctionType };
        }
        // シンボルテーブルにない場合
        if (name.match(/^(?:[A-Z]|_[A-Z])/)) {
            this.addDiagnostic(
                node,
                `未定義の変数 '${name}' が参照されました。暗黙的に 0 として扱われます。`,
                DiagnosticSeverity.Warning
            );
            return { type: p_type('integer'), constantValue: 0};
        } else {
            return { type: p_type('indeterminate')}
        }
    }

    visitFunctionCall(node: ast.FunctionCallNode): EvaluationResult {
        const calleeNode = node.callee;
        const funcName = calleeNode.functionName.name;
        const argResults = node.args.map(arg => this.visit(arg) || { type: p_type('any') });
        
        if (builtinHandlers.has(funcName)) {
            const handler = builtinHandlers.get(funcName)!;
            return handler(this, node, argResults)
        }

        const calleeResult = this.visit(calleeNode.functionName);
        const actualArgTypes = argResults.map(r => r.type);
        let calleeType: AsirType | undefined = calleeResult?.type;

        // --- 呼び出し方に応じたロジック ---
        if (node.isGlobal) {
            if (calleeNode.moduleName) {
                this.addDiagnostic(node, `'::' と '.'を同時に使用することはできません。`, DiagnosticSeverity.Error);
                return { type: p_type('any') };
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
                return { type: p_type('any') };
            }
            if (moduleSymbol.type.kind !== 'module') {
                this.addDiagnostic(calleeNode.moduleName, `'${moduleName}' はモジュールではありません。`, DiagnosticSeverity.Error);
                return { type: p_type('any') };
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
            return { type: p_type('any') };
        }

        if (calleeType.kind === 'union') {
            const funcPart = calleeType.types.find(t => t.kind === 'function' || t.kind === 'overloaded_function');
            if (funcPart) { calleeType = funcPart; }
        }

        // 引数が一定の関数のチェック
        if (calleeType.kind === 'function') {
            // 引数の数チェック
            const expectedParams = calleeType.parameters;
            const restParam = calleeType.restParameter;
            if (restParam) {
                if (actualArgTypes.length < expectedParams.length) {
                    this.addDiagnostic(node, `引数の数が足りません。少なくとも ${expectedParams.length} 個の引数が必要ですが、${argResults.length}個が指定されました。`, DiagnosticSeverity.Error);
                }
            } else {
                if (actualArgTypes.length !== expectedParams.length) {
                    this.addDiagnostic(node,`引数の数が一致しません。 ${expectedParams.length} 個の引数が必要ですが、 ${argResults.length} 個が指定されました。`,DiagnosticSeverity.Error);
                }
            }

            // 各固定引数の型をチェック
            const fixedArgCount = Math.min(actualArgTypes.length, expectedParams.length);
            for (let i = 0; i < fixedArgCount; i++) {
                this.checkUsageAsValue(actualArgTypes[i], actualArgTypes[i]);
                if (!this.isTypeCompatible(actualArgTypes[i], expectedParams[i].type)) {
                    this.addDiagnostic(
                        node.args[i],
                        `引数${i + 1}の型が一致しません。型 '${this.typeToString(expectedParams[i].type)}' が必要ですが、型 '${this.typeToString(actualArgTypes[i])}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                }
            }
            // 可変長引数の型チェック
            if (restParam) {
                for (let i = fixedArgCount; i < actualArgTypes.length; i++) {
                    if (!this.isTypeCompatible(actualArgTypes[i], restParam.type)) {
                        this.addDiagnostic(
                            node.args[i],
                            `引数${i+1}の型が一致しません。型 '${this.typeToString(restParam.type)}' が必要ですが、型 '${this.typeToString(actualArgTypes[i])}' が指定されました。`,
                            DiagnosticSeverity.Error
                        );
                    }
                }
            }

            this.validateOptions(funcName, calleeType.allowesOptions, node.options);
            return { type: calleeType.returnType };
        }
        
        // 引数の数が可変の関数のチェック（Overloaded Function）
        if (calleeType.kind === 'overloaded_function') {
            const matchingSignature = calleeType.signatures.find(sig => {
                if (sig.parameters.length !== actualArgTypes.length) { return false; }// 引数の数のチェック
                return sig.parameters.every((expecedParams, i) => {
                    return this.isTypeCompatible(actualArgTypes[i], expecedParams.type); // 引数の型のチェック
                });
            });
            if (matchingSignature) {
                this.validateOptions(funcName, matchingSignature.allowesOptions, node.options);
                return { type: matchingSignature.returnType };
            } else {
                const argTypesString = actualArgTypes.map(t => this.typeToString(t)).join(', ');
                this.addDiagnostic(
                    node,
                    `${funcName} に引数 ${argTypesString} にマッチする定義が見つかりません。`,
                    DiagnosticSeverity.Error
                );
                return { type: p_type('any') };
            }
        }

        // 関数でないものを呼び出す場合はエラーを返す
        this.addDiagnostic(
            calleeNode.functionName,
            `'${funcName}' は関数として呼び出せません。`,
            DiagnosticSeverity.Error
        );
        return { type: p_type('any') };
    }

    visitBinaryOperation(node: ast.BinaryOperationNode): EvaluationResult {
        const leftResult = this.visit(node.left) || { type: p_type('any') };
        const rightResult = this.visit(node.right) || { type: p_type('any') };
        const leftType = leftResult.type;
        const rightType = rightResult.type;
        const operator = node.operator;

        this.checkUsageAsValue(node.left, leftType);
        this.checkUsageAsValue(node.right, rightType);

        let resultType: AsirType = p_type('undefined');
        let constantValue: ConstantValue | undefined = undefined;

        // 定数畳み込み
        const leftConst = leftResult.constantValue;
        const rightConst = rightResult.constantValue;
        if (typeof leftConst === 'number' && typeof rightConst === 'number') {
            switch (operator) {
                case '+': constantValue = leftConst + rightConst; break;
                case '-': constantValue = leftConst - rightConst; break;
                case '*': constantValue = leftConst * rightConst; break;
                case '/': if (rightConst !== 0) constantValue = leftConst / rightConst; break;
                case '%': if (rightConst !== 0) constantValue = leftConst % rightConst; break;
            }
        }

        // QE系のロジック
        if (operator.startsWith('@')) {
            this.visit(node.left);
            this.visit(node.right);
            resultType = p_type('qeformula'); 
        }

        if (leftType.kind === 'primitive' && this.isSubtypeOf(leftType.name, 'pp')) {
            resultType = { kind: 'standard_polynomial', coefficientType: p_type('integer') };
        }
        if (rightType.kind === 'primitive' && this.isSubtypeOf(rightType.name, 'pp')) {
            resultType = { kind: 'standard_polynomial', coefficientType: p_type('integer') };
        }

        switch (operator) {
            case '+':
            case '-':
            case '*':
            case '/':
                const isLeftPoly = this.isPolynomialType(leftType);
                const isRightPoly = this.isPolynomialType(rightType);
                const isLeftNumeric = leftType.kind === 'primitive' && this.isSubtypeOf(leftType.name, 'number');
                const isRightNumeric = rightType.kind === 'primitive' && this.isSubtypeOf(rightType.name, 'number');
                const isLeftParametoric = leftType.kind === 'primitive' && leftType.name === 'parameter';
                const isRightParametoric = rightType.kind === 'primitive' && rightType.name === 'parameter';

                // --- 多項式 ---
                if ((leftType.kind === 'dmod_polynomial' && rightType.kind !== 'dmod_polynomial') ||
                    (leftType.kind !== 'dmod_polynomial' && rightType.kind === 'dmod_polynomial') ||
                    (leftType.kind === 'non_commutative_polynomial' && rightType.kind !== 'non_commutative_polynomial') ||
                    (leftType.kind !== 'non_commutative_polynomial' && rightType.kind === 'non_commutative_polynomial')) {
                    this.addDiagnostic(
                        node,
                        `型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' の間での '${operator}' 演算はサポートされていません。`,
                        DiagnosticSeverity.Error
                    );
                    resultType = p_type('any');
                    break;
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
                        resultType = p_type('any');
                        break;
                    }
                    const polyPrecedence = ['standard_polynomial', 'rational_function', 'distributed_polynomial'];
                    const kind1_idx = polyPrecedence.indexOf(poly1.kind);
                    const kind2_idx = polyPrecedence.indexOf(poly2.kind);
                    const resultKind = kind1_idx > kind2_idx ? poly1.kind : poly2.kind;
                    if (operator === '/' ) {
                        const allowedKinds = ['standard_polynomial', 'rational_function'];
                        if (allowedKinds.includes(poly1.kind) && allowedKinds.includes(poly2.kind)) {
                            resultType = { kind: 'rational_function', coefficientType: resultCoeffType };
                            break;
                        } else {
                            this.addDiagnostic(
                                node,
                                `演算子 '${operator}' は、型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' の組み合わせには適用できません。`,
                                DiagnosticSeverity.Error
                            );
                            resultType = p_type('any');
                            break;
                        }
                    }
                    if (['+', '-', '*'].includes(operator)) { resultType = { kind: resultKind, coefficientType: resultCoeffType } as PolynomialAsirType; break; }
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
                        resultType = p_type('any');
                        break;
                    }
                    resultType = { kind: polyType.kind, coefficientType: resultCoeffType } as PolynomialAsirType;
                    break;
                }

                if ((isLeftPoly && isRightParametoric) || (isLeftParametoric && isRightPoly)) {
                    const polyType = (isLeftPoly ? leftType : rightType) as PolynomialAsirType;
                    resultType = { kind: polyType.kind, coefficientType: p_type('any') } as PolynomialAsirType;
                    break;
                }

                // --- プリミティブ ---
                if (leftType.kind === 'primitive' && rightType.kind === 'primitive') {
                    const leftMeta = TYPE_METADATA.get(leftType.name);
                    const rightMeta = TYPE_METADATA.get(rightType.name);

                    if (!leftMeta || !rightMeta) {
                        this.addDiagnostic(node, `型 '${leftType.name}' または '${rightType.name}' の演算ルールが定義されていません。`, DiagnosticSeverity.Error);
                        resultType = p_type('any');
                        break;
                    }

                     if (leftMeta.category === 'general_numeric' && rightMeta.category === 'general_numeric') {
                        const resultTempType = this.getWiderNumericType(leftType.name, rightType.name);
                        resultType = p_type(resultTempType);
                        break;
                    }
                    if (leftType.name === 'rational' && rightMeta.category === 'finite_field') {
                        resultType = rightType;
                        break;
                    }
                    if (leftMeta.category === 'finite_field' && rightType.name === 'rational') {
                        resultType = leftType;
                        break;
                    }
                    if (leftMeta.category === 'finite_field' && rightMeta.category === 'finite_field') {
                        if (leftType.name === rightType.name) { resultType = leftType; break; }
                    }
                    if (leftMeta.category === 'algebric_numeric' && rightMeta.category === 'general_numeric') {
                        if (rightType.name === 'complex') { resultType = rightType; break; } else if (rightType.name === 'rational') { resultType = leftType; break; }
                    }
                    if (leftMeta.category === 'general_numeric' && rightMeta.category === 'algebric_numeric') {
                        if (leftType.name === 'complex') { resultType = leftType; break; } else if (leftType.name === 'rational') { resultType = rightType; break; }
                    }
                    if (leftMeta.category === 'algebric_numeric' && rightMeta.category === 'algebric_numeric') {
                        if (leftType.name === rightType.name) { resultType = leftType; break; }
                    }
                    if (operator === '+' && leftMeta.category === 'string' && rightMeta.category === 'string') {
                        resultType = p_type('string'); break;
                    }
                    // パラメーター系
                    if (leftType.name === 'parameter' && rightType.name === 'parameter') {
                        resultType = p_type('any'); break;
                    }
                    if (this.isSubtypeOf(leftType.name, 'number') && rightType.name === 'parameter') {
                        resultType = p_type('any'); break;
                    }
                    if (leftType.name === 'parameter' && this.isSubtypeOf(rightType.name, 'number')) {
                        resultType = p_type('any'); break;
                    }
                    if (leftType.name === 'parameter' && rightType.name === 'string') {
                        resultType = p_type('any'); break;
                    }
                }
                break;
            
            case '%':
                const isRightInt = rightType.kind === 'primitive' && rightType.name === 'integer';
                if (!isRightInt) {
                    this.addDiagnostic(
                        node.right,
                        `演算子 '%' の右辺は整数である必要がありますが、型 '${this.typeToString(rightType)}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                    resultType = p_type('any'); break;
                }

                const isLeftInt = leftType.kind === 'primitive' && leftType.name === 'integer';
                const isLeftPolyOfInt = 
                    leftType.kind === 'standard_polynomial' &&
                    leftType.coefficientType.kind === 'primitive' &&
                    leftType.coefficientType.name === 'integer';
                if (isLeftInt || isLeftPolyOfInt) {
                    resultType = leftType; break;
                } else {
                    this.addDiagnostic(
                        node.left,
                        `演算子 '%' の左辺は、整数または整数係数多項式である必要がありますが、型 '${this.typeToString(leftType)}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                    resultType = p_type('any'); break;
                }

            case '==':
            case '!=':
                const warningDetails = this.checkNumericTypeMismatch(leftType, rightType);
                if (warningDetails) {
                    this.addDiagnostic(
                        node,
                        `${warningDetails} を '${operator}' で比較しています。比較は可能ですが、意図しない問題が発生する可能性があります。`,
                        DiagnosticSeverity.Warning
                    );
                }
                resultType = p_type('integer'); break;

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
                        resultType = p_type('integer'); break;
                    }
                }
                this.addDiagnostic(
                    node,
                    `この演算は意図しない値を返す可能性があります。型 '${this.typeToString(leftType)}' と型 '${this.typeToString(rightType)}' の間での '${operator}' 演算は意図しない結果になる可能性があります。`,
                    DiagnosticSeverity.Warning
                );
                resultType = p_type('integer'); break;
        }
        if (resultType === p_type('undefined')) {
            this.addDiagnostic(
                node,
                `演算子 '${operator}' は、型 '${this.typeToString(leftType)}' と '${this.typeToString(rightType)}' には適用できません。`,
                DiagnosticSeverity.Error
            );
            resultType = p_type('any')
        }
        return { type: resultType, constantValue };
    }

    visitUnaryOperation(node: ast.UnaryOperationNode): EvaluationResult {
        const operandResult = this.visit(node.operand);
        if (!operandResult) {
            return { type: p_type('any') };
        }
        
        this.checkUsageAsValue(node.operand, operandResult.type);
        let resultType: AsirType = operandResult.type;
        let constantValue: ConstantValue | undefined = undefined;

        switch (node.operator) {
            case '++':
            case '--':
            case '-':
                const isNumeric = operandResult.type.kind === 'primitive' && this.isSubtypeOf(operandResult.type.name, 'number');
                const isPolyVar = operandResult.type.kind === 'primitive' && this.isSubtypeOf(operandResult.type.name, 'pp');
                const isPolynomial = this.isPolynomialType(operandResult.type);
                if (!(isNumeric || isPolyVar || isPolynomial)) {
                    this.addDiagnostic(
                        node.operand,
                        `演算子 '${node.operator}' は数値または多項式にのみ適用できます。`,
                        DiagnosticSeverity.Error
                    );
                    if (node.operator === '-' && typeof operandResult.constantValue === 'number') {
                        constantValue = -operandResult.constantValue;
                    }
                    resultType = operandResult.type;
                    break;
                }
            case '!':
                if (node.isPostfix) {
                    if (operandResult.type.kind === 'primitive') {
                        if (operandResult.type.name === 'integer') {
                            resultType =  p_type('integer');
                        } else if (this.isSubtypeOf(operandResult.type.name, 'pp')) {
                            resultType = p_type('form');
                        } else {
                            resultType = p_type('form');
                        }
                    } else {
                        resultType = p_type('form');
                    }
                } else {
                    resultType = p_type('integer');
                }
                break;
            case '`':
                resultType = p_type('quote');
                break;
            default:
                resultType = operandResult.type;
                break;
        }
        return { type: resultType, constantValue: constantValue };
    }

    visitTernaryOperation(node: ast.TernaryOperationNode): EvaluationResult {
        const conditionResult = this.visit(node.condition);
        const consequenceResult = this.visit(node.consequence) || { type: p_type('any') };
        const alternativeResult = this.visit(node.consequence) || { type: p_type('any') };

        this.checkUsageAsValue(node.consequence, consequenceResult.type);
        this.checkUsageAsValue(node.alternative, alternativeResult.type);

        const resultType = this.getCommonSupertype([consequenceResult.type, alternativeResult.type]);
        let constantValue: ConstantValue | undefined = undefined;

        if (conditionResult?.constantValue !== undefined) {
            if (conditionResult.constantValue) {
                constantValue = consequenceResult.constantValue;
            } else {
                constantValue = alternativeResult.constantValue;
            }
        } else {
            if (consequenceResult.constantValue !== undefined && consequenceResult.constantValue === alternativeResult.constantValue) {
                constantValue = conditionResult?.constantValue;
            }
        }
        return { type: resultType, constantValue };
    }

    visitPowerOperation(node: ast.PowerOperationNode): EvaluationResult {
        const baseResult = this.visit(node.base);
        const exponentResult = this.visit(node.exponent);

        if (!baseResult || !exponentResult) { return { type: p_type('any') }; }

        const baseType = baseResult.type;
        const exponentType = exponentResult.type;

        this.checkUsageAsValue(node.base, baseType);
        this.checkUsageAsValue(node.exponent, exponentType);

        let resultType: AsirType = p_type('any');
        let constantValue: ConstantValue | undefined = undefined;

        // 定数畳み込み
        const baseConst = baseResult.constantValue;
        const expConst = exponentResult.constantValue;
        if (typeof baseConst === 'number' && typeof expConst === 'number') {
            constantValue = Math.pow(baseConst, expConst);
        }

        const getIntegerLiteralValue = (n: ast.ExpressionNode): number | null => {
            if (n.kind === 'NumberLiteral') {
                const strVal = String(n.rawText ?? n.value);
                if (!strVal.includes('.') && !strVal.toLowerCase().includes('e')) {
                    const val = Number(strVal);
                    if (Number.isInteger(val)) return val;
                }
            }
            if (n.kind === 'UnaryOperation' && n.operator === '-' && n.operand.kind === 'NumberLiteral') {
                const strVal = String((n.operand as ast.NumberLiteralNode).rawText ?? (n.operand as ast.NumberLiteralNode).value);
                if (!strVal.includes('.') && !strVal.toLowerCase().includes('e')) {
                    const val = Number(strVal);
                    if (Number.isInteger(val)) return -val;
                }
            }
            return null;
        };

        const exponentValue = getIntegerLiteralValue(node.exponent);
        const baseNode = node.base;

        const isBaseI = (baseNode.kind === 'NumberLiteral' && baseNode.rawText === '@i');
        if (isBaseI) {
            if (exponentValue !== null) {
                if (exponentValue === 0) {
                    return { type: p_type('integer'), constantValue: 1};
                }
                const isEven = exponentValue % 2 === 0;
                if (isEven) {
                    constantValue = (exponentValue / 2) % 2 === 1 ? -1 : 1;
                    return { type: p_type('integer'), constantValue: constantValue };
                } else {
                    return { type: p_type('complex') };
                }
            }
            if (exponentType.kind === 'primitive' && exponentType.name === 'integer') {
                return { type: p_type('complex') };
            }
            return { type: p_type('form') };
        }

        if (exponentValue === 0) { return { type: p_type('integer'), constantValue: 1}; }

        const isBaseNumeric = baseType.kind === 'primitive' && this.isSubtypeOf(baseType.name, 'number');
        const isBaseStdPoly = baseType.kind === 'standard_polynomial';
        if (!isBaseNumeric && !isBaseStdPoly) {
            this.addDiagnostic(
                node.base,
                `演算子 '^' の底は、数値または多項式で得ある必要がありますが、 型 '${this.typeToString(baseType)}' が指定されました。`,
                DiagnosticSeverity.Error
            );
            return { type: p_type('any') };
        }
        if (exponentValue !== null) {
            if (exponentValue > 0) {
                resultType = baseType;
            } else {
                if (baseType.kind === 'primitive' && baseType.name === 'integer') { resultType = p_type('rational'); }
                if (baseType.kind === 'standard_polynomial') { resultType = rat_type(baseType.coefficientType); }
                resultType = baseType;
            }
        }
        if (exponentType.kind === 'primitive' && exponentType.name === 'integer') {
            const possibleTypes: AsirType[] = [baseType, p_type('integer')];
            if (baseType.kind === 'primitive' && baseType.name === 'integer') {
                possibleTypes.push(p_type('rational'));
            } else if (baseType.kind === 'standard_polynomial') {
                possibleTypes.push(rat_type(baseType.coefficientType));
            } else { possibleTypes.push(baseType); }
            resultType = this.getCommonSupertype(possibleTypes);
        }
        resultType = p_type('form');
        return { type: resultType, constantValue };
    }

    visitIndexAccess(node: ast.IndexAccessNode): EvaluationResult {
        const baseResult = this.visit(node.base) || { type: p_type('any') }
        let currentResult: EvaluationResult = baseResult;

        for (const indexNode of node.indices) {
            const indexResult = this.visit(indexNode) || { type: p_type('any') };
            const indexType = indexResult.type;

            if (indexType.kind !== 'primitive' || !this.isSubtypeOf(indexType.name, 'integer')) {
                this.addDiagnostic(indexNode, `インデックスは整数でなければなりません。`, DiagnosticSeverity.Error);
            }

            const currentType = currentResult.type;
            let nextType: AsirType = p_type('any');
            let nextConstantValue: ConstantValue | undefined = undefined;

            switch (currentType.kind) {
                case 'matrix':
                    nextType = { kind: 'vector', elementType: currentType.elementType };
                    break;
                case 'vector':
                case 'list':
                    nextType = currentType.elementType;
                    break;
                case 'tuple':{
                    const indexValue = (typeof indexResult.constantValue === 'number' && Number.isInteger(indexResult.constantValue)) ? indexResult.constantValue : null;

                    if (indexValue !== null) {
                        if (indexValue >= 0 && indexValue < currentType.elements.length) {
                            nextType = currentType.elements[indexValue].type;
                            if (Array.isArray(currentResult.constantValue)) {
                                const elementConst = currentResult.constantValue[indexValue];
                                if (elementConst !== undefined && elementConst !== null) {
                                    nextConstantValue = elementConst;
                                }
                            }
                        } else {
                            this.addDiagnostic(indexNode, `リストのインデックス '${indexValue}' が範囲外です。`, DiagnosticSeverity.Error);
                            nextType = p_type('any');
                        }
                    } else {
                        const elementTypes = currentType.elements.map(e => e.type);
                        nextType = this.getCommonSupertype(elementTypes);
                    }
                    break;
                }
                default:
                    this.addDiagnostic(
                        node.base,
                        `型 '${this.typeToString(currentType)}' に対してインデックスアクセスはできません。`,
                        DiagnosticSeverity.Error
                    );
                    return { type: p_type('any') };
            }
            currentResult = { type: nextType, constantValue: nextConstantValue };
        }
        return currentResult;
    }

    visitMemberAccess(node: ast.MemberAccessNode): EvaluationResult {
        let currentResult = this.visit(node.base);
        if (!currentResult) { return { type: p_type('any') };}
        for (const memberIndeterminate of node.members) {
            const currentType: AsirType = currentResult.type;
            const memberName = memberIndeterminate.name;
            if (currentType.kind !== 'struct') {
                this.addDiagnostic(memberIndeterminate, `'${this.typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
                return { type: p_type('any') };
            }
            const memberType = currentType.members.get(memberName);
            if (!memberType) {
                this.addDiagnostic(memberIndeterminate, `構造体 '${currentType.name}' にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
                return { type: p_type('any') };
            }
            currentResult = { type: memberType, constantValue: undefined };
        }
        return currentResult;
    }

    

    // --- 文 ---
    visitForStatement(node: ast.ForStatementNode): EvaluationResult {
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
        return { type: p_type('undefined') };
    }

    visitIfStatement(node: ast.IfStatementNode): EvaluationResult {
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

        return { type: p_type('undefined') };
    }

    visitWhileStatement(node: ast.WhileStatementNode): EvaluationResult {
        node.conditions.forEach(cond => this.visit(cond));

        const previousInLoop = this.isInLoop;
        this.isInLoop =true;
        try {
            this.visit(node.body);
        } finally {
            this.isInLoop = previousInLoop;
        }
        return { type: p_type('undefined') };
    }

    visitDoWhileStatement(node: ast.DoWhileStatementNode): EvaluationResult {
        const previousInLoop = this.isInLoop;
        this.isInLoop =true;
        try {
            this.visit(node.body);
        } finally {
            this.isInLoop = previousInLoop;
        }

        node.conditions.forEach(cond => this.visit(cond));
        return { type: p_type('undefined') };
    }

    visitBreakStatement(node: ast.BreakStatementNode): EvaluationResult {
        if (!this.isInLoop) {
            this.addDiagnostic(
                node,
                `'break' 文はループの外では使えません。`,
                DiagnosticSeverity.Error
            );
        }
        return { type: p_type('undefined') };
    }

    visitContinueStatement(node: ast.ContinueStatementNode): EvaluationResult {
        if (!this.isInLoop) {
            this.addDiagnostic(
                node,
                `'continue' 文はループの外では使えません。`,
                DiagnosticSeverity.Error
            );
        }
        return { type: p_type('undefined') };
    }

    visitReturnStatement(node: ast.ReturnStatementNode): EvaluationResult {
        const returnType = node.value ? this.visit(node.value) : { type: p_type('undefined') };
        if (node.value && returnType) {
            this.checkUsageAsValue(node.value, returnType.type);
        }

        if (!returnType) {
            const safeReturnType = { type: p_type('any') };
            this.handleReturn(node, safeReturnType.type);
            return safeReturnType;
        }
        this.handleReturn(node, returnType.type);
        return returnType;
    }

    visitStructStatement(node: ast.StructStatementNode): EvaluationResult {
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
                node: node,
                isUsed: false
            });
        }
        return { type: p_type('undefined') };
    }
    // モジュール関係
    visitModuleDeclaration(node: ast.ModuleDeclarationNode): EvaluationResult {
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
                node: node,
                isUsed: false // Add this
            });
        }

        this.symbolTable.enterScope(node); // スコープ開始
        this.currentModuleScope = this.symbolTable.currentScope;
        this.currentModule = moduleType;
        return { type: p_type('undefined') };
    }

    visitModuleVariableDeclaration(node: ast.ModuleVariableDeclarationNode): EvaluationResult {
        const scopeType = node.scope;

        for (const variableNode of node.variables) {
            const varName = variableNode.name;
            const newSymbol: Symbol = {
                name: varName,
                type: p_type('any'),
                definedAt: variableNode.loc,
                node: variableNode,
                isUsed: false // Add this
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
                        this.symbolTable.currentScope.define({ name: varName, type: funcType, definedAt: variableNode.loc, node: variableNode, isUsed: false });
                    }
                    break;
                }
            }
        }
        return { type: p_type('undefined') };
    }

    visitEndModule(node: ast.EndModuleNode): EvaluationResult {
        this.currentModuleScope = null;
        this.currentModule = null;
        this.symbolTable.exitScope(); // スコープ終了
        return { type: p_type('undefined') };
    }

    // プリプロセッサ関係
    visitPDef(node: ast.PreprocessorDefineNode): EvaluationResult {
        const name = node.name.name;

        // 一先ずの実装
        if (node.parameters.length > 0) {
            this.addDiagnostic(node, `関数のマクロはまだバリデータでサポートされていません。`, DiagnosticSeverity.Hint);
            return { type: p_type('undefined') };
        }
        if (this.symbolTable.currentScope.lookupCurrentScope(name)) {
            this.addDiagnostic(node.name, `'${name}' はスコープで既に定義されています。`, DiagnosticSeverity.Warning);
        }
        const type = this.visit(node.body)!.type || p_type('any');
        if (node.name.loc) {
            this.symbolTable.currentScope.define({
                name: name,
                type: type,
                definedAt: node.name.loc,
                node: node,
                isUsed: false
            });
        }
        return { type: p_type('undefined') };
    }

    visitPInc(node: ast.PreprocessorIncludeNode): EvaluationResult {
        let includeFilePath: string | null = null;

        if (node.pathtype === 'local') {
            const currentDirectory = this.currentFilePath ? path.dirname(this.currentFilePath) : null;
            if (!currentDirectory) {
                this.addDiagnostic(node, `#include は、起点となるファイルパスが不明な場合は使用できません。`, DiagnosticSeverity.Error);
                return { type: p_type('undefined') };
            }
            includeFilePath = path.resolve(currentDirectory, node.path);
        } else {
            for (const dir of this.systemIncludePaths) {
                const testPath = path.resolve(dir, node.path);
                if (fs.existsSync(testPath)) {
                    includeFilePath = testPath;
                    break;
                }
            }
        }
        // ファイルが見つからなかった場合
        if (!includeFilePath) {
            this.addDiagnostic(node, `ファイルが見つかりません。： ${node.path}`, DiagnosticSeverity.Error);
            return { type: p_type('undefined') };
        }
        // 循環参照チェック
        const resolvedIncludedPath = path.resolve(includeFilePath);
        if (this.inclusionStack.includes(resolvedIncludedPath)) {
            this.addDiagnostic(node, `循環参照が検出されました。： ${this.inclusionStack.join(' -> ')} -> ${resolvedIncludedPath}`, DiagnosticSeverity.Error);
            return { type: p_type('undefined') };
        }
        // ファイルを読む
        let includedCode: string;
        try {
            includedCode = fs.readFileSync(resolvedIncludedPath, 'utf-8');
        } catch (e) {
            this.addDiagnostic(node, `#includeされたファイルが読み込めません： ${resolvedIncludedPath}`, DiagnosticSeverity.Error);
            return { type: p_type('undefined') };
        }
        // 読んだコードをASTに変換
        const { ast: includedAst, diagnostics: includeDiagnostics } = parseAndBuildAST(includedCode, resolvedIncludedPath);
        this.diagnostics.push(...includeDiagnostics);
        if (includedAst) {
            const previousFilePath = this.currentFilePath;
            this.currentFilePath = resolvedIncludedPath;
            this.inclusionStack.push(resolvedIncludedPath);
            try {
                this.visit(includedAst);
            } finally {
                this.inclusionStack.pop();
                this.currentFilePath = previousFilePath;
            }
        }
        return { type: p_type('undefined') };
    }

    visitParenExpression(node: ast.ParenExpressionNode): EvaluationResult | undefined {
        return this.visit(node.expression);
    }

    // --- リテラル ---
    visitStringLiteral(node: ast.StringLiteralNode): EvaluationResult {
        return { type: p_type('string'), constantValue: node.value };
    }
    visitNumberLiteral(node: ast.NumberLiteralNode): EvaluationResult {
        const text = node.rawText ?? String(node.value);
        let typeName: PrimitiveAsirTypeName = 'integer';
        let constantValue: number | undefined = undefined;

        if (text === '@i') { typeName = 'complex'; }
        if (text === '@p') { typeName ='fcharp'; }
        if (text === '@s') { typeName = 'fchardefp'; }
        if (text === '@') { typeName = 'fchar2'; }
        if (text.includes('/')) { typeName = 'rational'; }
        if (text.includes('.') || text.toLowerCase().includes('e') || text.toLowerCase().includes('E')) { typeName = 'float'; }

        const numVal = Number(node.value);
        if (!isNaN(numVal)) {
            constantValue = numVal;
        }
        return { type: p_type(typeName), constantValue: constantValue };
    }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): EvaluationResult {
        let resultType: AsirType;
        if (node.modulus !== undefined) {
            resultType = dpm_type(p_type('integer'))
        } else {
            resultType = dpoly_type(p_type('integer'))
        }
        return { type: resultType, constantValue: undefined };
    }
    visitListLiteral(node: ast.ListLiteralNode): EvaluationResult {
        const elementResults = node.elements.map(el => this.visit(el) || { type: p_type('any') });
        const elementTypes: TupleElement[] = [];
        const constantValue: (string | number)[] = [];
        let isFullyConstant = true;
       
        for (const result of elementResults) {
            this.checkUsageAsValue(node, result.type);
            elementTypes.push({ type: result.type });
            if (result.constantValue === undefined || Array.isArray(result.constantValue)) {
                isFullyConstant = false;
            }
            if (isFullyConstant) {
                constantValue.push(result.constantValue as string | number);
            }
        }
        const tupleType: TupleType = { kind: 'tuple', elements: elementTypes };
        const finalConstantValue = isFullyConstant ? constantValue : undefined;
        return { type: tupleType, constantValue: finalConstantValue };
    }

    // エラー検知用
    visitDottedIdentifier(node: ast.DottedIdentifierNode): EvaluationResult {
        const fullName = node.identifiers.map(id => id.name).join('.');
        this.addDiagnostic(
            node,
            `識別子 '${fullName}' に '.' を含めることは推奨されません。 'module.func()' でモジュール内の関数を呼びだす時に使用してください。`,
            DiagnosticSeverity.Error
        );
        return { type: p_type('any') };
    }
}
