import type { Metadata } from "next";
import { Send } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "CONTACT",
  description: "白玉 天への企業案件、コラボレーション、ファンメッセージのお問い合わせページです。",
  path: "/contact",
});

const inquiryTypes = ["Business", "Collaboration", "Fan Message", "Other"];

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Contact"
          title="お問い合わせ"
          description="企業案件、コラボレーション、出演依頼、ファンメッセージはこちらから。Netlify Formsへ接続しやすい構造です。"
          align="center"
        />
        <GlassCard className="mx-auto mt-14 max-w-3xl p-6 sm:p-8">
          <form
            className="grid gap-6"
            data-netlify="true"
            method="POST"
            name="contact"
            netlify-honeypot="bot-field"
          >
            <input name="form-name" type="hidden" value="contact" />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <label className="grid gap-2">
              <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Name</span>
              <input
                className="rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite placeholder:text-moonSilver/35 focus:border-royalGold"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Email</span>
              <input
                className="rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite placeholder:text-moonSilver/35 focus:border-royalGold"
                name="email"
                placeholder="mail@example.com"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">Type</span>
              <select
                className="rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite focus:border-royalGold"
                name="type"
                required
              >
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold tracking-[0.18em] text-royalGold">
                Message
              </span>
              <textarea
                className="min-h-44 rounded-md border border-royalGold/25 bg-baseDark/70 px-4 py-3 text-mainWhite placeholder:text-moonSilver/35 focus:border-royalGold"
                name="message"
                placeholder="Please write your inquiry."
                required
              />
            </label>
            <div>
              <GlowButton type="submit">
                <Send className="size-4" />
                SEND
              </GlowButton>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
