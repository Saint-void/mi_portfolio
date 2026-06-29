import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Lightbulb, MapPin, Target, Zap } from 'lucide-react';

interface Division {
  id: string;
  name: string;
  mission: string;
  roadmap: string;
  icon: string;
}

export default function VoidEnterprises() {
  const [activeDivision, setActiveDivision] = useState<string>('ai');
  const [illuminatedState, setIlluminatedState] = useState<number>(0);

  const divisions: Record<string, Division> = {
    tech: {
      id: 'tech',
      name: 'VOID TECH',
      mission: 'Architecting the core operating models, secure cloud modules, and sovereign hardware nodes for independent African telemetry.',
      roadmap: 'Currently prototyping localized server clusters and offline-first encryption kernels.',
      icon: '💻'
    },
    education: {
      id: 'education',
      name: 'VOID EDUCATION',
      mission: 'Democratizing enterprise-grade engineering and cognitive AI education throughout remote territories via offline-first academy hubs.',
      roadmap: 'Drafting structured curriculums and local AI micro-tutor deployments.',
      icon: '📚'
    },
    energy: {
      id: 'energy',
      name: 'VOID ENERGY',
      mission: 'Engineering micro-grid smart distribution modules to tackle localized grid inconsistencies and empower community autonomy.',
      roadmap: 'Initial schematics for solar-tied capacitor storage units.',
      icon: '⚡'
    },
    health: {
      id: 'health',
      name: 'VOID HEALTH',
      mission: 'Deploying edge telemetry devices for early bio-surveillance, and portable diagnostics operating completely offline.',
      roadmap: 'Modeling basic diagnostic neural networks for edge implementation.',
      icon: '🩺'
    },
    transport: {
      id: 'transport',
      name: 'VOID TRANSPORT',
      mission: 'Designing intelligent route-planning neural layers and modular electric transport prototypes adapted for rugged industrial logistics.',
      roadmap: 'Simulating multi-node supply-chain routing pathways.',
      icon: '🚛'
    },
    manufacturing: {
      id: 'manufacturing',
      name: 'VOID MANUFACTURING',
      mission: 'Constructing localized modular fabrication boxes enabling precision components 3D printing and hardware assembly.',
      roadmap: 'Drafting parameters for high-precision edge printing frames.',
      icon: '🛠️'
    },
    ai: {
      id: 'ai',
      name: 'VOID AI',
      mission: 'Training localized, culture-aligned, highly efficient deep intelligence systems for language translation and industry operations.',
      roadmap: 'Fine-tuning quantized parameter layers focused on low-bandwidth operations.',
      icon: '🧠'
    }
  };

  // State illumination loop (Nigeria major states)
  const nigerianStates = [
    { name: 'LAGOS', coords: '90,105', description: 'Void Enterprises Primary Inception & Software Core' },
    { name: 'ABUJA', coords: '135,70', description: 'Federal Policy & Strategic Sovereign Integration' },
    { name: 'PORT HARCOURT', coords: '120,110', description: 'Heavy Industrial Fabrication & Energy Grid Core' },
    { name: 'ENUGU', coords: '135,95', description: 'Void Education Academy Pilot Hub' },
    { name: 'KANO', coords: '145,35', description: 'Sovereign Agricultural Logistics Network Node' },
    { name: 'IBADAN', coords: '82,90', description: 'Sovereign Hardware Hardware Assembly Lab' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIlluminatedState((prev) => (prev + 1) % nigerianStates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="void-enterprises" 
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative border-b border-[#111] last:border-b-0 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d2ff] mb-2 uppercase tracking-widest glow-blue">
          <Globe className="w-3.5 h-3.5" />
          <span>SOVEREIGN DIRECTIVE // INDUSTRIAL EMPIRE</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-normal tracking-wider text-white uppercase">
          VOID ENTERPRISES
        </h2>
        <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
          A company built to strengthen Nigeria through technology, education, innovation, and industrial development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Holographic Nigeria Map SVG */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-[420px] aspect-square bg-[#090909] border border-[#1a1a1a] rounded-lg p-6 box-glow overflow-hidden flex flex-col justify-between">
            {/* Holographic scanning effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent animate-bounce opacity-40" />

            <div className="font-mono text-[8px] text-neutral-500 flex justify-between">
              <span>HOLOGRAPHIC_MAP_v2.09</span>
              <span>STATE_INDEX: {illuminatedState + 1}/6</span>
            </div>

            {/* Simulated Nigeria Holographic Map Map */}
            <div className="my-auto flex justify-center items-center relative py-6">
              <svg width="280" height="180" viewBox="0 0 280 180" className="text-neutral-800">
                {/* Abstract outline of Nigeria using polygons */}
                <polygon 
                  points="50,110 55,75 80,45 125,30 170,25 210,35 240,65 245,115 220,135 180,140 145,145 110,135 80,130" 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.04)" 
                  strokeWidth="1.5" 
                />
                
                {/* Dotted mesh grid internally */}
                <polygon 
                  points="60,100 70,80 90,60 120,45 160,40 200,45 225,75 225,110 200,125 160,130 110,125" 
                  fill="none" 
                  stroke="rgba(0, 210, 255, 0.08)" 
                  strokeWidth="0.75" 
                  strokeDasharray="4,4" 
                />

                {/* State Node Connectors */}
                {nigerianStates.map((state, idx) => {
                  const [x, y] = state.coords.split(',').map(Number);
                  const isActive = illuminatedState === idx;
                  return (
                    <g key={idx}>
                      {/* Connection trace to Center Core (Abuja) */}
                      {idx !== 1 && (
                        <line 
                          x1="135" y1="70" 
                          x2={x} y2={y} 
                          stroke={isActive ? 'rgba(0, 210, 255, 0.25)' : 'rgba(26, 26, 26, 0.3)'} 
                          strokeWidth="0.5" 
                        />
                      )}
                      
                      {/* State beacon */}
                      <circle 
                        cx={x} 
                        cy={y} 
                        r={isActive ? 4 : 2} 
                        fill={isActive ? '#00d2ff' : '#222'} 
                        className="transition-all duration-300"
                      />
                      
                      {isActive && (
                        <circle 
                          cx={x} 
                          cy={y} 
                          r={10} 
                          fill="none" 
                          stroke="#00d2ff" 
                          strokeWidth="0.5" 
                          className="animate-ping" 
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Active illuminated State details Overlay */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/90 border border-neutral-900 rounded p-2.5 font-mono text-[9px] text-neutral-400">
                <div className="flex items-center gap-1.5 text-[#00d2ff] font-bold">
                  <MapPin className="w-3 h-3" />
                  <span>ACTIVE BEACON // {nigerianStates[illuminatedState].name}</span>
                </div>
                <p className="mt-0.5 text-neutral-500 leading-tight">
                  {nigerianStates[illuminatedState].description}
                </p>
              </div>
            </div>

            <div className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest text-center mt-2">
              Sovereign Industrial Network // ACTIVE STATES DETECTED
            </div>
          </div>
        </div>

        {/* Right Side: Expanding Divisions Nodes and Details */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#00d2ff] uppercase tracking-widest flex items-center gap-1.5 glow-blue">
              <Target className="w-3.5 h-3.5" />
              <span>DIVISIONS OF THE EMPIRE</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Void Enterprises operates on a vertical multi-sector architecture. Click any nodes below to explore their structural roles in national infrastructure development.
            </p>
          </div>

          {/* Grid Layout of the Expanding Divisions Nodes connected to a central core */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.keys(divisions).map((key) => {
              const div = divisions[key];
              const isSelected = activeDivision === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDivision(key)}
                  className={`p-3 rounded border text-left font-mono text-xs transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-[#0e0e0e] border-[#00d2ff] text-white shadow shadow-cyan-950/40' 
                      : 'bg-[#050505] border-[#1a1a1a] text-neutral-500 hover:border-neutral-800 hover:text-neutral-300'
                  }`}
                >
                  <div className="text-base mb-1.5">{div.icon}</div>
                  <div className="font-display font-bold text-[10px] tracking-wider truncate">
                    {div.name}
                  </div>
                  <div className="text-[8px] text-neutral-600 mt-1 uppercase tracking-widest">
                    {isSelected ? 'ACTIVE_CORE' : 'MODULE_IDLE'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Division Panel Card */}
          <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded p-5 relative overflow-hidden box-glow min-h-[160px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-full pointer-events-none" />
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-neutral-900 pb-2">
                <span className="text-lg">{divisions[activeDivision].icon}</span>
                <span className="font-display font-bold uppercase tracking-wider text-sm text-white">
                  {divisions[activeDivision].name}
                </span>
                <span className="ml-auto font-mono text-[8px] text-neutral-600">DIV_REF: {divisions[activeDivision].id.toUpperCase()}_CORP</span>
              </div>
              <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">
                {divisions[activeDivision].mission}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1a1a1a] font-mono text-[9px] text-[#00d2ff] flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>CURRENT BLUEPRINT: {divisions[activeDivision].roadmap}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
