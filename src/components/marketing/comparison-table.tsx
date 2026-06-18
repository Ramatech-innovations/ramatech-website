import { cn } from "@/lib/utils";
import type { ComparisonRow } from "@/content/openshift-kubernetes-comparison";

export function ComparisonTable({
  data,
  variant = "light",
}: {
  data: ComparisonRow[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-xl border",
        isDark ? "border-white/10" : "border-slate-200"
      )}
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
        <thead
          className={cn(
            "sticky top-0 z-10",
            isDark ? "bg-brand-dark" : "bg-slate-50"
          )}
        >
          <tr
            className={cn(
              "border-b",
              isDark ? "border-white/10" : "border-slate-200"
            )}
          >
            <th
              scope="col"
              className={cn(
                "px-4 py-3 font-heading font-semibold md:px-6",
                isDark ? "text-white" : "text-brand-ink"
              )}
            >
              Aspect
            </th>
            <th
              scope="col"
              className={cn(
                "px-4 py-3 font-heading font-semibold md:px-6",
                isDark ? "text-brand-cyan" : "text-brand-primary"
              )}
            >
              OpenShift
            </th>
            <th
              scope="col"
              className={cn(
                "px-4 py-3 font-heading font-semibold md:px-6",
                isDark ? "text-white/90" : "text-brand-ink"
              )}
            >
              Vanilla Kubernetes
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.aspect}
              className={cn(
                "border-b last:border-0",
                isDark ? "border-white/5" : "border-slate-100"
              )}
            >
              <th
                scope="row"
                className={cn(
                  "px-4 py-3 align-top font-medium md:px-6",
                  isDark ? "text-white" : "text-brand-ink"
                )}
              >
                {row.aspect}
              </th>
              <td
                className={cn(
                  "px-4 py-3 align-top leading-relaxed md:px-6",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                {row.openshift}
              </td>
              <td
                className={cn(
                  "px-4 py-3 align-top leading-relaxed md:px-6",
                  isDark ? "text-slate-300" : "text-slate-700"
                )}
              >
                {row.kubernetes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
