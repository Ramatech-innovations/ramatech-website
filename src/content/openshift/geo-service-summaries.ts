import type { OpenShiftGeoPage } from "./geo-types";

type ServiceSummary = OpenShiftGeoPage["serviceSummaries"][number];

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
      "Fully managed operations cover lifecycle tasks—patching, upgrades, incident response, and capacity reviews—for teams that cannot sustain 24/7 platform SRE coverage internally. Scope, access boundaries, and change evidence are defined during onboarding for RBI vendor oversight.",
      "Co-managed models blend Ramatech escalation with your internal platform team so knowledge transfer and runbook ownership remain in-house over time.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
];

export const uaeServiceSummaries: ServiceSummary[] = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift Installation Services",
    paragraphs: [
      "UAE financial and government-adjacent workloads often require hybrid installs—on-prem control planes with connectivity to AWS or Azure Middle East regions under explicit residency boundaries. We validate ingress, identity federation, and logging pipelines against data localization expectations during design.",
      "ROSA and ARO deployments in regional cloud zones follow the same governance rigor as on-prem IPI/UPI programs, with handover documentation for CBUAE cybersecurity reviews.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out. Operations cover patching, upgrades, and incident response with recurring audit artifacts for CBUAE and internal vendor governance. Self-service templates encode SCC-safe defaults and residency-aware network policy for Dubai and Abu Dhabi product squads. Assessments resolve irreversible topology decisions—tenancy, hybrid connectivity, identity—before procurement locks in sovereign constraints. Patch programs align to Middle East maintenance customs and banking vulnerability SLAs without bypassing GitOps approval gates. Incident command integrates with UAE security operations expectations, including structured communication for CBUAE-regulated platforms. Hybrid cutovers validate cross-region connectivity, identity federation, and observability continuity before legacy platforms are retired. Deployment patterns separate sovereign and burst environments with distinct promotion repos so residency boundaries remain auditable under CBUAE review. Post-install validation includes sovereign boundary checks, CBUAE-aligned access reviews, and ingress TLS profiles agreed with internal security.",
    ],
  },
  {
    href: "/openshift/deployment-services",
    label: "OpenShift Deployment Services",
    paragraphs: [
      "GitOps-driven deployment standardizes promotion across Dubai and Abu Dhabi non-prod and production estates with policy gates for regulated change evidence. Teams migrating from legacy OpenShift or Kubernetes receive SCC and route migration guidance without forced rewrites.",
      "Helm and Operator patterns are rationalized per workload class so platform governance stays consistent across distributed product teams.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift Migration Services",
    paragraphs: [
      "Migration waves account for sovereign workload constraints—workloads that cannot move to shared public tenancy remain on hybrid or on-prem targets while cloud-native services adopt ROSA/ARO. Rollback checkpoints and communication protocols align to UAE maintenance windows.",
      "Dependency mapping covers service mesh, CI/CD, and identity integrations common in UAE headquarters with global capability center delivery models.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift Support Services",
    paragraphs: [
      "Active support covers control plane health, certificate rotation, operator updates, and incident response with severity classification aligned to your internal command structure. Patch coordination respects vulnerability management expectations relevant to CBUAE-regulated environments.",
      "Monthly health reviews surface capacity and recurring incident trends before they affect customer-facing services during peak trading or seasonal demand.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/upgrade-services",
    label: "OpenShift Upgrade Services",
    paragraphs: [
      "Upgrade programs include API deprecation scanning, operator lifecycle alignment, and rehearsal in non-production before production cutover. Hybrid estates receive sequenced upgrades so sovereign segments are not blocked by cloud-only maintenance paths.",
      "Documentation captures upgrade evidence for audit requests—etcd backup integrity, validation results, and rollback readiness.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/consulting-services",
    label: "OpenShift Consulting Services",
    paragraphs: [
      "Consulting engagements help UAE enterprises choose deployment models under dual pressure—cloud-first mandates and residency constraints for regulated data. Architecture decision records support leadership approval and vendor procurement cycles.",
      "Security hardening reviews address SCC, image governance, and network segmentation for banking platforms subject to supervisory examination.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift Platform Engineering",
    paragraphs: [
      "Platform engineering establishes self-service namespaces, quota templates, and GitOps onboarding for teams scaling across UAE entities. Golden paths reduce policy exceptions that slow CBUAE-aligned change management.",
      "Developer catalog and template patterns accelerate onboarding while preserving centralized guardrails for multi-tenant shared clusters.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift Managed Services",
    paragraphs: [
      "Managed lifecycle operations suit lean platform teams supporting multiple business units under Dubai and Abu Dhabi digital programs. Upgrades, security patching, and on-call escalation are scoped with transparent SLA reporting.",
      "Access and data handling boundaries are documented during onboarding to align with UAE data residency expectations for government-adjacent workloads.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
];

export const saudiServiceSummaries: ServiceSummary[] = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift Installation Services",
    paragraphs: [
      "KSA installations address sovereign cloud, on-prem, and air-gapped requirements with mirror registries and disconnected operator update paths. Topology design maps SDAIA/NDMO classification tiers to namespace boundaries, backup locations, and telemetry flows.",
      "Government and critical infrastructure segments receive UPI programs with certificate, DNS, and storage prerequisites validated before installer execution.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out. Co-managed models transfer runbook ownership to internal teams while Ramatech covers lifecycle tasks during Vision 2030 program surges. Platform engineering accelerates onboarding while preserving classification boundaries across government-adjacent and commercial business units. Architecture reviews map NDMO classification tiers to namespace, backup, and telemetry design before multi-business-unit scale. Phase-gated upgrades validate operator health in sovereign zones before accelerated Vision 2030 timelines commit to production promotion. Escalation tiers map to SAMA incident reporting timelines with post-incident documentation suitable for supervisory follow-up. Sovereign workload migrations include mirror registry cutover plans and SAMA-aligned evidence packs for each production wave. GitOps repos encode classification-aware promotion paths and emergency rollback procedures rehearsed before Vision 2030 program cutovers. Disconnected install runbooks cover mirror promotion, operator approval paths, and classification-aware namespace defaults before handover to internal ops.",
    ],
  },
  {
    href: "/openshift/deployment-services",
    label: "OpenShift Deployment Services",
    paragraphs: [
      "Deployment services implement GitOps and Helm standards for Vision 2030 acceleration programs without sacrificing SAMA-aligned change evidence. Workload onboarding includes production readiness gates for stateful and integration-heavy services.",
      "Legacy DeploymentConfig artifacts are phased out with controlled migration paths so product commitments continue during modernization.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift Migration Services",
    paragraphs: [
      "Migration from legacy OpenShift, Kubernetes, or VM estates is wave-planned with classification-aware sequencing—regulated workloads migrate only after rollback and data reconciliation paths are rehearsed. Sovereign and hybrid targets are evaluated per workload, not forced into a single template.",
      "Post-migration stabilization confirms SLOs and operator health before legacy decommission in audit-sensitive environments.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift Support Services",
    paragraphs: [
      "Support covers etcd and control plane monitoring, incident response, and patch coordination for KSA production clusters. Escalation paths integrate with your security operations and align to SAMA incident reporting expectations where applicable.",
      "Runbooks and knowledge transfer reduce repeat incidents as platform adoption expands across business units.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/upgrade-services",
    label: "OpenShift Upgrade Services",
    paragraphs: [
      "EUS and minor upgrades are planned with operator compatibility matrices and rollback criteria suited to regulated maintenance windows. Air-gapped environments receive repeatable update procedures that do not depend on ad hoc internet access.",
      "Upgrade evidence packages support internal governance and external audit requests with traceable validation checkpoints.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/consulting-services",
    label: "OpenShift Consulting Services",
    paragraphs: [
      "Consulting helps KSA enterprises align platform strategy with sovereign cloud initiatives and SAMA cybersecurity expectations. Multi-cluster and tenancy models are designed before uncontrolled namespace growth creates governance debt.",
      "Assessments prioritize initiatives by risk reduction and execution feasibility within Vision 2030 program timelines.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift Platform Engineering",
    paragraphs: [
      "IDP programs accelerate team onboarding with SCC-safe templates and self-service provisioning—important when KSA organizations scale digital products faster than platform hiring. Policy automation reduces manual approvals that block release velocity.",
      "Platform KPIs track onboarding lead time, deployment success, and policy exception trends for leadership visibility.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift Managed Services",
    paragraphs: [
      "Managed operations deliver full lifecycle coverage for teams that cannot sustain dedicated OpenShift SRE capacity across sovereign and hybrid estates. Scope includes upgrades, security patching, and structured exit handover when operations move in-house.",
      "Change management integrates with your approval workflows so platform updates remain traceable for supervisory review.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
];

export const qatarServiceSummaries: ServiceSummary[] = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift Installation Services",
    paragraphs: [
      "Qatar installations favor right-sized cluster footprints—hybrid on-prem plus regional cloud—with network boundaries suited to QCB/QFC oversight. Smaller estates still require disciplined DNS, certificate, and storage design to avoid day-two operational debt.",
      "Energy-sector integration hubs and batch workloads inform node pool sizing, storage classes, and scheduling policies during install design.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out. Managed engagements define pre-peak readiness reviews and lifecycle ownership splits suited to lean Qatar platform organizations. IDP workflows automate tenant provisioning for small platform teams supporting integration-heavy energy and financial workloads. Consulting right-sizes cluster count and managed-services scope for lean IT organizations facing QCB operational resilience expectations. Upgrade scope prioritizes operator and node stability for batch-heavy workloads, with rollback criteria rehearsed in non-production first. Managed support covers lifecycle tasks lean teams cannot sustain—patching, on-call, and pre-peak capacity reviews before seasonal load. Smaller estates benefit from pilot migrations that prove storage and scheduling patterns before critical integration hubs move to OpenShift. Deployment automation respects strict change windows for energy integration peaks, with documented exception paths for urgent production fixes. Lean teams receive condensed operator lifecycle guides and escalation matrices sized for small platform squads supporting hybrid estates.",
    ],
  },
  {
    href: "/openshift/deployment-services",
    label: "OpenShift Deployment Services",
    paragraphs: [
      "Deployment programs standardize GitOps promotion with policy gates that produce change evidence for regulated industries. Stateful and batch services receive tailored rollout and rollback patterns for peak demand cycles common in energy and logistics integrations.",
      "CI/CD reconnection validates artifact provenance and environment promotion controls before production exposure.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift Migration Services",
    paragraphs: [
      "Migration waves prioritize workloads by criticality and coupling—lean platform teams benefit from pilot migrations that validate patterns before wider cutover. Hybrid targets preserve residency constraints while cloud burst handles non-regulated demand.",
      "Rollback checkpoints and communication protocols are documented for maintenance windows aligned to local operations.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift Support Services",
    paragraphs: [
      "Support engagements suit lean IT teams that need incident response and patch coordination without building a large internal SRE bench. Monitoring baselines cover control plane, workers, storage, and ingress signals with severity-aligned routing.",
      "Capacity reviews align to seasonal demand patterns so saturation is addressed before customer-facing degradation.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/upgrade-services",
    label: "OpenShift Upgrade Services",
    paragraphs: [
      "Upgrade services include compatibility assessment, backup validation, and controlled execution with post-change stabilization. Smaller clusters receive the same governance backbone as larger estates—rollback criteria and evidence are not abbreviated.",
      "z-stream and major upgrades are scheduled around business peak periods identified during onboarding.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/consulting-services",
    label: "OpenShift Consulting Services",
    paragraphs: [
      "Consulting helps Qatar organizations evaluate managed versus self-managed models under national cloud-first initiatives and QCB/QFC frameworks. Architecture reviews address hybrid connectivity, tenancy, and disaster recovery without over-building cluster count.",
      "Roadmaps sequence initiatives by operational risk and team capacity—critical when platform engineers cover multiple domains.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift Platform Engineering",
    paragraphs: [
      "Platform engineering reduces manual toil for namespace and pipeline requests when small platform teams support multiple business units. Golden paths encode guardrails for multi-tenant shared clusters with minimal policy exceptions.",
      "Self-service workflows remain auditable through GitOps reconciliation and approval gates.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift Managed Services",
    paragraphs: [
      "Managed-services-led engagements are common in Qatar when lifecycle tasks—patching, upgrades, on-call—exceed internal capacity. Full or co-managed models define access scopes and reporting cadence during onboarding.",
      "Operational handover and runbooks ensure continuity if scope transitions back to internal teams.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
];

export const singaporeServiceSummaries: ServiceSummary[] = [
  {
    href: "/openshift/installation-services",
    label: "OpenShift Installation Services",
    paragraphs: [
      "Singapore installs support ROSA/ARO in ap-southeast-1 and Azure Singapore regions, plus hybrid connectivity to regional integration hubs. Multi-cluster DR topology is considered during initial design—not retrofitted after production load grows.",
      "PDPA-aware logging and backup placement are mapped to tenancy and observability pipelines before workloads onboard.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out. Service reporting aligns to MAS TRM and IMDA outsourcing calendars with explicit data-handling and exit handover criteria. Developer platform SLOs—onboarding time, deploy success, policy exceptions—give regional HQ measurable signals of platform ROI. TRM-aligned assessments define fleet governance, DR topology, and outsourcing documentation before ApplicationSet-managed growth accelerates. Fleet upgrades use ApplicationSet-ordered waves so DR clusters remain within supported version skew during APAC rollout programs. Support deliverables include recurring TRM evidence packs—patch status, incident trends, and capacity summaries—for outsourcing governance. Fleet migrations coordinate version skew limits across DR clusters so failover confidence is preserved during phased workload moves. Multi-cluster promotion standards prevent ApplicationSet drift across APAC subsidiaries while preserving PDPA-aware logging and backup defaults. Fleet-ready installs include ApplicationSet bootstrap patterns, policy guardrails, and TRM-friendly architecture decision records for HQ review.",
    ],
  },
  {
    href: "/openshift/deployment-services",
    label: "OpenShift Deployment Services",
    paragraphs: [
      "GitOps-mature teams receive ApplicationSet patterns, promotion governance, and progressive rollout strategies suited to high release frequency. Deployment hardening covers probes, PDBs, and policy compliance for MAS TRM-sensitive environments.",
      "Legacy and modern deployment models are rationalized so fleet-wide standards do not block team velocity.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/migration-services",
    label: "OpenShift Migration Services",
    paragraphs: [
      "APAC regional-HQ migrations often span Singapore hub clusters and satellite regions—wave planning accounts for DR failover, data residency per jurisdiction, and GitOps reconciliation across fleets. Pilot migrations validate failover and rollback before production waves.",
      "Integration with existing observability and ITSM tooling is validated during migration readiness—not after cutover.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/support-services",
    label: "OpenShift Support Services",
    paragraphs: [
      "Support for multi-cluster estates includes fleet health monitoring, incident command, and upgrade coordination across environments. TRM-aligned incident documentation supports financial institution review cycles.",
      "Capacity and cost reviews help platform leaders optimize resource ownership without sacrificing SLO commitments.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/upgrade-services",
    label: "OpenShift Upgrade Services",
    paragraphs: [
      "Fleet upgrade programs sequence non-prod, DR, and production clusters with operator compatibility and API deprecation remediation. GitOps-controlled clusters receive coordinated promotion and rollback paths across ApplicationSets.",
      "Post-upgrade validation confirms multi-cluster behavior and observability baselines before program closure.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/consulting-services",
    label: "OpenShift Consulting Services",
    paragraphs: [
      "Consulting addresses multi-region architecture, outsourcing governance under IMDA notices, and TRM technology risk for financial platforms. Decisions on cluster count, tenancy, and DR topology are documented for board and regulator visibility.",
      "Assessments prioritize fleet-wide standards that APAC product teams can adopt without repeated exceptions.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/platform-engineering",
    label: "OpenShift Platform Engineering",
    paragraphs: [
      "IDP and golden-path programs suit Singapore teams already practicing GitOps who need self-service at scale. ApplicationSets, policy automation, and developer catalog integration reduce platform ticket volume while preserving TRM-aligned controls.",
      "Platform metrics tie onboarding speed and deployment reliability to business outcomes for regional HQ leadership.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
  {
    href: "/openshift/managed-services",
    label: "OpenShift Managed Services",
    paragraphs: [
      "Managed operations cover lifecycle tasks for APAC fleets when internal teams focus on product delivery. Outsourcing scope, data handling, and audit rights are defined during onboarding per IMDA expectations.",
      "Structured reporting connects incident trends, upgrade status, and capacity posture for TRM review cycles.",
      "Deliverables include runbooks, decision records, and handover criteria so your team retains operational ownership after engagement close-out.",
    ],
  },
];
