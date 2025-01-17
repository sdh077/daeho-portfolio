'use client';

import React, { useEffect, useState } from 'react';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 애니메이션 지속 시간과 일치

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`top-0 left-0 w-full h-full overflow-auto z-30 
        ${isAnimating ? 'fixed animate-slide-up' : 'block'
        }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
