import Link from "next/link";
import posts from "@/data/posts.json";

export default function BlogIndexPage() {
  const renderedAt = new Date().toISOString();

  return (
    <div className="space-y-8 py-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-lilac pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-navy">BelajarCepat Blog</h1>
          <p className="text-sm text-gray-500 mt-1">
            Explore insights about web technologies, performance, and education.
          </p>
        </div>
        <div>
          {/* SSG Signal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-lilac/30 border-l-4 border-blue-600 text-navy shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Rendered at: <code className="text-purple font-mono">{renderedAt}</code> (SSG Build Time)</span>
          </div>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-xl border border-lilac bg-white shadow-sm hover:shadow-md transition-shadow space-y-3"
          >
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Published: {post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-navy hover:text-purple transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
            <div className="pt-2">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-purple hover:underline inline-flex items-center gap-1"
              >
                Read more &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
