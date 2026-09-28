export function PackagePricing({
  pricing,
}: {
  pricing: { display: string; note?: string };
}) {
  return (
    <div className="card-on-light max-w-xl p-8">
      <p className="font-heading text-3xl font-semibold text-brand-ink md:text-4xl">
        {pricing.display}
      </p>
      {pricing.note && (
        <p className="type-body-card mt-3">{pricing.note}</p>
      )}
    </div>
  );
}
