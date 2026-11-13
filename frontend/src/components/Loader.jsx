import { useEffect } from "react";
import { motion } from "framer-motion";
export default function Loader({ onFinish }) {
  useEffect(() => {
    const id = setTimeout(onFinish, 1150);
    return () => clearTimeout(id);
  }, [onFinish]);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#090711]"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-display text-3xl font-bold tracking-widest"
        >
          MHA<span className="text-violet-400">.</span>
        </motion.div>
        <p className="mt-3 text-xs tracking-[.35em] text-white/45">
          BUILD · INNOVATE · GROW
        </p>
        <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1 }}
            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  );
}
