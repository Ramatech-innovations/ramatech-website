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
              "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
              i === active
                ? "border-brand-primary bg-brand-primary text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-brand-primary/50 hover:text-brand-primary"
            )}
          >
            {uc.title}
          </button>
        ))}
      </div>
      <Card className="mt-6">
        <h3 className="font-heading text-lg font-semibold text-brand-ink">{current.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
          {current.description}
        </p>
      </Card>
    </div>
  );
}
