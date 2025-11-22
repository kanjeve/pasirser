import { AsirType, PrimitiveAsirTypeName, PrimitiveAsirType, TYPE_METADATA, PolynomialAsirType, p_type, rat_type } from '../types';
import { isSubtypeOf, getCommonSupertype, isPolynomialType, isTypeCompatible } from './typeSystem';


export function getWiderNumericType(type1: PrimitiveAsirTypeName, type2: PrimitiveAsirTypeName): PrimitiveAsirTypeName {
    const precedence: PrimitiveAsirTypeName[] = ['integer', 'rational', 'float', 'alg', 'bigfloat', 'complex', 'fsmall', 'flarge', 'fchar2', 'fcharp', 'fcharpsmall',  'fchardefp',  'dalg', 'number'];
    const index1 = precedence.indexOf(type1);
    const index2 = precedence.indexOf(type2);
    return precedence[Math.max(index1, index2)];
}

export function checkNumericTypeMismatch(type1: AsirType, type2: AsirType): string | null {
    if (type1.kind === 'primitive' && isSubtypeOf(type1.name, 'number') && type2.kind === 'primitive' && isSubtypeOf(type2.name, 'number')) {
        if (type1.name !== type2.name) {
            return `異なる数値型 '${type1.name}' と '${type2.name}'`;
        }
    }
    else if (isPolynomialType(type1) && isPolynomialType(type2) && type1.kind === type2.kind) {
        const coeffWarning = checkNumericTypeMismatch(type1.coefficientType, type2.coefficientType);
        if (coeffWarning) { return `異なる係数型を持つ多項式 (${coeffWarning})`; }
    }
    else if ((type1.kind === 'list' && type2.kind === 'list') || (type1.kind === 'vector' && type2.kind === 'vector') || (type1.kind === 'matrix' && type2.kind === 'matrix')) {
        const elementWarning = checkNumericTypeMismatch(type1.elementType, type2.elementType);
        if (elementWarning) { return `異なる要素型を持つ ${type1.kind} (${elementWarning})`; }
    }
    else if (type1.kind === 'tuple' && type2.kind === 'tuple') {
        if (type1.elements.length === type2.elements.length) {
            for (let i=0; i < type1.elements.length; i++) {
                const elementWarning = checkNumericTypeMismatch(type1.elements[i].type, type2.elements[i].type);
                if (elementWarning) {
                    return `${i+1} 番目の要素で型が異なるリスト (${elementWarning})`;
                }
            }
        }
    }
    else if (type1.kind === 'struct' && type2.kind === 'struct' && type1.name === type2.name) {
        for (const [key, type1Member] of type1.members.entries()) {
            const type2Member = type2.members.get(key);
            if (type2Member) {
                const memberWarning = checkNumericTypeMismatch(type1Member, type2Member);
                if (memberWarning) {
                    return `メンバー '${key}' の型が異なる構造体 '${type1.name}' (${memberWarning})`;
                }
            }
        }
    }
    return null;
}

export function getBinaryOperationResultType(leftType: AsirType, rightType: AsirType, operator: string): AsirType {
    if ((leftType.kind === 'primitive' && leftType.name === 'parameter') || (rightType.kind === 'primitive' && rightType.name === 'parameter')) {
        return p_type('parameter');
    }

    // QE系のロジック
    if (operator.startsWith('@')) {
        return p_type('qeformula'); 
    }

    if (leftType.kind === 'primitive' && isSubtypeOf(leftType.name, 'pp')) {
        return{ kind: 'standard_polynomial', coefficientType: p_type('integer') };
    }
    if (rightType.kind === 'primitive' && isSubtypeOf(rightType.name, 'pp')) {
        return { kind: 'standard_polynomial', coefficientType: p_type('integer') };
    }

    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            // matrix(後で考える)
            if (leftType.kind === 'matrix' && rightType.kind === 'matrix') {
                const elementResultType = getCommonSupertype([leftType.elementType, rightType.elementType]);
                return { kind: 'matrix', elementType: elementResultType };
            }

            const isLeftPoly = isPolynomialType(leftType);
            const isRightPoly = isPolynomialType(rightType);
            const isLeftNumeric = leftType.kind === 'primitive' && isSubtypeOf(leftType.name, 'number');
            const isRightNumeric = rightType.kind === 'primitive' && isSubtypeOf(rightType.name, 'number');
            const isLeftParametoric = leftType.kind === 'primitive' && leftType.name === 'parameter';
            const isRightParametoric = rightType.kind === 'primitive' && rightType.name === 'parameter';

            // --- 多項式 ---
            if ((leftType.kind === 'dmod_polynomial' && rightType.kind !== 'dmod_polynomial') ||
                (leftType.kind !== 'dmod_polynomial' && rightType.kind === 'dmod_polynomial') ||
                (leftType.kind === 'non_commutative_polynomial' && rightType.kind !== 'non_commutative_polynomial') ||
                (leftType.kind !== 'non_commutative_polynomial' && rightType.kind === 'non_commutative_polynomial')) { 
                return p_type('any');
            }

            if (isLeftPoly && isRightPoly) {
                const poly1 = leftType as PolynomialAsirType;
                const poly2 = rightType as PolynomialAsirType;
                const resultCoeffType = getCommonSupertype([poly1.coefficientType, poly2.coefficientType]);
                if (resultCoeffType.kind === 'union') {
                    return p_type('any');
                }
                const polyPrecedence = ['standard_polynomial', 'rational_function', 'distributed_polynomial'];
                const kind1_idx = polyPrecedence.indexOf(poly1.kind);
                const kind2_idx = polyPrecedence.indexOf(poly2.kind);
                const resultKind = kind1_idx > kind2_idx ? poly1.kind : poly2.kind;
                if (operator === '/' ) {
                    const allowedKinds = ['standard_polynomial', 'rational_function'];
                    if (allowedKinds.includes(poly1.kind) && allowedKinds.includes(poly2.kind)) {
                        return { kind: 'rational_function', coefficientType: resultCoeffType };
                    } else {
                        return p_type('any');
                    }
                }
                if (['+', '-', '*'].includes(operator)) { return { kind: resultKind, coefficientType: resultCoeffType } as PolynomialAsirType; }
            }

            if ((isLeftPoly && isRightNumeric) || (isLeftNumeric && isRightPoly)) {
                const polyType = (isLeftPoly ? leftType : rightType) as PolynomialAsirType;
                const numericType = isLeftNumeric ? leftType : rightType;
                const resultCoeffType = getCommonSupertype([polyType.coefficientType, numericType]);
                /*
                if (resultCoeffType.kind === 'union') {
                    return p_type('any');
                }
                */
                return { kind: polyType.kind, coefficientType: resultCoeffType } as PolynomialAsirType;
            }

            // --- プリミティブ ---
            if (leftType.kind === 'primitive' && rightType.kind === 'primitive') {
                const leftMeta = TYPE_METADATA.get(leftType.name);
                const rightMeta = TYPE_METADATA.get(rightType.name);

                if (!leftMeta || !rightMeta) {
                    return p_type('any');
                }

                    if (leftMeta.category === 'general_numeric' && rightMeta.category === 'general_numeric') {
                    const resultTempType = getWiderNumericType(leftType.name, rightType.name);
                    return p_type(resultTempType);
                }
                if (leftType.name === 'rational' && rightMeta.category === 'finite_field') {
                    return rightType;
                }
                if (leftMeta.category === 'finite_field' && rightType.name === 'rational') {
                    return leftType;
                }
                if (leftMeta.category === 'finite_field' && rightMeta.category === 'finite_field') {
                    if (leftType.name === rightType.name) { return leftType; }
                }
                if (leftMeta.category === 'algebric_numeric' && rightMeta.category === 'general_numeric') {
                    if (rightType.name === 'complex') { return rightType; } else if (rightType.name === 'rational') { return leftType }
                }
                if (leftMeta.category === 'general_numeric' && rightMeta.category === 'algebric_numeric') {
                    if (leftType.name === 'complex') { return leftType; } else if (leftType.name === 'rational') { return rightType; }
                }
                if (leftMeta.category === 'algebric_numeric' && rightMeta.category === 'algebric_numeric') {
                    if (leftType.name === rightType.name) { return leftType; }
                }
                if (operator === '+' && leftMeta.category === 'string' && rightMeta.category === 'string') {
                    return p_type('string');
                }
            }
            break;
        
        case '%':
            const isRightInt = rightType.kind === 'primitive' && rightType.name === 'integer';
            if (!isRightInt) {
                return p_type('any');
            }
            const isLeftInt = leftType.kind === 'primitive' && leftType.name === 'integer';
            const isLeftPolyOfInt = 
                leftType.kind === 'standard_polynomial' &&
                leftType.coefficientType.kind === 'primitive' &&
                leftType.coefficientType.name === 'integer';
            if (isLeftInt || isLeftPolyOfInt) {
                return leftType;
            } else {
                return p_type('any');
            }

        case '==':
        case '!=':
        case '<':
        case '>':
        case '<=':
        case '>=':
        case '&&':
        case '||':
            return p_type('integer');
    }
    return p_type('any');
}
