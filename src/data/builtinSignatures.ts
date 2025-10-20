import { Literal } from "acorn";
import { AsirType, FunctionAsirType, ListAsirType, VectorAsirType, MatrixAsirType, PrimitiveAsirType, PrimitiveAsirTypeName, LiteralUnionType, OverloadedFunctionType, UnionType, PolynomialAsirType, StructAsirType } from "../semantics/types";

// 型生成用ヘルパー
const p_type = (name: PrimitiveAsirTypeName): PrimitiveAsirType => ({ kind: 'primitive', name });
const u_type = (types: AsirType[]): UnionType => ({ kind: 'union', types });
const l_type = (elementType: AsirType): ListAsirType => ({ kind: 'list', elementType });
const v_type = (elementType: AsirType): VectorAsirType => ({ kind: 'vector', elementType });
const m_type = (elementType: AsirType): MatrixAsirType => ({ kind: 'matrix', elementType });
const stdpoly_type = (coeffType: AsirType): PolynomialAsirType  => ({ kind: 'standard_polynomial', coefficientType: coeffType });
const dpoly_type = (coeffType: AsirType): PolynomialAsirType => ({ kind: 'distributed_polynomial', coefficientType: coeffType });
const dpm_type = (coeffType: AsirType): PolynomialAsirType => ({ kind: 'dmod_polynomial', coefficientType: coeffType });
const rat_type = (coeffType: AsirType): PolynomialAsirType => ({ kind: 'rational_function', coefficientType: coeffType });

const type_0: LiteralUnionType = { kind: 'literal_union', values: [0] };
const type_1: LiteralUnionType = { kind: 'literal_union', values: [1] };
const type_0_1: LiteralUnionType = { kind: 'literal_union', values: [0, 1] };
const type_m1_0_1: LiteralUnionType = { kind: 'literal_union', values: [-1, 0, 1] };
const type_0_1_2: LiteralUnionType = { kind: 'literal_union', values: [0, 1, 2] };

// 組み込み関数用のシグネチャ
export const BUILTIN_SIGNATURES = new Map<string, FunctionAsirType | OverloadedFunctionType>([
    [
        "access",
        {
            kind: 'function',
            parameters: [{ name: 'file', type: p_type('string') }],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [// メモ：algやnewalgは主係数が有理数の1変数多項式であれば実行されるが、実際には各係数が有理数である必要がある。
        "alg",
        {
            kind: 'function',
            parameters: [{ name: 'i', type: p_type('integer') }],
            returnType: p_type('alg'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'algtodalg',
        {
            kind: 'function',
            parameters: [{ name: 'alg', type:p_type('alg') }],
            returnType: p_type('dalg'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'algv',
        {
            kind: 'function',
            parameters: [{ name: 'i', type: p_type('integer') }],
            returnType: p_type('indeterminate'),
            behavior: 'callable_and_symbol'
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
            returnType: l_type(p_type('any')),
            behavior: 'callable_and_symbol'
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
            returnType: type_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'args',
        {
            kind: 'function',
            parameters: [{ name: 'func', type: p_type('form') }],
            returnType: l_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'asciitostr',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('integer')) }],
            returnType: p_type('string'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'bload',
        {
            kind: 'function',
            parameters: [{ name: 'file', type: p_type('string') }],
            returnType: p_type('any'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'bload27',
        {
            kind: 'function',
            parameters: [{ name: 'file', type: p_type('string') }],
            returnType: p_type('any'),
            behavior: 'callable_and_symbol'
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
            returnType: type_1,
            behavior: 'callable_and_symbol'
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
            returnType: p_type('any'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'car',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('any')) }],
            returnType: p_type('any'),
            behavior: 'callable_only'
        }
    ],
    [
        'cdr',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('any')) }],
            returnType: l_type(p_type('any')),
            behavior: 'callable_only'
        }
    ],
    [
        'ceil',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'characteristic_ff',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
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
            returnType: type_0,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'close_file',
        {
            kind: 'function',
            parameters: [{ name: 'id', type: p_type('integer') }],
            returnType: type_1,
            behavior: 'callable_and_symbol'
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
                    returnType: stdpoly_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'poly', type: stdpoly_type(p_type('any'))},
                        { name: 'deg', type: p_type('integer') },
                        { name: 'var', type: p_type('pp') }
                    ],
                    returnType: stdpoly_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
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
            returnType: m_type(p_type('number')),
            behavior: 'callable_and_symbol'
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
            returnType: m_type(p_type('number')),
            behavior: 'callable_and_symbol'
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
            returnType: m_type(p_type('number')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'conj',
        {
            kind: 'function',
            parameters: [{ name: 'complex', type: p_type('complex') }],
            returnType: p_type('complex'),
            behavior: 'callable_and_symbol'
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
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
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
                                { name: 'step', type: p_type('number') } // step本来は指定しなくても良い
                            ]
                        }},
                        { name: 'id', type: p_type('integer') },
                        { name: 'name', type: p_type('string') }
                    ],
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
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
            returnType: l_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'cputime',
        {
            kind: 'function',
            parameters: [{ name: 'switch', type: type_0_1 }],
            returnType: type_0,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ctrl',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: l_type(p_type('any')),
                    allowesOptions: new Map([ ['disc', p_type('integer')] ]),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [ { name: 'switch', type: p_type('string') } ],
                    returnType: p_type('any'),
                    allowesOptions: new Map([ ['disc', p_type('integer')] ]),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'switch', type: p_type('string') },
                        { name: 'obj', type: p_type('any') }
                    ],
                    returnType: p_type('any'),
                    allowesOptions: new Map([ ['disc', p_type('integer')] ]),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'currenttime',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dabs',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat'), p_type('complex')]) }],
            returnType: p_type('number'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dacos',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dalgtoalg',
        {
            kind: 'function',
            parameters: [{ name: 'dalg', type: p_type('dalg') }],
            returnType: p_type('alg'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dalgtodp',
        {
            kind: 'function',
            parameters: [{ name: 'dalg', type: p_type('dalg') }],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dasin',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'datan',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dceil',
        {
            kind: 'function',
            parameters: [{name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dcos',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'defpoly',
        {
            kind: 'function',
            parameters: [{ name: 'alg', type: p_type('alg') }],
            returnType: stdpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'deg',
        {
            kind: 'function',
            parameters: [
                { name: 'poly', type: stdpoly_type(p_type('any')) },
                { name: 'var', type: p_type('pp') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'delete_history',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'index', type: p_type('integer') }],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'det',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'mat', type: m_type(p_type('any')) }],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'mat', type: m_type(p_type('any')) },
                        { name: 'mod', type: p_type('integer') }
                    ],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'deval',
        {
            kind: 'function',
            parameters: [{ name: 'obj', type: p_type('any') }],
            returnType: p_type('any'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dexp',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dfloor',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'diff',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'rat', type: rat_type(p_type('any')) }],
                    restParameter: { name: 'vars', type: p_type('pp') },
                    returnType: rat_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'rat', type: rat_type(p_type('any')) },
                        { name: 'varlist', type: l_type(p_type('pp')) }
                    ],
                    returnType: rat_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dlog',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')])}],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dn',
        {
            kind: 'function',
            parameters: [{ name: 'rat', type: u_type([p_type('rational'), rat_type(p_type('any'))]) }],
            returnType: u_type([p_type('integer'), stdpoly_type(p_type('any'))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_dptodpm',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'pos', type: p_type('integer') }
            ],
            returnType: dpm_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_dtol',
        {
            kind: 'function',
            parameters: [
                { name: 'dmpoly', type: dpm_type(p_type('any')) },
                { name: 'varlist', type: l_type(p_type('pp')) }
            ],
            returnType: stdpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_hc',
        {
            kind: 'function',
            parameters: [{ name: 'dmpoly', type: dpm_type(p_type('any')) }],
            returnType: u_type([dpoly_type(p_type('any')), p_type('number')]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_hm',
        {
            kind: 'function',
            parameters: [{ name: 'dmpoly', type: dpm_type(p_type('any')) }],
            returnType: dpm_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_hp',
        {
            kind: 'function',
            parameters: [{ name: 'dmpoly', type: dpm_type(p_type('any')) }],
            returnType: dpm_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_ht',
        {
            kind: 'function',
            parameters: [{ name: 'dmpoly', type: dpm_type(p_type('any')) }],
            returnType: dpm_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_ltod',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: l_type(stdpoly_type(p_type('any'))) },
                { name: 'vlist', type: l_type(p_type('pp')) }
            ],
            returnType: dpm_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_nf',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [
                        { name: 'dmpoly', type: dpm_type(p_type('any')) },
                        { name: 'dmpolyarray', type: v_type(dpm_type(p_type('any'))) },
                        { name: 'fullreduse', type: type_0 }
                    ],
                    returnType: dpm_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'indexlist', type: l_type(p_type('any')) },
                        { name: 'dmpoly', type: dpm_type(p_type('any')) },
                        { name: 'dmpolyarray', type: v_type(dpm_type(p_type('any'))) },
                        { name: 'fullreduse', type: type_0 }
                    ],
                    returnType: dpm_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_nf_and_quotient',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [
                        { name: 'dmpoly', type: dpm_type(p_type('any')) },
                        { name: 'dmpolyarray', type: v_type(dpm_type(p_type('any'))) }
                    ],
                    returnType: dpm_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'indexlist', type: l_type(p_type('any')) },
                        { name: 'dmpoly', type: dpm_type(p_type('any')) },
                        { name: 'dmpolyarray', type: v_type(dpm_type(p_type('any'))) }
                    ],
                    returnType: dpm_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_redble',
        {
            kind: 'function',
            parameters: [
                { name: 'dmpoly1', type: dpm_type(p_type('any')) },
                { name: 'dmpoly2', type: dpm_type(p_type('any')) }
            ],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_rest',
        {
            kind: 'function',
            parameters: [{ name: 'dmpoly', type: dpm_type(p_type('any')) }],
            returnType: dpm_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_schreyer_base',
        {
            kind: 'function',
            parameters: [{ name: 'G', type: l_type(dpm_type(p_type('any'))) }],
            returnType: l_type(dpm_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_schreyer_frme',
        {
            kind: 'function',
            parameters: [{ name: 'G', type: l_type(dpm_type(p_type('any'))) }],
            returnType: l_type(dpm_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_set_schreyer_level',
        {
            kind: 'function',
            parameters: [{ name: 'L', type: p_type('integer') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_sp',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: u_type([dpm_type(p_type('any')), dpoly_type(p_type('any'))]) },
                { name: 'dpoly2', type: u_type([dpm_type(p_type('any')), dpoly_type(p_type('any'))]) }
            ],
            returnType: u_type([dpm_type(p_type('any')), l_type(dpm_type(p_type('any')))]),
            allowesOptions: new Map([ ['coef', p_type('integer')] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dpm_sp_nf',
        {
            kind: 'function',
            parameters: [
                { name: 'C', type: v_type(dpm_type(p_type('any'))) },
                { name: 'Z', type: v_type(p_type('integer')) },
                { name: 'P', type: p_type('integer') },
                { name: 'Q', type: p_type('integer') }
            ],
            returnType: l_type(dpm_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dptodalg',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('rational')) }],
            returnType: p_type('dalg'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_dehomo',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_dtop',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'vlist', type: l_type(p_type('pp')) }
            ],
            returnType: stdpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_dtoe',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: v_type(p_type('integer')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_f4_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_f4_mod_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) },
                { name: 'p', type: p_type('integer') }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_gr_flags', // TODO: flag補完
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'list', type: l_type(p_type('any')) }],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_gr_f_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0_1 },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_gr_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0_1 },
                { name: 'modular', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_gr_mod_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0_1 },
                { name: 'modular', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_gr_print',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'i', type: type_0_1_2 }],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_hc',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: u_type([dpoly_type(p_type('any')), p_type('number')]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_hm',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_homo',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_ht',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_lcm',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('any')) },
                { name: 'dpoly2', type: dpoly_type(p_type('any')) }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_mag',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('rational')) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_mbase', // usage: 多項式の集合のグレブナー基底を計算し、dpolyに変換してから使う
        {
            kind: 'function',
            parameters: [{ name: 'dplist', type: l_type(dpoly_type(p_type('any'))) }],
            returnType: l_type(dpoly_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_mod',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly', type: dpoly_type(p_type('rational')) },
                { name: 'mod', type: p_type('integer') },
                { name: 'subst', type: l_type(p_type('any')) } // [[var, value], ...] の形（varにvalueを代入）
            ],
            returnType: dpoly_type(p_type('fsmall')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_nf',
        {
            kind: 'function',
            parameters: [
                { name: 'indexlist', type: l_type(p_type('any')) },
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'dpolyarray', type: v_type(dpoly_type(p_type('any'))) },
                { name: 'fullreduce', type: type_0_1 }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_nf_mod',
        {
            kind: 'function',
            parameters: [
                { name: 'indexlist', type: l_type(p_type('any')) },
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'dpolyarray', type: v_type(dpoly_type(p_type('any'))) },
                { name: 'fullreduce', type: type_0_1 },
                { name: 'mod', type: p_type('integer') }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_ord',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }],
                    returnType: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_prim',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(stdpoly_type(p_type('integer'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_ptod',
        {
            kind: 'function',
            parameters: [
                { name: 'poly', type: stdpoly_type(p_type('any')) },
                { name: 'vlist', type: l_type(p_type('pp')) }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_ptozp',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(stdpoly_type(p_type('integer'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_rat',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('fsmall')) }],
            returnType: dpoly_type(p_type('rational')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_red',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('any')) },
                { name: 'dpoly2', type: dpoly_type(p_type('any')) },
                { name: 'dpoly3', type: dpoly_type(p_type('any')) }
            ],
            returnType: l_type(dpoly_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_redble',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('any')) },
                { name: 'dpoly2', type: dpoly_type(p_type('any')) }
            ],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_red_mod',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('any')) },
                { name: 'dpoly2', type: dpoly_type(p_type('any')) },
                { name: 'dpoly3', type: dpoly_type(p_type('any')) },
                { name: 'mod', type: p_type('integer') }
            ],
            returnType: l_type(dpoly_type(p_type('any'))),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_rest',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_set_top_weight',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: u_type([v_type(p_type('integer')), type_0]),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'weight', type: u_type([l_type(p_type('integer')), v_type(p_type('integer'))]) }],
                    returnType: v_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_set_weight',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: u_type([v_type(p_type('integer')), type_0]),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'weight', type: u_type([l_type(p_type('integer')), v_type(p_type('integer'))]) }],
                    returnType: v_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_sp',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('any')) },
                { name: 'dpoly2', type: dpoly_type(p_type('any')) }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_sp_mod',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('fsmall')) },
                { name: 'dpoly2', type: dpoly_type(p_type('fsmall')) },
                { name: 'mod', type: p_type('integer') }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_subd',
        {
            kind: 'function',
            parameters: [
                { name: 'dpoly1', type: dpoly_type(p_type('any')) },
                { name: 'dpoly2', type: dpoly_type(p_type('any')) }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_sugar',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_td',
        {
            kind: 'function',
            parameters: [{ name: 'dpoly', type: dpoly_type(p_type('any')) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_true_nf',
        {
            kind: 'function',
            parameters: [
                { name: 'indexlist', type: l_type(p_type('any')) },
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'dpolyarray', type: v_type(dpoly_type(p_type('any'))) },
                { name: 'fullreduce', type: type_0_1 }
            ],
            returnType: {
                kind: 'tuple',
                elements: [
                    { name: 'nm', type: dpoly_type(p_type('any')) },
                    { name: 'dn', type: dpoly_type(p_type('any')) }
                ]
            },
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_true_nf_mod',
        {
            kind: 'function',
            parameters: [
                { name: 'indexlist', type: l_type(p_type('any')) },
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'dpolyarray', type: v_type(dpoly_type(p_type('any'))) },
                { name: 'fullreduce', type: type_0_1 },
                { name: 'mod', type: p_type('integer') }
            ],
            returnType: {
                kind: 'tuple',
                elements: [
                    { name: 'nm', type: dpoly_type(p_type('any')) },
                    { name: 'dn', type: dpoly_type(p_type('any')) }
                ]
            },
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_vtoe',
        {
            kind: 'function',
            parameters: [{ name: 'vect', type: v_type(p_type('integer')) }],
            returnType: dpoly_type(p_type('integer')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_f4_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_f4_mod_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) },
                { name: 'p', type: p_type('integer') }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_gr_f_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0 },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_gr_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0 },
                { name: 'modular', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_gr_mod_main',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0 },
                { name: 'modular', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_nf',
        {
            kind: 'function',
            parameters: [
                { name: 'indexlist', type: l_type(p_type('any')) },
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'dpolyarray', type: v_type(dpoly_type(p_type('any'))) },
                { name: 'fullreduce', type: type_0_1 }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_nf_weyl_mod',
        {
            kind: 'function',
            parameters: [
                { name: 'indexlist', type: l_type(p_type('any')) },
                { name: 'dpoly', type: dpoly_type(p_type('any')) },
                { name: 'dpolyarray', type: v_type(dpoly_type(p_type('any'))) },
                { name: 'fullreduce', type: type_0_1 },
                { name: 'mod', type: p_type('integer') }
            ],
            returnType: dpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dp_weyl_set_weight',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: u_type([v_type(p_type('integer')), type_0]),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'weight', type: u_type([l_type(p_type('integer')), v_type(p_type('integer'))]) }],
                    returnType: v_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'draw_obj',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [
                        { name: 'id', type: p_type('integer') },
                        { name: 'index', type: p_type('integer') },
                        { name: 'pointorsegment', type: u_type([
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') }
                            ] },
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') },
                                { name: 'u', type: p_type('integer') },
                                { name: 'v', type: p_type('integer') }
                            ] }
                        ]) }
                    ],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'id', type: p_type('integer') },
                        { name: 'index', type: p_type('integer') },
                        { name: 'pointorsegment', type: u_type([
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') }
                            ] },
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') },
                                { name: 'u', type: p_type('integer') },
                                { name: 'v', type: p_type('integer') }
                            ] }
                        ]) },
                        { name: 'color', type: p_type('integer') }
                    ],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'draw_string',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [
                        { name: 'id', type: p_type('integer') },
                        { name: 'index', type: p_type('integer') },
                        { name: 'pointorsegment', type: u_type([
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') }
                            ] },
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') },
                                { name: 'u', type: p_type('integer') },
                                { name: 'v', type: p_type('integer') }
                            ] }
                        ]) },
                        { name: 'string', type: p_type('string') }
                    ],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'id', type: p_type('integer') },
                        { name: 'index', type: p_type('integer') },
                        { name: 'pointorsegment', type: u_type([
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') }
                            ] },
                            { kind: 'tuple', elements: [
                                { name: 'x', type: p_type('integer') },
                                { name: 'y', type: p_type('integer') },
                                { name: 'u', type: p_type('integer') },
                                { name: 'v', type: p_type('integer') }
                            ] }
                        ]) },
                        { name: 'string', type: p_type('string') },
                        { name: 'color', type: p_type('integer') }
                    ],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'drint',
        {
            kind: 'function',
            parameters: [{name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dsin',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dsqrt',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat'), p_type('complex')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'dtan',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('float'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ecm_add_ff',
        {
            kind: 'function',
            parameters: [
                { name: 'p1', type: u_type([{
                    kind: 'tuple',
                    elements: [
                        { name: 'x', type: p_type('rational') },
                        { name: 'y', type: p_type('rational') },
                        { name: 'z', type: p_type('rational') }
                    ]
                }, type_0])},
                { name: 'p2', type: u_type([{
                    kind: 'tuple',
                    elements: [
                        { name: 'x', type: p_type('rational') },
                        { name: 'y', type: p_type('rational') },
                        { name: 'z', type: p_type('rational') }
                    ]
                }, type_0])},
                { name: 'ec', type: {
                    kind: 'tuple',
                    elements: [
                        { name: 'a', type: p_type('flarge') },
                        { name: 'b', type: p_type('flarge') }
                    ]
                } }
            ],
            returnType: {
                kind: 'tuple',
                elements: [
                    { name: 'x', type: p_type('flarge') },
                    { name: 'y', type: p_type('flarge') },
                    { name: 'z', type: p_type('flarge') }
                ]
            },
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ecm_sub_ff',
        {
            kind: 'function',
            parameters: [
                { name: 'p1', type: u_type([{
                    kind: 'tuple',
                    elements: [
                        { name: 'x', type: p_type('rational') },
                        { name: 'y', type: p_type('rational') },
                        { name: 'z', type: p_type('rational') }
                    ]
                }, type_0])},
                { name: 'p2', type: u_type([{
                    kind: 'tuple',
                    elements: [
                        { name: 'x', type: p_type('rational') },
                        { name: 'y', type: p_type('rational') },
                        { name: 'z', type: p_type('rational') }
                    ]
                }, type_0])},
                { name: 'ec', type: {
                    kind: 'tuple',
                    elements: [
                        { name: 'a', type: p_type('flarge') },
                        { name: 'b', type: p_type('flarge') }
                    ]
                } }
            ],
            returnType: {
                kind: 'tuple',
                elements: [
                    { name: 'x', type: p_type('flarge') },
                    { name: 'y', type: p_type('flarge') },
                    { name: 'z', type: p_type('flarge') }
                ]
            },
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ecm_chsgn_ff',
        {
            kind: 'function',
            parameters: [
                { name: 'p1', type: u_type([{
                    kind: 'tuple',
                    elements: [
                        { name: 'x', type: p_type('rational') },
                        { name: 'y', type: p_type('rational') },
                        { name: 'z', type: p_type('rational') }
                    ]
                }, type_0])}
            ],
            returnType: {
                kind: 'tuple',
                elements: [
                    { name: 'x', type: p_type('flarge') },
                    { name: 'y', type: p_type('flarge') },
                    { name: 'z', type: p_type('flarge') }
                ]
            },
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ediff',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'rat', type: rat_type(p_type('any')) }],
                    restParameter: { name: 'vars', type: p_type('pp') },
                    returnType: rat_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'rat', type: rat_type(p_type('any')) },
                        { name: 'varlist', type: l_type(p_type('pp')) }
                    ],
                    returnType: rat_type(p_type('any')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'error',
        {
            kind: 'function',
            parameters: [{ name: 'message', type: p_type('string') }],
            returnType: p_type('undefined'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'eval',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'obj', type: p_type('any') }],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'obj', type: p_type('any') },
                        { name: 'prec', type: p_type('integer') }
                    ],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'eval_str',
        {
            kind: 'function',
            parameters: [{ name: 'str', type: p_type('string') }],
            returnType: p_type('any'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'extdeg_ff',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'fac',
        {
            kind: 'function',
            parameters: [{ name: 'i', type: p_type('integer') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'fctr',
        {
            kind: 'function',
            parameters: [{ name: 'poly', type: stdpoly_type(p_type('rational')) }],
            returnType: l_type(l_type(p_type('any'))), // [[因子, 重複度],...] の形
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'field_order_ff',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'field_type_ff',
        {
            kind: 'function',
            parameters: [],
            returnType: type_0_1_2,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'flist',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: l_type(p_type('functor')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'mname', type: p_type("string") }],
                    returnType: l_type(p_type('functor')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'floor',
        {
            kind: 'function',
            parameters: [{name: 'num', type: u_type([p_type('rational'), p_type('float'), p_type('bigfloat')]) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'funargs',
        {
            kind: 'function',
            parameters: [{ name: 'func', type: p_type('form') }],
            returnType: l_type(p_type('any')), // [functor, arg1, arg2,...] の形
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'functor',
        {
            kind: 'function',
            parameters: [{ name: 'func', type: p_type('form') }],
            returnType: p_type('functor'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'gcd',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [
                        { name: 'poly1', type: stdpoly_type(p_type('rational')) },
                        { name: 'poly1', type: stdpoly_type(p_type('rational')) }
                    ],
                    returnType: stdpoly_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'poly1', type: stdpoly_type(p_type('rational')) },
                        { name: 'poly1', type: stdpoly_type(p_type('rational')) },
                        { name: 'mod', type: p_type('integer') }
                    ],
                    returnType: stdpoly_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ], 
    [
        'gcdz',
        {
            kind: 'function',
            parameters: [
                { name: 'poly1', type: stdpoly_type(p_type('integer')) },
                { name: 'poly1', type: stdpoly_type(p_type('integer')) }
            ],
            returnType: stdpoly_type(p_type('integer')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'generate_port',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'use_unix', type: type_0_1 }],
                    returnType: u_type([p_type('integer'), p_type('string')]),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'getenv',
        {
            kind: 'function',
            parameters: [{ name: 'name', type: p_type('string') }],
            returnType: p_type('string'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'getopt',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: l_type(l_type(p_type('string'))),
                    behavior: 'callable_only'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'key', type: p_type('any') }],
                    returnType: p_type('any'),
                    behavior: 'callable_only'
                }
            ],
            behavior: 'callable_only'
        }
    ],
    [
        'get_byte',
        {
            kind: 'function',
            parameters: [{ name: 'num', type: p_type('integer') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'get_line',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: p_type('string'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'name', type: p_type('string') }],
                    returnType: p_type('string'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'get_rootdir',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('string'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'gf2nton',
        {
            kind: 'function',
            parameters: [{ name: 'm', type: p_type('fchar2') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'gf2ntop',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'm', type: p_type('fchar2') }],
                    returnType: stdpoly_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'm', type: p_type('fchar2') },
                        { name: 'v', type: p_type('pp') }
                    ],
                    returnType: stdpoly_type(p_type('integer')),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'heap',
        {
            kind: 'function',
            parameters: [],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'help',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'name', type: p_type('string') }],
                    returnType: type_0,
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'iand',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'idiv',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ifplot', // 今は二通りしか認めない
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'func', type: stdpoly_type(p_type('any')) }],
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
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
                        { name: 'id', type: p_type('integer') },
                        { name: 'name', type: p_type('string') }
                    ],
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'igcd',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'igcdctrl',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [],
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [{ name: 'i', type: {
                        kind: 'literal_union',
                        values: [0,1,2,3]
                    } }],
                    returnType: p_type('integer'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ilcm',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'int32ton',
        {
            kind: 'function',
            parameters: [{ name: 'int32', type: p_type('usint') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'inttorat',
        {
            kind: 'function',
            parameters: [
                { name: 'a', type: p_type('integer') },
                { name: 'm', type: p_type('integer') },
                { name: 'b', type: p_type('integer') }
            ],
            returnType: u_type([{
                kind: 'tuple',
                elements: [
                    { name: 'x', type: p_type('integer') },
                    { name: 'y', type: p_type('integer') } // xa=y (mod m)  s.t. x,|y| <b, gcd(x,y) = 1
                ]
            }, type_0]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'inv',
        {
            kind: 'function',
            parameters: [
                { name: 'i', type: p_type('integer') },
                { name: 'm', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'invmat',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'mat', type: m_type(p_type('any')) }],
                    returnType: {
                        kind: 'tuple',
                        elements: [
                            { name: 'nm', type: m_type(p_type('any')) },
                            { name: 'dn', type: p_type('any') }
                        ]
                    },
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'mat', type: m_type(p_type('any')) },
                        { name: 'mod', type: p_type('integer') }
                    ],
                    returnType: {
                        kind: 'tuple',
                        elements: [
                            { name: 'nm', type: m_type(p_type('any')) },
                            { name: 'dn', type: p_type('any') }
                        ]
                    },
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ior',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'irem',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ishift',
        {
            kind: 'function',
            parameters: [
                { name: 'i', type: p_type('integer') },
                { name: 'count', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'isqrt',
        {
            kind: 'function',
            parameters: [
                { name: 'i', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ixor',
        {
            kind: 'function',
            parameters: [
                { name: 'i1', type: p_type('integer') },
                { name: 'i2', type: p_type('integer') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'kmul', // gf2n係数の多項式のも使えるらしい。
        {
            kind: 'function',
            parameters: [
                { name: 'poly1', type: stdpoly_type(p_type('any')) },
                { name: 'poly1', type: stdpoly_type(p_type('any')) }
            ],
            returnType: stdpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ksquare', // gf2n係数の多項式のも使えるらしい。
        {
            kind: 'function',
            parameters: [
                { name: 'poly', type: stdpoly_type(p_type('any')) }
            ],
            returnType: stdpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ktmul', // gf2n係数の多項式のも使えるらしい。
        {
            kind: 'function',
            parameters: [
                { name: 'poly1', type: stdpoly_type(p_type('any')) },
                { name: 'poly1', type: stdpoly_type(p_type('any')) },
                { name: 'd', type: p_type('integer') }
            ],
            returnType: stdpoly_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'length',
        {
            kind: 'function',
            parameters: [{ name: 'list|vect', type: u_type([ l_type(p_type('any')), v_type(p_type('any')) ]) }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'lmptop',
        {
            kind: 'function',
            parameters: [{ name: 'm', type: stdpoly_type(p_type('flarge')) }], // fchar2もいけそう
            returnType: stdpoly_type(p_type('integer')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'load', // TODO: 最終目標
        {
            kind: 'function',
            parameters: [{ name: 'filename', type: p_type('string') }],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'lprime',
        {
            kind: 'function',
            parameters: [{ name: 'index', type: p_type('integer') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'lrandom',
        {
            kind: 'function',
            parameters: [{ name: 'bit', type: p_type('integer') }],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'ltov',
        {
            kind: 'function',
            parameters: [{ name: 'list', type: l_type(p_type('any')) }],
            returnType: v_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'map',
        {
            kind: 'function',
            parameters: [
                { name: 'function', type: p_type('functor') },
                { name: 'arg0', type: p_type('any') } // 実際にはlist,vector,matrixが望ましく、それ以外の場合はcallと同じ
            ],
            restParameter: { name: 'args', type: p_type('any') },
            returnType: p_type('any'), // arg0と同じ型
            behavior: 'callable_only'
        }
    ],
    [
        'mat',
        {
            kind: 'function',
            parameters: [{ name: 'rowvector', type: v_type(p_type('any')) }],
            restParameter: { name: 'vectors', type: v_type(p_type('any')) },
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'matc',
        {
            kind: 'function',
            parameters: [{ name: 'columnvector', type: v_type(p_type('any')) }],
            restParameter: { name: 'vectors', type: v_type(p_type('any')) },
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'matr',
        {
            kind: 'function',
            parameters: [{ name: 'rowvector', type: v_type(p_type('any')) }],
            restParameter: { name: 'vectors', type: v_type(p_type('any')) },
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'matrix',
        {
            kind: 'function',
            parameters: [
                { name: 'row', type: p_type('integer') },
                { name: 'col', type: p_type('integer') }
            ],
            restParameter: { name: 'vectors', type: v_type(p_type('any')) },
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'mindeg',
        {
            kind: 'function',
            parameters: [
                { name: 'poly', type: stdpoly_type(p_type('any')) },
                { name: 'var', type: p_type('pp') }
            ],
            returnType: p_type('integer'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'modfctr',
        {
            kind: 'function',
            parameters: [
                { name: 'poly', type: stdpoly_type(p_type('integer')) },
                { name: 'mod', type: p_type('integer') }
            ],
            returnType: l_type(l_type(p_type('any'))), // [[因子, 重複度],...] の形
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'module_definedp',
        {
            kind: 'function',
            parameters: [{ name: 'name', type: p_type('string') }],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'module_list',
        {
            kind: 'function',
            parameters: [],
            returnType: l_type(p_type('string')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'mt_load',
        {
            kind: 'function',
            parameters: [{ name: 'filename', type: p_type('string') }],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'mt_save',
        {
            kind: 'function',
            parameters: [{ name: 'filename', type: p_type('string') }],
            returnType: type_0_1,
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_det', // 有限体上のものらしい（引数も？）
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'mat', type: m_type(p_type('any')) }],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'mat', type: m_type(p_type('any')) },
                        { name: 'mod', type: p_type('integer') }
                    ],
                    returnType: p_type('any'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_f4',// plistは多項式のリストのリストが入力できるらしい。
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'modular', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            allowesOptions: new Map([ ['homo', type_1], ['dp', type_1], ['nora', type_1] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_f4_trace',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0_1 },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            allowesOptions: new Map([ ['dp', type_1], ['nora', type_1] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_gr',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            allowesOptions: new Map([ ['homo', type_1], ['dp', type_1], ['nora', type_1] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_gr_postproc',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) },
                { name: 'check', type: type_0_1 }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any'))), type_0]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_gr_trace',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0_1 },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            allowesOptions: new Map([ ['dp', type_1], ['nora', type_1] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_weyl_gr',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            allowesOptions: new Map([ ['dp', type_1], ['nora', type_1] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_weyl_gr_trace',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'homo', type: type_0_1 },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]),
            allowesOptions: new Map([ ['dp', type_1], ['nora', type_1] ]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'nd_weyl_gr_postproc',
        {
            kind: 'function',
            parameters: [
                { name: 'plist', type: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any')))]) },
                { name: 'vlist', type: l_type(p_type('pp')) },
                { name: 'p', type: p_type('integer') },
                { name: 'order', type: u_type([p_type('integer'), l_type(p_type('any')), m_type(p_type('any'))]) },
                { name: 'check', type: type_0_1 }
            ],
            returnType: u_type([l_type(stdpoly_type(p_type('any'))), l_type(dpoly_type(p_type('any'))), type_0]),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'newalg',
        {
            kind: 'function',
            parameters: [{ name: 'defpoly', type: stdpoly_type(p_type('rational')) }],
            returnType: p_type('alg'),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'newbytearray',
        {
            kind: 'overloaded_function',
            signatures: [
                {
                    kind: 'function',
                    parameters: [{ name: 'len', type: p_type('integer') }],
                    returnType: p_type('bytearray'),
                    behavior: 'callable_and_symbol'
                },
                {
                    kind: 'function',
                    parameters: [
                        { name: 'len', type: p_type('integer') },
                        { name: 'list_or_string', type: u_type([l_type(p_type('integer')), p_type('string')]) }
                    ],
                    returnType: p_type('bytearray'),
                    behavior: 'callable_and_symbol'
                }
            ],
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'newmat',
        {
            kind: 'function',
            parameters: [
                { name: 'row', type: p_type('integer') },
                { name: 'col', type: p_type('integer') }
            ],
            restParameter: { name: 'vectors', type: v_type(p_type('any')) },
            returnType: m_type(p_type('any')),
            behavior: 'callable_and_symbol'
        }
    ],
    [
        'newstruct',
        {
            kind: 'function',
            parameters: [{ name: 'name', type: p_type('any') }],
            returnType: p_type('struct'),
            behavior: 'callable_only'
        }
    ]
]);