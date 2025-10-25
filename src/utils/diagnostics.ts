export enum DiagnosticSeverity {
    Error = 1,
    Warning = 2,
    Information = 3,
    Hint = 4,
}

export interface Position {
    line: number; // 1-based
    character: number; // 1-based
}

export interface Range {
    start: Position;
    end: Position;
}

export interface Diagnostic {
    severity: DiagnosticSeverity;
    range: Range;
    message: string;
    source: string; // 必須に変更
}
