import { ProblemCardItem, ServiceCardItem, TradeDetail } from '../types';

export const TRADE_PROFILES: TradeDetail[] = [
  {
    id: 'plumbing',
    name: 'Plumbing Businesses',
    shortName: 'Plumbing',
    tagline: 'Handling urgent repairs, fixture estimates, and multi-technician schedules',
    typicalInquiries: 'Water heater replacement quotes, slab leak diagnostics, bathroom remodel rough-ins',
    commonBreakdown: 'Emergency quotes sent via text on-site with zero systematic follow-up after 48 hours',
    systemSolution: 'Instant dispatch status tracking, automated 24h & 72h estimate checks, and booking confirmation workflows',
    sampleEstimate: '$1,850 - $4,200 Tankless Upgrade',
    avgTicket: 1650,
  },
  {
    id: 'hvac',
    name: 'HVAC & Air-Conditioning Technicians',
    shortName: 'HVAC',
    tagline: 'Coordinating seasonal maintenance, system replacements, and service visits',
    typicalInquiries: 'Heat pump installations, seasonal AC tune-ups, ductwork replacement inquiries',
    commonBreakdown: 'High-dollar replacement estimates stalling out in customer inboxes with no structured follow-up',
    systemSolution: 'Multi-stage proposal tracking, seasonal maintenance scheduling triggers, and calendar-linked appointment slots',
    sampleEstimate: '$6,500 - $12,000 System Replacement',
    avgTicket: 3400,
  },
  {
    id: 'cleaning',
    name: 'Cleaning Services & Companies',
    shortName: 'Cleaning',
    tagline: 'Managing recurring residential accounts, one-time deep cleans, and walk-throughs',
    typicalInquiries: 'Weekly & bi-weekly maid services, commercial office contracts, post-construction cleans',
    commonBreakdown: 'Inquiries arrive while teams are on-site; callbacks happen days later after the lead has called a competitor',
    systemSolution: 'Rapid inquiry logging, instant quote request qualification, and automated recurring booking cadence',
    sampleEstimate: '$320/mo Recurring Maid Service',
    avgTicket: 480,
  },
  {
    id: 'electrical',
    name: 'Electrical Service Providers',
    shortName: 'Electrical',
    tagline: 'Coordinating panel upgrades, EV charger installs, and residential rewiring',
    typicalInquiries: '200A service panel upgrade, Level 2 EV charger installation, whole-home surge protection',
    commonBreakdown: 'Electricians busy on ladders cannot log job specifications, leaving estimates unwritten or unfollowed',
    systemSolution: 'Standardized job scope capture, automated quote reminders, and permit inspection milestone tracking',
    sampleEstimate: '$2,400 - $4,800 Panel Upgrade',
    avgTicket: 2200,
  },
  {
    id: 'pest-control',
    name: 'Pest Control Companies',
    shortName: 'Pest Control',
    tagline: 'Scheduling inspections, one-off treatments, and quarterly preventive care',
    typicalInquiries: 'Termite inspection reports, rodent mitigation, quarterly exterior perimeter barriers',
    commonBreakdown: 'Treatment delivered successfully, but quarterly recurring renewal appointments are never systematically scheduled',
    systemSolution: 'Recurring customer recall pipelines, inspection report follow-ups, and customer re-engagement timers',
    sampleEstimate: '$550 Annual Perimeter Plan',
    avgTicket: 650,
  },
  {
    id: 'painting-renovation',
    name: 'Painting & Renovation Contractors',
    shortName: 'Painting & Remodeling',
    tagline: 'Tracking in-person walkthroughs, detailed proposals, and active job phases',
    typicalInquiries: 'Interior & exterior house painting, kitchen cabinet refinishing, bathroom renovations',
    commonBreakdown: 'Detailed proposals take hours to prepare, yet contractor never calls back to answer questions or address objections',
    systemSolution: 'Pipeline view for estimates sent, structured follow-up sequences, and deposit & start-date workflows',
    sampleEstimate: '$4,500 - $18,000 Project Scope',
    avgTicket: 5200,
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair Businesses',
    shortName: 'Appliance Repair',
    tagline: 'Coordinating rapid inquiries, technician dispatch, and part-order follow-ups',
    typicalInquiries: 'Refrigerator cooling issues, washer diagnostic visits, commercial oven repairs',
    commonBreakdown: 'Part backorders stall communication with the customer, leading to frustration and cancelled jobs',
    systemSolution: 'Part-arrival customer notification triggers, clear diagnostic-to-repair pipeline, and instant review requests',
    sampleEstimate: '$320 - $780 Repair & Parts',
    avgTicket: 410,
  },
];

export const PROBLEM_CARDS: ProblemCardItem[] = [
  {
    id: 'cold-inquiries',
    title: 'Inquiries Go Cold',
    description: 'A potential customer reaches out, but the response comes too late or gets lost among other messages while you are on a job site.',
    indicator: 'red',
    impact: 'High-intent homeowners call 2-3 contractors. The first to respond professionally often wins the job.',
  },
  {
    id: 'unfollowed-estimates',
    title: 'Estimates Never Get Followed Up',
    description: 'You send a quote, get busy with urgent customer work, and forget to check whether the customer is ready to proceed or has questions.',
    indicator: 'orange',
    impact: 'Up to 40% of outstanding estimates go cold simply because nobody followed up 48 hours later.',
  },
  {
    id: 'disorganized-bookings',
    title: 'Bookings Become Disorganized',
    description: 'Customer details, appointment information, and job updates are scattered across text messages, paper notes, voicemails, and spreadsheets.',
    indicator: 'orange',
    impact: 'Wasted travel, double-booked time slots, and stressful mornings trying to remember who needs what.',
  },
  {
    id: 'growth-pressure',
    title: 'Growth Creates More Pressure',
    description: 'As more inquiries arrive, keeping every conversation organized becomes harder without a repeatable process, leading to burnout.',
    indicator: 'red',
    impact: 'Spending more on advertising brings more chaos rather than clean, predictable revenue.',
  },
];

export const SOLUTION_CARDS: ServiceCardItem[] = [
  {
    number: '01',
    title: 'Lead Management Setup',
    description: 'Organize incoming inquiries in one clear system so you can see who contacted you, what service they need, their current status, and what needs to happen next.',
    deliverables: [
      'Centralized inquiry inbox for calls, web forms, and messages',
      'Categorization by service type, location, and urgency',
      'Clear visual stages: New, Contacted, Estimate Needed, Awaiting Decision',
      'Single-screen overview of every active prospect',
    ],
  },
  {
    number: '02',
    title: 'Follow-Up System Setup',
    description: 'Create practical follow-up processes and reminders so interested prospects do not depend entirely on your memory.',
    deliverables: [
      'Automated reminder prompts for quotes sent 24h, 72h, and 7 days ago',
      'Personalized message templates tailored to your voice and trade',
      'Follow-up task lists prioritized by potential job value',
      'Zero leads slipping through the cracks when your hands are full',
    ],
  },
  {
    number: '03',
    title: 'Booking & Customer Workflow Setup',
    description: 'Make the journey from inquiry to estimate, appointment, and confirmed job more organized and easier to manage.',
    deliverables: [
      'Structured calendar scheduling for diagnostics and site visits',
      'Job confirmation notices and pre-arrival details for homeowners',
      'Status tracking for estimates, signed agreements, and deposits',
      'Post-service follow-up and review requests on autopilot',
    ],
  },
  {
    number: '04',
    title: 'Business System Modification & Optimization',
    description: 'Already using spreadsheets, a CRM, booking software, or another business system? We can review your existing setup, improve its structure, modify workflows, and connect compatible tools where appropriate.',
    deliverables: [
      'Detailed audit of your existing tools and bottlenecks',
      'Workflow cleanup without forcing you to switch software unnecessarily',
      'Connecting compatible apps (calendars, forms, SMS, accounting)',
      'Hands-on team training and practical documentation',
    ],
  },
];

export const FAQ_LIST = [
  {
    q: 'Do I need to buy new software?',
    a: 'Not necessarily. We can assess your current tools and determine whether they can be improved or whether another solution is justified. Many clients achieve dramatic improvements simply by structuring their existing tools properly.',
  },
  {
    q: 'Can you modify a system I already use?',
    a: 'Yes, where the platform and access permissions support the requested changes. The scope will be agreed before implementation. We frequently help contractors optimize tools like Jobber, Housecall Pro, ServiceTitan, HubSpot, Google Workspace, or custom spreadsheets.',
  },
  {
    q: 'Is this suitable for a small business?',
    a: 'Yes. The setup can begin with a straightforward system and expand as your business needs change. A solo operator needs clean clarity, not overwhelming complexity.',
  },
  {
    q: 'Will automation replace my staff?',
    a: 'The goal is to reduce avoidable manual work, improve visibility, and support your team — not automatically replace human judgment or customer relationships. Home service is fundamentally built on personal trust.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on the complexity of the workflow, the platforms involved, and the scope of setup or modification. We invite you to discuss your needs during a free consultation before providing a clear, fixed-scope quote.',
  },
  {
    q: 'What if I do not know which system I need?',
    a: 'That is completely fine. Start by explaining how you currently receive inquiries, follow up with prospects, and book jobs. The recommended solution should always follow the actual business problem, not the other way around.',
  },
];
