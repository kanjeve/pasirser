grammar asir;

// --- Parser Rules ---
prog : statement* EOF;

statement
    : expr terminator                   #ExprStatement
    | terminator                        #EmptyLineStatement
    | functionDefinition                #DefinitionStatement
    | formDeclaration                   #ForwardDeclStatement
    | functionIf                        #IfStatement
    | functionFor                       #ForStatement
    | functionWhile                     #WhileStatement
    | functionDo                        #DoStatement
    | functionReturn                    #ReturnStatement
    | functionBreak                     #BreakStatement
    | functionContinue                  #ContinueStatement
    | functionStruct                    #StructStatement
    | functionEnd                       #EndStatement
    | functionQuit                      #QuitStatement
    | functionDebug                     #DebugStatement
    | functionModule                    #ModuleStatement
    | preprocessor                      #PreproStatement
    ;

// プリプロセッサ
prechar
    : CHAR ID #PreChr
    | ID CHARPLUS ID #PreChrPlus
    ;

preprocessor
    : PDEFINE name=dottedAllowedId (LPAREN (params+=ID (COMMA params+=ID)*)? RPAREN)? body=expr #PDef
    | directive=(PIF | PIFDEF | PIFNDEF) condition=expr thenSymts+=statement* elifs+=elifClause* elseBlk=elseClause? PENDIF #PIf
    | PINCLUDE (path_sys=systemPath | path_loc=STRING) #PInc
    ;

// 文・制御構文
functionDefinition : DEF name=indeterminate LPAREN (params+=ID (COMMA params+=ID)*)? RPAREN body=block #Def;
formDeclaration    : FUNCTION name=indeterminate LPAREN (params+=indeterminate (COMMA params+=indeterminate)*)? RPAREN terminator #FormDecl;
functionIf         : IF LPAREN condition=expr RPAREN thenBlock=block (ELSE elseBlock=block)? #If;
functionFor        : FOR LPAREN init=exprlist? SEMI cond=exprlist? SEMI update=exprlist? RPAREN block #For;
functionWhile      : WHILE LPAREN exprlist? RPAREN block #While;
functionDo         : DO block WHILE LPAREN exprlist? RPAREN SEMI #Do;
functionReturn     : RETURN expr? terminator #Return;
functionContinue   : CONTINUE terminator #Continue;
functionBreak      : BREAK terminator #Break;
functionStruct     : STRUCT name=dottedAllowedId LBRANCE members+=indeterminate (COMMA members+=indeterminate)* RBRANCE terminator #Struct;
functionEnd        : END terminator #End;
functionQuit       : QUIT terminator #Quit;
functionDebug      : DEBUG terminator #Debug;

functionModule
    : (EXTERN | STATIC | GLOBAL | LOCAL | LOCALF) indeterminate (COMMA indeterminate)* terminator   #ModuleAssign
    | MODULE indeterminate terminator                                                               #ModuleStart
    | ENDMODULE terminator                                                                          #ModuleEnd
    ;

// -----------------------------------------------------------------------------
// Expr (Unified Rule) - 優先順位順
// -----------------------------------------------------------------------------
expr
    : LPAREN expr RPAREN                                                                            #ParenExpr
    | num                                                                                           #NumberLiteral
    | id                                                                                            #IdLiteral
    | STRING                                                                                        #StringLiteralExpr
    | list                                                                                          #ListLiteralExpr
    | dpoly                                                                                         #DpolyLiteralExpr
    | prechar                                                                                       #PrecharExpr
    | dottedIdentifier                                                                              #DottedIdExpr
    | indeterminate                                                                                 #VarExpr
    | is_global=COLON2? path=qualifiedName (LBRANCE diffOrders+=INT (COMMA diffOrders+=INT)* RBRANCE)? LPAREN args=exprlist? (MID options+=optionPair (COMMA options+=optionPair)*)? RPAREN #FCallExpr
    | LPAREN MULT callee=expr RPAREN LPAREN args=exprlist? (MID options+=optionPair (COMMA options+=optionPair)*)? RPAREN #FunctorCallExpr
    | expr (ARROW indeterminate)+                                                                   #MemberAccessExpr
    | expr (LBRACKET indices+=expr RBRACKET)+                                                       #IndexAccessExpr
    | expr (INC | DEC)                                                                              #PostFixExpr
    | expr NOT                                                                                      #FactorialExpr
    | (INC | DEC) expr                                                                              #PreFixExpr
    | (PLUS | MINUS) expr                                                                           #UnarySignExpr
    | NOT expr                                                                                      #UnaryNotExpr
    | <assoc=right> base=expr POWER exponent=expr                                                   #PowerExpr
    | expr op=(MULT | DIV | SUR) expr                                                               #MulDivSurExpr
    | expr op=(PLUS | MINUS) expr                                                                   #AddSubExpr
    | expr op=(EQ | NEQ | LT | GT | LE | GE) expr                                                   #RelationalExpr
    | expr AND expr                                                                                 #AndExpr
    | expr OR expr                                                                                  #OrExpr
    | expr op=(QE_1 | QE_2 | QE_3 | QE_4 | QE_5 | QE_6 | QE_7) expr                                 #QECompareExpr
    | expr op=(QE_9 | QE_10) expr                                                                   #QEAndExpr
    | expr op=(QE_11 | QE_12) expr                                                                  #QEOrExpr
    | expr QE_8 expr                                                                                #QENotExpr
    | expr op=(QE_IMPL | QE_REPL | QE_EQUIV) expr                                                   #QEImplExpr
    | BACK expr                                                                                     #QuoteExpr
    | <assoc=right> condition=expr (QUESTION consequence=expr COLON alternative=expr)               #TernaryExpr
    | <assoc=right> left=expr op=(ASSIGN | PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ) right=expr #AssignExpr
    ;

// -----------------------------------------------------------------------------

// 補助
qualifiedName : (moduleName=ID DOT)? funcName=indeterminate;

dottedAllowedId : indeterminate (DOT ID)*;

dottedIdentifier : indeterminate (DOT indeterminate)+; 

exprlist : expr (COMMA expr)* ;

terminator : SEMI | DOLLAR;

systemPath : SYSTEM_PATH_LITERAL;

elifClause : PELIF condition=expr statements+=statement*;

elseClause : PELSE statements+=statement*;

optionPair : key=indeterminate ASSIGN value=expr;

// リテラル定義
dpoly : LTLT INT (COMMA INT)* (COLON INT)? GTGT #Dp;
rational : (MINUS)? INT DIV (MINUS)? INT #Rat;
decimal  : (FLOAT | INT) #Float;
num
    : HEX       #HexNum
    | BIT       #BitNum
    | rational  #RatNum
    | decimal   #DecNum
    | IMAGINARY #ImaNum
    | ASGEN     #AsGenNum
    | APGEN     #ApGenNum
    ;
id   : BEFORE   #Bef
     | BEFORE_N #BefN
     | VAR_2    #V2Id
     ;
indeterminate
    : ID        #Func
    | ATFUNC    #AtFunc
    | NOSTRING  #ChFunc
    ;
list : LBRACKET (exprlist)? RBRACKET #ListExpr;
block
    : LBRANCE statement* RBRANCE #Sentence
    | statement                  #Sentence1
    ;

// --- Lexer Rules ---

DEF      : 'def';
IF       : 'if';
FOR      : 'for';
WHILE    : 'while';
DO       : 'do';
ELSE     : 'else';
RETURN   : 'return';
CONTINUE : 'continue';
BREAK    : 'break';
STRUCT   : 'struct';
MODULE   : 'module';
ENDMODULE: 'endmodule';
EXTERN   : 'extern';
STATIC   : 'static';
GLOBAL   : 'global';
LOCAL    : 'local';
LOCALF   : 'localf';
FUNCTION : 'function';
END      : 'end';
QUIT     : 'quit';
DEBUG    : 'debug';

LTLT     : '<<';
GTGT     : '>>';
COLON2   : '::';
INC      : '++';
DEC      : '--';
PLUSEQ   : '+=';
MINUSEQ  : '-=';
MULTEQ   : '*=';
DIVEQ    : '/=';
SUREQ    : '%=';
POWEREQ  : '^=';
ARROW    : '->';
EQ       : '==';
NEQ      : '!=';
LE       : '<=';
GE       : '>=';
LT       : '<';
GT       : '>';
AND      : '&&';
OR       : '||';
NOT      : '!';
PLUS     : '+';
MINUS    : '-';
MULT     : '*';
DIV      : '/';
SUR      : '%';
POWER    : '^';
ASSIGN   : '=';
BACK     : '`';
MID      : '|';
LPAREN   : '(';
RPAREN   : ')';
LBRANCE  : '{';
RBRANCE  : '}';
LBRACKET : '[';
RBRACKET : ']';
QUESTION : '?';
COLON    : ':';
SEMI     : ';';
DOLLAR   : '$';
COMMA    : ',';

HEX      : '0'[Xx][0-9a-fA-F]+;
BIT      : '0'[Bb][0-1]+;
IMAGINARY: '@i';
ASGEN    : '@s';
APGEN    : '@p';
BEFORE   : '@@';
BEFORE_N : '@'[0-9]+;
QE_1     : '@>=';
QE_2     : '@<=';
QE_3     : '@>';
QE_4     : '@<';
QE_5     : '@==';
QE_6     : '@=';
QE_7     : '@!=';
QE_8     : '@!';
QE_9     : '@&&';
QE_10    : '@&';
QE_11    : '@||';
QE_12    : '@|';
QE_IMPL  : '@impl';
QE_REPL  : '@repl';
QE_EQUIV : '@equiv';

ATFUNC   : '@'([a-zA-Z])+;
VAR_2    : '@';
ID       : [a-zA-Z_] [a-zA-Z0-9_]*;

FLOAT    : [0-9]+ '.' [0-9]* EXPONENT?
         | '.' [0-9]+ EXPONENT?
         | [0-9]+ EXPONENT
         ;
INT      : [0-9]+;
DOT      : '.';

PCOMMENT : '#if' [ \t]+ '0' .*? '#endif' -> skip;
PIFDEF   : '#ifdef';
PIFNDEF  : '#ifndef';
PIF      : '#if';
PELSE    : '#else';
PELIF    : '#elif';
PENDIF   : '#endif';
PINCLUDE : '#include';
PDEFINE  : '#define';
CHARPLUS : '##';
CHAR     : '#';

STRING   : '"' ( '\\' . | ~["\\] )* '"';
NOSTRING : '\'' ( '\\' . | ~['\\] )* '\'';
SYSTEM_PATH_LITERAL: '<' [a-zA-Z0-9_./\\-]+ '>';

NEWLINE  : [\r\n]+ -> skip;
WS       : [ \t]+ -> skip;
COMMENT  : '/*' .*? '*/' -> skip;
LCOMMENT : '//' ~[\r\n]* -> skip;

fragment EXPONENT : [Ee] [+\-]?[0-9]+;