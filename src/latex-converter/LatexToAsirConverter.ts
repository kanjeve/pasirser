import { CharStream, CommonTokenStream, ConsoleErrorListener, ParseTree } from 'antlr4ng';
import { LatexExprLexer } from './src/latex-converter/.antlr/LatexExprLexer';
import {
    LatexExprParser,
    ProgContext,
    PowerExprContext,
    UnaryExprContext,
    ImplicitMultExprContext,
    MulDivExprContext,
    AddSubExprContext,
    PrimaryExprContext,
    PrimaryContext,
    FracCommandContext,
    GreekCommandContext,
    AssignStmtContext,
} from './src/latex-converter/.antlr/LatexExprParser';
import { LatexExprVisitor } from './src/latex-converter/.antlr/LatexExprVisitor';


/**
 * Visitor class to traverse the parse tree and convert it to an Asir string.
 * It overrides methods from LatexExprVisitor to build the target string.
 */
class LatexToAsirVisitor extends LatexExprVisitor<string> {

    protected aggregateResult(aggregate: string | null, nextResult: string | null): string | null {
        if (aggregate === null) {
            return nextResult;
        }
        if (nextResult === null) {
            return aggregate;
        }
        return aggregate + nextResult;
    }
    
    // Default result for visiting a node should be an empty string.
    protected defaultResult(): string {
        return '';
    }

    // Ensure the top-level visit call returns a string.
    visit(tree: ParseTree): string {
        return super.visit(tree) ?? '';
    }

    // Handles visiting children and aggregating their results.
    visitChildren(node: any): string {
        let result = this.defaultResult();
        for (let i = 0; i < node.getChildCount(); i++) {
            const child = node.getChild(i);
            const childResult = child.accept(this);
            result = this.aggregateResult(result, childResult) ?? result;
        }
        return result;
    }

    visitProg = (ctx: ProgContext): string => {
        const statements = ctx.statement().map(stmt => this.visit(stmt) + ';');
        return statements.join('\n') + (statements.length > 0 ? '\n' : '');
    }

    // Visitor methods for the new user-designed left-recursive grammar
    visitPowerExpr = (ctx: PowerExprContext): string => {
        const left = this.visit(ctx.expr(0)!);
        const right = this.visit(ctx.expr(1)!);
        const op = ctx._op?.text ?? '';
        if (op === '^') {
            return `${left}^(${right})`;
        }
        return `${left}${op}${right}`;
    }

    visitUnaryExpr = (ctx: UnaryExprContext): string => {
        const op = ctx._op?.text ?? '';
        const expr = this.visit(ctx.expr());
        return `${op}${expr}`;
    }

    visitImplicitMultExpr = (ctx: ImplicitMultExprContext): string => {
        const left = this.visit(ctx.expr());
        const right = this.visit(ctx.primary());
        return `${left} * ${right}`;
    }

    visitMulDivExpr = (ctx: MulDivExprContext): string => {
        const left = this.visit(ctx.expr(0)!);
        const right = this.visit(ctx.expr(1)!);
        const op = ctx._op?.text ?? '';
        return `${left} ${op} ${right}`;
    }

    visitAddSubExpr = (ctx: AddSubExprContext): string => {
        const left = this.visit(ctx.expr(0)!);
        const right = this.visit(ctx.expr(1)!);
        const op = ctx._op?.text ?? '';
        return `${left} ${op} ${right}`;
    }

    visitPrimaryExpr = (ctx: PrimaryExprContext): string => {
        return this.visit(ctx.primary());
    }

    visitPrimary = (ctx: PrimaryContext): string => {
        if (ctx.LPAREN()) {
             return `(${this.visit(ctx.expr()!)})`;
        }
        if (ctx.LBRACE()) {
             return `(${this.visit(ctx.expr()!)})`;
        }
        if (ctx.command()) {
            return this.visit(ctx.command()!);
        }

        return ctx.getText();
    }

    visitFracCommand = (ctx: FracCommandContext): string => {
        const numer = this.visit(ctx._numer!);
        const denom = this.visit(ctx._denom!);
        return `(${numer}) / (${denom})`;
    }

    visitGreekCommand = (ctx: GreekCommandContext): string => {
        const command = ctx.getText().substring(1);
        if (command === 'pi') {
            return '@pi';
        }
        if (command === 'sqrt') {
            return 'sqrt';
        }
        return command;
    }

    visitAssignStmt = (ctx: AssignStmtContext): string => {
        const assignStmt = ctx.assignStatement();
        const id = assignStmt._variable?.text ?? '';
        const expr = this.visit(assignStmt._value!);
        return `${id} = ${expr}`;
    };
}


/**
 * Converts a LaTeX math string to an Asir-compatible string by parsing it
 * and using a visitor to construct the target format.
 * @param latexString The LaTeX string to convert.
 * @returns The converted Asir string.
 */
export function convertLatexToAsir(latexString: string): string {

    const inputStream = CharStream.fromString(latexString);
    const lexer = new LatexExprLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LatexExprParser(tokenStream);

    // エラーリスナー
    parser.removeErrorListeners();
    parser.addErrorListener(new ConsoleErrorListener());

    const tree = parser.prog();

    const visitor = new LatexToAsirVisitor();
    const result = visitor.visit(tree);
    return result;
}
