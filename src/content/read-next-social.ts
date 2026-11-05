/**
 * Early "Read next" block for social first-comment landings (MKT-2026-014 item 2b).
 * Brief: ramatech-ceo-os/.../briefs/2026-11-05-read-next-social-landings.md (ACK 2026-11-05).
 */

export type ReadNextLink = { href: string; label: string };

export type ReadNextEntry = {
  guides: [ReadNextLink, ReadNextLink];
  consultation: ReadNextLink;
};

const CONSULTATION: ReadNextLink = {
  href: "/book-consultation",
  label: "Book a free consultation",
};

/** Keyed by pathname without query string. */
export const readNextByPath: Record<string, ReadNextEntry> = {
  "/solutions/ai-solutions": {
    guides: [
      { href: "/insights/openshift/ai-integration", label: "OpenShift AI Integration" },
      { href: "/insights/openshift/cost-optimization", label: "OpenShift Cost Optimization" },
    ],
    consultation: CONSULTATION,
  },
  "/solutions/cloud-infrastructure": {
    guides: [
      { href: "/insights/openshift/installation-guide", label: "OpenShift Installation Guide" },
      { href: "/insights/openshift/cost-optimization", label: "OpenShift Cost Optimization" },
    ],
    consultation: CONSULTATION,
  },
  "/openshift/migration-services": {
    guides: [
      { href: "/insights/openshift/virtualization", label: "OpenShift Virtualization" },
      { href: "/insights/openshift/gitops", label: "OpenShift GitOps" },
    ],
    consultation: CONSULTATION,
  },
  "/openshift/installation-services": {
    guides: [
      { href: "/insights/openshift/installation-guide", label: "OpenShift Installation Guide" },
      {
        href: "/insights/openshift/deployment-best-practices",
        label: "OpenShift Deployment Best Practices",
      },
    ],
    consultation: CONSULTATION,
  },
  "/openshift/upgrade-services": {
    guides: [
      { href: "/insights/openshift/upgrade-planning", label: "OpenShift Upgrade Planning" },
      { href: "/insights/openshift/monitoring", label: "OpenShift Monitoring" },
    ],
    consultation: CONSULTATION,
  },
  "/openshift/consulting-services": {
    guides: [
      { href: "/insights/openshift/openshift-vs-kubernetes", label: "OpenShift vs Kubernetes" },
      { href: "/insights/openshift/security", label: "OpenShift Security Best Practices" },
    ],
    consultation: CONSULTATION,
  },
};

export function getReadNextForPath(pathname: string): ReadNextEntry | undefined {
  return readNextByPath[pathname];
}
