import type { OpenShiftService } from "@/content/openshift/services";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { OpenShiftBreadcrumbs } from "@/components/openshift/openshift-breadcrumbs";
import { PageHero } from "@/components/marketing/page-hero";

export function OpenShiftServiceHero({ service }: { service: OpenShiftService }) {
  return (
    <PageHero
      eyebrow="OpenShift services"
      title={service.h1}
      description={service.heroSubtext}
      breadcrumbs={<OpenShiftBreadcrumbs pageName={service.pageName} />}
    >
      <OpenShiftCtaGroup
        analyticsLabel={service.analyticsLabel}
        whatsappMessage={service.whatsappMessage}
        bookLabel={service.finalCta.bookLabel}
        whatsappLabel={service.finalCta.whatsappLabel}
      />
    </PageHero>
  );
}
