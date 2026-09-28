import { Check } from "lucide-react";

export function PackageDeliverables({
  items,
}: {
  items: string[];
  variant?: "light" | "dark";
}) {
  return (
    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700">
          <Check className="mt-1 h-5 w-5 shrink-0 text-brand-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
