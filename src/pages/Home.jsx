import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),_transparent_26%),linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.98))]" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-28 h-60 w-60 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
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

              <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  I am a Computer Science student passionate about building clean,
              scalable, and user-friendly web applications. I also create engaging
              visual content using DaVinci Resolve and CapCut.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

              <a
                href="/sriram-cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">

              <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                <img
                  src={profile}
                  alt="Sriram C"
                  className="aspect-square w-full object-cover hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}