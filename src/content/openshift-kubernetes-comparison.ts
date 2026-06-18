export type ComparisonRow = {
  aspect: string;
  openshift: string;
  kubernetes: string;
};

export const openshiftKubernetesComparison: ComparisonRow[] = [
  {
    aspect: "Default security model",
    openshift:
      "Security Context Constraints (SCCs) with default restricted profiles; OAuth-integrated RBAC and project-scoped roles out of the box.",
    kubernetes:
      "Pod Security Admission (restricted, baseline, privileged); RBAC and admission policies are pluggable but must be designed and maintained by the platform team.",
  },
  {
    aspect: "Container registry",
    openshift:
      "Integrated internal registry and ImageStreams for digest-aware promotion; optional Red Hat Quay integration patterns documented for enterprise.",
    kubernetes:
      "No built-in registry — teams bring Harbor, ECR, GCR, ACR, or other registries and wire CI/CD promotion separately.",
  },
  {
    aspect: "Routing / ingress",
    openshift:
      "OpenShift Routes (HAProxy router) with TLS edge termination; oc expose creates DNS-ready ingress without separate IngressClass setup.",
    kubernetes:
      "Generic Ingress or Gateway API — requires ingress controller, certificate management, and DNS automation chosen and operated by the platform team.",
  },
  {
    aspect: "Operator lifecycle",
    openshift:
      "Operator Lifecycle Manager (OLM) and OperatorHub with Red Hat-certified operators and subscription-aware upgrade channels.",
    kubernetes:
      "Helm charts, Kustomize, or manual YAML; no unified catalog or vendor-tested upgrade matrix across control plane and operators.",
  },
  {
    aspect: "Supported install methods",
    openshift:
      "IPI, UPI, assisted installer, plus managed ROSA (AWS) and ARO (Azure); RHEL CoreOS nodes with Machine Config Operator.",
    kubernetes:
      "kubeadm, managed EKS/GKE/AKS, or vendor distributions — control plane, CNI, CSI, and OS patching coordinated separately.",
  },
  {
    aspect: "Support model",
    openshift:
      "Red Hat subscription with enterprise support, TAM access, and tested upgrade paths via the Cluster Version Operator.",
    kubernetes:
      "Community support, cloud provider SLAs for managed control planes, or third-party vendors — integration gaps between layers remain the customer's problem.",
  },
];
