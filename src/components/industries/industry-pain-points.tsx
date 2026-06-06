import { AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function IndustryPainPoints({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item}>
          <Card tone="light" className="flex gap-4 p-5 md:p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-600">
              <AlertCircle className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-base leading-relaxed text-slate-700 md:text-[1.0625rem] md:leading-[1.7]">
              {item}
            </span>
          </Card>
        </li>
      ))}
    </ul>
  );
}
