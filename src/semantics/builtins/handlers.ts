import * as fs from 'fs';
import * as path from 'path';
import * as ast from '../../core/ast/asirAst.js';
import { BuiltinFunctionHandler } from './handler';
import { EvaluationResult, p_type, u_type, ConstantValue, TupleType, TupleElement,  AsirType, l_type, ListAsirType, VectorAsirType, UnionType, FunctionAsirType } from '../types';
import { DiagnosticSeverity } from '../../utils/diagnostics';
import { parseAndBuildAST } from '../../core/parser/parserUtils';
import { Validator } from '../validator.js';
import { isTypeCompatible, getCommonSupertype } from '../utils/typeSystem.js';
import { typeToString } from '../utils/typeFormatter.js';
import { BUILTIN_SIGNATURES } from '../../data/builtinSignatures';
import { ctrlSubHandlers } from './ctrl_handlers';
import { PARI_SIGNATURES } from '../../data/pariSignatures'; 

// 各ハンドラーは、Validatorのインスタンス、ASTノード、評価済みの引数を受け取る

// 関数を引数に取る関数
const handleMap: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length < 2) {
        validator.addDiagnostic(node, `map は少なくとも2つの引数を取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const funcArgNode = node.args[0];
    let resolvedFuncType: AsirType | undefined;
    if (funcArgNode.kind === 'Indeterminate') {
        const funcNameToFind = funcArgNode.name;
        const symbol = validator.symbolTable.currentScope.lookup(funcNameToFind);
        if (symbol) {
            resolvedFuncType = symbol.type;
        } else if (BUILTIN_SIGNATURES.has(funcNameToFind)) {
            resolvedFuncType = BUILTIN_SIGNATURES.get(funcNameToFind);
        }
    }
    if (resolvedFuncType && resolvedFuncType.kind === 'union') {
        const funcPart = resolvedFuncType.types.find(t => t.kind === 'function' || t.kind === 'overloaded_function');
        if (funcPart) { resolvedFuncType = funcPart; }
    }
    if (!resolvedFuncType || (resolvedFuncType.kind !== 'function' && resolvedFuncType.kind !== 'overloaded_function')) {
        validator.addDiagnostic(funcArgNode, `map の第一引数は関数である必要があります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    if (resolvedFuncType.kind === 'overloaded_function') {
        validator.addDiagnostic(funcArgNode, `map にこの関数を渡した場合の型推論は、まだサポートされていません。`, DiagnosticSeverity.Hint);
        return { type: { kind: 'list', elementType: p_type('any')}};
    }

    const mappedFunctionType = resolvedFuncType as FunctionAsirType; // Assuming it's a single function type after resolution
    const containerResult = argResults[1];
    const containerType = containerResult.type;
    const fixedArgTypes = argResults.slice(2).map(r => r.type);

    let newConstantValue: ConstantValue | undefined = undefined;
    // Constant value propagation for map is complex, skip for now.

    // Helper to apply the mapped function to an element type
    const applyFunctionToElementType = (elementType: AsirType): AsirType => {
        const callArgTypes = [elementType, ...fixedArgTypes];
        
        // Check if the number of arguments matches
        if (mappedFunctionType.restParameter) {
            if (callArgTypes.length < mappedFunctionType.parameters.length) {
                validator.addDiagnostic(node, `map の関数引数の数が足りません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        } else {
            if (callArgTypes.length !== mappedFunctionType.parameters.length) {
                validator.addDiagnostic(node, `map の関数引数の数が一致しません。`, DiagnosticSeverity.Error);
                return p_type('any');
            }
        }

        // Check type compatibility for fixed parameters
        const fixedArgCount = Math.min(callArgTypes.length, mappedFunctionType.parameters.length);
        for (let i = 0; i < fixedArgCount; i++) {
            if (!isTypeCompatible(callArgTypes[i], mappedFunctionType.parameters[i].type)) {
                validator.addDiagnostic(
                    node,
                    `map の関数引数 ${i + 1} の型が一致しません。型 '${typeToString(mappedFunctionType.parameters[i].type)}' が必要ですが、型 '${typeToString(callArgTypes[i])}' が指定されました。`,
                    DiagnosticSeverity.Error
                );
                return p_type('any');
            }
        }

        // Check type compatibility for rest parameter
        if (mappedFunctionType.restParameter) {
            for (let i = fixedArgCount; i < callArgTypes.length; i++) {
                if (!isTypeCompatible(callArgTypes[i], mappedFunctionType.restParameter.type)) {
                    validator.addDiagnostic(
                        node,
                        `map の関数引数 ${i + 1} の型が一致しません。型 '${typeToString(mappedFunctionType.restParameter.type)}' が必要ですが、型 '${typeToString(callArgTypes[i])}' が指定されました。`,
                        DiagnosticSeverity.Error
                    );
                    return p_type('any');
                }
            }
        }

        return mappedFunctionType.returnType;
    };

    switch (containerType.kind) {
        case 'list':
            const newElementTypeList = applyFunctionToElementType(containerType.elementType);
            return { type: { kind: 'list', elementType: newElementTypeList }, constantValue: newConstantValue };
        case 'vector':
            const newElementTypeVector = applyFunctionToElementType(containerType.elementType);
            return { type: { kind: 'vector', elementType: newElementTypeVector }, constantValue: newConstantValue };
        case 'matrix':
            const newElementTypeMatrix = applyFunctionToElementType(containerType.elementType);
            return { type: { kind: 'matrix', elementType: newElementTypeMatrix }, constantValue: newConstantValue };
        case 'tuple':
            const newElementsTuple = containerType.elements.map(element => ({
                ...element,
                type: applyFunctionToElementType(element.type)
            }));
            return { type: { kind: 'tuple', elements: newElementsTuple }, constantValue: newConstantValue };
        case 'primitive':
            if (containerType.name === 'any' || containerType.name === 'parameter') {
                // If the container type is unknown, the result is also unknown.
                return { type: p_type('any') };
            }
            break; // Fall through to default error
    }

    validator.addDiagnostic(node.args[1], `map の第二引数はリスト、ベクトル、行列、またはタプルである必要があります。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};

const handlePari: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length < 2) {
        validator.addDiagnostic(node, `pari 関数には、少なくとも2つの引数が必要です。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const funcNameNode = node.args[0];
    
    const funcNameResult = argResults[0];

    if (funcNameNode.kind !== 'Indeterminate') {
        validator.addDiagnostic(funcNameNode, `pari 関数の第一引数は、関数名である必要があります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') }
    }
    const pariFuncName = funcNameNode.name;
    const pariFuncSignature = PARI_SIGNATURES.get(pariFuncName);

    if (!pariFuncSignature) {
        validator.addDiagnostic(funcNameNode, `pari 関数 '${pariFuncName}' の型定義が見つかりません。`, DiagnosticSeverity.Hint);
        return { type: p_type('any') };
    }

    const pariArgs = argResults.slice(1);
    const pariArgTypes = pariArgs.map(r => r.type);
    const expectedParams = pariFuncSignature.parameters;
    if (pariArgTypes.length !== expectedParams.length) {
        validator.addDiagnostic(node, `pari 関数 '${pariFuncName}' の引数の数が一致しません。 ${expectedParams.length} 個が必要ですが、${pariArgTypes.length} 個が指定されました。`,DiagnosticSeverity.Error);
    }
    
    const fixedArgCount = Math.min(pariArgTypes.length, expectedParams.length);
    for (let i = 0; i < fixedArgCount; i++) {
        if (!isTypeCompatible(pariArgTypes[i], expectedParams[i].type)) {
            validator.addDiagnostic(node, `pari 関数 '${pariFuncName}' の引数 ${i+1} の型が一致しません。型 '${typeToString(expectedParams[i].type)}' が必要ですが、型 '${typeToString(pariArgTypes[i])}' が指定されました。`,DiagnosticSeverity.Error);
        }
    }
    return { type: pariFuncSignature.returnType };
};

// パスに関する関数
const handleChdir: BuiltinFunctionHandler = (validator, node, argResults) => {
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
const handleLoadOrImport: BuiltinFunctionHandler = (validator, node, argResults) => {
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
            validator.addDiagnostic(node, `ファイルは既にimport済みです: ${filePathArgument}`, DiagnosticSeverity.Hint);
            return { type: p_type('integer'), constantValue: 0 };
        }
        validator.importedFiles.add(resolvedPath);
    }

    if (validator.inclusionStack.includes(resolvedPath)) {
        validator.addDiagnostic(node, `循環参照が検出されました: ${validator.inclusionStack.join(' -> ')} -> ${resolvedPath}`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: 0 };
    }

    let loadedCode: string;
    try {
        loadedCode = fs.readFileSync(resolvedPath, 'utf-8');
    } catch (e) {
        validator.addDiagnostic(node.args[0], `ファイルを読み込めません: ${resolvedPath}`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: 0 };
    }

    const { ast: loadedAst, diagnostics: loadDiagnostics } = parseAndBuildAST(loadedCode, resolvedPath);
    validator.diagnostics.push(...loadDiagnostics);

    if (loadedAst) {
        const previousFilePath = validator.currentFilePath;
        validator.currentFilePath = resolvedPath;
        validator.inclusionStack.push(resolvedPath);
        try {
            validator.visit(loadedAst);
        } finally {
            validator.inclusionStack.pop();
            validator.currentFilePath = previousFilePath;
        }
    }
    
    return { type: p_type('integer'), constantValue: 1 };
};


// リスト操作系
const handleCons: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 2) {
        validator.addDiagnostic(node, `cons()関数は引数を2つ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any',), constantValue: undefined };
    }

    const itemResult = argResults[0];
    const listResult = argResults[1];
    const listType = listResult.type;

    let newConstantValue: ConstantValue | undefined = undefined;

    if (itemResult.constantValue !== undefined && Array.isArray(listResult.constantValue)) {
        newConstantValue = [itemResult.constantValue as (string | number), ...listResult.constantValue];
    }

    const isListLikeOrUnknown = (type: AsirType): boolean => {
        return type.kind === 'tuple' || type.kind === 'list' || (type.kind === 'primitive' && (type.name === 'parameter' || type.name === 'any'));
    };


    if (isListLikeOrUnknown(listType)) {
        if (listType.kind === 'primitive' && (listType.name === 'parameter' || listType.name === 'any')) {
            return { type: l_type(getCommonSupertype([itemResult.type, p_type('any')])), constantValue: newConstantValue };
        }

        if (listType.kind === 'tuple') {
            const newElements = [{ type: itemResult.type }, ...listType.elements];
            return { type: { kind: 'tuple', elements: newElements }, constantValue: newConstantValue };
        } else if (listType.kind === 'list') {
            const commonElementType = getCommonSupertype([itemResult.type, listType.elementType]);
            return { type: { kind: 'list', elementType: commonElementType }, constantValue: newConstantValue };
        }
    }

    validator.addDiagnostic(node.args[1], `cons() の第二引数はリストである必要があります。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};

const handleCar: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `car 関数は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const argResult = argResults[0];
    const argType = argResult.type;
    if (argType.kind === 'tuple') {
        let resultType: AsirType;
        if (argType.elements.length > 0) {
            resultType = argType.elements[0].type;
        } else {
            resultType = { kind: 'tuple', elements: [] };
        }
        let constantValue: ConstantValue | undefined = undefined;
        if (Array.isArray(argResult.constantValue) && argResult.constantValue.length > 0) {
            constantValue = argResult.constantValue[0] ?? undefined;
        }
        return { type: resultType, constantValue }; 
    } else if (argType.kind === 'list') {
        return { type: argType.elementType };
    } else {
        validator.addDiagnostic(node.args[0], `car 関数の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
};

const handleCdr: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `cdr 関数は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const argResult = argResults[0];
    const argType = argResult.type;

    if (argType.kind === 'tuple') {
        const resultElements = (argType.elements.length > 1) ? argType.elements.slice(1) : [];
        const resultType: TupleType = { kind: 'tuple', elements: resultElements };

        let constantValue: ConstantValue | undefined = undefined;
        if (Array.isArray(argResult.constantValue) && argResult.constantValue.length > 1) {
            constantValue = argResult.constantValue.slice(1);
        } else if (Array.isArray(argResult.constantValue)) {
            constantValue = [];
        }
        return { type: resultType, constantValue };
    } else if (argType.kind === 'list') {
        return { type: argType };
    } else {
        validator.addDiagnostic(node.args[0], `cdr 関数の日キスはリストでなければなりません。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
}

const handleAppend: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 2) {
        validator.addDiagnostic(node, `append は引数を2つ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const list1Result = argResults[0];
    const list2Result = argResults[1];
    const list1Type = list1Result.type;
    const list2Type = list2Result.type;

    let newConstantValue: ConstantValue | undefined = undefined;
    if (Array.isArray(list1Result.constantValue) && Array.isArray(list2Result.constantValue)) {
        newConstantValue = [...list1Result.constantValue, ...list2Result.constantValue];
    }

    const isList1Ok = list1Type.kind === 'list' || list1Type.kind === 'tuple' || (list1Type.kind === 'primitive' && (list1Type.name === 'parameter' || list1Type.name === 'any'));
    const isList2Ok = list2Type.kind === 'list' || list2Type.kind === 'tuple' || (list2Type.kind === 'primitive' && (list2Type.name === 'parameter' || list2Type.name === 'any'));

    if (isList1Ok && isList2Ok) {
        if ((list1Type.kind === 'list' || list1Type.kind === 'tuple') && (list2Type.kind === 'list' || list2Type.kind === 'tuple' )) {
            if (list1Type.kind === 'tuple' && list2Type.kind === 'tuple'){
                const newElements = list1Type.elements.concat(list2Type.elements);
                return { type: { kind: 'tuple', elements: newElements }, constantValue: newConstantValue };
            } else {
                const elem1Type = list1Type.kind === 'list' ? list1Type.elementType : getCommonSupertype(list1Type.elements.map(e => e.type));
                const elem2Type = list2Type.kind === 'list' ? list2Type.elementType : getCommonSupertype(list2Type.elements.map(e => e.type));
                return { type: { kind: 'list', elementType: getCommonSupertype([elem1Type, elem2Type]) }, constantValue: newConstantValue };
            }
        } else {
            return { type: l_type(p_type('any')), constantValue: newConstantValue };
        }
    } else {
        validator.addDiagnostic(node, `append の引数は両方ともリストでなければなりません。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
};

const handleReverse: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `reverse は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const argResult = argResults[0];
    const argType = argResult.type;

    let newConstantValue: ConstantValue | undefined = undefined;
    if (Array.isArray(argResult.constantValue)) {
        newConstantValue = [...argResult.constantValue].reverse();
    }

    if (argType.kind === 'tuple') {
        const reversedElements = [...argType.elements].reverse();
        return { type: { kind: 'tuple', elements: reversedElements }, constantValue: newConstantValue };
    } else if (argType.kind === 'list') {
        return { type: argType, constantValue: newConstantValue };
    } else {
        validator.addDiagnostic(node.args[0], `reverse の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
};

const handleLtov: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `ltov は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const argResult = argResults[0];
    const argType = argResult.type;

    let newConstantValue: ConstantValue | undefined = undefined;
    if (Array.isArray(argResult.constantValue)) {
        newConstantValue = [...argResult.constantValue]; // リストからベクトルへの変換では要素の順序は変わらない
    }

    let actualListType: ListAsirType | TupleType | undefined;
    if (argType.kind === 'union') {
        const findListOrTupleInUnion = (unionType: UnionType): ListAsirType | TupleType | undefined => {
            for (const type of unionType.types) {
                if (type.kind === 'list' || type.kind === 'tuple') {
                    return type as ListAsirType | TupleType;
                }
                if (type.kind === 'union') {
                    const nestedListOrTuple = findListOrTupleInUnion(type);
                    if (nestedListOrTuple) {
                        return nestedListOrTuple;
                    }
                }
            }
            return undefined;
        };
        actualListType = findListOrTupleInUnion(argType);
    } else if (argType.kind === 'list' || argType.kind === 'tuple') {
        actualListType = argType;
    }

    if (actualListType) {
        if (actualListType.kind === 'list') {
            return { type: { kind: 'vector', elementType: (actualListType as ListAsirType).elementType }, constantValue: newConstantValue };
        } else if (actualListType.kind === 'tuple') {
            const commonElementType = getCommonSupertype((actualListType as TupleType).elements.map(e => e.type));
            return { type: { kind: 'vector', elementType: commonElementType }, constantValue: newConstantValue };
        }
    }
    validator.addDiagnostic(node, `ltov の引数はリストまたはタプルでなければなりません。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};

// その他
const handleCtrl: BuiltinFunctionHandler = (validator, node, argResults) => {
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

const handleNewstruct: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `newstruct は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const argNode = node.args[0];
    if (argNode.kind === 'Indeterminate') {
        const structName = argNode.name;
        const typeSymbol = validator.symbolTable.currentScope.lookup(structName);
        if (typeSymbol && typeSymbol.type.kind === 'struct') {
            return { type: typeSymbol.type };
        }
    }
    validator.addDiagnostic(argNode,`newstruct の引数は定義済みの構造体名である必要があります。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};

const handleVtol: BuiltinFunctionHandler = (validator, node, argResults) => {
    console.log(`[DEBUG] handleVtol: argType=${typeToString(argResults[0].type)}`);
    if (argResults.length !== 1) {
        validator.addDiagnostic(node, `vtol は引数を1つだけ取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
    const argResult = argResults[0];
    const argType = argResult.type;

    let newConstantValue: ConstantValue | undefined = undefined;
    if (Array.isArray(argResult.constantValue)) {
        newConstantValue = [...argResult.constantValue]; // ベクトルからリストへの変換では要素の順序は変わらない
    }

    let actualVectorType: VectorAsirType | undefined;
    if (argType.kind === 'union') {
        const findVectorInUnion = (unionType: UnionType): VectorAsirType | undefined => {
            console.log(`[DEBUG] findVectorInUnion: unionType.types=${unionType.types.map(t => typeToString(t)).join(', ')}`);
            for (const type of unionType.types) {
                console.log(`[DEBUG] findVectorInUnion: Checking type:`, type);
                if (type.kind === 'vector') {
                    console.log(`[DEBUG] findVectorInUnion: Found vector: ${typeToString(type)}`);
                    return type as VectorAsirType;
                }
                if (type.kind === 'union') {
                    console.log(`[DEBUG] findVectorInUnion: Recursing into nested union: ${typeToString(type)}`);
                    const nestedVector = findVectorInUnion(type);
                    if (nestedVector) {
                        return nestedVector;
                    }
                }
            }
            return undefined;
        };
        actualVectorType = findVectorInUnion(argType);
    } else if (argType.kind === 'vector') {
        actualVectorType = argType;
    }

    if (actualVectorType) {
        return { type: { kind: 'list', elementType: (actualVectorType as VectorAsirType).elementType }, constantValue: newConstantValue };
    } else {
        validator.addDiagnostic(node, `vtol の引数はベクトルでなければなりません。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
};

function devalTypeTransform(this: Validator, inputType: AsirType, node: ast.ASTNode): AsirType {
    switch (inputType.kind) {
        case 'primitive':
            if (inputType.name === 'complex') {
                return p_type('complex');
            }
            if (['integer', 'rational', 'float', 'bigfloat', 'number'].includes(inputType.name)) {
                return p_type('float');
            }
            if (inputType.name === 'form') {
                return u_type([p_type('number'), p_type('form')]);
            }
            if (inputType.name === 'parameter') {
                return p_type('any'); // Changed from p_type('form')
            }
            this.addDiagnostic(node, `devalは型'${typeToString(inputType)}'を評価できません。`, DiagnosticSeverity.Error);
            return p_type('error');

        case 'standard_polynomial':
        case 'distributed_polynomial':
        case 'dmod_polynomial':
        case 'non_commutative_polynomial':
        case 'rational_function':
            const newCoeffType = devalTypeTransform.call(this, inputType.coefficientType, node);
            if (newCoeffType.kind === 'primitive' && newCoeffType.name === 'error') {
                return p_type('error');
            }
            return { ...inputType, coefficientType: newCoeffType };

        case 'union':
            const transformedTypes = inputType.types.map(t => devalTypeTransform.call(this, t, node));
            const validTypes = transformedTypes.filter(t => !(t.kind === 'primitive' && t.name === 'error'));
            if (validTypes.length === 0) {
                return p_type('error');
            }
            return getCommonSupertype(validTypes);
        
        case 'vector':
        case 'matrix':
        case 'list':
        case 'tuple':
            this.addDiagnostic(node, `devalはコンテナ型'${inputType.kind}'を直接評価できません。`, DiagnosticSeverity.Error);
            return p_type('error');

        default:
            this.addDiagnostic(node, `devalで未対応の型'${inputType.kind}'です。`, DiagnosticSeverity.Warning);
            return p_type('any');
    }
}

const handleDeval: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length === 0 || argResults.length > 2) {
        validator.addDiagnostic(node, `deval/eval は1つまたは2つの引数を取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }

    const inputType = argResults[0].type;
    const argNode = node.args[0];
    
    const resultType = devalTypeTransform.call(validator, inputType, argNode);

    return { type: resultType };
};

// 組み込み関数ハンドラーの登録簿
export const builtinHandlers = new Map<string, BuiltinFunctionHandler>([
    ['map', handleMap],
    ['pari', handlePari],
    ['load', handleLoadOrImport],
    ['import', handleLoadOrImport],
    ['chdir', handleChdir],
    ['ctrl', handleCtrl],
    ['cons', handleCons],
    ['car', handleCar],
    ['cdr', handleCdr],
    ['append', handleAppend],
    ['reverse', handleReverse],
    ['ltov', handleLtov],
    ['vtol', handleVtol],
    ['newstruct', handleNewstruct],
    ['deval', handleDeval],
    ['eval', handleDeval],
]);