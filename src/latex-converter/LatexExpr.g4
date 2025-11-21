grammar LatexExpr;

prog: statement* EOF;

statement
    : assignStatement #AssignStmt
    | expr            #ExprStmt
    ;

assignStatement
    : variable=ID ASSIGN value=expr
    ;

expr
    : <assoc=right> expr op=(CARET | UNDERSCORE) expr #PowerExpr
    | op=(PLUS | MINUS) expr  #UnaryExpr
    | expr primary #ImplicitMultExpr
    | expr op=(STAR | SLASH) expr #MulDivExpr
    | expr op=(PLUS | MINUS) expr #AddSubExpr
    | primary              #PrimaryExpr
    ;

primary
    : LPAREN expr RPAREN 
    | LBRACE expr RBRACE
    | command
    | NUMBER
    | ID
    ;

command
    : CMD_FRAC LBRACE numer=expr RBRACE LBRACE denom=expr RBRACE #FracCommand
    | GREEK_CMD #GreekCommand
    ;

// --- Lexer Rules ---

// Commands
CMD_FRAC: '\\frac';
GREEK_CMD: '\\' ('pi' | 'alpha' | 'beta' | 'gamma' | 'sqrt');

// Operators
PLUS: '+';
MINUS: '-';
STAR: '*';
SLASH: '/';
CARET: '^';
UNDERSCORE: '_';
ASSIGN: '=';

// Brackets
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';

// Literals
ID: [a-zA-Z][a-zA-Z0-9]*;
NUMBER: [0-9]+ ('.' [0-9]+)?;

// Whitespace and ignored commands
SPACING_CMD: '\\' ('quad' | 'qquad' | ',' | ':' | ';') -> skip;
DOUBLE_BACKSLASH: '\\\\' -> skip;
AMP_ALIGN: '&' -> skip;
WS: [ \t\r\n]+ -> skip;
