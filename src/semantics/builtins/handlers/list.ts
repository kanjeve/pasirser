import { BuiltinFunctionHandler } from '../types.js';
import { p_type, ConstantValue, TupleType,AsirType, l_type } from '../../types.js';
import { DiagnosticSeverity } from '../../../utils/diagnostics.js';
import { getCommonSupertype } from '../../utils/typeSystem.js';


export const handleCons: BuiltinFunctionHandler = (validator, node, argResults) => {
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
        // union チェック
        if (type.kind === 'union') {
            return type.types.some(t => isListLikeOrUnknown(t)); // 一つでもlistlikeならok
        }
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
        } else if (listType.kind === 'union') {
            // 厳密には計算しないでおく
            return { type: l_type(p_type('any')), constantValue: undefined };
        }
    }

    validator.addDiagnostic(node.args[1], `cons() の第二引数はリストである必要があります。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};

export const handleAppend: BuiltinFunctionHandler = (validator, node, argResults) => {
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

export const handleReverse: BuiltinFunctionHandler = (validator, node, argResults) => {
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