"use client";

import { useEffect } from "react";

interface TwitterEmbedProps {
  tweetId: string;
}

export function TwitterEmbed({ tweetId }: TwitterEmbedProps) {
  useEffect(() => {
    // Load Twitter embed script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-4">
      <blockquote className="twitter-tweet" data-dnt="true">
        <a href={`https://twitter.com/x/status/${tweetId}`}></a>
      </blockquote>
    </div>
  );
}
