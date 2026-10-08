import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, Clock, Globe } from 'lucide-react';
import { SelestiaLogo } from '../components/SelestiaLogo';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web Design & Development',
    budget: '$1,000 - $2,500',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://formsubmit.co/ajax/info.selestiarituel@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Company: formData.company || 'Not Specified',
          Email: formData.email,
          Phone: formData.phone || 'Not Provided',
          Service_Requested: formData.service,
          Estimated_Budget: formData.budget,
          Project_Message: formData.message || 'No additional details provided.',
          _subject: `📩 New Website Inquiry: ${formData.name} (${formData.service})`,
          _template: 'table'
        })
      });
    } catch (err) {
      console.error('Email submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Studio Inquiry</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            LET'S BUILD SOMETHING <span className="text-selestia-gold">REMARKABLE.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ready to transform your brand identity or scale your digital acquisition? Fill out the project form below or connect directly with our studio directors.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form */}
          <div className="lg:col-span-7 bg-selestia-black text-white p-8 sm:p-12 rounded-3xl border border-selestia-gold/30 shadow-2xl gold-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold font-display text-white">START A PROJECT INQUIRY</h3>

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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Aethel Luxury House"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (800) 987-6543"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Service Unit
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
                    >
                      <option value="Web Design & Development">Web Design & Development</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Appointment Generation">Appointment Generation</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Production">Production</option>
                      <option value="Other">Other / Full Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Project Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors"
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
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project goals, timelines, competitors, or specific requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-selestia-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-selestia-gold/20 text-selestia-gold rounded-full flex items-center justify-center mx-auto border border-selestia-gold/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">INQUIRY SUBMITTED SUCCESSFULLY</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Selestia Rituel. Our lead strategist will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-white/10 text-white font-bold text-xs uppercase px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Direct Info & Interactive Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-selestia-gray-light border border-selestia-gray-border p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold font-display text-selestia-black">STUDIO CONTACTS</h3>

              <div className="space-y-4 text-sm text-gray-700">
                <a href="mailto:info.selestiarituel@gmail.com" className="flex items-center space-x-3 hover:text-selestia-gold transition-colors">
                  <div className="p-3 bg-white rounded-xl border border-selestia-gray-border text-selestia-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Email</div>
                    <div className="font-bold text-selestia-black">info.selestiarituel@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+918866468856" className="flex items-center space-x-3 hover:text-selestia-gold transition-colors">
                  <div className="p-3 bg-white rounded-xl border border-selestia-gray-border text-selestia-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Phone / Hotline</div>
                    <div className="font-bold text-selestia-black">+91 8866468856</div>
                  </div>
                </a>

                <a href="https://wa.me/918866468856" target="_blank" rel="noreferrer" className="flex items-center space-x-3 hover:text-selestia-gold transition-colors">
                  <div className="p-3 bg-white rounded-xl border border-selestia-gray-border text-green-500">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">WhatsApp VIP Concierge</div>
                    <div className="font-bold text-selestia-black">+91 8866468856</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Studio Map & Location Card */}
            <div className="bg-selestia-black text-white p-8 rounded-3xl border border-selestia-gold/30 space-y-4 relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-selestia-gold" />
                <div>
                  <h4 className="text-base font-bold font-display text-white">HEADQUARTERS &amp; STUDIO</h4>
                  <p className="text-xs text-gray-400">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-300 space-y-1">
                <div className="font-bold text-white">Selestia Rituel Creative &amp; Digital Studio</div>
                <div>Ahmedabad, Gujarat, India</div>
                <div className="text-selestia-gold pt-1">Open Monday – Saturday: 9:00 AM – 7:00 PM IST</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
