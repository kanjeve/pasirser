# Asir語意味解析ツール (pasirser)

## 概要

このプロジェクトは、Asir語のソースコードを解析し、エラーを検出するなどためのツールです。主に、Asir語のVSCode拡張機能 **risa_enhancer** のバックエンドとして、リアルタイムなフィードバックやコード品質チェックを提供することを目的としています。単体でも利用可能です。

## 機能

*   **構文解析:** ANTLR4 (TypeScript-Next-Gen) を使用してAsir言語の構文を解析し、抽象構文木 (AST) を構築します。
*   **意味解析:** 構築されたASTを基に、型チェック、スコープ管理、未定義変数や命名規則違反などの意味的な問題を検出します。
*   **診断レポート:** 検出された問題（エラー、警告、情報、ヒント）を、コード上の正確な位置情報と共に詳細な診断メッセージとして報告します。
*   **CLIツール:** コマンドラインインターフェースを通じて、単一ファイルの解析や診断結果の出力（テキスト/JSON形式）が可能です。
*   **テストフレームワーク:** Jestを用いた単体テスト環境が整備されており、解析ロジックの品質と信頼性を保証します。

## インストール

プロジェクトの依存関係をインストールします。

```bash
npm install
```

## ビルド

TypeScriptソースコードをJavaScriptにコンパイルします。

```bash
npm run build
```

## 使い方 (CLI)

ビルド後、`dist/run.js` を `node` コマンドで実行することでCLIツールとして利用できます。

### 基本的な解析

```bash
node dist/run.js <解析したいファイルパス>
```

### オプション

*   `-f, --format <type>`: 出力形式を指定します。`text` (デフォルト) または `json`。
*   `--min-severity <level>`: 表示する診断の最小重要度を指定します。`error`, `warning`, `info`, `hint` (デフォルト) のいずれか。

### 例

*   `input.rr` を解析し、テキスト形式で結果を表示する:
    ```bash
    node dist/run.js input.rr
    ```

*   `input.rr` を解析し、JSON形式で結果を表示する:
    ```bash
    node dist/run.js input.rr --format json
    ```

*   `input.rr` を解析し、警告レベル以上の診断のみをテキスト形式で表示する:
    ```bash
    node dist/run.js input.rr --min-severity warning
    ```

## テスト

Jestを用いた単体テストを実行します。

```bash
npm test
```

## 将来の機能向上案

~~このプロジェクトのさらなる発展のためのアイデアは、`tome/future_enhancements.txt` にまとめられています。~~

## ライセンス


