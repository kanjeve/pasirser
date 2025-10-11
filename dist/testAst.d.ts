export interface ASTNode {
    kind: string;
    loc?: {
        startLine: number;
        startColumn: number;
        endLine?: number;
        endColumn?: number;
    };
}
export interface TypedExpressionNode extends ASTNode {
    resolvedType?: AsirType;
}
export type LValueNode = IdentifierNode | IndexAccessNode;
export type ExpressionNode = NumberLiteralNode | StringLiteralNode | CharLiteralNode | IdentifierNode | BinaryOperationNode | UnaryOperationNode | TernaryOperationNode | PowerOperationNode | IndexAccessNode | FunctionCallNode | ParenExpressionNode | ListLiteralNode | DistributedPolynomialLiteralNode | AssignmentExpressionNode | StructMemberAssignmentNode | ListDestructuringAssignmentNode;
export type StatementNode = ExpressionStatementNode | EmptyStatementNode | DefinitionStatementNode | IfStatementNode | ForStatementNode | WhileStatementNode | DoWhileStatementNode | ReturnStatementNode | BreakStatementNode | ContinueStatementNode | StructStatementNode | ModuleStatementNode | PreprocessorNode | BlockNode;
export type ModuleStatementNode = ModuleVariableDeclarationNode | LocalFunctionDeclarationNode | ModuleDeclarationNode | EndModuleNode;
export type PreprocessorNode = PreprocessorDefineNode | PreprocessorIfNode | PreprocessorIncludeNode;
export interface ProgramNode extends ASTNode {
    kind: 'Program';
    statements: StatementNode[];
}
export interface NumberLiteralNode extends TypedExpressionNode {
    kind: 'NumberLiteral';
    value: number | string;
    rawText?: string;
}
export interface StringLiteralNode extends TypedExpressionNode {
    kind: 'StringLiteral';
    value: string;
    rawText?: string;
}
export interface CharLiteralNode extends TypedExpressionNode {
    kind: 'CharLiteral';
    value: string;
    rawText?: string;
}
export interface DistributedPolynomialLiteralNode extends TypedExpressionNode {
    kind: 'DistributedPolynomialLiteral';
    terms: number[];
    modulus?: number;
}
export interface IdentifierNode extends TypedExpressionNode {
    kind: 'Identifier';
    name: string;
    resolvedSymbol?: Symbol;
}
export interface BinaryOperationNode extends TypedExpressionNode {
    kind: 'BinaryOperation';
    operator: string;
    left: ExpressionNode;
    right: ExpressionNode;
}
export interface UnaryOperationNode extends TypedExpressionNode {
    kind: 'UnaryOperation';
    operator: string;
    operand: ExpressionNode;
    isPostfix?: boolean;
}
export interface PowerOperationNode extends TypedExpressionNode {
    kind: 'PowerOperation';
    base: ExpressionNode;
    exponent: ExpressionNode;
}
export interface TernaryOperationNode extends TypedExpressionNode {
    kind: 'TernaryOperation';
    condition: ExpressionNode;
    consequence: ExpressionNode;
    alternative: ExpressionNode;
}
export interface IndexAccessNode extends TypedExpressionNode {
    kind: 'IndexAccess';
    base: ExpressionNode;
    indices: ExpressionNode[];
}
export interface FunctionCallNode extends TypedExpressionNode {
    kind: 'FunctionCall';
    callee: IdentifierNode;
    isGlobal: boolean;
    args: ExpressionNode[];
    options: OptionPairNode[];
}
export interface OptionPairNode extends ASTNode {
    kind: 'OptionPair';
    key: IdentifierNode;
    value: ExpressionNode;
}
export interface ParenExpressionNode extends TypedExpressionNode {
    kind: 'ParenExpression';
    expression: ExpressionNode;
}
export interface ListLiteralNode extends TypedExpressionNode {
    kind: 'ListLiteral';
    elements: ExpressionNode[];
}
export interface BaseAssignmentNode extends TypedExpressionNode {
    operator: string;
    right: ExpressionNode;
}
export interface AssignmentExpressionNode extends BaseAssignmentNode {
    kind: 'AssignmentExpression';
    left: LValueNode;
}
export interface StructMemberAssignmentNode extends BaseAssignmentNode {
    kind: 'StructMemberAssignment';
    base: IdentifierNode;
    members: IdentifierNode[];
}
export interface ListDestructuringAssignmentNode extends BaseAssignmentNode {
    kind: 'ListDestructuringAssignment';
    targets: IdentifierNode[];
}
export interface ExpressionStatementNode extends ASTNode {
    kind: 'ExpressionStatement';
    expression: ExpressionNode;
}
export interface EmptyStatementNode extends ASTNode {
    kind: 'EmptyStatement';
}
export interface DefinitionStatementNode extends ASTNode {
    kind: 'FunctionDefinition';
    name: IdentifierNode;
    parameters: IdentifierNode[];
    body: StatementNode;
}
export interface IfStatementNode extends ASTNode {
    kind: 'IfStatement';
    condition: ExpressionNode;
    thenStatement: StatementNode;
    elseStatement?: StatementNode;
}
export interface ForStatementNode extends ASTNode {
    kind: 'ForStatement';
    initializers: ExpressionNode[];
    conditions: ExpressionNode[];
    updaters: ExpressionNode[];
    body: StatementNode;
}
export interface WhileStatementNode extends ASTNode {
    kind: 'WhileStatement';
    conditions: ExpressionNode[];
    body: StatementNode;
}
export interface DoWhileStatementNode extends ASTNode {
    kind: 'DoWhileStatement';
    body: StatementNode;
    conditions: ExpressionNode[];
}
export interface ReturnStatementNode extends ASTNode {
    kind: 'ReturnStatement';
    value?: ExpressionNode;
}
export interface BreakStatementNode extends ASTNode {
    kind: 'BreakStatement';
}
export interface ContinueStatementNode extends ASTNode {
    kind: 'ContinueStatement';
}
export interface StructStatementNode extends ASTNode {
    kind: 'StructStatement';
    name: IdentifierNode;
    members: IdentifierNode[];
}
export interface ModuleVariableDeclarationNode extends ASTNode {
    kind: 'ModuleVariableDeclaration';
    scope: 'extern' | 'static' | 'global' | 'local';
    variables: IdentifierNode[];
}
export interface LocalFunctionDeclarationNode extends ASTNode {
    kind: 'LocalFunctionDeclaration';
    functions: IdentifierNode[];
}
export interface ModuleDeclarationNode extends ASTNode {
    kind: 'ModuleDeclaration';
    name: IdentifierNode;
}
export interface EndModuleNode extends ASTNode {
    kind: 'EndModule';
}
export interface BlockNode extends ASTNode {
    kind: 'Block';
    statements: StatementNode[];
}
export interface PreprocessorDefineNode extends ASTNode {
    kind: 'PreprocessorDefine';
    name: IdentifierNode;
    parameters: IdentifierNode[];
    body: ExpressionNode;
}
export interface PreprocessorIfNode extends ASTNode {
    kind: 'PreprocessorIf';
    directive: 'if' | 'ifdef' | 'ifndef';
    condition: ExpressionNode;
    thenStatements: StatementNode[];
    elifClauses: PreprocessorElifNode[];
    elseStatements?: StatementNode[];
}
export interface PreprocessorElifNode extends ASTNode {
    kind: 'PreprocessorElif';
    condition: ExpressionNode;
    statements: StatementNode[];
}
export interface PreprocessorIncludeNode extends ASTNode {
    kind: 'PreprocessorIncludeNode';
    pathtype: 'system' | 'local';
    path: string;
}
export interface ExpressionListNode extends ASTNode {
    kind: 'ExpressionList';
    expressions: ExpressionNode[];
}
export type AsirType = 'number' | 'polynomial' | 'list' | 'string' | 'function' | 'struct' | 'module' | 'any' | 'unknown';
export interface Symbol {
    name: string;
    type: AsirType;
    definedAt: {
        line: number;
        column: number;
    };
}
