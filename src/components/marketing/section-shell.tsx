import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  variant = "light",
  className,
  id,
}: {
  children: React.ReactNode;
  variant?: "light" | "lightElevated" | "dark";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad",
        variant === "light" && "section-light on-light",
        variant === "lightElevated" && "section-light-elevated on-light",
        variant === "dark" && "section-dark",
        className
      )}
    >
      {children}
    </section>
  );
}
