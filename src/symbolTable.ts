
// Asirの型システムを模倣するための基本的な型定義
// ca.h の #define O_P 2 などを参考に、より具体的な型を追加していく
export type AsirType = 'number' | 'polynomial' | 'list' | 'string' | 'function' | 'struct' | 'module' | 'any';

// シンボル（変数、関数など）の情報を格納するインターフェース
export interface Symbol {
    name: string;
    type: AsirType;
    definedAt: { line: number; column: number }; // シンボルが定義された場所
    // 必要に応じて追加の情報を格納 (例: 関数の引数の数や型)
    // e.g., params?: AsirType[];
    // e.g., value?: any; // 定数の場合の値
}

/**
 * スコープを表すクラス。
 * シンボルを名前で管理し、親スコープへの参照を持つことで入れ子構造を実現する。
 */
export class Scope {
    private symbols: Map<string, Symbol> = new Map();
    public readonly parent: Scope | null;

    constructor(parent: Scope | null = null) {
        this.parent = parent;
    }

    /**
     * 現在のスコープにシンボルを定義する。
     * @param symbol - 定義するシンボル
     * @returns 定義に成功した場合は true, すでに存在する場合は false
     */
    public define(symbol: Symbol): boolean {
        if (this.symbols.has(symbol.name)) {
            return false; // このスコープでは再定義を許可しない
        }
        this.symbols.set(symbol.name, symbol);
        return true;
    }

    /**
     * 現在のスコープまたは親スコープを遡ってシンボルを検索する。
     * @param name - 検索するシンボルの名前
     * @returns 見つかったシンボル、または undefined
     */
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

    /**
     * 現在のスコープにのみシンボルが存在するかを検索する。
     * @param name - 検索するシンボルの名前
     * @returns 見つかったシンボル、または undefined
     */
    public lookupCurrentScope(name: string): Symbol | undefined {
        return this.symbols.get(name);
    }
}

/**
 * シンボルテーブル全体を管理するクラス。
 * スコープのスタックを保持し、意味解析器（セマンティックアナライザ）にインターフェースを提供する。
 */
export class SymbolTable {
    private currentScope: Scope;

    constructor() {
        // グローバルスコープで初期化
        this.currentScope = new Scope();
    }

    /**
     * 新しいスコープを開始（現在のスコープの子として作成）する。
     * 関数定義やブロックの開始時に呼び出す。
     */
    public enterScope(): void {
        this.currentScope = new Scope(this.currentScope);
    }

    /**
     * 現在のスコープを終了し、親スコープに戻る。
     * 関数定義やブロックの終了時に呼び出す。
     */
    public exitScope(): void {
        if (this.currentScope.parent) {
            this.currentScope = this.currentScope.parent;
        } else {
            // これは通常、プログラム全体の解析終了時以外には起こらないはず
            console.warn("Warning: Exiting the global scope.");
        }
    }

    /**
     * 現在のスコープにシンボルを定義する。
     * @param symbol - 定義するシンボル
     */
    public define(symbol: Symbol): void {
        if (!this.currentScope.define(symbol)) {
            // エラーハンドリング: 同じスコープ内での再定義
            const existingSymbol = this.currentScope.lookupCurrentScope(symbol.name)!;
            throw new Error(`Semantic Error: Symbol '${symbol.name}' is already defined in this scope at line ${existingSymbol.definedAt.line}.`);
        }
    }

    /**
     * 現在のスコープから外側に向かってシンボルを検索する。
     * @param name - 検索するシンボルの名前
     * @returns 見つかったシンボル。見つからなければエラーをスローする。
     */
    public lookup(name: string): Symbol {
        const symbol = this.currentScope.lookup(name);
        if (!symbol) {
            throw new Error(`Semantic Error: Symbol '${name}' is not defined.`);
        }
        return symbol;
    }
}
