import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
  density = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
  density?: "default" | "compact";
}) {
  const compact = density === "compact";

  return (
    <div
      className={cn(
        compact ? "mb-6 max-w-3xl md:mb-8" : "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("type-eyebrow", compact ? "mb-2" : "mb-4")}>{eyebrow}</p>
      )}
      <h2 className={compact ? "type-h2-section" : "type-h2"}>{title}</h2>
      {description && (
        <p className={cn("type-body-muted", compact ? "mt-3" : "mt-5")}>{description}</p>
      )}
    </div>
  );
}
