import { notFound } from "next/navigation";
import { PackageLandingPage } from "@/components/packages/package-landing-page";
import {
  getPackageLanding,
  packageLandings,
} from "@/content/package-landings";
import {
  packageBreadcrumbJsonLd,
  packageServiceJsonLd,
} from "@/lib/package-schema";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packageLandings.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const landing = getPackageLanding(slug);
  if (!landing) return {};
  return createMetadata({
    title: landing.metaTitle,
    description: landing.metaDescription,
    path: `/packages/${landing.slug}`,
    useExactTitle: true,
  });
}

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params;
  const landing = getPackageLanding(slug);
  if (!landing) notFound();

  const breadcrumbLd = packageBreadcrumbJsonLd(landing);
  const serviceLd = packageServiceJsonLd(landing);

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
      <PackageLandingPage landing={landing} />
    </>
  );
}
