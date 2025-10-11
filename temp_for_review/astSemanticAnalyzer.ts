import * as vscode from "vscode";
import {
    parseAsirCodeAndBuildAST, // Import this function
    ASTNode,
    ProgramNode,
    IdentifierNode,
    DefinitionStatementNode,
    AssignmentExpressionNode, // Updated from AssignmentStatementNode
    BlockNode,
    FunctionCallNode,
    BinaryOperationNode,
    IfStatementNode,
    ForStatementNode,
    WhileStatementNode,
    DoWhileStatementNode,
    ReturnStatementNode,
    BreakStatementNode,
    ContinueStatementNode,
    IndexAccessNode,
    StructStatementNode,
    ExpressionStatementNode,
    EmptyStatementNode,
    CharLiteralNode,
    DistributedPolynomialLiteralNode,
    ListDestructuringAssignmentNode,
    ListLiteralNode,
    ModuleStatementNode as PasirserModuleStatementNode, // Rename to avoid conflict
    ModuleDeclarationNode, // Import specific module node
    NumberLiteralNode,
    ParenExpressionNode,
    PowerOperationNode,
    SpecialNumberNode,
    StringLiteralNode,
    StructMemberAssignmentNode,
    TernaryOperationNode,
    UnaryOperationNode,
} from '@kanji/pasirser';
import { ASIR_KEYWORDS, ASIR_BUILTIN_FUNCTIONS } from '../data/builtins';
import { ASIR_BUILTIN_FUNCTION_SIGNATURES } from '../data/asirBuiltinFunctionTypes';

// --- Symbol Table & Rich Type System ---

// Define specific literal types for 'kind' property
export type PrimitiveAsirTypeName = 'number' | 'polynomial' | 'string' | 'any' | 'undefined' | 'parameter' | 'matrix' | 'vector';

export type PrimitiveAsirType = { kind: 'primitive', name: PrimitiveAsirTypeName };
export type ListAsirType = { kind: 'list', elementType: AsirType };
export type FunctionAsirType = { kind: 'function', parameters: { name: string, type: AsirType }[], returnType: AsirType };
export type StructAsirType = { kind: 'struct', name: string, members: Map<string, Symbol> };
export type ModuleAsirType = { kind: 'module', name: string, members: Map<string, Symbol> };

// The main AsirType union, now using literal 'kind' properties for discrimination
export type AsirType =
    | PrimitiveAsirType
    | ListAsirType
    | FunctionAsirType
    | StructAsirType
    | ModuleAsirType;

export interface Symbol {
    name: string;
    type: AsirType;
    definedAt: ASTNode['loc'];
    node: ASTNode;
}

export class Scope {
    public symbols: Map<string, Symbol> = new Map();
    public readonly parent: Scope | null;
    public children: Scope[] = [];
    public readonly node: ASTNode;

    constructor(node: ASTNode, parent: Scope | null = null) {
        this.node = node;
        this.parent = parent;
    }

    public define(symbol: Symbol): boolean {
        if (this.symbols.has(symbol.name)) {
            return false;
        }
        this.symbols.set(symbol.name, symbol);
        return true;
    }

    public lookup(name: string): Symbol | undefined {
        let scope: Scope | null = this;
        while (scope) {
            const symbol = scope.symbols.get(name);
            if (symbol) {
                return symbol;
            }
            scope = scope.parent;
        }
        return undefined;
    }

    public lookupCurrentScope(name: string): Symbol | undefined {
        return this.symbols.get(name);
    }
}

export class SymbolTable {
    public currentScope: Scope;

    constructor(programNode: ProgramNode) {
        this.currentScope = new Scope(programNode);
    }

    public enterScope(node: ASTNode): void {
        const newScope = new Scope(node, this.currentScope);
        this.currentScope.children.push(newScope);
        this.currentScope = newScope;
    }

    public exitScope(): void {
        if (this.currentScope.parent) {
            this.currentScope = this.currentScope.parent;
        }
    }

    public findScopeAt(position: vscode.Position): Scope {
        const rootScope = this.currentScope;
        return this.findScopeRecursive(rootScope, position) || rootScope;
    }

    private findScopeRecursive(scope: Scope, position: vscode.Position): Scope | null {
        for (const child of scope.children) {
            const found = this.findScopeRecursive(child, position);
            if (found) {
                return found;
            }
        }

        if (scope.node.loc) {
            const start = new vscode.Position(scope.node.loc.startLine - 1, scope.node.loc.startColumn);
            const end = new vscode.Position((scope.node.loc.endLine ?? scope.node.loc.startLine) - 1, scope.node.loc.endColumn ?? 0);
            const range = new vscode.Range(start, end);

            if (range.contains(position)) {
                return scope;
            }
        }

        return null;
    }
}

// --- AST Semantic Analyzer ---

class SemanticAnalyzer {
    private diagnostics: vscode.Diagnostic[] = [];
    public symbolTable: SymbolTable;
    private currentFunction: DefinitionStatementNode | null = null;
    private isInLoop: boolean = false;

    constructor(programNode: ProgramNode) {
        this.symbolTable = new SymbolTable(programNode);
        this.registerBuiltinFunctions();
    }

    private registerBuiltinFunctions(): void {
        ASIR_BUILTIN_FUNCTION_SIGNATURES.forEach((signature, name) => {
            const funcType: FunctionAsirType = {
                kind: 'function',
                parameters: signature.parameters.map(p => ({ name: p.name, type: p.type })), // No need for dummy loc/node here
                returnType: signature.returnType
            };
            this.symbolTable.currentScope.define({ name, type: funcType, definedAt: { startLine: 0, startColumn: 0 }, node: {} as ASTNode }); // Dummy loc and node for builtins
        });
    }

    public analyze(node: ProgramNode): vscode.Diagnostic[] {
        this.visit(node);
        return this.diagnostics;
    }

    private typeToString(type: AsirType): string {
        switch (type.kind) {
            case 'primitive':
                return type.name;
            case 'list':
                return `list[${this.typeToString(type.elementType)}]`;
            case 'function':
                const params = type.parameters.map(p => `${p.name}: ${this.typeToString(p.type)}`).join(', ');
                return `function(${params}) -> ${this.typeToString(type.returnType)}`;
            case 'struct':
                // Direct access to members is now safe due to discriminated union
                return `struct ${type.name} (members: ${Array.from(type.members.keys()).join(', ')})`;
            case 'module':
                // Direct access to members is now safe due to discriminated union
                return `module ${type.name} (members: ${Array.from(type.members.keys()).join(', ')})`;
            default:
                const _exhaustiveCheck: never = type; // Ensures all cases are handled
                return 'unknown';
        }
    }

    private isTypeCompatible(source: AsirType, target: AsirType): boolean {
        // Exact match
        if (JSON.stringify(source) === JSON.stringify(target)) {
            return true;
        }

        // Any type is compatible with anything
        if ((source.kind === 'primitive' && source.name === 'any') || (target.kind === 'primitive' && target.name === 'any')) {
            return true;
        }

        // Parameter type is compatible with any concrete type it's assigned to or used as
        if (source.kind === 'primitive' && source.name === 'parameter') {
            return true; // A parameter can be anything
        }
        if (target.kind === 'primitive' && target.name === 'parameter') {
            return true; // Any type can be assigned to a parameter
        }

        // Primitive type compatibility (e.g., number and polynomial might be compatible in some contexts)
        if (source.kind === 'primitive' && target.kind === 'primitive') {
            // For now, only exact primitive matches or 'any' are compatible
            return source.name === target.name;
        }

        // List type compatibility
        if (source.kind === 'list' && target.kind === 'list') {
            return this.isTypeCompatible(source.elementType, target.elementType);
        }

        // Function type compatibility (simplified for now)
        if (source.kind === 'function' && target.kind === 'function') {
            // Check return type compatibility
            if (!this.isTypeCompatible(source.returnType, target.returnType)) {
                return false;
            }
            // Check parameter count and compatibility
            if (source.parameters.length !== target.parameters.length) {
                return false;
            }
            for (let i = 0; i < source.parameters.length; i++) {
                // Parameters are contravariant, so target parameter must be compatible with source parameter
                if (!this.isTypeCompatible(target.parameters[i].type, source.parameters[i].type)) {
                    return false;
                }
            }
            return true;
        }

        // Struct and Module type compatibility (for now, only exact match)
        if ((source.kind === 'struct' && target.kind === 'struct') || (source.kind === 'module' && target.kind === 'module')) {
            return source.name === target.name;
        }

        return false;
    }

    private createPrimitiveType(name: PrimitiveAsirTypeName): PrimitiveAsirType {
        return { kind: 'primitive', name };
    }

    private refineParameterType(symbol: Symbol, newType: AsirType): void {
        // Only refine if the current type is 'parameter' or if the new type is more specific
        // For simplicity, we'll update if it's 'parameter' or if the new type is not 'any' and current is 'any'
        if (symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
            symbol.type = newType;
        } else if (symbol.type.kind === 'primitive' && symbol.type.name === 'any' && newType.kind !== 'primitive' || (newType.kind === 'primitive' && newType.name !== 'any')) {
            symbol.type = newType;
        }
    }

    private visit(node: ASTNode | undefined): AsirType {
        if (!node) return this.createPrimitiveType('undefined');

        switch (node.kind) {
            case 'Program': return this.visitProgram(node as ProgramNode);
            case 'Block': return this.visitBlock(node as BlockNode);
            case 'ExpressionStatement': return this.visitExpressionStatement(node as ExpressionStatementNode);
            case 'EmptyStatement': return this.createPrimitiveType('undefined');

            // Definitions
            case 'FunctionDefinition': return this.visitFunctionDefinition(node as DefinitionStatementNode);
            case 'StructStatement': return this.visitStructStatement(node as StructStatementNode);
            case 'ModuleStatement': return this.visitModuleStatement(node as PasirserModuleStatementNode);

            // Assignments
            case 'AssignmentExpression': return this.visitAssignmentExpression(node as AssignmentExpressionNode);
            case 'StructMemberAssignment': return this.visitStructMemberAssignment(node as StructMemberAssignmentNode);
            case 'ListDestructuringAssignment': return this.visitListDestructuringAssignment(node as ListDestructuringAssignmentNode);

            // Control Flow
            case 'IfStatement': return this.visitIfStatement(node as IfStatementNode);
            case 'ForStatement': return this.visitForStatement(node as ForStatementNode);
            case 'WhileStatement': return this.visitWhileStatement(node as WhileStatementNode);
            case 'DoWhileStatement': return this.visitDoWhileStatement(node as DoWhileStatementNode);
            case 'ReturnStatement': return this.visitReturnStatement(node as ReturnStatementNode);
            case 'BreakStatement': return this.visitBreakStatement(node as BreakStatementNode);
            case 'ContinueStatement': return this.visitContinueStatement(node as ContinueStatementNode);

            // Expressions
            case 'FunctionCall': return this.visitFunctionCall(node as FunctionCallNode);
            case 'Identifier': return this.visitIdentifier(node as IdentifierNode);
            case 'BinaryOperation': return this.visitBinaryOperation(node as BinaryOperationNode);
            case 'UnaryOperation': return this.visitUnaryOperation(node as UnaryOperationNode);
            case 'TernaryOperation': return this.visitTernaryOperation(node as TernaryOperationNode);
            case 'PowerOperation': return this.visitPowerOperation(node as PowerOperationNode);
            case 'IndexAccess': return this.visitIndexAccess(node as IndexAccessNode);
            case 'ParenExpression': return this.visitParenExpression(node as ParenExpressionNode);

            // Literals
            case 'NumberLiteral': return this.createPrimitiveType('number');
            case 'StringLiteral': return this.createPrimitiveType('string');
            case 'CharLiteral': return this.createPrimitiveType('string');
            case 'ListLiteral': return this.visitListLiteral(node as ListLiteralNode);
            case 'DistributedPolynomialLiteral': return this.createPrimitiveType('polynomial');
            case 'SpecialNumber': return this.createPrimitiveType('number');

            default:
                console.warn(`[SemanticAnalyzer] Unhandled AST node kind: ${node.kind}`);
                this.visitChildren(node);
                return this.createPrimitiveType('any');
        }
    }

    private visitProgram(node: ProgramNode): AsirType {
        this.visitChildren(node);
        return this.createPrimitiveType('undefined');
    }

    private visitBlock(node: BlockNode): AsirType {
        this.symbolTable.enterScope(node);
        this.visitChildren(node);
        this.symbolTable.exitScope();
        return this.createPrimitiveType('undefined');
    }

    private visitExpressionStatement(node: ExpressionStatementNode): AsirType {
        return this.visit(node.expression);
    }

    private visitFunctionDefinition(node: DefinitionStatementNode): AsirType {
        const funcName = node.name.name;
        if (funcName.match(/^[A-Z]/)) {
            this.addDiagnostic(node.name, `Function name '${funcName}' must start with a lowercase letter.`, vscode.DiagnosticSeverity.Error);
        }

        const parameterSymbols: { name: string, type: AsirType }[] = [];
        for (const param of node.parameters) {
            if (param.loc) {
                // Initially, parameters are of type 'parameter'
                parameterSymbols.push({ name: param.name, type: this.createPrimitiveType('parameter') });
            }
        }

        const functionType: FunctionAsirType = {
            kind: 'function',
            parameters: parameterSymbols, // This will be updated later
            returnType: this.createPrimitiveType('any')
        };

        if (this.symbolTable.currentScope.lookupCurrentScope(funcName)) {
            this.addDiagnostic(node.name, `Symbol '${funcName}' is already defined in this scope.`, vscode.DiagnosticSeverity.Error);
        } else if (node.loc) {
            this.symbolTable.currentScope.define({ name: funcName, type: functionType, definedAt: node.loc, node });
        }

        this.currentFunction = node;
        this.symbolTable.enterScope(node);

        // Define parameters in the new scope as Symbols, these are the ones whose types will be refined
        const functionBodyParameterSymbols: Symbol[] = [];
        for (const param of node.parameters) {
            if (param.loc) {
                if (param.name.match(/^[a-z]/)) {
                    this.addDiagnostic(param, `Variable name (parameter) '${param.name}' must start with an uppercase letter.`, vscode.DiagnosticSeverity.Error);
                }
                const paramSymbol: Symbol = { name: param.name, type: this.createPrimitiveType('parameter'), definedAt: param.loc, node: param };
                this.symbolTable.currentScope.define(paramSymbol);
                functionBodyParameterSymbols.push(paramSymbol); // Keep references to these Symbols
            }
        }

        this.visit(node.body); // Analyze the function body, which will refine types of functionBodyParameterSymbols

        // After visiting the body, update the functionType's parameters with the refined types
        for (let i = 0; i < functionBodyParameterSymbols.length; i++) {
            const refinedType = functionBodyParameterSymbols[i].type;
            functionType.parameters[i].type = refinedType; // Update the type in the functionType object
        }
        return this.createPrimitiveType('undefined');
    }
    private visitAssignmentExpression(node: AssignmentExpressionNode): AsirType {
        const rightType = this.visit(node.right);

        if (node.left.kind === 'Identifier') {
            const varName = node.left.name;
            if (varName.match(/^[a-z]/)) {
                this.addDiagnostic(node.left, `Variable name '${varName}' must start with an uppercase letter.`, vscode.DiagnosticSeverity.Error);
            }
            
            const symbol = this.symbolTable.currentScope.lookup(varName);
            if (!symbol) {
                if (node.left.loc) {
                    this.symbolTable.currentScope.define({ name: varName, type: rightType, definedAt: node.left.loc, node: node.left });
                }
            } else {
                // If it's a parameter, refine its type
                if (symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                    this.refineParameterType(symbol, rightType);
                } else {
                    // Otherwise, update its declared type
                    symbol.type = rightType;
                }
            }
        } else {
            this.visit(node.left);
        }
        return rightType;
    }

    private visitIdentifier(node: IdentifierNode): AsirType {
        const symbol = this.symbolTable.currentScope.lookup(node.name);
        if (symbol) {
            return symbol.type;
        } else {
            const knownBuiltins = [...ASIR_KEYWORDS, ...ASIR_BUILTIN_FUNCTIONS];
            if (!knownBuiltins.includes(node.name)) {
                if (node.name.match(/^[a-z]/)) {
                    // If it's a lowercase identifier not found, assume it's a polynomial variable
                    this.addDiagnostic(node, `Undefined symbol: '${node.name}' (assuming polynomial)`, vscode.DiagnosticSeverity.Warning);
                    return this.createPrimitiveType('polynomial');
                }
                // Otherwise, it's an undefined symbol
                this.addDiagnostic(node, `Undefined symbol: '${node.name}'`, vscode.DiagnosticSeverity.Warning);
            }
            // For built-ins or truly undefined, return 'any'
            return this.createPrimitiveType('any');
        }
    }

    private visitFunctionCall(node: FunctionCallNode): AsirType {
        const funcName = node.callee.name;

        // Create a new scope for the function call to handle argument types
        this.symbolTable.enterScope(node);

        const symbol = this.symbolTable.currentScope.lookup(funcName);

        if (symbol) {
            if (symbol.type.kind !== 'function') {
                this.addDiagnostic(node.callee, `'${funcName}' is not a function.`, vscode.DiagnosticSeverity.Error);
            } else {
                // Check argument types against function signature
                const expectedParams = symbol.type.parameters;
                const actualArgs = node.args;

                if (expectedParams.length !== actualArgs.length) {
                    this.addDiagnostic(
                        node,
                        `'${funcName}' expects ${expectedParams.length} arguments, but got ${actualArgs.length}.`,
                        vscode.DiagnosticSeverity.Error
                    );
                }

                for (let i = 0; i < actualArgs.length; i++) {
                    const argType = this.visit(actualArgs[i]);
                    if (i < expectedParams.length) {
                        const expectedType = expectedParams[i].type; // This is now the inferred type from function definition

                        if (!this.isTypeCompatible(argType, expectedType)) {
                            this.addDiagnostic(
                                actualArgs[i],
                                `Argument ${i + 1} type mismatch. Expected '${this.typeToString(expectedType)}' but got '${this.typeToString(argType)}'.`,
                                vscode.DiagnosticSeverity.Error
                            );
                        }
                    }
                }
            }
        }
        
        this.visitChildren(node);
        const returnType = symbol && symbol.type.kind === 'function' ? symbol.type.returnType : this.createPrimitiveType('any');
        this.symbolTable.exitScope();
        return returnType;
    }

    private isNumeric(type: AsirType): boolean {
        return type.kind === 'primitive' && (type.name === 'number' || type.name === 'polynomial' || type.name === 'any' || type.name === 'parameter');
    }

    private visitBinaryOperation(node: BinaryOperationNode): AsirType {
        const leftType = this.visit(node.left);
        const rightType = this.visit(node.right);

        let resultType: AsirType = this.createPrimitiveType('any');

        // Check for matrix/vector operations first
        const isLeftMatrix = leftType.kind === 'primitive' && leftType.name === 'matrix';
        const isRightMatrix = rightType.kind === 'primitive' && rightType.name === 'matrix';
        const isLeftVector = leftType.kind === 'primitive' && leftType.name === 'vector';
        const isRightVector = rightType.kind === 'primitive' && rightType.name === 'vector';

        if (['+', '-', '*', '/'].includes(node.operator)) { // Common arithmetic operators
            if (isLeftMatrix || isRightMatrix) {
                // If one is matrix, the other must be matrix or number (scalar)
                if ((isLeftMatrix && (isRightMatrix || this.isNumeric(rightType))) ||
                    (isRightMatrix && (isLeftMatrix || this.isNumeric(leftType)))) {
                    resultType = this.createPrimitiveType('matrix');
                } else {
                    this.addDiagnostic(node, `Operator '${node.operator}' cannot be applied to matrix and non-numeric/non-matrix type.`, vscode.DiagnosticSeverity.Error);
                }
            } else if (isLeftVector || isRightVector) {
                // If one is vector, the other must be vector or number (scalar)
                if ((isLeftVector && (isRightVector || this.isNumeric(rightType))) ||
                    (isRightVector && (isLeftVector || this.isNumeric(leftType)))) {
                    resultType = this.createPrimitiveType('vector');
                } else {
                    this.addDiagnostic(node, `Operator '${node.operator}' cannot be applied to vector and non-numeric/non-vector type.`, vscode.DiagnosticSeverity.Error);
                }
            } else if (this.isNumeric(leftType) && this.isNumeric(rightType)) {
                // Standard numeric/polynomial operations
                if ((leftType.kind === 'primitive' && leftType.name === 'polynomial') ||
                    (rightType.kind === 'primitive' && rightType.name === 'polynomial')) {
                    resultType = this.createPrimitiveType('polynomial');
                } else {
                    resultType = this.createPrimitiveType('number');
                }
            } else {
                this.addDiagnostic(node, `Operator '${node.operator}' cannot be applied to the given types.`, vscode.DiagnosticSeverity.Error);
            }
        } else if (['&&', '||', '==', '!=', '>', '<', '>=', '<='].includes(node.operator)) {
            resultType = this.createPrimitiveType('number'); // Boolean operations result in number (0 or 1)
        } else if (node.operator === '^') { // Power operation
            // Power operation is handled by visitPowerOperation, but if it comes here, handle it.
            // For now, assume numeric base and exponent.
            if (this.isNumeric(leftType) && this.isNumeric(rightType)) {
                resultType = leftType; // Result type is usually same as base type for numeric power
            } else {
                this.addDiagnostic(node, `Power operator '^' cannot be applied to these types.`, vscode.DiagnosticSeverity.Error);
            }
        }

        // Refine parameter types based on the determined resultType
        if (node.left.kind === 'Identifier') {
            const symbol = this.symbolTable.currentScope.lookup(node.left.name);
            if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                this.refineParameterType(symbol, resultType);
            }
        }
        if (node.right.kind === 'Identifier') {
            const symbol = this.symbolTable.currentScope.lookup(node.right.name);
            if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                this.refineParameterType(symbol, resultType);
            }
        }

        return resultType;
    }

    private visitUnaryOperation(node: UnaryOperationNode): AsirType {
        const operandType = this.visit(node.operand);
        let resultType: AsirType = this.createPrimitiveType('any');

        if (node.operator === '-') {
            if (!this.isNumeric(operandType)) {
                this.addDiagnostic(node, `Unary '-' cannot be applied to this type.`, vscode.DiagnosticSeverity.Error);
            }
            resultType = operandType;
        } else if (node.operator === '!') {
            resultType = this.createPrimitiveType('number');
        }

        // Refine parameter type based on unary operation context
        if (node.operand.kind === 'Identifier') {
            const symbol = this.symbolTable.currentScope.lookup(node.operand.name);
            if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                this.refineParameterType(symbol, resultType);
            }
        }

        return resultType;
    }

    private visitTernaryOperation(node: TernaryOperationNode): AsirType {
        this.visit(node.condition);
        const consequenceType = this.visit(node.consequence);
        const alternativeType = this.visit(node.alternative);
        if (JSON.stringify(consequenceType) !== JSON.stringify(alternativeType)) {
            this.addDiagnostic(node, `Ternary operator branches have mismatched types: '${this.typeToString(consequenceType)}' and '${this.typeToString(alternativeType)}'.`, vscode.DiagnosticSeverity.Warning);
        }
        return consequenceType;
    }

    private visitPowerOperation(node: PowerOperationNode): AsirType {
        const baseType = this.visit(node.base);
        const exponentType = this.visit(node.exponent);
        if (!this.isNumeric(baseType) || !this.isNumeric(exponentType)) {
            this.addDiagnostic(node, `Power operator '^' cannot be applied to these types.`, vscode.DiagnosticSeverity.Error);
        }
        return baseType;
    }

    private visitIndexAccess(node: IndexAccessNode): AsirType {
        const baseTypeBeforeRefinement = this.visit(node.base); // Get the current type of the base

        // If the base is an identifier and its type is 'parameter', try to refine it
        if (node.base.kind === 'Identifier') {
            const symbol = this.symbolTable.currentScope.lookup(node.base.name);
            if (symbol && symbol.type.kind === 'primitive' && symbol.type.name === 'parameter') {
                // Heuristic: If there are two indices, assume it's a matrix.
                // If one index, assume it's a vector/list.
                if (node.indices.length === 2) { // M[ROW][I] implies matrix
                    this.refineParameterType(symbol, this.createPrimitiveType('matrix'));
                } else if (node.indices.length === 1) { // VECTOR[I] implies vector
                    this.refineParameterType(symbol, this.createPrimitiveType('vector'));
                }
            }
        }

        // Re-evaluate baseType after potential refinement
        const baseType = this.visit(node.base); // Get the potentially refined type

        node.indices.forEach(index => {
            const indexType = this.visit(index);
            if (!this.isNumeric(indexType)) {
                this.addDiagnostic(index, 'Array index must be a number.', vscode.DiagnosticSeverity.Error);
            }
        });

        if (baseType.kind === 'list') {
            return baseType.elementType;
        } else if (baseType.kind === 'struct') {
            // For struct, if the index is a string literal, we can look up the member
            if (node.indices.length === 1 && node.indices[0].kind === 'StringLiteral') {
                const memberName = (node.indices[0] as StringLiteralNode).value;
                const structType = baseType as StructAsirType; // Cast to StructAsirType
                if (structType.members.has(memberName)) {
                    return structType.members.get(memberName)!.type;
                }
            }
            this.addDiagnostic(node.base, 'Struct members can only be accessed by a single string literal index.', vscode.DiagnosticSeverity.Error);
            return this.createPrimitiveType('any');
        } else if (baseType.kind === 'primitive') {
            if (baseType.name === 'matrix') {
                return this.createPrimitiveType('vector'); // 行列のインデックスアクセスはベクトルを返す
            } else if (baseType.name === 'vector') {
                return this.createPrimitiveType('number'); // ベクトルのインデックスアクセスは数値を返す
            }
        }
        this.addDiagnostic(node.base, 'Index access is only allowed on lists, structs, matrices, or vectors.', vscode.DiagnosticSeverity.Error);
        return this.createPrimitiveType('any'); // Fallback for other cases
    }

    private visitListLiteral(node: ListLiteralNode): AsirType {
        const elementTypes = node.elements.map(el => this.visit(el));
        // For simplicity, if there are elements, return the type of the first one.
        // A more advanced implementation would find a common supertype.
        const elementType = elementTypes.length > 0 ? elementTypes[0] : this.createPrimitiveType('any');
        const listType: ListAsirType = { kind: 'list', elementType: elementType };
        return listType;
    }

    private visitParenExpression(node: ParenExpressionNode): AsirType { return this.visit(node.expression); }
    private visitModuleStatement(node: PasirserModuleStatementNode): AsirType {
        if (node.kind === 'ModuleDeclaration') {
            const moduleName = node.name.name;
            const membersMap = new Map<string, Symbol>();

            const moduleType: ModuleAsirType = {
                kind: 'module',
                name: moduleName,
                members: membersMap // Always include members
            };

            if (node.loc) {
                this.symbolTable.currentScope.define({
                    name: moduleName,
                    type: moduleType,
                    definedAt: node.loc,
                    node: node
                });
            }
            return moduleType;
        }
        return this.createPrimitiveType('any');
    }
    private visitStructStatement(node: StructStatementNode): AsirType {
        const structName = node.name.name;
        const membersMap = new Map<string, Symbol>();

        for (const memberId of node.members) {
            if (memberId.loc) {
                membersMap.set(memberId.name, {
                    name: memberId.name,
                    type: this.createPrimitiveType('any'),
                    definedAt: memberId.loc,
                    node: memberId
                });
            }
        }

        const structType: StructAsirType = {
            kind: 'struct',
            name: structName,
            members: membersMap // Always include members
        };

        if (node.loc) {
            this.symbolTable.currentScope.define({
                name: structName,
                type: structType,
                definedAt: node.loc,
                node: node
            });
        }

        this.visitChildren(node);
        return structType;
    }
    private visitStructMemberAssignment(node: StructMemberAssignmentNode): AsirType { this.visitChildren(node); return this.createPrimitiveType('any'); }
    private visitListDestructuringAssignment(node: ListDestructuringAssignmentNode): AsirType { this.visitChildren(node); return this.createPrimitiveType('any'); }
    private visitIfStatement(node: IfStatementNode): AsirType { this.visitChildren(node); return this.createPrimitiveType('undefined'); }
    private visitForStatement(node: ForStatementNode): AsirType { const oldInLoop = this.isInLoop; this.isInLoop = true; this.visitChildren(node); this.isInLoop = oldInLoop; return this.createPrimitiveType('undefined'); }
    private visitWhileStatement(node: WhileStatementNode): AsirType { const oldInLoop = this.isInLoop; this.isInLoop = true; this.visitChildren(node); this.isInLoop = oldInLoop; return this.createPrimitiveType('undefined'); }
    private visitDoWhileStatement(node: DoWhileStatementNode): AsirType { const oldInLoop = this.isInLoop; this.isInLoop = true; this.visitChildren(node); this.isInLoop = oldInLoop; return this.createPrimitiveType('undefined'); }
    private visitReturnStatement(node: ReturnStatementNode): AsirType {
        const returnType = this.visit(node.value);
        if (this.currentFunction) {
            const funcSymbol = this.symbolTable.currentScope.lookup(this.currentFunction.name.name);
            if (funcSymbol && funcSymbol.type.kind === 'function') {
                funcSymbol.type.returnType = returnType;
            }
        }
        return returnType;
    }
    private visitBreakStatement(node: BreakStatementNode): AsirType { if (!this.isInLoop) { this.addDiagnostic(node, '`break` can only be used inside a loop.', vscode.DiagnosticSeverity.Error); } return this.createPrimitiveType('undefined'); }
    private visitContinueStatement(node: ContinueStatementNode): AsirType { if (!this.isInLoop) { this.addDiagnostic(node, '`continue` can only be used inside a loop.', vscode.DiagnosticSeverity.Error); } return this.createPrimitiveType('undefined'); }

    private findReturnNodes(node: ASTNode): ReturnStatementNode[] {
        let returnNodes: ReturnStatementNode[] = [];
        if (!node) {
            return returnNodes;
        }

        if (node.kind === 'ReturnStatement') {
            returnNodes.push(node as ReturnStatementNode);
        }

        for (const key in node) {
            if (key === 'loc' || key === 'kind' || key === 'parent') continue;
            const value = (node as any)[key];
            if (Array.isArray(value)) {
                for (const child of value) {
                    if (child && typeof child === 'object' && 'kind' in child) {
                        returnNodes = returnNodes.concat(this.findReturnNodes(child));
                    }
                }
            } else if (value && typeof value === 'object' && 'kind' in value) {
                returnNodes = returnNodes.concat(this.findReturnNodes(value));
            }
        }
        return returnNodes;
    }

    private visitChildren(node: ASTNode): void {
        for (const key in node) {
            if (key === 'loc' || key === 'kind' || key === 'parent') continue;
            const value = (node as any)[key];
            if (Array.isArray(value)) {
                for (const child of value) {
                    if (child && typeof child === 'object' && 'kind' in child) {
                        this.visit(child);
                    }
                }
            } else if (value && typeof value === 'object' && 'kind' in value) {
                this.visit(value);
            }
        }
    }

    private addDiagnostic(node: ASTNode, message: string, severity: vscode.DiagnosticSeverity) {
        if (node.loc) {
            const range = new vscode.Range(
                node.loc.startLine - 1,
                node.loc.startColumn,
                (node.loc.endLine ?? node.loc.startLine) - 1,
                (node.loc.endColumn ?? node.loc.startColumn + 1)
            );
            this.diagnostics.push(new vscode.Diagnostic(range, message, severity));
        }
        }
}

export function analyzeDocumentWithAST(document: vscode.TextDocument): { diagnostics: vscode.Diagnostic[], symbolTable: SymbolTable } {
    const code = document.getText();
    const { ast, errors } = parseAsirCodeAndBuildAST(code);
    const allDiagnostics: vscode.Diagnostic[] = [];

    if (errors && Array.isArray(errors)) {
        for (const error of errors) {
            if (error.loc && error.message) {
                const range = new vscode.Range(
                    error.loc.startLine - 1,
                    error.loc.startColumn,
                    (error.loc.endLine ?? error.loc.startLine) - 1,
                    (error.loc.endColumn ?? error.loc.startColumn + 1)
                );
                allDiagnostics.push(new vscode.Diagnostic(range, error.message, vscode.DiagnosticSeverity.Error));
            }
        }
    }

    if (ast && ast.kind === 'Program') {
        const analyzerInstance = new SemanticAnalyzer(ast as ProgramNode);
        allDiagnostics.push(...analyzerInstance.analyze(ast as ProgramNode));
        let symbolTableToReturn = analyzerInstance.symbolTable;
        return { diagnostics: allDiagnostics, symbolTable: symbolTableToReturn };
    } else {
        const dummyProgramNode: ProgramNode = {
            kind: 'Program',
            statements: [],
            loc: { startLine: 1, startColumn: 0, endLine: 1, endColumn: 0 }
        };
        const dummySymbolTable = new SymbolTable(dummyProgramNode);
        return { diagnostics: allDiagnostics, symbolTable: dummySymbolTable };
    }
}