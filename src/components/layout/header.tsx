"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";
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
      <div className="hidden border-b border-white/5 bg-brand-primary/40 md:block">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[12px] text-muted-foreground">
          <span className="tracking-wide">Engineering intelligent systems at scale</span>
          <Link
            href="/contact"
            className="font-medium tracking-wide transition-colors hover:text-brand-cyan"
          >
            hello@ramatech.co.in
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-brand-dark/95 backdrop-blur-xl shadow-lg shadow-black/25 h-14"
            : "border-white/5 bg-brand-dark/80 backdrop-blur-xl h-16"
        )}
      >
        <div className="container mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-md p-1 transition-opacity hover:opacity-90"
            aria-label="Ramatech Innovation home"
          >
            <BrandLogo
              variant={scrolled ? "headerScrolled" : "header"}
              className="drop-shadow-[0_0_14px_rgba(17,211,232,0.4)] transition-all"
            />
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
                      "type-nav flex items-center gap-1",
                      solutionsActive && "type-nav-active"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
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
                        <div className="glass-panel-xl min-w-[300px] rounded-xl p-2 shadow-2xl shadow-brand-cyan/10">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 font-heading text-[13px] font-medium tracking-wide transition-colors",
                                navIsActive(pathname, child.href)
                                  ? "bg-white/5 text-brand-cyan"
                                  : "text-foreground/65 hover:bg-white/5 hover:text-foreground"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            href="/solutions"
                            className="type-nav-active mt-1 block rounded-lg border-t border-white/10 px-3 py-2.5"
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
                    "type-nav",
                    navIsActive(pathname, link.href) && "type-nav-active"
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
            className="text-foreground lg:hidden"
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
            className="border-b border-white/10 bg-brand-dark/98 backdrop-blur-xl lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) =>
                "children" in link ? (
                  <div key={link.label} className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase text-muted-foreground">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 pl-2 text-sm text-foreground"
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
                    className="py-2 text-sm text-foreground"
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
