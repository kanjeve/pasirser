import * as fs from 'fs';
import * as path from 'path';
import * as ast from '../core/ast/asirAst.js';
import { parseAndBuildAST } from '../core/parser/parserUtils.js';
import { SymbolTable } from './symbolTable.js';
import { AsirType, FunctionAsirType, OverloadedFunctionType, PrimitiveAsirType, PrimitiveAsirTypeName, Symbol, Scope, TYPE_METADATA, StructAsirType, ModuleAsirType, ListAsirType, VectorAsirType, MatrixAsirType, PolynomialAsirType, TupleType, TupleElement, UnionType, LiteralUnionType, p_type, stdpoly_type, dpm_type, dpoly_type, rat_type, ncpoly_type, EvaluationResult, IndexAccessResult, ConstantValue, m_type, u_type, l_type, v_type } from './types.js';
import { Diagnostic, DiagnosticSeverity } from '../utils/diagnostics.js';
import { ALL_ASIR_BUILTIN, ASIR_KEYWORDS } from '../data/builtins.js';
import { BUILTIN_SIGNATURES } from '../data/builtinSignatures.js';
import { BUILTIN_CONSTANTS } from '../data/builtinConstants.js';
import { builtinHandlers } from './builtins/handlers.js';
import { typeToString } from './utils/typeFormatter.js';
import { isSubtypeOf, isPolynomialType, areTypesDeeplyEqual, isTypeCompatible, getCommonSupertype } from './utils/typeSystem.js';
import { getWiderNumericType, checkNumericTypeMismatch, getBinaryOperationResultType } from './utils/operatorLogic.js';

// TODO: データフロー解析

// A simple base class for visiting our custom AST
export abstract class AsirASTVisitor<T> {
    visit(node: ast.ASTNode): T | IndexAccessResult | undefined {
        switch (node.kind) {
            // --- Program & Block ---
            case 'Program': return this.visitProgram(node as ast.ProgramNode);
            case 'Block': return this.visitBlock(node as ast.BlockNode);
            // --- Statements ---
            case 'ExpressionStatement': return this.visitExpressionStatement(node as ast.ExpressionStatementNode);
            case 'EmptyStatement': return this.createDefaultResult();
            case 'FunctionDefinition': return this.visitFunctionDefinition(node as ast.DefinitionStatementNode);
            case 'FormDeclaration': return this.visitFormDeclaration(node as ast.FormDeclarationNode);
            case 'StructStatement': return this.visitStructStatement(node as ast.StructStatementNode);
            // Module Statements
            case 'ModuleDeclaration': return this.visitModuleDeclaration(node as ast.ModuleDeclarationNode);
            case 'ModuleVariableDeclaration': return this.visitModuleVariableDeclaration(node as ast.ModuleVariableDeclarationNode);
            case 'EndModule': return this.visitEndModule(node as ast.EndModuleNode);
            // Control Flow
            case 'IfStatement': return this.visitIfStatement(node as ast.IfStatementNode);
            case 'ForStatement': return this.visitForStatement(node as ast.ForStatementNode);
            case 'WhileStatement': return this.visitWhileStatement(node as ast.WhileStatementNode);
            case 'DoWhileStatement': return this.visitDoWhileStatement(node as ast.DoWhileStatementNode);
            case 'ReturnStatement': return this.visitReturnStatement(node as ast.ReturnStatementNode);
            case 'BreakStatement': return this.visitBreakStatement(node as ast.BreakStatementNode);
            case 'ContinueStatement': return this.visitContinueStatement(node as ast.ContinueStatementNode);
            case 'EndStatement': return this.visitEndStatement(node as ast.EndStatementNode);
            case 'QuitStatement': return this.visitQuitStatement(node as ast.QuitStatementNode);
            case 'DebugStatement': return this.visitDebugStatement(node as ast.DebugStatementNode);
            // --- Expressions ---
            // Assignment
            case 'AssignmentExpression': return this.visitAssignmentExpression(node as ast.AssignmentExpressionNode);
            case 'ListDestructuringAssignment': return this.visitListDestructuringAssignment(node as ast.ListDestructuringAssignmentNode);
            // Call & Access
            case 'FunctionCall': return this.visitFunctionCall(node as ast.FunctionCallNode);
            case 'FunctorCall': return this.visitFunctorCall(node as ast.FunctorCallNode);
            case 'QualifiedName': return this.visitQualifiedName(node as ast.QualifiedNameNode); 
            case 'IndexAccess': return this.visitIndexAccess(node as ast.IndexAccessNode);
            case 'MemberAccess': return this.visitMemberAccess(node as ast.MemberAccessNode);
            case 'OptionPair': return this.visitOptionPair(node as ast.OptionPairNode);
            // Operations
            case 'BinaryOperation': return this.visitBinaryOperation(node as ast.BinaryOperationNode);
            case 'UnaryOperation': return this.visitUnaryOperation(node as ast.UnaryOperationNode);
            case 'TernaryOperation': return this.visitTernaryOperation(node as ast.TernaryOperationNode);
            case 'PowerOperation': return this.visitPowerOperation(node as ast.PowerOperationNode);
            case 'ParenExpression': return this.visitParenExpression(node as ast.ParenExpressionNode);
            // Literals & Identifiers
            case 'Indeterminate': return this.visitIndeterminate(node as ast.IndeterminateNode);
            case 'DottedIdentifier': return this.visitDottedIdentifier(node as ast.DottedIdentifierNode);
            case 'NumberLiteral': return this.visitNumberLiteral(node as ast.NumberLiteralNode);
            case 'StringLiteral': return this.visitStringLiteral(node as ast.StringLiteralNode);
            case 'IdLiteral': return this.visitIdLiteral(node as ast.IdLiteralNode);
            case 'ListLiteral': return this.visitListLiteral(node as ast.ListLiteralNode);
            case 'DistributedPolynomialLiteral': return this.visitDPolyLiteral(node as ast.DistributedPolynomialLiteralNode); 
            // --- Preprocessor ---
            case 'PreprocessorDefine': return this.visitPreprocessorDefine(node as ast.PreprocessorDefineNode);
            case 'PreprocessorIf': return this.visitPreprocessorIf(node as ast.PreprocessorIfNode);
            case 'PreprocessorInclude': return this.visitPreprocessorInclude(node as ast.PreprocessorIncludeNode);
            case 'PreprocessorElif': return this.visitPreprocessorElif(node as ast.PreprocessorElifNode);
            case 'PreprocessorElse': return this.visitPreprocessorElse(node as ast.PreprocessorElseNode);
            // --- Others ---
            case 'ExpressionList': return this.visitExpressionList(node as ast.ExpressionListNode);
            default: 
                return this.visitChildren(node);
        }
    }

    protected createDefaultResult(): T | undefined {
        return undefined;
    }

    protected aggregateResult(aggregate: T | IndexAccessResult | undefined, nextResult: T | IndexAccessResult | undefined): T | IndexAccessResult | undefined {
        return nextResult !== undefined ? nextResult : aggregate;
    }

    protected visitChildren(node: ast.ASTNode): T | IndexAccessResult | undefined {
        let result: T | IndexAccessResult | undefined = this.createDefaultResult();
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

    // --- Abstract Visit Methods ---
    // Program & block
    visitProgram(node: ast.ProgramNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitBlock(node: ast.BlockNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Statements
    visitExpressionStatement(node: ast.ExpressionStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitFunctionDefinition(node: ast.DefinitionStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitFormDeclaration(node: ast.FormDeclarationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitStructStatement(node: ast.StructStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Module
    visitModuleDeclaration(node: ast.ModuleDeclarationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitModuleVariableDeclaration(node: ast.ModuleVariableDeclarationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitEndModule(node: ast.EndModuleNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Control Flow
    visitIfStatement(node: ast.IfStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitForStatement(node: ast.ForStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitWhileStatement(node: ast.WhileStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitDoWhileStatement(node: ast.DoWhileStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitReturnStatement(node: ast.ReturnStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitBreakStatement(node: ast.BreakStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitContinueStatement(node: ast.ContinueStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitEndStatement(node: ast.EndStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitQuitStatement(node: ast.QuitStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitDebugStatement(node: ast.DebugStatementNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Assignments
    visitAssignmentExpression(node: ast.AssignmentExpressionNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitListDestructuringAssignment(node: ast.ListDestructuringAssignmentNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Calls
    visitFunctionCall(node: ast.FunctionCallNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitFunctorCall(node: ast.FunctorCallNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitQualifiedName(node: ast.QualifiedNameNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitOptionPair(node: ast.OptionPairNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Operations
    visitBinaryOperation(node: ast.BinaryOperationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitUnaryOperation(node: ast.UnaryOperationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitTernaryOperation(node: ast.TernaryOperationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitPowerOperation(node: ast.PowerOperationNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitParenExpression(node: ast.ParenExpressionNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Access
    visitIndexAccess(node: ast.IndexAccessNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitMemberAccess(node: ast.MemberAccessNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Literals & Identifiers
    visitIndeterminate(node: ast.IndeterminateNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitDottedIdentifier(node: ast.DottedIdentifierNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitListLiteral(node: ast.ListLiteralNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitStringLiteral(node: ast.StringLiteralNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitNumberLiteral(node: ast.NumberLiteralNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitDPolyLiteral(node: ast.DistributedPolynomialLiteralNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitIdLiteral(node: ast.IdLiteralNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Preprocessor
    visitPreprocessorDefine(node: ast.PreprocessorDefineNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitPreprocessorIf(node: ast.PreprocessorIfNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitPreprocessorInclude(node: ast.PreprocessorIncludeNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitPreprocessorElif(node: ast.PreprocessorElifNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    visitPreprocessorElse(node: ast.PreprocessorElseNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
    // Others
    visitExpressionList(node: ast.ExpressionListNode): T | IndexAccessResult | undefined { return this.visitChildren(node); }
}

export class Validator extends AsirASTVisitor<EvaluationResult> {
    public diagnostics: Diagnostic[] = [];
    public symbolTable: SymbolTable;
    private currentFunction: ast.DefinitionStatementNode | null = null;
    private isInLoop: boolean = false;
    private currentModuleScope: Scope | null = null;
    private currentModule: ModuleAsirType | null = null;
    private readonly initialFilePath: string | null;
    public currentFilePath: string | null;
    public inclusionStack: string[] = [];
    private readonly systemIncludePaths: string[];
    public loadPaths: string[];
    public importedFiles: Set<string> = new Set();
    public effectiveCwd: string;
    private isReachable: boolean = true; // For local block/function reachability
    private isProgramTerminated: boolean = false; // New flag for global program termination
    private analysisStack: ast.DefinitionStatementNode[] = []; // Stack to detect recursion

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
                isUsed: false,
                declaredFilePath: this.currentFilePath ?? undefined
            };
            globalScope.define(symbol);
        });
    }
    

    public analyze(node: ast.ProgramNode): Diagnostic[] {
        const previousIsReachable = this.isReachable;
        const previousIsProgramTerminated = this.isProgramTerminated;
        this.isReachable = true;
        this.isProgramTerminated = false;
        this.visit(node);
        this.isReachable = previousIsReachable;
        this.isProgramTerminated = previousIsProgramTerminated; // Restore global state

        // Add post-analysis check for unused symbols
        this.symbolTable.getAllSymbols().forEach(symbol => {
            // Exclude built-in functions and parameters from unused check
            // Also exclude symbols without a definedAt location (e.g., some builtins)
            if (!symbol.isUsed && symbol.definedAt &&
                !BUILTIN_SIGNATURES.has(symbol.name) &&
                !BUILTIN_CONSTANTS.has(symbol.name) &&
                !(symbol.type.kind === 'primitive' && symbol.type.name === 'parameter')
            ) {
                this.addDiagnostic(
                    symbol.node,
                    `未使用のシンボル '${symbol.name}' が定義されています。`,
                    DiagnosticSeverity.Information
                );
            }
        });
        return this.diagnostics;
    }

    public addDiagnostic(node: ast.ASTNode, message: string, severity: DiagnosticSeverity) {
        if (node.loc) {
            const range = {
                start: { line: node.loc.start.line, character: node.loc.start.column },
                end: { line: node.loc.end.line, character: node.loc.end.column }
            };
            this.diagnostics.push({ range, message, severity, source: 'AsirValidator', filePath: this.currentFilePath ?? undefined });
        }
    }

    // ヘルパー

    private handleReturn(node: ast.ReturnStatementNode, returnType: AsirType): void {
        if (!this.currentFunction) {
            this.addDiagnostic(node, `return文は関数定義の外では使えません。`, DiagnosticSeverity.Error);
            return;
        }
        const funcSymbol = this.symbolTable.currentScope.lookup(this.currentFunction.name.name);
        if (funcSymbol && funcSymbol.type.kind === 'function') {
            const existingReturnType = funcSymbol.type.returnType;
            if (existingReturnType.kind === 'primitive' && existingReturnType.name === 'any') {
                funcSymbol.type.returnType = returnType;
            } else {
                funcSymbol.type.returnType = getCommonSupertype([existingReturnType, returnType]);
            }
        }
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
            if (!isTypeCompatible(actualResult.type, expecedType)) {
                this.addDiagnostic(
                    optionNode.value,
                    `オプション '${keyName}' の型が一致しません。型 '${typeToString(expecedType)}' が必要ですが、型 '${typeToString(actualResult.type)}' が指定されました。`,
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

    private isTypeLiteral(node: ast.ASTNode): boolean {
        if (node.kind === 'NumberLiteral' || node.kind === 'StringLiteral') {
            return true;
        }
        if (node.kind === 'UnaryOperation') {
            const unaryNode = node as ast.UnaryOperationNode;
            if (unaryNode.operator === '-' && unaryNode.operand.kind === 'NumberLiteral') {
                return true;
            }
        }
        return false;
    }

    private substractType(unionType: UnionType, typeToSubtract: AsirType): AsirType {
        const newTypes = unionType.types.filter(t => !areTypesDeeplyEqual(t, typeToSubtract));

        if (newTypes.length === 0) {
            return p_type('any');
        } else if (newTypes.length === 1) {
            return newTypes[0];
        }
        return { kind: 'union', types: newTypes };
    }

    private getIntegerLiteralValue(n: ast.ExpressionNode): number | null {
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
    }

    // --- 具体的な意味解析 ---

    private analyzeFunctionBodyWithArgs(funcNode: ast.DefinitionStatementNode, parameterTypes: AsirType[]): AsirType {
        // Detect recursion
        if (this.analysisStack.includes(funcNode)) {
            // If we detect recursion, return 'any' to break the cycle and prevent stack overflow
            return p_type('any');
        }

        this.analysisStack.push(funcNode); // Push current function onto the stack

        const oldFunction = this.currentFunction;
        this.currentFunction = funcNode;
        this.symbolTable.enterScope(funcNode);

        // Define parameters in the new scope with the provided types
        funcNode.parameters.forEach((param, i) => {
            if (param.loc) {
                this.checkVariableNameConvention(param);
                const paramSymbol: Symbol = { 
                    name: param.name, 
                    type: parameterTypes[i] || p_type('parameter'),
                    definedAt: param.loc, 
                    node: param, 
                    isUsed: false, 
                    isFunctionArgument: true ,
                    declaredFilePath: this.currentFilePath ?? undefined
                };
                this.symbolTable.currentScope.define(paramSymbol);
                this.visit(param);
            }
        });

        // Visit the function body to infer the return type
        this.visit(funcNode.body);
        const inferredReturnType = (this.symbolTable.currentScope.lookup(funcNode.name.name)?.type as FunctionAsirType)?.returnType || p_type('any');

        this.symbolTable.exitScope();
        this.currentFunction = oldFunction;
        this.analysisStack.pop(); // Pop current function from the stack

        return inferredReturnType;
    }

    override visitProgram(node: ast.ProgramNode): EvaluationResult {
        for (const stmt of node.statements) {
            if (!this.isReachable || this.isProgramTerminated) {
                if (stmt.kind !== 'EmptyStatement') {
                    this.addDiagnostic(stmt, "到達不能なコードです。", DiagnosticSeverity.Warning);
                }
            }
            const result = this.visit(stmt);
            if (stmt.kind === 'EndStatement' || stmt.kind === 'QuitStatement') {
                this.isProgramTerminated = true;
            }
        }
        return { type: p_type('undefined') };
    }

    visitAssignmentExpression(node: ast.AssignmentExpressionNode): EvaluationResult {
        const rightResult = this.visit(node.right) || { type: p_type('any') };
        this.checkUsageAsValue(node.right, rightResult.type);

        let finalType: AsirType;
        let isCompoundAssignment = node.operator !== '=';

        if (!isCompoundAssignment) {
            finalType = rightResult.type;
        } else {
            const leftResult = this.visit(node.left);
            if (!leftResult) {
                finalType = p_type('any');
            } else {
                const leftType = 'type' in leftResult ? leftResult.type : p_type('any');
                const rightType = rightResult.type;

                if ((leftType.kind === 'primitive' && leftType.name === 'parameter') || (rightType.kind === 'primitive' && rightType.name === 'parameter')) {
                    finalType = p_type('parameter');
                } else if (leftType.kind === 'primitive' && isSubtypeOf(leftType.name, 'number') && rightType.kind === 'primitive' && isSubtypeOf(rightType.name, 'number')) {
                    finalType = p_type(getWiderNumericType(leftType.name, rightType.name));
                } else {
                    // 多項式など
                    finalType = p_type('any');
                }
            }
        }

        
        if (node.left.kind === 'Indeterminate') {
            const varName = node.left.name;
            const symbol = this.symbolTable.currentScope.lookup(varName);
            if (!symbol) {
                this.checkVariableNameConvention(node.left);
                if (this.currentModuleScope && !this.currentFunction) {
                    this.addDiagnostic(
                        node.left,
                        `モジュールのトップレベルの変数 '${varName}' は、static または extern で事前に宣言する必要があります。`,
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
                        type: finalType,
                        definedAt: node.left.loc,
                        node: node.left,
                        isUsed: false,
                        constantValue: isCompoundAssignment ? undefined : rightResult.constantValue
                    });
                }
            } else {
                const existingType = symbol.type;
                // if (existingType.kind !== 'primitive' || (existingType.name !== 'any' && existingType.name !== 'parameter')) {
                //     if (!isTypeCompatible(finalType, existingType)) {
                //         this.addDiagnostic(
                //             node,
                //             `変数の型が変更されました。 '${typeToString(existingType)}' から ${typeToString(rightResult.type)} に変わっています。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                //             DiagnosticSeverity.Warning
                //         );
                //     }
                // }
                symbol.type = finalType;
                symbol.constantValue = isCompoundAssignment ? undefined : rightResult.constantValue; 
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
            // if (leftResult && !isTypeCompatible(finalType, leftResult.type)) {
            //     this.addDiagnostic(node.right, `代入の型が一致しません。型 '${typeToString(leftResult.type)}' から型 '${typeToString(finalType)}'へと変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`, DiagnosticSeverity.Warning);
            // }
            // Update the type of the base collection if it's an IndexAccess
            if (node.left.kind === 'IndexAccess') {
                // let currentBaseNode: ast.ExpressionNode = node.left;
                // let lastIndexAccessNode: ast.IndexAccessNode | undefined;
                // while (currentBaseNode.kind === 'IndexAccess') {
                //     lastIndexAccessNode = currentBaseNode;
                //     currentBaseNode = currentBaseNode.base;
                // }
                // if (currentBaseNode.kind === 'Indeterminate') {
                //     const baseSymbol = this.symbolTable.currentScope.lookup(currentBaseNode.name);
                //     if (baseSymbol) {
                //         // Re-evaluate the type of the collection based on the new element type
                //         let newCollectionType = baseSymbol.type;
                //         console.log(`[DEBUG] IndexAccess: baseSymbol.type=${typeToString(baseSymbol.type)}, finalType=${typeToString(finalType)}`);
                //         if (newCollectionType.kind === 'list' || newCollectionType.kind === 'vector' || newCollectionType.kind === 'matrix' || newCollectionType.kind === 'tuple') {
                //             if (newCollectionType.kind === 'tuple') {
                //                 // タプルの場合は要素の型を更新
                //                 const updatedElements = newCollectionType.elements.map(elm => ({
                //                     ...elm,
                //                     type: getCommonSupertype([elm.type, finalType])
                //                 }));
                //                 newCollectionType = { ...newCollectionType, elements: updatedElements };
                //             } else {
                //                 // リスト、ベクトル、行列の場合は elementType を更新
                //                 const existingElementType = newCollectionType.elementType;
                //                 const updatedElementType = getCommonSupertype([existingElementType, finalType]);
                //                 newCollectionType = { ...newCollectionType, elementType: updatedElementType };
                //             }
                //         }
                //         console.log(`[DEBUG] IndexAccess: newCollectionType=${typeToString(newCollectionType)}`);
                //         baseSymbol.type = newCollectionType;
                //     }
                // }
                const IndexAccessNode = node.left;
                const IndexAccessResult = this.visit(IndexAccessNode) as IndexAccessResult;

                if (IndexAccessResult.baseNode.kind === 'Indeterminate') {
                    const baseSymbol = this.symbolTable.currentScope.lookup(IndexAccessResult.baseNode.name);
                    if (baseSymbol) {
                        baseSymbol.constantValue = undefined;

                        const updateTypeRecursively = (collectionType: AsirType, indices: ast.ExpressionNode[], newElementType: AsirType): AsirType => {
                            if (indices.length === 0) { return newElementType; }
                            const [currentIndex, ...remainingIndices] = indices;

                            if (collectionType.kind === 'vector' || collectionType.kind === 'list' || collectionType.kind === 'matrix') {
                                const updatedElementType = updateTypeRecursively(collectionType.elementType, remainingIndices, newElementType);
                                return { ...collectionType, elementType: getCommonSupertype([collectionType.elementType, updatedElementType])};
                            } else if (collectionType.kind === 'tuple') {
                                const indexValue = this.getIntegerLiteralValue(currentIndex);
                                if (indexValue !== null) {
                                    const updatedElements = [...collectionType.elements];
                                    if (indexValue >= 0 && indexValue < updatedElements.length) {
                                        const elementToUpdate = updatedElements[indexValue];
                                        const updatedElementType = updateTypeRecursively(elementToUpdate.type, remainingIndices, newElementType);
                                        updatedElements[indexValue] = { ...elementToUpdate, type: updatedElementType };
                                    }
                                    return { ...collectionType, elements: updatedElements };
                                } else {
                                    // Index is not a literal. The tuple with known elements becomes a list with a general element type.
                                    const originalElementType = getCommonSupertype(collectionType.elements.map(e => e.type));
                                    const updatedElementType = updateTypeRecursively(originalElementType, remainingIndices, newElementType);
                                    
                                    const newOverallType = getCommonSupertype([originalElementType, updatedElementType]);
                                    return { kind: 'list', elementType: newOverallType };
                                }
                            }
                            return collectionType;
                        };
                        baseSymbol.type = updateTypeRecursively(baseSymbol.type, IndexAccessResult.indices, finalType);
                    }
                }
            } 
            if (node.left.kind === 'MemberAccess') {
                const memberAccessNode = node.left;
                let currentResult = this.visit(memberAccessNode.base);
                if (!currentResult) { return { type: finalType }; }

                let currentType = currentResult.type;
                const membersToTrace = memberAccessNode.members.slice(0,-1);
                const finalMember = memberAccessNode.members[memberAccessNode.members.length -1];
                for (const memberIndeterminate of membersToTrace) {
                    if (!currentType) { return { type: finalType}; }
                    const memberName = memberIndeterminate.name;

                    if (currentType.kind !== 'struct') {
                        this.addDiagnostic(
                            memberIndeterminate,
                            `'${typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`,
                            DiagnosticSeverity.Error
                        );
                        return { type: finalType};
                    }

                    const memberType = currentType.members.get(memberName);
                    if (!memberType) {
                        this.addDiagnostic(
                            memberIndeterminate,
                            `構造体 '${currentType.name}' にメンバー '${memberName}' はありません。`,
                            DiagnosticSeverity.Error
                        );
                        return { type: finalType };
                    }
                    currentType = memberType;
                }
                if (!currentType ||  currentType.kind !== 'struct') {
                    this.addDiagnostic(
                        finalMember,
                        `'${typeToString(currentType)}' 型は構造体ではないため、メンバーにアクセスできません。`,
                        DiagnosticSeverity.Error
                    );
                    return { type: finalType};
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
                    // if (!isTypeCompatible(finalType, expecedType)) {
                    //     this.addDiagnostic(
                    //         node.right,
                    //         `メンバー '${finalMemberName}' の型が一致しません。型 '${typeToString(expecedType)}' から型 '${typeToString(finalType)}' へ変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
                    //         DiagnosticSeverity.Warning
                    //     );
                    // }
                    (currentType as StructAsirType).members.set(finalMemberName, finalType);
                }
            }

            // if (leftResult!.type && !isTypeCompatible(finalType, leftResult!.type)) {
            //     this.addDiagnostic(
            //         node.right,
            //         `代入の型が一致しません。型 '${typeToString(leftResult!.type)}' から型 '${typeToString(finalType)}' へと変更されました。これは意図しないエラーの原因になる可能性があるため、型を一致させることを推奨します。`,
            //         DiagnosticSeverity.Warning
            //     );
            // }

            if (isCompoundAssignment) {
                let baseNode: ast.ExpressionNode = node.left;
                while (baseNode.kind === 'IndexAccess' || baseNode.kind === 'MemberAccess') {
                    baseNode = (baseNode as ast.IndexAccessNode | ast.MemberAccessNode).base;
                }
                if (baseNode.kind === 'Indeterminate') {
                    const baseSymbol = this.symbolTable.currentScope.lookup(baseNode.name);
                    if (baseSymbol) { baseSymbol.constantValue = undefined; }
                }
            }
        }
        return { type: finalType };
    }

    visitExpressionStatement(node: ast.ExpressionStatementNode): EvaluationResult {
        const exprType = this.visit(node.expression);
        if (exprType) {
            this.checkUsageAsValue(node.expression, exprType.type);
        }
        return exprType || { type: p_type('undefined') };
    }

    visitFunctionDefinition(node: ast.DefinitionStatementNode, parameterOverrideTypes?: AsirType[]): EvaluationResult {
        const funcName = node.name.name;
        if (funcName === 'format_f_rp') {
            const matrixParam = node.parameters[0];
            const symbol = this.symbolTable.currentScope.lookup(matrixParam.name);
        }

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
        const parameterTypes = node.parameters.map((p, i) => ({
            name: p.name,
            type: parameterOverrideTypes && parameterOverrideTypes[i] ? parameterOverrideTypes[i] : p_type('parameter') as AsirType
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

        // Explicitly visit the function name node to set its resolvedSymbol
        this.visit(node.name);

        // --- 関数ボディの解析 ---
        const oldFunction = this.currentFunction;
        this.currentFunction = node;
        this.symbolTable.enterScope(node);

        node.parameters.forEach((param, i) => {
            if (param.loc) {
                this.checkVariableNameConvention(param);
                const paramSymbol: Symbol = { name: param.name, type: functionType.parameters[i].type, definedAt: param.loc, node: param, isUsed: false, isFunctionArgument: true, declaredFilePath: this.currentFilePath ?? undefined };
                this.symbolTable.currentScope.define(paramSymbol);
                // Explicitly visit the parameter name node to set its resolvedSymbol
                this.visit(param);
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
        this.visit(node.name);

        node.parameters.forEach(param => {
            this.visit(param);
        });

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
            // return { type: p_type('integer'), constantValue: 0};
            return { type: p_type('parameter') };
        } else {
            return { type: p_type('indeterminate')}
        }
    }

    visitFunctionCall(node: ast.FunctionCallNode): EvaluationResult {
        const calleeNode = node.callee;
        const funcName = calleeNode.functionName.name;

        const argResults: EvaluationResult[] = [];
        for (let i = 0; i < node.args.length; i++) {
            const arg = node.args[i];
            const argResult = this.visit(arg) || { type: p_type('any') };
            argResults.push(argResult);
        }

        if (builtinHandlers.has(funcName)) {
            const handler = builtinHandlers.get(funcName)!;
            return handler(this, node, argResults)
        }
        const calleeResult = this.visit(calleeNode.functionName);
        const actualArgTypes = argResults.map(r => r.type);
                let calleeType: AsirType | undefined = calleeResult?.type;
                let funcSymbol: Symbol | undefined;
        
                // --- 呼び出し方に応じたロジック ---
                if (node.isGlobal) {
                    if (calleeNode.moduleName) {
                        this.addDiagnostic(node, `'::' と '.'を同時に使用することはできません。`, DiagnosticSeverity.Error);
                        return { type: p_type('any') };
                    }
                    const globalScope = this.symbolTable.getRootScope();
                    funcSymbol = globalScope.lookup(funcName); // Store the symbol
                    calleeType = funcSymbol?.type;
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
                    funcSymbol = moduleSymbol.type.members.get(funcName); // Store the symbol
                    calleeType = funcSymbol?.type;
                } else {
                    funcSymbol = this.symbolTable.currentScope.lookup(funcName); // Store the symbol
                    if (funcSymbol) {
                        calleeType = funcSymbol.type;
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
                    // If it's a user-defined function, analyze its body with actual argument types
                                if (funcSymbol && funcSymbol.node && funcSymbol.node.kind === 'FunctionDefinition') {
                                    const inferredReturnType = this.analyzeFunctionBodyWithArgs(funcSymbol.node as ast.DefinitionStatementNode, actualArgTypes);
                                    this.validateOptions(funcName, calleeType.allowesOptions, node.options);
                                    return { type: inferredReturnType };
                                }        
                    // Otherwise, proceed with standard type checking for built-in or pre-defined functions
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
                                    // --- Start of type refinement for parameters ---
                                    if (node.args[i].kind === 'Indeterminate') {
                                        const argName = (node.args[i] as ast.IndeterminateNode).name;
                                        const symbol = this.symbolTable.currentScope.lookup(argName);
                                        if (symbol && symbol.isFunctionArgument && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                                            if (!(expectedParams[i].type.kind === 'primitive' && (expectedParams[i].type as PrimitiveAsirType).name === 'any')) {
                                                symbol.type = expectedParams[i].type;
                                                actualArgTypes[i] = symbol.type;
                                            }
                                        }
                                    }
                                    // --- End of type refinement for parameters ---
                                    this.checkUsageAsValue(actualArgTypes[i], actualArgTypes[i]);
                                                                    if (!isTypeCompatible(actualArgTypes[i], expectedParams[i].type)) {
                                                                        this.addDiagnostic(
                                                                            node.args[i],
                                                                            `引数${i + 1}の型が一致しません。型 '${typeToString(expectedParams[i].type)}' が必要ですが、型 '${typeToString(actualArgTypes[i])}' が指定されました。`,
                                                                            DiagnosticSeverity.Error
                                                                        );
                                                                    }                                }                    // 可変長引数の型チェック
                    if (restParam) {
                        for (let i = fixedArgCount; i < actualArgTypes.length; i++) {
                            if (!isTypeCompatible(actualArgTypes[i], restParam.type)) {
                                this.addDiagnostic(
                                    node.args[i],
                                    `引数${i+1}の型が一致しません。型 '${typeToString(restParam.type)}' が必要ですが、型 '${typeToString(actualArgTypes[i])}' が指定されました。`,
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
                // 引数の数チェック
                if (sig.restParameter) {
                    if (actualArgTypes.length < sig.parameters.length) { return false; }
                } else {
                    if (actualArgTypes.length !== sig.parameters.length) { return false; }
                }
                // 固定引数の型チェック
                const fixedArgsMatch = sig.parameters.every((expectedParam, i) => {
                    return isTypeCompatible(actualArgTypes[i], expectedParam.type);
                });
                if (!fixedArgsMatch) { return false; }
                // 可変長引数の型チェック
                if (sig.restParameter) {
                    for (let i = sig.parameters.length; i < actualArgTypes.length; i++) {
                        if (!isTypeCompatible(actualArgTypes[i], sig.restParameter.type)) {
                            return false;
                        }
                    }
                }
                return true;
            });
            if (matchingSignature) {
                this.validateOptions(funcName, matchingSignature.allowesOptions, node.options);
                return { type: matchingSignature.returnType };
            } else {
                const argTypesString = actualArgTypes.map(t => typeToString(t)).join(', ');
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
        const isLeftAny = leftType.kind === 'primitive' && leftType.name === 'any';
        const isRightAny = rightType.kind === 'primitive' && rightType.name === 'any';

        // union型の処理
        if (leftType.kind === 'union' || rightType.kind === 'union') {
            const leftTypes = leftType.kind === 'union' ? leftType.types : [leftType];
            const rightTypes = rightType.kind === 'union' ? rightType.types : [rightType];
            const possibleResultTypes: AsirType[] = [];

            for (const lType of leftTypes) {
                for (const rType of rightTypes) {
                    possibleResultTypes.push(getBinaryOperationResultType(lType, rType, operator));
                }
            }
            const finalType = getCommonSupertype(possibleResultTypes);
            if (finalType.kind === 'primitive' && finalType.name === 'any') {
                this.addDiagnostic(node, `演算子 '${operator}' は、型 '${typeToString(leftType)}' と '${typeToString(rightType)}' の組み合わせの一部に適用できない可能性があります。`, DiagnosticSeverity.Warning);
            }
            return { type: finalType };
        }

        // parameter の型推論
        const isLeftParameter = leftType.kind === 'primitive' && leftType.name === 'parameter';
        const isRightParameter = rightType.kind === 'primitive' && rightType.name === 'parameter';

        if (['+', '-', '*', '/', '%', '<', '>', '<=', '>='].includes(operator)) {
            if (isLeftParameter && !isRightParameter && isSubtypeOf(rightType.kind === 'primitive' ? rightType.name : 'number', 'number')) {
                if (node.left.kind === 'Indeterminate') {
                    const symbol = this.symbolTable.currentScope.lookup(node.left.name);
                    if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                        symbol.type = p_type('integer')
                    }
                }
            } else if (!isLeftParameter && isRightParameter && isSubtypeOf(leftType.kind === 'primitive' ? leftType.name : 'number', 'number')) {
                if (node.right.kind === 'Indeterminate') {
                    const symbol = this.symbolTable.currentScope.lookup(node.right.name);
                    if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                        symbol.type = p_type('integer');
                    }
                }
            }
        }

        this.checkUsageAsValue(node.left, leftType);
        this.checkUsageAsValue(node.right, rightType);

        if (operator.startsWith('@')) {
            this.visit(node.left);
            this.visit(node.right);
        }

        if (operator === '%') {
            const isRightInt = rightType.kind === 'primitive' && rightType.name === 'integer';
            if (!isRightInt) {
                this.addDiagnostic(
                    node.right,
                    `演算子 '%' の右辺は整数である必要がありますが、型 '${typeToString(rightType)}' が指定されました。`,
                    DiagnosticSeverity.Error
                );
            }

            const isLeftInt = leftType.kind === 'primitive' && leftType.name === 'integer';
            const isLeftPolyOfInt = leftType.kind === 'standard_polynomial' && leftType.coefficientType.kind === 'primitive' && leftType.coefficientType.name === 'integer';
            if (!isLeftInt && !isLeftPolyOfInt) {
                this.addDiagnostic(
                    node.left,
                    `演算子 '%' の左辺は、整数または整数係数多項式である必要がありますが、型 '${typeToString(leftType)}' が指定されました。`,
                    DiagnosticSeverity.Error
                );
            }
        }

        if (['==', '!='].includes(operator)) {
            const warningDetails = checkNumericTypeMismatch(leftType, rightType);
            if (warningDetails) {
                this.addDiagnostic(
                    node,
                    `${warningDetails} を '${operator}' で比較しています。比較は可能ですが、意図しない問題が発生する可能性があります。`,
                    DiagnosticSeverity.Warning
                );
            }
        }

        if (['<', '>', '<=', '>=', '&&', '||'].includes(operator)) {
            if (leftType.kind === 'primitive' && rightType.kind === 'primitive') {
                if (!isLeftParameter && !isRightParameter && !isLeftAny && !isRightAny) {
                    const isNumeric = isSubtypeOf(leftType.name, 'number') && isSubtypeOf(rightType.name, 'number');
                    const isString = leftType.name === 'string' && rightType.name === 'string';
                    if (!isNumeric && !isString) {
                        this.addDiagnostic(
                            node,
                            `この演算は意図しない値を返す可能性があります。型 '${typeToString(leftType)}' と型 '${typeToString(rightType)}' の間での '${operator}' 演算は意図しない結果になる可能性があります。`,
                            DiagnosticSeverity.Warning
                        );
                    }
                }
            } else {
                this.addDiagnostic(
                    node,
                    `この演算は意図しない値を返す可能性があります。型 '${typeToString(leftType)}' と型 '${typeToString(rightType)}' の間での '${operator}' 演算は意図しない結果になる可能性があります。`,
                    DiagnosticSeverity.Warning
                );
            }
        }

        const resultType = getBinaryOperationResultType(leftType, rightType, operator);

        if (resultType.kind === 'primitive' && resultType.name === 'any') {
            if (!isLeftAny && !isRightAny && !isLeftParameter && !isRightParameter) {
                this.addDiagnostic(
                    node,
                    `演算子 '${operator}' は、型 '${typeToString(leftType)}' と '${typeToString(rightType)}' には適用できません。`,
                    DiagnosticSeverity.Error
                );
            }
        }

        // 定数畳み込み
        let constantValue: ConstantValue | undefined = undefined;
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
        return { type: resultType, constantValue };
    }

    visitUnaryOperation(node: ast.UnaryOperationNode): EvaluationResult {
        const operandResult = this.visit(node.operand);
        if (!operandResult) {
            return { type: p_type('any') };
        }

        if (operandResult.type.kind === 'primitive' && operandResult.type.name === 'parameter') {
            return { type: p_type('parameter') };
        }
        
        this.checkUsageAsValue(node.operand, operandResult.type);
        let resultType: AsirType = operandResult.type;
        let constantValue: ConstantValue | undefined = undefined;

        switch (node.operator) {
            case '++':
            case '--':
            case '-':
                const isNumeric = operandResult.type.kind === 'primitive' && isSubtypeOf(operandResult.type.name, 'number');
                const isPolyVar = operandResult.type.kind === 'primitive' && isSubtypeOf(operandResult.type.name, 'pp');
                const isPolynomial = isPolynomialType(operandResult.type);
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
                break;
            case '!':
                if (node.isPostfix) {
                    if (operandResult.type.kind === 'primitive') {
                        if (operandResult.type.name === 'integer') {
                            resultType =  p_type('integer');
                        } else if (isSubtypeOf(operandResult.type.name, 'pp')) {
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
        const alternativeResult = this.visit(node.alternative) || { type: p_type('any') };

        this.checkUsageAsValue(node.consequence, consequenceResult.type);
        this.checkUsageAsValue(node.alternative, alternativeResult.type);

        const resultType = getCommonSupertype([consequenceResult.type, alternativeResult.type]);
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

        const exponentValue = this.getIntegerLiteralValue(node.exponent);
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

        const isBaseNumeric = baseType.kind === 'primitive' && isSubtypeOf(baseType.name, 'number');
        const isBaseStdPoly = baseType.kind === 'standard_polynomial';
        const isBaseParameter = baseType.kind === 'primitive' && baseType.name === 'parameter';
        const isBasePolyVar = baseType.kind === 'primitive' && isSubtypeOf(baseType.name, 'pp');

        if (!isBaseNumeric && !isBaseStdPoly && !isBaseParameter && !isBasePolyVar) {
            this.addDiagnostic(
                node.base,
                `演算子 '^' の底は、数値または多項式で得ある必要がありますが、 型 '${typeToString(baseType)}' が指定されました。`,
                DiagnosticSeverity.Error
            );
            return { type: p_type('any') };
        }

        if (isBaseParameter && node.base.kind === 'Indeterminate') {
            const symbol = this.symbolTable.currentScope.lookup(node.base.name);
            if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                symbol.type = p_type('integer');
            }
        }

        if (exponentValue !== null) {
            if (exponentValue > 0) {
                resultType = isBaseParameter ? p_type('number') : baseType;
            } else {
                if (baseType.kind === 'primitive' && baseType.name === 'integer') { resultType = p_type('rational'); }
                if (baseType.kind === 'standard_polynomial') { resultType = rat_type(baseType.coefficientType); }
                if (isBasePolyVar) { resultType = stdpoly_type(p_type('integer')); }
                resultType = isBaseParameter ? p_type('number') : baseType;
            }
        } else if (exponentType.kind === 'primitive' && exponentType.name === 'integer') {
            const possibleTypes: AsirType[] = [baseType, p_type('integer')];
            if (baseType.kind === 'primitive' && baseType.name === 'integer') {
                possibleTypes.push(p_type('rational'));
            } else if (baseType.kind === 'standard_polynomial') {
                possibleTypes.push(rat_type(baseType.coefficientType));
            } else if (isBasePolyVar) {
                resultType = rat_type(p_type('integer'));
            } else { possibleTypes.push(baseType); }
            resultType = getCommonSupertype(possibleTypes);
        }else { resultType = p_type('form'); }
        return { type: resultType, constantValue };
    }

    visitIndexAccess(node: ast.IndexAccessNode): IndexAccessResult {
        const baseResult = this.visit(node.base);
        let currentType: AsirType = p_type('any');
        let currentConstantValue: ConstantValue | undefined = undefined;
        let baseNode: ast.ExpressionNode = node.base;
        let accessPath: ast.IndexAccessNode[] = [];

        if (baseResult && 'baseNode' in baseResult && 'accessPath' in baseResult) {
            const nestedIndexAccessResult = baseResult as IndexAccessResult;
            baseNode = nestedIndexAccessResult.baseNode;
            accessPath = nestedIndexAccessResult.accessPath;
            currentType = nestedIndexAccessResult.accessedType;
            currentConstantValue = nestedIndexAccessResult.accessedConstantValue;
        } else if (baseResult) {
            currentType = baseResult.type;
            currentConstantValue = baseResult.constantValue;
        }

        accessPath.push(node);

        if (baseNode.kind === 'IndexAccess') {
            // インデックスアクセスのインデックスアクセスで変数の型が不明な場合、行列とする。
            const innerBaseNode = (baseNode as ast.IndexAccessNode).base;
            if (innerBaseNode.kind === 'Indeterminate') {
                const symbol = this.symbolTable.currentScope.lookup(innerBaseNode.name);
                if (symbol && (symbol.type.kind === 'primitive' && symbol.type.name === 'parameter')) {
                    symbol.type = m_type(p_type('any'));
                }
            }
        } 

        // インデックスアクセスの変数の型が不明な場合、行列かベクトルか、リストと見なす。
        if (baseResult!.type.kind === 'primitive' && baseResult!.type.name === 'parameter') {
            const newType = u_type([m_type(p_type('any')), v_type(p_type('any')), l_type(p_type('any'))]);
            if (node.base.kind === 'Indeterminate') {
                const symbol = this.symbolTable.currentScope.lookup((node.base as ast.IndeterminateNode).name);
                if (symbol && (symbol.type.kind === 'primitive' && symbol.type.name === 'parameter')) {
                    symbol.type = newType;
                }
            }
            currentType = newType;
        }

        let currentResult: EvaluationResult = { type: currentType, constantValue: baseResult!.constantValue };

        for (const indexNode of node.indices) {
            const indexResult = this.visit(indexNode) || { type: p_type('any') };
            const indexType = indexResult.type;
            const isParameter = indexType.kind === 'primitive' && indexType.name === 'parameter';
            const isInteger = indexType.kind === 'primitive' && isSubtypeOf(indexType.name, 'integer')

            if (!isInteger && !isParameter) {
                this.addDiagnostic(indexNode, `インデックスは整数でなければなりません。`, DiagnosticSeverity.Error);
            }

            const currentType = currentResult.type;
            let nextType: AsirType = p_type('any');
            let nextConstantValue: ConstantValue | undefined = undefined;

            if (currentType.kind === 'primitive' && currentType.name === 'any') {
                currentResult = { type: p_type('any'), constantValue: undefined };
                continue;
            }

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
                        nextType = getCommonSupertype(elementTypes);
                    }
                    break;
                }
                case 'union': {
                    const possibleResultTypes: AsirType[] = [];
                    // Filter out non-indexable types from the union before processing
                    const indexableMemberTypes = currentType.types.filter(memberType => 
                        memberType.kind === 'matrix' || memberType.kind === 'vector' || memberType.kind === 'list' || memberType.kind === 'tuple'
                    );

                    if (indexableMemberTypes.length === 0) {
                        this.addDiagnostic(node.base, `型 '${typeToString(currentType)}' のどの要素に対してもインデックスアクセスはできません。`, DiagnosticSeverity.Error);
                        return { type: p_type('any'), baseNode: baseNode, accessPath: accessPath, accessedType: currentResult.type, indices: node.indices};
                    }

                    for (const memberType of indexableMemberTypes) {
                        switch (memberType.kind) {
                            case 'matrix':
                                possibleResultTypes.push({ kind: 'vector', elementType: memberType.elementType });
                                break;
                            case 'vector':
                            case 'list':
                                possibleResultTypes.push(memberType.elementType);
                                break;
                            case 'tuple':
                                const indexValue = (typeof indexResult.constantValue === 'number' && Number.isInteger(indexResult.constantValue)) ? indexResult.constantValue : null;

                                if (indexValue !== null) {
                                    if (indexValue >= 0 && indexValue < memberType.elements.length) {
                                        possibleResultTypes.push(memberType.elements[indexValue].type);
                                    } 
                                } else {
                                    const elementTypes = memberType.elements.map(e => e.type);
                                    possibleResultTypes.push(getCommonSupertype(elementTypes));
                                }
                                break;
                        }
                    }
                    nextType = getCommonSupertype(possibleResultTypes);
                    break;
                }
                default:
                    this.addDiagnostic(
                        node.base,
                        `型 '${typeToString(currentType)}' に対してインデックスアクセスはできません。`,
                        DiagnosticSeverity.Error
                    );
                    return { type: p_type('any'), baseNode: baseNode, accessPath: accessPath, accessedType: currentResult.type, indices: node.indices};
            }
            currentResult = { type: nextType, constantValue: nextConstantValue };
        }
        return { type: currentResult.type, constantValue: currentResult.constantValue, baseNode: baseNode, accessPath: accessPath, accessedType: currentResult.type, accessedConstantValue: currentResult.constantValue, indices: node.indices};
    }

    visitMemberAccess(node: ast.MemberAccessNode): EvaluationResult {
        let currentResult = this.visit(node.base);
        if (!currentResult) { return { type: p_type('any') };}
        for (const memberIndeterminate of node.members) {
            const currentType: AsirType = currentResult.type;
            const memberName = memberIndeterminate.name;
            if (currentType.kind !== 'struct') {
                this.addDiagnostic(memberIndeterminate, `'${typeToString(currentType)}' 型にメンバー '${memberName}' はありません。`, DiagnosticSeverity.Error);
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
    override visitBlock(node: ast.BlockNode): EvaluationResult {
        const previousIsReachable = this.isReachable;

        for (const stmt of node.statements) {
            if (!this.isReachable || this.isProgramTerminated) {
                if (stmt.kind !== 'EmptyStatement') {
                    this.addDiagnostic(stmt, "到達不能なコードです。", DiagnosticSeverity.Warning);
                }
            }
            const result = this.visit(stmt);
            if (stmt.kind === 'EndStatement' || stmt.kind === 'QuitStatement') {
                this.isProgramTerminated = true;
                this.isReachable = false; 
            } else if (stmt.kind === 'ReturnStatement') {
                this.isReachable = false;
            }
        }
        this.isReachable = previousIsReachable;
        return { type: p_type('undefined') };
    }


    visitForStatement(node: ast.ForStatementNode): EvaluationResult {
        // for 文の初期化式、条件式、更新式を先に解析
        node.initializers.forEach(init => this.visit(init));
        node.conditions.forEach(cond => this.visit(cond));
        node.updaters.forEach(update => this.visit(update));
        
        const previousInLoop = this.isInLoop;
        this.isInLoop = true;
        try {
            // this.symbolTable.enterScope(node);
            this.visit(node.body);
            // this.symbolTable.exitScope();
        } finally {
            this.isInLoop = previousInLoop;
        }
        return { type: p_type('undefined') };
    }

    visitIfStatement(node: ast.IfStatementNode): EvaluationResult {
        this.visit(node.condition);

        // --- Capture pre-branch state ---
        const originalTypes = new Map<string, AsirType>();
        const symbolsToTrack = this.symbolTable.currentScope.symbols;
        symbolsToTrack.forEach((s: Symbol) => originalTypes.set(s.name, s.type));

        // --- Analyze 'then' branch ---
        this.visit(node.thenStatement);
        const thenTypes = new Map<string, AsirType>();
        symbolsToTrack.forEach((s: Symbol) => {
            // Record type if it changed from the original
            if (!areTypesDeeplyEqual(originalTypes.get(s.name)!, s.type)) {
                thenTypes.set(s.name, s.type);
            }
        });

        // --- Restore state for 'else' branch ---
        symbolsToTrack.forEach((s: Symbol) => {
            const originalType = originalTypes.get(s.name);
            if (originalType) {
                s.type = originalType;
            }
        });

        // --- Analyze 'else' branch ---
        const elseTypes = new Map<string, AsirType>();
        if (node.elseStatement) {
            this.visit(node.elseStatement);
            symbolsToTrack.forEach((s: Symbol) => {
                // Record type if it changed from the original
                if (!areTypesDeeplyEqual(originalTypes.get(s.name)!, s.type)) {
                    elseTypes.set(s.name, s.type);
                }
            });
        }

        // --- Restore state before merging ---
        symbolsToTrack.forEach((s: Symbol) => {
            const originalType = originalTypes.get(s.name);
            if (originalType) {
                s.type = originalType;
            }
        });

        // --- Merge and apply final types ---
        const allModifiedVars = new Set([...thenTypes.keys(), ...elseTypes.keys()]);
        allModifiedVars.forEach(name => {
            const symbol = this.symbolTable.currentScope.lookup(name)!;
            const originalType = originalTypes.get(name);
            const thenType = thenTypes.get(name);
            const elseType = elseTypes.get(name);

            const typesToMerge: (AsirType | undefined)[] = [];
            if (thenType && elseType) {
                typesToMerge.push(thenType, elseType);
            } else if (thenType) {
                typesToMerge.push(thenType);
                if (originalType) {
                    typesToMerge.push(thenType);
                }
            } else if (elseType) {
                typesToMerge.push(originalType, elseType);
                if (originalType) {
                    typesToMerge.push(originalType);
                }
            }

            const filteredTypes = typesToMerge.filter((t): t is AsirType => t !== undefined);
            
            if (typesToMerge.length > 0) {
                symbol.type = getCommonSupertype(filteredTypes);
            } else {
                if (originalType) {
                    symbol.type = originalType;
                } else {
                    symbol.type = p_type('any');
                }
            }
        });

        return { type: p_type('undefined') };
    }

    visitWhileStatement(node: ast.WhileStatementNode): EvaluationResult {
        if (node.body.kind === 'Block') { // while の条件式に未定義の関数がある場合に本体を先に確認する
            for (const stmt of node.body.statements) {
                if (stmt.kind === 'ExpressionStatement' && stmt.expression.kind === 'AssignmentExpression') {
                    const assignment = stmt.expression;
                    if (assignment.left.kind === 'Indeterminate') {
                        const varName = assignment.left.name;
                        if (!this.symbolTable.currentScope.lookup(varName)) {
                            this.symbolTable.currentScope.define({
                                name: varName,
                                type: p_type('parameter'),
                                definedAt: assignment.left.loc,
                                node: assignment.left,
                                isUsed: true
                            });
                        }
                    }
                }
            }
        }
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

    override visitEndStatement(node: ast.EndStatementNode): EvaluationResult {
        this.isProgramTerminated = true;
        this.isReachable = false;
        return { type: p_type('undefined') };
    }

    override visitQuitStatement(node: ast.QuitStatementNode): EvaluationResult {
        this.isProgramTerminated = true;
        this.isReachable = false;
        return { type: p_type('undefined') };
    }

    override visitDebugStatement(node: ast.DebugStatementNode): EvaluationResult {
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
    override visitReturnStatement(node: ast.ReturnStatementNode): EvaluationResult {
        const returnType = node.value ? this.visit(node.value) : { type: p_type('undefined') };
        if (node.value && returnType) {
            this.checkUsageAsValue(node.value, returnType.type);
        }
        if (!returnType) {
            const safeReturnType = { type: p_type('any') };
            this.handleReturn(node, safeReturnType.type);
            this.isReachable = false;
            return safeReturnType;
        }
        this.handleReturn(node, returnType.type);
        this.isReachable = false;
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
                isUsed: false,
                declaredFilePath: this.currentFilePath ?? undefined
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
    visitPreprocessorDefine(node: ast.PreprocessorDefineNode): EvaluationResult {
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

    visitPreprocessorInclude(node: ast.PreprocessorIncludeNode): EvaluationResult {
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
