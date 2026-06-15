import { OpenShiftHubPage } from "@/components/openshift/openshift-hub-page";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { openshiftHub } from "@/content/openshift/hub";
import {
  openshiftHubBreadcrumbItems,
  openshiftHubServiceSchemaProps,
} from "@/lib/openshift-schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: openshiftHub.metaTitle,
  description: openshiftHub.metaDescription,
  path: "/openshift",
  useExactTitle: true,
});

export default function OpenShiftHubRoute() {
  const serviceProps = openshiftHubServiceSchemaProps();

  return (
    <>
      <BreadcrumbSchema items={openshiftHubBreadcrumbItems()} />
      <ServiceSchema {...serviceProps} />
      <OpenShiftHubPage />
    </>
  );
}
