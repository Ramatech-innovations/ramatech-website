/** Central brand asset paths and display sizes */
export const brandAssets = {
  icon: "/brand/logo-icon.png",
  wordmark: "/brand/logo.png",
  mark: "/brand/logo-mark.png",
} as const;

export const logoSizes = {
  header: { width: 134, height: 128, className: "h-9 w-auto md:h-10" },
  headerScrolled: { className: "h-8 w-auto md:h-9" },
  heroBadge: { width: 134, height: 128, className: "h-9 w-auto shrink-0 md:h-10" },
  footer: { width: 140, height: 40, className: "h-9 w-auto md:h-10" },
  credibility: { width: 200, height: 56, className: "h-14 w-auto md:h-16" },
  watermark: { width: 320, height: 90, className: "h-auto w-[min(280px,55vw)]" },
} as const;
