import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function IndustryCaseStudyLinks({
  links,
}: {
  links: { slug: string; title: string; summary: string }[];
}) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {links.map((study) => (
        <li key={study.slug}>
          <Card tone="light" className="flex h-full flex-col p-6 md:p-8">
            <p className="type-caption text-brand-primary">Case study</p>
            <h3 className="type-h3 mt-2 text-brand-ink">{study.title}</h3>
            <p className="type-body-card mt-3 flex-1">{study.summary}</p>
            <Link
              href={`/case-studies/${study.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:underline"
            >
              Read case study
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}
