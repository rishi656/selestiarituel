import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, Send } from 'lucide-react';
import { SelestiaLogo } from './SelestiaLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: defaultService || 'Web Design & Development',
    budget: '$1,000 - $2,500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-selestia-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-selestia-black border border-selestia-gold/30 text-selestia-white rounded-2xl shadow-2xl p-6 sm:p-10 my-8 z-10 overflow-hidden"
          >
            {/* Corner Gold Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-selestia-gold hover:bg-white/5 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6 text-center sm:text-left">
                  <div className="inline-flex items-center space-x-2 text-selestia-gold text-xs uppercase tracking-widest font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Start Your Transformation</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display text-white">
                    LET'S BUILD SOMETHING <span className="text-selestia-gold">REMARKABLE.</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Fill out the inquiry form below and our studio team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Aethel Luxury Inc."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                      >
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Production">Production</option>
                        <option value="Full Studio Retainer">Full Studio Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                      >
                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Project Details &amp; Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals, target audience, timelines, or specific requirements..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative inline-flex items-center justify-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-xl px-6 py-4 text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-selestia-gold/20 disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-2">
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-selestia-gold/20 text-selestia-gold rounded-full flex items-center justify-center mx-auto mb-2 border border-selestia-gold/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">ENQUIRY RECEIVED</h3>
                <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out to <span className="text-selestia-gold font-semibold">SELESTIA RITUEL</span>. Our strategy lead will review your project details and respond within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors"
                  >
                    <span>Return to Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
