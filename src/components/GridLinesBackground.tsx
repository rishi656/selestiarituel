import React from 'react';

export const GridLinesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Subtle Clean Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 2. Soft Ambient Radial Gold Spotlights */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-selestia-gold/15 via-selestia-gold/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-selestia-gold/8 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};
