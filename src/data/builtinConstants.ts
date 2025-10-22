import { AsirType, p_type } from "../semantics/types";

export const BUILTIN_CONSTANTS = new Map<string, AsirType>([
    ['@e', p_type('form')],
    ['@pi', p_type('form')],
    ['@i', p_type('complex')],
    ['@', p_type('fchar2')],
    ['@p', p_type('fcharp')],
    ['@s', p_type('fchardefp')],
    ['@lex', p_type('symbol')],
    ['@glex', p_type('symbol')],
    ['@grlex', p_type('symbol')],
    ['@true', p_type('qeformula')],
    ['@false', p_type('qeformula')],
    ['@void', p_type('void')],
])