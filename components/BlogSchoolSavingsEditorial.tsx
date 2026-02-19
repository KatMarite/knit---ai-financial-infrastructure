import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Clock, Calendar, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogSchoolSavingsEditorial: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <header className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-mono">
                        <span className="px-2 py-1 bg-surface-100 rounded text-slate-700">Finance</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} /> Feb 9, 2026
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock size={14} /> 4 min read
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        How AI Is Quietly Saving Schools Hundreds of Thousands Each Year
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Across South Africa, school finance and administration teams are under growing pressure. Rising operational costs, manual recovery processes, fragmented systems, and increasing parent expectations are stretching bursars and finance managers thin.
                    </p>

                    <div className="flex items-center justify-between mt-8 border-t border-b border-surface-200 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold">K</div>
                            <div className="text-sm">
                                <div className="font-bold text-slate-900">Knit Team</div>
                                <div className="text-slate-500">Finance & Strategy</div>
                            </div>
                        </div>
                        <div className="flex gap-4 text-slate-400">
                            <Share2 size={18} className="hover:text-brand-600 cursor-pointer" />
                            <Twitter size={18} className="hover:text-brand-600 cursor-pointer" />
                            <Linkedin size={18} className="hover:text-brand-600 cursor-pointer" />
                        </div>
                    </div>
                </header>

                {/* Main Content Column */}
                <article className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

                    <figure className="my-10">
                        <img
                            src="/feature-4-bursar-collections.png"
                            alt="Bursar Dashboard"
                            className="w-full rounded-xl shadow-lg border border-surface-200"
                        />
                        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                            Streamlining recovery with AI-driven insights.
                        </figcaption>
                    </figure>

                    <p>
                        While most schools focus on improving fee recovery rates, the larger and often overlooked opportunity lies in operational efficiency. AI-driven finance automation is now enabling schools to materially reduce manual workload, cut external agency costs, and improve cash-flow predictability—without compromising parent experience.
                    </p>

                    <h2>Where the Costs Really Sit</h2>
                    <p>
                        Even well-run schools spend hundreds of hours per year on repetitive financial tasks: payment reminders, reconciliations, admissions affordability checks, reporting, and follow-ups on arrears. These tasks typically consume between 0.4 and 0.7 full-time equivalents (FTEs) annually.
                    </p>

                    <figure className="my-8">
                        <img
                            src="/feature-3-tuition-fees.png"
                            alt="Tuition Fees Management"
                            className="w-full rounded-xl shadow-md border border-surface-200"
                        />
                    </figure>

                    <p>
                        At an average fully-loaded finance salary of R250,000–R350,000 per year, this translates into <strong>R100,000–R200,000 in hidden labour costs alone.</strong>
                    </p>

                    <h2>The Bigger Leak: External Agencies</h2>
                    <p>
                        Schools often rely on external recovery agencies for late-stage arrears. Agency fees typically range from 18% to 25% of recovered amounts. For a mid-to-large private school, this can easily exceed R1–4 million per year in gross arrears exposure.
                    </p>
                    <div className="bg-brand-50 border-l-4 border-brand-600 p-6 my-10 rounded-r-lg not-prose">
                        <h4 className="font-bold text-brand-900 text-lg mb-2">The Impact of Early Intervention</h4>
                        <p className="text-brand-800">
                            AI-powered early intervention—automated reminders, payment-plan self-service, and risk-based escalation—can prevent 10–25% of these accounts from ever reaching third-party recovery. That alone represents <strong>R250,000–R750,000 in annual savings</strong> for many schools.
                        </p>
                    </div>

                    <h2>What AI Actually Automates</h2>
                    <p>
                        Modern school finance platforms embed AI agents across four core functions:
                    </p>
                    <ul>
                        <li><strong>Revenue Recovery:</strong> automated reminders, escalations, reconciliation, and payment plans</li>
                        <li><strong>Admissions:</strong> affordability screening and risk checks at enrolment</li>
                        <li><strong>Forecasting:</strong> cash-flow projections, budget variance analysis, and board reporting</li>
                        <li><strong>Error reduction:</strong> fewer billing mistakes, reversals, and manual rework</li>
                    </ul>

                    <figure className="my-8">
                        <img
                            src="/feature-1-architecture-complete.png"
                            alt="AI Architecture Overview"
                            className="w-full rounded-xl shadow-md border border-surface-200"
                        />
                        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                            Integrating AI across the entire school finance stack.
                        </figcaption>
                    </figure>

                    <h2>The Realistic Savings Range</h2>
                    <p>
                        When these capabilities are combined, most fee-paying schools can expect annual operational savings in the range of <strong>R300,000 to R600,000</strong>, depending on size and complexity. Importantly, these savings do not require staff reductions—only a shift away from low-value manual work.
                    </p>

                    <h2>Beyond Cost: Strategic Upside</h2>
                    <p>
                        Finance teams spend less time chasing payments and more time supporting parents, improving payment structures, and advising school leadership. Parents experience more professional, discreet, and predictable financial interactions. School leadership gains clearer visibility into cash flow and risk.
                    </p>
                    <p>
                        AI in school finance is not about replacing people. It is about removing friction, reducing leakage, and allowing schools to operate at the level their fees and reputations already imply.
                    </p>

                    <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl not-prose text-center">
                        <h3 className="text-2xl font-bold mb-4">Start Saving Today</h3>
                        <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                            Discover how Knit can help your school automate finance and reduce costs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => window.location.href = '/contact'} className="px-6 py-3 bg-white text-slate-900 rounded-md font-bold hover:bg-surface-50 transition-colors flex items-center justify-center gap-2">
                                Contact Us <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogSchoolSavingsEditorial;
