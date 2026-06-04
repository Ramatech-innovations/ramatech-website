import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function PackageSection({
  title,
  children,
  variant = "dark",
  className,
}: {
  title: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "py-16 md:py-20",
        isDark ? "section-dark border-t border-white/5" : "section-light-elevated on-light border-t border-slate-200",
        className
      )}
    >
      <div
        className={cn(
          PAGE_CONTAINER,
          isDark && "text-foreground"
        )}
      >
        <h2
          className={cn(
            "type-h2-section",
            isDark ? "text-white" : "text-brand-ink"
          )}
        >
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
