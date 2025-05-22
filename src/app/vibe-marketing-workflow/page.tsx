import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { FeaturesSection } from "@/components/features-section-2";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { Newcta } from "@/components/newcta";
import { Callout } from "@/components/callout";
import { Footer } from "@/components/footer";
import { Tada } from "@/components/tada";
import { MarqueeSection } from "@/components/marquee";
import { FeaturesLarge } from "@/components/features-large";
import { CodeSnippet } from "@/components/code-snippet";
import { TwitterEmbed } from "@/components/twitter-embed";
import Image from "next/image";

export default function VibeMarketingWorkflow() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/images/vibe-marketing-guide.png"
            alt="Vibe Marketing Guide Cover"
            width={1200}
            height={630}
            className="size-full object-cover"
            priority
          />
        </div>

        <h1 className="mb-6 text-4xl font-bold">Kirsten&apos;s Vibe Marketing Workflows</h1>

        <p className="mb-6">
          Hey! I&apos;m{" "}
          <a href="https://www.kirstenpomales.com/" className="font-bold">
            Kirsten
          </a>
          , a founder and vibe-marketer. Here&apos;s the prompts I&apos;m using to take my startup
          to 100k MRR while also doing basically no work. If you have questions,{" "}
          <a href="https://x.com/kirstenrpomales" className="font-bold">
            my dms are open
          </a>
          . Remember, this is a worksheet that goes alongside my full video tutorial! It will be
          most helpful to you if you watch the video.
        </p>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Today we&apos;ll cover:</h2>
          <ul className="list-none space-y-2">
            <li>⭐️ SEO Automation w AI</li>
            <li>⭐️ Graphic Design w AI</li>
            <li>⭐️ Marketing Automation w AI</li>
          </ul>
        </div>

        <p className="mb-6">
          Make sure to follow along in the video tutorial - it has a lot more info than what&apos;s
          written here.
        </p>

        <TwitterEmbed tweetId="1925221395648139580" />

        <section className="mb-12 mt-20">
          <h2 className="mb-6 text-3xl font-bold">🔎 SEO Automation with Deepseek & Cursor</h2>

          <h3 className="mb-4 text-2xl font-bold">My SEO Strategies:</h3>
          <ol className="mb-6 list-decimal pl-6">
            <li>Identify best SEO keywords based on competitors posts</li>
            <li>Write SEO optimized articles and post to my site</li>
            <li>Create backlinks by re-sharing my blog articles on socials</li>
          </ol>

          <h4 className="mb-4 text-xl font-bold">Identify Target Keywords</h4>
          <p className="mb-4">You can do this for multiple competitors.</p>

          <CodeSnippet
            code={`can you analyze this website of my company's competitor and check what keywords they are optiomizing for across all pages of the site? 

competetor company website: <https://senja.io>`}
            language="text"
          />

          <h4 className="mb-4 mt-8 text-xl font-bold">Generate SEO Content Ideas</h4>

          <CodeSnippet
            code={`Please generate 5 content ideas for my startup. For each piece of content, assign a content type (Informational or How-To Guide), an article title, an article description, and keywords. Not all articles ahave to use all keywords. 

Keywords to Optimize For:
testimonial, social proof, collect testimonials, manage testimonials, share testimonials, video testimonials, Wall of Love

About My Company:
Revyou is a platform that helps freelancers collect reviews from clients. It's main features are…

- Collect reviews with a custom form that you can make in 5 minutes
- Aggregate your reviews from any platform (like freelance marketplaces, google reviews, etc) with the help of AI
- Display all your reviews on a beautiful and customizable page
- Embed your wall of reviews on your website`}
            language="text"
          />

          <h4 className="mb-4 mt-8 text-xl font-bold">Write SEO Article</h4>

          <CodeSnippet
            code={`I need you to write me an SEO-optimized article for my company's website. I'll give you information about our company, and details on what topic of article to write. 

Article Requested:
type: How-To
title: Vibe Marketing 101: Superpower Your Marketing with AI	
about: Explains how integrating AI can amplify vibe marketing by personalizing content, predicting trends, and enhancing brand-consumer connection.	
keywords: vibe marketing, ai marketing

About My Company:
Revyou is a platform that helps freelancers collect reviews from clients. It's main features are…

- Collect reviews with a custom form that you can make in 5 minutes
- Aggregate your reviews from any platform (like freelance marketplaces, google reviews, etc) with the help of AI
- Display all your reviews on a beautiful and customizable page
- Embed your wall of reviews on your website

Our Product Advantages

The things we want to communicate to our users are…
❤️ It's beautiful! Even For a small e-commerce, it could be attractive because it's more beautiful than any other
❤️ It's easy! No big admin with 20 menu possibilities
❤️ It can serve anyone, from products to people
❤️ Your page is beautiful and gains natural traffic for SEO! Automatic rank with reviews. It bring you more business
❤️ Only place on the internet where you can showcase easily your work and the reviews linked to it

About This Article
⭐️ We want an article that is titled "[Insert Name of Article Title from Content To-Do List]" and it should be about "[Insert Article Description from Content To-Do List]". 

Keywords to Include
⭐️ Our SEO priority keywords for this article are "[Insert Article Keywords from Content To-Do List]"

Make it seem not written by AI. 

The file you create must be a .md file, created under public/content/blog next to the other .md files that are blogs.

Make sure to add a CTA that makes sense at the end! We'll add a hyperlink to our sign up page.

Here's a short segment from an example article I wrote. This will help you understand our writing style: 
"**Tips for Building a Powerful Wall of Love**

Building a Wall of Love isn't just about pasting some nice words on your website. To make it work, you'll need to be thoughtful in collecting, displaying, and updating testimonials. Here are some tips to get you started.

**1. Gather Quality Testimonials**

Not all testimonials are created equal. Rather than a generic "They did great work," encourage clients to provide specific feedback.

To get better responses, ask questions like: What was the problem they faced before working with you? How did your product or service solve their issue? What results did they achieve?

**Quality testimonials that tell a story are far more compelling and memorable**. They show potential clients the kind of results they could expect from you."

The length range of the article should be between 800 and 1300. 

Make sure the article is provided in markdown format! 

Thank you!`}
            language="text"
          />
        </section>

        <section className="mb-12 mt-20">
          <h2 className="mb-6 text-3xl font-bold">🎨 Graphic Design Automation with GPT 4o</h2>

          <h3 className="mb-4 text-2xl font-bold">SEO Blog Header Image Prompts</h3>

          <CodeSnippet
            code={`make me a blog post header image that involves [marketing]. please do not invlude text. use the provided color scheme`}
            language="text"
          />
        </section>

        <section className="mb-12 mt-20">
          <h2 className="mb-6 text-3xl font-bold">🐦 SMM Automation with The Intern</h2>

          <h3 className="mb-4 text-2xl font-bold">My X/Twitter Marketing Strategies:</h3>
          <ol className="mb-6 list-decimal pl-6">
            <li>Reply guy strategy (#1 way to grow a following fast)</li>
            <li>Make funny images that generate engagement</li>
            <li>Post updates from my blog</li>
          </ol>

          <h4 className="mb-4 text-xl font-bold">Image Plugin Prompts</h4>
          <p className="mb-4">Context:</p>

          <CodeSnippet
            code={`Imagine a socially relevant critique on society involving AI and/or marketing.`}
            language="text"
          />

          <p className="mb-4 mt-6">Prompt:</p>

          <CodeSnippet
            code={`Generate an image of my character in Studio Ghibli art style, engagign with the chosen topic.`}
            language="text"
          />

          <h4 className="mb-4 mt-8 text-xl font-bold">Blog Post Re-Share Prompts</h4>
          <ol className="mb-6 list-decimal pl-6">
            <li>
              Add blog page to Dynamic Knowledge:{" "}
              <a href="https://www.revyou.me/blog">https://www.revyou.me/blog</a>
            </li>
            <li>Configure Dynamic Knowledge Plugin</li>
          </ol>

          <p className="mb-4">Decision Prompt</p>

          <CodeSnippet
            code={`Check if there has been a new blog article posted.`}
            language="text"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
