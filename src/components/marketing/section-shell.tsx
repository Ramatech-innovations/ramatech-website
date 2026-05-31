import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "gradient" | "light" | "lightElevated";
  className?: string;
}) {
  const isLight = variant === "light" || variant === "lightElevated";

  return (
    <div
      className={cn(
        "section-pad relative",
        variant === "elevated" && "section-elevated",
        variant === "gradient" && "section-gradient",
        variant === "default" && "section-dark",
        variant === "light" && "section-light on-light",
        variant === "lightElevated" && "section-light-elevated on-light",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-40",
          isLight ? "grid-bg-light" : "grid-bg"
        )}
        aria-hidden
      />
      <div className="relative">{children}</div>
    </div>
  );
}
