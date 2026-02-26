import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Clock, Calendar, ArrowRight, Share2, Twitter, Linkedin, AlertTriangle, TrendingDown, Users, Shield, Cpu, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogFeeNonPaymentCrisis: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <header className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-mono">
                        <span className="px-2 py-1 bg-surface-100 rounded text-slate-700">African Finance</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} /> Feb 25, 2026
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock size={14} /> 8 min read
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Why the Fee Non-Payment Crisis Is Worse Than the Headlines Suggest
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        South Africa's fee-paying schools are in a silent financial crisis. StatsSA confirms 65.7% of school-aged children don't pay tuition fees — but for the schools that rely on fee income, the real problem is velocity, compliance, and cash flow starvation.
                    </p>

                    <div className="flex items-center justify-between mt-8 border-t border-b border-surface-200 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold">K</div>
                            <div className="text-sm">
                                <div className="font-bold text-slate-900">Knit Team</div>
                                <div className="text-slate-500">Editorial</div>
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

                    {/* Hero Illustration - SVG */}
                    <figure className="my-10">
                        <div className="w-full rounded-xl shadow-lg border border-surface-200 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                                            <AlertTriangle className="text-red-400" size={24} />
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                            <TrendingDown className="text-amber-400" size={24} />
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
                                            <BarChart3 className="text-brand-400" size={24} />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 not-prose">The Silent Crisis</h3>
                                    <p className="text-slate-400 text-sm not-prose">Fee-paying schools face a compounding problem of rising costs, declining on-time payments, and manual infrastructure.</p>
                                </div>
                                <div className="flex-1 not-prose">
                                    {/* Stats Visualization */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl font-bold text-red-400 font-mono">65.7%</div>
                                            <div className="text-sm text-slate-400">of students pay<br />no tuition fees</div>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full" style={{ width: '66%' }}></div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl font-bold text-amber-400 font-mono">34.3%</div>
                                            <div className="text-sm text-slate-400">face rapidly<br />escalating costs</div>
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full" style={{ width: '34%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                            The two-tier reality of South African school finance, powered by StatsSA data.
                        </figcaption>
                    </figure>

                    <p>
                        South Africa's fee-paying schools are in a silent financial crisis. On the surface, the numbers are stark: according to Statistics South Africa's latest Education report, 65.7% of school-aged children don't pay tuition fees — a stark confirmation <a href="https://www.citizen.co.za/news/south-africa/education/66-of-children-in-sa-schools-parents-dont-pay-school-fees/" target="_blank" rel="noopener noreferrer">published by The Citizen today</a>. But here's what the headline misses.
                    </p>
                    <p>
                        For the schools that <em>do</em> rely on fee income — your independent schools, your Quintile 4-5 public schools — this isn't a problem of volume. It's a problem of <strong>velocity</strong>, <strong>compliance</strong>, and <strong>cash flow starvation</strong>.
                    </p>

                    <h2>The Real Issue: Rising Fees, Stagnant Collections</h2>
                    <p>
                        The <a href="https://www.statssa.gov.za/" target="_blank" rel="noopener noreferrer">StatsSA report</a> notes something crucial: for students who do pay fees, those fees are increasing faster than headline inflation. Private primary schools average <strong>R71,496 per year</strong>. Private high schools, <strong>R105,084</strong>. Families are stretched. And when they're stretched, payment delays get longer.
                    </p>
                    <p>
                        As The Citizen's education correspondent Oratile Mashilo reported today, the no-fee schools policy introduced in 2007 has created a two-tier reality: 65.7% of students attend no-fee schools, but the remaining 34.3% — concentrated in independent and premium public schools — are facing rapidly escalating costs.
                    </p>

                    {/* Key Data Callout */}
                    <div className="bg-surface-50 border-l-4 border-red-500 p-6 my-8 not-prose">
                        <div className="flex items-start gap-4">
                            <TrendingDown className="text-red-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">The Collection Collapse</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                    Independent school fee payment dropped from <strong>75% on-time in 2023</strong> to <strong>66% in Q1 2024</strong>. That's a nine-percentage-point drop in a year. Public fee-paying schools are worse — <strong>42% on-time</strong> in the same period.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="bg-white rounded-lg p-4 border border-surface-200">
                                        <div className="text-2xl font-bold text-red-500 font-mono">9%</div>
                                        <div className="text-xs text-slate-500">drop in on-time payments (independent)</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-surface-200">
                                        <div className="text-2xl font-bold text-amber-500 font-mono">R2.2M</div>
                                        <div className="text-xs text-slate-500">potential cash-flow friction (800 learners)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                        What does that translate to for a school with 800 learners, each paying R8,000 per year? If 34% of payments are late, you're potentially looking at <strong>R2.2M in cash-flow friction</strong>. Some of that recovers eventually. Some doesn't.
                    </p>

                    <h2>Why Manual Collection Breaks Down at Scale</h2>

                    {/* Manual Collection Illustration */}
                    <figure className="my-10">
                        <div className="w-full rounded-xl shadow-md border border-surface-200 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-red-100 flex items-center justify-center">
                                        <Users className="text-red-500" size={28} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Late Payment</h4>
                                    <p className="text-xs text-slate-500">Requires a reminder</p>
                                    <div className="mt-2 text-slate-300">↓</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-100 flex items-center justify-center">
                                        <AlertTriangle className="text-amber-500" size={28} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Broken Promise</h4>
                                    <p className="text-xs text-slate-500">Requires a renegotiation</p>
                                    <div className="mt-2 text-slate-300">↓</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-slate-100 flex items-center justify-center">
                                        <TrendingDown className="text-slate-500" size={28} />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Escalation</h4>
                                    <p className="text-xs text-slate-500">Damages relationships</p>
                                </div>
                            </div>
                            <div className="mt-6 text-center not-prose">
                                <p className="text-sm text-slate-600 italic">The endless cycle of manual follow-up that breaks down at scale.</p>
                            </div>
                        </div>
                        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                            Each late payment triggers a chain of manual effort that compounds across hundreds of families.
                        </figcaption>
                    </figure>

                    <p>
                        Here's where the structural problem gets worse: most schools are still managing this with <em>people</em>. A bursar, maybe an admin assistant, sending emails and SMS reminders. When 66% of your sector is in a no-fee environment and the ones paying you are already financially stressed, that manual process becomes a game of endless follow-up.
                    </p>
                    <p>
                        Each late payment requires a reminder. Each reminder requires a response. Each broken promise requires a renegotiation. The cost of admin alone, across the school network, is massive.
                    </p>
                    <p>
                        But the real cost is the <strong>uncertainty</strong>. Finance teams can't forecast. Principals can't plan. And by the time collection efforts escalate, relationships are damaged.
                    </p>

                    <h2>The Compliance Layer Nobody Talks About</h2>
                    <p>
                        Here's where it gets more complicated: South African schools operate under <strong>POPIA</strong> (Protection of Personal Information Act) and have obligations under the <strong>National Credit Act</strong>. When you're chasing payment, you can't be aggressive. You can't spam. You can't make uninformed decisions about which parents to escalate, or you risk a compliance violation that costs far more than the debt you're trying to recover.
                    </p>

                    {/* Compliance Callout */}
                    <div className="bg-surface-50 border-l-4 border-brand-500 p-6 my-8 italic text-slate-700">
                        Manual collection often means compliance doesn't happen properly. Schools take shortcuts. Or they don't follow up hard enough because they're worried about overstepping. <strong>The debt sits. It compounds.</strong>
                    </div>

                    <h2>What's Changed: Automation, But Not Thoughtlessly</h2>
                    <p>
                        There's an emerging answer, but it's not just "send more SMS." Real automation in school collections has to do several things at once:
                    </p>

                    {/* Automation Pillars */}
                    <figure className="my-10">
                        <div className="w-full rounded-xl shadow-lg border border-surface-200 overflow-hidden bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center mb-4">
                                        <BarChart3 className="text-brand-400" size={20} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-2">Intelligent Risk Assessment</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Know which parents are likely to pay on time based on historical behavior, not guesses. Catch problems early, when they're still fixable.
                                    </p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                                        <Shield className="text-emerald-400" size={20} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-2">Compliance-First Escalation</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Automate the right actions — payment reminders, gentle first-contact, formal notices — in the right order, with the right documentation. Every action logged, explainable, defensible.
                                    </p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                                        <Users className="text-amber-400" size={20} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-2">Human-in-the-Loop at the Hard Conversations</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        When it's time to negotiate — that's not a bot. It's a trained negotiation engine that respects Walk-Away Thresholds but recognizes genuine hardship.
                                    </p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                                        <Cpu className="text-purple-400" size={20} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-2">Behavioral Intelligence Across Your Portfolio</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        If a cohort historically breaks plans in January, frontload different communication. If a parent always settles 15 days late, don't waste escalation effort.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-white/10 pt-6 not-prose">
                                <p className="text-sm text-emerald-400 font-bold text-center">
                                    Schools implementing this infrastructure report collection improvements of 13–15 percentage points year-on-year.
                                </p>
                            </div>
                        </div>
                        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                            The four pillars of intelligent, compliant automation in school fee collections.
                        </figcaption>
                    </figure>

                    <p>
                        That's not hypothetical. Schools implementing this kind of infrastructure are reporting collection improvements of <strong>13–15 percentage points year-on-year</strong>. They're shifting their finance teams from "collectors" to decision-makers.
                    </p>

                    <h2>Why This Matters Now</h2>
                    <p>
                        The <a href="https://www.statssa.gov.za/" target="_blank" rel="noopener noreferrer">StatsSA data</a> published today — and covered extensively by <a href="https://www.citizen.co.za/news/south-africa/education/66-of-children-in-sa-schools-parents-dont-pay-school-fees/" target="_blank" rel="noopener noreferrer">The Citizen</a> — is a reminder that the fee non-payment problem isn't going away. It's structural. And for schools relying on fee income, it's getting worse, not better — because the fees themselves are rising faster than family incomes.
                    </p>
                    <p>
                        Schools that continue to chase payment manually will continue to erode relationships, bleed cash, and leave money on the table. Schools that implement intelligent, compliant automation will change their financial trajectory.
                    </p>

                    <div className="bg-surface-50 border-l-4 border-brand-500 p-6 my-8 italic text-slate-700">
                        The question isn't whether to automate. It's whether to do it <strong>thoughtfully</strong>, with your school's unique policies embedded, or to keep improvising.
                    </div>

                    {/* Sources */}
                    <h3>Sources</h3>
                    <ul>
                        <li>
                            <a href="https://www.citizen.co.za/news/south-africa/education/66-of-children-in-sa-schools-parents-dont-pay-school-fees/" target="_blank" rel="noopener noreferrer">
                                The Citizen — 66% of children in SA schools: parents don't pay school fees
                            </a>
                        </li>
                        <li>
                            <a href="https://www.statssa.gov.za/" target="_blank" rel="noopener noreferrer">
                                Statistics South Africa — Education Report
                            </a>
                        </li>
                    </ul>

                    {/* CTA Section */}
                    <div className="mt-12 bg-surface-50 border border-surface-200 p-8 rounded-2xl not-prose flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-brand-950 mb-2">Stop Chasing. Start Collecting.</h3>
                            <p className="text-slate-600 mb-6">
                                See how Knit's intelligent automation can transform your school's fee collection from manual follow-up to structured, compliant revenue recovery.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-md font-bold hover:bg-brand-800 transition-colors">
                                Book a Demo <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogFeeNonPaymentCrisis;
