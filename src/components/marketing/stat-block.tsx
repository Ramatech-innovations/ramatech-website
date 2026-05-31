import { cn } from "@/lib/utils";

export function TrustStatsRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-8",
        "sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8"
      )}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "flex flex-1 flex-col items-center text-center sm:items-start sm:text-left",
            i > 0 && "sm:border-l sm:border-white/10 sm:pl-6"
          )}
        >
          <p className="font-mono text-2xl font-semibold tabular-nums tracking-tight text-gradient md:text-3xl">
            {s.value}
          </p>
          <p className="type-metric-label mt-2 max-w-[200px]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
