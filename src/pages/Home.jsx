import hero from "../assets/hero.png";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white text-gray-800 animate-fade-in">
      <img
        src={hero}
        alt="technical background"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.05),transparent_26%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-28 h-60 w-60 rounded-full bg-pink-200/15 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-20 h-48 w-48 rounded-full border border-slate-200/60 bg-white/70 blur-2xl" />
      <div className="pointer-events-none absolute right-2 top-28 h-72 w-96 opacity-25">
        <svg viewBox="0 0 640 420" className="h-full w-full text-slate-400">
          <rect x="20" y="80" width="600" height="260" rx="28" fill="currentColor" opacity="0.08" />
          <rect x="60" y="120" width="520" height="180" rx="20" fill="white" opacity="0.06" />
          <rect x="80" y="150" width="120" height="18" rx="9" fill="currentColor" opacity="0.18" />
          <rect x="80" y="185" width="420" height="14" rx="7" fill="currentColor" opacity="0.14" />
          <rect x="80" y="210" width="360" height="14" rx="7" fill="currentColor" opacity="0.14" />
          <rect x="80" y="235" width="300" height="14" rx="7" fill="currentColor" opacity="0.14" />
          <rect x="200" y="320" width="240" height="24" rx="12" fill="currentColor" opacity="0.1" />
          <rect x="120" y="360" width="400" height="16" rx="8" fill="currentColor" opacity="0.06" />
          <path d="M80 80 H560" stroke="currentColor" strokeWidth="6" opacity="0.18" />
          <circle cx="120" cy="95" r="10" fill="currentColor" opacity="0.18" />
          <circle cx="150" cy="95" r="10" fill="currentColor" opacity="0.18" />
          <circle cx="180" cy="95" r="10" fill="currentColor" opacity="0.18" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
              <span className="inline-flex h-3 w-3 rounded-full bg-blue-400 animate-pulse"></span>
              Fresher • Software Developer
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.36em] text-blue-400">
                Welcome
              </p>

              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl hover:text-blue-400 transition-colors duration-500 cursor-pointer">
                Sriram C
              </h1>

              <p className="text-2xl font-semibold text-gray-700 sm:text-3xl">
                I am a Computer Science student passionate about building clean,
                scalable, and user-friendly web applications. I also create engaging
                visual content using DaVinci Resolve and CapCut.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

             <a
  href="/sriram-cv.pdf"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-500/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  View Resume
</a>

              <a
                href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Contact Me
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={hero}
              alt="Technical background"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
            />

            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-4xl border border-gray-200 bg-white p-4 shadow-lg animate-appear">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                <img
                  src={profile}
                  alt="Sriram C"
                  className="aspect-square w-full object-cover transition-all duration-500 hover:scale-105 active:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 