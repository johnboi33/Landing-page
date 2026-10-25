import React, { useState } from 'react';
import { X, CheckCircle2, SlidersHorizontal, ArrowRight, Send, AlertCircle } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetData?: {
    monthlyInquiries?: number;
    avgTicket?: number;
    estimatedRecovery?: number;
  } | null;
  selectedPackage?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  presetData,
  selectedPackage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phoneOrEmail: '',
    trade: 'Plumbing',
    biggestLeak: 'Quotes sent without reliable follow-up',
    notes: presetData?.estimatedRecovery
      ? `Estimated potential monthly recovery: $${presetData.estimatedRecovery.toLocaleString()}`
      : selectedPackage
      ? `Interested in ${selectedPackage}`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.businessName.trim()) {
      setError('Please provide your business name.');
      return;
    }
    if (!formData.phoneOrEmail.trim()) {
      setError('Please enter your phone number or email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        const stored = JSON.parse(localStorage.getItem('egs_audit_requests') || '[]');
        stored.push({
          ...formData,
          presetData,
          selectedPackage,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('egs_audit_requests', JSON.stringify(stored));
      } catch (err) {
        console.error('Storage error:', err);
      }
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#002133] border border-[#064060] rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#003049] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#fcbf49]/20 border border-[#fcbf49] text-[#fcbf49] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Audit Scheduled!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. We will review the inquiry flow for <strong className="text-[#fcbf49]">{formData.businessName}</strong> and send your tailored audit report within 4 business hours.
            </p>
            <div className="pt-3">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl transition-colors cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fcbf49] mb-2">
              <SlidersHorizontal className="w-4 h-4" />
              Free Operational System Audit
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Identify Where Your Inquiries Are Leaking.
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-5">
              15-minute diagnostic of how your home-service business receives inquiries, sends estimates, and schedules jobs.
            </p>

            {presetData && (
              <div className="p-3 bg-[#003049] rounded-xl border border-[#064060] mb-5 text-xs flex justify-between items-center">
                <span className="text-slate-300">Calculator Estimate:</span>
                <span className="font-mono font-bold text-[#fcbf49]">
                  +${presetData.estimatedRecovery?.toLocaleString()} monthly opportunity
                </span>
              </div>
            )}

            {selectedPackage && (
              <div className="p-3 bg-[#003049] rounded-xl border border-[#064060] mb-5 text-xs flex justify-between items-center">
                <span className="text-slate-300">Selected Scope:</span>
                <span className="font-bold text-[#fcbf49]">{selectedPackage}</span>
              </div>
            )}

            {error && (
              <div className="p-3 bg-[#d62828]/20 border border-[#d62828] rounded-xl text-xs text-red-200 mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#d62828] shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Miller Plumbing & Heating"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Phone Number or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. (555) 789-0123 or john@millerplumbing.com"
                  value={formData.phoneOrEmail}
                  onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Trade Category *
                  </label>
                  <select
                    value={formData.trade}
                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-xs focus:outline-hidden focus:border-[#fcbf49]"
                  >
                    <option value="Plumbing">Plumbing</option>
                    <option value="HVAC">HVAC</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Painting">Painting & Renovation</option>
                    <option value="Appliance Repair">Appliance Repair</option>
                    <option value="Other Trade">Other Trade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Primary Operational Gap *
                  </label>
                  <select
                    value={formData.biggestLeak}
                    onChange={(e) => setFormData({ ...formData, biggestLeak: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-xs focus:outline-hidden focus:border-[#fcbf49]"
                  >
                    <option value="Quotes sent without reliable follow-up">Forgotten quote follow-ups</option>
                    <option value="Inquiries arrive while on job sites">Calls missed while on job sites</option>
                    <option value="Bookings & scheduling friction">Double-booking / calendar friction</option>
                    <option value="Disorganized customer info">Notes scattered across phone</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-4 text-xs font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] rounded-xl transition-all shadow cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Claim Free Audit & Review</span>
                  </>
                )}
              </button>

              <div className="text-[10px] text-center text-slate-400">
                100% confidential · We never share contractor information
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
