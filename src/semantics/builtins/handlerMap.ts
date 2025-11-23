import { BuiltinFunctionHandler } from './types';
import * as ListHandlers from './handlers/list';
import * as SystemHandlers from './handlers/system';
import * as NumberHandlers from './handlers/number';
import * as TypeHandlers from './handlers/type';
import * as ArrayHandlers from './handlers/array';
import * as KeywordHandlers from './handlers/keyword';

export const builtinHandlers = new Map<string, BuiltinFunctionHandler>([
    // List
    ['cons', ListHandlers.handleCons],
    ['append', ListHandlers.handleAppend],
    ['reverse', ListHandlers.handleReverse],

    // System
    ['load', SystemHandlers.handleLoadOrImport],
    ['import', SystemHandlers.handleLoadOrImport],
    ['chdir', SystemHandlers.handleChdir],
    ['ctrl', SystemHandlers.handleCtrl],

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