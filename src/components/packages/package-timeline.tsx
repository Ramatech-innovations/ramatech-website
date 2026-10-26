export function PackageTimeline({
  timeline,
}: {
  timeline: { week: string; label: string }[];
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {timeline.map((step) => (
        <li key={step.week} className="card-on-light p-5">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {step.week}
          </span>
          <p className="mt-2 text-base leading-relaxed text-slate-700">{step.label}</p>
        </li>
      ))}
    </ol>
  );
}
