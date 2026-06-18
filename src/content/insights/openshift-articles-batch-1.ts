// TODO: content review — OpenShift insight articles generated for Prompt 3 SEO rollout
import type { InsightArticle } from "./insight-types";
import { INSIGHT_SCHEMA_DATE } from "./insight-types";

export const openshiftArticlesBatch1: InsightArticle[] = [
  {
    slug: "installation-guide",
    title: "OpenShift Installation Guide",
    h1: "OpenShift Installation Guide for Production-Ready Clusters",
    primaryKeyword: "openshift installation guide",
    metaTitle: "OpenShift Installation Guide — OpenShift Guide | Ramatech Insights",
    metaDescription:
      "OpenShift installation guide covering IPI, UPI, bare metal, vSphere, and ROSA prerequisites, etcd sizing, and day-0 validation for enterprise clusters.",
    summary:
      "A practical OpenShift installation guide for platform engineers planning IPI, UPI, or managed ROSA deployments — from DNS and load balancers through etcd topology and post-install validation.",
    intro: [
      "This OpenShift installation guide is written for platform engineers who must deliver a production-ready cluster on the first attempt — not a lab that collapses under real ingress, registry, and etcd load. Whether you are deploying on bare metal with the Agent-based installer, standing up IPI on vSphere, or evaluating Red Hat OpenShift Service on AWS (ROSA), the same fundamentals apply: correct DNS and load-balancer design, a supported etcd member topology, and Red Hat subscription alignment before you run openshift-install.",
      "OpenShift Container Platform (OCP) is not vanilla Kubernetes with a console bolted on. The installer provisions an integrated control plane — API server, scheduler, controller manager, OpenShift OAuth, internal registry, routes, and the Operator Lifecycle Manager (OLM) — as a single opinionated stack. Skipping prerequisite validation (forward/reverse DNS, NTP, MTU consistency, storage classes) is the most common reason installs succeed on paper but fail during the first application rollout.",
      "The sections below walk through deployment-model selection, infrastructure prerequisites, installer configuration patterns, and the post-install checks we run on every engagement before handing a cluster to application teams. Treat this as a companion to Red Hat documentation: it emphasizes the decisions that are expensive to reverse after day 0.",
      "We also cover disconnected mirror registries, air-gapped constraints, and the validation gates that separate a demo cluster from one that survives first Black Friday traffic. Skipping any prerequisite on this list typically costs a full reinstall or a multi-day outage during the first production push.",
      "Platform engineers should treat this openshift installation guide as a checklist with sign-offs from network, storage, security, and identity teams — not a solo weekend project. Cross-functional gates prevent the classic pattern of a cluster that boots but cannot pass corporate penetration test or storage performance review.",
    ],
    sections: [
      {
        id: "deployment-models",
        title: "Choosing an OpenShift Installation Model",
        paragraphs: [
          "OpenShift supports three broad installation postures. Installer-provisioned infrastructure (IPI) lets openshift-install create VPCs, machines, and load balancers on supported clouds (AWS, Azure, GCP) or vSphere when you supply adequate permissions. User-provisioned infrastructure (UPI) assumes you provision VMs, DNS records, and load balancers yourself; the installer only lays down the control plane and workers. Agent-based installation targets bare metal and disconnected environments where PXE or cloud APIs are unavailable — agents boot from ISO, discover hardware, and join an assisted-service workflow.",
          "For regulated enterprises in India and the Gulf, UPI and agent-based paths dominate because networking, firewall, and storage teams retain control of every hop. IPI accelerates time-to-cluster in ROSA or public-cloud landing zones where IAM roles and pre-approved VPC templates already exist. The wrong choice is usually obvious: if your security team will not grant the installer cloud-admin rights, IPI is off the table regardless of how fast it looks on a slide.",
          "Managed offerings — ROSA, Azure Red Hat OpenShift (ARO), and OpenShift Dedicated — outsource control-plane lifecycle while you still own worker pools, namespaces, and RBAC. They are not shortcuts around architecture review; you still need private-link design, egress controls, and identity federation identical to self-managed OCP. Map each workload class (stateful, GPU, Windows containers) to a model before procurement, not after the purchase order is signed.",
          "Hybrid topologies mixing on-prem UPI control planes with cloud burst workers multiply operational complexity — document network latency between API server and kubelets, and label machine config pools so OS updates do not drain an entire region simultaneously. Proof-of-concept clusters should mirror production topology even when scaled down; a three-node all-in-one lab will not surface etcd or ingress bottlenecks visible at production scale.",
        ],
      },
      {
        id: "prerequisites",
        title: "Infrastructure Prerequisites Before openshift-install",
        paragraphs: [
          "DNS is the silent killer of OpenShift installs. You need resolvable records for api.<cluster>.<base_domain>, *.apps.<cluster>.<base_domain>, and each etcd member when running UPI. Forward and reverse lookups must agree; openshift-install and the internal DNS operator assume this during bootstrap. Load balancers must expose 6443 (API), 22623 (machine config server during bootstrap only), and 80/443 for the ingress router — with backend health checks that survive control-plane rolling restarts.",
          "Storage must be decided before install when using IPI on platforms that provision default storage classes. On vSphere, assign a datastore and storage policy; on bare metal, deploy OpenShift Data Foundation (ODF) or a supported CSI driver before stateful workloads land. etcd performance is non-negotiable: use SSD-backed volumes with fsync latency under 10 ms; place etcd members on fault-isolated failure domains (racks, AZs). Red Hat supports three or five etcd members — never two, never six.",
          "Pull secrets, Red Hat subscriptions, and mirror registries belong in the prerequisite checklist for disconnected installs. Use oc mirror to populate a local registry, patch the ClusterVersion and ImageDigestMirrorSet resources, and verify the OperatorHub catalog sources resolve before declaring success. NTP skew beyond a few hundred milliseconds will eventually break TLS and etcd quorum — validate chrony or systemd-timesyncd on every node pre-flight.",
          "Firewall change windows must precede install, not follow it. Document required egress to quay.io, registry.redhat.io, and your mirror endpoints; bootstrap pulls dozens of images before the cluster reports healthy. MTU mismatches between overlay networks and physical switches cause intermittent TLS failures that look like application bugs — validate end-to-end with ping -M do and iperf before scheduling install weekend.",
        ],
      },
      {
        id: "installer-configuration",
        title: "Installer Configuration and OpenShift Installation Guide Patterns",
        paragraphs: [
          "The install-config.yaml is the contract between your architecture and openshift-install. Key fields — compute and control-plane replicas, networking CIDRs, platform credentials, and pullSecret — must match what network and IAM teams approved. For UPI, machine manifests and static pod definitions generated by openshift-install create cluster are applied after bootstrap; keep them in Git with the same rigor as application manifests.",
          "Network mode matters for the entire cluster lifetime. OVN-Kubernetes is the default CNI on modern OCP; configure join/subnet CIDRs that do not overlap with corporate LANs, pod networks on peered clusters, or VPN ranges. Enable network policies on day 0; retro-fitting segmentation after hundreds of namespaces exist is painful. For vSphere UPI, specify the correct platform fields (vCenter, datacenter, datastore, resource pool) — a typo here produces machines in the wrong VLAN with no obvious installer error until kubelet registration fails.",
          "Post-install, the Cluster Version Operator (CVO) owns channel and upgrade graph alignment. Pin to a stable-4.x channel matching your support contract; document the desired initial version in change records. Enable the insights operator for remote health reporting if policy allows — it surfaces certificate expiry and etcd alarm conditions early. Capture the kubeadmin password rotation plan immediately; integrate cluster-admin access with your corporate IdP via OAuth LDAP or OIDC connectors before developers receive kubeconfig files.",
          "Machine config pools separate control-plane, general worker, and infra nodes — define them in install-config when you know ingress, monitoring, and registry components will land on dedicated nodes. Infra nodes carry router and registry pods; starving them on undersized VMs produces ingress latency under moderate RPS. Record install-config.yaml and generated manifests in version control with secrets redacted via sealed patterns or external vault references.",
        ],
      },
      {
        id: "security-hardening-day-zero",
        title: "Day-0 Security: SCCs, RBAC, and Registry Defaults",
        paragraphs: [
          "OpenShift ships Security Context Constraints (SCCs) that gate pod security before workloads run. The restricted-v2 SCC is the default target for non-privileged workloads; any chart that demands anyuid or privileged must pass security review. Audit SCC usage with oc adm policy who-can use scc and remediate before production traffic. Platform engineers should create dedicated service accounts per namespace with least-privilege roles — not hand out cluster-admin for convenience.",
          "The internal integrated registry runs on every cluster; configure image pruners and resource quotas so a single team's CI pipeline cannot fill etcd with image layer metadata. Enable image signature enforcement via sigstore or Red Hat Simple Content Access policies when compliance requires provenance. Routes and ingress controllers terminate TLS at the edge — provision corporate CA or Let's Encrypt via cert-manager operators from OperatorHub, and segregate public vs internal ingress controller shards for DMZ patterns.",
          "Audit logging via the cluster-logging operator (or LokiStack on newer releases) should be architected at install time: designate log forwarding endpoints, storage retention, and RBAC for who can read infrastructure logs. FIPS mode, if required, must be enabled during install — toggling later is unsupported. Document every deviation from the reference architecture in a runbook your on-call team can execute without opening Red Hat cases at 2 a.m.",
          "Default OAuth and kubeadmin access should be restricted before any developer onboarding. Create break-glass accounts with MFA, disable kubeadmin after IdP integration is verified, and enable audit logging for authentication failures. SCC defaults and namespace template objects can pre-provision LimitRanges and NetworkPolicy skeletons so new projects inherit secure baselines without manual ticket requests.",
        ],
      },
      {
        id: "validation-handover",
        title: "Post-Install Validation and Production Handover",
        paragraphs: [
          "A successful install ends with a repeatable validation suite, not a green check on the console. Run openshift-install wait-for install-complete, then verify all cluster operators report Available: oc get clusteroperators. Confirm DNS resolution from a corporate workstation matches in-cluster service discovery. Deploy a sample application with a route, persistent volume, and network policy — if any step fails, fix platform gaps before onboarding product teams.",
          "Backup etcd on day 1 even if disaster recovery is phase two. Schedule automated etcd snapshots to object storage with encryption at rest, and test restore on a non-production lab quarterly. Capture must-gather archives after install for baseline support cases: oc adm must-gather. Label nodes with topology labels (region, zone, rack) that match your failure-domain strategy for pod anti-affinity and storage replication.",
          "Handover documentation should include cluster ID, ingress domains, identity provider configuration, storage class matrix, upgrade channel, and support escalation paths to Red Hat TAM or a qualified partner. Platform engineering teams use this OpenShift installation guide as the first chapter; the next chapters are upgrade planning, GitOps bootstrap, and observability — all of which assume a cluster built to these standards.",
          "Run a controlled failure injection before sign-off: cordon and drain a worker, verify pods reschedule; simulate DNS outage for external dependencies and confirm application degradation matches SLO expectations. Capture baseline Prometheus metrics for API latency, etcd disk fsync, and ingress connection counts — future incidents compare against this golden week-one snapshot.",
        ],
      },
      {
        id: "disconnected-airgap",
        title: "Disconnected and Air-Gapped OpenShift Installation Guide Notes",
        paragraphs: [
          "Air-gapped installs require a mirror registry populated before bootstrap. Use oc adm release mirror and oc mirror with ImageContentSourcePolicy or ImageDigestMirrorSet objects so nodes pull from internal hostnames only. Catalog sources for OperatorHub must be mirrored separately — platform operators installed on day 2 will fail if their bundle images are unreachable.",
          "Assisted Installer for disconnected bare metal still needs intermittent connectivity or a fully local assisted-service instance. Plan USB or sneakernet transfer sizes for release images — multi-gigabyte payloads are normal. Validate checksums on every transfer; corrupted release payloads produce cryptic bootstrap errors hours into install.",
          "Document the update path for disconnected clusters before go-live: each OCP upgrade requires mirroring new release images and updated operator catalogs. Teams that nail install but neglect mirror automation defer upgrades until they are unsupported. Treat the mirror registry as tier-zero infrastructure with the same backup and HA expectations as etcd.",
          "Configure ImageDigestMirrorSet and ClusterCatalogSource objects together — mismatched mirror paths break operator installs silently until someone subscribes to a failing catalog. Test operator install from mirrored catalog in lab before declaring disconnected install complete.",
        ],
      },
    ],
    relatedServices: [
      { href: "/openshift/installation-services", label: "OpenShift Installation Services" },
    ],
    relatedTechnology: [
      { href: "/technology/openshift", label: "OpenShift" },
      { href: "/technology/red-hat", label: "Red Hat" },
    ],
    relatedReading: ["upgrade-planning"],
    datePublished: INSIGHT_SCHEMA_DATE,
    dateModified: INSIGHT_SCHEMA_DATE,
  },
  {
    slug: "deployment-best-practices",
    title: "OpenShift Deployment Best Practices",
    h1: "OpenShift Deployment Best Practices for Reliable Workload Rollouts",
    primaryKeyword: "openshift deployment best practices",
    metaTitle: "OpenShift Deployment Best Practices — OpenShift Guide | Ramatech Insights",
    metaDescription:
      "OpenShift deployment best practices for rollouts, probes, resource quotas, Routes, and CI/CD integration — operator guidance for production OCP workloads.",
    summary:
      "Operator-focused OpenShift deployment best practices covering rollout strategies, health probes, resource governance, Routes, and pipeline integration for teams shipping on OCP.",
    intro: [
      "OpenShift deployment best practices start where Kubernetes tutorials end: your Deployment or StatefulSet must coexist with Security Context Constraints, project quotas, image pull secrets, and OpenShift Routes — not just pass kubectl apply on a laptop. Platform teams that skip these constraints discover them in production when pods sit Pending, SCC admission rejects containers, or ingress returns 503s because readiness probes never matched real startup behavior.",
      "OCP adds opinionated defaults — internal registry mirroring, built-in Routes, integrated OAuth, and the Developer perspective — but those conveniences do not replace engineering discipline. Every workload needs explicit CPU and memory requests and limits, liveness and readiness probes aligned with application warm-up, graceful termination hooks, and labels that selectors and NetworkPolicies can target consistently.",
      "This article documents the deployment patterns we enforce on managed and advisory engagements: rollout configuration, autoscaling boundaries, config separation, secret handling, and the handoff points between CI pipelines and cluster reconciliation. Apply them whether you deploy with oc, Helm, Kustomize, or a GitOps controller.",
    ],
    sections: [
      {
        id: "rollout-strategies",
        title: "Rollout Strategies and Deployment Controller Behavior",
        paragraphs: [
          "RollingUpdate is the default Deployment strategy on OpenShift, but maxSurge and maxUnavailable must reflect real capacity. A single-replica Deployment with maxUnavailable 1 causes total outage during every push. For zero-downtime services, run at least two replicas, set maxUnavailable to 0 and maxSurge to 1, and ensure preStop hooks drain connections before SIGTERM. StatefulSets require ordered rollout — validate persistent volume reattachment and identity stability across pod restarts.",
          "OpenShift does not ship built-in blue/green or canary controllers in the core platform; implement them with Argo Rollouts, Flagger, or service mesh traffic splitting when progressive delivery is required. For batch and CronJob workloads, use activeDeadlineSeconds and backoff limits so a stuck Job does not hold cluster resources indefinitely. DaemonSets on infra nodes need taints and tolerations documented — observability agents and log forwarders are common examples.",
          "Use oc rollout status and oc rollout history as mandatory CI gates. Pin image digests in manifests rather than floating :latest tags; the internal registry supports imagestreams for native digest tracking when teams adopt OpenShift-native workflows. Record change metadata in annotations (git commit, pipeline ID) for traceability during incident response.",
          "Recreate pods deliberately after ConfigMap changes when applications do not hot-reload config — stale mounts cause split-brain behavior across replicas. Use checksum annotations on pod templates to trigger rolling updates when ConfigMaps change. For StatefulSets, ordered rollout means config updates take longer; schedule during maintenance windows.",
        ],
      },
      {
        id: "health-probes-resources",
        title: "Health Probes, Resources, and Quality of Service",
        paragraphs: [
          "Readiness probes gate Service endpoints and Route backends; liveness probes restart unhealthy containers. HTTP probes against /healthz are insufficient when the process listens but cannot serve traffic — include dependency checks with timeouts that exceed worst-case cold start. Startup probes protect slow-init containers from premature liveness kills during JVM or cache warm-up.",
          "Requests and limits define Quality of Service classes. Burstable pods are evicted first under memory pressure; Guaranteed pods survive longer but can still OOMKill if limits are wrong. Set LimitRanges at the namespace level so developers cannot omit requests. ClusterResourceQuota and ResourceQuota prevent a single project from exhausting node capacity — pair them with PriorityClasses for platform-critical workloads.",
          "Vertical Pod Autoscaler and Horizontal Pod Autoscaler operators are available via OperatorHub; enable them deliberately with min/max bounds. Without bounds, a misconfigured VPA recommendation can request eight CPUs for a sidecar. Monitor quota utilization in Prometheus and alert before projects hit hard limits during deploy windows.",
          "Init containers should complete quickly and respect resource requests — long init chains block pod startup and fail readiness deadlines. Sidecars for logging and service mesh inflate resource totals; account for them in namespace quotas. Use PodDisruptionBudget minAvailable tuned to replica count so voluntary disruptions during node drains do not violate availability targets.",
        ],
      },
      {
        id: "networking-routes",
        title: "Networking, Routes, and Ingress Patterns",
        paragraphs: [
          "OpenShift Routes are first-class ingress objects backed by the HAProxy-based ingress controller. Annotate Routes for TLS termination (edge, passthrough, re-encrypt), timeout values, and wildcard policies. Split public and private ingress controller deployments when DMZ and intranet traffic must not share a controller shard. For gRPC or WebSocket-heavy apps, tune route timeouts and verify backend protocol annotations.",
          "NetworkPolicies should default-deny east-west traffic in sensitive namespaces, then allow explicit label-selected flows. OVN-Kubernetes supports multitenant isolation modes — understand whether your cluster runs in the default single-project network model or stricter SDN policies. Service mesh (Istio via OpenShift Service Mesh operator) adds mTLS and traffic management at the cost of operational complexity; adopt when observability and canary routing justify sidecar overhead.",
          "DNS for services follows <name>.<namespace>.svc.cluster.local. ExternalName services and headless services behave as in upstream Kubernetes — test cross-namespace resolution from a debug pod before declaring connectivity issues closed. Document allowed egress via EgressNetworkPolicy or firewall integrations when workloads call SaaS APIs outside the cluster.",
          "Route shard selection via labels routes traffic to the correct ingress controller — mislabeled Routes land on public shards with corporate certs missing. Use oc describe route to verify admitted status and backend endpoints. For high-connection services, tune HAProxy maxconn annotations and monitor ingress controller pod CPU — it becomes the bottleneck before application pods.",
        ],
      },
      {
        id: "config-secrets",
        title: "Configuration, Secrets, and Image Pull Governance",
        paragraphs: [
          "Separate config from images: use ConfigMaps for non-sensitive data and Secrets for credentials — recognizing that etcd encryption at rest and RBAC still require Secret objects to be treated as sensitive. Prefer external secret stores (Vault, cloud KMS integrations) synced via operators rather than long-lived Secrets in Git. Sealed Secrets or SOPS-encrypted manifests are acceptable GitOps patterns when external stores are unavailable.",
          "imagePullSecrets bind to ServiceAccounts; automate their creation in CI so pipelines do not embed registry passwords in Jenkinsfiles. Mirror required images to the integrated registry or a trusted corporate mirror to survive upstream registry outages and air-gap requirements. Scan images with Clair or Trivy in CI before promotion — OpenShift admission can enforce policies via Kyverno or OPA Gatekeeper.",
          "Environment-specific overlays belong in Kustomize bases or Helm values files per stage (dev, staging, prod). Never fork entire manifests per environment; drift becomes un-auditable. Use the platform namespace pattern for shared operators and confine application Deployments to tenant projects with RBAC scoped to edit, not admin.",
          "Validate Helm charts against OCP SCC defaults before production — charts requesting runAsUser 0 fail restricted-v2 admission. Use helm template piped to kubeconform or oc apply --dry-run=server in CI. Document required SCC grants in the chart README so security review happens at onboarding, not deploy night.",
        ],
      },
      {
        id: "cicd-integration",
        title: "CI/CD Integration and OpenShift Deployment Best Practices at Scale",
        paragraphs: [
          "Pipelines should build once, promote immutable artifacts, and deploy with the same manifest SHA across stages. OpenShift Pipelines (Tekton) runs natively on cluster; Jenkins agents on OCP are still common in enterprises migrating from VM-based CI. Whichever engine you use, enforce policy gates: unit tests, image scan, signed-image verification, and oc apply --dry-run=server or helm template validation against the target cluster API.",
          "GitOps — covered in depth in our OpenShift GitOps article — is the end state for most platform teams: merge to main triggers reconciliation, drift is visible, rollbacks are git revert. Until GitOps is universal, protect production namespaces with RBAC so only the automation ServiceAccount can apply changes. Human kubectl apply to prod should be break-glass only, logged and ticketed.",
          "These OpenShift deployment best practices compound: reliable rollouts, enforced resources, segmented networking, and pipeline discipline reduce pager noise and make upgrades survivable. Pair this operational baseline with cluster monitoring and upgrade planning so deployments stay healthy across OCP minor version bumps.",
          "Platform SREs should publish golden Deployment templates — probes, resources, labels, topology spread constraints — as internal Helm charts or Kustomize bases. Copy-paste from Stack Overflow produces inconsistent production behavior. Review deployment manifests in PRs with the same rigor as application code; the manifest is part of the system.",
        ],
      },
      {
        id: "stateful-workloads",
        title: "Stateful Workloads and OpenShift Deployment Best Practices",
        paragraphs: [
          "StatefulSets on OCP require storage classes with reclaim policies aligned to data retention policy — Delete vs Retain affects whether PVCs survive StatefulSet deletion. Use volumeClaimTemplates with explicit size; expansion may require offline operations depending on CSI driver. Headless Services provide stable network identity for clustered databases — verify DNS SRV records from client pods.",
          "Operators from OperatorHub often manage StatefulSets on your behalf — etcd for custom apps, Kafka, databases. Understand upgrade ordering: operator CSV upgrades may restart pods cluster-wide. Read operator documentation for supported upgrade paths before bumping OCP minor versions.",
          "Backup hooks and OADP schedules should attach to stateful namespaces before go-live. Crash-consistent snapshots without application quiesce risk corrupt backups. Document RPO per StatefulSet tier and test restore into isolated namespaces quarterly.",
          "Topology spread constraints distribute pods across failure domains when node labels are correct — verify region and zone labels on machines before relying on spread in production manifests. Missing topology labels silently collapse spread to single-node concentration.",
        ],
      },
      {
        id: "windows-legacy",
        title: "Windows Containers and Legacy Workload Considerations",
        paragraphs: [
          "Windows node pools require separate machine sets, distinct OS images, and networking validated for hybrid pod communication. Linux-only NetworkPolicies do not govern Windows pods identically — test east-west paths explicitly.",
          "Legacy .NET Framework workloads may need Windows containers before replatforming to Linux .NET Core. SCC and user mappings differ on Windows nodes — involve security review early.",
          "These OpenShift deployment best practices extend to heterogeneous fleets: one GitOps repo, separate overlays per OS, unified monitoring and routes where supported.",
          "Platform engineering golden paths should include Deployment, Route, NetworkPolicy, and ResourceQuota templates per tier — bronze, silver, gold — so teams pick SLA-appropriate defaults instead of inventing manifests per project.",
          "Review deployment frequency and failure rate metrics quarterly — teams with high rollout failure rates usually lack probe tuning, quota headroom, or SCC-compatible images. Fix platform gates before blaming application code.",
        ],
      },
    ],
    relatedServices: [
      { href: "/openshift/deployment-services", label: "OpenShift Deployment Services" },
    ],
    relatedTechnology: [{ href: "/technology/argocd", label: "Argo CD" }],
    relatedReading: ["gitops"],
    datePublished: INSIGHT_SCHEMA_DATE,
    dateModified: INSIGHT_SCHEMA_DATE,
  },
  {
    slug: "upgrade-planning",
    title: "OpenShift Upgrade Planning",
    h1: "OpenShift Upgrade Planning for Zero-Surprise Cluster Updates",
    primaryKeyword: "openshift upgrade planning",
    metaTitle: "OpenShift Upgrade Planning — OpenShift Guide | Ramatech Insights",
    metaDescription:
      "OpenShift upgrade planning for minor and patch updates — CVO channels, etcd health, operator compatibility, and rollback strategy for production OCP.",
    summary:
      "A concise OpenShift upgrade planning framework covering CVO channels, pre-flight checks, etcd and operator compatibility, maintenance windows, and tested rollback paths.",
    intro: [
      "OpenShift upgrade planning is the discipline of moving the Cluster Version Operator (CVO) from one minor release to the next without breaking operators, storage, or workloads that assumed the old API surface. Unlike ad-hoc kubectl version bumps, OCP upgrades orchestrate control-plane static pods, machine config pools, and hundreds of cluster operators in a defined graph published by Red Hat.",
      "Teams that treat upgrades as a quarterly calendar event — with runbooks, lab rehearsal, and stakeholder sign-off — stay current on security patches and retain support entitlements. Teams that defer until they are four minors behind pay compound interest: deprecated APIs disappear, OperatorHub bundles require jump upgrades, and etcd schema migrations offer no casual undo button.",
      "This guide focuses on self-managed OCP; ROSA and ARO automate portions of the control plane but still require worker pool and operator compatibility review. Use it alongside your change-management process and Red Hat compatibility matrix before you patch channel spec in ClusterVersion.",
    ],
    sections: [
      {
        id: "upgrade-graph-channels",
        title: "Upgrade Graph, Channels, and Release Acceptance",
        paragraphs: [
          "The CVO reads upgrade graph metadata from release images hosted on quay.io (or your mirror). Channels — fast, stable, eus — map to recommended edges; pinning to an explicit version via spec.desiredUpdate bypasses channel float when you need determinism. Extended Update Support (EUS) channels buy time for slow-moving tenants but require proactive planning before EUS windows end.",
          "Before changing channel or desired version, run oc adm upgrade recommend or consult the Red Hat upgrade path documentation for your current version. Skipping intermediate minors is rarely supported. Download release image signatures and verify against Red Hat GPG keys in disconnected environments — a tampered release image is a cluster-wide compromise.",
          "Acceptance testing belongs in a lab cluster with representative operators (logging, service mesh, ODF, GitOps) and sample workloads. Record operator versions from ClusterServiceVersion objects and compare against the Red Hat Operator Compatibility Matrix. If a certified operator lacks support on the target OCP version, upgrade the operator first or defer the platform bump.",
          "Build an upgrade calendar shared with application owners: blackout periods, regulatory freeze windows, and dependency milestones. Communicate expected maintenance duration from lab rehearsal data, not optimism. Stakeholders approve windows when they trust estimates backed by prior runs.",
        ],
      },
      {
        id: "preflight-checks",
        title: "Pre-Flight Checks: etcd, Machines, and Deprecated APIs",
        paragraphs: [
          "etcd health gates every upgrade. Run oc etcd health-check and inspect etcd metrics for db size, leader changes, and fsync duration. Defragment etcd during a maintenance window if db size approaches quota — never defragment all members simultaneously. Ensure backup snapshots complete successfully within 24 hours of the upgrade window.",
          "Machine Config Pools (MCP) must show UPDATED=True with zero unavailable nodes before and during upgrade. Paused pools block cluster completion — document any intentional pause for golden-image testing. Review oc get apirequestcounts for deprecated API usage; remove or migrate workloads calling removed beta APIs before they break on the new kube-apiserver.",
          "PodDisruptionBudgets and cluster autoscaling settings affect node drain during upgrade. Verify PDBs allow at least one disruption for stateless tiers or plan manual scale-up. For workloads using CSI volumes, confirm driver compatibility with the target OCP release — storage is the most common long-tail upgrade blocker after custom operators.",
          "Clear Alertmanager silences and maintenance mode entries that hide real problems during upgrade. Pre-scale critical Deployments if drain eviction is slow. Export current ClusterVersion and operator versions to a change ticket for audit comparison post-upgrade.",
        ],
      },
      {
        id: "execution-window",
        title: "Executing the Upgrade and Monitoring Progress",
        paragraphs: [
          "Open a maintenance window with observability dashboards focused on API latency, etcd, ingress error rates, and operator Degraded conditions. Start the upgrade with oc adm upgrade --to-image or by updating ClusterVersion spec; watch oc adm upgrade. The CVO progresses through Downloading, Progressing, and Complete phases — each cluster operator upgrades in dependency order.",
          "If the upgrade stalls, inspect ClusterVersion conditions and oc get clusteroperators for Degraded=True. Common stalls include machine config drain timeouts, unavailable ingress, or third-party webhooks rejecting updated resources. Red Hat KB solutions and must-gather bundles accelerate support cases — capture them before rolling back.",
          "Worker-only upgrades follow a similar MCP-driven process after the control plane completes. Align RHEL CoreOS machine config with worker OS expectations when mixing openShift virtualization workers or RHEL compute nodes. GPU and specialized hardware nodes may need separate MCP labels — upgrade them in waves after the general pool validates.",
          "Assign an upgrade commander with authority to pause or rollback — committees deciding mid-incident extend outages. Keep war-room bridges open until smoke tests pass and error budgets recover. Document actual vs planned duration for continuous improvement.",
        ],
      },
      {
        id: "rollback-recovery",
        title: "Rollback, Recovery, and Post-Upgrade Validation",
        paragraphs: [
          "OpenShift supports rollback to the previous minor only under specific conditions while the prior release image remains available. etcd restore from snapshot is the disaster path when rollback is impossible — rehearse this in a lab, not during production panic. Document RPO and RTO with stakeholders; upgrades do not eliminate the need for etcd backups.",
          "Post-upgrade validation mirrors install handover: all cluster operators Available, sample app route healthy, logging and monitoring agents current, and authentication flows intact. Re-run conformance or workload-specific smoke tests. Update internal documentation for new default APIs, removed features, and changed SCC defaults.",
          "Feed lessons learned into the next OpenShift upgrade planning cycle: operator lag, hidden deprecated API consumers, and maintenance window duration estimates. Clusters on a current stable channel with quarterly rehearsals rarely surprise anyone; deferred upgrades always do.",
          "Automate pre-flight checks where possible — scripts querying apirequestcounts, MCP status, and etcd alarms should run nightly, not only before upgrades. Surprises discovered Friday before Monday upgrade get rescheduled without shame; surprises Monday morning do not.",
        ],
      },
      {
        id: "fleet-coordination",
        title: "Coordinating Upgrades Across Multiple Clusters",
        paragraphs: [
          "Fleet upgrades stagger by wave: lab, dev, staging, prod region A, prod region B. GitOps repos pin ClusterVersion desired versions per cluster folder — promote version bumps via PR after prior wave soaks seven days. ACM policies can alert when any cluster drifts off approved version.",
          "Shared services — identity, logging, registry mirrors — must upgrade compatibly with spoke clusters. Upgrade hub GitOps before spokes if hub runs newer operators spokes depend on. Document cross-cluster dependencies in architecture diagrams operators actually read.",
          "OpenShift upgrade planning at fleet scale is program management as much as engineering — track operator certification lag per cluster, not just Kubernetes version. One straggler cluster on an old minor blocks organization-wide feature adoption.",
          "ROSA and ARO control planes upgrade on Red Hat schedules — subscribe to release notes and validate worker pool compatibility before auto-upgrade windows. Managed control plane does not eliminate application testing.",
        ],
      },
      {
        id: "managed-upgrades",
        title: "Upgrade Planning for ROSA, ARO, and Managed Control Planes",
        paragraphs: [
          "ROSA documents upgrade policies per cluster — configure upgrade gates, maintenance windows, and notification channels in OCm. Worker pools and machine types must support target versions before approval.",
          "ARO integrates with Azure maintenance — align AKS-adjacent dependencies and private link endpoints during upgrade rehearsal. Identity and DNS cutovers affect workloads even when control plane is managed.",
          "Self-managed and managed clusters in one fleet need a unified calendar — developers do not care which API upgraded first; they care that integrations still work Monday morning.",
          "Document emergency stop procedures — pausing CVO, freezing MCP — when upgrade regression threatens revenue. Knowing how to halt safely matters as much as knowing how to start.",
        ],
      },
      {
        id: "communication-stakeholders",
        title: "Stakeholder Communication During OpenShift Upgrade Planning",
        paragraphs: [
          "Application owners need notice for deprecated API removals — publish dashboard from apirequestcounts monthly so teams fix clients before upgrade weekend.",
          "Change advisory boards approve maintenance windows with explicit rollback criteria — if rollback triggers, who decides and within what time bound.",
          "Post-upgrade reports to leadership summarize duration, incidents, and deferred items — builds trust for next quarter's upgrade slot.",
          "OpenShift upgrade planning without communication is change imposed — imposed changes get blamed for unrelated outages for months afterward.",
        ],
      },
    ],
    relatedServices: [
      { href: "/openshift/upgrade-services", label: "OpenShift Upgrade Services" },
    ],
    relatedTechnology: [{ href: "/technology/red-hat", label: "Red Hat" }],
    relatedReading: ["installation-guide"],
    datePublished: INSIGHT_SCHEMA_DATE,
    dateModified: INSIGHT_SCHEMA_DATE,
  },
  {
    slug: "virtualization",
    title: "OpenShift Virtualization",
    h1: "OpenShift Virtualization (CNV): Running VMs Alongside Containers",
    primaryKeyword: "openshift virtualization",
    metaTitle: "OpenShift Virtualization — OpenShift Guide | Ramatech Insights",
    metaDescription:
      "OpenShift virtualization with CNV — KubeVirt VMs, storage, live migration, networking, and migration paths from VMware to OCP-native workloads.",
    summary:
      "How OpenShift Virtualization (CNV) runs KubeVirt VMs on OCP — storage classes, live migration, multus networking, and pragmatic paths from legacy VMware estates.",
    intro: [
      "OpenShift virtualization — delivered by the Container-native Virtualization (CNV) operator built on KubeVirt — lets platform teams run full virtual machines on the same nodes, storage, and networking fabric as container workloads. For enterprises with VMware estates, Windows servers, or appliances that cannot containerize overnight, CNV is a consolidation play: one control plane, one RBAC model, one observability stack.",
      "CNV is not a free vSphere replacement on day one. You need adequate compute headroom for virt-launcher pods, storage classes that support ReadWriteMany or block modes for VM disks, and network attachments via Multus when VMs require VLANs isolated from pod overlay networks. Planning OpenShift virtualization means mapping VM classes, migration windows, and operational runbooks before flipping the first import.",
      "This article covers CNV architecture, storage and networking decisions, migration tooling from VMware (Migration Toolkit for Virtualization, MTV), and how platform engineering teams govern VMs with the same quota, backup, and disaster-recovery expectations as stateful pods.",
    ],
    sections: [
      {
        id: "cnv-architecture",
        title: "CNV Architecture and Operator Dependencies",
        paragraphs: [
          "The CNV operator installs KubeVirt controllers, virt-handler DaemonSets on nodes, virt-api, and virt-controller deployments. VMs are defined with VirtualMachine, VirtualMachineInstance, and DataVolume custom resources. The hypervisor runs inside virt-launcher pods scheduled on nodes labeled for bare-metal or nested virtualization capability — verify CPU flags and KVM module availability before promising VM density.",
          "CNV depends on OpenShift scheduling, storage, and networking primitives. HostPath and local storage work for labs; production demands CSI-backed persistent volumes with adequate IOPS for database VMs. Snapshots and clones use VolumeSnapshotClass resources aligned with your storage vendor. Install CNV from OperatorHub on a stable OCP version listed in the CNV compatibility matrix — mismatched pairings are unsupported.",
          "Node maintenance uses the same drain semantics as pods: evict VMIs gracefully, respect PodDisruptionBudget equivalents, and use node maintenance modes provided by KubeVirt during firmware upgrades. Failing to quiesce guest OS disks before hard kill produces filesystem corruption identical to pulling a physical power cable.",
          "CNV version skew relative to OCP blocks upgrades — verify the combined matrix before scheduling cluster bumps. HyperConvergedCluster CR status should report healthy before large migration waves. Keep a rollback plan for CNV operator upgrades independent of platform CVO timeline.",
        ],
      },
      {
        id: "storage-networking",
        title: "Storage and Networking for OpenShift Virtualization Workloads",
        paragraphs: [
          "DataVolumes import ISO, registry, or HTTP sources and populate PVCs consumed by VM disks. Use storage profiles to bind default storage classes and volume modes per namespace. For Windows VMs, pre-create golden images with virtio drivers and sysprep templates — booting from unoptimized images wastes support hours on disk driver BSODs.",
          "Multus CNI attaches secondary interfaces to VMIs when workloads need direct L2 access — common in lift-and-shift networking models that mirror VLAN segmentation from VMware port groups. OVN-Kubernetes remains the primary pod network; plan IP address management carefully when bridging VM and container traffic on shared segments.",
          "Services and Routes expose container apps; VMs typically use NodePort, LoadBalancer Services, or external bridges for RDP, SSH, and legacy protocols. Document which exposure pattern each migrated VM class uses — security teams will ask. Ingress controllers do not terminate RDP; do not conflate the two.",
          "MAC address spoofing and bridge CNI plugins require elevated CNI permissions — review Multus NetworkAttachmentDefinition specs with network architects. IPAM pools for secondary networks should integrate with corporate IPAM to avoid duplicate assignments that break Active Directory or DHCP scopes.",
        ],
      },
      {
        id: "live-migration",
        title: "Live Migration, HA, and Capacity Planning",
        paragraphs: [
          "KubeVirt live migration moves running VMIs between nodes when storage is shared and CPU features are compatible. Enable dedicated migration networks to prevent memory copy traffic from saturating production NICs. Set eviction strategies on VirtualMachine objects — LiveMigrate vs Shutoff — based on SLA tiers.",
          "High availability for VMs differs from pod replica HA: typically one VMI per VM with rapid restart on another node after failure, not horizontal scale-out. Pair CNV with monitoring alerts on virt-launcher restarts, memory ballooning, and storage latency. Oversubscribing CPU on virt nodes causes steal time and angry database admins.",
          "Capacity planning should model peak vCPU and RAM per node including pod workloads on the same cluster — mixed virt/container clusters are operationally convenient but resource-contentious. Use dedicated infra and worker pools via machine sets and node labels when SLAs demand isolation.",
          "Run cluster capacity reports weekly during migration programs — MTV imports can fill nodes faster than autoscaler adds capacity if machine sets max out. Pre-provision virt-capable nodes with correct labels before cutover weekend to avoid pending VMIs.",
        ],
      },
      {
        id: "vmware-migration",
        title: "Migrating from VMware with MTV and OpenShift Virtualization",
        paragraphs: [
          "Migration Toolkit for Virtualization (MTV) — installed via operator — maps VMware VMs to OpenShift Virtualization resources using provider credentials, network maps, and storage maps. Warm migrations cut over with minimal downtime when VMware tools and guest agents cooperate; cold migrations suit maintenance windows. Validate OS licensing, especially Windows Server activation, before bulk import.",
          "Not every VM belongs on CNV long term. Platform engineering teams should tag candidates: retire, replatform to containers, or sustain as VM on OCP. Stateless Linux apps often land faster as Deployments than as perpetually migrated VMIs. Use MTV as a bridge, not an excuse to avoid application rationalization.",
          "Post-migration, apply the same backup, patch, and vulnerability scanning rigor as containers. Guest OS patching remains the application owner's job; CNV only supplies the hypervisor layer. Integrate VM backups with OADP (OpenShift API for Data Protection) or vendor solutions that snapshot PVCs consistently.",
          "MTV migration plans should include rollback to VMware for critical tiers until soak period ends. Maintain parallel DNS or load-balancer cutover runbooks — big-bang DNS flips without rehearsal cause multi-hour outages when ARP caches or TTLs misbehave.",
        ],
      },
      {
        id: "governance-day-two",
        title: "Governance and Day-2 Operations for CNV",
        paragraphs: [
          "Apply ResourceQuotas to virt namespaces — a single 32 vCPU VM can exhaust a project quota meant for microservices. RBAC separates VM admins from namespace developers; use OpenShift groups mapped from corporate IdP. Audit who can create DataVolumes that import arbitrary external images.",
          "Observability: Prometheus metrics from virt components and node exporters on hypervisor nodes feed the same Grafana stacks as container monitoring. Log guest console output via virt-launcher when troubleshooting boot failures. These OpenShift virtualization practices align CNV with enterprise platform standards rather than treating VMs as a shadow IT island.",
          "Multi-cluster strategies — hub-spoke GitOps, disaster recovery, geo replication — extend to VM workloads when storage replication supports it. Plan cluster boundaries before migrating hundreds of VMIs; retroactive multi-cluster management is costly. Our multi-cluster management article picks up where single-cluster CNV success leaves off.",
          "Windows licensing and SQL Server BYOL rules differ on virtualized infrastructure — involve licensing specialists before migrating revenue-critical databases. Linux VMs may need subscription-manager registration on RHEL guests even when running on OCP virt nodes.",
          "Performance tuning for database VMIs includes virtio-scsi queues, dedicated CPU pinning, and hugepages where supported — default virt-launcher resources suit dev VMs, not production OLTP.",
        ],
      },
      {
        id: "cnv-monitoring",
        title: "Monitoring and Troubleshooting OpenShift Virtualization",
        paragraphs: [
          "KubeVirt metrics expose VMI phase, memory usage, and migration progress — dashboard them beside node CPU steal time. Virt-launcher OOMKills indicate undersized VM requests.",
          "Must-gather for CNV includes virt-launcher logs and events — train support staff on differences from pod-only debugging. Console VNC access is break-glass; prefer audited SSH or RDP paths.",
          "Capacity alerts should fire before virt nodes hit 90% allocatable memory — live migration needs headroom on destination nodes. OpenShift virtualization at scale is proactive ops, not reactive ticket queues.",
          "Run regular virt capacity workshops with VMware and container owners — mixed estates need shared forecasting when both VM and pod growth compete for the same machine sets.",
        ],
      },
      {
        id: "cnv-security",
        title: "Security and Compliance for OpenShift Virtualization Workloads",
        paragraphs: [
          "VMIs run with SCC policies like containers — audit privileged virt-launcher exceptions separately from application pods.",
          "Scan golden images for CVEs before import — a compromised Windows ISO becomes every migrated server's foundation.",
          "Network segmentation via Multus should mirror VMware VLAN policies auditors already approved — explain mapping in migration docs.",
          "OpenShift virtualization under compliance review requires guest OS hardening evidence, not only hypervisor controls — CNV does not patch Windows for you.",
        ],
      },
    ],
    relatedServices: [
      { href: "/openshift/platform-engineering", label: "OpenShift Platform Engineering" },
      { href: "/openshift/migration-services", label: "OpenShift Migration Services" },
    ],
    relatedTechnology: [{ href: "/technology/openshift", label: "OpenShift" }],
    relatedReading: ["multi-cluster-management"],
    datePublished: INSIGHT_SCHEMA_DATE,
    dateModified: INSIGHT_SCHEMA_DATE,
  },
];
