"use client";
import { motion } from "framer-motion";

export default function DataFlow() {
  return (
    <div className="h-40 w-full glass rounded-3xl mt-12 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      <motion.div 
        animate={{ x: [-100, 100] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="font-mono text-[10px] text-cyan-500/50 whitespace-nowrap"
      >
        {"{ \"input\": \"image_data\", \"nodes\": 3000, \"accuracy\": \"95%\", \"output\": \"json_model\" } ".repeat(5)}
      </motion.div>
    </div>
  );
}