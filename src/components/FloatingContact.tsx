import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, PhoneCall, Mail, X, Sparkles, Send } from 'lucide-react';

interface FloatingContactProps {
  onOpenContactModal: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenContactModal }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-3 bg-selestia-black border border-selestia-gold/40 text-white rounded-2xl shadow-2xl p-4 w-64 space-y-2 backdrop-blur-lg"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-selestia-gold uppercase tracking-wider flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Quick Connect</span>
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="text-gray-400 hover:text-white text-xs p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                setExpanded(false);
                onOpenContactModal();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 hover:bg-selestia-gold hover:text-selestia-black transition-all flex items-center space-x-3 text-xs font-bold group"
            >
              <Send className="w-4 h-4 text-selestia-gold group-hover:text-selestia-black" />
              <span>Start Project Inquiry</span>
            </button>

            <a
              href="https://wa.me/18009876543?text=Hello%20Selestia%20Rituel,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-all flex items-center space-x-3 text-xs font-medium text-gray-200"
            >
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span>WhatsApp Concierge</span>
            </a>

            <a
              href="mailto:hello@selestiarituel.com"
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/15 transition-all flex items-center space-x-3 text-xs font-medium text-gray-200"
            >
              <Mail className="w-4 h-4 text-selestia-gold" />
              <span>Direct Email Studio</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="relative group p-4 bg-selestia-black text-selestia-gold border border-selestia-gold rounded-full shadow-2xl hover:bg-selestia-gold hover:text-selestia-black transition-all duration-300 gold-glow focus:outline-none"
        aria-label="Open contact quick menu"
      >
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-selestia-gold rounded-full animate-ping opacity-75" />
        {expanded ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
