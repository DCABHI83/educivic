import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ComparisonSection } from '../sections/ComparisonSection';
import { ProgrammesSection } from '../sections/ProgrammesSection';
import { JourneySection } from '../sections/JourneySection';
import { TrustSection } from '../sections/TrustSection';
import { FAQSection } from '../sections/FAQSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { PageTransition } from '../components/PageTransition';

export function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <TrustSection />
        <ComparisonSection />
        <ProgrammesSection />
        <JourneySection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </PageTransition>
  );
}
