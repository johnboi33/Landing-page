import React from 'react';
import { ShieldCheck, PhoneCall, CheckCircle } from 'lucide-react';

interface FounderNoteProps {
  onOpenConsultationModal: () => void;
}

export const FounderNote: React.FC<FounderNoteProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="py-20 bg-[#002133] text-white border-b border-[#064060]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00283d] rounded-3xl border border-[#064060] p-8 sm:p-12 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Portrait (Left Column) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#fcbf49]/60 shadow-xl bg-slate-900">
                <img
                  src="/assets/aistudio/John__f47cfa0b.jpg"
                  alt="John - Founder & Lead Systems Architect, Emperor Growth Systems"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <h4 className="text-lg font-display font-bold text-white">John</h4>
                <div className="text-xs text-[#fcbf49] font-medium tracking-wide">
                  Founder & Systems Strategist
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Emperor Growth Systems
                </div>
              </div>
            </div>

            {/* Founder Message (Right Column) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fcbf49] bg-[#003049] px-3 py-1 rounded-md border border-[#064060]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fcbf49]" />
                Direct Implementation Commitment
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                "Great contractors shouldn't lose good jobs to messy text threads and forgotten follow-ups."
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  Most trade business owners I talk with don't have a lead problem. They have a bandwidth problem. You're driving between job sites, handling customer crises, inspecting work, and managing crews. When a quote goes out, you mean to follow up—but by 7:00 PM, you're exhausted, and the next morning starts with a fresh emergency.
                </p>
                <p>
                  We built <strong className="text-white">Emperor Growth Systems</strong> to solve that specific operational gap. We don't sell you bloated software licenses or empty buzzwords. We review how you currently operate, set up practical follow-up workflows that match your exact style, and make sure every inquiry gets seen through to a decision.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultationModal}
                  className="px-6 py-3 text-xs sm:text-sm font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Discuss Your Business With John</span>
                </button>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#fcbf49] shrink-0" />
                  Direct 1-on-1 strategy call · 0 pressure sales
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
