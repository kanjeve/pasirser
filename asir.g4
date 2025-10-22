grammar asir;

// --- Parser Rules ---
prog : statement* EOF;

statement : expr terminator       #ExprStatement
          | terminator            #EmptyLineStatement
          | functionDefinition    #DefinitionStatement
          | formDeclaration       #ForwardDeclStatement
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
prechar : CHAR ID #PreChr
        | ID CHARPLUS ID #PreChrPlus
        ;
preprocessor : PDEFINE name=ID (LPAREN (params+=ID (COMMA params+=ID)*)? RPAREN)? body=expr #PDef
             | directive=(PIF | PIFDEF | PIFNDEF) condition=expr thenSymts+=statement* elifs+=elifClause* elseBlk=elseClause? PENDIF #PIf
             | PINCLUDE (path_sys=systemPath | path_loc=STRING) #PInc
             ;

// キーワード
functionDefinition : DEF name=indeterminate LPAREN (params+=ID (COMMA params+=ID)*)? RPAREN body=block #Def;
formDeclaration :FUNCTION name=indeterminate LPAREN (params+=indeterminate (COMMA params+=indeterminate)*)? RPAREN terminator #FormDecl;
functionIf : IF LPAREN condition=expr RPAREN thenBlock=block (ELSE elseBlock=block)? #If;
functionFor : FOR LPAREN init=exprlist? SEMI cond=exprlist? SEMI update=exprlist? RPAREN block #For;
functionWhile : WHILE LPAREN exprlist? RPAREN block #While;
functionDo : DO block WHILE LPAREN exprlist? RPAREN SEMI #Do;
functionReturn : RETURN expr? terminator #Return;
functionContinue : CONTINUE terminator #Continue;
functionBreak : BREAK terminator #Break;
functionStruct : STRUCT name=indeterminate LBRANCE members+=indeterminate (COMMA members+=indeterminate)* RBRANCE terminator #Struct;

functionModule : (EXTERN | STATIC | GLOBAL | LOCAL | LOCALF) indeterminate (COMMA indeterminate)* terminator   #ModuleAssign
               | MODULE indeterminate terminator                                             #ModuleStart
               | ENDMODULE terminator                                                  #ModuleEnd
               ;

// 演算子の優先順位を考慮したexprルール
expr : assignmentExpr #Main;

assignmentExpr : ternaryExpr                                                                                                            #NoAssignment
               | left=ID (LBRACKET indices+=expr RBRACKET)* op=(PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) right=assignmentExpr         #Assign
               | ID (ARROW indeterminate)+ (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr       #StructAssign
               | LBRACKET ID (COMMA ID)* RBRACKET (PLUSEQ | MINUSEQ | MULTEQ | DIVEQ | SUREQ | POWEREQ | ASSIGN) assignmentExpr #ListAssign
               ;

ternaryExpr : condition=quoteExpr (QUESTION consequence=expr COLON alternative=expr)? #Ternary;

quoteExpr : (BACK)? qeImplExpr #Quote;

qeImplExpr : qeNotExpr ((QE_REPL | QE_REPL | QE_EQUIV) qeNotExpr)* #QEImpl;

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

factExpr : (postfixExpr | prefixExpr | indexAccessExpr) (NOT)? #FactorialExpr;

prefixExpr : (INC | DEC) indexAccessExpr #PreFix;

postfixExpr : indexAccessExpr (INC | DEC) #PostFix; 

indexAccessExpr : memberAccessExpr (LBRACKET expr RBRACKET)* #IndexAccess;

memberAccessExpr : primaryExpr (ARROW indeterminate)* #MemberAccess;

primaryExpr : indeterminate         #IndExpr
            | num                   #Real
            | id                    #IdExpr
            | is_global=COLON2? path=qualifiedName (LBRANCE diffOrders+=INT (COMMA diffOrders+=INT)* RBRANCE)? LPAREN args=exprlist? (MID options+=optionPair (COMMA options+=optionPair)*)? RPAREN         #FCallExpr
            | LPAREN MULT callee=expr RPAREN LPAREN args=exprlist? (MID options+=optionPair (COMMA options+=optionPair)*)? RPAREN #FunctorCallExpr
            | LPAREN expr RPAREN    #Paren
            | STRING                #StringLiteral
            | list                  #ListLiteral
            | dpoly                 #DpLiteral
            | prechar               #PreChrExpr
            ;

// リテラル

dpoly : LTLT INT (COMMA INT)* (COLON INT)? GTGT #Dp;

rational : (MINUS)? INT DIV (MINUS)? INT #Rat;

decimal  : (FLOAT | INT) #Float;


num  : HEX        #HexNum
     | BIT        #BitNum
     | rational   #RatNum
     | decimal    #DecNum
     | IMAGINARY  #ImaNum
     | AEGEN      #GenNum
     ;

id   : BEFORE  #Bef
     | BEFORE_N#BefN
     | VAR_2   #V2Id
     ;

indeterminate : ID              #Func
              | ATFUNC              #AtFunc
              | NOSTRING            #ChFunc
              ;

list : LBRACKET (exprlist)? RBRACKET #ListExpr;

block : LBRANCE statement* RBRANCE #Sentence
      | statement                  #Sentence1
      ;

// 補助

qualifiedName : (moduleName=ID DOT)? funcName=indeterminate;

dottedIdentifier : indeterminate (DOT indeterminate)+;

exprlist : expr (COMMA expr)* ;

terminator : SEMI | DOLLAR;

systemPath : SYSTEM_PATH_LITERAL;

elifClause : PELIF condition=expr statements+=statement*;

elseClause : PELSE statements+=statement*;

optionPair : key=indeterminate ASSIGN value=expr;

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
HEX      : '0'[Xx][0-9]*;
BIT      : '0'[Bb][0-9]*;
IMAGINARY: '@i';
AEGEN    : '@s';
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
ATFUNC   : '@'([a-zA-Z])+;
VAR_2    : '@';
ID       : [_]?[a-zA-Z_]([a-zA-Z0-9_])*;
FLOAT    : [0-9]+ '.' [0-9]* EXPONENT?
         | '.' [0-9]* EXPONENT?
         | [0-9]+ EXPONENT
         ;
INT      : [0-9]+;
DOT      : '.';
NEWLINE  : '\n' -> skip;
WS       : [ \t]+ -> skip;
COMMENT  : '/*' .*? '*/' -> skip;
LCOMMENT : '//' ~[\r\n]* -> skip;
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
SYSTEM_PATH_LITERAL: '<' [a-zA-Z0-9_./\\-]+ '>';

fragment EXPONENT : [Ee] [+\-]?[0-9]*;

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
