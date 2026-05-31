import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/marketing/solution-detail";
import { createMetadata } from "@/lib/seo";
import { solutions, getSolution } from "@/content/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return createMetadata({
    title: solution.title,
    description: solution.metaDescription,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionDetail solution={solution} />;
}
