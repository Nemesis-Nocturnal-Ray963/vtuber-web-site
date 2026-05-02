"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, ShoppingBag, Sparkles, Tv } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-royalGold/10">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-20 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-royalGold/10 opacity-45 shadow-[0_0_140px_rgba(201,168,106,0.18)]"
        animate={{ rotate: 360, opacity: [0.32, 0.48, 0.32] }}
        transition={{
          rotate: { duration: 58, repeat: Infinity, ease: "linear" },
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="container-lux grid min-h-[calc(100svh-5rem)] items-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
        <motion.div
          className="relative z-20 max-w-2xl pt-4 text-center lg:pt-0 lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-royalGold/25 bg-mainWhite/[0.045] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-royalGold shadow-glow backdrop-blur-md lg:mx-0">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Sacred Silver Summoner
          </div>

          <h1 className="mt-7 font-serif text-[clamp(3rem,10vw,5.8rem)] font-semibold leading-[0.92] text-mainWhite">
            {siteConfig.characterName}
            <span className="mt-5 block text-base font-medium uppercase tracking-[0.38em] text-moonSilver/86 sm:text-xl">
              Official Site
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-moonSilver/82 sm:text-lg sm:leading-9 lg:mx-0">
            白銀の祈りで物語を召喚するVTuber。配信、音楽、コラボレーション、グッズ展開へ広がる上品なブランド体験を届けます。
          </p>

          <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
            <GlowButton className="w-full sm:w-auto" href="/contents">
              <Tv className="size-4" />
              CONTENTS
            </GlowButton>
            <GlowButton className="w-full sm:w-auto" href="/shop" variant="secondary">
              <ShoppingBag className="size-4" />
              SHOP
            </GlowButton>
            <GlowButton className="w-full sm:w-auto" href="/contact" variant="ghost">
              <BriefcaseBusiness className="size-4" />
              CONTACT
              <ArrowRight className="size-4" />
            </GlowButton>
          </div>

          <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-2 border-y border-royalGold/15 py-4 text-center lg:mx-0">
            {["LIVE", "MUSIC", "BUSINESS"].map((item) => (
              <p
                className="text-[0.64rem] font-semibold tracking-[0.24em] text-moonSilver/62 sm:text-xs"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 min-h-[500px] sm:min-h-[650px] lg:min-h-[calc(100svh-7rem)]">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-royalGold/20 bg-[radial-gradient(circle,rgba(248,247,242,0.08),rgba(201,168,106,0.08)_45%,transparent_68%)] shadow-[0_0_120px_rgba(201,168,106,0.16)] sm:h-[34rem] sm:w-[34rem]"
            animate={{ opacity: [0.62, 0.85, 0.62], scale: [0.98, 1.015, 0.98] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="summon-ring absolute left-1/2 top-[48%] h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 sm:h-[29rem] sm:w-[29rem]"
            animate={{ rotate: -360 }}
            transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="relative mx-auto flex h-[520px] max-w-[520px] items-end justify-center sm:h-[680px] lg:h-[calc(100svh-8rem)] lg:max-w-[650px]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.9, ease: "easeOut" },
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="absolute bottom-8 h-24 w-[78%] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,106,0.28),rgba(216,222,233,0.1)_42%,transparent_70%)] blur-xl sm:bottom-12" />
            <Image
              alt="白玉 天 立ち絵"
              className="relative z-10 object-contain object-bottom drop-shadow-[0_28px_70px_rgba(0,0,0,0.56)]"
              fill
              priority
              sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 50vw, 96vw"
              src="/images/vtuber-main.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
