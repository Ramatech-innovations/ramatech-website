import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { createMetadata, organizationJsonLd, siteConfig } from "@/lib/seo";
import "./globals.css";

const satoshi = localFont({
  src: "../../public/fonts/satoshi/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "500 800",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
  }),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link rel="preload" href="/brand/logo-icon.png" as="image" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
