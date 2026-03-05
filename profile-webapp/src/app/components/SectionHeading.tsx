import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string; // For additional styling
  id?: string; // Optional ID for anchor linking
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = '', id }) => {
  return (
    <div id={id} className={`text-center max-w-prose mx-auto ${className}`}>
      <h2 className="text-h1 font-bold text-text-primary mb-4 leading-heading tracking-tight">{title}</h2>
      <p className="text-h3 text-text-secondary leading-body">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
