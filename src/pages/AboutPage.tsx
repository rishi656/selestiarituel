import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart, Award, Target, Users } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/agencyData';
import { SelestiaLogo } from '../components/SelestiaLogo';

interface AboutPageProps {
  onOpenContactModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContactModal }) => {
  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Identity</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            WE ARE A CREATIVE &amp; DIGITAL STUDIO BUILT FOR BRANDS WITH <span className="text-selestia-gold">AMBITION.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-editorial text-xl italic">
            "We believe digital experiences should move people, command attention, and generate undeniable business value."
          </p>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="bg-selestia-gray-light py-20 border-y border-selestia-gray-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-selestia-black">
              BORN AT THE INTERSECTION OF DESIGN &amp; PERFORMANCE
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Selestia Rituel was founded with a singular conviction: traditional digital agencies force brands to choose between beautiful creative design or quantitative performance marketing.
              </p>
              <p>
                We engineered a new studio model. By integrating high-end UI/UX design, custom full-stack web engineering, performance media buying, and cinema-grade film production into one agile studio, we eliminate agency friction and accelerate growth.
              </p>
              <p>
                Our name reflects our commitment to the ritual of excellence: rigorous strategic inquiry, relentless iteration, and uncompromised aesthetic distinction.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-selestia-black text-white p-8 sm:p-12 rounded-3xl border border-selestia-gold/30 gold-glow relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between">
                <SelestiaLogo variant="light" size="sm" />
                <span className="text-xs font-mono text-selestia-gold font-bold">STUDIO MANIFESTO</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-editorial italic text-selestia-gold-light leading-relaxed">
                "Good design makes a brand visible. Exceptional strategy makes a brand essential."
              </blockquote>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>Sakshi Soni &amp; Rishi Gosai</span>
                <span className="text-selestia-gold">Founders &amp; Executive Directors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values / Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-selestia-gold uppercase tracking-widest">
            Core Beliefs
          </span>
          <h2 className="text-4xl font-extrabold font-display text-selestia-black">
            WHY WE EXIST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-selestia-gray-border p-8 rounded-3xl space-y-4 hover:border-selestia-gold transition-colors">
            <div className="p-3 bg-selestia-gray-light text-selestia-gold rounded-2xl w-fit">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-selestia-black">Bespoke Mastery</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We never recycle templates or compromise on details. Every project is engineered custom from zero to fit exact brand identity objectives.
            </p>
          </div>

          <div className="bg-white border border-selestia-gray-border p-8 rounded-3xl space-y-4 hover:border-selestia-gold transition-colors">
            <div className="p-3 bg-selestia-gray-light text-selestia-gold rounded-2xl w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-selestia-black">Uncompromised Speed</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In digital business, speed is a competitive moat. We optimize code, creative workflows, and media iteration to stay ahead of market trends.
            </p>
          </div>

          <div className="bg-white border border-selestia-gray-border p-8 rounded-3xl space-y-4 hover:border-selestia-gold transition-colors">
            <div className="p-3 bg-selestia-gray-light text-selestia-gold rounded-2xl w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-selestia-black">Transparent Partnership</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We operate as an internal extension of your executive leadership team. Real-time metrics, honest feedback, and shared revenue accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Founders & Leadership (Photo-Free Luxury Cards) */}
      <section className="py-24 bg-selestia-black text-white border-t border-selestia-gold/30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold font-mono text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-selestia-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-selestia-gold" />
              <span>Studio Founders</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white">
              MEET THE <span className="text-selestia-gold">FOUNDERS</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              The executive leadership and creative strategy guiding Selestia Rituel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-[#111111] border border-selestia-gold/40 rounded-3xl p-8 sm:p-12 space-y-8 gold-glow gold-glow-hover relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Background ambient lighting spotlight */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Top Monogram Emblem */}
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-20 rounded-2xl bg-selestia-gold/15 text-selestia-gold border border-selestia-gold/50 flex items-center justify-center font-luxury font-bold text-3xl shadow-xl group-hover:bg-selestia-gold group-hover:text-selestia-black transition-all duration-500">
                      {member.initials}
                    </div>
                    <span className="text-[10px] font-mono text-selestia-gold font-bold uppercase tracking-widest bg-selestia-gold/10 px-3.5 py-1 rounded-full border border-selestia-gold/30">
                      EXECUTIVE DIRECTOR
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-selestia-gold transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-selestia-gold uppercase tracking-wider font-mono">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 relative z-10">
                  <span className="font-mono text-selestia-gold">SELESTIA RITUEL EST. 2026</span>
                  <button
                    onClick={onOpenContactModal}
                    className="inline-flex items-center space-x-1.5 font-bold text-white group-hover:text-selestia-gold transition-colors uppercase text-xs tracking-wider"
                  >
                    <span>Connect with {member.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-3xl font-bold font-display mb-6">WANT TO PARTNER WITH SELESTIA RITUEL?</h2>
        <button
          onClick={onOpenContactModal}
          className="inline-flex items-center font-bold text-selestia-black bg-selestia-gold hover:bg-selestia-gold-dark px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
};
