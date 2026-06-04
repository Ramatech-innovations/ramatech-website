"use client";

import dynamic from "next/dynamic";
import {
  BookConsultationLink,
  ExploreSolutionsLink,
} from "@/components/analytics/tracked-link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroFallback } from "@/components/three/hero-fallback";
import {
  HERO_VIZ_ASPECT,
  HERO_VIZ_FRAME,
  HERO_VIZ_SHELL,
} from "@/components/three/orchestration-canvas";
import { heroItem, heroStagger } from "@/lib/motion";

const OrchestrationCanvas = dynamic(
  () =>
    import("@/components/three/orchestration-canvas").then((m) => m.OrchestrationCanvas),
  { ssr: false, loading: () => <HeroCanvasPlaceholder /> }
);

function HeroCanvasPlaceholder() {
  return (
    <div className={HERO_VIZ_SHELL} aria-hidden>
      <div className={`${HERO_VIZ_ASPECT} relative ${HERO_VIZ_FRAME}`}>
        <HeroFallback tone="heroOnLight" />
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-light on-light">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_72%_38%,rgba(10,76,149,0.09),transparent_55%)]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
        <div className="flex flex-col gap-10 pb-12 pt-16 sm:pt-20 lg:grid lg:min-h-[min(78vh,720px)] lg:grid-cols-2 lg:items-center lg:gap-x-10 lg:gap-y-8 lg:pb-16 lg:pt-20 xl:gap-x-14 xl:gap-y-10 2xl:gap-x-16">
          <motion.div
            className="relative z-10 min-w-0 lg:max-w-[34rem] xl:max-w-[36rem]"
            variants={reduce ? undefined : heroStagger}
            initial={reduce ? false : "hidden"}
            animate="visible"
          >
            <motion.div
              variants={reduce ? undefined : heroItem}
              className="mb-6 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <BrandLogo variant="heroBadge" theme="light" alt="" />
              <span className="glass-pill-light">AI-Powered Technology Company</span>
            </motion.div>
            <motion.h1
              variants={reduce ? undefined : heroItem}
              className="type-display-lg text-brand-ink xl:text-[3.5rem]"
            >
              AI-Powered Technology for{" "}
              <span className="text-gradient">Product & Platform</span> Teams
            </motion.h1>
            <motion.p
              variants={reduce ? undefined : heroItem}
              className="mt-6 max-w-xl text-body-sm leading-[1.7] text-slate-600 md:text-body-lg lg:max-w-lg"
            >
              We engineer intelligent systems, cloud platforms, and automation that scale
              with your business—not slide decks or staff augmentation.
            </motion.p>
            <motion.div
              variants={reduce ? undefined : heroItem}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="glow-cta">
                <BookConsultationLink>Book Consultation</BookConsultationLink>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <ExploreSolutionsLink>Explore Solutions</ExploreSolutionsLink>
              </Button>
            </motion.div>
            <motion.div
              variants={reduce ? undefined : heroItem}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              {[
                "SaaS Startups",
                "Restaurants",
                "Law Firms",
                "Clinics",
                "SMEs",
                "Manufacturers",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-sm text-slate-600"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative z-0 min-h-0 min-w-0 w-full lg:flex lg:items-center lg:justify-center xl:justify-end">
            <OrchestrationCanvas quality="full" variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
