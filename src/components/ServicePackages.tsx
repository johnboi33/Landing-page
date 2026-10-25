import React from 'react';
import { Check, ArrowRight, Shield, Layers, Workflow, Sparkles } from 'lucide-react';

interface ServicePackagesProps {
  onOpenConsultationModal: (packageTier?: string) => void;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({ onOpenConsultationModal }) => {
  const packages = [
    {
      id: 'essential-setup',
      name: 'Essential Setup',
      badge: 'Small & Solo Operators',
      idealFor: 'For small home-service businesses that need a more organized way to manage inquiries.',
      icon: <Shield className="w-5 h-5 text-[#003049]" />,
      deliverables: [
        'Basic lead-management setup',
        'Customer status tracking',
        'Follow-up task structure',
        'Essential reminders',
        'Setup guidance and phone walkthrough',
      ],
      bestFit: 'Plumbers, cleaners, electricians, or technicians needing immediate control over their weekly inquiries.',
      featured: false,
    },
    {
      id: 'workflow-improvement',
      name: 'Workflow Improvement',
      badge: 'Most Popular Starting Point',
      idealFor: 'For businesses with an existing process that needs improvement.',
      icon: <Layers className="w-5 h-5 text-[#003049]" />,
      deliverables: [
        'Review of the current workflow and bottlenecks',
        'Modification of existing systems (CRM/spreadsheets)',
        'Better follow-up and booking processes',
        'Customer information organization and tag cleanup',
        'Testing, documentation, and staff handover',
      ],
      bestFit: 'Established contractors already using software but frustrated with drop-offs between quote and job.',
      featured: true,
    },
    {
      id: 'connected-systems',
      name: 'Connected Business Systems',
      badge: 'Multi-Van & Growing Teams',
      idealFor: 'For businesses that need compatible systems and workflows to work together.',
      icon: <Workflow className="w-5 h-5 text-[#003049]" />,
      deliverables: [
        'Multi-step workflow configuration',
        'Compatible application integrations',
        'Automated notifications and task creation',
        'Lead-status updates across team members',
        'Testing, full documentation, and priority tuning',
      ],
      bestFit: 'Growing HVAC, renovation, or multi-crew service companies running field dispatch and office operations.',
      featured: false,
    },
  ];

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#fdfdfc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-[#003049] mb-3">
            Engagement Categories
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#003049] tracking-tight leading-tight mb-5 text-balance">
            Start With the Problem You Need to Solve.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We offer adaptable, fixed-scope implementation services based on your actual operational bottleneck—never rigid software subscriptions or hidden ongoing fees.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                pkg.featured
                  ? 'bg-white border-2 border-[#fcbf49] shadow-xl ring-1 ring-[#fcbf49]/30'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fcbf49] text-[#003049] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eae2b7]/60 flex items-center justify-center">
                    {pkg.icon}
                  </div>
                  {!pkg.featured && (
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-[#003049] mb-2">
                  {pkg.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 min-h-[44px]">
                  {pkg.idealFor}
                </p>

                {/* Clear Deliverables */}
                <div className="pt-5 border-t border-slate-100 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
                    Possible Deliverables:
                  </div>
                  <ul className="space-y-3">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#fcbf49] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 mb-5 border border-slate-100">
                  <span className="font-semibold text-slate-900">Best fit:</span> {pkg.bestFit}
                </div>

                <button
                  onClick={() => onOpenConsultationModal(pkg.name)}
                  className={`w-full py-3 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    pkg.featured
                      ? 'bg-[#fcbf49] text-[#003049] hover:bg-[#f3b134] shadow-sm'
                      : 'bg-[#003049] text-white hover:bg-[#002133]'
                  }`}
                >
                  <span>Discuss {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global CTA button from Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenConsultationModal()}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Let's Identify Your Best Starting Point</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
