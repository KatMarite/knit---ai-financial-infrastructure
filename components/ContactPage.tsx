import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Send, ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        companyEmail: '',
        message: '',
        phone: '',
        country: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            setFormData({
                firstName: '',
                lastName: '',
                companyName: '',
                companyEmail: '',
                message: '',
                phone: '',
                country: ''
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
            <Navigation />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Form */}
                    <div>
                        <ScrollReveal>
                            <div className="mb-10">
                                <h1 className="text-4xl font-bold tracking-tight text-brand-950 mb-4">
                                    Book a Demo
                                </h1>
                                <p className="text-slate-600 leading-relaxed">
                                    Ready to build the future of digital finance? Reach out to our sales team and we'll be in touch.
                                </p>
                            </div>
                        </ScrollReveal>

                        {status === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent</h3>
                                <p className="text-green-700 mb-6">We'll be in touch shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-green-700 font-medium hover:text-green-900 underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <ScrollReveal delay={100}>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="sr-only">First name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="sr-only">Last name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="companyName" className="sr-only">Company name</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                            placeholder="Company name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="companyEmail" className="sr-only">Company email</label>
                                        <input
                                            type="email"
                                            id="companyEmail"
                                            name="companyEmail"
                                            required
                                            value={formData.companyEmail}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                            placeholder="Company email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="sr-only">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400 resize-none"
                                            placeholder="What are you building, and in what countries? Details are helpful!"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                            placeholder="Phone number (optional)"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="country" className="sr-only">Country</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white text-slate-900 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-slate-400">Country</option>
                                            <option value="US">United States</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="CA">Canada</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="px-8 py-3 bg-brand-900 text-white rounded-sm font-medium hover:bg-brand-800 transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? 'Sending...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </ScrollReveal>
                        )}
                    </div>

                    {/* Right Column: Visual */}
                    <ScrollReveal delay={200} className="hidden lg:flex justify-center items-center h-full min-h-[600px] relative">
                        {/* Placeholder for the Hand/Phone Illustration */}
                        <div className="relative w-full max-w-md aspect-[3/4]">
                            {/* Abstract Graphic as Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-50 to-indigo-50 rounded-2xl border border-surface-200 overflow-hidden flex items-center justify-center">
                                <div className="text-center p-8 opacity-40">
                                    <div className="w-32 h-64 bg-white border-4 border-slate-200 rounded-[3rem] mx-auto mb-4 shadow-xl flex flex-col overflow-hidden">
                                        <div className="h-6 w-24 bg-slate-100 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>
                                        <div className="flex-1 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                                            <div className="w-12 h-12 border-4 border-white/50 rounded rotate-45"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">Illustration Space</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
