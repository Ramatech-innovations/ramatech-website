# UX Spec — Case Study Architecture Visualizations

**Date:** 2026-05-30  
**Status:** implemented

## Overview

All three homepage case studies use animated SVG + Framer Motion “digital twin” panels with shared glass shell, hover acceleration, and Intersection Observer pause.

| Slug | Component | Flow |
|------|-----------|------|
| observability-platform-scale | `observability-telemetry-viz.tsx` | Services → OTel → Metrics/Logs/Traces → AI → Incident |
| openshift-enterprise-migration | `openshift-migration-viz.tsx` | Legacy → Migration → GitOps → OpenShift |
| ai-automation-operations | `ai-operations-viz.tsx` | Documents → Embeddings → Vector DB → LLM → Review |

## Shared system

- `viz-shared.tsx` — motion hook, glass panel, packets, nodes, tech badges
- Monochrome stylized tech marks (not official logos)
- Colors: `#030B1A`, `#0A4C95`, `#11D3E8`

## Motion

- Idle: ~5.5s loops, soft glow
- Hover: 1.75× speed, stronger cyan
- Reduced motion: static frame
