import { cn } from "@/lib/utils";

export function MotionSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}) {
  return <section className={cn(className)}>{children}</section>;
}

export function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}
