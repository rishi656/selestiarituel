import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Sparkles } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-selestia-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-selestia-black border border-selestia-gold/40 text-white rounded-3xl shadow-2xl overflow-hidden z-10 p-2 sm:p-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2.5 bg-selestia-black/80 hover:bg-selestia-gold hover:text-selestia-black text-white rounded-full border border-white/20 transition-all"
              aria-label="Close showreel"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player Header */}
            <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-selestia-gold uppercase tracking-widest">
                  SELESTIA RITUEL — 2026 OFFICIAL SHOWREEL
                </span>
              </div>
              <span className="text-xs text-gray-400 font-mono hidden sm:inline-block">4K CINEMA MASTER</span>
            </div>

            {/* Simulated 4K Cinematic Video Container */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative bg-black border border-white/10 shadow-2xl">
              <iframe
                className="w-full h-full object-cover pointer-events-auto"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1&loop=1"
                title="Selestia Studio Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Footer details */}
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-400 gap-4">
              <div>
                <span className="text-white font-bold">Featured Works:</span> Aethel Luxe, Solaris Arch, Lumin Skincare, Chronos Horology
              </div>
              <div className="text-selestia-gold font-bold uppercase tracking-wider flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Producer Edition</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
