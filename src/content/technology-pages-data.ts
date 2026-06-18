// TODO: content review — technology authority pages generated for Prompt 2 SEO rollout
import type { TechnologyPage } from "./technology-types";

const openshiftServiceLinks: TechnologyPage["relatedLinks"] = [
  { href: "/openshift/installation-services", label: "OpenShift Installation Services" },
  { href: "/openshift/deployment-services", label: "OpenShift Deployment Services" },
  { href: "/openshift/migration-services", label: "OpenShift Migration Services" },
  { href: "/openshift/support-services", label: "OpenShift Support Services" },
  { href: "/openshift/upgrade-services", label: "OpenShift Upgrade Services" },
  { href: "/openshift/consulting-services", label: "OpenShift Consulting Services" },
  { href: "/openshift/platform-engineering", label: "OpenShift Platform Engineering" },
  { href: "/openshift/managed-services", label: "OpenShift Managed Services" },
];

export const technologyPages: TechnologyPage[] = [
  {
    slug: "openshift",
    techName: "OpenShift",
    metaTitle: "Red Hat OpenShift for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "What Red Hat OpenShift is, why enterprises choose it over vanilla Kubernetes, and how Ramatech delivers OCP platforms in production.",
    h1: "Red Hat OpenShift for Enterprise Platform Teams",
    heroSubtext:
      "OpenShift is an enterprise Kubernetes distribution with opinionated defaults—integrated registry, Routes, RBAC templates, and OperatorHub—that reduce day-two operational risk for regulated and hybrid estates.",
    whatItIs: [
      "Red Hat OpenShift Container Platform (OCP) builds on upstream Kubernetes and adds a curated control plane, developer workflows, and a certified operator ecosystem. Where vanilla Kubernetes leaves integration choices—ingress implementation, image registry, default security policies, cluster lifecycle tooling—to each organization, OpenShift ships integrated components that are tested and supported together as a single platform product.",
      "Core differentiators include Security Context Constraints (SCCs) as a first-class admission layer, OpenShift Routes as a native ingress abstraction, an integrated internal registry with ImageStreams, and OperatorHub for lifecycle-managed platform and application operators. ROSA and Azure Red Hat OpenShift extend the same operational model to managed control planes on AWS and Azure without forcing teams to abandon OpenShift semantics.",
      "For platform leaders, OpenShift is less about novelty and more about predictability: upgrade paths aligned to Red Hat support, a documented operator compatibility matrix, and a consistent developer experience whether workloads run on-prem, in sovereign cloud, or on managed ROSA/ARO. That predictability matters when audit, residency, and incident response expectations exceed what a DIY Kubernetes stack typically documents.",
    ],
    businessValue: [
      "CTOs and platform directors adopt OpenShift when Kubernetes skill depth exists but operational consistency does not. Fragmented ingress controllers, ad hoc RBAC, and per-team registry patterns create audit gaps and slow incident triage. OpenShift's opinionated defaults reduce the number of irreversible integration decisions platform teams must make during the first production quarter.",
      "Business value shows up in release safety and vendor alignment rather than raw cluster provisioning speed. GitOps promotion, policy gates, and integrated observability hooks let application teams ship faster without bypassing controls that security and compliance functions require. When Red Hat subscription and support boundaries are clear, escalation during P1 incidents does not devolve into debates about which open-source component owns the failure.",
      "Hybrid and regulated enterprises benefit when the same deployment patterns work across on-prem IPI/UPI clusters and cloud burst capacity. OpenShift tenancy, SCC baselines, and operator lifecycles remain recognizable across environments—reducing retraining cost when workloads move between data center and regional cloud for residency or capacity reasons.",
    ],
    ramatechExpertise: [
      "Ramatech delivers OpenShift across installation, deployment, migration, support, upgrade, consulting, platform engineering, and managed services. Engagements start from production constraints—RBI and IRDAI expectations in India, CBUAE and sovereign boundaries in UAE, SAMA and NDMO classification in KSA—not from generic reference architectures copied without local context.",
      "We design cluster topology, GitOps maturity, and observability baselines so day-two operations are owned by your team or co-managed with explicit scope. Case study outcomes include enterprise migration with Argo CD GitOps and measurable deploy-time reduction—see our proven migration engagement for a representative pattern.",
      "Whether you are standing up a first production cluster or consolidating multiple legacy environments, we align delivery to your residency, sector regulation, and release calendars. The service links below map to how we typically phase work: install and validate, migrate waves, operationalize releases, and sustain lifecycle tasks.",
    ],
    useCases: [
      "Hybrid BFSI pattern: on-prem control plane for regulated workloads with ROSA burst in ap-south-1 for product teams. Shared GitOps repos enforce promotion gates; SCC and network policy baselines are codified in golden-path templates so namespace onboarding does not reintroduce manual security exceptions.",
      "PSU and air-gapped segment: disconnected operator lifecycles, mirror registries, and documented z-stream procedures replace ad hoc internet access during maintenance. Installation runbooks include LDAP/OIDC smoke tests and etcd backup validation before application cutover.",
      "Multi-cluster GitOps fleet: ApplicationSets manage environment promotion across non-prod and production with policy exceptions tracked as code. Upgrade waves respect operator compatibility matrices so version skew does not break DR failover confidence during phased rollouts.",
    ],
    relatedLinks: [
      ...openshiftServiceLinks,
      {
        href: "/case-studies/openshift-enterprise-migration",
        label: "Case study: Enterprise OpenShift Migration",
      },
    ],
  },
  {
    slug: "kubernetes",
    techName: "Kubernetes",
    metaTitle: "Kubernetes for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "Kubernetes fundamentals for enterprise platforms—why teams pair upstream K8s knowledge with OpenShift for production governance and supportability.",
    h1: "Kubernetes Fundamentals for Enterprise Platforms",
    heroSubtext:
      "Kubernetes is the orchestration layer most enterprises standardize on—but production success depends on governance, security defaults, and lifecycle discipline that raw clusters rarely ship with out of the box.",
    whatItIs: [
      "Kubernetes schedules containerized workloads across a pool of nodes, reconciling desired state declared in API objects—Deployments, StatefulSets, Services, Ingress—against actual cluster state. The control plane (API server, scheduler, controller manager, etcd) separates orchestration logic from worker nodes that run kubelet and container runtime components.",
      "Upstream Kubernetes is intentionally extensible: ingress controllers, CSI storage drivers, CNI plugins, and admission policies are pluggable. That flexibility empowers platform engineering but shifts integration burden to the operator. Teams must choose and maintain each layer, document upgrade compatibility, and train application developers on cluster-specific behaviors.",
      "Enterprise adoption typically progresses from a single shared cluster to multi-tenant namespaces, then to fleet patterns with policy automation and GitOps. Pain points emerge at boundaries—SCC-equivalent pod security, image provenance, quota fairness, and blast-radius isolation—that vanilla clusters address through bespoke tooling unless a distribution like OpenShift encodes defaults.",
    ],
    businessValue: [
      "Platform leaders invest in Kubernetes to decouple application release cadence from infrastructure procurement—not to operate etcd backups as a hobby. Business value materializes when teams can provision namespaces, enforce policy, and observe workloads without ticket queues measured in weeks.",
      "Running raw Kubernetes without a distribution strategy often underestimates day-two cost: CVE response on control plane components, ingress certificate rotation, and CRD upgrade ordering during minor version bumps. CTOs weigh TCO of internal platform headcount against distributions that bundle supportable integration choices.",
      "Kubernetes skills remain essential even when OpenShift is the production standard. Teams that understand Pods, Services, and API reconciliation learn OpenShift faster; conversely, OpenShift-specific concepts—Routes, SCCs, ImageStreams—must be mapped during migration from EKS, GKE, AKS, or self-managed upstream clusters.",
    ],
    ramatechExpertise: [
      "Ramatech consulting engagements assess Kubernetes maturity, migration readiness, and OpenShift fit before procurement commits to topology. We map SCC compatibility gaps, storage and ingress differences, and CI/CD reconnection paths for teams moving from vanilla Kubernetes or OpenShift 3.x.",
      "Migration services sequence waves by criticality with rollback checkpoints—essential when regulated systems cannot tolerate unplanned downtime. Architecture workshops produce decision records that survive stakeholder rotation during multi-quarter programs.",
      "We do not treat Kubernetes and OpenShift as competing narratives: upstream knowledge informs how we design tenancy, GitOps, and observability on OCP. The consulting and migration service links below are typical entry points for enterprises pairing K8s experience with OpenShift production governance.",
    ],
    useCases: [
      "EKS/GKE lift-and-shift: pilot namespaces validate SCC and Route semantics before production waves. Helm charts are tested against admission policies; ImageStream promotion replaces implicit latest-tag pulls where governance requires traceability.",
      "OpenShift 3.x to 4.x transition: architectural shifts in cluster operations, router/ingress models, and operator dependencies are sequenced with etcd backup drills and parallel-run validation before executive cutover approval.",
      "Platform assessment for cloud-first mandate: consulting deliverables compare managed ROSA/ARO against on-prem control planes for sovereignty, document subscription and operational ownership boundaries, and prioritize remediation that unlocks migration—not cosmetic cluster refreshes.",
    ],
    relatedLinks: [
      { href: "/openshift/consulting-services", label: "OpenShift Consulting Services" },
      { href: "/openshift/migration-services", label: "OpenShift Migration Services" },
    ],
  },
  {
    slug: "argocd",
    techName: "Argo CD",
    metaTitle: "Argo CD for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "GitOps with Argo CD and the OpenShift GitOps Operator—how Ramatech automates deployment promotion and fleet reconciliation on OCP.",
    h1: "Argo CD and GitOps on OpenShift",
    heroSubtext:
      "Argo CD reconciles cluster state from Git—giving platform teams auditable promotion paths, drift detection, and rollback semantics that manual kubectl apply workflows cannot match at scale.",
    whatItIs: [
      "Argo CD is a declarative GitOps continuous delivery tool for Kubernetes. Application manifests live in Git repositories; Argo CD controllers compare live cluster resources against desired commits and reconcile differences. Sync policies, health assessments, and rollback to previous Git revisions provide operational controls beyond imperative deploy scripts.",
      "On OpenShift, the GitOps Operator packages Argo CD with Red Hat-supported lifecycle management, integrating with OCP RBAC and routes for the Argo UI and API. ApplicationSet controllers generate Applications from generators—cluster lists, Git directories, SCM providers—so fleet-wide promotion does not require copy-paste Application YAML per cluster.",
      "GitOps complements CI: pipelines build and test artifacts; Git commits record what should run in each environment. Policy-as-code tools—Kyverno, OPA Gatekeeper—can enforce admission rules on resources Argo CD applies, reducing manual CAB spreadsheets that drift from actual cluster state.",
    ],
    businessValue: [
      "CTOs adopt GitOps when change evidence matters as much as change speed. Every promotion leaves a Git commit hash, author, and diff—artifacts auditors and incident responders can trace without reconstructing tribal knowledge from chat logs.",
      "Drift detection surfaces manual hotfixes that bypass process. Platform teams see out-of-sync Applications before they become production surprises during the next sync wave. Rollback becomes a Git revert with rehearsed playbooks rather than an undocumented kubectl delete spree.",
      "ApplicationSets scale onboarding: new clusters inherit standard Applications from generators, preserving environment parity across DR pairs and regional subsidiaries. Business units ship faster when golden paths are Git-backed, not ticket-backed.",
    ],
    ramatechExpertise: [
      "Deployment services standardize GitOps promotion with Argo CD or OpenShift GitOps—approval gates, rollout strategies, and rollback playbooks validated before go-live. Platform engineering engagements implement ApplicationSets, policy automation, and developer catalog integration to reduce ticket volume while preserving TRM-aligned controls.",
      "Our enterprise migration case study achieved one hundred percent GitOps coverage with measurable deploy-time reduction—representative of how we connect GitOps design to business outcomes, not only to tooling installation.",
      "Engagements include runbook handover so internal teams retain sync, rollback, and incident ownership. Related service and case study links below map to how we typically phase GitOps adoption on OpenShift.",
    ],
    useCases: [
      "Multi-environment promotion: separate branches or overlays per stage with automated sync windows and manual approval for production. NetworkPolicy and SCC manifests are versioned alongside application Deployments so policy drift is visible in the same diff.",
      "Fleet ApplicationSets: cluster generators onboard DR and regional clusters with identical baseline Applications; upgrade waves order sync pauses so operator upgrades do not fight in-flight application reconciliation.",
      "Policy-as-code gate: Kyverno or Gatekeeper policies reject manifests that violate registry allowlists, resource limits, or label standards before Argo CD marks Applications healthy—closing the loop between Git intent and admission enforcement.",
    ],
    relatedLinks: [
      { href: "/openshift/deployment-services", label: "OpenShift Deployment Services" },
      { href: "/openshift/platform-engineering", label: "OpenShift Platform Engineering" },
      {
        href: "/case-studies/openshift-enterprise-migration",
        label: "Case study: Enterprise OpenShift Migration (100% GitOps coverage)",
      },
    ],
  },
  {
    slug: "prometheus",
    techName: "Prometheus",
    metaTitle: "Prometheus for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "Prometheus metrics and alerting on OpenShift—cluster SLOs, workload saturation signals, and day-two observability Ramatech implements in production.",
    h1: "Prometheus for OpenShift Observability",
    heroSubtext:
      "Prometheus collects time-series metrics from Kubernetes and OpenShift components—forming the alerting backbone platform teams use before customer-facing SLOs degrade.",
    whatItIs: [
      "Prometheus scrapes HTTP metrics endpoints on a pull model, storing samples in a local time-series database optimized for operational queries. PromQL supports rate, aggregation, and alerting rules that fire when thresholds breach—feeding Alertmanager for routing, silencing, and notification to PagerDuty, Slack, or ITSM tools.",
      "On OpenShift, the cluster monitoring stack includes Prometheus Operator patterns for ServiceMonitor and PodMonitor CRDs, integrating platform and user-workload metrics under RBAC boundaries. Node, kube-state, and control-plane exporters provide baseline signals; application teams expose /metrics from services they own.",
      "Prometheus is typically paired with long-term storage—Thanos, VictoriaMetrics, or cloud vendor backends—for retention beyond local disk limits. The scrape model suits Kubernetes' dynamic endpoints; service discovery relabeling keeps targets current as pods churn.",
    ],
    businessValue: [
      "Without metrics, incidents are narratives; with metrics, they are timelines. CTOs justify observability investment when MTTR drops and release risk is quantified—error budgets consumed by failed deploys, saturation before autoscaling kicks in, etcd latency preceding API slowness.",
      "Alert noise erodes on-call sustainability. Platform teams need hierarchical rules: platform SLOs escalate to platform SRE; application alerts route to product owners. Prometheus recording rules pre-aggregate expensive queries so dashboards and alerts stay fast at fleet scale.",
      "Regulated enterprises require retention and access boundaries for metrics that may embed label cardinality hints about workloads. Designing scrape namespaces, remote-write paths, and RBAC up front avoids retrofitting compliance after telemetry volume grows.",
    ],
    ramatechExpertise: [
      "Support and managed services engagements baseline alert noise, tune recording rules, and align z-stream patch windows with observability behavior post-upgrade. We integrate Prometheus alerts with existing ITSM and produce evidence suitable for vendor oversight reviews.",
      "Our observability platform case study unified metrics, logs, and traces with SLO-based alerting—illustrative of how Prometheus fits a broader telemetry strategy on Kubernetes-class platforms.",
      "Capacity reviews connect utilization trends to architecture decisions—whether to expand node pools, consolidate tenants, or introduce burst capacity—using Prometheus history rather than point-in-time kubectl top snapshots.",
    ],
    useCases: [
      "Cluster health SLOs: API server availability, scheduler latency, and etcd fsync duration alert before user-visible outages. Runbooks tie PromQL expressions to remediation steps owned by platform or vendor support.",
      "Workload saturation: CPU throttling, memory pressure, and PVC utilization rules protect stateful services during batch peaks—common in energy and financial integration hubs.",
      "Remote write fan-out: regional clusters forward metrics to a central TSDB for APAC HQ dashboards while keeping scrape paths in-region for residency-sensitive labels.",
    ],
    relatedLinks: [
      { href: "/openshift/support-services", label: "OpenShift Support Services" },
      { href: "/openshift/managed-services", label: "OpenShift Managed Services" },
      {
        href: "/case-studies/observability-platform-scale",
        label: "Case study: Observability Platform at Scale",
      },
    ],
  },
  {
    slug: "grafana",
    techName: "Grafana",
    metaTitle: "Grafana for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "Grafana dashboards for OpenShift and Kubernetes—visualizing platform SLOs, incident timelines, and capacity trends Ramatech delivers with support services.",
    h1: "Grafana Dashboards for Platform Operations",
    heroSubtext:
      "Grafana turns Prometheus and Loki metrics into dashboards executives and engineers share—aligning incident response, capacity planning, and release reviews on the same visual language.",
    whatItIs: [
      "Grafana is an open-source visualization and analytics platform. It queries Prometheus, Loki, Tempo, Elasticsearch, and other datasources to render dashboards, alerts, and explore views. Variables and folder RBAC let platform teams publish curated dashboards while allowing squad-level customization within guardrails.",
      "On OpenShift, Grafana often sits beside cluster monitoring—either as part of a consolidated observability stack or as a dedicated instance for application and business KPIs. Dashboards encode operational knowledge: which panels matter during ingress saturation, which etcd indicators precede control-plane instability, and how to correlate deploy markers with error-rate spikes.",
      "Grafana alerting can delegate to Alertmanager or use built-in notification channels. Unified alerting reduces duplicate rule definitions when teams already standardized on Prometheus for metric evaluation.",
    ],
    businessValue: [
      "Dashboards translate infrastructure signals into decisions platform directors can review in QBRs—incident counts, capacity headroom, deploy frequency, policy exception trends. Without visualization, Prometheus data stays engineer-local and executive narratives rely on anecdotes.",
      "Shared dashboards shorten incident bridges: SRE, application, and network participants reference the same time range and annotations. Post-incident reviews attach dashboard links as evidence—not screenshots that age immediately.",
      "Developer platforms benefit when golden-path onboarding includes a starter dashboard pack—RED metrics, saturation, and trace exemplars—so new services are observable on day one, not after the first customer-facing outage.",
    ],
    ramatechExpertise: [
      "Support services tune dashboard libraries, reduce alert duplication, and align maintenance windows with observability gaps discovered during onboarding. We document which dashboards are authoritative for platform SLOs versus exploratory views.",
      "Observability case study delivery included Grafana alongside VictoriaMetrics and structured logging—representative of how we connect visualization to SLO targets and faster MTTR.",
      "Managed operations include periodic dashboard hygiene: retiring orphaned panels, fixing broken datasource references after upgrades, and adding panels when new operators join the cluster monitoring footprint.",
    ],
    useCases: [
      "Platform NOC board: single-pane cluster health across regions with drill-down links to per-cluster Prometheus explore views—used during regulated change windows and executive incident calls.",
      "Release verification dashboard: deploy annotations overlay error rates and latency histograms so rollback decisions are data-driven within minutes of promotion.",
      "IDP self-service pack: namespace onboarding provisions folder-scoped Grafana dashboards from templates—pairing golden-path Deployments with observable defaults.",
    ],
    relatedLinks: [
      { href: "/openshift/support-services", label: "OpenShift Support Services" },
      {
        href: "/case-studies/observability-platform-scale",
        label: "Case study: Observability Platform at Scale",
      },
    ],
  },
  {
    slug: "red-hat",
    techName: "Red Hat",
    // TODO: confirm Red Hat partner tier with marketing — do not name Ready/Advanced/Premier unless verified
    metaTitle: "Red Hat for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "Red Hat ecosystem expertise for OpenShift—subscriptions, OperatorHub, and certified operators without unverified partner tier claims.",
    h1: "Red Hat Ecosystem for Enterprise OpenShift",
    heroSubtext:
      "OpenShift sits inside the Red Hat portfolio—subscriptions, certified operators, and support boundaries that platform procurement and operations teams must align before clusters multiply.",
    whatItIs: [
      "Red Hat sells OpenShift as a subscription product with support entitlements, access to Red Hat Container Catalog images, and lifecycle guidance for minor and z-stream releases. Subscriptions are sized per core or per managed-service unit depending on deployment model—ROSA, ARO, on-prem IPI/UPI each carry distinct commercial and operational terms customers must map to internal chargeback.",
      "OperatorHub distributes Red Hat and partner operators tested for OCP compatibility. Certified operators declare supported versions and upgrade paths; community operators require additional diligence before production dependence. Platform teams curate allowlists so namespaces cannot install unvetted operators that bypass change governance.",
      "The broader Red Hat stack—RHEL nodes, Ansible automation, advanced cluster management—intersects OpenShift delivery when enterprises standardize on Red Hat for hybrid cloud. Integration choices should be documented in architecture decision records so support escalations land with the correct vendor boundary.",
    ],
    businessValue: [
      "Procurement and CTO offices need clarity: what the subscription covers, what remains customer-operated, and how third-party integrators fit RBI-style vendor oversight. Ambiguous ownership prolongs incidents and complicates audit responses when patch cadence questions arise.",
      "Certified operator models reduce compatibility roulette during upgrades—provided teams enforce allowlists and read compatibility matrices before maintenance windows. Business risk drops when operator lifecycles are scheduled, not reactive.",
      "Ramatech brings Red Hat ecosystem expertise to delivery—working alongside your Red Hat account team on subscription sizing and upgrade guidance without substituting for Red Hat support entitlements.",
    ],
    ramatechExpertise: [
      "We work with customer Red Hat subscriptions across installation, upgrade, and managed services—documenting access scopes and change evidence for enterprises under outsourcing scrutiny. We do not resell subscriptions; we align technical delivery to subscription boundaries agreed with your account team.",
      "Consulting maps ROSA versus on-prem control planes, OperatorHub curation, and disconnected mirror strategies for air-gapped segments. Support engagements coordinate z-stream cadence with Red Hat guidance and internal security SLAs.",
      "All eight OpenShift service lines below represent how we phase Red Hat platform work—from first install through fleet GitOps and fully managed lifecycle operations.",
    ],
    useCases: [
      "Subscription and topology workshop: document cores, support tier, and managed versus self-managed split before multi-business-unit rollout—preventing shadow clusters without entitlement coverage.",
      "Operator allowlist governance: GitOps-managed CatalogSource and OperatorGroup patterns with approval gates for new operators—common in BFSI estates under change-advisory discipline.",
      "Disconnected lifecycle: mirror registries and staged operator bundles for sovereign zones where public catalog access is prohibited—paired with Ansible or approved manual runbooks for z-stream updates.",
    ],
    relatedLinks: openshiftServiceLinks,
  },
  {
    slug: "ansible",
    techName: "Ansible",
    metaTitle: "Ansible for Enterprise OpenShift Platforms | Ramatech",
    metaDescription:
      "Ansible automation for OpenShift day-two operations—node consistency, patching workflows, and install prerequisites Ramatech uses on enterprise platforms.",
    h1: "Ansible Automation for OpenShift Lifecycle",
    heroSubtext:
      "Ansible automates configuration and orchestration—useful for OpenShift install prerequisites, node hardening, and repeatable day-two tasks that should not depend on manual SSH runbooks.",
    whatItIs: [
      "Ansible is an agentless automation engine that applies declarative playbooks over SSH or APIs. Roles and collections package reusable tasks—package installs, sysctl tuning, certificate distribution, service restarts—idempotently across fleets of RHEL hosts that underpin OpenShift nodes.",
      "For OpenShift, Ansible appears in install planning—load balancer prep, DNS, NTP, registry mirrors—and in day-two hygiene: ensuring worker configuration drift is corrected before it becomes subtle production instability. Advanced Cluster Management and standalone Ansible Automation Platform can coordinate policies across hybrid estates when customers license those products.",
      "Ansible complements Kubernetes reconciliation: cluster controllers manage pod desired state; Ansible manages host-level consistency that kubelet assumes but does not enforce—disk layout, kernel modules, chrony, firewall baselines.",
    ],
    businessValue: [
      "Manual node configuration does not scale past a handful of clusters. Platform directors adopt Ansible when audits ask how baselines are enforced across hundreds of RHEL hosts—and the honest answer cannot be spreadsheets.",
      "Patch and remediating playbooks integrate with change windows: CVE fixes on node OS packages are rehearsed in non-production, executed with rollback snapshots, and logged for compliance evidence. Incidents rooted in config drift drop when periodic ansible-pull or AWX jobs re-apply baselines.",
      "Install-phase automation reduces time-to-first-production-cluster when prerequisites are the long pole—DNS, certs, and mirror setup for disconnected installs are repeatable modules rather than one-off consultant notes.",
    ],
    ramatechExpertise: [
      "Installation services include prerequisite automation and handover playbooks for internal teams continuing host lifecycle work. Managed services pair Ansible-orchestrated node maintenance with OpenShift operator and control-plane patching under agreed scope.",
      "We document which tasks remain Ansible-owned versus OpenShift Machine Config Operator-owned—avoiding duplicate or conflicting configuration managers on the same nodes.",
      "Engagements deliver version-controlled playbooks alongside cluster runbooks so operational ownership is clear after handover.",
    ],
    useCases: [
      "IPI/UPI prerequisite pipeline: Ansible roles prepare DNS, load balancers, and registry mirrors; OpenShift installer consumes validated inputs—reducing install failures discovered late in the process.",
      "CVE remediation wave: AWX job templates target node groups per maintenance window; post-job verification checks kubelet health and cordon status before returning nodes to schedulable pools.",
      "Disconnected mirror sync: scheduled playbooks promote approved image and operator bundles into air-gapped registries with signed checksum validation before cluster admins trigger upgrades.",
    ],
    relatedLinks: [
      { href: "/openshift/installation-services", label: "OpenShift Installation Services" },
      { href: "/openshift/managed-services", label: "OpenShift Managed Services" },
    ],
  },
];

export function getTechnologyPage(slug: string) {
  return technologyPages.find((p) => p.slug === slug);
}

export function getAllTechnologySlugs(): string[] {
  return technologyPages.map((p) => p.slug);
}
