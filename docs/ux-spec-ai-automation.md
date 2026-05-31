# UX Spec — AI Automation Interactive Cards

**Project:** Ramatech Website  
**Date:** 2026-05-30  
**Status:** implemented

## Concept

Five showcase cards behave as mini live systems (not static marketing illustrations). Each card uses SVG + Framer Motion only—no Lottie, video, GIF, or WebGL.

## Motion tiers

| State | Behavior |
|-------|----------|
| Idle | Slow loops, low glow (opacity 0.35–0.5) |
| Hover | `speed` 1.8×, stronger cyan strokes |
| Off-screen | Section IO pauses background particles; card `sectionActive` freezes viz loops |
| Reduced motion | Static SVG end-frame per card |

## Cards

| ID | Visualization |
|----|----------------|
| support-agents | Request → AI → Knowledge → Resolved |
| lead-qualification | Lead → Score bars → Route → Qualified |
| workflow-automation | Trigger → Validate → Process → Notify |
| knowledge-systems | RAG graph, query in / answer out |
| operations | Metrics → Detect anomaly → Analyze → Recommend |

## Brand

- `#030B1A`, `#0A4C95`, `#11D3E8`, `#F8FAFC`
- No purple, pink, cyberpunk, or gaming aesthetics

## Files

- `src/components/ai-automation/`
- `src/content/enterprise.ts` — copy unchanged
