import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/favicon.ico",
        destination: "/favicon.ico",
        permanent: true,
      },
      ...[
        "observability-platform-scale",
        "ai-automation-operations",
        "openshift-gitops-automation",
        "openshift-platform-engineering-golden-paths",
        "openshift-jenkins-argocd-cicd",
      ].map((slug) => ({
        source: `/case-studies/${slug}`,
        destination: "/case-studies",
        permanent: true,
      })),
      {
        source: "/openshift/india/:city",
        destination: "/openshift/india",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
