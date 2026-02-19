import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { FileX, AlertCircle, RefreshCcw, Mail, Calendar, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CancellationPolicyPage: React.FC = () => {
    const lastUpdated = "February 19, 2026";

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
                                <FileX size={14} />
                                <span>Legal & Compliance</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-950 tracking-tight mb-6">
                                Cancellation Policy
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed mb-4">
                                Transparent guidelines for subscription cancellations and refunds.
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
                                {/* Section 1: Overview */}
                                <div id="overview">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <AlertCircle className="text-brand-600" size={28} />
                                        1. Overview
                                    </h2>
                                    <p className="text-slate-600">
                                        At Knit, we believe in flexibility and transparency. You have the right to cancel your subscription at any time. This policy outlines the procedures for cancellation, the effective dates, and our refund terms to ensure you know exactly what to expect.
                                    </p>
                                </div>

                                {/* Section 2: How to Cancel */}
                                <div id="how-to-cancel">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <Mail className="text-brand-600" size={28} />
                                        2. How to Cancel
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        To cancel your subscription, please follow one of the methods below:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>
                                            <strong className="text-slate-800">Email Request:</strong> Send an email to <a href="mailto:support@knit.cash" className="text-brand-600 hover:text-brand-700 underline">support@knit.cash</a> with the subject line "Cancellation Request". Please include your account name and registered email address.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Account Dashboard:</strong> Log in to your Knit dashboard, navigate to <em>Settings {'>'} Billing</em>, and select "Cancel Subscription".
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Phone Support:</strong> Contact your dedicated account manager or our support line at +27 10 141 2770.
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 3: Notice Period & Effective Date */}
                                <div id="notice-period">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <Calendar className="text-brand-600" size={28} />
                                        3. Notice Period & Effective Date
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        <strong className="text-slate-800">Monthly Subscriptions:</strong> Cancellations will take effect at the end of your current billing cycle. You will continue to have access to the platform until the last day of the period for which you have paid.
                                    </p>
                                    <p className="text-slate-600">
                                        <strong className="text-slate-800">Annual Subscriptions:</strong> Cancellations made during an annual term will take effect at the end of the current annual billing cycle. We do not prorate annual subscriptions for early cancellation unless explicitly agreed upon in a separate service level agreement (SLA).
                                    </p>
                                </div>

                                {/* Section 4: Refunds */}
                                <div id="refunds">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <RefreshCcw className="text-brand-600" size={28} />
                                        4. Refund Policy
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        Generally, payments for subscriptions are non-refundable. However, exceptions may be made under the following circumstances:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>
                                            <strong className="text-slate-800">Billing Errors:</strong> If you believe you were charged in error, please contact us within 30 days of the charge for a full investigation and potential refund.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Service Failure:</strong> If the platform was unavailable for a significant period exceeding our SLA guarantees, you may be eligible for a pro-rated credit or refund.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Cooling-off Period:</strong> New customers on the <strong>Growth</strong> or <strong>Enterprise</strong> plans may be eligible for a full refund if they cancel within 7 days of their initial purchase, provided no significant usage volume has been incurred.
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 5: Data Retention */}
                                <div id="data-retention">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <HelpCircle className="text-brand-600" size={28} />
                                        5. Data Retention After Cancellation
                                    </h2>
                                    <p className="text-slate-600">
                                        Upon cancellation, your account will be deactivated at the end of your billing cycle. We will retain your financial data for a period of 90 days to allow for easy reactivation or data export. After this period, your data may be permanently deleted from our active servers in accordance with our <Link to="/privacy" className="text-brand-600 hover:text-brand-700 underline">Privacy Policy</Link>, though some records may be kept for legal and accounting compliance.
                                    </p>
                                </div>

                                {/* Contact Section */}
                                <div className="mt-16 bg-surface-50 p-8 rounded-2xl border border-surface-200">
                                    <h3 className="text-xl font-bold text-brand-950 mb-4">Need Help Cancelling?</h3>
                                    <p className="text-slate-600 mb-6">
                                        If you're having trouble cancelling or have questions about your billing, our support team is here to assist you.
                                    </p>
                                    <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                                        Contact Billing Support
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

export default CancellationPolicyPage;
