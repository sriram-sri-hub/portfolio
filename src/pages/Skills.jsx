export default function Skills() {
  const skills = [
    "Python",
    "C",
    "C++",
    "Java",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "SQL",
    "Figma",
    "UI/UX Design",
    "VS Code",
  "GitHub",
  "DaVinci Resolve",
  "CapCut"
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            
          </p>
        </div>

        {/* Skills Box */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-slate-900 text-sm text-slate-200 border border-white/10 hover:bg-blue-500/20 hover:text-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}