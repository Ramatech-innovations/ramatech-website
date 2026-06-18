import { OpenShiftStickyEngineerBar } from "@/components/openshift/openshift-sticky-engineer-bar";

export default function OpenShiftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <OpenShiftStickyEngineerBar />
    </>
  );
}
