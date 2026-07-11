import Link from "next/link";
import instructors from "@/data/instructors.json";
import RenderingSignalCard from "@/app/components/RenderingSignalCard";

export default function HomePage() {
  const renderedAt = new Date().toISOString();

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 rounded-3xl bg-lilac/30 border border-lilac/50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight max-w-3xl mx-auto">
          BelajarCepat &mdash; accelerate your learning
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Observe and master modern web rendering strategies in action with our hands-on interactive lab environment.
        </p>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple text-white font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Explore the Blog
          </Link>
        </div>
      </section>

      {/* SSG Signal Card */}
      <RenderingSignalCard
        strategy="SSG"
        timestamp={renderedAt}
        whoMadeIt="This page was built by the dev team,"
        whenMadeIt="at build time — before you ever opened it."
        timestampLabel="Built"
        experimentAction="Refresh this page a few times."
        expectedResult="The timestamp does NOT change at all."
      />

      {/* Feature Cards Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy">Why Learn With Us?</h2>
          <p className="text-sm text-gray-500">Premium resources designed for rapid skill acquisition.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-xl border border-lilac bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-lilac/50 text-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy">Live tutors</h3>
            <p className="text-sm text-gray-600">
              Get real-time feedback and interact directly with industry professionals during office hours.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl border border-lilac bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-lilac/50 text-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy">Self-paced modules</h3>
            <p className="text-sm text-gray-600">
              Study on your own schedule with highly interactive, byte-sized modular challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl border border-lilac bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-lilac/50 text-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy">Verified certificates</h3>
            <p className="text-sm text-gray-600">
              Prove your capabilities to employers with dynamically generated, tamper-proof credentials.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Instructors Strip */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy">Featured Instructors</h2>
          <p className="text-sm text-gray-500">Learn from leading engineers and designers.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {instructors.map((instructor) => {
            const initials = instructor.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();
            return (
              <Link
                key={instructor.username}
                href={`/instructor/${instructor.username}`}
                className="group flex flex-col items-center space-y-2 hover:opacity-90 transition-opacity"
              >
                <div className="w-16 h-16 rounded-full bg-lilac text-purple flex items-center justify-center text-lg font-bold border-2 border-transparent group-hover:border-purple transition-colors">
                  {initials}
                </div>
                <div className="text-center">
                  <p className="font-bold text-navy text-sm">{instructor.name}</p>
                  <p className="text-xs text-purple group-hover:underline">View Profile &rarr;</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
