import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const SubscribeSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');

        try {
            const formData = new FormData();
            formData.append('fields[email]', email);
            formData.append('ml-submit', '1');
            formData.append('anticsrf', 'true');

            // Using 'no-cors' mode as MailerLite JSONP endpoint might not return CORS headers for direct fetch
            // This means we won't get the JSON response content, but the request will go through.
            await fetch("https://assets.mailerlite.com/jsonp/2096299/forms/179649503348917659/subscribe", {
                method: "POST",
                body: formData,
                mode: 'no-cors'
            });

            setSubscribeStatus('success');
            setEmail('');
        } catch (error) {
            console.error("Subscription error:", error);
            setSubscribeStatus('error');
        }
    };

    const [isInterestChecked, setIsInterestChecked] = useState(false);

    return (
        <section className="py-20 bg-brand-950 text-white text-center border-t border-brand-900">
            <div className="max-w-3xl mx-auto px-4">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Stay Updated</h2>

                    <div className="flex items-center justify-center gap-3 mb-2 cursor-pointer group" onClick={() => setIsInterestChecked(!isInterestChecked)}>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-200 ${isInterestChecked ? 'bg-brand-500 border-brand-500' : 'bg-transparent border-slate-600 group-hover:border-slate-500'}`}>
                            {isInterestChecked && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors select-none text-sm md:text-base">
                            I want to receive the latest insights on school financial infrastructure.
                        </span>
                    </div>

                    <div
                        className={`transition-all ease-in-out overflow-hidden ${isInterestChecked ? 'duration-500 max-h-40 opacity-100 mt-8' : 'duration-0 max-h-0 opacity-0 mt-0'}`}
                    >
                        {subscribeStatus === 'success' ? (
                            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 max-w-md mx-auto">
                                <h3 className="text-xl font-semibold text-green-400 mb-2">Thanks for subscribing!</h3>
                                <p className="text-green-200">Please check your email to confirm your subscription.</p>
                                <button
                                    onClick={() => setSubscribeStatus('idle')}
                                    className="mt-4 text-sm text-green-400 hover:text-green-300 underline"
                                >
                                    Subscribe another email
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                            >
                                <input
                                    aria-label="email"
                                    aria-required="true"
                                    type="email"
                                    name="fields[email]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    required
                                    className="flex-1 px-4 py-3 rounded-md bg-brand-900 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-50 transition-all font-light"
                                    disabled={subscribeStatus === 'loading'}
                                />
                                <button
                                    type="submit"
                                    disabled={subscribeStatus === 'loading'}
                                    className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                                >
                                    {subscribeStatus === 'loading' ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : 'Subscribe'}
                                </button>
                            </form>
                        )}
                        {subscribeStatus === 'error' && (
                            <p className="text-red-400 text-sm mt-4">
                                Something went wrong. Please try again later.
                            </p>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default SubscribeSection;
