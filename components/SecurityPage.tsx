import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { Shield, Lock, Server, Cloud, RefreshCw, AlertTriangle, CheckCircle, FileCheck } from 'lucide-react';

const SecurityPage: React.FC = () => {
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
                                <span>Security & Trust</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-5xl font-bold text-brand-950 tracking-tight mb-6">
                                Security at Knit
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed mb-4">
                                Our commitment to protecting your data, infrastructure, and financial transactions.
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="prose prose-slate prose-lg max-w-none">
                                <ScrollReveal delay={300}>
                                    <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-lg mb-12">
                                        <h3 className="text-brand-900 font-bold text-lg mb-2 mt-0">Bank-Grade Security</h3>
                                        <p className="text-brand-800 m-0 text-base">
                                            As a financial infrastructure platform, security is not just a feature—it's our foundation. We employ defense-in-depth strategies to ensure the confidentiality, integrity, and availability of your data.
                                        </p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={400}>
                                    <div className="space-y-12">
                                        {/* Infrastructure */}
                                        <div id="infrastructure">
                                            <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                                <Cloud className="text-brand-600" size={28} />
                                                Cloud Infrastructure
                                            </h2>
                                            <p className="text-slate-600">
                                                Knit is hosted on top-tier cloud providers (AWS and Azure) within South Africa to ensure data sovereignty and low latency.
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                                <li><strong>Data Centers:</strong> Hosted in SOC 2 Type II compliant data centers.</li>
                                                <li><strong>Network Security:</strong> Virtual Private Cloud (VPC) isolation, Web Application Firewalls (WAF), and DDoS protection.</li>
                                                <li><strong>Redundancy:</strong> High-availability architecture with automatic failover and daily encrypted backups.</li>
                                            </ul>
                                        </div>

                                        {/* Data Protection */}
                                        <div id="data-protection">
                                            <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                                <Lock className="text-brand-600" size={28} />
                                                Data Protection
                                            </h2>
                                            <p className="text-slate-600">
                                                We protect your data throughout its lifecycle using industry-standard encryption protocols.
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                                <li><strong>Encryption at Rest:</strong> All databases and backups are encrypted using AES-256.</li>
                                                <li><strong>Encryption in Transit:</strong> All network traffic is encrypted via TLS 1.3.</li>
                                                <li><strong>Secrets Management:</strong> API keys, passwords, and certificates are managed via dedicated secrets management services, never stored in code.</li>
                                            </ul>
                                        </div>

                                        {/* Application Security */}
                                        <div id="application-security">
                                            <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                                <Shield className="text-brand-600" size={28} />
                                                Application Security
                                            </h2>
                                            <p className="text-slate-600">
                                                Our application is built with security in mind from the ground up.
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                                <li><strong>Authentication:</strong> Robust authentication via OAuth 2.0 and OpenID Connect.</li>
                                                <li><strong>Access Control:</strong> Strict Role-Based Access Control (RBAC) to ensure users only access what they need.</li>
                                                <li><strong>Vulnerability Scanning:</strong> Continuous automated scanning of dependencies and code for vulnerabilities.</li>
                                                <li><strong>Penetration Testing:</strong> Annual third-party penetration tests.</li>
                                            </ul>
                                        </div>

                                        {/* Operational Security */}
                                        <div id="operational-security">
                                            <h2 className="flex items-center gap-3 text-2xl font-bold text-brand-950 mb-4">
                                                <Server className="text-brand-600" size={28} />
                                                Operational Security
                                            </h2>
                                            <p className="text-slate-600">
                                                Our internal processes are designed to minimize risk.
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                                <li><strong>Device Security:</strong> All employee devices are centrally managed and encrypted.</li>
                                                <li><strong>Least Privilege:</strong> Employees are granted the minimum access necessary to perform their roles.</li>
                                                <li><strong>Background Checks:</strong> All employees undergo detailed background checks.</li>
                                                <li><strong>Training:</strong> Regular security awareness training for all staff.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* Certifications */}
                                <div className="bg-surface-50 p-6 rounded-xl border border-surface-200">
                                    <h3 className="font-bold text-brand-950 mb-4 flex items-center gap-2">
                                        <FileCheck size={20} className="text-brand-600" />
                                        Compliance
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-emerald-500 mt-0.5" size={18} />
                                            <span className="text-sm text-slate-600">POPIA Compliant</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-emerald-500 mt-0.5" size={18} />
                                            <span className="text-sm text-slate-600">NCR Registered</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-emerald-500 mt-0.5" size={18} />
                                            <span className="text-sm text-slate-600">PASA Integration Standards</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-emerald-500 mt-0.5" size={18} />
                                            <span className="text-sm text-slate-600">SSL/TLS Encryption</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Report Issue */}
                                <div className="bg-brand-950 p-6 rounded-xl text-white">
                                    <h3 className="font-bold mb-4 flex items-center gap-2">
                                        <AlertTriangle size={20} className="text-brand-400" />
                                        Report a Vulnerability
                                    </h3>
                                    <p className="text-sm text-brand-200 mb-6 leading-relaxed">
                                        We value the security community. If you believe you've found a vulnerability, please report it to us responsibly.
                                    </p>
                                    <a href="mailto:security@knit.cash" className="block w-full text-center py-2.5 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm font-medium transition-colors">
                                        security@knit.cash
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SecurityPage;
