import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industries/industry-landing-page";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import {
  getIndustryLanding,
  industryLandings,
} from "@/content/industry-landings";
import { createMetadata, siteConfig } from "@/lib/seo";

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

  const base = siteConfig.url.replace(/\/$/, "");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: landing.industryName, path: `/industries/${landing.slug}` },
        ]}
      />
      <ServiceSchema
        name={landing.serviceType}
        serviceType={landing.h1}
        description={landing.metaDescription}
        url={`${base}/industries/${landing.slug}`}
        areaServed={["IN"]}
      />
      <IndustryLandingPage landing={landing} />
    </>
  );
}
