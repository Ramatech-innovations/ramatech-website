# ADR-012: Dual-canvas orchestration scene

**Status:** Accepted  
**Date:** 2026-05-30

## Context

Homepage needs enterprise-grade 3D motion in both the hero and Command Center sections. A single shared R3F implementation reduces drift between visuals.

## Decision

1. One scene module (`orchestration/`) with `quality: "full" | "lite"`.
2. Two lazy-loaded canvases via `OrchestrationCanvas` (hero + command variants).
3. GSAP for discrete motion (packets, pulses); `useFrame` for continuous rotation.
4. Pause rendering when off-screen (`frameloop="never"` + unmount when not intersecting).

## Consequences

- Two WebGL contexts on homepage; mitigated by lite tier and intersection pausing.
- Homepage First Load JS ~173 kB (3D chunk separate).
- Removed static `EcosystemDiagram` and legacy `InfrastructureEcosystem`.

## Alternatives considered

- Single canvas repositioned on scroll — rejected (layout complexity).
- CSS-only command center — rejected (user asked for 3D in both sections).
