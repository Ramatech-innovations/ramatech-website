"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TocEntry = {
  id: string;
  title: string;
};

export function InsightArticleToc({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "");

  useEffect(() => {
    const headings = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const io = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [entries]);

  const linkClass = (id: string) =>
    cn(
      "block rounded-md px-2 py-1.5 text-sm leading-snug transition-colors",
      activeId === id
        ? "bg-brand-primary/10 font-medium text-brand-primary"
        : "text-slate-600 hover:bg-slate-100 hover:text-brand-primary"
    );

  const list = (
    <ul className="space-y-1">
      {entries.map((entry) => (
        <li key={entry.id}>
          <a href={`#${entry.id}`} className={linkClass(entry.id)}>
            {entry.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details className="mb-8 rounded-lg border border-slate-200 bg-white p-4 lg:hidden">
        <summary className="cursor-pointer font-heading text-sm font-semibold text-brand-ink">
          On this page
        </summary>
        <nav aria-label="Table of contents" className="mt-3">
          {list}
        </nav>
      </details>

      <nav
        aria-label="Table of contents"
        className="hidden lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
      >
        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-500">
          On this page
        </p>
        <div className="mt-3">{list}</div>
      </nav>
    </>
  );
}
