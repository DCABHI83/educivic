import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border border-[#C8942A]/15 p-8 md:p-12 rounded-2xl bg-white shadow-[0px_20px_40px_rgba(11,22,40,0.04)] mb-8 transition-shadow hover:shadow-[0px_20px_40px_rgba(11,22,40,0.08)]">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left font-medium text-xl text-[#0B1628] hover:text-[#C8942A] transition-colors gap-4"
      >
        <span>{title}</span>
        <span className={`material-symbols-outlined text-[#C8942A] transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: "1.5rem" }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="text-[#3D4F6B] leading-relaxed font-light">
              <p>{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQsPage() {
  const [openItems, setOpenItems] = React.useState({ 'q1': true });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <PageTransition>
      <div className="bg-[#FAF7F2] min-h-screen text-[#3D4F6B] font-sans font-light">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-8 md:px-16 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,230,194,0.4)_0%,rgba(250,247,242,0)_70%)] pointer-events-none -z-10"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl tracking-tight text-[#0B1628] leading-none mb-6 font-serif"
          >
            Educivic <span className="text-[#C8942A] italic">FAQs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-[#3D4F6B] leading-relaxed font-light"
          >
            Clarity on the journey from student to practitioner. Explore the mechanics of our high-intensity <span className="text-[#C8942A] italic">immersion</span> programs.
          </motion.p>
        </section>

        {/* FAQ Content */}
        <div className="max-w-[1100px] mx-auto px-8">
          
          {/* Category: Application Process */}
          <section className="py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-1/3 md:sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl text-[#0B1628] font-serif">Application <span className="text-[#C8942A] italic">Process</span></h2>
              <p className="mt-4 text-[#8A9AB5] font-light">The first steps toward clinical excellence in your chosen craft.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:w-2/3 w-full"
            >
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="Is there a coding test?"
                  content='We employ a "Technical Narrative" assessment rather than a standard multiple-choice test. You&apos;ll be asked to explain your logic through a short collaborative session with an instructor to gauge your foundational reasoning skills.'
                  isOpen={openItems['q1']}
                  onClick={() => toggleItem('q1')}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="Who can apply?"
                  content="We seek individuals with a demonstrated hunger for problem-solving. Whether you're a recent graduate or a career pivot enthusiast, we look for the spark of curiosity over years of prior experience."
                  isOpen={openItems['q2']}
                  onClick={() => toggleItem('q2')}
                />
              </motion.div>
            </motion.div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#C8942A]/20 to-transparent"></div>

          {/* Category: Program Details */}
          <section className="py-24 flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-1/3 md:sticky top-32 text-left md:text-right"
            >
              <h2 className="text-4xl md:text-5xl text-[#0B1628] font-serif">Program <span className="text-[#C8942A] italic">Details</span></h2>
              <p className="mt-4 text-[#8A9AB5] font-light">Navigating the structure of the immersive experience.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:w-2/3 w-full"
            >
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="How long is the immersion?"
                  content="Our standard immersion track spans 24 weeks of intensive, project-based work. This is divided into four six-week 'sprints,' each focusing on a specific layer of the stack or industry specialization."
                  isOpen={openItems['q3']}
                  onClick={() => toggleItem('q3')}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="Is it remote?"
                  content="We offer a 'Hybrid-Synchronous' model. While the work can be done from anywhere, we require attendance during core European and North American office hours to facilitate real-time pair programming and peer review."
                  isOpen={openItems['q4']}
                  onClick={() => toggleItem('q4')}
                />
              </motion.div>
            </motion.div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#C8942A]/20 to-transparent"></div>

          {/* Category: Career Outcomes */}
          <section className="py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-1/3 md:sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl text-[#0B1628] font-serif">Career <span className="text-[#C8942A] italic">Outcomes</span></h2>
              <p className="mt-4 text-[#8A9AB5] font-light">The path from the classroom to the boardroom.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:w-2/3 w-full"
            >
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="Do I get a certificate?"
                  content="Beyond a physical certificate, you graduate with a verified Portfolio of Proof. This is a cryptographically signed ledger of the real-world products you've contributed to during your tenure at Educivic."
                  isOpen={openItems['q5']}
                  onClick={() => toggleItem('q5')}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="Hiring partners?"
                  content="We maintain exclusive direct-hire pipelines with over 40 global tech firms and financial institutions. Our 'Industry Sprints' are often led by senior directors from these partner companies."
                  isOpen={openItems['q6']}
                  onClick={() => toggleItem('q6')}
                />
              </motion.div>
            </motion.div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#C8942A]/20 to-transparent"></div>

          {/* Category: Technical Requirements */}
          <section className="py-24 flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-1/3 md:sticky top-32 text-left md:text-right"
            >
              <h2 className="text-4xl md:text-5xl text-[#0B1628] font-serif">Technical <span className="text-[#C8942A] italic">Requirements</span></h2>
              <p className="mt-4 text-[#8A9AB5] font-light">Ensuring your tools match your ambitions.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="md:w-2/3 w-full"
            >
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="What stack do you use?"
                  content="We focus on the 'Evergreen Stack': TypeScript, React/Next.js, Node.js, and PostgreSQL. We also have specialized tracks for Rust systems engineering and AI-driven architecture."
                  isOpen={openItems['q7']}
                  onClick={() => toggleItem('q7')}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <AccordionItem 
                  title="Do I need a high-end laptop?"
                  content="While we provide cloud computing environments for heavy lifting, you will need a machine capable of running modern IDEs smoothly. We recommend at least 16GB of RAM and a stable high-speed internet connection."
                  isOpen={openItems['q8']}
                  onClick={() => toggleItem('q8')}
                />
              </motion.div>
            </motion.div>
          </section>

        </div>

        {/* Contact Support Section */}
        <section className="bg-[#FAF7F2] py-32 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[800px] mx-auto text-center border border-[#C8942A]/15 p-16 md:p-24 rounded-[32px] bg-white shadow-xl"
          >
            <h2 className="text-5xl md:text-6xl text-[#0B1628] mb-8 font-serif">Unanswered <span className="text-[#C8942A] italic">Questions?</span></h2>
            <p className="text-xl text-[#3D4F6B] font-light leading-relaxed mb-12">
              Our admissions team is available for one-on-one pedigree reviews and technical consultations. Reach out to the Dean of Students.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="bg-[#0B1628] text-white px-12 py-5 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:scale-105 transform duration-300">
                Contact Dean
              </Link>
             
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
