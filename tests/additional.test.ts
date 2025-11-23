import * as fs from 'fs';
import * as path from 'path';
import { analyze } from '../src/cli/cli';
import { DiagnosticSeverity } from '../src/utils/diagnostics';

describe('analyze function', () => {
    const getDiagnostics = (filePath: string, options?: { includePaths?: string[], loadPaths?: string[] }) => {
        const absolutePath = path.resolve(__dirname, filePath);
        const code = fs.readFileSync(absolutePath, 'utf-8');
        const { diagnostics } = analyze(code, absolutePath, options?.includePaths, options?.loadPaths);
        return diagnostics;
    };

    it('should report unused variables', () => {
        const diagnostics = getDiagnostics('add_gr.rr');
        const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);

        if (errors.length > 0) {
            console.log('Found errors:');
            errors.forEach(e => {
                console.log(`- Line ${e.range.start.line}: ${e.message} (Source: ${e.source})`);
            });
        }

        expect(errors.length).toBe(0);
    });
});