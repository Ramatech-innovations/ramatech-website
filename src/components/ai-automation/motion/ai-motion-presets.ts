/** Shared Framer Motion transition helpers for AI card visualizations */

export const easeEnterprise = [0.22, 1, 0.36, 1] as const;

export function loopTransition(duration: number, delay = 0) {
  return {
    duration,
    delay,
    repeat: Infinity,
    ease: easeEnterprise,
  };
}

export function nodeActiveVariant(active: boolean, hovered: boolean) {
  return {
    fillOpacity: active ? (hovered ? 0.65 : 0.5) : 0.28,
    strokeOpacity: active ? (hovered ? 0.9 : 0.7) : 0.35,
  };
}
