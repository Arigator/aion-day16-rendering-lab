export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";
import Link from "next/link";
import instructors from "@/data/instructors.json";
import RenderingSignalCard from "@/app/components/RenderingSignalCard";

interface PageProps {
  params: Promise<{ username: string }>;
}

export default async function InstructorDetailPage({ params }: PageProps) {
  const { username } = await params;
  const instructor = instructors.find((i) => i.username === username.toLowerCase());

  if (!instructor) {
    notFound();
  }

  const serverTime = new Date().toISOString();
  const initials = instructor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="space-y-8 py-4">
      {/* Navigation */}
      <div className="border-b border-lilac pb-4">
        <Link
          href="/"
          className="text-sm font-semibold text-purple hover:underline inline-flex items-center gap-1"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* SSR Signal Card */}
      <RenderingSignalCard
        strategy="SSR"
        timestamp={serverTime}
        whoMadeIt="Halaman ini dibuat BARUSAN oleh server,"
        whenMadeIt="tepat saat kamu request. Setiap request bikin ulang."
        timestampLabel="Server time"
        experimentAction="Refresh halaman ini 3 kali berturut-turut."
        expectedResult="Timestamp BERUBAH tiap refresh."
      />

      {/* Instructor Profile Details */}
      <div className="max-w-2xl mx-auto bg-white border border-lilac rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar Placeholder */}
        <div className="w-24 h-24 rounded-full bg-lilac text-purple flex items-center justify-center text-3xl font-extrabold shadow-inner shrink-0">
          {initials}
        </div>

        {/* Profile Info */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold text-navy">{instructor.name}</h1>
            <p className="text-sm text-purple font-medium">@{instructor.username}</p>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-sm">
            {instructor.bio}
          </p>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-navy uppercase tracking-wider">Expertise</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {instructor.expertise.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-lilac text-purple border border-purple/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
