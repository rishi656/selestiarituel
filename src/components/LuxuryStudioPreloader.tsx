import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LuxuryStudioPreloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if intro has already been shown in session
    const hasSeenIntro = sessionStorage.getItem('selestia_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    // Trigger curtain split after logo reveal (0.9s delay)
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('selestia_intro_seen', 'true');
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden">
          
          {/* LEFT CURTAIN PANEL */}
          <motion.div
            key="curtain-left"
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.0, ease: [0.85, 0, 0.15, 1] }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#080808] border-r border-selestia-gold/30 z-20 pointer-events-auto"
          >
            {/* Left Gold Accent Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-selestia-gold/10 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>

          {/* RIGHT CURTAIN PANEL */}
          <motion.div
            key="curtain-right"
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.0, ease: [0.85, 0, 0.15, 1] }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#080808] border-l border-selestia-gold/30 z-20 pointer-events-auto"
          >
            {/* Right Gold Accent Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-selestia-gold/10 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>

          {/* CENTERPIECE LOGO & ACCENT REVEAL */}
          <motion.div
            key="curtain-logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none px-6 text-center"
          >
            {/* Top Studio Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[10px] sm:text-xs font-mono text-selestia-gold uppercase tracking-[0.35em] mb-4"
            >
              SELESTIA RITUEL · STUDIO
            </motion.span>

            {/* Official Light Logo */}
            <img
              src="/assets/official-logo-light.png"
              alt="SELESTIA RITUEL"
              className="h-16 sm:h-24 w-auto object-contain max-w-[85vw] filter drop-shadow-[0_0_30px_rgba(249,189,42,0.35)]"
            />

            {/* Expanding Center Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '160px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-selestia-gold to-transparent my-4"
            />

            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.4em]">
              AHMEDABAD · INDIA · GLOBAL
            </span>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
