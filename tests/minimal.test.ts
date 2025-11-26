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

    it('should handle chdir() and load() correctly', () => {
        const diagnostics = getDiagnostics('mini_test.rr');

        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Warning);
        
        expect(hints).toHaveLength(2);
        expect(hints.some(h => h.message.includes('未定義の変数 \'A\''))).toBe(true);
        expect(hints.some(h => h.message.includes('未定義の変数 \'B\''))).toBe(true);
    });

    it('should handle chdir() and load() correctly', () => {
        const diagnostics = getDiagnostics('def.rr');

        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        
        expect(hints).toHaveLength(0);
    });

    it('should handle chdir() and load() correctly', () => {
        const diagnostics = getDiagnostics('rr.rr');

        const hints = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
        
        expect(hints).toHaveLength(0);
    });
});
