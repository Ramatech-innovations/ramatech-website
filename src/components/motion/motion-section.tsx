"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function MotionSection({
  children,
  className,
  delay = 0,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger ? staggerContainer : fadeUp}
      transition={stagger ? undefined : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={cn(className)}>{children}</div>;

  return (
    <motion.div className={cn(className)} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
