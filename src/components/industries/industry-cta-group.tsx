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
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild size="lg" variant={onDark ? "inverse" : "default"}>
        <IndustryBookCta analyticsLabel={analyticsLabel}>{bookLabel}</IndustryBookCta>
      </Button>
      <Button asChild size="lg" variant={onDark ? "inverseOutline" : "secondary"}>
        <IndustryWhatsAppCta analyticsLabel={analyticsLabel} whatsappMessage={whatsappMessage}>
          {whatsappLabel}
        </IndustryWhatsAppCta>
      </Button>
    </div>
  );
}
