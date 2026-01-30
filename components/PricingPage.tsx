import React from 'react';
import Navigation from './Navigation';
import { Check, Zap, Server, Shield, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-brand-500/30">
            <Navigation />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 text-brand-700 text-[10px] font-mono uppercase tracking-widest mb-6 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-pulse"></span>
                    Flexible Pricing
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight mb-6">
                    Infrastructure that scales with you.
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Start automating your financial workflows today. No hidden fees, just transparent pricing based on your transaction volume.
                </p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Starter */}
                    <div className="bg-white border border-surface-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                        <h3 className="text-xl font-bold text-brand-950 mb-2">Starter</h3>
                        <p className="text-sm text-slate-500 mb-6">For small property managers and startups.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold text-brand-950">R0</span>
                            <span className="text-slate-500">/mo</span>
                        </div>
                        <div className="mb-8 font-mono text-xs text-brand-700 bg-brand-50 p-3 rounded border border-brand-100">
                            1.5% per successful transaction
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Up to 50 Units/Users',
                                'Basic Risk Assessment',
                                'Automated Collections (Email)',
                                'Next-day Payouts',
                                'Standard Support'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-brand-500 shrink-0" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.me/27659520478" target="_blank" className="block w-full py-3 px-4 bg-white border border-brand-200 text-brand-900 text-center font-bold text-sm rounded shadow-sm hover:bg-brand-50 transition-colors">
                            Get Started
                        </a>
                    </div>

                    {/* Growth */}
                    <div className="bg-brand-950 border border-brand-800 rounded-2xl p-8 shadow-2xl relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-brand-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Popular</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                        <p className="text-brand-200 text-sm mb-6">For growing lenders and schools.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold text-white">R1,500</span>
                            <span className="text-brand-400">/mo</span>
                        </div>
                        <div className="mb-8 font-mono text-xs text-brand-200 bg-brand-900 p-3 rounded border border-brand-800">
                            1.2% per successful transaction
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Up to 500 Units/Users',
                                'Advanced Neural Risk Engine',
                                'Multi-channel Collections (WhatsApp)',
                                'Same-day Payouts',
                                'Priority Support',
                                'API Access'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-brand-100">
                                    <Check size={16} className="text-brand-500 shrink-0" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.me/27659520478" target="_blank" className="block w-full py-3 px-4 bg-brand-600 text-white text-center font-bold text-sm rounded shadow-lg hover:bg-brand-500 transition-colors">
                            Start Free Trial
                        </a>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white border border-surface-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-brand-950 mb-2">Enterprise</h3>
                        <p className="text-sm text-slate-500 mb-6">For banks and large institutions.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold text-brand-950">Custom</span>
                        </div>
                        <div className="mb-8 font-mono text-xs text-slate-600 bg-surface-50 p-3 rounded border border-surface-200">
                            Volume-based discounts
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Unlimited Units',
                                'Custom Risk Models',
                                'Dedicated Account Manager',
                                'On-premise / VPC Deployment',
                                'SLA Guarantees',
                                'White-label Options'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                    <Check size={16} className="text-brand-500 shrink-0" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="https://wa.me/27659520478" target="_blank" className="block w-full py-3 px-4 bg-white border border-brand-200 text-brand-900 text-center font-bold text-sm rounded shadow-sm hover:bg-brand-50 transition-colors">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>

            {/* Feature Comparison */}
            <div className="bg-surface-50 py-24 border-t border-surface-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-950 mb-4">Compare Features</h2>
                        <p className="text-slate-600">Detailed breakdown of what's included.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-surface-200">
                                    <th className="py-4 px-6 text-slate-500 font-medium w-1/4">Feature</th>
                                    <th className="py-4 px-6 text-brand-950 font-bold w-1/4">Starter</th>
                                    <th className="py-4 px-6 text-brand-950 font-bold w-1/4 bg-brand-50/50">Growth</th>
                                    <th className="py-4 px-6 text-brand-950 font-bold w-1/4">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-200 bg-white">
                                <tr>
                                    <td className="py-4 px-6 font-medium text-slate-900 bg-surface-50/30">Integration</td>
                                    <td className="py-4 px-6 text-slate-600">Hosted Pages</td>
                                    <td className="py-4 px-6 text-brand-700 font-medium bg-brand-50/30">API + Embedded</td>
                                    <td className="py-4 px-6 text-slate-600">Full Custom</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-slate-900 bg-surface-50/30">Risk Engine</td>
                                    <td className="py-4 px-6 text-slate-600">Basic Scores</td>
                                    <td className="py-4 px-6 text-brand-700 font-medium bg-brand-50/30">Neural + Behavioral</td>
                                    <td className="py-4 px-6 text-slate-600">Custom Training</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-slate-900 bg-surface-50/30">Collections</td>
                                    <td className="py-4 px-6 text-slate-600">Email Reminders</td>
                                    <td className="py-4 px-6 text-brand-700 font-medium bg-brand-50/30">Omichannel (WA/SMS)</td>
                                    <td className="py-4 px-6 text-slate-600">Legal Escalations</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <footer className="bg-brand-950 text-slate-400 py-16 border-t border-brand-900">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xs text-slate-500">
                        &copy; 2024 Knit Financial Technologies Inc.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PricingPage;
