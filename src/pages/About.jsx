export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            About Me
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-8">
            I am a Computer Science student passionate about building modern web applications.
            I enjoy working with React, JavaScript, Python, and C++, and I focus on creating
            clean, user-friendly, and efficient solutions.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Education */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold text-white mb-3">
              Education
            </h3>

            <p className="text-slate-300">
              B.E. Computer Science
            </p>

            <p className="text-slate-400 mt-1">
              Karpagam Academy of Higher Education
            </p>

            <p className="text-blue-400 mt-2">
              CGPA: 8.4
            </p>
          </div>

          {/* Interests */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold text-white mb-4">
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
    className="px-4 py-2 rounded-full bg-white/10 text-sm text-slate-200 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 cursor-pointer"
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