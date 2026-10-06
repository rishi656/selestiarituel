import React from 'react';
import { ArrowRight, CheckCircle2, Share2, Video, Sparkles, Users, Calendar, Megaphone } from 'lucide-react';
import { SERVICES } from '../../data/agencyData';

interface SocialMediaPageProps {
  onOpenContactModal: (service?: string) => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onOpenContactModal }) => {
  const service = SERVICES.find(s => s.id === 'social-media')!;

  const items = [
    { title: 'Social Media Strategy', desc: 'Custom content pillars, audience positioning, and brand voice guidelines.', icon: Share2 },
    { title: 'Brand Copywriting & Content', desc: 'High-converting social copy, editorial messaging, and brand story hooks.', icon: Sparkles },
    { title: 'Creative Graphic Design', desc: 'Bespoke Instagram carousels, graphic quote cards, and branded story templates.', icon: Sparkles },
    { title: 'Community Management', desc: 'Active DM responses, comment moderation, and proactive audience outreach.', icon: Users },
    { title: 'Monthly Content Calendars', desc: 'Fully organized publishing schedule with copywriting, hashtags, and timing.', icon: Calendar },
    { title: 'Paid Social & Amplification', desc: 'Boosting high-performing organic content into high-ROAS paid acquisition channels.', icon: Megaphone }
  ];

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <span>SERVICE UNIT 04</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            MAKE YOUR BRAND IMPOSSIBLE TO <span className="text-selestia-gold">IGNORE.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Strategy, content creation and targeted campaigns that build cult communities and convert followers into customers.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenContactModal('Social Media Marketing')}
              className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20"
            >
              <span>Grow My Social Presence</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-extrabold font-display mb-12">SOCIAL MEDIA DISCIPLINES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-selestia-gray-border p-6 rounded-2xl space-y-3 hover:border-selestia-gold transition-colors">
                <div className="p-2.5 bg-selestia-gray-light text-selestia-gold rounded-xl w-fit border border-selestia-gray-border">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-selestia-black">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-selestia-gray-light py-20 border-y border-selestia-gray-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl font-extrabold font-display text-selestia-black">WHAT YOU RECEIVE MONTHLY</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((del, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-selestia-gray-border flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-selestia-gold flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-800">{del}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold font-display mb-6">READY TO DOMINATE SOCIAL MEDIA?</h2>
        <button
          onClick={() => onOpenContactModal('Social Media Marketing')}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Grow My Social Presence</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
