import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight, ArrowDownRight, RefreshCcw } from 'lucide-react';

export const Transformation: React.FC = () => {
  const [viewMode, setViewMode] = useState<'comparison' | 'stages'>('comparison');

  const beforeItems = [
    'Customer information scattered across text messages, voicemails, and paper notebooks',
    'Follow-ups dependent entirely on memory while busy working on job sites',
    'Unclear status of estimates and quotes once they are sent to prospects',
    'Repeated administrative work re-typing addresses, names, and job notes',
    'No simple view of which prospects need attention or who called first',
  ];

  const afterItems = [
    'Customer inquiries recorded in an organized, centralized place accessible anywhere',
    'Follow-up tasks and reminders clearly defined with automatic prompt dates',
    'Estimates and potential jobs tracked by status (sent, viewed, pending decision)',
    'Repeatable workflows and templates for common inquiries and confirmations',
    'A clear view of the next action required for each high-intent opportunity',
  ];

  const workflowStages = [
    {
      step: '01',
      title: 'Inquiry Capture',
      desc: 'Inquiries from phone, website, and messages logged into one clean queue with service details.',
      tag: 'Immediate Visibility',
    },
    {
      step: '02',
      title: 'Estimate & Site Visit',
      desc: 'Proposal sent with prompt date recorded; customer receives clean confirmation and arrival window.',
      tag: 'Professional Impression',
    },
    {
      step: '03',
      title: 'Scheduled Follow-Up',
      desc: 'System surfaces follow-up prompts at 24h & 72h so no quote is forgotten during busy workdays.',
      tag: 'Zero Memory Burden',
    },
    {
      step: '04',
      title: 'Job Confirmation',
      desc: 'Job details, deposit, and schedule locked in with clear next actions for the technician.',
      tag: 'Confirmed Revenue',
    },
  ];

  return (
    <section id="transformation" className="py-20 lg:py-28 bg-[#eae2b7]/25 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-wider uppercase text-[#f77f00] mb-3">
            Real Operational Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#003049] tracking-tight leading-tight mb-5 text-balance">
            From Chasing Messages to Knowing What Happens Next.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A structured workflow doesn't eliminate hard work—it eliminates the constant mental stress of wondering who you forgot to call back.
          </p>

          {/* Interactive view toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'comparison'
                  ? 'bg-[#003049] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setViewMode('stages')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'stages'
                  ? 'bg-[#003049] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              The 4-Stage Operational Flow
            </button>
          </div>
        </div>

        {viewMode === 'comparison' ? (
          /* Side-by-Side Comparison Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* The Before Card */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#d62828]/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-[#d62828]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-slate-900">
                      Before Emperor Growth Systems
                    </h3>
                    <div className="text-xs text-slate-500">Unstructured & memory-dependent</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#d62828] uppercase tracking-wide">
                  High Stress
                </span>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-[#d62828]/10 text-[#d62828] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✕
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 bg-slate-50 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-5 rounded-b-2xl text-xs text-slate-600">
                <strong>Result:</strong> Opportunities slip through unnoticed, estimates sit without follow-up, and you carry the mental strain 24/7.
              </div>
            </div>

            {/* The After Card */}
            <div className="bg-[#003049] text-white rounded-2xl p-7 sm:p-8 border border-[#064060] shadow-md relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#064060]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#fcbf49]/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#fcbf49]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      After Practical System Implementation
                    </h3>
                    <div className="text-xs text-slate-300">Organized & predictable operations</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#fcbf49] uppercase tracking-wide">
                  Total Clarity
                </span>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#fcbf49]/20 text-[#fcbf49] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-[#064060] bg-[#002133] -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-5 rounded-b-2xl text-xs text-slate-300">
                <strong className="text-[#fcbf49]">Result:</strong> Inquiries are managed systematically, follow-ups happen reliably on time, and booked jobs increase from existing demand.
              </div>
            </div>

          </div>
        ) : (
          /* 4-Stage Operational Flow view */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowStages.map((st, i) => (
              <div
                key={st.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#003049] text-[#fcbf49] font-mono font-bold text-xs flex items-center justify-center">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-bold text-[#003049] bg-[#eae2b7] px-2 py-0.5 rounded">
                      {st.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold text-[#003049] mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex items-center justify-end pt-4 text-slate-400">
                    <ArrowRight className="w-4 h-4 text-[#f77f00]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Realism Note (Per prompt: Do not claim it eliminates all manual work) */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          We build systems that fit how you realistically work. The system does not eliminate hands-on tradecraft; it gives you the structure to follow up on every dollar of work you bid on.
        </div>

      </div>
    </section>
  );
};
