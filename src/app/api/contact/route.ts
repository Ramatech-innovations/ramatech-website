import { NextResponse } from "next/server";
import { contactApiSchema } from "@/lib/validations";
import { getContactEmail } from "@/lib/seo";
import { buildAutoReply, buildInternalEmail, generateLeadId } from "@/lib/lead-emails";
import { sendEmail } from "@/lib/resend";
import { storageStatusText, storeLead } from "@/lib/leads-store";

const DELIVERY_FAILED_MESSAGE =
  "We could not deliver your message right now. Please email info@ramatech.co.in or message us on WhatsApp.";

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

    const leadId = generateLeadId();
    const isProduction = process.env.NODE_ENV === "production";

    const stored = await storeLead(data, leadId);
    if (!stored.ok && !stored.skipped) {
      console.error("[contact] sheet store failed", leadId, stored.error);
    }

    if (!process.env.RESEND_API_KEY) {
      if (stored.ok) return NextResponse.json({ success: true, leadId });
      if (isProduction) {
        console.error("[contact] RESEND_API_KEY not configured and sheet unavailable", leadId);
        return NextResponse.json({ error: DELIVERY_FAILED_MESSAGE }, { status: 503 });
      }
      console.info("[contact] dev mode — email not sent:", {
        leadId,
        name: data.name,
        email: data.email,
        company: data.company,
        interests: data.interests,
        attribution: data.attribution,
      });
      return NextResponse.json({ success: true, leadId });
    }

    const internal = buildInternalEmail(data, leadId, storageStatusText(stored));
    const emailResult = await sendEmail({
      from: process.env.RESEND_FROM_EMAIL ?? "Ramatech Website <onboarding@resend.dev>",
      to: [getContactEmail()],
      subject: internal.subject,
      text: internal.text,
      replyTo: data.email,
    });

    if (!emailResult.ok) {
      console.error("[contact] internal email failed", leadId, emailResult.error);
      if (!stored.ok) {
        return NextResponse.json({ error: DELIVERY_FAILED_MESSAGE }, { status: 500 });
      }
    }

    if (process.env.AUTOREPLY_ENABLED === "true") {
      const reply = buildAutoReply(data, leadId);
      const replyResult = await sendEmail({
        from: process.env.AUTOREPLY_FROM_EMAIL ?? `Ramatech Innovation <${getContactEmail()}>`,
        to: [data.email],
        subject: reply.subject,
        text: reply.text,
        html: reply.html,
        replyTo: getContactEmail(),
      });
      if (!replyResult.ok) {
        console.error("[contact] auto-reply failed", leadId, replyResult.error);
      }
    }

    return NextResponse.json({ success: true, leadId });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
