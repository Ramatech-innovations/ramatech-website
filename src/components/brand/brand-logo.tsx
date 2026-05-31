import Image from "next/image";
import { cn } from "@/lib/utils";
import { brandAssets, logoSizes } from "@/lib/brand";

type BrandLogoVariant = "header" | "headerScrolled" | "heroBadge" | "footer" | "credibility" | "watermark";

const config: Record<
  BrandLogoVariant,
  { src: string; width: number; height: number; className: string; priority?: boolean }
> = {
  header: {
    src: brandAssets.icon,
    width: logoSizes.header.width,
    height: logoSizes.header.height,
    className: logoSizes.header.className,
    priority: true,
  },
  headerScrolled: {
    src: brandAssets.icon,
    width: logoSizes.header.width,
    height: logoSizes.header.height,
    className: logoSizes.headerScrolled.className,
    priority: true,
  },
  heroBadge: {
    src: brandAssets.icon,
    width: logoSizes.heroBadge.width,
    height: logoSizes.heroBadge.height,
    className: logoSizes.heroBadge.className,
    priority: true,
  },
  footer: {
    src: brandAssets.icon,
    width: logoSizes.footer.width,
    height: logoSizes.footer.height,
    className: logoSizes.footer.className,
  },
  credibility: {
    src: brandAssets.mark,
    width: logoSizes.credibility.width,
    height: logoSizes.credibility.height,
    className: logoSizes.credibility.className,
  },
  watermark: {
    src: brandAssets.mark,
    width: logoSizes.watermark.width,
    height: logoSizes.watermark.height,
    className: logoSizes.watermark.className,
  },
};

export function BrandLogo({
  variant = "header",
  className,
  alt = "Ramatech Innovation",
}: {
  variant?: BrandLogoVariant;
  className?: string;
  alt?: string;
}) {
  const c = config[variant];
  return (
    <Image
      src={c.src}
      alt={alt}
      width={c.width}
      height={c.height}
      className={cn(c.className, className)}
      priority={c.priority}
      style={{ background: "transparent" }}
    />
  );
}
