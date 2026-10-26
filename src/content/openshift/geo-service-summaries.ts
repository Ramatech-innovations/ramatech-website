import type { OpenShiftGeoPage } from "./geo-types";

type ServiceSummary = OpenShiftGeoPage["serviceSummaries"][number];

const HANDOVER =
  "Every engagement ends with runbooks, decision records, and a handover your team can run.";

/** Country pages outside India: remote delivery only (DEC-2026-010) */
export const remoteServiceSummaries: ServiceSummary[] = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift Installation Services",
    paragraphs: [
      "IPI and UPI installation on bare metal, VMware vSphere, KVM, AWS, or air-gapped networks, carried out through secure remote access to your environment. We agree DNS, certificates, storage classes, and identity integration with your team before install day.",
      HANDOVER,
    ],
  },
  {
    href: "/openshift/deployment-services",
    label: "OpenShift Deployment Services",
    paragraphs: [
      "Production workload deployment with Helm and Argo CD GitOps, working in your own Git repositories so every change stays reviewable and traceable.",
      HANDOVER,
    ],
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift Migration Services",
    paragraphs: [
      "VMware and legacy VMs onto OpenShift, with OpenShift Virtualization for VMs that are not ready to containerise. Migration waves are planned with your team around your own change windows.",
      HANDOVER,
    ],
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift Support Services",
    paragraphs: [
      "Remote support for cluster health, certificate rotation, operator updates, and incidents during Monday to Saturday, 10:00–19:00 IST. Extended coverage and response targets are agreed per contract.",
    ],
  },
  {
    href: "/openshift/upgrade-services",
    label: "OpenShift Upgrade Services",
    paragraphs: [
      "Planned upgrades with API deprecation checks, operator compatibility review, and a rehearsal in non-production before the production window you choose.",
      HANDOVER,
    ],
  },
  {
    href: "/openshift/consulting-services",
    label: "OpenShift Consulting Services",
    paragraphs: [
      "Architecture reviews, readiness assessments, and platform roadmaps delivered through remote workshops with your platform, security, and application teams.",
    ],
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift Platform Engineering",
    paragraphs: [
      "Golden paths, automated namespace onboarding, and reusable GitOps templates so product teams get consistent, policy-safe environments.",
      HANDOVER,
    ],
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift Managed Services",
    paragraphs: [
      "Co-managed or fully managed lifecycle operations delivered remotely, with access boundaries, coverage hours, and reporting agreed per contract.",
    ],
  },
];

export const indiaServiceSummaries: ServiceSummary[] = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift Installation Services",
    paragraphs: [
      "Indian BFSI and PSU programs often require User-Provisioned Infrastructure on vSphere or bare metal with explicit network segmentation aligned to internal firewall zones. We design IPI/UPI topology for Mumbai, Pune, Hyderabad, Bangalore, and NCR data centers—including DNS, certificate, and mirror-registry prerequisites for disconnected segments.",
      "Installations include post-install validation for SCC defaults, ingress routes, and observability baselines before application teams onboard. Handover packs document architecture decisions for RBI and internal audit review.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out. Managed scope documents access boundaries, change evidence, and co-managed handover plans aligned to RBI outsourcing scrutiny. Golden paths reduce platform ticket queues for Bangalore and Hyderabad teams onboarding namespaces, quotas, and CI templates at scale. Workshops produce prioritized roadmaps balancing DPDP readiness, sector regulation, and near-term delivery commitments from product leadership. Upgrade waves coordinate on-prem and ROSA estates with etcd backup drills and operator compatibility matrices signed before maintenance. Support playbooks align to Indian business hours, quarter-end freeze windows, and RBI vendor oversight evidence requirements. Migration waves prioritize RBI-regulated systems with rehearsed rollback, data reconciliation checks, and parallel-run validation before decommission. Pipeline templates integrate with enterprise change-advisory workflows common in Indian BFSI, including automated compliance gates in CI before Argo sync. Pre-go-live checklists cover mirror registry sync, LDAP/OIDC integration smoke tests, and node scaling validation for peak BFSI batch windows.",
    ],
  },
  {
    href: "/openshift/deployment-services",
    label: "OpenShift Deployment Services",
    paragraphs: [
      "Product teams migrating from vanilla Kubernetes to OpenShift need deployment pipelines that respect SCC, Routes, and ImageStream semantics without breaking existing Helm charts. We standardize GitOps promotion with Argo CD or OpenShift GitOps, including approval gates suited to change-advisory boards common in Indian enterprises.",
      "Engagements cover microservices, stateful workloads, and batch jobs with production readiness checks—probes, PDBs, resource quotas, and rollback playbooks validated before go-live.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift Migration Services",
    paragraphs: [
      "Wave-based migration from OpenShift 3.x, EKS/GKE/AKS, or VM estates is sequenced by criticality with rollback checkpoints per wave—essential when RBI-regulated systems cannot tolerate unplanned downtime. We map SCC compatibility, storage migration paths, and CI/CD reconnection before production cutover.",
      "Pilot migrations on non-critical workloads validate patterns before BFSI production waves. Decommission runbooks ensure legacy clusters are retired without orphaned dependencies.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift Support Services",
    paragraphs: [
      "Support tiers align to Indian operating hours and escalation paths—monitoring and first response through active platform SRE coverage for production clusters. We coordinate z-stream patching around release freeze windows common in quarter-end BFSI cycles.",
      "Incident response integrates with your existing ITSM tooling and produces evidence suitable for internal audit and vendor oversight reviews under RBI outsourcing guidelines.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/upgrade-services",
    label: "OpenShift Upgrade Services",
    paragraphs: [
      "EUS planning and minor version upgrades are executed with etcd backup validation, operator compatibility checks, and rollback criteria documented before maintenance windows. Indian enterprises with mixed on-prem and ROSA estates receive coordinated upgrade waves across environments.",
      "Post-upgrade stabilization confirms operator health, workload SLOs, and observability behavior before closure—reducing repeat incidents after version transitions.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/consulting-services",
    label: "OpenShift Consulting Services",
    paragraphs: [
      "Architecture reviews address multi-cluster tenancy, DPDP-aligned data flows, and GitOps maturity for teams scaling from one cluster to many business units. Assessments produce prioritized roadmaps that account for IRDAI, SEBI, or RBI scrutiny without blocking near-term delivery commitments.",
      "Workshops facilitate decisions on managed versus self-managed models, ROSA in ap-south-1 versus on-prem control planes, and identity integration with enterprise AD/LDAP patterns common in Indian IT estates.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift Platform Engineering",
    paragraphs: [
      "Internal developer platforms on OpenShift reduce ticket queues for namespace provisioning, quota requests, and pipeline setup—critical when Bangalore and Hyderabad product teams scale faster than central platform headcount. Golden-path templates encode SCC-safe defaults and network policy baselines.",
      "Self-service workflows integrate with GitOps so tenant onboarding remains auditable while developers ship without waiting on platform bottlenecks.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift Managed Services",
    paragraphs: [
      "Fully managed operations cover lifecycle tasks—patching, upgrades, incident response, and capacity reviews—for teams that cannot staff dedicated platform SRE coverage internally, with coverage hours agreed per contract. Scope, access boundaries, and change evidence are defined during onboarding for RBI vendor oversight.",
      "Co-managed models blend Ramatech escalation with your internal platform team so knowledge transfer and runbook ownership remain in-house over time.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
];
