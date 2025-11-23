import { BuiltinFunctionHandler } from '../types.js';
import { p_type } from '../../types.js';
import { DiagnosticSeverity } from '../../../utils/diagnostics.js';

export const handleType: BuiltinFunctionHandler = (Validator, node, argResults) => {
    if (argResults.length !== 1) {
        Validator.addDiagnostic(node, `type() 関数は引数を1つとります。`, DiagnosticSeverity.Error);
        return { type: p_type('integer'), constantValue: undefined };
    }

    const argResult = argResults[0];
    const argType = argResult.type;
    const argValue = argResult.constantValue;

    let typeCode: number | undefined = undefined;

    if (argValue === 0) {
        typeCode = 0;
    } else {
        if (argType.kind === 'primitive') {
            switch (argType.name) {
                case 'number':
                case 'integer':
                case 'rational':
                case 'float':
                case 'alg':
                case 'bigfloat':
                case 'complex':
                case 'fsmall':
                case 'flarge':
                case 'fchar2':
                case 'fcharp':
                case 'fcharpsmall':
                case 'fchardefp':
                case 'dalg': typeCode = 1; break;
                case 'indeterminate':
                case 'uc':
                case'form':
                case 'pp': typeCode = 2; break;
                case 'ratfunction': typeCode = 3; break;
                case 'string': typeCode = 7; break;
                case 'struct': typeCode = 8; break;
                case 'dpoly': typeCode = 9; break;
                case 'usint': typeCode = 10; break;
                case 'error': typeCode = 11; break;
                case 'gf2mat': typeCode = 12; break;
                case 'mathcap': typeCode = 13; break;
                case 'qeformula': typeCode = 14; break;
                case 'gfmmat': typeCode = 15; break;
                case 'bytearray': typeCode = 16; break;
                case 'quote': typeCode = 17; break;
                case 'option': typeCode = 18; break;
                case 'symbol': typeCode = 19; break;
                case 'range': typeCode = 20; break;
                case 'textbuffer': typeCode = 21; break;
                case 'dpolyvector': typeCode = 22; break;
                case 'quotearg': typeCode = 23; break;
                case 'imatrix': typeCode = 24; break;
                case 'ncpoly': typeCode = 25; break;
                case 'dmodpoly': typeCode = 26; break;
                case 'void': typeCode = -1; break;
            }
        } else {
            switch (argType.kind) {
                case 'list':
                case 'tuple': typeCode = 4; break;
                case 'vector': typeCode = 5; break;
                case 'matrix': typeCode = 6; break;
                case 'struct': typeCode = 8; break;
                case 'standard_polynomial': typeCode = 2; break;
                case 'rational_function': typeCode = 3; break;
                case 'distributed_polynomial': typeCode = 9; break;
                case 'dmod_polynomial': typeCode = 26; break;
                case 'non_commutative_polynomial': typeCode = 25; break;
            }
        }
    }
    return {type: p_type('integer'), constantValue: typeCode };
};