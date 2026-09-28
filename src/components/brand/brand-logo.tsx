import Image from "next/image";
import { cn } from "@/lib/utils";
import { brandAssets } from "@/lib/brand";

/**
 * Icon mark with a typed wordmark. The public name is "Ramatech Innovation" only
 * (DEC-2026-001), so image lockups that include other legal suffixes are not used.
 */
export function BrandLogo({
  tone = "light",
  size = "md",
  className,
}: {
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
}) {
  const iconSize = size === "lg" ? 44 : 36;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={brandAssets.icon}
        alt=""
        width={iconSize}
        height={iconSize}
        priority
        className="h-auto shrink-0 select-none"
        style={{ width: iconSize }}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-bold tracking-[0.02em]",
            size === "lg" ? "text-xl" : "text-lg",
            tone === "light" ? "text-brand-ink" : "text-white"
          )}
        >
          RAMATECH
        </span>
        <span
          className={cn(
            "mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-slate-500" : "text-slate-400"
          )}
        >
          Innovation
        </span>
      </span>
    </span>
  );
}
