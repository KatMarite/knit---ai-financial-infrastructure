import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, TrendingUp, Users, Lock, Zap, ArrowRight, BarChart3, BookOpen, Landmark, ChevronRight, Check, Server, GitMerge, Database, FileText } from 'lucide-react';
import Navigation from './Navigation';
import RiskSimulator from './RiskSimulator';
import DesignSystem from './DesignSystem';
import KnitWorkflowDemo from './KnitWorkflowDemo';

// --- Animation Components ---

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const CountUp = ({ end, duration = 2000, prefix = '' }: { end: number, duration?: number, prefix?: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const startTimeRef = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            countRef.current = Math.floor(ease * end);
            setCount(countRef.current);

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}</span>;
};

// --- Main App ---

// Mock Data for Charts
const data = [
    { month: 'JAN', traditional: 4000, knit: 4200 },
    { month: 'FEB', traditional: 3000, knit: 4800 },
    { month: 'MAR', traditional: 2000, knit: 5100 },
    { month: 'APR', traditional: 2780, knit: 5900 },
    { month: 'MAY', traditional: 1890, knit: 6500 },
    { month: 'JUN', traditional: 2390, knit: 7200 },
];

const LandingPage: React.FC = () => {
    const [showDesignSystem, setShowDesignSystem] = useState(false);

    return (
        <div id="top" className="min-h-screen bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900 font-sans overflow-x-hidden">
            {showDesignSystem && <DesignSystem onClose={() => setShowDesignSystem(false)} />}

            <div className={showDesignSystem ? "print:hidden" : ""}>
                <Navigation />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white grid-bg border-b border-surface-200">
                    {/* Animated Background Blobs */}
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                            <div className="max-w-2xl">
                                <Reveal>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-50 border border-surface-200 text-slate-600 text-[10px] font-mono uppercase tracking-widest mb-8 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                                        <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-pulse"></span>
                                        Predictive Revenue Infrastructure
                                    </div>
                                </Reveal>
                                <Reveal delay={100}>
                                    <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight text-brand-950 mb-8 leading-[1.05]">
                                        Describe your operation.<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Deploy your stack.</span>
                                    </h1>
                                </Reveal>
                                <Reveal delay={200}>
                                    <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
                                        Use our AI to build workflows that automate how you manage customers, secure payments and optimise cashflows - starting with schools
                                    </p>
                                </Reveal>

                                <Reveal delay={300}>
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
                                        >
                                            Start Integration <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                        <button className="px-8 py-4 bg-white text-brand-950 border border-surface-300 rounded-sm text-sm font-medium hover:bg-surface-50 transition-all font-mono hover:border-surface-400">
                                            Documentation
                                        </button>
                                    </div>
                                </Reveal>

                                <Reveal delay={400}>
                                    <div className="mt-12 flex items-center gap-8 text-slate-400">
                                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider hover:text-brand-600 transition-colors cursor-help" title="Service Organization Control 2">
                                            <Shield size={14} /> SOC2 Type II
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider hover:text-brand-600 transition-colors cursor-help" title="Bank-grade encryption">
                                            <Lock size={14} /> 256-bit Encryption
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Hero Visual - Dashboard Abstract */}
                            <div className="relative perspective-1000">
                                <div className="bg-white rounded border border-surface-200 shadow-2xl shadow-slate-200/50 p-1 relative z-10 animate-float">
                                    <div className="bg-surface-50 border border-surface-100 rounded-sm overflow-hidden h-[450px] flex flex-col">
                                        {/* Fake Browser Header */}
                                        <div className="bg-white border-b border-surface-200 px-4 py-3 flex items-center justify-between shrink-0">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/30"></div>
                                            </div>
                                            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 bg-surface-50 px-2 py-0.5 rounded border border-surface-100">
                                                <Lock size={8} /> overview.knit.fi
                                            </div>
                                            <div className="w-4"></div>
                                        </div>

                                        {/* Demo Video Area */}
                                        {/* Demo Area */}
                                        <div className="flex-1 relative bg-surface-50 overflow-hidden">
                                            <KnitWorkflowDemo compact headless />
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative elements behind chart */}
                                <div className="absolute -top-3 -right-3 w-full h-full border border-dashed border-surface-300 rounded -z-10 opacity-50"></div>
                                <div className="absolute -bottom-3 -left-3 w-full h-full border border-dashed border-surface-300 rounded -z-10 opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section id="trust" className="py-20 bg-white border-t border-surface-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Reveal>
                            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-12">Trusted by modern financial teams</h2>

                            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                                <img src="/argility-logo.png" alt="Argility Technology Group" className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                <img src="/southdowns-logo.jpg" alt="Southdowns College" className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                                <img src="/links-college-logo.jpg" alt="Links Combined College" className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                            </div>
                        </Reveal>
                    </div>
                </section>



                {/* AI Engine Section */}
                <section id="ai-engine" className="py-24 bg-brand-950 text-white relative overflow-hidden border-t border-brand-900">
                    {/* Subtle grid on dark bg */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-5 pt-8">
                                <Reveal>
                                    <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-[10px] uppercase tracking-widest mb-6 border border-brand-800 px-3 py-1 rounded-full bg-brand-900/50 backdrop-blur-sm">
                                        <Zap size={12} /> Neural Risk Engine
                                    </div>
                                    <h2 className="text-4xl font-semibold tracking-tight mb-6">
                                        Immunize your balance sheet.
                                    </h2>
                                    <p className="text-slate-400 mb-10 leading-relaxed text-lg font-light">
                                        Knit doesn't just collect; it predicts. By analyzing thousands of behavioral data points, our models detect friction before a payment is missed.
                                    </p>
                                </Reveal>

                                <div className="space-y-6 border-t border-brand-800 pt-8">
                                    {[
                                        {
                                            title: 'The Architect: "Infrastructure That Builds Itself"',
                                            desc: 'A zero-code configuration engine that treats your business logic as a blueprint. Whether you are a landlord in Maboneng or a microlender in Khayelitsha, the Architect provisions your dedicated database, API handshakes, and regulatory guardrails instantly.',
                                            highlight: 'The Feature: "Zero-Touch Onboarding" — From "Intent" to "Live Infrastructure" via a simple 5-minute discovery script.'
                                        },
                                        {
                                            title: 'The Admissions Agent: "The Gatekeeper"',
                                            desc: 'An AI-driven screening layer that integrates directly with TPN and Experian. It performs real-time bank scrapes and affordability checks to ensure every new "Unit" is a safe bet.',
                                            highlight: 'The Value: "Say Yes with Certainty" — Automate NCR-compliant affordability checks and fraud detection so you never take on bad debt again.'
                                        },
                                        {
                                            title: 'The Payments Pipe: "The Frictionless Pipe"',
                                            desc: 'A smart payment orchestrator that mixes Instant EFT, Debit Orders, and retail cash payments. By offering the right payment method at the right time, Knit reduces payment friction by 22%.',
                                            highlight: 'The Value: "Automate the Installment DNA" — Deep integrations with Netcash and Ozow ensure your money moves securely and predictably every month.'
                                        },
                                        {
                                            title: 'The Collections Agent: "The Watchdog"',
                                            desc: 'Deploy specialized AI personas—from the "Empathetic Assistant" to the "Formal Officer"—to handle arrears via WhatsApp, SMS, and voice. It negotiates payment plans and triggers legal notices (like Section 32) without human intervention.',
                                            highlight: 'The Value: "Recover Revenue, Retain Relationships" — Reduce delinquency by 15-20% through proactive, predictive negotiation'
                                        }
                                    ].map((item, idx) => (
                                        <Reveal key={idx} delay={idx * 150}>
                                            <div className="flex gap-4 group cursor-default">
                                                <div className="w-5 h-5 rounded-sm border border-brand-700 bg-brand-900 flex items-center justify-center shrink-0 mt-0.5 text-brand-400 group-hover:bg-brand-800 transition-colors group-hover:scale-110 duration-300">
                                                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full group-hover:animate-pulse"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white text-sm group-hover:text-brand-200 transition-colors">{item.title}</h4>
                                                    <p className="text-slate-500 text-xs mt-1 leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
                                                    <p className="text-brand-400 text-xs mt-2 font-medium italic border-l-2 border-brand-800 pl-2">{item.highlight}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>

                            {/* Interactive Demo Component */}
                            <div className="lg:col-span-7">
                                <Reveal delay={300}>
                                    <div className="relative group perspective-1000">
                                        {/* Glow effect behind simulator */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-1000"></div>
                                        <RiskSimulator />
                                        <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-wider opacity-60">
                                            <span className="flex items-center gap-2"><Server size={10} /> Live Inference</span>
                                            <span>Gemini 1.5 Flash</span>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workflow Logic Section - 3 Buckets */}
                <section className="py-24 bg-surface-50 border-b border-surface-200 overflow-hidden relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Reveal>
                            <div className="text-center mb-20 max-w-3xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-surface-200 text-brand-600 text-[10px] font-mono uppercase tracking-widest mb-6 rounded-full shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-pulse"></span>
                                    Knit Architect OS
                                </div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 mb-4 tracking-tight">Seamless Infrastructure Integration</h2>
                                <p className="text-slate-600 text-lg font-light">
                                    Our API-first architecture sits between your systems and your customers, acting as an intelligent firewall against revenue loss.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                            {/* Bucket 1: Workflows (Logic) */}
                            <Reveal delay={100} className="h-full">
                                <div className="bg-white rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-all duration-300 p-1 h-full flex flex-col group">
                                    <style>{`
                    @keyframes slideUpFade {
                      from { opacity: 0; transform: translateY(10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes growLine {
                      from { height: 0; opacity: 0; }
                      to { height: 100%; opacity: 1; }
                    }
                  `}</style>
                                    <div className="bg-surface-50/50 rounded-lg p-6 border-b border-surface-100 flex-1 relative overflow-hidden">
                                        {/* Visual: Process Steps */}
                                        <div className="space-y-0 relative z-10">

                                            {/* Step 1 */}
                                            <div className="flex items-center gap-3 p-3 bg-white border border-surface-200 rounded-lg shadow-sm opacity-0" style={{ animation: 'slideUpFade 0.5s ease-out forwards 0.2s' }}>
                                                <div className="w-8 h-8 rounded bg-brand-50 flex items-center justify-center text-brand-600">
                                                    <FileText size={16} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-semibold text-brand-950">Draft Lease Agreement</div>
                                                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">Template: v2024.1</div>
                                                </div>
                                                <div className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">DONE</div>
                                            </div>

                                            {/* Line 1 */}
                                            <div className="flex items-center justify-center h-4 opacity-0" style={{ animation: 'growLine 0.3s ease-out forwards 0.6s' }}>
                                                <div className="w-px h-full bg-surface-300"></div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex items-center gap-3 p-3 bg-white border border-surface-200 rounded-lg shadow-sm opacity-0" style={{ animation: 'slideUpFade 0.5s ease-out forwards 0.8s' }}>
                                                <div className="w-8 h-8 rounded bg-brand-50 flex items-center justify-center text-brand-600">
                                                    <Users size={16} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-semibold text-brand-950">Tenant KYC Check</div>
                                                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">Integration: TPN</div>
                                                </div>
                                                <div className="text-[10px] font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded animate-pulse">Running</div>
                                            </div>

                                            {/* Line 2 */}
                                            <div className="flex items-center justify-center h-4 opacity-0" style={{ animation: 'growLine 0.3s ease-out forwards 1.2s' }}>
                                                <div className="w-px h-full bg-surface-300 border-l border-dashed border-slate-300"></div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex items-center gap-3 p-3 bg-white/50 border border-surface-100 border-dashed rounded-lg opacity-0" style={{ animation: 'slideUpFade 0.5s ease-out forwards 1.4s' }}>
                                                <div className="w-8 h-8 rounded bg-surface-100 flex items-center justify-center text-slate-400">
                                                    <Landmark size={16} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-medium text-slate-500">Collect Deposit</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                            <GitMerge size={20} className="text-brand-600" />
                                            Workflows
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            Drag-and-drop logic for financial operations. Automate rent collection, lease renewals, and reconciliation without writing code.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                                                <Check size={12} className="text-brand-500" /> Event-driven architecture
                                            </li>
                                            <li className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                                                <Check size={12} className="text-brand-500" /> Multi-party approval steps
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Bucket 2: Integrations (Connectors) */}
                            <Reveal delay={200} className="h-full">
                                <div className="bg-white rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-all duration-300 p-1 h-full flex flex-col group relative z-10">
                                    <div className="bg-brand-950 rounded-lg p-6 border-b border-brand-900 flex-1 relative overflow-hidden flex items-center justify-center">
                                        {/* Visual: Integration Logos */}
                                        <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                                            <style>{`
                        @keyframes orbit {
                          from { transform: rotate(0deg); }
                          to { transform: rotate(360deg); }
                        }
                      `}</style>
                                            <div className="absolute inset-0 border border-brand-800 rounded-full opacity-50 animate-[spin_12s_linear_infinite]"></div>
                                            <div className="absolute inset-8 border border-brand-800/50 rounded-full opacity-30 animate-[spin_18s_linear_infinite_reverse]"></div>

                                            {/* Orbiting Elements Container */}
                                            <div className="absolute inset-0" style={{ animation: 'orbit 60s linear infinite' }}>
                                                {/* Connecting Lines */}
                                                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                                    <line x1="50%" y1="50%" x2="50%" y2="8%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                                                    <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                                                    <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                                                    <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                                                </svg>

                                                {/* Satellites - Counter Rotate to stay upright */}
                                                {/* Sage */}
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded-md shadow-sm border border-surface-200" style={{ animation: 'orbit 60s linear infinite reverse' }}>
                                                    <img src="/sage-logo.png" alt="Sage" className="h-4 w-auto object-contain" />
                                                </div>

                                                {/* Xero */}
                                                <div className="absolute bottom-6 left-6 bg-white px-2 py-1.5 rounded-md shadow-sm border border-surface-200" style={{ animation: 'orbit 60s linear infinite reverse' }}>
                                                    <img src="/xero-logo.png" alt="Xero" className="h-4 w-auto object-contain" />
                                                </div>

                                                {/* Paystack */}
                                                <div className="absolute bottom-6 right-6 bg-white px-2 py-1.5 rounded-md shadow-sm border border-surface-200" style={{ animation: 'orbit 60s linear infinite reverse' }}>
                                                    <img src="/paystack-logo.png" alt="Paystack" className="h-4 w-auto object-contain" />
                                                </div>

                                                {/* Trello */}
                                                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white px-2 py-1.5 rounded-md shadow-sm border border-surface-200" style={{ animation: 'orbit 60s linear infinite reverse' }}>
                                                    <img src="/trello-logo.png" alt="Trello" className="h-4 w-auto object-contain" />
                                                </div>
                                            </div>

                                            {/* Center Hub - Static (z-20 on top of orbiting container) */}
                                            <div className="w-14 h-14 bg-white rounded-xl shadow-lg shadow-black/10 flex items-center justify-center relative z-20 overflow-hidden">
                                                <img src="/central-logo.png" alt="Central" className="w-10 h-10 object-contain" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                            <Database size={20} className="text-brand-600" />
                                            Integrations
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            Unified API pipes that connect your existing stack. Sync ledgers, banks, and CRMs in real-time.
                                        </p>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-2 py-1 bg-surface-100 text-slate-600 text-[10px] font-bold uppercase rounded border border-surface-200">Sage</span>
                                            <span className="px-2 py-1 bg-surface-100 text-slate-600 text-[10px] font-bold uppercase rounded border border-surface-200">Xero</span>
                                            <span className="px-2 py-1 bg-surface-100 text-slate-600 text-[10px] font-bold uppercase rounded border border-surface-200">Netcash</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Bucket 3: Security (Guardrails) */}
                            <Reveal delay={300} className="h-full">
                                <div className="bg-white rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-all duration-300 p-1 h-full flex flex-col group">
                                    <div className="bg-surface-50/50 rounded-lg p-6 border-b border-surface-100 flex-1 relative overflow-hidden flex flex-col justify-center">
                                        <style>{`
                      @keyframes slideUpFade {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                    `}</style>
                                        {/* Visual: Security Shield */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-3 bg-white border border-surface-200 rounded-lg shadow-sm border-l-4 border-l-emerald-500 opacity-0" style={{ animation: 'slideUpFade 0.5s ease-out forwards 0.2s' }}>
                                                <div className="flex items-center gap-3">
                                                    <Shield size={16} className="text-emerald-600" />
                                                    <span className="text-xs font-semibold text-brand-950">SOC2 Type II</span>
                                                </div>
                                                <Check size={14} className="text-emerald-500" />
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-white border border-surface-200 rounded-lg shadow-sm border-l-4 border-l-emerald-500 opacity-0" style={{ animation: 'slideUpFade 0.5s ease-out forwards 0.4s' }}>
                                                <div className="flex items-center gap-3">
                                                    <Lock size={16} className="text-emerald-600" />
                                                    <span className="text-xs font-semibold text-brand-950">POPIA Compliant</span>
                                                </div>
                                                <Check size={14} className="text-emerald-500" />
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-white border border-surface-200 rounded-lg shadow-sm border-l-4 border-l-emerald-500 opacity-0" style={{ animation: 'slideUpFade 0.5s ease-out forwards 0.6s' }}>
                                                <div className="flex items-center gap-3">
                                                    <FileText size={16} className="text-emerald-600" />
                                                    <span className="text-xs font-semibold text-brand-950">Audit Trails</span>
                                                </div>
                                                <Check size={14} className="text-emerald-500" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                            <Shield size={20} className="text-brand-600 animate-pulse" />
                                            Security
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            Bank-grade security and automated legal guardrails. Ensure every interaction is compliant with Section 32 and local regulations.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                                                <Check size={12} className="text-brand-500" /> 256-bit Encryption
                                            </li>
                                            <li className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                                                <Check size={12} className="text-brand-500" /> Role-Based Access Control
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>

                        </div>
                    </div>
                </section>


                {/* Financial Operating System Section */}
                <section className="hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Reveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                                <div className="max-w-2xl">
                                    <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 mb-4 tracking-tight">The AI Financial Infrastructure</h2>
                                    <p className="text-slate-600 text-lg font-light">
                                        Consolidate disparate financial workflows into a single, intelligent infrastructure.
                                    </p>
                                </div>
                                <a href="#solutions" className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1 group whitespace-nowrap">
                                    Explore all modules <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-surface-200 rounded-2xl shadow-sm divide-y md:divide-y-0 md:divide-x divide-surface-200 overflow-hidden">
                            {/* Card 1: Identity & Risk */}
                            <Reveal delay={100} className="h-full">
                                <div className="p-8 group hover:bg-surface-50/50 transition-colors h-full">
                                    <div className="w-12 h-12 bg-surface-50 rounded-lg border border-surface-200 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                                        <Users size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-950 mb-3">Identity & Risk</h3>
                                    <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                        Instant KYC, risk assessment, and affordability checks via unified API.
                                    </p>
                                    <div className="flex items-center text-xs font-bold text-brand-600 tracking-wide uppercase group-hover:gap-2 transition-all cursor-pointer">
                                        View Specs <ChevronRight size={12} />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Card 2: Revenue Management */}
                            <Reveal delay={200} className="h-full">
                                <div className="p-8 group hover:bg-surface-50/50 transition-colors h-full">
                                    <div className="w-12 h-12 bg-surface-50 rounded-lg border border-surface-200 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                                        <BarChart3 size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-950 mb-3">Revenue Management</h3>
                                    <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                        Automated billing logic, smart payment routing, and real-time reconciliation.
                                    </p>
                                    <div className="flex items-center text-xs font-bold text-brand-600 tracking-wide uppercase group-hover:gap-2 transition-all cursor-pointer">
                                        View Specs <ChevronRight size={12} />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Card 3: Intelligent Recovery */}
                            <Reveal delay={300} className="h-full">
                                <div className="p-8 group hover:bg-surface-50/50 transition-colors h-full">
                                    <div className="w-12 h-12 bg-surface-50 rounded-lg border border-surface-200 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                                        <TrendingUp size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-950 mb-3">Intelligent Recovery</h3>
                                    <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                        Algorithmic remediation strategies that maximize yield and retention.
                                    </p>
                                    <div className="flex items-center text-xs font-bold text-brand-600 tracking-wide uppercase group-hover:gap-2 transition-all cursor-pointer">
                                        View Specs <ChevronRight size={12} />
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>




                {/* Solutions Section */}
                <section id="solutions" className="hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div className="max-w-2xl">
                                <Reveal>
                                    <h2 className="text-2xl font-semibold text-brand-950 mb-3">Vertical-Specific Solutions</h2>
                                    <p className="text-slate-600 text-sm">Tailored data models and workflows for high-stakes financial environments.</p>
                                </Reveal>
                            </div>
                            <button className="text-brand-600 font-medium text-sm hover:underline flex items-center gap-1">
                                View all industries <ArrowRight size={14} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Reveal delay={100}>
                                <div className="group bg-white border border-surface-200 p-8 rounded-md hover:border-brand-300 transition-all shadow-sm hover:shadow-lg relative overflow-hidden h-full transform hover:-translate-y-1 duration-300">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-500 grayscale group-hover:scale-110 group-hover:rotate-6 origin-top-right">
                                        <BookOpen size={160} />
                                    </div>
                                    <div className="w-10 h-10 bg-surface-50 text-slate-900 border border-surface-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-50 group-hover:border-brand-200 transition-colors">
                                        <BookOpen size={20} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-brand-950 mb-2">Education & Institutions</h3>
                                    <p className="text-slate-600 mb-8 text-sm leading-relaxed max-w-sm">
                                        Secure tuition installment revenue without damaging family relationships. Focus on retention, not just collections.
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> Tuition Assurance</li>
                                        <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> Enrollment Retention</li>
                                    </ul>
                                    <div className="w-full h-px bg-surface-100 mb-6"></div>
                                    <a href="#" className="inline-flex items-center text-brand-900 font-bold text-xs uppercase tracking-wider hover:text-brand-600 transition-colors">Explore Knit Edu &rarr;</a>
                                </div>
                            </Reveal>

                            <Reveal delay={200}>
                                <div className="group bg-white border border-surface-200 p-8 rounded-md hover:border-brand-300 transition-all shadow-sm hover:shadow-lg relative overflow-hidden h-full transform hover:-translate-y-1 duration-300">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-500 grayscale group-hover:scale-110 group-hover:rotate-6 origin-top-right">
                                        <Landmark size={160} />
                                    </div>
                                    <div className="w-10 h-10 bg-surface-50 text-slate-900 border border-surface-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-50 group-hover:border-brand-200 transition-colors">
                                        <Landmark size={20} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-brand-950 mb-2">Lenders & Fintechs</h3>
                                    <p className="text-slate-600 mb-8 text-sm leading-relaxed max-w-sm">
                                        Minimize Non-Performing Loans (NPLs) and cut operational costs with high-precision risk assessment.
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> NPL Reduction</li>
                                        <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> Audit-Proof Compliance</li>
                                    </ul>
                                    <div className="w-full h-px bg-surface-100 mb-6"></div>
                                    <a href="#" className="inline-flex items-center text-brand-900 font-bold text-xs uppercase tracking-wider hover:text-brand-600 transition-colors">Explore Knit Capital &rarr;</a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>



                {/* CTA Footer */}
                <section id="contact" className="bg-surface-50 py-24 border-t border-surface-200">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <Reveal>
                            <h2 className="text-3xl font-semibold text-brand-950 mb-6 tracking-tight">Ready to modernize your financial infrastructure?</h2>
                            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-light">
                                Schedule a technical consultation to see how Knit can integrate with your existing payment stack.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10 hover:shadow-brand-900/20 hover:-translate-y-0.5">
                                    Book a Demo
                                </button>
                                <button className="px-8 py-4 bg-white text-brand-900 border border-surface-300 rounded-sm text-sm font-medium hover:bg-white hover:border-surface-400 transition-all hover:-translate-y-0.5">
                                    Contact Sales
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Simple Footer */}
                <footer className="bg-brand-950 text-slate-400 py-16 border-t border-brand-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                            <div className="col-span-2">
                                <div className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                    <img src="/knit-logo.png" alt="Knit" className="h-20 w-auto brightness-0 invert" />
                                </div>
                                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                                    Next-generation financial infrastructure for the AI era.
                                    <br /><br />
                                    © 2024 Knit Financial Technologies Inc.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-4 text-sm">Product</h4>
                                <ul className="space-y-3 text-xs font-light">
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Platform Overview</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Risk Engine</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Integration</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
                                <ul className="space-y-3 text-xs font-light">
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
                                <ul className="space-y-3 text-xs font-light">
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Security</a></li>
                                    <li><a href="#" className="hover:text-brand-400 transition-colors">Status</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-brand-900 flex justify-between items-center text-[10px] font-mono text-slate-600">
                            <div>San Francisco • New York • London</div>
                            <div className="flex gap-4 items-center">
                                <button onClick={() => setShowDesignSystem(true)} className="hover:text-brand-400 transition-colors flex items-center gap-1">
                                    <FileText size={10} /> Design System
                                </button>
                                <div>System Status: <span className="text-emerald-500 animate-pulse">Operational</span></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
