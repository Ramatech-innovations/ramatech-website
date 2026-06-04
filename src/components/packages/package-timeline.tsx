export function PackageTimeline({
  timeline,
}: {
  timeline: { week: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {timeline.map((step) => (
        <div
          key={step.week}
          className="relative rounded-xl border border-white/10 bg-white/[0.04] p-5"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">
            {step.week}
          </span>
          <p className="mt-2 text-base leading-relaxed text-foreground/90 md:text-[1.0625rem]">
            {step.label}
          </p>
        </div>
      ))}
    </div>
  );
}
