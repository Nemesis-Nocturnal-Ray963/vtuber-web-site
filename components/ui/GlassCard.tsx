"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type GlassCardProps = HTMLMotionProps<"div">;

export function GlassCard({ className = "", children, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg border border-royalGold/22 bg-[linear-gradient(145deg,rgba(248,247,242,0.085),rgba(248,247,242,0.035))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(248,247,242,0.08)] backdrop-blur-2xl transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-royalGold/55 before:to-transparent hover:border-royalGold/55 hover:bg-mainWhite/[0.075] hover:shadow-[0_20px_70px_rgba(0,0,0,0.28),0_0_34px_rgba(201,168,106,0.12)] ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
