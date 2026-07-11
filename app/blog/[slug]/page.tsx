import { notFound } from "next/navigation";
import Link from "next/link";
import posts from "@/data/posts.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const renderedAt = new Date().toISOString();

  return (
    <div className="space-y-6 py-4">
      {/* Navigation & Signal Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-lilac pb-6">
        <Link
          href="/blog"
          className="text-sm font-semibold text-purple hover:underline inline-flex items-center gap-1"
        >
          &larr; Back to blog
        </Link>
        <div>
          {/* SSG Signal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-lilac/30 border-l-4 border-blue-600 text-navy shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Rendered at: <code className="text-purple font-mono">{renderedAt}</code> (SSG Build Time)</span>
          </div>
        </div>
      </div>

      {/* Main Post Content */}
      <article className="space-y-6 max-w-3xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            {post.title}
          </h1>
          <div className="text-sm text-gray-500">
            Published on: <time>{post.date}</time>
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base">
          {post.body.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
