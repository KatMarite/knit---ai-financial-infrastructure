import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Clock, Calendar, ArrowRight, Share2, Twitter, Linkedin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogBeyondReminders: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            <main className="pt-32 pb-24">
                {/* Article Header */}
                <header className="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-mono">
                        <span className="px-2 py-1 bg-surface-100 rounded text-slate-700">AI in Collections</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} /> Feb 25, 2026
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock size={14} /> 5 min read
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Beyond Reminders: Why Your School Needs an AI Operator, Not an Alarm Clock
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        In the world of school fee collections, there is a massive difference between reminding someone to pay and deciding how to handle a complex financial relationship. Most "AI" tools are just expensive alarm clocks. Knit is different.
                    </p>

                    <div className="flex items-center justify-between mt-8 border-t border-b border-surface-200 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold">K</div>
                            <div className="text-sm">
                                <div className="font-bold text-slate-900">Knit Team</div>
                                <div className="text-slate-500">Product Philosophy</div>
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
                            src="/ai_operator_vs_alarm_clock.png"
                            alt="AI Operator vs Alarm Clock"
                            className="w-full rounded-xl shadow-lg border border-surface-200"
                        />
                        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                            Moving from simple reminders to intelligent financial operations.
                        </figcaption>
                    </figure>

                    <p>
                        In the world of school fee collections, there is a massive difference between reminding someone to pay and deciding how to handle a complex financial relationship. Most "AI" tools in the education sector are just expensive alarm clocks—they send the same WhatsApp on Day 7 to every parent, regardless of history or context.
                    </p>
                    <p>
                        At Knit, we’ve built something different. We operate as a Smart AI Overlay that sits on top of your existing systems (like STASY or PayU) to automate judgment, not just communication.
                    </p>

                    <h2>The Litmus Test for Genuine AI</h2>
                    <p>
                        How do you know if you’re looking at real decision automation? Use this simple test:
                    </p>
                    <div className="bg-surface-50 border-l-4 border-brand-500 p-6 my-6 italic text-slate-700">
                        If a system can choose <strong>NOT</strong> to send a message, it’s decision automation. If it always sends a message on a schedule, it’s just a reminder tool.
                    </div>
                    <p>
                        Knit passes this test by acting as an AI Operator. It doesn't just "ping" parents; it analyzes behavior, enforces policy, and knows exactly when to step back and let a human take over.
                    </p>

                    <h2>5 Ways Knit Automates Decisions (While Staying Compliant)</h2>

                    <h3>1. Behavior-Based Segmentation (Not Credit Scores)</h3>

                    <figure className="my-8">
                        <img
                            src="/behavior_segmentation_visualization.png"
                            alt="Behavior-Based Segmentation"
                            className="w-full rounded-xl shadow-md border border-surface-200"
                        />
                    </figure>

                    <p>
                        Traditional systems treat all arrears the same. Knit re-segments your parents daily based on observed payment behavior.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                            <div>
                                <strong>The Nudge Group (Segment A):</strong> Clean history, &lt;10 days overdue.<br />
                                <span className="text-sm text-slate-500">Action: Friendly WhatsApp reminders.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                            <div>
                                <strong>The Negotiate Group (Segment B):</strong> Partial or recurring late payments.<br />
                                <span className="text-sm text-slate-500">Action: Immediate, structured payment plan offers.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                            <div>
                                <strong>The Hard Group (Segment C):</strong> 60+ days overdue or broken promises.<br />
                                <span className="text-sm text-slate-500">Action: Formal demand workflows and policy enforcement.</span>
                            </div>
                        </li>
                    </ul>

                    <h3>2. Automated Policy Enforcement</h3>
                    <p>
                        Knit doesn't just ask for money; it manages the school’s rules.
                    </p>
                    <ul>
                        <li><strong>Tour Eligibility Blocks:</strong> Automatically triggered when arrears exceed thresholds.</li>
                        <li><strong>Sibling Discounts:</strong> Flags are checked and applied or removed in real-time based on payment status.</li>
                    </ul>

                    <h3>3. Intelligent Document Logic (The POP Pause)</h3>
                    <p>
                        Manual reconciliation of Proof of Payments (POP) is an administrative nightmare.
                    </p>
                    <ul>
                        <li><strong>The AI Decision:</strong> Our Document Analyser extracts amounts and dates from uploaded POPs.</li>
                        <li><strong>The Safety Mechanism:</strong> The moment a POP is submitted via WhatsApp, Knit automatically pauses all collection follow-ups while the document clears. This prevents the frustration of "reminding" a parent who has already paid.</li>
                    </ul>

                    <h3>4. Forecasting via "Payment Velocity"</h3>
                    <p>
                        Most budgets rely on nominal due dates. Knit forecasts cash flow based on historical payment velocity—when parents actually pay. This allows for more accurate projections that account for salary-cycle trends and seasonal variances.
                    </p>

                    <h3>5. The "Human-in-the-Loop" Boundary</h3>
                    <p>
                        We believe AI should empower bursars, not bypass them. Knit includes a strict Compliance Layer that ensures humans are pulled in when:
                    </p>
                    <ul>
                        <li>Legal thresholds are reached (SASA/Section 41 procedures).</li>
                        <li>AI confidence scores drop below a safe threshold.</li>
                        <li>Specific policy limits are exceeded.</li>
                    </ul>

                    <h2>The Operational Impact: A New Standard</h2>

                    <div className="overflow-x-auto my-8 border border-surface-200 rounded-lg">
                        <table className="min-w-full divide-y divide-surface-200">
                            <thead className="bg-surface-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Feature</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">The Old Way <span className="block font-normal lowercase">(Manual/Reminders)</span></th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-brand-600 uppercase tracking-wider">The Knit Way <span className="block font-normal lowercase">(Decision Automation)</span></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-surface-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Parent Segmentation</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Subjective/Manual</td>
                                    <td className="px-6 py-4 text-sm font-bold text-brand-700">Dynamic & Daily</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">POP Processing</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">~15 mins manual review</td>
                                    <td className="px-6 py-4 text-sm font-bold text-brand-700">90% Automated</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Payment Plans</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Lengthy negotiations</td>
                                    <td className="px-6 py-4 text-sm font-bold text-brand-700">Instant, rule-based offers</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Compliance</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Manual audit trails</td>
                                    <td className="px-6 py-4 text-sm font-bold text-brand-700">Automated & Explainable</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Action Strategy</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Time-based (Every X days)</td>
                                    <td className="px-6 py-4 text-sm font-bold text-brand-700">Context-based (When justified)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Smart, Safe, and SASA-Ready</h2>
                    <p>
                        We know that school finance is highly regulated. That’s why Knit’s AI is built on Explainable Logic. Every decision the system makes generates a "Decision Object"—a clear audit trail explaining why an action was taken.
                    </p>
                    <p>
                        By automating the routine "judgment calls" that take up 80% of a finance team's day, Knit allows your staff to focus on the 20% of cases that truly require human empathy and wisdom.
                    </p>
                    <p className="font-bold text-xl text-brand-900 mt-8 mb-4">
                        Knit: We don’t just send reminders. We manage your collections.
                    </p>

                    <div className="mt-12 bg-surface-50 border border-surface-200 p-8 rounded-2xl not-prose flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-brand-950 mb-2">Upgrade Your Infrastructure</h3>
                            <p className="text-slate-600 mb-6">
                                Stop setting alarms and start automating decisions. See how Knit can transform your school's financial operations.
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

export default BlogBeyondReminders;
