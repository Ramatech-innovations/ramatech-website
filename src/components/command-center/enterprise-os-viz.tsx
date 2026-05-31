"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { OsCanvas } from "./os-canvas";
import { OsConnections } from "./os-connections";
import { ControlPlaneHub } from "./control-plane-hub";
import { OsCard } from "./os-card";
import { OsFallback } from "./os-fallback";
import { commandCenterOsCards } from "@/content/command-center-os";

export function EnterpriseOsViz() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const reduce = useReducedMotion();

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
      { threshold: 0.12, rootMargin: "120px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reduce || !webgl) {
    return (
      <div ref={containerRef}>
        <OsFallback />
      </div>
    );
  }

  const frameloop = visible ? "always" : "never";

  return (
    <div
      ref={containerRef}
      className="relative min-h-[min(420px,72vw)] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#030B1A]/90 shadow-2xl shadow-black/30"
      aria-hidden
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0.2 }}
      >
        {visible && <OsCanvas frameloop={frameloop} />}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_52%,rgba(17,211,232,0.08),transparent_70%)]" />

      <div className="absolute inset-0 hidden sm:block">
        <OsConnections active={visible} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <ControlPlaneHub active={visible} />
      </div>

      <div className="relative hidden min-h-[min(420px,72vw)] w-full sm:block">
        {commandCenterOsCards.map((card, index) => (
          <OsCard key={card.id} card={card} index={index} active={visible} />
        ))}
      </div>

      <div className="relative z-20 grid grid-cols-2 gap-2 p-3 pt-[38%] sm:hidden">
        {commandCenterOsCards.map((card, index) => (
          <OsCard
            key={card.id}
            card={{ ...card, top: "auto", left: "auto" }}
            index={index}
            active={visible}
            className="!relative !left-auto !top-auto !w-full"
          />
        ))}
      </div>
    </div>
  );
}
