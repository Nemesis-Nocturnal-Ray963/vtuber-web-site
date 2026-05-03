import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-royalGold/15 bg-baseDark/80 py-12">
      <div className="container-lux grid gap-10 md:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              alt={siteConfig.name}
              className="h-11 w-auto shrink-0 object-contain"
              height={51}
              src={siteConfig.images.logo}
              width={150}
            />
            <p className="font-serif text-lg font-semibold tracking-[0.16em] text-mainWhite sm:text-xl">
              {siteConfig.name}
            </p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-moonSilver/72">
            透明な祈りと白銀の召喚術で、配信、音楽、グッズ、企業案件へ広がる公式ブランドサイト。
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-royalGold">NAVIGATION</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link
                className="text-sm text-moonSilver/75 transition hover:text-mainWhite"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-royalGold">SOCIAL</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((link) => (
              <a
                className="rounded-full border border-royalGold/25 px-4 py-2 text-sm text-moonSilver/78 transition hover:border-royalGold/70 hover:text-mainWhite"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-moonSilver/55">
            <Link href="/terms">利用規約</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
      <div className="container-lux mt-10 border-t border-mainWhite/10 pt-6 text-xs text-moonSilver/50">
        © 2026 {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
