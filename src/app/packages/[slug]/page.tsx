import { notFound } from "next/navigation";
import { PackageLandingPage } from "@/components/packages/package-landing-page";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  getPackageLanding,
  packageLandings,
} from "@/content/package-landings";
import { packageServiceJsonLd } from "@/lib/package-schema";
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

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Packages", path: "/packages" },
          { name: landing.packageName, path: `/packages/${landing.slug}` },
        ]}
      />
      <JsonLdScript data={packageServiceJsonLd(landing)} />
      <PackageLandingPage landing={landing} />
    </>
  );
}
