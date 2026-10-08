import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layout,
  ShoppingBag,
  TrendingUp,
  Share2,
  Film,
  CheckCircle2,
  Zap,
  ChevronRight,
  Star,
  Award,
  Play,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Clock,
  Target,
  BarChart3,
  Calculator
} from 'lucide-react';
import { SERVICES, CASE_STUDIES, TESTIMONIALS, BLOG_POSTS, TEAM_MEMBERS } from '../data/agencyData';
import { SelestiaLogo } from '../components/SelestiaLogo';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ShowreelModal } from '../components/ShowreelModal';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { GridLinesBackground } from '../components/GridLinesBackground';

interface HomePageProps {
  onOpenContactModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContactModal }) => {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-6 h-6 text-selestia-gold" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-selestia-gold" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-selestia-gold" />,
    Share2: <Share2 className="w-6 h-6 text-selestia-gold" />,
    Film: <Film className="w-6 h-6 text-selestia-gold" />,
  };

  const processSteps = [
    { step: '01', title: 'DISCOVER', subtitle: 'Audit & Positioning', desc: 'Thorough brand research, competitor gap mapping, user persona modeling, and growth objectives alignment.' },
    { step: '02', title: 'STRATEGIZE', subtitle: 'Architecture & Media', desc: 'Engineering the technical blueprint, UI design systems, search keyword targets, and paid ad acquisition funnels.' },
    { step: '03', title: 'CREATE', subtitle: 'Engineering & Production', desc: 'Custom React/TypeScript coding, luxury editorial UI design, 4K commercial filming, and conversion copy.' },
    { step: '04', title: 'LAUNCH', subtitle: 'Deployment & Ads', desc: 'Global CDN deployment, Lighthouse 95+ speed optimization, search indexing, and multi-channel campaign launch.' },
    { step: '05', title: 'OPTIMIZE', subtitle: 'Data Scaling & CRO', desc: 'Real-time analytics auditing, A/B checkout testing, continuous creative iteration, and revenue scaling.' },
  ];

  return (
    <div className="bg-selestia-white text-selestia-black pt-20 overflow-hidden relative">
      
      {/* Showreel Lightbox Modal */}
      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />

      {/* ================================================== */}
      {/* SECTION 1 — HERO (Ultra-Luxury Agency Masterpiece)*/}
      {/* ================================================== */}
      <section className="relative flex flex-col items-center justify-center pt-14 pb-20 px-4 sm:px-6 lg:px-8 bg-selestia-white text-selestia-black overflow-hidden text-center">
        
        {/* Subtle Radial Gold Spotlight & Clean Grid Overlay */}
        <GridLinesBackground />

        <div className="max-w-6xl mx-auto w-full space-y-10 relative z-10">
          
          {/* Top Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-white text-selestia-black text-xs uppercase tracking-widest font-semibold shadow-md border border-selestia-gold/50 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-selestia-gold animate-pulse shadow-sm shadow-selestia-gold" />
            <span className="text-selestia-black font-bold font-mono">SELESTIA RITUEL</span>
            <span className="text-gray-400">|</span>
            <span className="text-selestia-gold font-bold">CREATIVE &amp; DIGITAL STUDIO</span>
          </motion.div>

          {/* Balanced Luxury Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-selestia-black leading-[1.12] font-sans">
              WE BUILD{' '}
              <span className="font-editorial italic font-normal text-selestia-gold bg-selestia-gold/10 px-3 py-1 rounded-2xl border border-selestia-gold/30 shadow-sm inline-block">
                Digital Experiences
              </span>{' '}
              THAT SCALE BRANDS TO LEADERSHIP.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              Bespoke UI/UX Web Engineering, High-ROI Performance Marketing, and Strategic Brand Positioning for Market Leaders.
            </p>
          </motion.div>

          {/* Primary & Secondary Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 max-w-md mx-auto"
          >
            <button
              onClick={() => onOpenContactModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center font-extrabold text-selestia-black bg-selestia-gold hover:bg-selestia-black hover:text-white rounded-full px-10 py-4.5 text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-selestia-gold/30 group interactive"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('estimator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenContactModal('Project Strategy & Estimator');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-selestia-black bg-white hover:bg-selestia-gray-light border border-selestia-gray-border hover:border-selestia-gold rounded-full px-8 py-4.5 text-xs uppercase tracking-wider transition-all duration-300 shadow-sm group"
            >
              <Calculator className="w-4 h-4 text-selestia-gold mr-2 group-hover:scale-110 transition-transform" />
              <span>Calculate Project Scope</span>
            </button>
          </motion.div>

          {/* Key Proof Pills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-selestia-gray-border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-selestia-gold flex-shrink-0" />
              <span>Bespoke Engineering</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-selestia-gray-border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-selestia-gold flex-shrink-0" />
              <span>Sub-0.8s Speed SLA</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-selestia-gray-border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-selestia-gold flex-shrink-0" />
              <span>+340% ROAS Scale</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-selestia-gray-border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-selestia-gold flex-shrink-0" />
              <span>98.4% Retention</span>
            </div>
          </motion.div>

          {/* High-Impact Studio Performance Matrix Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left"
          >
            <div className="bg-white border border-selestia-gray-border hover:border-selestia-gold border-t-4 border-t-selestia-gold p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-selestia-gold/15 text-selestia-black font-bold">
                  <TrendingUp className="w-6 h-6 text-selestia-gold" />
                </div>
                <span className="text-[10px] font-mono text-selestia-gold font-bold uppercase tracking-wider bg-selestia-gold/10 px-3 py-1 rounded-full border border-selestia-gold/30">
                  PAID ACQUISITION
                </span>
              </div>
              <div>
                <div className="text-3xl font-black font-display text-selestia-black group-hover:text-selestia-gold transition-colors">
                  +340% ROAS
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  Meta &amp; Google Scale
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Precision paid media buying, retargeting funnels, and data-driven ad creative optimization.
              </p>
            </div>

            <div className="bg-white border border-selestia-gray-border hover:border-selestia-gold border-t-4 border-t-selestia-gold p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-selestia-gold/15 text-selestia-black font-bold">
                  <Zap className="w-6 h-6 text-selestia-gold" />
                </div>
                <span className="text-[10px] font-mono text-selestia-gold font-bold uppercase tracking-wider bg-selestia-gold/10 px-3 py-1 rounded-full border border-selestia-gold/30">
                  WEB ARCHITECTURE
                </span>
              </div>
              <div>
                <div className="text-3xl font-black font-display text-selestia-black group-hover:text-selestia-gold transition-colors">
                  &lt;0.8s Speed
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  Global Load SLA
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bespoke React &amp; TypeScript web apps engineered for 99+ Lighthouse performance scores.
              </p>
            </div>

            <div className="bg-white border border-selestia-gray-border hover:border-selestia-gold border-t-4 border-t-selestia-gold p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-selestia-gold/15 text-selestia-black font-bold">
                  <Target className="w-6 h-6 text-selestia-gold" />
                </div>
                <span className="text-[10px] font-mono text-selestia-gold font-bold uppercase tracking-wider bg-selestia-gold/10 px-3 py-1 rounded-full border border-selestia-gold/30">
                  ORGANIC DOMINANCE
                </span>
              </div>
              <div>
                <div className="text-3xl font-black font-display text-selestia-black group-hover:text-selestia-gold transition-colors">
                  #1 Rankings
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  Search &amp; AI Visibility
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                High-intent technical SEO, authority building, and content strategy for search dominance.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2 — TRUST / INTRODUCTION                  */}
      {/* ================================================== */}
      <section className="py-24 bg-selestia-gray-light border-b border-selestia-gray-border relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-selestia-gray-border shadow-sm">
            <Sparkles className="w-4 h-4 text-selestia-gold" />
            <span>Studio Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-selestia-black leading-tight">
            CREATIVE THINKING. DIGITAL EXECUTION. <span className="text-selestia-gold">REAL GROWTH.</span>
          </h2>

          <p className="text-base sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-sans">
            Selestia Rituel combines creative design, technology, marketing and production under one studio. We reject generic agency templates in favor of bespoke craftsmanship, high-frequency ROI, and brand identities engineered to outlast competition.
          </p>

          <div className="pt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-selestia-gold to-transparent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3 — SERVICES                              */}
      {/* ================================================== */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-selestia-black tracking-tight mt-3">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            Integrated studio disciplines designed to elevate brand perception and scale digital revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-selestia-gray-border rounded-3xl p-8 hover:border-selestia-gold hover:shadow-2xl transition-all duration-400 flex flex-col justify-between gold-glow-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black font-mono text-gray-300 group-hover:text-selestia-gold transition-colors">
                    {service.number}
                  </span>
                  <div className="p-3.5 bg-selestia-gray-light text-selestia-black rounded-2xl group-hover:bg-selestia-black group-hover:text-selestia-gold transition-all duration-300 border border-selestia-gray-border">
                    {iconMap[service.iconName] || <Layout className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-selestia-black mb-3 group-hover:text-selestia-black transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold bg-selestia-gray-light text-gray-800 px-3 py-1 rounded-lg border border-selestia-gray-border"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-selestia-gray-border flex items-center justify-between">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-selestia-black group-hover:text-selestia-gold transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <button
                  onClick={() => onOpenContactModal(service.title)}
                  className="text-[11px] font-bold text-gray-500 hover:text-selestia-black uppercase tracking-wider underline"
                >
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}

          {/* Full Studio Retainer Card */}
          <div className="bg-selestia-black text-white rounded-3xl p-8 flex flex-col justify-between border border-selestia-gold/40 gold-glow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-selestia-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-selestia-gold uppercase tracking-widest font-bold bg-white/10 px-3 py-1 rounded-full border border-selestia-gold/30">
                  06 — FULL RETAINER
                </span>
                <Award className="w-7 h-7 text-selestia-gold" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mt-4 mb-3">
                INTEGRATED STUDIO RETAINER
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Your entire dedicated digital department: UI design, web engineering, paid acquisition, social growth, and creative brand strategy under one roof.
              </p>
            </div>
            <button
              onClick={() => onOpenContactModal('Full Studio Retainer')}
              className="w-full py-4 px-6 font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-2xl uppercase text-xs tracking-wider transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-selestia-gold/20"
            >
              <span>Discuss Studio Retainer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* INTERACTIVE PROJECT ESTIMATOR & SCOPE CALCULATOR  */}
      {/* ================================================== */}
      <section id="estimator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator onOpenContactModal={onOpenContactModal} />
      </section>

      {/* ================================================== */}
      {/* SECTION 4 — FEATURED WORK                         */}
      {/* ================================================== */}
      <section className="py-28 bg-selestia-gray-light border-y border-selestia-gray-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-selestia-gray-border">
                Portfolio Showcase
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-selestia-black tracking-tight mt-3">
                SELECTED WORK
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-selestia-black hover:text-selestia-gold transition-colors bg-white px-5 py-3 rounded-full border border-selestia-gray-border shadow-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 text-selestia-gold" />
            </Link>
          </div>

          {/* Asymmetric Portfolio Grid with Slide-In From Left Scroll Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {CASE_STUDIES.filter(c => c.featured).map((work, idx) => {
              const isLarge = idx % 2 === 0;
              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
                  whileHover={{ y: -6 }}
                  className={`${
                    isLarge ? 'lg:col-span-7' : 'lg:col-span-5'
                  } group bg-white border border-selestia-gray-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-selestia-black">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-selestia-black/90 via-selestia-black/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-selestia-black/90 backdrop-blur-md text-selestia-gold text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-selestia-gold/40">
                        {work.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs text-gray-300 font-mono mb-1">{work.industry} · {work.year}</div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-selestia-gold transition-colors">
                        {work.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {work.summary}
                    </p>

                    {/* Results Badges */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-selestia-gray-border">
                      {work.results.map((res, i) => (
                        <div key={i} className="text-center bg-selestia-gray-light p-2.5 rounded-xl border border-selestia-gray-border">
                          <div className="text-base sm:text-lg font-extrabold font-display text-selestia-black">
                            {res.metric}
                          </div>
                          <div className="text-[10px] text-gray-500 line-clamp-1">{res.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Link
                        to="/work"
                        className="inline-flex items-center text-xs font-bold text-selestia-black group-hover:text-selestia-gold uppercase tracking-wider"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5 — RESULTS / METRICS                     */}
      {/* ================================================== */}
      <section className="py-28 bg-selestia-black text-white relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-selestia-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono text-selestia-gold uppercase tracking-widest font-bold bg-white/10 px-3.5 py-1 rounded-full border border-selestia-gold/30">
              Proven Performance
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              CREATIVE IS GOOD. <span className="text-selestia-gold">RESULTS ARE BETTER.</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Empirical impact delivered across digital platforms for our global client portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-2 hover:border-selestia-gold/60 transition-all gold-glow-hover">
              <div className="text-4xl sm:text-6xl font-extrabold font-display text-selestia-gold">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Projects Delivered
              </div>
              <div className="text-[11px] text-gray-400">Web, E-Com &amp; Campaigns</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-2 hover:border-selestia-gold/60 transition-all gold-glow-hover">
              <div className="text-4xl sm:text-6xl font-extrabold font-display text-selestia-gold">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Brands Transformed
              </div>
              <div className="text-[11px] text-gray-400">Luxury &amp; Modern Tech</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-2 hover:border-selestia-gold/60 transition-all gold-glow-hover">
              <div className="text-4xl sm:text-6xl font-extrabold font-display text-selestia-gold">
                <AnimatedCounter end={12} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Industries Served
              </div>
              <div className="text-[11px] text-gray-400">Jewelry, SaaS, Beauty, Architecture</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center space-y-2 hover:border-selestia-gold/60 transition-all gold-glow-hover">
              <div className="text-4xl sm:text-6xl font-extrabold font-display text-selestia-gold">
                <AnimatedCounter end={340} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Average Revenue Growth
              </div>
              <div className="text-[11px] text-gray-400">Year-over-Year Scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 7 — OUR PROCESS                           */}
      {/* ================================================== */}
      <section className="py-28 bg-selestia-gray-light border-y border-selestia-gray-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-selestia-gray-border">
              Execution Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-selestia-black tracking-tight">
              FROM IDEA TO IMPACT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Steps Navigation List */}
            <div className="lg:col-span-5 space-y-3">
              {processSteps.map((p, idx) => (
                <button
                  key={p.step}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    activeProcessStep === idx
                      ? 'bg-selestia-black text-white border-selestia-gold shadow-xl'
                      : 'bg-white text-selestia-black border-selestia-gray-border hover:border-selestia-gold/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded ${
                      activeProcessStep === idx ? 'bg-selestia-gold text-selestia-black' : 'bg-selestia-gray-light text-selestia-gold'
                    }`}>
                      {p.step}
                    </span>
                    <div>
                      <div className="text-base font-bold font-display">{p.title}</div>
                      <div className={`text-xs ${activeProcessStep === idx ? 'text-gray-300' : 'text-gray-500'}`}>{p.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeProcessStep === idx ? 'rotate-90 text-selestia-gold' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            {/* Active Step Preview Detail Card */}
            <div className="lg:col-span-7 bg-white border border-selestia-gray-border rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-selestia-gray-border">
                <span className="text-xs font-mono font-bold text-selestia-gold uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
                  STEP {processSteps[activeProcessStep].step} OF 05
                </span>
                <span className="text-xs text-gray-400 font-semibold">{processSteps[activeProcessStep].subtitle}</span>
              </div>

              <h3 className="text-3xl font-extrabold font-display text-selestia-black">
                {processSteps[activeProcessStep].title}
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
                {processSteps[activeProcessStep].desc}
              </p>

              <div className="pt-6 border-t border-selestia-gray-border flex items-center justify-between text-xs text-gray-500 font-semibold">
                <span>Phase Timeline: 1–2 Weeks</span>
                <button
                  onClick={() => onOpenContactModal()}
                  className="text-selestia-gold font-bold uppercase tracking-wider hover:underline flex items-center"
                >
                  <span>Start This Stage</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8 — TESTIMONIALS                          */}
      {/* ================================================== */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            Client Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-selestia-black tracking-tight">
            WHAT OUR PARTNERS SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white border border-selestia-gray-border p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:shadow-xl hover:border-selestia-gold transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-selestia-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-selestia-gold" />
                  ))}
                </div>
                <p className="text-gray-800 text-base leading-relaxed font-editorial italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-selestia-gray-border">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-selestia-gold"
                />
                <div>
                  <h4 className="text-sm font-bold font-display text-selestia-black">{t.author}</h4>
                  <p className="text-xs text-gray-500">{t.role} · <span className="text-selestia-gold font-bold">{t.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 9 — FOUNDERS & EXECUTIVE LEADERSHIP       */}
      {/* ================================================== */}
      <section className="py-24 bg-selestia-black text-white border-t border-selestia-gold/30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest font-mono bg-white/10 px-4 py-1.5 rounded-full border border-selestia-gold/30">
              Executive Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
              STUDIO <span className="text-selestia-gold">FOUNDERS</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
              Guided by a relentless standard of creative design mastery and measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-[#111111] border border-selestia-gold/40 rounded-3xl p-8 space-y-6 gold-glow gold-glow-hover relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-selestia-gold/15 text-selestia-gold border border-selestia-gold/50 flex items-center justify-center font-luxury font-bold text-2xl shadow-xl group-hover:bg-selestia-gold group-hover:text-selestia-black transition-all">
                      {member.initials}
                    </div>
                    <span className="text-[10px] font-mono text-selestia-gold font-bold uppercase tracking-widest bg-selestia-gold/10 px-3 py-1 rounded-full border border-selestia-gold/30">
                      {member.name.includes('Rishi') ? 'CO-FOUNDER' : 'FOUNDER'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-selestia-gold transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-selestia-gold uppercase tracking-wider font-mono mt-1">
                      {member.role}
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 relative z-10">
                  <span className="font-mono text-selestia-gold">SELESTIA RITUEL</span>
                  <button
                    onClick={() => onOpenContactModal(member.name)}
                    className="inline-flex items-center space-x-1 font-bold text-white group-hover:text-selestia-gold transition-colors uppercase text-[11px] tracking-wider"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 10 — BLOG / INSIGHTS                      */}
      {/* ================================================== */}
      <section className="py-28 bg-selestia-gray-light border-t border-selestia-gray-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-selestia-gray-border">
                Thought Leadership
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-selestia-black tracking-tight mt-3">
                INSIGHTS THAT MOVE BUSINESS FORWARD
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-selestia-black hover:text-selestia-gold transition-colors bg-white px-5 py-3 rounded-full border border-selestia-gray-border shadow-sm"
            >
              <span>Read All Articles</span>
              <ArrowRight className="w-4 h-4 ml-2 text-selestia-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white border border-selestia-gray-border rounded-3xl overflow-hidden hover:shadow-xl hover:border-selestia-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-selestia-black relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-selestia-black/80 text-selestia-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-selestia-black group-hover:text-selestia-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center text-xs font-bold text-selestia-black group-hover:text-selestia-gold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 11 — FINAL CTA                            */}
      {/* ================================================== */}
      <section className="py-32 bg-selestia-black text-white relative overflow-hidden">
        {/* Subtle Gold Orbit Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-selestia-gold/20 animate-orbit-slow pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
          <SelestiaLogo variant="light" size="lg" className="mx-auto" />

          <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            READY TO CREATE SOMETHING <span className="text-selestia-gold">REMARKABLE?</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us what you're building. We'll help you turn the idea into a digital experience that performs.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => onOpenContactModal()}
              className="inline-flex items-center justify-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark rounded-full px-10 py-5 text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-selestia-gold/40 gold-glow-hover group interactive"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
