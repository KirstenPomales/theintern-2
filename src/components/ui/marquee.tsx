"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, pauseOnHover = false, reverse = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("group relative flex w-full overflow-hidden", className)}
        {...props}
        data-marquee="true"
      >
        <div
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around gap-8",
            "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "animate-marquee-reverse",
          )}
        >
          <div className="flex items-center gap-8">{children}</div>
          <div className="flex items-center gap-8">{children}</div>
          <div className="flex items-center gap-8">{children}</div>
        </div>
      </div>
    );
  },
);

Marquee.displayName = "Marquee";
