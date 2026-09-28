"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PackageFaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
  variant?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`} className="border-slate-200">
            <AccordionTrigger className="py-5 text-left text-base font-semibold text-brand-ink hover:text-brand-primary data-[state=open]:text-brand-primary md:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-slate-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
