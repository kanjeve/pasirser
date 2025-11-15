
import * as fs from 'fs';
import * as path from 'path';
import { Validator } from '../../src/semantics/validator';
import { parseAndBuildAST } from '../../src/core/parser/parserUtils';
import { DiagnosticSeverity } from '../../src/utils/diagnostics';

describe('Nested index access assignment validation', () => {
  it('should correctly infer types for nested index access assignment', () => {
    const testFilePath = path.resolve(__dirname, 'nested_index_access.rr');
    const code = fs.readFileSync(testFilePath, 'utf-8');
    const { ast, diagnostics: parseDiagnostics } = parseAndBuildAST(code, testFilePath);

    const filteredParseDiagnostics = parseDiagnostics.filter(d => 
      d.source !== 'FullContext' && d.source !== 'ContextSensitivity'
    );

    expect(filteredParseDiagnostics).toHaveLength(0);

    if (ast) {
      const validator = new Validator(ast, testFilePath);
      const errors = validator.analyze(ast).filter(e => e.severity === DiagnosticSeverity.Error);

      if (errors.length > 0) {
        console.log('Found errors:');
        errors.forEach(e => console.log(`- Line ${e.range.start.line}: ${e.message} (Source: ${e.source})`));
      }

      expect(errors.length).toBe(0);
    }
  });
});
