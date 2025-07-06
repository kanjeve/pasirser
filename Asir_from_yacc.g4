grammar Asir;

// Parser Rules (from parse.y)

start: stat EOF;

stat
    : tail                                  # StatTail
    | GLOBAL pvars tail                     # StatGlobal
    | MGLOBAL pvars tail                    # StatMglobal
    | LOCAL pvars tail                      # StatLocal
    | LOCALF vars tail                      # StatLocalF
    | STRUCT rawstr '{' members '}' tail    # StatStructDef
    | expr tail                             # StatExpr
    | complex                               # StatComplex
    | BREAK tail                            # StatBreak
    | CONTINUE tail                         # StatContinue
    | RETURN tail                           # StatReturn
    | RETURN expr tail                      # StatReturnExpr
    | IF '(' node ')' stat (ELSE stat)?     # StatIf
    | FOR '(' node ';' node ';' node ')' stat # StatFor
    | WHILE '(' node ')' stat               # StatWhile
    | DO stat WHILE '(' node ')' tail       # StatDoWhile
    | LCASE '(' node ')' ':' '=' expr tail  # StatPfDefAssign
    | PFDEF LCASE '(' node ')' tail         # StatPfDef
    | FDEF LCASE '(' node ')' desc '{' stats '}' # StatFDef
    | MODDEF LCASE tail                     # StatModDef
    | MODEND tail                           # StatModEnd
    | error tail                            # StatError
    ;

tail: ';' | '$';

desc: /* empty */ | STR;

complex: '{' stats '}';

members: rawstr (',' rawstr)*;

vars: LCASE (',' LCASE)*;

pvars: UCASE (',' UCASE)*;

stats: stat*;

node: ( _node )?;

_node: expr (',' expr)*;

optlist: opt (',' opt)*;

rawstr: UCASE | LCASE;

opt: rawstr '=' expr;

pexpr
    : STR                                   # PexprStr
    | FORMULA                               # PexprFormula
    | ANS                                   # PexprAns
    | GF2NGEN                               # PexprGf2ngen
    | GFPNGEN                               # PexprGfpngen
    | GFSNGEN                               # PexprGfsngen
    | LCASE                                 # PexprLcase
    | LCASE '(' node? ')'                   # PexprFuncCall
    | LCASE '(' node '|' optlist ')'        # PexprFuncCallWithOpts
    | MAP '(' LCASE ',' node ')'            # PexprMap
    | RECMAP '(' LCASE ',' node ')'         # PexprRecmap
    | LCASE '{' node '}' '(' node ')'       # PexprPfDeriv
    | GETOPT '(' rawstr? ')'                # PexprGetopt
    | TIMER '(' expr ',' expr ',' expr ')'  # PexprTimer
    | PARIF '(' LCASE ')'                   # PexprParif
    | PARIF '(' LCASE ',' node ')'          # PexprParifWithNode
    | '(' '*' expr ')' '(' node ')'         # PexprIfunc
    | '(' '*' expr ')' '(' node '|' optlist ')' # PexprIfuncWithOpts
    | UCASE '(' node ')'                    # PexprPvarCall
    | CAR '(' expr ')'                      # PexprCar
    | CDR '(' expr ')'                      # PexprCdr
    | '(' expr ')'                          # PexprParen
    | UCASE                                 # PexprUcase
    | pexpr '[' expr ']'                    # PexprIndex
    | pexpr POINT rawstr                    # PexprPoint
    ;

expr
    : pexpr                                         # ExprPexpr
    | '(' STRUCT rawstr ')' pexpr                   # ExprCast
    | expr '=' expr                                 # ExprAssign
    | expr BOPASS expr                              # ExprBopAssign
    | expr SELF                                     # ExprPostSelf
    | SELF expr                                     # ExprPreSelf
    | '[' node? ']'                                 # ExprList
    | '+' expr                                      # ExprPlus
    | '-' expr                                      # ExprMinus
    | expr '^' expr                                 # ExprPow
    | expr '*' expr                                 # ExprMul
    | expr '/' expr                                 # ExprDiv
    | expr '%' expr                                 # ExprMod
    | expr '+' expr                                 # ExprAdd
    | expr '-' expr                                 # ExprSub
    | expr CMP expr                                 # ExprComp
    | '!' expr                                      # ExprNot
    | expr '!'                                      # ExprFactorial
    | expr AND expr                                 # ExprAnd
    | expr OR expr                                  # ExprOr
    | FOP_NOT expr                                  # ExprFopNot
    | expr FOP_AND expr                             # ExprFopAnd
    | expr FOP_OR expr                              # ExprFopOr
    | expr FOP_IMPL expr                            # ExprFopImpl
    | expr FOP_REPL expr                            # ExprFopRepl
    | expr FOP_EQUIV expr                           # ExprFopEquiv
    | expr LOP expr                                 # ExprLop
    | expr '?' expr ':' expr                        # ExprCond
    | '<' node? '>'                                 # ExprEv
    | '<' node? ':' expr '>'                        # ExprEvm
    | NEWSTRUCT '(' rawstr ')'                      # ExprNewStruct
    | QUOTED '(' expr ')'                           # ExprQuoted
    | '[' node '|' expr ']'                         # ExprCons
    | '`' expr                                      # ExprBackquote
    ;

// Lexer Rules (from lex.c and parse.y token definitions)

// Keywords
STRUCT: 'struct';
POINT: '->';
NEWSTRUCT: 'newstruct';
ANS: 'ans';
FDEF: 'fdef';
PFDEF: 'pfdef';
MODDEF: 'moddef';
MODEND: 'modend';
GLOBAL: 'global';
MGLOBAL: 'mglobal';
LOCAL: 'local';
LOCALF: 'localf';
DO: 'do';
WHILE: 'while';
FOR: 'for';
IF: 'if';
ELSE: 'else';
BREAK: 'break';
RETURN: 'return';
CONTINUE: 'continue';
PARIF: 'parif';
MAP: 'map';
RECMAP: 'recmap';
TIMER: 'timer';
GETOPT: 'getopt';
QUOTED: 'quoted';

// Logical/Formula Operators
FOP_AND: '@and';
FOP_OR: '@or';
FOP_IMPL: '@impl';
FOP_REPL: '@repl';
FOP_EQUIV: '@equiv';
FOP_NOT: '@not';
LOP: '@<' | '@>' | '@<=' | '@>=' | '@==' | '@!=';

// Generators
GF2NGEN: '@';
GFPNGEN: '@p';
GFSNGEN: '@s';

// Other tokens
CAR: 'car';
CDR: 'cdr';
COLONCOLON: '::';
OR: '||';
AND: '&&';
SELF: '++' | '--';
BOPASS: '+=' | '-=' | '*=' | '/=' | '%=' | '^=';

// Terminals
UCASE: [A-Z_] [a-zA-Z0-9_]*;
LCASE: [a-z] [a-zA-Z0-9_]* | ''' (~''')* ''';
STR: '"' ( '\' . | ~('"'|'\') )* '"';
FORMULA: [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?;

// Operators
CMP: '>=' | '<=' | '==' | '!=' | '>' | '<';
ASSIGN: '=';
PLUS: '+';
MINUS: '-';
MUL: '*';
DIV: '/';
MOD: '%';
POW: '^';
NOT: '!';
TERNARY: '?';
COLON: ':';
BACKQUOTE: '`';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
SEMI: ';';
DOLLAR: '$';
COMMA: ',';
PIPE: '|';
AMP: '&';

// Whitespace and Comments
WS: [ \t\r\n]+ -> skip;
COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
