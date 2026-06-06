import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industries/industry-landing-page";
import {
  getIndustryLanding,
  industryLandings,
} from "@/content/industry-landings";
import {
  industryBreadcrumbJsonLd,
  industryServiceJsonLd,
} from "@/lib/industry-schema";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industryLandings.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const landing = getIndustryLanding(slug);
  if (!landing) return {};
  return createMetadata({
    title: landing.metaTitle,
    description: landing.metaDescription,
    path: `/industries/${landing.slug}`,
    useExactTitle: true,
  });
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const landing = getIndustryLanding(slug);
  if (!landing) notFound();

  const breadcrumbLd = industryBreadcrumbJsonLd(landing);
  const serviceLd = industryServiceJsonLd(landing);

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
      <IndustryLandingPage landing={landing} />
    </>
  );
}
