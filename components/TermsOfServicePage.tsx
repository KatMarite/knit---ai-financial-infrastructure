import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { FileText, CheckCircle, AlertTriangle, Scale, CreditCard, ShieldAlert, UserCheck } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
    const lastUpdated = "February 9, 2026";

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-surface-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-surface-200/40 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
                                <Scale size={14} />
                                <span>Legal & Compliance</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-950 tracking-tight mb-6">
                                Terms of Service
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed mb-4">
                                The rules and regulations for using the Knit financial infrastructure platform.
                            </p>
                            <p className="text-sm text-slate-500">
                                Last Updated: {lastUpdated}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <ScrollReveal delay={300}>
                            <div className="space-y-12">
                                {/* Section 1 */}
                                <div id="acceptance">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <CheckCircle className="text-brand-600" size={28} />
                                        1. Acceptance of Terms
                                    </h2>
                                    <p className="text-slate-600">
                                        By accessing and using the Knit platform ("Service"), available at www.knit.cash and related subdomains, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                                    </p>
                                    <p className="text-slate-600 mt-4">
                                        These Terms of Service ("Terms") apply to all visitors, users, and others who access the Service. If you disagree with any part of the terms, then you may not access the Service.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div id="description">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <FileText className="text-brand-600" size={28} />
                                        2. Description of Service
                                    </h2>
                                    <p className="text-slate-600">
                                        Knit provides embedded financial infrastructure for schools, funeral homes, and other institutions. This includes tools for credit screening, payment processing, automated collections, and customer lifecycle management.
                                    </p>
                                    <p className="text-slate-600 mt-4">
                                        We reserve the right to modify, suspend, or discontinue the Service (or any part or content thereof) at any time with or without notice to you, though we will make reasonable efforts to notify you of significant changes.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div id="accounts">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <UserCheck className="text-brand-600" size={28} />
                                        3. User Accounts
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        To use most features of the Service, you must register for an account. You agree to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>Provide accurate, current, and complete information during the registration process.</li>
                                        <li>Maintain the security of your password and accept all risks of unauthorized access to your account and the information you provide.</li>
                                        <li>Notify us immediately if you discover or otherwise suspect any security breaches related to the Service.</li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div id="payments">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <CreditCard className="text-brand-600" size={28} />
                                        4. Fees and Payments
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        You agree to pay all fees associated with your use of the Service as described on our Pricing page or in your specific service agreement.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>
                                            <strong className="text-slate-800">Subscription Fees:</strong> Billed in advance on a recurring basis (monthly, quarterly, or annually).
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Transaction Fees:</strong> Deducted automatically from successful collections where applicable.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Refunds:</strong> Subscription fees are non-refundable except as required by law or as explicitly stated in our Cancellation Policy.
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 5 */}
                                <div id="liability">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <AlertTriangle className="text-brand-600" size={28} />
                                        5. Limitation of Liability
                                    </h2>
                                    <p className="text-slate-600">
                                        In no event shall Knit, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                        <li>Your access to or use of or inability to access or use the Service;</li>
                                        <li>Any conduct or content of any third party on the Service;</li>
                                        <li>Any content obtained from the Service; and</li>
                                        <li>Unauthorized access, use or alteration of your transmissions or content.</li>
                                    </ul>
                                </div>

                                {/* Section 6 */}
                                <div id="termination">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <ShieldAlert className="text-brand-600" size={28} />
                                        6. Termination
                                    </h2>
                                    <p className="text-slate-600">
                                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                                    </p>
                                    <p className="text-slate-600 mt-4">
                                        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                                    </p>
                                </div>

                                {/* Contact Section */}
                                <div className="mt-16 bg-surface-50 p-8 rounded-2xl border border-surface-200">
                                    <h3 className="text-xl font-bold text-brand-950 mb-4">Contact Us</h3>
                                    <p className="text-slate-600 mb-6">
                                        If you have any questions about these Terms, please contact us.
                                    </p>
                                    <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                                        Contact Support
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
