import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { newsItems } from "@/lib/news";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "NEWS",
  description: "白玉 天 Official Siteのお知らせ一覧です。",
  path: "/news",
});

export default function NewsPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="News"
          title="お知らせ"
          description="活動、メディア、グッズ、コラボレーションの最新情報。"
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-5">
          {newsItems.map((item) => (
            <GlassCard className="p-6 sm:p-8" key={item.title}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-[0.24em]">
                <span className="rounded-full border border-royalGold/35 px-3 py-1 text-royalGold">
                  {item.category}
                </span>
                <time className="text-moonSilver/55">{item.date}</time>
              </div>
              <h2 className="mt-5 font-serif text-2xl text-mainWhite sm:text-3xl">{item.title}</h2>
              <p className="mt-4 leading-8 text-moonSilver/74">{item.excerpt}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
