"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "pudgy intern",
    username: "@pudgyintern_",
    body: "Living the dream in Vegas with @pudgypenguins, what a night!",
    img: "https://pbs.twimg.com/profile_images/1897576751296901120/iiHEkNVW_400x400.jpg",
    cardImage: "https://pbs.twimg.com/media/GmgDklUaEAEuWef?format=jpg&name=medium",
    stats: {
      comments: 24,
      retweets: 5,
      likes: 142,
      bookmarks: 8,
    },
  },
  {
    name: "ELYRAI",
    username: "@ElyraiAgent",
    body: "Top 3 KOLs by trading stats in the last 24H: 🥇 @CookerFlips...",
    img: "https://pbs.twimg.com/profile_images/1864172683585327105/jKUo5DED_400x400.jpg",
    cardImage: "https://pbs.twimg.com/media/GlihrHFWcAAyaWt?format=jpg&name=medium",
    stats: {
      comments: 12,
      retweets: 8,
      likes: 89,
      bookmarks: 3,
    },
  },
  {
    name: "Sophia Cameron",
    username: "@sophiacameron02",
    body: "love the 90-day client challenge. have you tried revyou.me?",
    img: "https://pbs.twimg.com/profile_images/1901635549795901440/hJ6QMqeq_400x400.jpg",
    cardImage: "/images/sophia-1.png",
    stats: {
      comments: 45,
      retweets: 23,
      likes: 234,
      bookmarks: 15,
    },
  },
  {
    name: "Pudgies Espanol",
    username: "@penguincita",
    body: "¡El encuentro de pudgies en Buenos Aires fue todo un éxito...",
    img: "/images/marquee/penguincita.png",
    cardImage: "/images/marquee/pudgy-meetup.png",
    stats: {
      comments: 12,
      retweets: 8,
      likes: 89,
      bookmarks: 3,
    },
  },
  {
    name: "Kylie 💎 Rarity Devrel",
    username: "@kylesformiles",
    body: "coffee + Rarity docs date. have tech questions? drop them here!",
    img: "/images/marquee/ai-gen-pfp.png",
    cardImage: "/images/marquee/ai-gen.png",
    stats: {
      comments: 67,
      retweets: 34,
      likes: 567,
      bookmarks: 42,
    },
  },
  // {
  //   name: "ELYRAI",
  //   username: "@ElyraiAgent",
  //   body: "Bullish on Solana's future! Fidelity's move shows...",
  //   img: "https://pbs.twimg.com/profile_images/1864172683585327105/jKUo5DED_400x400.jpg",
  //   cardImage: "/images/marquee/elyrai-1.png",
  //   stats: {
  //     comments: 12,
  //     retweets: 8,
  //     likes: 89,
  //     bookmarks: 3,
  //   },
  // },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
  cardImage,
  stats,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  cardImage?: string;
  stats: {
    comments: number;
    retweets: number;
    likes: number;
    bookmarks: number;
  };
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm">{body}</blockquote>
        {cardImage && (
          <div className="mt-2 h-32 w-full overflow-hidden rounded-lg">
            <img src={cardImage} alt="" className="size-full object-cover" />
          </div>
        )}
        <div className="mt-2 flex items-center justify-between border-t pt-2">
          <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">{stats.comments}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 hover:text-green-500">
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-xs">{stats.retweets}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 hover:text-red-500">
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs">{stats.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <span className="text-xs">{stats.bookmarks}</span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
