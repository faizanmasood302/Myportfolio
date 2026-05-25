'use client';

import Reveal from './Reveal';

const experience = [
  {
    role: 'Machine Learning Intern',
    company: 'Elevvo Pathway',
    period: 'Aug 2025 – Sep 2025',
    description: [
      'Trained and evaluated supervised learning models achieving baseline accuracy improvements of ~12%.',
      'Performed end-to-end data preprocessing pipelines across 3 real-world datasets.',
      'Documented model evaluation metrics and addressed overfitting mitigation.'
    ]
  }
];

const education = [
  {
    degree: 'BS Artificial Intelligence',
    school: 'Sindh Madressatul Islam University, Karachi',
    period: 'Feb 2023 – Expected Feb 2027',
    details: 'GPA: 3.33 / 4.0 | 7th Semester',
    coursework: 'Machine Learning, NLP, Computer Vision, Data Mining, AI, Advanced Statistics'
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Pakistan Navy Polytechnic Institute',
    period: 'Graduated Jul 2021',
    details: 'Grade: A | 2195 / 3100'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-8 md:mb-12">
              EXPERIENCE<span className="text-accent1">.</span>
            </h2>
          </Reveal>
          
          <div className="space-y-10 md:y-12">
            {experience.map((item, i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="relative pl-6 md:pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent1 shadow-[0_0_10px_#6ee7b7]" />
                  <h3 className="text-lg md:text-xl font-display font-bold text-text mb-1">{item.role}</h3>
                  <p className="text-accent1 font-body text-[10px] md:text-xs uppercase tracking-widest mb-4">{item.company} | {item.period}</p>
                  <ul className="space-y-3">
                    {item.description.map((desc, j) => (
                      <li key={j} className="text-xs md:text-sm text-muted font-body flex gap-3">
                        <span className="text-accent1 mt-1">→</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text mb-8 md:mb-12">
              EDUCATION<span className="text-accent1">.</span>
            </h2>
          </Reveal>
          
          <div className="space-y-10 md:y-12">
            {education.map((item, i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="relative pl-6 md:pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent2 shadow-[0_0_10px_#a78bfa]" />
                  <h3 className="text-lg md:text-xl font-display font-bold text-text mb-1">{item.degree}</h3>
                  <p className="text-accent2 font-body text-[10px] md:text-xs uppercase tracking-widest mb-2">{item.school}</p>
                  <p className="text-[10px] text-white/70 font-body italic">{item.period}</p>
                  <p className="text-[10px] text-white font-body mt-2">{item.details}</p>
                  {item.coursework && (
                    <p className="text-[9px] md:text-[10px] text-muted font-body mt-4 leading-relaxed">
                      <span className="text-accent2 uppercase tracking-tighter mr-2 font-bold">Core:</span>
                      {item.coursework}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

