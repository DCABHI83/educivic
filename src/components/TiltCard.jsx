import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltCard = ({ children, className, depth = 30, maxRotation = 5, ...rest }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxRotation}deg`, `-${maxRotation}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxRotation}deg`, `${maxRotation}deg`]);

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
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      {...rest}
    >
      <div 
        style={{ transform: `translateZ(${depth}px)`, transformStyle: "preserve-3d" }}
        className="w-full h-full flex flex-col"
      >
        {children}
      </div>
    </motion.div>
  );
};
