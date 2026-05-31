import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "gradient";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "section-pad relative",
        variant === "elevated" && "section-elevated",
        variant === "gradient" && "section-gradient",
        variant === "default" && "section-dark",
        className
      )}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}
