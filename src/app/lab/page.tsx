"use client";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu } from "lucide-react";

export default function LabPage() {
  const projects = [
    { title: "Blueprint Response", detail: "500+ Image Annotations", metric: "98% Accuracy" },
    { title: "BDX AI Training", detail: "Automated Recognition", metric: "95% Accuracy" },
    { title: "IAB Integration", detail: "2000+ Images to JSON", metric: "JSON Ops" }
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-5xl font-bold tracking-tighter mb-4 flex items-center gap-4">
          <Terminal className="text-cyan-400" /> THE_LAB
        </h1>
        <p className="text-gray-500 font-mono text-sm mb-12 uppercase tracking-widest">
          // NLP & Machine Learning Workstreams
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-all">
              <Code2 className="text-cyan-500 mb-4" size={20} />
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.detail}</p>
              <div className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 inline-block rounded">
                {p.metric}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}