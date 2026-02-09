import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import AIEnginePage from './components/AIEnginePage';
import CaseStudiesPage from './components/CaseStudiesPage';
import BlogImplementationNightmare from './components/BlogImplementationNightmare';
import BlogImplementationNightmareEditorial from './components/BlogImplementationNightmareEditorial';
import BlogPage from './components/BlogPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ai-engine" element={<AIEnginePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog/from-months-to-days" element={<BlogImplementationNightmare />} />
        <Route path="/blog/editorial/from-months-to-days" element={<BlogImplementationNightmareEditorial />} />
        <Route path="/blog" element={<BlogPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;