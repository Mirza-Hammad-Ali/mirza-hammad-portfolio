import { motion } from "framer-motion";
import { MapPin, Code2, Layers3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="section-space"
      aria-labelledby="about-heading"
    >
      <div className="section-wrap">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Developer mindset.
              <br />
              <span className="gradient-text">Real-world solutions.</span>
            </>
          }
          text="Learn more about Mirza Hammad, a Software Engineering graduate and aspiring MERN Stack Developer."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {/* About Information */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass rounded-3xl p-7 md:col-span-2"
          >
            <Code2
              className="mb-6 text-violet-300"
              size={30}
              aria-hidden="true"
            />

            <h3 className="font-display text-2xl font-semibold">
              Curious by nature, developer by passion.
            </h3>

            <p className="mt-4 leading-8 text-white/55">
              I'm Mirza Hammad, a Software Engineering graduate and aspiring
              MERN Stack Developer from Pakistan. I specialize in building
              modern, responsive and user-friendly web applications using
              React.js, JavaScript, Node.js, Express.js and MongoDB. I enjoy
              developing full-stack web applications, creating reusable UI
              components, integrating REST APIs and implementing authentication
              systems. My goal is to build clean, scalable and practical digital
              solutions while continuously improving my software development
              skills.
            </p>
          </motion.div>

          {/* Location Information */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass flex flex-col justify-between rounded-3xl p-7"
          >
            <MapPin className="text-cyan-300" size={30} aria-hidden="true" />

            <div>
              <p className="text-sm text-white/45">BASED IN</p>

              <p className="mt-2 font-display text-2xl font-semibold">
                Sadiqabad
              </p>

              <p className="text-white/50">Pakistan</p>
            </div>

            <Layers3
              className="self-end text-violet-300"
              size={30}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
