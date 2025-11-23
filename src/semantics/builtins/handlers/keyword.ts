import { BuiltinFunctionHandler } from '../types.js';
import { p_type, ConstantValue, AsirType, FunctionAsirType, TupleType } from '../../types.js';
import { DiagnosticSeverity } from '../../../utils/diagnostics.js';
import { isTypeCompatible } from '../../utils/typeSystem.js';
import { typeToString } from '../../utils/typeFormatter.js';
import { BUILTIN_SIGNATURES } from '../../../data/builtinSignatures.js';
import { PARI_SIGNATURES } from '../../../data/pariSignatures.js'; 

export const handleCar: BuiltinFunctionHandler = (validator, node, argResults) => {
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

export const handleCdr: BuiltinFunctionHandler = (validator, node, argResults) => {
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
        validator.addDiagnostic(node.args[0], `cdr 関数の引数はリストでなければなりません。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }
}

export const handleMap: BuiltinFunctionHandler = (validator, node, argResults) => {
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
        validator.addDiagnostic(funcArgNode, `map にこの関数を渡した場合の型推論は、まだサポートされていません。`, DiagnosticSeverity.Information);
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

export const handlePari: BuiltinFunctionHandler = (validator, node, argResults) => {
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
        validator.addDiagnostic(funcNameNode, `pari 関数 '${pariFuncName}' の型定義が見つかりません。`, DiagnosticSeverity.Information);
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

export const handleNewstruct: BuiltinFunctionHandler = (validator, node, argResults) => {
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