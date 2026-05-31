"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MotionSection } from "@/components/motion/motion-section";
import {
  CapabilityVisual,
  hrefToVisualVariant,
} from "@/components/marketing/capability-visual";
import { cn } from "@/lib/utils";

export function FeatureSplit({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  reverse = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const content = (
    <div className={cn("flex flex-col justify-center", reverse ? "lg:order-2" : "lg:order-1")}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">{eyebrow}</p>
      )}
      <h3
        className={cn(
          "font-heading text-xl font-semibold leading-tight tracking-tight md:text-2xl",
          eyebrow && "mt-2"
        )}
      >
        {title}
      </h3>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
      {href && linkLabel && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );

  const visual = (
    <motion.div
      className={cn("tilt-card", reverse ? "lg:order-1" : "lg:order-2")}
      initial={reduce ? false : { opacity: 0, x: reverse ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {href ? (
        <CapabilityVisual variant={hrefToVisualVariant(href)} />
      ) : (
        <CapabilityVisual variant="cloud-infrastructure" />
      )}
    </motion.div>
  );

  return (
    <MotionSection className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        {content}
        {visual}
      </div>
    </MotionSection>
  );
}
