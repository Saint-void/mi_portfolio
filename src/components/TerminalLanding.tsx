import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TerminalLandingProps {
  onComplete: () => void;
}

export default function TerminalLanding({ onComplete }: TerminalLandingProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);

  const fullLines = [
    'ACCESSING ARCHIVE...',
    'CONNECTING TO SECURE DECENTRALIZED NODE...',
    'IDENTITY RETRIEVED: SOGOLO DONALDSON',
    'CODENAME: ST VOID',
    'STATUS: BUILDING SYSTEMIC EMPIRE',
    'ARCHIVE DECRYPTED SUCCESSFULLY.'
  ];

  useEffect(() => {
    // Typing effect for lines
    if (currentIndex < fullLines.length) {
      let charIndex = 0;
      const targetText = fullLines[currentIndex];
      setCurrentText('');
      setIsBlinking(false);

      const interval = setInterval(() => {
        if (charIndex < targetText.length) {
          setCurrentText((prev) => prev + targetText[charIndex]);
          charIndex++;
        } else {
          clearInterval(interval);
          setLines((prev) => [...prev, targetText]);
          setCurrentText('');
          setCurrentIndex((prev) => prev + 1);
          setIsBlinking(true);
        }
      }, 45); // Typing speed

      return () => clearInterval(interval);
    } else {
      // Auto transition after finishing
      const timeout = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div 
      id="terminal-container"
      className="fixed inset-0 bg-[#050505] text-[#e5e5e5] font-mono flex flex-col justify-center items-center z-50 p-6 md:p-12 overflow-hidden select-none"
    >
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none opacity-40 mix-blend-overlay z-10" />
      
      {/* Visual Glitch Frame */}
      <div className="w-full max-w-2xl bg-[#090909] border border-[#1a1a1a] rounded-lg p-6 md:p-8 relative shadow-2xl shadow-cyan-950/20">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4 mb-6 text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-950/50 border border-red-500/30 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-950/50 border border-yellow-500/30 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-950/50 border border-green-500/30 inline-block"></span>
            <span className="ml-2 font-semibold">SECURE_SHELL v2.08</span>
          </div>
          <div>PORT: 3000 // LOC: NGA</div>
        </div>

        {/* Output */}
        <div className="space-y-3 min-h-[180px] text-xs md:text-sm leading-relaxed">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-[#00d2ff] mr-3 shrink-0 select-none">&gt;</span>
              <span className={idx === 3 ? 'text-white font-semibold tracking-wider' : 'text-neutral-300'}>
                {line}
              </span>
            </div>
          ))}

          {currentIndex < fullLines.length && (
            <div className="flex items-center">
              <span className="text-[#00d2ff] mr-3 select-none">&gt;</span>
              <span className="text-neutral-300">{currentText}</span>
              <span className={`w-2 h-4 bg-[#00d2ff] ml-1 ${isBlinking ? 'animate-pulse' : ''}`}></span>
            </div>
          )}
        </div>

        {/* Bypass Decryption Button */}
        <div className="mt-8 border-t border-[#1a1a1a] pt-4 flex justify-end">
          <button
            id="btn-bypass-decryption"
            onClick={onComplete}
            className="text-[10px] uppercase font-mono tracking-widest text-[#00d2ff]/60 hover:text-[#00d2ff] hover:bg-[#00d2ff]/5 border border-[#00d2ff]/20 hover:border-[#00d2ff]/50 px-3 py-1.5 rounded transition-all duration-300 cursor-pointer"
          >
            Bypass Decryption
          </button>
        </div>
      </div>

      {/* Decorative background grid and metrics */}
      <div className="absolute bottom-6 left-6 text-[9px] text-neutral-600 font-mono hidden md:block">
        SYS_STATUS: ACTIVE<br />
        CORE_LOAD: 1.4%
      </div>
      <div className="absolute bottom-6 right-6 text-[9px] text-neutral-600 font-mono hidden md:block text-right">
        AUTH_METHOD: PUBLIC_KEY<br />
        SESSION_HASH: ST_VOID_ORIGIN
      </div>
    </div>
  );
}
