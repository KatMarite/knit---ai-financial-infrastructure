import React from 'react';
import { X, Printer, Type, Palette, Layout } from 'lucide-react';

interface DesignSystemProps {
  onClose: () => void;
}

const DesignSystem: React.FC<DesignSystemProps> = ({ onClose }) => {
  const colors = {
    brand: [
      { name: '950', value: '#020617' },
      { name: '900', value: '#0f172a' },
      { name: '800', value: '#1e293b' },
      { name: '700', value: '#334155' },
      { name: '600', value: '#0f53d6' },
      { name: '500', value: '#3b82f6' },
      { name: '400', value: '#60a5fa' },
      { name: '100', value: '#dbeafe' },
      { name: '50', value: '#eff6ff' },
    ],
    surface: [
      { name: '50', value: '#f8fafc' },
      { name: '100', value: '#f1f5f9' },
      { name: '200', value: '#e2e8f0' },
      { name: '300', value: '#cbd5e1' },
    ]
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-300 print:relative print:inset-auto print:h-auto print:overflow-visible print:bg-white print:z-auto">
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          @page { margin: 10mm; size: auto; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body { height: auto !important; overflow: visible !important; }
        }
      `}} />

      {/* No-print Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-200 px-8 py-4 flex justify-between items-center print:hidden">
        <h2 className="text-lg font-semibold text-brand-950">Design System Export Preview</h2>
        <div className="flex gap-4">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-colors shadow-sm"
          >
            <Printer size={16} /> Print / Save as PDF
          </button>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-surface-100 rounded-sm transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Printable Content */}
      <div className="max-w-[210mm] mx-auto bg-white p-[10mm] min-h-screen print:max-w-none print:p-0 print:m-0 print:w-full">

        {/* Header */}
        <header className="mb-16 border-b border-brand-950 pb-8">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/knit-logo.png" alt="Knit Logo" className="h-16 w-auto" />
              </div>
              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Design System v1.0</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400 font-mono">Generated: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </header>

        {/* Typography */}
        <section className="mb-16 break-inside-avoid">
          <div className="flex items-center gap-2 mb-8 border-b border-surface-200 pb-2">
            <Type className="text-brand-600" size={20} />
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Typography</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-2 text-xs text-slate-400 font-mono uppercase tracking-wider">Primary Font</div>
              <div className="text-3xl font-bold text-brand-950 mb-6 font-sans">Inter</div>
              <div className="space-y-6 font-sans">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400 font-mono">Light 300</span>
                  <span className="font-light text-2xl text-slate-900">The quick brown fox jumps over the lazy dog.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400 font-mono">Regular 400</span>
                  <span className="font-normal text-2xl text-slate-900">The quick brown fox jumps over the lazy dog.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400 font-mono">Medium 500</span>
                  <span className="font-medium text-2xl text-slate-900">The quick brown fox jumps over the lazy dog.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400 font-mono">Bold 700</span>
                  <span className="font-bold text-2xl text-slate-900">The quick brown fox jumps over the lazy dog.</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs text-slate-400 font-mono uppercase tracking-wider">Monospace Font</div>
              <div className="text-3xl font-mono font-medium text-brand-950 mb-6">IBM Plex Mono</div>
              <div className="space-y-6 font-mono">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400">Regular 400</span>
                  <span className="font-normal text-xl text-slate-800">return "Hello World";</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400">Medium 500</span>
                  <span className="font-medium text-xl text-slate-800">const risk = 0.95;</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400">SemiBold 600</span>
                  <span className="font-semibold text-xl text-slate-800">import &#123; Knit &#125; from '@knit/sdk';</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16 break-inside-avoid">
          <div className="flex items-center gap-2 mb-8 border-b border-surface-200 pb-2">
            <Palette className="text-brand-600" size={20} />
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Color Palette</h3>
          </div>

          <div className="mb-10 break-inside-avoid">
            <h4 className="text-sm font-semibold text-brand-950 mb-4 font-mono">Brand Colors</h4>
            <div className="grid grid-cols-5 gap-4">
              {colors.brand.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div
                    className="h-16 w-full rounded-sm shadow-sm border border-black/5"
                    style={{ backgroundColor: c.value }}
                  ></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Brand-{c.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono uppercase">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="break-inside-avoid">
            <h4 className="text-sm font-semibold text-brand-950 mb-4 font-mono">Surface Colors</h4>
            <div className="grid grid-cols-5 gap-4">
              {colors.surface.map((c) => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div
                    className="h-16 w-full rounded-sm shadow-sm border border-black/5"
                    style={{ backgroundColor: c.value }}
                  ></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Surface-{c.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono uppercase">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16 break-inside-avoid">
          <div className="flex items-center gap-2 mb-8 border-b border-surface-200 pb-2">
            <Layout className="text-brand-600" size={20} />
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">UI Components</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-semibold text-brand-950 mb-6 font-mono">Buttons</h4>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <button className="px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium">
                      Primary Action
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">bg-brand-900 text-white rounded-sm</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <button className="px-8 py-4 bg-white text-brand-950 border border-surface-300 rounded-sm text-sm font-medium">
                      Secondary Action
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">bg-white border-surface-300 text-brand-950</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-brand-950 mb-6 font-mono">Badges & Tags</h4>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <span className="px-3 py-1 bg-surface-50 border border-surface-200 text-slate-600 text-[10px] font-mono uppercase tracking-widest rounded-full">
                      Neutral Tag
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">bg-surface-50 border-surface-200</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <span className="text-brand-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      Action Link &rarr;
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">text-brand-600 font-bold uppercase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section - Icons */}
        <section className="mb-16 break-inside-avoid">
          <div className="flex items-center gap-2 mb-8 border-b border-surface-200 pb-2">
            <Layout className="text-brand-600" size={20} />
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Iconography</h3>
          </div>
          <p className="text-sm text-slate-600 mb-6">Using Lucide React v0.454.0 with 1.5px stroke width for consistency.</p>
          <div className="flex gap-8">
            <div className="w-12 h-12 flex items-center justify-center border border-surface-200 rounded text-slate-600"><Layout size={24} strokeWidth={1.5} /></div>
            <div className="w-12 h-12 flex items-center justify-center border border-surface-200 rounded text-slate-600"><Palette size={24} strokeWidth={1.5} /></div>
            <div className="w-12 h-12 flex items-center justify-center border border-surface-200 rounded text-slate-600"><Printer size={24} strokeWidth={1.5} /></div>
            <div className="w-12 h-12 flex items-center justify-center border border-surface-200 rounded text-slate-600"><Type size={24} strokeWidth={1.5} /></div>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-surface-200 text-center text-[10px] text-slate-400 font-mono break-inside-avoid">
          &copy; 2024 Knit Financial Technologies Inc. • Confidential Design System • Generated from app.knit.fi
        </footer>

      </div>
    </div>
  );
};

export default DesignSystem;