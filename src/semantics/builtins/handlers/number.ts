import { BuiltinFunctionHandler, ValidatorInterface } from '../types.js';
import { p_type, u_type, AsirType } from '../../types.js';
import { DiagnosticSeverity } from '../../../utils/diagnostics.js';
import { getCommonSupertype } from '../../utils/typeSystem.js';
import * as ast from '../../../core/ast/asirAst.js';
import { typeToString } from '../../utils/typeFormatter.js';

function devalTypeTransform(this: ValidatorInterface, inputType: AsirType, node: ast.ASTNode): AsirType {
    switch (inputType.kind) {
        case 'primitive':
            if (inputType.name === 'complex') {
                return p_type('complex');
            }
            if (['integer', 'rational', 'float', 'bigfloat', 'number'].includes(inputType.name)) {
                return p_type('float');
            }
            if (inputType.name === 'form') {
                return u_type([p_type('number'), p_type('form')]);
            }
            if (inputType.name === 'parameter') {
                return p_type('any'); // Changed from p_type('form')
            }
            this.addDiagnostic(node, `devalは型'${typeToString(inputType)}'を評価できません。`, DiagnosticSeverity.Error);
            return p_type('error');

        case 'standard_polynomial':
        case 'distributed_polynomial':
        case 'dmod_polynomial':
        case 'non_commutative_polynomial':
        case 'rational_function':
            const newCoeffType = devalTypeTransform.call(this, inputType.coefficientType, node);
            if (newCoeffType.kind === 'primitive' && newCoeffType.name === 'error') {
                return p_type('error');
            }
            return { ...inputType, coefficientType: newCoeffType };

        case 'union':
            const transformedTypes = inputType.types.map(t => devalTypeTransform.call(this, t, node));
            const validTypes = transformedTypes.filter(t => !(t.kind === 'primitive' && t.name === 'error'));
            if (validTypes.length === 0) {
                return p_type('error');
            }
            return getCommonSupertype(validTypes);
        
        case 'vector':
        case 'matrix':
        case 'list':
        case 'tuple':
            this.addDiagnostic(node, `devalはコンテナ型'${inputType.kind}'を直接評価できません。`, DiagnosticSeverity.Error);
            return p_type('error');

        default:
            this.addDiagnostic(node, `devalで未対応の型'${inputType.kind}'です。`, DiagnosticSeverity.Warning);
            return p_type('any');
    }
}


export const handleDeval: BuiltinFunctionHandler = (validator, node, argResults) => {
    if (argResults.length === 0 || argResults.length > 2) {
        validator.addDiagnostic(node, `deval/eval は1つまたは2つの引数を取ります。`, DiagnosticSeverity.Error);
        return { type: p_type('any') };
    }

    const inputType = argResults[0].type;
    const argNode = node.args[0];
    
    const resultType = devalTypeTransform.call(validator, inputType, argNode);

    return { type: resultType };
};