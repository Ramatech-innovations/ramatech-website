"use client";

import { motion, useReducedMotion } from "framer-motion";
import { businessOutcomes } from "@/content/enterprise";
import { LogoWatermark } from "@/components/brand/logo-watermark";
import { PAGE_CONTAINER } from "@/lib/layout";

export function BusinessOutcomesSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative section-dark py-16 md:py-20">
      <LogoWatermark className="left-[-12%] top-8 rotate-[-12deg]" />
      <div className={`${PAGE_CONTAINER} relative`}>
        <div className="max-w-2xl">
          <p className="type-eyebrow">Outcomes</p>
          <h2 className="type-h2 mt-5">What enterprise leaders measure</h2>
          <p className="type-body-muted mt-5">
            We translate infrastructure into business results—not tool lists.
          </p>
        </div>

        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {businessOutcomes.map((item, i) => (
            <motion.article
              key={item.id}
              className={`group border-t border-white/10 py-10 md:px-8 ${
                i % 2 === 1 ? "md:border-l md:border-white/10" : ""
              } ${i >= 3 ? "lg:border-l lg:border-white/10" : ""}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <span className="type-index">0{i + 1}</span>
              <h3 className="type-h3 mt-4 transition-colors group-hover:text-brand-cyan">
                {item.title}
              </h3>
              <p className="type-body-muted mt-3 max-w-sm">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
