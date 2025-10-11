import { Literal } from "acorn";
import { AsirType, FunctionAsirType, ListAsirType, VectorAsirType, MatrixAsirType, PrimitiveAsirType, PrimitiveAsirTypeName, LiteralUnionType, OverloadedFunctionType, UnionType, PolynomialAsirType } from "../semantics/types";

// 型生成用ヘルパー
const p_type = (name: PrimitiveAsirTypeName): PrimitiveAsirType => ({ kind: 'primitive', name });
const u_type = (types: AsirType[]): UnionType => ({ kind: 'union', types });
const l_type = (elementType: AsirType): ListAsirType => ({ kind: 'list', elementType });
const v_type = (elementType: AsirType): VectorAsirType => ({ kind: 'vector', elementType });
const m_type = (elementType: AsirType): MatrixAsirType => ({ kind: 'matrix', elementType });
const stdpoly_type = (coeffType: AsirType): PolynomialAsirType  => ({ kind: 'standard_polynomial', coefficientType: coeffType });

const type_0: LiteralUnionType = { kind: 'literal_union', values: [0] };
const type_1: LiteralUnionType = { kind: 'literal_union', values: [1] };
const type_0_or_1: LiteralUnionType = { kind: 'literal_union', values: [0, 1] };
const type_m1_0_1: LiteralUnionType = { kind: 'literal_union', values: [-1, 0, 1] };

// 組み込み関数用のシグネチャ
export const BUILTIN_SIGNATURES = new Map<string, FunctionAsirType | OverloadedFunctionType>([
    [
        "access",
        {
            kind: 'function',
            parameters: [{ name: 'file', type: p_type('string') }],
            returnType: type_0_or_1
        }
    ],
    [// メモ：algやnewalgは主係数が有理数の1変数多項式であれば実行されるが、実際には各係数が有理数である必要がある。
        "alg",
        {
            kind: 'function',
            parameters: [{ name: 'i', type: p_type('integer') }],
            returnType: p_type('alg')
        }
    ],
    [
        'algtodalg',
        {
            kind: 'function',
            parameters: [{ name: 'alg', type:p_type('alg') }],
            returnType: p_type('dalg')
        }
    ],
    [
        'algv',
        {
            kind: 'function',
            parameters: [{ name: 'i', type: p_type('integer') }],
            returnType: p_type('indeterminate')
        }
    ],
    [
        'append',
        {
            kind: 'function',
            parameters: [
                { name: 'list1', type: l_type(p_type('any')) },
                { name: 'list2', type: l_type(p_type('any') )}
            ],
            returnType: l_type(p_type('any'))
        }
    ],
    [
        'arfreg',
        {
            kind: 'function',
            parameters: [
                { name: 'name', type: p_type('string') },
                { name: 'add', type: u_type([p_type('functor'), type_0]) }, 
                { name: 'sub', type: u_type([p_type('functor'), type_0]) },
                { name: 'mul', type: u_type([p_type('functor'), type_0]) },
                { name: 'div', type: u_type([p_type('functor'), type_0]) },
                { name: 'pwr', type: u_type([p_type('functor'), type_0]) },
                { name: 'chsgn', type: u_type([p_type('functor'), type_0]) },
                { name: 'comp', type: u_type([p_type('functor'), type_0]) }
            ],
            returnType: type_1
        }
    ],
    [
        'args',
        {
            kind: 'function',
            parameters: [{ name: 'func', type: p_type('form') }],
            returnType: l_type(p_type('indeterminate'))
        }
    ],
    [
        'asciitostr',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('integer')) }],
            returnType: p_type('string')
        }
    ],
    [
        'bload',
        {
            kind: 'function',
            parameters: [{ name: 'file', type: p_type('string') }],
            returnType: p_type('any')
        }
    ],
    [
        'bload27',
        {
            kind: 'function',
            parameters: [{ name: 'file', type: p_type('string') }],
            returnType: p_type('any')
        }
    ],
    [
        'bsave',
        {
            kind: 'function',
            parameters: [
                { name: 'obj', type: p_type('any') },
                { name: 'file', type: p_type('string') }
            ],
            returnType: type_1
        }
    ],
    [
        'call',
        {
            kind: 'function',
            parameters: [
                { name: 'name', type: p_type('functor') },
                { name: 'args', type: l_type(p_type('any')) }
            ],
            returnType: p_type('any')
        }
    ],
    [
        'car',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('any')) }],
            returnType: p_type('any')
        }
    ],
    [
        'cdr',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('any')) }],
            returnType: l_type(p_type('any'))
        }
    ],
    [
        'ceil',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('integer')
        }
    ],
    [
        'characteristic_ff',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('integer')
        }
    ],
    [
        'clear_canvas',
        {
            kind: 'function',
            parameters: [
                { name: 'id', type: p_type('integer') },
                { name: 'index', type: p_type('integer') }
            ],
            returnType: type_0
        }
    ],
    [
        'close_file',
        {
            kind: 'function',
            parameters: [{ name: 'id', type: p_type('integer') }],
            returnType: type_1
        }
    ],
    [
        'coef',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [
                        { name: 'poly', type: stdpoly_type(p_type('any')) },
                        { name: 'deg', type: p_type('integer') }
                    ],
                    returnType: stdpoly_type(p_type('any'))
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'poly', type: stdpoly_type(p_type('any'))},
                        { name: 'deg', type: p_type('integer') },
                        { name: 'var', type: p_type('pp') }
                    ],
                    returnType: stdpoly_type(p_type('any'))
                }
            ]
        }
    ],
    [
        'cola', // TODO: こういう形を変える関数（Juliaでいう「!」がつく関数）はどうすればよいのか
        {
            kind: 'function',
            parameters: [
                { name: 'matrix', type: m_type(p_type('number')) },
                { name: 'i', type: p_type('integer') },
                { name: 'j', type: p_type('integer') },
                { name: 'c', type: p_type('number') }
            ],
            returnType: m_type(p_type('number'))
        }
    ],
    [
        'colm',
        {
            kind: 'function',
            parameters: [
                { name: 'matrix', type: m_type(p_type('number')) },
                { name: 'i', type: p_type('integer') },
                { name: 'c', type: p_type('number') }
            ],
            returnType: m_type(p_type('number'))
        }
    ],
    [
        'colx',
        {
            kind: 'function',
            parameters: [
                { name: 'matrix', type: m_type(p_type('number')) },
                { name: 'i', type: p_type('integer') },
                { name: 'j', type: p_type('integer') }
            ],
            returnType: m_type(p_type('number'))
        }
    ],
    [
        'conj',
        {
            kind: 'function',
            parameters: [{ name: 'complex', type: p_type('complex') }],
            returnType: p_type('complex')
        }
    ],
    [
        'conplot', // 今は二通りしか認めない
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'func', type: stdpoly_type(p_type('any')) }],
                    returnType: p_type('integer')
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'func', type: stdpoly_type(p_type('any')) },
                        { name: 'geometry', type: {
                            kind: 'tuple',
                            elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') }
                            ]
                        }},
                        { name: 'xrange', type: {
                            kind: 'tuple',
                            elements: [
                                { name: 'v', type: p_type('indeterminate') },
                                { name: 'vmin', type: p_type('integer') },
                                { name: 'vmax', type: p_type('integer') }
                            ]
                        }},
                        { name: 'yrange', type: {
                            kind: 'tuple',
                            elements: [
                                { name: 'v', type: p_type('indeterminate') },
                                { name: 'vmin', type: p_type('integer') },
                                { name: 'vmax', type: p_type('integer') }
                            ]
                        }},
                        { name: 'zrange', type: {
                            kind: 'tuple',
                            elements: [
                                { name: 'v', type: p_type('indeterminate') },
                                { name: 'vmin', type: p_type('integer') },
                                { name: 'vmax', type: p_type('integer') },
                                { name: 'step', type: p_type('number') } // 本来は指定しなくても良い
                            ]
                        }},
                        { name: 'id', type: p_type('integer') },
                        { name: 'name', type: p_type('string') }
                    ],
                    returnType: p_type('integer')
                }
            ]
        }
    ],
    [
        'cons',
        {
            kind: 'function',
            parameters: [
                { name: 'obj', type: p_type('any') },
                { name: 'list', type: l_type(p_type('any')) }
            ],
            returnType: l_type(p_type('any'))
        }
    ],
    [
        'cputime',
        {
            kind: 'function',
            parameters: [{ name: 'switch', type: type_0_or_1 }],
            returnType: type_0
        }
    ]
]);