import React from 'react';
import { motion } from 'framer-motion';

export const ClientMarquee: React.FC = () => {
  const clients = [
    { name: 'AETHEL LUXE', tag: 'Jewelry & Fine Art' },
    { name: 'SOLARIS ARCH', tag: 'Architecture Studio' },
    { name: 'LUMIN SKIN', tag: 'Clean Beauty Lab' },
    { name: 'CHRONOS', tag: 'Luxury Horology' },
    { name: 'VORTEX AI', tag: 'Enterprise SaaS' },
    { name: 'ELEVATE DIGITAL', tag: 'Growth Partners' },
    { name: 'MONARCH ESTATE', tag: 'Real Estate' },
    { name: 'VELOCITY MOTORS', tag: 'Automotive' }
  ];

  return (
    <div className="w-full overflow-hidden bg-selestia-black py-8 border-y border-white/10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-selestia-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-selestia-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex space-x-12 sm:space-x-20 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {[...clients, ...clients].map((client, idx) => (
          <div
            key={idx}
            className="inline-flex items-center space-x-3 text-gray-400 hover:text-selestia-gold transition-colors duration-300 cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-selestia-gold/40 group-hover:bg-selestia-gold group-hover:scale-150 transition-all" />
            <span className="text-xl sm:text-2xl font-bold font-display tracking-widest uppercase">
              {client.name}
            </span>
            <span className="text-[10px] font-mono text-gray-600 group-hover:text-selestia-gold-light uppercase tracking-wider">
              [{client.tag}]
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
