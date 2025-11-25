import { EvaluationResult } from '../types';
import { SymbolTable } from '../symbolTable';
import { DiagnosticSeverity, Diagnostic } from '../../utils/diagnostics';
import * as ast from '../../core/ast/asirAst';

export interface ValidatorInterface {
    symbolTable: SymbolTable;
    addDiagnostic(node: ast.ASTNode, message: string, severity: DiagnosticSeverity): void;
    effectiveCwd: string;
    importedFiles: Set<string>;
    loadPaths: string[];
    inclusionStack: string[];
    visit(node: ast.ASTNode): EvaluationResult | any;
    diagnostics: Diagnostic[];
    currentFilePath: string | null;
    isHeaderMode: boolean;
    isReachable: boolean;
    isProgramTerminated: boolean;
}

/**
 * 組み込み関数を処理するハンドラーの共通インターフェース
 * @param validator Validatorのインスタンス。診断情報の追加やシンボルテーブルへのアクセスに使う。
 * @param node 現在の関数呼び出しのASTノード。
 * @param argResults visit済みの引数のEvaluationResultの配列。
 * @returns 関数の評価結果
 */
export type BuiltinFunctionHandler = (
    validator: ValidatorInterface,
    node: ast.FunctionCallNode,
    argResults: EvaluationResult[]
) => EvaluationResult;
