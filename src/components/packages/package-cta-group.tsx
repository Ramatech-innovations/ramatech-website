import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <div className="mt-10 flex flex-wrap gap-4">
      <Button asChild size="lg" className="glow-cta">
        <PackageBookCta analyticsLabel={analyticsLabel} />
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
        <PackageWhatsAppCta analyticsLabel={analyticsLabel}>
          {whatsappLabel}
        </PackageWhatsAppCta>
      </Button>
    </div>
  );
}
