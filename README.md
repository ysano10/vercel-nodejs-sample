# Vercel Node.js Sample

Vercel で動く最小構成の Node.js サンプルです。

## ファイル構成

- `api/hello.js`
  Node.js の API エンドポイントです。
- `public/index.html`
  ブラウザから API を呼び出して結果を表示するサンプル画面です。
- `package.json`
  `vercel dev` を使うための最小設定です。

## 動かし方

1. Vercel CLI をインストール
2. このディレクトリで `vercel dev` を実行
3. ブラウザでローカル URL を開く
4. `API を呼び出す` ボタンを押して `/api/hello` の応答を確認

## API の挙動

`GET /api/hello` を呼ぶと、以下のような JSON を返します。

```json
{
  "message": "Hello from Vercel Node.js!",
  "method": "GET",
  "path": "/api/hello",
  "timestamp": "2026-05-14T00:00:00.000Z"
}
```
