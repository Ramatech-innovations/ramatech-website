/** Central brand asset paths and display sizes */
export const brandAssets = {
  icon: "/brand/logo-icon.png",
  iconOnLight: "/brand/logo-dark.png",
  wordmark: "/brand/logo.png",
  mark: "/brand/logo-mark.png",
  /** Horizontal lockup — RAMATECH + tagline (transparent PNG) */
  footerLockup: "/brand/logo-footer-lockup.png",
} as const;

/** Display heights tuned for nav bar (h-14–16) — modest bump for legibility, not oversized */
export const logoSizes = {
  header: {
    width: 160,
    height: 160,
    className: "h-11 w-auto sm:h-12 md:h-14",
  },
  headerScrolled: {
    className: "h-10 w-auto sm:h-11 md:h-12",
  },
  heroBadge: {
    width: 160,
    height: 160,
    className: "h-12 w-auto shrink-0 sm:h-14",
  },
  footer: {
    width: 715,
    height: 171,
    className: "block h-auto w-[min(100%,16rem)] sm:w-56 md:w-64 lg:w-72",
  },
  credibility: { width: 200, height: 56, className: "h-14 w-auto md:h-16" },
  watermark: { width: 320, height: 90, className: "h-auto w-[min(280px,55vw)]" },
} as const;

/** Shared image treatment — transparent PNG lockups, crisp at 2x */
export const logoImageClass = "object-contain object-left select-none";
