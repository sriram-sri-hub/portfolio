import { FaTools, FaGithub, FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaDatabase, FaPencilAlt, FaVideo } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiDavinciresolve } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "GitHub", Icon: FaGithub },
    { name: "Python", Icon: FaPython },
    { name: "Java", Icon: FaJava },
    { name: "C++", Icon: SiCplusplus },
    { name: "React", Icon: FaReact },
    { name: "JavaScript", Icon: FaJs },
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "SQL", Icon: FaDatabase },
    { name: "Figma", Icon: FaFigma },
    { name: "UI/UX Design", Icon: FaPencilAlt },
    { name: "VS Code", Icon: VscVscode },
    { name: "DaVinci Resolve", Icon: SiDavinciresolve },
    { name: "CapCut", Icon: FaVideo }
  ];

  return (
    <section id="skills" className="py-24 bg-white text-gray-800 animate-fade-in">
      <div className="max-w-full w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
            <FaTools />
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A curated set of skills I use to build polished web experiences.
          </p>
        </div>

        {/* Skills Box */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => {
              const Icon = skill.Icon;
              return (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {Icon ? <Icon className="h-4 w-4 text-blue-600" /> : null}
                  {skill.name}
                </span>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}