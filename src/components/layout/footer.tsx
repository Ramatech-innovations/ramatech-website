import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { contactDetails, footerColumns } from "@/content/site";
import { PAGE_CONTAINER } from "@/lib/layout";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="section-dark border-t border-white/10">
      <div className={`${PAGE_CONTAINER} py-14`}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <BrandLogo tone="dark" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              OpenShift platforms and production AI, plus cloud, DevOps, and automation.
              Engineering for platform teams in India and worldwide.
            </p>
            <address className="mt-6 space-y-2 text-sm not-italic text-slate-300">
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp {contactDetails.whatsappDisplay}
                </a>
              </p>
              <p className="text-slate-400">{contactDetails.hours}</p>
            </address>
            <ul className="mt-5 flex gap-3" aria-label="Ramatech Innovation on social media">
              <li>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ramatech Innovation on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ramatech Innovation on X"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-white">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Ramatech Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
