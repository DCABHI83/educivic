import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

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

export function PartnersPage() {
  const logos = [
    { name: 'Google', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAzHkay_E1fG71eI9s5bWxAf9QdUObRY3MJ_T_JYyp0nW32FzmlhHzPoWXV-FpzIw4iXdCA7qrdq9LGuQ3s2EJqBx0da8Ht7P_HRTLjWGrb6xfr-nNlsRI7Nlu09bxLX5WOSniJSWaOnSNTsin0EKn45t8wTm9RK2b_TBIvyddtss37hQCnFrKdX36KUdOWcSsm9VtqnM2cxUlSGrzx4hbTjTR3wJ5AoqGQ56tdhEEWIMIeZ8UO8CXsj7VRUKuKSFrl0WUyGhtJGI' },
    { name: 'Amazon', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsXfSXKekYBS3WZvcXrpTaZsFRRrJY6UvB6yUdWeZSYdxR7ak9Rm0Nr3HFDCexxSAXWaAu4uFpFMMSUPXIgTY4FL2YkHUyhK4rrCE8Dp7vhWJ_-3pYw-3UXo5u2lHledv72yf5E0iTUygfTluwNprZ5rSEkWrgjKXdWH4TDG825-FQjNteKscep-dLUK3Nowf9n6r_Y87iBzUjbIElF6en4rOK0Svzla6r2i77x5Lc4cdmnISr8Pb5QvU1FrpP-nCkJWIloc-afmM' },
    { name: 'Microsoft', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAktcljzSofjQTTZ6-n0rSkdhAFNLilZp57LeHbcAOPOSxu1HfgkzUvyHu4VAB-vKMNiptSMJofpP6GICAo39UhgD9EO0nfBCFXAqb_t9s68xYaa769NUGvCvfjqzfObzdIsbuZdwSwjrtQU0dFfizEf1US6TpG6mi1gDHwBhJ8yioun5WPpmOhBT46ZnFAXeJy-DOwePASO5QE3YXgTwkgejZy5oZRXUyYWW9muPWUotfVsYu4bNxJgY1ClQaBcOshCEYRzAa3oFQ' },
    { name: 'Stripe', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlmely_s2FdHB7Z3cZoSQjirnH9YAJm7nk-CKmFzlUxc_9Ff4K1lD2k6jq_yGG7htoYD720wYMRp5d3_-nNx7XjHpQkDU9WWqmbe_5wtkbdh04w6yEEgoRwcB6ZuddWXrMoWAie04999ysTHQsJhHLfLm5aRKawxbziLAXicTOBxo6hsqq8UzDV-B256KCMYnLlbhSFmsuoTHbogKMLL1swB3Y1EAPmuv-3meOfsu2tjyptcDOWQNPH0A80QVFEORhUrGd21mXe48' },
    { name: 'Tesla', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJH-vmuBNlI34ifhWVkahqT5Q0QbPwF_Z5JhCMHvAbOUWxYUitgqp-sxfEe5ZHs2871BwwBy2Vp37WcGxUGu4l9NlwP481iIyx1WH6LB0o_zPuOZzMQe04X60-73VJyVEPqSJy5MGct9AFFDKldgSGrI0QztL4WZWds2AhzUeS995JkKIwxG1_cZIs2FL4_4ckF7wjEzu6DVZlGi--IJVViyf4MhZVHVGwN4RWPdQSJx4eGbIZLnMN2sJXZcY04KzS2v8bQ34oOro' },
    { name: 'Nvidia', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2EvXK2uEmWx6C8p3vqqm-_Es5jmHDGw4XCaqJWyvSCnMXwdPp8q9MQVVAcunVrTqqEZMqDCtSZjcBybsf3woznK0IblYTAeMlVFGF1sYJQiZEev2aWtlt1NvbLPhp8ogh9lUsFW_Y3rYRI_j_159jtJZtIz21Xz7UYBfNi8tuxrSCAaVv4tgoRc2FQVbXmV6vkea2UnlLaWFN61OXUKmBzSx5m8LpEjXPe8sva45w9Izg8hyTx2fDeowFCGe7oqgoLpwMh8zJ9QQ' },
    { name: 'Airbnb', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxrTxZVBRNztVYFIY8Gat-mEwj7fhwU4mUB8FJgpAJ8ZG96FteHB7Ee2TWeEtp3WDxJPpMtUHigLM1lQN1iRbcO5vONAB1Z5wYe4RUyzN867oBKETL8H0w94qWTWVKaESrnb0_u_dOr-VqexAc_ijBxIKf-5M5RZZS8PI8T5PJRghlj2jRjIgCJVtWZTe2q_olzp_4pmuznoIPd1MK27Zo3IV4hhp5Twr9xxulG1_c4BeF83kDD3VBTdqzJlWrEakCITgSn9j2VbY' },
    { name: 'Salesforce', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAxlxZOHThaBFj8iLWoXTCD7IJ46PzCDjbVFdPVKa6PtYjjGtapAy02dkztfWOtVE166qcf6dYbfm5ePJkt0bruA7PBi8y6ryWRaC0GVURnGHMATOo2PGaB5g0imJ9k_54WpECoHOnumFH44PNJINzFhcsAiZLfCUOByvEp0yu45Ec7jZZDrYpRtHGDMpQOO71tEN21zEX1lsEphyiTFS-aHmfMSDv-Sc6xzf6EX6mAmgzmUZS7VhM2nLV0FW1vN3S4SvBbPJErXA' },
    { name: 'Spotify', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9dtI0f4WkRh4HTLNMMloJBntVacZQPfkYlraeNi6vv-d8aURtv7zoRqm3ZGEFUe8EjXdPFkyWyiIz77jfcEeHluwT3Eccgy74tIldFm25Xo5YipT52yYKbodCq7Z4TnlQMCPxDPFPt6FqMpLnYaZ-GJ9ZuE-qRJHv4tjCk1NTKc5TRMyF_9nhO2ZiWzI1DZgrLzUsn92xDPAQD4kWEldG7oyx7DHwdqOLBLTQvqCOXVyrKZTdJEkSL5HmrgVai1OaS5vO94QIE04' },
    { name: 'Figma', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34alYMBzR-Iyc6YbOTf9paaWij6FcZ1aKBp0eouYyMta-fqKrFyd9EZnIJaftfbMkUQoFgTdzmFYGm95LEUcP44DQrOegvemJ4x9P7k3uznByxYUh1uRaP85e0n4qCek8N9q3hG6hPv1Uu5_XF_wBLwqlE7ijDOQrocQufuVa_NOBj6farvj-mNUCqBGxLULvAQjBrmMc-hpKrd0p3-mT0nD_j98-BYePocwWP2Pw5r0-FoLcZU01-0B80VFmwykJiQiFPNBgEXM' },
    { name: 'OpenAI', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVypq3Bv4Ar7WxgKQwa8NlAY_rw6PgQ5Ecz2OcrRijwtuJuLchhJM6qCUEasOvi7NHmnHyCoylSsSaqYq5_ww7UzF8LV8kOMnwFAx1KBE1sRp0l-p07R5tRgDCfd8RJVLqJ0x8DH0Y3V8XzEwWs0vXN7SiUORrzsNMtOy5npkxz5qINQa0HpieQRbi8o6kL0b15Zj7PHnRN4jnNFIu8o-jRVLxujnmEUKS3ECuqfkhGSPpC6sLtUY54J3cw5HZrDXJLZITps3TX4A' },
    { name: 'Anthropic', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgzP_zxgxTVrPfZz2rdQxWnOQzjN7b4ZcK5Y5MuCSSY8lPKtxmoVzUobxedt-I_GR0q84xUjnwKlM0Wvp2XQJaW_vUL9oF5LWIepUqHScJIp4IXtOaHmYvTHMvRu59i0Ciz9JZdkdSlPgW0uJABFhkH2iQQirJVpJfJTwdwqqRhz_9kNNeqF_s86lkb7KTbQKbRKZWBerFFhUjB0ilc6UEtYXEpL0vamaPLNwhvuBqge-wagC1WmlXz2x2iBAYDR5Ch9BApy5whJ0' }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-48 overflow-hidden bg-[#FAF7F2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-8 text-center"
          >
            <span className="font-sans text-sm tracking-[0.2em] uppercase text-[#0B1628]/60 mb-6 block">Our Global Network</span>
            <h1 className="text-7xl md:text-8xl font-serif leading-tight tracking-tight mb-12 text-[#0B1628]">
              Forging paths with <br/>
              <span className="italic text-[#C8942A]">industry leaders.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#3D4F6B] font-light leading-relaxed">
              We don't just teach technology; we operate within its heart. Our partners are more than names on a page—they are the environments where our scholars ship real code and drive real impact.
            </p>
          </motion.div>
        </section>

        {/* Partner Logo Grid */}
        <section className="py-32 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-[#C8942A]/15"
            >
              {logos.map((logo, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="aspect-square flex items-center justify-center p-12 border-b border-[#C8942A]/15 lg:border-r last:border-b-0 lg:[&:nth-child(6n)]:border-r-0 group hover:bg-white transition-all duration-500"
                >
                  <img src={logo.src} alt={logo.name} className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 w-24 h-auto" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Collaboration Deep Dive */}
        <section className="py-48 bg-[#0B1628] text-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center md:text-left"
            >
              <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight text-[#FAF7F2]">
                Deeply <span className="italic text-[#C8942A]">integrated</span> collaborations.
              </h2>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {[
                { icon: 'terminal', title: 'Product Sprints', text: "Educivic scholars don't build toys. They embed directly within partner engineering teams, tackling high-priority technical debt and shipping features that serve millions. This is apprenticeship in its truest form.", classConfig: "top-0 right-0 w-64 h-64" },
                { icon: 'hub', title: 'Talent Pipeline', text: "Our ecosystem partners receive priority access to a vetted pipeline of graduates who are not just skilled, but culturally acclimated to their specific engineering architectures and operational cadences.", classConfig: "bottom-0 right-0 w-96 h-96" },
                { icon: 'architecture', title: 'Technical Architecture', text: "Through 3Fi Tech, our architectural arm, we provide high-level consulting that bridges the gap between partner vision and scholar execution, ensuring every line of code meets enterprise standards.", classConfig: "top-1/2 left-0 w-64 h-64" }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="bg-[#132035] p-16 flex flex-col md:flex-row gap-16 items-center rounded-2xl relative overflow-hidden group">
                  <div className={`absolute ${item.classConfig} bg-[#C8942A]/5 blur-[100px] -z-10`}></div>
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-6xl text-[#C8942A]" style={{ fontVariationSettings: "'wght' 200" }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-6 tracking-tight text-[#FAF7F2]">{item.title}</h3>
                    <p className="text-xl font-sans font-light text-[#8A9AB5] max-w-2xl leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Become a Partner Form Section */}
        <section className="py-48 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-8 text-[#0B1628]">
                Join the <br/>
                <span className="italic text-[#C8942A]">ecosystem.</span>
              </h2>
              <p className="text-lg text-[#3D4F6B] font-light leading-relaxed mb-12">
                Partner with us to accelerate your technical roadmap while securing a future-proof talent stream. We are currently accepting inquiries for the 2025 cohort.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[#C8942A]">verified</span>
                  <span className="text-[#0B1628] font-sans font-medium">Direct talent pipeline access</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[#C8942A]">token</span>
                  <span className="text-[#0B1628] font-sans font-medium">Co-development of technical curricula</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-[#C8942A]">lightbulb</span>
                  <span className="text-[#0B1628] font-sans font-medium">Collaborative R&D initiatives</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 rounded-2xl border border-[#C8942A]/15 shadow-[0px_20px_40px_rgba(11,22,40,0.04)]"
            >
              <form className="space-y-10" onSubmit={e => e.preventDefault()}>
                <div className="group border-b border-[#0B1628]/10 focus-within:border-[#C8942A] transition-colors pb-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#8A9AB5] mb-2 font-medium">Organization Name</label>
                  <input type="text" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg font-sans text-[#0B1628] placeholder:text-[#8A9AB5]/50 outline-none" placeholder="Acme Technologies" />
                </div>
                <div className="group border-b border-[#0B1628]/10 focus-within:border-[#C8942A] transition-colors pb-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#8A9AB5] mb-2 font-medium">Primary Contact</label>
                  <input type="email" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg font-sans text-[#0B1628] placeholder:text-[#8A9AB5]/50 outline-none" placeholder="authority@domain.com" />
                </div>
                <div className="group border-b border-[#0B1628]/10 focus-within:border-[#C8942A] transition-colors pb-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#8A9AB5] mb-2 font-medium">Intent</label>
                  <select className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg font-sans text-[#0B1628] appearance-none outline-none">
                    <option>Hiring Pipeline Partnership</option>
                    <option>Project Collaboration</option>
                    <option>Curriculum Sponsorship</option>
                  </select>
                </div>
                <div className="group border-b border-[#0B1628]/10 focus-within:border-[#C8942A] transition-colors pb-2">
                  <label className="block text-[10px] uppercase tracking-widest text-[#8A9AB5] mb-2 font-medium">Brief Insight</label>
                  <textarea rows="3" className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg font-sans text-[#0B1628] placeholder:text-[#8A9AB5]/50 resize-none outline-none" placeholder="How do you envision our technical synergy?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0B1628] text-white py-5 rounded-full text-lg font-sans font-medium hover:opacity-90 transition-opacity">
                  Request Protocol
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
