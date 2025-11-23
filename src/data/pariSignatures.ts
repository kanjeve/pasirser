import { FunctionAsirType, p_type, u_type, l_type, m_type, stdpoly_type } from "../semantics/types";

// pari() で呼び出される関数のシグネチャ
export const PARI_SIGNATURES = new Map<string, FunctionAsirType>([
    [
        "sqrt",
        {
            kind: 'function',
            parameters: [{ name: 'x', type: p_type('number') }],
            returnType: u_type([p_type('bigfloat'), p_type('complex')]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "abs",
        {
            kind: 'function',
            parameters: [{ name: 'x', type: p_type('number') }],
            returnType: p_type('number'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "erfc",
        {
            kind: 'function',
            parameters: [{ name: 'x', type: p_type('number') }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "arg",
        {
            kind: 'function',
            parameters: [{ name: 'z', type: p_type('complex') }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "isqrt",
        {
            kind: 'function',
            parameters: [{ name: 'n', type: p_type('integer') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "factor",
        {
            kind: 'function',
            parameters: [{ name: 'n', type: u_type([p_type('number'), stdpoly_type(p_type('any'))]) }],
            returnType: l_type(l_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "adj",
        {
            kind: 'function',
            parameters: [{ name: 'mat', type: m_type(p_type('any')) }],
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "factorint",
        {
            kind: 'function',
            parameters: [
                { name: 'n', type: p_type('integer') }
            ],
            returnType: m_type(p_type('integer')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "isprime",
        {
            kind: 'function',
            parameters: [
                { name: 'n', type: p_type('integer') },
                { name: 'flag', type: p_type('integer') }
            ],
            returnType: p_type('integer'), // 0 or 1
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "bigomega",
        {
            kind: 'function',
            parameters: [{ name: 'n', type: p_type('any') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
]);