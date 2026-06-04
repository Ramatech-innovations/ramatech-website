import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PackageDeliverables({
  items,
  variant = "light",
}: {
  items: string[];
  variant?: "light" | "dark";
}) {
  const isLight = variant === "light";

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item}>
          <Card
            tone={isLight ? "light" : "dark"}
            className={cn(
              "flex gap-4 p-5 md:p-6",
              !isLight && "border border-white/10"
            )}
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                isLight
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "bg-brand-cyan/15 text-brand-cyan"
              )}
            >
              <Check className="h-5 w-5" aria-hidden />
            </span>
            <span
              className={cn(
                "text-base leading-relaxed md:text-[1.0625rem] md:leading-[1.7]",
                isLight ? "text-slate-700" : "text-foreground/90"
              )}
            >
              {item}
            </span>
          </Card>
        </li>
      ))}
    </ul>
  );
}
