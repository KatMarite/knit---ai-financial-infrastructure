import React, { useState, useEffect, useRef } from 'react';
import { Zap, Server, Shield, MessageSquare, CheckCircle, AlertTriangle, User, CreditCard, Activity, Lock, Settings, ArrowLeft, FileText, X, DollarSign, TrendingUp, Check } from 'lucide-react';

const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, [target]);
    return <>{count}</>;
};

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
                <div className="bg-surface-950 p-2 rounded-lg h-full overflow-hidden flex flex-col relative group">
                    <img
                        src="/feature-1-architecture-complete.png"
                        alt="School Architecture Configuration"
                        className={`w-full h-full object-cover rounded shadow-lg opacity-90 transition-opacity duration-1000 ${activeTab === 0 ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent pointer-events-none"></div>

                    {/* Overlay Animation: Status Terminal */}
                    {activeTab === 0 && (
                        <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl text-xs font-mono text-emerald-400 animate-slide-up-fade">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="opacity-75">System Status</span>
                            </div>
                            <div className="overflow-hidden whitespace-nowrap animate-typing w-[14ch]">
                                Configuration Loaded
                            </div>
                        </div>
                    )}
                </div>
            )
        },
        {
            title: '2. Predict parent payment behavior',
            desc: 'Knit segments parents by likelihood to pay — distinguishing late-but-reliable families from high-risk delinquencies.',
            icon: <User size={20} />,
            visual: (
                <div className="bg-surface-950 p-2 rounded-lg h-full overflow-hidden flex flex-col relative group">
                    <div className="w-full h-full bg-slate-50 rounded shadow-lg overflow-hidden relative flex flex-col font-sans">
                        {/* Header */}
                        <div className="bg-white border-b border-slate-200 p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2 text-slate-400">
                                <ArrowLeft size={16} />
                                <span className="text-sm font-medium">Back</span>
                            </div>
                            <div className="flex gap-3 text-slate-400">
                                <FileText size={18} className="hover:text-slate-600 cursor-pointer" />
                                <X size={18} className="hover:text-slate-600 cursor-pointer" />
                            </div>
                        </div>
                        <div className="bg-white px-6 pb-4 pt-2 shrink-0 border-b border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900">Decision Support</h3>
                            <div className="text-slate-500 text-sm font-medium">Sarah Jenkins</div>
                        </div>

                        {/* Content Scrollable */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-hide">
                            {/* Results Card */}
                            <div className={`bg-[#0f1048] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden transition-all duration-700 ${activeTab === 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
                                <div className="text-lg font-semibold mb-6">Results</div>
                                <div className="flex justify-between items-center relative z-10">
                                    {/* Left Stats */}
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="p-1.5 bg-indigo-900/50 rounded text-indigo-300"><DollarSign size={14} /></div>
                                                <span className="text-xl md:text-2xl font-bold">R2,762</span>
                                                <span className="text-[10px] md:text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-medium">+5.2%</span>
                                            </div>
                                            <div className="text-indigo-200/60 text-[10px] md:text-xs ml-1">Monthly Income Estimate</div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="p-1.5 bg-indigo-900/50 rounded text-indigo-300"><CheckCircle size={14} /></div>
                                                <span className="text-xl md:text-2xl font-bold">R1,704</span>
                                                <span className="text-[10px] md:text-xs bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded font-medium">Low</span>
                                            </div>
                                            <div className="text-indigo-200/60 text-[10px] md:text-xs ml-1">Disposable Income</div>
                                        </div>
                                    </div>

                                    {/* Center Gauge (Simplistic for CSS animation) */}
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shrink-0 mx-2">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="50%" cy="50%" r="40%" stroke="#312e81" strokeWidth="8" fill="transparent" />
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="40%"
                                                stroke="#10b981"
                                                strokeWidth="8"
                                                fill="transparent"
                                                strokeDasharray="251"
                                                strokeDashoffset={activeTab === 1 ? 251 - (251 * 0.65) : 251}
                                                strokeLinecap="round"
                                                className="transition-all duration-1000 ease-out delay-500"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className={`text-3xl md:text-4xl font-bold transition-all duration-700 delay-300 ${activeTab === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>65</span>
                                            <span className="text-[10px] text-indigo-300">Confidence %</span>
                                        </div>
                                        <div className={`absolute -bottom-4 bg-indigo-800/80 px-3 py-1 rounded-full text-xs font-medium text-emerald-300 transition-all duration-500 delay-700 ${activeTab === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                            Good
                                        </div>
                                    </div>

                                    {/* Right Stats */}
                                    <div className="space-y-6 text-right">
                                        <div>
                                            <div className="flex items-center justify-end gap-2 mb-1">
                                                <span className="text-xl md:text-2xl font-bold">146.7%</span>
                                                <span className="text-[10px] md:text-xs bg-rose-500/20 text-rose-400 px-1.5 py-0.5 rounded font-medium">High Risk</span>
                                                <div className="p-1.5 bg-indigo-900/50 rounded text-indigo-300"><TrendingUp size={14} /></div>
                                            </div>
                                            <div className="text-indigo-200/60 text-[10px] md:text-xs mr-1">Fee vs Income</div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-end gap-2 mb-1">
                                                <span className="text-xl md:text-2xl font-bold text-rose-400">RED</span>
                                                <div className="p-1.5 bg-indigo-900/50 rounded text-indigo-300"><AlertTriangle size={14} /></div>
                                            </div>
                                            <div className="text-indigo-200/60 text-[10px] md:text-xs mr-1">Risk Assessment</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decision Analysis */}
                            <div>
                                <h4 className={`font-semibold text-slate-800 mb-4 transition-opacity duration-500 delay-300 ${activeTab === 1 ? 'opacity-100' : 'opacity-0'}`}>Decision Analysis</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { id: 1, text: "Moderately consistent income patterns", color: "bg-emerald-500", delay: '0.4s' },
                                        { id: 2, text: "Rent and transport expenses are consistent", color: "bg-emerald-500", delay: '0.5s' },
                                        { id: 3, text: "School fee exceeds 147% of disposable income (high risk)", color: "bg-rose-500", delay: '0.6s' },
                                        { id: 4, text: "Adequate liquidity buffer maintained", color: "bg-emerald-500", delay: '0.7s' }
                                    ].map(item => (
                                        <div
                                            key={item.id}
                                            className={`bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex items-start gap-3 transition-all duration-500 ${activeTab === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                            style={{ transitionDelay: item.delay }}
                                        >
                                            <div className={`${item.color} text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5`}>{item.id}</div>
                                            <div className="text-[11px] text-slate-600 font-medium leading-tight">{item.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Metrics */}
                            <div className={`transition-all duration-500 delay-700 ${activeTab === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <h4 className="font-semibold text-slate-800 mb-4">Additional Metrics</h4>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm grid grid-cols-3 divide-x divide-slate-100">
                                    <div className="text-center px-2">
                                        <div className="text-lg md:text-xl font-bold text-slate-900">R624</div>
                                        <div className="text-[10px] text-slate-500 mt-1">Average Balance</div>
                                    </div>
                                    <div className="text-center px-2">
                                        <div className="text-lg md:text-xl font-bold text-slate-900">84%</div>
                                        <div className="text-[10px] text-slate-500 mt-1">Realization Score</div>
                                    </div>
                                    <div className="text-center px-2">
                                        <div className="text-lg md:text-xl font-bold text-slate-900">65%</div>
                                        <div className="text-[10px] text-slate-500 mt-1">Overall Confidence</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className={`bg-white border-t border-slate-100 p-4 flex gap-4 shrink-0 transition-all duration-500 delay-1000 ${activeTab === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                            <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-md font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <Check size={16} /> Accept Admission
                            </button>
                            <button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-md font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <X size={16} /> Decline Admission
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: '3. Digitise payments',
            desc: 'Set up digital payment rails to replace EFTs, reduce reconciliation, and enable automated follow-ups.',
            icon: <CreditCard size={20} />,
            visual: (
                <div className="bg-surface-950 p-2 rounded-lg h-full overflow-hidden flex flex-col relative group">
                    <img
                        src="/feature-3-tuition-fees.png"
                        alt="Tuition & Fees Interface"
                        className={`w-full h-full object-cover rounded shadow-lg opacity-90 transition-opacity duration-1000 ${activeTab === 2 ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent pointer-events-none"></div>

                    {/* Overlay: Payment Processing */}
                    {activeTab === 2 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-2xl rounded-xl p-4 border border-surface-200 animate-pop-in min-w-[200px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                    <Zap size={16} fill="currentColor" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">Payment Processed</div>
                                    <div className="text-[10px] text-slate-500">Just now via Stripe</div>
                                </div>
                            </div>
                            <div className="h-1 bg-surface-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 animate-grow-width w-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    )}
                </div>
            )
        },
        {
            title: '4. Contextual collections and recoveries',
            desc: 'Knit’s AI decides who to follow up, how, and when — setting up payment plans, adjusting tone, and reducing delinquencies automatically.',
            icon: <MessageSquare size={20} />,
            visual: (
                <div className="bg-surface-950 p-2 rounded-lg h-full overflow-hidden flex flex-col relative group">
                    <img
                        src="/feature-4-bursar-collections.png"
                        alt="Bursar & Collections Interface"
                        className={`w-full h-full object-cover rounded shadow-lg opacity-90 transition-opacity duration-1000 ${activeTab === 3 ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent pointer-events-none"></div>

                    {/* Overlay: AI Action */}
                    {activeTab === 3 && (
                        <div className="absolute top-20 right-10 bg-brand-900/90 backdrop-blur text-white p-3 rounded-lg shadow-xl border border-brand-700 animate-slide-left-fade max-w-[200px]">
                            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-brand-200 uppercase tracking-wider">
                                <MessageSquare size={12} /> AI Agent Action
                            </div>
                            <p className="text-xs text-white leading-relaxed">
                                "Sent gentle reminder to Parent #402 via WhatsApp"
                            </p>
                        </div>
                    )}
                </div>
            )
        },
        {
            title: '5. Compliance, built-in',
            desc: 'Knit helps schools stay compliant with POPIA, SASA, and NCR requirements — applying policy consistently and reducing legal risk.',
            icon: <Shield size={20} />,
            visual: (
                <div className="bg-surface-950 p-2 rounded-lg h-full overflow-hidden flex flex-col relative group">
                    <img
                        src="/feature-5-compliance-shield.png"
                        alt="Compliance Shield Interface"
                        className={`w-full h-full object-cover rounded shadow-lg opacity-90 transition-opacity duration-1000 ${activeTab === 4 ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent pointer-events-none"></div>

                    {/* Overlay: Scanning */}
                    {activeTab === 4 && (
                        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none animate-pulse">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan"></div>
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold border border-emerald-200 shadow-lg flex items-center gap-2 animate-slide-up-fade">
                                <Shield size={14} fill="currentColor" /> Policy Compliance Verified
                            </div>
                        </div>
                    )}
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column: Navigation / Text */}
            <div className="md:col-span-5 pt-4">
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
                    ${activeTab === idx ? 'text-slate-300 opacity-100 max-h-20 delay-100' : 'text-slate-500 opacity-0 max-h-0 overflow-hidden'}
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
            @keyframes subtle-zoom {
                from { transform: scale(1); }
                to { transform: scale(1.05); }
            }
            @keyframes slide-up-fade {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
             @keyframes slide-left-fade {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes pop-in {
                0% { transform: scale(0.8); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
            @keyframes grow-width {
                from { width: 0%; }
            }
            @keyframes typing {
                from { width: 0 }
                to { width: 100% }
            }
            @keyframes scan {
                0% { top: 0%; opacity: 0.5; }
                50% { opacity: 1; }
                100% { top: 100%; opacity: 0.5; }
            }
            .animate-subtle-zoom {
                animation: subtle-zoom 10s ease-out forwards;
            }
            .animate-slide-up-fade {
                animation: slide-up-fade 0.5s ease-out forwards;
            }
            .animate-slide-left-fade {
                animation: slide-left-fade 0.5s ease-out forwards;
            }
            .animate-pop-in {
                animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            }
            .animate-grow-width {
                transition: width 1s ease-out;
            }
            .animate-typing {
                animation: typing 2s steps(20, end);
            }
            .animate-scan {
                animation: scan 2s linear infinite;
            }
        `}</style>
            </div>

            {/* Right Column: Visual/Screenshot */}
            <div className="md:col-span-7">
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
