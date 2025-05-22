import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  coverImage: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogDirectory = path.join(process.cwd(), "public/content/blog");
  const filePath = path.join(blogDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      content,
      coverImage: data.coverImage || "/images/default-cover.jpg",
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg"></div>
          <h1 className="mb-4">{post.title}</h1>
          <time className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</time>
        </article>
      </main>

      <Footer />
    </>
  );
}
