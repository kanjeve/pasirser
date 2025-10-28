import * as fs from 'fs';
import * as path from 'path';
import { analyze } from '../src/cli/cli';
import { DiagnosticSeverity } from '../src/utils/diagnostics';

describe('Validator Features', () => {

    // テスト用のヘルパー関数：指定されたファイルの診断情報を取得
    const getDiagnostics = (filePath: string, options?: { includePaths?: string[], loadPaths?: string[] }) => {
        const absolutePath = path.resolve(__dirname, filePath);
        const code = fs.readFileSync(absolutePath, 'utf-8');
        const { diagnostics } = analyze(code, absolutePath, options?.includePaths, options?.loadPaths);
        return diagnostics;
    };

    it('should report unused variables', () => {
        const diagnostics = getDiagnostics('test_unused.rr');
        
        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Hint);
        expect(hints).toHaveLength(1);
        expect(hints[0].message).toContain('未使用のシンボル \'UnusedVar\'');
    });

    it('should handle #include "..." correctly', () => {
        const diagnostics = getDiagnostics('include_test.rr');

        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        expect(errors).toHaveLength(0);
    });

    it('should handle #include <...> with -I option correctly', () => {
        const diagnostics = getDiagnostics('system_include_test.rr', {
            includePaths: ['/home/kanji/OpenXM/lib/asir'] // Absolute path
        });

        const warnings = diagnostics.filter(d => d.severity === DiagnosticSeverity.Warning);
        // 'O_VOID'の再定義に関する警告だけが出ることを期待
        expect(warnings.length).toBeGreaterThanOrEqual(1);
        expect(warnings.some(w => w.message.includes('\'O_VOID\' はスコープで既に定義されています'))).toBe(true);
        expect(warnings.every(w => w.filePath?.includes('defs.h'))).toBe(true);
    });

    it('should handle chdir() and load() correctly', () => {
        const diagnostics = getDiagnostics('main_chdir_test.rr');

        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Hint);
        
        expect(errors).toHaveLength(0);
        // 未使用変数Aに関するヒントが含まれていることを確認
        expect(hints.some(h => h.message.includes('未使用のシンボル \'A\''))).toBe(true);
    });

    it('should handle import() to load a file only once', () => {
        const diagnostics = getDiagnostics('import_test.rr', { loadPaths: [path.resolve(__dirname)] });

        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Hint);

        // エラーは0件であること（再定義エラーが出ていない）
        expect(errors).toHaveLength(0);
        // 期待するヒントが含まれていることを確認
        expect(hints.some(h => h.message.includes('ファイルは既にimport済みです'))).toBe(true);
        expect(hints.some(h => h.message.includes('未使用のシンボル \'A\''))).toBe(true);
    });

    it('should handle load() with paths set by ctrl(cons(...))', () => {
        const diagnostics = getDiagnostics('ctrl_cons_test.rr');

        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Hint);

        // エラーは0件であること
        expect(errors).toHaveLength(0);
        // 未使用変数Aに関するヒントが含まれていることを確認
        expect(hints.some(h => h.message.includes('未使用のシンボル \'A\''))).toBe(true);
    });

    it('should correctly type-check arguments for pari()', () => {
        const diagnostics = getDiagnostics('pari_test.rr');

        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        
        // エラーは1件だけであることを期待 (文字列を渡した呼び出し)
        expect(errors).toHaveLength(1);
        
        // エラーメッセージが、pari関数の引数に関するものであることを確認
        expect(errors[0].message).toContain("pari 関数 'sqrt' の引数 1 の型が一致しません");
        expect(errors[0].message).toContain("型 'number' が必要ですが、型 'string' が指定されました");
    });

    it('should handle ctrl() getter with cons() for dynamic load paths', () => {
        const diagnostics = getDiagnostics('ctrl_getter_cons_test.rr');

        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Hint);

        // エラーは0件であること
        expect(errors).toHaveLength(0);
        // 未使用変数Aに関するヒントが含まれていることを確認
        expect(hints.some(h => h.message.includes('未使用のシンボル \'A\''))).toBe(true);
    });

});
