import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email required"),
  company: z.string().min(2, "Company is required"),
  role: z.string().min(1, "Role is required"),
  interests: z.array(z.string()).min(1, "Select at least one area"),
  message: z.string().min(10, "Please add more detail"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
