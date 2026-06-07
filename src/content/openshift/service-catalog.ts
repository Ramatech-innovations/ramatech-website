export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

export const openshiftServices: CatalogItem[] = [
  {
    slug: "installation-services",
    title: "OpenShift Installation Services",
    description:
      "IPI and UPI cluster installation on cloud, bare metal, vSphere, and air-gapped environments.",
    href: "/openshift/installation-services",
  },
  {
    slug: "deployment-services",
    title: "OpenShift Deployment Services",
    description:
      "Production workload deployment, GitOps pipelines, and platform hardening after cluster install.",
    href: "/openshift/deployment-services",
  },
  {
    slug: "migration-services",
    title: "OpenShift Migration Services",
    description:
      "Structured migration from OpenShift 3.x, Kubernetes, or legacy infrastructure to OCP 4.x.",
    href: "/openshift/migration-services",
  },
  {
    slug: "support-services",
    title: "OpenShift Support Services",
    description:
      "Cluster health monitoring, incident response, patching, and expert SRE escalation.",
    href: "/openshift/support-services",
  },
  {
    slug: "upgrade-services",
    title: "OpenShift Upgrade Services",
    description:
      "Version upgrades, EUS planning, and z-stream patch coordination with rollback readiness.",
    href: "/openshift/upgrade-services",
  },
  {
    slug: "consulting-services",
    title: "OpenShift Consulting",
    description:
      "Architecture reviews, readiness assessments, security audits, and platform strategy.",
    href: "/openshift/consulting-services",
  },
  {
    slug: "platform-engineering",
    title: "OpenShift Platform Engineering",
    description:
      "Golden paths, developer portals, self-service namespaces, and internal platform teams.",
    href: "/openshift/platform-engineering",
  },
  {
    slug: "managed-services",
    title: "OpenShift Managed Services",
    description:
      "Full lifecycle cluster operations including upgrades, security, and 24/7 on-call.",
    href: "/openshift/managed-services",
  },
];

export const openshiftGeoRegions: CatalogItem[] = [
  {
    slug: "india",
    title: "India",
    description:
      "Primary delivery hub — on-prem, hybrid, and cloud OpenShift for Indian enterprises.",
    comingSoon: true,
  },
  {
    slug: "uae",
    title: "UAE",
    description:
      "OpenShift services for UAE enterprises — regulated sectors and hybrid cloud.",
    comingSoon: true,
  },
  {
    slug: "saudi-arabia",
    title: "Saudi Arabia",
    description:
      "Enterprise OpenShift consulting and operations for KSA platform teams.",
    comingSoon: true,
  },
  {
    slug: "qatar",
    title: "Qatar",
    description:
      "OpenShift installation, migration, and support for Qatar-based organisations.",
    comingSoon: true,
  },
  {
    slug: "singapore",
    title: "Singapore",
    description:
      "APAC OpenShift expertise for financial services and regulated workloads.",
    comingSoon: true,
  },
];
