grammar test;

// --- Parser Rules ---
prog : statement* EOF;

statement : expr (SEMI | DOLLAR)       #ExprStatement
          | (SEMI | DOLLAR)            #EmptyLineStatement
          | functionDefinition         #DefinitionStatement
          | functionIf                 #IfStatement
          | functionFor                #ForStatement
          | functionWhile              #WhileStatement
          | functionDo                 #DoStatement
          | functionReturn             #ReturnStatement
          | functionBreak              #BreakStatement
          | functionContinue           #ContinueStatement
          | functionStruct             #StructStatement
          | functionModule             #ModuleStatement
          ;

// キーワード
functionDefinition : DEF FUNC_ID LPAREN (VAR_ID (COMMA VAR_ID)*)? RPAREN block #Def;
functionIf : IF LPAREN expr RPAREN block (ELSE (block | functionIf))? #If;
functionFor : FOR LPAREN (expr (COMMA expr)*)? SEMI (expr (COMMA expr)*)? SEMI (expr (COMMA expr)*)? RPAREN block #For;
functionWhile : WHILE LPAREN (expr (COMMA expr)*)? RPAREN block #While;
functionDo : DO block WHILE LPAREN (expr (COMMA expr)*)? RPAREN #Do;
functionReturn : RETURN expr? (SEMI | DOLLAR) #Return;
functionContinue : CONTINUE (SEMI | DOLLAR) #Continue;
functionBreak : BREAK (SEMI | DOLLAR) #Break;
functionStruct : STRUCT (FUNC_ID | VAR_ID) LBRANCE (FUNC_ID | VAR_ID) (COMMA (FUNC_ID | VAR_ID))* RBRANCE (SEMI | DOLLAR) #Strct;
functionCall : COLON2? FUNC_ID (POINT FUNC_ID)? LPAREN (expr (COMMA expr)*)? RPAREN #Fcall;

functionModule : (EXTERN | STATIC | GLOBAL |LOCAL) VAR_ID (COMMA VAR_ID)* (SEMI | DOLLAR)   #ModuleAssign
               | LOCALF FUNC_ID (COMMA FUNC_ID)* (SEMI | DOLLAR)                            #ModuleFunction
               | MODULE FUNC_ID (SEMI | DOLLAR)                                             #ModuleStart
               | ENDMODULE (SEMI | DOLLAR)                                                  #ModuleEnd
               ;

// 演算子の優先順位を考慮したexprルール
expr : assignmentExpr #Main;

assignmentExpr : ternaryExpr                                                                                                            #NoAssignment
               | VAR_ID (LBRACKET expr RBRACKET)* (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr         #Assign
               | VAR_ID (ARROW (VAR_ID | FUNC_ID))+ (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr       #StructAssign
               | LBRACKET VAR_ID (COMMA VAR_ID)* RBRACKET (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr #ListAssign
               ;

ternaryExpr : qeOrExpr (QUESTION expr COLON expr)? #Ternary;

qeOrExpr : qeAndExpr (QE_7 qeAndExpr)* #QEor;

qeAndExpr : qeCompareExpr (QE_6 qeCompareExpr)* #QEand;

qeCompareExpr : orExpr ((QE_1 | QE_2 | QE_3 | QE_4 | QE_5) orExpr)* #QECompare;

orExpr : andExpr (OR andExpr)* #Or;

andExpr : compareExpr (AND compareExpr)* #And;

compareExpr : addSubExpr ((EQ | NEQ | LT | GT | LE | GE) addSubExpr)* #Compare;

addSubExpr : mulDivSurExpr ((PLUS | MINUS) mulDivSurExpr)* #AddSub;

mulDivSurExpr : unaryExpr ((MULT | DIV | SUR) unaryExpr)* #MulDivSur;

unaryExpr : MINUS unaryExpr         #UnaryMinus
          | NOT unaryExpr           #NotExpr
          | INC VAR_ID              #PreIncrement
          | DEC VAR_ID              #PreDecrement
          | postfixExpr             #PostFixExpr
          | powerExpr               #PowExpr
          ;

postfixExpr : powerExpr (INC | DEC) #PostFix; 

powerExpr : indexAccessExpr (POWER powerExpr)? #Power;

indexAccessExpr : primaryExpr (LBRACKET expr RBRACKET)* #IndexAccess;

primaryExpr : num                   #Real
            | id                    #IdExpr
            | functionCall          #FCallExpr
            | LPAREN expr RPAREN    #Paren
            | specialnum            #SpecNum
            | STRING2               #StringLiteral
            | STRING1               #CharLiteral
            | list                  #ListLiteral
            | dpoly                 #DpLiteral
            ;

dpoly : LTLT INT (COMMA INT)* (COLON INT)? GTGT #Dp;

rational : (MINUS)? INT DIV (MINUS)? INT #Rat;

decimal  : (MINUS)? (FLOAT | INT) (EXP)? #Float;


num  : rational   #RatNum
     | decimal    #DecNum
     ;

id   : VAR_ID                   #VId
     | FUNC_ID (POINT FUNC_ID)? #FId
     | VAR_2                    #V2Id
     ;

specialnum : IMAGINARY     #Ima
           | PI            #Pi
           | NAPIER        #Nap
           | BEFORE        #Bef
           | BEFORE_N      #BefN
           ;

list : LBRACKET (expr (COMMA expr)*)? RBRACKET #ListExpr;

block : LBRANCE statement* RBRANCE #Sentence
      | statement                  #Sentence1
      ;

// --- Lexer Rules ---
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
FLOAT    : [0-9]+ '.' [0-9]+;
EXP      : [Ee][+\-]?[0-9]*;
INT      : [0-9]+;
POINT    : '.';
IMAGINARY: '@i';
PI       : '@pi';
NAPIER   : '@e';
BEFORE   : '@@';
BEFORE_N : '@n';
QE_1     : '@>';
QE_2     : '@<';
QE_3     : '@>=';
QE_4     : '@<=';
QE_5     : '@==';
QE_6     : '@&&';
QE_7     : '@||';
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
VAR_2    : '@';
FUNC_ID  : [a-z]([a-zA-Z0-9_])*; 
VAR_ID   : [A-Z]([a-zA-Z0-9_])*; 
NEWLINE  : '\n' -> skip;
WS       : [ \t]+ -> skip;
COMMENT  : '/*' .*? '*/' -> skip;
STRING2  : '"' (EscapeSequence | ~["\\\r\n] )* '"';
STRING1  : '\''(EscapeSequence | ~["\\\r\n] )* '\'';

// ---fragment---
fragment EscapeSequence : '\\'
     (    [nrt0\\'"?]
     |    OCTAL_BYTE_ESCAPE
     |    .
     );
fragment OCTAL_BYTE_ESCAPE : [0-7][0-7][0-7]
                           | [0-7][0-7]
                           | [0-7]
                           ;
