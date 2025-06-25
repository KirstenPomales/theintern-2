import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.filename.replace(".md", "")}`}>
      <div className="blog-post">
        <h2>{post.title}</h2>
        <div className="date">{new Date(post.date).toLocaleDateString()}</div>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
};
