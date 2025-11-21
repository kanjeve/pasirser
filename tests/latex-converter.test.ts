import { convertLatexToAsir } from '../src/latex-converter/LatexToAsirConverter';

describe('convertLatexToAsir', () => {
    // Test for basic arithmetic operations
    test('should handle addition', () => {
        expect(convertLatexToAsir('a + b')).toBe('a + b;\n');
    });

    test('should handle subtraction', () => {
        expect(convertLatexToAsir('a - b')).toBe('a - b;\n');
    });

    test('should handle multiplication', () => {
        expect(convertLatexToAsir('a * b')).toBe('a * b;\n');
    });

    test('should handle simple division', () => {
        expect(convertLatexToAsir('a / b')).toBe('a / b;\n');
    });

    // Test for LaTeX commands
    test('should convert \frac to parenthesized division', () => {
        expect(convertLatexToAsir('\\frac{a}{b}')).toBe('(a) / (b);\n');
    });

    test('should convert nested \frac correctly', () => {
        expect(convertLatexToAsir('\\frac{\\frac{a}{b}}{c}')).toBe('((a) / (b)) / (c);\n');
    });

    test('should handle \pi command', () => {
        expect(convertLatexToAsir('\\pi')).toBe('@pi;\n');
    });

    // Test for powers and subscripts
    test('should handle power operator ^ with a single token', () => {
        expect(convertLatexToAsir('x^2')).toBe('x^(2);\n');
    });
    
    test('should handle subscript operator _', () => {
        expect(convertLatexToAsir('x_1')).toBe('x_1;\n');
    });

    test('should handle power with braces for grouping', () => {
        expect(convertLatexToAsir('x^{10}')).toBe('x^((10));\n');
    });

    // Test for operator precedence and grouping
    test('should respect parentheses for grouping', () => {
        expect(convertLatexToAsir('(a + b) * c')).toBe('(a + b) * c;\n');
    });

    test('should handle a complex expression with commands and precedence', () => {
        expect(convertLatexToAsir('\\frac{a * x^2}{b_1 + b_2}')).toBe('(a * x^(2)) / (b_1 + b_2);\n');
    });

    test('should ignore LaTeX alignment & and newline \\', () => {
        expect(convertLatexToAsir('A &= x+1\\ \\ &+y+3')).toBe('A = x + 1 + y + 3;\n');
    });

    test('should ignore LaTeX spacing commands like \\quad', () => {
        expect(convertLatexToAsir('x \\quad y')).toBe('x * y;\n');
    });

        test('should ignore LaTeX spacing commands with other content', () => {
            expect(convertLatexToAsir('x + \\\\, y \\\\; z \\\\: a')).toBe('x + y * z * a;\n');
        });
    
        test('should handle implicit multiplication between number and parenthesized expression', () => {
            expect(convertLatexToAsir('-2 (-1 + t_2^2)')).toBe('-2 * (-1 + t_2^(2));\n');
        });
    });
