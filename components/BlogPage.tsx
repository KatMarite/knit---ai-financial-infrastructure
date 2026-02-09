import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogPage: React.FC = () => {
    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState('All Posts');

    const categories = ['All Posts', 'Product Updates', 'Industry Insights', 'Case Studies', 'Compliance'];

    const blogPosts = [
        {
            id: 'implementation-nightmare',
            title: 'From Months to Days: Eliminating the Implementation Nightmare in School Finance',
            excerpt: 'The traditional school software implementation timeline is a 6-month operational chaos. At Knit, we believe implementation shouldn’t be a project—it should be an event. Here is how we’ve compressed months into 72 hours.',
            date: 'Feb 15, 2026',
            readTime: '5 min read',
            category: 'Industry Insights',
            author: 'Knit Team',
            image: '/blog/timeline-header.png',
            slug: '/blog/editorial/from-months-to-days'
        },
        {
            id: 'ai-saving-schools-money',
            title: 'How AI Is Quietly Saving Schools Hundreds of Thousands Each Year',
            excerpt: 'Across South Africa, school finance and administration teams are under growing pressure. Rising operational costs, manual collections, fragmented systems, and increasing parent expectations are stretching bursars and finance managers thin.',
            date: 'Feb 9, 2026',
            readTime: '4 min read',
            category: 'Industry Insights',
            author: 'Knit Team',
            image: '/feature-4-bursar-collections.png',
            slug: '/blog/editorial/ai-saving-schools-money'
        }
    ];

    const filteredPosts = activeCategory === 'All Posts'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-surface-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full blur-3xl -z-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-surface-200/40 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                <span>Updates & Insights</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <h1 className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight mb-6">
                                The Knit Blog
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                Insights on school finance, AI infrastructure, and the future of educational administration.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                                    ? 'bg-brand-950 text-white shadow-lg shadow-brand-900/20 transform scale-105'
                                    : 'bg-surface-50 text-slate-600 hover:bg-surface-100 border border-surface-200 hover:border-surface-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <ScrollReveal key={post.id} delay={index * 100}>
                                <div
                                    onClick={() => navigate(post.slug)}
                                    className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl border border-surface-200 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <div className="aspect-video bg-surface-100 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-300 z-10"></div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-brand-900 rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-brand-950 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-surface-100 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-slate-500">
                                                    <User size={14} />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{post.author}</span>
                                            </div>
                                            <div className="text-brand-600 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                Read Article <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-950 text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
                        <p className="text-brand-200 mb-8 max-w-lg mx-auto">
                            Get the latest insights on school financial infrastructure delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-md bg-brand-900 border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            />
                            <button className="px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-medium rounded-md transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
