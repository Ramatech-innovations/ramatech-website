import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { PAGE_CONTAINER } from "@/lib/layout";

export function OpenShiftMidCta({
  analyticsLabel,
  whatsappMessage,
  headline = "Need to discuss your OpenShift environment?",
  bookLabel = "Book a Call",
  whatsappLabel = "WhatsApp",
}: {
  analyticsLabel: string;
  whatsappMessage: string;
  headline?: string;
  bookLabel?: string;
  whatsappLabel?: string;
}) {
  return (
    <section className="section-light on-light border-t border-slate-200 py-10">
      <div
        className={`${PAGE_CONTAINER} flex flex-col gap-6 rounded-lg border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between md:p-8`}
      >
        <h2 className="font-heading text-xl font-semibold text-brand-ink">{headline}</h2>
        <OpenShiftCtaGroup
          analyticsLabel={analyticsLabel}
          whatsappMessage={whatsappMessage}
          bookLabel={bookLabel}
          whatsappLabel={whatsappLabel}
        />
      </div>
    </section>
  );
}
