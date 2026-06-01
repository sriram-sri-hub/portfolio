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
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-gray-900">
          <div>
            <p className="text-xs uppercase tracking-[0.55em] text-slate-400">Portfolio</p>
            <p className="text-lg font-semibold font-serif text-slate-900 tracking-tight">Sriram C</p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-800 transition-all duration-300 hover:border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 md:hidden"
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

        <div className="hidden md:flex items-center gap-3 text-sm font-semibold text-slate-600">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleItemClick(item)}
              className={`relative rounded-full px-4 py-2 transition duration-300 ${
                active === item
                  ? "bg-sky-50 text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden animate-slide-down rounded-b-3xl border-t border-gray-200 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {items.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handleItemClick(item)}
                className={`rounded-2xl px-4 py-3 transition-all duration-300 ${
                  active === item
                    ? "bg-sky-50 text-slate-900"
                    : "hover:bg-slate-100 hover:text-slate-900"
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