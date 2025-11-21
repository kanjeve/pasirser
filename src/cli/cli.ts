import * as fs from 'fs';
import * as path from 'path';
import { parseAndBuildAST } from '../core/parser/parserUtils.js';
import * as ast from '../core/ast/asirAst.js';
import { Validator } from '../semantics/validator.js';
import { Diagnostic, DiagnosticSeverity } from '../utils/diagnostics.js';
import { SymbolTable } from '../semantics/symbolTable.js';
import { Command } from 'commander'; 
import { AsirFormatter } from '../features/formatter.js';
import { getCompletions } from '../features/completionProvider.js'; 
import { getHoverInfo } from '../features/hoverProvider.js'; 
import { getDefinitionLocation } from '../features/definitionProvider.js'; 
import { getRenameEdits } from '../features/renameProvider.js'; 
import { getDocumentSymbols } from '../features/documentSymbolProvider.js'; 
import { getSemanticTokens } from '../features/semanticTokensProvider.js'; 
import { convertLatexToAsir } from '../latex-converter/LatexToAsirConverter.js'; 

export function analyze(code: string, filePath: string | null = null, systemIncludePaths: string[] = [], loadPaths: string[] = []): { ast: ast.ProgramNode | null, diagnostics: Diagnostic[], symbolTable: SymbolTable | null } {
    const { ast, diagnostics: parseDiagnostics } = parseAndBuildAST(code, filePath || 'untitled'); 
    const diagnostics: Diagnostic[] = [...parseDiagnostics];
    if (!ast) {
        return { ast: null, diagnostics, symbolTable: null };
    }
    const validator = new Validator(ast, filePath, systemIncludePaths, loadPaths);
    const semanticErrors = validator.analyze(ast);
    diagnostics.push(...semanticErrors);
    return { ast, diagnostics, symbolTable: validator.symbolTable };
}

// --- Main execution for command-line ---
if (require.main === module) {
    const program = new Command();

    program.command('analyze <file>')
        .description('Analyze an Asir file for diagnostics.')
        .option('-f, --format <type>', 'Output format (text or json)', 'text')
        .option('-I, --include-path <paths...>', 'Specify system include paths')
        .option('--load-path <paths...>', 'Specify load paths')
        .option('--min-severity <level>', '表示する診断の最小重要度 (error, warning, info, hint)', 'hint')
        .action((filePath, options) => {
            // console.log(`Analyzing: ${filePath}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const { diagnostics } = analyze(code, absolutePath, options.includePath, options.loadPath);

                const severityLevels = {
                    'error': DiagnosticSeverity.Error,
                    'warning': DiagnosticSeverity.Warning,
                    'info': DiagnosticSeverity.Information,
                    'hint': DiagnosticSeverity.Hint,
                };
                const minSeverityLevelString = options.minSeverity.toLowerCase() as 'error' | 'warning' | 'info' | 'hint';
                const minSeverity = severityLevels[minSeverityLevelString] || DiagnosticSeverity.Hint;

                const filteredDiagnostics = diagnostics.filter(d => d.severity <= minSeverity);

                if (options.format === 'json') {
                    console.log(JSON.stringify(filteredDiagnostics, null, 2));
                } else {
                    if (filteredDiagnostics.length > 0) {
                        console.log('\n--- Diagnostics ---');
                        for (const d of filteredDiagnostics) {
                            const filePart = d.filePath ? `${path.basename(d.filePath)}:` : '';
                            console.log(`[${d.source}] ${filePart}L${d.range.start.line}:C${d.range.start.character} - ${d.message} (Severity: ${DiagnosticSeverity[d.severity]})`);
                        }
                    } else {
                        console.log('No issues found.');
                    }
                }
            } catch (e) {
                console.error(`Error reading file: ${e}`);
                process.exit(1);
            }
        });

    program.command('format <file>')
        .description('Format an Asir file.')
        .action((filePath) => {
            // console.log(`Formatting: ${filePath}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const { ast, diagnostics } = parseAndBuildAST(code, absolutePath);

                if (diagnostics.length > 0 || !ast) {
                    console.error('Formatting failed due to syntax errors:');
                    diagnostics.forEach(d => {
                        console.error(`L${d.range.start.line}:C${d.range.start.character} - ${d.message}`);
                    });
                    process.exit(1);
                }

                const formatter = new AsirFormatter();
                const formattedCode = formatter.format(ast);
                console.log(formattedCode);

            } catch (e) {
                console.error(`Error formatting file: ${e}`);
                process.exit(1);
            }
        });

    program.command('complete <file> <line> <character>')
        .description('Provide code completion suggestions for an Asir file.')
        .action((filePath, lineStr, charStr) => {
            // console.log(`Getting completions for: ${filePath} at L${lineStr}:C${charStr}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const line = parseInt(lineStr, 10);
                const character = parseInt(charStr, 10);

                const { ast, diagnostics, symbolTable } = analyze(code, absolutePath);

                const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
                if (errors.length > 0 || !ast || !symbolTable) {
                    console.error('Completion failed due to errors or missing AST/SymbolTable:');
                    errors.forEach(e => {
                        console.error(`L${e.range.start.line}:C${e.range.start.character} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const completions = getCompletions(code, { line, character }, ast, symbolTable);
                console.log(JSON.stringify(completions, null, 2));

            } catch (e) {
                console.error(`Error getting completions: ${e}`);
                process.exit(1);
            }
        });

    program.command('hover <file> <line> <character>')
        .description('Provide hover information for a symbol in an Asir file.')
        .action((filePath, lineStr, charStr) => {
            // console.log(`Getting hover info for: ${filePath} at L${lineStr}:C${charStr}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const line = parseInt(lineStr, 10);
                const character = parseInt(charStr, 10);

                const { ast, diagnostics, symbolTable } = analyze(code, absolutePath);

                const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
                if (errors.length > 0 || !ast || !symbolTable) {
                    console.error('Hover failed due to errors or missing AST/SymbolTable:');
                    errors.forEach(e => {
                        console.error(`L${e.range.start.line}:C${e.range.start.character} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const hoverInfo = getHoverInfo(code, { line, character }, ast, symbolTable);
                console.log(JSON.stringify(hoverInfo, null, 2));

            } catch (e) {
                console.error(`Error getting hover info: ${e}`);
                process.exit(1);
            }
        });

    program.command('definition <file> <line> <character>')
        .description('Find the definition of a symbol in an Asir file.')
        .action((filePath, lineStr, charStr) => {
            // console.log(`Getting definition for: ${filePath} at L${lineStr}:C${charStr}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const line = parseInt(lineStr, 10);
                const character = parseInt(charStr, 10);

                const { ast, diagnostics, symbolTable } = analyze(code, absolutePath);

                const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
                if (errors.length > 0 || !ast || !symbolTable) {
                    errors.forEach(e => {
                        console.error(`L${e.range.start.line}:C${e.range.start.character} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const definitionLocation = getDefinitionLocation(code, { line, character }, ast, symbolTable, absolutePath);
                if (definitionLocation) {
                    console.log(JSON.stringify(definitionLocation, null, 2));
                } else {
                    console.log('Definition not found.');
                }

            } catch (e) {
                console.error(`Error getting definition: ${e}`);
                process.exit(1);
            }
        });

    program.command('rename <file> <line> <character> <newName>')
        .description('Generate text edits to rename a symbol in an Asir file.')
        .action((filePath, lineStr, charStr, newName) => {
            // console.log(`Generating rename edits for: ${filePath} at L${lineStr}:C${charStr} to new name: ${newName}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const line = parseInt(lineStr, 10);
                const character = parseInt(charStr, 10);

                const { ast, diagnostics, symbolTable } = analyze(code, absolutePath);

                const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
                if (errors.length > 0 || !ast || !symbolTable) {
                    console.error('Rename failed due to errors or missing AST/SymbolTable:');
                    errors.forEach(e => {
                        console.error(`L${e.range.start.line}:C${e.range.start.character} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const renameEdits = getRenameEdits(code, { line, character }, newName, ast, symbolTable, absolutePath);
                if (renameEdits && renameEdits.length > 0) {
                    console.log(JSON.stringify(renameEdits, null, 2));
                } else {
                    console.log('No rename edits generated. Symbol not found or no references.');
                }

            } catch (e) {
                console.error(`Error generating rename edits: ${e}`);
                process.exit(1);
            }
        });

    program.command('semantic-tokens <file>')
        .description('Generate semantic tokens for an Asir file.')
        .action((filePath) => {
            // console.log(`Generating semantic tokens for: ${filePath}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const { ast, diagnostics, symbolTable } = analyze(code, absolutePath);

                const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
                if (errors.length > 0 || !ast || !symbolTable) {
                    console.error('Semantic token generation failed due to errors or missing AST/SymbolTable:');
                    errors.forEach(e => {
                        console.error(`L${e.range.start.line}:C${e.range.start.character} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const semanticTokens = getSemanticTokens(ast, symbolTable);
                console.log(JSON.stringify(semanticTokens, null, 2));

            } catch (e) {
                console.error(`Error generating semantic tokens: ${e}`);
                process.exit(1);
            }
        });

    program.command('outline <file>')
        .description('Generate document symbols (outline) for an Asir file.')
        .action((filePath) => {
            // console.log(`Generating document symbols for: ${filePath}`); // Removed
            try {
                const absolutePath = path.resolve(filePath);
                const code = fs.readFileSync(absolutePath, 'utf-8');
                const { ast, diagnostics, symbolTable } = analyze(code, absolutePath);

                const errors = diagnostics.filter(d => d.severity === DiagnosticSeverity.Error);
                if (errors.length > 0 || !ast || !symbolTable) {
                    console.error('Document symbol generation failed due to errors or missing AST/SymbolTable:');
                    errors.forEach(e => {
                        console.error(`L${e.range.start.line}:C${e.range.start.character} - ${e.message}`);
                    });
                    process.exit(1);
                }

                const documentSymbols = getDocumentSymbols(ast, symbolTable);
                console.log(JSON.stringify(documentSymbols, null, 2));

            } catch (e) {
                console.error(`Error generating document symbols: ${e}`);
                process.exit(1);
            }
        });

    program.command('convert <file>')
        .description('Convert a file containing a LaTeX math expression to an Asir string.')
        .action((filePath) => {
            try {
                const absolutePath = path.resolve(filePath);
                const latexCode = fs.readFileSync(absolutePath, 'utf-8');
                
                const asirCode = convertLatexToAsir(latexCode);
                
                console.log(asirCode);

            } catch (e) {
                console.error(`Error converting file: ${e}`);
                process.exit(1);
            }
        });

    program.parse(process.argv);
}