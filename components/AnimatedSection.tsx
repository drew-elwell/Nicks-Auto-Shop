'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

