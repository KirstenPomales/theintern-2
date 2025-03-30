import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TweetData {
  name: string;
  username: string;
  body: string;
  img: string;
  cardImage?: string;
  stats: {
    comments: number;
    retweets: number;
    likes: number;
    bookmarks: number;
  };
}

interface FeatureCardProps {
  title: string;
  tweet: TweetData;
  className?: string;
}

export function FeatureCard({ title, tweet, className }: FeatureCardProps) {
  return (
    <Card className={cn("rounded-2xl border p-6 shadow-none", className)}>
      <div className="relative mb-6 w-full">
        <figure className="relative w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-background p-4 hover:bg-accent/50">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <img className="rounded-full" width="32" height="32" alt="" src={tweet.img} />
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium">{tweet.name}</figcaption>
                <p className="text-xs font-medium text-muted-foreground">{tweet.username}</p>
              </div>
            </div>
            <blockquote className="text-sm">{tweet.body}</blockquote>
            {tweet.cardImage && (
              <div className="mt-2 h-32 w-full overflow-hidden rounded-lg">
                <img src={tweet.cardImage} alt="" className="size-full object-cover" />
              </div>
            )}
            <div className="mt-2 flex items-center justify-between border-t pt-2">
              <div className="flex items-center gap-1 text-muted-foreground hover:text-blue-500">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-xs">{tweet.stats.comments}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground hover:text-green-500">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-xs">{tweet.stats.retweets}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground hover:text-red-500">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-xs">{tweet.stats.likes}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground hover:text-blue-500">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span className="text-xs">{tweet.stats.bookmarks}</span>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <div className="flex items-end justify-between gap-2">
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        <Button size="icon" variant="default" className="size-10 shrink-0 rounded-full">
          <ChevronRight className="" />
        </Button>
      </div>
    </Card>
  );
}
