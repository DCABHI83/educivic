import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

export function IndustryNeedPage() {
  return (
    <PageTransition>
      <div className="bg-[#0B1628] min-h-screen pt-24 pb-12 px-4 md:px-8 font-sans flex items-center justify-center">
        {/* Container */}
        <div className="relative w-full max-w-6xl bg-[#FAF7F2] rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          {/* Left Content: Hero & Narrative */}
          <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-[#C8942A]/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="mb-12">
                <span className="text-[#C8942A] font-sans text-xs tracking-widest uppercase mb-4 block">Phase I: Discovery</span>
                <h1 className="font-serif text-5xl md:text-6xl text-[#0B1628] leading-[1.1] mb-8">
                  The Genesis of <br/>
                  <span className="italic text-[#C8942A]">Industry Need</span>
                </h1>
                <p className="font-sans font-light text-lg text-[#3D4F6B] leading-relaxed tracking-wide">
                  We don't guess curriculum. We don't follow academic trends. We observe real-world engineering bottlenecks at the source, transforming corporate friction into educational fuel.
                </p>
              </div>

              {/* Technical Snippet / Quote */}
              <div className="p-8 bg-white/50 border border-[#C8942A]/15 rounded-lg italic text-[#3D4F6B] relative">
                <span className="absolute -top-3 -left-3 text-5xl text-[#C8942A] font-serif opacity-50">"</span>
                Standard education produces graduates for a market that existed three years ago. We build for the market that is breaking today.
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 relative z-10"
            >
              <button className="bg-[#0B1628] text-white p-4 rounded-xl font-medium text-sm hover:opacity-90 transition-all flex items-center gap-3 w-full md:w-auto justify-center">
                Continue Journey
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </motion.div>
          </div>

          {/* Right Content: Evidence & Visuals */}
          <div className="w-full md:w-7/12 p-8 md:p-16 bg-[#F6F3EE] flex flex-col gap-12 overflow-y-auto max-h-[800px]">
            
            {/* Section 1: Identifying Gaps */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-[#C8942A]"></span>
                <h3 className="font-serif text-3xl text-[#0B1628]">Identifying Gaps</h3>
              </div>
              <div className="bg-white p-8 rounded-xl border border-[#C8942A]/15 relative overflow-hidden">
                <p className="text-sm text-[#8A9AB5] uppercase tracking-widest mb-6 font-medium">Enterprise Heatmap: Friction vs. Scarcity</p>
                <div className="grid grid-cols-4 gap-2 h-64 relative">
                  <div className="bg-[#FAF7F2] rounded flex items-end p-2 relative group">
                    <div className="w-full bg-[#C8942A]/20 h-1/4 rounded-sm transition-all group-hover:h-1/2"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-[#8A9AB5] font-medium uppercase rotate-90">Backend</span>
                  </div>
                  <div className="bg-[#FAF7F2] rounded flex items-end p-2 relative group">
                    <div className="w-full bg-[#C8942A]/60 h-3/4 rounded-sm transition-all group-hover:h-full"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-[#8A9AB5] font-medium uppercase rotate-90">AI Ops</span>
                  </div>
                  <div className="bg-[#FAF7F2] rounded flex items-end p-2 relative group">
                    <div className="w-full bg-[#0B1628] h-[95%] rounded-sm transition-all"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white/40 font-medium uppercase rotate-90">Cloud Arch</span>
                  </div>
                  <div className="bg-[#FAF7F2] rounded flex items-end p-2 relative group">
                    <div className="w-full bg-[#C8942A]/40 h-2/4 rounded-sm transition-all group-hover:h-3/4"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-[#8A9AB5] font-medium uppercase rotate-90">Frontend</span>
                  </div>
                  <div className="absolute -right-4 top-0 h-full flex flex-col justify-between py-2">
                    <span className="text-[10px] font-bold text-[#0B1628]">CRITICAL</span>
                    <span className="text-[10px] font-bold text-[#8A9AB5]">NOMINAL</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-xs text-[#3D4F6B] leading-relaxed max-w-xs">
                    <strong className="text-[#0B1628]">Finding:</strong> 64% of enterprise cloud migrations fail due to "Integrative Thinking" gaps rather than raw syntax knowledge.
                  </p>
                  <span className="material-symbols-outlined text-[#C8942A] text-4xl opacity-20">insights</span>
                </div>
              </div>
            </motion.section>

            {/* Section 2: The Architect's Audit */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-[#C8942A]"></span>
                <h3 className="font-serif text-3xl text-[#0B1628]">The Architect's Audit</h3>
              </div>
              <div className="bg-[#0B1628] text-[#8A9AB5] p-8 rounded-xl shadow-xl font-mono text-sm leading-relaxed overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="material-symbols-outlined text-white/10 text-6xl">verified_user</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                </div>
                <p className="text-white/40 mb-4 tracking-tighter">// AUDIT LOG: Q3 ENTERPRISE DEPLOYMENT</p>
                <p className="mb-2"><span className="text-[#C8942A]">STATUS:</span> <span className="text-red-400">Inefficient Pipeline</span></p>
                <p className="mb-2"><span className="text-[#C8942A]">GAP_ID:</span> 0x884 - AI Deployment Rigidity</p>
                <p className="mb-6"><span className="text-[#C8942A]">OBSERVATION:</span> Senior talent understands models, but "The Last Mile" of deployment causes 4-month delays in Fortune 500 tech stacks.</p>
                <div className="h-[1px] w-full bg-white/10 mb-6"></div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span>Full-Stack Sovereignty:</span> <span className="text-white">LOW</span></div>
                  <div className="flex justify-between"><span>Real-time Adaptability:</span> <span className="text-white">CRITICAL</span></div>
                </div>
              </div>
            </motion.section>

            {/* Section 3: The Bridge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-[#C8942A]"></span>
                <h3 className="font-serif text-3xl text-[#0B1628]">The Bridge</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-[#C8942A]/15">
                  <h4 className="font-bold text-[#0B1628] mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#C8942A]">settings_input_component</span>
                    Raw Data
                  </h4>
                  <p className="text-sm text-[#3D4F6B] font-light">
                    Corporate friction points, architectural bottlenecks, and project delay analytics.
                  </p>
                </div>
                <div className="p-6 bg-[#C8942A]/5 rounded-lg border border-[#C8942A]/20">
                  <h4 className="font-bold text-[#C8942A] mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined">bolt</span>
                    Sprint Design
                  </h4>
                  <p className="text-sm text-[#3D4F6B] font-light">
                    Direct translation of "Gaps" into intensive, project-based immersion sprints.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Sub-footer */}
            <div className="mt-8 pt-8 border-t border-[#C8942A]/10 text-center md:text-left">
              <p className="font-serif italic text-[#8A9AB5] text-xl">
                educivic. — Not education. <span className="text-[#0B1628] not-italic font-sans font-bold uppercase tracking-widest text-xs ml-2">Employment.</span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
