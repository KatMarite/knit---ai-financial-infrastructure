import React from 'react';
import { FileText, Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubscribeSection from './SubscribeSection';

interface FooterProps {
    onShowDesignSystem?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowDesignSystem }) => {
    return (
        <>
            <SubscribeSection />
            <footer className="bg-brand-950 text-slate-400 py-16 border-t border-brand-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                        <div className="col-span-2">
                            <div className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                <img src="/knit-logo.png" alt="Knit" className="h-28 w-auto brightness-0 invert" />
                            </div>
                            <div className="text-xs text-slate-500 max-w-xs leading-relaxed">
                                Next-generation financial infrastructure for the AI era.
                                <br /><br />
                                © 2026 Knit Group (Pty) Ltd.<br />
                                <div className="flex gap-4 mt-4">
                                    <a href="https://www.facebook.com/people/Knitcash/61583909662935/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/knitcash/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>
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
                        <div>
                            <h4 className="text-white font-medium mb-4 text-sm">Get in Touch</h4>
                            <ul className="space-y-3 text-xs font-light text-slate-400">
                                <li className="flex items-start gap-2">
                                    <Mail size={14} className="text-brand-500 shrink-0 mt-0.5" />
                                    <a href="mailto:info@knit.cash" className="hover:text-brand-400 transition-colors">info@knit.cash</a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone size={14} className="text-brand-500 shrink-0 mt-0.5" />
                                    <a href="tel:+27101412770" className="hover:text-brand-400 transition-colors">+27 10 141 2770</a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <MapPin size={14} className="text-brand-500 shrink-0 mt-0.5" />
                                    <span>
                                        The Zone @ Rosebank<br />
                                        Rosebank, Johannesburg<br />
                                        Gauteng, South Africa
                                    </span>
                                </li>
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
        </>
    );
};

export default Footer;
