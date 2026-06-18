"use client";

import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { CommandCenterSection } from "@/components/home/command-center-section";
import { ServicePackagesSection } from "@/components/home/service-packages-section";
import { EnterpriseKpisSection } from "@/components/home/enterprise-kpis-section";
import { AiAutomationSection } from "@/components/home/ai-automation-section";
import { CaseStudiesShowcase } from "@/components/home/case-studies-showcase";
import { WhyUsSection } from "@/components/home/why-us-section";
import { StackTeaser } from "@/components/home/stack-teaser";
import { HomeResourceHubs } from "@/components/home/home-resource-hubs";
import { IndustriesPillRow } from "@/components/home/industries-pill-row";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { TagMarquee } from "@/components/marketing/tag-marquee";
import { SectionShell } from "@/components/marketing/section-shell";
import { trustTags } from "@/content/site";
import { PAGE_CONTAINER } from "@/lib/layout";

const HOME_PAD = "!py-14 md:!py-20";
const HOME_PAD_COMPACT = "!py-10 md:!py-14";

export function HomePageSections() {
  return (
    <>
      <HeroSection />
      <CommandCenterSection />
      <ServicePackagesSection />
      <EnterpriseKpisSection />
      <AiAutomationSection />
      <CaseStudiesShowcase limit={3} />
      <HomeResourceHubs />

      <SectionShell variant="lightElevated" className="border-y border-slate-200 !py-8 md:!py-10">
        <div className={PAGE_CONTAINER}>
          <p className="mb-3 text-center text-sm font-medium tracking-wide text-muted-foreground lg:text-left">
            Production stack expertise
          </p>
          <TagMarquee tags={[...trustTags]} />
        </div>
      </SectionShell>

      <SectionShell variant="light" className={HOME_PAD}>
        <div className={PAGE_CONTAINER}>
          <SolutionsGrid />
        </div>
      </SectionShell>

      <SectionShell variant="lightElevated" className={HOME_PAD_COMPACT}>
        <div className={PAGE_CONTAINER}>
          <IndustriesPillRow />
        </div>
      </SectionShell>

      <WhyUsSection />

      <SectionShell variant="lightElevated" className={HOME_PAD_COMPACT}>
        <div className={PAGE_CONTAINER}>
          <StackTeaser />
        </div>
      </SectionShell>

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-brand-gradient opacity-95" aria-hidden />
        <div className="noise-overlay absolute inset-0 opacity-20" aria-hidden />
        <div className={`${PAGE_CONTAINER} relative text-center`}>
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
            <BookConsultationLink pageSource="/">Book Consultation</BookConsultationLink>
          </Button>
        </div>
      </section>
    </>
  );
}
