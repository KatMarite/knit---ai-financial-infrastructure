import React, { useEffect, useState, useRef } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { Clock, Calendar, Database, Zap, CheckCircle, ArrowRight, Shield, X, AlertTriangle, FileSpreadsheet, Users } from 'lucide-react';

const CountUp = ({ end, duration = 2000, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
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

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const BlogImplementationNightmare: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Header / Hero */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-950 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-900 border border-brand-800 text-brand-300 text-[10px] font-mono uppercase tracking-widest mb-6 rounded-full">
                                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse"></span>
                                    Implementation Speed
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={100}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
                                    From Months to Days: <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Eliminating the Nightmare</span>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light max-w-lg">
                                    The traditional school software implementation timeline is a 6-month operational chaos. At Knit, we believe implementation shouldn’t be a project—it should be an event.
                                </p>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal delay={300}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-800 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent z-10"></div>
                                <img
                                    src="/blog/timeline-header.png"
                                    alt="Timeline Compression Visualization"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="text-xs font-mono text-brand-300 mb-1">COMPRESSED TIMELINE</div>
                                    <div className="text-2xl font-bold">72 Hours vs 6 Months</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </header>

            <main>
                {/* The Horror Story Section */}
                <section className="py-24 bg-surface-50 border-b border-surface-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <ScrollReveal>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-red-100 rounded-lg text-red-600">
                                    <AlertTriangle size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">The Traditional Implementation Horror Story</h2>
                            </div>
                            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                                Every school director knows the drill. It starts with excitement, but quickly descends into:
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <ScrollReveal delay={100}>
                                <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">1</div>
                                        <h3 className="font-semibold text-slate-900">Months 1-4</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm">Requirements gathering, manual data cleaning, and "parallel running" (doing the work twice).</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">2</div>
                                        <h3 className="font-semibold text-slate-900">Months 5-6</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm">Staff training and the inevitable discovery of "system bugs" that were missed.</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={300}>
                            <h3 className="text-xl font-bold mb-6">Why It Takes Forever</h3>
                        </ScrollReveal>

                        <div className="space-y-6">
                            <ScrollReveal delay={350}>
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px]"><X className="text-red-500" size={24} /></div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Manual Data Migration</h4>
                                        <p className="text-slate-600 mt-1">Exporting years of student records from legacy systems is usually a manual reformatting nightmare.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={400}>
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px]"><X className="text-red-500" size={24} /></div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">System Integration Complexity</h4>
                                        <p className="text-slate-600 mt-1">Trying to get a new system to "talk" to Sage, Pastel, or school management systems often requires custom (and expensive) development.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={450}>
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px]"><X className="text-red-500" size={24} /></div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">The Learning Curve</h4>
                                        <p className="text-slate-600 mt-1">Finance teams are busy. Learning a whole new "monolithic" platform takes time they don't have.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* The AI Advantage */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                                    The Solution
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-4">How Knit Changes Everything</h2>
                                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                    We don’t build "just another system." We build an AI-powered financial operating system that sits on top of what you already use.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                            <ScrollReveal>
                                <img
                                    src="/blog/ai-data-migration.png"
                                    alt="AI Data Migration"
                                    className="rounded-2xl shadow-2xl border border-surface-200 w-full"
                                />
                            </ScrollReveal>
                            <div>
                                <ScrollReveal delay={100}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-brand-100 rounded text-brand-600"><Database size={20} /></div>
                                        <h3 className="text-2xl font-bold text-slate-900">1. AI-Powered Data Migration</h3>
                                    </div>
                                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                        72 Hours vs. 60 Days. Traditional vendors require you to clean your own data. Knit’s machine learning algorithms analyze your existing system structure, automatically mapping fields and identifying anomalies.
                                    </p>
                                    <div className="bg-surface-50 p-6 rounded-lg border-l-4 border-brand-500">
                                        <div className="text-sm font-bold text-slate-500 uppercase mb-2">Case Study: Links Combined College</div>
                                        <p className="text-slate-800 italic">
                                            "We migrated and validated their complete historical data—student records, payment history, and parent contact info—in under 72 hours."
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <ScrollReveal delay={200}>
                                <div className="bg-white border border-surface-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow h-full">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Integration over Core Features</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Our #1 principle is: "Can we integrate instead of building?" We don’t want to replace your school admin system; we want to make it better. By acting as the specialized "payments and collections layer," we connect seamlessly to your accounting and credit bureaus in hours, not weeks.
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <div className="bg-white border border-surface-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow h-full">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                        <CheckCircle size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Zero Training: AI Agents</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Instead of a 200-page manual, Knit uses Conversational AI agents. Your team doesn't need to "learn Knit"—they just need to talk to it.
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        <li className="flex items-center gap-2 text-sm text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div> <strong>Admissions Agent:</strong> Automates credit screening.
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div> <strong>Revenue Agent:</strong> Handles reminders via WhatsApp/SMS.
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* The Numbers Don't Lie Section */}
                <section className="py-24 bg-brand-950 text-white relative">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold mb-6">The Numbers Don’t Lie</h2>
                                <p className="text-brand-200 text-lg">Links Combined College Results</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <ScrollReveal delay={100}>
                                <div className="p-8 bg-brand-900/50 rounded-2xl border border-brand-800 backdrop-blur-sm">
                                    <div className="text-sm font-mono text-brand-400 uppercase tracking-widest mb-4">Implementation</div>
                                    <div className="text-5xl font-bold mb-2">3 Days</div>
                                    <div className="text-sm text-brand-300">vs 4-5 Months Estimate</div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <div className="p-8 bg-brand-900/50 rounded-2xl border border-brand-800 backdrop-blur-sm">
                                    <div className="text-sm font-mono text-brand-400 uppercase tracking-widest mb-4">Collection Rate</div>
                                    <div className="text-5xl font-bold mb-2 text-emerald-400">+<CountUp end={30} suffix="%" /></div>
                                    <div className="text-sm text-brand-300">Improvement in rates</div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={300}>
                                <div className="p-8 bg-brand-900/50 rounded-2xl border border-brand-800 backdrop-blur-sm">
                                    <div className="text-sm font-mono text-brand-400 uppercase tracking-widest mb-4">Admin Time</div>
                                    <div className="text-5xl font-bold mb-2 text-emerald-400">-<CountUp end={85} suffix="%" /></div>
                                    <div className="text-sm text-brand-300">Reduction in manual work</div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* What This Means For You */}
                <section className="py-24 bg-surface-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold text-center mb-12">What "Days, Not Months" Means for Your School</h2>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-surface-200 items-start">
                                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg"><Zap size={24} /></div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Immediate Cash Flow</h3>
                                        <p className="text-slate-600">See collection improvements in the first week, not the first quarter.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-surface-200 items-start">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Users size={24} /></div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">No Training Debt</h3>
                                        <p className="text-slate-600">Natural language interfaces mean your team is productive from day one.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-surface-200 items-start">
                                    <div className="p-3 bg-purple-100 text-purple-600 rounded-lg"><Shield size={24} /></div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Compliance on Autopilot</h3>
                                        <p className="text-slate-600">POPIA, NCR, and Section 41 requirements are hard-coded into our AI’s DNA.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-white border-t border-surface-200 text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Experience Days, Not Months?</h2>
                            <p className="text-xl text-slate-600 mb-10">
                                Knit is building the future of school finance. We prevent arrears so you rarely need expensive external agencies.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="px-8 py-4 bg-brand-900 text-white rounded-full font-bold hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                                    Start Your 72-Hour Migration <ArrowRight size={18} />
                                </button>
                                <button
                                    onClick={() => window.location.href = '/contact'}
                                    className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-full font-bold hover:bg-surface-50 transition-colors"
                                >
                                    Book a Demo
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogImplementationNightmare;
