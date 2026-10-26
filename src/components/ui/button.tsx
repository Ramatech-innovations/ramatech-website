"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white hover:bg-[#083C77] type-button",
        secondary:
          "border border-slate-300 bg-white text-brand-ink hover:border-brand-primary/50 hover:text-brand-primary type-button",
        link: "h-auto px-0 py-0 text-brand-primary underline-offset-4 hover:underline type-button",
        /* Only for the navy closing CTA band and footer. */
        inverse: "bg-white text-brand-ink hover:bg-slate-100 type-button",
        inverseOutline:
          "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 type-button",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-[12px] tracking-[0.05em]",
        lg: "h-12 rounded-md px-7 type-button-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";
