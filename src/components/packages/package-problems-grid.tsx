import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function PackageProblemsGrid({
  problems,
}: {
  problems: { problem: string; solution: string }[];
}) {
  if (problems.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {problems.map((p) => (
        <Card key={p.problem} tone="light">
          <p className="font-medium text-brand-ink">{p.problem}</p>
          <p className="mt-3 flex items-center gap-2 text-[0.9375rem] font-medium text-brand-primary">
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            {p.solution}
          </p>
        </Card>
      ))}
    </div>
  );
}
