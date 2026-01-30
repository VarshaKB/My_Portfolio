"use client";
import { motion } from "framer-motion";
import { Users, BarChart3, PieChart, Target } from "lucide-react";

export default function DashboardPage() {
  const metrics = [
    { label: "Candidates Sourced", value: "500+", icon: <Users size={20}/>, change: "+35% Pipeline" },
    { label: "Interviews Conducted", value: "200+", icon: <Target size={20}/>, change: "Virtual & In-person" },
    { label: "Hiring Efficiency", value: "20%", icon: <BarChart3 size={20}/>, change: "Time-to-fill improved" }
  ];

  return (
    <main className="min-h-screen pt-32 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-5xl font-bold tracking-tighter mb-2">TALENT_INTEL</h1>
        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-12">
          // Human Capital Analytics & Operations
        </p>

        {/* Top Level Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((m, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity text-cyan-400">
                {m.icon}
              </div>
              <p className="text-gray-500 font-mono text-[10px] uppercase mb-2">{m.label}</p>
              <h2 className="text-4xl font-bold mb-2">{m.value}</h2>
              <p className="text-cyan-500 text-xs font-mono">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Experience Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <PieChart size={18} className="text-purple-500" /> Recruitment Lifecycle
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Managed end-to-end recruitment for 15+ IT and non-IT roles, collaborating with 10+ hiring managers to refine search strategies."
            </p>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 size={18} className="text-cyan-500" /> Tools Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Zoho Recruit", "Bamboo HR", "Workday", "Power BI"].map((tool) => (
                <span key={tool} className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full bg-white/5">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}