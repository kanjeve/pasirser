import { BuiltinFunctionHandler } from './types';
import * as ListHandlers from './handlers/list';
import * as SystemHandlers from './handlers/system';
import * as NumberHandlers from './handlers/number';
import * as TypeHandlers from './handlers/type';
import * as ArrayHandlers from './handlers/array';
import * as KeywordHandlers from './handlers/keyword';

export const builtinHandlers = new Map<string, BuiltinFunctionHandler>([
    // List
    ['append', ListHandlers.handleAppend],
    ['cons', ListHandlers.handleCons],
    ['length', ListHandlers.handleLength],
    ['reverse', ListHandlers.handleReverse],

    // System
    ['chdir', SystemHandlers.handleChdir],
    ['ctrl', SystemHandlers.handleCtrl],
    ['import', SystemHandlers.handleLoadOrImport],
    ['load', SystemHandlers.handleLoadOrImport],

    // Type
    ['type', TypeHandlers.handleType],

    // Number
    ['deval', NumberHandlers.handleDeval],
    ['eval', NumberHandlers.handleDeval],

    // Array (Matrix/Vector)
    ['ltov', ArrayHandlers.handleLtov],
    ['vtol', ArrayHandlers.handleVtol],

    // Keyword
    ['car', KeywordHandlers.handleCar],
    ['cdr', KeywordHandlers.handleCdr],
    ['map', KeywordHandlers.handleMap],
    ['newstruct', KeywordHandlers.handleNewstruct],
    ['pari', KeywordHandlers.handlePari],
]);