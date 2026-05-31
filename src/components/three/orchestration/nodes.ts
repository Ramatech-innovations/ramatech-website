import * as THREE from "three";

export type OrchestrationQuality = "full" | "lite";

export const BRAND = {
  bg: "#030B1A",
  deepBlue: "#0A4C95",
  cyan: "#11D3E8",
  accentBlue: "#1565C0",
} as const;

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

export function qualityConfig(quality: OrchestrationQuality) {
  return {
    particles: quality === "full" ? 1200 : 350,
    packetsPerPath: quality === "full" ? 3 : 1,
    pulseCount: quality === "full" ? 3 : 1,
    globeSegments: quality === "full" ? 32 : 16,
    showLabels: quality === "full",
    parallax: quality === "full",
    dpr: quality === "full" ? ([1, 1.25] as [number, number]) : ([1, 1] as [number, number]),
  };
}
