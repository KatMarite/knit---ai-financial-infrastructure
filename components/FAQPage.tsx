import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { HelpCircle, ChevronDown, Search, Layout, Settings, DollarSign, Clock, Shield, Database, CreditCard, Users, Code, FileText, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

const FAQPage: React.FC = () => {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Platform Overview & Core Capabilities": return <Layout className="text-brand-600" size={24} />;
            case "Platform Features & Functionality": return <Settings className="text-emerald-600" size={24} />;
            case "Pricing & Commercial Terms": return <DollarSign className="text-purple-600" size={24} />;
            case "Implementation & Onboarding": return <Clock className="text-orange-600" size={24} />;
            case "Compliance & Regulatory": return <Shield className="text-blue-600" size={24} />;
            case "Data Security & Privacy": return <Database className="text-red-600" size={24} />;
            case "Revenue & Payment Management": return <CreditCard className="text-indigo-600" size={24} />;
            case "Technical & Integration": return <Code className="text-rose-600" size={24} />;
            case "Account Management & Support": return <FileText className="text-amber-600" size={24} />;
            case "Getting Started": return <BookOpen className="text-cyan-600" size={24} />;
            case "Additional Questions": return <HelpCircle className="text-slate-600" size={24} />;
            case "Contact & Next Steps": return <MessageCircle className="text-blue-500" size={24} />;
            default: return <HelpCircle className="text-slate-600" size={24} />;
        }
    };

    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const faqData = [
        {
            category: "Platform Overview & Core Capabilities",
            questions: [
                {
                    question: "What is Knit?",
                    answer: "Knit is a B2B embedded finance SaaS platform that helps schools manage their complete customer lifecycle—from application and credit screening through payment collection, automated reminders, and revenue recovery. We combine screening, payments, and customer lifecycle management in a single cloud-based solution."
                },
                {
                    question: "Which industries does Knit serve?",
                    answer: "Currently, Knit serves schools (private schools, independent schools, and fee-paying public schools in Quintiles 4-5) for tuition fee management, application processing, and parent lifecycle management. We're building toward future expansion into healthcare, rental housing, and transportation."
                },
                {
                    question: "What problems does Knit solve?",
                    answer: "For Schools: Only 66% of independent school fees and 42% of public school fees are paid on time (Q1 2024 data), manual recovery processes, inability to assess parent affordability before admission, fragmented systems, poor parent mobile experience, and complex regulatory compliance."
                },
                {
                    question: "How is Knit different from existing school management systems?",
                    answer: "Knit focuses specifically on the financial lifecycle and payment management, not general school administration. Our platform is designed to work alongside your existing systems by becoming your dedicated financial operations layer with application-stage credit screening, proactive payment automation, partner network integration, mobile-first parent experience, and comprehensive compliance. Knit integrates with most school management systems through APIs or data exchange."
                }
            ]
        },
        {
            category: "Platform Features & Functionality",
            questions: [
                {
                    question: "What are the core modules of the Knit platform?",
                    answer: "Knit has three core modules: (1) Screening Module with instant credit bureau checks, ID verification, affordability scoring, continuous monitoring, and 200 credit queries included; (2) Payments Module with automated DebiCheck-compliant debit orders, Pay-by-Bank instant EFT, flexible payment plans, and real-time reconciliation; and (3) Customer Lifecycle Management with application workflows, automated payment follow-ups, WhatsApp/email notifications, payment tracking, and MIS dashboard."
                },
                {
                    question: "What payment methods does Knit support?",
                    answer: "Knit supports Debit Orders (automated monthly collections with DebiCheck authentication), Instant EFT (Pay-by-Bank with real-time transfers), Credit/Debit Cards (via our payment provider), and Mobile Wallets (major mobile payment solutions)."
                },
                {
                    question: "Does Knit process payments directly or use third-party providers?",
                    answer: "Knit partners with licensed third-party payment processors registered with PASA (Payments Association of South Africa). We don't hold funds ourselves—all payments flow through regulated banking infrastructure, with funds held in segregated client trust accounts until disbursed to your institution. This ensures banking-grade security, fast settlement (typically T+1), transparent audit trails, and protection of client funds."
                },
                {
                    question: "Can Knit integrate with our existing systems?",
                    answer: "Yes. Knit integrates with School Management Systems (D6, Edupac, iSAMS, SA-SAMS via API or export/import), Accounting Software (Sage, Pastel, Xero), Credit Bureaus (Experian, TransUnion, TPN with built-in connections), Payment Infrastructure (licensed PASA-registered providers), and Specialist Partners. We typically integrate via API for real-time sync, or scheduled CSV/XML exports. Our onboarding team handles all technical integration."
                },
                {
                    question: "What reports and dashboards are available?",
                    answer: "Administrative Dashboard includes real-time payment tracking, collection analytics, outstanding balance aging, payment success/failure rates, affordability scores, and debit order status. Financial Reports cover monthly collections, transaction exports, fee exemption tracking, premium lapse analytics, bank reconciliation, and audit trails. Compliance Reports include POPIA logs, NCR communication records, Section 41 letter tracking, and credit bureau audit. All reports exportable to PDF, Excel, and CSV."
                }
            ]
        },
        {
            category: "Pricing & Commercial Terms",
            questions: [
                {
                    question: "What does Knit cost?",
                    answer: "We offer flexible pricing tailored to your institution's size and needs. Our subscription includes multi-user licenses, parent/member portal, credit bureau screening (200 queries/month included), AI affordability dashboard, payments module, automated recovery, WhatsApp/email notifications, POPIA-compliant data storage, and comprehensive support. Pricing includes a one-time setup fee, recurring subscription (monthly/quarterly/annual options), and transaction-based fees on successful payments only. Contact sales@knit.cash for a customized quote."
                },
                {
                    question: "Are there any hidden fees?",
                    answer: "No. All costs are transparent and disclosed upfront: Setup fee is one-time only; Subscription covers all core features with no per-student or per-member charges; Transaction fees only apply to successful payments (no charge for failed transactions); 200 credit queries/month included (most institutions stay within this); and No cancellation penalties."
                },
                {
                    question: "What is the ROI for my institution?",
                    answer: "Expected value creation includes recovery rate improvement (typically 10-15% improvement in on-time payments), reduced administrative burden (10-20 hours saved per month), better financial visibility, lower payment processing costs, and risk mitigation. Most institutions see ROI exceeding 50% through combined benefits, with positive returns within the first year and compounding benefits over time. Contact our team for a customized ROI projection based on your current data."
                },
                {
                    question: "Do you offer pricing options for multi-campus institutions?",
                    answer: "Yes, we offer tailored pricing for groups with multiple locations. Enterprise arrangements are available for institutions with multiple campuses under single management and educational groups. Benefits include consolidated billing/reporting, dedicated account management, priority implementation, and enhanced support. Contact sales@knit.cash for enterprise pricing."
                },
                {
                    question: "What is included in the setup fee?",
                    answer: "The once-off setup fee covers database configuration (custom setup for fee schedules, payment plans), payment configuration (debit order mandates, bank account setup, payment gateway integration), data migration (import of existing records and historical data), staff training (comprehensive onboarding for your team), User Acceptance Testing (UAT), and compliance setup (POPIA, consent management, NCR compliance). Typical onboarding takes 2-4 weeks from contract signing to go-live."
                }
            ]
        },
        {
            category: "Implementation & Onboarding",
            questions: [
                {
                    question: "How long does implementation take?",
                    answer: "Standard timeline is 2-4 weeks. Week 1-2: Configuration (kickoff, database setup, payment configuration, integration, data migration). Week 2-3: Training & Testing (staff training for up to 5 users, UAT, test debit order runs, compliance verification). Week 3-4: Go-Live (production deployment, first live debit order run monitored, post-launch support, performance review). Fast-track option available for 10-14 days with additional fee."
                },
                {
                    question: "What do we need to provide for implementation?",
                    answer: "Required information: Institution details (registration, banking, branding), existing student/member database (CSV or export), historical payment records (optional but recommended), fee schedules and payment plan structures, bank account details, user list for training, and POPIA Information Officer designation. Technical requirements: Internet connectivity, modern web browsers (Chrome, Firefox, Edge, Safari). No special hardware or server infrastructure needed."
                },
                {
                    question: "Do we need to migrate all our historical data?",
                    answer: "Recommended but not required. Current year data is strongly recommended for accurate account balancing. Historical payment records are useful for credit scoring and behavior analysis. Archived data is optional and can remain in legacy system. We provide data templates for CSV import, validate data quality, offer parallel runs (test new system while keeping old system active), and have phased migration options for large institutions."
                },
                {
                    question: "What training is provided?",
                    answer: "Initial onboarding training (included in setup fee): Live sessions for up to 5 core users, 8-12 hours total training, role-specific training (admin, bursar, admissions, finance, principal), hands-on practice in test environment, training materials and user guides. Ongoing training includes recorded tutorials (24/7 access), knowledge base articles, quarterly webinars on new features, and annual refresher training (no charge). Additional training: R500/user beyond 5 users, R5,000/day + travel for on-site training."
                },
                {
                    question: "What support is available after go-live?",
                    answer: "Daytime support (Mon-Fri, 08:00-20:00): Email at support@knit.cash (4-hour response), phone during business hours, in-platform chat. Support tiers: Priority 1 (System Down) - 2-hour response/8-hour resolution; Priority 2 (Feature Broken) - 4-hour response/24-hour resolution; Priority 3 (Questions) - 8-hour response/48-hour resolution. Escalation path: Support → Product Owner → CTO. Account manager for commercial queries and quarterly business reviews for enterprise clients."
                },
                {
                    question: "Can we run Knit in parallel with our existing system during transition?",
                    answer: "Yes, parallel runs are encouraged for large institutions or those with complex requirements. You can run both systems simultaneously for 1-3 months, reconcile results to ensure accuracy, gradually shift functionality from old to new system, minimize disruption risk, and build confidence before full cutover. Many schools run parallel during a single term/quarter before going fully live."
                }
            ]
        },
        {
            category: "Compliance & Regulatory",
            questions: [
                {
                    question: "Is Knit POPIA compliant?",
                    answer: "Yes, Knit is fully compliant with POPIA. We employ AES-256 encryption for data at rest and TLS 1.3 for data in transit, strict role-based access controls, complete audit trails, data minimization and purpose limitation, automated retention policies, and South African data center hosting. We provide comprehensive consent management, Data Subject Access Request (DSAR) processing, automated breach detection, Information Officer portal, privacy policy framework, and Data Processing Agreements with all service providers. You designate an Information Officer, obtain explicit consent, inform data subjects of their rights, report suspected breaches within 24 hours, and maintain POPIA-aligned privacy policies."
                },
                {
                    question: "How does Knit handle credit bureau checks and NCR compliance?",
                    answer: "Knit is registered with the NCR and maintains authorized relationships with Experian, TransUnion, and TPN. We capture written consent before each credit query, provide clear disclosure of purposes, ensure data protection per POPIA, generate 20-business day Letters of Demand before adverse credit reporting, provide NCA Regulation 19(4) compliant communications, generate Section 129 notices, monitor status, and maintain comprehensive audit trails. All queries are logged with date, time, purpose, and consent evidence."
                },
                {
                    question: "What about the South African Schools Act (for school clients)?",
                    answer: "Knit automates SA Schools Act 84 of 1996 compliance with automated exemption calculator (full if income < 10× annual fee, partial 10×-30×), digital exemption application workflow, income verification, Board approval workflow. For Section 41 compliance: Cannot refuse admission for non-payment (enforced by system), cannot withhold reports for non-payment (flagged), Section 41(5) letter generation before legal action, 20-business day waiting period tracking, and 3-year status monitoring. The system prevents legal referral before Section 41 notice is sent."
                },
                {
                    question: "How does Knit ensure funds are secure?",
                    answer: "Security through licensed partnerships: All collected funds held by our licensed payment provider partners in Segregated Client Trust Accounts (not commingled with operational funds). Payment partners are PASA-registered with banking-grade security including PCI DSS compliance. Fast settlement (typically T+1 next business day), professional indemnity insurance, and regulated banking infrastructure under Reserve Bank oversight. Fund flow: Parent/Member → Licensed Payment Provider → Segregated Trust Account → Your Bank Account."
                },
                {
                    question: "What happens to our data if we cancel?",
                    answer: "Data portability and deletion: Full data export provided in CSV/Excel within 30 days of cancellation. We retain your data for 90 days after cancellation to allow transition. After 90 days (or upon written request), all data permanently deleted from production systems. Encrypted backups retained for 12 months for legal/compliance purposes, then deleted. You can request data export anytime (no charge), request immediate deletion (waiving 90-day period), receive confirmation of deletion, and verify deletion through independent audit (your cost). Exception: Financial transaction records retained for 7 years as required by tax regulations."
                },
                {
                    question: "Is Knit registered with regulatory bodies?",
                    answer: "Current registrations: NCR Registered (National Credit Regulator for credit-related activities), PASA Partnership (payment providers registered with Payments Association of South Africa), FSP Registration in process for relevant financial services. Compliance partnerships with Experian, TPN, TransUnion, and licensed payment providers registered with major SA banks. We conduct regular financial audits, POPIA compliance assessments, third-party security testing, and continuous compliance monitoring."
                }
            ]
        },
        {
            category: "Data Security & Privacy",
            questions: [
                {
                    question: "How is our data protected?",
                    answer: "Comprehensive security: AES-256 encryption for data at rest, TLS 1.3 for data in transit, end-to-end encryption for sensitive fields (bank details, ID numbers), cryptographic hashing for passwords. Multi-factor authentication (MFA) mandatory, role-based access control (RBAC), principle of least privilege, automatic 30-minute session timeout, failed login protection (5 attempts = 30-minute lockout), IP whitelisting available. Cloud hosting in SOC 2 Type II compliant SA data centers, DDoS protection, Web Application Firewall (WAF), IDS/IPS, 24/7 security monitoring, regular vulnerability scanning, and security patch management."
                },
                {
                    question: "Where is our data hosted?",
                    answer: "Primary hosting: South Africa data centers (AWS Cape Town or Azure Johannesburg). SA-based hosting ensures data sovereignty, POPIA compliance (transfers outside SA require additional controls), low latency, and compliance with government data localization requirements. Backup and disaster recovery: Real-time replication to secondary SA data center, daily encrypted backups to separate region, 99.9% uptime SLA, 4-hour Recovery Time Objective (RTO), 15-minute Recovery Point Objective (RPO)."
                },
                {
                    question: "Who has access to our data?",
                    answer: "Internal access (Knit employees): Developers have no access to production data (use anonymized test data); Support team has read-only access with audit logging only when assisting with support tickets; Product team sees aggregated/anonymized analytics only; Executives have no direct data access, only summary reports. All access is logged and auditable, requires justified business need, subject to background checks and NDAs, and reviewed quarterly. Third-party access limited to payment providers (necessary for transactions), credit bureaus (authorized credit checks only), and cloud infrastructure provider (encrypted data, no access keys). No data sold or shared with advertisers."
                },
                {
                    question: "What is your incident response process?",
                    answer: "Breach response: Detection (0-2 hours) - automated monitoring, SOC alerted, triage. Containment (2-4 hours) - isolate affected systems, prevent further access, preserve evidence. Investigation (4-24 hours) - determine scope, identify affected data, document timeline. Notification (24-48 hours) - notify affected institutions within 24 hours, notify Information Regulator if required by POPIA, notify affected data subjects if required, provide detailed incident report. Remediation (24-72 hours) - close security gaps, implement additional controls. Post-incident (7-30 days) - full forensic investigation report, lessons learned, compensation where applicable, third-party security audit."
                },
                {
                    question: "Can we conduct security audits of Knit?",
                    answer: "Yes, we welcome security scrutiny. Available options: Documentation review (security policies, certifications, audit reports), questionnaire-based assessment (vendor risk assessment), third-party audit report sharing (recent penetration tests and compliance audits under NDA), on-site security review for enterprise clients (scheduled, NDA required), and independent penetration testing coordination (with 30-day notice, rules of engagement required). Our audit schedule: Annual external security audit, quarterly internal security review, annual penetration testing, continuous vulnerability scanning. Documentation review and questionnaires are complimentary."
                }
            ]
        },
        {
            category: "Revenue & Payment Management",
            questions: [
                {
                    question: "How does automated collections work?",
                    answer: "Phase 1 Prevention (Before Due Date): T-7 days friendly reminder via WhatsApp/Email, T-3 days second reminder with payment link, T-1 day final reminder. Phase 2 Payment Processing: T-Day automated debit order run (configurable 1st-5th of month), real-time bank account validation, DebiCheck authentication, 90% success rate. Phase 3 Follow-up (After Payment Due): T+1 day notification of success/failure, T+3 days payment plan offer, T+7 days second payment attempt, T+14 days escalation notice, T+30 days external recovery referral. AI-powered optimization includes risk scoring, personalized message timing, payment plan recommendations, and channel preference learning."
                },
                {
                    question: "What is a debit order and how does it work?",
                    answer: "A debit order is an automated payment instruction that allows you to collect money directly from a parent's or member's bank account on a scheduled date each month. Process: Parent signs digital mandate authorizing collections → Bank verification validates account → DebiCheck authentication via SMS (required by PASA) → Scheduled collection submitted to bank on due date → Bank processes payment (typically same day or T+1) → Funds deposited into your account → Payment automatically reconciled. Advantages: 90%+ success rate vs 60-70% manual, 3% cost vs 3-5% card fees, fully automated, predictable cash flow, automatic reconciliation."
                },
                {
                    question: "What happens if a debit order fails?",
                    answer: "Failure reasons: Insufficient funds (most common), account closed/frozen, bank details incorrect, mandate not authenticated, account holder dispute. Automated response: Immediate notification to parent within 1 hour, reason code provided, action request to update details or make alternate payment, automatic retry 3-5 days later (if insufficient funds), payment plan offer if parent cannot pay full amount, flagged for manual intervention. Success rate improvement: First attempt 90% on valid accounts, second attempt resolves 60% of first-attempt failures, 80% of parents offered payment plan complete it. Overall: 95%+ collection rate within 30 days."
                },
                {
                    question: "Can parents choose their own payment date?",
                    answer: "Yes, flexible payment scheduling available. Default options: 1st of month, 5th, 15th, 25th, last business day. Custom options: Configure institution-specific dates, allow parents to select during enrollment, change payment date with 30-day notice (re-authentication required). Payroll alignment: Government employees prefer 25th, private sector prefers 1st or 15th. System handles separate debit order runs for each payment date, consolidated reporting across all dates, no additional fees for multiple payment dates."
                },
                {
                    question: "How do payment plans and installment arrangements work?",
                    answer: "Upfront payment plan setup: During enrollment, parents select payment frequency (Monthly standard, Quarterly 3 installments, Biannual 2 installments, 10-month academic year plan excluding Dec-Jan). System automatically calculates installment amounts, debit order mandate covers all scheduled payments. Mid-year payment arrangements: Parents experiencing difficulties can request adjusted schedules, system facilitates arrangements, outstanding balance spread over agreed period, parent accepts via digital acknowledgment, separate debit order mandate for arrangement. Features include automated calculation, schedule management, payment reminders, progress monitoring. Important: Payment arrangements are administrative agreements between your institution and parents/members. Knit provides the technology platform; your institution remains responsible for compliance with applicable regulations."
                },
                {
                    question: "How does the partner referral network work for outstanding accounts?",
                    answer: "Internal recovery (Days 0-60): Automated reminders and payment plan offers through Knit, personal outreach from bursar/admin team, system tracks all communication. Specialist support (Days 60-90): System flags accounts requiring additional support, generates comprehensive documentation package, presents referral recommendations for your review. Partner network engagement (Day 90+): You approve referral to specialist partners, Knit facilitates documentation transfer, partners provide specialized recovery services, you receive regular progress reports, recovered amounts flow per your agreements. Important: Knit facilitates payment workflows and partner coordination; specialist services provided by independent third-party partners selected and contracted by your institution."
                },
                {
                    question: "What credit bureau data does Knit access?",
                    answer: "Credit bureau partnerships: Experian (credit score, payment history, account status, defaults, judgments), TransUnion (credit score, comprehensive report, payment-to-income), TPN (education-specific 5-year school fee payment history). Data points: Credit score (0-999 range), payment history, current accounts/balances, adverse listings, judgments/insolvency, employment verification, property ownership, directorships. Affordability assessment: Knit's AI combines credit bureau data with stated income, household size, current debt, school fees requested, historical payment patterns. Risk rating: Low risk (90%+ on-time probability), Medium risk (70-89%), High risk (<70%). Schools use this for informed decisions about admission offers, payment plan terms, deposit requirements, fee exemption eligibility."
                }
            ]
        },
        {
            category: "Technical & Integration",
            questions: [
                {
                    question: "What technical requirements are needed to use Knit?",
                    answer: "Minimal requirements: Internet connectivity (broadband or 4G/5G mobile), modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). No special hardware required, no server or IT infrastructure needed. Recommended setup: Dual monitors for admin users, printer for physical receipts/reports (optional), scanner for document uploads (optional, can use smartphone), backup internet connection (mobile hotspot) for critical operations. Browser-based platform benefits: No software installation, automatic updates (always latest version), access from any device (desktop, laptop, tablet), work from home capability, multi-location access. Mobile access: Responsive design works on smartphones, parent/member portal optimized for mobile."
                },
                {
                    question: "Can Knit integrate with our existing school management system?",
                    answer: "Yes, bidirectional integration with major systems. Supported integrations: D6 (API integration for student data, fee schedules, payment posting), Edupac (CSV export/import, scheduled syncs), iSAMS (REST API integration), SA-SAMS (XML export, scheduled imports), Custom systems (API or file-based integration available). From School System → Knit: Student demographic data, fee schedules, account balances, enrollment status changes. From Knit → School System: Payment confirmations (real-time), account balance updates, collection status, credit screening results (optional). Integration methods: Real-time API (webhook notifications for instant updates), Scheduled sync (hourly, daily, custom frequency), Manual export/import (CSV files via SFTP or dashboard upload). Data reconciliation: Automated daily reconciliation reports, discrepancy alerts and resolution workflows, audit trail of all data transfers."
                },
                {
                    question: "What APIs does Knit offer?",
                    answer: "REST API endpoints: Student/Member management (CRUD operations), Payment processing (initiate, query, reverse), Credit bureau queries, Collections status, Reporting and analytics, Webhook management. Authentication: OAuth 2.0 with JWT tokens, API keys for server-to-server, scoped permissions by endpoint, rate limiting to prevent abuse. Webhook notifications: Payment success/failure, debit order run completion, account status changes, collections escalation triggers. API documentation: OpenAPI 3.0 specification, interactive Swagger UI, code samples (Python, JavaScript, PHP, C#), Postman collection, sandbox environment for testing. Enterprise features: Dedicated API keys per environment, higher rate limits, custom webhook endpoints, priority support for API issues."
                },
                {
                    question: "Can we export our data?",
                    answer: "Yes, comprehensive data export available. Export formats: CSV (Excel-compatible), Excel (.xlsx), JSON (for developers), PDF (for reports). Export types: Student/Member data (demographics, contact information, enrollment history, fee schedules), Financial data (transaction history all time, account balances, payment plans, refunds/adjustments), Collections data (debit order attempts, payment reminders sent, collection status, debt referrals), Credit data (credit scores/reports, affordability assessments, risk ratings), System data (user activity logs, audit trails, configuration settings). Scheduling: On-demand exports (anytime), scheduled exports (daily, weekly, monthly), automatic email delivery, SFTP push available. Data retention: All historical data available for export, no time limits, data available even after cancellation (90 days)."
                },
                {
                    question: "Does Knit offer a sandbox or test environment?",
                    answer: "Yes, full-featured sandbox available. Sandbox capabilities: Replica of production environment, test all features without risk, simulate debit order runs, mock payment successes/failures, practice staff training, test integrations before go-live. Sandbox access: Included free with subscription, separate login credentials, data isolated from production, reset sandbox anytime. Test data: Sample student/member records provided, dummy bank accounts for testing, simulated credit bureau responses, configurable test scenarios. Use cases: Staff training and onboarding, new feature testing before rollout, integration development and QA, user acceptance testing (UAT), demo environment for stakeholders."
                }
            ]
        },
        {
            category: "Account Management & Support",
            questions: [
                {
                    question: "What support is included in the subscription?",
                    answer: "Daytime support (Monday-Friday, 08:00-20:00): Email (support@knit.cash), phone, in-platform chat, knowledge base and FAQs. Support SLAs: Priority 1 (System down) - 2-hour response, 8-hour resolution; Priority 2 (Feature broken) - 4-hour response, 24-hour resolution; Priority 3 (Questions/How-to) - 8-hour response, 48-hour resolution. Support channels: Ticketing system (tracked and escalated automatically), screen sharing for troubleshooting, remote training sessions, documentation and video tutorials. Proactive support: Quarterly business reviews (enterprise clients), performance optimization recommendations, new feature training, industry best practice sharing."
                },
                {
                    question: "Are there additional support options?",
                    answer: "Premium support packages: After-hours support (24/7 phone support +R2,500/month, weekend support +R1,500/month, Priority 1 response reduced to 1 hour). Dedicated account manager for enterprise clients (10+ locations) included, mid-sized clients +R5,000/month (benefits: single point of contact, monthly check-ins, proactive monitoring, configuration optimization, escalation management). On-site support: On-site troubleshooting R5,000/day + travel, on-site training R5,000/day + travel, quarterly business reviews included for enterprise. Professional services: Custom integration development (quoted per project), data migration from legacy system R5,000-R20,000, process consulting R2,000/hour, compliance audit assistance R10,000-R25,000."
                },
                {
                    question: "How does billing and invoicing work?",
                    answer: "Billing process: Timing - Setup fee + first subscription due upon contract signing, ongoing subscription billed quarterly in advance (or monthly/annually per preference), transaction fees automatically deducted at time of collection. Invoicing: Invoices sent via email in PDF and CSV formats, 30-day payment terms. Payment methods: EFT, debit order, credit card, cash (with receipt). Overdue payments: Reminder at 15 days, account flagged at 30 days, service suspension at 45 days, interest charged per legal rates. Payment receipts: Automatic email confirmation, available for download in dashboard, tax invoice provided for accounting."
                },
                {
                    question: "Can we cancel our subscription?",
                    answer: "Cancellation policy: Notice period - 90 days written notice required before end of current term. Initial term: 12 months (4 quarters), auto-renewal: 12-month periods thereafter. Refund policy: Prepaid subscription pro-rata refund for unused quarters, transaction fees non-refundable (already processed), setup fee non-refundable, deductions for any outstanding amounts. Cancellation process: Submit written notice to accounts@knit.cash, handover call scheduled (optional but recommended), data export provided within 30 days, final invoice issued, service terminated at end of notice period. Data retention: 90 days after cancellation (transition period), full data export provided, permanent deletion after 90 days (or upon request). Re-activation: Can reactivate within 90 days (no setup fee), after 90 days new setup fee applies. No penalty fees - simply honor 90-day notice period."
                },
                {
                    question: "What happens if we want to upgrade or downgrade our plan?",
                    answer: "Plan changes: Mid-term changes allowed (upgrade anytime for additional users/features, downgrade at renewal only to avoid disruption). Upgrade process: Request via email or dashboard, price difference calculated (pro-rata for current quarter), changes take effect within 2 business days, invoice for difference issued. Downgrade process: Submit request 90 days before renewal, confirm no data/functionality loss, new pricing effective at next renewal, refund not available for current term. Common changes: Adding users beyond 5-user license, switching from monthly to annual billing (immediate discount), adding premium support package, removing unused features. Enterprise custom plans: Available for 10+ locations with custom feature packages, volume discounts, dedicated account manager. Contact sales for quote."
                },
                {
                    question: "How do we provide feedback or request new features?",
                    answer: "Feedback channels: Product feedback (email: product@knit.cash, in-app feedback widget, quarterly user surveys, customer advisory board invite-only). Feature requests: Submit via dashboard 'Request Feature' button, upvote existing requests from other users, feature voting dashboard (see what others want), product roadmap transparency (quarterly updates). Bug reports: Email support@knit.cash, in-app bug report form, screen recordings encouraged, follow-up within 24 hours. Response process: Acknowledgment within 48 hours, feasibility assessment, prioritization (based on demand, impact, effort), roadmap inclusion (if approved), update to requester when shipped. Influence product direction: Enterprise clients get direct input to roadmap, customer advisory board quarterly meetings with product team, beta testing early access to new features, case studies for priority support."
                }
            ]
        },
        {
            category: "Getting Started",
            questions: [
                {
                    question: "How do I get started with Knit?",
                    answer: "Simple 5-step process: (1) Schedule a demo - Email sales@knit.cash, visit www.knit.cash/demo, 30-minute platform demo tailored to your vertical. (2) Proposal and pricing - Customized proposal based on your needs, transparent pricing (no hidden fees), ROI calculation included, references provided. (3) Contract signing - Standard SaaS agreement, electronic signature (DocuSign), setup fee + first quarter invoiced. (4) Implementation (2-4 weeks) - Dedicated implementation team assigned, data migration and configuration, staff training (up to 5 users), user acceptance testing. (5) Go-live - Production launch, first debit order run monitored, post-launch support, performance review at 30 days."
                },
                {
                    question: "Who should I involve in the evaluation process?",
                    answer: "Recommended stakeholders: Principal/Head (strategic decision, budget approval), Bursar/Finance Manager (day-to-day user, process owner), Admissions Manager (application screening workflows), IT Manager (integration and technical requirements), School Governing Body (final approval for public schools). Demo customization: Separate demos for different stakeholders, technical demo for IT, financial demo for bursar, strategic demo for leadership."
                },
                {
                    question: "What information do I need to provide for a quote?",
                    answer: "Quote requirements: Basic information (institution name and location, type - private school/public school, contact person and email), number of students, annual fee revenue, current payment collection rate, existing systems in use (D6, Edupac, etc.). Optional but helpful: Current pain points and priorities, timeline for implementation, budget range, decision-making process and stakeholders. Response time: Standard quote 2 business days, enterprise quote 5 business days (requires custom analysis)."
                },
                {
                    question: "Do you offer pilots or trial periods?",
                    answer: "Pilot program available: Limited duration pilot period, controlled volume to validate platform fit, full platform access and functionality, includes onboarding and training, pricing tailored for pilot phase. Pilot deliverables: Successful payment processing and collections, measurable collection rate improvement, staff trained and confident in platform use, integration testing (if applicable), performance validation. Pilot-to-production transition: Seamless conversion to full subscription, data and configuration retained, scale up to full operational volume, continued support throughout transition. No obligation: Evaluate platform fit without long-term commitment, full data export provided, clear exit process if needed. Ideal for: Institutions evaluating new systems, those requiring proof of concept before full commitment, complex integration requirements needing validation, building internal buy-in through demonstrated results. Contact sales@knit.cash to discuss pilot program options."
                },
                {
                    question: "What is the typical ROI and payback period?",
                    answer: "Value realization framework: Investment considerations - One-time setup and onboarding, ongoing subscription costs, transaction-based fees (only on successful payments), total cost varies by institution size and requirements. Value creation areas: Collection rate improvement (institutions typically see measurable improvement in on-time payment rates, better cash flow and reduced arrears), administrative efficiency (automation reduces manual processing time significantly), risk reduction (early identification of payment challenges allows proactive management), cost savings (electronic payment processing typically costs less than manual alternatives), better financial management (real-time data and insights enable better decision-making). Expected outcomes: ROI - Clients typically achieve ROI exceeding 50% through combined benefits; Payback period - Most institutions see positive returns within their first year of operation; Sustained value - Benefits compound over time as processes optimize and data insights improve. Results vary based on current collection rates and operational efficiency, institution size and payment volumes, implementation quality and user adoption, existing cost structure and processes, payment method distribution. For your specific ROI projection: Contact our team at sales@knit.cash with your institution's details for a customized analysis."
                }
            ]
        },
        {
            category: "Additional Questions",
            questions: [
                {
                    question: "Can parents/members access their accounts online?",
                    answer: "Yes, dedicated parent/member portal included. Features: View account balance and transaction history, download statements and receipts, update contact information, make ad-hoc payments (instant EFT or card), set up or modify debit order mandate, download tax certificates, submit exemption applications (schools), communicate with bursar/admin. Mobile-optimized: Responsive design for smartphones, no app download required, works on any device, WhatsApp notifications with portal links. Security: Unique login credentials, password reset via email/SMS, multi-factor authentication option, session timeout for security. Self-service reduces admin burden: Parents update their own details (reduces data entry), instant payment confirmation (reduces enquiries), 24/7 access (reduces phone calls), transparency builds trust."
                },
                {
                    question: "Does Knit work for multi-campus institutions?",
                    answer: "Yes, multi-location support built-in. Features: Single login for all campuses, campus-specific configuration (fee schedules, payment dates), consolidated or campus-level reporting, centralized vs. distributed collections, shared parent records across campuses (siblings). Reporting options: Group-level dashboard, campus-level detail, consolidated financial reports, cross-campus analytics. Billing: Volume discounts for multiple locations, single invoice or campus-by-campus (your choice), shared user licenses across campuses. Ideal for: School groups with multiple branches and franchise operations."
                },
                {
                    question: "Can Knit handle international payments?",
                    answer: "Current capability: South Africa only - Payments in ZAR, South African bank accounts, SA-based credit bureaus, PASA-regulated debit orders. International parents: Can use international credit/debit cards (via card processor), cannot use debit orders from foreign banks, manual EFT from foreign banks (standard bank transfer, your risk). Future roadmap: Pan-African expansion planned (2026-2027), target markets Kenya/Nigeria/Ghana, cross-border payment corridors, multi-currency support. Current workaround: International parents use credit card or manual EFT, higher transaction fees (card fees apply), less automation than debit orders."
                },
                {
                    question: "What languages does Knit support?",
                    answer: "Current: English only - Platform interface in English, communications (emails, SMS, WhatsApp) in English, support available in English. Planned: Afrikaans and isiZulu (2026) - Interface translation, multi-language communications, language preference selection. Workaround: Schools can customize email/SMS templates, translate communications manually, parent portal supports browser translation extensions."
                },
                {
                    question: "How does Knit help with financial planning and forecasting?",
                    answer: "Forecasting tools: Cash flow projection (expected collections by payment date, historical success rate analysis, seasonal patterns identified, 30-day rolling forecast, 90-day forward projection). Scenario modeling: 'What if' collection rate analysis, fee increase impact modeling, new student enrollment projections, payment plan adoption scenarios. Budget vs. actual: Track budgeted revenue vs. collections, variance analysis and alerts, course corrections recommended. Predictive analytics: At-risk parent identification (likely to default), enrollment trends, revenue forecasting. Reports for CFO/Board: Executive dashboard, financial performance summary, KPI tracking (collection rate, DSO, bad debt %), industry benchmarking."
                },
                {
                    question: "Does Knit offer financial literacy resources for parents/members?",
                    answer: "Educational content (planned for 2026): Budgeting guides, credit score education, debt management tips, savings strategies, school fee planning tools. Current: Transparent communication about credit checks, clear explanation of payment plan options, proactive notifications before payment due, encouragement messages for on-time payments. Partnership opportunities: Financial literacy workshops at schools, partnerships with financial wellness providers, guest speakers on financial planning. Impact: Better-informed parents make better financial decisions, improved payment behavior through education, reduced defaults through proactive management, community empowerment."
                }
            ]
        },
        {
            category: "Contact & Next Steps",
            questions: [
                {
                    question: "How can I contact Knit for more information?",
                    answer: "Sales enquiries: Email sales@knit.cash, website www.knit.cash, request demo at www.knit.cash/demo. Support for existing clients: Email support@knit.cash, in-platform chat, knowledge base at help.knit.cash. General enquiries: Email info@knit.cash, LinkedIn [to be provided], physical address: Luddites Group (Pty) Ltd, Rosebank, Johannesburg. Response times: Sales enquiries 24 hours, demo requests scheduled within 48 hours, general enquiries 48 hours, support tickets per SLA (2-8 hours based on priority)."
                },
                {
                    question: "Where can I see Knit in action?",
                    answer: "Demo options: (1) Live demo (recommended) - 30-minute video call tailored to your specific workflows, Q&A with product expert, schedule at sales@knit.cash. (2) Self-guided demo - Interactive product tour on website, video walkthroughs of key features, sample reports and dashboards, available 24/7 at www.knit.cash/tour. (3) Customer testimonials - Video case studies, written success stories, reference calls available (with customer permission). (4) Site visit - Visit existing Knit customer, see platform in daily use, speak with administrators using Knit, arranged through sales team."
                },
                {
                    question: "What are the next steps after this FAQ?",
                    answer: "Recommended path forward: If interested in learning more - Schedule a demo (sales@knit.cash), review our pricing page (www.knit.cash/pricing), read customer case studies (www.knit.cash/customers), download product brochure (www.knit.cash/resources). If ready to move forward - Request formal proposal (sales@knit.cash), schedule stakeholder demos (principal, bursar, IT), review contract terms, discuss implementation timeline, sign contract and begin onboarding. If evaluating options - Add Knit to your vendor comparison spreadsheet, request references from similar institutions, trial sandbox environment, attend quarterly product webinar, join customer advisory board (invitation required). If not ready yet - Subscribe to newsletter for updates (www.knit.cash/subscribe), follow us on LinkedIn for industry insights, bookmark this FAQ for future reference, revisit when procurement cycle begins."
                }
            ]
        }
    ];

    const filteredFAQs = faqData.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-surface-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-surface-200/40 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
                                <HelpCircle size={14} />
                                <span>Support & Resources</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight mb-6">
                                Frequently Asked Questions
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                                Everything you need to know about the Knit platform, features, pricing, and capabilities.
                            </p>
                            <div className="relative max-w-lg">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-3 border border-surface-200 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm shadow-sm transition-all"
                                    placeholder="Search for answers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Jump to Category */}
            <section className="py-12 bg-white border-b border-surface-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Jump to Category</h2>
                            <p className="text-slate-500">Quick access to specific topics</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {faqData.map((section, index) => {
                            const categoryId = `faq-${section.category.toLowerCase().replace(/\s+/g, '-')}`;
                            return (
                                <ScrollReveal key={index} delay={index * 50}>
                                    <button
                                        onClick={() => scrollToCategory(categoryId)}
                                        className="w-full flex items-center justify-between p-4 rounded-xl border border-surface-200 hover:border-brand-200 hover:shadow-md transition-all duration-200 bg-white group text-left h-full"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2.5 rounded-lg bg-surface-50 group-hover:bg-brand-50 transition-colors">
                                                {getCategoryIcon(section.category)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-700 text-sm group-hover:text-brand-700 transition-colors line-clamp-2">
                                                    {section.category}
                                                </div>
                                                <div className="text-xs text-slate-400 mt-1">
                                                    {section.questions.length} questions
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRight size={16} className="text-slate-300 group-hover:text-brand-500 transition-colors" />
                                    </button>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-20 bg-surface-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredFAQs.length > 0 ? (
                        <div className="space-y-12">
                            {filteredFAQs.map((section, catIndex) => (
                                <div key={catIndex} className="scroll-mt-32" id={`faq-${section.category.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <ScrollReveal delay={catIndex * 100}>
                                        <h2 className="text-2xl font-bold text-brand-950 mb-6 pb-2 border-b border-surface-100">
                                            {section.category}
                                        </h2>
                                        <div className="space-y-4">
                                            {section.questions.map((faq, qIndex) => {
                                                const uniqueIndex = catIndex * 100 + qIndex;
                                                const isOpen = openIndex === uniqueIndex;

                                                return (
                                                    <div
                                                        key={qIndex}
                                                        className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-brand-200 bg-brand-50/30' : 'border-surface-200 bg-white hover:border-brand-100'}`}
                                                    >
                                                        <button
                                                            onClick={() => toggleAccordion(uniqueIndex)}
                                                            className="flex justify-between items-start w-full px-6 py-5 text-left focus:outline-none"
                                                        >
                                                            <span className={`font-semibold text-lg pr-8 ${isOpen ? 'text-brand-800' : 'text-slate-800'}`}>
                                                                {faq.question}
                                                            </span>
                                                            <span className={`p-1 rounded-full transition-transform duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-100 text-brand-600 rotate-180' : 'bg-surface-100 text-slate-500'}`}>
                                                                <ChevronDown size={20} />
                                                            </span>
                                                        </button>
                                                        <div
                                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                                        >
                                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                                                {faq.answer}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">No results found for "{searchQuery}". Try a different summary.</p>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="mt-4 text-brand-600 font-medium hover:underline"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-20 bg-brand-950 text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
                        <p className="text-brand-200 mb-8 max-w-lg mx-auto">
                            Our team is here to help. Reach out to us directly or schedule a demo to see the platform in action.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => window.location.href = 'mailto:support@knit.cash'}
                                className="px-6 py-3 bg-white text-brand-950 font-medium rounded-md hover:bg-brand-50 transition-colors"
                            >
                                Contact Support
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-6 py-3 border border-brand-700 text-white font-medium rounded-md hover:bg-brand-900 transition-colors"
                            >
                                Contact Sales
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQPage;
