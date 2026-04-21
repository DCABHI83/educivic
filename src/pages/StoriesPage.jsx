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

export function StoriesPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] font-sans">
        
        {/* Section 1: Hero */}
        <section className="relative min-h-[819px] flex items-center justify-center py-32 overflow-hidden bg-[#FAF7F2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] pointer-events-none"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-8 relative z-10 text-center max-w-5xl"
          >
            <h1 className="text-7xl md:text-8xl text-[#0B1628] font-serif leading-tight mb-8">
              The <span className="text-[#C8942A] italic">Human</span> Impact
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#3D4F6B] max-w-2xl mx-auto font-sans font-light">
              Beyond the metrics of academia lies the weight of real contribution. Where raw talent meets the precise, urgent <span className="text-[#C8942A] italic">needs</span> of industry leaders.
            </p>
            <motion.div 
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5, ease: 'easeInOut' }}
              className="mt-12"
            >
              <span className="material-symbols-outlined text-[#C8942A] text-4xl">expand_more</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 2: Impact Gallery */}
        <section className="py-32 bg-[#FAF7F2]">
          <div className="container mx-auto px-8 max-w-7xl">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-12"
            >
              {[
                {
                  quote: "Educivic didn't just teach me code; they taught me how to lead a vision into reality.",
                  name: "Elena Rodriguez",
                  role: "Lead Architect",
                  imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7kP8fYZitrLkCGbxtW7m4fmGFBIJufPU-n3NmSHE4K7K1MReac5aLWnHiz-D1Yo7PQaixlQ-pjH5tUu_tqlcTPEhXqCgp6dhFLMT6gSQQfQtsqkeKYY0pCopwYtMNasTFOOgoNCYwInq3ymuAoENrdS6NFCsDty50rha61BTMcyei6Y75lWRMQ4ceXdi3USNbM_Qg1iDzrYXgLi1CZ0Bn51rX2cOOyQeJKjpfLHru4iVdXrm5xNFunt9Uaryr7PRzAGs7ZggeK4",
                  companyLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR-JmRKCrbQV7OlCS3Dl6-eaFR1p8QzAROCqWrXk0Ot419i8Vg1z6oL27J5RLL9pMKhnIHFaf9b7tCUS3Wja5gt8hBcAKX5q7r2qP_u4jKvcr3Lv3kKYcPnP1n3emsRediFIV6La5aed7hf_wN6WtVu0Ztci7heDacMXYg9poluKK2OQNV-0h7meQN6YBLzq9Vh43IM-kU7eYn4PDGphIK3Pk5K4at8Ri-dbpzKQEittKMPq2VENxqcgd_l6J8DzTT4JvmSRy54MI",
                  beforeText: "Theoretical Knowledge",
                  afterText: "Lead Product Architect",
                  extraClasses: ""
                },
                {
                  quote: "The immersion was intense. It was the pivot my career needed for the next decade.",
                  name: "Marcus Chen",
                  role: "Senior Analyst",
                  imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGUIey9YKQK94OvddZLiI0RZRHTTWY2v3Kw-nP5vDWST08gfGRif9eZZ--JSh-xe2loPz-tj1wbdFf4_KSg1tGAuHg9PwWOB5ZxoAB6GygfFFDDVGWNoMjg5H_C-VE6mY1--f6EMK5FaoDF8UH2XhEokAJMmgPN5p5TPdQndBjS6lcKzCGjEvr8mrcbFDQS_YkyiEM9wrni0bj34lGk86sYuuAd4VMp-I1b0YwAncAdVRQfTnDN1lyRVlgjJlmbCoDwOdqvKCF3H4",
                  companyLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6PXrGT33wGd25NaYtL5kV72sPzNgCdJZQ40flCkV29aeci_LsRlkDwnRdmEGtulug6_xvZbP6VaRjBNF0p_l42Qz1WGtyeydpuNhuPj0WSTMJMwC04ygP9yZLpiuTHLpjXTjf8VcufMjD6cDK1Zp67cbXg-uGqUJlD0ymAePvpkn2X88H5ywkwsIyzCPv3Ulxfv8OKiS589X1JdjSBVkyMewViuT6VCjMHWd2XDbfCFV3Dwm-tQoL8XcuESs9Bi7HGyM2_KgaJAg",
                  beforeText: "Data Enthusiast",
                  afterText: "Lead Financial Strategist",
                  extraClasses: "mt-12 lg:mt-24"
                },
                {
                  quote: "Validation came from the outcome, not just the certificate. Employment followed instantly.",
                  name: "Sasha Vane",
                  role: "VP Operations",
                  imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZwi-4xUW8I0IiK8-b6KohXilqLt1-or8DdG_6HVHRDljiwI-bEWwsxc0j_xtyF0d0Gony4cOiP3qGvcFpakE5oF02-3yUkjKue6VWNu9Om684zIEyN1i3LwLokERlRtn0rkFpYV8AeQFZrNaUaNuDzyBMILQqs4B2U5WWHuvfKbItEGSSb4fUOXoDu5IGunOHUZP9dLYp-RsICn2bXNXB0o_8xzn-yees8wY87IFIUgAs4UgzbsZqNRaonTZmY6C0LSCc79hrulE",
                  companyText: "FalconFi",
                  beforeText: "Graduate Student",
                  afterText: "VP of Strategy & Ops",
                  extraClasses: ""
                }
              ].map((scholar, idx) => (
                <motion.div key={idx} variants={itemVariants} className={`bg-white p-12 border border-[#C8942A]/15 flex flex-col h-full group rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 ${scholar.extraClasses}`}>
                  <div className="relative mb-10 overflow-hidden rounded-lg aspect-[4/5]">
                    <img src={scholar.imgSrc} alt={scholar.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <blockquote 
                    className="text-3xl font-serif leading-tight mb-8 text-[#0B1628] italic"
                    dangerouslySetInnerHTML={{ __html: `"${scholar.quote.replace('pivot', '<span class="text-[#C8942A]">pivot</span>').replace('outcome', '<span class="text-[#C8942A]">outcome</span>').replace('Educivic', '<span class="text-[#C8942A]">Educivic</span>')}"` }}
                  ></blockquote>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#C8942A]/10">
                    <div>
                      <p className="font-sans font-medium text-[#0B1628]">{scholar.name}</p>
                      <p className="text-sm text-[#8A9AB5] uppercase tracking-widest mt-1">{scholar.role}</p>
                    </div>
                    {scholar.companyLogo ? (
                      <div className="h-6 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={scholar.companyLogo} alt="Company logo" className="h-full" />
                      </div>
                    ) : (
                      <div className="h-6 opacity-60 grayscale group-hover:grayscale-0 transition-all text-xl font-bold font-serif italic text-[#0B1628] duration-500">{scholar.companyText}</div>
                    )}
                  </div>
                  <div className="mt-8 space-y-2">
                    <p className="text-sm font-medium text-[#C8942A]">BEFORE / AFTER</p>
                    <p className="text-[#0B1628] font-sans flex flex-wrap gap-2 items-center">
                      {scholar.beforeText} 
                      <span className="material-symbols-outlined align-middle text-xs text-[#C8942A]">arrow_forward</span> 
                      {scholar.afterText}
                    </p>
                  </div>
                  <Link to="/stories/julian-thorne" className="mt-10 inline-flex items-center text-[#C8942A] font-sans font-medium group/link">
                    Read Case Study
                    <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-2">arrow_right_alt</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Featured Case Study (Dark) */}
        <section className="py-40 bg-[#0B1628] text-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden border-[16px] border-[#132035] shadow-2xl">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5JEqWsvTETMDJUNlRJteX9W2kRU1n5SNbTQRtrZblzGkG4cNDsRaWLtRTJhw7aKeRMjqFORLrLmCal2ZaKb23F_R4AFxQjTWGOraK1cZVTUHW6KP9GyVL7ZM0x53mXmRuDWbxsEsLTDC8E4nW11PfNySeI-Ce9t4nzqoBqjk0q0NGtox1OEv-E7y7t7uz03bs3SOn7lzEnNevfOeXm4BRWODOpetD0I3FhImi4SAaXyMePHrSzdSQgIRu7yJjt_vmz4zeN3DYKlU" alt="Julian Thorne Case Study" className="w-full h-auto" />
                </div>
                <div className="mt-12 max-w-lg">
                  <h3 className="text-4xl md:text-5xl font-serif italic text-[#C8942A] leading-tight mb-4">
                    "The sprint forced me to think at the speed of global business."
                  </h3>
                  <p className="font-sans text-lg opacity-70">— Julian Thorne, FalconFi Partner</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:w-1/2"
              >
                <div className="space-y-16">
                  {[
                    { subtitle: "01. THE PROBLEM", title: "The Industry Gap", text: "Julian possessed the technical foundations but lacked the operational high-stakes experience required for FalconFi's rapid expansion. The gap wasn't skill; it was <span class='italic'>immersion</span>." },
                    { subtitle: "02. THE IMMERSION", title: "The 12-Week Sprint", text: "Placed within the core infrastructure team, Julian solved real-time scalability issues while mentored by FalconFi's CTO. No simulations. Just real responsibility." }
                  ].map((step, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <span className="text-[#C8942A] text-sm tracking-[0.2em] font-sans font-medium block mb-4">{step.subtitle}</span>
                      <h4 className="text-3xl font-serif mb-6">{step.title}</h4>
                      <p className="text-lg opacity-70 leading-relaxed max-w-xl font-light" dangerouslySetInnerHTML={{ __html: step.text }}></p>
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants} className="p-8 bg-[#132035] rounded-xl border border-[#C8942A]/10">
                    <span className="text-[#C8942A] text-sm tracking-[0.2em] font-sans font-medium block mb-4">VERIFICATION OF PROFESSIONAL PRACTICE</span>
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-32 bg-white flex items-center justify-center rounded p-2 overflow-hidden flex-shrink-0">
                        <div className="w-full h-full border border-gray-200 p-2 text-[4px] text-gray-400 overflow-hidden font-serif">
                          <div className="font-bold text-[6px] mb-2 text-black">educivic.</div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          <div className="mt-4 border-t border-gray-200 pt-2 flex justify-between">
                            <div className="italic text-[5px] text-black">Signed: CEO</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xl font-serif mb-2 text-white">Tangible Credential</h5>
                        <p className="text-sm opacity-60 font-light">Every hour of Julian's immersion was verified and signed by the hiring CEO, creating a definitive record of performance.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <span className="text-[#C8942A] text-sm tracking-[0.2em] font-sans font-medium block mb-4">03. THE RESULT</span>
                    <h4 className="text-3xl font-serif mb-6">The Employment</h4>
                    <p className="text-lg opacity-70 leading-relaxed max-w-xl font-light">
                      Julian was offered a full-time Partnership role at FalconFi 3 weeks before the sprint concluded. Performance made the interview redundant.
                    </p>
                    
                    <Link to="/stories/julian-thorne" className="mt-8 inline-flex items-center gap-3 bg-white text-[#0B1628] px-8 py-3 rounded-full font-medium hover:bg-[#C8942A] hover:text-white transition-colors duration-300">
                      Full Case Study
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: The Verification Badge */}
        <section className="py-40 bg-[#FAF7F2]">
          <div className="container mx-auto px-8 text-center max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif text-[#0B1628] mb-20"
            >
              The <span className="text-[#C8942A] italic">Verification</span>
            </motion.h2>

            <motion.div 
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                { icon: 'verified', title: 'Executive Signed', text: 'Verification letter signed by the Managing Director at <span class="font-medium">FalconFi</span> for operational excellence.', shift: '' },
                { icon: 'approval_delegation', title: 'Global Standard', text: 'Certification of professional practice recognized by over <span class="font-medium">400+ industry partners</span> worldwide.', shift: 'md:-mt-12' },
                { icon: 'history_edu', title: 'Performance Audit', text: 'A comprehensive audit of technical and leadership contributions during the immersion period.', shift: '' }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className={`bg-white p-12 border border-[#C8942A]/15 shadow-sm rounded-xl flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ${item.shift}`}>
                  <div className="w-20 h-20 rounded-full bg-[#FAF7F2] flex items-center justify-center mb-8 border border-[#C8942A]/10">
                    <span className="material-symbols-outlined text-[#C8942A] text-4xl">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-sans font-medium text-[#0B1628] mb-4 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-[#3D4F6B] opacity-80 font-sans mb-8 leading-relaxed font-light text-center" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  <div className="w-full h-px bg-[#C8942A]/20 mb-8 mt-auto"></div>
                  <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C8942A]">Verified Experience</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
