
import { analyze } from '../src/cli/cli';
import { getCompletions, CompletionItemKind } from '../src/features/completionProvider';
import { Position } from '../src/utils/diagnostics';

describe('Completion Provider', () => {

    it('should provide command suggestions for ctrl()', () => {
        // 準備: ユーザーが `ctrl("l` まで入力した状況をシミュレート
        const code = 'ctrl("l';
        const position: Position = { line: 0, character: 8 }; // カーソルは 'l' の直後

        // 実行: 補完候補を取得
        const completions = getCompletions(code, position, null, null);

        // 検証: 補完候補に 'loadpath' が含まれているかチェック
        const loadpathCompletion = completions.find(c => c.label === 'loadpath');
        
        expect(loadpathCompletion).toBeDefined(); // 'loadpath' が見つかるはず
        expect(loadpathCompletion?.kind).toBe(CompletionItemKind.EnumMember);
    });

    it('should provide pari function suggestions when typing inside pari()', () => {
        // 準備: ユーザーが `pari(s` まで入力した状況をシミュレート
        const code = 'pari(s';
        // カーソルは 's' の直後 (1行目, 7文字目)
        const position: Position = { line: 0, character: 7 };

        // 実行: 補完候補を取得 (ASTとシンボルテーブルは不要なのでnullを渡す)
        const completions = getCompletions(code, position, null, null);

        // 検証: 補完候補に 'sqrt' が含まれているかチェック
        const sqrtCompletion = completions.find(c => c.label === 'sqrt');
        
        expect(sqrtCompletion).toBeDefined(); // 'sqrt' が見つかるはず
        expect(sqrtCompletion?.kind).toBe(CompletionItemKind.Function); // pari関数なのでFunction
    });

});
