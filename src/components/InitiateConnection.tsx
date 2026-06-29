import React from 'react';
import { Mail, Github, Linkedin, FileDown, ShieldAlert, Send } from 'lucide-react';

export default function InitiateConnection() {
  const contactLinks = [
    {
      label: 'EMAIL DIRECTIVE',
      value: 'sogolodonald11@gmail.com',
      href: 'mailto:sogolodonald11@gmail.com',
      icon: <Mail className="w-5 h-5 text-red-400" />,
      tag: 'DIRECT_SECURE_CHANNEL'
    },
    {
      label: 'GITHUB REPOSITORY',
      value: 'github.com/saint-void',
      href: 'https://github.com/saint-void',
      icon: <Github className="w-5 h-5 text-white" />,
      tag: 'SYSTEM_REPOS'
    },
    {
      label: 'LINKEDIN NETWORK',
      value: 'linkedin.com/in/donaldsogolo',
      href: 'https://www.linkedin.com/in/donaldsogolo/',
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      tag: 'FOUNDER_CREDENTIALS'
    },
    {
      label: 'SOVEREIGN RESUME',
      value: 'DOWNLOAD_DOSSIER.pdf',
      href: '#',
      icon: <FileDown className="w-5 h-5 text-emerald-400" />,
      tag: 'ACADEMIC_BLUEPRINT'
    }
  ];

  return (
    <section 
      id="initiate-connection" 
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative min-h-screen flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d2ff] mb-2 uppercase tracking-widest glow-blue">
          <Send className="w-3.5 h-3.5 animate-bounce" />
          <span>ESTABLISH LINK // DECENTRALIZED CONTACT ROUTING</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-normal tracking-wider text-white uppercase">
          INITIATE CONNECTION
        </h2>
        <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-widest mb-12">
          Secure communication protocols are live. Select a transceiver node below.
        </p>

        {/* Contact Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-lg p-5 flex items-center justify-between transition-all duration-300 hover:border-[#00d2ff]/40 group relative overflow-hidden box-glow"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#050505] border border-neutral-900 rounded group-hover:border-[#00d2ff]/20 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <div className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                    {link.label}
                  </div>
                  <div className="font-display font-bold text-xs md:text-sm text-white tracking-wider uppercase mt-0.5">
                    {link.value}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-[8px] text-[#00d2ff] uppercase tracking-widest border border-[#00d2ff]/10 px-2 py-0.5 rounded bg-[#00d2ff]/5">
                  {link.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Magnificent Manifesto Endnote */}
      <div className="mt-24 pt-12 border-t border-[#111] text-center space-y-6">
        <div className="space-y-2">
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-600 uppercase select-none">
            The future is not predicted.
          </p>
          <p className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase glow-blue select-none">
            It is engineered.
          </p>
        </div>
        <div className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#00d2ff] glow-blue uppercase">
          * SOGOLO DONALDSON (ST VOID)
        </div>
      </div>
    </section>
  );
}
