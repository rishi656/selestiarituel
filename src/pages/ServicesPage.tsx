import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Layout, ShoppingBag, TrendingUp, Share2, Film } from 'lucide-react';
import { SERVICES, CASE_STUDIES } from '../data/agencyData';

interface ServicesPageProps {
  onOpenContactModal: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContactModal }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-8 h-8" />,
    ShoppingBag: <ShoppingBag className="w-8 h-8" />,
    TrendingUp: <TrendingUp className="w-8 h-8" />,
    Share2: <Share2 className="w-8 h-8" />,
    Film: <Film className="w-8 h-8" />,
  };

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            WE BUILD, MARKET &amp; <span className="text-selestia-gold">GROW DIGITAL BRANDS.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Selestia Rituel brings five high-end studio units under one roof. From architecture and design to full-funnel media distribution, we deliver end-to-end digital mastery.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const relatedCase = CASE_STUDIES.find(c => c.category === service.id.replace('-dev', '')) || CASE_STUDIES[0];

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`bg-white border border-selestia-gray-border rounded-3xl p-8 sm:p-12 hover:border-selestia-gold/60 transition-all shadow-sm ${
                isEven ? '' : 'bg-selestia-gray-light/50'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Service Meta */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-extrabold font-mono text-selestia-gold">
                      {service.number}
                    </span>
                    <div className="p-3 bg-selestia-black text-selestia-gold rounded-2xl">
                      {iconMap[service.iconName]}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-extrabold font-display text-selestia-black">
                      {service.title}
                    </h2>
                    <p className="text-xs uppercase font-mono text-selestia-gold font-bold tracking-widest mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      <span>Explore Dedicated Unit</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>

                    <button
                      onClick={() => onOpenContactModal(service.title)}
                      className="inline-flex items-center font-bold text-gray-700 hover:text-selestia-black text-xs uppercase tracking-wider underline underline-offset-4"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>

                {/* Right Service Breakdown: Deliverables & Process */}
                <div className="lg:col-span-7 space-y-8 border-t lg:border-t-0 lg:border-l border-selestia-gray-border pt-8 lg:pt-0 lg:pl-10">
                  
                  {/* Capabilities & Features */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-selestia-gold mb-3">
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs font-medium text-gray-800 bg-selestia-gray-light p-2.5 rounded-lg border border-selestia-gray-border">
                          <CheckCircle2 className="w-4 h-4 text-selestia-gold flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Overview */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-selestia-gold mb-3">
                      Our Execution Process
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {service.process.map((step) => (
                        <div key={step.step} className="bg-white p-3 rounded-xl border border-selestia-gray-border">
                          <div className="text-[10px] font-mono text-selestia-gold font-bold">
                            STEP {step.step}
                          </div>
                          <div className="text-xs font-bold text-selestia-black line-clamp-1">
                            {step.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Result */}
                  <div className="p-4 rounded-2xl bg-selestia-black text-white flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-selestia-gold tracking-widest">
                        Featured Client Case
                      </div>
                      <div className="text-sm font-bold">{relatedCase.title}</div>
                    </div>
                    <Link
                      to="/work"
                      className="text-xs font-bold text-selestia-gold hover:underline flex items-center"
                    >
                      <span>View Study</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Final CTA Banner */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-selestia-black text-white rounded-3xl p-10 sm:p-16 text-center space-y-6 relative overflow-hidden border border-selestia-gold/30 gold-glow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            NEED A CUSTOM INTEGRATED <span className="text-selestia-gold">SOLUTION?</span>
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Book a strategy consultation with our studio directors to map your custom digital roadmap.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenContactModal()}
              className="inline-flex items-center justify-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-full px-8 py-4 text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
