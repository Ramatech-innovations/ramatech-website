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
      "IPI and UPI cluster installation on bare metal, VMware vSphere, KVM, AWS, and air-gapped environments.",
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
      "VMware and legacy VMs to OpenShift, with OpenShift Virtualization for VMs that stay as VMs, and on-prem to AWS.",
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
    title: "OpenShift Consulting and Implementation",
    description:
      "Architecture reviews, readiness assessments, and security reviews, implemented by the same engineers.",
    href: "/openshift/consulting-services",
  },
  {
    slug: "platform-engineering",
    title: "OpenShift Platform Engineering",
    description:
      "Golden paths, automated namespace onboarding, and reusable GitOps templates for product teams.",
    href: "/openshift/platform-engineering",
  },
  {
    slug: "managed-services",
    title: "OpenShift Managed Services",
    description:
      "Full lifecycle cluster operations including upgrades, security, and on-call escalation agreed per contract.",
    href: "/openshift/managed-services",
  },
];

export const openshiftGeoRegions: CatalogItem[] = [
  {
    slug: "india",
    title: "India",
    description:
      "On-prem, hybrid, and cloud OpenShift for Indian enterprises.",
    href: "/openshift/india",
  },
  {
    slug: "uae",
    title: "UAE",
    description: "Remote OpenShift engineering for UAE platform teams, delivered from India.",
    href: "/openshift/uae",
  },
  {
    slug: "saudi-arabia",
    title: "Saudi Arabia",
    description: "Remote OpenShift engineering for Saudi platform teams, delivered from India.",
    href: "/openshift/saudi-arabia",
  },
  {
    slug: "qatar",
    title: "Qatar",
    description: "Remote OpenShift engineering for Qatar platform teams, delivered from India.",
    href: "/openshift/qatar",
  },
  {
    slug: "singapore",
    title: "Singapore",
    description: "Remote OpenShift engineering for Singapore platform teams, delivered from India.",
    href: "/openshift/singapore",
  },
];
