import React, { useState, useRef } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        if (!form.current) return;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
            console.error("EmailJS credentials not found in .env.local or placeholder used.");
            setStatus('error');
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
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
                                    Ready to build the future of digital finance? Reach out to our sales team at <a href="mailto:info@knit.cash" className="text-brand-600 font-medium hover:underline">info@knit.cash</a> or use the form below.
                                </p>
                            </div>
                        </ScrollReveal>

                        {status === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent</h3>
                                <p className="text-green-700 mb-6">Thanks for reaching out! We'll be in touch shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-green-700 font-medium hover:text-green-900 underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <ScrollReveal delay={100}>
                                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="user_firstname" className="sr-only">First name</label>
                                            <input
                                                type="text"
                                                id="user_firstname"
                                                name="user_firstname"
                                                required
                                                maxLength={50}
                                                className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="user_lastname" className="sr-only">Last name</label>
                                            <input
                                                type="text"
                                                id="user_lastname"
                                                name="user_lastname"
                                                required
                                                maxLength={50}
                                                className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="user_company" className="sr-only">Company name</label>
                                        <input
                                            type="text"
                                            id="user_company"
                                            name="user_company"
                                            maxLength={100}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                            placeholder="Company name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="user_email" className="sr-only">Company email</label>
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            required
                                            maxLength={100}
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
                                            maxLength={2000}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400 resize-none"
                                            placeholder="What are you building, and in what countries? Details are helpful!"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="user_phone" className="sr-only">Phone number</label>
                                        <input
                                            type="tel"
                                            id="user_phone"
                                            name="user_phone"
                                            maxLength={20}
                                            className="w-full px-4 py-3 rounded border border-surface-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white placeholder-slate-400"
                                            placeholder="Phone number (optional)"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="px-8 py-3 bg-brand-900 text-white rounded-sm font-medium hover:bg-brand-800 transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? 'Sending...' : 'Submit'}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm mt-2">
                                                Something went wrong. Please check your connection or try again later.
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </ScrollReveal>
                        )}
                    </div>

                    {/* Right Column: Visual */}
                    <ScrollReveal delay={200} className="hidden lg:flex justify-center items-center h-full min-h-[600px] relative">
                        {/* 3D Contact Illustration */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-surface-200">
                            <img
                                src="/contact-hero.jpg"
                                alt="Get in touch illustration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </ScrollReveal>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
