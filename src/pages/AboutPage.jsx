import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Section 1: Hero */}
        <section className="relative min-h-[819px] flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,230,194,0.3)_0%,rgba(250,247,242,0)_70%)] pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#C8942A] mb-8 block">Legacy of Excellence</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight text-[#0B1628] mb-8">
              Our Heritage. <br />
              <span className="italic text-[#C8942A]">Our Philosophy.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#3D4F6B] font-light max-w-2xl mx-auto leading-relaxed">
              Educivic was founded on a singular conviction: that the distance between a degree and a desk should be zero. We are bridging the systemic gap between traditional education and immediate industry employment.
            </p>
            <div className="mt-12">
              <span className="material-symbols-outlined text-[#C8942A] text-4xl">expand_more</span>
            </div>
          </div>
        </section>

        {/* Section 2: The 3Fi Tech Story */}
        <section className="py-32 md:py-48 px-8 md:px-24 bg-[#f6f3ee]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-serif text-[#0B1628] leading-tight">
                The <span className="italic text-[#C8942A]">3Fi Tech</span> Story
              </h2>
              <div className="space-y-6 text-lg leading-loose text-[#3D4F6B]">
                <p>
                  For over 12 years, 3Fi Tech has been a global architect of IT excellence, delivering mission-critical solutions to enterprises across continents. This deep-rooted industry DNA is what birthed Educivic.
                </p>
                <p>
                  We didn't start as educators; we started as employers. We saw firsthand the struggle of finding talent that could navigate complex architectural landscapes on day one. Educivic is our response—an immersive ecosystem where the workplace is the classroom.
                </p>
              </div>
              <div className="pt-6">
                <Link to="/ecosystem" className="inline-flex items-center text-[#0B1628] font-medium border-b border-[#C8942A] pb-1 hover:opacity-70 transition-all cursor-pointer">
                  Explore our industry heritage
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#C8942A]/5 rounded-xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                alt="Collaborative office" 
                className="w-full h-[600px] object-cover rounded-xl shadow-[0px_20px_40px_rgba(11,22,40,0.04)] grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Our Core Values */}
        <section className="bg-[#0B1628] py-32 md:py-48 px-8 text-white overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
              <div className="max-w-xl">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#C8942A]/60 mb-4 block">Foundational Pillars</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  The Principles of <br /><span className="italic text-[#C8942A]">Curated Authority.</span>
                </h2>
              </div>
              <p className="text-[#8A9AB5] max-w-sm font-light text-lg">
                We prioritize the surgical application of knowledge over theoretical abstraction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'verified_user', title: 'Industry-First', desc: 'Our curriculum is not defined by textbooks, but by the current technical debt and innovation needs of global IT leaders.' },
                { icon: 'rocket_launch', title: 'Day 1 Deployment', desc: "We train for the 'Day 1' reality. Our graduates transition from program to production with seamless confidence." },
                { icon: 'architecture', title: 'Architect-Led', desc: 'Instruction is delivered exclusively by practicing Solution Architects, ensuring mastery of high-level systems design.' }
              ].map((item, i) => (
                <div key={i} className="p-12 border border-[#C8942A]/15 rounded-xl hover:bg-[#C8942A]/5 transition-colors duration-500">
                  <span className="material-symbols-outlined text-[#C8942A] text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-[#8A9AB5] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Leadership */}
        <section className="py-32 md:py-48 px-8 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <img 
                alt="Deepak Chaudhary" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto mb-8 shadow-[0px_20px_40px_rgba(11,22,40,0.04)] border-4 border-[#FAF7F2]" 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              />
              <h3 className="text-3xl font-serif text-[#0B1628]">Deepak Chaudhary</h3>
              <p className="font-sans text-xs tracking-widest uppercase text-[#C8942A] mt-2">Founder & CEO</p>
            </div>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-[#0B1628] leading-snug">
              "Educivic is not about creating more students. It is about forging <span className="italic text-[#C8942A]">professionals</span> who possess the technical gravity to lead from the moment they step into a boardroom."
            </blockquote>
          </div>
        </section>

        {/* Section 5: Global Presence */}
        <section className="py-32 px-8 border-t border-[#C8942A]/10 bg-[#FAF7F2]">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="max-w-md">
              <h2 className="text-4xl font-serif text-[#0B1628] mb-6">Global <span className="italic text-[#C8942A]">Presence.</span></h2>
              <p className="text-[#3D4F6B] font-light text-lg">Our footprint spans strategic hubs of technology and commerce, ensuring our graduates have access to the world's most vibrant markets.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 w-full md:w-auto">
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-[#C8942A]"></div>
                <h4 className="text-xl font-serif text-[#0B1628]">Dubai, UAE</h4>
                <p className="text-sm font-sans uppercase tracking-widest text-[#8A9AB5]">FalconFi</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-[#C8942A]"></div>
                <h4 className="text-xl font-serif text-[#0B1628]">India</h4>
                <p className="text-sm font-sans uppercase tracking-widest text-[#8A9AB5]">3Fi Tech HQ</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
