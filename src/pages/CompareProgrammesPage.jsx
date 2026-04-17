import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

export function CompareProgrammesPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
        
        {/* Section 1: Selection Header */}
        <section className="relative pt-32 pb-24 px-12 max-w-screen-xl mx-auto text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] pointer-events-none -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#0B1628] leading-tight tracking-tight">
              Choose your <br/> <span className="text-[#C8942A] italic">pathways.</span>
            </h1>
            <p className="mt-8 text-xl font-light text-[#3D4F6B] max-w-2xl mx-auto leading-relaxed">
              Select up to four immersion tracks to contrast our rigorous industrial methodology and projected outcomes.
            </p>
          </motion.div>

          {/* Selection Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {/* Checked items */}
            {['Full Stack', 'AI/ML', 'Cloud/DevOps'].map((track, i) => (
              <label key={i} className="group relative cursor-pointer">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="px-8 py-4 rounded-full border border-[#C8942A]/15 bg-white flex items-center gap-3 transition-all duration-300 peer-checked:bg-[#132035] peer-checked:border-[#C8942A] group-hover:scale-105">
                  <span className="material-symbols-outlined text-[#C8942A] peer-checked:text-[#FAF7F2]">check_circle</span>
                  <span className="text-sm font-medium tracking-wide text-[#8A9AB5] peer-checked:text-[#FAF7F2] uppercase">{track}</span>
                </div>
              </label>
            ))}
            {/* Unchecked items */}
            {['Cybersecurity', 'QA/SDET', 'Data Engineering'].map((track, i) => (
              <label key={`u${i}`} className="group relative cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <div className="px-8 py-4 rounded-full border border-[#C8942A]/15 bg-white/50 flex items-center gap-3 transition-all duration-300 peer-checked:bg-[#132035] peer-checked:border-[#C8942A] group-hover:scale-105">
                  <span className="material-symbols-outlined text-[#8A9AB5] peer-checked:text-[#FAF7F2]">add_circle</span>
                  <span className="text-sm font-medium tracking-wide text-[#8A9AB5] peer-checked:text-[#FAF7F2] uppercase">{track}</span>
                </div>
              </label>
            ))}
          </motion.div>
        </section>

    
        <section className="pb-32 px-12 max-w-screen-2xl mx-auto overflow-x-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-full lg:w-full bg-white rounded-2xl overflow-hidden shadow-2xl shadow-[#0B1628]/5 border border-[#C8942A]/15"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#132035] text-[#F5E6C2]">
                  <th className="p-10 w-1/4 font-serif text-3xl italic border-r border-[#C8942A]/10">The Comparison.</th>
                  <th className="p-10 w-1/4 border-r border-[#C8942A]/10">
                    <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#C8942A]/60 mb-2">Immersion I</div>
                    <div className="text-2xl font-serif">Full Stack Architecture</div>
                  </th>
                  <th className="p-10 w-1/4 border-r border-[#C8942A]/10">
                    <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#C8942A]/60 mb-2">Immersion II</div>
                    <div className="text-2xl font-serif">AI & Machine Learning</div>
                  </th>
                  <th className="p-10 w-1/4">
                    <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#C8942A]/60 mb-2">Immersion III</div>
                    <div className="text-2xl font-serif">Cloud & DevOps</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#3D4F6B]">
           
           
         
                <tr className="bg-white border-b border-[#C8942A]/15">
                  <td className="p-10 font-medium text-[#0B1628] border-r border-[#C8942A]/15">Duration</td>
                  <td className="p-10 border-r border-[#C8942A]/15 font-light">20 Weeks Intensive</td>
                  <td className="p-10 border-r border-[#C8942A]/15 font-light">24 Weeks Research-Led</td>
                  <td className="p-10 font-light">18 Weeks Systems-Led</td>
                </tr>
                {/* Industry Bench */}
                <tr className="bg-[#FAF7F2]/30 border-b border-[#C8942A]/15">
                  <td className="p-10 font-medium text-[#0B1628] border-r border-[#C8942A]/15">Industry Bench</td>
                  <td className="p-10 border-r border-[#C8942A]/15">
                    <div className="text-xl font-serif text-[#C8942A] italic">$120k — $160k</div>
                    <div className="text-xs uppercase mt-1 tracking-widest text-[#8A9AB5]">Senior Associate</div>
                  </td>
                  <td className="p-10 border-r border-[#C8942A]/15">
                    <div className="text-xl font-serif text-[#C8942A] italic">$145k — $190k</div>
                    <div className="text-xs uppercase mt-1 tracking-widest text-[#8A9AB5]">ML Architect</div>
                  </td>
                  <td className="p-10">
                    <div className="text-xl font-serif text-[#C8942A] italic">$135k — $175k</div>
                    <div className="text-xs uppercase mt-1 tracking-widest text-[#8A9AB5]">DevOps Lead</div>
                  </td>
                </tr>
                {/* Curriculum Highlights */}
                <tr className="bg-white border-b border-[#C8942A]/15">
                  <td className="p-10 font-medium text-[#0B1628] border-r border-[#C8942A]/15 align-top">Curriculum Highlights</td>
                  <td className="p-10 border-r border-[#C8942A]/15">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Distributed Systems</li>
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Real-time Networking</li>
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Design Systems at Scale</li>
                    </ul>
                  </td>
                  <td className="p-10 border-r border-[#C8942A]/15">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Neural Architectures</li>
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Predictive Modeling</li>
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Large Language Fine-tuning</li>
                    </ul>
                  </td>
                  <td className="p-10">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> CI/CD Excellence</li>
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Kubernetes Orchestration</li>
                      <li className="flex items-start gap-2"><span className="text-[#C8942A]">/</span> Site Reliability Strategy</li>
                    </ul>
                  </td>
                </tr>
                {/* Prerequisites */}
                <tr className="bg-[#FAF7F2]/30 border-b border-[#C8942A]/15">
                  <td className="p-10 font-medium text-[#0B1628] border-r border-[#C8942A]/15">Prerequisites</td>
                  <td className="p-10 border-r border-[#C8942A]/15 font-light italic">Logical Grit & Basic JS</td>
                  <td className="p-10 border-r border-[#C8942A]/15 font-light italic">Calculus & Python Familiarity</td>
                  <td className="p-10 font-light italic">Terminal Proficiency</td>
                </tr>
                {/* Primary Tech Stack */}
                <tr className="bg-white">
                  <td className="p-10 font-medium text-[#0B1628] border-r border-[#C8942A]/15 align-top">Primary Tech Stack</td>
                  <td className="p-10 border-r border-[#C8942A]/15">
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'PostgreSQL', 'Redis'].map(tech => (
                        <span key={tech} className="px-4 py-1.5 rounded-full text-xs bg-[#0B1628]/5 border border-[#0B1628]/10 text-[#0B1628] uppercase font-medium">{tech}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-10 border-r border-[#C8942A]/15">
                    <div className="flex flex-wrap gap-2">
                      {['PyTorch', 'TensorFlow', 'HuggingFace'].map(tech => (
                        <span key={tech} className="px-4 py-1.5 rounded-full text-xs bg-[#0B1628]/5 border border-[#0B1628]/10 text-[#0B1628] uppercase font-medium">{tech}</span>
                      ))}
                    </div>
                  </td>
                  <td className="p-10">
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Terraform', 'Docker'].map(tech => (
                        <span key={tech} className="px-4 py-1.5 rounded-full text-xs bg-[#0B1628]/5 border border-[#0B1628]/10 text-[#0B1628] uppercase font-medium">{tech}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-20 flex justify-center"
          >
            <Link to="/apply" className="bg-[#0B1628] text-white px-12 py-5 rounded-full text-lg font-medium shadow-xl shadow-[#0B1628]/10 hover:scale-105 transition-transform duration-300 group flex items-center gap-4">
              Lock in your selection
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </motion.div>
        </section>

        {/* Final Vision Section */}
        <section className="py-32 px-12 bg-[#132035] text-[#F5E6C2] overflow-hidden relative">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Your future is not a <span className="text-white">template.</span></h2>
              <p className="text-xl font-light text-white/70 leading-relaxed">
                At educivic, we reject the generic bootcamp model. Our curriculum is tailored by industry architects who demand precision, grit, and structural integrity.
              </p>
              <div className="pt-6">
                <Link to="/stories" className="inline-flex items-center gap-4 text-[#C8942A] border-b border-[#C8942A]/30 pb-2 hover:border-[#C8942A] transition-all">
                  View Alumni Career Outcomes
                  <span className="material-symbols-outlined">trending_up</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 relative group"
            >
              <div className="absolute inset-0 bg-[#C8942A]/20 mix-blend-overlay rounded-2xl"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHifmC9CjxIxNDg_GGnMGKvvgOuHMuVfZIkFfWf6vCtBQ_yWbEUr_j3DDI4JhYeLGnD6hkFbWdB1YgOep6wwursuHjVWjg6r7R9i2Y-cq8-QePCH7g9vqbOpbzLm3taFXT9b85fccq1vanoAcAxuwKr-7ggzqec9gMVvWiw2m_eTvJx1cVmvOw4Iy554n51TIUrB00uPA20awuNw-DRTwHgUQaDgy3hh8fLCAiB9sp1D8Cfcv7oXKVSCaEUILjKAkC0YEsHttkMP0" alt="Architectural student workplace" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/3] object-cover" />
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
