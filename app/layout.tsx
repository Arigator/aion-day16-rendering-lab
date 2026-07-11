import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BelajarCepat - Modern Web Rendering Strategies Lab",
  description: "Hands-on educational sandbox demonstrating SSG, SSR, CSR, and ISR rendering strategies in Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = 2026;

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-white text-navy font-sans antialiased">
        {/* Sticky Header Nav */}
        <header className="sticky top-0 z-50 w-full border-b border-lilac bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img src="/logo.svg" alt="BelajarCepat" className="h-8 w-auto" />
            </Link>
            
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="text-navy hover:text-purple transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-navy hover:text-purple transition-colors">
                Blog
              </Link>
              <Link href="/instructor/sinta" className="text-navy hover:text-purple transition-colors">
                Instructor Sinta
              </Link>
              <Link href="/dashboard" className="text-navy hover:text-purple transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-lilac bg-white py-6">
          <div className="max-w-5xl mx-auto px-4 text-center text-xs text-gray-500">
            BelajarCepat &middot; Rendering lab &middot; Day 16 &middot; {currentYear}
          </div>
        </footer>
      </body>
    </html>
  );
}
