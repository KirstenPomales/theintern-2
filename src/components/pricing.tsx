import { PricingCard } from "@/components/pricing-card";

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-center font-bold text-primary">Pricing</span>
          <h2 className="max-w-2xl text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
            Grow your X account with ReplyGuy by The Intern
          </h2>
        </div>

        <div className="mt-7 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <PricingCard
            name="ReplyGuy Basic"
            price="$200/month"
            feature1="reply automation"
            feature2="up to 10 replies per day"
            feature3="knowledge system"
            feature4="personality clone"
            feature5="one X account"
            description="For running the ReplyGuy strategy on business or professional X accounts."
            isMostPopular
            buttonText="Get Started"
            buttonLink="https://replyguy.ai/signup"
          />
          <PricingCard
            name="ReplyGuy Pro"
            price="Custom"
            feature1="custom plugins & data feeds"
            feature2="tweet automation"
            feature3="real-time news reactivity"
            feature4="generative images"
            feature5="multiple X accounts"
            description="For managing brand accounts and personal X profiles, where you'd normally hire a social media manager."
            isMostPopular={false}
            buttonText="Request Access"
            buttonLink="https://tally.so/r/3jXdv4"
          />
          {/* <PricingCard
            name="Enterprise"
            price={99}
            feature1="Everything in Pro"
            feature2="Single sign-on"
            feature3="Custom SLA"
            feature4="Custom integrations"
            feature5="Custom reporting"
            description="For big companies and enterprises with high traffic and custom needs."
            isMostPopular={false}
          /> */}
        </div>
      </div>
    </section>
  );
}
