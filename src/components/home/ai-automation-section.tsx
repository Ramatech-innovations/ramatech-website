"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AiAutomationBackground } from "@/components/ai-automation/ai-automation-background";
import { AiSystemCard } from "@/components/ai-automation/ai-system-card";
import { aiAutomationShowcaseHome } from "@/content/enterprise";

export function AiAutomationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section-dark py-16 md:py-20"
    >
      <AiAutomationBackground active={inView} />
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="type-eyebrow">AI automation</p>
            <h2 className="type-h2 mt-5">Intelligence embedded in operations</h2>
            <p className="type-body-muted mt-5">
              Production agents and workflows—not demos. Governed, observable, and owned by your
              engineering team.
            </p>
          </div>
          <Link
            href="/solutions/ai-solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
          >
            Explore AI Solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {aiAutomationShowcaseHome.map((card, i) => (
            <AiSystemCard key={card.id} card={card} index={i} sectionActive={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
