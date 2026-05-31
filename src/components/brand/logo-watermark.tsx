import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/brand-logo";

export function LogoWatermark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none opacity-[0.05]",
        className
      )}
      aria-hidden
    >
      <BrandLogo variant="watermark" alt="" />
    </div>
  );
}
