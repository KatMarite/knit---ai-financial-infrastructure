import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, TrendingUp, Users, Lock, Zap, ArrowRight, BarChart3, BookOpen, Landmark, ChevronRight, Check, Server, GitMerge, Database, FileText } from 'lucide-react';
import Navigation from './components/Navigation';
import RiskSimulator from './components/RiskSimulator';
import DesignSystem from './components/DesignSystem';
import KnitWorkflowDemo from './components/KnitWorkflowDemo';

// --- Animation Components ---

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CountUp = ({ end, duration = 2000, prefix = '' }: { end: number, duration?: number, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Ease out quart
      const ease = 1 - Math.pow(1 - percentage, 4);

      countRef.current = Math.floor(ease * end);
      setCount(countRef.current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}</span>;
};

// --- Main App ---

// Mock Data for Charts
const data = [
  { month: 'JAN', traditional: 4000, knit: 4200 },
  { month: 'FEB', traditional: 3000, knit: 4800 },
  { month: 'MAR', traditional: 2000, knit: 5100 },
  { month: 'APR', traditional: 2780, knit: 5900 },
  { month: 'MAY', traditional: 1890, knit: 6500 },
  { month: 'JUN', traditional: 2390, knit: 7200 },
];

const App: React.FC = () => {
  const [showDesignSystem, setShowDesignSystem] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900 font-sans overflow-x-hidden">
      {showDesignSystem && <DesignSystem onClose={() => setShowDesignSystem(false)} />}

      <div className={showDesignSystem ? "print:hidden" : ""}>
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white grid-bg border-b border-surface-200">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

              <div className="max-w-2xl">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-50 border border-surface-200 text-slate-600 text-[10px] font-mono uppercase tracking-widest mb-8 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-pulse"></span>
                    Predictive Revenue Infrastructure
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-tight text-brand-950 mb-8 leading-[1.05]">
                    Stop chasing payments.<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Predict them.</span>
                  </h1>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-light">
                    Knit is the AI financial operating system that helps institutions identify risk early and automate recovery without damaging relationships.
                  </p>
                </Reveal>

                <Reveal delay={300}>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
                    >
                      Start Integration <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white text-brand-950 border border-surface-300 rounded-sm text-sm font-medium hover:bg-surface-50 transition-all font-mono hover:border-surface-400">
                      Documentation
                    </button>
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <div className="mt-12 flex items-center gap-8 text-slate-400">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider hover:text-brand-600 transition-colors cursor-help" title="Service Organization Control 2">
                      <Shield size={14} /> SOC2 Type II
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider hover:text-brand-600 transition-colors cursor-help" title="Bank-grade encryption">
                      <Lock size={14} /> 256-bit Encryption
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Hero Visual - Dashboard Abstract */}
              <div className="relative perspective-1000">
                <div className="bg-white rounded border border-surface-200 shadow-2xl shadow-slate-200/50 p-1 relative z-10 animate-float">
                  <div className="bg-surface-50 border border-surface-100 rounded-sm overflow-hidden h-[450px] flex flex-col">
                    {/* Fake Browser Header */}
                    <div className="bg-white border-b border-surface-200 px-4 py-3 flex items-center justify-between shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/30"></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 bg-surface-50 px-2 py-0.5 rounded border border-surface-100">
                        <Lock size={8} /> overview.knit.fi
                      </div>
                      <div className="w-4"></div>
                    </div>

                    {/* Chart Area */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-end mb-8">
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider mb-2">Net Recovered Revenue</div>
                          <div className="text-4xl font-light text-brand-950 font-mono tracking-tighter tabular-nums">
                            <CountUp end={2845000} prefix="R " />
                          </div>
                        </div>
                        <div className="text-emerald-700 text-[10px] font-mono font-bold bg-emerald-50 px-2 py-1 rounded-sm border border-emerald-100 flex items-center gap-1 animate-pulse-slow">
                          <TrendingUp size={12} /> +14.2% YOY
                        </div>
                      </div>
                      <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorKnit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0f53d6" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#0f53d6" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis
                              dataKey="month"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                              dy={10}
                            />
                            <YAxis
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                            />
                            <Tooltip
                              contentStyle={{
                                borderRadius: '2px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                                fontFamily: 'IBM Plex Mono',
                                fontSize: '12px',
                                padding: '8px 12px'
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="knit"
                              stroke="#0f53d6"
                              strokeWidth={2}
                              fillOpacity={1}
                              fill="url(#colorKnit)"
                              activeDot={{ r: 4, strokeWidth: 0, fill: '#0f53d6' }}
                              animationDuration={2000}
                            />
                            <Area
                              type="monotone"
                              dataKey="traditional"
                              stroke="#cbd5e1"
                              strokeWidth={1}
                              strokeDasharray="4 4"
                              fill="transparent"
                              animationDuration={2500}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements behind chart */}
                <div className="absolute -top-3 -right-3 w-full h-full border border-dashed border-surface-300 rounded -z-10 opacity-50"></div>
                <div className="absolute -bottom-3 -left-3 w-full h-full border border-dashed border-surface-300 rounded -z-10 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section - Interactive AI Demo */}
        <section className="py-24 bg-surface-50 border-b border-surface-200 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal>
              <KnitWorkflowDemo />
            </Reveal>
          </div>
        </section>


        {/* AI Engine Section */}
        <section id="ai-engine" className="py-24 bg-brand-950 text-white relative overflow-hidden border-t border-brand-900">
          {/* Subtle grid on dark bg */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 pt-8">
                <Reveal>
                  <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-[10px] uppercase tracking-widest mb-6 border border-brand-800 px-3 py-1 rounded-full bg-brand-900/50 backdrop-blur-sm">
                    <Zap size={12} /> Neural Risk Engine
                  </div>
                  <h2 className="text-4xl font-semibold tracking-tight mb-6">
                    Immunize your balance sheet.
                  </h2>
                  <p className="text-slate-400 mb-10 leading-relaxed text-lg font-light">
                    Knit doesn't just collect; it predicts. By analyzing thousands of behavioral data points, our models detect friction before a payment is missed.
                  </p>
                </Reveal>

                <div className="space-y-6 border-t border-brand-800 pt-8">
                  {[
                    { title: "Behavioral Forensics", desc: "Detects subtle changes in payment velocity and engagement." },
                    { title: "Contextual Intervention", desc: "Deploys precise, empathetic nudges via the optimal channel." },
                    { title: "Regulatory Guardrails", desc: "Hard-coded compliance with NCR, POPIA, and fair lending laws." }
                  ].map((item, idx) => (
                    <Reveal key={idx} delay={idx * 150}>
                      <div className="flex gap-4 group cursor-default">
                        <div className="w-5 h-5 rounded-sm border border-brand-700 bg-brand-900 flex items-center justify-center shrink-0 mt-0.5 text-brand-400 group-hover:bg-brand-800 transition-colors group-hover:scale-110 duration-300">
                          <div className="w-1.5 h-1.5 bg-brand-400 rounded-full group-hover:animate-pulse"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm group-hover:text-brand-200 transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-xs mt-1 leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Component */}
              <div className="lg:col-span-7">
                <Reveal delay={300}>
                  <div className="relative group perspective-1000">
                    {/* Glow effect behind simulator */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-1000"></div>
                    <RiskSimulator />
                    <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-wider opacity-60">
                      <span className="flex items-center gap-2"><Server size={10} /> Live Inference</span>
                      <span>Gemini 1.5 Flash</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <Reveal>
                  <h2 className="text-2xl font-semibold text-brand-950 mb-3">Vertical-Specific Solutions</h2>
                  <p className="text-slate-600 text-sm">Tailored data models and workflows for high-stakes financial environments.</p>
                </Reveal>
              </div>
              <button className="text-brand-600 font-medium text-sm hover:underline flex items-center gap-1">
                View all industries <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={100}>
                <div className="group bg-white border border-surface-200 p-8 rounded-md hover:border-brand-300 transition-all shadow-sm hover:shadow-lg relative overflow-hidden h-full transform hover:-translate-y-1 duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-500 grayscale group-hover:scale-110 group-hover:rotate-6 origin-top-right">
                    <BookOpen size={160} />
                  </div>
                  <div className="w-10 h-10 bg-surface-50 text-slate-900 border border-surface-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-50 group-hover:border-brand-200 transition-colors">
                    <BookOpen size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-950 mb-2">Education & Institutions</h3>
                  <p className="text-slate-600 mb-8 text-sm leading-relaxed max-w-sm">
                    Secure tuition installment revenue without damaging family relationships. Focus on retention, not just collections.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> Tuition Assurance</li>
                    <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> Enrollment Retention</li>
                  </ul>
                  <div className="w-full h-px bg-surface-100 mb-6"></div>
                  <a href="#" className="inline-flex items-center text-brand-900 font-bold text-xs uppercase tracking-wider hover:text-brand-600 transition-colors">Explore Knit Edu &rarr;</a>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="group bg-white border border-surface-200 p-8 rounded-md hover:border-brand-300 transition-all shadow-sm hover:shadow-lg relative overflow-hidden h-full transform hover:-translate-y-1 duration-300">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-500 grayscale group-hover:scale-110 group-hover:rotate-6 origin-top-right">
                    <Landmark size={160} />
                  </div>
                  <div className="w-10 h-10 bg-surface-50 text-slate-900 border border-surface-200 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-50 group-hover:border-brand-200 transition-colors">
                    <Landmark size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-950 mb-2">Lenders & Fintechs</h3>
                  <p className="text-slate-600 mb-8 text-sm leading-relaxed max-w-sm">
                    Minimize Non-Performing Loans (NPLs) and cut operational costs with high-precision risk assessment.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> NPL Reduction</li>
                    <li className="flex items-center gap-3 text-xs text-slate-700 font-mono"><Check size={14} className="text-brand-600" /> Audit-Proof Compliance</li>
                  </ul>
                  <div className="w-full h-px bg-surface-100 mb-6"></div>
                  <a href="#" className="inline-flex items-center text-brand-900 font-bold text-xs uppercase tracking-wider hover:text-brand-600 transition-colors">Explore Knit Capital &rarr;</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="trust" className="py-20 bg-white border-t border-surface-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-12">Trusted by modern financial teams</h2>

              <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Text-based Logos for professional look */}
                <div className="text-xl font-bold text-slate-700 tracking-tight flex items-center gap-2 hover:scale-105 transition-transform cursor-default"><div className="w-5 h-5 bg-slate-400 rounded-sm"></div>EdFinance</div>
                <div className="text-xl font-bold text-slate-700 tracking-tight flex items-center gap-2 hover:scale-105 transition-transform cursor-default"><div className="w-5 h-5 bg-slate-400 rounded-full"></div>NovaBank</div>
                <div className="text-xl font-bold text-slate-700 tracking-tight flex items-center gap-2 hover:scale-105 transition-transform cursor-default"><div className="w-5 h-5 bg-slate-400 rotate-45"></div>ScholarPay</div>
                <div className="text-xl font-bold text-slate-700 tracking-tight flex items-center gap-2 hover:scale-105 transition-transform cursor-default"><div className="w-5 h-5 bg-slate-400 rounded-tr-lg"></div>LendTech</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Footer */}
        <section id="contact" className="bg-surface-50 py-24 border-t border-surface-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold text-brand-950 mb-6 tracking-tight">Ready to modernize your financial infrastructure?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-light">
                Schedule a technical consultation to see how Knit can integrate with your existing payment stack.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10 hover:shadow-brand-900/20 hover:-translate-y-0.5">
                  Book a Demo
                </button>
                <button className="px-8 py-4 bg-white text-brand-900 border border-surface-300 rounded-sm text-sm font-medium hover:bg-white hover:border-surface-400 transition-all hover:-translate-y-0.5">
                  Contact Sales
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="bg-brand-950 text-slate-400 py-16 border-t border-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2">
                <div className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <img src="/knit-logo.png" alt="Knit" className="h-14 w-auto brightness-0 invert" />
                </div>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  Next-generation financial infrastructure for the AI era.
                  <br /><br />
                  © 2024 Knit Financial Technologies Inc.
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 text-sm">Product</h4>
                <ul className="space-y-3 text-xs font-light">
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Platform Overview</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Risk Engine</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Integration</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
                <ul className="space-y-3 text-xs font-light">
                  <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
                <ul className="space-y-3 text-xs font-light">
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-brand-400 transition-colors">Status</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-brand-900 flex justify-between items-center text-[10px] font-mono text-slate-600">
              <div>San Francisco • New York • London</div>
              <div className="flex gap-4 items-center">
                <button onClick={() => setShowDesignSystem(true)} className="hover:text-brand-400 transition-colors flex items-center gap-1">
                  <FileText size={10} /> Design System
                </button>
                <div>System Status: <span className="text-emerald-500 animate-pulse">Operational</span></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;