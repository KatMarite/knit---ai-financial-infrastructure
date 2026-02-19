// Enhanced Knowledge Base with Intelligent Matching
// Provides advanced NLP-like capabilities without external APIs

export interface KnowledgeItem {
    keywords: string[];
    question: string;
    answer: string;
    category: string;
    relatedTopics?: string[];
    priority?: number;
    suggestedFollowUps?: string[];
}

export interface ChatResponse {
    answer: string;
    suggestions: string[];
}

// ─── Knowledge Entries ───────────────────────────────────────────────

export const knowledgeBase: KnowledgeItem[] = [
    // About Knit
    {
        keywords: ['what is knit', 'about knit', 'what does knit do', 'tell me about knit', 'knit platform', 'who are you', 'explain knit', 'overview'],
        question: 'What is Knit?',
        answer: 'Knit is an **AI-powered financial infrastructure** platform that helps schools and businesses automate their financial operations.\n\nWe specialise in:\n• **Automated Decisions** — who to engage, when & how\n• **Automated Reconciliation**\n• **Digitised & Contextualised Payments**\n• **Seamless Integration** with school admin & accounting software',
        category: 'general',
        relatedTopics: ['features', 'pricing', 'use-cases'],
        priority: 10,
        suggestedFollowUps: ['How does Knit work?', 'What are your pricing plans?', 'Book a demo']
    },
    {
        keywords: ['how does knit work', 'how it works', 'process', 'workflow', 'explain process', 'step by step'],
        question: 'How does Knit work?',
        answer: 'Knit uses **AI agents** to automate financial workflows end-to-end:\n\n1️⃣ **Identify** — AI analyses accounts and predicts risk\n2️⃣ **Decide** — Automates decisions on who to engage, when, and through which medium\n3️⃣ **Collect** — Contextualised payment processing & flexible plans\n4️⃣ **Reconcile** — Real-time matching of payments\n\nWe automate **decisions**, not just reminders.',
        category: 'general',
        relatedTopics: ['features', 'ai-engine'],
        priority: 8,
        suggestedFollowUps: ['Tell me about the AI engine', 'What results can I expect?', 'How long is implementation?']
    },

    // Pricing
    {
        keywords: ['pricing', 'cost', 'how much', 'price', 'plans', 'subscription', 'fees', 'expensive', 'cheap', 'afford', 'budget', 'quote', 'rand', 'zar'],
        question: 'What are your pricing plans?',
        answer: 'We offer **three plans**:\n\n💼 **Basic** — R 2,500/mo\n• 0–500 units\n• Basic risk assessment\n• Automated email payment follow-ups\n• Next-day payouts\n• 1.5% per transaction\n\n🚀 **Growth** — R 4,000/mo\n• 500–2,000 units\n• Advanced neural risk engine\n• Multi-channel recovery (WhatsApp)\n• Same-day payouts & API access\n• 1.2% per transaction\n\n🏢 **Enterprise** — Custom\n• 2,000+ units\n• Custom risk models & dedicated account manager\n• On-premise deployment & SLA guarantees\n• Volume discounts',
        category: 'pricing',
        relatedTopics: ['free-trial', 'implementation'],
        priority: 10,
        suggestedFollowUps: ['Do you offer a free trial?', 'Book a demo', 'What results can I expect?']
    },
    {
        keywords: ['basic plan', 'starter plan', 'cheapest', 'smallest plan', 'entry level'],
        question: 'Tell me about the Basic plan',
        answer: 'Our **Basic plan** is **R 2,500/mo** and is perfect for smaller organisations:\n\n• Supports **0–500 units**\n• Basic risk assessment\n• Automated **email** payment follow-ups\n• **Next-day** payouts\n• 1.5% per transaction\n\nIt\'s a great starting point to automate your revenue recovery!',
        category: 'pricing',
        relatedTopics: ['pricing', 'implementation'],
        priority: 7,
        suggestedFollowUps: ['What about the Growth plan?', 'How does implementation work?']
    },
    {
        keywords: ['growth plan', 'middle plan', 'whatsapp collections'],
        question: 'Tell me about the Growth plan',
        answer: 'Our **Growth plan** is **R 4,000/mo** — our most popular choice:\n\n• Supports **500–2,000 units**\n• **Advanced neural risk engine**\n• Multi-channel recovery including **WhatsApp**\n• **Same-day** payouts\n• Full **API access**\n• 1.2% per transaction\n• Includes a **free trial**!',
        category: 'pricing',
        relatedTopics: ['pricing', 'free-trial'],
        priority: 7,
        suggestedFollowUps: ['Do you offer a free trial?', 'What about Enterprise?']
    },
    {
        keywords: ['enterprise plan', 'large scale', 'custom plan', 'dedicated manager', 'on-premise', 'on premise'],
        question: 'Tell me about the Enterprise plan',
        answer: "Our **Enterprise plan** is for large-scale operations with **2,000+ units**:\n\n• **Custom risk models** tailored to your business\n• **Dedicated account manager**\n• **On-premise deployment** option\n• **SLA guarantees**\n• Volume-based discounts\n\nPricing is custom — let's chat to build a package for you!",
        category: 'pricing',
        relatedTopics: ['pricing', 'contact'],
        priority: 7,
        suggestedFollowUps: ['Book a demo', 'How can I contact Knit?']
    },
    {
        keywords: ['free trial', 'trial', 'try before buy', 'try it out', 'free', 'no commitment'],
        question: 'Do you offer a free trial?',
        answer: 'Yes! We offer a **free trial on our Growth plan** so you can experience the full power of Knit risk-free.\n\nGet started by:\n• Emailing **sales@knit.cash**\n• WhatsApp **+27 65 952 0478**\n• Or click **Book a Demo** on our website',
        category: 'pricing',
        relatedTopics: ['demo', 'contact'],
        priority: 7,
        suggestedFollowUps: ['Book a demo', 'What are your pricing plans?']
    },

    // Features
    {
        keywords: ['features', 'capabilities', 'what can knit do', 'functionality', 'functions', 'tools', 'offer'],
        question: 'What features does Knit offer?',
        answer: 'Knit is a **full-stack financial automation** platform:\n\n🤖 **AI & Analytics**\n• Risk assessment & prediction\n• Real-time analytics & reporting\n\n📬 **Automated Engagement**\n• Smart decisions on who to email, SMS, or WhatsApp\n• Empathetic, smart messaging\n\n💳 **Contextual Payments**\n• Smart payment reconciliation\n• Same-day or next-day payouts\n\n🔗 **Integrations**\n• Sage, Xero, QuickBooks, Stripe, Paystack\n• Full API access',
        category: 'features',
        relatedTopics: ['integrations', 'ai-engine'],
        priority: 9,
        suggestedFollowUps: ['How does the AI engine work?', 'What integrations do you support?', 'What results can I expect?']
    },
    {
        keywords: ['ai engine', 'artificial intelligence', 'machine learning', 'risk assessment', 'risk score', 'predict', 'neural'],
        question: 'How does the AI engine work?',
        answer: 'Our AI engine is the brain behind Knit:\n\n🧠 **Predictive Analytics** — analyses payment history, behavioural patterns, and engagement data\n📊 **Risk Scoring** — assigns scores (0–100) to every account\n🎯 **Smart Interventions** — recommends the best strategy per account\n📈 **Continuous Learning** — improves with every interaction\n\nIt predicts payment friction **before** it happens, so you can act proactively.',
        category: 'features',
        relatedTopics: ['features', 'results'],
        priority: 8,
        suggestedFollowUps: ['What results can I expect?', 'How does Knit help schools?']
    },
    {
        keywords: ['integrations', 'integrate', 'accounting software', 'connect', 'compatible', 'works with', 'sage', 'xero', 'quickbooks', 'stripe', 'paystack'],
        question: 'What systems does Knit integrate with?',
        answer: 'Knit integrates seamlessly with your existing tools:\n\n📊 **Accounting**: Sage, Xero, QuickBooks\n💳 **Payments**: Stripe, Paystack, SimplePay, Peach Payments\n💬 **Collaboration**: Slack, Trello\n🔌 **Custom**: Full API & SDK access\n\nSetup typically takes **1–2 days** and our team handles the heavy lifting.',
        category: 'features',
        relatedTopics: ['technical', 'api'],
        priority: 8,
        suggestedFollowUps: ['Do you have an API?', 'How long is implementation?']
    },
    {
        keywords: ['collections', 'collect', 'debt', 'overdue', 'arrears', 'outstanding', 'recover', 'chase'],
        question: 'How does automated recovery work?',
        answer: 'Our AI-powered recovery process is **empathetic and effective**:\n\n1️⃣ **Early Detection** — AI flags at-risk accounts before they become overdue\n2️⃣ **Smart Outreach** — Personalised messages via email, SMS, or WhatsApp\n3️⃣ **Flexible Options** — Automatically offers payment plans when appropriate\n4️⃣ **Escalation** — Intelligent escalation only when needed\n\nThe result? **94%+ recovery rates** while preserving relationships.',
        category: 'features',
        relatedTopics: ['results', 'ai-engine'],
        priority: 8,
        suggestedFollowUps: ['What results can I expect?', 'How does the AI engine work?']
    },
    {
        keywords: ['reconciliation', 'reconcile', 'matching', 'bank statement', 'allocate'],
        question: 'How does automated reconciliation work?',
        answer: 'Knit\'s **automated reconciliation** matches payments to accounts in real-time:\n\n• **Instant matching** — payments are allocated as they arrive\n• **Smart detection** — handles partial payments, overpayments, and split payments\n• **Exception handling** — flags unmatched items for quick review\n• **60% faster** processing compared to manual methods\n\nSay goodbye to spreadsheet headaches!',
        category: 'features',
        relatedTopics: ['features', 'results'],
        priority: 7,
        suggestedFollowUps: ['What features does Knit offer?', 'What results can I expect?']
    },
    {
        keywords: ['whatsapp', 'sms', 'messaging', 'notifications', 'alerts', 'reminders'],
        question: 'Do you support WhatsApp notifications?',
        answer: 'Yes! Our **Growth and Enterprise plans** include multi-channel messaging:\n\n📧 **Email** — Professional, templated communications\n📱 **SMS** — Quick payment reminders\n💬 **WhatsApp** — Interactive messages with payment links\n\nAll messages are **AI-personalised** and timed for maximum effectiveness. Open rates on WhatsApp are typically **95%+**!',
        category: 'features',
        relatedTopics: ['features', 'pricing'],
        priority: 7,
        suggestedFollowUps: ['What are your pricing plans?', 'How does automated recovery work?']
    },

    // Implementation
    {
        keywords: ['implementation', 'setup', 'onboarding', 'how long', 'get started', 'start using', 'begin', 'install', 'migrate', 'switch'],
        question: 'How long does implementation take?',
        answer: 'Implementation takes **days, not months**! ⚡\n\n📅 **Day 1–2**: Initial setup & data integration\n📅 **Day 3–5**: Team training & configuration\n📅 **Day 6–7**: Testing & go-live\n\nMost clients are **fully operational within one week**. Our team handles the technical heavy lifting so you can focus on your business.',
        category: 'implementation',
        relatedTopics: ['training', 'support'],
        priority: 9,
        suggestedFollowUps: ['What training do you provide?', 'Book a demo', 'What are your pricing plans?']
    },
    {
        keywords: ['training', 'learn', 'support', 'help', 'assistance', 'customer service', 'onboard'],
        question: 'What training and support do you provide?',
        answer: 'We believe in **hands-on onboarding**:\n\n📚 **Training**: Live sessions for your team during setup\n🎯 **Ongoing Support**: All plans include customer support\n⭐ **Priority Support**: Available on Growth plans\n👤 **Dedicated Manager**: Enterprise clients get a personal account manager\n📖 **Resources**: Documentation, guides, and video tutorials\n\nWe\'re with you every step of the way!',
        category: 'implementation',
        relatedTopics: ['implementation', 'pricing'],
        priority: 7,
        suggestedFollowUps: ['How long is implementation?', 'What are your pricing plans?']
    },

    // Security & Compliance
    {
        keywords: ['security', 'secure', 'safe', 'data protection', 'encryption', 'privacy', 'protected', 'hack', 'breach'],
        question: 'Is Knit secure?',
        answer: 'Absolutely. **Security is our foundation**:\n\n🔒 **SOC2 Type II** compliant infrastructure\n🔐 **256-bit AES encryption** for all data\n🏢 **ISO 27001** certified data centres\n🔍 Regular **third-party security audits**\n✅ **GDPR and POPIA** compliant\n👥 **Role-based access controls**\n🔑 **Multi-factor authentication**\n\nYour financial data is in safe hands.',
        category: 'security',
        relatedTopics: ['compliance'],
        priority: 9,
        suggestedFollowUps: ['What compliance standards do you meet?', 'What features does Knit offer?']
    },
    {
        keywords: ['compliance', 'regulations', 'popia', 'gdpr', 'legal', 'compliant', 'certified', 'soc2', 'iso'],
        question: 'What compliance standards do you meet?',
        answer: 'Knit meets the highest compliance standards:\n\n🇿🇦 **POPIA** — South African data protection\n🇪🇺 **GDPR** — European data protection\n💳 **PCI DSS** — Payment card security\n🏅 **SOC2 Type II** — Operational security\n🔍 **Regular audits** by independent third parties\n\nWe take regulatory compliance as seriously as you do.',
        category: 'security',
        relatedTopics: ['security'],
        priority: 7,
        suggestedFollowUps: ['Is Knit secure?', 'Book a demo']
    },

    // Use Cases
    {
        keywords: ['schools', 'education', 'school fees', 'tuition', 'university', 'college', 'academy', 'learner', 'student'],
        question: 'How does Knit help schools?',
        answer: 'Knit is **purpose-built for schools**:\n\n🎓 **Automated Fee Recovery** — reduces admin burden by 15+ hours/week\n🔮 **Early Warning** — AI identifies at-risk accounts before they become overdue\n💬 **Empathetic Outreach** — preserves parent relationships\n📊 **Real-Time Visibility** — track recovery rates live\n💰 **Flexible Plans** — automatically offer payment plans\n\nSchools using Knit achieve **94%+ recovery rates** — up from a typical 75–85%.',
        category: 'use-cases',
        relatedTopics: ['results', 'features'],
        priority: 8,
        suggestedFollowUps: ['What results can I expect?', 'What are your pricing plans?', 'Book a demo']
    },
    {
        keywords: ['businesses', 'companies', 'enterprises', 'lenders', 'property', 'medical', 'who uses', 'clients', 'customers', 'industries'],
        question: 'What types of businesses use Knit?',
        answer: 'Knit works for any business with **recurring payments or accounts receivable**:\n\n🏫 **Schools & universities**\n🏠 **Property managers**\n💰 **Lenders & micro-finance**\n🏥 **Medical practices**\n📦 **Subscription businesses**\n\nWe\'re especially effective for organisations managing **100+ accounts**.',
        category: 'use-cases',
        relatedTopics: ['schools', 'results'],
        priority: 7,
        suggestedFollowUps: ['How does Knit help schools?', 'What results can I expect?']
    },

    // Results
    {
        keywords: ['results', 'roi', 'benefits', 'outcomes', 'success', 'performance', 'improvement', 'better', 'statistics', 'stats', 'numbers'],
        question: 'What results can I expect?',
        answer: 'Our clients consistently see **transformational results**:\n\n📈 **94%+** recovery rates (up from 75–85%)\n⏰ **15+ hours** saved per week on admin\n📉 **40% reduction** in overdue accounts\n⚡ **60% faster** payment processing\n❤️ **Improved relationships** through empathetic communication\n\nKnit typically pays for itself within the **first month**.',
        category: 'results',
        relatedTopics: ['use-cases', 'features'],
        priority: 9,
        suggestedFollowUps: ['How does Knit help schools?', 'What are your pricing plans?', 'Book a demo']
    },

    // Contact & Demo
    {
        keywords: ['contact', 'reach', 'email', 'get in touch', 'talk to', 'speak with', 'call', 'address'],
        question: 'How can I contact Knit?',
        answer: 'We\'d love to hear from you! 🤝\n\n📧 **Email**: sales@knit.cash\n💬 **WhatsApp**: +27 65 952 0478\n🌐 **Website**: www.knit.cash\n\nWe typically respond within **2 hours** during business hours (Mon–Fri, 8am–5pm SAST).',
        category: 'contact',
        relatedTopics: ['demo'],
        priority: 8,
        suggestedFollowUps: ['Book a demo', 'What are your pricing plans?']
    },
    {
        keywords: ['demo', 'book demo', 'schedule', 'meeting', 'presentation', 'show me', 'see it', 'demonstration', 'walkthrough'],
        question: 'How do I book a demo?',
        answer: 'Booking a demo is easy! 🎯\n\n1️⃣ Click **"Book a Demo"** on our website\n2️⃣ Email **sales@knit.cash**\n3️⃣ WhatsApp **+27 65 952 0478**\n4️⃣ Fill out our **contact form**\n\nDemos last about **30 minutes** and are customised to your specific needs. We\'ll show you exactly how Knit can work for your organisation.',
        category: 'contact',
        relatedTopics: ['contact', 'free-trial'],
        priority: 9,
        suggestedFollowUps: ['Do you offer a free trial?', 'What are your pricing plans?']
    },

    // Technical
    {
        keywords: ['api', 'developer', 'technical', 'documentation', 'sdk', 'rest api', 'webhook'],
        question: 'Do you have an API?',
        answer: 'Yes! Our **Growth and Enterprise plans** include full API access:\n\n🔌 **RESTful API** with comprehensive documentation\n📦 **SDKs** for popular languages\n🔔 **Webhooks** for real-time event notifications\n👨‍💻 **Developer support** to help you integrate\n\nBuild custom workflows and connect Knit to any system.',
        category: 'technical',
        relatedTopics: ['integrations', 'pricing'],
        priority: 7,
        suggestedFollowUps: ['What integrations do you support?', 'What are your pricing plans?']
    },
    {
        keywords: ['mobile', 'app', 'tablet', 'ios', 'android', 'responsive'],
        question: 'Is there a mobile app?',
        answer: 'Our platform is **fully responsive** and works beautifully on any device:\n\n📱 Mobile phones\n📋 Tablets\n💻 Laptops & desktops\n\nWe also offer **mobile-optimised payment pages** for your customers. A dedicated mobile app is on our roadmap!',
        category: 'technical',
        priority: 6,
        suggestedFollowUps: ['What features does Knit offer?', 'Book a demo']
    },

    // Payments
    {
        keywords: ['payment methods', 'payment options', 'how to pay', 'credit card', 'debit', 'eft', 'bank transfer', 'debit order'],
        question: 'What payment methods do you support?',
        answer: 'We support **all major payment methods**:\n\n💳 Credit & debit cards\n🏦 EFT & Instant EFT\n📱 Mobile money\n🔄 Direct debit / debit orders\n\nPowered by **Stripe, Paystack, SimplePay & Peach Payments** for maximum flexibility.',
        category: 'payments',
        relatedTopics: ['integrations'],
        priority: 7,
        suggestedFollowUps: ['When do I receive payouts?', 'What integrations do you support?']
    },
    {
        keywords: ['payouts', 'settlements', 'when do i get paid', 'receive money', 'transfer', 'bank account'],
        question: 'When do I receive payouts?',
        answer: 'Payout speed depends on your plan:\n\n💼 **Basic**: Next-day payouts\n🚀 **Growth**: Same-day payouts\n🏢 **Enterprise**: Custom schedules available\n\nAll payouts are **automated** and deposited directly to your bank account. No manual intervention needed!',
        category: 'payments',
        relatedTopics: ['pricing'],
        priority: 7,
        suggestedFollowUps: ['What are your pricing plans?', 'What payment methods do you support?']
    },

    // Comparison
    {
        keywords: ['vs', 'compared to', 'alternative', 'competitor', 'difference', 'better than', 'why knit', 'why choose', 'unique', 'special'],
        question: 'What makes Knit different?',
        answer: 'What sets Knit apart:\n\n🧠 **AI-First** — Intelligent decisions, not just reminders\n❤️ **Empathetic** — Preserves relationships while recovering revenue\n⚡ **Fast Setup** — Days, not months\n🔗 **All-in-One** — Payments + recovery + reconciliation\n📈 **Proven** — 94%+ recovery rates\n💰 **ROI** — Typically pays for itself in month one\n\nWe don\'t just chase payments — we **transform** how you manage revenue.',
        category: 'comparison',
        relatedTopics: ['features', 'ai-engine'],
        priority: 8,
        suggestedFollowUps: ['What results can I expect?', 'Book a demo']
    },

    // Conversational / social
    {
        keywords: ['thank', 'thanks', 'appreciate', 'awesome', 'great', 'perfect', 'wonderful'],
        question: 'Thank you',
        answer: 'You\'re welcome! 😊 Is there anything else you\'d like to know about Knit?',
        category: 'social',
        priority: 5,
        suggestedFollowUps: ['Book a demo', 'What are your pricing plans?', 'How can I contact Knit?']
    },
    {
        keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'howdy', 'yo'],
        question: 'Greeting',
        answer: 'Hello! 👋 Welcome to Knit. I\'m here to help you learn about our financial infrastructure platform. What would you like to know?',
        category: 'social',
        priority: 5,
        suggestedFollowUps: ['What is Knit?', 'What are your pricing plans?', 'How does Knit help schools?']
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'take care'],
        question: 'Goodbye',
        answer: 'Goodbye! 👋 Feel free to come back any time. If you\'d like to take the next step, you can book a demo at **sales@knit.cash** or WhatsApp **+27 65 952 0478**.',
        category: 'social',
        priority: 5,
        suggestedFollowUps: ['Book a demo', 'How can I contact Knit?']
    },
    {
        keywords: ['yes', 'sure', 'okay', 'ok', 'yep', 'yeah', 'absolutely'],
        question: 'Affirmative',
        answer: 'Great! What would you like to explore next?',
        category: 'social',
        priority: 3,
        suggestedFollowUps: ['What are your pricing plans?', 'How does Knit work?', 'Book a demo']
    },
    {
        keywords: ['no', 'nope', 'not really', 'nothing else'],
        question: 'Negative',
        answer: 'No problem! If you ever need anything, I\'m here. You can also reach our team at **sales@knit.cash** or WhatsApp **+27 65 952 0478**. Have a great day! 😊',
        category: 'social',
        priority: 3,
        suggestedFollowUps: ['Book a demo', 'How can I contact Knit?']
    }
];

// ─── Fallbacks ───────────────────────────────────────────────────────

const fallbackResponses = [
    {
        message: "I'd love to help! I can answer questions about these topics:",
        suggestions: ['What is Knit?', 'Pricing plans', 'Book a demo', 'Security']
    },
    {
        message: "Great question! Here are some things I specialise in:",
        suggestions: ['Features', 'Implementation', 'Integrations', 'Contact us']
    },
    {
        message: "I want to give you the best answer. Try asking about:",
        suggestions: ['How Knit works', 'Results & ROI', 'Payment methods', 'Free trial']
    }
];

// ─── Stopwords (ignored during matching) ─────────────────────────────

const STOP_WORDS = new Set([
    'i', 'me', 'my', 'we', 'our', 'you', 'your', 'it', 'its',
    'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being',
    'the', 'a', 'an', 'and', 'or', 'but', 'if', 'so', 'as',
    'in', 'on', 'at', 'to', 'for', 'of', 'by', 'with', 'from',
    'do', 'does', 'did', 'has', 'have', 'had', 'can', 'could',
    'will', 'would', 'shall', 'should', 'may', 'might',
    'that', 'this', 'these', 'those', 'not', 'no',
    'about', 'up', 'out', 'just', 'also', 'very', 'really',
    'what', 'which', 'who', 'when', 'where', 'why', 'how',
    'all', 'each', 'some', 'any', 'more', 'most', 'other',
    'please', 'tell', 'know', 'want', 'need', 'like',
]);

// ─── Synonym Map ─────────────────────────────────────────────────────

const SYNONYMS: Record<string, string[]> = {
    'cost': ['price', 'pricing', 'fee', 'fees', 'charge', 'expensive', 'cheap', 'afford', 'rate', 'rates', 'subscription', 'budget', 'quote', 'rand', 'zar'],
    'feature': ['capability', 'function', 'tool', 'offer', 'include', 'provide'],
    'secure': ['safe', 'security', 'protect', 'protection', 'privacy', 'encrypted', 'hack'],
    'fast': ['quick', 'speed', 'rapid', 'instant', 'immediately'],
    'school': ['education', 'academy', 'learner', 'student', 'tuition', 'university', 'college'],
    'connect': ['integrate', 'integration', 'compatible', 'sync', 'link'],
    'begin': ['start', 'setup', 'onboard', 'implement', 'install', 'migrate', 'switch'],
    'collect': ['collection', 'recover', 'chase', 'debt', 'overdue', 'arrears', 'outstanding'],
    'demo': ['demonstration', 'presentation', 'walkthrough', 'show', 'preview'],
    'help': ['support', 'assist', 'assistance', 'service'],
};

// ─── Levenshtein Similarity ──────────────────────────────────────────

function levenshtein(a: string, b: string): number {
    const m = a.length, n = b.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    return dp[m][n];
}

function wordSimilarity(a: string, b: string): number {
    if (a === b) return 1;
    if (a.length < 3 || b.length < 3) return a === b ? 1 : 0;
    const maxLen = Math.max(a.length, b.length);
    return (maxLen - levenshtein(a, b)) / maxLen;
}

// ─── Tokeniser ───────────────────────────────────────────────────────

function tokenise(text: string): string[] {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length > 0);
}

function meaningfulTokens(text: string): string[] {
    return tokenise(text).filter(w => !STOP_WORDS.has(w) && w.length > 1);
}

// ─── Synonym expansion ──────────────────────────────────────────────

function expandWithSynonyms(word: string): string[] {
    const expanded = [word];
    for (const [root, syns] of Object.entries(SYNONYMS)) {
        if (word === root || syns.includes(word)) {
            expanded.push(root, ...syns);
        }
    }
    return [...new Set(expanded)];
}

// ─── Intent extraction ──────────────────────────────────────────────

function extractIntents(msg: string): Set<string> {
    const intents = new Set<string>();
    const lower = msg.toLowerCase();
    if (/how much|cost|pric|expens|afford|budget|quote|rand|zar/.test(lower)) intents.add('pricing');
    if (/feature|capabilit|function|tool|offer/.test(lower)) intents.add('features');
    if (/demo|book|schedule|meeting|show me|see it|presentation/.test(lower)) intents.add('contact');
    if (/contact|reach|email|phone|talk|speak|call/.test(lower)) intents.add('contact');
    if (/how long|when|time|duration|setup|implement|onboard|start/.test(lower)) intents.add('implementation');
    if (/secur|safe|encrypt|privacy|protect|hack/.test(lower)) intents.add('security');
    if (/compli|popia|gdpr|legal|certif|soc2|iso/.test(lower)) intents.add('security');
    if (/integrat|connect|compatible|works with|sage|xero|quickbooks/.test(lower)) intents.add('features');
    if (/result|roi|benefit|outcome|success|performance|improve|stat/.test(lower)) intents.add('results');
    if (/school|education|tuition|learner|student|university|college/.test(lower)) intents.add('use-cases');
    if (/collect|debt|overdue|arrears|outstanding|recover|chase/.test(lower)) intents.add('features');
    if (/pay|payment|credit|debit|eft|bank|payout/.test(lower)) intents.add('payments');
    if (/vs|compar|altern|competitor|differ|better|unique|why knit|why choose/.test(lower)) intents.add('comparison');
    return intents;
}

// ─── Follow-up detection ────────────────────────────────────────────

function isFollowUp(msg: string): boolean {
    return /^(tell me more|more info|more details|what else|go on|continue|elaborate|explain more|anything else|and\?|more|yes please|expand)/i.test(msg.trim());
}

function isQuestion(msg: string): boolean {
    return /\?$/.test(msg.trim()) || /^(what|how|when|where|why|who|is|are|do|does|can|could|will|would|should|tell)/i.test(msg.trim());
}

// ─── Core matching engine ───────────────────────────────────────────

export function findBestMatch(
    userMessage: string,
    conversationHistory: { role: string; content: string }[] = []
): ChatResponse {
    const normalised = userMessage.toLowerCase().trim();
    const tokens = meaningfulTokens(userMessage);
    const intents = extractIntents(normalised);

    // ── 1. Follow-up handling ──────────────────────────────────────
    if (isFollowUp(normalised) && conversationHistory.length >= 2) {
        // Find the last assistant message to determine context
        const lastAssistantMsgs = conversationHistory
            .filter(m => m.role === 'assistant')
            .slice(-2);

        if (lastAssistantMsgs.length > 0) {
            const lastAnswer = lastAssistantMsgs[lastAssistantMsgs.length - 1].content;

            // Find which KB item produced that answer and serve a related one
            for (const item of knowledgeBase) {
                if (lastAnswer.includes(item.answer.substring(0, 60))) {
                    const related = knowledgeBase.filter(
                        kb => item.relatedTopics?.includes(kb.category) && kb.answer !== item.answer
                    );
                    if (related.length > 0) {
                        const next = related[0];
                        return {
                            answer: next.answer,
                            suggestions: next.suggestedFollowUps || []
                        };
                    }
                }
            }
        }

        // Generic follow-up
        return {
            answer: "Here are some other things I can help with:",
            suggestions: ['What are your pricing plans?', 'How does the AI engine work?', 'Book a demo', 'What results can I expect?']
        };
    }

    // ── 2. Exact / direct keyword match ────────────────────────────
    const directHits: { item: KnowledgeItem; score: number }[] = [];

    for (const item of knowledgeBase) {
        let bestKeywordScore = 0;
        for (const kw of item.keywords) {
            if (normalised.includes(kw)) {
                // Longer keyword phrases are more specific → higher score
                const specificity = kw.split(' ').length;
                const score = (item.priority || 5) * specificity + kw.length / 5;
                bestKeywordScore = Math.max(bestKeywordScore, score);
            }
        }
        if (bestKeywordScore > 0) {
            directHits.push({ item, score: bestKeywordScore });
        }
    }

    // ── 3. Multi-intent: if multiple distinct categories matched, combine answers
    if (directHits.length >= 2) {
        const categories = new Set(directHits.map(h => h.item.category));
        if (categories.size >= 2) {
            // Sort by score, take top 2 distinct categories
            directHits.sort((a, b) => b.score - a.score);
            const seen = new Set<string>();
            const combined: KnowledgeItem[] = [];
            for (const hit of directHits) {
                if (!seen.has(hit.item.category) && combined.length < 2) {
                    seen.add(hit.item.category);
                    combined.push(hit.item);
                }
            }
            if (combined.length === 2) {
                const allSuggestions = [
                    ...(combined[0].suggestedFollowUps || []),
                    ...(combined[1].suggestedFollowUps || [])
                ];
                return {
                    answer: combined[0].answer + '\n\n---\n\n' + combined[1].answer,
                    suggestions: [...new Set(allSuggestions)].slice(0, 3)
                };
            }
        }
    }

    if (directHits.length > 0) {
        directHits.sort((a, b) => b.score - a.score);
        const best = directHits[0].item;
        return {
            answer: best.answer,
            suggestions: best.suggestedFollowUps || []
        };
    }

    // ── 4. Fuzzy matching with synonym expansion ───────────────────
    const expandedTokens = tokens.flatMap(expandWithSynonyms);
    const fuzzyHits: { item: KnowledgeItem; score: number }[] = [];

    for (const item of knowledgeBase) {
        let score = 0;
        const allKwWords = item.keywords.flatMap(k => tokenise(k));

        for (const tok of expandedTokens) {
            for (const kw of allKwWords) {
                const sim = wordSimilarity(tok, kw);
                if (sim >= 0.75) {
                    score += sim * (item.priority || 5);
                }
            }
        }

        // Boost if intent matches category
        if (intents.has(item.category)) score += 4;

        if (score > 0) fuzzyHits.push({ item, score });
    }

    if (fuzzyHits.length > 0) {
        fuzzyHits.sort((a, b) => b.score - a.score);
        if (fuzzyHits[0].score >= 4) {
            const best = fuzzyHits[0].item;
            return {
                answer: best.answer,
                suggestions: best.suggestedFollowUps || []
            };
        }
    }

    // ── 5. Smart fallback with contextual suggestions ──────────────
    // If user has been chatting, nudge toward CTA
    const msgCount = conversationHistory.filter(m => m.role === 'user').length;
    if (msgCount >= 3) {
        return {
            answer: "I might not have the exact answer to that, but our team would love to help! Would you like to book a quick demo or get in touch?",
            suggestions: ['Book a demo', 'How can I contact Knit?', 'What are your pricing plans?']
        };
    }

    const fb = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    return {
        answer: fb.message,
        suggestions: fb.suggestions
    };
}

export function resetConversationContext() {
    // No-op now — context is derived from conversation history
}
