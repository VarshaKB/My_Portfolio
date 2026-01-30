"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Database, Users, Lock, Code, 
  Download, Terminal, Cpu, Fingerprint, Activity,
  Target, Zap, Radar
} from "lucide-react";

const certificationModules = [
  {
    category: "Cyber Intelligence // Defense",
    icon: <Lock size={20} />,
    color: "rgba(220, 38, 38, 0.5)", // Iron Man Red
    accent: "text-red-500",
    certs: [
      { name: "Introduction to Cyber Security", issuer: "Infosys Springboard", date: "2022" },
      { name: "Networking and Web Technology", issuer: "Infosys Springboard", date: "2022" },
      { name: "Threat Modeling", issuer: "Infosys Springboard", date: "2022" },
      { name: "Identity and Access Management", issuer: "Infosys Springboard", date: "2022" },
      { name: "Fundamentals of Cryptography", issuer: "Infosys Springboard", date: "2022" },
      { name: "Security Standards & Regulations", issuer: "Infosys Springboard", date: "2022" },
    ]
  },
  {
    category: "Strategic Ops // HR Logistics",
    icon: <Users size={20} />,
    color: "rgba(6, 182, 212, 0.5)", // Arc Reactor Blue
    accent: "text-cyan-400",
    certs: [
      { name: "HR and Payroll Processes", issuer: "greytHR Academy", date: "2025" },
      { name: "Strategic HR Management", issuer: "Rathinam Institute", date: "2024" },
      { name: "Zoho Recruit Professional", issuer: "Cloud Systems", date: "2024" },
      { name: "Identity Governance", issuer: "Infosys Springboard", date: "2022" },
    ]
  },
  {
    category: "Intel Analysis // Data Flow",
    icon: <Database size={20} />,
    color: "rgba(234, 179, 8, 0.5)", // Mind Stone Gold
    accent: "text-yellow-500",
    certs: [
      { name: "Data Analytics Job Simulation", issuer: "Deloitte", date: "2026" },
      { name: "TCS iON NQT – Cognitive", issuer: "TCS iON", date: "2026" },
      { name: "Data Analytics Essentials", issuer: "Cisco Networking", date: "2025" },
      { name: "HR Analytics with Power BI", issuer: "Data Insights Lab", date: "2024" },
    ]
  },
  {
    category: "Engine Core // Programming",
    icon: <Code size={20} />,
    color: "rgba(168, 85, 247, 0.5)", // Power Stone Purple
    accent: "text-purple-500",
    certs: [
      { name: "Advanced NLP Certification", issuer: "Objectways Tech", date: "2025" },
      { name: "Secure Coding in Java SE 11", issuer: "Infosys Springboard", date: "2022" },
      { name: "HTML Tutorial", issuer: "Great Learning", date: "2024" },
      { name: "C for Beginners", issuer: "Great Learning", date: "2023" },
    ]
  }
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-36 px-6 pb-24 bg-[#050505] text-white selection:bg-red-600/30">
      
      {/* MCU HUD OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[1.5rem] border-white/5" />
      <div className="fixed top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* TOP STATUS BAR */}
        <div className="flex justify-between items-center mb-20 border-b border-white/10 pb-4">
          <div className="flex items-center gap-6">
            <div className="h-2 w-12 bg-red-600" />
            <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-white/40">Level 07 Access Required</span>
          </div>
          <div className="flex gap-4">
             <Radar size={14} className="text-red-600 animate-pulse" />
             <span className="font-mono text-[9px] uppercase tracking-widest">Active_Scan: COMPLETE</span>
          </div>
        </div>

        {/* HERO TITLE: STARK INDUSTRIES STYLE */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="absolute -top-6 left-0 h-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)]"
          />
          <h1 className="text-7xl md:text-9xl font-[1000] uppercase italic tracking-tighter leading-none flex flex-col">
            <span>TECH</span>
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>ARSENAL</span>
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <Activity size={12} className="text-red-600" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Credential_Database_V4.0</span>
          </div>
        </div>

        {/* THE MISSION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {certificationModules.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* ASYMMETRIC HUD BORDER */}
              <div 
                className="absolute inset-0 transition-all duration-500 group-hover:scale-[1.02]"
                style={{ 
                  background: `linear-gradient(135deg, ${module.color} 0%, transparent 40%)`,
                  clipPath: 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 10%)'
                }}
              />
              
              <div className="relative bg-black/80 m-[1px] p-8 h-full transition-all"
                   style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 10%)' }}>
                
                {/* MODULE HEADER */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-white/5 border border-white/10 ${module.accent}`}>
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">
                      {module.category}
                    </h3>
                  </div>
                  <Target size={18} className="text-white/10" />
                </div>

                {/* CERT ENTRIES */}
                <div className="space-y-2">
                  {module.certs.map((cert, cIdx) => (
                    <div key={cIdx} className="group/item flex items-center justify-between p-3 border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-1 bg-white/20 group-hover/item:bg-red-600" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold uppercase italic tracking-tight text-white/80">
                            {cert.name}
                          </span>
                          <span className="text-[8px] font-mono uppercase tracking-widest text-white/30">
                            {cert.issuer}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-white/20">{cert.date}</span>
                    </div>
                  ))}
                </div>

                {/* DECORATIVE SPECS */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-20">
                   <div className="flex gap-1">
                     <div className="w-4 h-[2px] bg-white" />
                     <div className="w-1 h-[2px] bg-white" />
                   </div>
                   <span className="text-[7px] font-mono tracking-widest">ENCRYPTED_ID_VB_{idx}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM HUD CONTROLS */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-12">
           <div className="flex items-center gap-8">
              <div className="text-center">
                 <p className="text-[8px] font-mono text-white/20 uppercase mb-1">Total Assets</p>
                 <p className="text-2xl font-black italic">15</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                 <p className="text-[8px] font-mono text-white/20 uppercase mb-1">Auth Level</p>
                 <p className="text-2xl font-black italic text-red-600">07</p>
              </div>
           </div>

         
        </div>

        {/* FLOATING DECORATIONS */}
        <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2 opacity-20 group">
           <Fingerprint size={32} className="text-red-600" />
           <span className="text-[7px] font-mono uppercase tracking-[0.5em]">Identity_Verified</span>
        </div>

      </div>
    </main>
  );
}