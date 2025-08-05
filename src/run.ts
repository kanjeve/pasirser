import { CharStream, CommonTokenStream } from 'antlr4ng';
import { testLexer } from './.antlr/testLexer.js';
import { testParser } from './.antlr/testParser.js';
import { AsirASTBuilder } from './testAsirASTBuilder.js';
import { CustomErrorListener } from './customErrorListener.js';
import * as fs from 'fs';
import { ASTBuilderError } from './errors.js';

export function parseAsirCodeAndBuildAST(code: string): { ast: any | null; errors: any[]; } {
    console.log("Parser function started for code:", code);
    const chars = CharStream.fromString(code);
    const lexer = new testLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new testParser(tokens);

    parser.removeErrorListeners();
    const errorListener = new CustomErrorListener();
    parser.addErrorListener(errorListener);

    const tree = parser.prog();

    const errors = errorListener.getErrors();
    if (errors.length > 0) {
        console.error("Syntax errors found:");
        for (const error of errors) {
            console.error(`  - Line ${error.line}:${error.column} -> Token: '${error.offendingSymbol}', Message: ${error.message}`);
            if(error.ruleStack.length > 0) {
                console.error(`    Rule Stack: ${error.ruleStack.join(' -> ')}`);
            }
        }
    }

    const ambiguities = errorListener.getAmbiguities();
    if (ambiguities.length > 0) {
        console.warn("Ambiguities detected:");
        for (const ambiguity of ambiguities) {
            console.warn(`  - Line ${ambiguity.line}:${ambiguity.column} -> ${ambiguity.message}`);
        }
    }

    const diagnostics = errorListener.getDiagnostics();
    if (diagnostics.length > 0) {
        console.info("Diagnostic messages:");
        for (const diagnostic of diagnostics) {
            console.info(`  - [${diagnostic.type}] Line ${diagnostic.line}:${diagnostic.column} -> ${diagnostic.message}`);
        }
    }

    if (errors.length > 0) {
        console.log("\nAST construction skipped due to syntax errors.");
        return { ast: null, errors: errors };
    }

    console.log("--- Raw Parse Tree ---");
    console.log(tree.toStringTree(parser.ruleNames, parser));
    console.log("----------------------");

    console.log("--- AST Building ---");
    const astBuilder = new AsirASTBuilder();
    let ast = null;
    try {
        ast = astBuilder.visit(tree);
    } catch (e) {
        if (e instanceof ASTBuilderError) {
            console.error(`\nAST Build Error: ${e.message}`);
            // e.loc は ASTBuilderError のコンストラクタでメッセージに含まれるため、ここでは不要
        } else {
            console.error(`\nAn unexpected error occurred during AST building: ${e}`);
        }
        return { ast: null, errors: errors }; // AST構築失敗時もエラー情報を返す
    }

    console.log("--- Constructed AST ---");
    console.log(JSON.stringify(ast, null, 2));

    return { ast: ast, errors: errors };
}

// --- Main execution ---
if (require.main === module) {
    const inputFile = process.argv[2] || 'input.txt';
    console.log(`Reading from: ${inputFile}`);

    try {
        const code = fs.readFileSync(inputFile, 'utf-8');
        parseAsirCodeAndBuildAST(code);
    } catch (e) {
        console.error(`Error reading file: ${e}`);
    }
}