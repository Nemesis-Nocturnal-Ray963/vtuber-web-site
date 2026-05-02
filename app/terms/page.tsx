import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "利用規約",
  description: "白玉 天 Official Siteの利用規約ページです。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Terms"
          title="利用規約"
          description="正式公開時に法務確認済みの内容へ差し替えてください。"
          align="center"
        />
        <GlassCard className="mx-auto mt-12 max-w-3xl">
          <p className="leading-8 text-moonSilver/76">
            本ページは仮テキストです。当サイトの閲覧、画像・文章・音声・動画などのコンテンツ利用、二次利用、禁止事項、免責事項については、正式公開前に運営方針に合わせて整備してください。
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
