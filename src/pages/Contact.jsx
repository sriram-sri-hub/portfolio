import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-gray-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
            <FaEnvelopeOpenText />
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400">Contact</p>
          <h2 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl"></h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg leading-8">
            I am looking for opportunities to learn and grow as a developer. Feel free to reach out for internships, collaborations, or discussions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Email</p>
              <p className="mt-4 text-xl font-semibold text-gray-800">sriram451803@gmail.com</p>
              <a
                href="mailto:sriram451803@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Send Email
              </a>
            </div>

            <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Phone</p>
              <p className="mt-4 text-xl font-semibold text-gray-800">+91 93847 26360</p>
            </div>

            <div className="rounded-4xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Location</p>
              <p className="mt-4 text-xl font-semibold text-gray-800">Tamil Nadu, India</p>
            </div>
          </div>
          <div className="rounded-4xl border border-gray-200 bg-gray-50 p-10 shadow-sm">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Let’s connect</p>
              <h3 className="mt-4 text-3xl font-semibold text-gray-900">Let's chat</h3>
              <p className="mt-4 text-gray-600 leading-7">
                I am a fresher developer eager to join a team where I can contribute, learn, and grow with real-world projects.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a href="https://www.linkedin.com/in/sriram--c--/" target="_blank" rel="noreferrer" className="rounded-3xl border border-gray-200 bg-gray-800/90 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-gray-700 hover:text-blue-400 hover:scale-105 duration-300 cursor-pointer">
                LinkedIn
              </a>
              <a href="https://github.com/sriram-sri-hub" target="_blank" rel="noreferrer" className="rounded-3xl border border-gray-200 bg-gray-800/90 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-gray-700 hover:text-blue-400 hover:scale-105 duration-300 cursor-pointer">
                GitHub
              </a>
              <a href="https://www.instagram.com/srirxm_sxi_?igsh=MTg0c2NhZ2Q1amZnOA==" target="_blank" rel="noreferrer" className="rounded-3xl border border-gray-200 bg-gray-800/90 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-gray-700 hover:text-blue-400 hover:scale-105 duration-300 cursor-pointer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
