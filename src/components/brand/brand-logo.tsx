import Image from "next/image";
import { cn } from "@/lib/utils";
import { brandAssets, logoImageClass, logoSizes } from "@/lib/brand";

type BrandLogoVariant = "header" | "headerScrolled" | "heroBadge" | "footer" | "credibility" | "watermark";
type BrandLogoTheme = "dark" | "light";

const config: Record<
  BrandLogoVariant,
  { width: number; height: number; className: string; priority?: boolean }
> = {
  header: {
    width: logoSizes.header.width,
    height: logoSizes.header.height,
    className: logoSizes.header.className,
    priority: true,
  },
  headerScrolled: {
    width: logoSizes.header.width,
    height: logoSizes.header.height,
    className: logoSizes.headerScrolled.className,
    priority: true,
  },
  heroBadge: {
    width: logoSizes.heroBadge.width,
    height: logoSizes.heroBadge.height,
    className: logoSizes.heroBadge.className,
    priority: true,
  },
  footer: {
    width: logoSizes.footer.width,
    height: logoSizes.footer.height,
    className: logoSizes.footer.className,
  },
  credibility: {
    width: logoSizes.credibility.width,
    height: logoSizes.credibility.height,
    className: logoSizes.credibility.className,
  },
  watermark: {
    width: logoSizes.watermark.width,
    height: logoSizes.watermark.height,
    className: logoSizes.watermark.className,
  },
};

function srcFor(variant: BrandLogoVariant, theme: BrandLogoTheme) {
  if (variant === "footer") {
    return brandAssets.footerLockup;
  }
  if (theme === "light" && (variant === "header" || variant === "headerScrolled" || variant === "heroBadge")) {
    return brandAssets.iconOnLight;
  }
  if (variant === "credibility" || variant === "watermark") {
    return brandAssets.mark;
  }
  return brandAssets.icon;
}

export function BrandLogo({
  variant = "header",
  theme = "light",
  className,
  alt = "Ramatech Innovation",
  chipOnLight = false,
}: {
  variant?: BrandLogoVariant;
  theme?: BrandLogoTheme;
  className?: string;
  alt?: string;
  /** Subtle white chip behind logo on light backgrounds when asset lacks contrast */
  chipOnLight?: boolean;
}) {
  const c = config[variant];
  const src = srcFor(variant, theme);
  const sizes =
    variant === "footer"
      ? "(max-width: 640px) 256px, 288px"
      : "(max-width: 768px) 120px, 160px";

  const img = (
    <Image
      src={src}
      alt={alt}
      width={c.width}
      height={c.height}
      className={cn(logoImageClass, c.className, className)}
      priority={c.priority}
      style={{ background: "transparent" }}
      sizes={sizes}
    />
  );

  if (chipOnLight && theme === "light") {
    return (
      <span className="inline-flex rounded-xl bg-white p-1.5 shadow-md ring-1 ring-slate-200/80">
        {img}
      </span>
    );
  }

  return img;
}
