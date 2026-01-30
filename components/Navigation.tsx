import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling on page load/navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (target === '/pricing') {
      navigate('/pricing');
      window.scrollTo(0, 0);
      return;
    }

    if (target === '/') {
      navigate('/');
      window.scrollTo(0, 0);
      return;
    }

    // Hash links
    if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate(`/${target}`);
      } else {
        const element = document.querySelector(target);
        if (element) {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else if (target === '#top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'AI Engine', href: '#ai-engine' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${isScrolled
        ? 'bg-white/95 backdrop-blur-sm border-surface-200 py-3'
        : 'bg-white/50 border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={(e) => handleNavigation(e, '/')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img src="/knit-logo.png" alt="Knit Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={(e) => handleNavigation(e, '#contact')}
            className="text-sm font-medium text-slate-900 hover:text-brand-600"
          >
            Contact Sales
          </button>
          <button
            onClick={(e) => handleNavigation(e, '#contact')}
            className="bg-brand-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-brand-800 transition-all shadow-sm"
          >
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-900 hover:text-brand-600 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-surface-200 shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className="text-base font-medium text-slate-700 hover:text-brand-600 px-2 py-2 block border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={(e) => handleNavigation(e, '#contact')}
              className="w-full text-slate-900 font-medium py-2 text-left px-2"
            >
              Contact Sales
            </button>
            <button
              onClick={(e) => handleNavigation(e, '#contact')}
              className="w-full bg-brand-900 text-white px-5 py-3 rounded text-base font-medium"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;