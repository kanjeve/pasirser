import { AsirType, Symbol } from '../../semantics/types';

// --- 1. ASTノードの共通ベースインターフェース

// LSP向けのオフセット情報
export interface PositionInfo {
    line: number;
    column: number;
    offset: number;
}

export interface SourceLocation {
    start: PositionInfo;
    end: PositionInfo;
}

export interface ASTNode {
    kind: string;
    loc?: SourceLocation; // 最終的には「?」を外す
}

// エラー回復用ノード
export interface ErrorNode extends ASTNode {
    kind: 'Error';
    rawText?: string; // エラー箇所のコード
    message?: string; // エラーメッセージ
}

// --- 式ノードの共通基底とL-Valueの定義 ---

// 式が評価された後の型情報を格納するための基底インターフェース
export interface TypedExpressionNode extends ASTNode {
    resolvedType?: AsirType; // 意味解析フェーズで解決される
}

// 代入の左辺に来れるノード (L-Value)
export type LValueNode = IndeterminateNode | IndexAccessNode | MemberAccessNode;

// 2. 式を表すノードのユニオン型
export type ExpressionNode =
    | ErrorNode
    | NumberLiteralNode
    | StringLiteralNode
    | IndeterminateNode
    | BinaryOperationNode
    | UnaryOperationNode
    | TernaryOperationNode
    | PowerOperationNode
    | IndexAccessNode
    | MemberAccessNode
    | FunctionCallNode
    | FunctorCallNode
    | ParenExpressionNode
    | ListLiteralNode
    | DistributedPolynomialLiteralNode
    | AssignmentExpressionNode
    | ListDestructuringAssignmentNode
    | DottedIdentifierNode;

// 3. 文を表すノードのユニオン型
export type StatementNode =
    | ErrorNode
    | ExpressionStatementNode
    | EmptyStatementNode
    | DefinitionStatementNode
    | FormDeclarationNode
    | IfStatementNode
    | ForStatementNode
    | WhileStatementNode
    | DoWhileStatementNode
    | ReturnStatementNode
    | BreakStatementNode
    | ContinueStatementNode
    | EndStatementNode 
    | QuitStatementNode 
    | DebugStatementNode
    | StructStatementNode
    | ModuleStatementNode
    | PreprocessorNode
    | BlockNode;

// 4. 具体的なASTノードのインターフェース定義

// プログラムのルートノード
export interface ProgramNode extends ASTNode {
    kind: 'Program';
    statements: StatementNode[];
}

// --- リテラルノード ---

export interface NumberLiteralNode extends TypedExpressionNode {
    kind: 'NumberLiteral';
    value: number | string;
    rawText?: string;
}

export interface IdLiteralNode extends TypedExpressionNode {
    kind: 'IdLiteral';
    rawText?: string;
}

export interface StringLiteralNode extends TypedExpressionNode {
    kind: 'StringLiteral';
    value: string;
    rawText?: string;
}

export interface DistributedPolynomialLiteralNode extends TypedExpressionNode {
    kind: 'DistributedPolynomialLiteral';
    terms: number[];
    modulus?: number;
}

// --- 識別子ノード ---

export interface IndeterminateNode extends TypedExpressionNode {
    kind: 'Indeterminate';
    name: string;
    resolvedSymbol?: Symbol;
}

export interface DottedIdentifierNode extends TypedExpressionNode {
    kind: 'DottedIdentifier';
    identifiers: IndeterminateNode[];
}

// --- 演算子ノード ---

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

// --- アクセスノード ---

export interface IndexAccessNode extends TypedExpressionNode {
    kind: 'IndexAccess';
    base: ExpressionNode;
    indices: ExpressionNode[];
}

export interface MemberAccessNode extends TypedExpressionNode {
    kind: 'MemberAccess';
    base: ExpressionNode;
    members: IndeterminateNode[];
}

export interface QualifiedNameNode extends ASTNode {
    kind: 'QualifiedName';
    moduleName?: IndeterminateNode;
    functionName: IndeterminateNode;
}

export interface FunctionCallNode extends TypedExpressionNode {
    kind: 'FunctionCall';
    callee: QualifiedNameNode;
    isGlobal: boolean;
    diffOrders?: number[];
    args: ExpressionNode[];
    options: OptionPairNode[];
}

export interface FunctorCallNode extends TypedExpressionNode {
    kind: 'FunctorCall';
    callee: ExpressionNode;
    args: ExpressionNode[];
    options: OptionPairNode[];
}

export interface OptionPairNode extends ASTNode {
    kind: 'OptionPair';
    key: IndeterminateNode;
    value: ExpressionNode;
}

export interface ParenExpressionNode extends TypedExpressionNode {
    kind: 'ParenExpression';
    expression: ExpressionNode;
}

// --- コレクションリテラルノード ---
export interface ListLiteralNode extends TypedExpressionNode {
    kind: 'ListLiteral';
    elements: ExpressionNode[];
}

// --- 代入式ノード ---

export interface BaseAssignmentNode extends TypedExpressionNode {
    operator: string;
    right: ExpressionNode;
}

export interface AssignmentExpressionNode extends BaseAssignmentNode {
    kind: 'AssignmentExpression';
    left: LValueNode;
}

export interface ListDestructuringAssignmentNode extends BaseAssignmentNode {
    kind: 'ListDestructuringAssignment';
    targets: IndeterminateNode[];
}

// --- 文ノード ---

export interface ExpressionStatementNode extends ASTNode {
    kind: 'ExpressionStatement';
    expression: ExpressionNode;
}

export interface EmptyStatementNode extends ASTNode {
    kind: 'EmptyStatement';
}

export interface DefinitionStatementNode extends ASTNode {
    kind: 'FunctionDefinition';
    name: IndeterminateNode;
    parameters: IndeterminateNode[];
    body: StatementNode;
}

export interface FormDeclarationNode extends ASTNode {
    kind: 'FormDeclaration';
    name: IndeterminateNode;
    parameters: IndeterminateNode[];
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
    name: IndeterminateNode;
    members: IndeterminateNode[];
}

export interface EndStatementNode extends ASTNode {
    kind: 'EndStatement';
}

export interface QuitStatementNode extends ASTNode {
    kind: 'QuitStatement';
}

export interface DebugStatementNode extends ASTNode {
    kind: 'DebugStatement';
}

// --- モジュール関連の文ノード ---
export type ModuleStatementNode =
    | ModuleVariableDeclarationNode
    | ModuleDeclarationNode
    | EndModuleNode;


export interface ModuleVariableDeclarationNode extends ASTNode {
    kind: 'ModuleVariableDeclaration';
    scope: 'extern' | 'static' | 'global' | 'local' | 'localf';
    variables: IndeterminateNode[];
}

export interface ModuleDeclarationNode extends ASTNode {
    kind: 'ModuleDeclaration';
    name: IndeterminateNode;
}

export interface EndModuleNode extends ASTNode {
    kind: 'EndModule';
}

// ブロックノード
export interface BlockNode extends ASTNode {
    kind: 'Block';
    statements: StatementNode[];
}

// --- プリプロセッサ関連ノード ---

export type PreprocessorNode =
    | PreprocessorDefineNode
    | PreprocessorIfNode
    | PreprocessorIncludeNode;


export interface PreprocessorDefineNode extends ASTNode {
    kind: 'PreprocessorDefine';
    name: IndeterminateNode;
    parameters: IndeterminateNode[];
    body: ExpressionNode;
}

export interface PreprocessorIfNode extends ASTNode {
    kind: 'PreprocessorIf';
    directive: 'if' | 'ifdef' | 'ifndef';
    condition: ExpressionNode;
    thenStatements: StatementNode[];
    elifClauses: PreprocessorElifNode[];
    elseStatements?: PreprocessorElseNode;
}

export interface PreprocessorElifNode extends ASTNode {
    kind: 'PreprocessorElif';
    condition: ExpressionNode;
    statements: StatementNode[];
}

export interface PreprocessorElseNode extends ASTNode {
    kind: 'PreprocessorElse';
    statements: StatementNode[];
}

export interface PreprocessorIncludeNode extends ASTNode {
    kind: 'PreprocessorInclude';
    pathtype: 'system' | 'local';
    path: string;
}

// --- その他補助的なもの ---

// 式のリストを表す中間ノード
export interface ExpressionListNode extends ASTNode {
    kind: 'ExpressionList';
    expressions: ExpressionNode[];
}
