export interface ASTNode {
    kind: string;
    loc?: {
        startLine: number;
        startColumn: number;
        endLine?: number;
        endColumn?: number;
    };
}
export type ExpressionNode = NumberLiteralNode | StringLiteralNode | CharLiteralNode | IdentifierNode | BinaryOperationNode | UnaryOperationNode | TernaryOperationNode | PowerOperationNode | IndexAccessNode | FunctionCallNode | ParenExpressionNode | SpecialNumberNode | ListLiteralNode | DistributedPolynomialLiteralNode;
export type StatementNode = ExpressionStatementNode | EmptyStatementNode | AssignmentStatementNode | StructMemberAssignmentNode | ListDestructuringAssignmentNode | DefinitionStatementNode | IfStatementNode | ForStatementNode | WhileStatementNode | DoWhileStatementNode | ReturnStatementNode | BreakStatementNode | ContinueStatementNode | StructStatementNode | ModuleStatementNode | BlockNode;
export type ModuleStatementNode = ModuleVariableDeclarationNode | LocalFunctionDeclarationNode | ModuleDeclarationNode | EndModuleNode;
export interface ProgramNode extends ASTNode {
    kind: 'Program';
    statements: StatementNode[];
}
export interface NumberLiteralNode extends ASTNode {
    kind: 'NumberLiteral';
    value: number | string;
    rawText?: string;
}
export interface StringLiteralNode extends ASTNode {
    kind: 'StringLiteral';
    value: string;
    rawText?: string;
}
export interface CharLiteralNode extends ASTNode {
    kind: 'CharLiteral';
    value: string;
    rawText?: string;
}
export interface DistributedPolynomialLiteralNode extends ASTNode {
    kind: 'DistributedPolynomialLiteral';
    terms: number[];
    modulus?: number;
}
export interface IdentifierNode extends ASTNode {
    kind: 'Identifier';
    name: string;
    qualifier?: IdentifierNode;
    isVar: boolean;
    isSpecialVar: boolean;
}
export interface SpecialNumberNode extends ASTNode {
    kind: 'SpecialNumber';
    name: string;
}
export interface BinaryOperationNode extends ASTNode {
    kind: 'BinaryOperation';
    operator: string;
    left: ExpressionNode;
    right: ExpressionNode;
}
export interface UnaryOperationNode extends ASTNode {
    kind: 'UnaryOperation';
    operator: string;
    operand: ExpressionNode;
}
export interface PowerOperationNode extends ASTNode {
    kind: 'PowerOperation';
    base: ExpressionNode;
    exponent: ExpressionNode;
}
export interface TernaryOperationNode extends ASTNode {
    kind: 'TernaryOperation';
    condition: ExpressionNode;
    consequence: ExpressionNode;
    alternative: ExpressionNode;
}
export interface IndexAccessNode extends ASTNode {
    kind: 'IndexAccess';
    base: ExpressionNode;
    indices: ExpressionNode[];
}
export interface FunctionCallNode extends ASTNode {
    kind: 'FunctionCall';
    callee: IdentifierNode;
    args: ExpressionNode[];
}
export interface ParenExpressionNode extends ASTNode {
    kind: 'ParenExpression';
    expression: ExpressionNode;
}
export interface ListLiteralNode extends ASTNode {
    kind: 'ListLiteral';
    elements: ExpressionNode[];
}
export interface ExpressionStatementNode extends ASTNode {
    kind: 'ExpressionStatement';
    expression: ExpressionNode;
}
export interface EmptyStatementNode extends ASTNode {
    kind: 'EmptyStatement';
}
export interface AssignmentStatementNode extends ASTNode {
    kind: 'AssignmentStatement';
    left: ExpressionNode;
    operator: string;
    right: ExpressionNode;
}
export interface StructMemberAssignmentNode extends ASTNode {
    kind: 'StructMemberAssignment';
    base: IdentifierNode;
    members: IdentifierNode[];
    operator: string;
    right: ExpressionNode;
}
export interface ListDestructuringAssignmentNode extends ASTNode {
    kind: 'ListDestructuringAssignment';
    targets: IdentifierNode[];
    operator: string;
    right: ExpressionNode;
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
    consequence: StatementNode;
    alternative?: StatementNode;
}
export interface ForStatementNode extends ASTNode {
    kind: 'ForStatement';
    initializers: (AssignmentStatementNode | StructMemberAssignmentNode | ListDestructuringAssignmentNode)[];
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
