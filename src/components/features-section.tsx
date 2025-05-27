import { FeatureCard } from "@/components/feature-card";

const devRelTweet = {
  name: "Kylie 💎 Rarity Devrel",
  username: "@kylesformiles",
  body: "we just launched the new version of our Rarity API! AMA.",
  img: "/images/marquee/ai-gen-pfp.png",
  cardImage: "/images/marquee/devrel-help.png",
  stats: {
    comments: 67,
    retweets: 34,
    likes: 23,
    bookmarks: 42,
  },
};

const communityTweet = {
  name: "Jennifer Depardieu",
  username: "@jennyfromtheblock",
  body: "my face when someone pitches me their revolutionary new note-taking app",
  img: "/images/jennifer-pfp.png",
  cardImage: "/images/jlo-sad.png",
  stats: {
    comments: 12,
    retweets: 8,
    likes: 89,
    bookmarks: 3,
  },
};

const ambassadorTweet = {
  name: "Tailwy",
  username: "@usetailwy",
  body: "new ai color scheme maker just dropped. read the alpha on our latest blog! ",
  img: "/images/tailwy-logo.png",
  cardImage: "/images/tailwy.png",
  stats: {
    comments: 13,
    retweets: 2,
    likes: 84,
    bookmarks: 3,
  },
};

export function Features() {
  return (
    <section id="about" className="relative bg-background py-20">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <h2 className="flex-1 text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
            Grow a following on X <br></br>without all the work
          </h2>
          <p className="flex-1 text-lg text-muted-foreground">
            Hiring social media managers, content-creators, and community advocates is hard.
            Automate your X engagement with The Intern.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <FeatureCard title="Fully autonomous community ambassadors" tweet={devRelTweet} />
          <FeatureCard title="Growth-hacking for personal accounts" tweet={communityTweet} />
          <FeatureCard title="Company accounts that spark joy" tweet={ambassadorTweet} />
        </div>
      </div>
    </section>
  );
}
