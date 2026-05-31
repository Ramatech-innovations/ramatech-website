"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroFallback } from "@/components/three/hero-fallback";
import { heroItem, heroStagger } from "@/lib/motion";

const OrchestrationCanvas = dynamic(
  () =>
    import("@/components/three/orchestration-canvas").then((m) => m.OrchestrationCanvas),
  { ssr: false, loading: () => <HeroCanvasPlaceholder /> }
);

function HeroCanvasPlaceholder() {
  return (
    <div
      className="relative z-0 mx-auto mt-6 h-[min(42vh,380px)] w-full max-w-lg overflow-hidden lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0 lg:h-auto lg:max-w-none"
      aria-hidden
    >
      <div className="absolute inset-2">
        <HeroFallback />
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-dark lg:min-h-[min(88vh,820px)]">
      <div className="noise-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgba(17,211,232,0.08),transparent)] lg:block hidden"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-20 lg:grid lg:min-h-[min(88vh,820px)] lg:grid-cols-[minmax(0,1fr)_1.05fr] lg:items-center lg:gap-8 lg:py-20">
        <motion.div
          className="max-w-xl"
          variants={reduce ? undefined : heroStagger}
          initial={reduce ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={reduce ? undefined : heroItem} className="mb-6 flex flex-wrap items-center gap-3">
            <BrandLogo
              variant="heroBadge"
              alt=""
              className="drop-shadow-[0_0_18px_rgba(17,211,232,0.45)]"
            />
            <span className="glass-pill">AI-Powered Technology Company</span>
          </motion.div>
          <motion.h1
            variants={reduce ? undefined : heroItem}
            className="type-display-lg"
          >
            AI-Powered Technology for{" "}
            <span className="text-gradient">Product & Platform</span> Teams
          </motion.h1>
          <motion.p
            variants={reduce ? undefined : heroItem}
            className="type-body-muted mt-6 max-w-lg"
          >
            We engineer intelligent systems, cloud platforms, and automation that scale
            with your business—not slide decks or staff augmentation.
          </motion.p>
          <motion.div
            variants={reduce ? undefined : heroItem}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="glow-cta">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>

        <OrchestrationCanvas quality="full" variant="hero" />

        <div className="hidden lg:block" aria-hidden />
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1a] to-transparent lg:h-32"
        aria-hidden
      />
    </section>
  );
}
