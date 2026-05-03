import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "プライバシーポリシー",
  description: "白玉 天 Official Siteのプライバシーポリシーページです。",
  path: "/privacy",
});

const sections = [
  {
    title: "取得する情報",
    body: "当サイトの問い合わせフォームでは、名前、メールアドレス、問い合わせ種別、本文を取得します。",
  },
  {
    title: "利用目的",
    body: "取得した情報は、問い合わせ対応、業務管理、返信のために利用します。これらの目的以外で利用することはありません。",
  },
  {
    title: "外部サービスの利用",
    body: "問い合わせ内容の保存や送信のため、Supabase、Resendなどの外部サービスを利用する可能性があります。",
  },
  {
    title: "第三者提供",
    body: "法令に基づく場合を除き、取得した個人情報を本人の同意なく第三者へ提供しません。",
  },
  {
    title: "問い合わせ窓口",
    body: `個人情報の取り扱いに関するお問い合わせは、当サイトのCONTACTページよりご連絡ください。サイト名: ${siteConfig.siteName}`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Privacy"
          title="プライバシーポリシー"
          description="当サイトで取得する情報と利用目的について定めます。"
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
