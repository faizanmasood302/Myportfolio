'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const roles = [
  'AI / ML Engineer',
  'Creative Technologist',
  'Full-Stack Developer',
  'Knowledge Engineer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="z-10 px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          {/* Content Column: 60% width on large screens */}
          <div className="flex-1 lg:max-w-[60%] text-center lg:text-left pt-20 lg:pt-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            
              
              <h1 className="text-5xl md:text-7xl xl:text-9xl font-display font-extrabold text-text tracking-tighter mb-8 leading-[0.9]">
                MUHAMMAD <br className="hidden xl:block" /> FAIZAN<span className="text-accent1">.</span>
              </h1>

              <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-10">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-3xl font-accent italic text-muted"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <p className="text-sm md:text-lg text-white font-body leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 opacity-90">
                Focus on machine learning model development, NLP, and computer vision. 
                Proven track record in building production-grade knowledge systems, RAG-based 
                chatbots, and multi-model classification architectures using Python and modern 
                ML frameworks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a 
                  href="#projects"
                  className="group relative px-10 py-5 bg-accent1 text-bg font-display font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Explore Work</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>
                <a 
                  href="#experience"
                  className="px-10 py-5 bg-transparent border border-white/10 text-text font-display font-bold rounded-full hover:border-accent1/40 hover:bg-white/5 transition-all duration-300"
                >
                  View Background
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual Column: 40% width on large screens */}
          <div className="relative flex-1 lg:max-w-[40%] flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] xl:w-[550px] xl:h-[550px]"
            >
              {/* Intentional Ambient Glow */}
              <div className="absolute -inset-10 bg-accent1/10 rounded-full blur-[120px] pointer-events-none" />
              
              {/* Senior-Level Faded Image Composition */}
              <div className="relative w-full h-full">
                {/* Custom Gradient Mask for Seamless Blending */}
                <div 
                  className="w-full h-full relative z-10"
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)'
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Muhammad Faizan"
                    fill
                    className="object-cover opacity-70 grayscale contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out"
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1200px) 400px, 550px"
                  />
                </div>
                
                {/* Decorative Accent Ring */}
                <div className="absolute inset-0 rounded-full border border-accent1/10 scale-110 pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
