"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

const scrollerVariants = cva(
  "flex flex-wrap w-max gap-4 py-4 motion-safe:flex-nowrap animate-scroll",
  {
    variants: {
      speed: {
        default: "[animation-duration:40s]",
        slow: "[animation-duration:60s]",
        fast: "[animation-duration:20s]",
      },
      direction: {
        left: "direction-normal",
        right: "direction-reverse",
      },
    },
    defaultVariants: {
      speed: "default",
      direction: "left",
    },
  },
);

const Scroller = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof scrollerVariants>
>(({ className, children, speed, direction, ...props }, ref) => {

  return (
    <div
      className={cn(
        "w-full overflow-hidden z-0 gradient-mask-r-[transparent,black_20%,black_80%] max-w-5xl",
        className,
      )}
      {...props}
    >
      <div
        ref={ref}
        className={cn(
          "flex w-max z-0 gap-4 py-4 flex-nowrap animate-scroll",
          scrollerVariants({ direction, speed, className }),
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
});
Scroller.displayName = "Scroller";

export { Scroller };
