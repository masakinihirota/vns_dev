This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

ルール

自分が書いたコードはすべてsrcフォルダに入れる。
スタイルはTailwindCSS、共通の設定はsrc/stylesに入れる

開発は
メインブランチ＝公開用と
作業ブランチ＝開発用
の２つを軸に開発していく

コンポーネント開発をする

一つのフォルダの中に一つのコンポーネント単位を置く
コンポーネントは複数のコンポーネントで成り立っておい
一つはデータコンポーネント
一つは表示コンポーネント
をつかう
テストファイルと
Storyファイルも一緒に
コンポーネントフォルダのrootに置く



コロケーション | makotot.dev
https://www.makotot.dev/posts/colocation-translation-ja

コロケーションとは、
関連するコードを近くに配置することで、
コードの理解性を向上させる設計パターンの一つです。
コロケーションパターンともいいます。


インタラクションテスト
ストーリーとテストを一元管理できる
ストーリーファイルにテストを記述する事になるため、
ストーリーとテストを一元管理できます。

テストを実行する方法は主に2つで、
通常はブラウザ上でStorybookを
表示して実行します。

テストランナーをセットアップすることで、
CLIでの実行が可能になります。







サーバーコンポーネントでフェッチして
	Server Action＝tRPC

クラアンとコンポーネントは
おもにルートとデザイン

クラアンとコンポーネントで
サーバーコンポーネントがフェッチしてきたデータを受け取って
ハイドレーションをするというイメージ。

クラアンとコンポーネントはリーフに

インタラクティブなコンポーネントは
対話型ロジックをクライアント コンポーネント (例<SearchBar />: ) に移動し、
レイアウトをサーバー コンポーネントとして保持します。これは、レイアウトのすべてのコンポーネント Javascript をクライアントに送信する必要がないことを意味します。


