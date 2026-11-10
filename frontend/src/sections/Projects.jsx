
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Layers3,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-space bg-white/[.015]"
      aria-labelledby="projects-heading"
    >
      <div className="section-wrap">

        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Things I've <span className="gradient-text">worked on.</span>
            </>
          }
          text="Explore my web development projects built using React, Node.js, Express, MongoDB and modern web technologies."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -7 }}
              className="glass group rounded-3xl p-7"
            >
              {/* Project Image */}
              <div className="mb-8 flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border border-violet-300/10 bg-gradient-to-br from-violet-900/50 via-[#171126] to-cyan-900/30">

                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} - Web development project by Mirza Hammad`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <Layers3
                    size={54}
                    aria-hidden="true"
                    className="text-violet-200/70 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />
                )}

              </div>

              {/* Project Title */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">
                  {p.title}
                </h3>

                <ArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-violet-300"
                />
              </div>

              {/* Project Description */}
              <p className="mt-4 leading-7 text-white/55">
                {p.description}
              </p>

              {/* Technologies */}
              <div
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`Technologies used in ${p.title}`}
              >
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-7 flex flex-wrap gap-3">

                {p.github ? (
                  <a
                    className="outline-btn !px-4 !py-2 text-sm"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} source code on GitHub`}
                  >
                    <Github size={15} />
                    Code
                  </a>
                ) : (
                  <span className="text-xs text-white/35">
                    Repository link to be added
                  </span>
                )}

                {p.live && (
                  <a
                    className="outline-btn !px-4 !py-2 text-sm"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${p.title}`}
                  >
                    <ExternalLink size={15} />
                    Live demo
                  </a>
                )}

              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Profile */}
        <div className="mt-9 text-center">
          <a
            className="primary-btn"
            href="https://github.com/Mirza-Hammad-Ali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore more projects by Mirza Hammad on GitHub"
          >
            More on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
