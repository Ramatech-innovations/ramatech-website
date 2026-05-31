"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CommandFallback } from "./command-fallback";
import { HeroFallback } from "./hero-fallback";
import { useParallax } from "./orchestration/use-parallax";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { OrchestrationQuality } from "./orchestration/nodes";

const OrchestrationR3F = dynamic(
  () =>
    import("./orchestration/orchestration-r3f").then((m) => m.OrchestrationR3F),
  { ssr: false, loading: () => null }
);

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

  if (reduce || !webgl) {
    return (
      <div
        ref={containerRef}
        className={
          variant === "hero"
            ? "pointer-events-none relative z-0 mx-auto mt-8 h-64 w-full max-w-md lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center lg:justify-end"
            : "relative h-[min(360px,50vw)] w-full max-h-[420px]"
        }
        aria-hidden
      >
        <div
          className={
            variant === "hero"
              ? "h-full w-full px-4 lg:mr-[-5%] lg:h-[75%] lg:w-[65%] lg:max-w-2xl"
              : "h-full w-full"
          }
        >
          <Fallback />
        </div>
      </div>
    );
  }

  const sceneOpacity = visible ? 1 : 0.15;
  const frameloop = visible ? "always" : "never";

  if (variant === "hero") {
    return (
      <div
        ref={containerRef}
        className="relative z-0 mx-auto mt-6 h-[min(42vh,380px)] w-full max-w-lg overflow-hidden lg:pointer-events-auto lg:absolute lg:inset-0 lg:mt-0 lg:h-auto lg:max-w-none pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0 transition-opacity duration-700 lg:hidden"
          style={{
            opacity: sceneOpacity,
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 55%, black 15%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 55%, black 15%, transparent 70%)",
          }}
        >
          <div className="absolute inset-2">
            {visible && (
              <OrchestrationR3F
                quality="full"
                frameloop={frameloop}
                parallaxGroupRef={groupRef}
                applyParallax={applyParallax}
              />
            )}
          </div>
        </div>
        <div
          className="absolute inset-0 hidden transition-opacity duration-700 lg:block"
          style={{
            opacity: sceneOpacity,
            maskImage:
              "radial-gradient(ellipse 75% 70% at 65% 45%, black 20%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 65% 45%, black 20%, transparent 72%)",
          }}
        >
          <div className="absolute inset-y-[8%] right-[-5%] left-[38%]">
            {visible && (
              <OrchestrationR3F
                quality="full"
                frameloop={frameloop}
                parallaxGroupRef={groupRef}
                applyParallax={applyParallax}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

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
          <OrchestrationR3F quality="lite" frameloop={frameloop} />
        )}
      </div>
    </div>
  );
}
