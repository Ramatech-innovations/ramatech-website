# Performance Notes — Phase 2 / Orchestration 3D

**Date:** 2026-05-30 (updated)

## Bundle

- Home First Load JS: ~173 kB (3D chunk lazy-loaded on client)
- R3F + three + GSAP loaded when `OrchestrationCanvas` mounts and WebGL is available

## Optimizations

- `next/dynamic` + `ssr: false` for WebGL
- Dual canvas: hero `full`, command `lite` (fewer particles, packets, pulses)
- `dpr`: full `[1, 1.25]`, lite `[1, 1]`
- Intersection Observer → `frameloop="never"` when section off-screen; unmount scene when not visible
- `PerformanceMonitor` + `AdaptiveDpr` on full quality only
- `prefers-reduced-motion`: SVG fallbacks, no WebGL, no GSAP

## Lite vs full budgets

| Resource | Full | Lite |
|----------|------|------|
| Particles | 1200 | 350 |
| Data packets | 24 (3×8 paths) | 8 |
| Pulse rings | 3 | 1 |
| Globe detail | 32 seg | 16 seg |

## Verification

```bash
npm run build && npm run start
```

Lighthouse mobile on `/` — target Performance ≥ 85. If regression:

- Lower lite `particles` to 250
- Defer command canvas mount until `whileInView`
- Disable parallax on tablet breakpoints
