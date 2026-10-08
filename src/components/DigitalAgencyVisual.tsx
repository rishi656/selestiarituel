import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Globe2,
  PieChart,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Search,
  Share2,
  Award,
  Calculator,
  MousePointerClick,
  Users
} from 'lucide-react';

interface DigitalAgencyVisualProps {
  onOpenEstimator?: () => void;
  onOpenContactModal?: (service?: string) => void;
}

export const DigitalAgencyVisual: React.FC<DigitalAgencyVisualProps> = ({
  onOpenEstimator,
  onOpenContactModal
}) => {
  const [activeTab, setActiveTab] = useState<'ads' | 'seo' | 'social' | 'web'>('ads');
  const [selectedRoasMultiplier, setSelectedRoasMultiplier] = useState<'3.5x' | '5.2x' | '8.4x'>('5.2x');

  return (
    <div className="w-full relative">
      
      {/* Main Digital Studio Growth Engine Card */}
      <div className="w-full bg-selestia-black text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-selestia-gold/40 gold-glow relative overflow-hidden">
        {/* Ambient Gold Mesh Backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-selestia-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-selestia-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Geometric Corner Lines */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-selestia-gold/40">+</div>
        <div className="absolute top-3 right-3 text-[10px] font-mono text-selestia-gold/40">+</div>
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-selestia-gold/40">+</div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-selestia-gold/40">+</div>

        <div className="relative z-10 space-y-6">
          
          {/* Header Bar with Embedded Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-selestia-gold animate-pulse shadow-sm shadow-selestia-gold" />
              <span className="text-xs font-mono font-bold text-selestia-gold uppercase tracking-widest">
                APPOINTMENT GENERATION MATRIX
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono text-selestia-gold font-bold uppercase tracking-wider bg-selestia-gold/10 px-3 py-1 rounded-full border border-selestia-gold/30 flex items-center space-x-1">
                <TrendingUp className="w-3 h-3 text-selestia-gold mr-1 inline" />
                <span>+340% ROAS SCALE</span>
              </span>
              <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/15 flex items-center space-x-1">
                <Zap className="w-3 h-3 text-selestia-gold mr-1 inline" />
                <span>0.8S SLA</span>
              </span>
            </div>
          </div>

          {/* Marketing Discipline Navigation (No Reels!) */}
          <div className="grid grid-cols-4 gap-1.5 p-1 bg-white/5 rounded-2xl border border-white/10 text-[11px]">
            <button
              onClick={() => setActiveTab('ads')}
              className={`py-2.5 px-2 rounded-xl font-bold transition-all text-center flex items-center justify-center space-x-1.5 ${
                activeTab === 'ads'
                  ? 'bg-selestia-gold text-selestia-black shadow-lg shadow-selestia-gold/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Target className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Paid Ads</span>
            </button>

            <button
              onClick={() => setActiveTab('seo')}
              className={`py-2.5 px-2 rounded-xl font-bold transition-all text-center flex items-center justify-center space-x-1.5 ${
                activeTab === 'seo'
                  ? 'bg-selestia-gold text-selestia-black shadow-lg shadow-selestia-gold/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Search className="w-3.5 h-3.5 hidden sm:inline" />
              <span>SEO Rank</span>
            </button>

            <button
              onClick={() => setActiveTab('social')}
              className={`py-2.5 px-2 rounded-xl font-bold transition-all text-center flex items-center justify-center space-x-1.5 ${
                activeTab === 'social'
                  ? 'bg-selestia-gold text-selestia-black shadow-lg shadow-selestia-gold/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Share2 className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Social Growth</span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`py-2.5 px-2 rounded-xl font-bold transition-all text-center flex items-center justify-center space-x-1.5 ${
                activeTab === 'web'
                  ? 'bg-selestia-gold text-selestia-black shadow-lg shadow-selestia-gold/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Web UX</span>
            </button>
          </div>

          {/* Dynamic Marketing Analytics & Strategy Interactive Viewport */}
          <div className="min-h-[260px] bg-[#111111] rounded-2xl p-5 border border-white/10 space-y-4 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 'ads' && (
                <motion.div
                  key="ads"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">
                        Google &amp; Meta Acquisition Funnel
                      </div>
                      <div className="text-base font-bold text-white font-display">Performance Scale Model</div>
                    </div>
                    
                    {/* Interactive ROAS Multiplier Selector */}
                    <div className="flex items-center space-x-1 bg-white/5 p-1 rounded-xl border border-white/10">
                      {(['3.5x', '5.2x', '8.4x'] as const).map((roas) => (
                        <button
                          key={roas}
                          onClick={() => setSelectedRoasMultiplier(roas)}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-lg transition-all ${
                            selectedRoasMultiplier === roas
                              ? 'bg-selestia-gold text-selestia-black'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {roas}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Animated Revenue Growth Curve */}
                  <div className="h-24 w-full relative pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70">
                      <defs>
                        <linearGradient id="goldFunnelGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F9BD2A" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#F9BD2A" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={
                          selectedRoasMultiplier === '3.5x'
                            ? "M 0 65 Q 80 55, 160 40 T 300 20"
                            : selectedRoasMultiplier === '5.2x'
                            ? "M 0 60 Q 70 48, 140 28 T 300 8"
                            : "M 0 62 Q 60 40, 130 18 T 300 2"
                        }
                        fill="none"
                        stroke="#F9BD2A"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="transition-all duration-500 ease-out"
                      />
                      <path
                        d={
                          selectedRoasMultiplier === '3.5x'
                            ? "M 0 65 Q 80 55, 160 40 T 300 20 L 300 70 L 0 70 Z"
                            : selectedRoasMultiplier === '5.2x'
                            ? "M 0 60 Q 70 48, 140 28 T 300 8 L 300 70 L 0 70 Z"
                            : "M 0 62 Q 60 40, 130 18 T 300 2 L 300 70 L 0 70 Z"
                        }
                        fill="url(#goldFunnelGrad)"
                        className="transition-all duration-500 ease-out"
                      />
                      <circle cx="300" cy={selectedRoasMultiplier === '3.5x' ? "20" : selectedRoasMultiplier === '5.2x' ? "8" : "2"} r="5" fill="#F9BD2A" className="animate-ping" />
                      <circle cx="300" cy={selectedRoasMultiplier === '3.5x' ? "20" : selectedRoasMultiplier === '5.2x' ? "8" : "2"} r="4" fill="#FFFFFF" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1 border-t border-white/10">
                    <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                      <div className="text-gray-400">Ad Impressions</div>
                      <div className="text-sm font-bold text-white font-display">4.8M+</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                      <div className="text-gray-400">Conversion Rate</div>
                      <div className="text-sm font-bold text-selestia-gold font-display">4.6%</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                      <div className="text-gray-400">Qualified Leads</div>
                      <div className="text-sm font-bold text-white font-display">18.4K</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'seo' && (
                <motion.div
                  key="seo"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Organic Search Dominance</div>
                      <div className="text-base font-bold text-white font-display">Technical &amp; Intent SEO</div>
                    </div>
                    <span className="text-xs font-bold text-selestia-gold bg-selestia-gold/10 px-2.5 py-1 rounded border border-selestia-gold/30">
                      #1 Google Positions
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">High-Intent Keywords Captured</span>
                      <span className="text-selestia-gold font-bold font-mono">1,450+ Keywords</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Organic Traffic Growth</span>
                      <span className="text-selestia-gold font-bold font-mono">+285% YoY</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Google Technical Audit Score</span>
                      <span className="text-selestia-gold font-bold font-mono">100 / 100</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'social' && (
                <motion.div
                  key="social"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Social Media &amp; Brand Strategy</div>
                      <div className="text-base font-bold text-white font-display">Audience &amp; Content Engine</div>
                    </div>
                    <span className="text-xs font-bold text-selestia-gold bg-selestia-gold/10 px-2.5 py-1 rounded border border-selestia-gold/30">
                      Viral Organic Scale
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Monthly Brand Impression Reach</span>
                      <span className="text-selestia-gold font-bold font-mono">2.5M+ Reach</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Creative Graphic &amp; Copy Strategy</span>
                      <span className="text-selestia-gold font-bold">Custom Production</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Audience Engagement Benchmark</span>
                      <span className="text-selestia-gold font-bold font-mono">+42% Industry Lead</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'web' && (
                <motion.div
                  key="web"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">High-Converting Web Studio</div>
                      <div className="text-base font-bold text-white font-display">React Architecture &amp; CRO</div>
                    </div>
                    <span className="text-xs font-bold text-selestia-gold bg-selestia-gold/10 px-2.5 py-1 rounded border border-selestia-gold/30">
                      Sub-0.8s Global SLA
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Bespoke Figma UI/UX Prototypes</span>
                      <span className="text-selestia-gold font-bold">Included</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Conversion Rate Optimization (CRO)</span>
                      <span className="text-selestia-gold font-bold font-mono">+38% Average Boost</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                      <span className="text-gray-300">Mobile-First High Speed Framework</span>
                      <span className="text-selestia-gold font-bold font-mono">100% Responsive</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Estimator / Action Button at bottom (NO REELS!) */}
          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <button
              onClick={() => {
                if (onOpenEstimator) onOpenEstimator();
                else if (onOpenContactModal) onOpenContactModal('Appointment Generation Matrix');
              }}
              className="inline-flex items-center space-x-2 text-xs font-bold text-selestia-gold hover:text-white transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-selestia-gold" />
              <span className="underline decoration-selestia-gold/40 underline-offset-4">Estimate Project Scope &amp; ROI</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-selestia-gold" />
            </button>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider">SELESTIA RITUEL 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
