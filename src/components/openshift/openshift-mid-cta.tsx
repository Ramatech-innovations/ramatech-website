import { Card } from "@/components/ui/card";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";

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
    <section className="section-light-elevated border-y border-slate-200 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <Card tone="light" className="p-8 md:p-10">
          <h2 className="type-h3 text-brand-ink md:text-2xl">{headline}</h2>
          <div className="flex justify-center">
            <OpenShiftCtaGroup
              analyticsLabel={analyticsLabel}
              whatsappMessage={whatsappMessage}
              bookLabel={bookLabel}
              whatsappLabel={whatsappLabel}
              className="mt-8"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
