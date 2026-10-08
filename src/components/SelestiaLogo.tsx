import React from 'react';

interface SelestiaLogoProps {
  variant?: 'dark' | 'light' | 'gold';
  withSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const SelestiaLogo: React.FC<SelestiaLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const heights = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-18',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36',
  };

  const logoSrc = variant === 'light' 
    ? '/assets/official-logo-light.png' 
    : '/assets/official-logo.png';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="SELESTIA RITUEL — Creative & Digital Studio"
        className={`w-auto object-contain max-w-full transition-all duration-300 ${heights[size]}`}
      />
    </div>
  );
};
