"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/motion";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
};

export function Card({ className, children, tone = "light" }: CardProps) {
  const reduce = useReducedMotion();

  const classes = cn(
    "rounded-xl p-6 transition-shadow duration-300 relative overflow-hidden group",
    tone === "light"
      ? "card-on-light"
      : "glass-panel hover:border-brand-cyan/25 hover:shadow-lg hover:shadow-brand-cyan/10",
    className
  );

  const inner = (
    <>
      {tone === "dark" && (
        <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-brand-cyan/8 via-transparent to-brand-primary/5" />
      )}
      <div className="relative">{children}</div>
    </>
  );

  if (reduce) {
    return <div className={classes}>{inner}</div>;
  }

  return (
    <motion.div
      className={classes}
      initial="rest"
      whileHover="hover"
      variants={cardHover}
    >
      {inner}
    </motion.div>
  );
}
