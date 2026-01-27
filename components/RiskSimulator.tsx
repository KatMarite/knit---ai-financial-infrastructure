import React, { useState } from 'react';
import { analyzeRiskProfile } from '../services/geminiService';
import { RiskProfile, GeminiRiskAnalysis } from '../types';
import { Loader2, Terminal, Shield, FileJson, Activity, Maximize2, X, Copy, Check } from 'lucide-react';

const RiskSimulator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<GeminiRiskAnalysis | null>(null);
  const [viewMode, setViewMode] = useState<'visual' | 'json'>('visual');
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock profiles
  const profiles: RiskProfile[] = [
    {
      id: 'STU-2024-884',
      name: 'Sarah M.',
      type: 'Student',
      amountDue: 4500.00,
      daysOverdue: 15,
      paymentHistory: 'Good',
      lastContact: 'Email: Opened 2d ago'
    },
    {
      id: 'ENT-2024-102',
      name: 'TechStart Inc.',
      type: 'Enterprise',
      amountDue: 12500.00,
      daysOverdue: 45,
      paymentHistory: 'Poor',
      lastContact: 'Phone: No Answer'
    },
    {
      id: 'LND-2024-551',
      name: 'John D.',
      type: 'Loan',
      amountDue: 850.50,
      daysOverdue: 3,
      paymentHistory: 'Fair',
      lastContact: 'Portal: Login 24h ago'
    },
    {
      id: 'ENT-2024-892',
      name: 'Atlas Logistics',
      type: 'Enterprise',
      amountDue: 85000.00,
      daysOverdue: 2,
      paymentHistory: 'Good',
      lastContact: 'Email: Invoice Viewed'
    },
    {
      id: 'STU-2024-112',
      name: 'Michael B.',
      type: 'Student',
      amountDue: 1200.00,
      daysOverdue: 65,
      paymentHistory: 'Poor',
      lastContact: 'SMS: Opt-out'
    },
    {
      id: 'LND-2024-334',
      name: 'Elena R.',
      type: 'Loan',
      amountDue: 12500.00,
      daysOverdue: 10,
      paymentHistory: 'Good',
      lastContact: 'Portal: No login 30d'
    }
  ];

  const [selectedProfile, setSelectedProfile] = useState<RiskProfile>(profiles[0]);

  const handleRunSimulation = async () => {
    setLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzeRiskProfile(selectedProfile);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (analysis) {
      navigator.clipboard.writeText(JSON.stringify(analysis, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-md border border-surface-300 shadow-sm overflow-hidden flex flex-col h-full font-sans relative transition-all duration-300 hover:shadow-lg hover:border-surface-400">
      {/* Header */}
      <div className="bg-brand-950 px-4 py-3 flex justify-between items-center border-b border-brand-900">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-brand-400" />
          <span className="text-xs font-mono text-brand-100 tracking-wider uppercase">Risk_Engine_v2.4</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-amber-400 animate-pulse' : 'bg-emerald-500'}`}></div>
            <span className="text-[10px] font-mono text-brand-400 uppercase">{loading ? 'COMPUTING' : 'IDLE'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Panel: Inputs */}
        <div className="p-6 bg-surface-50 border-b lg:border-b-0 lg:border-r border-surface-200 lg:w-5/12 flex flex-col relative overflow-hidden">
          {/* Scanning Effect Overlay */}
          {loading && (
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="w-full h-1 bg-brand-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[scan_2s_linear_infinite]"></div>
            </div>
          )}

          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Select Input Data Source</label>
          <div className="space-y-2 mb-6 flex-grow overflow-y-auto max-h-[400px] pr-1">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProfile(p)}
                className={`w-full text-left group p-3 rounded-sm border transition-all relative overflow-hidden ${selectedProfile.id === p.id
                    ? 'bg-white border-brand-600 shadow-sm z-10'
                    : 'bg-surface-50 border-surface-200 hover:border-surface-300 hover:bg-white'
                  }`}
              >
                {selectedProfile.id === p.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-600"></div>}
                <div className="flex justify-between items-center mb-1 pl-2">
                  <span className="font-mono text-[10px] text-slate-400">{p.id}</span>
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm border ${selectedProfile.id === p.id ? 'bg-brand-50 text-brand-700 border-brand-100' : 'bg-surface-100 text-slate-500 border-surface-200'
                    }`}>{p.type}</span>
                </div>
                <div className="pl-2">
                  <div className="font-semibold text-sm text-slate-900 font-mono">{p.name}</div>
                  <div className="flex items-center justify-between mt-2 text-xs text-slate-600 font-mono tabular-nums">
                    <span>R {p.amountDue.toFixed(2)}</span>
                    <span className={p.daysOverdue > 30 ? 'text-red-600 font-bold' : 'text-slate-600'}>{p.daysOverdue}d OVD</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={loading}
            className="w-full bg-brand-900 hover:bg-brand-800 disabled:bg-surface-300 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wide py-3 rounded-sm shadow-sm transition-all flex items-center justify-center gap-2 overflow-hidden relative group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            {loading ? <Loader2 className="animate-spin" size={14} /> : <Activity size={14} />}
            {loading ? 'Processing Vectors...' : 'Execute Prediction'}
          </button>
        </div>

        {/* Right Panel: Data Output */}
        <div className="p-0 lg:w-7/12 bg-white flex flex-col relative">
          {/* View Controls */}
          {analysis && !loading && (
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10 animate-in fade-in zoom-in duration-300">
              <div className="flex bg-surface-100 rounded-sm p-0.5 border border-surface-200">
                <button
                  onClick={() => setViewMode('visual')}
                  className={`px-2 py-1 text-[10px] font-bold uppercase rounded-sm transition-all ${viewMode === 'visual' ? 'bg-white text-brand-900 shadow-sm' : 'text-slate-500'}`}
                >
                  Report
                </button>
                <button
                  onClick={() => setViewMode('json')}
                  className={`px-2 py-1 text-[10px] font-bold uppercase rounded-sm transition-all flex items-center gap-1 ${viewMode === 'json' ? 'bg-white text-brand-900 shadow-sm' : 'text-slate-500'}`}
                >
                  <FileJson size={10} /> JSON
                </button>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="p-1.5 bg-surface-50 border border-surface-200 text-slate-400 hover:text-brand-600 hover:bg-white rounded-sm transition-colors"
                title="Expand Full Response"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          )}

          {!analysis && !loading && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center opacity-50">
              <Shield size={48} className="mb-4 text-surface-300" strokeWidth={1} />
              <p className="text-sm text-slate-400 font-mono">System Ready.<br />Initiate analysis sequence.</p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-6">
              <div className="font-mono text-xs text-brand-600 animate-pulse">Running Inference...</div>
              <div className="w-48 h-1 bg-surface-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-600 animate-[shimmer_1.5s_infinite]"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 space-y-1 text-center">
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-0">&gt; Fetching behavioral history</div>
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">&gt; Analyzing payment velocity</div>
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">&gt; Generating intervention strategy</div>
              </div>
            </div>
          )}

          {analysis && !loading && (
            <div className="flex-1 overflow-auto p-6 animate-in fade-in duration-500">

              {viewMode === 'visual' ? (
                <>
                  {/* Visual Mode */}
                  <div className="flex items-end justify-between border-b border-surface-100 pb-6 mb-6">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 tracking-wider">Risk Probability Score</div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-6xl font-mono font-light text-brand-950 tracking-tighter tabular-nums animate-in zoom-in duration-300">{analysis.riskScore}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-mono text-slate-400">/ 100</span>
                          <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-sm mt-1 border animate-in slide-in-from-left-2 duration-300 delay-100 ${analysis.riskLevel === 'High' || analysis.riskLevel === 'Critical'
                              ? 'bg-red-50 text-red-700 border-red-100'
                              : 'bg-amber-50 text-amber-700 border-amber-100'
                            }`}>
                            {analysis.riskLevel} Level
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Model Prediction</h4>
                      <p className="text-sm text-slate-800 font-medium leading-relaxed font-sans border-l-2 border-brand-500 pl-3">
                        {analysis.prediction}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
                      <div className="bg-surface-50 p-4 rounded-sm border border-surface-200">
                        <h4 className="text-[10px] font-bold text-brand-800 uppercase tracking-widest mb-2">Recommended Strategy</h4>
                        <p className="text-xs text-brand-900 font-mono leading-relaxed">{analysis.interventionStrategy}</p>
                      </div>
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Generated Intervention</h4>
                      <div className="bg-white border border-surface-300 p-4 rounded-sm shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-slate-200"></div>
                        <p className="text-xs text-slate-600 font-mono italic pl-2">
                          "{analysis.draftedMessage}"
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // JSON Mode
                <div className="bg-surface-50 p-4 rounded-sm border border-surface-200 font-mono text-xs text-slate-600 overflow-x-auto animate-in fade-in duration-300">
                  <pre>{`{
  "timestamp": "${new Date().toISOString()}",
  "entity_id": "${selectedProfile.id}",
  "analysis": {
    "risk_score": ${analysis.riskScore},
    "risk_level": "${analysis.riskLevel}",
    "prediction_vector": "${analysis.prediction}",
    "strategy_code": "SOFT_RESTRUCTURE_V2",
    "generated_content": {
      "channel": "SMS/EMAIL",
      "body": "${analysis.draftedMessage}"
    }
  }
}`}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showModal && analysis && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden border border-surface-200 flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-4 py-3 border-b border-surface-200 bg-surface-50">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-brand-600" />
                <span className="font-mono text-sm font-semibold text-slate-700">Gemini API Response Object</span>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-slate-900 text-brand-100 font-mono text-xs">
              <pre className="whitespace-pre-wrap break-all">
                {JSON.stringify(analysis, null, 2)}
              </pre>
            </div>
            <div className="px-4 py-3 border-t border-surface-200 bg-white flex justify-end gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-600 hover:text-brand-600 hover:bg-surface-50 rounded border border-surface-200 transition-colors"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied ? 'Copied to Clipboard' : 'Copy JSON'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 text-xs font-bold text-white bg-brand-900 hover:bg-brand-800 rounded shadow-sm transition-colors uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskSimulator;