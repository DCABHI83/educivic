import React from 'react';
import { ProgrammesSection } from '../sections/ProgrammesSection';
import { PageTransition } from '../components/PageTransition';

export function ProgrammesPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <header className="relative bg-[#0B1628] text-[#FAF7F2] py-32 md:py-48 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8942A] rounded-full blur-[160px]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 border border-[#C8942A]/30 rounded-full text-[#C8942A] text-sm font-medium tracking-widest uppercase mb-8">
                Industry Immersion
              </span>
              <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight mb-8">
                Master your craft.<br />
                Choose your <span className="text-[#C8942A] italic">path.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#8A9AB5] font-light max-w-2xl leading-relaxed">
                Explore our highly selective, industry-led immersion tracks designed for immediate technical deployment.
              </p>
            </div>
          </div>
        </header>

        {/* The extracted track listings section */}
        <ProgrammesSection />
      </div>
    </PageTransition>
  );
}
