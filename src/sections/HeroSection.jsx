import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "../components/Button";

export const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative md:pt-[4rem] pb-24 pt-15 md:pb-3 px-8 md:px-24 overflow-hidden bg-surface">
      <div className="hero-glow absolute inset-0 z-0"></div>
      <div className="relative z-10 grid md:grid-cols-[60%_40%] items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-7"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="text-brand-gold font-body font-medium tracking-[0.2em] uppercase text-xs">A 3Fi Tech Initiative</span>
          </div>
          <h1 className="text-6xl md:text-7xl text-brand-navy leading-[0.95] tracking-tight font-serif">
            Not education. <br />
            <span className="italic-accent-gold">Employment.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-body-text max-w-xl leading-relaxed">
            Bridging the gap with high-immersion industry sprints. Secure your future with an <strong>official work experience letter</strong> signed by our CEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/apply">
              <Button variant="primary" className="text-lg px-10 py-4 w-full sm:w-auto">
                Join the Cohort
              </Button>
            </Link>
            <Link to="/programmes">
              <Button variant="secondary" className="text-lg px-10 py-4 w-full sm:w-auto">
                View Tracks
              </Button>
            </Link>
          </div>
          <div className=" flex gap-10 pt-12 md:pt-5">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-serif text-brand-navy font-bold">12+</div>
              <div className="text-[0.65rem] font-body text-muted-text  uppercase tracking-wider">Years Tech Heritage</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-serif text-brand-navy font-bold">500+</div>
              <div className="text-[0.65rem] font-body text-muted-text uppercase tracking-wider">Hiring Partners</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-serif text-brand-navy font-bold">100%</div>
              <div className="text-[0.65rem] font-body text-muted-text uppercase tracking-wider">Immersion Based</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center max-w-sm mx-auto w-full group perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          {/* Floating Elements Container with 3D Effect */}
          <motion.div 
            className="w-full space-y-6 md:mb-[2rem] mt-10"
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
          >
            {/* Element 1: Pushed back slightly */}
            <div 
              className="bg-white p-6 rounded-xl shadow-[0px_20px_40px_rgba(11,22,40,0.04)] rotate-[-2deg] transition-transform group-hover:rotate-0 duration-500 will-change-transform"
              style={{ transform: "translateZ(-20px)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">Sprint Board</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-3/4 bg-surface rounded-full"></div>
                <div className="h-2 w-full bg-surface rounded-full"></div>
                <div className="h-2 w-1/2 bg-surface rounded-full"></div>
              </div>
            </div>
            
            {/* Element 2: Pushed forward (Hero Element) */}
            <Link 
              to="/apply" 
              className="block bg-brand-navy text-white p-8 rounded-xl shadow-2xl relative translate-x-6 z-20 will-change-transform hover:shadow-brand-gold/30 transition-shadow duration-500"
              style={{ transform: "translateZ(80px)" }}
            >
              <span className="material-symbols-outlined text-brand-gold mb-4 text-4xl">verified_user</span>
              <h4 className="text-2xl font-serif mb-2 italic">Work Experience Letter</h4>
              <p className="text-sm text-muted-text font-light italic">"Officially verifying your immersion in real-world production cycles at 3Fi Tech..."</p>
            </Link>
            
            {/* Element 3: Neutral depth */}
            <div 
              className="bg-white p-6 rounded-xl shadow-[0px_20px_40px_rgba(11,22,40,0.04)] -translate-x-4 rotate-[1deg] will-change-transform"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-brand-navy">event_seat</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy">Limited Seats</div>
                  <div className="text-xs text-muted-text">15 Candidates / Track</div>
                </div>
              </div>
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
