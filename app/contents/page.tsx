import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contentItems } from "@/lib/contents";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "CONTENTS",
  description: "白玉 天の配信、動画、音楽、ゲーム、コラボ、イベント活動の一覧です。",
  path: "/contents",
});

export default function ContentsPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Contents"
          title="活動内容"
          description="ファンコミュニティと企業パートナーの双方へ届く、多面的なコンテンツ展開。"
          align="center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {contentItems.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard className="min-h-72" key={item.title}>
                <Icon className="size-8 text-royalGold" aria-hidden="true" />
                <p className="mt-8 text-xs font-semibold tracking-[0.26em] text-moonSilver/55">
                  {item.label}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-mainWhite">{item.title}</h2>
                <p className="mt-5 leading-8 text-moonSilver/74">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
