import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { name: string; href?: string };

/** Visual breadcrumb trail. The last item is the current page and is not linked. */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-brand-primary">
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-brand-primary">
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium text-slate-700" aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
