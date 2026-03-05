"use client";
import React, { useEffect, useState, useMemo } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current; // Capture ref.current

    // Removed conditional setIsVisible based on prefersReducedMotion as it's handled in useState initialization

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [prefersReducedMotion]); // Added prefersReducedMotion as a dependency

  const animationStyles: React.CSSProperties = prefersReducedMotion
    ? {} // No animation
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)', // Slightly less aggressive reveal
        transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`, // Adjusted duration
      };

  return <div ref={ref} style={animationStyles} className={className}>{children}</div>;
};

export default Reveal;
