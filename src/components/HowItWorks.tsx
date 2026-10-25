import React from 'react';
import { Search, Compass, Cog, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenConsultationModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultationModal }) => {
  const steps = [
    {
      num: 'Step 1',
      title: 'Understand Your Business',
      desc: 'We identify how customers contact you, how you currently respond, where follow-ups break down, and how jobs are booked.',
      icon: <Search className="w-5 h-5 text-[#fcbf49]" />,
      detail: 'Includes a 1-on-1 operational review of call logs, inboxes, and quote delivery habits.',
    },
    {
      num: 'Step 2',
      title: 'Design the Right Setup',
      desc: 'We identify the simplest practical system that addresses the problems and fits your workflow and budget.',
      icon: <Compass className="w-5 h-5 text-[#f77f00]" />,
      detail: 'Tailored architecture: solo contractors get simple mobile trackers; multi-van teams get coordinated dispatch.',
    },
    {
      num: 'Step 3',
      title: 'Set Up and Customize',
      desc: 'We configure the lead stages, customer information, reminders, booking processes, and compatible integrations required for your agreed scope.',
      icon: <Cog className="w-5 h-5 text-[#fcbf49]" />,
      detail: 'Done-for-you configuration, custom templates, and direct synchronization with your existing calendar.',
    },
    {
      num: 'Step 4',
      title: 'Test, Handover, and Improve',
      desc: 'We test the workflow, explain how to use it, and identify future improvements where needed.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      detail: 'Live walkthrough session, quick cheat sheets for your phone, and ongoing adjustment support.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#003049] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#fcbf49] mb-3">
            Our Implementation Method
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight mb-5 text-balance">
            A Practical System Built Around How You Work.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No cookie-cutter templates that disrupt your trade. A simple business may need a straightforward lead tracker and reminders, while a larger operation may benefit from connected workflows and coordinated dispatch.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              className="bg-[#002133] rounded-2xl p-6 border border-[#064060] flex flex-col justify-between relative group hover:border-[#fcbf49]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#003049] border border-[#064060] flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#fcbf49] uppercase tracking-wider">
                    {st.num}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-3">
                  {st.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#064060]/70 text-xs text-slate-400">
                <span className="text-[#eae2b7] font-medium">Deliverable:</span> {st.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Practical callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#00283d] border border-[#064060] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-200">
            <span className="text-[#fcbf49] font-bold">Tailored Implementation:</span> We do the heavy lifting of building, testing, and verifying the setup so you can focus entirely on completing jobs for your clients.
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-6 py-3 text-xs sm:text-sm font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl transition-all shadow cursor-pointer flex items-center gap-2"
          >
            <span>Review Your Implementation Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
