import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

/**
 * Content section for template pages. `variant` alternates white ("dark", the historical
 * name kept for content data) and slate-50 ("light") backgrounds.
 */
export function PackageSection({
  title,
  children,
  variant = "dark",
  className,
  headingId,
  embedded = false,
}: {
  title: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  headingId?: string;
  /** When true, skip PAGE_CONTAINER (parent supplies horizontal padding). */
  embedded?: boolean;
}) {
  return (
    <section
      className={cn(
        "on-light border-t border-slate-200 py-14 md:py-16",
        variant === "dark" ? "section-light" : "section-light-elevated",
        className
      )}
    >
      <div className={embedded ? "w-full" : PAGE_CONTAINER}>
        <h2 id={headingId} className="type-h2-section text-brand-ink">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
