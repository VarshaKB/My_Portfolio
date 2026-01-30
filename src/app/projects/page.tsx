"use client";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldAlert, 
  LineChart, 
  Cpu, 
  MessageSquare, 
  Settings, 
  Infinity,
  Terminal,
  Activity,
  ArrowUpRight
} from "lucide-react";

const deployments = [
  {
    id: "DEPL-01",
    title: "Predictive Churn Intelligence Platform",
    subtitle: "STORM-WATCH: REVENUE PRESERVATION",
    desc: "A sophisticated predictive engine designed to identify subscription attrition before it occurs. By analyzing the 'decay' of customer engagement, the system provides a 60-day warning window for retention teams.",
    impact: "Neutralized 62% of potential churn revenue loss.",
    metrics: [
      { label: "ROC-AUC", val: "0.89" },
      { label: "Recall", val: "81%" }
    ],
    stack: ["XGBoost", "FastAPI", "SHAP", "SMOTE"],
    icon: <Activity className="text-cyan-400" size={24} />
  },
  {
    id: "DEPL-02",
    title: "Real-Time Fraud Detection Nexus",
    subtitle: "HEIMDALL-SIGHT: TRANSACTIONAL SECURITY",
    desc: "A millisecond-latency detection system that monitors transaction streams for anomalous patterns. Uses unsupervised isolation forests to catch zero-day fraud tactics without disrupting legitimate user flow.",
    impact: "Achieved < 2.5% False Positive Rate in high-velocity environments.",
    metrics: [
      { label: "Precision", val: "92%" },
      { label: "Latency", val: "<50ms" }
    ],
    stack: ["Isolation Forest", "Kafka", "Autoencoders", "Python"],
    icon: <ShieldAlert className="text-red-500" size={24} />
  },
  {
    id: "DEPL-03",
    title: "Multi-Horizon Demand Forecasting",
    subtitle: "ORACLE-CORE: SUPPLY CHAIN OPTIMIZATION",
    desc: "Integrated time-series decomposition with deep learning to solve the 'bullwhip effect' in retail. This system optimizes stock levels by predicting seasonal spikes and promotional impacts across 3000+ SKU nodes.",
    impact: "23% reduction in RMSE vs legacy moving-average baselines.",
    metrics: [
      { label: "MAPE", val: "9.8%" },
      { label: "Optimization", val: "↑ 15%" }
    ],
    stack: ["LSTM", "Prophet", "SARIMA", "Pandas"],
    icon: <LineChart className="text-purple-400" size={24} />
  },
  {
    id: "DEPL-04",
    title: "Explainable Credit Risk Scoring",
    subtitle: "MIMIR-LOGS: REGULATORY COMPLIANT AI",
    desc: "An interpretability-first lending model that bridges the gap between high-performance LightGBM boosters and regulatory transparency requirements (SHAP/LIME). Evaluates credit utilization and delinquency ratios.",
    impact: "Standardized risk-adjusted approvals for high-stakes lending.",
    metrics: [
      { label: "ROC-AUC", val: "0.86" },
      { label: "KS Stat", val: "0.41" }
    ],
    stack: ["LightGBM", "SHAP", "Governance Docs", "Scikit-Learn"],
    icon: <Settings className="text-yellow-500" size={24} />
  },
  {
    id: "DEPL-05",
    title: "Voice of Customer Sentiment Engine",
    subtitle: "THOUGHT-EXTRACTOR: NLP INTELLIGENCE",
    desc: "Utilizes BERT-fine-tuning to transform unstructured support tickets into actionable pain-point clusters. The engine performs real-time sentiment polarity checks and LDA topic modeling for product roadmapping.",
    impact: "91% accuracy in multi-class sentiment categorization.",
    metrics: [
      { label: "F1-Score", val: "0.90" },
      { label: "Tokens/Sec", val: "1.2k" }
    ],
    stack: ["BERT", "Transformers", "LDA", "NLTK"],
    icon: <MessageSquare className="text-emerald-400" size={24} />
  },
  {
    id: "DEPL-06",
    title: "IoT Predictive Maintenance System",
    subtitle: "FORGE-MONITOR: SENSOR FUSION AI",
    desc: "Analyzes high-frequency FFT (Fast Fourier Transform) features from industrial sensors to detect early-stage mechanical fatigue. Predicts the 'failure window' to allow for proactive scheduled downtime.",
    impact: "88% Recall in failure detection across sensor arrays.",
    metrics: [
      { label: "Downtime ↓", val: "30%" },
      { label: "ROC-AUC", val: "0.84" }
    ],
    stack: ["FFT", "XGBoost", "IoT Sensors", "Time-Series"],
    icon: <Cpu className="text-blue-500" size={24} />
  },
  {
    id: "DEPL-07",
    title: "Production-Grade MLOps Pipeline",
    subtitle: "ASGARD-LINK: SCALABLE ML INFRA",
    desc: "The 'Bifrost' of ML—a fully automated lifecycle managing data versioning (DVC), model tracking (MLflow), and containerized deployment. Includes automated drift detection and retraining triggers.",
    impact: "Reduced deployment latency by 40% and maintained 99.9% uptime.",
    metrics: [
      { label: "Uptime", val: "99.9%" },
      { label: "Retraining", val: "Auto" }
    ],
    stack: ["MLflow", "DVC", "Docker", "GitHub Actions"],
    icon: <Infinity className="text-cyan-500" size={24} />
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-40 px-6 pb-40 bg-[#020205] text-white relative overflow-hidden">
      
      {/* COSMIC BIFROST LINE */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent hidden lg:block -translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-500/30 rounded-full mb-6 bg-cyan-500/5"
          >
            <Terminal size={12} className="text-cyan-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">Tactical_Deployments_v4</span>
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-[1000] tracking-tighter uppercase italic leading-none">
            SYSTEMS<br/>
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>ARMORY</span>
          </h1>
        </div>

        {/* TIMELINE DEPLOYMENTS */}
        <div className="space-y-32">
          {deployments.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* CONTENT CARD */}
              <div className="lg:w-1/2 w-full">
                <div className="group relative bg-[#08080c] border border-white/5 p-10 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl">
                  {/* Lightning Accent */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{project.id}</span>
                      <h3 className="text-3xl font-black italic uppercase tracking-tighter mt-1">{project.title}</h3>
                      <p className="text-[10px] font-mono text-white/30 uppercase mt-2">{project.subtitle}</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                      {project.icon}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 italic border-l-2 border-white/10 pl-6">
                    {project.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8 bg-white/[0.02] p-6 rounded-sm">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <p className="text-[9px] font-mono uppercase text-white/20 mb-1">{m.label}</p>
                        <p className="text-2xl font-black italic text-cyan-400">{m.val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 uppercase">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest flex items-center gap-2">
                       <Zap size={10} className="fill-green-500" /> {project.impact}
                    </span>
                    <ArrowUpRight size={16} className="text-white/20 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>

              {/* NODE CIRCLE */}
              <div className="relative hidden lg:flex items-center justify-center w-12 z-20">
                 <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)]" />
                 <div className="absolute w-12 h-12 border border-cyan-500/20 rounded-full animate-ping" />
              </div>

              {/* EMPTY SPACE FOR ALTERNATING EFFECT */}
              <div className="lg:w-1/2 hidden lg:block" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER STATS */}
        <footer className="mt-64 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <div className="flex gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-12 h-1 bg-cyan-500/40" />
            ))}
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[1em]">SYSTEM_END_TRANS_VB</p>
        </footer>
      </div>
    </main>
  );
}