import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import AIEnginePage from './components/AIEnginePage';
import CaseStudiesPage from './components/CaseStudiesPage';
import AboutPage from './components/AboutPage';
import BlogImplementationNightmare from './components/BlogImplementationNightmare';
import BlogImplementationNightmareEditorial from './components/BlogImplementationNightmareEditorial';
import BlogSchoolSavingsEditorial from './components/BlogSchoolSavingsEditorial';
import BlogDigitizingPayments from './components/BlogDigitizingPayments';
import BlogBeyondReminders from './components/BlogBeyondReminders';
import BlogFeeNonPaymentCrisis from './components/BlogFeeNonPaymentCrisis';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import SecurityPage from './components/SecurityPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CancellationPolicyPage from './components/CancellationPolicyPage';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ai-engine" element={<AIEnginePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog/from-months-to-days" element={<BlogImplementationNightmare />} />
        <Route path="/blog/editorial/from-months-to-days" element={<BlogImplementationNightmareEditorial />} />
        <Route path="/blog/editorial/ai-saving-schools-money" element={<BlogSchoolSavingsEditorial />} />
        <Route path="/blog/editorial/digitizing-school-payments" element={<BlogDigitizingPayments />} />
        <Route path="/blog/editorial/beyond-reminders" element={<BlogBeyondReminders />} />
        <Route path="/blog/editorial/fee-nonpayment-crisis" element={<BlogFeeNonPaymentCrisis />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
        <Route path="/security" element={<SecurityPage />} />

      </Routes>
      <Chatbot />
    </HashRouter>
  );
};

export default App;