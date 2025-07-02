// Generated from c:/Users/kaAAA/pasirser/test.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class testParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INC=1, DEC=2, EQ=3, NEQ=4, LE=5, GE=6, LT=7, GT=8, AND=9, OR=10, NOT=11, 
		PLUS=12, MINUS=13, MULT=14, DIV=15, POWER=16, ASSIGN=17, LPAREN=18, RPAREN=19, 
		LBRANCE=20, RBRANCE=21, SEMI=22, COMMA=23, POINT=24, NATURAL=25, INT=26, 
		EXP=27, IMAGINARY=28, PI=29, NAPIER=30, BEFORE=31, BEFORE_N=32, QE_1=33, 
		QE_2=34, QE_3=35, QE_4=36, QE_5=37, QE_6=38, QE_7=39, DEF=40, IF=41, FOR=42, 
		WHILE=43, DO=44, ELSE=45, RETURN=46, CONTINUE=47, BREAK=48, VAR_2=49, 
		FUNC_ID=50, VAR_ID=51, NEWLINE=52, WS=53;
	public static final int
		RULE_prog = 0, RULE_statement = 1, RULE_functionDefinition = 2, RULE_functionIf = 3, 
		RULE_forInitializer = 4, RULE_forCondition = 5, RULE_forUpdate = 6, RULE_functionFor = 7, 
		RULE_functionWhile = 8, RULE_functionDo = 9, RULE_functionReturn = 10, 
		RULE_functionContinue = 11, RULE_functionBreak = 12, RULE_functionCall = 13, 
		RULE_expr = 14, RULE_qeOrExpr = 15, RULE_qeAndExpr = 16, RULE_qeCompareExpr = 17, 
		RULE_orExpr = 18, RULE_andExpr = 19, RULE_compareExpr = 20, RULE_addSubExpr = 21, 
		RULE_mulDivExpr = 22, RULE_unaryExpr = 23, RULE_powerExpr = 24, RULE_primaryExpr = 25, 
		RULE_rational = 26, RULE_decimal = 27, RULE_num = 28, RULE_id = 29, RULE_specialnum = 30, 
		RULE_block = 31;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "statement", "functionDefinition", "functionIf", "forInitializer", 
			"forCondition", "forUpdate", "functionFor", "functionWhile", "functionDo", 
			"functionReturn", "functionContinue", "functionBreak", "functionCall", 
			"expr", "qeOrExpr", "qeAndExpr", "qeCompareExpr", "orExpr", "andExpr", 
			"compareExpr", "addSubExpr", "mulDivExpr", "unaryExpr", "powerExpr", 
			"primaryExpr", "rational", "decimal", "num", "id", "specialnum", "block"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'++'", "'--'", "'=='", "'!='", "'<='", "'>='", "'<'", "'>'", "'&&'", 
			"'||'", "'!'", "'+'", "'-'", "'*'", "'/'", "'^'", "'='", "'('", "')'", 
			"'{'", "'}'", "';'", "','", "'.'", null, null, null, "'@i'", "'@pi'", 
			"'@e'", "'@@'", "'@n'", "'@>'", "'@<'", "'@>='", "'@<='", "'@=='", "'@&&'", 
			"'@||'", "'def'", "'if'", "'for'", "'while'", "'do'", "'else'", "'return'", 
			"'continue'", "'break'", "'@'", null, null, "'\\n'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INC", "DEC", "EQ", "NEQ", "LE", "GE", "LT", "GT", "AND", "OR", 
			"NOT", "PLUS", "MINUS", "MULT", "DIV", "POWER", "ASSIGN", "LPAREN", "RPAREN", 
			"LBRANCE", "RBRANCE", "SEMI", "COMMA", "POINT", "NATURAL", "INT", "EXP", 
			"IMAGINARY", "PI", "NAPIER", "BEFORE", "BEFORE_N", "QE_1", "QE_2", "QE_3", 
			"QE_4", "QE_5", "QE_6", "QE_7", "DEF", "IF", "FOR", "WHILE", "DO", "ELSE", 
			"RETURN", "CONTINUE", "BREAK", "VAR_2", "FUNC_ID", "VAR_ID", "NEWLINE", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "test.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public testParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(testParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitProg(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4467324170283008L) != 0)) {
				{
				{
				setState(64);
				statement();
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(70);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentContext extends StatementContext {
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public TerminalNode ASSIGN() { return getToken(testParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(testParser.SEMI, 0); }
		public AssignmentContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitAssignment(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BreakStatementContext extends StatementContext {
		public FunctionBreakContext functionBreak() {
			return getRuleContext(FunctionBreakContext.class,0);
		}
		public BreakStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterBreakStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitBreakStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends StatementContext {
		public FunctionIfContext functionIf() {
			return getRuleContext(FunctionIfContext.class,0);
		}
		public IfStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterIfStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitIfStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefinitionStatementContext extends StatementContext {
		public FunctionDefinitionContext functionDefinition() {
			return getRuleContext(FunctionDefinitionContext.class,0);
		}
		public DefinitionStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterDefinitionStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitDefinitionStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DoStatementContext extends StatementContext {
		public FunctionDoContext functionDo() {
			return getRuleContext(FunctionDoContext.class,0);
		}
		public DoStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterDoStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitDoStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprStatementContext extends StatementContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(testParser.SEMI, 0); }
		public ExprStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterExprStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitExprStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends StatementContext {
		public FunctionReturnContext functionReturn() {
			return getRuleContext(FunctionReturnContext.class,0);
		}
		public ReturnStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterReturnStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitReturnStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WhileStatementContext extends StatementContext {
		public FunctionWhileContext functionWhile() {
			return getRuleContext(FunctionWhileContext.class,0);
		}
		public WhileStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterWhileStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitWhileStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForStatementContext extends StatementContext {
		public FunctionForContext functionFor() {
			return getRuleContext(FunctionForContext.class,0);
		}
		public ForStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ContinueStatementContext extends StatementContext {
		public FunctionContinueContext functionContinue() {
			return getRuleContext(FunctionContinueContext.class,0);
		}
		public ContinueStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterContinueStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitContinueStatement(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EmptyLineStatementContext extends StatementContext {
		public TerminalNode SEMI() { return getToken(testParser.SEMI, 0); }
		public EmptyLineStatementContext(StatementContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterEmptyLineStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitEmptyLineStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(89);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new ExprStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(72);
				expr();
				setState(73);
				match(SEMI);
				}
				break;
			case 2:
				_localctx = new EmptyLineStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				match(SEMI);
				}
				break;
			case 3:
				_localctx = new AssignmentContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(76);
				match(VAR_ID);
				setState(77);
				match(ASSIGN);
				setState(78);
				expr();
				setState(79);
				match(SEMI);
				}
				break;
			case 4:
				_localctx = new DefinitionStatementContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(81);
				functionDefinition();
				}
				break;
			case 5:
				_localctx = new IfStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(82);
				functionIf();
				}
				break;
			case 6:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(83);
				functionFor();
				}
				break;
			case 7:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(84);
				functionWhile();
				}
				break;
			case 8:
				_localctx = new DoStatementContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(85);
				functionDo();
				}
				break;
			case 9:
				_localctx = new ReturnStatementContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(86);
				functionReturn();
				}
				break;
			case 10:
				_localctx = new BreakStatementContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(87);
				functionBreak();
				}
				break;
			case 11:
				_localctx = new ContinueStatementContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(88);
				functionContinue();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDefinitionContext extends ParserRuleContext {
		public FunctionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDefinition; }
	 
		public FunctionDefinitionContext() { }
		public void copyFrom(FunctionDefinitionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefContext extends FunctionDefinitionContext {
		public TerminalNode DEF() { return getToken(testParser.DEF, 0); }
		public TerminalNode FUNC_ID() { return getToken(testParser.FUNC_ID, 0); }
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<TerminalNode> VAR_ID() { return getTokens(testParser.VAR_ID); }
		public TerminalNode VAR_ID(int i) {
			return getToken(testParser.VAR_ID, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(testParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(testParser.COMMA, i);
		}
		public DefContext(FunctionDefinitionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitDef(this);
		}
	}

	public final FunctionDefinitionContext functionDefinition() throws RecognitionException {
		FunctionDefinitionContext _localctx = new FunctionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_functionDefinition);
		int _la;
		try {
			_localctx = new DefContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(DEF);
			setState(92);
			match(FUNC_ID);
			setState(93);
			match(LPAREN);
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VAR_ID) {
				{
				setState(94);
				match(VAR_ID);
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(95);
					match(COMMA);
					setState(96);
					match(VAR_ID);
					}
					}
					setState(101);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(104);
			match(RPAREN);
			setState(105);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionIfContext extends ParserRuleContext {
		public FunctionIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionIf; }
	 
		public FunctionIfContext() { }
		public void copyFrom(FunctionIfContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfContext extends FunctionIfContext {
		public TerminalNode IF() { return getToken(testParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(testParser.ELSE, 0); }
		public FunctionIfContext functionIf() {
			return getRuleContext(FunctionIfContext.class,0);
		}
		public IfContext(FunctionIfContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterIf(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitIf(this);
		}
	}

	public final FunctionIfContext functionIf() throws RecognitionException {
		FunctionIfContext _localctx = new FunctionIfContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_functionIf);
		try {
			_localctx = new IfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(IF);
			setState(108);
			match(LPAREN);
			setState(109);
			expr();
			setState(110);
			match(RPAREN);
			setState(111);
			block();
			setState(117);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(112);
				match(ELSE);
				setState(115);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(113);
					block();
					}
					break;
				case 2:
					{
					setState(114);
					functionIf();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForInitializerContext extends ParserRuleContext {
		public ForInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInitializer; }
	 
		public ForInitializerContext() { }
		public void copyFrom(ForInitializerContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForiniContext extends ForInitializerContext {
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public TerminalNode ASSIGN() { return getToken(testParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ForiniContext(ForInitializerContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForini(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForini(this);
		}
	}

	public final ForInitializerContext forInitializer() throws RecognitionException {
		ForInitializerContext _localctx = new ForInitializerContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_forInitializer);
		try {
			_localctx = new ForiniContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(VAR_ID);
			setState(120);
			match(ASSIGN);
			setState(121);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForConditionContext extends ParserRuleContext {
		public ForConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forCondition; }
	 
		public ForConditionContext() { }
		public void copyFrom(ForConditionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForconContext extends ForConditionContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ForconContext(ForConditionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForcon(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForcon(this);
		}
	}

	public final ForConditionContext forCondition() throws RecognitionException {
		ForConditionContext _localctx = new ForConditionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_forCondition);
		try {
			_localctx = new ForconContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForUpdateContext extends ParserRuleContext {
		public ForUpdateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forUpdate; }
	 
		public ForUpdateContext() { }
		public void copyFrom(ForUpdateContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Forup5Context extends ForUpdateContext {
		public TerminalNode DEC() { return getToken(testParser.DEC, 0); }
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public Forup5Context(ForUpdateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForup5(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForup5(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Forup4Context extends ForUpdateContext {
		public TerminalNode INC() { return getToken(testParser.INC, 0); }
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public Forup4Context(ForUpdateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForup4(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForup4(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Forup1Context extends ForUpdateContext {
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public TerminalNode ASSIGN() { return getToken(testParser.ASSIGN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Forup1Context(ForUpdateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForup1(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForup1(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Forup3Context extends ForUpdateContext {
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public TerminalNode DEC() { return getToken(testParser.DEC, 0); }
		public Forup3Context(ForUpdateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForup3(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForup3(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Forup2Context extends ForUpdateContext {
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public TerminalNode INC() { return getToken(testParser.INC, 0); }
		public Forup2Context(ForUpdateContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterForup2(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitForup2(this);
		}
	}

	public final ForUpdateContext forUpdate() throws RecognitionException {
		ForUpdateContext _localctx = new ForUpdateContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_forUpdate);
		try {
			setState(136);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				_localctx = new Forup1Context(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(125);
				match(VAR_ID);
				setState(126);
				match(ASSIGN);
				setState(127);
				expr();
				}
				break;
			case 2:
				_localctx = new Forup2Context(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
				match(VAR_ID);
				setState(129);
				match(INC);
				}
				break;
			case 3:
				_localctx = new Forup3Context(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(130);
				match(VAR_ID);
				setState(131);
				match(DEC);
				}
				break;
			case 4:
				_localctx = new Forup4Context(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(132);
				match(INC);
				setState(133);
				match(VAR_ID);
				}
				break;
			case 5:
				_localctx = new Forup5Context(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(134);
				match(DEC);
				setState(135);
				match(VAR_ID);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionForContext extends ParserRuleContext {
		public FunctionForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionFor; }
	 
		public FunctionForContext() { }
		public void copyFrom(FunctionForContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ForContext extends FunctionForContext {
		public TerminalNode FOR() { return getToken(testParser.FOR, 0); }
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public List<TerminalNode> SEMI() { return getTokens(testParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(testParser.SEMI, i);
		}
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<ForInitializerContext> forInitializer() {
			return getRuleContexts(ForInitializerContext.class);
		}
		public ForInitializerContext forInitializer(int i) {
			return getRuleContext(ForInitializerContext.class,i);
		}
		public List<ForConditionContext> forCondition() {
			return getRuleContexts(ForConditionContext.class);
		}
		public ForConditionContext forCondition(int i) {
			return getRuleContext(ForConditionContext.class,i);
		}
		public List<ForUpdateContext> forUpdate() {
			return getRuleContexts(ForUpdateContext.class);
		}
		public ForUpdateContext forUpdate(int i) {
			return getRuleContext(ForUpdateContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(testParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(testParser.COMMA, i);
		}
		public ForContext(FunctionForContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterFor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitFor(this);
		}
	}

	public final FunctionForContext functionFor() throws RecognitionException {
		FunctionForContext _localctx = new FunctionForContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_functionFor);
		int _la;
		try {
			_localctx = new ForContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(FOR);
			setState(139);
			match(LPAREN);
			setState(148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VAR_ID) {
				{
				setState(140);
				forInitializer();
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(141);
					match(COMMA);
					setState(142);
					forInitializer();
					}
					}
					setState(147);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(150);
			match(SEMI);
			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3940658096384000L) != 0)) {
				{
				setState(151);
				forCondition();
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(152);
					match(COMMA);
					setState(153);
					forCondition();
					}
					}
					setState(158);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(161);
			match(SEMI);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2251799813685254L) != 0)) {
				{
				setState(162);
				forUpdate();
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(163);
					match(COMMA);
					setState(164);
					forUpdate();
					}
					}
					setState(169);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(172);
			match(RPAREN);
			setState(173);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionWhileContext extends ParserRuleContext {
		public FunctionWhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionWhile; }
	 
		public FunctionWhileContext() { }
		public void copyFrom(FunctionWhileContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WhileContext extends FunctionWhileContext {
		public TerminalNode WHILE() { return getToken(testParser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(testParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(testParser.COMMA, i);
		}
		public WhileContext(FunctionWhileContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterWhile(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitWhile(this);
		}
	}

	public final FunctionWhileContext functionWhile() throws RecognitionException {
		FunctionWhileContext _localctx = new FunctionWhileContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_functionWhile);
		int _la;
		try {
			_localctx = new WhileContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			match(WHILE);
			setState(176);
			match(LPAREN);
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3940658096384000L) != 0)) {
				{
				setState(177);
				expr();
				setState(182);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(178);
					match(COMMA);
					setState(179);
					expr();
					}
					}
					setState(184);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(187);
			match(RPAREN);
			setState(188);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDoContext extends ParserRuleContext {
		public FunctionDoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDo; }
	 
		public FunctionDoContext() { }
		public void copyFrom(FunctionDoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DoContext extends FunctionDoContext {
		public TerminalNode DO() { return getToken(testParser.DO, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(testParser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(testParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(testParser.COMMA, i);
		}
		public DoContext(FunctionDoContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterDo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitDo(this);
		}
	}

	public final FunctionDoContext functionDo() throws RecognitionException {
		FunctionDoContext _localctx = new FunctionDoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_functionDo);
		int _la;
		try {
			_localctx = new DoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(DO);
			setState(191);
			block();
			setState(192);
			match(WHILE);
			setState(193);
			match(LPAREN);
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3940658096384000L) != 0)) {
				{
				setState(194);
				expr();
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(195);
					match(COMMA);
					setState(196);
					expr();
					}
					}
					setState(201);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(204);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionReturnContext extends ParserRuleContext {
		public FunctionReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionReturn; }
	 
		public FunctionReturnContext() { }
		public void copyFrom(FunctionReturnContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnContext extends FunctionReturnContext {
		public TerminalNode RETURN() { return getToken(testParser.RETURN, 0); }
		public TerminalNode SEMI() { return getToken(testParser.SEMI, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnContext(FunctionReturnContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterReturn(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitReturn(this);
		}
	}

	public final FunctionReturnContext functionReturn() throws RecognitionException {
		FunctionReturnContext _localctx = new FunctionReturnContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_functionReturn);
		int _la;
		try {
			_localctx = new ReturnContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(RETURN);
			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3940658096384000L) != 0)) {
				{
				setState(207);
				expr();
				}
			}

			setState(210);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionContinueContext extends ParserRuleContext {
		public FunctionContinueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionContinue; }
	 
		public FunctionContinueContext() { }
		public void copyFrom(FunctionContinueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ContinueContext extends FunctionContinueContext {
		public TerminalNode CONTINUE() { return getToken(testParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(testParser.SEMI, 0); }
		public ContinueContext(FunctionContinueContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterContinue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitContinue(this);
		}
	}

	public final FunctionContinueContext functionContinue() throws RecognitionException {
		FunctionContinueContext _localctx = new FunctionContinueContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_functionContinue);
		try {
			_localctx = new ContinueContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(CONTINUE);
			setState(213);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionBreakContext extends ParserRuleContext {
		public FunctionBreakContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBreak; }
	 
		public FunctionBreakContext() { }
		public void copyFrom(FunctionBreakContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BreakContext extends FunctionBreakContext {
		public TerminalNode BREAK() { return getToken(testParser.BREAK, 0); }
		public TerminalNode SEMI() { return getToken(testParser.SEMI, 0); }
		public BreakContext(FunctionBreakContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterBreak(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitBreak(this);
		}
	}

	public final FunctionBreakContext functionBreak() throws RecognitionException {
		FunctionBreakContext _localctx = new FunctionBreakContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_functionBreak);
		try {
			_localctx = new BreakContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(BREAK);
			setState(216);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	 
		public FunctionCallContext() { }
		public void copyFrom(FunctionCallContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FcallContext extends FunctionCallContext {
		public TerminalNode FUNC_ID() { return getToken(testParser.FUNC_ID, 0); }
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(testParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(testParser.COMMA, i);
		}
		public FcallContext(FunctionCallContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterFcall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitFcall(this);
		}
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_functionCall);
		int _la;
		try {
			_localctx = new FcallContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(FUNC_ID);
			setState(219);
			match(LPAREN);
			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3940658096384000L) != 0)) {
				{
				setState(220);
				expr();
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(221);
					match(COMMA);
					setState(222);
					expr();
					}
					}
					setState(227);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(230);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MainContext extends ExprContext {
		public QeOrExprContext qeOrExpr() {
			return getRuleContext(QeOrExprContext.class,0);
		}
		public MainContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterMain(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitMain(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_expr);
		try {
			_localctx = new MainContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			qeOrExpr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QeOrExprContext extends ParserRuleContext {
		public QeOrExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qeOrExpr; }
	 
		public QeOrExprContext() { }
		public void copyFrom(QeOrExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class QEorContext extends QeOrExprContext {
		public List<QeAndExprContext> qeAndExpr() {
			return getRuleContexts(QeAndExprContext.class);
		}
		public QeAndExprContext qeAndExpr(int i) {
			return getRuleContext(QeAndExprContext.class,i);
		}
		public List<TerminalNode> QE_7() { return getTokens(testParser.QE_7); }
		public TerminalNode QE_7(int i) {
			return getToken(testParser.QE_7, i);
		}
		public QEorContext(QeOrExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterQEor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitQEor(this);
		}
	}

	public final QeOrExprContext qeOrExpr() throws RecognitionException {
		QeOrExprContext _localctx = new QeOrExprContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_qeOrExpr);
		int _la;
		try {
			_localctx = new QEorContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			qeAndExpr();
			setState(239);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==QE_7) {
				{
				{
				setState(235);
				match(QE_7);
				setState(236);
				qeAndExpr();
				}
				}
				setState(241);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QeAndExprContext extends ParserRuleContext {
		public QeAndExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qeAndExpr; }
	 
		public QeAndExprContext() { }
		public void copyFrom(QeAndExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class QEandContext extends QeAndExprContext {
		public List<QeCompareExprContext> qeCompareExpr() {
			return getRuleContexts(QeCompareExprContext.class);
		}
		public QeCompareExprContext qeCompareExpr(int i) {
			return getRuleContext(QeCompareExprContext.class,i);
		}
		public List<TerminalNode> QE_6() { return getTokens(testParser.QE_6); }
		public TerminalNode QE_6(int i) {
			return getToken(testParser.QE_6, i);
		}
		public QEandContext(QeAndExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterQEand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitQEand(this);
		}
	}

	public final QeAndExprContext qeAndExpr() throws RecognitionException {
		QeAndExprContext _localctx = new QeAndExprContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_qeAndExpr);
		int _la;
		try {
			_localctx = new QEandContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			qeCompareExpr();
			setState(247);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==QE_6) {
				{
				{
				setState(243);
				match(QE_6);
				setState(244);
				qeCompareExpr();
				}
				}
				setState(249);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QeCompareExprContext extends ParserRuleContext {
		public QeCompareExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qeCompareExpr; }
	 
		public QeCompareExprContext() { }
		public void copyFrom(QeCompareExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class QECompareContext extends QeCompareExprContext {
		public List<OrExprContext> orExpr() {
			return getRuleContexts(OrExprContext.class);
		}
		public OrExprContext orExpr(int i) {
			return getRuleContext(OrExprContext.class,i);
		}
		public List<TerminalNode> QE_1() { return getTokens(testParser.QE_1); }
		public TerminalNode QE_1(int i) {
			return getToken(testParser.QE_1, i);
		}
		public List<TerminalNode> QE_2() { return getTokens(testParser.QE_2); }
		public TerminalNode QE_2(int i) {
			return getToken(testParser.QE_2, i);
		}
		public List<TerminalNode> QE_3() { return getTokens(testParser.QE_3); }
		public TerminalNode QE_3(int i) {
			return getToken(testParser.QE_3, i);
		}
		public List<TerminalNode> QE_4() { return getTokens(testParser.QE_4); }
		public TerminalNode QE_4(int i) {
			return getToken(testParser.QE_4, i);
		}
		public List<TerminalNode> QE_5() { return getTokens(testParser.QE_5); }
		public TerminalNode QE_5(int i) {
			return getToken(testParser.QE_5, i);
		}
		public QECompareContext(QeCompareExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterQECompare(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitQECompare(this);
		}
	}

	public final QeCompareExprContext qeCompareExpr() throws RecognitionException {
		QeCompareExprContext _localctx = new QeCompareExprContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_qeCompareExpr);
		int _la;
		try {
			_localctx = new QECompareContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			orExpr();
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 266287972352L) != 0)) {
				{
				{
				setState(251);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 266287972352L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(252);
				orExpr();
				}
				}
				setState(257);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OrExprContext extends ParserRuleContext {
		public OrExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orExpr; }
	 
		public OrExprContext() { }
		public void copyFrom(OrExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrContext extends OrExprContext {
		public List<AndExprContext> andExpr() {
			return getRuleContexts(AndExprContext.class);
		}
		public AndExprContext andExpr(int i) {
			return getRuleContext(AndExprContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(testParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(testParser.OR, i);
		}
		public OrContext(OrExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterOr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitOr(this);
		}
	}

	public final OrExprContext orExpr() throws RecognitionException {
		OrExprContext _localctx = new OrExprContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_orExpr);
		int _la;
		try {
			_localctx = new OrContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			andExpr();
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(259);
				match(OR);
				setState(260);
				andExpr();
				}
				}
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AndExprContext extends ParserRuleContext {
		public AndExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_andExpr; }
	 
		public AndExprContext() { }
		public void copyFrom(AndExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AndContext extends AndExprContext {
		public List<CompareExprContext> compareExpr() {
			return getRuleContexts(CompareExprContext.class);
		}
		public CompareExprContext compareExpr(int i) {
			return getRuleContext(CompareExprContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(testParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(testParser.AND, i);
		}
		public AndContext(AndExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterAnd(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitAnd(this);
		}
	}

	public final AndExprContext andExpr() throws RecognitionException {
		AndExprContext _localctx = new AndExprContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_andExpr);
		int _la;
		try {
			_localctx = new AndContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			compareExpr();
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(267);
				match(AND);
				setState(268);
				compareExpr();
				}
				}
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompareExprContext extends ParserRuleContext {
		public CompareExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareExpr; }
	 
		public CompareExprContext() { }
		public void copyFrom(CompareExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CompareContext extends CompareExprContext {
		public List<AddSubExprContext> addSubExpr() {
			return getRuleContexts(AddSubExprContext.class);
		}
		public AddSubExprContext addSubExpr(int i) {
			return getRuleContext(AddSubExprContext.class,i);
		}
		public List<TerminalNode> EQ() { return getTokens(testParser.EQ); }
		public TerminalNode EQ(int i) {
			return getToken(testParser.EQ, i);
		}
		public List<TerminalNode> NEQ() { return getTokens(testParser.NEQ); }
		public TerminalNode NEQ(int i) {
			return getToken(testParser.NEQ, i);
		}
		public List<TerminalNode> LT() { return getTokens(testParser.LT); }
		public TerminalNode LT(int i) {
			return getToken(testParser.LT, i);
		}
		public List<TerminalNode> GT() { return getTokens(testParser.GT); }
		public TerminalNode GT(int i) {
			return getToken(testParser.GT, i);
		}
		public List<TerminalNode> LE() { return getTokens(testParser.LE); }
		public TerminalNode LE(int i) {
			return getToken(testParser.LE, i);
		}
		public List<TerminalNode> GE() { return getTokens(testParser.GE); }
		public TerminalNode GE(int i) {
			return getToken(testParser.GE, i);
		}
		public CompareContext(CompareExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterCompare(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitCompare(this);
		}
	}

	public final CompareExprContext compareExpr() throws RecognitionException {
		CompareExprContext _localctx = new CompareExprContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_compareExpr);
		int _la;
		try {
			_localctx = new CompareContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			addSubExpr();
			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 504L) != 0)) {
				{
				{
				setState(275);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 504L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(276);
				addSubExpr();
				}
				}
				setState(281);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddSubExprContext extends ParserRuleContext {
		public AddSubExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addSubExpr; }
	 
		public AddSubExprContext() { }
		public void copyFrom(AddSubExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends AddSubExprContext {
		public List<MulDivExprContext> mulDivExpr() {
			return getRuleContexts(MulDivExprContext.class);
		}
		public MulDivExprContext mulDivExpr(int i) {
			return getRuleContext(MulDivExprContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(testParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(testParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(testParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(testParser.MINUS, i);
		}
		public AddSubContext(AddSubExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterAddSub(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitAddSub(this);
		}
	}

	public final AddSubExprContext addSubExpr() throws RecognitionException {
		AddSubExprContext _localctx = new AddSubExprContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_addSubExpr);
		int _la;
		try {
			_localctx = new AddSubContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			mulDivExpr();
			setState(287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(283);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(284);
				mulDivExpr();
				}
				}
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MulDivExprContext extends ParserRuleContext {
		public MulDivExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mulDivExpr; }
	 
		public MulDivExprContext() { }
		public void copyFrom(MulDivExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivContext extends MulDivExprContext {
		public List<UnaryExprContext> unaryExpr() {
			return getRuleContexts(UnaryExprContext.class);
		}
		public UnaryExprContext unaryExpr(int i) {
			return getRuleContext(UnaryExprContext.class,i);
		}
		public List<TerminalNode> MULT() { return getTokens(testParser.MULT); }
		public TerminalNode MULT(int i) {
			return getToken(testParser.MULT, i);
		}
		public List<TerminalNode> DIV() { return getTokens(testParser.DIV); }
		public TerminalNode DIV(int i) {
			return getToken(testParser.DIV, i);
		}
		public MulDivContext(MulDivExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterMulDiv(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitMulDiv(this);
		}
	}

	public final MulDivExprContext mulDivExpr() throws RecognitionException {
		MulDivExprContext _localctx = new MulDivExprContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_mulDivExpr);
		int _la;
		try {
			_localctx = new MulDivContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			unaryExpr();
			setState(295);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MULT || _la==DIV) {
				{
				{
				setState(291);
				_la = _input.LA(1);
				if ( !(_la==MULT || _la==DIV) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(292);
				unaryExpr();
				}
				}
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryExprContext extends ParserRuleContext {
		public UnaryExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpr; }
	 
		public UnaryExprContext() { }
		public void copyFrom(UnaryExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PowerExprRuleContext extends UnaryExprContext {
		public PowerExprContext powerExpr() {
			return getRuleContext(PowerExprContext.class,0);
		}
		public PowerExprRuleContext(UnaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterPowerExprRule(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitPowerExprRule(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnaryMinusContext extends UnaryExprContext {
		public TerminalNode MINUS() { return getToken(testParser.MINUS, 0); }
		public UnaryExprContext unaryExpr() {
			return getRuleContext(UnaryExprContext.class,0);
		}
		public UnaryMinusContext(UnaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterUnaryMinus(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitUnaryMinus(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NotExprContext extends UnaryExprContext {
		public TerminalNode NOT() { return getToken(testParser.NOT, 0); }
		public UnaryExprContext unaryExpr() {
			return getRuleContext(UnaryExprContext.class,0);
		}
		public NotExprContext(UnaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterNotExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitNotExpr(this);
		}
	}

	public final UnaryExprContext unaryExpr() throws RecognitionException {
		UnaryExprContext _localctx = new UnaryExprContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_unaryExpr);
		try {
			setState(303);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				_localctx = new UnaryMinusContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(298);
				match(MINUS);
				setState(299);
				unaryExpr();
				}
				break;
			case 2:
				_localctx = new NotExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(300);
				match(NOT);
				setState(301);
				unaryExpr();
				}
				break;
			case 3:
				_localctx = new PowerExprRuleContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(302);
				powerExpr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PowerExprContext extends ParserRuleContext {
		public PowerExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_powerExpr; }
	 
		public PowerExprContext() { }
		public void copyFrom(PowerExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PowerContext extends PowerExprContext {
		public PrimaryExprContext primaryExpr() {
			return getRuleContext(PrimaryExprContext.class,0);
		}
		public TerminalNode POWER() { return getToken(testParser.POWER, 0); }
		public PowerExprContext powerExpr() {
			return getRuleContext(PowerExprContext.class,0);
		}
		public PowerContext(PowerExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterPower(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitPower(this);
		}
	}

	public final PowerExprContext powerExpr() throws RecognitionException {
		PowerExprContext _localctx = new PowerExprContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_powerExpr);
		int _la;
		try {
			_localctx = new PowerContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			primaryExpr();
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==POWER) {
				{
				setState(306);
				match(POWER);
				setState(307);
				powerExpr();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryExprContext extends ParserRuleContext {
		public PrimaryExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpr; }
	 
		public PrimaryExprContext() { }
		public void copyFrom(PrimaryExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdExprContext extends PrimaryExprContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public IdExprContext(PrimaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterIdExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitIdExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RealContext extends PrimaryExprContext {
		public NumContext num() {
			return getRuleContext(NumContext.class,0);
		}
		public RealContext(PrimaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterReal(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitReal(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FCallExprContext extends PrimaryExprContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public FCallExprContext(PrimaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterFCallExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitFCallExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SpecNumContext extends PrimaryExprContext {
		public SpecialnumContext specialnum() {
			return getRuleContext(SpecialnumContext.class,0);
		}
		public SpecNumContext(PrimaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterSpecNum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitSpecNum(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenContext extends PrimaryExprContext {
		public TerminalNode LPAREN() { return getToken(testParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(testParser.RPAREN, 0); }
		public ParenContext(PrimaryExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterParen(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitParen(this);
		}
	}

	public final PrimaryExprContext primaryExpr() throws RecognitionException {
		PrimaryExprContext _localctx = new PrimaryExprContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_primaryExpr);
		try {
			setState(318);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(310);
				num();
				}
				break;
			case 2:
				_localctx = new IdExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(311);
				id();
				}
				break;
			case 3:
				_localctx = new FCallExprContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(312);
				functionCall();
				}
				break;
			case 4:
				_localctx = new ParenContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(313);
				match(LPAREN);
				setState(314);
				expr();
				setState(315);
				match(RPAREN);
				}
				break;
			case 5:
				_localctx = new SpecNumContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(317);
				specialnum();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RationalContext extends ParserRuleContext {
		public RationalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rational; }
	 
		public RationalContext() { }
		public void copyFrom(RationalContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RatContext extends RationalContext {
		public TerminalNode INT() { return getToken(testParser.INT, 0); }
		public TerminalNode DIV() { return getToken(testParser.DIV, 0); }
		public TerminalNode NATURAL() { return getToken(testParser.NATURAL, 0); }
		public List<TerminalNode> MINUS() { return getTokens(testParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(testParser.MINUS, i);
		}
		public RatContext(RationalContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterRat(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitRat(this);
		}
	}

	public final RationalContext rational() throws RecognitionException {
		RationalContext _localctx = new RationalContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_rational);
		int _la;
		try {
			_localctx = new RatContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUS) {
				{
				setState(320);
				match(MINUS);
				}
			}

			setState(323);
			match(INT);
			setState(324);
			match(DIV);
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MINUS) {
				{
				setState(325);
				match(MINUS);
				}
			}

			setState(328);
			match(NATURAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends ParserRuleContext {
		public DecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decimal; }
	 
		public DecimalContext() { }
		public void copyFrom(DecimalContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FloatContext extends DecimalContext {
		public TerminalNode INT() { return getToken(testParser.INT, 0); }
		public TerminalNode EXP() { return getToken(testParser.EXP, 0); }
		public TerminalNode MINUS() { return getToken(testParser.MINUS, 0); }
		public FloatContext(DecimalContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterFloat(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitFloat(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PeriodContext extends DecimalContext {
		public List<TerminalNode> INT() { return getTokens(testParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(testParser.INT, i);
		}
		public TerminalNode POINT() { return getToken(testParser.POINT, 0); }
		public TerminalNode MINUS() { return getToken(testParser.MINUS, 0); }
		public TerminalNode EXP() { return getToken(testParser.EXP, 0); }
		public PeriodContext(DecimalContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterPeriod(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitPeriod(this);
		}
	}

	public final DecimalContext decimal() throws RecognitionException {
		DecimalContext _localctx = new DecimalContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_decimal);
		int _la;
		try {
			setState(344);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				_localctx = new PeriodContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(331);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(330);
					match(MINUS);
					}
				}

				setState(333);
				match(INT);
				setState(334);
				match(POINT);
				setState(335);
				match(INT);
				setState(337);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EXP) {
					{
					setState(336);
					match(EXP);
					}
				}

				}
				break;
			case 2:
				_localctx = new FloatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(340);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(339);
					match(MINUS);
					}
				}

				setState(342);
				match(INT);
				setState(343);
				match(EXP);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumContext extends ParserRuleContext {
		public NumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_num; }
	 
		public NumContext() { }
		public void copyFrom(NumContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecNumContext extends NumContext {
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(testParser.MINUS, 0); }
		public DecNumContext(NumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterDecNum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitDecNum(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NatNumContext extends NumContext {
		public TerminalNode NATURAL() { return getToken(testParser.NATURAL, 0); }
		public TerminalNode MINUS() { return getToken(testParser.MINUS, 0); }
		public NatNumContext(NumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterNatNum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitNatNum(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RatNumContext extends NumContext {
		public RationalContext rational() {
			return getRuleContext(RationalContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(testParser.MINUS, 0); }
		public RatNumContext(NumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterRatNum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitRatNum(this);
		}
	}

	public final NumContext num() throws RecognitionException {
		NumContext _localctx = new NumContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_num);
		int _la;
		try {
			setState(358);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				_localctx = new RatNumContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(347);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(346);
					match(MINUS);
					}
					break;
				}
				{
				setState(349);
				rational();
				}
				}
				break;
			case 2:
				_localctx = new DecNumContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
				case 1:
					{
					setState(350);
					match(MINUS);
					}
					break;
				}
				{
				setState(353);
				decimal();
				}
				}
				break;
			case 3:
				_localctx = new NatNumContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(355);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MINUS) {
					{
					setState(354);
					match(MINUS);
					}
				}

				{
				setState(357);
				match(NATURAL);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ParserRuleContext {
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	 
		public IdContext() { }
		public void copyFrom(IdContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class VIdContext extends IdContext {
		public TerminalNode VAR_ID() { return getToken(testParser.VAR_ID, 0); }
		public VIdContext(IdContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterVId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitVId(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FIdContext extends IdContext {
		public TerminalNode FUNC_ID() { return getToken(testParser.FUNC_ID, 0); }
		public FIdContext(IdContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterFId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitFId(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class V2IdContext extends IdContext {
		public TerminalNode VAR_2() { return getToken(testParser.VAR_2, 0); }
		public V2IdContext(IdContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterV2Id(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitV2Id(this);
		}
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_id);
		try {
			setState(363);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR_ID:
				_localctx = new VIdContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(360);
				match(VAR_ID);
				}
				break;
			case FUNC_ID:
				_localctx = new FIdContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(361);
				match(FUNC_ID);
				}
				break;
			case VAR_2:
				_localctx = new V2IdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(362);
				match(VAR_2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SpecialnumContext extends ParserRuleContext {
		public SpecialnumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specialnum; }
	 
		public SpecialnumContext() { }
		public void copyFrom(SpecialnumContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BefContext extends SpecialnumContext {
		public TerminalNode BEFORE() { return getToken(testParser.BEFORE, 0); }
		public BefContext(SpecialnumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterBef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitBef(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BefNContext extends SpecialnumContext {
		public TerminalNode BEFORE_N() { return getToken(testParser.BEFORE_N, 0); }
		public BefNContext(SpecialnumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterBefN(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitBefN(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PiContext extends SpecialnumContext {
		public TerminalNode PI() { return getToken(testParser.PI, 0); }
		public PiContext(SpecialnumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterPi(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitPi(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImaContext extends SpecialnumContext {
		public TerminalNode IMAGINARY() { return getToken(testParser.IMAGINARY, 0); }
		public ImaContext(SpecialnumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterIma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitIma(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NapContext extends SpecialnumContext {
		public TerminalNode NAPIER() { return getToken(testParser.NAPIER, 0); }
		public NapContext(SpecialnumContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterNap(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitNap(this);
		}
	}

	public final SpecialnumContext specialnum() throws RecognitionException {
		SpecialnumContext _localctx = new SpecialnumContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_specialnum);
		try {
			setState(370);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMAGINARY:
				_localctx = new ImaContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(365);
				match(IMAGINARY);
				}
				break;
			case PI:
				_localctx = new PiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(366);
				match(PI);
				}
				break;
			case NAPIER:
				_localctx = new NapContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(367);
				match(NAPIER);
				}
				break;
			case BEFORE:
				_localctx = new BefContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(368);
				match(BEFORE);
				}
				break;
			case BEFORE_N:
				_localctx = new BefNContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(369);
				match(BEFORE_N);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	 
		public BlockContext() { }
		public void copyFrom(BlockContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Sentence1Context extends BlockContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public Sentence1Context(BlockContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterSentence1(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitSentence1(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SentenceContext extends BlockContext {
		public TerminalNode LBRANCE() { return getToken(testParser.LBRANCE, 0); }
		public TerminalNode RBRANCE() { return getToken(testParser.RBRANCE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public SentenceContext(BlockContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).enterSentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof testListener ) ((testListener)listener).exitSentence(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_block);
		int _la;
		try {
			setState(381);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRANCE:
				_localctx = new SentenceContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(372);
				match(LBRANCE);
				setState(376);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4467324170283008L) != 0)) {
					{
					{
					setState(373);
					statement();
					}
					}
					setState(378);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(379);
				match(RBRANCE);
				}
				break;
			case NOT:
			case MINUS:
			case LPAREN:
			case SEMI:
			case NATURAL:
			case INT:
			case IMAGINARY:
			case PI:
			case NAPIER:
			case BEFORE:
			case BEFORE_N:
			case DEF:
			case IF:
			case FOR:
			case WHILE:
			case DO:
			case RETURN:
			case CONTINUE:
			case BREAK:
			case VAR_2:
			case FUNC_ID:
			case VAR_ID:
				_localctx = new Sentence1Context(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(380);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u00015\u0180\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0001\u0000\u0005\u0000B\b\u0000\n\u0000\f\u0000"+
		"E\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001Z\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002b\b\u0002"+
		"\n\u0002\f\u0002e\t\u0002\u0003\u0002g\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003t\b\u0003\u0003\u0003"+
		"v\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0003\u0006\u0089\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007\u0090\b\u0007\n\u0007\f\u0007\u0093\t\u0007\u0003"+
		"\u0007\u0095\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007\u009b\b\u0007\n\u0007\f\u0007\u009e\t\u0007\u0003\u0007\u00a0\b"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u00a6"+
		"\b\u0007\n\u0007\f\u0007\u00a9\t\u0007\u0003\u0007\u00ab\b\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0005\b\u00b5\b\b\n\b\f\b\u00b8\t\b\u0003\b\u00ba\b\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005"+
		"\t\u00c6\b\t\n\t\f\t\u00c9\t\t\u0003\t\u00cb\b\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0003\n\u00d1\b\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0005\r\u00e0\b\r\n\r\f\r\u00e3\t\r\u0003\r\u00e5\b\r\u0001\r\u0001\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f"+
		"\u00ee\b\u000f\n\u000f\f\u000f\u00f1\t\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0005\u0010\u00f6\b\u0010\n\u0010\f\u0010\u00f9\t\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0005\u0011\u00fe\b\u0011\n\u0011\f\u0011\u0101"+
		"\t\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u0106\b\u0012"+
		"\n\u0012\f\u0012\u0109\t\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0005"+
		"\u0013\u010e\b\u0013\n\u0013\f\u0013\u0111\t\u0013\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0005\u0014\u0116\b\u0014\n\u0014\f\u0014\u0119\t\u0014\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0005\u0015\u011e\b\u0015\n\u0015\f\u0015"+
		"\u0121\t\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u0126\b"+
		"\u0016\n\u0016\f\u0016\u0129\t\u0016\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0003\u0017\u0130\b\u0017\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0003\u0018\u0135\b\u0018\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019"+
		"\u013f\b\u0019\u0001\u001a\u0003\u001a\u0142\b\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0003\u001a\u0147\b\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001b\u0003\u001b\u014c\b\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0003\u001b\u0152\b\u001b\u0001\u001b\u0003\u001b\u0155\b\u001b"+
		"\u0001\u001b\u0001\u001b\u0003\u001b\u0159\b\u001b\u0001\u001c\u0003\u001c"+
		"\u015c\b\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u0160\b\u001c\u0001"+
		"\u001c\u0001\u001c\u0003\u001c\u0164\b\u001c\u0001\u001c\u0003\u001c\u0167"+
		"\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u016c\b\u001d"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e"+
		"\u0173\b\u001e\u0001\u001f\u0001\u001f\u0005\u001f\u0177\b\u001f\n\u001f"+
		"\f\u001f\u017a\t\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u017e\b\u001f"+
		"\u0001\u001f\u0000\u0000 \u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>\u0000\u0004\u0001"+
		"\u0000!%\u0001\u0000\u0003\b\u0001\u0000\f\r\u0001\u0000\u000e\u000f\u01a1"+
		"\u0000C\u0001\u0000\u0000\u0000\u0002Y\u0001\u0000\u0000\u0000\u0004["+
		"\u0001\u0000\u0000\u0000\u0006k\u0001\u0000\u0000\u0000\bw\u0001\u0000"+
		"\u0000\u0000\n{\u0001\u0000\u0000\u0000\f\u0088\u0001\u0000\u0000\u0000"+
		"\u000e\u008a\u0001\u0000\u0000\u0000\u0010\u00af\u0001\u0000\u0000\u0000"+
		"\u0012\u00be\u0001\u0000\u0000\u0000\u0014\u00ce\u0001\u0000\u0000\u0000"+
		"\u0016\u00d4\u0001\u0000\u0000\u0000\u0018\u00d7\u0001\u0000\u0000\u0000"+
		"\u001a\u00da\u0001\u0000\u0000\u0000\u001c\u00e8\u0001\u0000\u0000\u0000"+
		"\u001e\u00ea\u0001\u0000\u0000\u0000 \u00f2\u0001\u0000\u0000\u0000\""+
		"\u00fa\u0001\u0000\u0000\u0000$\u0102\u0001\u0000\u0000\u0000&\u010a\u0001"+
		"\u0000\u0000\u0000(\u0112\u0001\u0000\u0000\u0000*\u011a\u0001\u0000\u0000"+
		"\u0000,\u0122\u0001\u0000\u0000\u0000.\u012f\u0001\u0000\u0000\u00000"+
		"\u0131\u0001\u0000\u0000\u00002\u013e\u0001\u0000\u0000\u00004\u0141\u0001"+
		"\u0000\u0000\u00006\u0158\u0001\u0000\u0000\u00008\u0166\u0001\u0000\u0000"+
		"\u0000:\u016b\u0001\u0000\u0000\u0000<\u0172\u0001\u0000\u0000\u0000>"+
		"\u017d\u0001\u0000\u0000\u0000@B\u0003\u0002\u0001\u0000A@\u0001\u0000"+
		"\u0000\u0000BE\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001"+
		"\u0000\u0000\u0000DF\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000"+
		"FG\u0005\u0000\u0000\u0001G\u0001\u0001\u0000\u0000\u0000HI\u0003\u001c"+
		"\u000e\u0000IJ\u0005\u0016\u0000\u0000JZ\u0001\u0000\u0000\u0000KZ\u0005"+
		"\u0016\u0000\u0000LM\u00053\u0000\u0000MN\u0005\u0011\u0000\u0000NO\u0003"+
		"\u001c\u000e\u0000OP\u0005\u0016\u0000\u0000PZ\u0001\u0000\u0000\u0000"+
		"QZ\u0003\u0004\u0002\u0000RZ\u0003\u0006\u0003\u0000SZ\u0003\u000e\u0007"+
		"\u0000TZ\u0003\u0010\b\u0000UZ\u0003\u0012\t\u0000VZ\u0003\u0014\n\u0000"+
		"WZ\u0003\u0018\f\u0000XZ\u0003\u0016\u000b\u0000YH\u0001\u0000\u0000\u0000"+
		"YK\u0001\u0000\u0000\u0000YL\u0001\u0000\u0000\u0000YQ\u0001\u0000\u0000"+
		"\u0000YR\u0001\u0000\u0000\u0000YS\u0001\u0000\u0000\u0000YT\u0001\u0000"+
		"\u0000\u0000YU\u0001\u0000\u0000\u0000YV\u0001\u0000\u0000\u0000YW\u0001"+
		"\u0000\u0000\u0000YX\u0001\u0000\u0000\u0000Z\u0003\u0001\u0000\u0000"+
		"\u0000[\\\u0005(\u0000\u0000\\]\u00052\u0000\u0000]f\u0005\u0012\u0000"+
		"\u0000^c\u00053\u0000\u0000_`\u0005\u0017\u0000\u0000`b\u00053\u0000\u0000"+
		"a_\u0001\u0000\u0000\u0000be\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000dg\u0001\u0000\u0000\u0000ec\u0001\u0000"+
		"\u0000\u0000f^\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000gh\u0001"+
		"\u0000\u0000\u0000hi\u0005\u0013\u0000\u0000ij\u0003>\u001f\u0000j\u0005"+
		"\u0001\u0000\u0000\u0000kl\u0005)\u0000\u0000lm\u0005\u0012\u0000\u0000"+
		"mn\u0003\u001c\u000e\u0000no\u0005\u0013\u0000\u0000ou\u0003>\u001f\u0000"+
		"ps\u0005-\u0000\u0000qt\u0003>\u001f\u0000rt\u0003\u0006\u0003\u0000s"+
		"q\u0001\u0000\u0000\u0000sr\u0001\u0000\u0000\u0000tv\u0001\u0000\u0000"+
		"\u0000up\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000v\u0007\u0001"+
		"\u0000\u0000\u0000wx\u00053\u0000\u0000xy\u0005\u0011\u0000\u0000yz\u0003"+
		"\u001c\u000e\u0000z\t\u0001\u0000\u0000\u0000{|\u0003\u001c\u000e\u0000"+
		"|\u000b\u0001\u0000\u0000\u0000}~\u00053\u0000\u0000~\u007f\u0005\u0011"+
		"\u0000\u0000\u007f\u0089\u0003\u001c\u000e\u0000\u0080\u0081\u00053\u0000"+
		"\u0000\u0081\u0089\u0005\u0001\u0000\u0000\u0082\u0083\u00053\u0000\u0000"+
		"\u0083\u0089\u0005\u0002\u0000\u0000\u0084\u0085\u0005\u0001\u0000\u0000"+
		"\u0085\u0089\u00053\u0000\u0000\u0086\u0087\u0005\u0002\u0000\u0000\u0087"+
		"\u0089\u00053\u0000\u0000\u0088}\u0001\u0000\u0000\u0000\u0088\u0080\u0001"+
		"\u0000\u0000\u0000\u0088\u0082\u0001\u0000\u0000\u0000\u0088\u0084\u0001"+
		"\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0089\r\u0001\u0000"+
		"\u0000\u0000\u008a\u008b\u0005*\u0000\u0000\u008b\u0094\u0005\u0012\u0000"+
		"\u0000\u008c\u0091\u0003\b\u0004\u0000\u008d\u008e\u0005\u0017\u0000\u0000"+
		"\u008e\u0090\u0003\b\u0004\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090"+
		"\u0093\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0091"+
		"\u0092\u0001\u0000\u0000\u0000\u0092\u0095\u0001\u0000\u0000\u0000\u0093"+
		"\u0091\u0001\u0000\u0000\u0000\u0094\u008c\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0001\u0000\u0000\u0000\u0095\u0096\u0001\u0000\u0000\u0000\u0096"+
		"\u009f\u0005\u0016\u0000\u0000\u0097\u009c\u0003\n\u0005\u0000\u0098\u0099"+
		"\u0005\u0017\u0000\u0000\u0099\u009b\u0003\n\u0005\u0000\u009a\u0098\u0001"+
		"\u0000\u0000\u0000\u009b\u009e\u0001\u0000\u0000\u0000\u009c\u009a\u0001"+
		"\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u00a0\u0001"+
		"\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000\u009f\u0097\u0001"+
		"\u0000\u0000\u0000\u009f\u00a0\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001"+
		"\u0000\u0000\u0000\u00a1\u00aa\u0005\u0016\u0000\u0000\u00a2\u00a7\u0003"+
		"\f\u0006\u0000\u00a3\u00a4\u0005\u0017\u0000\u0000\u00a4\u00a6\u0003\f"+
		"\u0006\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a6\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000"+
		"\u0000\u0000\u00a8\u00ab\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000"+
		"\u0000\u0000\u00aa\u00a2\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000"+
		"\u0000\u0000\u00ab\u00ac\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005\u0013"+
		"\u0000\u0000\u00ad\u00ae\u0003>\u001f\u0000\u00ae\u000f\u0001\u0000\u0000"+
		"\u0000\u00af\u00b0\u0005+\u0000\u0000\u00b0\u00b9\u0005\u0012\u0000\u0000"+
		"\u00b1\u00b6\u0003\u001c\u000e\u0000\u00b2\u00b3\u0005\u0017\u0000\u0000"+
		"\u00b3\u00b5\u0003\u001c\u000e\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000"+
		"\u00b5\u00b8\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001\u0000\u0000\u0000"+
		"\u00b6\u00b7\u0001\u0000\u0000\u0000\u00b7\u00ba\u0001\u0000\u0000\u0000"+
		"\u00b8\u00b6\u0001\u0000\u0000\u0000\u00b9\u00b1\u0001\u0000\u0000\u0000"+
		"\u00b9\u00ba\u0001\u0000\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000\u0000"+
		"\u00bb\u00bc\u0005\u0013\u0000\u0000\u00bc\u00bd\u0003>\u001f\u0000\u00bd"+
		"\u0011\u0001\u0000\u0000\u0000\u00be\u00bf\u0005,\u0000\u0000\u00bf\u00c0"+
		"\u0003>\u001f\u0000\u00c0\u00c1\u0005+\u0000\u0000\u00c1\u00ca\u0005\u0012"+
		"\u0000\u0000\u00c2\u00c7\u0003\u001c\u000e\u0000\u00c3\u00c4\u0005\u0017"+
		"\u0000\u0000\u00c4\u00c6\u0003\u001c\u000e\u0000\u00c5\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c9\u0001\u0000\u0000\u0000\u00c7\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000\u00c8\u00cb\u0001\u0000"+
		"\u0000\u0000\u00c9\u00c7\u0001\u0000\u0000\u0000\u00ca\u00c2\u0001\u0000"+
		"\u0000\u0000\u00ca\u00cb\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0005\u0013\u0000\u0000\u00cd\u0013\u0001\u0000"+
		"\u0000\u0000\u00ce\u00d0\u0005.\u0000\u0000\u00cf\u00d1\u0003\u001c\u000e"+
		"\u0000\u00d0\u00cf\u0001\u0000\u0000\u0000\u00d0\u00d1\u0001\u0000\u0000"+
		"\u0000\u00d1\u00d2\u0001\u0000\u0000\u0000\u00d2\u00d3\u0005\u0016\u0000"+
		"\u0000\u00d3\u0015\u0001\u0000\u0000\u0000\u00d4\u00d5\u0005/\u0000\u0000"+
		"\u00d5\u00d6\u0005\u0016\u0000\u0000\u00d6\u0017\u0001\u0000\u0000\u0000"+
		"\u00d7\u00d8\u00050\u0000\u0000\u00d8\u00d9\u0005\u0016\u0000\u0000\u00d9"+
		"\u0019\u0001\u0000\u0000\u0000\u00da\u00db\u00052\u0000\u0000\u00db\u00e4"+
		"\u0005\u0012\u0000\u0000\u00dc\u00e1\u0003\u001c\u000e\u0000\u00dd\u00de"+
		"\u0005\u0017\u0000\u0000\u00de\u00e0\u0003\u001c\u000e\u0000\u00df\u00dd"+
		"\u0001\u0000\u0000\u0000\u00e0\u00e3\u0001\u0000\u0000\u0000\u00e1\u00df"+
		"\u0001\u0000\u0000\u0000\u00e1\u00e2\u0001\u0000\u0000\u0000\u00e2\u00e5"+
		"\u0001\u0000\u0000\u0000\u00e3\u00e1\u0001\u0000\u0000\u0000\u00e4\u00dc"+
		"\u0001\u0000\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000\u0000\u00e5\u00e6"+
		"\u0001\u0000\u0000\u0000\u00e6\u00e7\u0005\u0013\u0000\u0000\u00e7\u001b"+
		"\u0001\u0000\u0000\u0000\u00e8\u00e9\u0003\u001e\u000f\u0000\u00e9\u001d"+
		"\u0001\u0000\u0000\u0000\u00ea\u00ef\u0003 \u0010\u0000\u00eb\u00ec\u0005"+
		"\'\u0000\u0000\u00ec\u00ee\u0003 \u0010\u0000\u00ed\u00eb\u0001\u0000"+
		"\u0000\u0000\u00ee\u00f1\u0001\u0000\u0000\u0000\u00ef\u00ed\u0001\u0000"+
		"\u0000\u0000\u00ef\u00f0\u0001\u0000\u0000\u0000\u00f0\u001f\u0001\u0000"+
		"\u0000\u0000\u00f1\u00ef\u0001\u0000\u0000\u0000\u00f2\u00f7\u0003\"\u0011"+
		"\u0000\u00f3\u00f4\u0005&\u0000\u0000\u00f4\u00f6\u0003\"\u0011\u0000"+
		"\u00f5\u00f3\u0001\u0000\u0000\u0000\u00f6\u00f9\u0001\u0000\u0000\u0000"+
		"\u00f7\u00f5\u0001\u0000\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000\u0000"+
		"\u00f8!\u0001\u0000\u0000\u0000\u00f9\u00f7\u0001\u0000\u0000\u0000\u00fa"+
		"\u00ff\u0003$\u0012\u0000\u00fb\u00fc\u0007\u0000\u0000\u0000\u00fc\u00fe"+
		"\u0003$\u0012\u0000\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fe\u0101\u0001"+
		"\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000\u0000\u0000\u00ff\u0100\u0001"+
		"\u0000\u0000\u0000\u0100#\u0001\u0000\u0000\u0000\u0101\u00ff\u0001\u0000"+
		"\u0000\u0000\u0102\u0107\u0003&\u0013\u0000\u0103\u0104\u0005\n\u0000"+
		"\u0000\u0104\u0106\u0003&\u0013\u0000\u0105\u0103\u0001\u0000\u0000\u0000"+
		"\u0106\u0109\u0001\u0000\u0000\u0000\u0107\u0105\u0001\u0000\u0000\u0000"+
		"\u0107\u0108\u0001\u0000\u0000\u0000\u0108%\u0001\u0000\u0000\u0000\u0109"+
		"\u0107\u0001\u0000\u0000\u0000\u010a\u010f\u0003(\u0014\u0000\u010b\u010c"+
		"\u0005\t\u0000\u0000\u010c\u010e\u0003(\u0014\u0000\u010d\u010b\u0001"+
		"\u0000\u0000\u0000\u010e\u0111\u0001\u0000\u0000\u0000\u010f\u010d\u0001"+
		"\u0000\u0000\u0000\u010f\u0110\u0001\u0000\u0000\u0000\u0110\'\u0001\u0000"+
		"\u0000\u0000\u0111\u010f\u0001\u0000\u0000\u0000\u0112\u0117\u0003*\u0015"+
		"\u0000\u0113\u0114\u0007\u0001\u0000\u0000\u0114\u0116\u0003*\u0015\u0000"+
		"\u0115\u0113\u0001\u0000\u0000\u0000\u0116\u0119\u0001\u0000\u0000\u0000"+
		"\u0117\u0115\u0001\u0000\u0000\u0000\u0117\u0118\u0001\u0000\u0000\u0000"+
		"\u0118)\u0001\u0000\u0000\u0000\u0119\u0117\u0001\u0000\u0000\u0000\u011a"+
		"\u011f\u0003,\u0016\u0000\u011b\u011c\u0007\u0002\u0000\u0000\u011c\u011e"+
		"\u0003,\u0016\u0000\u011d\u011b\u0001\u0000\u0000\u0000\u011e\u0121\u0001"+
		"\u0000\u0000\u0000\u011f\u011d\u0001\u0000\u0000\u0000\u011f\u0120\u0001"+
		"\u0000\u0000\u0000\u0120+\u0001\u0000\u0000\u0000\u0121\u011f\u0001\u0000"+
		"\u0000\u0000\u0122\u0127\u0003.\u0017\u0000\u0123\u0124\u0007\u0003\u0000"+
		"\u0000\u0124\u0126\u0003.\u0017\u0000\u0125\u0123\u0001\u0000\u0000\u0000"+
		"\u0126\u0129\u0001\u0000\u0000\u0000\u0127\u0125\u0001\u0000\u0000\u0000"+
		"\u0127\u0128\u0001\u0000\u0000\u0000\u0128-\u0001\u0000\u0000\u0000\u0129"+
		"\u0127\u0001\u0000\u0000\u0000\u012a\u012b\u0005\r\u0000\u0000\u012b\u0130"+
		"\u0003.\u0017\u0000\u012c\u012d\u0005\u000b\u0000\u0000\u012d\u0130\u0003"+
		".\u0017\u0000\u012e\u0130\u00030\u0018\u0000\u012f\u012a\u0001\u0000\u0000"+
		"\u0000\u012f\u012c\u0001\u0000\u0000\u0000\u012f\u012e\u0001\u0000\u0000"+
		"\u0000\u0130/\u0001\u0000\u0000\u0000\u0131\u0134\u00032\u0019\u0000\u0132"+
		"\u0133\u0005\u0010\u0000\u0000\u0133\u0135\u00030\u0018\u0000\u0134\u0132"+
		"\u0001\u0000\u0000\u0000\u0134\u0135\u0001\u0000\u0000\u0000\u01351\u0001"+
		"\u0000\u0000\u0000\u0136\u013f\u00038\u001c\u0000\u0137\u013f\u0003:\u001d"+
		"\u0000\u0138\u013f\u0003\u001a\r\u0000\u0139\u013a\u0005\u0012\u0000\u0000"+
		"\u013a\u013b\u0003\u001c\u000e\u0000\u013b\u013c\u0005\u0013\u0000\u0000"+
		"\u013c\u013f\u0001\u0000\u0000\u0000\u013d\u013f\u0003<\u001e\u0000\u013e"+
		"\u0136\u0001\u0000\u0000\u0000\u013e\u0137\u0001\u0000\u0000\u0000\u013e"+
		"\u0138\u0001\u0000\u0000\u0000\u013e\u0139\u0001\u0000\u0000\u0000\u013e"+
		"\u013d\u0001\u0000\u0000\u0000\u013f3\u0001\u0000\u0000\u0000\u0140\u0142"+
		"\u0005\r\u0000\u0000\u0141\u0140\u0001\u0000\u0000\u0000\u0141\u0142\u0001"+
		"\u0000\u0000\u0000\u0142\u0143\u0001\u0000\u0000\u0000\u0143\u0144\u0005"+
		"\u001a\u0000\u0000\u0144\u0146\u0005\u000f\u0000\u0000\u0145\u0147\u0005"+
		"\r\u0000\u0000\u0146\u0145\u0001\u0000\u0000\u0000\u0146\u0147\u0001\u0000"+
		"\u0000\u0000\u0147\u0148\u0001\u0000\u0000\u0000\u0148\u0149\u0005\u0019"+
		"\u0000\u0000\u01495\u0001\u0000\u0000\u0000\u014a\u014c\u0005\r\u0000"+
		"\u0000\u014b\u014a\u0001\u0000\u0000\u0000\u014b\u014c\u0001\u0000\u0000"+
		"\u0000\u014c\u014d\u0001\u0000\u0000\u0000\u014d\u014e\u0005\u001a\u0000"+
		"\u0000\u014e\u014f\u0005\u0018\u0000\u0000\u014f\u0151\u0005\u001a\u0000"+
		"\u0000\u0150\u0152\u0005\u001b\u0000\u0000\u0151\u0150\u0001\u0000\u0000"+
		"\u0000\u0151\u0152\u0001\u0000\u0000\u0000\u0152\u0159\u0001\u0000\u0000"+
		"\u0000\u0153\u0155\u0005\r\u0000\u0000\u0154\u0153\u0001\u0000\u0000\u0000"+
		"\u0154\u0155\u0001\u0000\u0000\u0000\u0155\u0156\u0001\u0000\u0000\u0000"+
		"\u0156\u0157\u0005\u001a\u0000\u0000\u0157\u0159\u0005\u001b\u0000\u0000"+
		"\u0158\u014b\u0001\u0000\u0000\u0000\u0158\u0154\u0001\u0000\u0000\u0000"+
		"\u01597\u0001\u0000\u0000\u0000\u015a\u015c\u0005\r\u0000\u0000\u015b"+
		"\u015a\u0001\u0000\u0000\u0000\u015b\u015c\u0001\u0000\u0000\u0000\u015c"+
		"\u015d\u0001\u0000\u0000\u0000\u015d\u0167\u00034\u001a\u0000\u015e\u0160"+
		"\u0005\r\u0000\u0000\u015f\u015e\u0001\u0000\u0000\u0000\u015f\u0160\u0001"+
		"\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000\u0000\u0161\u0167\u0003"+
		"6\u001b\u0000\u0162\u0164\u0005\r\u0000\u0000\u0163\u0162\u0001\u0000"+
		"\u0000\u0000\u0163\u0164\u0001\u0000\u0000\u0000\u0164\u0165\u0001\u0000"+
		"\u0000\u0000\u0165\u0167\u0005\u0019\u0000\u0000\u0166\u015b\u0001\u0000"+
		"\u0000\u0000\u0166\u015f\u0001\u0000\u0000\u0000\u0166\u0163\u0001\u0000"+
		"\u0000\u0000\u01679\u0001\u0000\u0000\u0000\u0168\u016c\u00053\u0000\u0000"+
		"\u0169\u016c\u00052\u0000\u0000\u016a\u016c\u00051\u0000\u0000\u016b\u0168"+
		"\u0001\u0000\u0000\u0000\u016b\u0169\u0001\u0000\u0000\u0000\u016b\u016a"+
		"\u0001\u0000\u0000\u0000\u016c;\u0001\u0000\u0000\u0000\u016d\u0173\u0005"+
		"\u001c\u0000\u0000\u016e\u0173\u0005\u001d\u0000\u0000\u016f\u0173\u0005"+
		"\u001e\u0000\u0000\u0170\u0173\u0005\u001f\u0000\u0000\u0171\u0173\u0005"+
		" \u0000\u0000\u0172\u016d\u0001\u0000\u0000\u0000\u0172\u016e\u0001\u0000"+
		"\u0000\u0000\u0172\u016f\u0001\u0000\u0000\u0000\u0172\u0170\u0001\u0000"+
		"\u0000\u0000\u0172\u0171\u0001\u0000\u0000\u0000\u0173=\u0001\u0000\u0000"+
		"\u0000\u0174\u0178\u0005\u0014\u0000\u0000\u0175\u0177\u0003\u0002\u0001"+
		"\u0000\u0176\u0175\u0001\u0000\u0000\u0000\u0177\u017a\u0001\u0000\u0000"+
		"\u0000\u0178\u0176\u0001\u0000\u0000\u0000\u0178\u0179\u0001\u0000\u0000"+
		"\u0000\u0179\u017b\u0001\u0000\u0000\u0000\u017a\u0178\u0001\u0000\u0000"+
		"\u0000\u017b\u017e\u0005\u0015\u0000\u0000\u017c\u017e\u0003\u0002\u0001"+
		"\u0000\u017d\u0174\u0001\u0000\u0000\u0000\u017d\u017c\u0001\u0000\u0000"+
		"\u0000\u017e?\u0001\u0000\u0000\u0000-CYcfsu\u0088\u0091\u0094\u009c\u009f"+
		"\u00a7\u00aa\u00b6\u00b9\u00c7\u00ca\u00d0\u00e1\u00e4\u00ef\u00f7\u00ff"+
		"\u0107\u010f\u0117\u011f\u0127\u012f\u0134\u013e\u0141\u0146\u014b\u0151"+
		"\u0154\u0158\u015b\u015f\u0163\u0166\u016b\u0172\u0178\u017d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}