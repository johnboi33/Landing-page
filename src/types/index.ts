export type TradeCategory = 
  | 'cleaning'
  | 'plumbing'
  | 'electrical'
  | 'hvac'
  | 'pest-control'
  | 'landscaping'
  | 'painting-renovation'
  | 'appliance-repair'
  | 'other';

export interface TradeDetail {
  id: TradeCategory;
  name: string;
  shortName: string;
  tagline: string;
  typicalInquiries: string;
  commonBreakdown: string;
  systemSolution: string;
  sampleEstimate: string;
  avgTicket: number;
}

export interface ProblemCardItem {
  id: string;
  title: string;
  description: string;
  indicator: 'red' | 'orange';
  impact: string;
}

export interface ServiceCardItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ConsultationFormData {
  fullName: string;
  businessName: string;
  contactMethod: 'email' | 'phone';
  contactValue: string;
  tradeType: string;
  mainChallenge: string;
  currentTools: string;
  requestAudit: boolean;
  notes?: string;
}
