import { AsirType, PrimitiveAsirTypeName, TYPE_METADATA, PrimitiveAsirType, UnionType, PolynomialAsirType, ListAsirType, VectorAsirType, MatrixAsirType, StructAsirType, TupleType, FunctionAsirType, OverloadedFunctionType, LiteralUnionType, p_type, ModuleAsirType, stdpoly_type, ncpoly_type, dpoly_type, rat_type, dpm_type, v_type, m_type, l_type } from '../types';
import { typeToString } from './typeFormatter';
import { getWiderNumericType } from './operatorLogic';

export function isSubtypeOf(subtypeName: PrimitiveAsirTypeName, supertypeName: PrimitiveAsirTypeName): boolean {
    if (subtypeName === supertypeName) { return true; }
    if (supertypeName === 'any') { return true; }
    let currentType: PrimitiveAsirTypeName | undefined = subtypeName;
    while (currentType) {
        currentType = TYPE_METADATA.get(currentType)?.parent;
        if (currentType === supertypeName) {
            return true;
        }
    }
    return false;
}

export function isPolynomialType(type: AsirType): type is PolynomialAsirType {
    return [
        'standard_polynomial',
        'distributed_polynomial',
        'dmod_polynomial',
        'non_commutative_polynomial',
        'rational_function'
    ].includes(type.kind);
}

export function areTypesDeeplyEqual(type1: AsirType, type2: AsirType): boolean {
    // 参照が同じなら等しい
    if (type1 === type2) return true;

    // どちらかがnull/undefinedなら、もう一方もそうでないと等しくない
    if (!type1 || !type2) return false;

    // kindが異なるなら等しくない
    if (type1.kind !== type2.kind) return false;

    // kindに応じて比較ロジックを分岐
    switch (type1.kind) {
        case 'primitive':
            return (type1 as PrimitiveAsirType).name === (type2 as PrimitiveAsirType).name;

        case 'list':
            return areTypesDeeplyEqual(
                (type1 as ListAsirType).elementType,
                (type2 as ListAsirType).elementType
            );

        case 'tuple':
            const tuple1 = type1 as TupleType;
            const tuple2 = type2 as TupleType;
            if (tuple1.elements.length !== tuple2.elements.length) return false;
            for (let i = 0; i < tuple1.elements.length; i++) {
                // Compare type of each element
                if (!areTypesDeeplyEqual(tuple1.elements[i].type, tuple2.elements[i].type)) return false;
                if (tuple1.elements[i].name !== tuple2.elements[i].name) return false; // 名前付き要素も比較
            }
            return true;

        case 'vector':
        case 'matrix':
            return areTypesDeeplyEqual(
                (type1 as VectorAsirType | MatrixAsirType).elementType,
                (type2 as VectorAsirType | MatrixAsirType).elementType
            );

        case 'function':
            const func1 = type1 as FunctionAsirType;
            const func2 = type2 as FunctionAsirType;
            if (func1.behavior !== func2.behavior) return false;
            if (!areTypesDeeplyEqual(func1.returnType, func2.returnType)) return false;
            if (func1.parameters.length !== func2.parameters.length) return false;
            for (let i = 0; i < func1.parameters.length; i++) {
                if (!areTypesDeeplyEqual(func1.parameters[i].type, func2.parameters[i].type)) return false;
                if (func1.parameters[i].name !== func2.parameters[i].name) return false;
            }
            // restParameterの比較
            if ((func1.restParameter && !func2.restParameter) || (!func1.restParameter && func2.restParameter)) return false;
            if (func1.restParameter && func2.restParameter) {
                if (!areTypesDeeplyEqual(func1.restParameter.type, func2.restParameter.type)) return false;
                if (func1.restParameter.name !== func2.restParameter.name) return false;
            }
            return true;

        case 'overloaded_function':
            const ovl1 = type1 as OverloadedFunctionType;
            const ovl2 = type2 as OverloadedFunctionType;
            if (ovl1.behavior !== ovl2.behavior) return false;
            if (ovl1.signatures.length !== ovl2.signatures.length) return false;
            // シグネチャの順序は重要ではないため、ソートして比較するか、Setで比較する
            // ここでは、typeToStringを使って文字列化しSetで比較する。
            // typeToStringも深さ比較してるわけではないので、厳密にはtypeToStringによる文字列が一致しないと等しくないと判断される。
            // よって、この方法は暫定的。
            const sig1Strings = new Set(ovl1.signatures.map(s => typeToString(s)));
            const sig2Strings = new Set(ovl2.signatures.map(s => typeToString(s)));
            if (sig1Strings.size !== sig2Strings.size) return false;
            for (const s of sig1Strings) {
                if (!sig2Strings.has(s)) return false;
            }
            return true;

        case 'struct':
            const struct1 = type1 as StructAsirType;
            const struct2 = type2 as StructAsirType;
            if (struct1.name !== struct2.name) return false;
            if (struct1.members.size !== struct2.members.size) return false;
            for (const [key, memberType1] of struct1.members.entries()) {
                const memberType2 = struct2.members.get(key);
                if (!memberType2 || !areTypesDeeplyEqual(memberType1, memberType2)) return false;
            }
            return true;

        case 'module':
            const module1 = type1 as ModuleAsirType;
            const module2 = type2 as ModuleAsirType;
            if (module1.name !== module2.name) return false;
            if (module1.members.size !== module2.members.size) return false;

            for (const [key, symbol1] of module1.members.entries()) {
                const symbol2 = module2.members.get(key);
                if (!symbol2 || !areTypesDeeplyEqual(symbol1.type, symbol2.type)) return false;
            }
            return true;

        case 'union':
            const union1 = type1 as UnionType;
            const union2 = type2 as UnionType;
            if (union1.types.length !== union2.types.length) return false;
            // Union型も順序が重要ではないため、Setを使って比較する。
            // ここでは typeToString を使って文字列化する。
            // より厳密には、Set<AsirType>で管理し、各要素のequalityをareTypesDeeplyEqualで比較すべき
            const union1Strings = new Set(union1.types.map(t => typeToString(t)));
            const union2Strings = new Set(union2.types.map(t => typeToString(t)));
            if (union1Strings.size !== union2Strings.size) return false;
            for (const s of union1Strings) {
                if (!union2Strings.has(s)) return false;
            }
            return true;


        case 'literal_union':
            const litUnion1 = type1 as LiteralUnionType;
            const litUnion2 = type2 as LiteralUnionType;
            if (litUnion1.values.length !== litUnion2.values.length) return false;
            const litUnion1Set = new Set(litUnion1.values);
            const litUnion2Set = new Set(litUnion2.values);
            if (litUnion1Set.size !== litUnion2Set.size) return false;
            for (const v of litUnion1Set) {
                if (!litUnion2Set.has(v)) return false;
            }
            return true;

        case 'standard_polynomial':
        case 'distributed_polynomial':
        case 'dmod_polynomial':
        case 'non_commutative_polynomial':
        case 'rational_function':
            const poly1 = type1 as PolynomialAsirType;
            const poly2 = type2 as PolynomialAsirType;
            if (poly1.kind !== poly2.kind) return false;
            return areTypesDeeplyEqual(poly1.coefficientType, poly2.coefficientType);

        default:
            // 未知の型、または比較ロジックが未実装の型
            return false;
    }
}

export function isTypeCompatible(sourceType: AsirType, targetType: AsirType): boolean {
    // R1: ターゲットとソースがanyなら何でも受け入れる
    if ((targetType.kind === 'primitive' && targetType.name === 'any') || (sourceType.kind === 'primitive' && sourceType.name === 'any')) {
        return true;
    }
    // R2: ターゲットとソースがparameterならほとんどの型に代入可能
    if ((targetType.kind === 'primitive' && targetType.name === 'parameter') || (sourceType.kind === 'primitive' && sourceType.name === 'parameter')) {
        return true;
    }
    // R3: ppは多項式の一種とみなす
    if (sourceType.kind === 'primitive' && (isSubtypeOf(sourceType.name, 'pp') || sourceType.name === 'indeterminate') && isPolynomialType(targetType)) {
        return true;
    }
    // R4: 多項式が期待される場所にnumberが来ることを許可
    if (isPolynomialType(targetType) && sourceType.kind === 'primitive' && isSubtypeOf(sourceType.name, 'number')) {
        return true;
    }
    // R4.1: rational_functionはstandard_polynomialと互換性がある
    if (sourceType.kind === 'rational_function' && targetType.kind === 'standard_polynomial') {
        return isTypeCompatible(sourceType.coefficientType, targetType.coefficientType);
    }
    // R4.2: standard_polynomialはrational_functionと互換性がある
    if (sourceType.kind === 'standard_polynomial' && targetType.kind === 'rational_function') {
        return isTypeCompatible(sourceType.coefficientType, targetType.coefficientType);
    }
    // R4.3: polynomial<integer>はpolynomial<finite_field_type>と互換性がある
    if (sourceType.kind === 'standard_polynomial' && sourceType.coefficientType.kind === 'primitive' && sourceType.coefficientType.name === 'integer' &&
        targetType.kind === 'standard_polynomial' && targetType.coefficientType.kind === 'primitive' &&
        ['fchar2', 'fcharp', 'fcharpsmall', 'fchardefp', 'fsmall', 'flarge'].includes(targetType.coefficientType.name)) {
        return true;
    }
    // R5: ターゲットかソースがunionなら、そのうちのどれか一つと互換性があればよい
    if (targetType.kind === 'union') {
        const result = targetType.types.some(one => isTypeCompatible(sourceType, one));
        return result;
    }
    if (sourceType.kind === 'union') {
        const result = sourceType.types.some(one => isTypeCompatible(one, targetType));
        return result;
    }
    // R6: primitive同士ならサブタイプ関係にあれば互換
    if (sourceType.kind === 'primitive' && targetType.kind === 'primitive') {
        const result = isSubtypeOf(sourceType.name, targetType.name);
        return result;
    }
    // R7: 多項式同士の互換性チェック
    if (isPolynomialType(sourceType) && isPolynomialType(targetType)) {
        if (sourceType.kind !== targetType.kind) {
            return false;
        }
        return isTypeCompatible(sourceType.coefficientType, targetType.coefficientType);
    }
    // R8: リストなどの互換性チェック
    if (sourceType.kind === 'list' && targetType.kind === 'list') {
        const result = isTypeCompatible(sourceType.elementType, targetType.elementType);
        return result;
    }
    if (sourceType.kind === 'vector' && targetType.kind === 'vector') {
        const result = isTypeCompatible(sourceType.elementType, targetType.elementType);
        return result;
    }
    if (sourceType.kind === 'matrix' && targetType.kind === 'matrix') {
        const result = isTypeCompatible(sourceType.elementType, targetType.elementType);
        return result;
    }
    if (sourceType.kind === 'struct' && targetType.kind === 'struct') {
        const result = sourceType.name ===targetType.name;
        return result;
    }
    // R9: タプル型同士の互換性チェック
    if (targetType.kind === 'tuple' && sourceType.kind === 'tuple') {
        if (sourceType.elements.length !== targetType.elements.length) { 
            return false; 
        }
        const result = sourceType.elements.every((sourceElm, i) => {
            const targetElm = targetType.elements[i];
            return isTypeCompatible(sourceElm.type, targetElm.type);
        });
        return result;
    }
    // R10: function同士の互換性チェック
    if (sourceType.kind === 'function' && targetType.kind === 'function') {
        if (sourceType.parameters.length !== targetType.parameters.length) {
            return false;
        }
        if (!isTypeCompatible(sourceType.returnType, targetType.returnType)) {
            return false;
        }
        return sourceType.parameters.every((sourceParam, i) => {
            const targetParam = targetType.parameters[i];
            return areTypesDeeplyEqual(sourceParam.type, targetParam.type);
        });
    }
    // R11: overloaded_functionを考える場合
    if (targetType.kind === 'overloaded_function') {
        if (sourceType.kind === 'function') {
            const result = targetType.signatures.some(sig => isTypeCompatible(sourceType, sig));
            return result;
        }
        if (sourceType.kind === 'overloaded_function') {
            const result = areTypesDeeplyEqual(sourceType, targetType);
            return result;
        }
    }
    if (sourceType.kind === 'overloaded_function' && targetType.kind === 'function') {
        const result = sourceType.signatures.some(sig => isTypeCompatible(sig, targetType));
        return result;
    }
    // R12: タプルはリストに代入可能
    if (sourceType.kind === 'tuple' && targetType.kind === 'list') {
        const result = sourceType.elements.every(sourceElm =>
            isTypeCompatible(sourceElm.type, targetType.elementType)
        );
        return result;
    }
    const result = areTypesDeeplyEqual(sourceType, targetType);
    return result;
}

export function getCommonSupertype(types: AsirType[]): AsirType {
    if (types.length === 0) { return p_type('any'); }
    const uniqueTypes: AsirType[] = [];
    let hasAnyOrParameter = false;
    for (const type of types) {
        if (type.kind === 'primitive' && (type.name === 'any' || type.name === 'parameter')) {
            hasAnyOrParameter = true;
            continue;
        }
        let found = false;
        for (const existingType of uniqueTypes) {
            if (areTypesDeeplyEqual(type, existingType)) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueTypes.push(type);
        }
    }
    if (hasAnyOrParameter && uniqueTypes.length > 0) {
        uniqueTypes.push(p_type('parameter'));
        return { kind: 'union', types: uniqueTypes };
    }
    if (hasAnyOrParameter) { return p_type('parameter'); }
    if (uniqueTypes.length === 0) { return p_type('any'); }
    if (uniqueTypes.length === 1) { return uniqueTypes[0]; }
    if (uniqueTypes.some(t => t.kind === 'primitive' && t.name === 'any')) { return p_type('any'); }

    const allNumeric = uniqueTypes.every(t => t.kind === 'primitive' && isSubtypeOf(t.name, 'number'));
    if (allNumeric) {
        let widerTypeName = (uniqueTypes[0] as PrimitiveAsirType).name ;
        for (let i=1; i < uniqueTypes.length; i++) {
            widerTypeName = getWiderNumericType(widerTypeName, (uniqueTypes[i] as PrimitiveAsirType).name);
        }
        return p_type(widerTypeName);
    }
    return { kind: 'union', types: uniqueTypes };
}


export function getTypeFromCode(code: number): AsirType | undefined {
    switch (code) {
        case 0: return p_type('integer'); // 0 
        case 1: return p_type('number'); // 数 (number) - general numeric type
        case 2: return stdpoly_type(p_type('any')); // 多項式 (standard_polynomial)
        case 3: return rat_type(p_type('any')); // 有理関数 (rational_function)
        case 4: return l_type(p_type('any')); // リスト (list or tuple) - using generic list for now
        case 5: return v_type(p_type('any')); // ベクトル (vector)
        case 6: return m_type(p_type('any')); // 行列 (matrix)
        case 7: return p_type('string'); // 文字列 (string)
        case 8: return { kind: 'struct', name: 'any', members: new Map() }; // 構造体 (struct) - generic struct
        case 9: return dpoly_type(p_type('any')); // 分散表現多項式 (distributed_polynomial)
        case 10: return p_type('usint'); // 符号付32bit整数 (usint)
        case 11: return p_type('error'); // エラーオブジェクト (error)
        case 12: return p_type('gf2mat'); // GF(2)上行列 (gf2mat)
        case 13: return p_type('mathcap'); // MATHCAP (mathcap)
        case 14: return p_type('qeformula'); // 一階述語論理式 (qeformula)
        case 15: return p_type('gfmmat'); // GF(M)上行列 (gfmmat)
        case 16: return p_type('bytearray'); // byte行列 (byteaaray)
        case 17: return p_type('quote'); // QUOTE (quote)
        case 18: return p_type('option'); // オプションリスト (option)
        case 19: return p_type('symbol'); // シンボル (symbol)
        case 20: return p_type('range'); // 変数範囲 (range)
        case 21: return p_type('textbuffer'); // テキストバッファ (textbuffer)
        case 22: return p_type('dpolyvector'); // 分散表現多項式ベクトル (dpolyvector)
        case 23: return p_type('quotearg'); // QUOTEノード (quotearg)
        case 24: return p_type('imatrix'); // 疎行列 (imatrix)
        case 25: return ncpoly_type(p_type('any')); // 非可換多項式 (non_commutative_polynomial)
        case 26: return dpm_type(p_type('any')); // 分散表現加群多項式 (dmod_polynomial)
        case -1: return p_type('void'); // VOID (void)
        default: return undefined;
    }
}

