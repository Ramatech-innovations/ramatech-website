import { z } from "zod";

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
