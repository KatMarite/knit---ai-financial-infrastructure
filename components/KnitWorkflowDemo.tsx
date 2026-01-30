
import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight, Check, Database, Shield, LayoutDashboard,
    MessageSquare, FileText, Settings, Users, Bell,
    ChevronRight, Lock, Server, Play, Zap, Search,
    MoreHorizontal, RefreshCw, Smartphone, Mail
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// --- Types ---
type Phase = 'input' | 'setup' | 'operate';

interface KnitWorkflowDemoProps {
    compact?: boolean;
    headless?: boolean;
}

const KnitWorkflowDemo: React.FC<KnitWorkflowDemoProps> = ({ compact = false, headless = false }) => {
    const [phase, setPhase] = useState<Phase>('input');
    // ... logic ...

    // Scale effect for compact mode
    const containerStyle = compact ? {
        transform: 'scale(0.55)',
        transformOrigin: 'top center',
        height: '180%', // Compensate for scale
        width: '182%', // Compensate for scale
    } : {};


    const [inputValue, setInputValue] = useState('');
    const [logs, setLogs] = useState<{ id: string; text: string; status: 'pending' | 'processing' | 'done'; time?: string }[]>([]);
    const [milestones, setMilestones] = useState<{ id: string; title: string; desc: string; status: 'pending' | 'processing' | 'done'; items: string[] }[]>([]);

    // Auto-typing effect for the input
    useEffect(() => {
        if (phase === 'input') {
            const text = "I run a private school in Centurion with 850 students. I need to automate tuition collection and manage annual enrollments.";
            let i = 0;
            const timer = setInterval(() => {
                setInputValue(text.substring(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(timer);
                    // Start processing logs after typing
                    setTimeout(() => startProcessing(), 1000);
                }
            }, 50);
            return () => clearInterval(timer);
        }
    }, [phase]);

    const startProcessing = () => {
        const steps = [
            { id: '1', text: 'Creating Student Schema', time: '0.4s' },
            { id: '2', text: 'Connecting Netcash Pipe', time: '1.2s' },
            { id: '3', text: 'Injecting Schools Act Guardrails', time: 'Processing...' },
        ];

        // Add logs sequentially
        let delay = 0;
        steps.forEach((step, index) => {
            setTimeout(() => {
                setLogs(prev => [...prev, { ...step, status: index === steps.length - 1 ? 'processing' : 'done' }]);
                if (index === steps.length - 1) {
                    // Transition to Setup phase after a delay
                    setTimeout(() => setPhase('setup'), 3000);
                }
            }, delay);
            delay += 1500;
        });
    };

    // Setup Phase Animation
    useEffect(() => {
        if (phase === 'setup') {
            const initialMilestones = [
                {
                    id: 'db',
                    title: 'Database Module',
                    desc: 'Provisioning relational storage for academic records & ledgers.',
                    status: 'pending' as const,
                    items: ['PostgreSQL Instance: school-db-primary-01', 'Schema: students, guardians, tuition, enrollment']
                },
                {
                    id: 'compliance',
                    title: 'Compliance Guardrail Module',
                    desc: 'Enforcing South African regulatory standards for educational institutions.',
                    status: 'pending' as const,
                    items: ['SASA (South African Schools Act)', 'FICA Verification Logic']
                },
                {
                    id: 'dashboard',
                    title: 'Bursar Dashboard Module',
                    desc: 'Configuring front-end management layer for finance teams.',
                    status: 'pending' as const,
                    items: []
                }
            ];
            setMilestones(initialMilestones);

            // Animate milestones
            let current = 0;
            const interval = setInterval(() => {
                setMilestones(prev => prev.map((m, idx) => {
                    if (idx === current) return { ...m, status: 'processing' };
                    if (idx < current) return { ...m, status: 'done' };
                    return m;
                }));

                current++;
                if (current > initialMilestones.length) {
                    clearInterval(interval);
                    setTimeout(() => setPhase('operate'), 2000);
                }
            }, 1500);
            return () => clearInterval(interval);
        }
    }, [phase]);

    return (
        <>
            <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
          .animate-slide-up { animation: slideUp 0.5s ease-out forwards; }
        `}</style>
            <div
                className={`w-full bg-surface-50 p-4 md:p-8 rounded-xl overflow-hidden ${!compact && 'border border-surface-200 shadow-2xl'} relative ${compact ? 'min-h-[750px] overflow-hidden' : 'min-h-[800px]'} flex flex-col font-sans transition-all duration-300`}
                style={compact ? { zoom: 0.6 } : {}}
            >
                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                {/* Top Bar Navigation (Mock) */}
                {!headless && (
                    <div className="bg-white border-b border-surface-200 px-6 py-4 flex items-center justify-between relative z-10 shrink-0 mb-8 rounded-t-lg">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                                    <Database size={18} />
                                </div>
                                <span className="font-bold text-brand-950 tracking-tight">Knit <span className="text-slate-400 font-normal">Architect</span></span>
                            </div>
                            <div className="h-6 w-px bg-surface-200 mx-2"></div>
                            <div className="hidden md:flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${phase === 'operate' ? 'bg-emerald-500 animate-pulse' : 'bg-brand-500'}`}></div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                                    {phase === 'input' ? 'System_Ready' : phase === 'setup' ? 'Provisioning_Active' : 'LiveINGEST'}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface-50 border border-surface-200 rounded text-[10px] font-mono text-slate-500">
                                Region: <span className="font-bold text-brand-900">ZA-NORTH-1</span>
                            </div>
                            <div className="w-8 h-8 bg-purple-100 rounded-full border border-purple-200 flex items-center justify-center text-purple-700">
                                <Users size={16} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="flex-1 relative z-10 max-w-6xl mx-auto w-full flex flex-col justify-center">

                    {/* PHASE 1: INPUT */}
                    {phase === 'input' && (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full max-w-3xl mx-auto">
                            <div className="flex justify-center mb-8">
                                <span className="px-4 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-mono font-medium border border-brand-100 flex items-center gap-2">
                                    <Settings size={12} className="animate-spin-slow" /> ARCHITECT AGENT ACTIVE
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-950 mb-6 tracking-tight">
                                Tell us about your business.
                            </h1>
                            <p className="text-center text-slate-500 mb-12 text-lg font-light max-w-xl mx-auto">
                                Knit will architect the infrastructure, compliance, and logic automatically for your business.
                            </p>

                            <div className="bg-white p-2 rounded-xl border border-surface-300 shadow-xl shadow-brand-900/5 mb-6 relative group">
                                <div className="flex items-center gap-4 px-4 py-3">
                                    <ArrowRight className="text-brand-500 shrink-0" size={20} />
                                    <input
                                        type="text"
                                        readOnly
                                        value={inputValue}
                                        className="w-full text-lg md:text-xl text-brand-950 placeholder:text-slate-300 border-none focus:ring-0 px-0"
                                        placeholder="Describe your business case..."
                                    />
                                    <button className="bg-brand-600 text-white p-3 rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between text-[10px] font-mono text-slate-400 px-4 mb-16">
                                <span>CONTEXT: EDUCATION_K12_SA</span>
                                <span>TOKEN COST: ~0.04 ZAR</span>
                            </div>

                            {/* Logs Card */}
                            {logs.length > 0 && (
                                <div className="bg-white rounded-xl border border-surface-200 shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-surface-50 px-4 py-2 border-b border-surface-200 flex justify-between items-center">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-surface-300"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-surface-300"></div>
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-500">provisioning_log.out</span>
                                        <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> PROCESSING
                                        </span>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        {logs.map((log) => (
                                            <div key={log.id} className="flex gap-4 items-start animate-in fade-in slide-in-from-left-2 duration-300">
                                                <div className={`p-2 rounded-lg border ${log.status === 'done' ? 'bg-surface-50 border-surface-200 text-slate-400' : 'bg-brand-50 border-brand-100 text-brand-600'}`}>
                                                    {log.id === '1' && <Database size={16} />}
                                                    {log.id === '2' && <RefreshCw size={16} />}
                                                    {log.id === '3' && <Shield size={16} />}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className={`text-sm font-medium ${log.status === 'processing' ? 'text-brand-900' : 'text-slate-700'}`}>
                                                            {log.text}
                                                        </span>
                                                        <span className="text-[10px] font-mono text-slate-400">{log.time}</span>
                                                    </div>
                                                    {log.id === '1' && (
                                                        <div className="text-xs text-slate-500 font-mono">
                                                            Initializing PostgreSQL tables for 850 students. Mapping fields: <span className="bg-surface-100 text-brand-600 px-1 rounded">student_id</span>, <span className="bg-surface-100 text-brand-600 px-1 rounded">parent_kyc</span>
                                                        </div>
                                                    )}
                                                    {log.id === '2' && (
                                                        <div className="text-xs text-slate-500 font-mono">
                                                            Establishing secure debit order gateway. Verifying bank-grade service keys.
                                                        </div>
                                                    )}
                                                    {log.id === '3' && log.status === 'processing' && (
                                                        <div className="mt-2 flex gap-2">
                                                            <div className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">SASA_COMPLIANT</div>
                                                            <div className="text-[10px] bg-surface-100 text-slate-600 px-2 py-1 rounded border border-surface-200">AUTO_DRAFT</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* PHASE 2: SETUP (Milestones) */}
                    {phase === 'setup' && (
                        <div className="animate-in fade-in zoom-in-95 duration-700 w-full max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 text-[10px] font-mono uppercase tracking-widest mb-8 rounded-sm">
                                Phase 02
                            </div>
                            <h2 className="text-3xl font-bold text-brand-950 mb-12">Setting up your business</h2>

                            <div className="bg-white rounded-xl border border-surface-200 shadow-xl overflow-hidden p-8 relative">
                                <div className="absolute left-8 top-8 bottom-8 w-px bg-surface-100"></div>

                                <div className="space-y-12 relative z-10">
                                    {milestones.map((m, idx) => (
                                        <div key={m.id} className={`flex gap-6 ${m.status === 'pending' ? 'opacity-40' : 'opacity-100'} transition-opacity duration-500`}>
                                            <div className="shrink-0">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 relative bg-white transition-colors duration-300 ${m.status === 'done' ? 'border-brand-600 bg-brand-600 text-white' :
                                                    m.status === 'processing' ? 'border-brand-600 text-brand-600 animate-pulse' : 'border-surface-200 text-surface-300'
                                                    }`}>
                                                    {m.status === 'done' ? <Check size={16} /> : <div className="w-2 h-2 bg-current rounded-full"></div>}
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-semibold text-brand-950">{m.title}</h3>
                                                    {m.status === 'processing' && <span className="text-[10px] font-mono bg-brand-50 text-brand-600 px-2 py-1 rounded">PROVISIONING...</span>}
                                                    {m.status === 'done' && <span className="text-[10px] font-mono text-slate-400">0.82s</span>}
                                                </div>
                                                <p className="text-slate-600 mb-4 text-sm">{m.desc}</p>

                                                {m.items.length > 0 && (
                                                    <div className="bg-surface-50 rounded border border-surface-200 p-4 space-y-2">
                                                        {m.items.map((item, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-600">
                                                                <Check size={10} className="text-emerald-500" /> {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Specific badges for Compliance Module */}
                                                {m.id === 'compliance' && m.status !== 'pending' && (
                                                    <div className="flex gap-2 mt-4">
                                                        <span className="bg-brand-950 text-white px-2 py-0.5 rounded text-[10px] font-bold">NCR</span>
                                                        <span className="bg-brand-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">POPIA</span>
                                                    </div>
                                                )}

                                                {/* Skeleton for Dashboard Module */}
                                                {m.id === 'dashboard' && m.status === 'processing' && (
                                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                                        <div className="h-16 bg-surface-100 rounded animate-pulse"></div>
                                                        <div className="h-16 bg-surface-100 rounded animate-pulse"></div>
                                                        <div className="h-16 bg-surface-100 rounded animate-pulse"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Log output at bottom */}
                            <div className="mt-8 bg-surface-950 rounded-lg p-4 font-mono text-xs text-surface-400 h-32 overflow-hidden border border-surface-800 shadow-inner">
                                <div className="text-emerald-500 mb-1">[14:22:01] INFRA: Allocating VPC in region af-south-1</div>
                                <div className="text-brand-400 mb-1">[14:22:04] DATA: Initializing academic year clusters...</div>
                                <div className="text-slate-400 mb-1">[14:22:08] SEC: SSL certificates issued for *.centurion-edu.knit.cloud</div>
                                <div className="text-blue-400 mb-1 animate-pulse">[14:22:12] APP: Mounting bursar dashboard templates...</div>
                            </div>
                        </div>
                    )}

                    {/* PHASE 3: OPERATE (Dashboard) */}
                    {phase === 'operate' && (
                        <div className="animate-in fade-in zoom-in-95 duration-700 w-full">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-2xl font-bold text-brand-950">School Finance OS</div>
                                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Live</span>
                                </div>
                                <div className="flex gap-2 text-slate-400">
                                    <Search size={20} className="hover:text-brand-600 cursor-pointer" />
                                    <Bell size={20} className="hover:text-brand-600 cursor-pointer" />
                                    <div className="w-6 h-6 rounded-full bg-brand-100 overflow-hidden border border-brand-200">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                                    </div>
                                </div>
                            </div>

                            {/* Top Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl border border-surface-200 shadow-sm">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Annual Tuition Revenue</div>
                                    <div className="text-2xl font-bold text-brand-950">R 12.4M <span className="text-xs text-emerald-500 font-medium">+5.2%</span></div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-surface-200 shadow-sm">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Collection Rate</div>
                                    <div className="text-2xl font-bold text-brand-950">94% <span className="text-xs text-amber-500 font-medium">Target 95%</span></div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-surface-200 shadow-sm">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Outstanding Fees</div>
                                    <div className="text-2xl font-bold text-red-600">R 142k <span className="text-xs text-slate-400 font-normal">15 Accounts</span></div>
                                </div>
                                <div className="bg-brand-600 p-4 rounded-xl border border-brand-700 shadow-sm text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="text-[10px] uppercase tracking-wider text-brand-200 mb-1">System Health</div>
                                        <div className="text-xl font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> Optimized</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
                                {/* Left Col: Applications & List */}
                                <div className="lg:col-span-2 flex flex-col gap-6">
                                    {/* Applications */}
                                    <div className="bg-white rounded-xl border border-surface-200 p-6 flex-1">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="font-semibold text-brand-950 flex items-center gap-2">
                                                <LayoutDashboard size={18} className="text-brand-600" /> Learner Ledger
                                            </h3>
                                            <div className="text-xs text-brand-600 font-medium cursor-pointer">EXPORT CSV</div>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead className="bg-surface-50 text-slate-500 text-[10px] uppercase">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left font-medium">Grade</th>
                                                        <th className="px-4 py-3 text-left font-medium">Family</th>
                                                        <th className="px-4 py-3 text-left font-medium">Status</th>
                                                        <th className="px-4 py-3 text-right font-medium">Balance</th>
                                                        <th className="px-4 py-3"></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-surface-100">
                                                    {[
                                                        { unit: '4B', name: 'S. Naidoo', status: 'PAID', balance: '0.00', color: 'emerald' },
                                                        { unit: '5A', name: 'J. Smith', status: 'ARREARS', balance: '12,500', color: 'red' },
                                                        { unit: '2C', name: 'T. Mokoena', status: 'PAID', balance: '0.00', color: 'emerald' },
                                                        { unit: '7A', name: 'A. Van Wyk', status: 'PAID', balance: '0.00', color: 'emerald' },
                                                    ].map((row, i) => (
                                                        <tr key={i} className="hover:bg-surface-50 transition-colors">
                                                            <td className="px-4 py-3 font-mono text-slate-500">{row.unit}</td>
                                                            <td className="px-4 py-3 font-medium text-brand-950">{row.name}</td>
                                                            <td className="px-4 py-3">
                                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${row.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                                                                    {row.status}
                                                                </span>
                                                            </td>
                                                            <td className={`px-4 py-3 text-right font-mono ${row.color === 'red' ? 'text-red-600 font-bold' : 'text-slate-600'}`}>
                                                                R {row.balance}
                                                            </td>
                                                            <td className="px-4 py-3 text-slate-400"><MoreHorizontal size={14} /></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Col: Communication & Watchdog */}
                                <div className="flex flex-col gap-6">
                                    <div className="bg-white rounded-xl border border-surface-200 p-6">
                                        <h3 className="font-semibold text-brand-950 mb-4 flex items-center gap-2"><MessageSquare size={18} className="text-brand-600" /> Communication Hub</h3>
                                        <div className="space-y-4">
                                            <div className="bg-surface-50 p-3 rounded-lg border border-surface-100">
                                                <div className="flex justify-between mb-1">
                                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-950"><Smartphone size={12} className="text-emerald-500" /> WhatsApp Automation</div>
                                                    <span className="text-[10px] text-slate-400">08:00</span>
                                                </div>
                                                <p className="text-xs text-slate-600 italic">"Dear Parent, Term 1 fees for Learner 7A have been generated..."</p>
                                            </div>
                                            <div className="bg-surface-50 p-3 rounded-lg border border-surface-100">
                                                <div className="flex justify-between mb-1">
                                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-950"><Mail size={12} className="text-blue-500" /> Email Campaign</div>
                                                    <span className="text-[10px] text-slate-400">Queued</span>
                                                </div>
                                                <p className="text-xs text-slate-600 italic">Info: Sports Day moved to Friday 12th.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 rounded-xl border border-red-100 p-6 flex-1">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="font-semibold text-red-900 flex items-center gap-2"><Shield size={18} /> Watchdog Collections</h3>
                                            <span className="text-[10px] bg-red-200 text-red-800 px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-red-100 shadow-sm">
                                            <div className="flex justify-between text-xs text-red-800 font-bold mb-2">
                                                <span>Debt Recovery Queue</span>
                                                <span>3 CASES</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-slate-600">Acc 5A - Payment Plan Req</span>
                                                    <span className="text-red-600 font-bold">Urgent</span>
                                                </div>
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-slate-600">Acc 2C - Fee Reminder</span>
                                                    <span className="text-amber-600">Pending</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full mt-4 bg-brand-950 text-white text-xs font-bold py-2 rounded flex items-center justify-center gap-2 hover:bg-brand-900 transition-colors">
                                            <RefreshCw size={12} /> Sync Netcash
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Smart Notification Overlay */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-brand-950 text-white p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-lg w-full animte-in slide-in-from-bottom-10 fade-in duration-500">
                                <div className="w-10 h-10 rounded-lg bg-brand-800 flex items-center justify-center shrink-0">
                                    <Zap size={20} className="text-brand-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">I've identified <span className="text-brand-300 font-bold">3 potential late payers</span>; should I send a payment proposal?</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-3 py-2 rounded transition-colors" onClick={() => setPhase('input')}>
                                        Yes, Proceed
                                    </button>
                                    <button className="bg-transparent hover:bg-white/10 text-slate-400 text-xs font-bold px-3 py-2 rounded transition-colors" onClick={() => setPhase('input')}>
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Bottom Bar: Status */}
                <div className="mt-8 pt-4 border-t border-surface-200 flex justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider relative z-10 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        Orchestrator: Online
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Database size={10} /> Vector DB: Connected</span>
                        <span className="flex items-center gap-1"><Lock size={10} /> Encryption: AES-256</span>
                    </div>
                    <div>
                        Knit Platform © 2024
                    </div>
                </div>
            </div>
        </>
    );
};

export default KnitWorkflowDemo;
