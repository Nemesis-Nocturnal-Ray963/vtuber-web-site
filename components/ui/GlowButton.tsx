"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type GlowButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<HTMLMotionProps<"button">, "children" | "className">;

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.18em] shadow-[inset_0_1px_0_rgba(248,247,242,0.18)] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

const variants = {
  primary:
    "border-royalGold/85 bg-[linear-gradient(135deg,#F8F7F2_0%,#C9A86A_45%,#9F7D3F_100%)] text-baseDark shadow-glow hover:border-mainWhite/80 hover:brightness-110 hover:shadow-[0_0_44px_rgba(201,168,106,0.3)]",
  secondary:
    "border-royalGold/50 bg-mainWhite/[0.055] text-mainWhite backdrop-blur-xl hover:border-mainWhite/70 hover:bg-mainWhite/[0.12] hover:text-royalGold hover:shadow-[0_0_30px_rgba(216,222,233,0.12)]",
  ghost:
    "border-mainWhite/16 bg-baseDark/20 text-moonSilver backdrop-blur-xl hover:border-royalGold/55 hover:bg-royalGold/10 hover:text-mainWhite",
};

export function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...buttonProps
}: GlowButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link className={classes} href={href}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      type={buttonProps.type ?? "button"}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
