"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { CommandCenterSection } from "@/components/home/command-center-section";
import { EnterpriseKpisSection } from "@/components/home/enterprise-kpis-section";
import { AiAutomationSection } from "@/components/home/ai-automation-section";
import { CaseStudiesShowcase } from "@/components/home/case-studies-showcase";
import { WhyUsSection } from "@/components/home/why-us-section";
import { StackTeaser } from "@/components/home/stack-teaser";
import { IndustriesPillRow } from "@/components/home/industries-pill-row";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { TagMarquee } from "@/components/marketing/tag-marquee";
import { SectionShell } from "@/components/marketing/section-shell";
import { trustTags } from "@/content/site";

const HOME_PAD = "!py-14 md:!py-20";
const HOME_PAD_COMPACT = "!py-10 md:!py-14";

export function HomePageSections() {
  return (
    <>
      <HeroSection />
      <CommandCenterSection />
      <EnterpriseKpisSection />
      <AiAutomationSection />
      <CaseStudiesShowcase limit={2} />

      <SectionShell variant="elevated" className="border-y border-white/5 !py-8 md:!py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="mb-3 text-center text-sm font-medium tracking-wide text-muted-foreground lg:text-left">
            Production stack expertise
          </p>
          <TagMarquee tags={[...trustTags]} />
        </div>
      </SectionShell>

      <SectionShell variant="default" className={HOME_PAD}>
        <div className="container mx-auto max-w-6xl px-4">
          <SolutionsGrid />
        </div>
      </SectionShell>

      <SectionShell variant="elevated" className={HOME_PAD_COMPACT}>
        <div className="container mx-auto max-w-6xl px-4">
          <IndustriesPillRow />
        </div>
      </SectionShell>

      <WhyUsSection />

      <SectionShell variant="elevated" className={HOME_PAD_COMPACT}>
        <div className="container mx-auto max-w-6xl px-4">
          <StackTeaser />
        </div>
      </SectionShell>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" aria-hidden />
        <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden />
        <div className="container relative mx-auto max-w-6xl px-4 text-center">
          <h2 className="type-h2-section text-white md:text-3xl">Ready to build serious technology?</h2>
          <p className="type-body mx-auto mt-4 max-w-xl text-white/90">
            Partner with an AI-powered engineering team trusted by product and platform leaders
            worldwide.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 bg-white text-brand-dark shadow-xl hover:bg-white/90"
          >
            <Link href="/book-consultation">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
