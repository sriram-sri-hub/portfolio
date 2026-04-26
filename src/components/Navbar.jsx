import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const items = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-white">
          
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
            <p className="text-base font-semibold text-white"></p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-300">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={`relative px-4 py-2 transition-colors duration-300 ${
                active === item
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="relative">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-blue-500 transition-all duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
            </a>
          ))}
        </div>

     
      </div>
    </nav>
  );
}