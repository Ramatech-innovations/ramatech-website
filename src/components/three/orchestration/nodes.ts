import * as THREE from "three";

export type OrchestrationQuality = "full" | "lite";
export type SceneTone = "dark" | "heroOnLight";

export type OrchestrationPalette = {
  bg: string;
  deepBlue: string;
  cyan: string;
  accentBlue: string;
  fogNear: number;
  fogFar: number;
  particles: { opacity: number; size: number; color: string };
  globe: { wireOpacity: number; shellOpacity: number; pointsOpacity: number };
  paths: { opacity: number };
  hubGlow: { platformOpacity: number; ringOpacity: number; innerRingOpacity: number };
  stars: { headOpacityMax: number; scaleMul: number };
  logoLight: { intensity: number; pulse: number };
  pulseRing: { startOpacity: number };
  labelsOnLight: boolean;
};

const darkPalette: OrchestrationPalette = {
  bg: "#030B1A",
  deepBlue: "#0A4C95",
  cyan: "#11D3E8",
  accentBlue: "#1565C0",
  fogNear: 4,
  fogFar: 14,
  particles: { opacity: 0.35, size: 0.04, color: "#11D3E8" },
  globe: { wireOpacity: 0.22, shellOpacity: 0.06, pointsOpacity: 0.45 },
  paths: { opacity: 0.25 },
  hubGlow: { platformOpacity: 0.18, ringOpacity: 0.22, innerRingOpacity: 0.28 },
  stars: { headOpacityMax: 0.65, scaleMul: 1 },
  logoLight: { intensity: 1.2, pulse: 0.35 },
  pulseRing: { startOpacity: 0.45 },
  labelsOnLight: false,
};

const heroOnLightPalette: OrchestrationPalette = {
  bg: "#EEF2F7",
  deepBlue: "#0A4C95",
  cyan: "#11D3E8",
  accentBlue: "#1565C0",
  fogNear: 5,
  fogFar: 16,
  particles: { opacity: 0.14, size: 0.028, color: "#1565C0" },
  globe: { wireOpacity: 0.14, shellOpacity: 0.04, pointsOpacity: 0.22 },
  paths: { opacity: 0.18 },
  hubGlow: { platformOpacity: 0.12, ringOpacity: 0.16, innerRingOpacity: 0.2 },
  stars: { headOpacityMax: 0.5, scaleMul: 0.85 },
  logoLight: { intensity: 0.85, pulse: 0.22 },
  pulseRing: { startOpacity: 0.28 },
  labelsOnLight: true,
};

export const PALETTE: Record<SceneTone, OrchestrationPalette> = {
  dark: darkPalette,
  heroOnLight: heroOnLightPalette,
};

/** @deprecated Use getPalette(sceneTone) — kept for non-orchestration imports */
export const BRAND = {
  bg: darkPalette.bg,
  deepBlue: darkPalette.deepBlue,
  cyan: darkPalette.cyan,
  accentBlue: darkPalette.accentBlue,
} as const;

export function getPalette(tone: SceneTone): OrchestrationPalette {
  return PALETTE[tone];
}

export const ORBIT_RADIUS = 2.35;

export const LOGO_Z = 0.55;

export type SatelliteConfig = {
  id: string;
  label: string;
  shortLabel: string;
  angle: number;
  color: string;
  y: number;
};

export const SATELLITES: SatelliteConfig[] = [
  { id: "ai", label: "AI", shortLabel: "AI", angle: 0, color: BRAND.cyan, y: 0.35 },
  { id: "cloud", label: "Cloud", shortLabel: "Cloud", angle: Math.PI / 4, color: BRAND.accentBlue, y: -0.15 },
  { id: "kubernetes", label: "Kubernetes", shortLabel: "K8s", angle: Math.PI / 2, color: BRAND.deepBlue, y: 0.2 },
  { id: "applications", label: "Applications", shortLabel: "Apps", angle: (3 * Math.PI) / 4, color: BRAND.cyan, y: -0.3 },
  { id: "security", label: "Security", shortLabel: "Security", angle: Math.PI, color: BRAND.deepBlue, y: 0.1 },
  { id: "observability", label: "Observability", shortLabel: "Obs", angle: (5 * Math.PI) / 4, color: BRAND.accentBlue, y: -0.25 },
  { id: "data", label: "Data", shortLabel: "Data", angle: (3 * Math.PI) / 2, color: BRAND.cyan, y: 0.28 },
  { id: "automation", label: "Automation", shortLabel: "Auto", angle: (7 * Math.PI) / 4, color: BRAND.deepBlue, y: -0.1 },
];

export function getSatellitePositions(): THREE.Vector3[] {
  return SATELLITES.map((s) => {
    const x = Math.cos(s.angle) * ORBIT_RADIUS;
    const z = Math.sin(s.angle) * ORBIT_RADIUS;
    return new THREE.Vector3(x, s.y, z);
  });
}

/** Connection origin — near logo plane so paths tie to the mark */
export const HUB = new THREE.Vector3(0, 0, 0.35);

export function qualityConfig(quality: OrchestrationQuality, tone: SceneTone = "dark") {
  const isHeroLight = tone === "heroOnLight";
  return {
    particles: isHeroLight
      ? quality === "full"
        ? 600
        : 280
      : quality === "full"
        ? 1200
        : 350,
    streaksPerPath: quality === "full" ? 2 : 1,
    pulseCount: quality === "full" ? 3 : 1,
    globeSegments: quality === "full" ? 32 : 16,
    showLabels: quality === "full",
    parallax: quality === "full",
    dpr: quality === "full" ? ([1, 1.25] as [number, number]) : ([1, 1] as [number, number]),
  };
}
