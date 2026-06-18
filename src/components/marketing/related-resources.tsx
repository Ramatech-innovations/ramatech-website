import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  variant = "light",
}: {
  heading?: string;
  resources: RelatedResource[];
  variant?: "light" | "dark";
}) {
  if (resources.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <div>
      {heading && (
        <p
          className={cn(
            "type-caption font-medium",
            isDark ? "text-muted-foreground" : "text-slate-500"
          )}
        >
          {heading}
        </p>
      )}
      <ul
        className={cn(
          "flex flex-wrap gap-3",
          heading && "mt-4"
        )}
      >
        {resources.map((resource) => (
          <li key={`${resource.href}-${resource.title}`}>
            <Card
              tone={isDark ? "dark" : "light"}
              className="flex h-full min-w-[200px] max-w-xs flex-col p-4 transition-colors hover:border-brand-cyan/40"
            >
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-wider",
                  isDark ? "text-brand-cyan/80" : "text-brand-primary/80"
                )}
              >
                {typeLabels[resource.type]}
              </span>
              <Link
                href={resource.href}
                className={cn(
                  "mt-2 inline-flex items-start gap-1.5 text-sm font-medium leading-snug hover:underline",
                  isDark
                    ? "text-brand-cyan hover:text-white"
                    : "text-brand-primary hover:text-brand-cyan"
                )}
              >
                <span className="flex-1">{resource.title}</span>
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              </Link>
            </Card>
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
