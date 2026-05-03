import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "利用規約",
  description: "白玉 天 Official Siteの利用規約ページです。",
  path: "/terms",
});

const sections = [
  {
    title: "著作権",
    body: `当サイトに掲載されているキャラクター画像、ロゴ、文章、デザイン、その他コンテンツの著作権および関連する権利は、${siteConfig.characterName}または正当な権利者に帰属します。`,
  },
  {
    title: "無断利用の禁止",
    body: "キャラクター画像、ロゴ、文章、その他コンテンツを、権利者の許可なく転載、複製、加工、配布、販売、AI学習、商用利用することを禁止します。",
  },
  {
    title: "禁止事項",
    body: "当サイトの運営を妨げる行為、第三者または運営の権利・信用を侵害する行為、公序良俗に反する行為、法令に違反する行為を禁止します。",
  },
  {
    title: "免責事項",
    body: "当サイトの情報は正確性に配慮して掲載しますが、完全性や最新性を保証するものではありません。当サイトの利用により生じた損害について、運営は法令上認められる範囲で責任を負いません。",
  },
  {
    title: "規約の変更",
    body: "本規約は、必要に応じて予告なく変更する場合があります。変更後の内容は当サイトに掲載した時点で効力を生じます。",
  },
];

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Terms"
          title="利用規約"
          description="当サイトの利用条件、著作権、禁止事項、免責事項について定めます。"
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-5">
          {sections.map((section) => (
            <GlassCard className="p-6 sm:p-8" key={section.title}>
              <h2 className="font-serif text-2xl text-mainWhite">{section.title}</h2>
              <p className="mt-4 leading-8 text-moonSilver/76">{section.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
