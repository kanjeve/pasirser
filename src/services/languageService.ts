import { ProgramNode } from '../core/ast/asirAst';
import { SymbolTable } from '../semantics/symbolTable'
import { Diagnostic, Position } from '../utils/diagnostics';
import { parseAndBuildAST } from '../core/parser/parserUtils';
import { Validator } from '../semantics/validator';
import * as ast from '../core/ast/asirAst';

// 機能提供関数と関連する型をインポート
import { getCompletions as originalGetCompletions, CompletionItem } from '../features/completionProvider';
import { getHoverInfo as originalGetHoverInfo, HoverInfo } from '../features/hoverProvider';
import { getDefinitionLocation as originalGetDefinitionLocation, DefinitionLocation } from '../features/definitionProvider';
import { getDocumentSymbols as originalGetDocumentSymbols, DocumentSymbol } from '../features/documentSymbolProvider';
import { getRenameEdits as originalGetRenameEdits, TextEdit } from '../features/renameProvider';
import { getSemanticTokens as originalGetSemanticTokens, SemanticToken } from '../features/semanticTokensProvider';
import { AsirFormatter } from '../features/formatter';

export interface AnalysisResult {
    ast: ProgramNode | null;
    symbolTable: SymbolTable | null;
    diagnostics: Diagnostic[];
}

/**
 * Asir言語のソースコードに対する解析サービスを一元的に提供するクラス。
 * ドキュメントごとにインスタンス化され、解析結果（AST、シンボルテーブル）を状態として保持する。
 */
export class LanguageService {
    private currentAst: ProgramNode | null = null;
    private currentSymbolTable: SymbolTable | null = null;
    private currentDiagnostics: Diagnostic[] = [];
    private currentFilePath: string;
    private semanticValidationEnabled = false; // 意味解析の有効/無効フラグ

    constructor(filePath: string) {
        this.currentFilePath = filePath;
    }

    /**
     * 意味解析の有効/無効を設定する。
     * @param enabled 有効にする場合はtrue
     */
    public setSemanticValidation(enabled: boolean): void {
        this.semanticValidationEnabled = enabled;
    }

    /**
     * ドキュメントのコンテンツを更新し、再解析を実行する。
     * @param code 新しいソースコード
     */
    public updateDocument(code: string, systemIncludePaths: string[] = [], loadPaths: string[] = []): void {
        const { ast, diagnostics: parseDiagnostics } = parseAndBuildAST(code, this.currentFilePath || 'untitled');
        
        const diagnostics: Diagnostic[] = [...parseDiagnostics];

        if (!ast) {
            this.currentAst = null;
            this.currentSymbolTable = null;
            this.currentDiagnostics = diagnostics;
            return;
        }

        // 意味解析が有効な場合のみValidatorを実行
        if (this.semanticValidationEnabled) {
            const validator = new Validator(ast, this.currentFilePath, systemIncludePaths, loadPaths);
            const semanticErrors = validator.analyze(ast);
            diagnostics.push(...semanticErrors);
            this.currentSymbolTable = validator.symbolTable;
        } else {
            // 意味解析が無効な場合は、シンボルテーブルをクリア
            this.currentSymbolTable = null;
        }

        this.currentAst = ast;
        this.currentDiagnostics = diagnostics;
    }

    /**
     * 現在の診断情報（エラーや警告）を取得する。
     * @returns 診断情報の配列
     */
    public getDiagnostics(): Diagnostic[] {
        return this.currentDiagnostics;
    }

    /**
     * 現在のAST（抽象構文木）を取得する。
     */
    public getAST(): ProgramNode | null {
        return this.currentAst;
    }

    /**
     * 現在のシンボルテーブルを取得する。
     */
    public getSymbolTable(): SymbolTable | null {
        return this.currentSymbolTable;
    }

    /**
     * 指定された位置のコード補完候補を取得する。
     */
    public getCompletions(code: string, position: Position): CompletionItem[] {
        if (!this.currentAst || !this.currentSymbolTable) {
            return [];
        }
        return originalGetCompletions(code, position, this.currentAst, this.currentSymbolTable);
    }

    /**
     * 指定された位置のホバー情報を取得する。
     */
    public getHoverInfo(code: string, position: Position): HoverInfo | null {
        if (!this.currentAst || !this.currentSymbolTable) {
            return null;
        }
        return originalGetHoverInfo(code, position, this.currentAst, this.currentSymbolTable) ?? null;
    }

    /**
     * 指定された位置のシンボルの定義位置を取得する。
     */
    public getDefinitionLocation(code: string, position: Position): DefinitionLocation | null {
        if (!this.currentAst || !this.currentSymbolTable) {
            return null;
        }
        return originalGetDefinitionLocation(code, position, this.currentAst, this.currentSymbolTable, this.currentFilePath) ?? null;
    }

    /**
     * ドキュメント全体のシンボル（アウトライン）を取得する。
     */
    public getDocumentSymbols(): DocumentSymbol[] {
        if (!this.currentAst || !this.currentSymbolTable) {
            return [];
        }
        return originalGetDocumentSymbols(this.currentAst, this.currentSymbolTable);
    }

    /**
     * シンボル名を変更するためのテキスト編集情報を取得する。
     */
    public getRenameEdits(code: string, position: Position, newName: string): TextEdit[] | null {
        if (!this.currentAst || !this.currentSymbolTable) {
            return null;
        }
        return originalGetRenameEdits(code, position, newName, this.currentAst, this.currentSymbolTable, this.currentFilePath) ?? null;
    }

    /**
     * セマンティックハイライトのためのトークンを取得する。
     */
    public getSemanticTokens(): SemanticToken[] {
        if (!this.currentAst || !this.currentSymbolTable) {
            return [];
        }
        return originalGetSemanticTokens(this.currentAst, this.currentSymbolTable);
    }

    /**
     * ドキュメントをフォーマットする。
     */
    public formatDocument(): string | null {
        if (!this.currentAst) {
            // TODO: 構文エラーがある場合でも部分的にフォーマットを試みるか検討
            return null;
        }
        const formatter = new AsirFormatter();
        return formatter.format(this.currentAst);
    }
}
