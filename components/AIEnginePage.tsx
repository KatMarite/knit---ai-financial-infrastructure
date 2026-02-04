import React, { useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ShieldCheck, Database, BrainCircuit, Users, Lock, FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';



const AIEnginePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-surface-200/40 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
                                <ShieldCheck size={14} />
                                <span>Enterprise-Grade Architecture</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight mb-6">
                                The Knit AI Engine
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Deterministic precision meets probabilistic intelligence. Our AI engine is built for
                                regulatory compliance, providing auditable, explainable, and secure financial automation.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 1: What the AI Does */}
            <section className="py-20 bg-white border-t border-surface-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-brand-950 mb-4">Core Capabilities</h2>
                        <p className="text-slate-600 max-w-2xl">
                            Knit acts as an intelligent layer between your bank accounts and accounting ledger,
                            automating complex reconciliation tasks with human-level accuracy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0} className="h-full">
                            <div className="p-8 bg-surface-50 rounded-lg border border-surface-200 hover:border-brand-200 transition-colors group h-full">
                                <div className="w-12 h-12 bg-white rounded-lg border border-surface-200 flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition-transform duration-300">
                                    <BrainCircuit size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-brand-950 mb-3">Multi-Way Reconciliation</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Automatically matches transactions across banks, payment gateways, and ERPs.
                                    Handles 1-to-1, 1-to-many, and many-to-many matches with &gt;99% accuracy.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={150} className="h-full">
                            <div className="p-8 bg-surface-50 rounded-lg border border-surface-200 hover:border-brand-200 transition-colors group h-full">
                                <div className="w-12 h-12 bg-white rounded-lg border border-surface-200 flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition-transform duration-300">
                                    <AlertTriangle size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-brand-950 mb-3">Anomaly Detection</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Identifies duplicate payments, unexpected fees, and fraudulent patterns in real-time.
                                    Flags irregularities for immediate human review.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300} className="h-full">
                            <div className="p-8 bg-surface-50 rounded-lg border border-surface-200 hover:border-brand-200 transition-colors group h-full">
                                <div className="w-12 h-12 bg-white rounded-lg border border-surface-200 flex items-center justify-center mb-6 text-brand-600 group-hover:scale-110 transition-transform duration-300">
                                    <FileText size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-brand-950 mb-3">Context Extraction</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Reads and understands unstructured data from invoices, emails, and transaction memos
                                    to assign correct GL codes and tax categories.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 2: Data Inputs & Privacy */}
            <section className="py-20 bg-brand-950 text-white relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-700 to-transparent opacity-50"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Data Inputs & Learning Model</h2>
                                <div className="space-y-6">
                                    <p className="text-brand-100/80 leading-relaxed">
                                        The Knit Engine ingests data securely from authorised sources only. We utilize a
                                        federated learning approach where customer data isolates are maintained to ensure privacy
                                        while allowing the global model to learn generic financial patterns.
                                    </p>

                                    <ul className="space-y-4">
                                        {[
                                            "Read-only access to Bank Feeds & Payment Gateways",
                                            "Historical GL transaction data for pattern recognition",
                                            "Invoice and Receipt documents (PDF, IMG, EDI)",
                                            "Vendor master data and Tax rules"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 min-w-[18px] text-brand-400">
                                                    <Database size={18} />
                                                </div>
                                                <span className="text-surface-100">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-8 border-t border-brand-800">
                                        <div className="flex items-center gap-3 text-sm text-brand-300">
                                            <Lock size={16} />
                                            <span>SOC2 Type II Compliant &bull; End-to-End Encryption &bull; GDPR Ready</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-brand-800 to-brand-900 rounded-2xl border border-brand-700/50 p-6 flex flex-col justify-between shadow-2xl">
                                {/* Visual representation of data flow */}
                                <div className="space-y-4 font-mono text-xs relative">
                                    <div className="bg-brand-900/50 p-3 rounded border border-brand-700 text-brand-100 hover:bg-brand-800/50 transition-colors">
                                        <span className="text-brand-500">INPUT:</span> TRANSACTION_ID: tx_98234
                                    </div>
                                    <div className="flex justify-center text-brand-600"><ArrowRight className="rotate-90 py-1 animate-pulse" /></div>
                                    <div className="bg-brand-800/50 p-3 rounded border border-brand-600 text-brand-100 animate-pulse-slow">
                                        <span className="text-brand-400">PROCESS:</span> NLP_CONTEXT_ANALYSIS()
                                    </div>
                                    <div className="flex justify-center text-brand-600"><ArrowRight className="rotate-90 py-1 animate-pulse" style={{ animationDelay: '0.5s' }} /></div>
                                    <div className="bg-brand-800/50 p-3 rounded border border-brand-600 text-brand-100 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                                        <span className="text-brand-400">PROCESS:</span> HISTORICAL_MATCH(prob &gt; 98%)
                                    </div>
                                    <div className="flex justify-center text-brand-600"><ArrowRight className="rotate-90 py-1 animate-pulse" style={{ animationDelay: '1.5s' }} /></div>
                                    <div className="bg-green-900/20 p-3 rounded border border-green-800 text-green-100 animate-slide-up-fade" style={{ animationDelay: '2s' }}>
                                        <span className="text-green-500">OUTPUT:</span> PROPOSE_JOURNAL_ENTRY
                                    </div>
                                </div>
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Decision Logic */}
            <section className="py-20 bg-surface-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-brand-950 mb-4">Explainable Decision Logic</h2>
                            <p className="text-slate-600">
                                Unlike "black box" AI, Knit provides a clear audit trail for every suggestion.
                                Our logic engine prioritizes accuracy and regulatory compliance over speed.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-surface-200 md:left-1/2 md:-ml-px"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <ScrollReveal delay={0}>
                                <div className="relative flex md:justify-end items-center group">
                                    <div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 bg-white border-2 border-brand-600 rounded-full z-10 box-content"></div>
                                    <div className="ml-16 md:ml-0 md:mr-16 md:w-[45%] p-6 bg-white rounded-lg border border-surface-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-1 bg-brand-50 text-brand-700 text-xs font-mono font-medium rounded">LVL 1</span>
                                            <h3 className="font-semibold text-brand-950">Deterministic Rules</h3>
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            The engine first applies strict if/then rules based on exact matches (e.g., Reference ID matches Invoice #).
                                            This ensures 100% accuracy for clear-cut transactions.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Step 2 */}
                            <ScrollReveal delay={150}>
                                <div className="relative flex items-center group">
                                    <div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 bg-white border-2 border-brand-600 rounded-full z-10 box-content"></div>
                                    <div className="ml-16 md:w-[45%] md:ml-[55%] p-6 bg-white rounded-lg border border-surface-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-1 bg-brand-50 text-brand-700 text-xs font-mono font-medium rounded">LVL 2</span>
                                            <h3 className="font-semibold text-brand-950">Probabilistic Matching</h3>
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            If no exact match is found, the AI analyzes fuzzy signals (amounts, dates, vendor names) to calculate a confidence score.
                                            Matches &gt;95% confidence are proposed automatically.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Step 3 */}
                            <ScrollReveal delay={300}>
                                <div className="relative flex md:justify-end items-center group">
                                    <div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 bg-white border-2 border-brand-600 rounded-full z-10 box-content"></div>
                                    <div className="ml-16 md:ml-0 md:mr-16 md:w-[45%] p-6 bg-white rounded-lg border border-surface-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-1 bg-brand-50 text-brand-700 text-xs font-mono font-medium rounded">LVL 3</span>
                                            <h3 className="font-semibold text-brand-950">Anomaly Verification</h3>
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            Before finalizing any proposal, the engine cross-references with historical baselines.
                                            Significant deviations trigger a "Review Required" flag, preventing erroneous automated entries.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Human-in-the-Loop */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 text-brand-600 font-semibold mb-4">
                                        <Users size={20} />
                                        <span>Human-in-the-Loop Control</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-950 mb-6">You Are Always the Pilot.</h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Knit is designed as a co-pilot, not a replacement for financial oversight.
                                        Our "Human-in-the-Loop" architecture ensures that critical decisions always remain in your control.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "AI Proposals require one-click approval (can be batched)",
                                            "Full audit trail of what was AI-suggested vs. Human-edited",
                                            "Confidence thresholds are configurable by your risk team",
                                            "Ability to rollback any automated action instantly"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="bg-brand-900 text-white px-6 py-3 rounded font-medium hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">
                                        Read Our Security Whitepaper
                                    </button>
                                </div>

                                <div className="flex-1 w-full max-w-md">
                                    <div className="bg-white rounded-xl shadow-xl border border-surface-200 overflow-hidden">
                                        <div className="bg-surface-50 px-4 py-3 border-b border-surface-200 flex justify-between items-center">
                                            <span className="text-xs font-mono text-slate-500">APPROVAL_QUEUE.tsx</span>
                                            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
                                                Review Needed
                                            </span>
                                        </div>
                                        <div className="p-4 space-y-4">
                                            <div className="flex items-center gap-4 p-3 bg-brand-50/50 rounded border border-brand-100">
                                                <div className="flex-1">
                                                    <div className="text-xs text-slate-500 mb-1">Transaction</div>
                                                    <div className="font-medium text-slate-900">R 4,250.00 &bull; AWS Web Svcs</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs text-slate-500 mb-1">AI Suggestion</div>
                                                    <div className="font-mono text-xs text-brand-700 bg-brand-100 px-2 py-1 rounded">
                                                        GL: 6040 (Software)
                                                        <br />
                                                        Conf: 88%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="flex-1 bg-white border border-surface-300 text-slate-600 py-2 rounded text-sm font-medium hover:bg-surface-50">
                                                    Edit
                                                </button>
                                                <button className="flex-1 bg-brand-600 text-white py-2 rounded text-sm font-medium hover:bg-brand-700">
                                                    Approve
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
            <style>{`
            @keyframes pulse-slow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            @keyframes slide-up-fade {
                 from { opacity: 0; transform: translateY(10px); }
                 to { opacity: 1; transform: translateY(0); }
            }
            .animate-pulse-slow {
                animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            .animate-slide-up-fade {
                animation: slide-up-fade 0.5s ease-out forwards;
            }
            `}</style>
        </div>
    );
};

export default AIEnginePage;
