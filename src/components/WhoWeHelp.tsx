import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Wrench, 
  Zap, 
  Bug, 
  Paintbrush, 
  Tv, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { TRADE_PROFILES } from '../data/contentData';
import { TradeDetail } from '../types';

interface WhoWeHelpProps {
  onOpenConsultationModal: (trade?: string) => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onOpenConsultationModal }) => {
  const [selectedTrade, setSelectedTrade] = useState<TradeDetail>(TRADE_PROFILES[0]);

  const getTradeIcon = (id: string) => {
    switch (id) {
      case 'plumbing':
        return <Wrench className="w-5 h-5 text-[#fcbf49]" />;
      case 'hvac':
        return <Flame className="w-5 h-5 text-[#f77f00]" />;
      case 'cleaning':
        return <Sparkles className="w-5 h-5 text-[#fcbf49]" />;
      case 'electrical':
        return <Zap className="w-5 h-5 text-[#fcbf49]" />;
      case 'pest-control':
        return <Bug className="w-5 h-5 text-[#f77f00]" />;
      case 'painting-renovation':
        return <Paintbrush className="w-5 h-5 text-[#fcbf49]" />;
      case 'appliance-repair':
        return <Tv className="w-5 h-5 text-[#f77f00]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#fcbf49]" />;
    }
  };

  return (
    <section id="who-we-help" className="py-20 lg:py-28 bg-[#003049] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-wider uppercase text-[#fcbf49] mb-3">
            Target Industries
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight mb-5 text-balance">
            Built for Service Businesses That Want to Operate More Systematically.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            If customers contact your business, request estimates, schedule services, or need follow-up before making a decision, there may be an opportunity to improve the system behind your operations.
          </p>
        </div>

        {/* Trade Selector & Deep Dive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Trade Pills / List (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Select Your Trade:
            </div>
            {TRADE_PROFILES.map((trade) => {
              const isSelected = selectedTrade.id === trade.id;
              return (
                <button
                  key={trade.id}
                  onClick={() => setSelectedTrade(trade)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#002133] border-[#fcbf49] text-white shadow-md'
                      : 'bg-[#00283d]/60 border-[#064060]/70 text-slate-300 hover:bg-[#00283d] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#003049] border border-[#fcbf49]/40' : 'bg-[#001d2d]'
                    }`}>
                      {getTradeIcon(trade.id)}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{trade.name}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[220px]">
                        {trade.shortName} workflows
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#fcbf49] translate-x-0.5' : 'text-slate-500'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Trade Blueprint Breakdown (Right Column) */}
          <div className="lg:col-span-7 bg-[#002133] border border-[#064060] rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#064060]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#fcbf49] uppercase">
                    Industry Blueprint
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-xs text-slate-400">Typical Ticket: ~${selectedTrade.avgTicket}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedTrade.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#eae2b7] mt-1">
                  {selectedTrade.tagline}
                </p>
              </div>

              <div className="hidden sm:block text-right shrink-0">
                <span className="text-[11px] text-slate-400 block">Sample High-Value Job</span>
                <span className="text-xs font-bold text-white font-mono">{selectedTrade.sampleEstimate}</span>
              </div>
            </div>

            {/* In-depth trade challenges and specific system solution */}
            <div className="space-y-6 pt-6">
              
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Typical Incoming Inquiries
                </div>
                <p className="text-sm text-slate-200 bg-[#00283d] p-3 rounded-xl border border-[#064060]/80">
                  {selectedTrade.typicalInquiries}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#d62828] mb-1.5">
                  Where The Process Commonly Breaks Down
                </div>
                <p className="text-sm text-slate-200 bg-[#d62828]/10 p-3 rounded-xl border border-[#d62828]/20">
                  {selectedTrade.commonBreakdown}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#fcbf49] mb-1.5">
                  How Emperor Growth Systems Fixes It
                </div>
                <p className="text-sm text-slate-200 bg-[#00283d] p-3 rounded-xl border border-[#064060]/80">
                  {selectedTrade.systemSolution}
                </p>
              </div>

            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#064060] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Customized for your service area & current communication apps
              </div>

              <button
                onClick={() => onOpenConsultationModal(selectedTrade.name)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl transition-all shadow cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Discuss {selectedTrade.shortName} Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
