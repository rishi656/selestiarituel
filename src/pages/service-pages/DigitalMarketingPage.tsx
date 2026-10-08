import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/agencyData';

interface DigitalMarketingPageProps {
  onOpenContactModal: (service?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenContactModal }) => {
  const service = SERVICES.find(s => s.id === 'digital-marketing')!;

  const funnelSteps = [
    { level: 'STAGE 01 — INTENT & AUDIENCE ACQUISITION', title: 'Meta & Google Paid Ads + Lead Sourcing', desc: 'Targeting high-intent buyers via Google Search ads, Meta (Facebook & Instagram) lead gen forms, and verified B2B prospect lists.', metrics: 'High ROAS Paid & Organic Traffic' },
    { level: 'STAGE 02 — OUTREACH & RETARGETING', title: 'Multi-Channel Sequence & Ad Retargeting', desc: 'Engaging leads through automated cold email, LinkedIn sequences, and custom Meta/Google retargeting ad campaigns.', metrics: '45%+ Open & 12%+ Lead Opt-in' },
    { level: 'STAGE 03 — QUALIFICATION & BOOKING', title: 'Automated Calendar Handoff', desc: 'Filtering lead intent, qualifying prospects, and booking sales discovery calls directly into your CRM calendar (Calendly / HubSpot).', metrics: '15-30+ Booked Sales Calls / Mo' },
  ];

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <span>SERVICE UNIT 03 — APPOINTMENT GENERATION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            FILL YOUR CALENDAR WITH <span className="text-selestia-gold">QUALIFIED MEETINGS.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            High-converting Meta Ads, Google Ads, cold email outreach, and automated booking funnels engineered to convert targeted leads into high-value sales meetings.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenContactModal('Appointment Generation')}
              className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20"
            >
              <span>Book Sales Meetings</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Visually Engaging Marketing Funnel Section */}
      <section className="py-20 bg-selestia-black text-white px-4 sm:px-6 lg:px-8 my-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-selestia-gold uppercase tracking-widest font-bold">
              Architected Acquisition System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              THE SELESTIA APPOINTMENT GENERATION ENGINE
            </h2>
            <p className="text-xs text-gray-400">
              How Meta Ads, Google Ads, and outbound outreach work together to fill your sales calendar.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {funnelSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden hover:border-selestia-gold/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-selestia-gold font-bold tracking-widest">
                      {step.level}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white">{step.title}</h3>
                    <p className="text-xs text-gray-300 max-w-xl leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="bg-selestia-gold/10 text-selestia-gold border border-selestia-gold/30 px-4 py-2 rounded-xl text-xs font-bold text-center flex-shrink-0">
                    {step.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-extrabold font-display mb-8">APPOINTMENT GENERATION CAPABILITIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.features.map((feat, i) => (
            <div key={i} className="bg-white border border-selestia-gray-border p-5 rounded-2xl flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-selestia-gold flex-shrink-0" />
              <span className="text-xs font-bold text-gray-800">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold font-display mb-6">READY TO FILL YOUR SALES CALENDAR?</h2>
        <button
          onClick={() => onOpenContactModal('Appointment Generation')}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Book Sales Meetings</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
