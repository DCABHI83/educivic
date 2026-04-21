import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileView = ({ isActive, setActive }) => {
  const content = {
    fullstack: {
      title: "Fullstack Architecture",
      duration: "20 Weeks Intensive",
      bench: "$120k — $160k",
      prereq: "Logical Grit & Basic JS",
      highlights: ["Distributed Systems", "Real-time Networking", "Design Systems at Scale"],
      stack: ["Next.js", "PostgreSQL", "Redis"],
    },
    ai: {
      title: "AI & Machine Learning",
      duration: "24 Weeks Research-Led",
      bench: "$145k — $190k",
      prereq: "Calculus & Python Familiarity",
      highlights: ["Neural Architectures", "Predictive Modeling", "Large Language Fine-tuning"],
      stack: ["PyTorch", "TensorFlow", "HuggingFace"],
    },
    dev: {
      title: "Cloud & DevOps",
      duration: "18 Weeks Systems-Led",
      bench: "$135k — $175k",
      prereq: "Terminal Proficiency",
      highlights: ["CI/CD Excellence", "Kubernetes Orchestration", "Site Reliability Strategy"],
      stack: ["AWS", "Terraform", "Docker"],
    },
  };

  const activeData = content[isActive] || content.fullstack;

  return (
    <div className="w-full px-4 py-8 md:hidden">
    
      <div className="mb-6">
        <h2 className="text-3xl font-serif text-[#0B1628]">
          The <span className="text-[#C8942A] italic">Comparison</span>
        </h2>
      </div>
      <div className="flex justify-between gap-2 p-1 bg-[#132035]/5 rounded-xl border border-[#C8942A]/10 mb-8">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex-1 py-3 px-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
              isActive === key
                ? "bg-[#132035] text-[#F5E6C2] shadow-lg"
                : "text-[#8A9AB5] hover:text-[#0B1628]"
            }`}
          >
            {key === 'fullstack' ? 'Full Stack' : key === 'ai' ? 'AI/ML' : 'Cloud & DevOps'}
          </button>
        ))}
      </div>


      <AnimatePresence mode="wait">
        <motion.div
          key={isActive}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-[#C8942A]/15 shadow-xl shadow-[#0B1628]/5 overflow-hidden"
        >
          <table className="w-full text-left border-collapse">
            {/* <thead>
              <tr className="bg-[#132035] text-[#F5E6C2]">
                <th colSpan={2} className="p-6 font-serif text-xl italic border-b border-[#C8942A]/10">
                  {activeData.title}
                </th>
              </tr>
            </thead> */}
            <tbody className="text-sm text-[#3D4F6B]">
              <tr className="border-b border-[#C8942A]/10">
                <td className="p-6 font-medium text-[#0B1628] w-1/3 bg-[#FAF7F2]/50">Duration</td>
                <td className="p-6">{activeData.duration}</td>
              </tr>
              <tr className="border-b border-[#C8942A]/10">
                <td className="p-6 font-medium text-[#0B1628] bg-[#FAF7F2]/50">Industry Bench</td>
                <td className="p-6">
                  <div className="text-lg font-serif text-[#C8942A] italic">{activeData.bench}</div>
                </td>
              </tr>
              <tr className="border-b border-[#C8942A]/10">
                <td className="p-6 font-medium text-[#0B1628] bg-[#FAF7F2]/50 align-top">Highlights</td>
                <td className="p-6">
                  <ul className="space-y-3">
                    {activeData.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C8942A]">/</span> {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-[#C8942A]/10">
                <td className="p-6 font-medium text-[#0B1628] bg-[#FAF7F2]/50">Prerequisites</td>
                <td className="p-6 italic font-light">{activeData.prereq}</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-[#0B1628] bg-[#FAF7F2]/50 align-top">Tech Stack</td>
                <td className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {activeData.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[10px] bg-[#0B1628]/5 border border-[#0B1628]/10 text-[#0B1628] uppercase font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileView;