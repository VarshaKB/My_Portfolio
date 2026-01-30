"use client";
import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [];

  return (
    <div className="flex flex-wrap justify-center gap-12 mt-16">
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          className="text-left"
        >
          <p className="font-mono text-[9px] text-gray-500 tracking-widest uppercase mb-2">{stat.label}</p>
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-light italic ${stat.color}`}>{stat.value}</span>
            <span className="text-[10px] text-gray-600 font-mono">{stat.sub} [cite: 13, 27, 54]</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}