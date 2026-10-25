import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { TheSolution } from './components/TheSolution';
import { Transformation } from './components/Transformation';
import { HowItWorks } from './components/HowItWorks';
import { ServicePackages } from './components/ServicePackages';
import { WhoWeHelp } from './components/WhoWeHelp';
import { OperationalAuditCalculator } from './components/OperationalAuditCalculator';
import { FounderNote } from './components/FounderNote';
import { FaqSection } from './components/FaqSection';
import { FinalConversion } from './components/FinalConversion';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditPresetData, setAuditPresetData] = useState<{
    monthlyInquiries?: number;
    avgTicket?: number;
    estimatedRecovery?: number;
  } | null>(null);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = () => {
    setAuditPresetData(null);
    setSelectedPackageForModal(undefined);
    setIsAuditModalOpen(true);
  };

  const handleOpenAuditModalWithData = (data: {
    monthlyInquiries: number;
    avgTicket: number;
    estimatedRecovery: number;
  }) => {
    setAuditPresetData(data);
    setSelectedPackageForModal(undefined);
    setIsAuditModalOpen(true);
  };

  const handleOpenConsultationModal = (packageOrTrade?: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPackageForModal(packageOrTrade);
      setIsAuditModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#003049] text-slate-800 flex flex-col font-body selection:bg-[#fcbf49] selection:text-[#003049]">
      {/* 1. Navigation */}
      <Navbar
        onOpenAuditModal={handleOpenAuditModal}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenAuditModal={handleOpenAuditModal}
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 3. The Problem Section */}
        <TheProblem onOpenAuditModal={handleOpenAuditModal} />

        {/* 4. The Solution Section */}
        <TheSolution
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 5. Sell the Transformation Section */}
        <Transformation />

        {/* 6. How It Works Section */}
        <HowItWorks
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 7. Service Packages Section */}
        <ServicePackages
          onOpenConsultationModal={(pkg) => handleOpenConsultationModal(pkg)}
        />

        {/* 8. Who We Help Section */}
        <WhoWeHelp
          onOpenConsultationModal={(trade) => handleOpenConsultationModal(trade)}
        />

        {/* Interactive Free Operational Audit Calculator */}
        <OperationalAuditCalculator
          onOpenAuditModalWithData={handleOpenAuditModalWithData}
        />

        {/* Founder Spotlight & Commitment */}
        <FounderNote
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 9. Frequently Asked Questions Section */}
        <FaqSection
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 10. Final Conversion Section */}
        <FinalConversion />
      </main>

      {/* 11. Footer Section */}
      <Footer
        onOpenAuditModal={handleOpenAuditModal}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Interactive Free Operational Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        presetData={auditPresetData}
        selectedPackage={selectedPackageForModal}
      />
    </div>
  );
}
