import React from 'react';
import { Check, ArrowRight, Inbox, Clock, CalendarCheck, Wrench } from 'lucide-react';
import { SOLUTION_CARDS } from '../data/contentData';

interface TheSolutionProps {
  onOpenConsultationModal: () => void;
}

export const TheSolution: React.FC<TheSolutionProps> = ({ onOpenConsultationModal }) => {
  const getSolutionIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Inbox className="w-5 h-5 text-[#fcbf49]" />;
      case '02':
        return <Clock className="w-5 h-5 text-[#f77f00]" />;
      case '03':
        return <CalendarCheck className="w-5 h-5 text-[#fcbf49]" />;
      case '04':
        return <Wrench className="w-5 h-5 text-[#f77f00]" />;
      default:
        return <Inbox className="w-5 h-5 text-[#fcbf49]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#002133] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#fcbf49] mb-3">
            What We Implement For You
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight mb-5 text-balance">
            We Build the System Behind a Better Customer Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Emperor Growth Systems helps you organize the customer journey from the first inquiry to the next follow-up and, where appropriate, the booked job.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTION_CARDS.map((card) => (
            <div
              key={card.number}
              className="bg-[#00283d] rounded-2xl p-7 border border-[#064060] hover:border-[#fcbf49]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#003049] border border-[#064060] flex items-center justify-center">
                    {getSolutionIcon(card.number)}
                  </div>
                  <span className="text-sm font-mono font-bold text-[#fcbf49]">
                    {card.number}.
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Practical Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-[#064060]/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#fcbf49]">
                    Included Implementation:
                  </div>
                  {card.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#fcbf49] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#064060]/40 flex items-center justify-between text-xs text-slate-400">
                <span>Tailored to your current tools</span>
                <span className="text-[#eae2b7] font-medium">Full Handover Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Start with what you have reassurance note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#001d2d] border border-[#064060] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-300 max-w-2xl">
            <strong className="text-white font-semibold">Start with what you already have:</strong> We don't force you into complex new software unless you need it. Whether you use spreadsheets, an existing field service app, or basic phone notes, we can optimize and structure your existing setup.
          </div>

          {/* Exact CTA from Prompt */}
          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl transition-all shadow cursor-pointer flex items-center gap-2"
          >
            <span>Find the Right Setup for Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
