"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";
import { getAttribution, sourceLabel } from "@/lib/attribution";
import { PENDING_LEAD_KEY, type PendingLead } from "@/components/forms/thank-you-content";
import {
  contactInterestOptions,
  contactInterestSlugs,
  type ContactInterestOption,
} from "@/lib/contact-interests";
import { formatContactApiError } from "@/lib/validations";

const roles = [
  "Founder",
  "CTO",
  "VP Engineering",
  "Engineering Manager",
  "Platform / DevOps",
  "Product Leader",
  "Other",
];

const interestGroups: { key: ContactInterestOption["group"]; label: string }[] = [
  { key: "solutions", label: "Solutions" },
  { key: "openshift", label: "OpenShift" },
  { key: "packages", label: "Packages" },
];

export function ContactForm({
  defaultIntent,
  variant = "full",
  presetInterest,
  service,
}: {
  defaultIntent?: string;
  /** "short" hides role and interests; used on ad landing pages */
  variant?: "full" | "short";
  presetInterest?: string;
  service?: string;
}) {
  const isShort = variant === "short";
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    presetInterest ? [presetInterest] : []
  );
  const [sourcePage, setSourcePage] = useState("");

  useEffect(() => {
    const interest = searchParams.get("interest");
    const source = searchParams.get("source");
    if (interest && contactInterestSlugs.has(interest)) {
      setSelectedInterests((prev) =>
        prev.includes(interest) ? prev : [...prev, interest]
      );
    }
    if (source) {
      setSourcePage(source);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (selectedInterests.length === 0) {
      setStatus("error");
      setError("Select at least one area of interest.");
      trackEvent("contact_form_error", { reason: "missing_interests" });
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    if (!isShort && !data.get("role")) {
      setStatus("error");
      setError("Select your role.");
      trackEvent("contact_form_error", { reason: "missing_role" });
      return;
    }

    setStatus("loading");
    const attribution = getAttribution();
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      role: isShort ? undefined : data.get("role"),
      phone: data.get("phone") || undefined,
      interests: selectedInterests,
      message: data.get("message"),
      consent: data.get("consent") === "on",
      website: data.get("website") ?? "",
      intent: defaultIntent ?? data.get("intent") ?? "contact",
      source: sourcePage || (isShort ? pathname : undefined),
      service,
      attribution,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        trackEvent("contact_form_error", {
          reason: "api_validation",
          status: String(res.status),
        });
        throw new Error(formatContactApiError(json.error));
      }
      const intent = String(defaultIntent ?? payload.intent ?? "contact");
      trackEvent("contact_form_submit", {
        intent,
        source: sourcePage || "direct",
      });

      const leadId: string | undefined = json.leadId;
      if (leadId) {
        const pending: PendingLead = {
          leadId,
          service:
            service ??
            contactInterestOptions
              .filter((o) => selectedInterests.includes(o.slug))
              .map((o) => o.label)
              .join(", "),
          intent,
          page: sourcePage || pathname,
          lead_source: sourceLabel(attribution?.last ?? attribution?.first),
        };
        try {
          window.sessionStorage.setItem(PENDING_LEAD_KEY, JSON.stringify(pending));
        } catch {
          // conversion event will be skipped; lead is already delivered
        }
        router.push(`/thank-you?lead=${encodeURIComponent(leadId)}`);
        return;
      }

      setStatus("success");
      form.reset();
      setSelectedInterests([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function toggleInterest(slug: string) {
    setSelectedInterests((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  if (status === "success") {
    return (
      <div className="card-on-light rounded-xl p-8 text-center">
        <h3 className="font-heading text-2xl font-semibold text-brand-cyan">
          Message received
        </h3>
        <p className="mt-4 text-muted-foreground">
          We respond within 4 business hours. Meanwhile, explore our proof and stack.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild variant="outlineLight">
            <Link href="/case-studies">Case studies</Link>
          </Button>
          <Button asChild variant="outlineLight">
            <Link href="/openshift">OpenShift services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      {defaultIntent && <input type="hidden" name="intent" value={defaultIntent} />}
      {sourcePage && <input type="hidden" name="source" value={sourcePage} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" required autoComplete="organization" />
        </div>
        {isShort ? (
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              name="role"
              required
              className="flex h-10 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground"
            >
              <option value="">Select role</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {!isShort && (
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      )}

      {!isShort && (
        <div className="space-y-3">
          <Label>
            Areas of interest <span className="text-red-500">*</span>
          </Label>
          {interestGroups.map((group) => {
            const options = contactInterestOptions.filter((o) => o.group === group.key);
            if (options.length === 0) return null;
            return (
              <div key={group.key}>
                <p className="type-caption mb-2 text-muted-foreground">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => (
                    <label key={option.slug} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="interests"
                        value={option.slug}
                        className="peer sr-only"
                        checked={selectedInterests.includes(option.slug)}
                        onChange={() => toggleInterest(option.slug)}
                      />
                      <span className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm peer-checked:border-brand-cyan peer-checked:bg-brand-cyan/10">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          placeholder={
            isShort
              ? "Current platform, cluster size, and target timeline..."
              : "Describe your platform, timeline, and goals..."
          }
        />
      </div>

      <label className="type-body-card flex items-start gap-3">
        <input type="checkbox" name="consent" required className="mt-1" />
        I agree to be contacted about my inquiry. No spam.
      </label>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
