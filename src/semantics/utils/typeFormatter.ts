import { AsirType, PrimitiveAsirType, ListAsirType, TupleType, VectorAsirType, ModuleAsirType, UnionType, LiteralUnionType, PolynomialAsirType, MatrixAsirType, FunctionAsirType, OverloadedFunctionType, StructDefinitionType } from '../types';

export function typeToString(type: AsirType, simplify: boolean = false): string {
    if (!type) return 'undefined';
    switch (type.kind) {
        case 'primitive': // if (type.name === 'indeterminate) return 'Variable'; のように個別に名前を付けるべき
            return type.name;

        case 'list':
            return `list<${typeToString((type as ListAsirType).elementType, true)}>`;

        case 'tuple':
            const tuple = type as TupleType;
            if (simplify && tuple.elements.length > 3) {
                return `[${typeToString(tuple.elements[0].type, true)}, ...]`;
            }
            const elements = tuple.elements.map(elm => {
                if (elm.name) { return `${elm.name}: ${typeToString(elm.type, true)}`; }
                return typeToString(elm.type, true);
            }).join(', ');
            return `[${elements}]`;

        case 'vector':
            return `Vector<${typeToString((type as VectorAsirType).elementType, true)}>`;

        case 'matrix':
            return `Matrix<${typeToString((type as MatrixAsirType).elementType, true)}>`;

        case 'function':
            const func = type as FunctionAsirType;

            const params = func.parameters.map(p => {
                const pTypeStr = typeToString(p.type, true);
                if (pTypeStr === 'parameter' || pTypeStr === 'any') {
                    return p.name;
                }
                return `${p.name}: ${pTypeStr}`;
            }).join(', ');

            const returnTypeStr = typeToString(func.returnType, true);
            return `def (${params}) -> ${returnTypeStr}`;

        case 'overloaded_function':
            return (type as OverloadedFunctionType).signatures
                .map(sig => typeToString(sig, simplify))
                .join('\n');

        case 'standard_polynomial':
            return `Poly<${typeToString((type as PolynomialAsirType).coefficientType, true)}>`;

        case 'distributed_polynomial':
            return `Dpoly<${typeToString((type as PolynomialAsirType).coefficientType, true)}>`;

        case 'dmod_polynomial':
            return `DMP<${typeToString(type.coefficientType, true)}>`;

        case 'non_commutative_polynomial':
            return `NBP<${typeToString(type.coefficientType, true)}>`;

        case 'rational_function':
            return `RatFunc<${typeToString((type as PolynomialAsirType).coefficientType, true)}>`;

        case 'struct':
            return `struct ${type.name}`;

        case 'structure_definition':
            return `struct definition ${(type as StructDefinitionType).name}`;

        case 'module':
            return `module ${type.name}`;

        case 'union':
            const unionTypes = (type as UnionType).types;
            if (simplify && unionTypes.length > 3) return 'Variant';
            const uniqueTypeStrs = Array.from(new Set(unionTypes.map(t => typeToString(t, true))));
            if (uniqueTypeStrs.length > 3 && simplify) return 'Variant';
            return uniqueTypeStrs.join(' | ');

        case 'literal_union':
            const values = (type as LiteralUnionType).values.map(v => typeof v === 'string' ? `'${v}'` : v);
            if (values.length > 5) return `${values.slice(0, 5).join(' | ')} | ...`;
            return values.join(' | ');
            
        default:
            const exhaustiveCheck: never = type;
            return 'unknown';
    }
}