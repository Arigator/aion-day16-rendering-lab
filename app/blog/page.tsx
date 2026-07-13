export const revalidate = 30;
import Link from "next/link";
import posts from "@/data/posts.json";
import RenderingSignalCard from "@/app/components/RenderingSignalCard";

export default function BlogIndexPage() {
  const renderedAt = new Date().toISOString();

  return (
    <div className="space-y-8 py-4">
      {/* Page Header */}
      <div className="border-b border-lilac pb-6">
        <h1 className="text-3xl font-extrabold text-navy">BelajarCepat Blog</h1>
        <p className="text-sm text-gray-500 mt-1">
          Explore insights about web technologies, performance, and education.
        </p>
      </div>

      {/* SSG Signal Card */}
      <RenderingSignalCard
        strategy="SSG"
        timestamp={renderedAt}
        whoMadeIt="This post list was built by the dev team,"
        whenMadeIt="at build time — every post was listed right then."
        timestampLabel="Built"
        experimentAction="Refresh this page 3 times, then compare with the SSR page."
        expectedResult="This timestamp stays FROZEN. The SSR page changes every time."
      />

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
