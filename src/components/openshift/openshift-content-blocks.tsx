import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import type {
  ContentBlock,
  ServiceSection,
  TierCard,
} from "@/content/openshift/services";
import { cn } from "@/lib/utils";

export function OpenShiftProse({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p) => (
        <p
          key={p.slice(0, 48)}
          className="text-base leading-relaxed text-slate-700 md:text-[1.0625rem] md:leading-[1.75]"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function OpenShiftBulletList({
  items,
  variant = "light",
}: {
  items: string[];
  variant?: "light" | "dark";
}) {
  const isLight = variant === "light";

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-base leading-relaxed md:text-[1.0625rem]",
            isLight ? "text-slate-700" : "text-foreground/90"
          )}
        >
          <Check
            className={cn(
              "mt-1 h-5 w-5 shrink-0",
              isLight ? "text-brand-primary" : "text-brand-cyan"
            )}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OpenShiftNumberedSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="space-y-6">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 font-heading text-lg font-semibold text-brand-primary">
            {i + 1}
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-ink">
              {step.title}
            </h3>
            <p className="type-body-card mt-2">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function OpenShiftTierCards({ tiers }: { tiers: TierCard[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <li key={tier.name}>
          <Card tone="light" className="flex h-full flex-col p-6 md:p-8">
            <h3 className="type-h3 text-brand-ink">{tier.name}</h3>
            <ul className="mt-4 flex-1 space-y-2.5">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm leading-relaxed text-slate-700 md:text-base"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary"
                    aria-hidden
                  />
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function OpenShiftSlaTable({
  rows,
}: {
  rows: { priority: string; response: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[320px] text-left text-sm md:text-base">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 font-heading font-semibold text-brand-ink md:px-6">
              Priority
            </th>
            <th className="px-4 py-3 font-heading font-semibold text-brand-ink md:px-6">
              Response target
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.priority} className="border-b border-slate-100 last:border-0">
              <td className="px-4 py-3 text-slate-700 md:px-6">{row.priority}</td>
              <td className="px-4 py-3 text-slate-700 md:px-6">{row.response}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OpenShiftSectionBlocks({
  blocks,
  variant,
}: {
  blocks: ContentBlock[];
  variant: ServiceSection["variant"];
}) {
  return (
    <div className="space-y-8">
      {blocks.map((block) => {
        switch (block.type) {
          case "prose":
            return <OpenShiftProse key={block.paragraphs[0]} paragraphs={block.paragraphs} />;
          case "bulletList":
            return (
              <OpenShiftBulletList
                key={block.items[0]}
                items={block.items}
                variant={variant}
              />
            );
          case "numberedSteps":
            return (
              <OpenShiftNumberedSteps key={block.steps[0].title} steps={block.steps} />
            );
          case "tierCards":
            return <OpenShiftTierCards key={block.tiers[0].name} tiers={block.tiers} />;
          case "slaTable":
            return <OpenShiftSlaTable key="sla" rows={block.rows} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
