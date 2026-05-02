# 白玉 天 Official Site

白銀の召喚士VTuber「白玉 天」の公式ブランドサイト初期テンプレートです。Next.js、TypeScript、Tailwind CSS、Framer Motionを使い、Netlifyデプロイを前提に構成しています。

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- ESLint
- Prettier
- Netlify Forms ready

## Setup

```bash
npm install
npm run dev
npm run build
```

開発サーバーは通常 `http://localhost:3000` で起動します。

## Pages

- `/` HOME
- `/profile` PROFILE
- `/contents` CONTENTS
- `/shop` SHOP
- `/news` NEWS
- `/contact` CONTACT

## Image Placement

立ち絵画像は以下に配置してください。

```txt
public/images/vtuber-main.png
```

OGP画像を使う場合は以下に配置してください。

```txt
public/images/ogp.png
```

## Data Files

- `lib/site.ts`: サイト名、SEO、ナビ、SNSリンク
- `lib/news.ts`: お知らせデータ
- `lib/contents.ts`: 活動内容データ
- `lib/products.ts`: 商品データ

## Netlify Deploy

1. GitHubなどのリポジトリへプッシュします。
2. Netlifyで「Add new site」から対象リポジトリを選択します。
3. Build commandに `npm run build` を設定します。
4. Publish directoryに `.next` を設定します。
5. `@netlify/plugin-nextjs` は `netlify.toml` で有効化済みです。
6. Deployを実行します。

`CONTACT` ページのフォームはNetlify Forms用の属性を付けています。Netlify上でビルドするとフォーム検出の対象になります。

## Notes

- 決済機能、CMS、外部API送信処理は未接続です。
- 商品、ニュース、活動内容は配列管理のため拡張しやすい構造です。
- `lib/site.ts` の `siteConfig.url` は本番URLが決まったら変更してください。
