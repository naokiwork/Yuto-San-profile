import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="text-center mb-12 md:mb-16">
      <h2 className="text-h1 font-bold text-foreground tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-h3 text-muted max-w-prose mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
