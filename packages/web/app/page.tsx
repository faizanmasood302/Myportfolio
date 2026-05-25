import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MeshBackground from '../components/MeshBackground';
import ParticleCanvas from '../components/ParticleCanvas';
import ProjectGrid from '../components/ProjectGrid';
import SkillsOrbit from '../components/SkillsOrbit';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-bg">
        {/* Background Layers */}
        <MeshBackground />
        <ParticleCanvas />
        
        {/* Content Layers */}
        <div className="relative z-10">
          <Hero />
          <Experience />
          <ProjectGrid />
          <SkillsOrbit />
          <ContactForm />
        </div>

        {/* Floating AI Assistant */}
        <ChatBot />
      </main>
      <footer className="relative z-10 py-12 border-t border-white/5 text-center bg-bg">
        <p className="text-[10px] font-body text-muted uppercase tracking-[0.3em]">
          &copy; 2026 Muhammad Faizan. Designed for Impact.
        </p>
      </footer>
    </>
  );
}
