import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi there! I'm Knit's AI assistant. Do you have any questions about our financial infrastructure or how to integrate?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    // Open automatically after a delay if never opened? (Optional, maybe too intrusive, let's just use a badge or tooltip)
    // For now, let's keep it simple. User clicks to open.

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();

        // Prevent abuse: limit message length
        if (userMessage.length > 1000) {
            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: "Message too long. Please keep messages under 1000 characters." }
            ]);
            return;
        }
        setInputValue('');

        // Add user message immediately
        const newMessages: Message[] = [
            ...messages,
            { role: 'user', content: userMessage }
        ];
        setMessages(newMessages);
        setIsLoading(true);

        // Simulate a brief delay for more natural feel
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

        try {
            // Use local knowledge base instead of external API
            const { findBestMatch } = await import('../services/knowledgeBase');
            const response = findBestMatch(userMessage);

            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: response }
            ]);
        } catch (error) {
            console.error("Failed to get response", error);
            setMessages(prev => [
                ...prev,
                { role: 'assistant', content: "I'm having trouble processing your request. Please try again." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!hasOpened) setHasOpened(true);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">

            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-surface-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">

                    {/* Header */}
                    <div className="bg-brand-950 p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center border border-brand-700">
                                <Sparkles size={16} className="text-brand-300" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">Knit Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-xs text-brand-300 font-mono">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-brand-300 hover:text-white transition-colors p-1"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-50 scroll-smooth">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center border ${msg.role === 'user'
                                        ? 'bg-white border-surface-200 text-brand-600'
                                        : 'bg-brand-100 border-brand-200 text-brand-700'
                                        }`}
                                >
                                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                                </div>

                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                        ? 'bg-brand-600 text-white rounded-tr-sm'
                                        : 'bg-white border border-surface-200 text-slate-700 rounded-tl-sm'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-100 border border-brand-200 text-brand-700 flex shrink-0 items-center justify-center">
                                    <Bot size={14} />
                                </div>
                                <div className="bg-white border border-surface-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-surface-200 shrink-0">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask about integration, pricing..."
                                maxLength={1000}
                                className="w-full pl-4 pr-12 py-3 bg-surface-50 border border-surface-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm text-slate-700 placeholder:text-slate-400 transition-all"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim() || isLoading}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-slate-400">
                                Powered by Knit Knowledge Base
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={toggleChat}
                className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isOpen ? 'bg-surface-800 text-white rotate-90' : 'bg-brand-600 text-white'
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-pulse" />}

                {/* Unread Indicator (only if closed and never opened, optional) */}
                {!isOpen && !hasOpened && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                    </span>
                )}
            </button>

            {/* Prompt Bubble (only if closed and not yet opened) */}
            {!isOpen && !hasOpened && (
                <div className="absolute bottom-16 right-0 mb-2 w-48 bg-white border border-surface-200 p-3 rounded-lg shadow-lg animate-in slide-in-from-right-5 fade-in duration-500 delay-1000 origin-bottom-right">
                    <p className="text-xs text-slate-700 font-medium">
                        👋 Hi! Need help navigating our platform?
                    </p>
                    <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-surface-200 rotate-45"></div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
