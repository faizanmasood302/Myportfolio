'use client';

import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import projectsData from '../data/projects.json';
import { Project } from '../types/project';

export default function ProjectGrid() {
  const projects = projectsData as Project[];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text mb-4">
          SELECTED <br /> PROJECTS<span className="text-accent1">.</span>
        </h2>
      </Reveal>
      
      <Reveal delay={0.4}>
        <p className="text-xs md:text-sm text-muted font-body mb-12 md:mb-16 max-w-md uppercase tracking-widest leading-loose">
          A collection of research projects and production tools across AI, ML, and knowledge engineering.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={0.1 * index} width="100%">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
