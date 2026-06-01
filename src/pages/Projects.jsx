import { FaFolderOpen } from "react-icons/fa";

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
    <section id="projects" className="py-24 bg-white text-gray-800 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
            <FaFolderOpen />
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            My Projects
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A few projects I’ve built to practice and apply my skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer"
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