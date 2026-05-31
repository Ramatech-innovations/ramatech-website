import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  role: z.string().min(1),
  interests: z.union([z.array(z.string()), z.string()]).transform((v) =>
    Array.isArray(v) ? v : v ? [v] : []
  ),
  message: z.string().min(10),
  consent: z.boolean(),
  website: z.string().optional(),
  intent: z.string().optional(),
});

const rateLimit = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactSchema.safeParse({
      ...body,
      consent: body.consent === true || body.consent === "on",
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;
    if (!data.consent) {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }
    if (data.interests.length === 0) {
      return NextResponse.json({ error: "Select at least one area" }, { status: 400 });
    }

    const emailBody = `
New ${data.intent ?? "contact"} inquiry from Ramatech Website v2

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role}
Interests: ${data.interests.join(", ")}

Message:
${data.message}
`.trim();

    const contactEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && contactEmail) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL ?? "Ramatech Website <onboarding@resend.dev>",
          to: [contactEmail],
          subject: `[Ramatech] ${data.intent === "consultation" ? "Consultation" : "Contact"}: ${data.company}`,
          text: emailBody,
        }),
      });
      if (!res.ok) {
        console.error("Resend error", await res.text());
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      console.info("[contact]", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
