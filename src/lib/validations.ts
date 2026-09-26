import { z } from "zod";

const attrString = z.string().max(300).optional();

const touchSchema = z
  .object({
    utm_source: attrString,
    utm_medium: attrString,
    utm_campaign: attrString,
    utm_term: attrString,
    utm_content: attrString,
    gclid: attrString,
    gbraid: attrString,
    wbraid: attrString,
    referrer: attrString,
    landing_page: attrString,
    ts: attrString,
  })
  .optional();

export const attributionSchema = z
  .object({
    first: touchSchema,
    last: touchSchema,
    device: z.string().max(20).optional(),
  })
  .optional();

export const contactApiSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email required"),
  company: z.string().min(2, "Company is required"),
  role: z.string().min(1, "Role is required"),
  interests: z
    .union([z.array(z.string()), z.string()])
    .transform((v) => (Array.isArray(v) ? v : v ? [v] : [])),
  message: z.string().min(10, "Please add more detail (at least 10 characters)"),
  consent: z.boolean(),
  website: z.string().optional(),
  intent: z.string().optional(),
  source: z.string().optional(),
  phone: z.string().optional(),
  attribution: attributionSchema,
});

export type ContactApiData = z.infer<typeof contactApiSchema>;

export function formatContactApiError(error: unknown): string {
  if (typeof error === "string") return error;
  if (!error || typeof error !== "object") return "Submission failed. Please try again.";

  const fieldErrors = error as Record<string, string[] | string | undefined>;
  const messages: string[] = [];

  for (const value of Object.values(fieldErrors)) {
    if (Array.isArray(value)) {
      messages.push(...value.filter(Boolean));
    } else if (typeof value === "string") {
      messages.push(value);
    }
  }

  if (messages.length > 0) return messages.join(" ");
  return "Submission failed. Please check the form and try again.";
}
