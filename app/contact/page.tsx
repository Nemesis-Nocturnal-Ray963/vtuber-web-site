import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "CONTACT",
  description: "白玉 天への企業案件、コラボレーション、ファンメッセージのお問い合わせページです。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Contact"
          title="お問い合わせ"
          description="企業案件、コラボレーション、出演依頼、ファンメッセージを受け付けています。通常3〜5営業日以内に確認します。内容によって返信できない場合があります。"
          align="center"
        />
        <GlassCard className="mx-auto mt-14 max-w-3xl p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
      </div>
    </section>
  );
}
