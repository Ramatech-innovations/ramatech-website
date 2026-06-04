"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/seo";

export function PackageBookCta({
  analyticsLabel,
  children = "Book Free Consultation",
  className,
}: {
  analyticsLabel: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/book-consultation"
      className={className}
      onClick={() =>
        trackEvent("package_cta_click", {
          label: analyticsLabel,
          cta: "book",
        })
      }
    >
      {children}
    </Link>
  );
}

export function PackageWhatsAppCta({
  analyticsLabel,
  children = "WhatsApp Us",
  className,
}: {
  analyticsLabel: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent("package_cta_click", {
          label: analyticsLabel,
          cta: "whatsapp",
        })
      }
    >
      {children}
    </a>
  );
}
