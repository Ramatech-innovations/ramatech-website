import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="type-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="type-h2-section text-brand-ink">{title}</h2>
      {description && <p className="mt-3 text-body-lg leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}
