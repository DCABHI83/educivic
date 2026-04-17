import React from 'react';
import { PageTransition } from '../components/PageTransition';

export function ApplicationFormPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <main className="min-h-[1024px] pt-40 pb-24 px-6 w-full max-w-screen-xl mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="relative mb-20 text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(245,230,194,0.2)_0%,rgba(250,247,242,0)_100%)] rounded-full -z-10"></div>
              <h1 className="font-serif text-6xl md:text-7xl leading-tight text-[#0B1628] tracking-tight">
                Start your <br />
                <span className="italic text-[#C8942A]">application.</span>
              </h1>
              <p className="mt-8 text-xl text-[#3D4F6B] font-light leading-relaxed max-w-xl mx-auto">
                Complete this brief form to begin your journey toward industry immersion and professional excellence.
              </p>
            </div>

            <form className="space-y-12">
              {/* Main Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                
                {/* Full Name */}
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#7a849b] ml-1">Full Name</label>
                  <input 
                    className="bg-[#F6F3EE] border border-[#C8942A]/15 px-6 py-4 rounded-xl text-[#0B1628] placeholder:text-[#7a849b]/30 font-sans transition-all focus:bg-white focus:outline-none focus:border-[#C8942A]" 
                    placeholder="Julianne Smith" 
                    type="text" 
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#7a849b] ml-1">Email Address</label>
                  <input 
                    className="bg-[#F6F3EE] border border-[#C8942A]/15 px-6 py-4 rounded-xl text-[#0B1628] placeholder:text-[#7a849b]/30 font-sans transition-all focus:bg-white focus:outline-none focus:border-[#C8942A]" 
                    placeholder="julianne@example.com" 
                    type="email" 
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#7a849b] ml-1">Phone Number</label>
                  <input 
                    className="bg-[#F6F3EE] border border-[#C8942A]/15 px-6 py-4 rounded-xl text-[#0B1628] placeholder:text-[#7a849b]/30 font-sans transition-all focus:bg-white focus:outline-none focus:border-[#C8942A]" 
                    placeholder="+1 (555) 000-0000" 
                    type="tel" 
                  />
                </div>

                {/* Interested Track */}
                <div className="flex flex-col space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#7a849b] ml-1">Interested Track</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full bg-[#F6F3EE] border border-[#C8942A]/15 px-6 py-4 rounded-xl text-[#0B1628] appearance-none cursor-pointer font-sans transition-all focus:bg-white focus:outline-none focus:border-[#C8942A]">
                      <option disabled value="">Select a track</option>
                      <option value="full-stack">Full Stack Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="product-design">Product Design</option>
                      <option value="data-science">Data Science</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <span className="material-symbols-outlined text-[#C8942A]">expand_more</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="bg-[#F6F3EE] p-8 rounded-2xl border border-[#C8942A]/15 flex flex-col justify-between min-h-[160px]">
                  <span className="material-symbols-outlined text-[#C8942A] text-2xl">shield_lock</span>
                  <p className="text-sm text-[#3D4F6B] italic leading-relaxed">Your privacy is paramount. Your data is only shared with certified partner hiring managers and program directors.</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl min-h-[160px] group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt="Modern collaborative workspace" 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  />
                  <div className="absolute inset-0 bg-[#0B1628]/30 flex items-end p-6">
                    <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Global Community</span>
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="pt-16 flex flex-col sm:flex-row items-center justify-between border-t border-[#C8942A]/10 gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] uppercase tracking-widest text-[#8A9AB5] font-bold">Quick Submission</p>
                  <p className="text-xs text-[#3D4F6B] mt-1">Average response time: 2-3 business days</p>
                </div>
                <div className="flex items-center space-x-10">
                  <button className="text-sm font-medium text-[#0B1628] hover:text-[#C8942A] transition-colors" type="button">
                    Save draft
                  </button>
                  <button className="bg-[#0B1628] text-[#FAF7F2] px-12 py-4 rounded-full font-medium text-sm tracking-wide shadow-xl shadow-[#0B1628]/10 hover:shadow-[#0B1628]/20 hover:-translate-y-0.5 transition-all flex items-center group" type="submit">
                    Submit Application
                    <span className="material-symbols-outlined ml-3 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
