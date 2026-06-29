import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ParticleBackground from './components/ParticleBackground';
import TerminalLanding from './components/TerminalLanding';
import SystemHeader from './components/SystemHeader';
import TheOrigin from './components/TheOrigin';
import ActiveSystems from './components/ActiveSystems';
import VoidEnterprises from './components/VoidEnterprises';
import Capabilities from './components/Capabilities';
import Discipline from './components/Discipline';
import InitiateConnection from './components/InitiateConnection';
import { ArrowDown, Cpu, ShieldCheck } from 'lucide-react';

export default function App() {
  const [hasEnteredArchive, setHasEnteredArchive] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const sections = [
    { id: 'hero', label: 'ORIGIN CORE' },
    { id: 'the-origin', label: 'THE ORIGIN' },
    { id: 'active-systems', label: 'ACTIVE SYSTEMS' },
    { id: 'void-enterprises', label: 'VOID ENTERPRISES' },
    { id: 'capabilities', label: 'CAPABILITIES' },
    { id: 'discipline', label: 'DISCIPLINE' },
    { id: 'initiate-connection', label: 'CONNECTION' }
  ];

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver to update active section on scroll
  useEffect(() => {
    if (!hasEnteredArchive) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sec.id);
            }
          },
          {
            rootMargin: '-40% 0px -40% 0px' // Trigger active state when section is near middle of viewport
          }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [hasEnteredArchive]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-[#00d2ff]/20 selection:text-[#00d2ff]">
      <AnimatePresence mode="wait">
        {!hasEnteredArchive ? (
          <TerminalLanding onComplete={() => setHasEnteredArchive(true)} />
        ) : (
          <motion.div
            key="archive-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Ambient Star Particles Background */}
            <ParticleBackground />

            {/* Futuristic Top HUD and Reading Rails Navigation */}
            <SystemHeader 
              activeSection={activeSection} 
              sections={sections} 
              onSectionClick={scrollToSection} 
            />

            {/* Main scrollable grid of segments */}
            <main className="relative z-10 pt-16">
              
              {/* HERO SECTION */}
              <section 
                id="hero" 
                className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 py-12 max-w-6xl mx-auto border-b border-[#111]"
              >
                {/* Spacer */}
                <div className="hidden md:block h-12" />

                {/* Core Hero Branding layout */}
                <div className="space-y-8 my-auto">
                  
                  {/* Small decorative subtitle */}
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#00d2ff] tracking-[0.25em] uppercase glow-blue">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>SECURE ARCHIVE ONLINE // DIRECT_LOG: ORIGIN</span>
                  </div>

                  {/* Main Display Title */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#00d2ff] uppercase glow-blue">
                      SOGOLO DONALDSON
                    </div>
                    <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-display font-normal tracking-wider text-white uppercase leading-none select-none">
                      ST VOID
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs md:text-sm text-neutral-400 pt-1">
                      <span className="text-[#00d2ff] font-semibold glow-blue">BUILDER.</span>
                      <span className="text-white font-semibold">ENGINEER.</span>
                      <span className="text-neutral-500 font-semibold">FOUNDER.</span>
                    </div>
                  </div>

                  {/* Sub-details block */}
                  <div className="border-l-2 border-neutral-900 pl-6 py-2 space-y-2 font-mono text-xs text-neutral-500 uppercase tracking-widest max-w-md">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00d2ff] rounded-full inline-block"></span>
                      <span>Software Engineering Student</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00d2ff] rounded-full inline-block"></span>
                      <span>AI Systems Developer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00d2ff] rounded-full inline-block"></span>
                      <span>Creator of Vella</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00d2ff] rounded-full inline-block"></span>
                      <span>Creator of Volco</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00d2ff] rounded-full inline-block"></span>
                      <span>Founder of Void Enterprises</span>
                    </div>
                  </div>
                </div>

                {/* Hero Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#1a1a1a]/50 pt-8 mt-12">
                  <div className="flex items-center gap-3 font-display text-sm md:text-base tracking-widest text-white uppercase font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#00d2ff]" />
                    <span>Engineering Nigeria's Future.</span>
                  </div>
                  
                  {/* Scroll Down Button */}
                  <button 
                    onClick={() => scrollToSection('the-origin')}
                    className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-neutral-500 hover:text-[#00d2ff] transition-colors duration-300 group cursor-pointer focus:outline-none"
                  >
                    <span>DECRYPTION PATHWAY // SCROLL DOWN</span>
                    <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* ABOUT SECTION (THE ORIGIN) */}
              <TheOrigin />

              {/* PROJECTS SECTION (ACTIVE SYSTEMS) */}
              <ActiveSystems />

              {/* VISION SECTION (VOID ENTERPRISES) */}
              <VoidEnterprises />

              {/* SKILLS SECTION (CAPABILITIES) */}
              <Capabilities />

              {/* TRADING SECTION (DISCIPLINE) */}
              <Discipline />

              {/* CONTACT SECTION (INITIATE CONNECTION) */}
              <InitiateConnection />

            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
