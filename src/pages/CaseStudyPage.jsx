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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export function CaseStudyPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] font-sans text-[#3D4F6B] font-light leading-[1.6]">
        
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden pt-24 md:pt-0 bg-[#FAF7F2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] pointer-events-none"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-screen-2xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10"
          >
            <div className="md:col-span-7 z-10">
              <span className="inline-block text-[#C8942A] uppercase tracking-widest text-xs font-medium mb-6">Scholar Spotlight: Julian Thorne</span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#0B1628] leading-[0.9] mb-8 tracking-tight">
                From Theory to <br/><span className="text-[#C8942A] italic">Architect</span>.
              </h1>
              <p className="text-xl md:text-2xl text-[#3D4F6B] max-w-xl leading-relaxed font-light">
                How Julian Thorne bridged the gap between academic knowledge and enterprise-grade deployment.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6oPzE5nk1DEmUnGEPUpw_SmpG6QSbypzQCLqGMYzO5A4bpdodXjZ-n171H0ttgiFzaci35UZuU1IL_d7-LzDzA7Mdq9Yd64Spj635TZ47ERGoE_8OpOwkMofRpGkE7ezg7RNXKGeUuj5N3TAMojmO-NIk97Soj9E6945Y_miQJD8rPSdnHKIw07ppJ54kKMr5M0Pi2yZLy3MBfV5SO1HNwTPDbf03NRTIyWG7lm3AbFALYSAzelsFAWoeHrkwK2uaWuhiGLQ-McU" alt="Julian Thorne Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* The 'Before' Section */}
        <section className="bg-[#FAF7F2] py-32 md:py-48 border-t border-[#C8942A]/5">
          <div className="max-w-screen-xl mx-auto px-8 md:px-16">
            <motion.div 
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-serif text-[#0B1628] mb-12">
                  The <span className="text-[#C8942A] italic">Threshold</span>.
                </h2>
                <div className="space-y-6 text-lg text-[#3D4F6B] leading-relaxed font-light">
                  <p>
                    Armed with a prestigious Computer Science degree, Julian found himself at a crossroads common to many modern graduates: he possessed the theory of computation, but lacked the callouses of production.
                  </p>
                  <p>
                    "The industry doesn't ask for your GPA," Julian recalls. "They ask for your architecture. I realized my understanding of scale was purely mathematical, not operational."
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-[#F6F3EE] p-12 md:p-16 rounded-2xl border border-[#C8942A]/15">
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#8A9AB5] mb-8">Academic Baseline</h3>
                <ul className="space-y-8">
                  {[
                    { icon: 'school', title: 'CS Degree (Magna Cum Laude)', text: 'Deep focus on algorithms and discrete mathematics, but zero exposure to CI/CD pipelines.' },
                    { icon: 'history', title: 'No Git Experience', text: 'Used personal drives for version control; lacked the collaborative workflow required for enterprise teams.' },
                    { icon: 'lightbulb', title: 'Theoretical Understanding', text: 'Could explain Big O notation but hadn\'t ever managed a live database with 1M+ concurrent users.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#C8942A] mt-1">{item.icon}</span>
                      <div>
                        <h4 className="text-[#0B1628] font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-[#3D4F6B] font-light">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The 'Experience' Section */}
        <section className="bg-[#0B1628] py-32 md:py-48 text-[#FAF7F2] overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-8 md:px-16">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">
                The <span className="text-[#C8942A] italic">Immersion</span>.
              </h2>
              <p className="text-xl text-[#8A9AB5] max-w-2xl font-light">
                Julian's transition wasn't a classroom lesson; it was a deployment. Over sixteen weeks, he moved from student to contributor within the Educivic ecosystem.
              </p>
            </motion.div>

            {/* Insight Card */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#132035] rounded-2xl overflow-hidden"
            >
              <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center border-r border-[#C8942A]/10">
                <h3 className="text-2xl font-serif mb-6 text-[#C8942A]">Sprint Insight: Week 09</h3>
                <p className="text-lg font-light leading-relaxed mb-8 text-[#FAF7F2]/80">
                  "The intensity of 12-hour sprints was balanced by 1-on-1 architect-led mentorship. It wasn't about finding the 'right' answer—it was about defending a scalable decision."
                </p>
                <div className="flex items-center gap-4 border-t border-[#C8942A]/10 pt-8">
                  <div className="w-10 h-10 rounded-full bg-[#C8942A]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#C8942A] text-sm">terminal</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#8A9AB5] font-medium">Production-Ready Code Review</span>
                </div>
              </div>
              <div className="lg:col-span-7 bg-[#050B14] p-4 flex items-center justify-center min-h-[400px]">
                <div className="w-full h-full rounded-lg overflow-hidden border border-[#1E293B]">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjCRcBNobyyaVLv7S_A3BZbAyVbJ3otILwWpsH8_7II8eqjle31qZoL-KeVDnXfItXF7UtgvcxUR0XtofANSSNoU9F09RAa6ndWRuKXRQ2IgyD2QPE6T32xubVMh-3CqAv_WWpJAmViQx0zAIfQQZT78oHZ8XTaNajV-33Sm7M-6F8J3EMC4lfVfyfJ4LzWZP_iwiAroihfSlURy8UiTrz8zgeTGv7erl8RwsC0o000MWbsJedCV4IhVXt_5eXjxDkCwd673B5lyo" alt="Code Dashboard Visualization" className="w-full h-full object-cover opacity-60" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The 'After' Section */}
        <section className="bg-[#FAF7F2] py-32 md:py-48 overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative order-2 md:order-1"
              >
                <div className="bg-white p-12 md:p-20 rounded-2xl border border-[#C8942A]/15 relative z-10 shadow-sm">
                  <span className="material-symbols-outlined text-[#C8942A] text-5xl mb-8">format_quote</span>
                  <blockquote className="text-2xl md:text-3xl font-serif text-[#0B1628] italic leading-tight mb-10">
                    "Julian didn't join us as a junior developer. He arrived with 'Day 1 readiness' that we typically only see in five-year veterans. His grasp of our infrastructure was immediate."
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#132035] overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE6LKbqEnkMQ_MHj2CW-5JwUvC72U-mRkorXr-eyKWb4qJaPh1oqsZYOY9P9GbTKAct2wesqC3Vnf2sVi-UEZoYqAEEssnTcPbWVPZXkqOiYu4Wj2j3rQrdOy3oBz4SkzZGRpG4UP2_JHz0s8tVsWRBN1qErDAEwbt1MrkG3096wBbL61JojITKJThMilxFkputOjc3wORR6YEMxYISQMqjNKzZShVxoNIJVMYCICjeDgVcs2UgGE-Bfmoyf7V_G_6Swato6OT6-8" alt="CEO Portrait" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#0B1628] font-medium">Marcus Vane</h4>
                      <p className="text-xs text-[#8A9AB5] uppercase tracking-widest mt-1">CEO, FalconFi</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C8942A]/5 rounded-full blur-3xl"></div>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="order-1 md:order-2"
              >
                <h2 className="text-4xl md:text-5xl font-serif text-[#0B1628] mb-12">
                  The <span className="text-[#C8942A] italic">Impact</span>.
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-serif text-[#C8942A] leading-none mt-1">01</span>
                    <div>
                      <h4 className="text-[#0B1628] text-xl font-medium mb-2">Lead Engineer at FalconFi</h4>
                      <p className="text-[#3D4F6B] font-light">Currently overseeing a team of twelve, Julian applies the same 'immersion' principles he learned at Educivic to his own department.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-serif text-[#C8942A] leading-none mt-1">02</span>
                    <div>
                      <h4 className="text-[#0B1628] text-xl font-medium mb-2">Technical Excellence</h4>
                      <p className="text-[#3D4F6B] font-light"> Julian led the migration of FalconFi's core ledger to a micro-services architecture, resulting in a 40% reduction in latency.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#F6F3EE] py-32 md:py-48 text-center px-8 border-t border-[#C8942A]/10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-[#0B1628] mb-12 tracking-tight">
              Start your own <br/><span className="text-[#C8942A] italic">journey</span>.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/apply" className="bg-[#C8942A] text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-[#b08020] transition-colors shadow-[0_0_15px_rgba(200,148,42,0.5)] inline-block shadow-[#0B1628]/10 hover:-translate-y-1 transform duration-300">
                Apply Now
              </Link>
              <Link to="/programs" className="border border-[#C8942A]/30 text-[#C8942A] px-12 py-5 rounded-full text-lg font-medium hover:bg-[#C8942A]/5 hover:-translate-y-1 transform transition-all duration-300 w-full md:w-auto">
                View All Tracks
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
