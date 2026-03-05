"use client";
import React from 'react';
import Reveal from './Reveal';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = 0, id }) => {
  return (
    <Reveal delay={delay} className="h-full">
      <div id={id} className={`bg-surface rounded-lg shadow-sm p-8 flex flex-col h-full hover:translate-y-[-2px] hover:shadow-md transition-all duration-200 ${className}`}>
        {children}
      </div>
    </Reveal>
  );
};

export default Card;
