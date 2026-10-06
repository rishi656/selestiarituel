import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { SelestiaLogo } from './SelestiaLogo';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceDropdownItems = [
    { title: 'Web Design & Development', path: '/services/web-design-development', desc: 'Bespoke UI/UX & high-performance code' },
    { title: 'E-Commerce', path: '/services/ecommerce', desc: 'Scalable Shopify & custom digital storefronts' },
    { title: 'Digital Marketing', path: '/services/digital-marketing', desc: 'SEO, Google & Meta ads full-funnel growth' },
    { title: 'Social Media Marketing', path: '/services/social-media-marketing', desc: 'Content strategy, brand graphics & paid social' },
    { title: 'Production', path: '/services/production', desc: 'Commercial photography & visual brand identity' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-selestia-gray-border py-3.5 shadow-md shadow-black/5'
            : 'bg-white/90 backdrop-blur-md border-b border-selestia-gray-border py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Official SELESTIA RITUEL Logo */}
            <Link to="/" className="group flex items-center focus:outline-none">
              <SelestiaLogo variant="dark" size={scrolled ? 'sm' : 'md'} />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                to="/"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === '/'
                    ? 'text-selestia-black font-bold'
                    : 'text-gray-700 hover:text-selestia-black'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`inline-flex items-center space-x-1 px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    location.pathname.startsWith('/services')
                      ? 'text-selestia-black font-bold'
                      : 'text-gray-700 hover:text-selestia-black'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-selestia-gold' : ''}`} />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-selestia-black text-white border border-selestia-gold/30 rounded-2xl shadow-2xl p-3 mt-2 z-50 overflow-hidden"
                    >
                      <div className="text-[10px] uppercase font-bold tracking-widest text-selestia-gold px-3 pt-2 pb-1 border-b border-white/10 flex items-center justify-between">
                        <span>Our Capabilities</span>
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <div className="py-1 space-y-1">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block p-2.5 rounded-xl hover:bg-white/10 transition-all duration-200 group/item"
                          >
                            <div className="text-sm font-bold text-white group-hover/item:text-selestia-gold flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-selestia-gold" />
                            </div>
                            <div className="text-xs text-gray-400 mt-0.5 group-hover/item:text-gray-300 line-clamp-1">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="p-2 border-t border-white/10 mt-1">
                        <Link
                          to="/services"
                          className="block text-center text-xs font-bold text-selestia-gold hover:underline py-1"
                        >
                          Explore All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/work"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === '/work'
                    ? 'text-selestia-black font-bold'
                    : 'text-gray-700 hover:text-selestia-black'
                }`}
              >
                Work
              </Link>

              <Link
                to="/about"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === '/about'
                    ? 'text-selestia-black font-bold'
                    : 'text-gray-700 hover:text-selestia-black'
                }`}
              >
                About
              </Link>

              <Link
                to="/blog"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname.startsWith('/blog')
                    ? 'text-selestia-black font-bold'
                    : 'text-gray-700 hover:text-selestia-black'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-selestia-black font-bold'
                    : 'text-gray-700 hover:text-selestia-black'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right side CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenContactModal}
                className="relative inline-flex items-center justify-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-full px-5 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-selestia-gold/20 gold-glow-hover group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-selestia-black hover:text-selestia-gold focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-selestia-black border-b border-selestia-gold/30 text-white shadow-2xl overflow-hidden md:hidden"
          >
            <div className="px-6 pt-6 pb-8 space-y-5 max-h-[85vh] overflow-y-auto">
              <div className="pb-3 border-b border-white/10">
                <SelestiaLogo variant="light" size="sm" />
              </div>

              <div className="flex flex-col space-y-3 font-display">
                <Link
                  to="/"
                  className="text-lg font-bold text-white hover:text-selestia-gold transition-colors"
                >
                  Home
                </Link>

                <div className="py-1">
                  <div className="text-xs uppercase font-bold text-selestia-gold tracking-widest mb-2 flex items-center space-x-1">
                    <span>Services</span>
                  </div>
                  <div className="pl-3 space-y-2 border-l border-selestia-gold/40">
                    <Link
                      to="/services"
                      className="block text-sm font-semibold text-white/90 hover:text-selestia-gold"
                    >
                      All Services Overview
                    </Link>
                    {serviceDropdownItems.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="block text-sm text-gray-300 hover:text-selestia-gold"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/work"
                  className="text-lg font-bold text-white hover:text-selestia-gold transition-colors"
                >
                  Work
                </Link>

                <Link
                  to="/about"
                  className="text-lg font-bold text-white hover:text-selestia-gold transition-colors"
                >
                  About
                </Link>

                <Link
                  to="/blog"
                  className="text-lg font-bold text-white hover:text-selestia-gold transition-colors"
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className="text-lg font-bold text-white hover:text-selestia-gold transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full py-3.5 px-6 font-bold text-center text-selestia-black bg-selestia-gold rounded-xl uppercase text-sm tracking-wider shadow-lg shadow-selestia-gold/20 flex items-center justify-center space-x-2"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
