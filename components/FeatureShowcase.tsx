import React, { useState, useEffect, useRef } from 'react';
import { Zap, Server, Shield, MessageSquare, CheckCircle, AlertTriangle, User, CreditCard, Activity, Lock, Settings } from 'lucide-react';

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
                    <div className="w-full h-full bg-white rounded shadow-lg overflow-hidden relative flex flex-col">
                        <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl border border-slate-200 ${activeTab === 1 ? 'animate-pop-in' : ''}`}>👤</div>
                                <div>
                                    <h4 className={`text-lg font-bold text-slate-800 ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>Applicant #8492</h4>
                                    <p className={`text-slate-500 text-xs uppercase tracking-wide ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                                        ID Verification: <span className="text-emerald-600 font-bold animate-pulse">Verified</span>
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className={`text-3xl font-bold text-emerald-600 ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                                    {activeTab === 1 ? <Counter target={94} /> : '0'}/100
                                </div>
                                <div className={`text-[10px] text-slate-400 uppercase tracking-wider font-bold ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>Credit Score</div>
                            </div>
                        </div>

                        <div className="p-6 space-y-6 bg-slate-50 flex-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className={`bg-white p-4 rounded-lg border border-slate-200 shadow-sm ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                                    <div className="text-xs text-slate-500 mb-2 uppercase font-bold tracking-wider">Affordability Index</div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                                        <div className="h-full bg-blue-500 w-[85%] animate-grow-width" style={{ width: activeTab === 1 ? '85%' : '0%' }}></div>
                                    </div>
                                    <div className="text-right text-xs font-bold text-blue-600">High Capacity</div>
                                </div>
                                <div className={`bg-white p-4 rounded-lg border border-slate-200 shadow-sm ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                                    <div className="text-xs text-slate-500 mb-2 uppercase font-bold tracking-wider">Fraud Probability</div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                                        <div className="h-full bg-red-500 w-[2%] animate-grow-width" style={{ width: activeTab === 1 ? '2%' : '0%' }}></div>
                                    </div>
                                    <div className="text-right text-xs font-bold text-emerald-600">Low (0.2%)</div>
                                </div>
                            </div>

                            <div className={`p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3 text-emerald-700 text-sm font-medium ${activeTab === 1 ? 'animate-slide-up-fade' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                                <CheckCircle size={18} className="text-emerald-500" />
                                <span>Automated Approval Recommended</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: '3. Digitise school fee payments',
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
            title: '5. Built-in compliance, enforced by AI',
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
