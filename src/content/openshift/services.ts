import type { OpenShiftService } from "./services-types";
import { openshiftServicesPhase4B } from "./services-phase-4b";

export type {
  ContentBlock,
  OpenShiftService,
  ServiceSection,
  TierCard,
} from "./services-types";

const areaServed = ["India", "UAE", "Saudi Arabia", "Qatar", "Singapore"];

export const openshiftServices: OpenShiftService[] = [
  {
    slug: "installation-services",
    pageName: "Installation Services",
    schemaName: "Red Hat OpenShift Installation Services",
    serviceType: "OpenShift Installation Services",
    metaTitle: "OpenShift Installation Services | Red Hat OCP Deployment | Ramatech India",
    metaDescription:
      "Expert Red Hat OpenShift installation services - on-prem, baremetal, AWS ROSA, Azure ARO, and GCP. IPI and UPI deployment. Serving India and MENA enterprises.",
    h1: "Red Hat OpenShift Installation Services",
    heroSubtext:
      "Production-grade OpenShift installation for enterprise teams that need predictable architecture, secure defaults, and clean handover from day one.",
    analyticsLabel: "openshift_installation_services",
    whatsappMessage:
      "Hi Ramatech, I want to discuss OpenShift installation services for our environment.",
    areaServed,
    sections: [
      {
        id: "intro",
        title: "Introduction",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "An enterprise OpenShift installation is never just an infrastructure command or a one-time setup task. The real work starts before the installer runs: platform teams need to decide how many clusters they actually require, how control plane and worker node footprints align with growth plans, how tenant isolation should be enforced, and how networking boundaries map to compliance obligations. If these decisions are postponed, the cluster may still come online, but day-two operations become expensive and risky. We approach installation as an architecture and operations program, not as a narrow build activity.",
              "Topology planning is usually the first point where projects either become resilient or brittle. Single-zone defaults can look cost efficient early, yet they create hidden failure domains that surface during outages, upgrades, or maintenance windows. We evaluate availability requirements service by service, then design topology choices around business objectives: whether multi-zone is mandatory, where failure tolerance needs to be highest, which workloads can remain in lower-cost pools, and how platform elasticity should be managed during demand spikes. This reduces rework and keeps infrastructure decisions connected to actual business priorities.",
              "Networking choices also deserve deliberate design instead of inherited defaults. Teams frequently ask whether OVN-Kubernetes or OpenShift SDN is right for their context, but the deeper question is how traffic policy, east-west segmentation, and ingress controls should evolve over time. We map route exposure strategy, private service connectivity, external load balancer behavior, egress controls, and DNS ownership before deployment. That prevents situations where developers can deploy quickly but security reviews stall release cycles because foundational network assumptions were never formalized.",
              "Enterprise installs also depend on disciplined handling of storage classes, pull secret governance, certificate lifecycle, and DNS prerequisites. A healthy cluster needs consistent image access patterns, stable ingress certificates, reliable persistent volume semantics, and controlled identity integration from the first week. We validate each of these prerequisites and document ownership boundaries clearly. Finally, we run post-install validation that goes beyond a green installer output: control plane health, worker scheduling behavior, ingress routing, default observability baselines, and security posture checks are all confirmed before handover.",
              "Large organizations also need installation decisions that hold up under procurement cycles, audit requests, and organizational change. A platform that depends on tribal knowledge from a single engineer becomes fragile when teams rotate or priorities shift. We therefore build explicit architecture records that capture why each major decision was made, what alternatives were considered, and what operational implications each choice carries. This gives future platform owners a stable reference point when they need to expand capacity, onboard a new business unit, or prepare for a major version upgrade.",
              "Identity and access design is another area where shortcuts can create long-term pain. Enterprises usually have multiple identity providers, varied role boundaries across engineering and operations, and strict expectations around privileged access. During installation we map practical role models for cluster administrators, application teams, security reviewers, and support functions so day-to-day operations are secure but not obstructive. We also document emergency access procedures and review paths to ensure incident handling remains fast even in tightly controlled environments.",
              "Storage strategy is often underestimated until stateful workloads begin scaling. We evaluate not only driver compatibility but also recovery expectations, performance tiers, topology awareness, and lifecycle behavior under node turnover. Teams need to know how persistent data behaves during maintenance, failure, and migration events. By validating these behaviors early and aligning them with workload classes, we reduce the risk of production instability later when business-critical services depend on predictable storage guarantees.",
              "Finally, we treat the installation phase as the starting point for platform governance. Naming standards, project boundaries, environment segmentation, and baseline policies are easier to establish before uncontrolled growth begins. This early governance setup helps engineering teams move fast without losing consistency and makes future operations simpler. Instead of retrofitting controls after incidents, your organization starts with a platform model that is already aligned with enterprise reliability, security, and compliance expectations.",
              "Enterprise installations also benefit from explicit success criteria tied to business outcomes. We define what success means in measurable terms: onboarding speed for first workloads, incident readiness, policy compliance baselines, and operational ownership clarity. These criteria prevent handovers that are technically complete but operationally ambiguous. By the end of delivery, your team can prove not only that the cluster is running, but that it is ready for sustained production use.",
              "This approach is especially useful for organizations expanding across regions or business units. A well-structured installation blueprint can be reused with controlled variation, reducing repeated discovery effort and improving consistency. Over time, this creates a scalable platform foundation where new environments can be delivered faster without lowering standards for reliability, security, or governance.",
            ],
          },
        ],
      },
      {
        id: "deployment-models",
        title: "Deployment Models We Support",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "The right deployment model depends less on tooling preference and more on control requirements, regulatory boundaries, and platform operating maturity. Some enterprises value speed and managed controls, while others must satisfy strict residency, segmentation, or sovereign infrastructure constraints. We help teams evaluate the trade-offs of each model in terms of provisioning ownership, integration complexity, cost predictability, and upgrade paths. This avoids selecting a model that looks simple in procurement but creates operational drag during every release or compliance audit.",
              "For cloud-first programs, Installer-Provisioned Infrastructure often provides the fastest path to a stable baseline because machine lifecycle, networking objects, and many foundational dependencies are generated consistently. For regulated on-prem programs, User-Provisioned Infrastructure enables precise control over existing network design, firewall policies, and data center constraints, but it requires stronger upfront documentation and ownership mapping. Managed variants such as ROSA, ARO, and ROKS reduce platform administration burden, yet teams still need strong workload governance, identity design, and operational response playbooks that align with enterprise service objectives.",
              "Disconnected and air-gapped deployments add another planning layer: image mirroring strategy, operator lifecycle in restricted networks, trusted artifact pipelines, and repeatable update procedures that do not rely on ad hoc internet access. We build installation patterns for these environments with traceable runbooks and recovery paths so operations teams can sustain the platform long after initial go-live. The objective is not only deployment success, but repeatable, auditable operations in every infrastructure context your enterprise actually runs.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "Installer-Provisioned Infrastructure (IPI): AWS, GCP, Azure, vSphere, Bare Metal",
              "User-Provisioned Infrastructure (UPI): Air-gapped, enterprise on-prem, custom networks",
              "Managed OpenShift: AWS ROSA, Azure ARO, IBM ROKS",
              "Disconnected / Air-gapped installations",
            ],
          },
        ],
      },
      {
        id: "installation-process",
        title: "Installation Process",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Our process is intentionally structured so enterprise stakeholders can track risk, approve architecture decisions, and measure progress without waiting for the final handover. Each phase produces clear artifacts: assessment notes, architecture decisions, provisioning standards, configuration baselines, and validation evidence. This keeps program teams aligned across infrastructure, security, networking, and application operations.",
              "We also design each step for day-two reality. Every configuration decision is validated against supportability, upgrade readiness, and operational ownership. By the time the cluster is handed over, your team receives not only a running platform but also the documentation, controls, and working practices required to operate it safely.",
            ],
          },
          {
            type: "numberedSteps",
            steps: [
              {
                title: "Step 1: Pre-installation assessment",
                description:
                  "We evaluate network topology, DNS ownership, certificate authorities, storage backends, sizing assumptions, and security constraints. The output is a readiness map that identifies blockers and assigns closure ownership.",
              },
              {
                title: "Step 2: Architecture design and approval",
                description:
                  "Control plane shape, worker pools, ingress model, identity integration, and environment boundaries are documented in a design pack. Architecture approval is completed before provisioning begins.",
              },
              {
                title: "Step 3: Infrastructure provisioning",
                description:
                  "Cloud resources or on-prem prerequisites are created using repeatable standards. We validate routing, load balancing, firewall controls, and image access paths before installer execution.",
              },
              {
                title: "Step 4: OpenShift cluster installation",
                description:
                  "The cluster is installed using the approved model (IPI, UPI, or managed variant), with controlled logging and checkpoints. Installer output is retained as deployment evidence for operations and audits.",
              },
              {
                title: "Step 5: Post-install configuration",
                description:
                  "Authentication, RBAC baselines, storage classes, ingress conventions, project guardrails, and namespace standards are configured so teams can onboard workloads with predictable controls.",
              },
              {
                title: "Step 6: Observability setup",
                description:
                  "Prometheus, Alertmanager, and Grafana coverage is validated, alert ownership is mapped, and reporting baselines are tuned to reduce noisy paging while preserving actionable visibility.",
              },
              {
                title: "Step 7: Security hardening",
                description:
                  "Security Context Constraints, network policies, RBAC boundaries, and privileged access flows are reviewed and implemented to align with enterprise risk and compliance standards.",
              },
              {
                title: "Step 8: Handover + documentation",
                description:
                  "We deliver architecture documents, operational runbooks, support escalation guidance, and change procedures. Knowledge transfer sessions ensure your team can manage the cluster confidently.",
              },
            ],
          },
        ],
      },
      {
        id: "whats-included",
        title: "What Is Included",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Our installation engagement includes the operational details that are often omitted in checklist-driven deployments. A cluster can pass initial smoke tests and still create recurring incidents if DNS, identity, storage behavior, and monitoring ownership are left ambiguous. We treat these areas as first-class deliverables, not optional extras, because they determine whether platform teams can sustain reliability without constant emergency intervention.",
              "Each deliverable is tied to an accountable owner and validated through acceptance criteria. For example, identity and RBAC setup is not considered complete until role assumptions are tested against real team workflows. Monitoring is not complete until critical alerts route to named responders with agreed response expectations. Documentation is not complete until runbooks have been reviewed with operations and security teams. This discipline prevents gaps between implementation and real usage.",
              "We also include post-install stabilization support to help teams transition from build mode to operating mode. During this period we resolve early-day issues, validate change controls, and coach internal teams on patching and operational decision making. The result is a cleaner transition into steady-state ownership, with fewer unresolved risks left behind after project closure.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "Pre-install infrastructure checklist",
              "Network and DNS validation",
              "Storage class configuration",
              "LDAP/AD or SSO authentication setup",
              "Built-in monitoring configuration",
              "RBAC and project setup",
              "Node autoscaling (MachineSet)",
              "Full documentation",
              "30-day post-install support",
            ],
          },
        ],
      },
      {
        id: "environments",
        title: "Environments We Have Installed On",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Enterprise OpenShift delivery rarely happens in a single clean environment. Most organizations run a mixed estate: older virtualization stacks, at least one public cloud, and compliance-driven segments that cannot be treated like standard internet-connected platforms. Because of this, installation methods must adapt to real constraints rather than forcing every customer into a single reference architecture. We design for consistency of operations even when infrastructure differs.",
              "In vSphere and bare metal environments, we pay special attention to storage and network behavior under load, since these platforms often host business-critical stateful services. In cloud environments, we optimize for lifecycle automation, predictable cost controls, and policy alignment with existing enterprise guardrails. In managed OpenShift variants, we clarify where provider responsibility ends and customer operational ownership begins, especially for workload governance, identity controls, and incident response.",
              "For air-gapped networks, we implement mirror registries and controlled content synchronization workflows that preserve software supply chain integrity. We document repeatable upgrade and patch flows so your team can maintain the platform without emergency exceptions. This practical, environment-specific rigor enables platform leaders to standardize governance while still supporting the diversity of enterprise infrastructure.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "VMware vSphere",
              "Bare metal (RHEL/RHCOS)",
              "AWS EC2 / ROSA",
              "Azure / ARO",
              "GCP",
              "On-premises air-gapped networks",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does an OpenShift installation take?",
        answer:
          "A standard IPI installation on cloud takes 2-4 hours. UPI on-premises typically takes 2-5 days including infrastructure preparation, DNS configuration, and post-install hardening.",
      },
      {
        question: "Do you support disconnected / air-gapped OpenShift installations?",
        answer:
          "Yes. We have experience with mirror registries, disconnected OperatorHub configurations, and air-gapped cluster provisioning for enterprises in regulated environments.",
      },
      {
        question: "What OpenShift versions do you install?",
        answer:
          "We support OpenShift Container Platform 4.12 through the latest stable release (4.16+). We recommend starting on an Extended Update Support (EUS) version.",
      },
      {
        question: "Do you provide the Red Hat subscription?",
        answer:
          "We do not resell subscriptions, but we work alongside your Red Hat account team or existing subscription. We can advise on subscription sizing.",
      },
      {
        question: "What happens after installation?",
        answer:
          "We hand over full documentation, a runbook, and provide 30 days of post-install support. Ongoing managed services are available.",
      },
    ],
    internalLinks: [
      {
        href: "/openshift/deployment-services",
        label: "Ready to deploy workloads? See deployment services",
      },
      {
        href: "/openshift/migration-services",
        label: "Planning a platform move? Explore OpenShift migration services",
      },
      {
        href: "/openshift/support-services",
        label: "Need day-two reliability after go-live? See OpenShift support services",
      },
      {
        href: "/openshift/managed-services",
        label: "Want full cluster operations? Explore managed services",
      },
      {
        href: "/openshift",
        label: "Return to the OpenShift services hub",
      },
    ],
    finalCta: {
      headline: "Plan Your OpenShift Installation",
      bookLabel: "Request Installation Quote",
      whatsappLabel: "WhatsApp an Engineer",
    },
  },
  {
    slug: "migration-services",
    pageName: "Migration Services",
    schemaName: "OpenShift Migration Services",
    serviceType: "OpenShift Migration Services",
    metaTitle: "OpenShift Migration Services | Kubernetes to OCP Migration | Ramatech",
    metaDescription:
      "Migrate from Kubernetes, OpenShift 3.x, or legacy infra to Red Hat OpenShift 4.x. Zero-downtime migration planning, execution, and validation.",
    h1: "OpenShift Migration Services - From Legacy Infrastructure to OCP 4.x",
    heroSubtext:
      "Structured migration programs that reduce cutover risk, protect workload reliability, and move teams to OpenShift 4.x with controlled validation.",
    analyticsLabel: "openshift_migration_services",
    whatsappMessage:
      "Hi Ramatech, I need help planning and executing an OpenShift migration.",
    areaServed,
    showMigrationViz: true,
    showCaseStudyCallout: true,
    sections: [
      {
        id: "intro",
        title: "Introduction",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "OpenShift migrations fail less because of tooling and more because of planning shortcuts. Teams are often pressured into aggressive timelines, which leads to incomplete workload discovery, undocumented dependencies, and late-breaking operational surprises during cutover. A migration can look on schedule right until a hidden storage dependency or identity assumption causes an outage window to expand. We design migration engagements to remove this uncertainty early, when risks are still inexpensive to address.",
              "The first major risk pattern is treating all workloads as equal. In reality, each service has a different tolerance for downtime, rollback complexity, and state synchronization requirements. Without a tiered migration strategy, organizations either over-engineer low-risk moves or under-protect mission-critical systems. We establish workload waves based on criticality, coupling, compliance sensitivity, and operational readiness. This creates controlled progress and avoids the all-or-nothing pressure that causes rushed production decisions.",
              "Another common failure mode is planning cutover without rollback checkpoints. In enterprise migration programs, success means proving that the team can safely reverse course for specific waves when validation fails. We define rollback paths, data reconciliation boundaries, and decision thresholds in advance so incident response is procedural rather than improvisational. This approach keeps leadership confidence high and allows migration teams to protect availability while still moving quickly.",
              "A structured migration also improves platform outcomes beyond technical parity. It is an opportunity to eliminate legacy drift, standardize policy baselines, modernize CI/CD integration, and strengthen observability before larger adoption phases. Instead of carrying old operational weaknesses into a new cluster, we use migration as a controlled modernization program that leaves teams with cleaner governance, better deployment safety, and measurable operational resilience.",
              "Successful migrations are coordinated transformation programs, not isolated platform changes. Application teams, security stakeholders, operations leads, and executive sponsors all need aligned visibility into scope, risk, and success criteria. We establish governance cadences that include technical checkpoints, business readiness reviews, and clearly owned decision gates. This structure prevents late-stage confusion where technical teams are ready to cut over but business owners are not prepared for schedule, support, or dependency changes.",
              "Data migration planning is especially critical for stateful and high-throughput services. Teams must define what consistency model is acceptable, how replication and synchronization are validated, and which fallback procedures apply if timing drifts during cutover. We design these paths with practical rehearsal plans so teams can test assumptions before they are exercised under pressure. When data pathways are treated as first-class migration workstreams, downtime windows become more predictable and recovery confidence increases.",
              "Security and compliance expectations also shift during platform transitions. Controls that were manually enforced in a legacy environment may need to be codified as policy in OpenShift. We map these controls early, including access boundaries, image governance, network segmentation, and audit evidence requirements. This ensures migration progress does not outpace governance readiness, which is a common source of deployment delays in regulated sectors.",
              "Pipeline and release process migration receives dedicated attention in our approach. Workload movement without release tooling alignment can leave teams in a partially migrated state where production support becomes fragmented. We verify pipeline connectivity, artifact provenance, environment promotion controls, and rollback mechanics as part of migration readiness. This helps organizations maintain predictable release behavior from pilot through production waves.",
              "Finally, we focus on operating model adoption after technical cutover. Teams need clear ownership for platform maintenance, incident response, and continuous improvement once legacy systems are decommissioned. We provide practical runbooks, escalation structures, and operational handover criteria so migration outcomes remain stable over time. The goal is sustained reliability and delivery performance, not a one-time migration milestone.",
              "Communication discipline is another key differentiator in complex migrations. We establish regular cross-team updates that combine technical status, risk posture, and upcoming decision points in a single view. This helps executives and delivery teams stay aligned without waiting for incident-driven escalations. Clear communication reduces uncertainty, supports faster approvals, and keeps migration momentum stable even when workload complexity varies between waves.",
              "We also build migration quality gates around evidence, not assumptions. Before advancing each wave, teams review readiness checks for performance, security, observability, and rollback confidence. This prevents schedule pressure from overriding risk controls. Wave progression stays predictable because each transition is anchored in verified outcomes rather than optimistic estimates.",
              "For enterprises operating across geographies, migration governance must account for local constraints such as data residency rules, region-specific network controls, and distributed support teams. We incorporate these factors into wave design and handover planning so global programs can progress with regional compliance and operational continuity intact.",
              "After migration completion, we support a stabilization cycle that confirms teams can operate confidently without legacy fallback dependencies. This includes post-cutover review sessions, validation of routine maintenance workflows, and closure of deferred remediation actions discovered during wave execution. Stabilization is essential because it converts migration success from a project outcome into an operating reality. Teams leave with clear ownership, validated procedures, and a platform posture that can absorb future growth and change.",
              "When required, we also provide executive migration reporting that ties technical progress to business milestones, budget visibility, and risk trend movement. This keeps leadership engaged with real evidence and allows faster intervention when dependencies threaten program timelines.",
            ],
          },
        ],
      },
      {
        id: "migration-scenarios",
        title: "Migration Scenarios We Handle",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Enterprise platform transitions are rarely one-dimensional. One business unit may be moving from OpenShift 3.x, another may be on managed Kubernetes, and a third may still run stateful services on virtual machines with partial container adoption. We support mixed migration paths by evaluating source-state characteristics, target governance standards, and workload-by-workload adaptation needs. This avoids forcing dissimilar systems into a single migration template that ignores real technical and organizational differences.",
              "For Kubernetes-to-OpenShift moves, we focus on policy and platform behavior gaps that can affect production reliability: security context constraints, ingress and route models, operator lifecycle assumptions, and image governance controls. For OpenShift 3.x transitions, we address architectural and operational shifts required in 4.x environments, including cluster operations, upgrade strategy, and ecosystem integrations. For infrastructure transitions, we align migration waves with cloud landing zone controls, identity policies, and networking boundaries already defined by enterprise cloud and security teams.",
              "Multi-cluster consolidation and virtualization-led modernization require additional design rigor. Teams need to balance cost optimization with fault-domain separation, ensure workload placement policies remain predictable, and validate performance expectations for critical services. We treat these programs as platform consolidation initiatives, not simple relocations, and provide clear acceptance criteria for each migration wave before decommissioning legacy infrastructure.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "OpenShift 3.x -> OpenShift 4.x",
              "Kubernetes (EKS, GKE, AKS) -> OpenShift",
              "On-premises -> AWS ROSA / Azure ARO",
              "VMware Tanzu -> OpenShift",
              "Legacy VM workloads -> OpenShift Virtualization",
              "Multi-cluster consolidation",
            ],
          },
        ],
      },
      {
        id: "methodology",
        title: "Migration Methodology",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Our migration methodology is phase-gated to keep risk transparent and to ensure each transition decision is supported by evidence. Every phase produces tangible outputs that can be reviewed by platform engineering, security, application owners, and leadership. This gives enterprise stakeholders confidence that migration progress is controlled, measurable, and aligned with operational and compliance requirements.",
              "The methodology is intentionally practical. We combine architecture depth with execution realities such as release windows, team bandwidth, and production support constraints. The result is a migration plan that can be executed by real teams under business pressure, not a theoretical sequence that breaks during first contact with production complexity.",
            ],
          },
          {
            type: "numberedSteps",
            steps: [
              {
                title: "Phase 1 - Discovery",
                description:
                  "We run workload inventory, dependency mapping, storage audits, and network topology reviews to create a complete source-state profile and identify hidden coupling before wave planning begins.",
              },
              {
                title: "Phase 2 - Assessment",
                description:
                  "Compatibility analysis, risk scoring, and migration wave planning are completed with application and operations stakeholders, producing a prioritized sequence grounded in service criticality and rollback feasibility.",
              },
              {
                title: "Phase 3 - Preparation",
                description:
                  "Target cluster installation, GitOps setup, registry mirroring, policy baseline definition, and pipeline readiness checks are finalized so pilot and production waves can run on stable foundations.",
              },
              {
                title: "Phase 4 - Pilot migration",
                description:
                  "One to two non-critical workloads are migrated first to validate technical patterns, deployment controls, observability baselines, and rollback procedures before wider production exposure.",
              },
              {
                title: "Phase 5 - Production migration",
                description:
                  "Wave-by-wave execution proceeds with explicit rollback checkpoints, cutover criteria, communication protocols, and command structures to maintain service reliability through each release window.",
              },
              {
                title: "Phase 6 - Validation",
                description:
                  "SLO validation, performance benchmarking, security verification, and operational handover checks confirm that migrated services meet agreed production outcomes before final acceptance.",
              },
              {
                title: "Phase 7 - Decommission",
                description:
                  "Legacy cluster cleanup, final documentation, and runbook updates are completed in a controlled closure process to avoid drift, orphaned dependencies, and unsupported residual infrastructure.",
              },
            ],
          },
        ],
      },
      {
        id: "risks-mitigated",
        title: "Risks We Mitigate",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Migration risk management is not a final checklist; it is a continuous workstream from discovery through decommission. We track technical, operational, and organizational risks in a shared register and map each risk to mitigation actions, owners, and validation checkpoints. This gives program leadership clear visibility into exposure trends and prevents known concerns from resurfacing as late-stage production incidents.",
              "Downtime risk is handled through wave sequencing, rehearsal, and rollback readiness. Security and policy risks are reduced through early compatibility analysis for SCC behavior, namespace controls, and identity assumptions that differ between source and target platforms. Data and stateful service risks are addressed through storage migration design, replication strategy, and explicit cutover governance. Integration risks around service mesh and CI/CD pipelines are handled through staged reconnection and production-equivalent testing before cutover.",
              "The outcome is a migration program where surprises are reduced, decisions are documented, and operational teams have clear playbooks for both forward progress and controlled rollback. This is especially important for regulated enterprises that need traceability for architecture and change decisions as part of compliance and governance reviews.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "Downtime during cutover",
              "SCC (Security Context Constraints) incompatibilities",
              "Persistent volume migration",
              "Service mesh reconfiguration",
              "CI/CD pipeline reconnection",
            ],
          },
        ],
      },
      {
        id: "case-study",
        title: "Case Study Reference",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "A strong migration plan should translate into measurable business outcomes. In our enterprise OpenShift migration case study, the customer moved from fragmented platform operations to a controlled OpenShift model with standardized deployment and governance practices. The transformation was not limited to moving workloads; it included architecture cleanup, pipeline modernization, and stronger operational accountability.",
              "The published outcomes were material: 60% deploy time reduction, 100% GitOps coverage, and zero critical rollback incidents during the governed migration window. These results came from disciplined phase execution, explicit cutover criteria, and close alignment between platform, application, and operations teams. The program demonstrated that migration can improve delivery speed and reliability simultaneously when risk controls are built into each phase.",
              "We use the same principles across migration engagements: evidence-led planning, staged validation, transparent risk ownership, and practical runbooks for day-two operations. Teams that follow this model avoid reactive firefighting and gain a platform foundation that supports long-term scalability.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you migrate with zero downtime?",
        answer:
          "For stateless workloads, yes - we use blue-green migration patterns. Stateful workloads require a maintenance window, which we plan with your team to minimise impact.",
      },
      {
        question: "How long does an OpenShift migration take?",
        answer:
          "Small environments (10-20 workloads) typically take 3-6 weeks. Large enterprise migrations are planned in waves over 2-4 months.",
      },
      {
        question: "What about existing CI/CD pipelines?",
        answer:
          "We re-point and validate all CI/CD pipelines (Jenkins, GitLab, GitHub Actions) as part of the migration. We also upgrade to GitOps where appropriate.",
      },
    ],
    internalLinks: [
      {
        href: "/openshift/upgrade-services",
        label: "On OCP 3.x or older 4.x? Plan your upgrade path",
      },
      {
        href: "/openshift/consulting-services",
        label: "Need architecture input before migration? Start with consulting",
      },
      {
        href: "/openshift/deployment-services",
        label: "Post-migration deployments? See deployment services",
      },
      {
        href: "/openshift",
        label: "Explore the full OpenShift services portfolio",
      },
      {
        href: "/case-studies/openshift-enterprise-migration",
        label: "Read the enterprise migration case study",
      },
    ],
    finalCta: {
      headline: "Plan Your OpenShift Migration",
      bookLabel: "Get Migration Assessment",
      whatsappLabel: "WhatsApp Us",
    },
  },
  {
    slug: "support-services",
    pageName: "Support Services",
    schemaName: "OpenShift Support Services",
    serviceType: "OpenShift Support Services",
    metaTitle: "OpenShift Support Services | 24/7 OCP Platform Support | Ramatech India",
    metaDescription:
      "Managed OpenShift support services - cluster health monitoring, incident response, patch management, and expert escalation. India, UAE, and MENA.",
    h1: "OpenShift Support Services - Expert Platform Reliability for Your OCP Cluster",
    heroSubtext:
      "Operational support that keeps OpenShift clusters healthy, secure, and predictable through incident response, patching, and lifecycle governance.",
    analyticsLabel: "openshift_support_services",
    whatsappMessage:
      "Hi Ramatech, we need OpenShift support coverage for our cluster.",
    areaServed,
    sections: [
      {
        id: "intro",
        title: "Introduction",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Clusters without dedicated platform support rarely fail in dramatic ways at first. Instead, they degrade quietly: warning alerts are ignored, certificates approach expiry without ownership, operator updates are postponed, and capacity assumptions drift away from actual demand. Teams can continue shipping for a while, but reliability debt accumulates underneath. When a high-severity incident eventually occurs, response is delayed because no one has clear runbooks, priorities, or escalation authority. We built our support services to stop this pattern before it impacts business outcomes.",
              "Another common issue is patch and vulnerability exposure. Platform teams often know they need z-stream updates and security remediation, yet they lack a repeatable process that balances risk reduction with production stability. As a result, updates are deferred until compliance pressure or an outage forces rushed execution. Our support model introduces cadence, change governance, and validation standards so updates are applied predictably, with rollback readiness and stakeholder communication built in.",
              "Capacity blindness is equally expensive. Without ongoing analysis of node pressure, storage utilization, and workload growth, clusters hit saturation unexpectedly, affecting both performance and release velocity. We combine observability signals with operational reviews to identify trend risks early and recommend action plans before service quality drops. This improves both reliability and planning confidence for engineering and business leadership.",
              "Most importantly, support is not just about fixing incidents; it is about institutionalizing operational discipline. We help teams adopt clear severity definitions, ownership boundaries, response targets, and post-incident learning practices. The objective is a platform that remains stable under growth, change, and audit pressure, not a reactive ticket queue that only activates after production pain has already occurred.",
              "Enterprises with multiple product teams usually experience support fragmentation unless there is a dedicated platform operating model. One team may optimize for release velocity, another for security controls, and a third for cost, with no shared mechanism to reconcile trade-offs during incident handling. Our support framework creates this mechanism through defined governance forums, shared reliability objectives, and transparent escalation channels. This keeps operational decision making aligned across teams and avoids recurring conflicts that slow restoration during high-pressure events.",
              "We also address the human side of platform operations. Incident fatigue and unclear responsibility are common causes of delayed responses and repeated mistakes. By creating explicit on-call roles, communication protocols, and post-incident action tracking, we help teams sustain reliability without burnout. Over time, this improves not only technical metrics but also team confidence and predictability, which are essential when OpenShift becomes a core delivery platform.",
              "Support transitions are handled through a structured onboarding phase that includes environment discovery, baseline risk assessment, and operational readiness checks. We review existing alert profiles, runbook quality, access controls, and maintenance practices, then prioritize immediate stabilization actions. This allows us to take over support safely even when the cluster was built by another vendor or an internal team with limited documentation.",
              "For regulated sectors, support quality is measured by traceability as much as response speed. We maintain operational records, change evidence, and incident documentation that can support governance reviews and audit requests. This is particularly important for enterprises operating in finance, public sector, healthcare, and critical infrastructure, where platform events often require formal review beyond technical resolution.",
              "Cost control is another recurring concern in long-running support engagements. Reactive scaling, unmanaged overprovisioning, and duplicate tooling can quietly increase platform spend. We include periodic capacity and utilization reviews so optimization decisions are made with reliability context, not in isolation. This helps organizations reduce unnecessary spend while protecting service quality.",
              "As platform maturity grows, support should evolve from firefighting to reliability engineering. We help teams use incident trends, recurring failure analysis, and operational telemetry to implement preventive improvements. This creates a feedback loop where each month of support reduces future risk exposure, improves response efficiency, and strengthens confidence in the platform as a strategic business asset.",
              "Change management is tightly integrated with our support model because many production incidents originate from uncoordinated updates. We help teams define approval paths, maintenance windows, and rollback checkpoints so platform changes can be introduced safely. This structured approach supports faster delivery while reducing avoidable disruption across dependent application teams.",
              "Knowledge continuity is another operational safeguard we prioritize. Support coverage remains effective only when environment context is documented and regularly refreshed. We maintain service maps, escalation contacts, known-risk inventories, and runbook updates as part of ongoing operations. This ensures incident response quality is not dependent on individual memory or specific personnel availability.",
              "Where platform demand is growing quickly, we also advise on operating cadence: how often to run health reviews, when to schedule preventive maintenance, and how to align reliability work with product release cycles. This planning rhythm helps organizations avoid oscillation between prolonged stability and sudden incident spikes.",
              "Over the long term, the strongest support engagements create a measurable reliability baseline and improve from it each quarter. We collaborate with your teams to define practical reliability KPIs, track trend movement, and prioritize initiatives with the highest impact. This keeps support outcomes transparent and tied to business value, not just ticket closure volume.",
              "A mature support function also strengthens platform trust across the enterprise. When developers see consistent incident handling, predictable maintenance windows, and clear communication during change events, they adopt platform standards faster and rely on shared services with greater confidence. This trust accelerates onboarding of new workloads and reduces the tendency for teams to create isolated workarounds. Strong support therefore acts as a strategic enabler for platform adoption, not only an operational safeguard.",
              "For high-change environments, we additionally track operational readiness signals before major release events so potential platform risks are surfaced early. This pre-release support posture reduces surprise incidents and protects delivery commitments during peak business periods.",
              "This proactive reliability posture helps support teams prevent many incidents before they become customer-visible disruptions.",
              "It also improves confidence for business stakeholders who depend on predictable platform behavior during critical periods.",
            ],
          },
        ],
      },
      {
        id: "support-tiers",
        title: "Support Tiers",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Support needs vary by business criticality and internal capability. Some organizations require monitoring and first-response coverage because they already have an experienced platform team. Others need an operations partner that can actively manage node failures, upgrades, and lifecycle changes under strict service-level expectations. Our tier model is designed so teams can choose the right operational depth now and scale coverage as platform dependence increases.",
              "Each tier includes defined responsibilities, communication pathways, and escalation standards. This clarity is essential because platform incidents are often multi-domain events involving infrastructure, networking, identity, and application behaviors. We align support operating models with your enterprise command structure so incident handling is fast, coordinated, and auditable.",
              "Teams can also transition between tiers as operational maturity evolves. We frequently start with active platform support and expand to fully managed operations when clusters become central to product delivery. This phased approach reduces disruption and helps organizations improve reliability without overcommitting on day one.",
            ],
          },
          {
            type: "tierCards",
            tiers: [
              {
                name: "Tier 1 - Monitoring & Alerting",
                features: [
                  "8x5 cluster health monitoring",
                  "Alert routing and first response",
                  "Monthly health reports",
                ],
              },
              {
                name: "Tier 2 - Active Platform Support",
                features: [
                  "12x7 coverage",
                  "Node failure, pod crash, storage issue response",
                  "Patch coordination (OCP z-stream updates)",
                  "Capacity planning reviews",
                ],
              },
              {
                name: "Tier 3 - Managed OpenShift Operations (24/7)",
                features: [
                  "Full cluster lifecycle management",
                  "Upgrade execution",
                  "Security patching",
                  "Change management",
                  "On-call escalation",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "coverage",
        title: "What Is Covered",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Reliable platform support depends on breadth as much as depth. We cover the critical operational domains that determine whether an OpenShift cluster remains resilient under normal load, peak demand, and failure conditions. By monitoring and maintaining these foundations continuously, we reduce the chance that minor warnings evolve into business-impacting incidents.",
              "Control plane and etcd health are treated as priority concerns because instability in these layers can rapidly affect scheduling, API responsiveness, and cluster control functions. We validate backup posture and restoration confidence, not only backup existence, so recovery assumptions are tested before emergencies. Worker node lifecycle is managed with awareness of MachineSet behavior, drain safety, and workload disruption boundaries to preserve application availability during maintenance.",
              "Certificate rotation, ingress management, and operator updates are handled with change discipline so security and reliability objectives are met together. Persistent volume health is monitored for both performance and failure signals, particularly for stateful workloads where storage behavior directly affects service continuity. We also review RBAC and audit signals to help teams maintain governance standards in dynamic multi-team environments.",
              "This comprehensive coverage enables platform teams to shift from reactive firefighting to predictable operations. Engineering leaders gain clearer risk visibility, while delivery teams gain confidence that foundational platform reliability is actively managed in the background.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "etcd health and backup validation",
              "Control plane stability",
              "Worker node lifecycle (MachineSet management)",
              "Certificate rotation",
              "OperatorHub operator updates",
              "Ingress and route management",
              "Persistent volume health",
              "RBAC and audit log review",
            ],
          },
        ],
      },
      {
        id: "sla-commitments",
        title: "SLA Commitments",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Response targets only matter when paired with operating rigor. Our SLA commitments are backed by incident classification standards, on-call routing, and escalation governance so P1, P2, and P3 issues are handled consistently. We define these protocols during onboarding to ensure everyone understands decision authority, communication expectations, and handoff procedures before incidents occur.",
              "Incident response quality is also improved through context continuity. We maintain environment-specific operational knowledge, runbook references, and issue history so responders can diagnose faster and avoid repeated missteps. For high-severity events, we run structured incident command and provide clear status communication to technical and business stakeholders. This reduces confusion and shortens time to stabilization.",
              "SLA reporting is transparent and action-oriented. We track response and resolution trends, identify recurring risk patterns, and recommend preventive measures that improve reliability over time. The goal is not only to meet response metrics, but to steadily reduce incident volume and severity as platform operations mature.",
            ],
          },
          {
            type: "slaTable",
            rows: [
              {
                priority: "P1 (Cluster down)",
                response: "Response < 30 min",
              },
              {
                priority: "P2 (Degraded cluster)",
                response: "Response < 2 hours",
              },
              {
                priority: "P3 (Non-critical)",
                response: "Response < 8 hours",
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support clusters we didn't install?",
        answer:
          "Yes. We begin with a cluster assessment to understand the current state before taking over support.",
      },
      {
        question: "What's the minimum commitment?",
        answer:
          "A 3-month minimum engagement applies for support services. Most clients run on 12-month retainers to align with platform lifecycle planning.",
      },
      {
        question: "Do you provide support for AWS ROSA or Azure ARO?",
        answer:
          "Yes - we support managed OpenShift variants including ROSA, ARO, and IBM ROKS.",
      },
    ],
    internalLinks: [
      {
        href: "/openshift/managed-services",
        label: "Need full lifecycle operations? See managed services",
      },
      {
        href: "/openshift/upgrade-services",
        label: "Planning version upgrades? Explore upgrade services",
      },
      {
        href: "/openshift/consulting-services",
        label: "Need a strategic platform review? Explore consulting services",
      },
      {
        href: "/openshift",
        label: "View all OpenShift services",
      },
    ],
    finalCta: {
      headline: "Get OpenShift Support Coverage",
      bookLabel: "Request Support Quote",
      whatsappLabel: "WhatsApp an SRE",
    },
  },
  {
    slug: "consulting-services",
    pageName: "Consulting Services",
    schemaName: "OpenShift Consulting Services",
    serviceType: "OpenShift Consulting Services",
    metaTitle: "OpenShift Consulting Services | Red Hat OCP Experts | Ramatech Innovation",
    metaDescription:
      "Strategic OpenShift consulting - platform architecture, cluster design, GitOps adoption, security hardening, and migration planning. India and global.",
    h1: "OpenShift Consulting Services - Architecture, Strategy, and Platform Expertise",
    heroSubtext:
      "Advisory and architecture services for enterprise teams that need to make confident OpenShift decisions and execute with less platform risk.",
    analyticsLabel: "openshift_consulting_services",
    whatsappMessage:
      "Hi Ramatech, I want to book an OpenShift consulting session.",
    areaServed,
    sections: [
      {
        id: "intro",
        title: "Introduction",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "OpenShift consulting is most valuable when organizations have momentum but need sharper platform decisions. Many teams already run clusters, yet they still face recurring questions: Is architecture aligned with growth targets? Are security and policy controls robust enough for regulated workloads? Is GitOps adoption improving release safety or creating process overhead? These questions require technical depth and business context, not generic best-practice slides. Our consulting model is designed to provide practical, decision-ready guidance that teams can apply immediately.",
              "Consulting also helps enterprises avoid expensive architectural lock-in. Platform choices made under schedule pressure can work initially but become constraints as workload scale, compliance obligations, and team structures evolve. We assess where design assumptions no longer match operating reality, then prioritize improvements by risk reduction and execution feasibility. This allows teams to invest in changes that materially improve reliability and delivery outcomes instead of running broad but low-impact transformation programs.",
              "Security and governance concerns are a frequent trigger for consulting engagements. Platform teams may need confidence that SCC usage, RBAC boundaries, audit visibility, and change controls are aligned with enterprise standards before expansion. We provide technical assessments with clear remediation priorities and practical implementation paths so compliance objectives can be met without slowing engineering flow unnecessarily.",
              "Finally, consulting accelerates internal capability growth. Alongside recommendations, we work with platform and engineering teams through workshops, design reviews, and implementation coaching. The outcome is not dependency on external advisors, but stronger in-house decision making and a clearer long-term OpenShift operating strategy.",
              "A major consulting advantage is the ability to create shared language between technical and business leadership. Platform teams often communicate in architecture details while executives focus on risk, speed, and cost outcomes. We bridge this gap by translating technical findings into business-relevant priorities and sequencing options. This helps leadership teams make investment decisions with confidence and enables engineering teams to execute against goals that are clearly understood across the organization.",
              "Consulting engagements are also effective when organizations need to make irreversible decisions, such as selecting cluster tenancy models, defining multi-region strategy, or choosing between managed and self-managed operating approaches. These decisions influence talent requirements, budget planning, and operational resilience for years. We provide decision frameworks grounded in your workload profile, compliance obligations, and organizational maturity so choices are durable rather than reactive.",
              "Many enterprises underestimate the operational implications of rapid platform adoption. Early success can lead to uncontrolled growth in namespaces, pipelines, and policy exceptions, which eventually slows delivery and increases risk. Our consulting approach includes governance and operating model design to ensure growth remains manageable. We help teams establish practical controls that scale with adoption while preserving developer productivity.",
              "Where modernization programs involve multiple stakeholders, consulting also provides neutral technical arbitration. Different teams may advocate competing standards based on local priorities. We facilitate evidence-led architecture decisions that account for reliability, security, and delivery impact across the full platform ecosystem. This reduces decision deadlock and keeps transformation initiatives moving.",
              "We place strong emphasis on implementation realism. Recommendations are only valuable when they can be delivered within existing release commitments and team capacity constraints. For every major finding, we define execution paths, ownership expectations, and risk trade-offs so teams can move from assessment to action without ambiguity. This makes consulting output immediately useful for roadmap planning and sprint-level execution.",
              "Finally, consulting should leave your organization stronger than before the engagement began. We include coaching, design rationale transfer, and repeatable assessment methods so internal teams can continue improving the platform independently. The objective is long-term capability building: better decisions, stronger architecture discipline, and a platform strategy that remains effective as business demands evolve.",
              "We also help teams prioritize sequencing, which is often the hardest part of platform improvement. Enterprises usually have more recommended actions than they can execute at once. By grouping initiatives into near-term stabilizers, medium-term enablers, and long-term strategic investments, we make roadmap decisions clearer and reduce execution friction.",
              "In organizations with multiple engineering domains, consulting can align standards without forcing rigid uniformity. We define where common controls are non-negotiable and where domain-specific variation is acceptable. This balance protects governance while preserving team autonomy, which is critical for sustained adoption of platform practices.",
              "Another frequent consulting outcome is improved decision velocity. When architecture principles, review mechanisms, and ownership boundaries are explicit, teams spend less time revisiting the same debates. This speeds up delivery and reduces the operational risk of inconsistent decisions made under deadline pressure.",
              "Because platform strategy is never static, we also establish periodic reassessment practices so architecture and governance can evolve with workload changes, regulatory updates, and business priorities. This keeps your OpenShift program adaptive and prevents technical debt from accumulating unnoticed over multiple planning cycles.",
              "Enterprises that gain the most from consulting treat recommendations as part of an ongoing platform operating system rather than a one-time report. We help teams embed architecture reviews, risk checkpoints, and governance feedback loops into normal planning and delivery cycles. This institutionalization improves consistency, makes adaptation easier when priorities shift, and ensures that platform direction remains aligned with measurable business outcomes over multiple years.",
              "We also support leadership teams in defining success metrics for platform strategy itself, such as time-to-onboard new services, policy exception rates, incident recurrence, and upgrade predictability. With shared metrics, consulting recommendations can be tracked as operational improvements rather than abstract architectural intent.",
              "Where executive alignment is required, we facilitate decision workshops that convert technical options into clear investment choices with explicit trade-offs and implementation impact.",
              "By combining architecture depth, operating model clarity, and leadership alignment, consulting engagements create durable momentum. Teams gain a roadmap they can execute, leaders gain confidence in platform direction, and cross-functional stakeholders gain a common frame for decision making. This shared direction is often the difference between fragmented modernization efforts and a coherent platform program that continuously delivers value.",
              "The result is faster decisions, cleaner execution, and lower long-term platform risk.",
            ],
          },
        ],
      },
      {
        id: "engagements",
        title: "Consulting Engagements",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Our consulting engagements are modular so organizations can target specific priorities or run a broader platform improvement roadmap. Some clients need a fast architecture review to validate immediate decisions; others need multi-month advisory support while scaling from one cluster to many. In both cases, we align outcomes with business and engineering objectives so recommendations can be translated into delivery plans, ownership structures, and measurable milestones.",
              "Each engagement includes evidence-based analysis and practical next actions. We review architecture, operations, and governance from the perspective of production resilience, developer productivity, and compliance readiness. Recommendations are prioritized for impact and sequencing, helping leadership teams make trade-offs explicitly rather than reacting to the loudest issue of the week.",
              "We also help organizations connect strategic goals to execution realities. Whether the objective is migration readiness, GitOps maturity, security hardening, or cost optimization, we ensure decisions reflect team capacity, platform constraints, and release commitments. This keeps consulting output grounded in what can actually be delivered.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "Platform Architecture Review",
              "OpenShift Readiness Assessment",
              "GitOps Adoption (Argo CD + OpenShift GitOps)",
              "Security Hardening Audit",
              "Multi-cluster Architecture Design",
              "Migration Planning",
              "Cost Optimization Review",
              "Disaster Recovery Planning",
            ],
          },
        ],
      },
      {
        id: "who-needs-consulting",
        title: "Who Needs OpenShift Consulting",
        variant: "light",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "Consulting is especially useful for teams inheriting clusters without usable documentation. In these situations, operational decisions are often based on assumptions rather than verified architecture intent. We help teams rebuild system understanding quickly, identify critical control gaps, and establish a practical stabilization and modernization sequence.",
              "Enterprises evaluating OpenShift versus alternative Kubernetes options also benefit from impartial technical and operational analysis. Platform selection should account for security model fit, ecosystem needs, operational complexity, and long-term support expectations. We provide objective assessments that help leaders choose confidently, including cases where a different approach may be more suitable than OpenShift.",
              "Platform teams scaling from one to many clusters often struggle with governance consistency, workload tenancy strategy, and operational standardization. We help define multi-cluster patterns, policy baselines, and operating models that preserve autonomy where needed while maintaining enterprise control and auditability.",
              "Security stakeholders and CTO offices use consulting engagements to align platform direction with risk and business strategy. From SCC policy review to three-year platform planning, we help leadership teams connect technical architecture to measurable business outcomes and sustainable operating capability.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "Teams inheriting an OpenShift cluster with no documentation",
              "Enterprises evaluating OpenShift before committing",
              "Platform teams scaling from 1 to many clusters",
              "Security teams needing SCC policy review",
              "CTOs building 3-year platform strategy",
            ],
          },
        ],
      },
      {
        id: "engagement-models",
        title: "Engagement Models",
        variant: "dark",
        blocks: [
          {
            type: "prose",
            paragraphs: [
              "We offer multiple engagement models so organizations can choose the right depth of support for current priorities. Fixed-scope assessments are useful when a team needs clear findings and recommendations quickly. Workshops are ideal for focused design and decision sessions with cross-functional stakeholders. Advisory retainers support continuous guidance as platform complexity grows. Embedded consulting helps enterprises execute major transformations with hands-on leadership and technical stewardship.",
              "Selecting the right model depends on urgency, scope, and internal capacity. During scoping, we define desired outcomes, decision timelines, and ownership expectations so the engagement structure supports delivery rather than adding overhead. This upfront alignment keeps consulting work tightly connected to business goals and implementation realities.",
              "All models can be delivered remotely and are designed for distributed teams across India, UAE, Saudi Arabia, Qatar, and Singapore. We use structured communication, documented decision logs, and clear action ownership so progress remains transparent regardless of geography. The result is consulting that drives action, not just analysis.",
            ],
          },
          {
            type: "bulletList",
            items: [
              "Fixed-scope assessment (1-2 weeks)",
              "Workshop (1-3 days)",
              "Ongoing advisory retainer (monthly)",
              "Embedded consulting (3-6 months)",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What does an OpenShift Architecture Review include?",
        answer:
          "We assess cluster topology, networking, storage, RBAC, operator strategy, upgrade cadence, observability, and GitOps adoption, then deliver a written findings report with prioritised recommendations.",
      },
      {
        question: "Can you help us choose between OpenShift and Kubernetes?",
        answer:
          "Yes. We run impartial platform assessments and provide a clear recommendation based on your operating model, compliance requirements, team capability, and cost expectations.",
      },
      {
        question: "Do you offer remote consulting?",
        answer:
          "Yes. All consulting engagements can be delivered remotely. We work across India, UAE, Saudi Arabia, Qatar, and Singapore.",
      },
    ],
    internalLinks: [
      {
        href: "/openshift/platform-engineering",
        label: "Building an internal developer platform? See platform engineering",
      },
      {
        href: "/openshift/deployment-services",
        label: "Need workload deployment help? Explore deployment services",
      },
      {
        href: "/openshift/installation-services",
        label: "Need cluster foundation work? Explore installation services",
      },
      {
        href: "/openshift",
        label: "Return to the OpenShift hub",
      },
    ],
    finalCta: {
      headline: "Book an OpenShift Consultation",
      bookLabel: "Schedule a Call",
      whatsappLabel: "WhatsApp an Architect",
    },
  },
  ...openshiftServicesPhase4B,
];

export function getOpenShiftService(slug: string) {
  return openshiftServices.find((service) => service.slug === slug);
}
