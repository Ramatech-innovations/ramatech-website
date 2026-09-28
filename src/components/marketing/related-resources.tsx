import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedResourceType =
  | "service"
  | "insight"
  | "technology"
  | "case-study";

export type RelatedResource = {
  title: string;
  href: string;
  type: RelatedResourceType;
};

const typeLabels: Record<RelatedResourceType, string> = {
  service: "Service",
  insight: "Insight",
  technology: "Technology",
  "case-study": "Case study",
};

export function RelatedResources({
  heading,
  resources,
}: {
  heading?: string;
  resources: RelatedResource[];
}) {
  if (resources.length === 0) return null;

  return (
    <div>
      {heading && <h2 className="font-heading text-lg font-semibold text-brand-ink">{heading}</h2>}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <li key={`${resource.href}-${resource.title}`}>
            <Link
              href={resource.href}
              className="card-on-light group flex h-full flex-col p-4"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {typeLabels[resource.type]}
              </span>
              <span className="mt-1.5 inline-flex items-start gap-1.5 text-sm font-semibold leading-snug text-brand-ink group-hover:text-brand-primary">
                <span className="flex-1">{resource.title}</span>
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function linksToResources(
  links: { href: string; label: string }[],
  type: RelatedResourceType
): RelatedResource[] {
  return links.map((link) => ({
    title: link.label,
    href: link.href,
    type,
  }));
}

export function hrefToResourceType(href: string): RelatedResourceType {
  if (href.startsWith("/case-studies/")) return "case-study";
  if (href.startsWith("/insights/")) return "insight";
  if (href.startsWith("/technology/")) return "technology";
  return "service";
}

export function linksWithInferredType(
  links: { href: string; label: string }[]
): RelatedResource[] {
  return links.map((link) => ({
    title: link.label,
    href: link.href,
    type: hrefToResourceType(link.href),
  }));
}
