# UX Spec — Case Study Architecture Visualizations

**Date:** 2026-05-30  
**Status:** implemented

## Overview

Every case study uses an animated SVG + Framer Motion “digital twin” panel with shared glass shell, hover acceleration, and Intersection Observer pause. Node and badge labels must name only tools confirmed for that study in `ramatech-ceo-os/company/CLAIMS.md`.

| Slug | Component | Flow |
|------|-----------|------|
| openshift-enterprise-migration | `openshift-migration-viz.tsx` | Legacy → Migration → GitOps → OpenShift |
| openshift-jenkins-argocd-cicd | `JenkinsArgocdCicdViz` in `pipeline-flow-viz.tsx` | Bitbucket → Jenkins → Nexus/Quay → Argo CD → OCP (bare metal) |
| openshift-helm-gitops-production | `HelmGitopsViz` in `pipeline-flow-viz.tsx` | GitLab → Jenkins → Helm → Argo CD → OCP (air-gapped) |
| openshift-operations-automation | `OperationsAutomationViz` in `pipeline-flow-viz.tsx` | Jenkins → Ansible → Argo CD → Operators → OCP (bare metal) |

Unknown slugs fall back to `OpenshiftMigrationViz`.

## Shared system

- `viz-shared.tsx` — motion hook, glass panel, packets, nodes, tech badges
- `pipeline-flow-viz.tsx` — `PipelineFlowViz` takes stages and tech badges as props for linear pipeline diagrams
- Monochrome stylized tech marks (not official logos)
- Colors: `#030B1A`, `#0A4C95`, `#11D3E8`

## Motion

- Idle: ~5.5s loops, soft glow
- Hover: 1.75× speed, stronger cyan
- Reduced motion: static frame
