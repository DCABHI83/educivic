import React from "react";
import { motion } from "framer-motion";

export const ComparisonSection = () => {
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-32 px-8 md:px-24 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 max-w-3xl mx-auto leading-tight">
            Why this is nothing like what <span className="italic-accent-gold">you've seen before.</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-muted-text text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Every other programme teaches you. We make you work — in a real company, on real deadlines, with real consequences. That's the gap between a certificate and a career.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
          className="border border-brand-gold/20 rounded-2xl overflow-hidden w-full -mx-4 md:mx-0 px-4 md:px-0"
        >
          <div className="overflow-x-auto w-full pb-4 md:pb-0">
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] text-left min-w-[700px] border border-brand-gold/20 md:border-none rounded-xl md:rounded-none">
              {/* Header Row */}
              <div className="p-4 md:p-8 border-b border-brand-gold/10 bg-brand-navy/50">
                <div className="text-brand-gold uppercase text-[10px] tracking-widest font-bold">Criteria</div>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/10 bg-brand-navy/50">
                <div className="text-[#FAF7F2] uppercase text-[10px] tracking-widest font-bold">Training Institutes / EdTech</div>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/20 bg-brand-gold/10">
                <div className="text-brand-gold uppercase text-[10px] tracking-widest font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">star</span> Educivic by 3Fi Tech
                </div>
              </div>

              {/* Row 1: Environment */}
              <div className="p-4 md:p-8 border-b border-brand-gold/10 flex items-center">
                <span className="text-base md:text-lg font-body font-light text-muted-text">Environment</span>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/10 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 opacity-60 font-body text-xs md:text-sm">
                  <span className="material-symbols-outlined text-red-500 text-sm md:text-base">close</span> Classroom or Zoom sessions
                </div>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/20 bg-brand-gold/5 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 font-body font-medium text-xs md:text-sm text-brand-cream">
                  <span className="material-symbols-outlined text-green-500 text-sm md:text-base">check_circle</span> Live office, real team, actual desk
                </div>
              </div>

              {/* Row 2: Projects */}
              <div className="p-4 md:p-8 border-b border-brand-gold/10 flex items-center">
                <span className="text-base md:text-lg font-body font-light text-muted-text">Projects</span>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/10 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 opacity-60 font-body text-xs md:text-sm">
                  <span className="material-symbols-outlined text-red-500 text-sm md:text-base">close</span> Demo apps built for assessment
                </div>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/20 bg-brand-gold/5 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 font-body font-medium text-xs md:text-sm text-brand-cream">
                  <span className="material-symbols-outlined text-green-500 text-sm md:text-base">check_circle</span> Real client deliverables in production
                </div>
              </div>

              {/* Row 3: AI Tools */}
              <div className="p-4 md:p-8 border-b border-brand-gold/10 flex items-center">
                <span className="text-base md:text-lg font-body font-light text-muted-text">AI Tools</span>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/10 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 opacity-60 font-body text-xs md:text-sm">
                  <span className="material-symbols-outlined text-red-500 text-sm md:text-base">close</span> One optional module, maybe
                </div>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/20 bg-brand-gold/5 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 font-body font-medium text-xs md:text-sm text-brand-cream">
                  <span className="material-symbols-outlined text-green-500 text-sm md:text-base">check_circle</span> Copilot, Claude & Cursor from day 1
                </div>
              </div>

              {/* Row 4: Exit Document */}
              <div className="p-4 md:p-8 border-b border-brand-gold/10 flex items-center">
                <span className="text-base md:text-lg font-body font-light text-muted-text">Exit Document</span>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/10 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 opacity-60 font-body text-xs md:text-sm">
                  <span className="material-symbols-outlined text-red-500 text-sm md:text-base">close</span> PDF certificate (bulk issued)
                </div>
              </div>
              <div className="p-4 md:p-8 border-b border-l border-brand-gold/20 bg-brand-gold/5 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 font-body font-medium text-xs md:text-sm text-brand-cream">
                  <span className="material-symbols-outlined text-green-500 text-sm md:text-base">check_circle</span> Work Experience Letter, signed by CEO
                </div>
              </div>

              {/* Row 5: Hiring Outcome */}
              <div className="p-4 md:p-8 flex items-center">
                <span className="text-base md:text-lg font-body font-light text-muted-text">Hiring Outcome</span>
              </div>
              <div className="p-4 md:p-8 border-l border-brand-gold/10 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 opacity-60 font-body text-xs md:text-sm">
                  <span className="material-symbols-outlined text-red-500 text-sm md:text-base">close</span> Resume says "trained at X"
                </div>
              </div>
              <div className="p-4 md:p-8 border-l border-brand-gold/20 bg-brand-gold/5 flex items-center">
                <div className="flex items-center gap-2 md:gap-3 font-body font-medium text-xs md:text-sm text-brand-cream">
                  <span className="material-symbols-outlined text-green-500 text-sm md:text-base">check_circle</span> Resume says "worked at 3Fi Tech"
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
