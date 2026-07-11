import Link from "next/link";
import RenderingSignalCard from "@/app/components/RenderingSignalCard";

export default function HowPage() {
  const exampleTimestamp = "2026-07-11T04:39:00.000Z";

  return (
    <div className="space-y-12 py-4">
      {/* Page Title */}
      <div className="border-b border-lilac pb-6">
        <h1 className="text-3xl font-extrabold text-navy">How rendering works in this lab</h1>
        <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
          This page compares the 4 rendering strategies used in this application.
          Each strategy determines <strong>when</strong> and <strong>where</strong> the page&apos;s HTML gets built.
        </p>
      </div>

      {/* Grid of 4 Signal Cards */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-navy">Example signal cards for each strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RenderingSignalCard
            strategy="SSG"
            timestamp={exampleTimestamp}
            whoMadeIt="This page was built by the dev team,"
            whenMadeIt="at build time — before you ever opened it."
            timestampLabel="Built"
            experimentAction="Refresh this page a few times."
            expectedResult="The timestamp does NOT change at all."
          />
          <RenderingSignalCard
            strategy="SSR"
            timestamp={exampleTimestamp}
            whoMadeIt="This page was built JUST NOW by the server,"
            whenMadeIt="the moment you requested it. Every request rebuilds it."
            timestampLabel="Server time"
            experimentAction="Refresh this page 3 times in a row."
            expectedResult="The timestamp CHANGES on every refresh."
          />
          <RenderingSignalCard
            strategy="CSR"
            timestamp={exampleTimestamp}
            whoMadeIt="This dashboard content was built by YOUR BROWSER,"
            whenMadeIt="after the page loaded. The server only sent an empty shell."
            timestampLabel="Client time"
            experimentAction="Click the 'View raw HTML' button below."
            expectedResult="Your name and progress are NOT in the HTML."
          />
          <RenderingSignalCard
            strategy="ISR"
            timestamp={exampleTimestamp}
            whoMadeIt="This page was built at build time, but can be regenerated,"
            whenMadeIt="periodically in the background without a full rebuild."
            timestampLabel="Revalidated"
            experimentAction="Add export const revalidate = 10 to an SSG page."
            expectedResult="The timestamp changes after the revalidation interval."
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-navy">Strategy comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-lilac">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-lilac/30 text-navy text-left">
                <th className="px-4 py-3 font-bold">Strategy</th>
                <th className="px-4 py-3 font-bold">When is the HTML built?</th>
                <th className="px-4 py-3 font-bold">Needs JS in the browser?</th>
                <th className="px-4 py-3 font-bold">Best for</th>
                <th className="px-4 py-3 font-bold">Example in this lab</th>
                <th className="px-4 py-3 font-bold">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lilac/50">
              <tr className="bg-strategy-ssg-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-ssg-text">SSG</td>
                <td className="px-4 py-3">During <code className="font-mono bg-white/50 px-1 rounded">npm run build</code></td>
                <td className="px-4 py-3">No (the HTML is already done)</td>
                <td className="px-4 py-3">Blog, marketing page, docs</td>
                <td className="px-4 py-3"><code className="font-mono">/blog</code></td>
                <td className="px-4 py-3"><Link href="/blog" className="text-purple font-semibold hover:underline">Try it →</Link></td>
              </tr>
              <tr className="bg-strategy-ssr-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-ssr-text">SSR</td>
                <td className="px-4 py-3">On every request to the server</td>
                <td className="px-4 py-3">No (but hydration still runs)</td>
                <td className="px-4 py-3">Real-time dashboards, personalization</td>
                <td className="px-4 py-3"><code className="font-mono">/instructor/sinta</code></td>
                <td className="px-4 py-3"><Link href="/instructor/sinta" className="text-purple font-semibold hover:underline">Try it →</Link></td>
              </tr>
              <tr className="bg-strategy-csr-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-csr-text">CSR</td>
                <td className="px-4 py-3">In the browser, after JS loads</td>
                <td className="px-4 py-3"><strong>Yes</strong> — without JS, the page is empty</td>
                <td className="px-4 py-3">Interactive dashboards, app-like UI</td>
                <td className="px-4 py-3"><code className="font-mono">/dashboard</code></td>
                <td className="px-4 py-3"><Link href="/dashboard" className="text-purple font-semibold hover:underline">Try it →</Link></td>
              </tr>
              <tr className="bg-strategy-isr-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-isr-text">ISR</td>
                <td className="px-4 py-3">At build, then regenerated periodically</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">E-commerce, catalogs, semi-static content</td>
                <td className="px-4 py-3"><em className="text-gray-400">Not here yet — exercise!</em></td>
                <td className="px-4 py-3"><span className="text-gray-400 text-xs italic">Toggling exercise</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Timeline Diagram */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-navy">Timeline: when does the content get built?</h2>
        <div className="rounded-xl border border-lilac bg-white p-6 overflow-x-auto">
          <div className="flex items-start justify-between min-w-[600px] relative">
            {/* Horizontal line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300"></div>

            {/* Build marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-strategy-ssg-bg border-2 border-strategy-ssg-border flex items-center justify-center text-lg font-bold text-strategy-ssg-text">1</div>
              <p className="mt-2 text-xs font-bold text-navy">Build</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]"><code className="font-mono">npm run build</code></p>
              <div className="mt-2 space-y-0.5">
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-ssg-bg text-strategy-ssg-text">SSG ✓</span>
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-isr-bg text-strategy-isr-text">ISR ✓ (initial)</span>
              </div>
            </div>

            {/* Deploy marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center text-lg font-bold text-gray-500">2</div>
              <p className="mt-2 text-xs font-bold text-navy">Deploy</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]">Static HTML is uploaded to the CDN/server</p>
              <div className="mt-2">
                <span className="block text-[10px] text-gray-400 italic">No new rendering</span>
              </div>
            </div>

            {/* User Request marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-strategy-ssr-bg border-2 border-strategy-ssr-border flex items-center justify-center text-lg font-bold text-strategy-ssr-text">3</div>
              <p className="mt-2 text-xs font-bold text-navy">User Request</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]">A browser request reaches the server</p>
              <div className="mt-2 space-y-0.5">
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-ssr-bg text-strategy-ssr-text">SSR ✓</span>
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-isr-bg text-strategy-isr-text">ISR ✓ (regen)</span>
              </div>
            </div>

            {/* Browser Load marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-strategy-csr-bg border-2 border-strategy-csr-border flex items-center justify-center text-lg font-bold text-strategy-csr-text">4</div>
              <p className="mt-2 text-xs font-bold text-navy">Browser Load</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]">JavaScript executes in the user&apos;s browser</p>
              <div className="mt-2">
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-csr-bg text-strategy-csr-text">CSR ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-lilac pt-6 text-sm text-gray-600 leading-relaxed space-y-2">
        <p>
          Now go visit these pages yourself to feel the differences:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/blog" className="text-purple font-semibold hover:underline">/blog</Link> — SSG, the content is already in the HTML</li>
          <li><Link href="/instructor/sinta" className="text-purple font-semibold hover:underline">/instructor/sinta</Link> — SSR, the timestamp changes on every refresh</li>
          <li><Link href="/dashboard" className="text-purple font-semibold hover:underline">/dashboard</Link> — CSR, the content appears after JavaScript runs</li>
        </ul>
      </section>
    </div>
  );
}
