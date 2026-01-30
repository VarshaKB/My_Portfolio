"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeader from "@/components/SectionHeader";
import { Briefcase, Database, Users, Zap, Terminal, Activity } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-6xl mx-auto pb-20 bg-[#050505]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        
        {/* TOP STATUS BAR */}
        <div className="flex items-center gap-4 mb-2 opacity-50">
          <Terminal size={14} className="text-red-600" />
          <span className="text-white font-mono text-[10px] uppercase tracking-[0.5em]">
            Accessing_Professional_Dossier_V4.0
          </span>
        </div>
        
        <SectionHeader title="Experience" subTitle="Mission Log" />

        {/* 1. FEATURED CURRENT ROLE - THE "AVENGERS" LEVEL HEADER */}
        <div className="mb-24 mt-12">
          <div className="relative group">
            {/* STARK RED GLOW */}
            <div className="absolute -inset-1 bg-red-600 opacity-10 group-hover:opacity-20 blur-xl transition duration-500" />
            
            <GlassCard className="relative overflow-hidden border-l-4 border-l-red-600 bg-black/40 p-0 rounded-none">
              <div className="flex flex-col lg:flex-row">
                
                {/* LEFT: TITLE BLOCK */}
                <div className="lg:w-1/3 bg-red-600 p-8 flex flex-col justify-between">
                  <div>
                    <div className="bg-black text-white w-fit px-3 py-1 mb-6 font-black text-[10px] uppercase tracking-[0.3em] italic">
                      
                    </div>
                    <h3 className="text-5xl font-[1000] text-white leading-[0.85] uppercase italic tracking-tighter">
                      NLP <br/>Analyst
                    </h3>
                  </div>
                  <div className="mt-8">
                    <p className="text-black font-black text-xl uppercase italic leading-none">Objectways</p>
                    <p className="text-white/60 text-xs font-mono uppercase mt-2">JAN 2024 — AUG 2025</p>
                  </div>
                </div>

                {/* RIGHT: INTEL BLOCK */}
                <div className="lg:w-2/3 p-8 md:p-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <Activity className="text-red-600 shrink-0" size={24} />
                    <p className="text-xl md:text-2xl text-white font-bold uppercase italic leading-tight tracking-tight">
                      Orchestrating <span className="text-red-500">high-impact NLP projects</span> (Blueprint/IAB) maintaining a <span className="bg-red-600 text-white px-2 italic">95% accuracy</span> benchmark.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="border border-white/10 p-5 bg-white/5 hover:bg-red-600/5 transition-colors group/stat">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="text-red-600" size={20} />
                        <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Achievement_Unlocking</p>
                      </div>
                      <p className="text-lg font-[1000] text-white uppercase italic group-hover:text-red-500 transition-colors">Top Team Lead</p>
                      <p className="text-xs text-white/40 uppercase mt-1 italic">Blueprint Division Recognition</p>
                    </div>

                    <div className="border border-white/10 p-5 bg-white/5 hover:bg-red-600/5 transition-colors group/stat">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="text-red-600" size={20} />
                        <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Data_Throughput</p>
                      </div>
                      <p className="text-lg font-[1000] text-white uppercase italic group-hover:text-red-500 transition-colors">3,000+ Nodes</p>
                      <p className="text-xs text-white/40 uppercase mt-1 italic">Processed & Validated Data Points</p>
                    </div>
                  </div>
                </div>

              </div>
            </GlassCard>
          </div>
        </div>

        {/* 2. INTERNSHIPS - TWO-COLUMN TACTICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* HR RECRUITER */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.4em]">Sector_HR_Recruitment</span>
              <span className="h-[1px] flex-grow mx-4 bg-white/10" />
            </div>
            
            <GlassCard className="bg-black/20 border-white/10 border-t-2 border-t-white hover:border-t-red-600 transition-all rounded-none p-8">
              <h3 className="text-3xl font-[1000] text-white uppercase italic leading-none">HR Recruiter</h3>
              <p className="text-red-600 font-bold text-xs mt-2 uppercase tracking-widest">Snab Solutions | 2025</p>
              
              <p className="text-white/60 text-sm mt-6 leading-relaxed">
                Strategic hiring for <span className="text-white font-bold uppercase">15+ key roles</span>. Built a <span className="text-red-500 font-black">500+ pipeline</span> and optimized sourcing speed by <span className="italic underline">20%</span>.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {['Sourcing', 'Negotiation', 'IT Hiring'].map(tag => (
                  <span key={tag} className="text-[9px] border border-white/20 text-white/40 px-3 py-1 font-black uppercase tracking-tighter group-hover:border-red-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* DATA ANALYST */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col mt-8 md:mt-0"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-white/30 font-black text-[10px] uppercase tracking-[0.4em]">Sector_Data_Analytics</span>
              <span className="h-[1px] flex-grow mx-4 bg-white/10" />
            </div>
            
            <GlassCard className="bg-black/20 border-white/10 border-t-2 border-t-white hover:border-t-red-600 transition-all rounded-none p-8">
              <h3 className="text-3xl font-[1000] text-white/80 group-hover:text-white uppercase italic leading-none">Data Analyst</h3>
              <p className="text-white/40 font-bold text-xs mt-2 uppercase tracking-widest">YBI Foundation | 2023</p>
              
              <p className="text-white/50 text-sm mt-6 leading-relaxed">
                Architected <span className="text-white/80 font-bold">10+ ML Models</span> using Python frameworks. Transformed raw datasets into <span className="text-white italic underline">actionable business intelligence</span>.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {['Scikit-learn', 'EDA', 'Pandas'].map(tag => (
                  <span key={tag} className="text-[9px] border border-white/10 text-white/30 px-3 py-1 font-black uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}