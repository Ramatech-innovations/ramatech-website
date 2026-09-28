import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

export const REPLY_PROMISE =
  "We reply within one business day (Mon–Sat, 10:00–19:00 IST).";

/** Navy closing band. The only dark section on a page apart from the footer. */
export function ClosingCta({
  headline,
  description = REPLY_PROMISE,
  children,
  id,
  className,
}: {
  headline: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn("section-dark py-14 md:py-16", className)}>
      <div
        className={cn(
          PAGE_CONTAINER,
          "flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        )}
      >
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold tracking-[-0.02em] text-white md:text-3xl">
            {headline}
          </h2>
          {description && <p className="mt-3 text-slate-300">{description}</p>}
        </div>
        <div className="shrink-0">{children}</div>
      </div>
    </section>
  );
}
