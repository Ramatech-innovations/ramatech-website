"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { solutions } from "@/content/solutions";

const roles = [
  "Founder",
  "CTO",
  "VP Engineering",
  "Engineering Manager",
  "Platform / DevOps",
  "Product Leader",
  "Other",
];

export function ContactForm({ defaultIntent }: { defaultIntent?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      role: data.get("role"),
      interests: selectedInterests,
      message: data.get("message"),
      consent: data.get("consent") === "on",
      website: data.get("website") ?? "",
      intent: defaultIntent ?? data.get("intent") ?? "contact",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed");
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
      <div className="glass-panel rounded-xl p-8 text-center">
        <h3 className="font-heading text-2xl font-semibold text-brand-cyan">
          Message received
        </h3>
        <p className="mt-4 text-muted-foreground">
          We respond within 4 business hours. Meanwhile, explore our proof and stack.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/case-studies">Case studies</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/technology">Technology</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      {defaultIntent && <input type="hidden" name="intent" value={defaultIntent} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <select
            id="role"
            name="role"
            required
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-sm text-foreground"
          >
            <option value="">Select role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Areas of interest</Label>
        <div className="flex flex-wrap gap-2">
          {solutions.map((s) => (
            <label key={s.slug} className="cursor-pointer">
              <input
                type="checkbox"
                name="interests"
                value={s.slug}
                className="peer sr-only"
                checked={selectedInterests.includes(s.slug)}
                onChange={() => toggleInterest(s.slug)}
              />
              <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs peer-checked:border-brand-cyan peer-checked:bg-brand-cyan/10">
                {s.shortTitle}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Describe your platform, timeline, and goals..."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" name="consent" required className="mt-1" />
        I agree to be contacted about my inquiry. No spam.
      </label>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
