/** Command Center OS card metrics — homepage visualization only */

export type OsCardConfig = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  /** Desktop orbit position (% of container) */
  top: string;
  left: string;
  lineAngle: number;
};

export const commandCenterOsCards: OsCardConfig[] = [
  { id: "ai", label: "AI Agents Active", value: 847, top: "6%", left: "2%", lineAngle: -135 },
  { id: "apps", label: "Applications Managed", value: 1240, top: "8%", left: "72%", lineAngle: -45 },
  { id: "cloud", label: "Cloud Environments", value: 36, top: "38%", left: "78%", lineAngle: 0 },
  { id: "automation", label: "Automations Running", value: 512, top: "72%", left: "68%", lineAngle: 45 },
  { id: "k8s", label: "Clusters Managed", value: 89, top: "78%", left: "38%", lineAngle: 90 },
  { id: "obs", label: "Observability Sources", value: 2048, suffix: "", top: "70%", left: "4%", lineAngle: 135 },
  { id: "security", label: "Security Policies", value: 412, top: "36%", left: "0%", lineAngle: 180 },
  { id: "data", label: "Data Platforms", value: 24, top: "18%", left: "28%", lineAngle: -90 },
];
