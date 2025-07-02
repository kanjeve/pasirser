// Generated from c:/Users/kaAAA/pasirser/test.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link testParser}.
 */
public interface testListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link testParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(testParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link testParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(testParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ExprStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterExprStatement(testParser.ExprStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ExprStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitExprStatement(testParser.ExprStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code EmptyLineStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterEmptyLineStatement(testParser.EmptyLineStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code EmptyLineStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitEmptyLineStatement(testParser.EmptyLineStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Assignment}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(testParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Assignment}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(testParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DefinitionStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDefinitionStatement(testParser.DefinitionStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DefinitionStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDefinitionStatement(testParser.DefinitionStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IfStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(testParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IfStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(testParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ForStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(testParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ForStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(testParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code WhileStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(testParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code WhileStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(testParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DoStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterDoStatement(testParser.DoStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DoStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitDoStatement(testParser.DoStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ReturnStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(testParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ReturnStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(testParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BreakStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterBreakStatement(testParser.BreakStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BreakStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitBreakStatement(testParser.BreakStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ContinueStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterContinueStatement(testParser.ContinueStatementContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ContinueStatement}
	 * labeled alternative in {@link testParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitContinueStatement(testParser.ContinueStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Def}
	 * labeled alternative in {@link testParser#functionDefinition}.
	 * @param ctx the parse tree
	 */
	void enterDef(testParser.DefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Def}
	 * labeled alternative in {@link testParser#functionDefinition}.
	 * @param ctx the parse tree
	 */
	void exitDef(testParser.DefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code If}
	 * labeled alternative in {@link testParser#functionIf}.
	 * @param ctx the parse tree
	 */
	void enterIf(testParser.IfContext ctx);
	/**
	 * Exit a parse tree produced by the {@code If}
	 * labeled alternative in {@link testParser#functionIf}.
	 * @param ctx the parse tree
	 */
	void exitIf(testParser.IfContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Forini}
	 * labeled alternative in {@link testParser#forInitializer}.
	 * @param ctx the parse tree
	 */
	void enterForini(testParser.ForiniContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Forini}
	 * labeled alternative in {@link testParser#forInitializer}.
	 * @param ctx the parse tree
	 */
	void exitForini(testParser.ForiniContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Forcon}
	 * labeled alternative in {@link testParser#forCondition}.
	 * @param ctx the parse tree
	 */
	void enterForcon(testParser.ForconContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Forcon}
	 * labeled alternative in {@link testParser#forCondition}.
	 * @param ctx the parse tree
	 */
	void exitForcon(testParser.ForconContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Forup1}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void enterForup1(testParser.Forup1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Forup1}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void exitForup1(testParser.Forup1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code Forup2}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void enterForup2(testParser.Forup2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Forup2}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void exitForup2(testParser.Forup2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code Forup3}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void enterForup3(testParser.Forup3Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Forup3}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void exitForup3(testParser.Forup3Context ctx);
	/**
	 * Enter a parse tree produced by the {@code Forup4}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void enterForup4(testParser.Forup4Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Forup4}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void exitForup4(testParser.Forup4Context ctx);
	/**
	 * Enter a parse tree produced by the {@code Forup5}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void enterForup5(testParser.Forup5Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Forup5}
	 * labeled alternative in {@link testParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void exitForup5(testParser.Forup5Context ctx);
	/**
	 * Enter a parse tree produced by the {@code For}
	 * labeled alternative in {@link testParser#functionFor}.
	 * @param ctx the parse tree
	 */
	void enterFor(testParser.ForContext ctx);
	/**
	 * Exit a parse tree produced by the {@code For}
	 * labeled alternative in {@link testParser#functionFor}.
	 * @param ctx the parse tree
	 */
	void exitFor(testParser.ForContext ctx);
	/**
	 * Enter a parse tree produced by the {@code While}
	 * labeled alternative in {@link testParser#functionWhile}.
	 * @param ctx the parse tree
	 */
	void enterWhile(testParser.WhileContext ctx);
	/**
	 * Exit a parse tree produced by the {@code While}
	 * labeled alternative in {@link testParser#functionWhile}.
	 * @param ctx the parse tree
	 */
	void exitWhile(testParser.WhileContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Do}
	 * labeled alternative in {@link testParser#functionDo}.
	 * @param ctx the parse tree
	 */
	void enterDo(testParser.DoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Do}
	 * labeled alternative in {@link testParser#functionDo}.
	 * @param ctx the parse tree
	 */
	void exitDo(testParser.DoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Return}
	 * labeled alternative in {@link testParser#functionReturn}.
	 * @param ctx the parse tree
	 */
	void enterReturn(testParser.ReturnContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Return}
	 * labeled alternative in {@link testParser#functionReturn}.
	 * @param ctx the parse tree
	 */
	void exitReturn(testParser.ReturnContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Continue}
	 * labeled alternative in {@link testParser#functionContinue}.
	 * @param ctx the parse tree
	 */
	void enterContinue(testParser.ContinueContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Continue}
	 * labeled alternative in {@link testParser#functionContinue}.
	 * @param ctx the parse tree
	 */
	void exitContinue(testParser.ContinueContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Break}
	 * labeled alternative in {@link testParser#functionBreak}.
	 * @param ctx the parse tree
	 */
	void enterBreak(testParser.BreakContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Break}
	 * labeled alternative in {@link testParser#functionBreak}.
	 * @param ctx the parse tree
	 */
	void exitBreak(testParser.BreakContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Fcall}
	 * labeled alternative in {@link testParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFcall(testParser.FcallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Fcall}
	 * labeled alternative in {@link testParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFcall(testParser.FcallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Main}
	 * labeled alternative in {@link testParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMain(testParser.MainContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Main}
	 * labeled alternative in {@link testParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMain(testParser.MainContext ctx);
	/**
	 * Enter a parse tree produced by the {@code QEor}
	 * labeled alternative in {@link testParser#qeOrExpr}.
	 * @param ctx the parse tree
	 */
	void enterQEor(testParser.QEorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code QEor}
	 * labeled alternative in {@link testParser#qeOrExpr}.
	 * @param ctx the parse tree
	 */
	void exitQEor(testParser.QEorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code QEand}
	 * labeled alternative in {@link testParser#qeAndExpr}.
	 * @param ctx the parse tree
	 */
	void enterQEand(testParser.QEandContext ctx);
	/**
	 * Exit a parse tree produced by the {@code QEand}
	 * labeled alternative in {@link testParser#qeAndExpr}.
	 * @param ctx the parse tree
	 */
	void exitQEand(testParser.QEandContext ctx);
	/**
	 * Enter a parse tree produced by the {@code QECompare}
	 * labeled alternative in {@link testParser#qeCompareExpr}.
	 * @param ctx the parse tree
	 */
	void enterQECompare(testParser.QECompareContext ctx);
	/**
	 * Exit a parse tree produced by the {@code QECompare}
	 * labeled alternative in {@link testParser#qeCompareExpr}.
	 * @param ctx the parse tree
	 */
	void exitQECompare(testParser.QECompareContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Or}
	 * labeled alternative in {@link testParser#orExpr}.
	 * @param ctx the parse tree
	 */
	void enterOr(testParser.OrContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Or}
	 * labeled alternative in {@link testParser#orExpr}.
	 * @param ctx the parse tree
	 */
	void exitOr(testParser.OrContext ctx);
	/**
	 * Enter a parse tree produced by the {@code And}
	 * labeled alternative in {@link testParser#andExpr}.
	 * @param ctx the parse tree
	 */
	void enterAnd(testParser.AndContext ctx);
	/**
	 * Exit a parse tree produced by the {@code And}
	 * labeled alternative in {@link testParser#andExpr}.
	 * @param ctx the parse tree
	 */
	void exitAnd(testParser.AndContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Compare}
	 * labeled alternative in {@link testParser#compareExpr}.
	 * @param ctx the parse tree
	 */
	void enterCompare(testParser.CompareContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Compare}
	 * labeled alternative in {@link testParser#compareExpr}.
	 * @param ctx the parse tree
	 */
	void exitCompare(testParser.CompareContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link testParser#addSubExpr}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(testParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link testParser#addSubExpr}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(testParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link testParser#mulDivExpr}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(testParser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link testParser#mulDivExpr}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(testParser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code UnaryMinus}
	 * labeled alternative in {@link testParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterUnaryMinus(testParser.UnaryMinusContext ctx);
	/**
	 * Exit a parse tree produced by the {@code UnaryMinus}
	 * labeled alternative in {@link testParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitUnaryMinus(testParser.UnaryMinusContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NotExpr}
	 * labeled alternative in {@link testParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterNotExpr(testParser.NotExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NotExpr}
	 * labeled alternative in {@link testParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitNotExpr(testParser.NotExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PowerExprRule}
	 * labeled alternative in {@link testParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterPowerExprRule(testParser.PowerExprRuleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PowerExprRule}
	 * labeled alternative in {@link testParser#unaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitPowerExprRule(testParser.PowerExprRuleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Power}
	 * labeled alternative in {@link testParser#powerExpr}.
	 * @param ctx the parse tree
	 */
	void enterPower(testParser.PowerContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Power}
	 * labeled alternative in {@link testParser#powerExpr}.
	 * @param ctx the parse tree
	 */
	void exitPower(testParser.PowerContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Real}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterReal(testParser.RealContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Real}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitReal(testParser.RealContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterIdExpr(testParser.IdExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitIdExpr(testParser.IdExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code FCallExpr}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterFCallExpr(testParser.FCallExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code FCallExpr}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitFCallExpr(testParser.FCallExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Paren}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterParen(testParser.ParenContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Paren}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitParen(testParser.ParenContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SpecNum}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void enterSpecNum(testParser.SpecNumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SpecNum}
	 * labeled alternative in {@link testParser#primaryExpr}.
	 * @param ctx the parse tree
	 */
	void exitSpecNum(testParser.SpecNumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Rat}
	 * labeled alternative in {@link testParser#rational}.
	 * @param ctx the parse tree
	 */
	void enterRat(testParser.RatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Rat}
	 * labeled alternative in {@link testParser#rational}.
	 * @param ctx the parse tree
	 */
	void exitRat(testParser.RatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Period}
	 * labeled alternative in {@link testParser#decimal}.
	 * @param ctx the parse tree
	 */
	void enterPeriod(testParser.PeriodContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Period}
	 * labeled alternative in {@link testParser#decimal}.
	 * @param ctx the parse tree
	 */
	void exitPeriod(testParser.PeriodContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Float}
	 * labeled alternative in {@link testParser#decimal}.
	 * @param ctx the parse tree
	 */
	void enterFloat(testParser.FloatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Float}
	 * labeled alternative in {@link testParser#decimal}.
	 * @param ctx the parse tree
	 */
	void exitFloat(testParser.FloatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RatNum}
	 * labeled alternative in {@link testParser#num}.
	 * @param ctx the parse tree
	 */
	void enterRatNum(testParser.RatNumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RatNum}
	 * labeled alternative in {@link testParser#num}.
	 * @param ctx the parse tree
	 */
	void exitRatNum(testParser.RatNumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DecNum}
	 * labeled alternative in {@link testParser#num}.
	 * @param ctx the parse tree
	 */
	void enterDecNum(testParser.DecNumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DecNum}
	 * labeled alternative in {@link testParser#num}.
	 * @param ctx the parse tree
	 */
	void exitDecNum(testParser.DecNumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NatNum}
	 * labeled alternative in {@link testParser#num}.
	 * @param ctx the parse tree
	 */
	void enterNatNum(testParser.NatNumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NatNum}
	 * labeled alternative in {@link testParser#num}.
	 * @param ctx the parse tree
	 */
	void exitNatNum(testParser.NatNumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code VId}
	 * labeled alternative in {@link testParser#id}.
	 * @param ctx the parse tree
	 */
	void enterVId(testParser.VIdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code VId}
	 * labeled alternative in {@link testParser#id}.
	 * @param ctx the parse tree
	 */
	void exitVId(testParser.VIdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code FId}
	 * labeled alternative in {@link testParser#id}.
	 * @param ctx the parse tree
	 */
	void enterFId(testParser.FIdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code FId}
	 * labeled alternative in {@link testParser#id}.
	 * @param ctx the parse tree
	 */
	void exitFId(testParser.FIdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code V2Id}
	 * labeled alternative in {@link testParser#id}.
	 * @param ctx the parse tree
	 */
	void enterV2Id(testParser.V2IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code V2Id}
	 * labeled alternative in {@link testParser#id}.
	 * @param ctx the parse tree
	 */
	void exitV2Id(testParser.V2IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Ima}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void enterIma(testParser.ImaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Ima}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void exitIma(testParser.ImaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Pi}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void enterPi(testParser.PiContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Pi}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void exitPi(testParser.PiContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Nap}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void enterNap(testParser.NapContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Nap}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void exitNap(testParser.NapContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Bef}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void enterBef(testParser.BefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Bef}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void exitBef(testParser.BefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BefN}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void enterBefN(testParser.BefNContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BefN}
	 * labeled alternative in {@link testParser#specialnum}.
	 * @param ctx the parse tree
	 */
	void exitBefN(testParser.BefNContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sentence}
	 * labeled alternative in {@link testParser#block}.
	 * @param ctx the parse tree
	 */
	void enterSentence(testParser.SentenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Sentence}
	 * labeled alternative in {@link testParser#block}.
	 * @param ctx the parse tree
	 */
	void exitSentence(testParser.SentenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Sentence1}
	 * labeled alternative in {@link testParser#block}.
	 * @param ctx the parse tree
	 */
	void enterSentence1(testParser.Sentence1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code Sentence1}
	 * labeled alternative in {@link testParser#block}.
	 * @param ctx the parse tree
	 */
	void exitSentence1(testParser.Sentence1Context ctx);
}