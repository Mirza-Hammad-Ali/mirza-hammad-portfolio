import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-white/[.08] py-8">
      <div className="section-wrap flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display font-bold">
            Mirza Hammad Ali<span className="text-violet-400">.</span>
          </p>
          <p className="mt-1 text-xs text-white/40">
            MERN Stack Developer · Sadiqabad, Pakistan
          </p>
        </div>
        <div className="flex gap-4 text-white/55">
          <a
            aria-label="GitHub"
            href="https://github.com/Mirza-Hammad-Ali"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/mirzahammad786/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a aria-label="Email" href="mailto:mirzahammadali786@gmail.com">
            <Mail />
          </a>
          <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp />
          </button>
        </div>
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} Mirza Hammad Ali
        </p>
      </div>
    </footer>
  );
}
