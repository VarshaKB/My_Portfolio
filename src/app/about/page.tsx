"use client";
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { RotateCcw, Zap, Globe2, Layers, Award, Eye, Skull, Activity, Fingerprint } from "lucide-react";

// COMPONENT THAT RESPONDS ONLY TO GLOBAL SNAP BUTTON
const SnappableContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    const disintegrate = () => {
      controls.start({
        opacity: 0,
        x: 100,
        y: -50,
        filter: "blur(20px) grayscale(1)",
        transition: { duration: 2, ease: "easeOut" }
      });
    };

    const restore = () => {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px) grayscale(0)",
        transition: { duration: 1, ease: "backOut" }
      });
    };

    window.addEventListener("trigger-universal-snap", disintegrate);
    window.addEventListener("restore-timeline", restore);
    
    return () => {
      window.removeEventListener("trigger-universal-snap", disintegrate);
      window.removeEventListener("restore-timeline", restore);
    };
  }, [controls]);

  return (
    <motion.div animate={controls} className={className}>
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  const handleSnap = () => window.dispatchEvent(new CustomEvent("trigger-universal-snap"));
  const handleRestore = () => window.dispatchEvent(new CustomEvent("restore-timeline"));

  return (
    <main className="min-h-screen pt-32 px-6 bg-[#020104] text-[#f8fafc] relative overflow-hidden font-mono">
      
      {/* 1. TOP LEFT: THE SNAP BUTTON */}
      <div className="absolute top-10 left-10 z-50">
        <motion.button
          onClick={handleSnap}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #9333ea" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-purple-900/40 border border-purple-500/50 px-6 py-3 rounded-lg backdrop-blur-md"
        >
          <Fingerprint className="text-purple-400" size={24} />
          <span className="text-xs font-black tracking-widest uppercase">The Snap</span>
        </motion.button>
      </div>

      {/* 2. BOTTOM RIGHT: TIME RESTORE BUTTON */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center gap-2">
        <motion.button 
          onClick={handleRestore}
          whileHover={{ scale: 1.1, rotate: -180 }}
          className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_#10b981]"
        >
          <RotateCcw className="text-white" size={28} />
        </motion.button>
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Restore</span>
      </div>

      <SnappableContent className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-24">
          <h1 className="text-7xl md:text-[9rem] font-black italic uppercase tracking-tighter leading-none">
          VARSHAA <br />
            <span className="bg-gradient-to-r from-emerald-395 via-blue-495 to-purple-600 bg-clip-text text-transparent">
            Babu
            </span>
          </h1>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40">
          
          <div className="lg:col-span-8 space-y-12 text-xl leading-relaxed font-light">
            <p className="border-l-4 border-purple-600 pl-8 bg-purple-600/5 py-4">
              I am a data-driven professional with hands-on experience at the intersection of Data Analytics, AI training, and Talent Acquisition, currently pursuing an MBA in Human Resource Management. I bring 1+ years of experience as an Analyst and practical exposure to end-to-end recruitment operations, enabling me to bridge business needs with analytical insights.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-base text-gray-400 font-sans">
               <div className="p-8 border border-white/5 bg-white/5">
                 <Activity className="text-blue-500 mb-6" size={24} />
                 At Objectways Technologies, I contributed to multiple NLP and computer vision projects, where I built and validated 3,000+ high-quality training datasets for machine learning models. My work involved advanced annotation techniques, NLP preprocessing, and strict quality assurance—maintaining 95–98% accuracy.
               </div>

               <div className="p-8 border border-white/5 bg-white/5">
                 <Eye className="text-orange-500 mb-6" size={24} />
                 I have strong experience in data analysis and visualization, having developed Power BI dashboards for operational and HR use cases, including call center performance, employee attrition, and KPI tracking.
               </div>
            </div>

            <p className="text-base text-gray-300">
               Alongside analytics, I have executed end-to-end recruitment across IT and non-IT roles, handling sourcing, screening, interviewing, stakeholder coordination, and offer rollouts.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 border-b-2 border-emerald-500/30 bg-white/5">
              <Globe2 className="text-emerald-400 mb-4" size={24} />
              <h4 className="text-[10px] font-black uppercase mb-4 tracking-widest text-emerald-400">Languages</h4>
              <p className="text-xs text-gray-400 leading-loose font-bold italic">
                Tamil (Native), French (C1), English (B2), Malayalam (B2).
              </p>
            </div>

            <div className="p-6 bg-white/5 space-y-4 border border-white/5">
              <Layers className="text-yellow-500" size={24} />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Project_Focus</h4>
              <ul className="space-y-3 text-[10px] font-bold text-gray-500 uppercase">
                <li>• Customer churn prediction</li>
                <li>• Real-time fraud detection</li>
                <li>• Demand forecasting</li>
                <li>• Explainable credit risk scoring</li>
                <li>• NLP sentiment engine</li>
                <li>• MLOps pipeline</li>
              </ul>
            </div>

            <div className="p-6 border border-red-500/20 bg-red-500/5">
               <Award className="text-red-500 mb-4" size={24} />
               <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed">
                Certified through TCS NQT, HR Analytics, and multiple programs, driven by continuous learning.
               </p>
            </div>
          </div>
        </div>

        <footer className="mt-40 flex flex-col items-center opacity-30 pb-20">
          <Skull className="text-purple-600 mb-4" size={40} />
          <p className="text-[8px] tracking-[2em] uppercase">Perfect_Balance</p>
        </footer>
      </SnappableContent>
    </main>
  );
}