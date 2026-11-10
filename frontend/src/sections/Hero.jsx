import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import avatar from "../assets/mirza-avatar.png";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden pt-28 sm:min-h-[850px]"
    >
      <div className="grid-glow absolute inset-0 opacity-70" />
      <div className="orb left-[8%] top-36 h-64 w-64 bg-violet-600" />
      <div className="orb right-[8%] top-48 h-72 w-72 bg-blue-600" />
      <div className="section-wrap relative grid items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" /> HELLO, I'M
          </p>
          <h1 className="font-display text-[clamp(3.1rem,7vw,6.1rem)] font-bold leading-[.98] tracking-[-.065em]">
            Mirza
            <br />
            <span className="gradient-text">Hammad Ali</span>
          </h1>
          <div className="mt-7 flex items-center gap-3 text-lg font-semibold sm:text-2xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span className="gradient-text">MERN Stack Developer</span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
            I build modern, responsive web applications with React, Node.js,
            Express and MongoDB — turning ideas into useful digital experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="primary-btn">
              Let's talk <ArrowUpRight size={17} />
            </a>
            <a href="#projects" className="outline-btn">
              Explore projects <ArrowDown size={16} />
            </a>
            <a href="/Mirza-Hammad-CV.pdf" download className="outline-btn">
              <Download size={16} /> Download CV
            </a>
          </div>
          <div className="mt-9 flex gap-4 text-white/55">
            <a
              aria-label="GitHub"
              href="https://github.com/Mirza-Hammad-Ali"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-300"
            >
              <Github />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/mirzahammad786/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-300"
            >
              <Linkedin />
            </a>
            <a
              aria-label="WhatsApp"
              href="https://wa.me/923013231900?text=Hi%20Mirza,%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-300"
            >
              <MessageCircle />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[490px]"
        >
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-violet-600/35 to-cyan-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[#171126] p-2 shadow-[0_25px_100px_rgba(108,61,205,.25)]">
            <img
              src={avatar}
              alt="Mirza Hammad Ali developer avatar"
              className="aspect-[4/4.5] w-full rounded-[1.55rem] object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 rounded-xl border border-white/15 bg-[#100c1c]/85 px-4 py-3 backdrop-blur-xl">
              <p className="text-xs text-white/45">CURRENT ROLE</p>
              <p className="mt-1 font-semibold">MERN Stack Developer</p>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass absolute -right-3 top-10 rounded-2xl px-4 py-3 text-sm text-cyan-200 sm:-right-8"
          >
            React · Node · MongoDB
          </motion.div>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 text-sm text-violet-200 sm:-left-8"
          >
            Build. Innovate. Grow.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
