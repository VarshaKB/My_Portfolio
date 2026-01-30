"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { GraduationCap, Target, ShieldCheck, Zap, Scissors, Box } from "lucide-react";

export default function EducationPage() {
  return (
    <main className="min-h-screen pt-40 px-6 pb-40 bg-[#050505] text-white relative overflow-hidden font-sans">
      
      {/* BACKGROUND: THE MULTIVERSAL WEB */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="#3b82f6" strokeWidth="0.1" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="#ef4444" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="0.05" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HERO SECTION: SPIDER-SENSE TITLE */}
        <div className="mb-24 relative">
          <motion.div 
            initial={{ skewX: -20, opacity: 0 }}
            animate={{ skewX: 0, opacity: 1 }}
            className="inline-block bg-blue-600 px-4 py-1 mb-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
              Origin_Story // Neural_Network
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none flex flex-col">
            <span className="text-white">ACADEMIC</span>
            <span className="text-transparent stroke-red-500" style={{ WebkitTextStroke: '2px #ef4444' }}>WEAVE</span>
          </h1>
          
          {/* ELECTRIC SPARK ICON */}
          <div className="absolute -top-10 right-10 animate-pulse text-blue-400">
            <Zap size={48} fill="currentColor" />
          </div>
        </div>

        <div className="space-y-16">
          
          {/* MBA SECTION - MILES MORALES STYLE (Black/Red/Electric) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-none opacity-20 group-hover:opacity-100 blur transition duration-500" />
            
            <div className="relative bg-[#0a0a0a] border-t-4 border-blue-600 p-8 md:p-12 overflow-hidden">
              {/* GLITCH DECORATION */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box size={120} className="text-white rotate-12" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="relative">
                  <div className="w-24 h-24 bg-red-600 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0px_0px_#2563eb]">
                    <GraduationCap size={48} className="text-white" />
                  </div>
                </div>

                <div className="flex-grow space-y-4 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="text-[10px] bg-white text-black px-2 py-1 font-black uppercase tracking-tighter">Current_Timeline</span>
                    <span className="text-[10px] border border-blue-500 text-blue-400 px-2 py-1 font-black uppercase tracking-tighter italic">Human Resource Management</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                    Master’s of Business Admin
                  </h3>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xl font-bold text-blue-400 uppercase">Bharathidasan University</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest italic">Tiruchirappalli // Correspondence</p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                   <p className="text-6xl font-[1000] text-white italic leading-none group-hover:scale-110 transition-transform">7.5</p>
                   <p className="text-red-500 font-black text-xs uppercase tracking-widest mt-2">Scaled_CGPA</p>
                   <div className="mt-6 flex items-center gap-2 text-white/20 text-[10px] font-bold">
                     <Target size={12} /> FEB 2025 – PRESENT
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* B.E. SECTION - SPIDER-PUNK STYLE (Chaotic/Bold/Raw) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative bg-[#0a0a0a] border-l-[12px] border-red-600 p-8 md:p-12 skew-x-1 group-hover:skew-x-0 transition-all duration-500">
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-white flex items-center justify-center rotate-12 group-hover:-rotate-12 transition-transform">
                    <ShieldCheck size={40} className="text-white" />
                  </div>
                </div>

                <div className="flex-grow space-y-4 text-center md:text-right">
                   <div className="flex flex-wrap justify-center md:justify-end gap-3">
                    <span className="text-[10px] bg-blue-600 text-white px-2 py-1 font-black uppercase italic">Completed_Sequence</span>
                    <span className="text-[10px] border border-red-500 text-red-500 px-2 py-1 font-black uppercase italic tracking-tighter">Electronics & Communication</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                    Bachelor of Engineering
                  </h3>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xl font-bold text-red-500 uppercase">Rathinam Technical Campus</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Anna University // Coimbatore</p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                   <p className="text-6xl font-[1000] text-blue-600 italic leading-none strike-through">8.3</p>
                   <p className="text-white font-black text-xs uppercase tracking-widest mt-2">Verified_Score</p>
                   <div className="mt-6 text-white/20 text-[10px] font-bold">
                     OCT 2020 – MAY 2024
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* FOOTER: SPIDER-PUNK CUTOUT STYLE */}
        <footer className="mt-40 flex flex-col items-center opacity-40">
           <div className="w-full flex justify-between items-center mb-6">
             <div className="h-[2px] w-1/3 bg-blue-600" />
             <Scissors size={20} className="text-white rotate-90" />
             <div className="h-[2px] w-1/3 bg-red-600" />
           </div>
           <p className="text-[10px] font-black uppercase tracking-[1.5em] text-center text-white italic">
             Connecting_Every_Timeline
           </p>
        </footer>

      </div>
    </main>
  );
}