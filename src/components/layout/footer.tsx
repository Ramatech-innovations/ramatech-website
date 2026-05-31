import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/content/site";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0f1a]">
      <div className="border-b border-white/5 bg-brand-gradient/10">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row">
          <div>
            <h2 className="type-h3 md:text-2xl">
              Start a technical conversation
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your platform, AI initiative, or automation goals.
            </p>
          </div>
          <Button asChild size="lg" className="glow-cta shrink-0">
            <Link href="/book-consultation">Book Consultation</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" className="drop-shadow-[0_0_12px_rgba(17,211,232,0.35)]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <Link href="mailto:hello@ramatech.co.in" className="hover:text-brand-cyan">
                hello@ramatech.co.in
              </Link>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <Link href="/contact" className="hover:text-brand-cyan">
                Contact form →
              </Link>
            </p>
          </div>
          <div>
            <h3 className="type-eyebrow mb-4 text-foreground">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="type-eyebrow mb-4 text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="type-eyebrow mb-4 text-foreground">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ramatech Innovation Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
