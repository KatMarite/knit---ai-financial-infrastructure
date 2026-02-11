// Knowledge Base for Knit Chatbot
// This contains all the information from the website to power the chatbot without external APIs

export interface KnowledgeItem {
    keywords: string[];
    question: string;
    answer: string;
    category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
    // About Knit
    {
        keywords: ['what is knit', 'about knit', 'what does knit do', 'tell me about knit', 'knit platform'],
        question: 'What is Knit?',
        answer: 'Knit is an AI-powered financial infrastructure platform that helps schools and businesses automate their financial operations. We specialize in AI-driven debt collection (empathetic, not aggressive), automated reconciliation, and seamless integration with existing accounting software like Sage, Xero, and QuickBooks.',
        category: 'general'
    },
    {
        keywords: ['how does knit work', 'how it works', 'process', 'workflow'],
        question: 'How does Knit work?',
        answer: 'Knit uses AI agents to automate financial workflows end-to-end. We decide who to follow up with, how, and when — combining payments, empathetic messaging, and intelligent escalation. Our platform automates decisions, not just reminders, helping you collect fees faster while maintaining positive relationships.',
        category: 'general'
    },

    // Pricing
    {
        keywords: ['pricing', 'cost', 'how much', 'price', 'plans', 'subscription'],
        question: 'What are your pricing plans?',
        answer: 'We offer three plans:\n\n**Basic** (R 2,500/mo): For 0-500 units, includes basic risk assessment, automated email collections, next-day payouts, and 1.5% per transaction.\n\n**Growth** (R 4,000/mo): For 500-2000 units, includes advanced neural risk engine, multi-channel collections (WhatsApp), same-day payouts, API access, and 1.2% per transaction.\n\n**Enterprise** (Custom): For 2000+ units with custom risk models, dedicated account manager, on-premise deployment, SLA guarantees, and volume-based discounts.',
        category: 'pricing'
    },
    {
        keywords: ['free trial', 'trial', 'demo', 'test'],
        question: 'Do you offer a free trial?',
        answer: 'Yes! We offer a free trial on our Growth plan. You can also book a demo to see the platform in action. Contact us at sales@knit.cash or WhatsApp +27 65 952 0478 to get started.',
        category: 'pricing'
    },

    // Features
    {
        keywords: ['features', 'capabilities', 'what can knit do', 'functionality'],
        question: 'What features does Knit offer?',
        answer: 'Knit offers:\n• AI-driven risk assessment and prediction\n• Automated multi-channel collections (Email, SMS, WhatsApp)\n• Smart payment reconciliation\n• Integration with Sage, Xero, QuickBooks, Stripe, Paystack\n• Real-time analytics and reporting\n• Empathetic, automated messaging\n• Same-day or next-day payouts\n• API access for custom integrations',
        category: 'features'
    },
    {
        keywords: ['ai engine', 'artificial intelligence', 'machine learning', 'risk assessment'],
        question: 'How does the AI engine work?',
        answer: 'Our AI engine analyzes payment history, behavioral patterns, and engagement data to predict payment friction before it happens. It assigns risk scores (0-100) and recommends intervention strategies. The system learns from each interaction to improve predictions and optimize collection strategies over time.',
        category: 'features'
    },
    {
        keywords: ['integrations', 'integrate', 'accounting software', 'connect'],
        question: 'What systems does Knit integrate with?',
        answer: 'Knit integrates seamlessly with popular accounting and payment platforms including Sage, Xero, QuickBooks, Stripe, Paystack, SimplePay, Peach Payments, Slack, and Trello. We also offer API access for custom integrations.',
        category: 'features'
    },

    // Implementation
    {
        keywords: ['implementation', 'setup', 'onboarding', 'how long', 'get started'],
        question: 'How long does implementation take?',
        answer: 'Implementation takes days, not months! Our typical onboarding process is:\n• Day 1-2: Initial setup and data integration\n• Day 3-5: Team training and configuration\n• Day 6-7: Testing and go-live\n\nMost clients are fully operational within one week.',
        category: 'implementation'
    },
    {
        keywords: ['training', 'learn', 'support', 'help'],
        question: 'What kind of training and support do you provide?',
        answer: 'We provide comprehensive onboarding with hands-on training for your team. All plans include support, with Priority Support on Growth plans and dedicated account managers for Enterprise clients. We also offer ongoing training resources and documentation.',
        category: 'implementation'
    },

    // Security & Compliance
    {
        keywords: ['security', 'secure', 'safe', 'data protection', 'encryption'],
        question: 'Is Knit secure?',
        answer: 'Yes! We take security seriously:\n• SOC2 Type II compliant infrastructure\n• 256-bit AES encryption for all data\n• ISO 27001 certified data centers\n• Regular third-party security audits\n• GDPR and POPIA compliant\n• Role-based access controls\n• Multi-factor authentication',
        category: 'security'
    },
    {
        keywords: ['compliance', 'regulations', 'popia', 'gdpr', 'legal'],
        question: 'What compliance standards do you meet?',
        answer: 'Knit is compliant with POPIA (South African data protection), GDPR (European data protection), and follows PCI DSS standards for payment processing. We maintain SOC2 Type II certification and conduct regular security audits.',
        category: 'security'
    },

    // Use Cases
    {
        keywords: ['schools', 'education', 'school fees', 'tuition'],
        question: 'How does Knit help schools?',
        answer: 'Knit helps schools automate fee collection and reduce administrative burden. Our AI identifies at-risk accounts early, sends empathetic payment reminders, and offers flexible payment plans automatically. Schools typically see 94%+ collection rates and save 15+ hours per week on admin tasks.',
        category: 'use-cases'
    },
    {
        keywords: ['businesses', 'companies', 'enterprises', 'lenders'],
        question: 'What types of businesses use Knit?',
        answer: 'Knit serves schools, property managers, lenders, medical practices, and any business with recurring payments or accounts receivable. We\'re particularly effective for organizations managing 100+ payment accounts.',
        category: 'use-cases'
    },

    // Results & Benefits
    {
        keywords: ['results', 'roi', 'benefits', 'outcomes', 'success'],
        question: 'What results can I expect?',
        answer: 'Our clients typically see:\n• 94%+ collection rates (up from 75-85%)\n• 15+ hours saved per week on admin tasks\n• 40% reduction in overdue accounts\n• 60% faster payment processing\n• Improved customer relationships through empathetic communication',
        category: 'results'
    },

    // Contact & Demo
    {
        keywords: ['contact', 'reach', 'email', 'phone', 'get in touch'],
        question: 'How can I contact Knit?',
        answer: 'You can reach us at:\n• Email: sales@knit.cash\n• WhatsApp: +27 65 952 0478\n• Website: www.knit.cash\n\nWe typically respond within 2 hours during business hours.',
        category: 'contact'
    },
    {
        keywords: ['demo', 'book demo', 'schedule', 'meeting', 'presentation'],
        question: 'How do I book a demo?',
        answer: 'You can book a demo by:\n1. Clicking "Book a Demo" on our website\n2. Emailing sales@knit.cash\n3. WhatsApp us at +27 65 952 0478\n4. Filling out the contact form on our website\n\nDemos typically last 30 minutes and can be customized to your specific needs.',
        category: 'contact'
    },

    // Technical
    {
        keywords: ['api', 'developer', 'technical', 'documentation'],
        question: 'Do you have an API?',
        answer: 'Yes! Our Growth and Enterprise plans include full API access. We provide comprehensive API documentation, SDKs, and developer support. You can integrate Knit into your existing systems and workflows.',
        category: 'technical'
    },
    {
        keywords: ['mobile', 'app', 'phone', 'tablet'],
        question: 'Is there a mobile app?',
        answer: 'Our web platform is fully responsive and works seamlessly on mobile devices and tablets. We also offer mobile-optimized payment pages for your customers. A dedicated mobile app is on our roadmap for 2026.',
        category: 'technical'
    },

    // Payments
    {
        keywords: ['payment methods', 'pay', 'payment options', 'how to pay'],
        question: 'What payment methods do you support?',
        answer: 'We support all major payment methods including credit/debit cards, EFT, instant EFT, mobile money, and direct debit. We integrate with Stripe, Paystack, SimplePay, and Peach Payments to offer your customers maximum flexibility.',
        category: 'payments'
    },
    {
        keywords: ['payouts', 'settlements', 'when do i get paid'],
        question: 'When do I receive payouts?',
        answer: 'Payout timing depends on your plan:\n• Basic: Next-day payouts\n• Growth: Same-day payouts\n• Enterprise: Custom payout schedules available\n\nAll payouts are automated and deposited directly to your bank account.',
        category: 'payments'
    },

    // Comparison
    {
        keywords: ['vs', 'compared to', 'alternative', 'competitor', 'difference'],
        question: 'How is Knit different from other solutions?',
        answer: 'Unlike traditional collection software, Knit uses AI to make intelligent decisions, not just send reminders. We focus on empathetic, relationship-preserving communication while maximizing collection rates. Our "days not months" implementation and all-in-one platform (payments + collections + reconciliation) set us apart.',
        category: 'comparison'
    }
];

// Fallback responses for when no match is found
export const fallbackResponses = [
    "I'd be happy to help! Could you please rephrase your question or ask about our pricing, features, implementation, or how to get started?",
    "That's a great question! For detailed information, I recommend booking a demo with our team at sales@knit.cash or WhatsApp +27 65 952 0478.",
    "I want to make sure I give you accurate information. Could you ask about specific topics like pricing, features, security, or how Knit works?",
    "I'm here to help! You can ask me about Knit's features, pricing plans, implementation process, security, or how to book a demo."
];

// Function to find the best matching answer
export function findBestMatch(userMessage: string): string {
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Direct keyword matching
    for (const item of knowledgeBase) {
        for (const keyword of item.keywords) {
            if (normalizedMessage.includes(keyword.toLowerCase())) {
                return item.answer;
            }
        }
    }

    // Fuzzy matching - check for partial matches
    const words = normalizedMessage.split(' ').filter(w => w.length > 3);
    const matches: { item: KnowledgeItem; score: number }[] = [];

    for (const item of knowledgeBase) {
        let score = 0;
        for (const keyword of item.keywords) {
            const keywordWords = keyword.toLowerCase().split(' ');
            for (const word of words) {
                if (keywordWords.some(kw => kw.includes(word) || word.includes(kw))) {
                    score++;
                }
            }
        }
        if (score > 0) {
            matches.push({ item, score });
        }
    }

    // Return best match if score is high enough
    if (matches.length > 0) {
        matches.sort((a, b) => b.score - a.score);
        if (matches[0].score >= 2) {
            return matches[0].item.answer;
        }
    }

    // Return random fallback
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}
