'use client';

import { useState, useEffect } from "react";
import RenderingSignalCard from "@/app/components/RenderingSignalCard";
import ViewRawHtmlButton from "@/app/components/ViewRawHtmlButton";

interface Course {
  id: string;
  title: string;
  progress: number;
}

interface DashboardData {
  learnerName: string;
  courses: Course[];
}

const sampleData: DashboardData = {
  learnerName: "Jane Doe",
  courses: [
    { id: "nextjs-101", title: "Introduction to Next.js App Router", progress: 42 },
    { id: "css-mastery", title: "Mastering CSS Grid and Flexbox", progress: 78 },
    { id: "react-adv", title: "Advanced React State Management", progress: 12 }
  ]
};

export default function LearnerDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clientTime, setClientTime] = useState<string | null>(null);

  const fetchDashboardData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData(sampleData);
      setClientTime(new Date().toISOString());
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8 py-4">
      {/* Page Header */}
      <div className="border-b border-lilac pb-6">
        <h1 className="text-3xl font-extrabold text-navy">Learner Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Track your progress across enrolled classes.
        </p>
      </div>

      {/* CSR Signal Card */}
      <RenderingSignalCard
        strategy="CSR"
        timestamp={clientTime || "Loading..."}
        whoMadeIt="This dashboard's content was built by YOUR browser,"
        whenMadeIt="after the page loaded. The server only sent an empty shell."
        timestampLabel="Client time"
        experimentAction="Click the 'View raw HTML' button below."
        expectedResult="Your name and progress are NOT in the HTML."
      />

      {/* View Raw HTML Button */}
      <ViewRawHtmlButton />

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-8 h-8 border-4 border-purple border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500 animate-pulse">Loading your dashboard...</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-lilac/10 border border-lilac/30 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-purple font-semibold uppercase tracking-wider">Welcome Back</p>
              <h2 className="text-xl font-bold text-navy mt-0.5">{data?.learnerName}</h2>
            </div>
            <button
              onClick={fetchDashboardData}
              className="px-4 py-2 text-xs font-semibold bg-purple text-white rounded-md hover:bg-opacity-90 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89l-4.286 3.5" />
              </svg>
              Refresh
            </button>
          </div>

          <div className="bg-white border border-lilac rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Enrolled Courses</h3>
            <div className="space-y-6">
              {data?.courses.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-navy">{course.title}</span>
                    <span className="font-bold text-purple">{course.progress}%</span>
                  </div>
                  {/* Styled Progress Bar Container */}
                  <div className="w-full bg-lilac rounded-full h-3 overflow-hidden">
                    {/* Inner progress fill */}
                    <div
                      className="bg-purple h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
