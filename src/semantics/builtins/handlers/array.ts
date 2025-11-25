import { BuiltinFunctionHandler } from '../types.js';
import { p_type, l_type, ConstantValue, TupleType, ListAsirType, VectorAsirType, UnionType, AsirType } from '../../types.js';
import { DiagnosticSeverity } from '../../../utils/diagnostics.js';
import { getCommonSupertype } from '../../utils/typeSystem.js';
import arg from 'arg';

// ----------------------------------------
// ベクトルとして扱えるか
export function isVectorLike(type: AsirType): boolean {
    if (type.kind === 'union') {
        return type.types.some(t => isVectorLike(t));
    }
    return type.kind === 'vector' || (type.kind === 'primitive' && (type.name === 'parameter' || type.name === 'any'));
}
// 行列として扱えるか
export function isMatrixLike(type: AsirType): boolean {
    if (type.kind === 'union') {
        return type.types.some(t => isMatrixLike(t));
    }
    return type.kind === 'matrix' || (type.kind === 'primitive' && (type.name === 'parameter' || type.name === 'any'));
}
// ----------------------------------------

export const handleLtov: BuiltinFunctionHandler = (validator, node, argResults) => {
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

export const handleVtol: BuiltinFunctionHandler = (validator, node, argResults) => {
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

    if (isVectorLike(argType)) {
        if (argType.kind === 'primitive' && (argType.name === 'parameter' || argType.name === 'any')) {
            return { type: l_type(p_type('any')), constantValue: undefined };
        } else if (argType.kind === 'union') {
            return { type: l_type(p_type('any')), constantValue: undefined };
        } else if (argType.kind === 'vector') {
            return { type: l_type(argType.elementType), constantValue: newConstantValue };
        }
    }
    
    validator.addDiagnostic(node, `vtol の引数はベクトルでなければなりません。`, DiagnosticSeverity.Error);
    return { type: p_type('any') };
};