// TODO: content review — India city pages generated for Prompt 4 SEO rollout
import type { OpenShiftIndiaCityPage } from "./india-city-types";

export const openshiftIndiaCityPages: OpenShiftIndiaCityPage[] = [
  {
    slug: "bangalore",
    cityName: "Bangalore",
    pageName: "Bangalore",
    metaTitle: "OpenShift Consulting & Support Services in Bangalore | Ramatech",
    metaDescription:
      "OpenShift platform engineering and GitOps in Bangalore—consulting, deployment, and support for SaaS teams moving from vanilla Kubernetes to production OCP.",
    h1: "OpenShift Consulting & Support Services in Bangalore",
    heroSubtext:
      "Platform engineering, GitOps delivery, and day-two operations for Bangalore product teams running OpenShift at scale—from Koramangala SaaS startups to enterprise engineering campuses in Whitefield and Outer Ring Road corridors.",
    analyticsLabel: "openshift_india_bangalore",
    whatsappMessage:
      "Hi Ramatech, I want to discuss OpenShift services for our Bangalore operations.",
    localContext: [
      "Bangalore's product engineering culture runs ahead of most Indian metros on Kubernetes maturity. Teams in Indiranagar, HSR Layout, and Electronic City often standardized on vanilla clusters years before central IT mandated OpenShift—but that velocity creates a specific friction profile. Security Context Constraints block workloads that passed CI on EKS or self-managed kubeadm estates. Routes replace Ingress assumptions baked into Helm charts and Argo CD Application templates. ImageStreams change promotion semantics that release managers built around external registries. Platform leads here do not need a lecture on containers; they need OpenShift-native golden paths that preserve developer self-service without reopening architecture debates every sprint.",
      "The SaaS and startup density around Bangalore also means platform teams are measured on time-to-first-deploy and namespace onboarding latency, not quarterly CAB approvals alone. When central platform headcount cannot keep pace with product squad growth, ticket queues for quotas, network policies, and pipeline wiring become delivery bottlenecks. Internal developer platform programs on OpenShift—self-service tenant provisioning, SCC-safe templates, and GitOps-governed promotion—directly address that gap. Ramatech engagements in Bangalore typically emphasize platform engineering and deployment services because the buyer already runs clusters; the gap is operability, governance, and sustainable day-two ownership.",
      "GitOps maturity varies widely across Bangalore campuses. Some teams run Argo CD with policy gates and ApplicationSets; others still promote via imperative scripts that break when operators update CRD versions during z-stream cycles. Consulting and upgrade services map operator compatibility, etcd backup discipline, and rollback criteria before minor version transitions—reducing the incident spikes that follow poorly rehearsed maintenance windows. Hybrid estates are common: burst capacity in AWS ap-south-1 while control planes stay on-prem for data residency or latency-sensitive integrations with legacy ERP and payment switches.",
      "Bangalore platform programs also intersect with global engineering standards. Capability centers report to US or EU headquarters that expect FedRAMP-adjacent rigor in RBAC baselines and image signing—even when Indian entities operate under DPDP and sector guidelines documented on our India overview page. We align tenancy boundaries, observability routing, and change evidence so local release velocity does not diverge from group architecture boards. Support services cover incident response, certificate rotation, and capacity reviews scoped to Indian business hours and your escalation tiers—so production SLOs survive on-call rotation gaps during hiring cycles.",
    ],
    serviceSummaries: [
      {
        href: "/openshift/platform-engineering",
        label: "OpenShift Platform Engineering",
        paragraphs: [
          "Bangalore product teams scale faster than central platform headcount. Platform engineering on OpenShift encodes SCC-safe defaults, quota templates, and network policy baselines into self-service workflows—so developers provision namespaces without waiting on ticket queues. Golden-path Application templates integrate with your existing Git provider and CI system, preserving the shipping cadence SaaS teams expect.",
          "Engagements include developer portal patterns, tenant onboarding automation, and GitOps repositories structured for audit-friendly promotion across dev, staging, and production. Handover criteria ensure your internal platform team owns the templates and runbooks after initial rollout—not a black-box integration that stalls when consultants leave.",
          "Backstage, Tekton, and OpenShift Pipelines integrations are scoped to your existing toolchain so golden paths meet developers where they already work. Quota and cost visibility dashboards help platform leads justify node pool expansion to finance stakeholders without reactive firefighting during traffic spikes.",
        ],
      },
      {
        href: "/openshift/deployment-services",
        label: "OpenShift Deployment Services",
        paragraphs: [
          "Teams migrating deployment pipelines from vanilla Kubernetes need GitOps that respects Routes, ImageStreams, and SCC without rewriting every Helm release. We standardize Argo CD or OpenShift GitOps promotion with approval gates suited to change-advisory rhythms—lighter than BFSI Mumbai estates but still evidence-led for SOC2-minded SaaS buyers.",
          "Microservices, stateful workloads, and batch jobs receive production readiness validation: probes, PodDisruptionBudgets, resource quotas, and rollback playbooks tested before go-live. Pipeline integration covers policy checks in CI so non-compliant manifests fail before they reach cluster reconciliation loops.",
          "ApplicationSets and progressive delivery patterns help Bangalore teams managing dozens of microservices keep promotion consistent without copy-paste Application manifests. Canary and blue-green strategies are validated against your observability stack so rollback triggers are measurable—not aspirational dashboard widgets.",
        ],
      },
      {
        href: "/openshift/consulting-services",
        label: "OpenShift Consulting Services",
        paragraphs: [
          "Architecture reviews for Bangalore enterprises address multi-cluster tenancy, ROSA versus on-prem control plane trade-offs, and identity integration with corporate AD or cloud IdP patterns common in global capability centers. Assessments produce prioritized roadmaps that separate reversible experiments from commitments that lock in topology for years.",
          "Workshops facilitate decisions on managed versus self-managed models, GitOps repository structure, and observability baselines before procurement cycles commit to irreversible network or storage designs. Deliverables include decision records suitable for group architecture review—not slide decks disconnected from operator-level constraints.",
          "Consulting also covers developer-experience metrics: time-to-first-deploy, platform ticket volume, and failed promotion rates—so leadership sees whether architecture investments actually reduce friction. Recommendations tie to staffing reality, acknowledging that Bangalore platform teams often compete for talent with product engineering on the same campus.",
        ],
      },
      {
        href: "/openshift/upgrade-services",
        label: "OpenShift Upgrade Services",
        paragraphs: [
          "High-churn Bangalore estates accumulate technical debt when minor version upgrades defer across quarters. Upgrade services execute EUS planning with etcd backup validation, operator compatibility matrices, and documented rollback criteria before maintenance windows. Coordinated waves across non-prod and production reduce the surprise CRD breakage that stalls Argo sync during z-stream transitions.",
          "Post-upgrade stabilization confirms operator health, workload SLOs, and monitoring alert behavior before engagement closure. Teams running mixed on-prem and ROSA footprints receive sequenced upgrade plans that respect dependency order between control planes and application promotion paths.",
          "Pre-upgrade application inventories identify operators and custom resources that lag vendor support matrices—preventing the weekend maintenance that discovers a stateful workload cannot restart on the target version. Communication templates keep product squad leads informed of freeze windows without flooding them with cluster-admin jargon.",
        ],
      },
      {
        href: "/openshift/support-services",
        label: "OpenShift Support Services",
        paragraphs: [
          "Production support aligns to Bangalore operating hours and escalation paths—incident triage, certificate lifecycle, operator health checks, and z-stream coordination around your release freeze windows. Severity classification integrates with existing ITSM tooling so platform incidents route to the right on-call rotation without ambiguous handoffs.",
          "Monthly health reviews surface recurring alert noise, capacity headroom, and patch posture before they become customer-facing outages during peak traffic events. Evidence artifacts from support engagements support internal audit and vendor oversight when parent entities scrutinize outsourced platform operations.",
          "Runbook gap analysis during onboarding identifies where Bangalore teams rely on tribal knowledge versus documented procedures—then prioritizes remediation that reduces mean time to recovery during real incidents. Integration with Prometheus, Grafana, and cluster logging stacks is validated so support engineers do not debug blind during severity-one events.",
        ],
      },
    ],
    complianceNote:
      "Bangalore SaaS and product engineering teams still operate under India's Digital Personal Data Protection Act and sector guidelines when processing financial, health, or cross-border personal data on OpenShift. Cross-border observability routing, backup encryption, and consent-adjacent logging require explicit design—not assumptions copied from US parent architectures. Rather than duplicating regulatory detail here, we document DPDP-aligned tenancy, logging, and backup topology on our [OpenShift services in India](/openshift/india) overview—city engagements reference that framework while scoping controls to your specific data flows and audit expectations.",
    faqs: [
      {
        question: "Do you provide on-site OpenShift support in Bangalore?",
        // TODO: confirm with sales — on-site scope
        answer:
          "Remote delivery is our primary model for Bangalore engagements, with on-site architecture workshops or cutover support scoped during onboarding when operational risk warrants face-to-face coordination. Travel scope and duration are agreed before engagement start.",
      },
      {
        question: "Which data center regions near Bangalore do you deploy OpenShift to?",
        answer:
          "We deploy to customer on-prem data centers across Bangalore and Karnataka, AWS ap-south-1 (Mumbai) for ROSA and hybrid burst patterns, and Azure India regions when residency and latency requirements favor managed control planes. Topology is chosen during architecture design—not assumed from a single template.",
      },
      {
        question: "Our team already runs Kubernetes—do we need consulting before moving to OpenShift?",
        answer:
          "High Kubernetes maturity often accelerates migration but does not eliminate OpenShift-specific design work. Consulting engagements map SCC compatibility, route and ingress models, ImageStream promotion, and operator lifecycle assumptions early—so deployment programs do not stall when production governance reviews surface gaps that passed on vanilla clusters.",
      },
      {
        question: "Can you help us build an internal developer platform on OpenShift in Bangalore?",
        answer:
          "Yes. Platform engineering engagements focus on self-service namespace provisioning, golden-path templates, and GitOps-governed tenant onboarding—patterns suited to Bangalore product teams scaling faster than central platform headcount. Scope includes handover so your team owns templates and runbooks after initial rollout, plus success metrics such as reduced ticket volume and faster time-to-first-deploy.",
      },
      {
        question: "How do you handle time zone coverage for Bangalore-based OpenShift support?",
        // TODO: confirm with sales — timezone coverage
        answer:
          "Support coverage is scoped during onboarding to match your operating hours and escalation paths. Incident routing, maintenance windows, and stakeholder communication protocols are documented in the service onboarding pack before production cutover.",
      },
    ],
    finalCta: {
      headline: "Discuss OpenShift for Your Bangalore Platform Team",
      bookLabel: "Request a Quote",
      whatsappLabel: "WhatsApp Us",
    },
  },
  {
    slug: "hyderabad",
    cityName: "Hyderabad",
    pageName: "Hyderabad",
    metaTitle: "OpenShift Consulting & Support Services in Hyderabad | Ramatech",
    metaDescription:
      "OpenShift migration and managed services in Hyderabad—compliance-aware delivery for BFSI, pharma, and GCC platform teams on hybrid estates.",
    h1: "OpenShift Consulting & Support Services in Hyderabad",
    heroSubtext:
      "Compliance-aware migration, managed operations, and upgrade discipline for Hyderabad's BFSI towers, pharma manufacturing IT, and global capability center campuses across HITEC City, Gachibowli, and Financial District corridors.",
    analyticsLabel: "openshift_india_hyderabad",
    whatsappMessage:
      "Hi Ramatech, I want to discuss OpenShift services for our Hyderabad operations.",
    localContext: [
      "Hyderabad's technology estate blends three distinct buyer profiles that rarely share the same OpenShift roadmap. Financial services and insurance platforms in the Financial District operate under RBI and IRDAI scrutiny with change evidence requirements that generic cloud-native playbooks ignore. Pharma and life sciences IT teams in Genome Valley and nearby industrial corridors run validated systems where migration sequencing and rollback discipline matter as much as container ergonomics. Global capability centers—often the largest employer on a single campus—execute implementation for US and EU parents while local platform teams inherit clusters built by prior integrators with incomplete runbooks.",
      "Migration services dominate early engagements in Hyderabad because many estates still run OpenShift 3.x, VM-hosted middleware, or Kubernetes distributions that central architecture boards will not certify for new regulated workloads. Wave-based cutover with rehearsed rollback, parallel-run validation, and dependency mapping across service mesh and identity layers reduces the operational risk that stalls BFSI programs mid-flight. Pharma-adjacent teams add validation documentation expectations: migration waves must produce artifacts internal quality and IT audit functions can review without reconstructing decisions after go-live.",
      "Managed services fit Hyderabad organizations where platform SRE headcount cannot cover nights, weekends, and quarter-end freeze windows simultaneously. GCC campuses often centralize Kubernetes expertise in one city while application teams distribute across time zones—creating handoff gaps during incidents. Co-managed models blend Ramatech escalation with internal platform staff so knowledge transfer and runbook ownership remain in Hyderabad over time, satisfying parent-entity vendor oversight without forcing a fully outsourced operations model on day one.",
      "Upgrade services and consulting round out the lifecycle: operator compatibility across disconnected and hybrid segments, etcd backup drills before minor version transitions, and architecture workshops that resolve tenancy and GitOps promotion standards before procurement locks in topology. Hyderabad teams frequently maintain hybrid footprints—on-prem control planes for residency-sensitive workloads with burst capacity in ap-south-1—requiring coordinated upgrade waves rather than isolated cluster maintenance. Pharma manufacturing IT adjacent to Genome Valley often couples OpenShift with validated infrastructure patterns where environment drift triggers re-validation work; consulting documents which platform changes require quality review versus routine operator updates. GCC stakeholders in Gachibowli and Financial District benefit from shared reference architectures that distributed implementation teams can adopt without reinterpretation drift.",
    ],
    serviceSummaries: [
      {
        href: "/openshift/migration-services",
        label: "OpenShift Migration Services",
        paragraphs: [
          "Hyderabad BFSI and pharma programs migrate in waves sequenced by criticality—with rollback checkpoints, data reconciliation checks, and parallel-run validation before legacy platforms decommission. We map SCC compatibility, storage migration paths, and CI/CD reconnection for estates moving from OpenShift 3.x, VM middleware, or managed Kubernetes distributions.",
          "Pilot migrations on non-critical workloads validate patterns before regulated production cutovers. Decommission runbooks ensure orphaned dependencies, DNS entries, and firewall rules do not resurrect during audit periods. Dependency mapping covers service mesh, batch schedulers, and identity integrations common in GCC delivery models.",
          "Data reconciliation checkpoints between legacy and target platforms are defined per wave so Hyderabad BFSI teams can demonstrate continuity to internal audit before decommission sign-off. Communication runbooks keep application owners informed of freeze windows and rollback triggers without relying on informal chat channels.",
        ],
      },
      {
        href: "/openshift/managed-services",
        label: "OpenShift Managed Services",
        paragraphs: [
          "GCC and enterprise campuses in Hyderabad often cannot sustain 24/7 platform SRE coverage internally while meeting parent-entity reliability expectations. Managed services cover patching, upgrades, incident response, and capacity reviews with scope, access boundaries, and change evidence defined during onboarding.",
          "Co-managed models preserve internal ownership of architecture decisions and GitOps repositories while Ramatech handles escalation tiers, z-stream coordination, and recurring health reviews. Deliverables include monthly operational reports suitable for vendor oversight reviews—not opaque managed service black boxes.",
          "Onboarding baselines alert noise, patch lag, and recurring incident themes in the first weeks—then sequences stabilization work before broader optimization. Access reviews and break-glass procedures are documented for parent-entity third-party risk questionnaires common in Financial District technology programs.",
        ],
      },
      {
        href: "/openshift/consulting-services",
        label: "OpenShift Consulting Services",
        paragraphs: [
          "Architecture assessments for Hyderabad regulated workloads address multi-cluster tenancy, hybrid connectivity to ap-south-1, and GitOps promotion gates that produce audit-friendly artifacts. Workshops facilitate decisions on migration sequencing, managed versus self-operated models, and identity integration with enterprise directory patterns common in campus-scale IT estates.",
          "Consulting deliverables include prioritized roadmaps balancing compliance readiness, near-term delivery commitments from application owners, and realistic platform headcount—avoiding architecture recommendations that assume staffing levels GCC programs rarely sustain locally.",
          "Pharma-adjacent assessments include validation documentation expectations: which migration artifacts quality and IT audit functions require before production sign-off. Network segmentation and east-west policy recommendations account for legacy firewall zones that predate container adoption on HITEC City campuses.",
        ],
      },
      {
        href: "/openshift/support-services",
        label: "OpenShift Support Services",
        paragraphs: [
          "Production support for Hyderabad clusters covers incident triage, certificate rotation, operator health monitoring, and z-stream patching coordinated around BFSI release freeze windows. Severity routing integrates with your ITSM tooling and produces evidence suitable for internal audit and RBI outsourcing scrutiny.",
          "Recurring health reviews identify alert fatigue, capacity constraints, and recurring failure modes before they affect customer-facing services during peak processing periods. Support playbooks document escalation paths across GCC stakeholders in multiple time zones when incidents span application and platform boundaries.",
          "Quarter-end and regulatory reporting windows receive explicit maintenance blackout coordination so emergency patches do not collide with batch settlement or claims-processing peaks. Post-incident reviews produce root-cause summaries formatted for internal risk committees—not only cluster-admin technical notes.",
        ],
      },
      {
        href: "/openshift/upgrade-services",
        label: "OpenShift Upgrade Services",
        paragraphs: [
          "Deferred minor version upgrades accumulate operator debt that surfaces during emergency patching. Upgrade services execute EUS planning with etcd backup validation, compatibility checks across connected and restricted-network segments, and rollback criteria signed before maintenance windows.",
          "Hyderabad hybrid estates receive coordinated upgrade waves across on-prem and cloud clusters so application promotion paths do not break when control plane versions diverge. Post-upgrade stabilization confirms workload SLOs and observability behavior before closure.",
          "OperatorHub and custom operator inventories are validated against target version compatibility matrices before maintenance approval—reducing the failed upgrade that discovers a pharma validation workload cannot restart. Rehearsal environments mirror production SCC and storage classes so application teams sign off on test evidence.",
        ],
      },
    ],
    complianceNote:
      "Hyderabad's concentration of BFSI, insurance, and pharma IT means platform programs intersect RBI, IRDAI, and internal validation requirements—not only generic cloud security baselines. GCC delivery models add parent-entity vendor oversight and cross-border data-flow scrutiny that influence backup, logging, and observability routing on OpenShift. Full DPDP, sector regulatory, and audit-evidence guidance for Indian OpenShift estates lives on our [OpenShift services in India](/openshift/india) page; Hyderabad engagements apply that framework to your campus topology, data flows, and outsourcing documentation without repeating parent-page detail here.",
    faqs: [
      {
        question: "Do you provide on-site OpenShift support in Hyderabad?",
        // TODO: confirm with sales — on-site scope
        answer:
          "Remote delivery is our primary model, with on-site migration cutover support or architecture workshops scoped when operational risk or stakeholder alignment requires face-to-face presence. Scope and travel are agreed during onboarding.",
      },
      {
        question: "Which data centers near Hyderabad do you deploy OpenShift to?",
        answer:
          "We deploy to customer on-prem facilities across Hyderabad and Telangana, AWS ap-south-1 for ROSA and hybrid workloads, and Azure India regions when managed control planes fit residency requirements. GCC campuses often standardize on a primary on-prem footprint with cloud burst for non-regulated dev and test estates.",
      },
      {
        question: "Can you migrate OpenShift 3.x estates for Hyderabad BFSI teams?",
        answer:
          "Yes. Migration services include wave planning, SCC and route translation, storage and registry cutover, and rehearsed rollback for regulated workloads. Pilot waves on non-critical systems validate patterns before production BFSI cutovers that internal audit and RBI oversight processes will scrutinize.",
      },
      {
        question: "Do you offer managed OpenShift operations for GCC campuses in Hyderabad?",
        answer:
          "Managed and co-managed operations cover patching, upgrades, incident response, and capacity reviews—with access scopes and change evidence defined for parent-entity vendor oversight. Co-managed models keep architecture and GitOps ownership with your internal team while Ramatech covers defined escalation tiers.",
      },
      {
        question: "How do you handle time zone coverage for Hyderabad-based OpenShift support?",
        // TODO: confirm with sales — timezone coverage
        answer:
          "Support coverage is scoped during onboarding to match your operating hours, GCC handoff points, and escalation paths. Critical incident routing and maintenance windows are documented before production cutover.",
      },
    ],
    finalCta: {
      headline: "Discuss OpenShift for Your Hyderabad Operations",
      bookLabel: "Request a Quote",
      whatsappLabel: "WhatsApp Us",
    },
  },
  {
    slug: "mumbai",
    cityName: "Mumbai",
    pageName: "Mumbai",
    metaTitle: "OpenShift Consulting & Support Services in Mumbai | Ramatech",
    metaDescription:
      "OpenShift consulting and DR-ready support in Mumbai—BFSI and NBFC platforms aligned to RBI oversight, upgrades, and managed operations.",
    h1: "OpenShift Consulting & Support Services in Mumbai",
    heroSubtext:
      "Security-conscious consulting, disaster-recovery-ready operations, and regulated deployment patterns for Mumbai's BFSI headquarters, NBFC platforms, and trading-adjacent technology estates in BKC, Lower Parel, and Nariman Point.",
    analyticsLabel: "openshift_india_mumbai",
    whatsappMessage:
      "Hi Ramatech, I want to discuss OpenShift services for our Mumbai operations.",
    localContext: [
      "Mumbai concentrates India's financial headquarters density—universal banks, NBFCs, asset managers, and insurance groups that report to RBI, IRDAI, and SEBI with operational resilience expectations far stricter than product engineering playbooks assume. Platform decisions here are scrutinized by internal audit, group risk, and vendor oversight functions before production cutover—not only by engineering leads optimizing deploy frequency. OpenShift consulting engagements in Mumbai typically open with architecture and control design: RBAC baselines, admission policy, GitOps promotion evidence, and disaster recovery topology that supervisory questionnaires can reference without post-incident reconstruction.",
      "NBFC and mid-tier financial platforms face a compressed version of the same pressure. They compete on digital lending and payments velocity while RBI guidelines on IT outsourcing, cybersecurity, and business continuity apply with less tolerance for informal change management. Consulting workshops map tenancy boundaries, break-glass access, and incident communication paths before deployment services promote workloads to production. Security is not a late-stage hardening sprint—it is encoded in cluster configuration, pipeline gates, and upgrade discipline from the first architecture review.",
      "Disaster recovery and business continuity dominate Mumbai buyer conversations in ways Bangalore SaaS teams rarely prioritize at the same intensity. Active-active and warm-standby patterns across Mumbai on-prem estates and ap-south-1 ROSA footprints require rehearsed failover—not slide-deck RPO claims. Support and managed services engagements include DR exercise planning, observability validation during failover tests, and runbooks that integration teams can execute when trading or settlement windows constrain maintenance tolerance. Upgrade services coordinate minor version transitions so DR clusters do not lag production patch posture beyond accepted risk thresholds.",
      "Deployment services in Mumbai align GitOps promotion to change-advisory rhythms common in BFSI—automated compliance gates in CI, environment segregation between non-prod and production, and traceable image promotion paths that satisfy internal audit without blocking release trains entirely. Mumbai headquarters often set governance standards implemented across Pune, Hyderabad, and Bengaluru capability centers; consulting deliverables include decision logs and reference architectures those distributed teams can adopt without reinterpretation drift. Insurance and capital markets technology groups in Lower Parel and BKC add IRDAI and SEBI-adjacent expectations—segregation between trading-adjacent and customer-record systems and DR evidence that supervisory questionnaires can reference without post-incident reconstruction.",
    ],
    serviceSummaries: [
      {
        href: "/openshift/consulting-services",
        label: "OpenShift Consulting Services",
        paragraphs: [
          "Mumbai BFSI and NBFC architecture reviews address multi-cluster tenancy, DR topology, GitOps evidence for change advisory boards, and DPDP-aligned data flows before irreversible procurement commitments. Assessments produce prioritized roadmaps that balance RBI oversight expectations with delivery commitments from business-aligned application owners.",
          "Workshops resolve managed versus self-operated models, hybrid connectivity between on-prem Mumbai data centers and ap-south-1, and identity integration with enterprise AD patterns common in financial headquarters. Deliverables include control mappings and decision records suitable for group risk and internal audit review.",
          "NBFC-specific assessments address lending and payments integration endpoints, third-party API dependencies, and segregation between customer-facing and back-office workloads on shared OpenShift estates. DR consulting defines measurable RPO and RTO targets with rehearsal cadence—not aspirational recovery objectives disconnected from integration test results.",
        ],
      },
      {
        href: "/openshift/support-services",
        label: "OpenShift Support Services",
        paragraphs: [
          "Production support for Mumbai financial platforms covers incident triage, certificate lifecycle, operator health, and z-stream coordination around trading, settlement, and quarter-end freeze windows. Severity classification and communication protocols align to BFSI command structures—not generic SaaS on-call assumptions.",
          "Support engagements produce recurring evidence—patch reports, incident summaries, access reviews—for RBI outsourcing and internal vendor governance. Monthly health reviews surface capacity and alert noise trends before they become regulatory or customer-facing incidents.",
          "War-room communication templates align platform incidents with business continuity plans common in BKC and Nariman Point operations centers. Certificate expiry and ingress TLS misconfiguration—frequent root causes in multi-cluster BFSI estates—are tracked proactively rather than discovered during external penetration tests.",
        ],
      },
      {
        href: "/openshift/managed-services",
        label: "OpenShift Managed Services",
        paragraphs: [
          "Mumbai enterprises that cannot sustain overnight platform SRE coverage use managed services for patching, upgrades, incident escalation, and capacity management—with scope boundaries documented for supervisory review. Co-managed models keep architecture ownership internal while Ramatech covers defined operational tiers.",
          "Change evidence integrates with your existing ITSM and CAB workflows so managed operations do not bypass governance rails financial institutions require. Onboarding defines access scopes, break-glass procedures, and stakeholder communication paths before production handoff.",
          "Managed scope documents separate control-plane tasks from application-owner responsibilities—reducing ambiguity when incidents span platform and integration layers. Recurring patch and vulnerability reports align to RBI cybersecurity circular expectations without requiring manual reconstruction during audit sampling.",
        ],
      },
      {
        href: "/openshift/upgrade-services",
        label: "OpenShift Upgrade Services",
        paragraphs: [
          "BFSI estates defer upgrades at regulatory risk when DR clusters lag production patch posture. Upgrade services execute EUS planning with etcd backup validation, operator compatibility checks, and rollback criteria documented before maintenance windows that respect Mumbai processing calendars.",
          "Coordinated upgrade waves across primary and DR environments prevent version skew that breaks failover assumptions during supervised DR exercises. Post-upgrade stabilization validates observability, workload SLOs, and integration endpoints before closure.",
          "Upgrade readiness reviews include payment switch, core banking, and market-data integration smoke tests—because control-plane success alone does not satisfy Mumbai operations teams responsible for settlement continuity. Freeze calendars from risk and compliance functions are integrated into maintenance scheduling.",
        ],
      },
      {
        href: "/openshift/deployment-services",
        label: "OpenShift Deployment Services",
        paragraphs: [
          "GitOps-driven deployment standardizes promotion across Mumbai non-prod and production estates with policy gates and CI compliance checks suited to BFSI change evidence requirements. Teams receive SCC, route, and ImageStream migration guidance without forced rewrites of every Helm release.",
          "Production readiness validation covers probes, PodDisruptionBudgets, resource quotas, and rollback playbooks before go-live on paths that internal audit will sample. Pipeline templates integrate with enterprise change-advisory workflows common in Nariman Point and BKC technology organizations.",
          "Image signing, admission policy, and registry promotion paths are codified so security teams can sample artifacts during audit without manual cluster inspection. Environment promotion repositories separate duties between developers, platform engineers, and release managers as required by group risk policy.",
        ],
      },
    ],
    complianceNote:
      "Mumbai financial institutions operate under RBI operational resilience and outsourcing expectations, IRDAI and SEBI sector rules where applicable, and DPDP obligations on personal data processed through container platforms. NBFC and universal bank technology boards expect DR evidence, vendor access reviews, and change traceability that generic container programs under-document. We maintain consolidated regulatory and control-mapping detail on [OpenShift services in India](/openshift/india); Mumbai consulting and support engagements apply that framework to your headquarters governance model, DR topology, and audit artifact requirements without duplicating the parent page.",
    faqs: [
      {
        question: "Do you provide on-site OpenShift support in Mumbai?",
        // TODO: confirm with sales — on-site scope
        answer:
          "Remote delivery is our primary model, with on-site architecture workshops, DR exercise support, or cutover assistance scoped when BFSI operational risk warrants it. Travel and presence duration are agreed before engagement start.",
      },
      {
        question: "Which data centers in Mumbai do you deploy OpenShift to?",
        answer:
          "We deploy to customer on-prem data centers across Mumbai and MMR, AWS ap-south-1 (Mumbai) for ROSA and hybrid DR patterns, and Azure India regions when managed control planes meet residency requirements. DR topology is designed explicitly—primary and standby placement is not assumed from a default template.",
      },
      {
        question: "Can you help Mumbai BFSI teams design OpenShift disaster recovery?",
        answer:
          "Consulting and support engagements address DR topology, failover rehearsal, observability during switchover, and runbooks integration teams can execute under settlement window constraints. Upgrade services keep DR cluster versions aligned with production patch posture so failover tests reflect real operational state.",
      },
      {
        question: "How do OpenShift deployments satisfy RBI change evidence expectations in Mumbai?",
        answer:
          "Deployment and consulting engagements encode GitOps promotion gates, CI policy checks, and environment segregation that produce auditable artifacts—reconciliation history, approved change records, and image promotion traceability—without relying on manual spreadsheet tracking disconnected from cluster state.",
      },
      {
        question: "How do you handle time zone coverage for Mumbai-based OpenShift support?",
        // TODO: confirm with sales — timezone coverage
        answer:
          "Support coverage is scoped during onboarding to match Mumbai operating hours, escalation tiers, and incident communication paths expected by BFSI command structures. Maintenance windows align to agreed processing and freeze calendars.",
      },
    ],
    finalCta: {
      headline: "Discuss OpenShift for Your Mumbai Financial Platform",
      bookLabel: "Request a Quote",
      whatsappLabel: "WhatsApp Us",
    },
  },
  {
    slug: "noida",
    cityName: "Noida",
    pageName: "Noida",
    metaTitle: "OpenShift Consulting & Support Services in Noida | Ramatech",
    metaDescription:
      "OpenShift installation and air-gapped migration in Noida—on-prem IPI/UPI for PSU, government, and IT services estates in NCR.",
    h1: "OpenShift Consulting & Support Services in Noida",
    heroSubtext:
      "On-prem installation, air-gapped migration, and lifecycle operations for Noida and NCR estates—PSU data centers, government-adjacent platforms, and IT services delivery organizations across Sector corridors and Greater Noida industrial zones.",
    analyticsLabel: "openshift_india_noida",
    whatsappMessage:
      "Hi Ramatech, I want to discuss OpenShift services for our Noida operations.",
    localContext: [
      "Noida and the broader NCR footprint carry a different OpenShift buyer profile than Bengaluru product engineering or Mumbai BFSI headquarters. Public sector undertakings, government-adjacent enterprises, and large IT services organizations maintain on-prem data centers where public registry access, outbound internet during maintenance, and shared cloud tenancy are restricted or prohibited entirely. Installation services here begin with mirror registry design, certificate authority integration, DNS and load-balancer prerequisites on vSphere or bare metal—not with a assumption that OperatorHub reachability matches a SaaS playbook.",
      "Air-gapped and restricted-network segments require disconnected operator lifecycles, z-stream update paths that do not depend on ad hoc internet access during change windows, and runbooks internal teams can execute after integrator handover. Noida PSU and enterprise IT groups vary widely in Kubernetes maturity; some operate skilled platform teams, others inherit clusters from prior projects with incomplete documentation. Migration services sequence wave cutovers with rollback checkpoints suited to legacy VM and middleware estates common in decades-old data center footprints—not only cloud-native lift-and-shift patterns.",
      "IT services companies with Noida delivery centers often implement OpenShift for end clients under procurement and security constraints defined by those clients' sectors. Consulting engagements produce architecture decision records, network segmentation maps, and handover packs that satisfy client audit and internal delivery governance without exposing unrelated tenant boundaries. Managed services and upgrade programs sustain patch posture when client contracts require ongoing operational responsibility but local headcount cannot cover lifecycle tasks across multiple cluster footprints.",
      "Greater Noida industrial and logistics-adjacent IT estates add hybrid considerations: some workloads remain strictly on-prem while non-sensitive dev and test environments connect to ap-south-1 under explicit data classification. Consulting maps those boundaries before installation commitments lock topology that is expensive to reverse after PSU board or client security review. Delhi NCR government-adjacent programs often require vendor access boundaries and escorted data center procedures; runbooks document which tasks internal teams execute versus vendor-supported activities so handover matches procurement contracts and security clearance realities.",
    ],
    serviceSummaries: [
      {
        href: "/openshift/installation-services",
        label: "OpenShift Installation Services",
        paragraphs: [
          "Noida PSU and enterprise programs require User-Provisioned Infrastructure on vSphere or bare metal with network segmentation aligned to internal firewall zones and air-gapped segments. Installations include mirror registry setup, disconnected OperatorHub configuration, and certificate/DNS prerequisites validated before control plane bootstrap.",
          "Post-install validation covers SCC defaults, ingress routes, and observability baselines before application onboarding. Handover packs document architecture decisions for client audit, PSU board review, and internal IT operations teams with varying Kubernetes experience.",
          "Load balancer, DNS, and certificate integration with existing NCR network teams is coordinated during design—not discovered during go-live weekend. Storage class and CSI driver selection accounts for legacy SAN constraints common in decades-old Noida data center footprints.",
        ],
      },
      {
        href: "/openshift/migration-services",
        label: "OpenShift Migration Services",
        paragraphs: [
          "Migration from legacy VM middleware, OpenShift 3.x, or restricted-network Kubernetes estates proceeds in waves with rehearsed rollback and parallel-run validation—critical when government-adjacent systems cannot tolerate unplanned downtime. Storage, registry, and identity cutover paths are mapped before production waves begin.",
          "Decommission runbooks retire legacy platforms without orphaned DNS, firewall, or dependency links that resurface during compliance audits. Pilot migrations on non-critical workloads validate patterns before regulated or client-facing production cutovers.",
          "IT services delivery organizations receive migration playbooks that separate client tenant boundaries during cutover—so multi-client cluster estates do not leak configuration or observability data across contract lines. Batch and mainframe-adjacent integration endpoints are validated in parallel-run windows before traffic switches.",
        ],
      },
      {
        href: "/openshift/consulting-services",
        label: "OpenShift Consulting Services",
        paragraphs: [
          "Architecture workshops for Noida estates address air-gapped topology, hybrid boundaries to ap-south-1 where permitted, tenancy models for IT services multi-client delivery, and GitOps promotion standards before procurement cycles commit to irreversible designs. Assessments account for disconnected operator lifecycles and internal team skill levels.",
          "Consulting deliverables include network segmentation documentation, data-flow maps for DPDP review, and decision records suitable for PSU and client security assessments—not generic cloud-native recommendations that assume unrestricted registry access.",
          "Procurement and board-review cycles common in PSU programs are factored into roadmap phasing so architecture recommendations align with funding gates—not optimistic timelines that assume instant staffing. Skill-transfer plans document which operational tasks remain internal versus vendor-supported after handover.",
        ],
      },
      {
        href: "/openshift/managed-services",
        label: "OpenShift Managed Services",
        paragraphs: [
          "PSU and IT services organizations use managed operations when lifecycle tasks—patching, upgrades, incident response—exceed local platform headcount across multiple on-prem clusters. Scope, access boundaries, and change evidence are defined during onboarding for client and internal audit review.",
          "Co-managed models preserve internal ownership of architecture and security policy while Ramatech covers defined escalation tiers and disconnected z-stream coordination. Monthly operational reports document patch posture and incident history for contract governance.",
          "Disconnected patch workflows document mirror sync verification and rollback paths when payload transfer fails mid-window—critical for estates that cannot pull fixes from public registries during incidents. Client-facing SLA reporting for IT services vendors is formatted to contract review cadences.",
        ],
      },
      {
        href: "/openshift/upgrade-services",
        label: "OpenShift Upgrade Services",
        paragraphs: [
          "Air-gapped clusters require upgrade paths that mirror payloads and validate operator compatibility without production internet dependency. Upgrade services execute EUS planning with etcd backup drills, offline mirror sync procedures, and rollback criteria signed before maintenance windows.",
          "Coordinated upgrade waves across restricted and connected segments prevent version skew that breaks promotion or DR assumptions. Post-upgrade stabilization confirms operator health and workload behavior before handover to internal operations teams.",
          "Payload staging and checksum validation procedures are documented for internal teams who must execute mirror updates when vendor access contracts limit third-party physical data center presence. Upgrade rehearsal on non-production air-gapped segments reduces first-time failure risk on production PSU maintenance windows.",
        ],
      },
    ],
    complianceNote:
      "Noida PSU, government-adjacent, and IT services estates face DPDP obligations, client sector rules, and procurement-driven security baselines that restrict cloud connectivity and outsourcing scope. Air-gapped segments add mirror-registry governance, offline patch evidence, and handover documentation requirements that SaaS-oriented playbooks rarely address. Consolidated DPDP, RBI, and on-prem control guidance for Indian OpenShift programs is documented on [OpenShift services in India](/openshift/india); Noida engagements apply that framework to air-gapped topology, mirror registry design, and audit handover without repeating parent-page regulatory detail here.",
    faqs: [
      {
        question: "Do you provide on-site OpenShift support in Noida?",
        // TODO: confirm with sales — on-site scope
        answer:
          "Remote delivery is our primary model, with on-site installation support, cutover assistance, or architecture workshops scoped when air-gapped or PSU operational constraints require face-to-face presence. Scope and travel are agreed during onboarding.",
      },
      {
        question: "Can you install OpenShift in air-gapped Noida data centers?",
        answer:
          "Yes. Installation services include mirror registry design, disconnected OperatorHub configuration, certificate and DNS prerequisites, and z-stream update runbooks that do not depend on public internet access during production maintenance windows.",
      },
      {
        question: "Which deployment models do Noida PSU and enterprise teams typically use?",
        answer:
          "User-Provisioned Infrastructure on vSphere or bare metal is common for restricted-network segments. Hybrid models connect non-sensitive dev and test estates to ap-south-1 only where data classification and client contracts permit—topology is designed per engagement, not assumed from a single template.",
      },
      {
        question: "Do you migrate legacy VM estates to OpenShift for NCR organizations?",
        answer:
          "Migration services include wave planning, storage and registry cutover, identity reconnection, and rehearsed rollback for legacy middleware and OpenShift 3.x estates common in Noida and Greater Noida data centers. Pilot waves validate patterns before regulated or client production cutovers, with decommission runbooks that prevent orphaned dependencies from resurfacing during compliance audits.",
      },
      {
        question: "How do you handle time zone coverage for Noida-based OpenShift support?",
        // TODO: confirm with sales — timezone coverage
        answer:
          "Support coverage is scoped during onboarding to match NCR operating hours and escalation paths. Incident routing and maintenance windows are documented before production handoff—especially for estates where overnight internet-dependent remediation is not acceptable.",
      },
    ],
    finalCta: {
      headline: "Discuss OpenShift for Your Noida Estate",
      bookLabel: "Request a Quote",
      whatsappLabel: "WhatsApp Us",
    },
  },
];

export function getIndiaCityPage(slug: string) {
  return openshiftIndiaCityPages.find((page) => page.slug === slug);
}

export function getAllIndiaCitySlugs(): string[] {
  return openshiftIndiaCityPages.map((page) => page.slug);
}
