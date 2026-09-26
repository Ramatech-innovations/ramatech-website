/** Command Center OS cards — homepage visualization of capability domains (no metrics) */

export type OsCardConfig = {
  id: string;
  label: string;
  detail: string;
  /** Desktop orbit position (% of container) */
  top: string;
  left: string;
  lineAngle: number;
};

export const commandCenterOsCards: OsCardConfig[] = [
  { id: "ai", label: "AI Agents", detail: "Design · deploy · monitor", top: "6%", left: "2%", lineAngle: -135 },
  { id: "apps", label: "Applications", detail: "Containerise · ship", top: "8%", left: "72%", lineAngle: -45 },
  { id: "cloud", label: "Cloud", detail: "AWS · Azure · GCP", top: "38%", left: "78%", lineAngle: 0 },
  { id: "automation", label: "Automation", detail: "Pipelines · GitOps", top: "72%", left: "68%", lineAngle: 45 },
  { id: "k8s", label: "OpenShift & Kubernetes", detail: "Install · migrate · operate", top: "78%", left: "38%", lineAngle: 90 },
  { id: "obs", label: "Observability", detail: "Metrics · logs · traces", top: "70%", left: "4%", lineAngle: 135 },
  { id: "security", label: "Security", detail: "Policy as code", top: "36%", left: "0%", lineAngle: 180 },
  { id: "data", label: "Data Platforms", detail: "Pipelines · storage", top: "18%", left: "28%", lineAngle: -90 },
];
