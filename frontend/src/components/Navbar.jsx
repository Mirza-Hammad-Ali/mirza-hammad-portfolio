import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[.07] bg-[#090711]/75 backdrop-blur-xl">
      <nav className="section-wrap flex h-[76px] items-center justify-between">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
        >
          MIRZA<span className="text-violet-400">.</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((x) => (
            <button
              key={x}
              onClick={() => go(x)}
              className="text-sm text-white/60 transition hover:text-violet-300"
            >
              {x}
            </button>
          ))}
        </div>
        <a
          className="hidden items-center gap-2 rounded-full border border-violet-400/40 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-500/15 sm:inline-flex"
          href="/Mirza-Hammad-CV.pdf"
          download
        >
          <Download size={15} /> Download CV
        </a>
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#100c1c] px-6 py-4 lg:hidden">
          {links.map((x) => (
            <button
              key={x}
              onClick={() => go(x)}
              className="block w-full py-3 text-left text-white/75"
            >
              {x}
            </button>
          ))}
          <a
            href="/Mirza-Hammad-CV.pdf"
            download
            className="mt-2 inline-flex items-center gap-2 text-violet-300"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
