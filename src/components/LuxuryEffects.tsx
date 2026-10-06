import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small Gold Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-selestia-gold rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.1 }}
      />
      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-selestia-gold/40 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#F9BD2A' : 'rgba(249, 189, 42, 0.4)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.3 }}
      />
    </>
  );
};

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gold Ambient Spotlights */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-selestia-gold/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-gradient-to-bl from-selestia-gold/10 via-selestia-gold-light/20 to-transparent rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-selestia-gold/10 to-transparent rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
    </div>
  );
};
