import { motion } from "framer-motion";
export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-2xl"
    >
      <p className="section-kicker mb-4">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-5 leading-7 text-white/55">{text}</p>}
    </motion.div>
  );
}
