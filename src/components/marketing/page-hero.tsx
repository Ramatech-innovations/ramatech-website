import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("section-pad section-dark border-b border-white/5", className)}>
      <div className="container mx-auto max-w-6xl px-4">
        {eyebrow && <p className="type-eyebrow mb-4">{eyebrow}</p>}
        <h1 className="type-display max-w-4xl">{title}</h1>
        {description && <p className="type-body-muted mt-6 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
