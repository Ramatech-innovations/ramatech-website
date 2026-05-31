"use client";

import { cn } from "@/lib/utils";

type MockVariant = "observability" | "kubernetes" | "ai" | "cloud" | "automation" | "software";

export function PlatformMock({
  variant = "observability",
  className,
}: {
  variant?: MockVariant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "perspective-mock glass-panel-xl relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 p-4 shadow-2xl shadow-brand-cyan/10",
        className
      )}
      aria-hidden
    >
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
        <div className="h-2.5 w-2.5 rounded-full bg-brand-cyan/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-brand-deep/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          ramatech — {variant}
        </span>
      </div>
      {variant === "observability" && <ObservabilityMock />}
      {variant === "kubernetes" && <K8sMock />}
      {variant === "ai" && <AiMock />}
      {variant === "cloud" && <CloudMock />}
      {variant === "automation" && <AutomationMock />}
      {variant === "software" && <SoftwareMock />}
    </div>
  );
}

function ObservabilityMock() {
  return (
    <div className="space-y-2">
      <div className="flex h-24 items-end gap-1 rounded-lg bg-white/5 p-2">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-brand-gradient opacity-80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-brand-cyan">
        <span>MTTR ↓40%</span>
        <span>SLO 99.95%</span>
        <span>Alerts 12</span>
      </div>
    </div>
  );
}

function K8sMock() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-brand-cyan/20 bg-brand-primary/20 p-2">
          <div className="h-2 w-2 rounded-full bg-brand-cyan" />
          <div className="mt-2 h-1 w-full rounded bg-white/10" />
          <div className="mt-1 h-1 w-2/3 rounded bg-white/10" />
        </div>
      ))}
    </div>
  );
}

function AiMock() {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-brand-cyan/30 bg-brand-cyan/5 p-3 font-mono text-[10px] text-brand-cyan">
        RAG pipeline · eval score 0.94
      </div>
      <div className="flex gap-2">
        <div className="h-16 flex-1 rounded-lg bg-white/5" />
        <div className="h-16 w-1/3 rounded-lg bg-brand-gradient opacity-50" />
      </div>
    </div>
  );
}

function CloudMock() {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <div className="h-20 w-20 rounded-2xl border border-brand-cyan/40 bg-brand-primary/30" />
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-2 w-24 rounded bg-white/10" />
        ))}
      </div>
    </div>
  );
}

function AutomationMock() {
  return (
    <div className="flex items-center justify-between gap-2 py-4">
      {["ERP", "API", "Queue", "DB"].map((n) => (
        <div key={n} className="text-center">
          <div className="mx-auto h-10 w-10 rounded-full border border-white/20 bg-white/5" />
          <p className="mt-1 font-mono text-[9px] text-muted-foreground">{n}</p>
        </div>
      ))}
    </div>
  );
}

function SoftwareMock() {
  return (
    <div className="rounded-lg bg-[#0a0f1a] p-3 font-mono text-[10px] leading-relaxed text-brand-cyan/90">
      <p>
        <span className="text-muted-foreground">export</span> async function deploy() {"{"}
      </p>
      <p className="pl-2 text-white/70">await pipeline.run();</p>
      <p>{"}"}</p>
    </div>
  );
}
