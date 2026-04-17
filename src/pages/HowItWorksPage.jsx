import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function HowItWorksPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] font-sans">
        
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 px-8 overflow-hidden bg-[#FAF7F2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.3)_0%,rgba(250,247,242,0)_70%)] pointer-events-none"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h1 className="text-6xl md:text-8xl font-serif leading-tight text-[#0B1628] tracking-tight">
              The Immersion <br/>
              <span className="text-[#C8942A] italic">Journey.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl font-light text-[#3D4F6B] leading-relaxed max-w-2xl mx-auto">
              From your first application to your final CEO-signed letter, every step is designed to mirror the reality of a global tech firm.
            </p>
          </motion.div>
        </section>

        {/* Section 1: The Selection */}
        <section className="py-32 px-8 bg-[#FAF7F2]">
          <div className="max-w-screen-xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-24"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-[#0B1628]">
                Phase 01: <br/>
                <span className="text-[#C8942A] italic">Selection</span>
              </h2>
              <div className="h-px bg-[#C8942A]/15 flex-grow mx-12 hidden md:block mb-4"></div>
              <p className="mt-4 md:mt-0 text-[#8A9AB5] font-sans tracking-widest uppercase text-sm">Gatekeeping excellence</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 lg:gap-24"
            >
              <motion.div variants={itemVariants} className="bg-white p-16 border border-[#C8942A]/15 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-[#C8942A] text-4xl">psychology</span>
                </div>
                <h3 className="text-3xl font-serif mb-6 text-[#0B1628]">The Mindset Check</h3>
                <p className="text-lg leading-relaxed text-[#3D4F6B] font-light">
                  A 30-minute interview focused on curiosity and problem-solving rather than rote coding. We look for the intellectual humility required to work in high-performance teams.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white p-16 border border-[#C8942A]/15 rounded-lg md:mt-24 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-[#C8942A] text-4xl">hub</span>
                </div>
                <h3 className="text-3xl font-serif mb-6 text-[#0B1628]">Industry Alignment</h3>
                <p className="text-lg leading-relaxed text-[#3D4F6B] font-light">
                  Matching your technical interests with our current active client projects. We ensure your trajectory aligns with the actual needs of the global tech landscape.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: The Integration */}
        <section className="py-32 px-8 bg-[#0B1628] text-white">
          <div className="max-w-screen-xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif mb-24"
            >
              Phase 02: <br/>
              <span className="text-[#C8942A] italic">Integration</span>
            </motion.h2>
            
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-12"
              >
                <div className="bg-[#132035] p-12 rounded-xl border border-[#C8942A]/10">
                  <p className="text-2xl font-serif leading-relaxed italic text-[#FAF7F2]">
                    "You don't get a student login. You get a company email, access to our GitHub organization, and a seat in our virtual office."
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-[#C8942A]"></div>
                  <p className="text-[#8A9AB5] tracking-widest uppercase text-xs">Day One Protocol</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3 relative"
              >
                <div className="bg-[#132035] rounded-xl overflow-hidden shadow-2xl p-4 border border-[#C8942A]/10 relative z-10">
                  <div className="flex gap-2 mb-4 px-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div class="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div class="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <img alt="Software dashboard interface" className="rounded-lg opacity-80 w-full object-cover h-[400px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu_GXRH1rujc9LskQ_blrF2ZU9GaGfCuifnqq5TL78reBtLgQkgE0KJJ04j_k5Jqn0a7FKRogjJxDBstgy41ANMZtrNUHVuDBt52pOkLBKXtvMFOAPiUaAFHUL3EMj21oGOolW7-Yg_vKTzmfB0jqvXyUKJLNBDEziG1Mm9btazcW8dM0mKoQPPr6G6ALgOeKwFL4uLYzJDcfPll0pngv7sy0zh2giZF3SwW6NlF5M_8WdU5Ns_1ZI-8le7xkAwVeJ0GbuuEDglkk"/>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C8942A]/10 blur-3xl rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: The Daily Grind */}
        <section className="py-32 px-8 bg-[#FAF7F2]">
          <div className="max-w-screen-xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-[#0B1628] mb-24 text-center"
            >
              Phase 03: <br/>
              <span className="text-[#C8942A] italic">Immersion</span>
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-px bg-[#C8942A]/15 rounded-2xl overflow-hidden border border-[#C8942A]/15 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {[
                { icon: 'groups', title: 'The Standup', time: '09:00 AM CST', desc: 'Morning syncs with senior architects to navigate blockers and align on the day\'s technical objectives. Precision in communication is paramount.' },
                { icon: 'terminal', title: 'The Sprint', time: 'Continuous Delivery', desc: 'Working on real, production-ready tickets within our internal ecosystem. You are responsible for delivery, not just completing an assignment.' },
                { icon: 'rate_review', title: 'The Review', time: 'Rigorous QA', desc: 'Getting your code critiqued by industry veterans. This is where high-quality engineering habits are forged through rigorous peer review.' }
              ].map((step, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-[#FAF7F2] p-12 md:p-16 flex flex-col justify-between group">
                  <div>
                    <div className="mb-12 inline-block">
                      <span className="material-symbols-outlined text-[#C8942A] text-4xl">{step.icon}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#0B1628] mb-6">{step.title}</h3>
                    <p className="text-[#3D4F6B] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-12 text-[#8A9AB5] text-xs font-medium tracking-widest uppercase group-hover:text-[#C8942A] transition-colors">{step.time}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 4: The Exit */}
        <section className="py-32 px-8 bg-[#0B1628] text-white overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl font-serif mb-12">
                  Phase 04: <br/>
                  <span className="text-[#C8942A] italic">Deployment</span>
                </h2>
                <div className="space-y-8 max-w-lg">
                  <p className="text-xl font-light text-[#8A9AB5] leading-relaxed">
                    Transition from a participant to a peer. Your journey concludes not with a certificate, but with tangible proof of industry contribution.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#C8942A]">check_circle</span>
                      <div>
                        <h4 className="font-medium text-[#FAF7F2]">Work Experience Letter</h4>
                        <p className="text-sm text-[#8A9AB5] mt-1">Formal documentation of your contribution to live production environments.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#C8942A]">check_circle</span>
                      <div>
                        <h4 className="font-medium text-[#FAF7F2]">LinkedIn Endorsement</h4>
                        <p className="text-sm text-[#8A9AB5] mt-1">Verified technical endorsement from industry leaders in your specific stack.</p>
                      </div>
                    </li>
                  </ul>
                  <Link to="/apply" className="mt-12 inline-block bg-[#C8942A] text-[#0B1628] px-10 py-4 rounded-full font-sans font-bold hover:scale-95 duration-200 transition-transform">
                    Start Your Journey
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-[#FAF7F2] p-12 md:p-20 shadow-[0px_40px_80px_rgba(0,0,0,0.5)] rounded-sm transform lg:rotate-3 relative z-10">
                  <div className="border-b border-[#C8942A]/20 pb-8 mb-8 flex justify-between items-center">
                    <div className="text-[#0B1628] font-serif font-bold text-xl italic">educivic.</div>
                    <div className="text-[#8A9AB5] text-[10px] tracking-widest uppercase">Official Certification</div>
                  </div>
                  <div className="space-y-6">
                    <div className="w-1/3 h-px bg-[#C8942A]"></div>
                    <h5 className="text-[#0B1628] font-serif text-3xl leading-snug">Verification of <br/><span className="italic text-[#C8942A]">Professional Practice</span></h5>
                    <div className="space-y-2 mt-8">
                      <div className="h-2 w-full bg-[#3D4F6B]/5 rounded-full"></div>
                      <div className="h-2 w-full bg-[#3D4F6B]/5 rounded-full"></div>
                      <div className="h-2 w-2/3 bg-[#3D4F6B]/5 rounded-full"></div>
                    </div>
                    <div className="pt-12 flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[10px] text-[#8A9AB5] uppercase tracking-wider">Date of Issue</p>
                        <p className="text-[#0B1628] font-serif italic text-lg">December 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="mb-2 font-serif text-[#0B1628] italic opacity-60">J. Henderson</div>
                        <p className="text-[10px] text-[#8A9AB5] uppercase tracking-wider">Chief Executive Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Ambient Shadow/Glow */}
                <div className="absolute inset-0 bg-[#C8942A]/5 blur-[100px] -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
