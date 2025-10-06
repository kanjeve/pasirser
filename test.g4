grammar test;

// --- Parser Rules ---
prog : statement* EOF;

statement : expr terminator       #ExprStatement
          | terminator            #EmptyLineStatement
          | functionDefinition    #DefinitionStatement
          | functionIf            #IfStatement
          | functionFor           #ForStatement
          | functionWhile         #WhileStatement
          | functionDo            #DoStatement
          | functionReturn        #ReturnStatement
          | functionBreak         #BreakStatement
          | functionContinue      #ContinueStatement
          | functionStruct        #StructStatement
          | functionModule        #ModuleStatement
          | preprocessor          #PreproStatement
          ;

// プリプロセッサ
prechar : CHAR memberName #PreChr
        | memberName CHARPLUS memberName #PreChrPlus
        ;
preprocessor : PDEFINE name=memberName (LPAREN (params+=memberName (COMMA params+=memberName)*)? RPAREN)? body=expr #PDef
             | (PIF | PIFDEF | PIFNDEF) expr statement* (PELIF expr statement*)* (PELSE statement*)? PENDIF #PIf
             | PINCLUDE (path_sys=systemPath | path_loc=STRING) #PInc
             ;

// キーワード
functionDefinition : DEF indeterminate LPAREN (VAR_ID (COMMA VAR_ID)*)? RPAREN block #Def;
functionIf : IF LPAREN condition=expr RPAREN thenBlock=block (ELSE elseBlock=block)? #If;
functionFor : FOR LPAREN init=exprlist? SEMI cond=exprlist? SEMI update=exprlist? RPAREN block #For;
functionWhile : WHILE LPAREN exprlist? RPAREN block #While;
functionDo : DO block WHILE LPAREN exprlist? RPAREN SEMI #Do;
functionReturn : RETURN expr? terminator #Return;
functionContinue : CONTINUE terminator #Continue;
functionBreak : BREAK terminator #Break;
functionStruct : STRUCT name=memberName LBRANCE members+=memberName (COMMA members+=memberName)* RBRANCE terminator #Struct;
functionCall : is_global=COLON2? name=qualifiedIdentifier LPAREN args=exprlist? (MID options+=optionPair (COMMA options+=optionPair)*)? RPAREN #Fcall;

functionModule : (EXTERN | STATIC | GLOBAL | LOCAL) VAR_ID (COMMA VAR_ID)* terminator   #ModuleAssign
               | LOCALF FUNC_ID (COMMA FUNC_ID)* terminator                            #ModuleFunction
               | MODULE FUNC_ID terminator                                             #ModuleStart
               | ENDMODULE terminator                                                  #ModuleEnd
               ;

// 演算子の優先順位を考慮したexprルール
expr : assignmentExpr #Main;

assignmentExpr : ternaryExpr                                                                                                            #NoAssignment
               | left=VAR_ID (LBRACKET indices+=expr RBRACKET)* op=(PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) right=assignmentExpr         #Assign
               | VAR_ID (ARROW memberName)+ (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr       #StructAssign
               | LBRACKET VAR_ID (COMMA VAR_ID)* RBRACKET (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr #ListAssign
               ;

ternaryExpr : condition=quoteExpr (QUESTION consequence=expr COLON alternative=expr)? #Ternary;

quoteExpr : (BACK)? qeNotExpr #Quote;

qeNotExpr : qeOrExpr (QE_8 qeOrExpr)* #QEnot;

qeOrExpr : qeAndExpr ((QE_11 | QE_12) qeAndExpr)* #QEor;

qeAndExpr : qeCompareExpr ((QE_9 | QE_10) qeCompareExpr)* #QEand;

qeCompareExpr : orExpr ((QE_1 | QE_2 | QE_3 | QE_4 | QE_5 | QE_6 | QE_7) orExpr)* #QECompare;

orExpr : andExpr (OR andExpr)* #Or;

andExpr : compareExpr (AND compareExpr)* #And;

compareExpr : addSubExpr ((EQ | NEQ | LT | GT | LE | GE) addSubExpr)* #Compare;

addSubExpr : mulDivSurExpr ((PLUS | MINUS) mulDivSurExpr)* #AddSub;

mulDivSurExpr : unaryExpr ((MULT | DIV | SUR) unaryExpr)* #MulDivSur;

unaryExpr : MINUS unaryExpr         #UnaryMinus
          | NOT unaryExpr           #NotExpr
          | powerExpr               #PowExpr
          ;

powerExpr : base=factExpr (POWER exponent=unaryExpr)? #PowEx;

factExpr : (postfixExpr | prefixExpr | indexAccessExpr) (NOT)? #FactrialExpr;

prefixExpr : (INC | DEC) indexAccessExpr #PreFix;

postfixExpr : indexAccessExpr (INC | DEC) #PostFix; 

indexAccessExpr : primaryExpr (LBRACKET expr RBRACKET)* #IndexAccess;

primaryExpr : indeterminate         #IndExpr
            | num                   #Real
            | id                    #IdExpr
            | functionCall          #FCallExpr
            | LPAREN expr RPAREN    #Paren
            | STRING                #StringLiteral
            | list                  #ListLiteral
            | dpoly                 #DpLiteral
            | prechar               #PreChrExpr
            ;

// リテラル

dpoly : LTLT INT (COMMA INT)* (COLON INT)? GTGT #Dp;

rational : (MINUS)? INT DIV (MINUS)? INT #Rat;

decimal  : (MINUS)? (FLOAT | INT) (EXP)? #Float;


num  : HEX        #HexNum
     | BIT        #BitNum
     | rational   #RatNum
     | decimal    #DecNum
     | IMAGINARY  #ImaNum
     ;

id   : VAR_ID  #VId
     | BEFORE  #Bef
     | BEFORE_N#BefN
     | VAR_2   #V2Id
     ;

indeterminate : qualifiedIdentifier #Func
              | ATFUNC              #AtFunc
              | NOSTRING            #ChFunc
              ;

list : LBRACKET (exprlist)? RBRACKET #ListExpr;

block : LBRANCE statement* RBRANCE #Sentence
      | statement                  #Sentence1
      ;

// 補助

exprlist : expr (COMMA expr)* ;

terminator : SEMI | DOLLAR;

memberName : indeterminate | VAR_ID;

systemPath : LT qualifiedIdentifier GT;

optionPair : key=qualifiedIdentifier ASSIGN value=expr;

qualifiedIdentifier : FUNC_ID (POINT FUNC_ID)*;

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
HEX      : '0x'[0-9]*;
BIT      : '0b'[0-9]*;
FLOAT    : [0-9]+ '.' [0-9]+;
EXP      : [Ee][+\-]?[0-9]*;
INT      : [0-9]+;
POINT    : '.';
IMAGINARY: '@i';
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
ATFUNC   : '@'([a-zA-Z])+;
VAR_2    : '@';
FUNC_ID  : [_]?[a-z_]([a-zA-Z0-9_.])*; 
VAR_ID   : [_]?[A-Z]([a-zA-Z0-9_])*; 
NEWLINE  : '\n' -> skip;
WS       : [ \t]+ -> skip;
COMMENT  : '/*' .*? '*/' -> skip;
PCOMMENT : '#if 0' .*? '#endif' -> skip;
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
STRING   : '"' .*? '"';
NOSTRING : '\'' .*?  '\'';

/*
fragment EscapeSequence : '\\'
     (    [nrt0\\'"?]
     |    OCTAL_BYTE_ESCAPE
     |    .
     );
fragment OCTAL_BYTE_ESCAPE : [0-7][0-7][0-7]
                           | [0-7][0-7]
                           | [0-7]
                           ;
*/
