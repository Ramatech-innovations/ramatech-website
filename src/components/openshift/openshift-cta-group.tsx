import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  OpenShiftBookCta,
  OpenShiftWhatsAppCta,
} from "@/components/openshift/openshift-cta-link";

export function OpenShiftCtaGroup({
  analyticsLabel,
  whatsappMessage,
  bookLabel = "Book Consultation",
  whatsappLabel = "WhatsApp",
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
        <OpenShiftBookCta analyticsLabel={analyticsLabel}>{bookLabel}</OpenShiftBookCta>
      </Button>
      <Button asChild size="lg" variant={onDark ? "inverseOutline" : "secondary"}>
        <OpenShiftWhatsAppCta analyticsLabel={analyticsLabel} whatsappMessage={whatsappMessage}>
          {whatsappLabel}
        </OpenShiftWhatsAppCta>
      </Button>
    </div>
  );
}
