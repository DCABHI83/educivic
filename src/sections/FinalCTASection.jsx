import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section className="bg-[#FAF7F2] py-32 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[800px] mx-auto text-center border border-[#C8942A]/15 p-16 md:p-24 rounded-[32px] bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        <h2 className="text-5xl md:text-6xl text-[#0B1628] font-serif mb-8">
          Unanswered <span className="text-[#C8942A] italic">Questions?</span>
        </h2>
        <p className="text-xl text-[#3D4F6B] font-light leading-relaxed mb-12">
          Our admissions team is available for one-on-one pedigree reviews and technical consultations. Reach out to the Dean of Students.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/apply" className="bg-[#0B1628] text-white px-12 py-5 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg active:scale-95 duration-200">
            Contact Dean
          </Link>
          <Link to="/apply" className="text-[#C8942A] font-medium border-b border-[#C8942A]/30 pb-1 hover:border-[#C8942A] transition-all cursor-pointer">
            Schedule a Call
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
