"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps, Variants } from "framer-motion";

type GlassCardProps = HTMLMotionProps<"div">;

const glassCardVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} satisfies Variants;

export function GlassCard({
  className = "",
  children,
  style,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg border border-royalGold/22 bg-[linear-gradient(145deg,rgba(248,247,242,0.085),rgba(248,247,242,0.035))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(248,247,242,0.08)] backdrop-blur-2xl transition-[border-color,background-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-royalGold/55 before:to-transparent hover:border-royalGold/55 hover:bg-mainWhite/[0.075] hover:shadow-[0_20px_70px_rgba(0,0,0,0.28),0_0_34px_rgba(201,168,106,0.12)] motion-reduce:transform-none ${className}`}
      variants={glassCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      style={{ willChange: "opacity, transform", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
