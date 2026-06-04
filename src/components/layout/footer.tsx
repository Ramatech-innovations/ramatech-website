import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { FooterCtaBand } from "@/components/layout/footer-cta-band";
import { footerLinks } from "@/content/site";
import { PAGE_CONTAINER } from "@/lib/layout";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-light">
      <div className="border-b border-slate-200 bg-gradient-to-r from-brand-primary/5 to-brand-cyan/5">
        <div
          className={`${PAGE_CONTAINER} flex flex-col items-center justify-between gap-6 py-12 md:flex-row`}
        >
          <div className="text-center md:text-left">
            <h2 className="type-h3 text-brand-ink md:text-2xl">
              Ready to build what&apos;s next?
            </h2>
            <p className="type-body-card mt-2 max-w-xl">
              Share your goals in a 30-minute call — websites, AI automation, or
              custom systems.
            </p>
          </div>
          <FooterCtaBand />
        </div>
      </div>

      <div className={`${PAGE_CONTAINER} py-12 md:py-14`}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block leading-none transition-opacity hover:opacity-90"
              aria-label="Ramatech Innovation home"
            >
              <BrandLogo variant="footer" theme="light" />
            </Link>
            <p className="type-body-card mt-4 max-w-sm">
              {siteConfig.tagline}
            </p>
            <p className="type-body-card mt-4">
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-brand-primary">
                {siteConfig.email}
              </Link>
            </p>
            <p className="type-body-card mt-2">
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
                    className="type-body-card transition-colors hover:text-brand-primary"
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
                    className="type-body-card transition-colors hover:text-brand-primary"
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
                    className="type-body-card transition-colors hover:text-brand-primary"
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
