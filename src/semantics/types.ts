import { ASTNode } from '../core/ast/asirAst.js';

// --- Rich Type System ---

export type PrimitiveAsirTypeName = 
    | 'number' | 'ratfunction' | 'string' |'dpoly' | 'usint' | 'error' | 'gf2mat' | 'mathcap' | 'qeformula' | 'gfmmat' | 'bytearray'
    | 'quote' | 'option' | 'symbol' | 'range' | 'textbuffer' | 'dpolyvector' | 'quotearg' | 'imatrix' | 'ncpoly' | 'dmodpoly' | 'void'
    | 'rational' | 'float' | 'alg' | 'bigfloat' | 'complex' | 'fsmall' | 'flarge' | 'fchar2' | 'fcharp'
    | 'fcharpsmall' | 'fchardefp' | 'dalg' | 'indeterminate' | 'uc' | 'form' /*| 'functor'*/
    | 'any' | 'undefined' | 'parameter' | 'integer' | 'pp' | 'struct';

export interface TypeMetadata {
    parent?: PrimitiveAsirTypeName;
    category: 'general_numeric' | 'algebric_numeric' | 'finite_field' | 'string' | 'list' | 'vector' | 'matrix' | 'polynomial' | 'other'
}

export const TYPE_METADATA = new Map<PrimitiveAsirTypeName, TypeMetadata>([
    ['integer', { parent: 'rational', category: 'general_numeric' }],
    ['rational', { parent: 'number', category: 'general_numeric' }],
    ['float', { parent: 'number', category: 'general_numeric' }],
    ['alg', { parent: 'number', category: 'algebric_numeric' }],
    ['bigfloat', { parent: 'number', category: 'general_numeric' }],
    ['complex', { parent: 'number', category: 'general_numeric' }],
    ['fsmall', { parent: 'number', category: 'finite_field' }],
    ['flarge', { parent: 'number', category: 'finite_field' }],
    ['fchar2', { parent: 'number', category: 'finite_field' }],
    ['fcharp', { parent: 'number', category: 'finite_field' }],
    ['fcharpsmall' , { parent: 'number', category: 'finite_field' }],
    ['fchardefp', { parent: 'number', category: 'finite_field' }],
    ['dalg', { parent: 'number', category: 'finite_field' }],
    ['number', { category: 'general_numeric' }],

    ['indeterminate', { parent: 'pp', category: 'polynomial' }],
    ['uc', { parent: 'pp', category: 'polynomial' }],
    ['form', { parent: 'pp', category: 'polynomial' }],
    // ['functor', { parent: 'pp', category: 'polynomial' }],
    ['pp', { category: 'polynomial' }],

    ['ratfunction', { category: 'polynomial' }],
    ['string', { category: 'string' }],
    ['dpoly', { category: 'polynomial' }],
    ['usint', { category: 'other' }],
    ['error', { category: 'other' }],
    ['gf2mat', { category: 'other' }],
    ['mathcap', { category: 'other' }],
    ['qeformula', { category: 'other' }],
    ['gfmmat', { category: 'other' }],
    ['bytearray', { category: 'other' }],
    ['quote', { category: 'polynomial' }],
    ['option', { category: 'other' }],
    ['symbol', { category: 'other' }],
    ['range', { category: 'other' }],
    ['textbuffer', { category: 'other' }],
    ['dpolyvector', { category: 'other' }],
    ['quotearg', { category: 'other' }],
    ['imatrix', { category: 'other' }],
    ['ncpoly', { category: 'polynomial' }],
    ['dmodpoly', { category: 'polynomial' }],
    ['void', { category: 'other' }],

    ['any', { category: 'other' }],
    ['undefined', { category: 'other' }],
    ['parameter', { category: 'other' }],
    ['struct', { category: 'other' }]
]);

export type PrimitiveAsirType = { kind: 'primitive', name: PrimitiveAsirTypeName };
export type ListAsirType = { kind: 'list', elementType: AsirType };
export type TupleType = { kind: 'tuple', elements: TupleElement[] };
export type TupleElement = { name?: string, type: AsirType };
export type VectorAsirType = { kind: 'vector', elementType: AsirType, length?: number };
export type MatrixAsirType = { kind: 'matrix', elementType: AsirType, rows?: number, cols?: number };
export type FunctionBehavior = 
    | 'callable_only'
    | 'callable_and_symbol';
export type FunctionAsirType = { kind: 'function', parameters: { name: string, type: AsirType }[], restParameter?: { name: string, type: AsirType }, returnType: AsirType, allowesOptions?: Map<string, AsirType>, behavior: FunctionBehavior };
export type StructAsirType = { kind: 'struct', name: string, members: Map<string, AsirType> };
export type ModuleAsirType = { kind: 'module', name: string, members: Map<string, Symbol> };
export type StandardPolynomialType = { kind: 'standard_polynomial', coefficientType: AsirType };
export type DistributedPolynomialType = { kind: 'distributed_polynomial', coefficientType: AsirType };
export type DistributedModPolynomialType = { kind: 'dmod_polynomial', coefficientType: AsirType };
export type NonCommuutativePolynomialType = { kind: 'non_commutative_polynomial', coefficientType: AsirType };
export type RationalFunctionType  = { kind: 'rational_function', coefficientType: AsirType };
export type PolynomialAsirType = | StandardPolynomialType | DistributedPolynomialType | NonCommuutativePolynomialType | RationalFunctionType | DistributedModPolynomialType;
export type LiteralValue = number | string;
export type LiteralUnionType = { kind: 'literal_union', values: LiteralValue[] };
export type OverloadedFunctionType = { kind: 'overloaded_function', signatures: FunctionAsirType[], behavior: FunctionBehavior };
export type UnionType = { kind: 'union', types: AsirType[] };

export type AsirType =
    | PrimitiveAsirType
    | ListAsirType
    | TupleType
    | VectorAsirType
    | MatrixAsirType
    | FunctionAsirType
    | StructAsirType
    | ModuleAsirType
    | PolynomialAsirType
    | LiteralUnionType
    | OverloadedFunctionType
    | UnionType;

export interface Symbol {
    name: string;
    type: AsirType;
    definedAt: ASTNode['loc'];
    node: ASTNode;
}

export class Scope {
    public symbols: Map<string, Symbol> = new Map();
    public hasLocalDeclaration: boolean = false;
    public readonly parent: Scope | null;
    public children: Scope[] = [];
    public readonly node: ASTNode;

    constructor(node: ASTNode, parent: Scope | null = null) {
        this.node = node;
        this.parent = parent;
    }

    public define(symbol: Symbol): boolean {
        if (this.symbols.has(symbol.name)) {
            return false;
        }
        this.symbols.set(symbol.name, symbol);
        return true;
    }

    public lookup(name: string): Symbol | undefined {
        let scope: Scope | null = this;
        while (scope) {
            const symbol = scope.symbols.get(name);
            if (symbol) {
                return symbol;
            }
            scope = scope.parent;
        }
        return undefined;
    }

    public lookupCurrentScope(name: string): Symbol | undefined {
        return this.symbols.get(name);
    }
}

// 型生成用ヘルパー
export const p_type = (name: PrimitiveAsirTypeName): PrimitiveAsirType => ({ kind: 'primitive', name });
export const u_type = (types: AsirType[]): UnionType => ({ kind: 'union', types });
export const l_type = (elementType: AsirType): ListAsirType => ({ kind: 'list', elementType });
export const v_type = (elementType: AsirType): VectorAsirType => ({ kind: 'vector', elementType });
export const m_type = (elementType: AsirType): MatrixAsirType => ({ kind: 'matrix', elementType });
export const stdpoly_type = (coeffType: AsirType): PolynomialAsirType  => ({ kind: 'standard_polynomial', coefficientType: coeffType });
export const dpoly_type = (coeffType: AsirType): PolynomialAsirType => ({ kind: 'distributed_polynomial', coefficientType: coeffType });
export const dpm_type = (coeffType: AsirType): PolynomialAsirType => ({ kind: 'dmod_polynomial', coefficientType: coeffType });
export const rat_type = (coeffType: AsirType): PolynomialAsirType => ({ kind: 'rational_function', coefficientType: coeffType });

export const type_0: LiteralUnionType = { kind: 'literal_union', values: [0] };
export const type_1: LiteralUnionType = { kind: 'literal_union', values: [1] };
export const type_0_1: LiteralUnionType = { kind: 'literal_union', values: [0, 1] };
export const type_m1_0_1: LiteralUnionType = { kind: 'literal_union', values: [-1, 0, 1] };
export const type_0_1_2: LiteralUnionType = { kind: 'literal_union', values: [0, 1, 2] };
