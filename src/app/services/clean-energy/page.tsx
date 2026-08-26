"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, Sun, Wind, Battery, Cable, ShieldCheck, Factory, Box, Leaf, TrendingUp, Settings, Activity, Building, LayoutGrid, Plug, Boxes, HardHat, ChevronRight, Cpu } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Sun,
    title: "Renewable Energy Generation",
    desc: "Utility-scale, C&I, rooftop, and floating Solar PV combined with Conventional and NEOENRG VortexGen-5 bladeless wind turbines. Designed for hybrid microgrids and remote deployments.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    icon: Battery,
    title: "Battery Energy Storage Systems (BESS)",
    desc: "LTO and LFP hybrid chemistry with GaN-based architecture. Scalable from 1 MWh to GWh. Ultra-fast < 100 ms grid response for frequency regulation, peak shaving, and renewable-firming.",
    color: "text-orange-400",
    bg: "bg-indigo-500/10",
    border: "group-hover:border-indigo-500/50",
  },
  {
    icon: Plug,
    title: "Transformers & Power Conversion",
    desc: "Distribution transformers up to 33 kV, Power transformers up to 220 kV (250 MVA), and SST-400 Solid-State Transformers featuring GaN power electronics and 60% size/weight reduction.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
  },
  {
    icon: Boxes,
    title: "SKID & Containerized Solutions",
    desc: "Pre-engineered, pre-tested, plug-and-play ISO containers (20'/40'). Cuts on-site EPC time by 40-60%. Available for BESS, PV, Hybrid, Microgrids, and EV-charging hubs.",
    color: "text-red-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    icon: Settings,
    title: "Balance of Plant (BOP) Supply",
    desc: "End-to-end electrical & mechanical BOP including HV/MV/LV Switchgear, Cabling, Protection & Metering, SCADA & Controls, Auxiliary Power, and Civil structures.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "group-hover:border-teal-500/50",
  },
  {
    icon: HardHat,
    title: "End-to-End EPC Services",
    desc: "Single point of accountability from Design and Procurement to Construction, Commissioning, and Operations. Backed by performance and availability guarantees.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50",
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
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-500 font-mono text-sm mb-6 uppercase tracking-wider">
              <Zap size={16} /> Deep-Tech Clean Energy
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              Powering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Next Wave.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              Delivering deep-tech clean energy solutions across MENA and South Asia. From GaN-based Solid-State Transformers to ultra-fast BESS and fully integrated EPC services.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-600 text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                Initiate Project
              </Link>
              <a href="#offerings" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Explore Portfolio
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-indigo-500/30 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center text-blue-500">
                  <Zap size={64} className="opacity-80" />
                </div>
              </div>
              <div className="mt-8 font-mono text-blue-400/80 text-sm text-center">
                <p>SYSTEM VOLTAGE: 220 kV</p>
                <p>BESS CAPACITY: 1.8 MWh (ONLINE)</p>
                <p className="text-white mt-2">GRID SYNCHRONIZATION [ACTIVE]</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CORE OFFERINGS BENTO GRID */}
        <section id="offerings" className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">A Full-Stack <br /><span className="text-gray-500">Clean Energy Offering</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 ${pillar.border} hover:shadow-[0_0_40px_rgba(245,158,11,0.05)] relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 ${pillar.bg} blur-[80px] rounded-full -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-1">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SLIDE 6: RENEWABLE ENERGY GENERATION */}
        <section className="mb-32">
          <div className="mb-12">
            {/* <p className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Pillar 01</p> */}
            <h2 className="text-4xl md:text-5xl font-bold">Renewable Energy Generation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Solar PV Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 border-t-4 border-t-yellow-500 p-8 lg:p-12 rounded-2xl hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-6 mb-8">
                <Sun className="w-16 h-16 text-yellow-500" />
                <h3 className="text-4xl font-bold">SOLAR PV</h3>
              </div>
              <p className="text-yellow-500 italic mb-10 text-lg">Utility-scale, C&I, rooftop, floating</p>
              <ul className="space-y-4">
                {[
                  "Tier-1 mono-PERC, TOPCon, HJT modules",
                  "Centralized & string inverter solutions",
                  "1500 V DC systems for utility scale",
                  "Trackers, fixed-tilt, BIPV configurations",
                  "Floating PV solutions for water bodies",
                  "Hybrid solar + storage + diesel offsets"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Wind Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 border-t-4 border-t-cyan-400 p-8 lg:p-12 rounded-2xl hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-6 mb-8">
                <Wind className="w-16 h-16 text-cyan-400" />
                <h3 className="text-4xl font-bold">WIND</h3>
              </div>
              <p className="text-cyan-400 italic mb-10 text-lg">Conventional + NEOENRG VortexGen-5</p>
              <ul className="space-y-4">
                {[
                  "Onshore & offshore turbine packages",
                  "VortexGen-5 bladeless VIV turbines",
                  "Low-noise, low-maintenance designs",
                  "Compact footprint for rooftop / urban",
                  "Distributed wind for islands & remote",
                  "Hybrid wind-solar-BESS microgrids"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 9: TRANSFORMERS & POWER CONVERSION */}
        <section className="mb-32">
          <div className="mb-12">
            {/* <p className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Pillar 03</p> */}
            <h2 className="text-4xl md:text-5xl font-bold">Transformers & Power Conversion</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Distribution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 border-t-4 border-t-yellow-500 p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <Plug className="w-12 h-12 text-yellow-500" />
                <h3 className="text-2xl font-bold">DISTRIBUTION</h3>
              </div>
              <p className="text-yellow-500 italic mb-8 text-sm">Up to 33 kV</p>
              <ul className="space-y-4 mt-auto">
                {[
                  "Oil-immersed & dry-type",
                  "Pad-mounted & pole-mounted",
                  "100 kVA – 5 MVA range",
                  "Ester-fluid / mineral oil",
                  "Smart monitoring options"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Power */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 border-t-4 border-t-yellow-500 p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-12 h-12 text-yellow-500 fill-yellow-500" />
                <h3 className="text-2xl font-bold">POWER</h3>
              </div>
              <p className="text-yellow-500 italic mb-8 text-sm">33 / 66 / 132 / 220 kV</p>
              <ul className="space-y-4 mt-auto">
                {[
                  "Generator step-up (GSU)",
                  "Auto-transformers",
                  "5 MVA – 250 MVA range",
                  "OLTC with digital control",
                  "IEC 60076 compliant"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SST-400 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 border-t-4 border-t-cyan-400 p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="w-12 h-12 text-cyan-400 fill-cyan-400/20" />
                <h3 className="text-2xl font-bold">SST-400</h3>
              </div>
              <p className="text-cyan-400 italic mb-8 text-sm">Solid-State Transformer</p>
              <ul className="space-y-4 mt-auto">
                {[
                  "GaN power electronics",
                  "Bi-directional power flow",
                  "Galvanic isolation + control",
                  "60% size / weight reduction",
                  "Native DC + AC interfaces"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* VALUE PROPOSITION - VERTICAL TIMELINE */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Partner with Quantum Vortexa</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A strategic blend of proprietary IP, certified bankable hardware, and localized execution capabilities.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent transform md:-translate-x-1/2" />

            {valueProps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-center justify-between mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-black border-4 border-blue-500 transform -translate-x-1/2 flex items-center justify-center font-mono font-bold text-blue-500 z-10 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  {step.step}
                </div>
                <div className="w-full md:w-5/12 pl-20 md:pl-0">
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                    <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPLIANCE & STANDARDS STRIP */}
        <section className="mb-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-y border-blue-500/20 py-16 px-6 relative overflow-hidden rounded-[3rem]">
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-3xl font-bold text-white">Certifications & Standards</h3>
            <p className="text-gray-400 mt-2">Tender-ready for utilities, regulators and EPC primes across MENA and South Asia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10 max-w-4xl mx-auto">
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-blue-500 mb-2">IEC</div>
              <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">RATED</div>
              <div className="text-gray-400 text-xs">IEC 61427, 62619, 62620, 62933, 60076, 62271</div>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-blue-500 mb-2">UL</div>
              <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">LISTED</div>
              <div className="text-gray-400 text-xs">UL 1973, UL 9540, UL 1741</div>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-5xl font-black text-green-500 mb-2">UN</div>
              <div className="text-white font-mono text-sm uppercase tracking-wider mb-2">38.3</div>
              <div className="text-gray-400 text-xs">Transport Safety (SCU LFP)</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

