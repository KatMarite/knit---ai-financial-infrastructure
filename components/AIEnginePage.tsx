import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { ShieldCheck, Database, BrainCircuit, Users, Lock, FileText, CheckCircle2, AlertTriangle, ArrowRight, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const InteractiveApprovalCard = () => {
    const [status, setStatus] = useState<'pending' | 'approved'>('pending');

    if (status === 'approved') {
        return (
            <div className="p-8 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                    <Check size={24} />
                </div>
                <h4 className="text-emerald-900 font-bold mb-1">Transaction Verified</h4>
                <p className="text-sm text-slate-500">Posted with GL Code 6040</p>
                <button
                    onClick={() => setStatus('pending')}
                    className="mt-4 text-xs text-brand-600 hover:underline"
                >
                    Undo
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-4 animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-4 p-3 bg-brand-50/50 rounded border border-brand-100">
                <div className="flex-1">
                    <div className="text-xs text-slate-500 mb-1">Transaction</div>
                    <div className="font-medium text-slate-900">R 4,250.00 &bull; AWS Web Svcs</div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-slate-500 mb-1">AI Suggestion</div>
                    <div className="font-mono text-xs text-brand-700 bg-brand-100 px-2 py-1 rounded">
                        GL: 6040 (Software)
                        <br />
                        Conf: 88%
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="flex-1 bg-white border border-surface-300 text-slate-600 py-2 rounded text-sm font-medium hover:bg-surface-50 transition-colors">
                    Edit
                </button>
                <button
                    onClick={() => setStatus('approved')}
                    className="flex-1 bg-brand-600 text-white py-2 rounded text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm"
                >
                    Approve
                </button>
            </div>
        </div>
    );
};

const NeuralBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
        const numNodes = 30; // Number of nodes

        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            // Update and draw nodes
            ctx.fillStyle = 'rgba(99, 102, 241, 0.2)'; // Brand colorish
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connections
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (canvas) {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};



const AIEnginePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none"></div>
                {/* Neural Background Animation */}
                <NeuralBackground />
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-surface-200/40 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
                                <ShieldCheck size={14} />
                                <span>Enterprise-Grade Architecture</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight mb-6">
                                The Knit AI Engine
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Knit has built a rock solid liquidity, payments and recovery engine to alleviate school managers and bursars from manual work, improve their time by up to 50%. We’ve worked with multiple schools to refine our AI and make it fit for school’s purpose.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 1: Human-in-the-Loop (Was Core Capabilities) */}
            <section className="py-20 bg-white border-t border-surface-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 text-brand-600 font-semibold mb-4">
                                        <Users size={20} />
                                        <span>Human-in-the-Loop Control</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-950 mb-6">You Are Always the Pilot.</h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Knit is designed as a co-pilot, not a replacement for financial oversight.
                                        Our "Human-in-the-Loop" architecture ensures that critical decisions always remain in your control.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "AI Proposals require one-click approval (can be batched)",
                                            "Full audit trail of what was AI-suggested vs. Human-edited",
                                            "Confidence thresholds are configurable by your risk team",
                                            "Ability to rollback any automated action instantly"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => navigate('/security')}
                                        className="bg-brand-900 text-white px-6 py-3 rounded font-medium hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20"
                                    >
                                        Read Our Security Whitepaper
                                    </button>
                                </div>

                                <div className="flex-1 w-full max-w-md">
                                    <div className="bg-white rounded-xl shadow-xl border border-surface-200 overflow-hidden relative">
                                        <div className="bg-surface-50 px-4 py-3 border-b border-surface-200 flex justify-between items-center">
                                            <span className="text-xs font-mono text-slate-500">APPROVAL_QUEUE.tsx</span>
                                            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
                                                Review Needed
                                            </span>
                                        </div>
                                        <InteractiveApprovalCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>







            <Footer />
            <style>{`
            @keyframes pulse-slow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            @keyframes slide-up-fade {
                 from { opacity: 0; transform: translateY(10px); }
                 to { opacity: 1; transform: translateY(0); }
            }
            .animate-pulse-slow {
                animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes flow-down {
                0% { top: -10%; opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { top: 110%; opacity: 0; }
            }
            .animate-flow-down {
                animation: flow-down 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            .animate-slide-up-fade {
                animation: slide-up-fade 0.5s ease-out forwards;
            }
            `}</style>
        </div>
    );
};

export default AIEnginePage;
