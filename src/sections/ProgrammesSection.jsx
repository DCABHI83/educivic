import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { ProgramTrackModal } from '../components/ProgramTrackModal';
import { TiltCard } from '../components/TiltCard';

const tracks = [
  {
    id: 'full-stack',
    title: 'Full Stack Engineering',
    tag: 'Limited Seats',
    tagVariant: 'limited',
    icon: 'layers',
    description: 'End-to-end architectural mastery. Build resilient, scalable distributed systems from fundamental data structures to modern cloud-native frontends.',
    duration: '20 Weeks',
    bench: '$120k — $160k',
    outcomes: [
      "Master Modern Architecture & Distributed Systems",
      "Real-world Deployment with CI/CD Excellence",
      "AI-Augmented Workflows for Rapid Prototyping",
      "Industry-Grade Security & Performance Optimization"
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    tag: 'Hiring Now',
    tagVariant: 'hiring',
    icon: 'psychology',
    description: 'Go beyond the wrapper. Deploy production-grade neural networks and master the mathematical foundations of modern intelligence systems.',
    duration: '24 Weeks',
    bench: '$145k — $190k',
    outcomes: [
      "Neural Architectures & Deep Learning Models",
      "Predictive Modeling & Statistical Analysis",
      "Large Language Model Fine-tuning",
      "Data Pipeline Engineering"
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    tag: 'Hiring Now',
    tagVariant: 'hiring',
    icon: 'cloud_sync',
    description: 'Architecting the invisible. Master Kubernetes, Infrastructure as Code, and CI/CD pipelines for mission-critical enterprise environments.',
    duration: '16 Weeks',
    bench: '$115k — $155k',
    outcomes: [
      "CI/CD Excellence & Automation",
      "Kubernetes & Container Orchestration",
      "Site Reliability Strategy & Monitoring",
      "Infrastructure as Code Practices"
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    tag: 'Limited Seats',
    tagVariant: 'limited',
    icon: 'admin_panel_settings',
    description: 'Offensive and defensive excellence. From penetration testing to cryptographic engineering, secure the future of the digital frontier.',
    duration: '18 Weeks',
    bench: '$130k — $175k',
    outcomes: [
      "Penetration Testing & Vulnerability Assessment",
      "Cryptographic Engineering",
      "Network Security Architecture",
      "Incident Response & Forensics"
    ]
  },
  {
    id: 'qa-sdet',
    title: 'QA & SDET',
    tag: 'Hiring Now',
    tagVariant: 'hiring',
    icon: 'rule_folder',
    description: 'The vanguard of quality. Design complex automation frameworks and integrate rigorous testing into the heart of the development lifecycle.',
    duration: '12 Weeks',
    bench: '$105k — $140k',
    outcomes: [
      "Test Automation Frameworks",
      "Continuous Integration Testing",
      "Performance & Load Testing",
      "Quality Assurance Strategy"
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    tag: 'Hiring Now',
    tagVariant: 'hiring',
    icon: 'database',
    description: 'Fueling the modern engine. Build high-throughput data pipelines and manage the orchestration of massive-scale analytical systems.',
    duration: '16 Weeks',
    bench: '$125k — $165k',
    outcomes: [
      "Data Pipeline Architecture",
      "Distributed Data Processing",
      "Data Warehouse Design",
      "Real-time Data Streaming"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function ProgrammesSection() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#0B1628] leading-tight mb-4">
            Available <span className="text-[#C8942A] italic">Tracks</span>
          </h2>
          <p className="text-[#3D4F6B] font-light max-w-2xl text-lg md:text-xl">
            Explore our highly selective, industry-led immersion tracks designed for immediate technical deployment.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tracks.map((track) => (
            <TiltCard 
              key={track.id}
              variants={itemVariants}
              maxRotation={8}
              className="bg-white p-12 border border-[rgba(200,148,42,0.15)] flex flex-col h-full hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-10" style={{ transform: "translateZ(40px)" }}>
                <div className="w-14 h-14 bg-[#0B1628] flex items-center justify-center rounded-lg text-[#C8942A]">
                  <span className="material-symbols-outlined text-3xl">{track.icon}</span>
                </div>
                <span 
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full",
                    track.tagVariant === 'limited' 
                      ? "text-[#C8942A] bg-[#F5E6C2]" 
                      : "text-[#0B1628] bg-[#F0EDE9]"
                  )}
                >
                  {track.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-medium text-[#0B1628] mb-4 font-sans" style={{ transform: "translateZ(30px)" }}>{track.title}</h3>
              <p className="text-[#3D4F6B] font-light mb-12 flex-grow leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                {track.description}
              </p>
              
              <div className="border-t border-[#0B1628]/5 pt-8 mb-8 grid grid-cols-2 gap-4" style={{ transform: "translateZ(20px)" }}>
                <div>
                  <span className="block text-[10px] uppercase text-[#8A9AB5] tracking-widest mb-1">Duration</span>
                  <span className="text-[#0B1628] font-medium">{track.duration}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#8A9AB5] tracking-widest mb-1">Industry Bench</span>
                  <span className="text-[#0B1628] font-medium">{track.bench}</span>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedTrack(track)}
                className="text-[#C8942A] font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300 w-fit cursor-pointer text-left"
                style={{ transform: "translateZ(30px)" }}
              >
                Explore Track <span className="ml-2">→</span>
              </button>
            </TiltCard>
          ))}
        </motion.div>
      </div>
      
      <ProgramTrackModal 
        isOpen={!!selectedTrack} 
        onClose={() => setSelectedTrack(null)} 
        track={selectedTrack} 
      />
    </section>
  );
}
