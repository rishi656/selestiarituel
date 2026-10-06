import React from 'react';
import { ArrowRight, CheckCircle2, Film, Camera, Video, Sparkles, Music, Clapperboard } from 'lucide-react';
import { SERVICES } from '../../data/agencyData';

interface ProductionPageProps {
  onOpenContactModal: (service?: string) => void;
}

export const ProductionPage: React.FC<ProductionPageProps> = ({ onOpenContactModal }) => {
  const service = SERVICES.find(s => s.id === 'production')!;

  const items = [
    { title: 'Brand Films & Commercials', desc: '4K cinema storytelling shot on RED and ARRI cameras with full film crew.', icon: Film },
    { title: 'Editorial & Product Photography', desc: 'Studio and lifestyle photography for luxury e-commerce and print campaigns.', icon: Camera },
    { title: 'Creative Brand Visual Assets', desc: 'Custom luxury graphic assets, social templates, and editorial layouts.', icon: Sparkles },
    { title: 'Motion Graphics & 3D VFX', desc: 'Custom 3D logo animations, product renders, and title sequences.', icon: Sparkles },
    { title: 'Post-Production & Color Grading', desc: 'DaVinci Resolve studio color grading and master editorial cutting.', icon: Clapperboard },
    { title: 'Sound Design & Scoring', desc: 'Custom soundscapes, voiceovers, and licensed soundtrack scoring.', icon: Music }
  ];

  return (
    <div className="bg-selestia-black text-white pt-28 pb-20 overflow-hidden">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 relative z-10">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-selestia-gold/30">
            <span>SERVICE UNIT 05</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            STORIES WORTH <span className="text-selestia-gold">TELLING.</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Creative production, commercial photography, brand graphic design and visual storytelling that bring brands to vivid life.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenContactModal('Production')}
              className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20"
            >
              <span>Book Production Unit</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Cinematic Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden relative border border-white/20 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
            alt="Cinematic Video Production"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-selestia-black via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-selestia-gold uppercase tracking-widest">Visual Brand Production</span>
              <h3 className="text-2xl font-bold font-display text-white">CHRONOS VELOCITY — Commercial Photography &amp; Assets</h3>
            </div>
            <button
              onClick={() => onOpenContactModal('Production')}
              className="bg-selestia-gold text-selestia-black font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-selestia-gold-dark transition-colors"
            >
              Request Production Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-extrabold font-display mb-12 text-white">PRODUCTION DISCIPLINES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-selestia-gold transition-colors">
                <div className="p-2.5 bg-selestia-gold/10 text-selestia-gold rounded-xl w-fit border border-selestia-gold/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white/5 py-20 border-y border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl font-extrabold font-display text-white">PRODUCTION DELIVERABLES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((del, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-selestia-gold flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-200">{del}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold font-display text-white mb-6">READY TO PRODUCE CINEMATIC CONTENT?</h2>
        <button
          onClick={() => onOpenContactModal('Production')}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Book Production Unit</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
