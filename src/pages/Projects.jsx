export default function Projects() {
  const projects = [
  {
    title: "Smart Tools Web App",
    description:
      "Developed a responsive multi-tool web application that includes a calculator, temperature converter, and stopwatch. Built using React and JavaScript with a focus on clean UI, reusable components, and smooth user interactions. Implemented real-time calculations, state management, and responsive design using Tailwind CSS to ensure compatibility across devices.",
    technologies: ["Html","Css","React", "JavaScript", "Tailwind CSS"],
    github: "#"
  },
  {
    title: "RetinaFL",
    description:
      "Designed a privacy-focused federated learning system for diabetic retinopathy detection. Built using Python and TensorFlow Federated to enable decentralized model training without sharing sensitive medical data. Focused on machine learning model integration, data handling, and improving prediction accuracy while maintaining data privacy.",
    technologies: ["Python", "TensorFlow Federated", "Machine Learning"],
    github: "#"
  }
];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            My Projects
          </h2>

          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            A few projects I’ve built to practice and apply my skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-slate-900 text-slate-200 border border-white/10 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

             

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}