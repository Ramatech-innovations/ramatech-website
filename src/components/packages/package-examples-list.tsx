import { Card } from "@/components/ui/card";

export function PackageExamplesList({ examples }: { examples: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {examples.map((ex) => (
        <Card key={ex} className="p-5">
          <p className="font-heading font-semibold text-brand-ink">{ex}</p>
        </Card>
      ))}
    </div>
  );
}
