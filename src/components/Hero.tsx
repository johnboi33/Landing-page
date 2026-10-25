import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  MessageSquare, 
  PhoneCall, 
  SlidersHorizontal, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface HeroProps {
  onOpenAuditModal: () => void;
  onOpenConsultationModal: () => void;
}

interface PipelineItem {
  id: string;
  customer: string;
  service: string;
  trade: string;
  value: string;
  status: 'new' | 'followup' | 'estimate' | 'booked';
  statusLabel: string;
  statusColor: string;
  nextAction: string;
  dueTime: string;
  source: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAuditModal,
  onOpenConsultationModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'new' | 'followup' | 'estimate' | 'booked'>('all');
  const [selectedCompany, setSelectedCompany] = useState<'plumbing' | 'hvac' | 'cleaning'>('plumbing');

  const pipelineData: Record<'plumbing' | 'hvac' | 'cleaning', PipelineItem[]> = {
    plumbing: [
      {
        id: '1',
        customer: 'Marcus Henderson',
        service: 'Tankless Water Heater Replacement',
        trade: 'Plumbing',
        value: '$3,850',
        status: 'followup',
        statusLabel: 'Follow-Up Due',
        statusColor: 'bg-[#f77f00]/15 text-[#f77f00] border-[#f77f00]/30',
        nextAction: 'Send 48h estimate check-in & review permit rebate option',
        dueTime: 'Today at 2:00 PM',
        source: 'Website Quote Form',
      },
      {
        id: '2',
        customer: 'Elena Rostova',
        service: 'Slab Leak Inspection & Diagnostic',
        trade: 'Plumbing',
        value: '$650',
        status: 'new',
        statusLabel: 'New Inquiry',
        statusColor: 'bg-[#d62828]/15 text-[#d62828] border-[#d62828]/30',
        nextAction: 'Call customer to confirm address & dispatch technician',
        dueTime: 'Arrived 14m ago',
        source: 'Incoming Phone Call',
      },
      {
        id: '3',
        customer: 'David Kim',
        service: 'Whole-Home Re-pipe Proposal',
        trade: 'Plumbing',
        value: '$7,200',
        status: 'estimate',
        statusLabel: 'Estimate Awaiting Decision',
        statusColor: 'bg-[#fcbf49]/20 text-[#fcbf49] border-[#fcbf49]/40',
        nextAction: 'Answer financing question via text; schedule site walk',
        dueTime: 'Sent yesterday',
        source: 'Referral',
      },
      {
        id: '4',
        customer: 'Sarah Jenkins',
        service: 'Main Line Cleanout & Camera Inspection',
        trade: 'Plumbing',
        value: '$480',
        status: 'booked',
        statusLabel: 'Job Confirmed',
        statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        nextAction: 'Technician Tom assigned · Arrival window 8:00–10:00 AM',
        dueTime: 'Tomorrow Morning',
        source: 'Direct Message',
      },
    ],
    hvac: [
      {
        id: 'h1',
        customer: 'Robert Vance',
        service: 'Dual Heat Pump System Installation',
        trade: 'HVAC',
        value: '$11,400',
        status: 'estimate',
        statusLabel: 'Estimate Awaiting Decision',
        statusColor: 'bg-[#fcbf49]/20 text-[#fcbf49] border-[#fcbf49]/40',
        nextAction: 'Deliver manufacturer rebate breakdown & schedule call',
        dueTime: 'Sent 3 days ago',
        source: 'Online Estimate Builder',
      },
      {
        id: 'h2',
        customer: 'Claire Dupont',
        service: 'Emergency AC Diagnostic & Coil Inspection',
        trade: 'HVAC',
        value: '$290',
        status: 'new',
        statusLabel: 'New Inquiry',
        statusColor: 'bg-[#d62828]/15 text-[#d62828] border-[#d62828]/30',
        nextAction: 'Confirm technician arrival window with homeowner',
        dueTime: 'Arrived 8m ago',
        source: 'Google Local Services',
      },
      {
        id: 'h3',
        customer: 'Oakridge Property Group',
        service: 'Bi-Annual Commercial Maintenance Contract',
        trade: 'HVAC',
        value: '$4,200/yr',
        status: 'followup',
        statusLabel: 'Follow-Up Due',
        statusColor: 'bg-[#f77f00]/15 text-[#f77f00] border-[#f77f00]/30',
        nextAction: 'Review commercial service agreement terms with PM',
        dueTime: 'Today at 4:30 PM',
        source: 'Direct Referral',
      },
      {
        id: 'h4',
        customer: 'Julian Alvarez',
        service: 'Duct Sealing & Air Quality Package',
        trade: 'HVAC',
        value: '$1,650',
        status: 'booked',
        statusLabel: 'Job Confirmed',
        statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        nextAction: 'Automated 24h pre-service text reminder queued',
        dueTime: 'Friday 1:00 PM',
        source: 'Website Chat',
      },
    ],
    cleaning: [
      {
        id: 'c1',
        customer: 'The Bradford Clinic',
        service: 'Tri-Weekly Medical Office Cleaning',
        trade: 'Cleaning',
        value: '$1,850/mo',
        status: 'followup',
        statusLabel: 'Follow-Up Due',
        statusColor: 'bg-[#f77f00]/15 text-[#f77f00] border-[#f77f00]/30',
        nextAction: 'Send finalized scope checklist after on-site walk',
        dueTime: 'Today at 11:00 AM',
        source: 'Facility Inquiry Form',
      },
      {
        id: 'c2',
        customer: 'Hannah Morales',
        service: 'Post-Construction Deep Clean (4,200 sqft)',
        trade: 'Cleaning',
        value: '$1,150',
        status: 'new',
        statusLabel: 'New Inquiry',
        statusColor: 'bg-[#d62828]/15 text-[#d62828] border-[#d62828]/30',
        nextAction: 'Request walkthrough photos or schedule 15m visit',
        dueTime: 'Arrived 25m ago',
        source: 'Instagram Inbound',
      },
      {
        id: 'c3',
        customer: 'Gregory Walsh',
        service: 'Bi-Weekly Residential Cleaning (Recurring)',
        trade: 'Cleaning',
        value: '$340/mo',
        status: 'booked',
        statusLabel: 'Job Confirmed',
        statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        nextAction: 'Card on file verified; cleaning crew Alpha scheduled',
        dueTime: 'Starting this Thursday',
        source: 'Neighborhood Referral',
      },
      {
        id: 'c4',
        customer: 'Summit Realty Corp',
        service: 'Move-Out Turn Cleans (3 Units)',
        trade: 'Cleaning',
        value: '$880',
        status: 'estimate',
        statusLabel: 'Estimate Awaiting Decision',
        statusColor: 'bg-[#fcbf49]/20 text-[#fcbf49] border-[#fcbf49]/40',
        nextAction: 'Follow up with property manager before weekend',
        dueTime: 'Sent 2 days ago',
        source: 'Partner Channel',
      },
    ],
  };

  const currentItems = pipelineData[selectedCompany].filter(item => {
    if (activeTab === 'all') return true;
    return item.status === activeTab;
  });

  return (
    <section className="relative overflow-hidden bg-[#003049] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle architectural background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#fcbf49 1px, transparent 1px), radial-gradient(#ffffff 1px, #003049 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Subtle radial warmth glow behind hero */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#f77f00]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#fcbf49]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Direct Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Context Badge / Kicker - Zero pill, clean text with gold accent */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#fcbf49] mb-4">
              <span>Home-Service Business Systems & Implementation</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-[#eae2b7]">Not Just Software</span>
            </div>

            {/* Exact Headline from Prompt */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Turn More Home-Service Inquiries Into Booked Jobs.
            </h1>

            {/* Exact Supporting Copy from Prompt */}
            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-8 max-w-2xl font-normal">
              You work hard to deliver excellent service. But when inquiries go unanswered, follow-ups get forgotten, or bookings become difficult to manage, potential jobs can slip away.
              <br /><br />
              <strong className="text-white font-medium">Emperor Growth Systems</strong> helps you set up and customize the systems that keep customer inquiries organized, follow-ups on track, and your path from first contact to booked job clearer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-7">
              <button
                onClick={onOpenConsultationModal}
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] active:scale-[0.98] rounded-xl shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get Your Business System Reviewed</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#eae2b7] hover:text-white bg-[#001f30]/80 hover:bg-[#001f30] border border-[#064060] rounded-xl transition-colors text-center"
              >
                See How It Works
              </a>
            </div>

            {/* Prominent Operational Audit Trigger Button (as explicitly requested) */}
            <div className="w-full sm:w-auto p-3 bg-[#002133] border border-[#064060] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#fcbf49]/15 border border-[#fcbf49]/30 flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="w-4 h-4 text-[#fcbf49]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    Free Operational System Audit
                    <span className="text-[10px] text-[#f77f00] font-semibold uppercase tracking-wide">15-Min Review</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Find the 1–2 specific gaps leaking jobs between quote and booking.
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto px-3.5 py-1.5 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Claim Free Audit
              </button>
            </div>

            {/* Exact Trust-Oriented Statement from Prompt */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#eae2b7]/90 max-w-xl">
              <CheckCircle2 className="w-4 h-4 text-[#fcbf49] shrink-0 mt-0.5" />
              <span>
                <strong>Practical systems. Built around your business.</strong> Designed to help you stop losing track of opportunities.
              </span>
            </div>

          </div>

          {/* Right Column: Realistic, Polished Dashboard Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#001d2d] border border-[#064060] shadow-2xl p-4 sm:p-5 text-slate-100">
              
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#064060]/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d62828]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fcbf49]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-semibold text-slate-300 tracking-tight">
                    Inquiry & Follow-Up Pipeline
                  </span>
                </div>
                
                {/* Trade Switcher */}
                <div className="flex items-center gap-1 text-[11px] bg-[#003049] p-1 rounded-lg border border-[#064060]">
                  {(['plumbing', 'hvac', 'cleaning'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedCompany(t)}
                      className={`px-2 py-0.5 rounded capitalize font-medium transition-colors cursor-pointer ${
                        selectedCompany === t 
                          ? 'bg-[#fcbf49] text-[#003049] font-bold shadow-xs' 
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Metric Strip (Plausible numbers for home services) */}
              <div className="grid grid-cols-4 gap-2 my-3 text-center">
                <div className="bg-[#00283d] p-2 rounded-lg border border-[#064060]/60">
                  <div className="text-sm sm:text-base font-bold text-white tabular-nums">4</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">New Leads</div>
                </div>
                <div className="bg-[#00283d] p-2 rounded-lg border border-[#064060]/60">
                  <div className="text-sm sm:text-base font-bold text-[#f77f00] tabular-nums">3</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Follow-Ups</div>
                </div>
                <div className="bg-[#00283d] p-2 rounded-lg border border-[#064060]/60">
                  <div className="text-sm sm:text-base font-bold text-[#fcbf49] tabular-nums">5</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Estimates</div>
                </div>
                <div className="bg-[#00283d] p-2 rounded-lg border border-[#064060]/60">
                  <div className="text-sm sm:text-base font-bold text-emerald-400 tabular-nums">6</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Booked</div>
                </div>
              </div>

              {/* Pipeline Filter Bar */}
              <div className="flex items-center gap-1 pb-2.5 overflow-x-auto text-[11px] font-medium text-slate-400 no-scrollbar">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'all' ? 'bg-[#064060] text-white font-semibold' : 'hover:text-slate-200'
                  }`}
                >
                  All ({pipelineData[selectedCompany].length})
                </button>
                <button
                  onClick={() => setActiveTab('new')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'new' ? 'bg-[#064060] text-white font-semibold' : 'hover:text-slate-200'
                  }`}
                >
                  New Inquiries
                </button>
                <button
                  onClick={() => setActiveTab('followup')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'followup' ? 'bg-[#064060] text-white font-semibold' : 'hover:text-slate-200'
                  }`}
                >
                  Follow-Ups Due
                </button>
                <button
                  onClick={() => setActiveTab('estimate')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'estimate' ? 'bg-[#064060] text-white font-semibold' : 'hover:text-slate-200'
                  }`}
                >
                  Estimates
                </button>
              </div>

              {/* Card List of Opportunities */}
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-[#00283d] rounded-xl border border-[#064060]/70 hover:border-[#fcbf49]/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          {item.customer}
                          <span className="text-[10px] font-normal text-slate-400">· {item.source}</span>
                        </div>
                        <div className="text-[11px] text-[#eae2b7]">{item.service}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold text-white font-mono tabular-nums">{item.value}</div>
                        <span className={`inline-block mt-0.5 text-[9px] font-semibold px-1.5 py-0.5 rounded border ${item.statusColor}`}>
                          {item.statusLabel}
                        </span>
                      </div>
                    </div>

                    {/* Next Action Bar */}
                    <div className="mt-2 pt-2 border-t border-[#064060]/40 flex items-center justify-between text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5 truncate">
                        <ArrowRight className="w-3 h-3 text-[#fcbf49] shrink-0" />
                        <span className="truncate text-slate-200">
                          <strong className="text-[#fcbf49] font-medium">Next:</strong> {item.nextAction}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 shrink-0 font-mono ml-2">
                        <Clock className="w-3 h-3" />
                        {item.dueTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Control Guarantee Footer */}
              <div className="mt-3.5 pt-3 border-t border-[#064060]/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#fcbf49]" />
                  Zero forgotten quotes or lost numbers
                </span>
                <span className="text-slate-400 text-[10px] font-mono">
                  Customized to how you work
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
