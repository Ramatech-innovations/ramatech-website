import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/content/site";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-light">
      <div className="border-b border-slate-200 bg-gradient-to-r from-brand-primary/5 to-brand-cyan/5">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row">
          <div>
            <h2 className="type-h3 text-brand-ink md:text-2xl">
              Start a technical conversation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tell us about your platform, AI initiative, or automation goals.
            </p>
          </div>
          <Button asChild size="lg" className="glow-cta shrink-0">
            <Link href="/book-consultation">Book Consultation</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block leading-none transition-opacity hover:opacity-90"
              aria-label="Ramatech Innovation home"
            >
              <BrandLogo variant="footer" theme="light" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-600">
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-brand-primary">
                {siteConfig.email}
              </Link>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <Link href="/contact" className="hover:text-brand-primary">
                Contact form →
              </Link>
            </p>
          </div>
          <div>
            <h3 className="type-eyebrow mb-4 text-brand-primary">Solutions</h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="type-eyebrow mb-4 text-brand-primary">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="type-eyebrow mb-4 text-brand-primary">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ramatech Innovation Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
