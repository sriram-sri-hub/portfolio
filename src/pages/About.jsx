import { FaInfoCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-gray-800 animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
          <div className="relative text-center mb-16 rounded-[2rem] border border-gray-200 bg-slate-50/70 p-10 shadow-sm">
            <div className="pointer-events-none absolute right-6 top-6 h-32 w-32 opacity-25 text-slate-300">
              <svg viewBox="0 0 160 140" className="h-full w-full">
                <rect x="8" y="24" width="144" height="92" rx="16" fill="currentColor" opacity="0.12" />
                <rect x="24" y="38" width="112" height="58" rx="10" fill="white" opacity="0.08" />
                <rect x="30" y="52" width="40" height="8" rx="4" fill="currentColor" opacity="0.16" />
                <rect x="30" y="68" width="90" height="6" rx="3" fill="currentColor" opacity="0.14" />
                <rect x="30" y="80" width="70" height="6" rx="3" fill="currentColor" opacity="0.14" />
                <rect x="30" y="92" width="50" height="6" rx="3" fill="currentColor" opacity="0.14" />
                <path d="M24 120 H136" stroke="currentColor" strokeWidth="6" opacity="0.12" />
                <circle cx="40" cy="30" r="4" fill="currentColor" opacity="0.16" />
                <circle cx="56" cy="30" r="4" fill="currentColor" opacity="0.16" />
                <circle cx="72" cy="30" r="4" fill="currentColor" opacity="0.16" />
              </svg>
            </div>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
              <FaInfoCircle />
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              About Me
            </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            I am a Computer Science student passionate about building modern web applications.
            I enjoy working with React, JavaScript, Python, and C++, and I focus on creating
            clean, user-friendly, and efficient solutions.
          </p>
        </div>

        {/* Content */}
          <div className="grid gap-8 md:grid-cols-2">

          {/* Education */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Education
            </h3>

            <p className="text-gray-600">
              B.E. Computer Science
            </p>

            <p className="text-gray-500 mt-1">
              Karpagam Academy of Higher Education
            </p>

            <p className="text-blue-600 mt-2">
              CGPA: 8.4
            </p>
          </div>

          {/* Interests */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Interests
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
  "Web Development",
  "Software Development",
  "Video Editing",
  "Graphic Design"
].map((item) => (
  <span
    key={item}
    className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer"
  >
    {item}
  </span>
))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}