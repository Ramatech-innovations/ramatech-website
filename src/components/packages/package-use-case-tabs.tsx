"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function PackageUseCaseTabs({
  useCases,
}: {
  useCases: { title: string; description: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {useCases.map((uc, i) => (
          <button
            key={uc.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              i === active
                ? "border-brand-cyan/50 bg-brand-cyan/15 text-brand-cyan"
                : "border-white/15 text-muted-foreground hover:border-white/25 hover:text-foreground"
            )}
          >
            {uc.title}
          </button>
        ))}
      </div>
      <Card tone="dark" className="mt-6 border border-white/10">
        <h3 className="font-heading text-lg font-semibold">{current.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-foreground/85">
          {current.description}
        </p>
      </Card>
    </div>
  );
}
