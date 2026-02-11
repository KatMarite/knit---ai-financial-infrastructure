import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
    onShowDesignSystem?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowDesignSystem }) => {
    return (
        <footer className="bg-brand-950 text-slate-400 py-16 border-t border-brand-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2">
                        <div className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                            <img src="/knit-logo.png" alt="Knit" className="h-28 w-auto brightness-0 invert" />
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
                            <li><Link to="/#platform" className="hover:text-brand-400 transition-colors">Platform Overview</Link></li>
                            <li><Link to="/#platform" className="hover:text-brand-400 transition-colors">Integration</Link></li>
                            <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
                        <ul className="space-y-3 text-xs font-light">
                            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">About Us</Link></li>
                            <li><Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">FAQs</Link></li>
                            <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">Insights</Link></li>
                            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
                        <ul className="space-y-3 text-xs font-light">
                            <li><Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/security" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-400 transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-brand-900 flex justify-between items-center text-[10px] font-mono text-slate-600">

                    <div className="flex gap-4 items-center">
                        {onShowDesignSystem && (
                            <button onClick={onShowDesignSystem} className="hover:text-brand-400 transition-colors flex items-center gap-1">
                                <FileText size={10} /> Design System
                            </button>
                        )}
                        <div>System Status: <span className="text-emerald-500 animate-pulse">Operational</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
