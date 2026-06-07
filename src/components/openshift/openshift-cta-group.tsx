import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  OpenShiftBookCta,
  OpenShiftWhatsAppCta,
} from "@/components/openshift/openshift-cta-link";

export function OpenShiftCtaGroup({
  analyticsLabel,
  whatsappMessage,
  bookLabel = "Request a Quote",
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
    <div className={cn("flex flex-wrap gap-4", className)}>
      <Button asChild size="lg" className="glow-cta">
        <OpenShiftBookCta analyticsLabel={analyticsLabel}>
          {bookLabel}
        </OpenShiftBookCta>
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
        <OpenShiftWhatsAppCta
          analyticsLabel={analyticsLabel}
          whatsappMessage={whatsappMessage}
        >
          {whatsappLabel}
        </OpenShiftWhatsAppCta>
      </Button>
    </div>
  );
}
