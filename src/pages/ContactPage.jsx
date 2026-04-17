import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { TiltCard } from '../components/TiltCard';

export function ContactPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] font-sans">
        
        {/* Banner Section */}
        <section className="relative pt-32 pb-16 md:pt-40 px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] pointer-events-none -z-10"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl tracking-tight font-serif text-[#0B1628] mb-6"
          >
            Get in <span className="text-[#C8942A] italic">Touch.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-[#3D4F6B] font-light leading-relaxed"
          >
            Whether you have questions about the immersion track or are seeking to hire our graduates, we are here to assist. Connect with the Dean of admissions.
          </motion.p>
        </section>

        {/* Form and Contact Info Section */}
        <section className="py-16 md:py-24 px-8">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Form */}
            <TiltCard 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 md:p-14 border border-[#C8942A]/15 rounded-2xl shadow-[0px_20px_40px_rgba(11,22,40,0.04)]"
            >
              <h2 className="text-3xl font-serif text-[#0B1628] mb-8" style={{ transform: "translateZ(30px)" }}>Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()} style={{ transform: "translateZ(20px)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0B1628] uppercase tracking-widest block">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#FAF7F2] border border-[#C8942A]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C8942A] focus:ring-1 focus:ring-[#C8942A] transition-colors"
                      placeholder="e.g. John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0B1628] uppercase tracking-widest block">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#FAF7F2] border border-[#C8942A]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C8942A] focus:ring-1 focus:ring-[#C8942A] transition-colors"
                      placeholder="e.g. Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1628] uppercase tracking-widest block">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#FAF7F2] border border-[#C8942A]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C8942A] focus:ring-1 focus:ring-[#C8942A] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1628] uppercase tracking-widest block">Subject</label>
                  <select className="w-full bg-[#FAF7F2] border border-[#C8942A]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C8942A] focus:ring-1 focus:ring-[#C8942A] transition-colors appearance-none">
                    <option>Admissions Inquiry</option>
                    <option>Hiring Partner Interest</option>
                    <option>General Support</option>
                    <option>Media Query</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0B1628] uppercase tracking-widest block">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full bg-[#FAF7F2] border border-[#C8942A]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C8942A] focus:ring-1 focus:ring-[#C8942A] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0B1628] text-white py-4 rounded-lg font-medium tracking-wide hover:bg-opacity-90 transition-all active:scale-[0.98] shadow-lg mt-4"
                  style={{ transform: "translateZ(30px)" }}
                >
                  Submit Inquiry
                </button>
              </form>
            </TiltCard>

            {/* Contact Details */}
            <TiltCard 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-12"
            >
              <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
                <span className="material-symbols-outlined text-[#C8942A] text-4xl mb-2">account_balance</span>
                <h3 className="text-2xl font-serif text-[#0B1628]">Global Headquarters</h3>
                <div className="text-[#3D4F6B] font-light leading-relaxed space-y-1">
                  <p>3Fi Tech Ventures Hub</p>
                  <p>Silicon Innovation Sector</p>
                  <p>Dubai, UAE</p>
                </div>
              </div>

              <div className="space-y-4" style={{ transform: "translateZ(30px)" }}>
                <span className="material-symbols-outlined text-[#C8942A] text-4xl mb-2">mail</span>
                <h3 className="text-2xl font-serif text-[#0B1628]">Direct Contact</h3>
                <div className="text-[#3D4F6B] font-light leading-relaxed space-y-1 block">
                  <a href="mailto:admissions@educivic.com" className="hover:text-[#C8942A] transition-colors block">admissions@educivic.com</a>
                  <a href="mailto:partners@educivic.com" className="hover:text-[#C8942A] transition-colors block">partners@educivic.com</a>
                </div>
              </div>

              <div className="bg-[#0B1628] text-white p-8 rounded-xl border border-[#C8942A]/15 relative overflow-hidden mt-8 shadow-2xl" style={{ transform: "translateZ(40px)" }}>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#C8942A]/10 rounded-full blur-2xl"></div>
                <h4 className="text-xl font-serif mb-3">Enterprise Hiring</h4>
                <p className="text-[#8A9AB5] font-light text-sm mb-6">
                  Looking to onboard our elite graduates? Access the private hiring portal logic interface.
                </p>
                <div className="flex items-center gap-2 cursor-pointer group text-[#C8942A]">
                  <span className="text-sm font-bold uppercase tracking-wider group-hover:underline">Access Portal</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>

            </TiltCard>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
