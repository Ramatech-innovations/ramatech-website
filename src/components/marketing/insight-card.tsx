import { Card } from "@/components/ui/card";

export function InsightCard({
  tag,
  title,
  description,
  footer,
}: {
  tag: string;
  title: string;
  description: string;
  footer: string;
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="h-28 bg-gradient-to-br from-brand-primary via-brand-deep to-brand-cyan opacity-80" />
      <div className="p-6">
        <span className="font-mono text-xs text-brand-cyan">{tag}</span>
        <h3 className="mt-2 font-heading font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <p className="mt-4 text-xs text-muted-foreground">{footer}</p>
      </div>
    </Card>
  );
}
