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

// 2. 式を表すノードのユニオン型
export type ExpressionNode =
    | NumberLiteralNode
    | StringLiteralNode
    | CharLiteralNode
    | IdentifierNode
    | BinaryOperationNode
    | UnaryOperationNode
    | TernaryOperationNode
    | PowerOperationNode
    | IndexAccessNode
    | FunctionCallNode
    | ParenExpressionNode
    | SpecialNumberNode
    | ListLiteralNode
    | DistributedPolynomialLiteralNode // Added for dpoly
    ;

// 3. 文を表すノードのユニオン型
export type StatementNode =
    | ExpressionStatementNode
    | EmptyStatementNode
    | AssignmentStatementNode
    | StructMemberAssignmentNode      // Added for for-loop initializers
    | ListDestructuringAssignmentNode // Added for for-loop initializers
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
    | BlockNode
    ;


//  モジュール関連の文ノードのユニオン型
export type ModuleStatementNode =
    | ModuleVariableDeclarationNode
    | LocalFunctionDeclarationNode
    | ModuleDeclarationNode
    | EndModuleNode
    ;

// 4. 具体的なASTノードのインターフェース定義



// プログラムのルートノード
export interface ProgramNode extends ASTNode {
    kind: 'Program';
    statements: StatementNode[];
}

// --- リテラルノード ---

// 数値
export interface NumberLiteralNode extends ASTNode {
    kind: 'NumberLiteral';
    value: number | string;
    rawText?: string;
}

// 文字列("")
export interface StringLiteralNode extends ASTNode {
    kind: 'StringLiteral';
    value: string;
    rawText?: string;
}

// 文字列('')
export interface CharLiteralNode extends ASTNode {
    kind: 'CharLiteral';
    value: string;
    rawText?: string;
}

// 分散表現多項式リテラル (e.g., <<1,2,3:4>>)
export interface DistributedPolynomialLiteralNode extends ASTNode {
    kind: 'DistributedPolynomialLiteral';
    terms: number[];
    modulus?: number;
}


// --- 識別子ノード ---

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

// --- 演算子ノード ---

// 二項演算 (例: +, -, *, /, %, ==, !=, &&, ||, @==, @&& など)
export interface BinaryOperationNode extends ASTNode {
    kind: 'BinaryOperation';
    operator: string;
    left: ExpressionNode;
    right: ExpressionNode;
}

// 単項演算 (例: -, !)
export interface UnaryOperationNode extends ASTNode {
    kind: 'UnaryOperation';
    operator: string;
    operand: ExpressionNode;
}

// べき乗演算
export interface PowerOperationNode extends ASTNode {
    kind: 'PowerOperation';
    base: ExpressionNode;
    exponent: ExpressionNode;
}

// 三項演算子
export interface TernaryOperationNode extends ASTNode {
    kind: 'TernaryOperation';
    condition: ExpressionNode;
    consequence: ExpressionNode; // 真の場合の式
    alternative: ExpressionNode; // 偽の場合の式
}

// --- アクセスノード ---

// 添字アクセス (例: A[0], B[i][j])
export interface IndexAccessNode extends ASTNode {
    kind: 'IndexAccess';
    base: ExpressionNode;
    indices: ExpressionNode[];
}

// 関数呼び出し
export interface FunctionCallNode extends ASTNode {
    kind: 'FunctionCall';
    callee: IdentifierNode;  // ::や.はここで対応
    args: ExpressionNode[];
}

// 括弧で囲まれた式
export interface ParenExpressionNode extends ASTNode {
    kind: 'ParenExpression';
    expression: ExpressionNode;
}

// --- コレクションリテラルノード ---
export interface ListLiteralNode extends ASTNode {
    kind: 'ListLiteral';
    elements: ExpressionNode[];
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

// 代入文
export interface AssignmentStatementNode extends ASTNode {
    kind: 'AssignmentStatement';
    left: ExpressionNode; // 代入される左辺
    operator: string;
    right: ExpressionNode; // 代入する右辺
}

// 構造体メンバーへの代入
export interface StructMemberAssignmentNode extends ASTNode {
    kind: 'StructMemberAssignment';
    base: IdentifierNode; // 構造体変数名
    members: IdentifierNode[]; // a->bのa,b
    operator: string;
    right: ExpressionNode;
}

// リスト要素一括代入
export interface ListDestructuringAssignmentNode extends ASTNode {
    kind: 'ListDestructuringAssignment';
    targets: IdentifierNode[]; // 代入対象の変数リスト
    operator: string;
    right: ExpressionNode; // 代入する右辺
}

// def文
export interface DefinitionStatementNode extends ASTNode {
    kind: 'FunctionDefinition';
    name: IdentifierNode; // 関数名
    parameters: IdentifierNode[]; // 仮引数のリスト
    body: StatementNode; // 関数本体のブロック
}

// If文
export interface IfStatementNode extends ASTNode {
    kind: 'IfStatement';
    condition: ExpressionNode;
    consequence: StatementNode;
    alternative?: StatementNode;
}

// For文
export interface ForStatementNode extends ASTNode {
    kind: 'ForStatement';
    initializers: (AssignmentStatementNode | StructMemberAssignmentNode | ListDestructuringAssignmentNode)[]; // 初期化ステートメントのリスト
    conditions: ExpressionNode[]; // 条件式のリスト
    updaters: ExpressionNode[]; // 更新式のリスト
    body: StatementNode; // ループ本体のブロック
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
    name: IdentifierNode; // 構造体名
    members: IdentifierNode[]; // メンバー名のリスト
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

