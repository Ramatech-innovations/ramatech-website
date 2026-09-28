import type { ComparisonRow } from "@/content/openshift-kubernetes-comparison";

export function ComparisonTable({
  data,
}: {
  data: ComparisonRow[];
  variant?: "light" | "dark";
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
        <thead className="sticky top-0 z-10 bg-slate-50">
          <tr className="border-b border-slate-200">
            <th scope="col" className="px-4 py-3 font-heading font-semibold text-brand-ink md:px-6">
              Aspect
            </th>
            <th scope="col" className="px-4 py-3 font-heading font-semibold text-brand-primary md:px-6">
              OpenShift
            </th>
            <th scope="col" className="px-4 py-3 font-heading font-semibold text-brand-ink md:px-6">
              Vanilla Kubernetes
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.aspect} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-4 py-3 align-top font-medium text-brand-ink md:px-6">
                {row.aspect}
              </th>
              <td className="px-4 py-3 align-top leading-relaxed text-slate-700 md:px-6">
                {row.openshift}
              </td>
              <td className="px-4 py-3 align-top leading-relaxed text-slate-700 md:px-6">
                {row.kubernetes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
