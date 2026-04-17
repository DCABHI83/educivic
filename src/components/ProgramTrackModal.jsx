import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProgramTrackModal({ isOpen, onClose, track }) {
  if (!track) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B1628]/30 backdrop-blur-[2px]"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xl shadow-2xl overflow-hidden border border-[#C8942A]/15 z-10"
          >
            {/* Hero Radial Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.4)_0%,rgba(245,230,194,0)_70%)] -z-10"></div>
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-[#0B1628] hover:text-[#C8942A] transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            <div className="px-8 md:px-12 py-12 md:py-16 max-h-[85vh] overflow-y-auto">
              {/* Header */}
              <header className="mb-10 w-11/12">
                <h1 className="font-serif text-4xl md:text-5xl text-[#0B1628] leading-tight tracking-tight">
                  {track.title.split(' ').map((word, i, arr) => 
                    i === arr.length - 1 ? <span key={i} className="text-[#C8942A] italic">{word}</span> : word + ' '
                  )}
                </h1>
              </header>

              {/* Body Section 1: Editorial Description */}
              <section className="mb-12">
                <p className="font-sans font-light text-lg leading-relaxed text-[#3D4F6B]">
                  {track.description || "The track is designed for high-agency individuals who seek to master the complete lifecycle of digital product development. Beyond syntax, we focus on architectural integrity and the seamless bridge between user experience and scalable infrastructure."}
                </p>
              </section>

              {/* Body Section 2: Key Outcomes */}
              <section className="mb-16">
                <h2 className="font-serif text-2xl text-[#0B1628] mb-6">Key Outcomes</h2>
                <ul className="space-y-4">
                  {(track.outcomes || [
                    "Master Modern Architecture & Distributed Systems",
                    "Real-world Deployment with CI/CD Excellence",
                    "AI-Augmented Workflows for Rapid Prototyping",
                    "Industry-Grade Security & Performance Optimization"
                  ]).map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#C8942A] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-sans text-[#3D4F6B] font-light">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Action Area */}
              <footer className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-[#C8942A]/10">
                <button 
                  className="w-full sm:w-auto bg-[#0B1628] text-[#F5E6C2] px-10 py-4 rounded-full font-sans font-medium hover:opacity-90 transition-all active:scale-95 shadow-lg"
                  onClick={onClose}
                >
                  Close Details
                </button>
                <button 
                  className="w-full sm:w-auto text-[#0B1628] px-10 py-4 rounded-full font-sans font-medium border border-[#C8942A]/15 hover:bg-[#F5E6C2]/30 transition-all active:scale-95"
                  onClick={() => {
                     onClose();
                     window.location.href = '/apply';
                  }}
                >
                  Select Track
                </button>
              </footer>
            </div>

            {/* Branding Accent */}
            <div className="bg-[#0B1628] py-4 text-center sticky bottom-0">
              <p className="font-serif italic text-[#C8942A] text-sm tracking-widest">
                educivic. — Not education. Employment.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
