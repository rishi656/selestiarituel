import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingContact } from './components/FloatingContact';
import { AgencyChatbot } from './components/AgencyChatbot';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor, AmbientGlow } from './components/LuxuryEffects';
import { LuxuryStudioPreloader } from './components/LuxuryStudioPreloader';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WebDesignDevPage } from './pages/service-pages/WebDesignDevPage';
import { EcommercePage } from './pages/service-pages/EcommercePage';
import { DigitalMarketingPage } from './pages/service-pages/DigitalMarketingPage';
import { SocialMediaPage } from './pages/service-pages/SocialMediaPage';
import { ProductionPage } from './pages/service-pages/ProductionPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedModalService, setSelectedModalService] = useState<string>('');

  const handleOpenContactModal = (service: string = '') => {
    setSelectedModalService(service);
    setContactModalOpen(true);
  };

  return (
    <Router>
      <LuxuryStudioPreloader />
      <ScrollToTop />
      <CustomCursor />
      <AmbientGlow />
      <div className="min-h-screen flex flex-col bg-selestia-white text-selestia-black font-sans relative z-10">
        {/* Global Sticky Navbar */}
        <Navbar onOpenContactModal={() => handleOpenContactModal()} />

        {/* Main Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenContactModal={handleOpenContactModal} />} />
            
            {/* Services Overview */}
            <Route path="/services" element={<ServicesPage onOpenContactModal={handleOpenContactModal} />} />
            
            {/* Dedicated Service Pages */}
            <Route path="/services/web-design-development" element={<WebDesignDevPage onOpenContactModal={handleOpenContactModal} />} />
            <Route path="/services/ecommerce" element={<EcommercePage onOpenContactModal={handleOpenContactModal} />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage onOpenContactModal={handleOpenContactModal} />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaPage onOpenContactModal={handleOpenContactModal} />} />
            <Route path="/services/production" element={<ProductionPage onOpenContactModal={handleOpenContactModal} />} />
            
            {/* Studio Pages */}
            <Route path="/about" element={<AboutPage onOpenContactModal={() => handleOpenContactModal()} />} />
            <Route path="/work" element={<PortfolioPage onOpenContactModal={handleOpenContactModal} />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenContactModal={() => handleOpenContactModal()} />} />
            
            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          </Routes>
        </main>

        {/* Floating Quick Action Contact Widget */}
        <FloatingContact onOpenContactModal={() => handleOpenContactModal()} />

        {/* Floating AI Studio Assistant Chatbot */}
        <AgencyChatbot onOpenContactModal={handleOpenContactModal} />

        {/* Interactive Lead Generation Modal */}
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          defaultService={selectedModalService}
        />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
