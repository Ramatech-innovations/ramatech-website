import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { TechnologyPageView } from "@/components/technology/technology-page-view";
import {
  getAllTechnologySlugs,
  getTechnologyPage,
} from "@/content/technology-pages";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllTechnologySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getTechnologyPage(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/technology/${page.slug}`,
    useExactTitle: true,
  });
}

export default async function TechnologyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getTechnologyPage(slug);
  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
          { name: page.techName, path: `/technology/${page.slug}` },
        ]}
      />
      <TechnologyPageView page={page} />
    </>
  );
}
