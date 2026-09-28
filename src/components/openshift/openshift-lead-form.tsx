import { Suspense } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { PackageSection } from "@/components/packages/package-section";

const LEAD_FORM_SERVICES: Record<string, { service: string; title: string }> = {
  "installation-services": {
    service: "OpenShift Installation",
    title: "Get a scoped installation quote",
  },
  "migration-services": {
    service: "OpenShift Migration",
    title: "Get a scoped migration quote",
  },
};

export function OpenShiftLeadForm({ slug }: { slug: string }) {
  const config = LEAD_FORM_SERVICES[slug];
  if (!config) return null;
  const { service, title } = config;

  return (
    <PackageSection title={title} variant="light">
      <div id="quote" className="grid gap-10 lg:grid-cols-5">
        <div className="type-body-card space-y-4 lg:col-span-2">
          <p>
            Tell us about your current platform and timeline. An engineer reviews every request and
            replies within one business day (Mon–Sat, 10:00–19:00 IST).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Scope, approach, and timeline tailored to your environment</li>
            <li>Remote delivery, on-site when needed</li>
            <li>You keep your own Red Hat subscriptions; we deliver the engineering</li>
            <li>No obligation</li>
          </ul>
        </div>
        <div className="card-on-light rounded-xl p-6 md:p-8 lg:col-span-3">
          <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-slate-100" />}>
            <ContactForm
              variant="short"
              presetInterest="openshift"
              service={service}
              defaultIntent="quote"
            />
          </Suspense>
        </div>
      </div>
    </PackageSection>
  );
}
