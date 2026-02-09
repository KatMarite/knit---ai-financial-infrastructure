import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { Shield, Lock, FileText, Eye, Server, RefreshCw } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
                                <Shield size={14} />
                                <span>Legal & Compliance</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-950 tracking-tight mb-6">
                                Privacy Policy
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed mb-4">
                                Typical POPIA and GDPR compliant privacy practices for our financial infrastructure platform.
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
                            <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-lg mb-12">
                                <h3 className="text-brand-900 font-bold text-lg mb-2 mt-0">Commitment to Data Privacy</h3>
                                <p className="text-brand-800 m-0 text-base">
                                    At Knit, we take the protection of personal information seriously. As a financial infrastructure provider, we adhere to the Protection of Personal Information Act (POPIA) and other relevant data protection regulations to ensure your data is secure, confidential, and processed lawfully.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <div className="space-y-12">
                                {/* Section 1 */}
                                <div id="introduction">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <FileText className="text-brand-600" size={28} />
                                        1. Introduction
                                    </h2>
                                    <p className="text-slate-600">
                                        This Privacy Policy explains how Knit ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our embedded finance platform, website, and related services (collectively, the "Service").
                                    </p>
                                    <p className="text-slate-600 mt-4">
                                        By accessing or using the Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div id="information-collection">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <Eye className="text-brand-600" size={28} />
                                        2. Information We Collect
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        We collect information that you provide directly to us, as well as information automatically collected when you use our Service.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>
                                            <strong className="text-slate-800">Account Information:</strong> Name, email address, phone number, institution details, and login credentials.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Financial Information:</strong> Bank account details, transaction history, payment records, and fee structures necessary for processing payments.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Identify Verification Data:</strong> Government-issued ID numbers and other details required for regulatory compliance (FICA/KYC).
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Usage Data:</strong> Information about how you access and use the Service, including IP address, browser type, and device information.
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div id="information-use">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <RefreshCw className="text-brand-600" size={28} />
                                        3. How We Use Your Information
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        We use the collected information for specific business purposes, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>Providing, operating, and maintaining our Service.</li>
                                        <li>Processing transactions and managing payment flows.</li>
                                        <li>Conducting credit screenings and affordability assessments (with consent).</li>
                                        <li> improving, personalizing, and expanding our Service.</li>
                                        <li>Preventing fraud and ensuring the security of our platform.</li>
                                        <li>Complying with legal obligations, including NCR and POPIA requirements.</li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div id="data-security">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <Lock className="text-brand-600" size={28} />
                                        4. Data Security
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        We implement robust security measures to protect your personal information:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>
                                            <strong className="text-slate-800">Encryption:</strong> We use AES-256 encryption for data at rest and TLS 1.3 for data in transit.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Access Control:</strong> Strict role-based access controls ensuring only authorized personnel can access sensitive data.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Regular Audits:</strong> Conducting regular security audits and penetration testing.
                                        </li>
                                        <li>
                                            <strong className="text-slate-800">Data Segregation:</strong> Client trust funds are held in segregated accounts.
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 5 */}
                                <div id="data-retention">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <Server className="text-brand-600" size={28} />
                                        5. Data Retention
                                    </h2>
                                    <p className="text-slate-600">
                                        We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div id="your-rights">
                                    <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                        <Shield className="text-brand-600" size={28} />
                                        6. Your Data Rights
                                    </h2>
                                    <p className="text-slate-600 mb-4">
                                        Under POPIA and other applicable laws, you have specific rights regarding your personal data:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                        <li>The right to access the personal information we hold about you.</li>
                                        <li>The right to request correction or deletion of your personal data.</li>
                                        <li>The right to object to the processing of your personal data.</li>
                                        <li>The right to lodge a complaint with the Information Regulator.</li>
                                    </ul>
                                </div>

                                {/* Contact Section */}
                                <div className="mt-16 bg-surface-50 p-8 rounded-2xl border border-surface-200">
                                    <h3 className="text-xl font-bold text-brand-950 mb-4">Contact Our Privacy Officer</h3>
                                    <p className="text-slate-600 mb-6">
                                        If you have any questions about this Privacy Policy or our data practices, please contact us.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="mailto:privacy@knit.cash" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors">
                                            Email Privacy Team
                                        </a>
                                        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-brand-200 text-base font-medium rounded-md text-brand-700 bg-white hover:bg-surface-50 transition-colors">
                                            General Contact
                                        </a>
                                    </div>
                                    <div className="mt-6 text-sm text-slate-500">
                                        <p>Luddites Group (Pty) Ltd</p>
                                        <p>Rosebank, Johannesburg, South Africa</p>
                                    </div>
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

export default PrivacyPolicyPage;
