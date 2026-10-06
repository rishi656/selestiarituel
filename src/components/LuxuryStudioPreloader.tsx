import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SelestiaLogo } from './SelestiaLogo';

export const LuxuryStudioPreloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already experienced intro in this browser session
    const hasSeenIntro = sessionStorage.getItem('selestia_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    // Ticking percentage animation (Cinematic timing)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('selestia_intro_seen', 'true');
          }, 600);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="intro-loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
          className="fixed inset-0 z-[9999] bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-14 pointer-events-auto select-none overflow-hidden"
        >
          {/* Top Header Information */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-selestia-gold uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-selestia-gold animate-ping" />
              <span>SELESTIA RITUEL EST. 2026</span>
            </div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest hidden sm:inline">
              CREATIVE &amp; DIGITAL STUDIO
            </span>
          </div>

          {/* Centerpiece Studio Logo Reveal */}
          <div className="flex flex-col items-center justify-center my-auto space-y-6 text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SelestiaLogo variant="light" size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs sm:text-sm font-mono text-gray-300 uppercase tracking-[0.35em]"
            >
              DESIGN · ENGINEERING · PERFORMANCE
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Percentage Display */}
          <div className="space-y-4 pt-5 border-t border-white/10">
            <div className="flex items-end justify-between font-mono">
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                INITIALIZING DIGITAL STUDIO...
              </span>
              <span className="text-4xl sm:text-6xl font-extrabold text-selestia-gold tracking-tighter">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Gold Progress Track */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-selestia-gold/50 via-selestia-gold to-selestia-gold-light"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
