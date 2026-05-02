import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contentItems } from "@/lib/contents";

export function ContentsPreview() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Contents"
            title="活動の入口"
            description="配信、動画、音楽、企画、コラボへ自然に導くコンテンツ導線。"
          />
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-royalGold transition hover:text-mainWhite"
            href="/contents"
          >
            VIEW ALL <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {contentItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard className="min-h-56" key={item.title}>
                <Icon className="size-7 text-royalGold" aria-hidden="true" />
                <p className="mt-6 text-xs font-semibold tracking-[0.26em] text-moonSilver/55">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-mainWhite">{item.title}</h3>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
