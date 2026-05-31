import { PageHero } from "@/components/marketing/page-hero";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Ramatech Innovation terms of service.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Placeholder terms for MVP launch. Legal review required before production."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <p className="text-muted-foreground">
          Use of this website is subject to terms to be published by Ramatech Innovation Pvt Ltd
          prior to production launch. For inquiries, contact {siteConfig.email}.
        </p>
      </div>
    </>
  );
}
