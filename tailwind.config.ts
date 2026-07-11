import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#231A45",
        purple: "#5624D0",
        lilac: "#EEE9F9",
        'strategy-ssg': { bg: '#ECFDF5', border: '#10B981', text: '#065F46' },
        'strategy-ssr': { bg: '#EFF6FF', border: '#2563EB', text: '#1E3A8A' },
        'strategy-csr': { bg: '#FFFBEB', border: '#F59E0B', text: '#78350F' },
        'strategy-isr': { bg: '#F5F3FF', border: '#8B5CF6', text: '#4C1D95' }
      },
    },
  },
  plugins: [],
};
export default config;
