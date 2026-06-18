import { NextResponse } from "next/server";
import { contactApiSchema } from "@/lib/validations";
import { getContactEmail } from "@/lib/seo";

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

    const parsed = contactApiSchema.safeParse({
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
      return NextResponse.json({ error: { consent: ["Consent is required"] } }, { status: 400 });
    }
    if (data.interests.length === 0) {
      return NextResponse.json(
        { error: { interests: ["Select at least one area of interest"] } },
        { status: 400 }
      );
    }

    const contactEmail = getContactEmail();
    const resendKey = process.env.RESEND_API_KEY;
    const isProduction = process.env.NODE_ENV === "production";

    if (!resendKey || !contactEmail) {
      if (isProduction) {
        console.error("[contact] RESEND_API_KEY or CONTACT_EMAIL not configured");
        return NextResponse.json(
          { error: "Lead delivery is temporarily unavailable. Please email info@ramatech.co.in or use WhatsApp." },
          { status: 503 }
        );
      }
      console.info("[contact] dev mode — email not sent:", {
        name: data.name,
        email: data.email,
        company: data.company,
        interests: data.interests,
        source: data.source,
      });
      return NextResponse.json({ success: true });
    }

    const emailBody = `
New ${data.intent ?? "contact"} inquiry from Ramatech Website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role}
${data.phone ? `Phone: ${data.phone}` : ""}
Interests: ${data.interests.join(", ")}
${data.source ? `Source page: ${data.source}` : ""}

Message:
${data.message}
`.trim();

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

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
