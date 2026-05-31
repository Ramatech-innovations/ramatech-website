"use client";

import { cn } from "@/lib/utils";

export type CapabilityVisualVariant =
  | "cloud-infrastructure"
  | "devops-platform-engineering"
  | "ai-solutions"
  | "business-automation"
  | "software-development";

const titles: Record<CapabilityVisualVariant, string> = {
  "cloud-infrastructure": "Cloud Infrastructure",
  "devops-platform-engineering": "DevOps & Platform Engineering",
  "ai-solutions": "AI Solutions",
  "business-automation": "Business Automation",
  "software-development": "Software Development",
};

export function CapabilityVisual({
  variant,
  className,
  compact = false,
}: {
  variant: CapabilityVisualVariant;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-white/10",
        "bg-gradient-to-br from-brand-primary/25 via-[#0a0f1a] to-brand-cyan/10",
        compact ? "aspect-[4/3] max-h-[140px]" : "aspect-[16/10]",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse-soft" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-brand-cyan/90">
            {titles[variant]}
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center p-4">
          {variant === "cloud-infrastructure" && <CloudVisual />}
          {variant === "devops-platform-engineering" && <K8sVisual />}
          {variant === "ai-solutions" && <AiVisual />}
          {variant === "business-automation" && <AutomationVisual />}
          {variant === "software-development" && <SoftwareVisual />}
        </div>
      </div>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="relative h-full w-full max-w-[280px]">
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 animate-orbit-slow" />
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div
          key={deg}
          className="absolute left-1/2 top-1/2 h-3 w-3 -ml-1.5 -mt-1.5 rounded-full bg-brand-cyan shadow-[0_0_12px_#11D3E8]"
          style={{
            transform: `rotate(${deg}deg) translateY(-48px)`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between font-mono text-[9px] text-muted-foreground">
        <span>multi-cloud</span>
        <span>IaC ready</span>
      </div>
    </div>
  );
}

function K8sVisual() {
  return (
    <div className="grid w-full max-w-[260px] grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="flex aspect-square flex-col items-center justify-center rounded-lg border border-brand-cyan/20 bg-white/5 animate-pulse-soft"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="h-2 w-2 rounded-sm bg-brand-cyan/80" />
        </div>
      ))}
      <div className="col-span-3 mt-1 text-center font-mono text-[9px] text-brand-cyan">
        GitOps · pipelines active
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full max-h-[140px] text-brand-cyan">
      {[
        [40, 60],
        [100, 30],
        [160, 70],
        [100, 90],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill="currentColor" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.15}s` }} />
        </g>
      ))}
      <line x1="40" y1="60" x2="100" y2="30" stroke="#11D3E8" strokeOpacity="0.4" />
      <line x1="100" y1="30" x2="160" y2="70" stroke="#11D3E8" strokeOpacity="0.4" />
      <line x1="100" y1="30" x2="100" y2="90" stroke="#1565C0" strokeOpacity="0.5" />
      <line x1="40" y1="60" x2="100" y2="90" stroke="#0A4C95" strokeOpacity="0.4" />
    </svg>
  );
}

function AutomationVisual() {
  const nodes = ["Trigger", "Process", "Integrate", "Notify"];
  return (
    <div className="relative w-full max-w-[280px]">
      <div className="absolute left-4 right-4 top-[22px] h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />
      <div className="flex items-center justify-between gap-1">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-col items-center gap-1">
            <div
              className="h-10 w-10 rounded-lg border border-brand-cyan/30 bg-brand-primary/30 animate-pulse-soft"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
            <span className="font-mono text-[8px] text-muted-foreground">{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="w-full max-w-[280px] rounded-lg border border-white/10 bg-[#060a12] p-3 font-mono text-[10px] leading-relaxed">
      <p>
        <span className="text-brand-cyan">const</span>{" "}
        <span className="text-white/80">deploy</span> ={" "}
        <span className="text-brand-cyan/80">async</span> () =&gt; {"{"}
      </p>
      <p className="pl-2 text-white/50">await pipeline.run();</p>
      <p className="text-white/50">{"}"}</p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-brand-gradient animate-flow-x" />
      </div>
    </div>
  );
}

/** Map solution href to visual variant */
export function hrefToVisualVariant(href: string): CapabilityVisualVariant {
  const slug = href.replace("/solutions/", "") as CapabilityVisualVariant;
  const valid: CapabilityVisualVariant[] = [
    "cloud-infrastructure",
    "devops-platform-engineering",
    "ai-solutions",
    "business-automation",
    "software-development",
  ];
  return valid.includes(slug) ? slug : "cloud-infrastructure";
}
