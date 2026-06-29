import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface SystemHeaderProps {
  activeSection: string;
  sections: Array<{ id: string; label: string }>;
  onSectionClick: (id: string) => void;
}

export default function SystemHeader({ activeSection, sections, onSectionClick }: SystemHeaderProps) {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [ngaTime, setNgaTime] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC Time
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
      
      // West Africa Time (Nigeria is UTC+1)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setNgaTime(formatted + ' WAT');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Click outside backdrop for mobile dropdown */}
      {isMenuOpen && (
        <div 
          id="menu-backdrop"
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-45 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Top Floating HUD */}
      <header 
        id="sys-hud-header"
        className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#1a1a1a] px-4 sm:px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping"></span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white">
              VOID://ORIGIN
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-neutral-500 border-l border-[#1a1a1a] pl-6">
            <span>LOC: NGA_LGS_CORE</span>
            <span className="text-[#1a1a1a]">•</span>
            <span>BUILD: v4.11.0</span>
          </div>
        </div>

        {/* Clickable Section Indicator Menu Trigger */}
        <button
          id="sys-segment-trigger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#0e0e0e] hover:bg-[#121212] border border-[#1a1a1a] hover:border-[#00d2ff]/40 rounded font-mono text-[9px] sm:text-[10px] transition-all cursor-pointer focus:outline-none select-none"
        >
          <span className="text-neutral-500 uppercase hidden xs:inline">SYS_SEGMENT:</span>
          <span className="text-[#00d2ff] font-medium tracking-wider uppercase glow-blue flex items-center gap-1">
            {sections.find((s) => s.id === activeSection)?.label || 'INDEX'}
            <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform duration-350 ${isMenuOpen ? 'rotate-180 text-[#00d2ff]' : ''}`} />
          </span>
        </button>

        {/* Timestamps */}
        <div className="flex items-center gap-3 md:gap-6 font-mono text-[10px] text-neutral-400">
          <div className="hidden sm:block text-right">
            <div className="text-neutral-500 text-[8px] uppercase tracking-wider">SYS TIME</div>
            <div>{currentTime}</div>
          </div>
          <div className="text-right sm:border-l sm:border-[#1a1a1a] sm:pl-4 md:pl-6">
            <div className="text-neutral-500 text-[8px] uppercase tracking-wider">NIGERIA MAIN</div>
            <div className="text-[#00d2ff] glow-blue font-semibold">{ngaTime}</div>
          </div>
        </div>
      </header>

      {/* Dropdown Tactical Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="sys-segment-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-14 left-4 right-4 z-50 bg-[#0e0e0e]/95 backdrop-blur-xl border border-[#1a1a1a] rounded-lg p-5 shadow-2xl shadow-cyan-950/40 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3 mb-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
              <span>ARCHIVE_SEGMENTS_INDEX</span>
              <span>SELECT SYSTEM MODULE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {sections.map((sec, index) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      onSectionClick(sec.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded font-mono text-xs border transition-all duration-350 cursor-pointer flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#00d2ff]/5 border-[#00d2ff] text-white glow-blue active' 
                        : 'bg-[#050505] border-[#1a1a1a] text-neutral-400 hover:border-neutral-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[9px] ${isActive ? 'text-[#00d2ff] font-bold' : 'text-neutral-600'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-bold uppercase tracking-wider">
                        {sec.label}
                      </span>
                    </div>
                    {isActive ? (
                      <span className="text-[8px] bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20 px-1.5 py-0.5 rounded tracking-widest uppercase">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-[8px] text-neutral-600 uppercase tracking-widest">
                        LOAD
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-[#1a1a1a] flex items-center justify-between font-mono text-[8px] text-neutral-600 uppercase">
              <span>SYS.LOC: SECURE_CORE_NODE</span>
              <span>VOLCO_VELLA_ACTIVE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Navigation Rails - Fully Responsive Mini Dot Rail with Tooltips */}
      <nav 
        id="sys-side-nav"
        className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 md:gap-5"
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-[#1a1a1a] mx-auto mb-1" />
        {sections.map((sec, index) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSectionClick(sec.id)}
              className={`group flex items-center gap-3 text-left focus:outline-none cursor-pointer relative ${isActive ? 'active' : ''}`}
            >
              <span className="font-mono text-[8px] text-neutral-600 group-hover:text-neutral-400 transition-colors w-4 text-right hidden sm:inline-block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative flex items-center justify-center">
                <div 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#00d2ff] scale-125 glow-blue' 
                      : 'bg-neutral-800 group-hover:bg-neutral-600'
                  }`} 
                />
                {isActive && (
                  <span className="absolute w-3.5 h-3.5 rounded-full border border-[#00d2ff]/40 animate-pulse"></span>
                )}
              </div>
              
              {/* Floating Tactical Tooltip that matches the responsive layout */}
              <span 
                className={`font-mono text-[9px] tracking-widest uppercase transition-all duration-300 
                  lg:static lg:opacity-100 lg:pointer-events-auto lg:scale-100 lg:translate-x-0 lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none
                  absolute left-6 opacity-0 pointer-events-none scale-95 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 group-hover:translate-x-1
                  bg-[#0e0e0e]/95 backdrop-blur-md px-2.5 py-1 rounded border border-[#1a1a1a] shadow-xl text-nowrap z-50 ${
                  isActive 
                    ? 'text-white font-semibold' 
                    : 'text-neutral-500 group-hover:text-neutral-300'
                }`}
              >
                {sec.label}
              </span>
            </button>
          );
        })}
        <div className="h-10 w-[1px] bg-gradient-to-t from-transparent to-[#1a1a1a] mx-auto mt-1" />
      </nav>

      {/* Bottom status line */}
      <div 
        id="sys-footer-bar"
        className="fixed bottom-4 left-6 right-6 z-40 flex items-center justify-between font-mono text-[8px] text-neutral-600 pointer-events-none select-none"
      >
        <div>
          STATUS: <span className="text-green-500 font-bold">ONLINE</span> // EMP_ROADMAP: SECURE
        </div>
        <div className="hidden md:block">
          CODENAME: ST VOID // ST_VOID_PORTFOLIO_INIT_2026
        </div>
        <div>
          © {new Date().getFullYear()} VOID ENTERPRISES
        </div>
      </div>
    </>
  );
}
