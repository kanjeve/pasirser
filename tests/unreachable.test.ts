import { analyze } from '../src/cli/cli';
import { Diagnostic, DiagnosticSeverity } from '../src/utils/diagnostics';
import * as fs from 'fs';
import * as path from 'path';

describe('Unreachable Code Detection', () => {
    const testFilePath = path.resolve(__dirname, 'unreachable.rr');
    let code: string;

    beforeAll(() => {
        code = fs.readFileSync(testFilePath, 'utf8');
    });

    it('should report unreachable code after return, end$, and quit$', () => {
        const { diagnostics } = analyze(code, testFilePath);

        // Filter for unreachable code warnings
        const unreachableWarnings = diagnostics.filter((d: Diagnostic) =>
            d.severity === DiagnosticSeverity.Warning && d.message.includes("到達不能なコードです。")
        );

        expect(unreachableWarnings.length).toBeGreaterThanOrEqual(4);

        expect(unreachableWarnings).toContainEqual(
            expect.objectContaining({
                range: expect.objectContaining({
                    start: expect.objectContaining({ line: 3 })
                }),
                message: expect.stringContaining("到達不能なコードです。")
            })
        );

        // "This is also unreachable." after end$
        expect(unreachableWarnings).toContainEqual(
            expect.objectContaining({
                range: expect.objectContaining({
                    start: expect.objectContaining({ line: 8 })
                }),
                message: expect.stringContaining("到達不能なコードです。")
            })
        );

        // "And this too." after quit$
        expect(unreachableWarnings).toContainEqual(
            expect.objectContaining({
                range: expect.objectContaining({
                    start: expect.objectContaining({ line: 12 })
                }),
                message: expect.stringContaining("到達不能なコードです。")
            })
        );

        // "This is after quit$." after quit$ in main
        expect(unreachableWarnings).toContainEqual(
            expect.objectContaining({
                range: expect.objectContaining({
                    start: expect.objectContaining({ line: 17 })
                }),
                message: expect.stringContaining("到達不能なコードです。")
            })
        );
    });
});
