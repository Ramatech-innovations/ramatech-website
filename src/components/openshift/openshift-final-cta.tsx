import type { OpenShiftService } from "@/content/openshift/services";
import { openshiftHub } from "@/content/openshift/hub";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { ClosingCta } from "@/components/marketing/closing-cta";

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
    <ClosingCta id="openshift-footer-cta" headline={headline}>
      <OpenShiftCtaGroup
        analyticsLabel={analyticsLabel}
        whatsappMessage={whatsappMessage}
        bookLabel={bookLabel}
        whatsappLabel={whatsappLabel}
        onDark
      />
    </ClosingCta>
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
