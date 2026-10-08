import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube, Send, Check } from 'lucide-react';
import { SelestiaLogo } from './SelestiaLogo';

import { submitToFormSubmit } from '../utils/formSubmit';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      await submitToFormSubmit(
        { Subscriber_Email: newsletterEmail },
        `📬 New Newsletter Subscription: ${newsletterEmail}`
      );
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-selestia-black text-selestia-white border-t border-white/10 pt-16 sm:pt-24 pb-12 overflow-hidden relative">
      {/* Background Gold Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-selestia-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-selestia-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block focus:outline-none">
              <SelestiaLogo variant="light" size="lg" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Selestia Rituel is an elite creative &amp; digital studio. We engineer bespoke web experiences, scalable e-commerce, performance marketing campaigns, and cinematic visual media for ambitious global brands.
            </p>
            
            {/* Social Channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/selestiarituel?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-selestia-gold hover:text-selestia-black rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-selestia-gold hover:text-selestia-black rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-selestia-gold hover:text-selestia-black rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-selestia-gold hover:text-selestia-black rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/10"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-selestia-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-selestia-gold transition-colors inline-flex items-center">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-selestia-gold transition-colors inline-flex items-center">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-selestia-gold transition-colors inline-flex items-center">
                  <span>Work</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-selestia-gold transition-colors inline-flex items-center">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-selestia-gold transition-colors inline-flex items-center">
                  <span>Blog &amp; Insights</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-selestia-gold transition-colors inline-flex items-center">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-selestia-gold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/web-design-development" className="text-gray-300 hover:text-selestia-gold transition-colors">
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="text-gray-300 hover:text-selestia-gold transition-colors">
                  E-Commerce Studio
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-300 hover:text-selestia-gold transition-colors">
                  Appointment Generation
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing" className="text-gray-300 hover:text-selestia-gold transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/production" className="text-gray-300 hover:text-selestia-gold transition-colors">
                  Commercial Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-selestia-gold">
                Studio Contacts
              </h4>
              <div className="space-y-2.5 text-xs text-gray-300">
                <a href="mailto:info.selestiarituel@gmail.com" className="flex items-center space-x-2 hover:text-selestia-gold transition-colors">
                  <Mail className="w-4 h-4 text-selestia-gold flex-shrink-0" />
                  <span>info.selestiarituel@gmail.com</span>
                </a>
                <a href="tel:+918866468856" className="flex items-center space-x-2 hover:text-selestia-gold transition-colors">
                  <Phone className="w-4 h-4 text-selestia-gold flex-shrink-0" />
                  <span>+91 8866468856</span>
                </a>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-selestia-gold flex-shrink-0 mt-0.5" />
                  <span>Ahmedabad, Gujarat, India (Global Hubs: USA • UAE)</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest font-bold text-selestia-gold mb-2">
                Newsletter
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Get insights, ideas &amp; digital trends.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-selestia-gold transition-colors pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-selestia-gold hover:bg-selestia-gold-dark text-selestia-black font-bold px-3 rounded-md transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-selestia-gold font-medium">
                    Thank you for subscribing to Selestia Rituel!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © 2026 <span className="text-white font-semibold">Selestia Rituel</span>. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-selestia-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-selestia-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
