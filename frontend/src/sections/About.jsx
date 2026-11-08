import { motion } from 'framer-motion'
import { MapPin, Code2, Layers3 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
export default function About() {
  return <section id="about" className="section-space"><div className="section-wrap"><SectionHeading eyebrow="A little about me" title={<>Developer mindset.<br/><span className="gradient-text">Real-world solutions.</span></>} />
    <div className="grid gap-5 md:grid-cols-3"><motion.div whileHover={{y:-5}} className="glass rounded-3xl p-7 md:col-span-2"><Code2 className="mb-6 text-violet-300" size={30}/><h3 className="font-display text-2xl font-semibold">Curious by nature, developer by passion.</h3><p className="mt-4 leading-8 text-white/55">I'm Mirza Hammad Ali, a Software Engineering graduate and aspiring MERN Stack Developer from Sadiqabad, Pakistan. I enjoy building modern, responsive and user-friendly web applications. My work focuses on JavaScript, React, Node.js, Express.js and MongoDB, with an interest in API integration, authentication and clean component-based development.</p></motion.div>
    <motion.div whileHover={{y:-5}} className="glass flex flex-col justify-between rounded-3xl p-7"><MapPin className="text-cyan-300" size={30}/><div><p className="text-sm text-white/45">BASED IN</p><p className="mt-2 font-display text-2xl font-semibold">Sadiqabad</p><p className="text-white/50">Pakistan</p></div><Layers3 className="self-end text-violet-300" size={30}/></motion.div></div>
  </div></section>
}
