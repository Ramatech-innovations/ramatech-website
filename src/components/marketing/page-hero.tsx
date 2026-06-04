import { BrandLogo } from "@/components/brand/brand-logo";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";

  return (
    <section
      className={cn(
        "section-pad border-b",
        isLight
          ? "section-light on-light border-slate-200"
          : "section-dark border-white/5",
        className
      )}
    >
      <div className={PAGE_CONTAINER}>
        {isLight && (
          <BrandLogo variant="heroBadge" theme="light" alt="" className="mb-6" />
        )}
        {eyebrow && <p className="type-eyebrow mb-4">{eyebrow}</p>}
        <h1 className={cn("type-display max-w-4xl", isLight && "text-brand-ink")}>
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 max-w-2xl type-body-muted",
              isLight && "text-slate-600"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
