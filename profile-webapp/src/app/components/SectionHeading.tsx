import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="mb-8 text-center">
      <h2 className="text-4xl font-bold text-text0 tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-text1 text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
