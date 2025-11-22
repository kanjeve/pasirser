
import * as fs from 'fs';
import * as path from 'path';
import { Validator } from '../src/semantics/validator';
import { parseAndBuildAST } from '../src/core/parser/parserUtils';
import { DiagnosticSeverity } from '../src/utils/diagnostics';

describe('Nested index access assignment validation', () => {
  it('should correctly infer types for nested index access assignment', () => {
    const testFilePath = path.resolve(__dirname, 'nested_index_access.rr');
    const code = fs.readFileSync(testFilePath, 'utf-8');
    const { ast, diagnostics: parseDiagnostics } = parseAndBuildAST(code, testFilePath);
    if (ast) {
      const validator = new Validator(ast, testFilePath);
      const errors = validator.analyze(ast).filter(e => e.severity === DiagnosticSeverity.Error);
      expect(errors.length).toBe(0);
    }
  });
});
