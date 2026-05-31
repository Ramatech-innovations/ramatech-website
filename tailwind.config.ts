import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-satoshi)", "var(--font-inter)", "system-ui", "sans-serif"],
        nav: ["var(--font-satoshi)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "body-sm": ["0.9375rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.75" }],
        metric: ["3rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "metric-lg": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        nav: "0.04em",
        button: "0.06em",
      },
      colors: {
        brand: {
          primary: "#0A4C95",
          deep: "#1565C0",
          cyan: "#11D3E8",
          dark: "#111827",
          gray: "#6B7280",
          light: "#F8FAFC",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0A4C95 0%, #11D3E8 100%)",
        mesh: "radial-gradient(at 40% 20%, rgba(17, 211, 232, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(10, 76, 149, 0.2) 0px, transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
