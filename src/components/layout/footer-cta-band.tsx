"use client";

import {
  BookConsultationLink,
  WhatsAppLink,
} from "@/components/analytics/tracked-link";
import { Button } from "@/components/ui/button";

export function FooterCtaBand() {
  return (
    <div className="flex shrink-0 flex-wrap items-center justify-center gap-4 md:justify-end">
      <Button asChild size="lg" className="glow-cta">
        <BookConsultationLink>Book free consultation</BookConsultationLink>
      </Button>
      <Button asChild size="lg" variant="outline">
        <WhatsAppLink source="footer_cta">Chat on WhatsApp</WhatsAppLink>
      </Button>
    </div>
  );
}
