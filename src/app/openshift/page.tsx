import { OpenShiftHubPage } from "@/components/openshift/openshift-hub-page";
import { openshiftHub } from "@/content/openshift/hub";
import {
  openshiftHubBreadcrumbJsonLd,
  openshiftHubServiceJsonLd,
} from "@/lib/openshift-schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: openshiftHub.metaTitle,
  description: openshiftHub.metaDescription,
  path: "/openshift",
  useExactTitle: true,
});

export default function OpenShiftHubRoute() {
  const breadcrumbLd = openshiftHubBreadcrumbJsonLd();
  const serviceLd = openshiftHubServiceJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <OpenShiftHubPage />
    </>
  );
}
