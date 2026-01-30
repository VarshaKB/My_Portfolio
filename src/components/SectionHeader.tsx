"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subTitle: string;
}

export default function SectionHeader({ title, subTitle }: Props) {
  return (
    <div className="relative mb-24 mt-10">
      {/* Front Layer: Bold White Title */}
      <motion.h1 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-7xl md:text-9xl font-black text-white leading-none relative z-10 uppercase tracking-tighter"
      >
        {title}
      </motion.h1>

      {/* Back Layer: Large Amber Outline Header */}
      <motion.h1 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-7xl md:text-9xl font-black absolute top-12 left-4 leading-none z-0 uppercase tracking-tighter pointer-events-none whitespace-nowrap"
        style={{ 
          WebkitTextStroke: "2px #fbbf24", 
          color: "transparent",
        }}
      >
        {subTitle}
      </motion.h1>
    </div>
  );
}