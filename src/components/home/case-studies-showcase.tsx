"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CaseStudyArchitecture } from "@/components/illustrations/case-study-architecture";
import { caseStudies } from "@/content/case-studies";

export function CaseStudiesShowcase({ limit }: { limit?: number }) {
  const reduce = useReducedMotion();
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="section-gradient py-14 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center md:text-left">
          <p className="type-eyebrow">Case studies</p>
          <h2 className="type-h2-section mt-3">Real architectures. Measurable outcomes.</h2>
        </div>

        <div className="mt-8 space-y-10">
          {items.map((study, i) => (
            <motion.article
              key={study.slug}
              className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#060a12]/80 p-5 md:p-6">
                <p className="type-eyebrow text-[10px]">Architecture</p>
                <CaseStudyArchitecture slug={study.slug} className="mt-3 min-h-[200px] md:min-h-[220px]" />
              </div>

              <div className={i % 2 === 1 ? "lg:pr-6" : "lg:pl-2"}>
                <span className="font-mono text-xs text-muted-foreground">
                  {study.client} · {study.industry}
                </span>
                <h3 className="mt-1 font-heading text-xl font-semibold md:text-2xl">{study.title}</h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="type-eyebrow text-[10px] opacity-90">Problem</p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="type-eyebrow text-[10px] opacity-90">Approach</p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {study.solutionDetail}
                    </p>
                  </div>
                  <div>
                    <p className="type-eyebrow text-[10px] opacity-90">Outcome</p>
                    <ul className="mt-2 flex flex-wrap gap-5">
                      {study.results.map((r) => (
                        <li key={r.label}>
                          <span className="font-mono text-xl font-semibold tabular-nums tracking-tight text-gradient md:text-2xl">
                            {r.metric}
                          </span>
                          <p className="type-metric-label mt-0.5 text-xs">{r.label}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:underline"
                >
                  Read case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-medium text-brand-cyan hover:underline"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
