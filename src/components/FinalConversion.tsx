import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Phone, Mail, Send, Sparkles, AlertCircle } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface FinalConversionProps {
  initialTrade?: string;
  initialChallenge?: string;
}

export const FinalConversion: React.FC<FinalConversionProps> = ({
  initialTrade = '',
  initialChallenge = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    businessName: '',
    contactMethod: 'email',
    contactValue: '',
    tradeType: initialTrade || 'Plumbing',
    mainChallenge: initialChallenge || 'Estimates sent without reliable follow-up',
    currentTools: '',
    requestAudit: true,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Form validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.businessName.trim()) {
      setErrorMessage('Please provide your business name.');
      return;
    }
    if (!formData.contactValue.trim()) {
      setErrorMessage(`Please enter your ${formData.contactMethod === 'email' ? 'email address' : 'phone number'}.`);
      return;
    }
    if (formData.contactMethod === 'email' && !formData.contactValue.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission storage
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('egs_consultation_requests') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('egs_consultation_requests', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      businessName: '',
      contactMethod: 'email',
      contactValue: '',
      tradeType: 'Plumbing',
      mainChallenge: 'Estimates sent without reliable follow-up',
      currentTools: '',
      requestAudit: true,
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#003049] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fcbf49]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Value & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#fcbf49] bg-[#002133] px-3.5 py-1.5 rounded-lg border border-[#064060]">
              <Sparkles className="w-3.5 h-3.5 text-[#fcbf49]" />
              Start Improving Today
            </div>

            {/* Exact Headline from Prompt */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-white tracking-tight leading-tight text-balance">
              Let's Fix the Gaps Between Customer Inquiries and Booked Jobs.
            </h2>

            {/* Exact Supporting Copy from Prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              You do not need to overhaul your entire business to start improving how you manage customers. We can identify the biggest gap in your current process and build a practical system around it.
            </p>

            <div className="space-y-3.5 pt-3">
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#fcbf49] shrink-0 mt-0.5" />
                <span>
                  <strong>Free 15-Minute Operational Review</strong> included with every consultation.
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#fcbf49] shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent scope & fixed implementation</strong> with no hidden platform lock-in.
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#fcbf49] shrink-0 mt-0.5" />
                <span>
                  <strong>Designed for your exact trade</strong> (Plumbing, HVAC, Cleaning, Electrical, etc.).
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#064060]/80">
              <div className="text-xs text-slate-400">
                Need to speak immediately?
              </div>
              <div className="text-sm font-semibold text-[#eae2b7] mt-0.5">
                Direct consultation response within 4 business hours.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#002133] border border-[#064060] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                /* Success Confirmation State */
                <div className="text-center py-10 px-4 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#fcbf49]/20 border border-[#fcbf49] flex items-center justify-center mx-auto text-[#fcbf49]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    Consultation Request Received!
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your request for <strong className="text-[#fcbf49]">{formData.businessName}</strong>. John and the Emperor Growth Systems team will review your inquiry pipeline and reach out via {formData.contactMethod === 'email' ? 'email' : 'phone'} within 4 business hours.
                  </p>

                  <div className="p-4 bg-[#00283d] rounded-xl border border-[#064060] text-xs text-slate-300 max-w-md mx-auto text-left">
                    <div className="font-semibold text-[#fcbf49] mb-1">What happens next:</div>
                    <div>1. We examine your typical trade workflow ({formData.tradeType}).</div>
                    <div>2. We prepare 1–2 immediate structural adjustments for your inquiry follow-up.</div>
                    <div>3. We connect for a focused 15-minute consultation at your convenience.</div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold text-[#eae2b7] hover:text-white border border-[#fcbf49]/40 hover:border-[#fcbf49] rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* The Live Input Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#064060] pb-4 mb-2">
                    <h3 className="text-xl font-display font-bold text-white">
                      Book a Business Systems Consultation
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Tell us where your process breaks down so we can recommend the simplest practical fix.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-[#d62828]/20 border border-[#d62828] rounded-xl text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#d62828] shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vance Heating & Air"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Method & Contact Value */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Preferred Contact Method *
                      </label>
                      <div className="flex items-center gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: 'email' })}
                          className={`px-2.5 py-0.5 rounded cursor-pointer font-medium transition-colors ${
                            formData.contactMethod === 'email' ? 'bg-[#fcbf49] text-[#003049] font-bold' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: 'phone' })}
                          className={`px-2.5 py-0.5 rounded cursor-pointer font-medium transition-colors ${
                            formData.contactMethod === 'phone' ? 'bg-[#fcbf49] text-[#003049] font-bold' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Phone / SMS
                        </button>
                      </div>
                    </div>
                    <input
                      type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                      required
                      placeholder={formData.contactMethod === 'email' ? 'e.g. marcus@vancehvac.com' : 'e.g. (555) 234-5678'}
                      value={formData.contactValue}
                      onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49] transition-colors"
                    />
                  </div>

                  {/* Type of Home-Service Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Type of Home-Service Business *
                      </label>
                      <select
                        value={formData.tradeType}
                        onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49] transition-colors cursor-pointer"
                      >
                        <option value="Plumbing">Plumbing Services</option>
                        <option value="HVAC">HVAC & Heating/Air</option>
                        <option value="Cleaning">Cleaning & Maid Services</option>
                        <option value="Electrical">Electrical Contractor</option>
                        <option value="Pest Control">Pest Control</option>
                        <option value="Painting & Renovation">Painting & Remodeling</option>
                        <option value="Appliance Repair">Appliance Repair</option>
                        <option value="Landscaping">Landscaping & Lawn Care</option>
                        <option value="Roofing">Roofing & Gutters</option>
                        <option value="Other Home Service">Other Home Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Main Challenge *
                      </label>
                      <select
                        value={formData.mainChallenge}
                        onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49] transition-colors cursor-pointer"
                      >
                        <option value="Estimates sent without reliable follow-up">Estimates sent without follow-up</option>
                        <option value="New customer inquiries go cold">New inquiries go cold while on job sites</option>
                        <option value="Bookings & scheduling are disorganized">Bookings & scheduling friction</option>
                        <option value="Customer details scattered across notes/texts">Customer details scattered</option>
                        <option value="Growth creating more chaos than profit">Growing but overwhelmed</option>
                      </select>
                    </div>
                  </div>

                  {/* Current Tools (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Current Tools or Process <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apple Notes, Jobber, Housecall Pro, Google Sheets, or pen & paper"
                      value={formData.currentTools}
                      onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#001d2d] border border-[#064060] text-white text-sm focus:outline-hidden focus:border-[#fcbf49] transition-colors"
                    />
                  </div>

                  {/* Free Audit Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={formData.requestAudit}
                      onChange={(e) => setFormData({ ...formData, requestAudit: e.target.checked })}
                      className="w-4 h-4 rounded accent-[#fcbf49] cursor-pointer"
                    />
                    <span className="text-xs text-[#eae2b7]">
                      Include a <strong>Free Operational System Audit</strong> of my current inquiry-to-job flow
                    </span>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-sm sm:text-base font-bold text-[#003049] bg-[#fcbf49] hover:bg-[#f3b134] active:scale-[0.99] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Book a Business Systems Consultation</span>
                        </>
                      )}
                    </button>
                    <div className="text-[11px] text-center text-slate-400 mt-2.5">
                      Practical review tailored to your business · No pressure sales
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
