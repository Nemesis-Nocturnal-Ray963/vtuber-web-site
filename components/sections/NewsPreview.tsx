import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { newsItems } from "@/lib/news";

export function NewsPreview() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="News" title="最新情報" description="活動、商品、コラボ情報を掲載します。" />
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-royalGold transition hover:text-mainWhite"
            href="/news"
          >
            NEWS LIST <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <GlassCard key={item.title}>
              <div className="flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.22em]">
                <span className="text-royalGold">{item.category}</span>
                <time className="text-moonSilver/55">{item.date}</time>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-mainWhite">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-moonSilver/72">{item.excerpt}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
