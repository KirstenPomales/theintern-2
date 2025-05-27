import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Callout() {
  return (
    <section className="py-6 sm:py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-x-6 gap-y-8 rounded-2xl border bg-card px-4 py-8 md:flex-row md:gap-y-14 md:px-10 md:py-20">
          <div className="flex flex-col items-start gap-6 lg:basis-3/5">
            <h2 className="max-w-2xl text-balance text-left font-heading text-2xl font-semibold tracking-tight sm:text-5xl">
              Automated community ambassadors
            </h2>
            <p className="max-w-lg text-left text-base text-muted-foreground sm:text-xl">
              Your intern creates thoughtful engagement with existing community members and brand
              accounts. They&apos;re a valued part of your community: with a customizable
              personality and knowledge of current events.
            </p>

            <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row">
              <div className="flex-1 rounded-xl border bg-background p-4 sm:p-6">
                <h3 className="mb-2 font-semibold">Multi-Lingual</h3>
                <p className="text-sm text-muted-foreground">
                  Configure your agent&apos;s language & expand your geographic reach
                </p>
              </div>
              <div className="flex-1 rounded-xl border bg-background p-4 sm:p-6">
                <h3 className="mb-2 font-semibold">Knowledgeable</h3>
                <p className="text-sm text-muted-foreground">
                  Your agent knows your tech, resources, and the who&apos;s-who of your ecosystem
                </p>
              </div>
              <div className="flex-1 rounded-xl border bg-background p-4 sm:p-6">
                <h3 className="mb-2 font-semibold">Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  Each intern has a unique personality that gets deeper as they engage
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="gap-2 font-semibold">
                <a href="https://tally.so/r/mDZZy5" target="_blank" rel="noopener noreferrer">
                  Join the waitlist
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-2 bg-yellow-300 font-semibold text-black hover:bg-yellow-400"
              >
                <a href="https://x.com/pudgyintern_" target="_blank" rel="noopener noreferrer">
                  Meet an Intern
                </a>
              </Button>
            </div>
          </div>
          <div className="relative basis-2/5 rounded-2xl lg:flex">
            <Image
              alt="Image"
              src="/images/pudgy-intern-two.png"
              width={400}
              height={398}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
