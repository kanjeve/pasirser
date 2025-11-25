import { EvaluationResult, l_type, p_type } from '../types';
import { DiagnosticSeverity } from '../../utils/diagnostics';
import { FunctionCallNode } from '../../core/ast/asirAst';
import { ValidatorInterface } from './types'

/**
 * ctrl() のサブコマンドを処理するハンドラーの共通インターフェース
 * @param validator Validatorのインスタンス
 * @param node ctrl() の関数呼び出し全体のASTノード
 * @param argResult ctrl() の第2引数を評価した結果
 */
export type CtrlSubHandler = (
    validator: ValidatorInterface,
    node: FunctionCallNode,
    argResult: EvaluationResult[]
) => EvaluationResult;

const handleLoadpath: CtrlSubHandler = (validator, node, argResults) => {
    // 引数が1つの場合
    if (argResults.length === 1) {
        return {
            type: l_type(p_type('string')),
            constantValue: validator.loadPaths
        };
    }
    // 引数が2つの場合
    if (argResults.length === 2) {
        const newPathsResult = argResults[1];
        if (Array.isArray(newPathsResult.constantValue)) {
            // すべての要素が文字列であることを確認
            if (newPathsResult.constantValue.every(p => typeof p === 'string')) {
                validator.loadPaths = newPathsResult.constantValue as string[];
            } else {
                validator.addDiagnostic(node.args[1], `ctrl("loadpath", ...)の第2引数のリストには、文字列以外の定数が含まれています。`, DiagnosticSeverity.Error);
            }
        } else {
            validator.addDiagnostic(node.args[1], `ctrl("loadpath", ...) の第2引数の値が追跡できません。`, DiagnosticSeverity.Hint);
        }
        return { type: p_type('integer'), constantValue: 0 };
    }
    validator.addDiagnostic(node, `ctrl("loadpath", ...) の引数の数が正しくありません。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};

export const ctrlSubHandlers = new Map<string, CtrlSubHandler>([
    ['loadpath', handleLoadpath],
]);

export const ctrlCommandNames = Array.from(ctrlSubHandlers.keys());
