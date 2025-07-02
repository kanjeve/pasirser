// Generated from c:/Users/kaAAA/pasirser/test.g4 by ANTLR 4.13.1
import * as antlr from "antlr4ng";
export class testLexer extends antlr.Lexer {
    constructor(input) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, testLexer._ATN, testLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }
    get grammarFileName() { return "test.g4"; }
    get literalNames() { return testLexer.literalNames; }
    get symbolicNames() { return testLexer.symbolicNames; }
    get ruleNames() { return testLexer.ruleNames; }
    get serializedATN() { return testLexer._serializedATN; }
    get channelNames() { return testLexer.channelNames; }
    get modeNames() { return testLexer.modeNames; }
    static get _ATN() {
        if (!testLexer.__ATN) {
            testLexer.__ATN = new antlr.ATNDeserializer().deserialize(testLexer._serializedATN);
        }
        return testLexer.__ATN;
    }
    get vocabulary() {
        return testLexer.vocabulary;
    }
}
testLexer.PLUS = 1;
testLexer.MINUS = 2;
testLexer.MULT = 3;
testLexer.DIV = 4;
testLexer.LPAREN = 5;
testLexer.RPAREN = 6;
testLexer.INT = 7;
testLexer.NEWLINE = 8;
testLexer.WS = 9;
testLexer.SEMI = 10;
testLexer.VARIABLE = 11;
testLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
];
testLexer.literalNames = [
    null, "'+'", "'-'", "'*'", "'/'", "'('", "')'", null, "'\\n'", null,
    "';'"
];
testLexer.symbolicNames = [
    null, "PLUS", "MINUS", "MULT", "DIV", "LPAREN", "RPAREN", "INT",
    "NEWLINE", "WS", "SEMI", "VARIABLE"
];
testLexer.modeNames = [
    "DEFAULT_MODE",
];
testLexer.ruleNames = [
    "PLUS", "MINUS", "MULT", "DIV", "LPAREN", "RPAREN", "INT", "NEWLINE",
    "WS", "SEMI", "VARIABLE",
];
testLexer._serializedATN = [
    4, 0, 11, 58, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
    6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2,
    1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 4, 6, 37, 8, 6, 11, 6, 12, 6, 38, 1, 7, 1, 7, 1, 7,
    1, 7, 1, 8, 4, 8, 46, 8, 8, 11, 8, 12, 8, 47, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 4, 10, 55, 8, 10,
    11, 10, 12, 10, 56, 0, 0, 11, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19,
    10, 21, 11, 1, 0, 3, 1, 0, 48, 57, 2, 0, 9, 9, 32, 32, 2, 0, 65, 90, 97, 122, 60, 0, 1, 1,
    0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0,
    0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0,
    0, 1, 23, 1, 0, 0, 0, 3, 25, 1, 0, 0, 0, 5, 27, 1, 0, 0, 0, 7, 29, 1, 0, 0, 0, 9, 31, 1, 0, 0,
    0, 11, 33, 1, 0, 0, 0, 13, 36, 1, 0, 0, 0, 15, 40, 1, 0, 0, 0, 17, 45, 1, 0, 0, 0, 19, 51,
    1, 0, 0, 0, 21, 54, 1, 0, 0, 0, 23, 24, 5, 43, 0, 0, 24, 2, 1, 0, 0, 0, 25, 26, 5, 45, 0, 0,
    26, 4, 1, 0, 0, 0, 27, 28, 5, 42, 0, 0, 28, 6, 1, 0, 0, 0, 29, 30, 5, 47, 0, 0, 30, 8, 1, 0,
    0, 0, 31, 32, 5, 40, 0, 0, 32, 10, 1, 0, 0, 0, 33, 34, 5, 41, 0, 0, 34, 12, 1, 0, 0, 0, 35,
    37, 7, 0, 0, 0, 36, 35, 1, 0, 0, 0, 37, 38, 1, 0, 0, 0, 38, 36, 1, 0, 0, 0, 38, 39, 1, 0, 0,
    0, 39, 14, 1, 0, 0, 0, 40, 41, 5, 10, 0, 0, 41, 42, 1, 0, 0, 0, 42, 43, 6, 7, 0, 0, 43, 16,
    1, 0, 0, 0, 44, 46, 7, 1, 0, 0, 45, 44, 1, 0, 0, 0, 46, 47, 1, 0, 0, 0, 47, 45, 1, 0, 0, 0,
    47, 48, 1, 0, 0, 0, 48, 49, 1, 0, 0, 0, 49, 50, 6, 8, 0, 0, 50, 18, 1, 0, 0, 0, 51, 52, 5,
    59, 0, 0, 52, 20, 1, 0, 0, 0, 53, 55, 7, 2, 0, 0, 54, 53, 1, 0, 0, 0, 55, 56, 1, 0, 0, 0, 56,
    54, 1, 0, 0, 0, 56, 57, 1, 0, 0, 0, 57, 22, 1, 0, 0, 0, 4, 0, 38, 47, 56, 1, 6, 0, 0
];
testLexer.vocabulary = new antlr.Vocabulary(testLexer.literalNames, testLexer.symbolicNames, []);
testLexer.decisionsToDFA = testLexer._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
//# sourceMappingURL=testLexer.js.map