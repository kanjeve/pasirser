import * as fs from 'fs';
import * as ast from '../core/ast/asirAst';
import { Diagnostic } from '../utils/diagnostics';
import { parseAndBuildAST } from '../core/parser/parserUtils';

// 現在の実装では、メモリ使用量が肥大化し続ける可能性がある。
// Asirの利用上、何千何万のファイルを読み込むことは少ないため、あまり考慮する必要もないが、
// LPUキャッシュやキャッシュの容量制限を導入してもいいかもしれない。

interface CacheEntry {
    mtimeMs: number;
    ast: ast.ProgramNode | null;
    diagnostics: Diagnostic[];
}

export class ASTCache {
    private static instance: ASTCache;
    private cache: Map<string, CacheEntry> = new Map();

    private constructor() {}

    public static getInstance(): ASTCache {
        if (!ASTCache.instance) {
            ASTCache.instance = new ASTCache();
        }
        return ASTCache.instance;
    }

    // ファイルをパースするかキャッシュを返す
    public getAST(filePath: string): { ast: ast.ProgramNode | null; diagnostics: Diagnostic[] } {
        try {
            const stats = fs.statSync(filePath);
            const currentMtime = stats.mtimeMs;

            if (this.cache.has(filePath)) {
                const entry = this.cache.get(filePath)!;
                if (entry.mtimeMs === currentMtime) {
                    return { ast: entry.ast, diagnostics: entry.diagnostics };
                }
            }

            const code = fs.readFileSync(filePath, 'utf-8');
            const result = parseAndBuildAST(code, filePath);

            this.cache.set(filePath, {
                mtimeMs: currentMtime,
                ast: result.ast,
                diagnostics: result.diagnostics
            });
            return result;
        } catch (e) {
            return { ast: null, diagnostics: [] };
        }
    }

    public clear(): void {
        this.cache.clear();
    }
}