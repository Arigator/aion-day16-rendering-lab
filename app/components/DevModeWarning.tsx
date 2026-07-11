export default function DevModeWarning() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="sticky top-0 z-[60] w-full bg-red-600 text-white px-4 py-2.5 text-center text-xs md:text-sm font-semibold leading-relaxed shadow-md">
      ⚠️ DEV MODE — rendering signals are NOT accurate here. In dev, Next.js
      re-renders every page on each request, so SSG pages will look like SSR.
      To observe real rendering behavior, stop this server and run:{" "}
      <code className="font-mono font-bold bg-red-800/60 px-1.5 py-0.5 rounded whitespace-nowrap">
        npm run build
      </code>{" "}
      <span className="font-mono">&amp;&amp;</span>{" "}
      <code className="font-mono font-bold bg-red-800/60 px-1.5 py-0.5 rounded whitespace-nowrap">
        npm run start
      </code>
    </div>
  );
}
