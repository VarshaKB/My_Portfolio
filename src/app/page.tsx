"use client";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 01. HERO SECTION - The "Entry Node" */}
      <div className="flex flex-col items-center justify-center min-h-[90vh]">
        <Hero />
        
        {/* Animated Stats Bar Transition */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12"
        >
          <StatsBar />
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-10" />
      
      {/* Subtle Bottom Instruction */}
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <p className="font-mono text-[8px] tracking-[0.6em] uppercase text-amber-500/50">
          Select_Node_From_Navigation_To_Explore
        </p>
      </motion.div>
    </main>
  );
}