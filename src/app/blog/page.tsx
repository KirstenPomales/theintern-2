import { BlogHeader } from "@/components/blog-header";
import { Footer } from "@/components/footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDirectory = path.join(process.cwd(), "public/content/blog");
  const files = fs.readdirSync(blogDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: file.replace(".md", ""),
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "/images/default-cover.jpg",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <BlogHeader />

      <main className="container mx-auto p-8">
        <h1 className="mb-8 text-4xl font-bold">Intern Insights</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/vibe-marketing-workflow`}
              className="block rounded-lg border p-6 transition-shadow hover:shadow-lg"
            >
              <article>
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg"></div>
                <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
                <time className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString()}
                </time>
                {post.excerpt && <p className="mt-4 text-gray-700">{post.excerpt}</p>}
              </article>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
