import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { Users, Target, Heart, Globe, ArrowRight, ShieldCheck, Zap, Lightbulb, MapPin, Mail, BrainCircuit, UserPlus, MessageSquare, Puzzle, Cloud, Database } from 'lucide-react';

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
                    <div className="max-w-4xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
                                <Users size={14} />
                                <span>About Knit</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-950 tracking-tight mb-8 leading-tight">
                                Empowering Educational Institutions with AI-Powered Financial Infrastructure.
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="prose prose-lg text-slate-600 max-w-none">
                                <p className="mb-6">
                                    South African schools are currently facing a severe liquidity crisis. With only 42% of public fee-paying school accounts and 66% of independent school accounts being paid on time, we believe that schools should worry more about education outcomes than they do finances. Unfortunately, this isn’t the current state of affairs.
                                </p>
                                <p className="font-medium text-brand-900">
                                    At Knit, we are building the financial infrastructure to modernise these institutions—a comprehensive, "application-to-collections" platform.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white border-b border-surface-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold text-brand-950 mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Our mission is simple: <span className="font-semibold text-brand-700">To improve people’s dignity.</span>
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We do this by automating the complex, manual financial workflows that keep bursars and finance managers at their desks late into the night. By replacing fragmented systems with a unified AI-driven layer, we help schools reduce manual operations by up to 50% and improve fee collection rates by 15% to 20%.
                            </p>
                        </ScrollReveal>

                        <div className="grid gap-6">
                            <ScrollReveal delay={200}>
                                <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100">
                                    <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2">
                                        <Zap size={20} className="text-brand-600" />
                                        How do we do this?
                                    </h3>
                                    <p className="text-brand-800 font-medium mb-2">By being AI-First, Human-Centric</p>
                                    <p className="text-sm text-brand-700/80 leading-relaxed">
                                        We leverage a sophisticated AI co-pilot built on Gemini to transform how schools manage liquidity. Our platform doesn't just process transactions; it automates complex decision-making.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollReveal delay={300} className="h-full">
                            <div className="p-8 rounded-xl border border-surface-200 bg-white shadow-sm hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                    <BrainCircuit size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Automating Decisions</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    We aren’t another automated reminder platform, nor is Knit an abrasive debt collector. Our AI agents conduct real affordability intelligence at the point of enrollment. This enables the school to forecast their cashflows with a realistic view of the fees they’re likely to make.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={400} className="h-full">
                            <div className="p-8 rounded-xl border border-surface-200 bg-white shadow-sm hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Human-in-the-Loop</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    We operate on "Human-in-the-Loop" principles. While our AI handles data-heavy routine filtering and proactive collection reminders at scale, school finance managers retain ultimate oversight. The AI provides preliminary intelligence and justifications, ensuring that nuanced, context-sensitive judgment remains in human hands.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Knit Section */}
            <section className="py-24 bg-brand-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl font-bold mb-6">Why Knit?</h2>
                            <p className="text-xl text-brand-200 font-light">
                                Unlike traditional administrative software, Knit isn't just a database; it’s an active financial co-pilot.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <UserPlus size={24} />,
                                title: "AI-Powered Admissions",
                                desc: "We integrate directly with providers such as Experian to provide intelligence and affordability assessments at the point of enrollment."
                            },
                            {
                                icon: <MessageSquare size={24} />,
                                title: "Proactive Collections",
                                desc: "Our Google Gemini-based AI agents handle empathetic, multi-channel payment reminders via WhatsApp, SMS, Email, and Voice, preventing delinquency before it starts."
                            },
                            {
                                icon: <Puzzle size={24} />,
                                title: "Seamless Integration",
                                desc: "We don't ask you to replace your current systems. We integrate with your school management and accounting systems to add a superior payments and collections layer."
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "Compliance & Security",
                                desc: "We prioritize data sovereignty and POPIA compliance, ensuring that school and parent data is managed with the highest level of security."
                            }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors h-full">
                                    <div className="text-brand-400 mb-4">{feature.icon}</div>
                                    <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                                    <p className="text-sm text-brand-200/80 leading-relaxed">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Backing & Ecosystem */}
            <section className="py-20 bg-surface-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold text-brand-950 mb-12 text-center">Our Backing & Ecosystem</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div className="prose text-slate-600">
                                <p className="text-lg">
                                    We are a <span className="font-bold text-brand-900">B-BBEE Level 1</span> technology company committed to driving transformation and employment in South Africa. Our growth is supported by world-class infrastructure and strategic partners.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-surface-200 shadow-sm">
                                    <Cloud className="text-brand-600 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">Google Cloud for Startups</h4>
                                        <p className="text-xs text-slate-500">Powered by GCP infrastructure and Gemini AI.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-surface-200 shadow-sm">
                                    <Database className="text-brand-600 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">Strategic Integrations</h4>
                                        <p className="text-xs text-slate-500">We partner with Netcash for automated payment pipes.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-surface-200 shadow-sm">
                                    <ShieldCheck className="text-brand-600 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">Data Integrity</h4>
                                        <p className="text-xs text-slate-500">Integrated with Experian for real-time credit intelligence.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Visit Us / Contact */}
            <section className="py-24 bg-white border-t border-surface-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-white">
                        <div className="p-12 md:w-3/5">
                            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
                            <p className="text-brand-200 mb-8 max-w-md">
                                Knit is headquartered in the heart of Johannesburg’s fintech hub.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-brand-400 shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-brand-300 mb-1">Office Address</h4>
                                        <p className="leading-relaxed">
                                            Knit Group (Pty) Ltd<br />
                                            The Zone @ Rosebank<br />
                                            Rosebank, Johannesburg<br />
                                            Gauteng, South Africa
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Globe className="text-brand-400 shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-brand-300 mb-1">Connect with us</h4>
                                        <div className="flex flex-col gap-1">
                                            <a href="https://www.knit.cash" className="hover:text-white transition-colors">www.knit.cash</a>
                                            <a href="mailto:info@knit.cash" className="hover:text-white transition-colors">info@knit.cash</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-800 p-12 md:w-2/5 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-brand-700">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <Mail size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Have questions?</h3>
                            <p className="text-brand-200 text-sm mb-8">
                                Our team is ready to help you modernize your school's financial infrastructure.
                            </p>
                            <button
                                onClick={() => navigate('/contact')}
                                className="w-full py-3 bg-white text-brand-900 font-bold rounded hover:bg-brand-50 transition-colors shadow-lg"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
