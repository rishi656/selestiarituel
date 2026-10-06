import React from 'react';

export const GridLinesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Architectural Precision Grid Lines with Gold Center Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_80%,transparent_100%)]" />

      {/* 2. Primary Top-Center Animated Gold Spotlight */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-selestia-gold/30 via-selestia-gold/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* 3. Floating Left Golden Studio Light Orb */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-selestia-gold/20 via-selestia-gold/5 to-transparent rounded-full blur-[120px] pointer-events-none animate-float-light" />

      {/* 4. Floating Right Warm Ambient Glow Orb */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-selestia-gold/18 via-selestia-gold/5 to-transparent rounded-full blur-[130px] pointer-events-none animate-float-light [animation-delay:4s]" />

      {/* 5. Subtle Slow-Rotating Cinematic Studio Light Ray Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-25 pointer-events-none animate-beam-rotate">
        <div className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(249,189,42,0.12)_45deg,transparent_90deg,rgba(249,189,42,0.15)_180deg,transparent_270deg)]" />
      </div>

      {/* 6. Hero Center Sparkle Aura Highlight */}
      <div className="absolute top-36 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-selestia-gold/10 rounded-full blur-[90px] pointer-events-none" />
    </div>
  );
};
