import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function EcosystemPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Section 1: Hero */}
        <header className="relative min-h-[819px] flex items-center justify-center py-32 px-12 overflow-hidden bg-[#FAF7F2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,230,194,0.25)_0%,rgba(250,247,242,0)_70%)] pointer-events-none"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-7xl md:text-8xl font-serif text-[#0B1628] leading-[1.1] tracking-tight">
              The architecture of <br/>
              <span className="text-[#C8942A] italic">opportunity.</span>
            </h1>
            <p className="mt-12 text-xl md:text-2xl font-light text-[#3D4F6B] max-w-2xl mx-auto leading-relaxed">
              A closed-loop ecosystem where industry expertise, ambitious talent, and technical mastery converge.
            </p>
            <div className="mt-16 flex justify-center">
              <div className="w-px h-24 bg-[#C8942A]/30"></div>
            </div>
          </div>
        </header>

        {/* Section 2: The Core Trinity */}
        <section className="bg-[#0B1628] py-32 px-12 text-[#FAF7F2]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-24"
            >
              <motion.h2 variants={itemVariants} className="text-5xl font-serif text-[#FAF7F2]">
                The Core <span className="text-[#C8942A] italic">Trinity.</span>
              </motion.h2>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                { icon: 'school', title: 'Scholars', text: 'The high-agency talent driving production-ready code. Hand-selected for grit, curiosity, and the capacity for extreme technical ownership.' },
                { icon: 'corporate_fare', title: 'Partners', text: 'Global tech firms and engineering teams providing the environment. Real problems, real stacks, and a commitment to nurturing the next tier of excellence.' },
                { icon: 'architecture', title: 'Mentors', text: 'Architect-level leads from 3Fi Tech providing the technical gravity. Guardians of quality who ensure every line of code meets industry rigor.' }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="group p-12 border border-[#C8942A]/15 rounded-xl hover:bg-white/5 transition-colors duration-500">
                  <div className="mb-8">
                    <span className="material-symbols-outlined text-4xl text-[#C8942A]">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
                  <p className="text-[#8A9AB5] font-light leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Visual Infographic/Process */}
        <section className="bg-[#FAF7F2] py-32 px-12 overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-serif text-[#0B1628]">How the <span className="text-[#C8942A] italic">loop</span> works.</h2>
            </div>
            
            <div className="relative">
              {/* Decorative Loop Line */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] border-2 border-[#C8942A]/10 rounded-full"></div>
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
              >
                {[
                  { icon: 'search_insights', title: 'Industry Need', text: 'We identify critical engineering gaps within our partner organizations.', extraClass: '' },
                  { icon: 'biotech', title: 'Scholar Immersion', text: 'Top-tier talent is embedded directly into real-world production cycles.', extraClass: 'lg:mt-16' },
                  { icon: 'verified', title: 'Mentorship Oversight', text: '3Fi Tech architects provide rigorous code reviews and architectural guidance.', extraClass: '' },
                  { icon: 'rocket_launch', title: 'Deployment & Value', text: 'High-quality code is deployed, creating immediate ROI for partners.', extraClass: 'lg:mt-16' }
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className={`flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl backdrop-blur-sm border border-[#C8942A]/5 ${item.extraClass}`}>
                    <div className="w-16 h-16 rounded-full bg-[#0B1628] flex items-center justify-center text-[#C8942A] mb-8 shadow-xl">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <h4 className="text-lg font-medium text-[#0B1628] mb-4">{item.title}</h4>
                    <p className="text-sm text-[#3D4F6B] font-light leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Impact Metrics */}
        <section className="bg-[#0B1628] py-32 px-12">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-[1440px] mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
              {[
                { val: '$20M+', label: 'Value Delivered' },
                { val: '500+', label: 'Industry Partners' },
                { val: '12', label: 'Average Experience of Mentors' }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <div className="text-7xl font-serif text-[#C8942A] mb-4">{item.val}</div>
                  <div className="text-[#8A9AB5] font-sans tracking-[0.2em] uppercase text-xs">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 5: Final CTA */}
        <section className="bg-[#FAF7F2] py-40 px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center border border-[#C8942A]/15 p-16 md:p-24 rounded-[32px] bg-white shadow-sm"
          >
            <h2 className="text-6xl font-serif text-[#0B1628] mb-12">Join the <span className="text-[#C8942A] italic">ecosystem.</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto bg-[#0B1628] text-white px-12 py-5 rounded-full font-medium text-lg hover:opacity-90 transition-all">Become a Partner</button>
              <button className="w-full md:w-auto border border-[#C8942A]/30 text-[#C8942A] px-12 py-5 rounded-full font-medium text-lg hover:bg-[#C8942A]/5 transition-all">Apply as Scholar</button>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
