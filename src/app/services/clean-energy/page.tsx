"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, Zap, Sun, Wind, Battery, Plug, Boxes, HardHat, ChevronRight, Cpu, Shield, Award, Truck, Settings, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Sun,
    title: "Renewable Energy Generation",
    desc: "Utility-scale, C&I, rooftop, and floating Solar PV combined with Conventional and NEOENRG VortexGen-5 bladeless wind turbines.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Battery,
    title: "Battery Energy Storage Systems (BESS)",
    desc: "LTO and LFP hybrid chemistry with GaN-based architecture. Scalable from 1 MWh to GWh. Ultra-fast < 100 ms grid response.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Plug,
    title: "Transformers & Power",
    desc: "Distribution transformers up to 33 kV, Power up to 220 kV (250 MVA), and SST-400 Solid-State Transformers featuring GaN.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Boxes,
    title: "SKID & Containerized",
    desc: "Pre-engineered, pre-tested, plug-and-play ISO containers (20'/40'). Cuts on-site EPC time by 40-60%.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Settings,
    title: "Balance of Plant (BOP)",
    desc: "End-to-end electrical & mechanical BOP including HV/MV/LV Switchgear, Cabling, Protection & Metering, SCADA.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "group-hover:border-teal-500/50",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: HardHat,
    title: "End-to-End EPC Services",
    desc: "Single point of accountability from Design and Procurement to Construction, Commissioning, and Operations.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50",
    span: "md:col-span-2 md:row-span-1",
  },
];

const valueProps = [
  { step: "01", title: "Deep-Tech IP", desc: "Direct access to NEOENRG's proprietary BESS, SST, and GaN power-electronics IP — not a re-badge of commodity gear." },
  { step: "02", title: "Certified Products", desc: "IEC + UL + UN38.3 certified hardware, bankable references, and documentation aligned to GCC and World Bank tender norms." },
  { step: "03", title: "Local UAE Presence", desc: "UAE Free Zone entity for contracting, invoicing, AED/USD settlement and regional logistics across MENA + South Asia." },
  { step: "04", title: "Full EPC Capability", desc: "Single-point accountability — design, supply, build, commission and operate — backed by a multi-country execution bench." },
  { step: "05", title: "CAPEX or OPEX", desc: "Flexible engagement — outright supply, equipment leasing, ESaaS, or full DBFOOT structures for sovereign and C&I clients." },
  { step: "06", title: "Sustainability First", desc: "Every project measured on lifecycle carbon — aligned with COP / Net-Zero commitments of our target governments." },
];

export default function CleanEnergyPage() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-24 pb-24 relative selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* NAV */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12 pt-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-medium tracking-wide">Back to Services</span>
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <div className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-between gap-16 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 font-mono text-xs font-bold mb-8 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Zap size={14} className="animate-pulse" />
              Deep-Tech Clean Energy
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
              Powering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient bg-[length:200%_auto]">Next Wave.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl font-light">
              Delivering next-generation clean energy solutions across MENA and South Asia. From <span className="text-white font-medium">GaN-based SSTs</span> to <span className="text-white font-medium">ultra-fast BESS</span> and fully integrated EPC services.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                Initiate Project
              </Link>
              <a href="#offerings" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-md transition-all">
                Explore Portfolio
              </a>
            </div>
          </motion.div>

          {/* Abstract 3D-like Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex-1 relative h-[500px] w-full hidden lg:block perspective-1000"
          >
            <div className="absolute inset-0 flex items-center justify-center transform-style-3d rotate-x-12 rotate-y-[-10deg]">
              {/* Outer Glow Ring */}
              <div className="absolute w-[450px] h-[450px] rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />
              {/* Middle dashed ring */}
              <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-indigo-500/30 animate-[spin_15s_linear_infinite_reverse]" />
              {/* Inner core */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-500/10 border border-blue-400/50 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.3)]">
                <Zap size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              </div>
              
              {/* Floating Data Panels */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl"
              >
                <div className="text-xs font-mono text-gray-400 mb-1">SYSTEM VOLTAGE</div>
                <div className="text-lg font-bold text-blue-400">220 kV</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl"
              >
                <div className="text-xs font-mono text-gray-400 mb-1">BESS CAPACITY</div>
                <div className="text-lg font-bold text-indigo-400">1.8 MWh [ONLINE]</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BENTO GRID OFFERINGS */}
        <section id="offerings" className="mb-40">
          <div className="mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">A Full-Stack <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Clean Energy Offering</span></h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute -right-20 -top-20 w-64 h-64 ${pillar.bg} blur-[100px] rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bg} border border-white/5 flex items-center justify-center mb-6 shadow-xl`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed relative z-10 font-light">{pillar.desc}</p>
                
                <div className={`absolute inset-0 border-2 border-transparent ${pillar.border} rounded-3xl transition-colors duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* RENEWABLE ENERGY GENERATION (SLIDE 6 REDESIGN) */}
        <section className="mb-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="text-yellow-500 font-mono text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-yellow-500/50"></span> Pillar 01
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Renewable Generation</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                  Hybrid microgrids and remote deployments powered by tier-1 solar and next-generation bladeless wind tech.
                </p>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-8">
              {/* SOLAR PV */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)] shrink-0">
                    <Sun className="w-12 h-12 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">SOLAR PV</h3>
                    <p className="text-yellow-500 font-mono text-sm tracking-wider mb-6">Utility-scale • C&I • Rooftop • Floating</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Tier-1 mono-PERC, TOPCon, HJT",
                        "Centralized & string inverters",
                        "1500 V DC for utility scale",
                        "Trackers & fixed-tilt configs",
                        "Floating PV solutions",
                        "Hybrid solar + storage"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1" />
                          <span className="text-gray-300 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WIND */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-6 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)] shrink-0">
                    <Wind className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">WIND</h3>
                    <p className="text-cyan-400 font-mono text-sm tracking-wider mb-6">Conventional + NEOENRG VortexGen-5</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        "Onshore & offshore packages",
                        "VortexGen-5 bladeless VIV",
                        "Low-noise, low-maintenance",
                        "Compact footprint for urban",
                        "Distributed wind for islands",
                        "Hybrid microgrids"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                          <span className="text-gray-300 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRANSFORMERS (SLIDE 9 REDESIGN) */}
        <section className="mb-40">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-blue-500 font-mono text-sm uppercase tracking-[0.2em] mb-4">
               Pillar 03
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Transformers & Power</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              From robust oil-immersed distribution transformers to cutting-edge GaN Solid-State interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Plug, title: "DISTRIBUTION", subtitle: "Up to 33 kV", color: "yellow",
                items: ["Oil-immersed & dry-type", "Pad & pole-mounted", "100 kVA – 5 MVA", "Ester-fluid / mineral oil", "Smart monitoring"]
              },
              {
                icon: Zap, title: "POWER", subtitle: "33 / 66 / 132 / 220 kV", color: "orange",
                items: ["Generator step-up (GSU)", "Auto-transformers", "5 MVA – 250 MVA", "OLTC with digital control", "IEC 60076 compliant"]
              },
              {
                icon: Cpu, title: "SST-400", subtitle: "Solid-State Transformer", color: "cyan",
                items: ["GaN power electronics", "Bi-directional flow", "Galvanic isolation", "60% size reduction", "Native DC + AC"]
              }
            ].map((block, i) => (
              <motion.div 
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] rounded-3xl opacity-90" />
                <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col">
                  {/* Glowing header */}
                  <div className={`w-16 h-16 rounded-2xl bg-${block.color}-500/10 border border-${block.color}-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--${block.color}),0.1)] group-hover:shadow-[0_0_50px_rgba(var(--${block.color}),0.2)] transition-shadow`}>
                    <block.icon className={`w-8 h-8 text-${block.color}-500`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{block.title}</h3>
                  <p className={`text-${block.color}-400 font-mono text-sm tracking-wider mb-8`}>{block.subtitle}</p>
                  
                  <div className="space-y-4 mt-auto">
                    {block.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <ChevronRight className={`w-4 h-4 text-${block.color}-500 shrink-0 mt-0.5`} />
                        <span className="text-gray-300 font-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ANIMATED SCROLL TIMELINE (VALUE PROPS) */}
        <section className="mb-40 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Why Partner with Us</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">A strategic blend of proprietary IP, certified hardware, and localized execution.</p>
          </div>

          <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
            {/* Scroll Progress Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 transform md:-translate-x-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top"
                style={{ scaleY }}
              />
            </div>

            {valueProps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between mb-16 md:mb-24 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-full bg-[#030712] border-4 border-white/10 transform -translate-x-1/2 flex items-center justify-center font-mono font-bold text-white z-10">
                  <span className="opacity-50">{step.step}</span>
                  {/* Highlight ring on hover/active could go here */}
                  <div className="absolute inset-0 rounded-full border border-blue-500 opacity-0 hover:opacity-100 hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Content */}
                <div className="w-full md:w-5/12 pl-24 md:pl-0 group">
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] group-hover:border-blue-500/30 transition-all duration-300">
                    <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPLIANCE & STANDARDS DOCK */}
        <section className="mb-20">
          <div className="relative p-1 rounded-[3rem] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 overflow-hidden group">
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-[3rem] opacity-90 m-[1px]" />
            <div className="relative rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-xl">
              
              <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4">
                  <CheckCircle2 size={14} className="text-green-400" /> Global Compliance
                </div>
                <h3 className="text-4xl font-black mb-4">Tender-Ready</h3>
                <p className="text-gray-400 font-light">Certified hardware aligned to GCC and World Bank tender norms.</p>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "IEC", label: "RATED", desc: "61427, 62619, 60076", color: "blue", icon: Award },
                  { title: "UL", label: "LISTED", desc: "1973, 9540, 1741", color: "indigo", icon: Shield },
                  { title: "UN", label: "38.3", desc: "Transport Safety", color: "green", icon: Truck }
                ].map((cert) => (
                  <div key={cert.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <cert.icon className={`w-10 h-10 text-${cert.color}-400 mb-4`} />
                    <div className="text-3xl font-black mb-1">{cert.title}</div>
                    <div className={`text-${cert.color}-400 font-mono text-xs uppercase tracking-[0.2em] mb-3`}>{cert.label}</div>
                    <div className="text-gray-400 text-xs font-light">{cert.desc}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
