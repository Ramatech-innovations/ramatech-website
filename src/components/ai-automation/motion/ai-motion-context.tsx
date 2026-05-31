"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export type AiMotionState = {
  speed: number;
  hovered: boolean;
  sectionActive: boolean;
  reduced: boolean;
  setHovered: (v: boolean) => void;
};

const AiMotionContext = createContext<AiMotionState | null>(null);

export function AiMotionProvider({
  sectionActive,
  children,
}: {
  sectionActive: boolean;
  children: ReactNode;
}) {
  const reduced = useReducedMotion() ?? false;
  const [hovered, setHovered] = useState(false);
  const speed = hovered ? 1.8 : 1;

  const value = useMemo(
    () => ({
      speed,
      hovered,
      sectionActive,
      reduced,
      setHovered,
    }),
    [speed, hovered, sectionActive, reduced]
  );

  return <AiMotionContext.Provider value={value}>{children}</AiMotionContext.Provider>;
}

export function useAiMotionContext() {
  const ctx = useContext(AiMotionContext);
  if (!ctx) throw new Error("useAiMotionContext must be used within AiMotionProvider");
  return ctx;
}
