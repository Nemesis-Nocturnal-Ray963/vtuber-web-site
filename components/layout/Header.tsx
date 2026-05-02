"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-royalGold/15 bg-baseDark/70 backdrop-blur-2xl">
      <div className="container-lux flex h-20 items-center justify-between">
        <Link
          className="flex items-center gap-3 text-mainWhite transition hover:text-royalGold"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-royalGold/50 bg-mainWhite/5 shadow-glow">
            <Sparkles className="size-5 text-royalGold" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-[0.18em]">
            {siteConfig.characterName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Global navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={`text-xs font-semibold tracking-[0.22em] transition ${
                  active ? "text-royalGold" : "text-moonSilver/78 hover:text-mainWhite"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex size-11 items-center justify-center rounded-full border border-royalGold/30 bg-mainWhite/5 text-mainWhite lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-royalGold/15 bg-baseDark/95 px-5 py-5 lg:hidden"
          id="mobile-navigation"
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-md border border-mainWhite/8 px-4 py-3 text-sm font-semibold tracking-[0.2em] text-moonSilver transition hover:border-royalGold/40 hover:text-mainWhite"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
