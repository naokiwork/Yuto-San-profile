import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-light mb-4">{title}</h2>
      {subtitle && <p className="text-light-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
