import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    category: "Application Process",
    description: "The first steps toward clinical excellence in your chosen craft.",
    items: [
      {
        q: "Is there a coding test?",
        a: "We employ a \"Technical Narrative\" assessment rather than a standard multiple-choice test. You'll be asked to explain your logic through a short collaborative session with an instructor to gauge your foundational reasoning skills."
      },
      {
        q: "Who can apply?",
        a: "We seek individuals with a demonstrated hunger for problem-solving. Whether you're a recent graduate or a career pivot enthusiast, we look for the spark of curiosity over years of prior experience."
      }
    ]
  },
  {
    category: "Program Details",
    description: "Navigating the structure of the immersive experience.",
    alignment: "right",
    items: [
      {
        q: "How long is the immersion?",
        a: "Our standard immersion track spans 24 weeks of intensive, project-based work. This is divided into four six-week \"sprints,\" each focusing on a specific layer of the stack or industry specialization."
      },
      {
        q: "Is it remote?",
        a: "We offer a \"Hybrid-Synchronous\" model. While the work can be done from anywhere, we require attendance during core European and North American office hours to facilitate real-time pair programming and peer review."
      }
    ]
  },
  {
    category: "Career Outcomes",
    description: "The path from the classroom to the boardroom.",
    items: [
      {
        q: "Do I get a certificate?",
        a: "Beyond a physical certificate, you graduate with a verified Portfolio of Proof. This is a cryptographically signed ledger of the real-world products you've contributed to during your tenure at Educivic."
      },
      {
        q: "Hiring partners?",
        a: "We maintain exclusive direct-hire pipelines with over 40 global tech firms and financial institutions. Our \"Industry Sprints\" are often led by senior directors from these partner companies."
      }
    ]
  },
  {
    category: "Technical Requirements",
    description: "Ensuring your tools match your ambitions.",
    alignment: "right",
    items: [
      {
        q: "What stack do you use?",
        a: "We focus on the \"Evergreen Stack\": TypeScript, React/Next.js, Node.js, and PostgreSQL. We also have specialized tracks for Rust systems engineering and AI-driven architecture."
      },
      {
        q: "Do I need a high-end laptop?",
        a: "While we provide cloud computing environments for heavy lifting, you will need a machine capable of running modern IDEs smoothly. We recommend at least 16GB of RAM and a stable high-speed internet connection."
      }
    ]
  }
];

export function FAQSection() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-24 px-8">
      <div className="max-w-[1100px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl tracking-tight text-[#0B1628] font-serif leading-none mb-6">
            Frequently Asked <span className="text-[#C8942A] italic">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#3D4F6B] leading-relaxed font-light">
            Clarity on the journey from student to practitioner. Explore the mechanics of our high-intensity immersion programs.
          </p>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((section, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`py-24 flex flex-col md:flex-row ${section.alignment === 'right' ? 'md:flex-row-reverse' : ''} gap-12 md:gap-24 items-start`}
              >
                <div className={`md:w-1/3 sticky top-32 ${section.alignment === 'right' ? 'text-right' : ''}`}>
                  <motion.h3 variants={scrollVariant} className="text-4xl md:text-5xl text-[#0B1628] font-serif">
                    {section.category.split(' ')[0]} <span className="text-[#C8942A] italic">{section.category.split(' ')[1]}</span>
                  </motion.h3>
                  <motion.p variants={scrollVariant} className="mt-4 text-[#8A9AB5] font-light">{section.description}</motion.p>
                </div>
                
                <div className="md:w-2/3 space-y-8 w-full">
                  {section.items.map((item, itemIdx) => (
                    <motion.div 
                      variants={scrollVariant} 
                      key={itemIdx} 
                      className="border border-[#C8942A]/15 p-8 md:p-12 rounded-2xl bg-white shadow-[0px_20px_40px_rgba(11,22,40,0.04)] hover:shadow-[0px_30px_60px_rgba(11,22,40,0.08)] transition-shadow duration-500"
                    >
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-xl text-[#0B1628]">
                          <span>{item.q}</span>
                          <span className="material-symbols-outlined text-[#C8942A] transition-transform duration-300 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="mt-6 text-[#3D4F6B] leading-relaxed font-light origin-top animate-in fade-in zoom-in-95 duration-300">
                          <p>{item.a}</p>
                        </div>
                      </details>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {idx < faqs.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-[#C8942A]/20 to-transparent"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
