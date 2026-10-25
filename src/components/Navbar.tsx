import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuditModal,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Who We Help', href: '#who-we-help' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Packages', href: '#packages' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#003049]/95 backdrop-blur-md border-b border-[#064060]/70">
      {/* Top operational announcement banner */}
      <div className="bg-[#002133] text-xs py-1.5 px-4 text-center border-b border-[#064060]/40 flex items-center justify-center gap-2 text-slate-300">
        <span className="text-[#fcbf49] font-medium flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#fcbf49]" />
          Home-Service Operational Systems
        </span>
        <span className="hidden sm:inline text-slate-500">·</span>
        <span className="hidden sm:inline text-slate-300">Stop losing booked jobs to forgotten follow-ups</span>
        <span className="text-slate-500">·</span>
        <button
          onClick={onOpenAuditModal}
          className="text-[#fcbf49] hover:underline font-semibold flex items-center gap-0.5 cursor-pointer"
        >
          Request Free Audit
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Official Emblem */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#fcbf49]/40 bg-black flex items-center justify-center shadow-sm">
            <img
              src="/assets/aistudio/7d4f5a36-c3b7-4500-ac24-ae1703a4b4a4_e9faa67c.jpeg"
              alt="Emperor Growth Systems Official Emblem"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-white tracking-tight leading-none group-hover:text-[#fcbf49] transition-colors">
              EMPEROR
            </span>
            <span className="text-[11px] font-semibold text-[#fcbf49] tracking-wider uppercase leading-tight">
              Growth Systems
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#fcbf49] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#fcbf49] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Audit Trigger */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAuditModal}
            className="px-3.5 py-2 text-xs font-semibold text-[#eae2b7] hover:text-white border border-[#fcbf49]/30 hover:border-[#fcbf49] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Free Systems Audit
          </button>
          <button
            onClick={onOpenConsultationModal}
            className="px-5 py-2.5 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] active:scale-[0.98] rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Discuss Your Business
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenAuditModal}
            className="px-2.5 py-1.5 text-xs font-semibold text-[#fcbf49] border border-[#fcbf49]/40 rounded-md"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white hover:bg-[#002133] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002133] border-b border-[#064060] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-200 hover:text-[#fcbf49] hover:bg-[#003049] rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-[#064060] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#eae2b7] border border-[#fcbf49]/40 rounded-lg text-center"
            >
              Get Free Operational Audit
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 px-4 text-xs font-bold text-[#003049] bg-[#fcbf49] rounded-lg text-center shadow"
            >
              Discuss Your Business
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
