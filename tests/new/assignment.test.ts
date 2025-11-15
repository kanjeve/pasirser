import * as fs from 'fs';
import * as path from 'path';
import { analyze } from '../../src/cli/cli';
import { DiagnosticSeverity } from '../../src/utils/diagnostics';

describe('Assignment validation', () => {
  it('should correctly infer types for nested assignment', () => {
    const filePath = path.resolve(__dirname, './assignment_test.rr');
    const code = fs.readFileSync(filePath, 'utf-8');
    const { diagnostics } = analyze(code);
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
