"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [flickerIndex, setFlickerIndex] = useState(0);

  // High-speed flicker for comic panels
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFlickerIndex((prev) => (prev + 1) % 5);
    }, 80); // 80ms is the "Marvel Speed"
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden font-sans italic">
      
      {/* 1. THE VORTEX: Subtle background movement */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(226,54,54,0.08)_0%,transparent_70%)]" />

      {/* 2. TOP/BOTTOM CINEMATIC BARS */}
      <div className="absolute top-0 w-full h-[12vh] bg-black z-40 border-b border-white/5" />
      <div className="absolute bottom-0 w-full h-[12vh] bg-black z-40 border-t border-white/5" />

      {/* 3. CENTER STAGE */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* SMALL INTRO LINE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 overflow-hidden"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[1.2em] font-black">
            The Portfolio Of
          </span>
        </motion.div>

        {/* 4. THE MARVEL ENGINE */}
        <div className="relative group">
          {/* THE RED CONTAINER */}
          <motion.div 
            className="relative bg-[#e23636] px-8 py-4 md:px-14 md:py-8 border-[4px] border-[#e23636] overflow-hidden shadow-[0_0_50px_rgba(226,54,54,0.3)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* THE COMIC FLIP LAYER (Only visible on hover) */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
              {/* This mimics the flickering comic pages inside the logo */}
              <div 
                className={`absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40 transition-all duration-75`}
                style={{ 
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/p6.png')`,
                  transform: `scale(${1 + flickerIndex * 0.1}) rotate(${flickerIndex * 2}deg)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
            </div>

            {/* THE NAME: Solid White Stencil */}
            <h1 className="relative z-10 text-[11vw] md:text-[9vw] font-[1000] leading-none text-white uppercase tracking-[-0.06em] italic select-none">
              Varshaa Babu
            </h1>

            {/* LIGHT STREAK */}
            <motion.div 
              animate={{ x: ['-200%', '200%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] z-20 pointer-events-none"
            />
          </motion.div>

          {/* THE "STUDIOS" BOX (Professional Tag) */}
          <div className="absolute -bottom-6 right-0 bg-white px-5 py-1 shadow-2xl">
            <span className="text-black text-[11px] font-[1000] tracking-[0.5em] uppercase italic leading-none">
              Professional
            </span>
          </div>

          {/* RADIANCE */}
          <div className="absolute -inset-10 bg-red-600/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>

        {/* 5. CINEMATIC SUBTEXT */}
        <div className="mt-20 text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter"
          >
            Welcome to the <span className="text-white/20">world of</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3 text-sm md:text-lg font-bold uppercase italic"
          >
             <span className="border-2 border-white/10 px-3 py-1 bg-white/5 text-white">Decision Analyst</span>
             <span className="border-2 border-red-600/50 px-3 py-1 bg-red-600/10 text-white">Aspiring HR</span>
          </motion.div>
        </div>
      </div>

      {/* 6. SYSTEM STATUS (Bottom Right) */}
      <div className="absolute bottom-4 right-8 z-50 flex items-center gap-3">
        <span className="text-white/20 font-mono text-[9px] tracking-widest uppercase">Initializing Core...</span>
        <div className="flex gap-1">
          {[1,2,3].map(i => (
            <motion.div 
              key={i}
              animate={{ height: [4, 12, 4] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
              className="w-1 bg-red-600"
            />
          ))}
        </div>
      </div>

    </section>
  );
}