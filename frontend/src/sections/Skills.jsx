import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";
export default function Skills() {
  const groups = ["Frontend", "Backend", "Tools"];
  return (
    <section id="skills" className="section-space bg-white/[.015]">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="What I work with"
          title={
            <>
              My technical <span className="gradient-text">toolkit.</span>
            </>
          }
          text="Technologies and tools I use while building full-stack web experiences."
        />
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="mb-4 font-display text-lg font-semibold">
                {group}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {skills
                  .filter((s) => s.group === group)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{
                        y: -5,
                        borderColor: "rgba(178,130,255,.55)",
                      }}
                      className="glass rounded-2xl p-5"
                    >
                      <span className="mb-4 block h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                      <p className="font-semibold">{skill.name}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
