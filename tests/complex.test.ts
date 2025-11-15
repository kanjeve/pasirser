import * as fs from 'fs';
import * as path from 'path';
import { analyze } from '../src/cli/cli';
import { DiagnosticSeverity } from '../src/utils/diagnostics';

describe('Complex code analysis', () => {
  it('should return no diagnostics for test.rr', () => {
    const filePath = path.resolve(__dirname, '../../risa_enhance/test/test.rr');
    const code = fs.readFileSync(filePath, 'utf-8');
    const { diagnostics } = analyze(code);
    const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
    
    // デバッグのため、エラー内容をコンソールに出力します
    if (errors.length > 0) {
      console.log('Found errors:');
      errors.forEach(e => {
        console.log(`- Line ${e.range.start.line}: ${e.message} (Source: ${e.source})`);
      });
    }

    expect(errors.length).toBe(0);
  });
});
