import React, { useState, useEffect } from 'react';

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden md:block fixed left-4 bottom-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div
        className="flex items-center justify-center w-24 h-24 text-3xl text-gray-300 rounded-full"
      >
        ↓
      </div>
    </div>
  );
};

export default ScrollArrow;
