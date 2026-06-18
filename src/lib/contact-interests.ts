import { servicePackages } from "@/content/packages";
import { solutions } from "@/content/solutions";

export type ContactInterestOption = {
  slug: string;
  label: string;
  group: "solutions" | "openshift" | "packages";
};

export const contactInterestOptions: ContactInterestOption[] = [
  ...solutions.map((s) => ({
    slug: s.slug,
    label: s.shortTitle,
    group: "solutions" as const,
  })),
  {
    slug: "openshift",
    label: "OpenShift Services",
    group: "openshift",
  },
  ...servicePackages.map((p) => ({
    slug: p.slug,
    label: p.title,
    group: "packages" as const,
  })),
];

export const contactInterestSlugs = new Set(
  contactInterestOptions.map((o) => o.slug)
);
