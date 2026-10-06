import React from 'react';

interface SelestiaLogoProps {
  variant?: 'dark' | 'light' | 'gold';
  withSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const SelestiaLogo: React.FC<SelestiaLogoProps> = ({
  variant = 'dark',
  withSubtitle = true,
  size = 'md',
  className = '',
}) => {
  // Color configuration
  const textColor = variant === 'light' ? '#FFFFFF' : variant === 'gold' ? '#F9BD2A' : '#080808';
  const subtitleColor = variant === 'light' ? '#D4D4D4' : variant === 'gold' ? '#FFF4D2' : '#525252';
  const goldColor = '#F9BD2A';

  // Sizing configuration
  const heights = {
    sm: withSubtitle ? 32 : 24,
    md: withSubtitle ? 44 : 32,
    lg: withSubtitle ? 56 : 42,
    xl: withSubtitle ? 72 : 56,
  };

  const h = heights[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        height={h}
        viewBox="0 0 380 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full max-w-full transition-all duration-300"
      >
        {/* Arched Golden Orbit Line above logo */}
        <path
          d="M 120 42 C 160 10, 220 10, 260 42"
          stroke={goldColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* 4-pointed Sparkle Star resting on the arch right above the 'A' / 'R' gap */}
        <path
          d="M 235 12 Q 235 18 241 18 Q 235 18 235 24 Q 235 18 229 18 Q 235 18 235 12 Z"
          fill={goldColor}
        />

        {/* Wordmark: SELESTIA RITUEL */}
        <g fill={textColor}>
          <text
            x="190"
            y="48"
            textAnchor="middle"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="800"
            fontSize="31"
            letterSpacing="6.5"
          >
            SELESTIA RITUEL
          </text>
          
          {/* Golden Diamond sparkle replacement accent */}
          <polygon points="214,40 216.5,44 214,48 211.5,44" fill={goldColor} />
        </g>

        {/* Subtitle: CREATIVE & DIGITAL STUDIO with flanking gold dashes */}
        {withSubtitle && (
          <g>
            {/* Left gold dash */}
            <line x1="60" y1="72" x2="115" y2="72" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Subtitle text */}
            <text
              x="190"
              y="75"
              textAnchor="middle"
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="600"
              fontSize="10"
              letterSpacing="3.5"
              fill={subtitleColor}
            >
              CREATIVE &amp; DIGITAL STUDIO
            </text>

            {/* Right gold dash */}
            <line x1="265" y1="72" x2="320" y2="72" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};
