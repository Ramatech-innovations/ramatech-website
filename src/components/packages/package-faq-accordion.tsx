"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

const triggerByVariant = {
  light:
    "text-foreground/95 hover:text-brand-cyan data-[state=open]:text-brand-cyan text-lg md:text-xl py-5",
  dark: "text-white/95 hover:text-brand-cyan data-[state=open]:text-brand-cyan text-lg md:text-xl py-5",
};

const contentByVariant = {
  light: "text-foreground/80 text-base md:text-[1.0625rem] leading-relaxed",
  dark: "text-slate-300 text-base md:text-[1.0625rem] leading-relaxed",
};

export function PackageFaqAccordion({
  faqs,
  variant = "light",
}: {
  faqs: { question: string; answer: string }[];
  variant?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`}>
            <AccordionTrigger className={cn(triggerByVariant[variant])}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className={cn(contentByVariant[variant])}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
