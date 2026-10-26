import { PHARMA_MIGRATION_SUMMARY } from "@/content/case-studies";
import type { OpenShiftGeoPage } from "./geo-types";
import { indiaServiceSummaries, remoteServiceSummaries } from "./geo-service-summaries";

function buildFaqs(country: string, deploymentNote: string) {
  return [
    {
      question: `Do you provide on-site OpenShift support in ${country}?`,
      answer:
        "Remote delivery is our primary model. Where a workshop or cutover needs someone on site, travel and scope are agreed before the engagement starts.",
    },
    {
      question: `Which environments do you deploy OpenShift to for ${country}-based clients?`,
      answer: deploymentNote,
    },
    {
      question: `Can you support air-gapped or on-premises OpenShift environments in ${country}?`,
      answer:
        "Yes. Air-gapped installs use a mirror registry populated with oc-mirror, restricted operator catalogs, and update paths that do not depend on public internet access.",
    },
    {
      question: "What are your working hours?",
      answer:
        "Monday to Saturday, 10:00–19:00 IST. Extended coverage is available on request, and response targets are agreed per contract.",
    },
    {
      question: "Do you sell Red Hat subscriptions?",
      answer:
        "No. You hold the Red Hat subscriptions and support entitlements; we install, migrate, and operate the platform.",
    },
  ];
}

type RemoteCountry = {
  slug: string;
  countryName: string;
  countryCode: OpenShiftGeoPage["countryCode"];
  /** Used mid-sentence, e.g. "the UAE" */
  inPhrase: string;
};

function remoteCountryPage({ slug, countryName, countryCode, inPhrase }: RemoteCountry): OpenShiftGeoPage {
  return {
    slug,
    countryName,
    countryCode,
    pageName: countryName,
    remote: true,
    metaTitle: `Remote OpenShift Engineering Services for ${countryName} | Ramatech`,
    metaDescription: `Remote Red Hat OpenShift installation, migration, GitOps, and support for platform teams in ${inPhrase}, delivered remotely by Ramatech Innovation from India.`,
    h1: `Remote OpenShift Engineering Services for ${countryName}`,
    heroSubtext: `OpenShift installation, migration, GitOps, and support for platform teams in ${inPhrase}, delivered remotely by our engineering team in India.`,
    analyticsLabel: `openshift_geo_${slug.replace(/-/g, "_")}`,
    whatsappMessage: `Hi Ramatech, I want to discuss OpenShift services for our team in ${inPhrase}.`,
    intro: [
      `Ramatech Innovation is an engineering firm based in India. We deliver Red Hat OpenShift installation, migration, GitOps, support, and platform engineering remotely to platform teams in ${inPhrase}. We do not have an office in ${inPhrase}. We install and operate; we do not sell Red Hat licenses.`,
      "Remote delivery follows the access model your security team approves: a VPN or jump host, named engineers, and agreed change windows. We work in your Git repositories and ticketing tools, so every change is reviewable and the platform stays yours.",
      "Our working hours are Monday to Saturday, 10:00–19:00 IST. Extended coverage is available on request, and response targets are agreed per contract. Where a workshop or cutover needs someone on site, travel and scope are agreed before the engagement starts.",
      "We install and operate OpenShift on bare metal, VMware vSphere, KVM, AWS (self-managed and ROSA), and air-gapped networks, and we bring legacy VMs onto the platform with OpenShift Virtualization.",
    ],
    serviceSummaries: remoteServiceSummaries,
    compliance: [
      `Your data residency rules, sector regulations, and internal security policies set the design. We take your documented requirements for ${inPhrase} and turn them into cluster topology, RBAC, network policy, GitOps promotion gates, and runbooks.`,
      "We review where workload data, logs, and backups live, who can access the platform, and how every change is recorded, and we walk through these decisions with your security and compliance teams before production.",
    ],
    deploymentModels: [
      `Your data centers in ${inPhrase}: bare metal, VMware vSphere, or KVM`,
      "AWS regions: self-managed OpenShift or ROSA",
      "Air-gapped networks with a mirror registry",
      "Argo CD GitOps across development, test, and production",
      "Remote access through your VPN or jump host, with named engineers",
    ],
    caseStudy: {
      href: "/case-studies/openshift-enterprise-migration",
      title: "Pharma OpenShift Platform on Bare Metal",
      summary: PHARMA_MIGRATION_SUMMARY,
    },
    faqs: [
      {
        question: `Do you have an office in ${inPhrase}?`,
        answer: `No. We deliver remotely from India to teams in ${inPhrase}. Where a workshop or cutover needs someone on site, travel and scope are agreed before the engagement starts.`,
      },
      ...buildFaqs(
        inPhrase,
        `We work on your infrastructure in ${inPhrase}—bare metal, VMware vSphere, or KVM—or in AWS regions you choose, connecting through remote access your security team approves.`
      ).slice(1),
    ],
    finalCta: {
      headline: `Discuss OpenShift for Your Team in ${countryName}`,
      bookLabel: "Book Consultation",
      whatsappLabel: "WhatsApp Us",
    },
  };
}

export const openshiftGeoPages: OpenShiftGeoPage[] = [
  {
    slug: "india",
    countryName: "India",
    countryCode: "IN",
    pageName: "India",
    metaTitle: "OpenShift Consulting & Support Services in India | Ramatech",
    metaDescription:
      "OpenShift consulting and support in India—DPDP-aware hybrid deployments, BFSI-grade platforms, and on-prem migration for enterprises and PSUs.",
    h1: "OpenShift Consulting & Support Services in India",
    heroSubtext:
      "Production OpenShift delivery for Indian enterprises—hybrid on-prem and cloud, DPDP-aligned controls, and platform operations across BFSI, PSU, and product engineering teams.",
    analyticsLabel: "openshift_geo_india",
    whatsappMessage:
      "Hi Ramatech, I want to discuss OpenShift services for our India operations.",
    intro: [
      "Indian enterprises rarely choose a single deployment model for OpenShift. Platform teams in Mumbai financial headquarters, Bengaluru product companies, and NCR PSU estates often run hybrid estates—on-prem control planes with burst capacity in AWS India regions. The challenge is not installing a cluster; it is aligning topology, identity, network segmentation, and change governance with sector regulators and internal audit functions that scrutinize every production cutover.",
      "Ramatech delivers both consulting and operational support for OpenShift across India. Consulting engagements address architecture decisions—multi-cluster tenancy, GitOps maturity, SCC and RBAC baselines, and migration sequencing from OpenShift 3.x or vanilla Kubernetes. Support and managed services cover incident response, z-stream coordination, upgrade readiness, and capacity reviews so platform reliability keeps pace with application growth.",
      "We work with teams that must satisfy RBI, IRDAI, and SEBI expectations without freezing delivery velocity. That means evidence-led change management, operator lifecycle discipline, and observability baselines that support incident triage during release windows—not slide-deck architecture that ignores day-two reality.",
      "Product engineering teams in Bangalore and Hyderabad frequently operate at high Kubernetes maturity but still hit OpenShift-specific friction: Security Context Constraints block workloads that passed on vanilla clusters, Routes replace Ingress assumptions in CI templates, and ImageStreams alter image promotion semantics. Consulting engagements map these gaps early so migration and deployment programs do not stall in production governance reviews.",
      "PSU and large enterprise IT organizations in Delhi NCR and Pune often maintain air-gapped or restricted-network segments where public registry access is prohibited. Installation and migration services include mirror registry design, operator lifecycle in disconnected environments, and runbooks for z-stream updates that do not depend on ad hoc internet access during maintenance windows.",
      "Consulting and support are deliberately complementary—not interchangeable. A focused architecture review can unblock a stalled procurement cycle; a managed operations partnership sustains reliability when internal platform headcount is stretched, with coverage hours agreed per contract. Engagements are scoped with explicit deliverables, ownership boundaries, and handover criteria so your team retains operational capability.",
      "Whether you are standing up a first production cluster in ap-south-1 or consolidating multiple legacy environments under GitOps governance, we align delivery to Indian residency, sector regulation, and real release calendars—not generic global playbooks copied without local context.",
      "Indian platform programs also intersect with vendor diversity: some estates standardize on Red Hat subscriptions and OperatorHub, while others mix managed ROSA with on-prem control planes for workloads that cannot leave the data center. Consulting engagements map subscription, support, and operational ownership boundaries before clusters multiply across business units with inconsistent standards.",
      "For support-led engagements, we baseline alert noise, runbook quality, and patch posture in the first weeks—then prioritize stabilization actions that reduce incident volume before broader optimization work. That sequencing matters when teams inherit clusters built by another integrator or an internal team that has moved on.",
      "Cost and capacity governance intersect with RBI vendor oversight: right-sizing node pools, reclaiming idle projects, and enforcing quota policies reduce spend without compromising availability targets agreed with application owners. Periodic reviews connect utilization trends to architecture decisions—whether to expand clusters, consolidate tenants, or introduce ROSA burst capacity for seasonal load.",
    ],
    serviceSummaries: indiaServiceSummaries,
    compliance: [
      "Organizations operating under India's Digital Personal Data Protection Act 2023 must consider data localization expectations, consent handling, and cross-border transfer constraints when designing OpenShift tenancy and backup topology. Platform teams should map where workload data, logs, and backups reside relative to processing boundaries—not only where compute runs.",
      "BFSI sector pressure from RBI, IRDAI, and SEBI drives stricter access controls, change evidence, and disaster recovery testing than generic cloud-native programs assume. OpenShift deployments in these environments need codified RBAC, admission policy, and GitOps promotion gates that produce audit-friendly artifacts without manual spreadsheet tracking.",
      "Large PSU and enterprise on-prem estates often carry legacy network boundaries, air-gapped segments, and procurement cycles that favor User-Provisioned Infrastructure and disconnected operator lifecycles. Migration and installation programs must account for mirror registries, certificate authorities, and operational handover to internal teams with varying Kubernetes maturity.",
      "Insurance and capital markets platforms regulated by IRDAI and SEBI frequently require demonstrable segregation between production and non-production estates, with traceable promotion paths for configuration and container images. GitOps with Argo CD or OpenShift GitOps provides reconciliation evidence; organizations must consider approval gates and environment boundaries that satisfy internal audit without blocking developer self-service.",
      "RBI guidelines on IT outsourcing and operational resilience influence how enterprises document third-party platform support relationships. Organizations operating under these expectations must consider access scopes, incident communication paths, and change evidence deliverables during vendor onboarding—so supervisory questions can be answered from service records rather than reconstructed after incidents.",
      "DPDP readiness on OpenShift extends beyond workload placement: backup encryption, log redaction, and cross-border observability routing must be reviewed when platform teams centralize monitoring across business units. Consulting engagements produce data-flow diagrams and control mappings that internal privacy and security functions can review before production scale—not after regulators ask for evidence.",
    ],
    deploymentModels: [
      "Hybrid on-prem plus AWS India regions",
      "AWS ROSA in ap-south-1 (Mumbai) for cloud-first product teams",
      "Enterprise on-prem IPI/UPI on vSphere and bare metal for regulated workloads",
      "Disconnected and air-gapped installs for government-adjacent segments",
      "Multi-cluster GitOps with environment promotion across non-prod and production",
    ],
    caseStudy: {
      href: "/case-studies/openshift-enterprise-migration",
      title: "Pharma OpenShift Platform on Bare Metal",
      summary: PHARMA_MIGRATION_SUMMARY,
    },
    cityCoverage: [
      {
        slug: "bangalore",
        name: "Bangalore",
        description:
          "SaaS and product engineering teams—platform engineering, GitOps delivery, and day-two support for high Kubernetes maturity estates.",
      },
      {
        slug: "hyderabad",
        name: "Hyderabad",
        description:
          "BFSI, pharma, and GCC campuses—compliance-aware migration and managed OpenShift operations.",
      },
      {
        slug: "mumbai",
        name: "Mumbai",
        description:
          "Financial headquarters and NBFCs—security consulting, RBI-aligned controls, and disaster recovery planning.",
      },
      {
        slug: "noida",
        name: "Noida",
        description:
          "Government, PSU, and IT services—on-prem and air-gapped installation plus legacy migration.",
      },
    ],
    faqs: buildFaqs(
      "India",
      "We deploy to AWS ap-south-1 (Mumbai) and to customer on-prem data centers, based on residency and latency requirements."
    ),
    finalCta: {
      headline: "Discuss OpenShift for Your India Operations",
      bookLabel: "Book Consultation",
      whatsappLabel: "WhatsApp Us",
    },
  },
  remoteCountryPage({ slug: "uae", countryName: "UAE", countryCode: "AE", inPhrase: "the UAE" }),
  remoteCountryPage({
    slug: "saudi-arabia",
    countryName: "Saudi Arabia",
    countryCode: "SA",
    inPhrase: "Saudi Arabia",
  }),
  remoteCountryPage({ slug: "qatar", countryName: "Qatar", countryCode: "QA", inPhrase: "Qatar" }),
  remoteCountryPage({
    slug: "singapore",
    countryName: "Singapore",
    countryCode: "SG",
    inPhrase: "Singapore",
  }),
];

export function getOpenShiftGeoPage(slug: string) {
  return openshiftGeoPages.find((page) => page.slug === slug);
}

export function getAllOpenShiftSlugs(): string[] {
  return openshiftGeoPages.map((page) => page.slug);
}
