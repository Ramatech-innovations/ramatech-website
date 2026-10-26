import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return <div className={cn("card-on-light p-6", className)}>{children}</div>;
}
