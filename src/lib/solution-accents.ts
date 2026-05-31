/** Per-solution accent colors for Phase 2 motion/visual */
export const solutionAccents: Record<
  string,
  { gradient: string; glow: string }
> = {
  "cloud-infrastructure": {
    gradient: "from-[#0A4C95]/30 to-transparent",
    glow: "shadow-[#0A4C95]/20",
  },
  "devops-platform-engineering": {
    gradient: "from-[#1565C0]/30 to-transparent",
    glow: "shadow-[#1565C0]/20",
  },
  "ai-solutions": {
    gradient: "from-[#11D3E8]/25 to-transparent",
    glow: "shadow-[#11D3E8]/25",
  },
  "business-automation": {
    gradient: "from-[#0A4C95]/25 via-[#11D3E8]/10 to-transparent",
    glow: "shadow-brand-cyan/15",
  },
  "software-development": {
    gradient: "from-[#1565C0]/25 to-[#11D3E8]/10",
    glow: "shadow-[#11D3E8]/15",
  },
};

export function getSolutionAccent(slug: string) {
  return (
    solutionAccents[slug] ?? {
      gradient: "from-brand-cyan/20 to-transparent",
      glow: "shadow-brand-cyan/10",
    }
  );
}
