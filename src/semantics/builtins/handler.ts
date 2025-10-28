
import { EvaluationResult } from '../types';
import { FunctionCallNode } from '../../core/ast/asirAst';
import { Validator } from '../validator';

/**
 * 組み込み関数を処理するハンドラーの共通インターフェース
 * @param validator Validatorのインスタンス。診断情報の追加やシンボルテーブルへのアクセスに使う。
 * @param node 現在の関数呼び出しのASTノード。
 * @param argResults visit済みの引数のEvaluationResultの配列。
 * @returns 関数の評価結果
 */
export type BuiltinFunctionHandler = (
    validator: Validator,
    node: FunctionCallNode,
    argResults: EvaluationResult[]
) => EvaluationResult;
