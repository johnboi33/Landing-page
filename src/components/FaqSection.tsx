import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_LIST } from '../data/contentData';

interface FaqSectionProps {
  onOpenConsultationModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultationModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#fdfdfc] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#003049] mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#003049] tracking-tight leading-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Straightforward answers about our implementation, tools, and expectations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#003049]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#fcbf49]/30 text-[#003049]' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help prompt footer */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm text-slate-700">
            <strong>Have a question specific to your dispatch or toolstack?</strong> We're happy to review your current workflow.
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-5 py-2.5 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Ask a Systems Specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
