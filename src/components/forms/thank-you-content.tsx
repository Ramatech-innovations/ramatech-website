"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/analytics/tracked-link";
import { trackEvent } from "@/lib/analytics";

export const PENDING_LEAD_KEY = "rt_pending_lead";

export type PendingLead = {
  leadId: string;
  service: string;
  intent: string;
  page: string;
  lead_source: string;
};

export function ThankYouContent({ children }: { children?: React.ReactNode }) {
  const searchParams = useSearchParams();
  const leadId = searchParams.get("lead");

  useEffect(() => {
    if (!leadId) return;
    try {
      const raw = window.sessionStorage.getItem(PENDING_LEAD_KEY);
      if (!raw) return;
      const pending = JSON.parse(raw) as PendingLead;
      if (pending.leadId !== leadId) return;
      window.sessionStorage.removeItem(PENDING_LEAD_KEY);
      trackEvent("generate_lead", {
        event_category: "lead",
        lead_id: pending.leadId,
        service: pending.service,
        intent: pending.intent,
        page: pending.page,
        lead_source: pending.lead_source,
      });
    } catch {
      // sessionStorage unavailable — skip conversion rather than double count
    }
  }, [leadId]);

  return (
    <div className="card-on-light rounded-xl p-8 md:p-10">
      <h2 className="font-heading text-2xl font-semibold text-brand-cyan">Message received</h2>
      {leadId && (
        <p className="type-caption mt-2 text-muted-foreground">
          Reference: <span className="font-mono">{leadId}</span>
        </p>
      )}
      <ol className="type-body-card mt-6 space-y-3">
        <li>
          <span className="text-brand-cyan">01</span> — We review your message within 4 business
          hours.
        </li>
        <li>
          <span className="text-brand-cyan">02</span> — An engineer replies from
          info@ramatech.co.in to schedule a focused technical call.
        </li>
        <li>
          <span className="text-brand-cyan">03</span> — You get a clear next-step
          recommendation—no obligation.
        </li>
      </ol>
      {children}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <WhatsAppLink
            source="thank_you"
            message={`Hi Ramatech, I just submitted an inquiry${leadId ? ` (${leadId})` : ""}.`}
          >
            Continue on WhatsApp
          </WhatsAppLink>
        </Button>
        <Button asChild variant="outlineLight">
          <Link href="/openshift">OpenShift services</Link>
        </Button>
        <Button asChild variant="outlineLight">
          <Link href="/case-studies">Case studies</Link>
        </Button>
      </div>
    </div>
  );
}
