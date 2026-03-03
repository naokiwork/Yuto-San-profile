import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string; // For additional styling
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center max-w-prose mx-auto ${className}`}>
      <h2 className="text-h1 font-bold text-foreground mb-4 leading-heading tracking-tight">{title}</h2>
      <p className="text-h3 text-muted leading-body">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;