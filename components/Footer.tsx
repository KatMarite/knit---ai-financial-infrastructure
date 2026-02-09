import React from 'react';
import { FileText } from 'lucide-react';

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
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Platform Overview</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Integration</a></li>
                            <li><a href="/pricing" className="hover:text-brand-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
                        <ul className="space-y-3 text-xs font-light">
                            <li><a href="/about" className="hover:text-brand-400 transition-colors">About Us</a></li>
                            <li><a href="/faq" className="hover:text-brand-400 transition-colors">FAQs</a></li>
                            <li><a href="/blog" className="hover:text-brand-400 transition-colors">Blog</a></li>
                            <li><a href="/contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
                        <ul className="space-y-3 text-xs font-light">
                            <li><a href="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                            <li><a href="/security" className="hover:text-brand-400 transition-colors">Security</a></li>
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
