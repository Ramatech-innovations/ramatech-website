import { deliveryTrustSignals } from "@/content/enterprise";
import { PAGE_CONTAINER } from "@/lib/layout";

export function EnterpriseKpisSection() {
  return (
    <section className="section-light on-light relative overflow-hidden border-t border-slate-200 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(10, 76, 149, 0.06), transparent 55%)",
        }}
        aria-hidden
      />
      <div className={PAGE_CONTAINER}>
        <p className="type-eyebrow text-center">How we work</p>
        <h2 className="type-h2 mx-auto mt-5 max-w-3xl text-center md:mt-6">
          Delivery signals you can verify
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {deliveryTrustSignals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-xl border border-slate-200 bg-white/80 p-5 text-center lg:text-left"
            >
              <h3 className="font-heading text-base font-semibold text-brand-ink">
                {signal.title}
              </h3>
              <p className="type-body-card mt-2 text-slate-600">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
