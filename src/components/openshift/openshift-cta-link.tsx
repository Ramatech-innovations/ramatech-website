"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/seo";

export function OpenShiftBookCta({
  analyticsLabel,
  children = "Request a Quote",
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
        trackEvent("openshift_cta_click", {
          label: analyticsLabel,
          cta: "book",
        })
      }
    >
      {children}
    </Link>
  );
}

export function OpenShiftWhatsAppCta({
  analyticsLabel,
  whatsappMessage,
  children = "WhatsApp",
  className,
}: {
  analyticsLabel: string;
  whatsappMessage: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent("openshift_cta_click", {
          label: analyticsLabel,
          cta: "whatsapp",
        })
      }
    >
      {children}
    </a>
  );
}
