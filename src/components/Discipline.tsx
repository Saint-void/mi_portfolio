import React, { useState } from 'react';
import { DollarSign, ShieldAlert, CheckSquare, Sparkles, Scale, Clock, HeartHandshake } from 'lucide-react';

interface RuleCard {
  id: string;
  title: string;
  metric: string;
  protocol: string;
  description: string;
  icon: React.ReactNode;
}

export default function Discipline() {
  const [activeRule, setActiveRule] = useState<string>('risk');

  const tradingRules: RuleCard[] = [
    {
      id: 'risk',
      title: 'RISK MANAGEMENT',
      metric: 'MAX 1.0% PER POSITION',
      protocol: 'HARD STOP-LOSS COMPILING',
      description: 'Capital preservation is the absolute priority. Zero overrides. If a model invalidates, the position terminates instantly. No emotional buffer.',
      icon: <ShieldAlert className="w-4 h-4 text-rose-400" />
    },
    {
      id: 'decision',
      title: 'DECISION MAKING',
      metric: '100% STRATEGY COMPLIANT',
      protocol: 'NO INTUITIVE TRADES',
      description: 'Every trade executes purely based on predetermined mathematical edge models (liquidity sweep and high-timeframe order blocks). Direct emotional separation.',
      icon: <Scale className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'patience',
      title: 'PATIENCE',
      metric: 'ASYMMETRIC RATIO (1:3+)',
      protocol: 'WAITING FOR SWEEPS',
      description: 'Sitting in cash is an active, aggressive position. Restraining capital until clear market liquidity imbalances form.',
      icon: <Clock className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'consistency',
      title: 'CONSISTENCY',
      metric: 'DAILY DATA JOURNALING',
      protocol: 'SYSTEM REVIEW COMPLETED',
      description: 'Reviewing performance, market conditions, and personal execution logs at the close of every session. Continuous feedback optimization.',
      icon: <CheckSquare className="w-4 h-4 text-emerald-400" />
    },
    {
      id: 'allocation',
      title: 'CAPITAL ALLOCATION',
      metric: 'DYNAMIC LEVERAGE CAP',
      protocol: 'OPTIMAL POSITION SIZING',
      description: 'Leverage adjusts dynamically to market volatility, scaling down to preserve reserves during low-probability conditions.',
      icon: <HeartHandshake className="w-4 h-4 text-indigo-400" />
    }
  ];

  // Logs mimicking a discipline engine output
  const disciplineLogs = [
    { timestamp: '14:22:04', thread: 'SYS_ALLOC', message: 'LIQUIDITY SWEEP CHECKED ON GBP/USD - STABLE', status: 'PASS' },
    { timestamp: '11:05:12', thread: 'RISK_GUARD', message: 'POSITION SIZE COMPUTED: 0.85% TOTAL CAPITAL', status: 'SAFE' },
    { timestamp: '08:00:00', thread: 'JOURNAL_LOG', message: 'PRE-MARKET MACRO DATA ARCHIVED', status: 'INIT' },
    { timestamp: 'CLOSE_PREV', thread: 'ST_VOID_LOG', message: '100% PROTOCOL EXECUTED - ZERO DEVATION', status: 'EXCELLENT' }
  ];

  return (
    <section 
      id="discipline" 
      className="py-24 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto relative border-b border-[#111] last:border-b-0 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d2ff] mb-2 uppercase tracking-widest glow-blue">
          <DollarSign className="w-3.5 h-3.5" />
          <span>FINANCIAL DISCIPLINE // QUANT SYSTEM ENGINE</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-normal tracking-wider text-white uppercase">
          DISCIPLINE
        </h2>
        <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
          Trading is not about wealth seeking. It is the ultimate sandbox for emotional mastery and risk telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hand side: Discipline Rules List */}
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">OPERATIONAL_RULES</div>
          
          <div className="space-y-2.5">
            {tradingRules.map((rule) => {
              const isActive = activeRule === rule.id;
              return (
                <button
                  key={rule.id}
                  onClick={() => setActiveRule(rule.id)}
                  className={`w-full text-left p-4 rounded border transition-all duration-300 font-sans cursor-pointer flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#0e0e0e] border-[#00d2ff] text-white shadow shadow-cyan-950/20' 
                      : 'bg-[#050505] border-[#1a1a1a] text-neutral-400 hover:border-neutral-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1 bg-[#050505] border border-neutral-900 rounded">
                      {rule.icon}
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs tracking-wider uppercase">
                        {rule.title}
                      </div>
                      <div className="font-mono text-[8px] text-[#00d2ff]/80 mt-0.5">
                        {rule.metric}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[8px] text-neutral-500 uppercase">
                    {isActive ? '[ ACTIVE_RULE ]' : '[ INSPECT ]'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Hand side: Tactical Console with selected rule details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-lg p-6 relative box-glow min-h-[220px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3 mb-4">
                <span className="font-mono text-[9px] text-[#00d2ff] uppercase tracking-widest glow-blue">
                  RULE_TELEMETRY: {activeRule.toUpperCase()}
                </span>
                <span className="font-mono text-[8px] text-neutral-600">SYS_REF: Q_MOD_0{tradingRules.findIndex((r)=>r.id === activeRule)+1}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-[#050505] border border-neutral-900 rounded p-2.5 font-mono text-[10px]">
                  <span className="text-neutral-500">SYSTEM PROTOCOL</span>
                  <span className="text-white font-semibold">{tradingRules.find((r) => r.id === activeRule)?.protocol}</span>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {tradingRules.find((r) => r.id === activeRule)?.description}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-[#1a1a1a] pt-4 flex justify-between font-mono text-[9px] text-neutral-500">
              <span>METRIC THRESHOLD: {tradingRules.find((r) => r.id === activeRule)?.metric}</span>
              <span className="text-green-500">GUARD_SECURE</span>
            </div>
          </div>

          {/* Discipline Execution log terminal widget */}
          <div className="bg-[#050505] border border-[#1a1a1a] rounded p-4 font-mono text-[9px] text-neutral-500">
            <div className="flex items-center justify-between text-neutral-500 border-b border-neutral-900 pb-2 mb-3.5">
              <span>DISCIPLINE_ENGINE_SYS_LATEST_LOGS</span>
              <span>12:00:00 COMPILATION</span>
            </div>

            <div className="space-y-2">
              {disciplineLogs.map((log, idx) => (
                <div key={idx} className="flex items-center justify-between leading-none py-1">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-600 font-bold">{log.timestamp}</span>
                    <span className="text-[#00d2ff] uppercase font-semibold">[{log.thread}]</span>
                    <span className="text-neutral-400 font-medium">{log.message}</span>
                  </div>
                  <span className={`px-1 rounded text-[8px] font-bold ${
                    log.status === 'EXCELLENT' || log.status === 'PASS' || log.status === 'SAFE'
                      ? 'bg-green-950/20 text-green-400 border border-green-900/30'
                      : 'bg-blue-950/20 text-blue-400 border border-blue-900/30'
                  }`}>
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
