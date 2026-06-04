import { Card } from "@/components/ui/card";

export function PackageExamplesList({ examples }: { examples: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {examples.map((ex) => (
        <Card key={ex} tone="dark" className="border border-white/10 text-center">
          <p className="font-heading font-semibold text-foreground">{ex}</p>
        </Card>
      ))}
    </div>
  );
}
