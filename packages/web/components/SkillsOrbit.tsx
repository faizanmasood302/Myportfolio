'use client';

import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

interface Skill {
  name: string;
  level?: number;
  category: string;
  isChip?: boolean;
}

export default function SkillsOrbit() {
  const skills: Skill[] = (skillsData as any)?.default || skillsData || [];
  const categories = Array.from(new Set(skills.map(s => s.category))).filter(Boolean);

  const categoryColors: Record<string, string> = {
    'ML / AI Frameworks': 'text-accent1',
    'Data Science': 'text-accent2',
    'NLP & Computer Vision': 'text-accent1',
    'Web & Tools': 'text-accent3',
  };

  if (skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text mb-4">
            TECHNICAL <br /> ARSENAL<span className="text-accent1">.</span>
          </h2>
          <p className="text-muted font-body max-w-md uppercase tracking-[0.2em] text-[8px] md:text-[10px]">
            Skills & Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-16">
          {categories.map((category, catIndex) => (
            <div key={category} className="space-y-6 md:space-y-8">
              <h3 className={`${categoryColors[category] || 'text-accent1'} font-display font-bold text-base md:text-lg uppercase tracking-widest border-b border-white/5 pb-4`}>
                {category}
              </h3>
              
              <div className="space-y-8">
                <div className="space-y-6">
                  {skills
                    .filter(s => s.category === category && !s.isChip)
                    .map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-xs md:text-sm font-body text-text group-hover:text-accent1 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[9px] md:text-[10px] font-body text-muted italic">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-[1px] md:h-[2px] bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category === 'Web & Tools' ? 'from-accent3 to-accent3/50' : 'from-accent1 to-accent2'}`}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(s => s.category === category && s.isChip)
                    .map((skill) => (
                      <span 
                        key={skill.name}
                        className="px-3 py-1.5 bg-surface border border-white/5 rounded-lg text-[10px] font-body text-text/60 hover:text-accent3 hover:border-accent3/30 transition-all cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
