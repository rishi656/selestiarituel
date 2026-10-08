import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, X, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/agencyData';

interface PortfolioPageProps {
  onOpenContactModal: (service?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenContactModal }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ecommerce' | 'marketing' | 'social' | 'production'>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredProjects = CASE_STUDIES.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Case Study Archive</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            WORK THAT COMMANDS <span className="text-selestia-gold">ATTENTION.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore selected digital transformations, web engineering projects, e-commerce storefronts, and performance campaigns built by Selestia Rituel.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-selestia-gray-border">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'web', label: 'Web Design & Dev' },
            { key: 'ecommerce', label: 'E-Commerce' },
            { key: 'marketing', label: 'Appointment Generation' },
            { key: 'social', label: 'Social Media' },
            { key: 'production', label: 'Production' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === tab.key
                  ? 'bg-selestia-black text-selestia-gold shadow-md'
                  : 'bg-selestia-gray-light text-gray-600 hover:text-selestia-black hover:bg-selestia-gray-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Projects */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setSelectedCase(project)}
              className="group bg-white border border-selestia-gray-border rounded-3xl overflow-hidden hover:border-selestia-gold hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden bg-selestia-black relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-selestia-black/80 backdrop-blur-md text-selestia-gold text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-selestia-gold/30">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-xs text-gray-500 font-mono">{project.client} · {project.year}</div>
                  <h3 className="text-2xl font-bold font-display text-selestia-black group-hover:text-selestia-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-selestia-gray-border">
                    {project.results.map((res, i) => (
                      <div key={i} className="text-center bg-selestia-gray-light p-2 rounded-xl">
                        <div className="text-base font-extrabold font-display text-selestia-black">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-gray-500 line-clamp-1">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-selestia-black group-hover:text-selestia-gold">
                <span>View Full Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-selestia-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-selestia-black text-white rounded-3xl shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto border border-selestia-gold/30"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-selestia-gold rounded-full bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono text-selestia-gold uppercase tracking-widest font-bold">
                    {selectedCase.categoryLabel} — {selectedCase.year}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-1">
                    {selectedCase.title}
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">Client: {selectedCase.client} | Industry: {selectedCase.industry}</p>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  {selectedCase.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl sm:text-4xl font-extrabold font-display text-selestia-gold">
                        {res.metric}
                      </div>
                      <div className="text-xs text-gray-300 font-medium">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-sm font-bold text-selestia-gold uppercase tracking-wider">The Challenge</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{selectedCase.challenge}</p>
                  </div>

                  <div className="space-y-2 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-sm font-bold text-selestia-gold uppercase tracking-wider">The Strategy</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{selectedCase.strategy}</p>
                  </div>
                </div>

                {/* Execution */}
                <div className="space-y-2 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-sm font-bold text-selestia-gold uppercase tracking-wider">The Execution</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{selectedCase.execution}</p>
                </div>

                {/* Services Provided */}
                <div>
                  <h3 className="text-xs font-bold text-selestia-gold uppercase tracking-wider mb-3">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.servicesProvided.map((s, idx) => (
                      <span key={idx} className="text-xs bg-selestia-gold/20 text-selestia-gold border border-selestia-gold/40 px-3 py-1.5 rounded-lg font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-gray-400">Want similar results for your business?</span>
                  <div className="flex items-center space-x-3">
                    {selectedCase.websiteUrl && (
                      <a
                        href={selectedCase.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase px-5 py-3 rounded-full border border-white/20 transition-all flex items-center space-x-2"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5 text-selestia-gold" />
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSelectedCase(null);
                        onOpenContactModal(selectedCase.categoryLabel);
                      }}
                      className="bg-selestia-gold text-selestia-black font-bold text-xs uppercase px-6 py-3 rounded-full hover:bg-selestia-gold-dark transition-colors flex items-center space-x-2 shadow-md shadow-selestia-gold/20"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20 border-t border-selestia-gray-border">
        <h2 className="text-3xl font-bold font-display mb-6">READY TO BUILD YOUR NEXT CASE STUDY?</h2>
        <button
          onClick={() => onOpenContactModal()}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
