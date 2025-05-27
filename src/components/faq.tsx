import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Faq() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-start gap-10 md:flex-row">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-primary">Faq</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>
          <p className="mt-2 hidden max-w-2xl flex-1 text-lg text-muted-foreground">
            From freelancers to agencies, Divhunt is the best website builder for{" "}
          </p>
          {/* <Button className="mt-4 gap-2 font-semibold">
            <Users size={16} />
            Contact Us
          </Button> */}
        </div>
        <Accordion type="single" collapsible className="flex w-full max-w-3xl flex-col gap-4">
          <FaqItem
            answer="You can automate personal accounts, brand accounts, or stand-alone accounts."
            question="What kinds of accounts can I automate with The Intern?"
          />
          <FaqItem
            answer="Today, we support X/Twitter. We will be adding more social media platforms in the future."
            question="What social media platforms can The Intern manage accounts on?"
          />
          <FaqItem answer="Yes!" question="Can I connect this to my personal account?" />
          <FaqItem
            answer="The Intern is currently in private beta. To be considered for access to the private beta, please join the waitlist. We will get back to you if you are selected."
            question="How can I join the private beta?"
          />
          <FaqItem
            answer="No technical skills are required! The process of creating your intern is simple, and can be done from The Intern platform."
            question="Do I need any technical skills to configure my automation?"
          />
          <FaqItem
            answer="We allow for custom personality configuration, or uploading an existing personality. Do you really love how a specific influencer or thought leader account posts? Upload it to your intern, and use that as a starter for their personality."
            question="How do I configure a personality for my account?"
          />
          <FaqItem
            answer="Accounts can post memes and images generated with GPT 4o. We are working on allowing video content generation as well."
            question="Can my account post automated images or videos?"
          />
        </Accordion>
      </div>
    </section>
  );
}
