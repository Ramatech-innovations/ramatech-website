"use client";

import { useAiMotionContext } from "./ai-motion-context";

export function useAiMotion() {
  const { speed, sectionActive, reduced, hovered } = useAiMotionContext();

  const shouldAnimate = sectionActive && !reduced;

  const duration = (baseSeconds: number) => baseSeconds / speed;

  const repeat = shouldAnimate ? Infinity : 0;

  const glowOpacity = hovered ? 0.75 : 0.45;

  return { shouldAnimate, duration, repeat, speed, hovered, reduced, glowOpacity };
}
