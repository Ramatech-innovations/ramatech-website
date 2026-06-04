"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/seo";

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

export function BookConsultationLink(
  props: Omit<TrackedLinkProps, "eventName" | "href">
) {
  return (
    <TrackedLink
      href="/book-consultation"
      eventName="book_consultation_click"
      {...props}
    />
  );
}

type WhatsAppLinkProps = Omit<
  ComponentProps<"a">,
  "href" | "target" | "rel"
>;

export function WhatsAppLink({ onClick, ...props }: WhatsAppLinkProps) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        trackEvent("whatsapp_click");
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
