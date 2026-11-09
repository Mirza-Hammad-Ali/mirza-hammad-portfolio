import { BriefcaseBusiness, MapPin, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";
export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Professional journey"
          title={
            <>
              Experience & <span className="gradient-text">internship.</span>
            </>
          }
        />
        <div className="relative ml-2 border-l border-violet-400/30 pl-8">
          {experience.map((item, i) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass relative rounded-3xl p-7"
            >
              <span className="absolute -left-[2.62rem] top-8 h-3 w-3 rounded-full border-2 border-violet-300 bg-[#090711] shadow-[0_0_18px_#9b5cff]" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-200">
                  {item.type}
                </span>
                <span className="flex items-center gap-2 text-sm text-white/45">
                  <Clock3 size={15} />
                  {item.duration}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {item.role}
              </h3>
              <p className="mt-2 text-lg text-violet-200">{item.company}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/45">
                <MapPin size={14} />
                {item.location}
              </p>
              <p className="mt-5 leading-7 text-white/55">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
