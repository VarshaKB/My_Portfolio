"use client";
import { motion } from "framer-motion";
import { 
  Zap, 
  Binary, 
  ShieldAlert, 
  Cpu, 
  TrendingUp,
  CloudLightning,
  Orbit,
  Compass,
  Infinity
} from "lucide-react";

const caseStudies = [
  {
    id: "01",
    tag: "FORGED_DATA",
    title: "Predictive Employee Attrition & Retention Intelligence",
    domain: "Data Science × Predictive HR Analytics",
    problem: "Traditional HR analytics treats employee attrition as a binary lag-indicator. By the time someone is flagged as 'at-risk', they have already mentally checked out, leading to reactive and expensive hiring cycles.",
    objective: "Engineered a survival-analysis framework to predict 'Time-to-Attrition' and simulate the causal impact of management interventions on employee tenure.",
    metrics: ["92% Accuracy", "14.6% Attrition Reduction", "38K+ Data Points"],
    methodology: [
      "Cox Proportional Hazards Model",
      "Double Machine Learning (DML)",
      "Transformer-based NLP Sentiment"
    ],
    tech: ["Python", "Lifelines", "CausalML"],
    position: "left"
  },
  {
    id: "02",
    tag: "BIFROST_MAPPING",
    title: "AI-Driven Workforce Skill Gap & Internal Mobility Engine",
    domain: "Graph Neural Networks × Strategic HR Planning",
    problem: "Organizations suffer from 'Skill Blindness'—an inability to see latent talent within their own ranks, resulting in 60% higher costs for external hiring compared to internal upskilling.",
    objective: "Developed a Knowledge Graph system to map skill adjacency and predict role transition feasibility for 22,000+ employees using deep representation learning.",
    metrics: ["41% Internal Fill", "1.8M Tokens", "2.4x Speedup"],
    methodology: [
      "Sentence Transformers",
      "Neo4j Knowledge Graphs",
      "Graph Neural Networks (GNN)"
    ],
    tech: ["Neo4j", "PyTorch", "NLP"],
    position: "right"
  }
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#020205] text-white overflow-hidden font-sans selection:bg-cyan-500/50">
      
      {/* THE SINGULARITY (Background Center Glow) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1px] h-screen bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent opacity-20" />
        <div className="absolute w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-10 pt-44 pb-32">
        
        {/* CINEMATIC VERTICAL TITLE */}
        <div className="fixed left-10 bottom-10 hidden xl:block">
           <h1 className="text-[12rem] font-black leading-none opacity-5 tracking-tighter uppercase vertical-text select-none">
             CASE_STUDIES
           </h1>
        </div>

        {/* HEADER SECTION */}
        <div className="flex flex-col items-center mb-40">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="relative mb-10"
           >
              <Orbit className="text-cyan-500 opacity-20" size={120} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <CloudLightning className="text-cyan-400 animate-pulse" size={40} />
              </div>
           </motion.div>
           <h2 className="text-sm font-mono tracking-[1.5em] text-cyan-500 mb-4 text-center">COSMIC_INTEL_STREAM</h2>
           <h1 className="text-7xl md:text-8xl font-[1000] italic tracking-tighter text-center uppercase">
             THE_<span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>ARCHIVE</span>
           </h1>
        </div>

        {/* INTERACTIVE DATA TRACKS */}
        <div className="relative space-y-64">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: study.position === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className={`flex flex-col ${study.position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              
              {/* LARGE METRIC CIRCLE */}
              <div className="relative flex-shrink-0">
                <div className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[ping_4s_linear_infinite]" />
                  <div className="text-center group cursor-default">
                    <p className="text-[10px] font-mono text-cyan-500 mb-2">CORE_POWER</p>
                    <span className="text-6xl font-black italic">{study.metrics[0].split(' ')[0]}</span>
                    <p className="text-[10px] font-mono opacity-40 mt-2 uppercase tracking-widest">{study.metrics[0].split(' ')[1]}</p>
                  </div>
                </div>
                {/* Orbital Dots */}
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#fff]" />
              </div>

              {/* CONTENT CARD */}
              <div className="flex-grow max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px w-20 bg-cyan-500/50" />
                  <span className="text-xs font-mono uppercase tracking-[0.5em] text-cyan-400">{study.tag}</span>
                </div>
                
                <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-10 leading-[0.9]">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-12 border-l border-white/10 pl-10 relative">
                  <div className="absolute top-0 left-[-2px] h-20 w-[4px] bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                  
                  <div className="space-y-8">
                    <div>
                      <p className="text-[10px] font-mono uppercase opacity-30 mb-3 flex items-center gap-2">
                        <ShieldAlert size={12}/> Fragility_Point
                      </p>
                      <p className="text-gray-400 italic leading-relaxed text-sm">"{study.problem}"</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase opacity-30 mb-3 flex items-center gap-2">
                        <TrendingUp size={12}/> Impact_Trajectory
                      </p>
                      <p className="text-xl font-bold text-white leading-tight uppercase italic">{study.objective}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                     <div className="bg-white/[0.02] p-6 border border-white/5 backdrop-blur-sm">
                        <p className="text-[10px] font-mono uppercase text-cyan-500 mb-4">Neural_Process</p>
                        <ul className="space-y-4">
                          {study.methodology.map((m, i) => (
                            <li key={i} className="text-xs flex items-center gap-3 group">
                              <Zap size={10} className="text-cyan-500 group-hover:scale-150 transition-transform" />
                              <span className="text-gray-300 group-hover:text-white">{m}</span>
                            </li>
                          ))}
                        </ul>
                     </div>
                     <div className="flex gap-2">
                        {study.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 text-[9px] font-black uppercase tracking-widest text-cyan-400">
                            {t}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BIFROST CO-ORDINATES FOOTER */}
        <div className="mt-64 flex flex-col items-center">
           <div className="flex items-center gap-10 opacity-20 mb-10">
              <Infinity size={40} strokeWidth={1} />
              <div className="h-px w-64 bg-white" />
              <Compass size={40} strokeWidth={1} />
           </div>
           <p className="text-[10px] font-mono uppercase tracking-[2em] text-white/20">ACCESS_GRANTED_VB_ARCHIVE</p>
        </div>

      </div>

      {/* STYLES FOR VERTICAL TEXT */}
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </main>
  );
}