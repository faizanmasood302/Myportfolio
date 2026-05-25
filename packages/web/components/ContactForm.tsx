'use client';

import { useState } from 'react';
import Reveal from './Reveal';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || "Failed to send message. Please check your API key or domain settings.");
      }
    } catch (error: any) {
      console.error('Submit error:', error);
      setStatus('error');
      setErrorMessage("Network error: Could not reach the server.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="flex-1">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text mb-6 md:mb-8">
              LET'S <br /> CONNECT<span className="text-accent1">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xs md:text-sm text-muted font-body mb-8 md:mb-12 max-w-md leading-relaxed uppercase tracking-widest">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <div className="space-y-4 md:space-y-6">
              <div className="group flex flex-col">
                <span className="text-[8px] md:text-[10px] text-muted uppercase tracking-[0.3em] mb-1">Email</span>
                <span className="text-sm md:text-lg font-body text-text group-hover:text-accent1 transition-colors">Faizanmasood009@gmail.com</span>
              </div>
              <div className="group flex flex-col">
                <span className="text-[8px] md:text-[10px] text-muted uppercase tracking-[0.3em] mb-1">Phone</span>
                <span className="text-sm md:text-lg font-body text-text group-hover:text-accent1 transition-colors">+92 324 3495748</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex-1 bg-surface border border-white/5 p-6 md:p-10 rounded-2xl md:rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <label className="text-[8px] md:text-[10px] font-body uppercase tracking-[0.3em] text-muted">Name</label>
              <input 
                required
                name="name"
                className="w-full bg-bg border border-white/5 px-4 py-3 md:py-4 rounded-lg md:rounded-xl focus:border-accent1/50 outline-none font-body text-xs md:text-sm transition-colors text-white"
                type="text" 
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[8px] md:text-[10px] font-body uppercase tracking-[0.3em] text-muted">Email</label>
              <input 
                required
                name="email"
                className="w-full bg-bg border border-white/5 px-4 py-3 md:py-4 rounded-lg md:rounded-xl focus:border-accent1/50 outline-none font-body text-xs md:text-sm transition-colors text-white"
                type="email" 
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[8px] md:text-[10px] font-body uppercase tracking-[0.3em] text-muted">Message</label>
              <textarea 
                required
                name="message"
                rows={4}
                className="w-full bg-bg border border-white/5 px-4 py-3 md:py-4 rounded-lg md:rounded-xl focus:border-accent1/50 outline-none font-body text-xs md:text-sm transition-colors resize-none text-white"
                placeholder="How can I help you?"
              />
            </div>

            <button 
              disabled={status === 'loading'}
              className="w-full py-4 md:py-5 bg-accent1 text-bg font-display font-extrabold uppercase tracking-[0.2em] text-xs md:text-sm rounded-lg md:rounded-xl hover:bg-accent1/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="text-accent1 font-body text-[10px] text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <div className="space-y-2 text-center">
                <p className="text-red-400 font-body text-[10px]">Error: {errorMessage}</p>
                <p className="text-muted font-body text-[8px] italic">Please verify your Resend API key and domain settings.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
