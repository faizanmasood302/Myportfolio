'use client';

import { motion } from 'framer-motion';

export default function ResumeButton() {
  const handleDownload = () => {
    // Analytics tracking could go here
    console.log('Resume downloaded');
    window.open('/resume.pdf', '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className="group relative flex items-center gap-2 px-6 py-3 bg-surface border border-accent1/20 rounded-full text-accent1 font-body text-xs uppercase tracking-widest hover:bg-accent1/10 transition-colors"
    >
      <span>Download Resume</span>
      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5 5-5M12 15V3"/>
      </svg>
    </motion.button>
  );
}
