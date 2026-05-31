"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EnterpriseOsViz } from "@/components/command-center/enterprise-os-viz";
import { LogoWatermark } from "@/components/brand/logo-watermark";
import { commandCenter } from "@/content/enterprise";

const HOME_CONTAINER =
  "container relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]";

export function CommandCenterSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-gradient relative overflow-hidden border-t border-white/10 py-16 md:py-20 lg:min-h-[min(520px,70vh)] lg:py-24">
      <LogoWatermark className="right-[-8%] top-1/2 -translate-y-1/2 opacity-[0.03]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className={HOME_CONTAINER}>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="type-eyebrow">{commandCenter.eyebrow}</p>
            <h2 className="type-h2 mt-5">{commandCenter.title}</h2>
            <p className="type-body-muted mt-6 max-w-lg">{commandCenter.description}</p>
            <ul className="mt-10 space-y-4 border-l border-brand-cyan/20 pl-6">
              {[
                "Connect AI workloads to governed data and APIs",
                "Unify cloud, Kubernetes, and application delivery",
                "Automate operations with measurable SLOs",
              ].map((line) => (
                <li key={line} className="type-body">
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-8 rounded-3xl bg-brand-cyan/5 blur-3xl" aria-hidden />
            <EnterpriseOsViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
