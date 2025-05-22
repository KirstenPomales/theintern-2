---
title: "Kirsten's Vibe Marketing Workflows"
date: "2025-05-22"
excerpt: "Here's the prompts I'm using to take my startup to 100k MRR while also doing basically no work... "
coverImage: "/images/vibe-marketing-guide.png"
---

Hey! I'm [**Kirsten**](https://www.kirstenpomales.com/), a founder and vibe-marketer. Here's the prompts I'm using to take my startup to 100k MRR while also doing basically no work. If you have questions, [**my dms are open**](https://x.com/kirstenrpomales). 

Today we'll cover:

⭐️ SEO Automation w AI

⭐️ Graphic Design w AI

⭐️ Marketing Automation w AI

# 🔎 SEO Automation with Deepseek & Cursor

### **My SEO Strategies:**

1. Identify best SEO keywords based on competitors posts
2. Write SEO optimized articles and post to my site
3. Create backlinks by re-sharing my blog articles on socials

### Identify Target Keywords

You can do this for multiple competitors. 

```
can you analyze this website of my company's competitor and check what keywords they are optiomizing for across all pages of the site? 

competetor company website: https://senja.io
```

### Generate SEO Content Ideas

```
Please generate 5 content ideas for my startup. For each piece of content, assign a content type (Informational or How-To Guide), an article title, an article description, and keywords. Not all articles ahave to use all keywords. 

Keywords to Optimize For:
testimonial, social proof, collect testimonials, manage testimonials, share testimonials, video testimonials, Wall of Love

About My Company:
Revyou is a platform that helps freelancers collect reviews from clients. It's main features are…

- Collect reviews with a custom form that you can make in 5 minutes
- Aggregate your reviews from any platform (like freelance marketplaces, google reviews, etc) with the help of AI
- Display all your reviews on a beautiful and customizable page
- Embed your wall of reviews on your website
```

**My SEO Content Ideas:** 

| Content Type | Article Title | About Description | Article Keywords |
| --- | --- | --- | --- |
| How-To | How to Build Trust Online as a Freelancer or Small Business | Learn effective strategies to build trust online through customer reviews, testimonials, and social proof to grow your freelance or small business. | freelancing, testimonials, reviews |

Here's an example of how to use code snippets in your content:

```tsx
import { CodeSnippet } from "@/components/code-snippet"

<CodeSnippet 
  code="const greeting = 'Hello, world!';" 
  language="js" 
/>
```

### Write SEO Article

```
I need you to write me an SEO-optimized article for my company's website. I'll give you information about our company, and details on what topic of article to write. 

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

Thank you!
```

# 🎨 Graphic Design Automation with GPT 4o

### SEO Blog Header Image Prompts

```
make me a blog post header image that involves [marketing]. please do not invlude text. use the provided color scheme
```

![image.png](attachment:8d0d2012-b600-4fe4-98a8-380ebaa48268:image.png)

# 🐦 SMM Automation with The Intern

### **My X/Twitter Marketing Strategies:**

1. Reply guy strategy (#1 way to grow a following fast)
2. Make funny images that generate engagement
3. Post updates from my blog

### Image Plugin Prompts

Context:

```
Imagine a socially relevant critique on society involving AI and/or marketing. 
```

Prompt:

```
Generate an image of my character in Studio Ghibli art style, engagign with the chosen topic. 
```

### Blog Post Re-Share Prompts

1. Add blog page to Dynamic Knowledge: https://www.revyou.me/blog
2. Configure Dynamic Knowledge Plugin

Decision Prompt

```
Check if there has been a new blog article posted.
```

Content Generation Prompt

```
Generate a post with a one-sentence TLDR of the blog post, and a link to the post. 
```
