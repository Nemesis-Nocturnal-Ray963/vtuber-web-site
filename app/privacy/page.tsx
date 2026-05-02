import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "プライバシーポリシー",
  description: "白玉 天 Official Siteのプライバシーポリシーページです。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Privacy"
          title="プライバシーポリシー"
          description="問い合わせフォーム運用前に、個人情報の取り扱い方針を確定してください。"
          align="center"
        />
        <GlassCard className="mx-auto mt-12 max-w-3xl">
          <p className="leading-8 text-moonSilver/76">
            本ページは仮テキストです。お問い合わせで取得する氏名、メールアドレス、問い合わせ内容の利用目的、保管期間、第三者提供の有無、問い合わせ窓口などを正式公開時に記載してください。
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
