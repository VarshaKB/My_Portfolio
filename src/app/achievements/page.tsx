"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { Trophy, Shield, Cpu, Zap, Activity, Target, Fingerprint } from "lucide-react";

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen pt-36 px-6 pb-24 bg-[#050505] overflow-hidden">
      
      {/* CINEMATIC HUD BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2%_2%,rgba(220,38,38,0.15),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_98%_98%,rgba(220,38,38,0.1),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto relative z-10"
      >

        {/* TOP INTERFACE: S.H.I.E.L.D. ENCRYPTION BAR */}
        <div className="relative mb-20">
          <div className="flex justify-between items-end border-b-2 border-red-600 pb-8">
            <div className="relative">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                className="absolute -top-4 left-0 h-[1px] bg-red-600/50" 
              />
              <h2 className="text-red-600 font-mono text-[10px] uppercase tracking-[0.8em] mb-4 flex items-center gap-2">
                <Fingerprint size={12} className="animate-pulse" /> Personnel_Achievement_Log // VB-112
              </h2>
              <h1 className="text-7xl md:text-8xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                MILE<span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>STONES</span>
              </h1>
            </div>
            
            <div className="hidden lg:block text-right font-mono">
              <div className="flex items-center gap-4 text-[9px] text-white/40 uppercase tracking-widest mb-1">
                <span>Data_Sync: Stable</span>
                <Activity size={10} className="text-red-600" />
              </div>
              <p className="text-white font-black text-xs">REG_ID: 22071630689</p>
            </div>
          </div>
        </div>

        <div className="grid gap-20">

          {/* 1. TCS NQT - THE TACTICAL BREAKDOWN */}
          <section className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent opacity-50" />
            <div className="flex items-center justify-between mb-8 px-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-red-600/20 border border-red-600/40">
                  <Target className="text-red-600" size={20} />
                </div>
                <h3 className="text-white font-black uppercase italic tracking-[0.2em] text-sm">
                  Cognitive Assessment <span className="text-red-600">//</span> TCS iON NQT
                </h3>
              </div>
              <span className="text-[10px] font-mono text-white/20 uppercase">Module_Ref: 2025_DEC</span>
            </div>

            <GlassCard className="relative bg-[#0a0a0a] border border-white/10 rounded-none p-0 overflow-hidden group">
              {/* SCANNING LASER EFFECT */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-red-600/40 z-20 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              />

              <div className="relative grid md:grid-cols-12">
                {/* TOTAL SCORE: THE POWER CORE */}
                <div className="md:col-span-4 bg-gradient-to-br from-red-700 to-red-900 p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Shield size={120} />
                  </div>
                  <span className="text-black font-black text-[11px] uppercase tracking-[0.3em] mb-4 italic">
                    Aggregated_Score
                  </span>
                  <div className="flex items-baseline gap-1 relative z-10">
                    <span className="text-7xl font-[1000] text-white italic leading-none drop-shadow-2xl">
                      1172
                    </span>
                    <span className="text-white/60 text-2xl font-bold italic">.42</span>
                  </div>
                  <div className="mt-6 py-1 px-3 bg-black/40 border border-white/20 w-fit">
                    <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest">
                      Rank: Elite_Top_65%
                    </span>
                  </div>
                </div>

                {/* BREAKDOWN: THE DATA GRID */}
                <div className="md:col-span-8 p-12 grid sm:grid-cols-3 gap-12 bg-black/40">
                  {[
                    { label: "Verbal Ability", score: "420.64", color: "from-red-600" },
                    { label: "Reasoning", score: "408.68", color: "from-white" },
                    { label: "Numerical", score: "343.10", color: "from-red-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="relative group">
                      <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-4 group-hover:text-red-500 transition-colors">
                        {stat.label}
                      </p>
                      <div className="flex items-baseline gap-1 mb-4">
                        <p className="text-4xl font-[1000] text-white italic leading-none">
                          {stat.score.split('.')[0]}
                        </p>
                        <p className="text-sm font-bold text-white/30 italic">.{stat.score.split('.')[1]}</p>
                      </div>
                      {/* MINI HUD GRAPH */}
                      <div className="relative w-full h-1.5 bg-white/5 overflow-hidden border border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(parseFloat(stat.score) / 600) * 100}%` }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${stat.color} to-transparent`}
                        />
                      </div>
                      <p className="text-[8px] font-mono text-white/20 mt-2 uppercase tracking-tighter">Scale_Max: 600.00</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </section>

          {/* 2. SECONDARY GRID: THE BADGES */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* CODECHEF: THE BRONZE PROTOCOL */}
            <div className="group relative">
               <div className="absolute -inset-0.5 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
               <GlassCard className="relative bg-[#0a0a0a] border border-white/5 rounded-none p-10 flex gap-8 items-center overflow-hidden transition-all duration-300 group-hover:border-yellow-500/50">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-none border border-yellow-500/20 flex items-center justify-center bg-yellow-500/5 rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <Trophy className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 text-yellow-500" size={40} />
                  </div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 border border-dashed border-yellow-500/20 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                    Problem <br/> Solver
                  </h4>
                  <p className="text-yellow-600 font-black text-[10px] uppercase tracking-[0.3em] mt-3">
                    Bronze_Badge // CodeChef
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-8 bg-yellow-500/50" />
                    <span className="text-white font-mono text-[11px] uppercase tracking-widest font-bold animate-pulse">
                      50+ Tasks Cleared
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* TEAM LEAD: THE SHIELD INITIATIVE */}
            <div className="group relative">
               <div className="absolute -inset-0.5 bg-red-600/20 opacity-0 group-hover:opacity-100 transition duration-500" />
               <GlassCard className="relative bg-[#0a0a0a] border border-white/5 rounded-none p-10 flex gap-8 items-center overflow-hidden transition-all duration-300 group-hover:border-red-600/50">
                <div className="w-24 h-24 bg-red-600 flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(220,38,38,0.2)] skew-x-[-12deg] group-hover:skew-x-0 transition-transform duration-500">
                  <Shield className="text-white" size={44} />
                </div>
                <div>
                  <h4 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                    Top Team <br/> Lead
                  </h4>
                  <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em] mt-3 italic">
                    Recognition // Performance
                  </p>
                  <p className="text-white/40 text-[10px] mt-4 leading-tight uppercase font-bold max-w-[200px]">
                    Optimizing <span className="text-white">Blueprint Response</span> via high-precision node management.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* FINAL SYSTEM FOOTER: METADATA */}
          <footer className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
            <div className="flex items-center gap-6">
               <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-red-600/20" />
                  ))}
               </div>
               <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20">
                 Secure_Vault // Encrypted_Data
               </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 px-6 py-2">
               <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                 Validity_Protocol: <span className="text-red-600">Jan 2026 – Jan 2028</span>
               </p>
            </div>
          </footer>

        </div>
      </motion.div>
    </main>
  );
}