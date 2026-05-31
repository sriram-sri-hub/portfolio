import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const items = ["home", "about", "skills", "projects", "contact"];

  const handleItemClick = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-white">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
            <p className="text-base font-semibold text-white">Sriram C</p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </span>
        </button>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-300">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleItemClick(item)}
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
      {menuOpen && (
        <div className="md:hidden animate-slide-down rounded-b-3xl border-t border-slate-800/70 bg-slate-950/95 px-6 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            {items.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handleItemClick(item)}
                className={`rounded-2xl px-4 py-3 transition-all duration-300 ${
                  active === item
                    ? "bg-white/10 text-white"
                    : "hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}