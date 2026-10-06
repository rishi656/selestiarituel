import React from 'react';
import { ArrowRight, CheckCircle2, ShoppingBag, ShoppingCart, CreditCard, BarChart2, RefreshCw, Zap } from 'lucide-react';
import { SERVICES } from '../../data/agencyData';

interface EcommercePageProps {
  onOpenContactModal: (service?: string) => void;
}

export const EcommercePage: React.FC<EcommercePageProps> = ({ onOpenContactModal }) => {
  const service = SERVICES.find(s => s.id === 'ecommerce')!;

  const items = [
    { title: 'E-commerce Website Design', desc: 'Bespoke high-converting store layouts tailored to luxury product storytelling.', icon: ShoppingBag },
    { title: 'Shopify & Shopify Plus', desc: 'Custom Shopify Liquid & Headless storefront builds engineered for scale.', icon: ShoppingCart },
    { title: 'WooCommerce & Custom', desc: 'Scalable open-source or custom React commerce platforms.', icon: Zap },
    { title: 'Product Page Optimization', desc: 'Interactive 360 degree product visuals, size guides, and conversion hooks.', icon: RefreshCw },
    { title: 'Checkout Optimization', desc: 'Frictionless 1-click checkout flows reducing cart drop-off.', icon: CreditCard },
    { title: 'CRO & Analytics', desc: 'A/B testing, heatmap analysis, and customer LTV retention tracking.', icon: BarChart2 }
  ];

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <span>SERVICE UNIT 02</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            TURN SHOPPING INTO AN <span className="text-selestia-gold">EXPERIENCE.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Scalable e-commerce storefronts built for seamless shopping, high average order values, and sustainable brand growth.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenContactModal('E-Commerce')}
              className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20"
            >
              <span>Build My Store</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Capabilities */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-extrabold font-display mb-12 text-selestia-black">
          OUR E-COMMERCE CAPABILITIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-selestia-gray-border p-6 rounded-2xl space-y-3 hover:border-selestia-gold transition-colors"
              >
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
      <section className="bg-selestia-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-3xl font-extrabold font-display text-white">E-COMMERCE DELIVERABLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-selestia-gold flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-200">{del}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold font-display mb-6">READY TO SCALE YOUR ONLINE STORE?</h2>
        <button
          onClick={() => onOpenContactModal('E-Commerce')}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Build My Store</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
