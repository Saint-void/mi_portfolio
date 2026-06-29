import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { Cpu, Server, Lock, Pocket, Smartphone, RefreshCw, Volume2, ShieldAlert, CheckCircle, Zap } from 'lucide-react';

export default function ActiveSystems() {
  const [activeDossier, setActiveDossier] = useState<string>('vella');

  const projects: Record<string, Project> = {
    vella: {
      id: 'vella',
      name: 'VELLA VOICE ASSISTANT',
      status: 'Active Development',
      purpose: 'A secure, local-first conversational intelligence unit engineered for localized autonomy, robust privacy metrics, and instant audio synthesis.',
      details: [
        'Local speech processing pipeline eliminating cloud telemetry completely.',
        'Fully offline language model compiler operating on unified edge constraints.',
        'Custom audio pipeline with low-latency response buffering.'
      ],
      challenges: [
        'Scaling quantized LLM parameters to operate on limited edge RAM constraints.',
        'Developing precise local speech-to-text wake-word engines without high ambient noise interference.'
      ],
      futurePlans: [
        'Full integration with localized home automated hardware interfaces.',
        'Implementation of customized voice profile offline training mechanisms.'
      ]
    },
    volco: {
      id: 'volco',
      name: 'VOLCO INTELLIGENCE HEADPHONES',
      status: 'Prototype',
      purpose: 'An advanced smart headphone unit packing localized computational intelligence and seamless environment interaction directly into edge hardware.',
      details: [
        'Powered by standard Raspberry Pi computing nodes embedded in dual-channel housings.',
        'Integrated low-latency DAC (Digital-to-Analog Converter) for spatial acoustic performance.',
        'Physical voice triggers routing directly to custom local agent nodes.'
      ],
      challenges: [
        'Thermal dissipation management within structural composite frames.',
        'Power supply calibration to maintain stable uptime on mobile Li-Po battery packs.'
      ],
      futurePlans: [
        'Refining custom circuit board layout to minimize overall casing footprint.',
        'Formulating dynamic multi-channel acoustic active noise cancelation (ANC) models.'
      ]
    },
    voidtech: {
      id: 'voidtech',
      name: 'VOID TECH FOUNDATION',
      status: 'Foundation Phase',
      mission: 'Engineering the Future',
      purpose: 'Building the fundamental sovereign technology stack—including secure distributed operating frameworks, local computing modules, and edge telemetry tools.',
      details: [
        'Development of custom hardened Linux userland distributions.',
        'Formulating encrypted, decentralized mesh protocols for offline communication.',
        'Synthesizing localized industrial compute grids.'
      ],
      challenges: [
        'Ensuring cryptographic integrity over low-bandwidth localized mesh nodes.',
        'Bypassing unreliable local grid networks with hybrid capacitor batteries.'
      ],
      futurePlans: [
        'Launching low-power modular edge computing nodes.',
        'Securing government-level sovereign communications encryption protocols.'
      ]
    },
    voidedu: {
      id: 'voidedu',
      name: 'VOID EDUCATION NETWORK',
      status: 'Strategic Planning',
      mission: 'Empowering Nigeria’s Mindscape',
      purpose: 'Constructing a modular, AI-powered offline educational ecosystem to supply elite-level academic mastery tools directly to rural communities.',
      details: [
        'Designing a sovereign portable AI tutor system running entirely offline.',
        'Delivering structured offline engineering curriculums directly through local networks.',
        'Enabling localized collaborative project tracking boards for academies.'
      ],
      challenges: [
        'Distributing up-to-date models to territories with minimal network capability.',
        'Developing highly lightweight local client viewers for old mobile hardware.'
      ],
      futurePlans: [
        'Piloting local-first digital schools in underserved Nigerian states.',
        'Establishing physical tech incubators paired with AI-driven training models.'
      ]
    }
  };

  const projectKeys = Object.keys(projects);
  const currentProject = projects[activeDossier];

  // Helper to color project status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active Development': return 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20';
      case 'Prototype': return 'text-yellow-400 border-yellow-500/30 bg-yellow-950/20';
      case 'Foundation Phase': return 'text-purple-400 border-purple-500/30 bg-purple-950/20';
      case 'Strategic Planning': return 'text-blue-400 border-blue-500/30 bg-blue-950/20';
      default: return 'text-neutral-400 border-neutral-800 bg-neutral-900/40';
    }
  };

  return (
    <section 
      id="active-systems" 
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative border-b border-[#111] last:border-b-0 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d2ff] mb-2 uppercase tracking-widest glow-blue">
          <Cpu className="w-3.5 h-3.5 animate-pulse" />
          <span>PORTFOLIO DIRECTORY // CORE PROJECT DOSSIERS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-normal tracking-wider text-white uppercase">
          ACTIVE SYSTEMS
        </h2>
        <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
          TOTAL_DOSSIERS: 04 // ACCESS_LEVEL: CODENAME_ST_VOID
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Dossier List Tabs */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
          {projectKeys.map((key) => {
            const proj = projects[key];
            const isSelected = activeDossier === key;
            return (
              <button
                key={key}
                onClick={() => setActiveDossier(key)}
                className={`flex-1 lg:flex-none text-left p-4 rounded border transition-all duration-300 font-mono text-xs cursor-pointer min-w-[200px] lg:min-w-0 ${
                  isSelected 
                    ? 'bg-[#0e0e0e] border-[#00d2ff] text-white shadow-lg shadow-cyan-950/20' 
                    : 'bg-[#050505] border-[#1a1a1a] text-neutral-500 hover:border-neutral-800 hover:text-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-neutral-600 uppercase">SYS_{key.toUpperCase()}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-[#00d2ff] glow-blue' : 'bg-neutral-800'
                  }`}></span>
                </div>
                <div className="font-display font-bold uppercase tracking-wider text-sm">
                  {proj.name.split(' ')[0]}
                </div>
                <div className="text-[9px] text-neutral-500 truncate mt-1">
                  {proj.status}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Dossier File View */}
        <div className="lg:col-span-8 bg-[#0e0e0e] border border-[#1a1a1a] rounded-lg p-6 md:p-8 relative min-h-[480px] box-glow flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDossier}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1a1a1a] pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-wide uppercase">
                    {currentProject.name}
                  </h3>
                  {currentProject.mission && (
                    <p className="font-mono text-[10px] text-[#00d2ff] tracking-widest uppercase mt-0.5 glow-blue">
                      MISSION: {currentProject.mission}
                    </p>
                  )}
                </div>
                <div className={`px-2.5 py-1 rounded border font-mono text-[9px] font-semibold uppercase tracking-wider ${getStatusColor(currentProject.status)}`}>
                  STATUS: {currentProject.status}
                </div>
              </div>

              {/* Purpose */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">SYSTEM_PURPOSE</div>
                <p className="text-neutral-300 text-sm leading-relaxed">{currentProject.purpose}</p>
              </div>

              {/* Blueprint Schematic Section */}
              <div className="bg-[#050505] border border-[#1a1a1a] rounded p-4 font-mono text-[10px]">
                <div className="flex items-center justify-between text-neutral-500 border-b border-[#1a1a1a] pb-2 mb-3 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#00d2ff]" />
                    <span>SYSTEM_BLUEPRINT_SCHEMATIC</span>
                  </div>
                  <span>REF_FILE_002a</span>
                </div>

                {activeDossier === 'vella' && (
                  <div className="py-2 space-y-4">
                    {/* SVG Architecture Diagram Vella */}
                    <div className="flex justify-center py-2 bg-[#0a0a0a] rounded border border-neutral-900">
                      <svg width="280" height="120" viewBox="0 0 280 120" className="text-[#00d2ff] opacity-85">
                        <rect x="10" y="35" width="60" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                        <text x="40" y="58" fontSize="8" textAnchor="middle" fill="#888" fontFamily="monospace">VOICE_IN</text>
                        <line x1="70" y1="55" x2="105" y2="55" stroke="currentColor" strokeWidth="1" />
                        <polygon points="105,55 100,52 100,58" fill="currentColor" />

                        <rect x="110" y="15" width="80" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
                        <text x="150" y="35" fontSize="8" textAnchor="middle" fill="#fff" fontFamily="monospace" fontWeight="bold">LOCAL LLM</text>
                        <text x="150" y="52" fontSize="7" textAnchor="middle" fill="#00d2ff" fontFamily="monospace">ROUTER ENGINE</text>
                        <text x="150" y="65" fontSize="6" textAnchor="middle" fill="#666" fontFamily="monospace">INTENT_MAP</text>
                        <text x="150" y="78" fontSize="6" textAnchor="middle" fill="#666" fontFamily="monospace">PRIVACY_SHIELD</text>

                        <line x1="190" y1="55" x2="225" y2="55" stroke="currentColor" strokeWidth="1" />
                        <polygon points="225,55 220,52 220,58" fill="currentColor" />

                        <rect x="230" y="35" width="40" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                        <text x="250" y="58" fontSize="8" textAnchor="middle" fill="#888" fontFamily="monospace">VOICE_OUT</text>
                      </svg>
                    </div>
                    <div className="text-neutral-500 flex justify-between px-2 text-[9px]">
                      <span>INPUT: PCM BUFFER</span>
                      <span>COMPILING: CUDA/TENSOR</span>
                      <span>SECURE: LOCALHOST</span>
                    </div>
                  </div>
                )}

                {activeDossier === 'volco' && (
                  <div className="py-2 space-y-4">
                    {/* SVG Architecture Diagram Volco */}
                    <div className="flex justify-center py-2 bg-[#0a0a0a] rounded border border-neutral-900">
                      <svg width="280" height="120" viewBox="0 0 280 120" className="text-[#00d2ff] opacity-85">
                        <circle cx="50" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
                        <text x="50" y="63" fontSize="7" textAnchor="middle" fill="#888" fontFamily="monospace">RPi NODE</text>

                        <line x1="72" y1="60" x2="118" y2="60" stroke="currentColor" strokeWidth="1" />
                        <polygon points="118,60 113,57 113,63" fill="currentColor" />

                        <rect x="120" y="30" width="55" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="1" />
                        <text x="147" y="50" fontSize="8" textAnchor="middle" fill="#fff" fontFamily="monospace">DAC COUPLER</text>
                        <text x="147" y="68" fontSize="7" textAnchor="middle" fill="#00d2ff" fontFamily="monospace">I2S STREAM</text>

                        <line x1="175" y1="60" x2="208" y2="60" stroke="currentColor" strokeWidth="1" />
                        <polygon points="208,60 203,57 203,63" fill="currentColor" />

                        <circle cx="230" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                        <text x="230" y="63" fontSize="7" textAnchor="middle" fill="#888" fontFamily="monospace">DRIVER</text>
                      </svg>
                    </div>
                    <div className="text-neutral-500 flex justify-between px-2 text-[9px]">
                      <span>HOST: RASPBERRY PI</span>
                      <span>AUDIO: low-noise DAC</span>
                      <span>SYSTEM: LINUX ALSA</span>
                    </div>
                  </div>
                )}

                {activeDossier === 'voidtech' && (
                  <div className="py-2 space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border border-neutral-900 bg-neutral-950/40 p-2 rounded">
                        <div className="text-neutral-600 font-bold mb-1">MEMBER_01</div>
                        <div className="text-[#00d2ff] font-semibold">SOVEREIGN OS</div>
                        <p className="text-neutral-500 text-[8px] mt-1">Local microkernel Linux setup with hyper-stripped assets.</p>
                      </div>
                      <div className="border border-neutral-900 bg-neutral-950/40 p-2 rounded">
                        <div className="text-neutral-600 font-bold mb-1">MEMBER_02</div>
                        <div className="text-[#00d2ff] font-semibold">MESH PROTOCOL</div>
                        <p className="text-neutral-500 text-[8px] mt-1">Peer-to-peer secure decentralized packet router.</p>
                      </div>
                      <div className="border border-neutral-900 bg-neutral-950/40 p-2 rounded">
                        <div className="text-neutral-600 font-bold mb-1">MEMBER_03</div>
                        <div className="text-[#00d2ff] font-semibold">EDGE SERVER</div>
                        <p className="text-neutral-500 text-[8px] mt-1">Ultra-low power ARM computing unit clusters.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDossier === 'voidedu' && (
                  <div className="py-2 space-y-3">
                    <div className="border border-[#1a1a1a] bg-[#050505] p-3 rounded">
                      <div className="text-neutral-500 text-[8px] uppercase tracking-wider mb-2">INTELLIGENT CLASSROOM TOPOLOGY</div>
                      <div className="flex items-center justify-between text-white border-b border-neutral-900 pb-1.5 mb-2">
                        <span>OFFLINE COGNITIVE CHUB</span>
                        <span className="text-[#00d2ff] glow-blue">ACTIVE</span>
                      </div>
                      <p className="text-neutral-400 text-[9px] leading-relaxed">
                        A centralized Raspberry Pi acting as an offline repository and model proxy inside classrooms. Students connect locally with wifi-enabled modules without internet, using localized intelligence to master math, computing, and physics.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress & Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Developments Progress */}
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">INTEGRATED_SYSTEM_MODULES</div>
                  <ul className="space-y-1.5">
                    {currentProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00d2ff]/60 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges */}
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">CRITICAL_CHALLENGES_SOLVED</div>
                  <ul className="space-y-1.5">
                    {currentProject.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                        <ShieldAlert className="w-3.5 h-3.5 text-yellow-500/60 shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Blueprint Footer Details */}
          <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-wrap gap-4 items-center justify-between font-mono text-[10px] text-neutral-500">
            <div>FILE_REF: DOSSIER_{activeDossier.toUpperCase()}_v4.1</div>
            <div>DECRYPTION_KEY: SECURE_ST_VOID_LOG</div>
          </div>
        </div>
      </div>
    </section>
  );
}
