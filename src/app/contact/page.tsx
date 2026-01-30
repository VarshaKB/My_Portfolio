"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, Crosshair, Activity, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white pt-32 px-6 overflow-hidden relative">
      
      {/* 1. HUD SCANNING LINES (Background) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,255,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_4px,4px_100%]" />
        <motion.div 
          animate={{ y: ["0%", "100%"] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-[2px] bg-red-600/20 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-20"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-30">
        
        {/* HEADER: TARGETING OVERLAY */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div 
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="mb-6"
          >
            <Crosshair size={48} className="text-red-600 animate-pulse" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-[-0.05em] mb-2">
            Signal <span className="text-red-600">Acquisition</span>
          </h1>
          <p className="font-mono text-[10px] tracking-[0.8em] text-white/40 uppercase">
            Awaiting_User_Input // 2026_Protocol
          </p>
        </div>

        {/* 2. THE CONTACT HEX-GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          
          {/* LEFT COLUMN: TELEMETRY */}
          <div className="space-y-4 border-r border-white/10 p-6 hidden md:block">
            <div className="flex items-center gap-2 text-red-600">
              <Activity size={14} />
              <span className="font-mono text-[9px] uppercase font-bold">Signal_Strength</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["10%", "90%", "40%", "95%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-full bg-red-600" 
                />
            </div>
            <p className="text-[10px] font-mono text-white/20 leading-tight uppercase">
              LAT: 11.0168° N<br/>LONG: 76.9558° E<br/>SECURE_ENCRYPTION: ACTIVE<br/>VARSHA_KB_NODE: ONLINE
            </p>
          </div>

          {/* CENTER COLUMN: INTERACTIVE NODES */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2">
            
            {/* EMAIL NODE */}
            <motion.a 
              href="mailto:varshaababul112@gmail.com"
              whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
              className="border border-white/10 p-10 flex flex-col items-center group transition-all"
            >
              <div className="relative mb-6">
                <Mail size={32} className="text-white group-hover:text-red-600 transition-colors z-10 relative" />
                <motion.div 
                   animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 bg-red-600 rounded-full blur-xl"
                />
              </div>
              <span className="font-black uppercase italic tracking-widest text-xs mb-2">Primary_Link</span>
              <span className="text-sm font-mono text-white/60 group-hover:text-white">varshaababul112@gmail.com</span>
            </motion.a>

            {/* LINKEDIN NODE */}
            <motion.a 
              href="https://www.linkedin.com/in/varsha-babu-92ba7b213"
              target="_blank"
              whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
              className="border border-white/10 p-10 flex flex-col items-center group transition-all"
            >
              <Linkedin size={32} className="mb-6 text-white group-hover:text-red-600 transition-colors" />
              <span className="font-black uppercase italic tracking-widest text-xs mb-2">Network_Auth</span>
              <span className="text-sm font-mono text-white/60 group-hover:text-white text-center">https://www.linkedin.com/in/varsha-k-babu-92ba7b213/</span>
            </motion.a>

            {/* GITHUB NODE */}
            <motion.a 
              href="https://github.com/VarshaKB"
              target="_blank"
              whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
              className="border border-white/10 p-10 flex flex-col items-center group transition-all"
            >
              <Github size={32} className="mb-6 text-white group-hover:text-red-600 transition-colors" />
              <span className="font-black uppercase italic tracking-widest text-xs mb-2">Source_Code</span>
              <span className="text-sm font-mono text-white/60 group-hover:text-white">github.com/VarshaKB</span>
            </motion.a>

            {/* PHONE NODE */}
            <motion.a 
              href="tel:+918072578863"
              whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.1)" }}
              className="border border-white/10 p-10 flex flex-col items-center group transition-all"
            >
              <Phone size={32} className="mb-6 text-white group-hover:text-red-600 transition-colors" />
              <span className="font-black uppercase italic tracking-widest text-xs mb-2">Audio_Channel</span>
              <span className="text-sm font-mono text-white/60 group-hover:text-white">+91 8072578863</span>
            </motion.a>

          </div>
        </div>

        {/* 3. FOOTER: SYSTEM ARCHITECTURE */}
        <div className="mt-20 border-t border-red-600/30 pt-10 flex flex-col md:flex-row justify-between items-center pb-20">
          <div className="flex gap-1 mb-4 md:mb-0">
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                className="w-4 h-1 bg-red-600"
              />
            ))}
          </div>
          <div className="bg-red-600 text-black font-[1000] px-8 py-3 uppercase italic skew-x-[-12deg] hover:skew-x-0 transition-transform cursor-pointer">
              Initialize Deployment
          </div>
        </div>
      </div>
    </main>
  );
}