import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navigation />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-50 border border-surface-200 text-brand-600 text-[10px] font-mono uppercase tracking-widest mb-6 rounded-full">
                        <MessageSquare size={12} />
                        Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-950 mb-6">
                        Contact Sales
                    </h1>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        Ready to modernize your financial infrastructure? Our team is ready to help you scope your integration.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white border border-surface-200 rounded-xl shadow-sm p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold text-brand-950 mb-2">Message Sent!</h3>
                            <p className="text-slate-600 mb-8">Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-brand-600 font-medium hover:text-brand-800"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-surface-50/50"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-surface-50/50"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-surface-50/50"
                                    placeholder="Acme Inc."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-surface-50/50 resize-none"
                                    placeholder="Tell us about your infrastructure needs..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full px-8 py-4 bg-brand-900 text-white rounded-sm text-sm font-medium hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? 'Sending...' : (
                                    <>
                                        Send Message <Mail size={16} />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-slate-400 text-center mt-4">
                                By contacting us, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
