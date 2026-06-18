"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { OpenShiftCtaGroup } from "@/components/openshift/openshift-cta-group";
import { openshiftHub } from "@/content/openshift/hub";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "openshift_sticky_bar_dismissed";

export function OpenShiftStickyEngineerBar() {
  const [dismissed, setDismissed] = useState(false);
  const [footerCtaVisible, setFooterCtaVisible] = useState(false);
  const [scrollUpPeek, setScrollUpPeek] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    const footer = document.getElementById("openshift-footer-cta");
    if (!footer) return;

    const io = new IntersectionObserver(
      ([entry]) => setFooterCtaVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    if (y < lastScrollY.current - 8) {
      setScrollUpPeek(true);
    } else if (y > lastScrollY.current + 8) {
      setScrollUpPeek(false);
    }
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const dismiss = () => {
    setDismissed(true);
    setScrollUpPeek(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const visible = !footerCtaVisible && (!dismissed || scrollUpPeek);

  return (
    <div
      role="complementary"
      aria-label="Talk to an OpenShift Engineer"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-dark/95 backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <p className="font-heading text-sm font-semibold text-white sm:text-base">
          Talk to an OpenShift Engineer
        </p>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-2 sm:gap-3">
          <OpenShiftCtaGroup
            analyticsLabel="openshift_sticky_bar"
            whatsappMessage={openshiftHub.whatsappMessage}
            bookLabel={openshiftHub.finalCta.bookLabel}
            whatsappLabel={openshiftHub.finalCta.whatsappLabel}
            onDark
            className="gap-2 sm:gap-3 [&_a]:text-sm [&_button]:h-9 [&_button]:px-4 [&_button]:text-sm sm:[&_button]:h-10 sm:[&_button]:px-5"
          />
          <button
            type="button"
            onClick={dismiss}
            className="rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white"
            aria-label="Dismiss sticky bar"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
