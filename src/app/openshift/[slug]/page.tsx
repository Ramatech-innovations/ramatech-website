import { notFound } from "next/navigation";
import { OpenShiftServicePage } from "@/components/openshift/openshift-service-page";
import {
  getOpenShiftService,
  openshiftServices,
} from "@/content/openshift/services";
import {
  openshiftBreadcrumbJsonLd,
  openshiftFaqJsonLd,
  openshiftServiceJsonLd,
} from "@/lib/openshift-schema";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return openshiftServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getOpenShiftService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/openshift/${service.slug}`,
    useExactTitle: true,
  });
}

export default async function OpenShiftServiceRoute({ params }: PageProps) {
  const { slug } = await params;
  const service = getOpenShiftService(slug);
  if (!service) notFound();

  const breadcrumbLd = openshiftBreadcrumbJsonLd(
    service.pageName,
    `/openshift/${service.slug}`
  );
  const serviceLd = openshiftServiceJsonLd(service);
  const faqLd =
    service.faqs.length > 0 ? openshiftFaqJsonLd(service.faqs) : null;

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
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <OpenShiftServicePage service={service} />
    </>
  );
}
