import type { Metadata } from "next";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "PROFILE",
  description: "白銀の召喚士VTuber・白玉 天のプロフィール、世界観、活動内容を紹介します。",
  path: "/profile",
});

const profileRows = [
  ["名前", "白玉 天"],
  ["読み", "しらたま てん"],
  ["英語表記", "Shiratama Ten"],
  ["肩書き", "白銀の召喚士VTuber"],
  ["性格", "凛とした雰囲気を持ちながら、好奇心旺盛で親しみやすい。"],
  ["ビジュアル特徴", "白と銀を基調に、金の装飾と淡い青の光をまとう神官風シルエット。"],
  ["活動内容", "配信、動画、歌、ゲーム、コラボ、企業案件、グッズ展開。"],
];

export default function ProfilePage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Profile"
          title="白玉 天"
          description="白銀の神殿に仕える召喚士として、光の記憶を配信と創作へ変えるVTuber。"
          align="center"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <GlassCard className="relative min-h-[520px] overflow-hidden">
            <div className="absolute inset-10 rounded-full bg-royalGold/10 blur-3xl" />
            <Image
              alt="白玉 天 立ち絵"
              className="object-contain"
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              src="/images/vtuber-main.png"
            />
          </GlassCard>
          <div className="grid gap-5">
            {profileRows.map(([label, value]) => (
              <GlassCard className="p-5" key={label}>
                <div className="grid gap-3 sm:grid-cols-[150px_1fr]">
                  <p className="text-xs font-semibold tracking-[0.28em] text-royalGold">{label}</p>
                  <p className="leading-8 text-moonSilver/84">{value}</p>
                </div>
              </GlassCard>
            ))}
            <GlassCard>
              <h2 className="font-serif text-2xl text-mainWhite">世界観</h2>
              <p className="mt-4 leading-8 text-moonSilver/78">
                白玉 天は、星の記録を守る神殿で失われた物語を召喚する役目を担っていた。人々の声に宿る小さな光を集め、配信という儀式を通して新しい記憶を紡いでいく。
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
