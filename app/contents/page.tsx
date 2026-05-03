import type { Metadata } from "next";
import { ExternalLink, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contentItems } from "@/lib/contents";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "CONTENTS",
  description: "白玉 天の配信・動画・企画コンテンツ準備状況を掲載しています。",
  path: "/contents",
});

export default function ContentsPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Contents"
          title="Coming Soon"
          description="配信・動画・企画コンテンツを準備中です。公開までしばらくお待ちください。"
          align="center"
        />
        <GlassCard className="mx-auto mt-12 max-w-3xl text-center">
          <Sparkles className="mx-auto size-10 text-royalGold" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl text-mainWhite">配信・動画・企画コンテンツを準備中</h2>
          <p className="mt-4 leading-8 text-moonSilver/76">
            初回公開に向けて、活動内容と各コンテンツの導線を整備しています。最新のお知らせは公式SNSをご確認ください。
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {siteConfig.socialLinks.map((link) => (
              <GlowButton href={link.href} key={link.label} variant="ghost">
                {link.label}
                <ExternalLink className="size-4" />
              </GlowButton>
            ))}
          </div>
        </GlassCard>
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
