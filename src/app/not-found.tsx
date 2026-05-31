import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-brand-cyan">404</p>
      <h1 className="mt-4 font-heading text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted-foreground">The resource you requested does not exist.</p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
