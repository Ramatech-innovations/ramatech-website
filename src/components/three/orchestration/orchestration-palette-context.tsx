"use client";

import { createContext, useContext } from "react";
import { getPalette, type OrchestrationPalette, type SceneTone } from "./nodes";

const OrchestrationPaletteContext = createContext<OrchestrationPalette>(
  getPalette("dark")
);

export function OrchestrationPaletteProvider({
  tone,
  children,
}: {
  tone: SceneTone;
  children: React.ReactNode;
}) {
  const palette = getPalette(tone);
  return (
    <OrchestrationPaletteContext.Provider value={palette}>
      {children}
    </OrchestrationPaletteContext.Provider>
  );
}

export function useOrchestrationPalette() {
  return useContext(OrchestrationPaletteContext);
}
