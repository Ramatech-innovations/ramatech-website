"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";

export function BookingLink({
  label = "Book a 30-min call",
  variant = "secondary",
  className,
}: {
  label?: string;
  variant?: "default" | "secondary";
  className?: string;
}) {
  const pathname = usePathname();
  if (!BOOKING_URL) return null;

  return (
    <Button asChild variant={variant} className={className}>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("booking_link_click", { page: pathname })}
      >
        {label}
      </a>
    </Button>
  );
}
