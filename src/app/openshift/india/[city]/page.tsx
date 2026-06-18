import { notFound } from "next/navigation";
import { OpenShiftIndiaCityPageView } from "@/components/openshift/openshift-india-city-page";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import {
  getAllIndiaCitySlugs,
  getIndiaCityPage,
} from "@/content/openshift/india-city-pages";
import {
  openshiftIndiaCityBreadcrumbItems,
  openshiftIndiaCityServiceSchemaProps,
} from "@/lib/openshift-schema";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return getAllIndiaCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getIndiaCityPage(citySlug);
  if (!city) return {};

  return createMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/openshift/india/${city.slug}`,
    useExactTitle: true,
  });
}

export default async function OpenShiftIndiaCityRoute({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getIndiaCityPage(citySlug);
  if (!city) notFound();

  const breadcrumbItems = openshiftIndiaCityBreadcrumbItems(
    city.cityName,
    city.slug
  );
  const serviceProps = openshiftIndiaCityServiceSchemaProps(city);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema {...serviceProps} />
      {city.faqs.length > 0 && <FaqSchema faqs={city.faqs} />}
      <OpenShiftIndiaCityPageView city={city} />
    </>
  );
}
