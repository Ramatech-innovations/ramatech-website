# UX Spec — Infrastructure Orchestration 3D

**Project:** Ramatech Website  
**Date:** 2026-05-30  
**Status:** implemented

## Scope

Homepage **Hero** (full quality) and **Command Center** (lite quality) share one R3F scene implementation under `src/components/three/orchestration/`.

Reference art direction: `public/brand/orchestration-reference.png` (procedural scene, not baked texture).

## Scene composition

| Layer | Description |
|-------|-------------|
| Particle field | Depth particles, count scales by quality |
| Globe | Wireframe icosahedron + point lattice, slow Y rotation |
| Connection paths | Hub → 8 satellites via `CatmullRomCurve3` |
| Energy pulses | Expanding cyan rings from core (GSAP) |
| Control core | Logo mark, torus rings, emissive disc |
| Orbit nodes | 8 satellites: AI, Cloud, Kubernetes, Applications, Security, Observability, Data, Automation |
| Data packets | Boxes animated along curves (GSAP) |

## Quality tiers

| Feature | Full (hero) | Lite (command) |
|---------|-------------|----------------|
| Particles | 1200 | 350 |
| Packets / path | 3 | 1 |
| Energy pulses | 3 | 1 |
| Globe segments | 32 | 16 |
| Parallax | Desktop `lg+` | Off |
| Html labels | Desktop `lg+` | Off |
| DPR cap | 1–1.25 | 1 |

## Motion & a11y

- **GSAP:** packet paths, core pulse rings  
- **useFrame:** globe, orbit group, satellite float  
- **Parallax:** pointer on hero container (`lg+` only)  
- **Reduced motion / no WebGL:** `HeroFallback` / `CommandFallback` SVG (8 nodes)  
- Canvas `aria-hidden`; copy remains in DOM  

## Brand palette

- Background: `#030B1A`
- Deep blue: `#0A4C95`
- Electric cyan: `#11D3E8`

## Performance

- `next/dynamic` + `ssr: false` for WebGL chunk  
- Intersection Observer: `frameloop="never"` when off-screen  
- `PerformanceMonitor` + `AdaptiveDpr` on full quality only  

See `PERF-NOTES-PHASE2.md`.
