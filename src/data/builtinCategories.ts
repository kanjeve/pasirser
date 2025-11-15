export enum BuiltinFunctionCategory {
    Keyword,
    Form,
    Default,
}

export const BUILTIN_CATEGORIES = new Map<string, BuiltinFunctionCategory>();

// --- キーワード的関数 ---
BUILTIN_CATEGORIES.set('map', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('car', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('cdr', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('getopt', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('newstruct', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('pari', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('quote', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('recmap', BuiltinFunctionCategory.Keyword);
BUILTIN_CATEGORIES.set('timer', BuiltinFunctionCategory.Keyword);


// --- 関数形式 ---
BUILTIN_CATEGORIES.set('sin', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('cos', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('log', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('exp', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('sinh', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('cosh', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('tan', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('tanh', BuiltinFunctionCategory.Form);
BUILTIN_CATEGORIES.set('factorial', BuiltinFunctionCategory.Form);

// 上記で指定されていない BUILTIN_SIGNATURES の関数は 'Default' として扱います。
