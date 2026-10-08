import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Calculator, ShieldCheck, Zap } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenContactModal: (service?: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenContactModal }) => {
  const [selectedService, setSelectedService] = useState('Web Design & Development');
  const [selectedBudget, setSelectedBudget] = useState('$1k - $2.5k');
  const [selectedTimeline, setSelectedTimeline] = useState('2-4 Weeks');

  const services = [
    { name: 'Web Design & Development', desc: 'Bespoke React/TypeScript website with 95+ speed score' },
    { name: 'E-Commerce Storefront', desc: 'Scalable Shopify Plus or custom digital storefront' },
    { name: 'Appointment Generation', desc: 'B2B cold outreach, email sequences & calendar booking' },
    { name: 'Social Media Marketing', desc: 'Brand copywriting, audience growth & paid social' },
    { name: 'Creative Brand Studio', desc: 'Graphic identity, campaign copy & luxury brand assets' },
  ];

  const budgets = ['$1k - $2.5k', '$2.5k - $5k', '$5k - $10k', '$10k+'];
  const timelines = ['Fast Track (1-2 Wks)', 'Standard (2-4 Wks)', 'Enterprise (4-8 Wks)'];

  return (
    <div className="bg-selestia-black text-white rounded-3xl p-8 sm:p-12 border border-selestia-gold/40 shadow-2xl gold-glow relative overflow-hidden my-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-selestia-gold text-xs font-mono uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-selestia-gold/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            ESTIMATE YOUR <span className="text-selestia-gold">PROJECT SCOPE</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Select your requirements below to calculate recommended studio deliverables and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Service Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-selestia-gold uppercase tracking-wider block">
                01. Select Primary Service Discipline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSelectedService(s.name)}
                    className={`text-left p-3.5 rounded-2xl border transition-all text-xs font-semibold ${
                      selectedService === s.name
                        ? 'bg-selestia-gold text-selestia-black border-selestia-gold shadow-lg font-bold'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-selestia-gold/50'
                    }`}
                  >
                    <div className="font-bold">{s.name}</div>
                    <div className={`text-[10px] mt-0.5 line-clamp-1 ${selectedService === s.name ? 'text-black/80' : 'text-gray-400'}`}>
                      {s.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Budget Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-selestia-gold uppercase tracking-wider block">
                02. Select Investment Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`py-3 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                      selectedBudget === b
                        ? 'bg-selestia-gold text-selestia-black border-selestia-gold shadow-md'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-selestia-gold/50'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Timeline Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-selestia-gold uppercase tracking-wider block">
                03. Target Delivery Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelines.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTimeline(t)}
                    className={`py-3 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                      selectedTimeline === t
                        ? 'bg-selestia-gold text-selestia-black border-selestia-gold shadow-md'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-selestia-gold/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Instant Estimate Result Summary Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-selestia-gold font-bold uppercase tracking-wider">
                ESTIMATED STUDIO PACKAGE
              </span>
              <Sparkles className="w-4 h-4 text-selestia-gold" />
            </div>

            <div className="space-y-3">
              <div className="text-xs text-gray-400">Selected Discipline</div>
              <div className="text-lg font-bold font-display text-white">{selectedService}</div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10 text-xs">
              <div>
                <div className="text-gray-400">Budget Range</div>
                <div className="font-bold text-selestia-gold text-sm">{selectedBudget}</div>
              </div>
              <div>
                <div className="text-gray-400">Delivery Speed</div>
                <div className="font-bold text-white text-sm">{selectedTimeline}</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="font-semibold text-white">Included Features:</div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-selestia-gold flex-shrink-0" />
                <span>Dedicated Studio Team Lead</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-selestia-gold flex-shrink-0" />
                <span>Bespoke Figma UI/UX &amp; High Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-selestia-gold flex-shrink-0" />
                <span>95+ Core Web Vitals SLA Guarantee</span>
              </div>
            </div>

            <button
              onClick={() => onOpenContactModal(`${selectedService} (${selectedBudget})`)}
              className="w-full py-4 px-6 font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-xl shadow-selestia-gold/20"
            >
              <span>Submit Inquiry With This Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
