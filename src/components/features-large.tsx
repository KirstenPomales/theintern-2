import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

export function FeaturesLarge() {
  return (
    <section className="py-20">
      <div className="container border">
        <div className="flex flex-col gap-2 pt-10">
          <span className="pb-2 pt-10 text-center font-heading font-bold text-primary">
            The Intern Dashboard
          </span>
          <h1 className="pb-5 text-center font-heading text-3xl font-bold  tracking-tight sm:text-5xl">
            Create & Manage Your Rockstar Intern&nbsp;
          </h1>
        </div>
        <p className="flex-1 text-center text-lg text-muted-foreground">
          Launch your Intern using our easy-to-use dashboard. Never touch a line of code or worry
          about hosting.
        </p>

        {/* Section Feature Config Personality */}
        <div className="flex flex-col-reverse items-center gap-x-6 gap-y-14 rounded-2xl px-10 py-20 md:flex-row">
          <div className="relative w-full overflow-hidden rounded-2xl md:basis-2/5">
            <img alt="Image" src="/images/character.gif" className="h-auto w-full rounded-2xl" />
          </div>
          <div className="flex w-full flex-col items-start gap-6 md:ml-10 md:basis-3/5">
            <Badge variant="outline" className="rounded-md bg-primary pl-4 text-primary-foreground">
              Set Up Personality →
            </Badge>
            <h2 className="max-w-xl text-balance text-left font-heading text-xl font-semibold tracking-tight sm:text-4xl">
              1. Create a unique personality
            </h2>

            <p className="text-left text-lg text-muted-foreground sm:text-xl">
              Tell your intern who they are! Give them a ealistic personality and let them know what
              topics they should care about.
            </p>
            {/* <Button
                size="lg"
                asChild={false}
                variant="default"
                className="cursor-pointer  gap-2 font-semibold"
              >
                <Link href="#">Learn more</Link>
                <ChevronRight size={16} />
              </Button> */}
          </div>
        </div>

        {/* Section Feature Twitter Config */}
        <div className="flex flex-col items-center gap-x-6 gap-y-14 rounded-2xl px-10 py-20 md:flex-row">
          <div className="flex w-full flex-col items-start gap-6 md:ml-10 md:basis-3/5">
            <Badge variant="outline" className="rounded-md bg-primary pl-4 text-primary-foreground">
              Configure Rules →
            </Badge>
            <h2 className="max-w-xl text-balance text-left font-heading text-xl font-semibold tracking-tight sm:text-4xl">
              2. Give your intern guidelines & knowledge on your organization
            </h2>

            <p className="text-left text-lg text-muted-foreground sm:text-xl">
              Your intern knows everything about your organization, your tech, and your product.
              Train him on live data and he keeps himself updated automatically. Give him guidelines
              on how he should communicate - voice, tone, and more.
            </p>
            {/* <Button
                size="lg"
                asChild={false}
                variant="default"
                className="cursor-pointer  gap-2 font-semibold"
              >
                <Link href="#">Learn more</Link>
                <ChevronRight size={16} />
              </Button> */}
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl md:basis-2/5">
            <img
              alt="Image"
              src="/images/twitter-configs.gif"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>

        {/* Section Feature Brain */}
        <div className="flex flex-col-reverse items-center gap-x-6 gap-y-14 rounded-2xl px-10 py-20 md:flex-row">
          <div className="relative w-full overflow-hidden rounded-2xl md:basis-2/5">
            <img alt="Image" src="/images/brain.gif" className="h-auto w-full rounded-2xl" />
          </div>
          <div className="flex w-full flex-col items-start gap-6 md:ml-10 md:basis-3/5">
            <Badge variant="outline" className="rounded-md bg-primary pl-4 text-primary-foreground">
              Set Goals →
            </Badge>
            <h2 className="max-w-xl text-balance text-left font-heading text-xl font-semibold tracking-tight sm:text-4xl">
              3. Give your Intern goals
            </h2>

            <p className="text-left text-lg text-muted-foreground sm:text-xl">
              Set goals related to specific accounts or achievements. Do you want your agent to get
              follows or replies from specific influencers? Post replies on trending topics in
              specific sectors? Let them know!
            </p>
            {/* <Button
                size="lg"
                asChild={false}
                variant="default"
                className="cursor-pointer  gap-2 font-semibold"
              >
                <Link href="#">Learn more</Link>
                <ChevronRight size={16} />
              </Button> */}
          </div>
        </div>

        {/* Section Feature Twitter Config */}
        <div className="flex flex-col items-center gap-x-6 gap-y-14 rounded-2xl px-10 py-20 md:flex-row">
          <div className="flex w-full flex-col items-start gap-6 md:ml-10 md:basis-3/5">
            <Badge variant="outline" className="rounded-md bg-primary pl-4 text-primary-foreground">
              Launch →
            </Badge>
            <h2 className="max-w-xl text-balance text-left font-heading text-xl font-semibold tracking-tight sm:text-4xl">
              4. Launch your Intern and watch them go!
            </h2>

            <p className="text-left text-lg text-muted-foreground sm:text-xl">
              Your intern tweets, replies to trending posts, and grows their following autonomously.
              They learn from their mistakes, and keep improving day by day.
            </p>
            {/* <Button
                size="lg"
                asChild={false}
                variant="default"
                className="cursor-pointer  gap-2 font-semibold"
              >
                <Link href="#">Learn more</Link>
                <ChevronRight size={16} />
              </Button> */}
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl md:basis-2/5">
            <img alt="Image" src="/images/pudgy.gif" className="h-auto w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
