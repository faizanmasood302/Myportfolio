'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

export default function Reveal({ children, width = 'fit-content', delay = 0.2 }: RevealProps) {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 }, // Reduced translateY for better reliability
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        viewport={{ 
          once: true,
          amount: 0.1 // Triggers as soon as 10% is visible
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
