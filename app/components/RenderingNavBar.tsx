'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const pills = [
  { label: "○ SSG", href: "/blog", strategy: "ssg" as const },
  { label: "● SSG+params", href: "/blog/why-modern-rendering-matters", strategy: "ssg" as const },
  { label: "ƒ SSR", href: "/instructor/sinta", strategy: "ssr" as const },
  { label: "⚡ CSR", href: "/dashboard", strategy: "csr" as const },
  { label: "📖 How?", href: "/how", strategy: "how" as const },
];

const strategyColors = {
  ssg: {
    active: "bg-strategy-ssg-border text-white",
    inactive: "bg-white text-strategy-ssg-text border border-strategy-ssg-border",
  },
  ssr: {
    active: "bg-strategy-ssr-border text-white",
    inactive: "bg-white text-strategy-ssr-text border border-strategy-ssr-border",
  },
  csr: {
    active: "bg-strategy-csr-border text-white",
    inactive: "bg-white text-strategy-csr-text border border-strategy-csr-border",
  },
  how: {
    active: "bg-purple text-white",
    inactive: "bg-white text-purple border border-purple",
  },
};

export default function RenderingNavBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/blog") return pathname === "/blog";
    if (href === "/how") return pathname === "/how";
    return pathname.startsWith(href);
  };

  return (
    <div className="w-full border-b border-lilac bg-white/95 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-2">
        <p className="text-[10px] text-gray-400 font-medium text-center mb-1.5">
          Try clicking between these to feel the differences ↓
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {pills.map((pill) => {
            const active = isActive(pill.href);
            const colors = strategyColors[pill.strategy];
            return (
              <Link
                key={pill.href}
                href={pill.href}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  active ? colors.active : colors.inactive
                } hover:shadow-sm`}
              >
                {pill.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
