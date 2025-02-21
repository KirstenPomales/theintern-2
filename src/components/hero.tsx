import { Zap, LineChart, DollarSign, Sparkle } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="relative mx-2 flex flex-col items-center gap-6 border border-t-0 pt-20 md:mx-10">
          <Badge variant="outline" className="rounded-md bg-card pl-1 text-secondary-foreground">
            <span className="mr-2 rounded-sm bg-primary px-1.5 py-0.5 text-primary-foreground">
              New
            </span>
            Automate your socials →
          </Badge>
          <h1 className="max-w-3xl text-balance text-center font-heading text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Meet your AI marketing intern
          </h1>
          <p className="max-w-md text-center text-lg text-muted-foreground sm:text-xl">
            Automate your community engagement on X with The Intern: your fully autonamous marketing
            assistant
          </p>
          <div className="mb-16 flex grid-cols-2 items-center gap-4">
            <Button size="lg" className="gap-2 font-semibold">
              Join the waitlist
            </Button>
          </div>
        </div>
        <div className="relative mx-2 flex items-center justify-center gap-12 border-x py-6 md:mx-10">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-4">
            <div className="flex items-center justify-center gap-2">
              <Zap className="text-muted-foreground" />
              <span className="text-muted-foreground">5 minute setup</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <LineChart className="text-muted-foreground" />
              <span className="text-muted-foreground">Your intern starts work right away</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="text-muted-foreground" />
              <span className="text-muted-foreground">Transparent pricing</span>
            </div>
          </div>
          <Sparkle
            size={20}
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 fill-foreground"
          />
          <Sparkle
            size={20}
            className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 fill-foreground"
          />
        </div>
        <div className="rounded-2xl bg-primary p-10">
          <Image alt="Image" src="/images/hero.png" width={1300} height={698} />
        </div>
      </div>
    </section>
  );
}
