import { Button } from "@/components/ui/button";
import {
  PackageBookCta,
  PackageWhatsAppCta,
} from "@/components/packages/package-cta-link";

export function PackageCtaGroup({
  analyticsLabel,
  whatsappLabel = "WhatsApp Us",
  onDark = false,
}: {
  analyticsLabel: string;
  whatsappLabel?: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg" variant={onDark ? "inverse" : "default"}>
        <PackageBookCta analyticsLabel={analyticsLabel} />
      </Button>
      <Button asChild size="lg" variant={onDark ? "inverseOutline" : "secondary"}>
        <PackageWhatsAppCta analyticsLabel={analyticsLabel}>{whatsappLabel}</PackageWhatsAppCta>
      </Button>
    </div>
  );
}
