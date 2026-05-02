# VTuber Official Site

VTuber公式サイトのNext.jsプロジェクトです。白・銀・金を基調にしたダークトーンのブランドサイトとして、HOME、プロフィール、コンテンツ、ショップ、ニュース、問い合わせ、規約系ページを実装しています。

## 現状

2026-05-03時点の状態です。

- Next.js App Router構成でページと共通レイアウトを作成済み
- Tailwind CSSで全体のビジュアル、レスポンシブ、装飾アニメーションを実装済み
- Framer Motionでヒーローエリアなどの動きを実装済み
- lucide-reactのアイコンをナビゲーション、ボタン、カードで使用
- `public/images/vtuber-main.png` と `public/images/ogp.png` を配置済み
- 問い合わせフォームはフロントエンド、API Route、Supabase保存、Resendメール送信まで実装済み
- Netlify向けの `netlify.toml` と `@netlify/plugin-nextjs` を設定済み

ただし、現時点では本番ビルドは通っていません。主な理由は `@/lib/site`、`@/lib/contents`、`@/lib/news`、`@/lib/products` を参照している一方で、ルート直下の `lib/` ディレクトリが存在しないためです。また、複数のTSXファイルと既存READMEに文字化けがあり、一部は文字列リテラルの閉じ忘れに見える箇所もあります。

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Supabase
- Resend
- ESLint
- Prettier
- Netlify

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
```

PowerShell環境で `npm` が実行ポリシーによりブロックされる場合は、次のように `npm.cmd` を使うと実行できます。

```bash
npm.cmd run build
```

## Pages

- `/` HOME
- `/profile` PROFILE
- `/contents` CONTENTS
- `/shop` SHOP
- `/news` NEWS
- `/contact` CONTACT
- `/privacy` Privacy
- `/terms` Terms
- `/api/contact` 問い合わせ送信用API Route

## Main Files

- `app/layout.tsx`: 共通レイアウト、メタデータ、ヘッダー、フッター
- `app/page.tsx`: HOMEのセクション構成
- `components/layout/Header.tsx`: PC/モバイル対応のグローバルナビ
- `components/layout/Footer.tsx`: フッター
- `components/sections/Hero.tsx`: メインビジュアルとCTA
- `components/sections/Concept.tsx`: コンセプトセクション
- `components/sections/ContentsPreview.tsx`: HOME用コンテンツプレビュー
- `components/sections/ShopPreview.tsx`: HOME用ショッププレビュー
- `components/sections/NewsPreview.tsx`: HOME用ニュースプレビュー
- `components/sections/ContactCTA.tsx`: HOME用問い合わせ導線
- `components/contact/ContactForm.tsx`: 問い合わせフォーム
- `components/ui/GlassCard.tsx`: 共通カードUI
- `components/ui/GlowButton.tsx`: 共通ボタンUI
- `components/ui/SectionTitle.tsx`: 共通セクション見出し
- `app/api/contact/route.ts`: 問い合わせ保存とメール送信
- `supabase/contacts.sql`: 問い合わせ保存用テーブルとRLSポリシー

## Assets

立ち絵画像:

```txt
public/images/vtuber-main.png
```

OGP画像:

```txt
public/images/ogp.png
```

## Contact API

`POST /api/contact` は問い合わせフォームの送信を処理します。

実装済みの処理:

- 必須項目チェック
- メールアドレス形式チェック
- 文字数制限
- honeypotによる簡易スパム対策
- IPアドレスとメールアドレス単位の簡易レート制限
- Supabase `contacts` テーブルへの保存
- Resendによる管理者通知メール送信
- Resendによる自動返信メール送信

必要な環境変数:

```env
RESEND_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
CONTACT_ADMIN_EMAIL=
CONTACT_FROM_EMAIL="Contact Form <onboarding@resend.dev>"
```

## Supabase

問い合わせ保存用のSQLは `supabase/contacts.sql` にあります。

作成されるテーブル:

- `public.contacts`
- `id`
- `name`
- `email`
- `type`
- `message`
- `created_at`

RLSは有効化されており、匿名ユーザーからのinsertを許可するポリシーが設定されています。

## Netlify Deploy

`netlify.toml` では次の設定をしています。

- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`

## 確認したビルド状況

次のコマンドで確認しました。

```bash
npm.cmd run build
```

結果は失敗です。確認できた主なエラーは以下です。

```txt
Module not found: Can't resolve '@/lib/site'
Module not found: Can't resolve '@/lib/contents'
```

## 要対応

- `lib/site.ts`、`lib/contents.ts`、`lib/news.ts`、`lib/products.ts` を復元または新規作成する
- 文字化けしている日本語テキストを修正する
- 文字化けにより壊れている可能性のあるTSXの文字列リテラルを修正する
- `npm.cmd run build` が通る状態まで確認する
- 必要に応じて `siteConfig.url`、OGP、SNSリンク、問い合わせ先メールアドレスを本番値に差し替える
