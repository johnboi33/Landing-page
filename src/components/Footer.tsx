import React from 'react';
import { ArrowUp, Mail, ShieldCheck, PhoneCall } from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
  onOpenConsultationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAuditModal,
  onOpenConsultationModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001724] text-slate-300 border-t border-[#064060]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#064060]/60">
          
          {/* Brand Info & Official Emblem */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#fcbf49]/40 bg-black flex items-center justify-center shrink-0">
                <img
                  src="/assets/aistudio/7d4f5a36-c3b7-4500-ac24-ae1703a4b4a4_e9faa67c.jpeg"
                  alt="Emperor Growth Systems Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white tracking-tight leading-none">
                  EMPEROR
                </span>
                <span className="text-xs font-semibold text-[#fcbf49] tracking-wider uppercase leading-tight">
                  Growth Systems
                </span>
              </div>
            </div>

            {/* Exact Footer Description from Prompt */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Emperor Growth Systems helps service businesses organize leads, improve follow-up, and build practical systems that support better customer management and business growth.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-[#fcbf49]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Home-Service Systems Partner
              </span>
              <span>·</span>
              <span>Tailored Implementations</span>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#fcbf49] transition-colors">
                  Lead Management Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fcbf49] transition-colors">
                  Follow-Up Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fcbf49] transition-colors">
                  Booking & Workflows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#fcbf49] transition-colors">
                  System Optimization
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#fcbf49] transition-colors">
                  Packages & Scopes
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Navigation & Resources */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-[#fcbf49] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#who-we-help" className="hover:text-[#fcbf49] transition-colors">
                  Who We Help
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-[#fcbf49] transition-colors">
                  The Transformation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#fcbf49] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAuditModal}
                  className="text-[#fcbf49] hover:underline font-semibold text-left cursor-pointer"
                >
                  Free Operational Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Consultation CTA & Quick Contact */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Consultation
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ready to stop losing track of potential jobs? Let's review your inquiry-to-booking path.
            </p>
            <button
              onClick={onOpenConsultationModal}
              className="w-full py-2.5 px-4 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Discuss Your Business
            </button>
            <div className="text-[11px] text-slate-400">
              Direct founder strategy session · No pressure
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Emperor Growth Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#fcbf49] transition-colors">
              Contact
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">
              Designed for Home-Service Business Excellence
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#002133] hover:bg-[#00283d] rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
