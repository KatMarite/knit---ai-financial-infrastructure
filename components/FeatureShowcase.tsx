import React, { useState, useEffect, useRef } from 'react';
import { Zap, Server, Shield, MessageSquare, CheckCircle, AlertTriangle, User, CreditCard, Activity, Lock, Settings } from 'lucide-react';

const FeatureShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalTabs = 5;
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

    const features = [
        {
            title: '1. Describe your school',
            desc: 'Knit’s AI learns how your school operates — student count, fee structures, payment behavior, and historical collection patterns.',
            icon: <Settings size={20} />,
            visual: (
                <div className="bg-surface-950 p-6 rounded-lg text-white font-mono text-xs h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-auto text-white/50">config.yaml</span>
                    </div>
                    <div className="space-y-2 text-blue-300">
                        <p><span className="text-purple-400">business_type:</span> <span className="text-green-400">"education"</span></p>
                        <p><span className="text-purple-400">installment_model:</span> <span className="text-green-400">"monthly"</span></p>
                        <p><span className="text-purple-400">interest_rate:</span> <span className="text-orange-400">0.05</span></p>
                        <p><span className="text-purple-400">collection_strategy:</span></p>
                        <div className="pl-4 border-l border-white/20">
                            <p>primary: <span className="text-green-400">"debit_order"</span></p>
                            <p>fallback: <span className="text-green-400">"pay_link"</span></p>
                        </div>
                        <p className="animate-pulse">_</p>
                    </div>
                    <div className="mt-auto pt-4 flex gap-2">
                        <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30">Valid Configuration</div>
                    </div>
                </div>
            )
        },
        {
            title: '2. Predict parent payment behavior',
            desc: 'Knit segments parents by likelihood to pay — distinguishing late-but-reliable families from high-risk delinquencies.',
            icon: <User size={20} />,
            visual: (
                <div className="bg-slate-900 p-6 rounded-lg text-white h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl">👤</div>
                        <div>
                            <h4 className="text-lg font-bold">Applicant #8492</h4>
                            <p className="text-slate-400 text-sm">ID Verification: <span className="text-green-400">Verified</span></p>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="text-3xl font-bold text-emerald-400">94/100</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">Credit Score</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-3 rounded border border-slate-700">
                            <div className="text-xs text-slate-500 mb-1">Affordability Index</div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[85%]"></div>
                            </div>
                            <div className="text-right text-xs mt-1 text-blue-400">High</div>
                        </div>
                        <div className="bg-slate-800 p-3 rounded border border-slate-700">
                            <div className="text-xs text-slate-500 mb-1">Fraud Probability</div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[2%]"></div>
                            </div>
                            <div className="text-right text-xs mt-1 text-emerald-400">Low (0.2%)</div>
                        </div>
                    </div>

                    <div className="mt-6 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded flex items-center gap-2 text-emerald-400 text-sm">
                        <CheckCircle size={16} /> Automated Approval Recommended
                    </div>
                </div>
            )
        },
        {
            title: '3. Digitise school fee payments',
            desc: 'Set up digital payment rails to replace EFTs, reduce reconciliation, and enable automated follow-ups.',
            icon: <CreditCard size={20} />,
            visual: (
                <div className="bg-[#0f172a] p-6 rounded-lg text-white h-full flex flex-col relative">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    <h4 className="text-sm font-semibold text-slate-400 mb-4 z-10">Transaction Flow</h4>

                    <div className="space-y-4 z-10">
                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">1</div>
                            <div className="flex-1">
                                <div className="text-sm font-medium">Debit Order Initiated</div>
                                <div className="text-xs text-slate-500">Scheduled: 25th Monthly</div>
                            </div>
                            <Activity size={16} className="text-blue-500 animate-pulse" />
                        </div>

                        <div className="flex justify-center h-4">
                            <div className="w-0.5 bg-slate-700"></div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">2</div>
                            <div className="flex-1">
                                <div className="text-sm font-medium">Insufficient Funds</div>
                                <div className="text-xs text-slate-500">Error Code: R01</div>
                            </div>
                            <AlertTriangle size={16} className="text-orange-500" />
                        </div>

                        <div className="flex justify-center h-4">
                            <div className="w-0.5 bg-slate-700"></div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">3</div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-emerald-400">PayLink Triggered (WhatsApp)</div>
                                <div className="text-xs text-emerald-500/70">Auto-Recovered (+15min)</div>
                            </div>
                            <Zap size={16} className="text-emerald-400" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: '4. Contextual collections and recoveries',
            desc: 'Knit’s AI decides who to follow up, how, and when — setting up payment plans, adjusting tone, and reducing delinquencies automatically.',
            icon: <MessageSquare size={20} />,
            visual: (
                <div className="bg-white rounded-lg h-full overflow-hidden flex flex-col border border-slate-200 shadow-xl">
                    <div className="bg-emerald-600 p-3 flex items-center gap-3 text-white shadow-md z-10">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">K</div>
                        <div>
                            <div className="font-semibold text-sm">Knit Assistant</div>
                            <div className="text-[10px] text-emerald-100">Active now</div>
                        </div>
                    </div>

                    <div className="flex-1 bg-[#e5ddd5] p-4 flex flex-col gap-3 overflow-hidden relative">
                        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        <div className="bg-white p-2 rounded-lg rounded-tl-none self-start max-w-[80%] shadow-sm text-xs text-slate-800 z-10">
                            Hi John, we noticed your payment for this month failed. Is everything okay?
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:02 AM</div>
                        </div>

                        <div className="bg-[#dcf8c6] p-2 rounded-lg rounded-tr-none self-end max-w-[80%] shadow-sm text-xs text-slate-800 z-10">
                            Yeah tough month. Can I pay half now?
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:05 AM</div>
                        </div>

                        <div className="bg-white p-2 rounded-lg rounded-tl-none self-start max-w-[80%] shadow-sm text-xs text-slate-800 z-10">
                            I understand. I can authorize a 50% split payment plan. Shall I send the link for the first half?
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:05 AM</div>
                        </div>

                        <div className="bg-[#dcf8c6] p-2 rounded-lg rounded-tr-none self-end max-w-[80%] shadow-sm text-xs text-slate-800 z-10">
                            Yes please.
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:06 AM</div>
                        </div>
                    </div>

                    <div className="p-3 bg-gray-50 border-t border-gray-200">
                        <div className="h-8 bg-white border border-gray-300 rounded-full w-full opacity-50"></div>
                    </div>
                </div>
            )
        },
        {
            title: '5. Built-in compliance, enforced by AI',
            desc: 'Knit helps schools stay compliant with POPIA, SASA, and NCR requirements — applying policy consistently and reducing legal risk.',
            icon: <Shield size={20} />,
            visual: (
                <div className="bg-slate-900 p-8 rounded-lg text-white h-full flex flex-col items-center justify-center relative overlow-hidden">

                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <Shield size={200} />
                    </div>

                    <div className="w-full space-y-4 max-w-sm relative z-10">
                        <div className="flex items-center justify-between p-4 bg-slate-800 rounded border-l-4 border-emerald-500 shadow-lg transform translate-x-4">
                            <span className="font-semibold text-sm">POPIA Data Privacy</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/30">Compliant</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-800 rounded border-l-4 border-emerald-500 shadow-lg transform -translate-x-2">
                            <span className="font-semibold text-sm">NCR Regulations</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/30">Compliant</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-800 rounded border-l-4 border-emerald-500 shadow-lg transform translate-x-2">
                            <span className="font-semibold text-sm">Audit Trails</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/30">Active</span>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4 text-xs text-slate-500 font-mono">
                        <div className="flex items-center gap-1"><Lock size={12} /> 256-bit Encrypted</div>
                    </div>
                </div>
            )
        },
    ];

    useEffect(() => {
        if (isPaused) return;

        autoplayRef.current = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % totalTabs);
        }, 5000); // 5 seconds per slide

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [isPaused, totalTabs]);

    const handleManualClick = (index: number) => {
        setActiveTab(index);
        setIsPaused(true); // Pause autoplay on user interaction
        // Optionally restart autoplay after some time? For now, sticky selection is usually better UX.
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column: Navigation / Text */}
            <div className="lg:col-span-5 pt-4">
                <div className="space-y-2">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleManualClick(idx)}
                            className={`
                group cursor-pointer p-4 rounded-xl transition-all duration-300 relative
                ${activeTab === idx ? 'bg-surface-50/10' : 'hover:bg-brand-900/50'}
              `}
                        >
                            {/* Progress Bar for Active Tab */}
                            {activeTab === idx && !isPaused && (
                                <div className="absolute bottom-0 left-0 h-0.5 bg-brand-400 transition-all duration-5000 ease-linear w-full"
                                    key={activeTab} // Force re-render to restart animation
                                    style={{
                                        animation: 'shrink 5s linear forwards',
                                        width: '100%'
                                    }}
                                />
                            )}
                            {/* Static Active Border if Paused */}
                            {activeTab === idx && isPaused && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-400 rounded-l-xl"></div>
                            )}

                            <div className="flex gap-4">
                                {/* Icon Box */}
                                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300
                  ${activeTab === idx ? 'bg-brand-400 text-brand-950' : 'bg-brand-900 text-brand-400 group-hover:bg-brand-800'}
                `}>
                                    {feature.icon || <div className="w-1.5 h-1.5 bg-current rounded-full"></div>}
                                </div>

                                <div>
                                    <h4 className={`
                    font-semibold text-sm transition-colors duration-300
                    ${activeTab === idx ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}
                  `}>
                                        {feature.title}
                                    </h4>
                                    <p className={`
                    text-xs mt-2 leading-relaxed transition-all duration-300
                    ${activeTab === idx ? 'text-slate-300 opacity-100 max-h-20' : 'text-slate-500 opacity-0 max-h-0 overflow-hidden'}
                  `}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
            @keyframes shrink {
                from { width: 0%; }
                to { width: 100%; }
            }
        `}</style>
            </div>

            {/* Right Column: Visual/Screenshot */}
            <div className="lg:col-span-7">
                <div className="relative h-[350px] md:h-[500px] w-full perspective-1000">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`
                        absolute inset-0 transition-all duration-700 ease-in-out transform
                        ${activeTab === idx
                                    ? 'opacity-100 translate-x-0 rotate-y-0 z-20'
                                    : idx < activeTab
                                        ? 'opacity-0 -translate-x-12rotate-y-6 z-10'
                                        : 'opacity-0 translate-x-12 -rotate-y-6 z-10'
                                }
                    `}
                        >
                            <div className="w-full h-full bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl relative group">
                                {/* Browser/Window Bar */}
                                <div className="h-8 bg-[#0f172a] border-b border-slate-700 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                                    <div className="ml-4 text-[10px] text-slate-500 font-mono bg-slate-800/50 px-2 rounded">
                                        knit.fi / {feature.title.split(' ')[1].toLowerCase()}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="h-[calc(100%-2rem)] w-full">
                                    {feature.visual}
                                </div>

                                {/* Hover Overlay indicating click to focus if not active (though logic prevents this mostly) */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureShowcase;
