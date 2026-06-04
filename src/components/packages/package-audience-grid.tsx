import { Card } from "@/components/ui/card";

export function PackageAudienceGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item} tone="dark" className="border border-white/10">
          <p className="text-[0.9375rem] leading-relaxed text-foreground/85">{item}</p>
        </Card>
      ))}
    </div>
  );
}
