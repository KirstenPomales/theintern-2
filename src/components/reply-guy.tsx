import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function ReplyGuy() {
  return (
    <section className="py-6 sm:py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-x-6 gap-y-8 rounded-2xl border bg-card px-4 py-8 md:px-10 md:py-20">
          <div className="relative w-full rounded-2xl p-10">
            <Image
              alt="Image"
              src="/images/reply-guy-on.png"
              width={400}
              height={398}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-balance text-left font-heading text-2xl font-semibold tracking-tight sm:text-5xl">
              Fast-track growth with the reply guy strategy
            </h2>
            <p className="text-left text-base text-muted-foreground sm:text-xl">
              The #1 way to growth hack an account on X is being active in replying to posts
              relevant in your field. One client{" "}
              <a
                href="https://x.com/noodlesdotfun"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noodles.fun
              </a>{" "}
              saw the following growth in just a few weeks of using the reply guy strategy!
            </p>

            <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row">
              <div className="flex-1 rounded-xl border bg-background p-4 sm:p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  +3k daily <br></br>impressions
                </h3>
                <p className="text-sm text-muted-foreground">Within one month</p>
              </div>
              <div className="flex-1 rounded-xl border bg-background p-4 sm:p-6">
                <h3 className="mb-2 text-xl font-semibold">200% increase in engagements</h3>
                <p className="text-sm text-muted-foreground">Within one month</p>
              </div>
              <div className="flex-1 rounded-xl border bg-background p-4 sm:p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  2x more likes <br></br>on company posts
                </h3>
                <p className="text-sm text-muted-foreground">Within one month</p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="gap-2 font-semibold">
                <a href="https://tally.so/r/mDZZy5" target="_blank" rel="noopener noreferrer">
                  Join the waitlist
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
