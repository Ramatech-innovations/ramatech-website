import { PageHero } from "@/components/marketing/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Ramatech Innovation privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Placeholder policy for MVP launch. Legal review required before production."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16 prose prose-invert">
        <p className="text-muted-foreground">
          Ramatech Innovation Pvt Ltd respects your privacy. Contact form data is used only to
          respond to your inquiry. Full policy text to be supplied by legal team prior to
          production cutover.
        </p>
      </div>
    </>
  );
}
