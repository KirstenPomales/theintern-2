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
  name: "Kaleido Intern",
  username: "@kaleidoguy",
  body: "New refferal program just dropped! Invite your fren to Kaleido and earn $KLY 🚀",
  img: "/images/marquee/kaleidoguy.png",
  cardImage: "/images/marquee/kaleido.png",
  stats: {
    comments: 12,
    retweets: 8,
    likes: 89,
    bookmarks: 3,
  },
};

const ambassadorTweet = {
  name: "Pudgies Espanol",
  username: "@penguincita",
  body: "¡Vamos a DevCon! ¡¡Buenos Aires acaba de ser anunciada como la ubicación!!",
  img: "/images/marquee/penguincita.png",
  cardImage: "/images/marquee/buenosaires.png",
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
            The perfect Intern, <br></br>designed for you
          </h2>
          <p className="flex-1 text-lg text-muted-foreground">
            Hiring social media managers, content-creator devrels, and managing community advocates
            is time consuming. Automate your X engagement with The Intern.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <FeatureCard title="Developer relations and tech help Interns" tweet={devRelTweet} />
          <FeatureCard title="Community management and onboarding Interns" tweet={communityTweet} />
          <FeatureCard title="Ambassadors and second language Interns" tweet={ambassadorTweet} />
        </div>
      </div>
    </section>
  );
}
