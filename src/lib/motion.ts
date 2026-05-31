/** Shared Framer Motion variants — Phase 2 */
export const springSmooth = { type: "spring" as const, stiffness: 120, damping: 20 };

export const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSmooth,
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.25 } },
};

/** AI Automation cards — elevation without scale (viz clarity) */
export const aiCardHover = {
  hover: { y: -4, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
