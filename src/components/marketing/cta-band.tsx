import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";
import { PAGE_CONTAINER } from "@/lib/layout";

export function CtaBand({
  title = "Ready to discuss your platform?",
  description = "Book a consultation with our engineering team.",
  href = "/book-consultation",
  buttonLabel = "Book Consultation",
}: {
  title?: string;
  description?: string;
  href?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-16">
      <div className="absolute inset-0 bg-brand-gradient/20" aria-hidden />
      <div
        className={`${PAGE_CONTAINER} relative flex flex-col items-center justify-between gap-6 md:flex-row`}
      >
        <div>
          <h2 className="type-h3 md:text-2xl">{title}</h2>
          <p className="type-body-card mt-2">{description}</p>
        </div>
        <Button asChild size="lg" className="glow-cta shrink-0">
          <BookConsultationLink>{buttonLabel}</BookConsultationLink>
        </Button>
      </div>
    </section>
  );
}
