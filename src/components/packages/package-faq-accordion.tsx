"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqTriggerClass =
  "text-foreground/95 hover:text-brand-cyan data-[state=open]:text-brand-cyan text-lg md:text-xl py-5";

const faqContentClass = "text-foreground/80 text-base md:text-[1.0625rem] leading-relaxed";

export function PackageFaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`}>
            <AccordionTrigger className={faqTriggerClass}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className={faqContentClass}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
