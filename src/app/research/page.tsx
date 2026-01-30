"use client";
import React from "react";
import { motion } from "framer-motion";
import { Orbit, Atom, FlaskConical, Beaker, Search, Database } from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6 relative overflow-hidden font-mono">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="relative mb-10 flex items-center justify-center"
          >
            <Orbit className="text-cyan-500 opacity-30" size={120} />
            <div className="absolute">
              <Atom className="text-cyan-400 animate-pulse" size={48} />
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">
            Research <span className="text-cyan-500">&</span> Analysis
          </h1>
          <p className="text-gray-500 tracking-[0.5em] text-[10px] uppercase">
            Data_Mining // Neural_Patterns // QA_Validation
          </p>
        </div>

        {/* RESEARCH CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* AI TRAINING & NLP RESEARCH */}
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-cyan-500/50 transition-all">
            <FlaskConical className="text-cyan-500 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4 uppercase italic">NLP Data Synthetics</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Investigating the intersection of Natural Language Processing and manual QA. Focused on building 3,000+ high-fidelity datasets for computer vision and text-based LLM training models.
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">JSON_STRUCTURING</span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">QA_METRICS</span>
            </div>
          </div>

          {/* HR ANALYTICS STUDY */}
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-purple-500/50 transition-all">
            <Database className="text-purple-500 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4 uppercase italic">Predictive HR Modeling</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Developing predictive frameworks for employee attrition and recruitment cycle efficiency. Utilizing Power BI to transform raw talent acquisition data into actionable business intelligence.
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">ATTRITION_LOGIC</span>
              <span className="text-[10px] bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">POWER_BI</span>
            </div>
          </div>

        </div>

        {/* METHODOLOGY SECTION */}
        <div className="border-t border-white/10 pt-20 pb-40">
           <div className="flex items-center gap-4 mb-10">
              <Search className="text-gray-500" size={20} />
              <h2 className="text-sm font-black tracking-widest uppercase text-gray-500">Methodology_Protocol</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="space-y-2">
                <span className="text-[10px] text-cyan-500 font-bold">01. COLLECTION</span>
                <p className="text-xs text-gray-500 uppercase leading-tight">Harvesting raw unstructured data from NLP pipelines.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-cyan-500 font-bold">02. ANNOTATION</span>
                <p className="text-xs text-gray-500 uppercase leading-tight">High-precision labeling for machine learning accuracy.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-cyan-500 font-bold">03. VALIDATION</span>
                <p className="text-xs text-gray-500 uppercase leading-tight">Rigorous QA checks maintaining 98% data integrity.</p>
              </div>
              <div className="space-div-2">
                <span className="text-[10px] text-cyan-500 font-bold">04. DEPLOYMENT</span>
                <p className="text-xs text-gray-500 uppercase leading-tight">Visualizing insights for stakeholder decision making.</p>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}