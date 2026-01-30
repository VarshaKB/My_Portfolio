"use client";
import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}