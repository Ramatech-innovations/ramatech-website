import type { OpenShiftService } from "@/content/openshift/services";
import { openshiftHub } from "@/content/openshift/hub";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { PAGE_CONTAINER } from "@/lib/layout";

export function OpenShiftFinalCta({
  headline,
  bookLabel,
  whatsappLabel,
  analyticsLabel,
  whatsappMessage,
}: {
  headline: string;
  bookLabel: string;
  whatsappLabel: string;
  analyticsLabel: string;
  whatsappMessage: string;
}) {
  return (
    <section
      id="openshift-footer-cta"
      className="relative overflow-hidden border-t border-white/10 py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-brand-gradient opacity-95" aria-hidden />
      <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden />
      <div className={`${PAGE_CONTAINER} relative text-center`}>
        <h2 className="type-h2-section text-white md:text-3xl">{headline}</h2>
        <div className="flex justify-center">
          <OpenShiftCtaGroup
            analyticsLabel={analyticsLabel}
            whatsappMessage={whatsappMessage}
            bookLabel={bookLabel}
            whatsappLabel={whatsappLabel}
            onDark
            className="mt-10"
          />
        </div>
      </div>
    </section>
  );
}

export function OpenShiftServiceFinalCta({ service }: { service: OpenShiftService }) {
  return (
    <OpenShiftFinalCta
      headline={service.finalCta.headline}
      bookLabel={service.finalCta.bookLabel}
      whatsappLabel={service.finalCta.whatsappLabel}
      analyticsLabel={service.analyticsLabel}
      whatsappMessage={service.whatsappMessage}
    />
  );
}

export function OpenShiftHubFinalCta() {
  return (
    <OpenShiftFinalCta
      headline={openshiftHub.finalCta.headline}
      bookLabel={openshiftHub.finalCta.bookLabel}
      whatsappLabel={openshiftHub.finalCta.whatsappLabel}
      analyticsLabel={openshiftHub.analyticsLabel}
      whatsappMessage={openshiftHub.whatsappMessage}
    />
  );
}
