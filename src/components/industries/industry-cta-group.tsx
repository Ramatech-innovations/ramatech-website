import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IndustryBookCta,
  IndustryWhatsAppCta,
} from "@/components/industries/industry-cta-link";

export function IndustryCtaGroup({
  analyticsLabel,
  whatsappMessage,
  bookLabel = "Book Free Consultation",
  whatsappLabel = "Chat on WhatsApp",
  onDark = false,
  className,
}: {
  analyticsLabel: string;
  whatsappMessage: string;
  bookLabel?: string;
  whatsappLabel?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      <Button asChild size="lg" className="glow-cta">
        <IndustryBookCta analyticsLabel={analyticsLabel}>
          {bookLabel}
        </IndustryBookCta>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          onDark &&
            "border-white/30 text-white hover:bg-white/10 hover:text-white"
        )}
      >
        <IndustryWhatsAppCta
          analyticsLabel={analyticsLabel}
          whatsappMessage={whatsappMessage}
        >
          {whatsappLabel}
        </IndustryWhatsAppCta>
      </Button>
    </div>
  );
}
