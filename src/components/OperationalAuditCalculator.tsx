import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

interface OperationalAuditCalculatorProps {
  onOpenAuditModalWithData: (data: { monthlyInquiries: number; avgTicket: number; estimatedRecovery: number }) => void;
}

export const OperationalAuditCalculator: React.FC<OperationalAuditCalculatorProps> = ({
  onOpenAuditModalWithData,
}) => {
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState<number>(35);
  const [avgJobValue, setAvgJobValue] = useState<number>(1400);
  const [currentProcess, setCurrentProcess] = useState<'memory' | 'notes' | 'crm-manual'>('memory');

  // Conservative operational benchmark based on real contractor data
  const dropOffRates = {
    memory: 0.35, // 35% of quotes/inquiries die without systematic follow up
    notes: 0.25,  // 25% drop-off due to lost scraps / delay
    'crm-manual': 0.18, // 18% stall out due to uncompleted follow up tasks
  };

  const missedOpportunities = Math.round(inquiriesPerMonth * dropOffRates[currentProcess]);
  // Conservative estimate: restoring just 25% of those missed leads into booked jobs
  const recoverableJobs = Math.max(1, Math.round(missedOpportunities * 0.28));
  const estimatedMonthlyRecovery = recoverableJobs * avgJobValue;
  const estimatedAnnualImpact = estimatedMonthlyRecovery * 12;

  return (
    <section className="py-20 lg:py-28 bg-[#fdfdfc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#f77f00] mb-3">
            Interactive Operational Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#003049] tracking-tight leading-tight mb-5 text-balance">
            See What Unsystematic Follow-Ups Cost Your Business.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Most contractors spend money to buy more leads, unaware that their biggest profit leak is simply quotes sent that never receive a prompt second or third contact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Input Controls (Left Column) */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-7 border-b md:border-b-0 md:border-r border-slate-200">
              
              {/* Inquiries Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-900">
                    Monthly Customer Inquiries
                  </label>
                  <span className="font-mono text-base font-bold text-[#003049] bg-slate-100 px-2.5 py-0.5 rounded-lg tabular-nums">
                    {inquiriesPerMonth} inquiries / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={inquiriesPerMonth}
                  onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
                  className="w-full accent-[#fcbf49] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>10 (Part-time / Solo)</span>
                  <span>60 (Growing crew)</span>
                  <span>120+ (Multi-van)</span>
                </div>
              </div>

              {/* Avg Job Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-900">
                    Average Job Ticket Value
                  </label>
                  <span className="font-mono text-base font-bold text-[#003049] bg-slate-100 px-2.5 py-0.5 rounded-lg tabular-nums">
                    ${avgJobValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="6000"
                  step="100"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full accent-[#fcbf49] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$250 (Cleaning / Maintenance)</span>
                  <span>$2,500 (Plumbing / HVAC)</span>
                  <span>$6,000+ (Remodel)</span>
                </div>
              </div>

              {/* Current Process Toggle */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  How Are Inquiries Handled Today?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentProcess('memory')}
                    className={`p-3 rounded-xl border text-xs text-left font-medium transition-all cursor-pointer ${
                      currentProcess === 'memory'
                        ? 'border-[#003049] bg-[#003049] text-white font-bold shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold mb-1">Memory & Phone</div>
                    <div className="text-[10px] opacity-80">Callbacks when time permits</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentProcess('notes')}
                    className={`p-3 rounded-xl border text-xs text-left font-medium transition-all cursor-pointer ${
                      currentProcess === 'notes'
                        ? 'border-[#003049] bg-[#003049] text-white font-bold shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold mb-1">Paper & Text</div>
                    <div className="text-[10px] opacity-80">Whiteboard, calendar notes</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentProcess('crm-manual')}
                    className={`p-3 rounded-xl border text-xs text-left font-medium transition-all cursor-pointer ${
                      currentProcess === 'crm-manual'
                        ? 'border-[#003049] bg-[#003049] text-white font-bold shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold mb-1">Basic CRM</div>
                    <div className="text-[10px] opacity-80">Manual entry, forgotten alerts</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Results Breakdown (Right Column) */}
            <div className="md:col-span-5 bg-[#002133] text-white p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#fcbf49] uppercase tracking-wider mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Estimated Opportunity Recovery
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-3 bg-[#00283d] rounded-xl border border-[#064060]">
                    <div className="text-xs text-slate-400">Inquiries Falling Through Gaps</div>
                    <div className="text-xl font-display font-bold text-[#f77f00] tabular-nums">
                      ~{missedOpportunities} leads / month
                    </div>
                  </div>

                  <div className="p-3 bg-[#00283d] rounded-xl border border-[#064060]">
                    <div className="text-xs text-slate-400">Recoverable Jobs (Conservative ~28%)</div>
                    <div className="text-xl font-display font-bold text-white tabular-nums">
                      +{recoverableJobs} booked jobs / month
                    </div>
                  </div>

                  <div className="p-4 bg-[#003049] rounded-xl border border-[#fcbf49]/40">
                    <div className="text-xs text-[#fcbf49] font-medium">Estimated Monthly Revenue Lift</div>
                    <div className="text-2xl sm:text-3xl font-display font-extrabold text-white font-mono tabular-nums mt-0.5">
                      +${estimatedMonthlyRecovery.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Annual potential: <strong className="text-[#fcbf49]">${estimatedAnnualImpact.toLocaleString()}</strong> from existing inquiries
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() =>
                    onOpenAuditModalWithData({
                      monthlyInquiries: inquiriesPerMonth,
                      avgTicket: avgJobValue,
                      estimatedRecovery: estimatedMonthlyRecovery,
                    })
                  }
                  className="w-full py-3.5 px-4 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book Free Operational Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  No obligation · 15-minute review of your exact inquiry path
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
