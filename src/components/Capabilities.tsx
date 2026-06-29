import React, { useState } from 'react';
import { Layers, Cpu, Server, Terminal, Radio, Brain, Settings, DollarSign, Briefcase, Activity } from 'lucide-react';

interface SkillModule {
  name: string;
  category: 'Intelligence' | 'Engineering' | 'Operations' | 'Finance';
  icon: React.ReactNode;
  loadedLoad: string;
  submodules: string[];
  description: string;
}

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills: SkillModule[] = [
    {
      name: 'ARTIFICIAL INTELLIGENCE',
      category: 'Intelligence',
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
      loadedLoad: '98.4%',
      submodules: ['Neural Networks', 'Local Quantization', 'Transformer fine-tuning', 'Edge LLM Routing'],
      description: 'Engineering local deep reasoning nodes capable of autonomous language execution.'
    },
    {
      name: 'PYTHON DEVELOPMENT',
      category: 'Engineering',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      loadedLoad: '96.8%',
      submodules: ['Asynchronous loops', 'Custom CLI toolchains', 'Acoustic DAC drivers', 'Model compiling'],
      description: 'Building dense, performant server logic, automation, and core hardware interfaces.'
    },
    {
      name: 'SYSTEM ARCHITECTURE',
      category: 'Engineering',
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      loadedLoad: '94.2%',
      submodules: ['Microservice topologies', 'Decentralized nodes', 'I2S Audio channels', 'Hardware memory maps'],
      description: 'Formulating end-to-end secure, offline-first system flows and network topologies.'
    },
    {
      name: 'VOICE AI',
      category: 'Intelligence',
      icon: <Radio className="w-4 h-4 text-purple-400" />,
      loadedLoad: '92.0%',
      submodules: ['Offline TTS synthesis', 'Fast Whisper STT', 'Custom voice wakewords', 'Acoustic buffers'],
      description: 'Synthesizing voice capture pathways to create highly organic offline dialog.'
    },
    {
      name: 'HARDWARE INTEGRATION',
      category: 'Engineering',
      icon: <Cpu className="w-4 h-4 text-orange-400" />,
      loadedLoad: '89.5%',
      submodules: ['Raspberry Pi GPIO grids', 'Specialized audio DAC boards', 'Li-Po energy management', 'Acoustic transducers'],
      description: 'Marrying local python intelligence packages with customized physical edge chassis designs.'
    },
    {
      name: 'LINUX INFRASTRUCTURE',
      category: 'Engineering',
      icon: <Settings className="w-4 h-4 text-red-400" />,
      loadedLoad: '95.0%',
      submodules: ['Stripped-userland kernels', 'Systemd microservices', 'ALSA Audio configs', 'Hardened security frameworks'],
      description: 'Hardening system kernels to isolate operational scopes and bypass unneeded resources.'
    },
    {
      name: 'DOCKER VIRTUALIZATION',
      category: 'Operations',
      icon: <Server className="w-4 h-4 text-cyan-500" />,
      loadedLoad: '91.3%',
      submodules: ['Custom slim-images', 'Local container grids', 'Secure storage mounts', 'Multi-arch compiles'],
      description: 'Packaging distributed backend models into isolated, zero-trust container cells.'
    },
    {
      name: 'CLOUD COMPUTING',
      category: 'Operations',
      icon: <Server className="w-4 h-4 text-neutral-400" />,
      loadedLoad: '88.1%',
      submodules: ['Secure network endpoints', 'Decentralized DNS routing', 'Encrypted cloud backup', 'Edge compute triggers'],
      description: 'Leveraging sovereign cloud layers exclusively for immutable archives and backups.'
    },
    {
      name: 'PRODUCT DESIGN',
      category: 'Operations',
      icon: <Briefcase className="w-4 h-4 text-amber-500" />,
      loadedLoad: '90.7%',
      submodules: ['Futuristic UI paradigms', 'Ergonomic hardware chassis', 'User cognitive mappings', 'Clean spatial alignments'],
      description: 'Translating complex engineering architecture into intuitive physical and virtual layouts.'
    },
    {
      name: 'ENTREPRENEURSHIP',
      category: 'Operations',
      icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
      loadedLoad: '92.4%',
      submodules: ['Vertical startup strategies', 'Sovereign industrial roads', 'Venture allocation', 'Nigerian economic design'],
      description: 'Structuring systemic enterprises engineered to bolster, train, and expand domestic grids.'
    },
    {
      name: 'FOREX TRADING',
      category: 'Finance',
      icon: <DollarSign className="w-4 h-4 text-green-400" />,
      loadedLoad: '94.0%',
      submodules: ['Algorithmic order execution', 'Macro liquidity analytics', 'Statistical market drift', 'Systemic market models'],
      description: 'Trading international exchange markets as a rigorous, mathematical discipline mechanism.'
    },
    {
      name: 'RISK MANAGEMENT',
      category: 'Finance',
      icon: <DollarSign className="w-4 h-4 text-rose-500" />,
      loadedLoad: '99.1%',
      submodules: ['Strict capital allocations', 'Dynamic stop-loss rules', 'Statistical portfolio drawdowns', 'Emotional discipline models'],
      description: 'Eliminating survival threats by enforcing absolute risk thresholds over all endeavors.'
    }
  ];

  return (
    <section 
      id="capabilities" 
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative border-b border-[#111] last:border-b-0 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d2ff] mb-2 uppercase tracking-widest glow-blue">
          <Activity className="w-3.5 h-3.5" />
          <span>CAPABILITIES INDEX // SYSTEM MODULE DIAGNOSTICS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-normal tracking-wider text-white uppercase">
          CAPABILITIES
        </h2>
        <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
          No progress bars. Pure architectural diagnostic status lines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-lg p-5 transition-all duration-300 hover:border-[#00d2ff]/40 relative group overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              {/* Top border glow indicator */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div>
                {/* Module Header */}
                <div className="flex items-center justify-between font-mono text-[9px] mb-4 text-neutral-500">
                  <span className="uppercase tracking-widest">SYS_MOD_{skill.category.toUpperCase()}</span>
                  <div className="flex items-center gap-1.5 bg-[#050505] border border-neutral-900 px-2 py-0.5 rounded">
                    <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse inline-block"></span>
                    <span className="text-neutral-400 font-semibold uppercase">ACTIVE // {skill.loadedLoad}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 bg-[#050505] border border-neutral-900 rounded group-hover:border-[#00d2ff]/20 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-display font-bold text-xs md:text-sm text-white tracking-widest uppercase">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Submodules / Sub-skills */}
              <div className="border-t border-[#1a1a1a] pt-3 mt-auto">
                <div className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest mb-1.5">INTEGRATED_SUBMODULES</div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.submodules.map((sub) => (
                    <span 
                      key={sub} 
                      className="font-mono text-[8px] bg-[#050505] border border-neutral-900 text-neutral-400 px-1.5 py-0.5 rounded transition-all group-hover:border-[#00d2ff]/10 group-hover:text-white"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
