import React from "react";

export interface RenderingSignalCardProps {
  strategy: 'SSG' | 'SSR' | 'CSR' | 'ISR';
  timestamp: string;
  whoMadeIt: string;
  whenMadeIt: string;
  timestampLabel: string;
  experimentAction: string;
  expectedResult: string;
}

export default function RenderingSignalCard({
  strategy,
  timestamp,
  whoMadeIt,
  whenMadeIt,
  timestampLabel,
  experimentAction,
  expectedResult,
}: RenderingSignalCardProps) {
  // Strategy details map
  const details = {
    SSG: {
      fullName: "Static Site Generation",
      bgColor: "bg-strategy-ssg-bg",
      borderColor: "border-strategy-ssg-border",
      textColor: "text-strategy-ssg-text",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0">
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="m20 16-4-4 4-4"></path>
          <path d="m4 8 4 4-4 4"></path>
          <path d="m16 4-4 4-4-4"></path>
          <path d="m8 20 4-4 4 4"></path>
        </svg>
      ),
    },
    SSR: {
      fullName: "Server-Side Rendered",
      bgColor: "bg-strategy-ssr-bg",
      borderColor: "border-strategy-ssr-border",
      textColor: "text-strategy-ssr-text",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    CSR: {
      fullName: "Client-Side Rendered",
      bgColor: "bg-strategy-csr-bg",
      borderColor: "border-strategy-csr-border",
      textColor: "text-strategy-csr-text",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0">
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    ISR: {
      fullName: "Incremental Static Regeneration",
      bgColor: "bg-strategy-isr-bg",
      borderColor: "border-strategy-isr-border",
      textColor: "text-strategy-isr-text",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
          <path d="M16 16h5v5"></path>
        </svg>
      ),
    },
  };

  const current = details[strategy];

  return (
    <div className={`w-full min-h-[200px] border-t-4 ${current.borderColor} ${current.bgColor} ${current.textColor} rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4 transition-all hover:shadow-md`}>
      {/* Top strategy row */}
      <div className="flex items-center space-x-3">
        {current.icon}
        <div>
          <div className="text-4xl font-black tracking-tight leading-none">{strategy}</div>
          <div className="text-xs font-semibold uppercase tracking-wider opacity-85 mt-1">{current.fullName}</div>
        </div>
      </div>

      {/* Explanation text */}
      <div className="text-sm font-medium leading-relaxed">
        <p>{whoMadeIt}</p>
        <p className="opacity-90">{whenMadeIt}</p>
      </div>

      {/* Timestamp */}
      <div className="text-xs font-mono font-bold bg-white/40 px-3 py-1.5 rounded self-start">
        {timestampLabel}: {timestamp}
      </div>

      {/* Dashed instruction box */}
      <div className="border border-dashed border-current/30 rounded-lg p-3 space-y-1.5 text-xs bg-white/20">
        <div>
          <span className="font-extrabold uppercase mr-1">Coba:</span>
          <span className="opacity-90">{experimentAction}</span>
        </div>
        <div>
          <span className="font-extrabold uppercase mr-1">Hasil:</span>
          <span className="opacity-90">{expectedResult}</span>
        </div>
      </div>
    </div>
  );
}
