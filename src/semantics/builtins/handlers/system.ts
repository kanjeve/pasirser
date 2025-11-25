import * as fs from 'fs';
import * as path from 'path';
import { BuiltinFunctionHandler, ValidatorInterface } from '../types.js';
import { p_type, l_type, } from '../../types.js';
import { DiagnosticSeverity } from '../../../utils/diagnostics.js';
import { parseAndBuildAST } from '../../../core/parser/parserUtils.js';
import { ctrlSubHandlers } from '../ctrl_handlers.js';
import { ASTCache } from '../../../analysis/astCache.js';

// パスに関する関数
export const handleChdir: BuiltinFunctionHandler = (validator: ValidatorInterface, node, argResults) => {
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `chdir 関数には、引数としてパスの文字列が1つだけ必要です。`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: -1 };
    }
    const pathArg = argResults[0];
    if (typeof pathArg.constantValue === 'string') {
        validator.effectiveCwd = path.resolve(validator.effectiveCwd, pathArg.constantValue);
    } else {
        validator.addDiagnostic(node.args[0], `chdirの引数は解決可能な定数文字列である必要があります。`, DiagnosticSeverity.Warning);
    }
    return { type: p_type('integer'), constantValue: 0 };
};

// ファイルを読む関数
export const handleLoadOrImport: BuiltinFunctionHandler = (validator: ValidatorInterface, node, argResults) => {
    // メモ: `load`におけるOS依存のパス解決（CWD対asir.exeのパス）は、ここでは処理しない。
    // 呼び出し元（例: VSCode拡張機能）が、環境に応じた正しい検索パスを
    // コンストラクタ引数 `loadPaths` 経由で提供する責務を負う。
    const funcName = node.callee.functionName.name;
    if (argResults.length !== 1 || argResults[0].type.kind !== 'primitive' || argResults[0].type.name !== 'string' || typeof argResults[0].constantValue !== 'string') {
        validator.addDiagnostic(node, `${funcName}()関数には、引数としてファイルパスの文字列が1つだけ必要です。`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: 0 };
    }

    const filePathArgument = argResults[0].constantValue as string;
    let resolvedPath: string | null = null;
    const searchPaths = [validator.effectiveCwd, ...validator.loadPaths];

    for (const dir of searchPaths) {
        const testPath = path.resolve(dir, filePathArgument);
        if (fs.existsSync(testPath)) {
            resolvedPath = testPath;
            break;
        }
    }

    if (!resolvedPath) {
        validator.addDiagnostic(node.args[0], `${funcName}するファイルが見つかりません: ${filePathArgument}`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: 0 };
    }

    if (funcName === 'import') {
        if (validator.importedFiles.has(resolvedPath)) {
            validator.addDiagnostic(node, `ファイルは既にimport済みです: ${filePathArgument}`, DiagnosticSeverity.Information);
            return { type: p_type('integer'), constantValue: 0 };
        }
        validator.importedFiles.add(resolvedPath);
    }

    if (validator.inclusionStack.includes(resolvedPath)) {
        validator.addDiagnostic(node, `循環参照が検出されました: ${validator.inclusionStack.join(' -> ')} -> ${resolvedPath}`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: 0 };
    }

    const { ast: loadedAst, diagnostics: loadDiagnostics } =  ASTCache.getInstance().getAST(resolvedPath);

    if (!validator.isHeaderMode) {
        validator.diagnostics.push(...loadDiagnostics);
    }

    if (loadedAst) {
        const previousFilePath = validator.currentFilePath;
        validator.currentFilePath = resolvedPath;
        validator.inclusionStack.push(resolvedPath);

        const previousMode = validator.isHeaderMode;
        validator.isHeaderMode = true;
        const previousReachable = validator.isReachable;
        validator.isReachable = true;
        const previousProgramTerminated = validator.isProgramTerminated;
        validator.isProgramTerminated = false;
        try {
            validator.visit(loadedAst);
        } finally {
            validator.isHeaderMode = previousMode;
            validator.inclusionStack.pop();
            validator.currentFilePath = previousFilePath;
            validator.isReachable = previousReachable;
            validator.isProgramTerminated = previousProgramTerminated;
        }
    }
    
    return { type: p_type('integer'), constantValue: 1 };
};

export const handleCtrl: BuiltinFunctionHandler = (validator: ValidatorInterface, node, argResults) => {
    if (argResults.length === 0) { return { type: l_type(l_type(p_type('any'))) } };

    const commandResult = argResults[0];
    if ( typeof commandResult.constantValue === 'string') {
        const commandName = commandResult.constantValue;
        if (ctrlSubHandlers.has(commandName)) {
            const subHandler = ctrlSubHandlers.get(commandName)!;
            return subHandler(validator, node, argResults);
        }
    }
    validator.addDiagnostic(node.args[0], `ctrl 関数の第1引数が解決できないか、サポートされていないコマンドです。`, DiagnosticSeverity.Warning);
    return { type: p_type('any') };
};