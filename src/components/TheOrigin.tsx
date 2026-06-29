import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Target, Eye, Database } from 'lucide-react';
import { TimelineEvent } from '../types';

export default function TheOrigin() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2023 - 2024',
      title: 'COGNITIVE AWAKENING & CORE INCEPTION',
      description: 'Embarked on a deep self-directed exploration of system architecture, cognitive computing, and the Linux userland. Focused on mastering Python, AI networks, and core systems, preparing the groundwork for decentralized intelligence.',
      classification: 'SECURE_DOC_v1.0'
    },
    {
      year: '2024 - 2025',
      title: 'CREATION OF VELLA & VOLCO PROTOTYPING',
      description: 'Pioneered Vella, a local-first voice AI assistant with strict privacy parameters. Synthesized software with edge hardware, initiating the development of Volco: smart headphones powered by local Raspberry Pi nodes.',
      classification: 'SECURE_DOC_v2.4'
    },
    {
      year: '2025 - 2026',
      title: 'SYSTEMIC SYSTEM SYNTHESIS',
      description: 'Currently consolidating systems, refining the Raspberry Pi DAC integration, and scaling local speech-to-text models. Commenced laying down the structural foundation for Void Enterprises.',
      classification: 'ACTIVE_FILE_v3.0'
    },
    {
      year: '2026 & BEYOND',
      title: 'VOID ENTERPRISES ESTABLISHMENT',
      description: 'Architecting the masterplan for Void Tech, Void Education, and additional strategic divisions aimed at empowering Nigeria through distributed software systems, clean energy grids, and systemic technology infrastructure.',
      classification: 'RESTRICTED_BLUEPRINT'
    }
  ];

  return (
    <section 
      id="the-origin" 
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative border-b border-[#111] last:border-b-0 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d2ff] mb-2 uppercase tracking-widest glow-blue">
          <Shield className="w-3.5 h-3.5" />
          <span>DOSSIER // INCEPTION INDEX</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-normal tracking-wider text-white uppercase">
          THE ORIGIN
        </h2>
        <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
          FILE_REF: ST_VOID_CLASSIFIED_ARCHIVE_001
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Story - Classified Document Format */}
        <div className="lg:col-span-7 bg-[#0e0e0e] border border-[#1a1a1a] rounded-lg p-6 md:p-8 relative overflow-hidden box-glow">
          {/* Top Stamp Decorative */}
          <div className="absolute top-4 right-4 border border-red-500/40 text-red-500/60 font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider select-none rotate-3">
            RESTRICTED ACCESS
          </div>

          <div className="flex items-center gap-2 mb-6 text-neutral-500">
            <FileText className="w-4 h-4 text-[#00d2ff]" />
            <span className="font-mono text-xs tracking-widest uppercase">NARRATIVE REPORT // DECRYPTED</span>
          </div>

          <div className="space-y-6 font-sans text-neutral-300 text-sm md:text-base leading-relaxed">
            <p>
              I do not build systems to conform to current standards. I build systems to force new paradigms. 
              My journey began not with a desire to follow a traditional corporate syllabus, but with an insatiable 
              curiosity regarding how intelligence is stored, structured, and executed. 
            </p>
            <p>
              In a world obsessed with centralized servers and cloud reliance, I look at the physical host. I believe that true technology 
              ownership starts with <span className="text-white font-medium">local-first independence</span>—software that compiles, reasons, 
              and runs entirely inside the user’s immediate territory, free from telemetry surveillance.
            </p>
            <p>
              My development as a Software Engineering student in Nigeria is a calculated blueprint. While building local software platforms like 
              <span className="text-white font-medium"> Vella</span>, I realized that hardware must evolve alongside code. This birthed 
              <span className="text-white font-medium"> Volco</span>, bridging local edge intelligence with custom hardware nodes. 
            </p>
            <p className="border-l-2 border-[#00d2ff]/40 pl-4 py-2 italic text-neutral-300 text-sm md:text-base font-serif bg-[#141414]/50">
              "The blueprint of a future technology founder is defined by what he builds when no one is watching, and his commitment to engineering the future of his nation."
            </p>
            <p>
              This is not simply a portfolio of academic exercises. It is the tactical documentation of an emerging 
              technological ecosystem—<span className="text-[#00d2ff] glow-blue font-semibold">VOID ENTERPRISES</span>—engineered to 
              strengthen, empower, and industrialize Nigeria from the ground up.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#1a1a1a] flex flex-wrap gap-4 items-center justify-between font-mono text-[10px] text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>CORE VISION: NATIONAL EMPOWERMENT</span>
            </div>
            <div>STATUS: UNCOMPROMISED</div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="lg:col-span-5 relative pl-4 lg:pl-8">
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00d2ff]/50 via-[#1a1a1a] to-transparent"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline node */}
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#050505] border border-[#1a1a1a] flex items-center justify-center transition-all duration-300 group-hover:border-[#00d2ff] group-hover:scale-110">
                  <div className="w-1 h-1 rounded-full bg-[#00d2ff] scale-0 group-hover:scale-100 transition-transform"></div>
                </div>

                <div className="font-mono text-xs text-[#00d2ff] font-semibold tracking-wider mb-1">
                  {event.year}
                </div>
                
                <h3 className="font-display text-xs md:text-sm font-bold text-white tracking-widest uppercase mb-2">
                  {event.title}
                </h3>
                
                <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
                  {event.description}
                </p>

                <div className="mt-2 flex items-center gap-1.5 font-mono text-[8px] text-neutral-600">
                  <Database className="w-2.5 h-2.5" />
                  <span>REF: {event.classification}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
