# Cloudflare Pages デプロイガイド

このドキュメントは、Next.js プロジェクトを Cloudflare Pages にデプロイするための詳細な手順と設定を説明します。

## 1. 選択されたデプロイパスとその理由

このプロジェクトは Next.js を使用しており、静的な個人プロフィールウェブアプリとして設計されています。そのため、Cloudflare Pages の静的サイトデプロイパスを選択しました。

**理由:**
*   **静的サイトの特性**: プロフィール情報は JSON ファイルとして提供され、ビルド時に完全に静的なHTML、CSS、JavaScriptとして生成されます。Cloudflare Pages はこのような静的コンテンツのホスティングに最適化されています。
*   **高いパフォーマンスと信頼性**: Cloudflare のグローバルなCDNを利用することで、高速なコンテンツ配信と高い可用性を実現できます。
*   **簡易なデプロイ**: Gitリポジトリとの統合により、プッシュごとに自動デプロイが可能です。

## 2. Cloudflare UI 設定

Cloudflare Pages でプロジェクトを設定する際、以下の設定を使用してください。

*   **Framework preset**: `Next.js`
*   **Root directory**: `profile-webapp` (リポジトリのルートに対する Next.js プロジェクトのサブディレクトリ)
*   **Build command**: `npm install && npm run build` (依存関係をインストールし、Next.js プロジェクトをビルドします)
*   **Output directory**: `.next` (Next.js の `app` ルーターを使用した場合のデフォルトのビルド出力ディレクトリ。これは、`profile-webapp` ディレクトリ内の相対パスです。)

## 3. GitHub Actions ワークフローの設定

Cloudflare Pages へのデプロイは、`profile-webapp/.github/workflows/deploy-cloudflare.yml` に定義された GitHub Actions ワークフローによって自動化されます。

**重要な設定**: `cloudflare/pages-action@v1` アクションの `directory` パラメータは、ビルドされた Next.js アプリケーションの出力ディレクトリを指すように `.next` に設定されています。

## 4. 共通の失敗モードとローカルでの検証方法

### 失敗モード: "Could not detect a directory containing static files"

**原因**: Cloudflare Pages がビルドコマンドの実行後に、指定された「Output directory」に静的ファイルを見つけられなかった場合に発生します。

**検証方法 (ローカル)**:
1.  プロジェクトルート (`profile-webapp`) でターミナルを開きます。
2.  ビルドコマンドを実行します: `npm install && npm run build`
3.  ビルドが成功したら、`profile-webapp/.next` ディレクトリが生成されていることを確認します。
    `ls -F profile-webapp/.next` を実行し、中にファイルが存在することを確認してください。
    このディレクトリが存在しない場合、ビルドコマンド自体に問題があるか、Next.js の設定が意図しない出力を生成している可能性があります。

### 失敗モード: 環境変数の不足

**原因**: Cloudflare Pages デプロイアクション (`cloudflare/pages-action@v1`) は、`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`、`GITHUB_TOKEN` の Secrets を必要とします。これらが GitHub リポジトリの Secrets に設定されていない場合、デプロイが失敗します。

**検証方法 (GitHub)**:
1.  GitHub リポジトリに移動します。
2.  `Settings` > `Secrets and variables` > `Actions` を開きます。
3.  以下の Secrets が追加され、正しい値が設定されていることを確認します。
    *   `CLOUDFLARE_API_TOKEN`
    *   `CLOUDFLARE_ACCOUNT_ID`
    *   `GITHUB_TOKEN` (これは通常、GitHub によって自動的に提供されますが、確認は可能です)

これらの手順に従うことで、Cloudflare Pages へのデプロイを成功させることができます。