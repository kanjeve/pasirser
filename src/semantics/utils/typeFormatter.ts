import { AsirType, PrimitiveAsirType, ListAsirType, TupleType, VectorAsirType, ModuleAsirType, UnionType, LiteralUnionType, PolynomialAsirType } from '../types';

export function typeToString(type: AsirType): string {
    if (!type) return 'undefined';
    switch (type.kind) {
        case 'primitive':
            return type.name;
        case 'list':
            return `list[${typeToString(type.elementType)}]`;
        case 'tuple':
            const types = type.elements.map(elm => {
                if (elm.name) { return `${elm.name}: ${typeToString(elm.type)}`; }
                return typeToString(elm.type);
            }).join(', ');
            return `[${types}]`;
        case 'vector':
            return `vector[${typeToString(type.elementType)}]`;
        case 'matrix':
            return `matrix[${typeToString(type.elementType)}]`;
        case 'function':
            const params = type.parameters.map(p => typeToString(p.type)).join(', ');
            return `function(${params}) -> ${typeToString(type.returnType)}`;
        case 'overloaded_function':
            return type.signatures
                .map(sig => typeToString(sig))
                .join('\n');
        case 'standard_polynomial':
            return `polynomial<${typeToString(type.coefficientType)}>`;
        case 'distributed_polynomial':
            return `dpoly<${typeToString(type.coefficientType)}>`;
        case 'dmod_polynomial':
            return `dmpoly<${typeToString(type.coefficientType)}>`;
        case 'non_commutative_polynomial':
            return `NBP<${typeToString(type.coefficientType)}>`;
        case 'rational_function':
            return `rational_function<${typeToString(type.coefficientType)}>`;
        case 'struct':
            return `struct ${type.name}`;
        case 'module':
            return `module ${type.name}`;
        case 'union':
            return type.types.map(t => typeToString(t)).join(' | ');
        case 'literal_union':
            return type.values.map(v => typeof v === 'string' ? `'${v}'` : v).join(' | ');
        default:
            const exhaustiveCheck: never = type;
            return 'unknown';
    }
}