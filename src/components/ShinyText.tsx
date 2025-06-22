'use client'

import React, { useEffect, useState } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationDuration = `${speed}s`;
  const baseClasses = `relative bg-clip-text inline-block ${className}`;
  const animationClasses = isMounted && !disabled ? 'animate-shine' : '';

  return (
    <div
      className={`${baseClasses} ${animationClasses}`}
      style={{
        backgroundImage: 'linear-gradient(to right, #000000 20%, #ffffff 40%, #ffffff 60%, #000000 80%)',
        backgroundSize: '200% auto',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 2px rgba(255,255,255,0.3)',
        animationDuration: isMounted ? animationDuration : undefined,
      }}
    >
      <span 
        className="absolute inset-0 bg-clip-text text-white opacity-90" 
        style={{ WebkitTextStroke: '2px white' }}
      >
        {text}
      </span>
      {text}
    </div>
  );
};

export default ShinyText; 