import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { Users, Target, Heart, Globe, ArrowRight, ShieldCheck, Zap, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
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
                                <Users size={14} />
                                <span>About Us</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight mb-6">
                                We're building the financial operating system for the real economy.
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                                Knit is on a mission to bring banking-grade financial infrastructure to the industries that power our communities—schools and beyond.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-brand-100/50 rounded-2xl transform -rotate-2"></div>
                                <img
                                    src="/about-mission.jpg"
                                    alt="Modern office space"
                                    className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <h2 className="text-3xl font-bold text-brand-950 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                For too long, essential industries like education have been underserved by traditional financial institutions. They've been forced to rely on manual processes, cash payments, and fragmented systems that create risk and inefficiency.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We built Knit to change that. By embedding powerful financial tools directly into the workflows of these businesses, we help them digitize payments, automate collections, and access the financial services they need to thrive.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-brand-50 rounded-lg text-brand-600 mt-1">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-brand-900">Purpose-Built</h4>
                                        <p className="text-sm text-slate-500 mt-1">Solutions designed specifically for the unique needs of our verticals.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-brand-50 rounded-lg text-brand-600 mt-1">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-brand-900">Community First</h4>
                                        <p className="text-sm text-slate-500 mt-1">Empowering the institutions that form the backbone of our communities.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-brand-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
                            <p className="text-brand-200 text-lg">
                                These principles guide every decision we make and every product we build.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={100}>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-brand-800 text-brand-300 mb-6">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Trust is Everything</h3>
                                <p className="text-brand-200 leading-relaxed">
                                    We deal with people's livelihoods and futures. We prioritize security, transparency, and reliability above all else.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-brand-800 text-brand-300 mb-6">
                                    <Lightbulb size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Solve Real Problems</h3>
                                <p className="text-brand-200 leading-relaxed">
                                    We don't build tech for tech's sake. We build specifically to solve the painful, day-to-day challenges our customers face.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={300}>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-brand-800 text-brand-300 mb-6">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Build for Africa</h3>
                                <p className="text-brand-200 leading-relaxed">
                                    We understand the local context. Our solutions are built to work reliably in the unique environment of emerging markets.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-950 mb-6">
                            Join us on our journey.
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Whether you're a school looking to modernize, or a talented individual looking to make an impact.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                            >
                                Contact Us
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-white text-brand-700 font-semibold rounded-lg border border-surface-200 hover:bg-surface-50 transition-all"
                            >
                                View Careers
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
