export function PackagePricing({
  pricing,
}: {
  pricing: { display: string; note?: string };
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="font-heading text-3xl font-semibold text-brand-ink md:text-4xl">
        {pricing.display}
      </p>
      {pricing.note && (
        <p className="type-body-card mt-3">{pricing.note}</p>
      )}
    </div>
  );
}
