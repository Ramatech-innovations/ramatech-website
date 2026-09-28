"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { BookConsultationLink } from "@/components/analytics/tracked-link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { navLinks, type NavItem } from "@/content/site";
import { PAGE_CONTAINER } from "@/lib/layout";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemIsActive(pathname: string, item: NavItem) {
  if (isActive(pathname, item.href)) return true;
  return item.children?.some((c) => isActive(pathname, c.href)) ?? false;
}

function DesktopDropdown({
  item,
  pathname,
  open,
  onOpenChange,
}: {
  item: NavItem;
  pathname: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const children = item.children ?? [];
  const wide = children.length > 5;

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => onOpenChange(!open)}
        className={cn(
          "flex items-center gap-1 py-2 font-nav text-sm font-semibold text-slate-700 transition-colors hover:text-brand-primary",
          itemIsActive(pathname, item) && "text-brand-primary"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-150", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div
            className={cn(
              "rounded-lg border border-slate-200 bg-white p-2 shadow-lg",
              wide ? "grid w-[34rem] grid-cols-2 gap-x-2" : "w-72"
            )}
          >
            {children.map((child) => (
              <Link
                key={child.href + child.label}
                href={child.href}
                onClick={() => onOpenChange(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 transition-colors hover:bg-slate-50",
                  isActive(pathname, child.href) && "bg-slate-50"
                )}
              >
                <span className="block text-sm font-semibold text-brand-ink">{child.label}</span>
                {child.description && (
                  <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
            {item.viewAll && (
              <Link
                href={item.viewAll.href}
                onClick={() => onOpenChange(false)}
                className={cn(
                  "mt-1 block rounded-md border-t border-slate-100 px-3 py-2.5 text-sm font-semibold text-brand-primary hover:bg-slate-50",
                  wide && "col-span-2"
                )}
              >
                {item.viewAll.label} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className={`${PAGE_CONTAINER} flex h-16 items-center justify-between gap-6`}>
        <Link href="/" className="flex shrink-0 items-center" aria-label="Ramatech Innovation home">
          <BrandLogo />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item}
                pathname={pathname}
                open={openMenu === item.label}
                onOpenChange={(o) => setOpenMenu(o ? item.label : null)}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2 font-nav text-sm font-semibold text-slate-700 transition-colors hover:text-brand-primary",
                  isActive(pathname, item.href) && "text-brand-primary"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <BookConsultationLink>Book Consultation</BookConsultationLink>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-brand-ink lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
        >
          <nav className={`${PAGE_CONTAINER} flex flex-col py-3`} aria-label="Mobile">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-slate-100">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-brand-ink"
                    aria-expanded={mobileSection === item.label}
                    onClick={() =>
                      setMobileSection(mobileSection === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-slate-500 transition-transform",
                        mobileSection === item.label && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                  {mobileSection === item.label && (
                    <ul className="pb-3">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block py-2 pl-3 text-[0.9375rem] text-slate-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      {item.viewAll && (
                        <li>
                          <Link
                            href={item.viewAll.href}
                            className="block py-2 pl-3 text-[0.9375rem] font-semibold text-brand-primary"
                          >
                            {item.viewAll.label}
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-slate-100 py-3 text-base font-semibold text-brand-ink"
                >
                  {item.label}
                </Link>
              )
            )}
            <Button asChild className="mt-4">
              <BookConsultationLink>Book Consultation</BookConsultationLink>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
