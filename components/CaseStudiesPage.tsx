import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, TrendingUp, Clock, CheckCircle2, MapPin, School, GraduationCap } from 'lucide-react';
import CountUp from './CountUp';

const CaseStudiesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-white text-slate-900 border-b border-surface-200">
                <div className="absolute inset-0 grid-bg opacity-[0.6] z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium mb-6">
                                <TrendingUp size={14} />
                                <span>Customer Success Stories</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-brand-950 mb-6">
                                Real Results from <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Real Customers.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Discover how education and life services providers are transforming their businesses with Knit's finance infrastructure solutions.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-brand-950 pb-20 pt-8 mt-[-40px] relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ScrollReveal delay={0} className="h-full">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors h-full flex flex-col justify-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    <CountUp end={15} suffix="%+" />
                                </div>
                                <div className="text-brand-100/70 font-medium">Collection Improvement</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100} className="h-full">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors h-full flex flex-col justify-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    <CountUp end={5} prefix="< " suffix="%" />
                                </div>
                                <div className="text-brand-100/70 font-medium">Portfolio Loss</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200} className="h-full">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors h-full flex flex-col justify-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    <CountUp end={4} suffix=" Days" />
                                </div>
                                <div className="text-brand-100/70 font-medium">Migrations</div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Case Study 1: Links Combined College */}
            <section className="py-24 relative bg-surface-50 border-b border-surface-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            {/* Left: Content */}
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-sm border border-surface-200 flex items-center justify-center text-brand-600">
                                        <img src="/links-college-logo.png" alt="Links Combined College" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('bg-brand-50'); }} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-brand-600 uppercase tracking-widest mb-1">knit Edu</div>
                                        <h2 className="text-xl font-bold text-slate-900">Links Combined College</h2>
                                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                                            <MapPin size={12} /> 1 Becker Street, Midrand
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-slate max-w-none">
                                    <h3 className="text-3xl font-bold text-brand-950 mb-6 leading-tight">
                                        Results achieved within 6 months of implementation
                                    </h3>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">The Challenge</h4>
                                        <p className="text-slate-600">
                                            Like many independent schools in South Africa, we struggled with manual collections processes, documentation and late fee payments that consumed administrative time.
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">The Solution</h4>
                                        <p className="text-slate-600">
                                            Knit provided us with a comprehensive financial operating system that handles our complete fee lifecycle—from enrollment screening through automated collections. The platform integrates credit bureau verification at application stage, streamlined payment processing with multiple channels, proactive automated reminders, and real-time financial visibility.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm mb-8">
                                        <h4 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-emerald-500" /> What Stands Out
                                        </h4>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="font-semibold text-slate-800">Implementation Speed:</span>
                                                <span className="text-slate-600 ml-1">The Knit team had us operational within days, not months. Their understanding of school operations meant minimal disruption to our existing workflows.</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-slate-800">Compliance Built-In:</span>
                                                <span className="text-slate-600 ml-1">POPIA compliance, NCR regulations, and South African Schools Act requirements are automated—reducing our legal risk and administrative burden significantly.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative pl-8 border-l-4 border-brand-300 italic text-slate-700">
                                        <p className="mb-4 text-lg">
                                            "Knit has transformed our financial operations from a constant source of stress to a strategic advantage. For any school struggling with fee collections, cash flow unpredictability, or administrative burden, I strongly recommend evaluating Knit."
                                        </p>
                                        <footer>
                                            <div className="font-bold text-brand-900">Andile Ngwenya</div>
                                            <div className="text-sm text-slate-500">Director • Links Combined College</div>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Visual */}
                            <div className="lg:w-1/2 relative">
                                <div className="sticky top-32">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-200 aspect-[4/3] group">
                                        {/* Using a generic modern school/campus image as placeholder */}
                                        <img
                                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                                            alt="Modern school campus with students"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <div className="text-[10px] font-mono bg-white/20 backdrop-blur border border-white/30 px-2 py-1 rounded inline-block mb-2 uppercase tracking-widest">CASE_STUDY_01</div>
                                            <div className="font-bold">Modern school campus</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Case Study 2: Southdowns Primary */}
            <section className="py-24 relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                            {/* Right: Content (Reversed on layout) */}
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-sm border border-surface-200 flex items-center justify-center text-brand-600">
                                        {/* Using the Southdowns logo if available, or fallback */}
                                        <img src="/southdowns-logo.jpg" alt="Southdowns Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('bg-brand-50'); }} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-brand-600 uppercase tracking-widest mb-1">knit Edu</div>
                                        <h2 className="text-xl font-bold text-slate-900">Southdowns Primary</h2>
                                        <div className="flex items-center gap-1 text-slate-500 text-xs text-emerald-600 font-medium">
                                            <CheckCircle2 size={12} /> 1,300 learners onboarded in 4 hours
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-slate max-w-none">
                                    <h3 className="text-3xl font-bold text-brand-950 mb-6 leading-tight">
                                        Full implementation in 4 hours
                                    </h3>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">The Challenge</h4>
                                        <p className="text-slate-600">
                                            Like most independent schools in South Africa, Southdowns faced a familiar pain point: a significant number of school fee accounts aren't paid on time. Manual collection processes (EFTs) and highly manual activities consumed valuable administrative time.
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">The Solution</h4>
                                        <p className="text-slate-600">
                                            Southdowns went live with knit's collections infrastructure, powered by AI agents. The entire 1,300-learner student body was activated simultaneously in just 4 hours, with automated debit orders, real-time payment visibility, and parent engagement workflows running immediately.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm mb-8">
                                        <h4 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-emerald-500" /> What Stands Out
                                        </h4>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="font-semibold text-slate-800">Why Speed Matters:</span>
                                                <span className="text-slate-600 ml-1">Most school fee platforms take months to implement with pilot phases and complex mappings. Southdowns deployed fully on day one, eliminating friction and creating consistent payment behavior immediately.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative pl-8 border-l-4 border-brand-300 italic text-slate-700">
                                        <p className="mb-4 text-lg">
                                            "When schools choose Knit, they don't wait weeks for value. They get to work immediately. We eliminated manual payment processing and recovered administrative time for strategy instead of spreadsheets."
                                        </p>
                                        <footer>
                                            <div className="font-bold text-brand-900">Leadership Team</div>
                                            <div className="text-sm text-slate-500">Southdowns Primary</div>
                                        </footer>
                                    </div>
                                </div>
                            </div>

                            {/* Left: Visual (Reversed on layout) */}
                            <div className="lg:w-1/2 relative">
                                <div className="sticky top-32">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-200 aspect-[4/3] group">
                                        {/* Using a generic image related to speed/tech or school admin */}
                                        <img
                                            src="/southdowns-students.jpg"
                                            alt="Southdowns students in classroom"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <div className="text-[10px] font-mono bg-white/20 backdrop-blur border border-white/30 px-2 py-1 rounded inline-block mb-2 uppercase tracking-widest">CASE_STUDY_02</div>
                                            <div className="font-bold">Rapid Deployment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-surface-50 relative overflow-hidden border-t border-surface-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-brand-950 mb-6">Start your success story today.</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Join the schools and institutions automating their financial infrastructure with Knit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                Book a Demo
                            </a>
                            <a href="/pricing" className="px-8 py-4 bg-white text-brand-900 border border-surface-300 rounded-sm text-sm font-medium hover:bg-brand-50 transition-all">
                                View Pricing
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudiesPage;
