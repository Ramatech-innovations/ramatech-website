"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CommandFallback } from "./command-fallback";
import { HeroFallback } from "./hero-fallback";
import { useParallax } from "./orchestration/use-parallax";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { OrchestrationQuality, SceneTone } from "./orchestration/nodes";

const OrchestrationR3F = dynamic(
  () =>
    import("./orchestration/orchestration-r3f").then((m) => m.OrchestrationR3F),
  { ssr: false, loading: () => null }
);

export const HERO_VIZ_FRAME =
  "hero-viz-frame hero-viz-feather h-full w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-brand-primary/[0.06] shadow-[0_20px_60px_-24px_rgba(10,76,149,0.18)]";

/** Hero viz — fills right grid column; medium size on desktop, no overlap into copy */
export const HERO_VIZ_SHELL =
  "pointer-events-none relative z-0 mx-auto mt-10 w-full max-w-xl sm:max-w-2xl lg:mt-0 lg:mx-0 lg:max-w-none lg:w-full";

export const HERO_VIZ_ASPECT =
  "relative aspect-square w-full min-h-[min(72vw,320px)] max-h-[min(48vh,400px)] sm:min-h-[340px] sm:max-h-[min(50vh,440px)] lg:min-h-[380px] lg:max-h-[min(58vh,520px)] xl:min-h-[420px] xl:max-h-[min(62vh,560px)]";

type Props = {
  quality: OrchestrationQuality;
  /** Use hero layout positioning vs command center block */
  variant?: "hero" | "command";
};

export function OrchestrationCanvas({ quality, variant = "command" }: Props) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const enableParallax = quality === "full" && isLg;
  const { groupRef, applyParallax } = useParallax(enableParallax, containerRef);
  const sceneTone: SceneTone = variant === "hero" ? "heroOnLight" : "dark";

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setWebgl(!!(c.getContext("webgl") || c.getContext("webgl2")));
    } catch {
      setWebgl(false);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "120px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Fallback = variant === "hero" ? HeroFallback : CommandFallback;

  if (variant === "hero") {
    const shell = (
      <div ref={containerRef} className={HERO_VIZ_SHELL} aria-hidden>
        <div className={`${HERO_VIZ_ASPECT} relative ${HERO_VIZ_FRAME}`}>
          {reduce || !webgl ? (
            <Fallback tone="heroOnLight" />
          ) : (
            <div
              className="absolute inset-0 size-full transition-opacity duration-700"
              style={{ opacity: visible ? 1 : 0.15 }}
            >
              {visible && (
                <OrchestrationR3F
                  quality="full"
                  sceneTone={sceneTone}
                  frameloop={visible ? "always" : "never"}
                  parallaxGroupRef={groupRef}
                  applyParallax={applyParallax}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
    return shell;
  }

  if (reduce || !webgl) {
    return (
      <div
        ref={containerRef}
        className="relative h-[min(360px,50vw)] w-full max-h-[420px]"
        aria-hidden
      >
        <div className="h-full w-full">
          <Fallback tone="dark" />
        </div>
      </div>
    );
  }

  const sceneOpacity = visible ? 1 : 0.15;
  const frameloop = visible ? "always" : "never";

  return (
    <div
      ref={containerRef}
      className="relative h-[min(400px,55vw)] w-full max-h-[440px] overflow-hidden rounded-2xl"
      aria-hidden
    >
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: sceneOpacity,
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 75%)",
        }}
      >
        {visible && (
          <OrchestrationR3F quality="lite" sceneTone="dark" frameloop={frameloop} />
        )}
      </div>
    </div>
  );
}
