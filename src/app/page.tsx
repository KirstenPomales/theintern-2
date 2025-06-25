import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { FeaturesSection } from "@/components/features-section-2";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";

import { Newcta } from "@/components/newcta";
import { Callout } from "@/components/callout";
import { Footer } from "@/components/footer";
import { Tada } from "@/components/tada";
import { ReplyGuy } from "@/components/reply-guy";
import { MarqueeSection } from "@/components/marquee";
import { Pricing } from "@/components/pricing";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ReplyGuy />
      <Pricing />
      {/* <Testimonials /> */}

      <Faq />

      {/* <Pricing /> */}
      <Newcta />
      <Footer />
    </>
  );
}
