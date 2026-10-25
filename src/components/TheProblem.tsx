import React from 'react';
import { AlertCircle, Clock, FileWarning, Layers, TrendingDown, ArrowRight } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/contentData';

interface TheProblemProps {
  onOpenAuditModal: () => void;
}

export const TheProblem: React.FC<TheProblemProps> = ({ onOpenAuditModal }) => {
  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'cold-inquiries':
        return <Clock className="w-5 h-5 text-[#d62828]" />;
      case 'unfollowed-estimates':
        return <FileWarning className="w-5 h-5 text-[#f77f00]" />;
      case 'disorganized-bookings':
        return <Layers className="w-5 h-5 text-[#f77f00]" />;
      case 'growth-pressure':
        return <TrendingDown className="w-5 h-5 text-[#d62828]" />;
      default:
        return <AlertCircle className="w-5 h-5 text-[#f77f00]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fdfdfc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#d62828] mb-3">
            The Reality of Daily Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#003049] tracking-tight leading-tight mb-5 text-balance">
            You May Be Losing Jobs Before You Even Get to the Work.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Running a home-service business means handling customers, doing the actual work, coordinating schedules, preparing estimates, and keeping the business moving. When everything depends on memory and manual follow-up, opportunities can get overlooked.
          </p>
        </div>

        {/* 4 Concise Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, idx) => {
            const isRed = card.indicator === 'red';
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isRed ? 'bg-[#d62828]/10' : 'bg-[#f77f00]/10'
                    }`}>
                      {getProblemIcon(card.id)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#003049] mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-medium text-slate-500">
                    <span className={`font-semibold ${isRed ? 'text-[#d62828]' : 'text-[#f77f00]'}`}>
                      Operational cost:
                    </span>{' '}
                    {card.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Marketing Insight Banner */}
        <div className="mt-14 bg-[#eae2b7]/40 rounded-2xl p-6 sm:p-8 border border-[#fcbf49]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#003049] mb-1">
              Core Strategic Realization
            </div>
            <p className="text-base sm:text-lg font-display font-bold text-[#003049]">
              Most home-service businesses don't need more inquiries first. They need a better system for turning the inquiries they already receive into booked jobs.
            </p>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="shrink-0 px-6 py-3 text-xs sm:text-sm font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Review Your Inquiries Flow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
