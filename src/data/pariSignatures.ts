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
        "abs", // type=1: one num/poly/mat arg
        {
            kind: 'function',
            parameters: [{ name: 'x', type: p_type('number') }], // num/poly/mat は number で代表
            returnType: p_type('number'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "erfc", // type=1: one num/poly/mat arg
        {
            kind: 'function',
            parameters: [{ name: 'x', type: p_type('number') }],
            returnType: p_type('float'), // 誤差関数はfloatを返すことが多い
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "arg", // type=1: one num/poly/mat arg
        {
            kind: 'function',
            parameters: [{ name: 'z', type: p_type('complex') }], // argは複素数の偏角
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "isqrt", // type=1: one num/poly/mat arg
        {
            kind: 'function',
            parameters: [{ name: 'n', type: p_type('integer') }], // 整数平方根
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "factor", // type=1: one num/poly/mat arg
        {
            kind: 'function',
            parameters: [{ name: 'n', type: u_type([p_type('number'), stdpoly_type(p_type('any'))]) }],
            returnType: l_type(l_type(p_type('any'))), // [[因子, 重複度],...]
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "adj", // type=1: one num/poly/mat arg
        {
            kind: 'function',
            parameters: [{ name: 'mat', type: m_type(p_type('any')) }],
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        "factorint", // 引数は1つ、出力は行列 (ユーザーからの修正情報に基づく)
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
        "isprime", // type=2: 1starg=num/poly/mat arg, 2ndarg(int)
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
        "bigomega", // type=3: one GEN, return ulong
        {
            kind: 'function',
            parameters: [{ name: 'n', type: p_type('any') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
]);