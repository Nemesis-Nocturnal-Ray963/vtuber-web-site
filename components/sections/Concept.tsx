import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Concept() {
  return (
    <section className="py-24">
      <div className="container-lux grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionTitle
          eyebrow="Concept"
          title="白銀の神殿から、物語を召喚する。"
          description="静謐な祈り、金色の魔術紋、澄んだ声。白玉 天は、神聖さと親しみやすさを併せ持つ召喚士VTuberとして、配信とクリエイティブを横断します。"
        />
        <GlassCard>
          <p className="text-lg leading-9 text-moonSilver/82">
            かつて星の記憶を記録する神殿に仕えていた白銀の召喚士。視聴者の想いを小さな光として受け取り、歌、会話、企画へ姿を変えて届けます。高級感のあるビジュアルと透明感のあるトーンで、個人ファンにも企業パートナーにも信頼されるブランドを目指します。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Sacred", "Silver", "Summon"].map((word) => (
              <div
                className="rounded-md border border-mainWhite/10 bg-baseDark/35 px-4 py-5 text-center"
                key={word}
              >
                <p className="font-serif text-xl text-royalGold">{word}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
