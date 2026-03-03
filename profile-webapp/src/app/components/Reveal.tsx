"use client";

import React, { useState, useEffect } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia) {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const animationStyles = prefersReducedMotion
    ? {} // No animation
    : {
        opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(8px)', // Slightly less aggressive reveal
    transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`, // Adjusted duration
      };

  return <div ref={ref} style={animationStyles} className={className}>{children}</div>;
};

export default Reveal;
