import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Layout, Smartphone, Zap, Shield, Search, Cpu, ExternalLink, Globe } from 'lucide-react';
import { SERVICES, CASE_STUDIES } from '../../data/agencyData';

interface WebDesignDevPageProps {
  onOpenContactModal: (service?: string) => void;
}

export const WebDesignDevPage: React.FC<WebDesignDevPageProps> = ({ onOpenContactModal }) => {
  const service = SERVICES.find(s => s.id === 'web-design-dev')!;
  const teachersCase = CASE_STUDIES.find(c => c.id === 'the-teachers-academy');

  const items = [
    { title: 'UI/UX Design', desc: 'Bespoke wireframes, interactive Figma prototypes, and luxury editorial design systems.', icon: Layout },
    { title: 'Website Development', desc: 'Clean, modern React/TypeScript codebase with component-driven architecture.', icon: Code2 },
    { title: 'Landing Pages', desc: 'High-converting landing pages engineered specifically for targeted ad campaign conversion.', icon: Zap },
    { title: 'Corporate Websites', desc: 'Authoritative web platforms designed for enterprise B2B and institutional clients.', icon: Shield },
    { title: 'Custom Web Applications', desc: 'Bespoke client portals, calculators, and interactive web tools.', icon: Cpu },
    { title: 'Website Maintenance', desc: '24/7 security monitoring, automated cloud backups, and performance SLAs.', icon: Shield },
    { title: 'Performance Optimization', desc: 'Sub-second global loading times and 95+ Google Lighthouse scores.', icon: Smartphone },
    { title: 'SEO-Ready Development', desc: 'Semantic HTML5, automated schema markup, and canonical search structures.', icon: Search },
  ];

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <span>SERVICE UNIT 01</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            WEBSITES BUILT TO LOOK GOOD. <span className="text-selestia-gold">BUILT TO PERFORM.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            High-performance websites designed to look exceptional and convert visitors into long-term clients.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenContactModal('Web Design & Development')}
              className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-selestia-gold/20"
            >
              <span>Build My Website</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Capabilities */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-extrabold font-display mb-12 text-selestia-black">
          WHAT WE INCLUDE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Featured Live Web Project Showcase */}
      {teachersCase && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-selestia-black text-white rounded-3xl p-8 sm:p-12 border border-selestia-gold/40 gold-glow relative overflow-hidden space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-selestia-gold font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-selestia-gold/30">
                  FEATURED WEB DESIGN WORK
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-3">
                  {teachersCase.title}
                </h2>
                <p className="text-xs text-gray-400 font-mono mt-1">
                  Client: {teachersCase.client} | URL: <a href="https://theteachersacademy.co.in" target="_blank" rel="noopener noreferrer" className="text-selestia-gold hover:underline">theteachersacademy.co.in</a>
                </p>
              </div>

              <a
                href="https://theteachersacademy.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all flex-shrink-0"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {teachersCase.summary}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {teachersCase.results.map((res, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                      <div className="text-lg font-black font-display text-selestia-gold">{res.metric}</div>
                      <div className="text-[10px] text-gray-400">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 relative group">
                <img
                  src={teachersCase.image}
                  alt={teachersCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-selestia-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-white">
                  <span className="font-mono text-selestia-gold">Guajrat TET &amp; TAT Portal</span>
                  <span className="bg-selestia-gold/20 px-2.5 py-1 rounded border border-selestia-gold/40 text-[10px]">React &amp; TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process & Deliverables */}
      <section className="bg-selestia-gray-light py-20 border-y border-selestia-gray-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest">
              Deliverables
            </span>
            <h3 className="text-3xl font-bold font-display text-selestia-black">What You Receive</h3>
            <div className="space-y-3">
              {service.deliverables.map((del, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-selestia-gray-border">
                  <CheckCircle2 className="w-5 h-5 text-selestia-gold flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest">
              Engineered Benefits
            </span>
            <h3 className="text-3xl font-bold font-display text-selestia-black">Business Impact</h3>
            <div className="space-y-3">
              {service.benefits.map((ben, i) => (
                <div key={i} className="bg-selestia-black text-white p-4 rounded-xl border border-selestia-gold/30">
                  <span className="text-sm font-bold text-selestia-gold">0{i+1}. </span>
                  <span className="text-sm font-semibold text-white">{ben}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold font-display mb-6">READY TO ELEVATE YOUR DIGITAL PRESENCE?</h2>
        <button
          onClick={() => onOpenContactModal('Web Design & Development')}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Build My Website</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
