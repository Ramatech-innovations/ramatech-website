"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/brand/brand-logo";
import { founderCredibility } from "@/content/enterprise";

export function CredibilitySection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative section-dark py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="type-eyebrow">{founderCredibility.eyebrow}</p>
            <h2 className="type-h2 mt-5">{founderCredibility.title}</h2>
            <p className="type-body-muted mt-6 max-w-lg">{founderCredibility.description}</p>
            <ul className="mt-10 space-y-5">
              {founderCredibility.pillars.map((pillar, i) => (
                <li
                  key={pillar}
                  className="flex gap-4 border-b border-white/5 pb-5 last:border-0"
                >
                  <span className="type-index text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <span className="type-body">{pillar}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" aria-hidden />
            <BrandLogo
              variant="credibility"
              className="relative drop-shadow-[0_0_40px_rgba(17,211,232,0.35)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
