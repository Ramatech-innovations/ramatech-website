import Link from "next/link";
import { Check } from "lucide-react";
import { BookConsultationLink, WhatsAppLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Breadcrumbs } from "@/components/marketing/breadcrumbs";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { RelatedResources, linksToResources } from "@/components/marketing/related-resources";
import { PackageSection } from "@/components/packages/package-section";
import { PackageFaqAccordion } from "@/components/packages/package-faq-accordion";
import { CaseStudyCards } from "@/components/case-studies/case-study-cards";
import { FaqSchema } from "@/components/seo/FaqSchema";
import type { Solution } from "@/content/solutions";

type Block = { title: string; content: React.ReactNode };

function whatWeDoBlock(solution: Solution): Block {
  return {
    title: "What we do",
    content: (
      <>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solution.whatWeDo.map((item) => (
            <li key={item.title} className="card-on-light p-6">
              <h3 className="font-heading text-lg font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        {solution.whatWeDoNote && (
          <p className="mt-6 text-sm text-slate-600">
            {solution.whatWeDoNote.text}{" "}
            <Link
              href={solution.whatWeDoNote.link.href}
              className="font-medium text-brand-primary hover:underline"
            >
              {solution.whatWeDoNote.link.label}
            </Link>
            .
          </p>
        )}
      </>
    ),
  };
}

function capabilityBlock(block: NonNullable<Solution["capabilityBlock"]>): Block {
  return {
    title: block.title,
    content: (
      <>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {block.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-base text-slate-700">
              <Check className="h-4 w-4 shrink-0 text-brand-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-slate-600">{block.note}</p>
      </>
    ),
  };
}

function engagementBlock(solution: Solution): Block {
  return {
    title: "How an engagement runs",
    content: (
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solution.engagement.map((step, i) => (
          <li key={step.title} className="border-t-2 border-brand-primary pt-4">
            <span className="font-mono text-sm text-slate-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 font-heading text-lg font-semibold text-brand-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </li>
        ))}
      </ol>
    ),
  };
}

function technologiesBlock(solution: Solution): Block {
  return {
    title: "Technologies",
    content: (
      <>
        <ul className="flex flex-wrap gap-2">
          {solution.technologies.map((tech) => (
            <li key={tech.name}>
              {tech.href ? (
                <Link
                  href={tech.href}
                  className="inline-block rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-brand-primary hover:border-brand-primary"
                >
                  {tech.name}
                </Link>
              ) : (
                <span className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                  {tech.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        {solution.openshiftLinks.length > 0 && (
          <div className="mt-10">
            <RelatedResources
              heading="Related OpenShift services"
              resources={linksToResources(solution.openshiftLinks, "service")}
            />
          </div>
        )}
      </>
    ),
  };
}

export function SolutionDetail({ solution }: { solution: Solution }) {
  const pageSource = `/solutions/${solution.slug}`;

  const blocks: Block[] = [
    whatWeDoBlock(solution),
    ...(solution.capabilityBlock ? [capabilityBlock(solution.capabilityBlock)] : []),
    engagementBlock(solution),
    ...(solution.relatedCaseStudies.length > 0
      ? [
          {
            title: "Related case studies",
            content: <CaseStudyCards slugs={solution.relatedCaseStudies} />,
          },
        ]
      : []),
    technologiesBlock(solution),
    { title: "Frequently asked questions", content: <PackageFaqAccordion faqs={solution.faqs} /> },
  ];

  return (
    <>
      <FaqSchema faqs={solution.faqs} />
      <PageHero
        eyebrow={solution.slug === "ai-solutions" ? "AI" : "Services"}
        title={solution.title}
        description={solution.description}
        breadcrumbs={
          <Breadcrumbs items={[{ name: "Services", href: "/solutions" }, { name: solution.title }]} />
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <BookConsultationLink pageSource={pageSource} interest={solution.slug}>
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <WhatsAppLink source={pageSource}>WhatsApp</WhatsAppLink>
          </Button>
        </div>
      </PageHero>

      {blocks.map((block, i) => (
        <PackageSection key={block.title} title={block.title} variant={i % 2 === 0 ? "dark" : "light"}>
          {block.content}
        </PackageSection>
      ))}

      <ClosingCta headline={`Talk to an engineer about ${solution.title}`}>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="inverse">
            <BookConsultationLink pageSource={pageSource} interest={solution.slug}>
              Book Consultation
            </BookConsultationLink>
          </Button>
          <Button asChild size="lg" variant="inverseOutline">
            <WhatsAppLink source={pageSource}>WhatsApp</WhatsAppLink>
          </Button>
        </div>
      </ClosingCta>
    </>
  );
}
