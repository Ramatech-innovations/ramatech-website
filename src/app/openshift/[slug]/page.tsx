import { notFound } from "next/navigation";
import { OpenShiftGeoPageView } from "@/components/openshift/openshift-geo-page";
import { OpenShiftServicePage } from "@/components/openshift/openshift-service-page";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import {
  getOpenShiftGeoPage,
  getAllOpenShiftSlugs,
} from "@/content/openshift/geo-pages";
import {
  getOpenShiftService,
  openshiftServices,
} from "@/content/openshift/services";
import {
  openshiftGeoServiceSchemaProps,
  openshiftServiceBreadcrumbItems,
  openshiftServiceSchemaProps,
} from "@/lib/openshift-schema";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...openshiftServices.map((s) => ({ slug: s.slug })),
    ...getAllOpenShiftSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getOpenShiftService(slug);
  if (service) {
    return createMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/openshift/${service.slug}`,
      useExactTitle: true,
    });
  }

  const geo = getOpenShiftGeoPage(slug);
  if (geo) {
    return createMetadata({
      title: geo.metaTitle,
      description: geo.metaDescription,
      path: `/openshift/${geo.slug}`,
      useExactTitle: true,
    });
  }

  return {};
}

export default async function OpenShiftSlugRoute({ params }: PageProps) {
  const { slug } = await params;
  const service = getOpenShiftService(slug);

  if (service) {
    const breadcrumbItems = openshiftServiceBreadcrumbItems(
      service.pageName,
      `/openshift/${service.slug}`
    );
    const serviceProps = openshiftServiceSchemaProps(service);

    return (
      <>
        <BreadcrumbSchema items={breadcrumbItems} />
        <ServiceSchema {...serviceProps} />
        {service.faqs.length > 0 && <FaqSchema faqs={service.faqs} />}
        <OpenShiftServicePage service={service} />
      </>
    );
  }

  const geo = getOpenShiftGeoPage(slug);
  if (!geo) notFound();

  const breadcrumbItems = openshiftServiceBreadcrumbItems(
    geo.pageName,
    `/openshift/${geo.slug}`
  );
  const serviceProps = openshiftGeoServiceSchemaProps(geo);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema {...serviceProps} />
      {geo.faqs.length > 0 && <FaqSchema faqs={geo.faqs} />}
      <OpenShiftGeoPageView geo={geo} />
    </>
  );
}
