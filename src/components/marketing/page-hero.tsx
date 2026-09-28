import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

/** The single hero pattern used by every page: breadcrumb, eyebrow, H1, summary, actions. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  aside,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "section-light-elevated on-light border-b border-slate-200 py-14 md:py-20",
        className
      )}
    >
      <div className={PAGE_CONTAINER}>
        {breadcrumbs && <div className="mb-8">{breadcrumbs}</div>}
        <div className={cn(aside && "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-center")}>
          <div>
            {eyebrow && <p className="type-eyebrow mb-4">{eyebrow}</p>}
            <h1 className="type-display max-w-4xl text-brand-ink">{title}</h1>
            {description && (
              <p className="mt-5 max-w-2xl text-body-lg leading-relaxed text-slate-600">{description}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      </div>
    </section>
  );
}
