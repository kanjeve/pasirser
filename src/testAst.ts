// 1. ASTノードの共通ベースインターフェース
export interface ASTNode {
    kind: string;

    loc?: {
        startLine: number;
        startColumn: number;
        endLine?: number;
        endColumn?: number;
    };
}

// --- 式ノードの共通基底とL-Valueの定義 ---

// 式が評価された後の型情報を格納するための基底インターフェース
export interface TypedExpressionNode extends ASTNode {
    resolvedType?: AsirType; // 意味解析フェーズで解決される
}

// 代入の左辺に来れるノード (L-Value)
export type LValueNode = IdentifierNode | IndexAccessNode;

// 2. 式を表すノードのユニオン型
export type ExpressionNode =
    | NumberLiteralNode
    | StringLiteralNode
    | IdentifierNode
    | IndeterminateNode
    | BinaryOperationNode
    | UnaryOperationNode
    | TernaryOperationNode
    | PowerOperationNode
    | IndexAccessNode
    | FunctionCallNode
    | FunctorCallNode
    | ParenExpressionNode
    | ListLiteralNode
    | DistributedPolynomialLiteralNode
    | AssignmentExpressionNode
    | StructMemberAssignmentNode
    | ListDestructuringAssignmentNode;

// 3. 文を表すノードのユニオン型
export type StatementNode =
    | ExpressionStatementNode
    | EmptyStatementNode
    | DefinitionStatementNode
    | IfStatementNode
    | ForStatementNode
    | WhileStatementNode
    | DoWhileStatementNode
    | ReturnStatementNode
    | BreakStatementNode
    | ContinueStatementNode
    | StructStatementNode
    | ModuleStatementNode
    | PreprocessorNode
    | BlockNode;

//  モジュール関連の文ノードのユニオン型
export type ModuleStatementNode =
    | ModuleVariableDeclarationNode
    | LocalFunctionDeclarationNode
    | ModuleDeclarationNode
    | EndModuleNode;

// プリプロセッサ関連ノードのユニオン型
export type PreprocessorNode =
    | PreprocessorDefineNode
    | PreprocessorIfNode
    | PreprocessorIncludeNode;

// 4. 具体的なASTノードのインターフェース定義

// プログラムのルートノード
export interface ProgramNode extends ASTNode {
    kind: 'Program';
    statements: StatementNode[];
}

// --- リテラルノード ---

// 数値
export interface NumberLiteralNode extends TypedExpressionNode {
    kind: 'NumberLiteral';
    value: number | string;
    rawText?: string;
}

// 文字列("")
export interface StringLiteralNode extends TypedExpressionNode {
    kind: 'StringLiteral';
    value: string;
    rawText?: string;
}

// 文字列('')
export interface CharLiteralNode extends TypedExpressionNode {
    kind: 'CharLiteral';
    value: string;
    rawText?: string;
}

// 分散表現多項式リテラル (e.g., <<1,2,3:4>>)
export interface DistributedPolynomialLiteralNode extends TypedExpressionNode {
    kind: 'DistributedPolynomialLiteral';
    terms: number[];
    modulus?: number;
}

// --- 識別子ノード ---

export interface IdentifierNode extends TypedExpressionNode {
    kind: 'Identifier';
    name: string;
    resolvedSymbol?: Symbol;
}

export interface IndeterminateNode extends TypedExpressionNode {
    kind: 'Indterminate';
    name: string;
}

// --- 演算子ノード ---

// 二項演算
export interface BinaryOperationNode extends TypedExpressionNode {
    kind: 'BinaryOperation';
    operator: string;
    left: ExpressionNode;
    right: ExpressionNode;
}

// 単項演算
export interface UnaryOperationNode extends TypedExpressionNode {
    kind: 'UnaryOperation';
    operator: string;
    operand: ExpressionNode;
    isPostfix?: boolean;
}

// べき乗演算
export interface PowerOperationNode extends TypedExpressionNode {
    kind: 'PowerOperation';
    base: ExpressionNode;
    exponent: ExpressionNode;
}

// 三項演算子
export interface TernaryOperationNode extends TypedExpressionNode {
    kind: 'TernaryOperation';
    condition: ExpressionNode;
    consequence: ExpressionNode;
    alternative: ExpressionNode;
}

// --- アクセスノード ---

// 添字アクセス
export interface IndexAccessNode extends TypedExpressionNode {
    kind: 'IndexAccess';
    base: ExpressionNode;
    indices: ExpressionNode[];
}

// 関数呼び出し
export interface FunctionCallNode extends TypedExpressionNode {
    kind: 'FunctionCall';
    callee: IdentifierNode;
    isGlobal: boolean;
    args: ExpressionNode[];
    options: OptionPairNode[];
}

export interface FunctorCallNode extends TypedExpressionNode {
    kind: 'FunctorCall';
    callee: ExpressionNode;
    args: ExpressionNode[];
    options: OptionPairNode[];
}

// オプション
export interface OptionPairNode extends ASTNode {
    kind: 'OptionPair';
    key: IdentifierNode;
    value: ExpressionNode;
}

// 括弧で囲まれた式
export interface ParenExpressionNode extends TypedExpressionNode {
    kind: 'ParenExpression';
    expression: ExpressionNode;
}

// --- コレクションリテラルノード ---
export interface ListLiteralNode extends TypedExpressionNode {
    kind: 'ListLiteral';
    elements: ExpressionNode[];
}

// --- 式ノード (代入) ---

// 代入式の共通基底
export interface BaseAssignmentNode extends TypedExpressionNode {
    operator: string;
    right: ExpressionNode;
}

// 通常の代入式
export interface AssignmentExpressionNode extends BaseAssignmentNode {
    kind: 'AssignmentExpression';
    left: LValueNode;
}

// 構造体メンバーへの代入
export interface StructMemberAssignmentNode extends BaseAssignmentNode {
    kind: 'StructMemberAssignment';
    base: IdentifierNode;
    members: IdentifierNode[];
}

// リスト要素一括代入
export interface ListDestructuringAssignmentNode extends BaseAssignmentNode {
    kind: 'ListDestructuringAssignment';
    targets: IdentifierNode[];
}

// --- 文ノード ---

// 式文
export interface ExpressionStatementNode extends ASTNode {
    kind: 'ExpressionStatement';
    expression: ExpressionNode;
}

// 空の文
export interface EmptyStatementNode extends ASTNode {
    kind: 'EmptyStatement';
}

// def文
export interface DefinitionStatementNode extends ASTNode {
    kind: 'FunctionDefinition';
    name: IdentifierNode;
    parameters: IdentifierNode[];
    body: StatementNode;
}

// If文
export interface IfStatementNode extends ASTNode {
    kind: 'IfStatement';
    condition: ExpressionNode;
    thenStatement: StatementNode;
    elseStatement?: StatementNode;
}

// For文
export interface ForStatementNode extends ASTNode {
    kind: 'ForStatement';
    initializers: ExpressionNode[];
    conditions: ExpressionNode[];
    updaters: ExpressionNode[];
    body: StatementNode;
}

// While文
export interface WhileStatementNode extends ASTNode {
    kind: 'WhileStatement';
    conditions: ExpressionNode[];
    body: StatementNode;
}

// Do-While文
export interface DoWhileStatementNode extends ASTNode {
    kind: 'DoWhileStatement';
    body: StatementNode;
    conditions: ExpressionNode[];
}

// Return文
export interface ReturnStatementNode extends ASTNode {
    kind: 'ReturnStatement';
    value?: ExpressionNode;
}

// Break文
export interface BreakStatementNode extends ASTNode {
    kind: 'BreakStatement';
}

// Continue文
export interface ContinueStatementNode extends ASTNode {
    kind: 'ContinueStatement';
}

// 構造体定義
export interface StructStatementNode extends ASTNode {
    kind: 'StructStatement';
    name: IdentifierNode;
    members: IdentifierNode[];
}

// --- モジュール関連の文ノード ---

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

// ブロックノード
export interface BlockNode extends ASTNode {
    kind: 'Block';
    statements: StatementNode[];
}

// --- プリプロセッサ関連ノード ---

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

// --- その他補助的なもの ---

// 式のリストを表す中間ノード
export interface ExpressionListNode extends ASTNode {
    kind: 'ExpressionList';
    expressions: ExpressionNode[];
}

// --- 意味解析で使われる型 ---
// (仮の定義、必要に応じて拡張)
export type AsirType = 'number' | 'polynomial' | 'list' | 'string' | 'function' | 'struct' | 'module' | 'any' | 'unknown';

export interface Symbol {
    name: string;
    type: AsirType;
    definedAt: { line: number; column: number };
}
