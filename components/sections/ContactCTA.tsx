import { BriefcaseBusiness, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

export function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <GlassCard className="overflow-hidden p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-royalGold">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-3xl text-mainWhite sm:text-5xl">
                企業案件・コラボレーションのご相談
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-moonSilver/78">
                企業案件、コラボレーション、出演依頼、その他のお問い合わせを受け付けています。内容を確認のうえ、必要に応じてご連絡します。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <GlowButton href="/contact">
                <Send className="size-4" />
                CONTACT
              </GlowButton>
              <GlowButton href="/profile" variant="ghost">
                <BriefcaseBusiness className="size-4" />
                PROFILE
              </GlowButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
