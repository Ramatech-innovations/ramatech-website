"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl, siteConfig } from "@/lib/seo";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, string>;
};

export function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(eventName, eventParams);
        onClick?.(e);
      }}
    />
  );
}

type BookConsultationLinkProps = Omit<TrackedLinkProps, "eventName" | "href"> & {
  pageSource?: string;
  interest?: string;
};

export function BookConsultationLink({
  pageSource,
  interest,
  eventParams,
  ...props
}: BookConsultationLinkProps) {
  const params = new URLSearchParams();
  if (pageSource) params.set("source", pageSource);
  if (interest) params.set("interest", interest);
  const qs = params.toString();
  const href = `/book-consultation${qs ? `?${qs}` : ""}`;

  return (
    <TrackedLink
      href={href}
      eventName="book_consultation_click"
      eventParams={{
        ...eventParams,
        ...(pageSource ? { page_source: pageSource } : {}),
        ...(interest ? { interest } : {}),
      }}
      {...props}
    />
  );
}

type WhatsAppLinkProps = Omit<ComponentProps<"a">, "href" | "target" | "rel"> & {
  source?: string;
  message?: string;
};

export function WhatsAppLink({ onClick, source = "footer", message, ...props }: WhatsAppLinkProps) {
  const href = message ? buildWhatsAppUrl(message) : siteConfig.whatsappUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        trackEvent("whatsapp_click", { source });
        onClick?.(e);
      }}
    />
  );
}

export function ExploreSolutionsLink(
  props: Omit<TrackedLinkProps, "eventName" | "href">
) {
  return (
    <TrackedLink
      href="/solutions"
      eventName="explore_solutions_click"
      {...props}
    />
  );
}
