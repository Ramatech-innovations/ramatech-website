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
            <Link href="/" aria-label="Ramatech Innovation home" className="inline-block">
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

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ramatech Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
