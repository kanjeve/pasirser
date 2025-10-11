export enum DiagnosticSeverity {
    Error = 1,
    Warning = 2,
    Information = 3,
    Hint = 4,
}

export interface Position {
    line: number; // 0-based
    character: number; // 0-based
}

export interface Range {
    start: Position;
    end: Position;
}

export interface Diagnostic {
    severity: DiagnosticSeverity;
    range: Range;
    message: string;
    source?: string;
}
