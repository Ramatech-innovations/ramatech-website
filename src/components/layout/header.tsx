"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

function navIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const solutionsActive = pathname.startsWith("/solutions");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-slate-200 bg-slate-50 md:block">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[12px] text-slate-600">
          <span className="tracking-wide">Engineering intelligent systems at scale</span>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="font-medium tracking-wide text-brand-primary transition-colors hover:text-brand-cyan"
          >
            {siteConfig.email}
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "h-14 border-slate-200 bg-white/90 shadow-md shadow-slate-200/40 backdrop-blur-xl"
            : "h-16 border-slate-200/80 bg-white/70 backdrop-blur-xl"
        )}
      >
        <div className="container mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="flex shrink-0 items-center py-0.5 pr-1 transition-opacity hover:opacity-90"
            aria-label="Ramatech Innovation home"
          >
            <BrandLogo variant={scrolled ? "headerScrolled" : "header"} theme="light" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              "children" in link ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 font-nav text-[13px] font-semibold tracking-nav text-slate-600 transition-colors hover:text-brand-primary",
                      solutionsActive && "text-brand-primary"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "inline h-4 w-4 transition-transform duration-200",
                        solutionsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        className="absolute left-0 top-full pt-2"
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="glass-panel-xl-light min-w-[300px] rounded-xl p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 font-heading text-[13px] font-medium tracking-wide transition-colors",
                                navIsActive(pathname, child.href)
                                  ? "bg-brand-cyan/10 text-brand-primary"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            href="/solutions"
                            className="mt-1 block rounded-lg border-t border-slate-200 px-3 py-2.5 font-heading text-[13px] font-semibold text-brand-primary"
                          >
                            View all solutions
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-nav text-[13px] font-semibold tracking-nav text-slate-600 transition-colors hover:text-brand-primary",
                    navIsActive(pathname, link.href) && "text-brand-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm" className="glow-cta">
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            className="text-brand-primary lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-b border-slate-200 bg-white/98 backdrop-blur-xl lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) =>
                "children" in link ? (
                  <div key={link.label} className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase text-slate-500">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 pl-2 text-sm text-slate-700"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-sm text-slate-700"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button asChild className="mt-2 glow-cta">
                <Link href="/book-consultation" onClick={() => setOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
