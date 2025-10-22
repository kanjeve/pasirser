import { analyze } from '../src/run';
import { DiagnosticSeverity } from '../src/diagnostics';

describe('analyze function', () => {
  it('should return no diagnostics for valid code', () => {
    const code = 'def main() { return 0; } ';
    const { diagnostics } = analyze(code);
    expect(diagnostics.length).toBe(0);
  });

  it('should detect syntax errors', () => {
    const code = 'def main() { return 0 '; // 波括弧が閉じていない
    const { diagnostics } = analyze(code);
    expect(diagnostics.length).toBeGreaterThan(0);
    expect(diagnostics[0].source).toBe('Syntax');
  });

  it('should return no diagnostics for valid polynomial variables (lowercase)', () => {
    const code = 'def main() { return x; } '; // x は多項式変数として有効
    const { diagnostics } = analyze(code);
    expect(diagnostics.length).toBe(0);
  });

  it('should detect warning for truly undefined uppercase variables', () => {
    const code = 'def main() { return UNDEFINED_VAR; } '; // 大文字始まりの未定義変数
    const { diagnostics } = analyze(code);
    expect(diagnostics.length).toBeGreaterThan(0);
    expect(diagnostics[0].severity).toBe(DiagnosticSeverity.Warning);
    expect(diagnostics[0].message).toContain("未定義の変数 'UNDEFINED_VAR' が参照されました。暗黙的に 0 として扱われます。");
  });
});