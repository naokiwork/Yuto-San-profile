import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="mb-6">
      <h2 className="text-3xl font-bold text-text0 tracking-tight mb-2">{title}</h2>
      {subtitle && <p className="text-text1 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
