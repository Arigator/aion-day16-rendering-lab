'use client';

import { useState } from "react";

export default function ViewRawHtmlButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch(window.location.pathname);
      const text = await res.text();
      setHtml(text);
      setIsOpen(true);
    } catch {
      setHtml("Error fetching HTML");
      setIsOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-strategy-csr-bg text-strategy-csr-text border border-strategy-csr-border hover:shadow-md transition-all cursor-pointer disabled:opacity-50"
      >
        {loading ? "Loading..." : "🔍 View the raw HTML from the server"}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
              <h3 className="text-sm font-bold text-navy">Raw HTML from the Server</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Callout */}
            <div className="mx-5 mt-4 p-3 rounded-lg bg-strategy-csr-bg border border-dashed border-strategy-csr-border text-xs text-strategy-csr-text leading-relaxed">
              <strong>Notice:</strong> the text &quot;Introduction to Next.js App Router&quot;, &quot;42%&quot;, and the learner&apos;s name are <strong>NOT HERE</strong>.
              That&apos;s proof of CSR — the server only sent a shell; your browser built the content.
            </div>

            {/* HTML Content */}
            <div className="flex-1 overflow-auto px-5 py-4" style={{ maxHeight: "60vh" }}>
              <pre className="text-[11px] font-mono text-gray-700 whitespace-pre-wrap break-all leading-relaxed">
                {html}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
